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
    return await Wreck(`https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Museum%20of%20Contemporary%20Art%20Australia&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&key=${
      process.env.GOOGLE
    }
`);
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
