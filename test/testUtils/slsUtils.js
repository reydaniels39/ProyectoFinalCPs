const { spawn } = require('child_process');
const killer = require('child_process');
os = require('os');

let slsOfflineProcess;

const finishLoading = () =>
  new Promise((resolve, reject) => {
    slsOfflineProcess.stdout.on('data', data => {
      if (data.includes('[HTTP] server ready: http://localhost:3000')) {
        console.log(`Serverless: Offline started with PID : ${slsOfflineProcess.pid}`);
        resolve('ok');
      }

      if (data.includes('address already in use')) {
        reject(data.toString().trim());
      }
    });

    slsOfflineProcess.stderr.on('data', errData => {
      console.log(`Error starting Serverless Offline:\n${errData}`);
      reject(errData);
    });
  });

function startSlsOffline() {
  const cmdArr = 'offline'.split(' ');
  slsOfflineProcess = spawn('sls', cmdArr, { shell: true, cwd: process.cwd() });

  return finishLoading();
}

function stopSlsOffline() {
  slsOfflineProcess.stdin.write('q\n');
  slsOfflineProcess.stdin.pause();
  if(os.platform() === 'win32' || os.platform() === 'win64'){
    killer.exec('taskkill /pid ' + slsOfflineProcess.pid + ' /T /F')
  }else{
    slsOfflineProcess.kill();
  }
  console.log('Serverless Offline stopped');
}

module.exports = {
  stopSlsOffline,
  startSlsOffline
};