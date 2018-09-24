const Hapi = require('hapi');
const mongoose = require('mongoose');
require('dotenv').config();
const twitterAPI = require('node-twitter-api');
const Wreck = require('wreck');
let twitter;

const findLocation = async location => {
  let res;
  try {
    res = await Wreck.get(
      `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${location}&inputtype=textquery&fields=geometry&key=${
        process.env.GOOGLE_PLACES_API_KEY
      }
`,
    );
  } catch (err) {
    console.log('Error in findLocation', err);
  }
  return res.payload.toString();
};

const server = new Hapi.Server({
  port: 3000,
  host: 'localhost',
});

server.route({
  method: 'GET',
  path: '/tweets',
  config: {
    cors: {
      origin: ['*'],
      additionalHeaders: ['cache-control', 'x-requested-with'],
    },
  },
  handler: async (request, h) => {
    return await new Promise((resolve, reject) =>
      twitter.search(
        {
          q: '#chaosEngineering',
          result_type: 'recent',
        },
        null,
        null,
        (error, data, response) => (error ? reject(error) : resolve(data)),
      ),
    );
  },
});

server.method('findLocation', findLocation, {
  cache: {
    expiresIn: 600000,
    generateTimeout: 100,
  },
});

server.route({
  method: 'GET',
  path: '/places',
  config: {
    cors: {
      origin: ['*'],
      additionalHeaders: ['cache-control', 'x-requested-with'],
    },
  },
  handler: async (request, h) => {
    let location;
    try {
      location = server.methods.findLocation(request.url.search);
    } catch (ex) {
      console.log('error on handler', ex);
    }

    return location;
  },
});

(async () => {
  await server.register({plugin: require('h2o2')});
  await server.register({
    plugin: require('hapi-pino'),
    options: {
      prettyPrint: true,
      logEvents: ['response'],
    },
  });
  await server.start();
  twitter = new twitterAPI({
    consumerKey: process.env.TWITTER_CONSUMER_KEY,
    consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
    callback: 'oob',
  });

  console.log(`Server running here at: ${server.info.uri}`);
})();

process.on('unhandledRejection', err => {
  console.log(err);
  process.exit(1);
});
