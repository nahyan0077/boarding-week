const { exec } = require('child_process');


exec('ls ', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`Stderr: ${stderr}`);
  }
  if (stdout) {
    console.log(`Stdout:\n${stdout}`);
  }
});
