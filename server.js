const Hapi = require('hapi');
const mongoose = require('mongoose');
require('dotenv').config();
const twitterAPI = require('node-twitter-api');
const Wreck = require('wreck');
let twitter;

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

const findLocation = async location =>
  await Wreck.get(`https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${location}&inputtype=textquery&fields=geometry&key=${
    process.env.GOOGLE_PLACES_API_KEY
  }
`);

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
    console.log('REQUEST STUFF', request);
    let test;
    try {
      test = await findLocation('Sydney, Australia');
    } catch (ex) {
      console.log(ex);
    }
    return test.payload.toString();
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
