const {TwitterApi}= require('twitter-api-v2');


const client = new TwitterApi({
    appKey: process.env.API_KEY,
    appSecret: process.env.API_SECRET,
    accessToken: process.env.ACCESS_TOKEN,
    accessSecret: process.env.ACCESS_SECRET
  });

// Read+Write level
const rwClient = client.readWrite;

module.exports=rwClient;