require('dotenv').config();
const rwClient=require('./config/twitterClient');
var CronJob = require('cron').CronJob;
let num=11;
const tweet= async ()=>{
    try {
       await rwClient.v2.tweet(`test ${num} -My tweet text with API!`)
        num++;
    } catch (error) {
        console.log('err in tweet',error);
    }
}

var job = new CronJob(
	'* * * * * *',
    // '* * * * * *' are second min HR DD MM YY add your req time in placr of '*' , current calue=every second job will run
	function() {
		console.log('You will see this message every second');
        tweet();
	},
	tweet(),
	true,
	'America/Los_Angeles'
);
// job();
//tweet
setTimeout(() => {
    job.stop();
    console.log('job stopped');
}, 3000);