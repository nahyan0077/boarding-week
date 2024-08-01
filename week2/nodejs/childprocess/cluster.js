const cluster = require('cluster');
const os = require('os');

const cpus = os.cpus().length

console.log(cluster);

console.log(cpus);