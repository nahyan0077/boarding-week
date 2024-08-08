const cron = require('node-cron');

const cronjob =  cron.schedule('* * * * * *', () => {
    console.log("cron running....");
    
})

module.exports = {cronjob}