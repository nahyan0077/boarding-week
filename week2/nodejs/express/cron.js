const cron = require('node-cron');

const cronjob =  cron.schedule('* * * * * *', () => {
    console.log("cron running....");
})


const corn1 = cron.schedule("* * * * * *", () => {
    console.log("cron 1 is running");
    
})

module.exports = {cronjob, corn1}