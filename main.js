const { Worker } = require('worker_threads');

function runWorker(path, workerData) {
  return new Promise((resolve, reject) => {
    const worker = new Worker(path, { workerData });
    worker.on('message', resolve);
    worker.on('error', reject);
    worker.on('exit', (code) => {
      if (code !== 0) {
        reject(new Error(`Worker stopped with exit code ${code}`));
      }
    });
  });
}

runWorker('./worker.js', { num: 2 })
  .then(result => console.log(`Result from worker: ${result}`))
  .catch(err => console.error(err));

