const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');

// Function to calculate Fibonacci numbers (CPU-intensive task)
const fibonacci = (n) => {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
};

// Function to handle multiple concurrent worker threads
const runFibonacci = (num) => {
  return new Promise((resolve, reject) => {
    console.log(`Starting worker for Fibonacci(${num})`);
    const worker = new Worker(__filename, { workerData: num });

    // Listen for message (result) from the worker
    worker.on('message', resolve);

    // Error handling for the worker
    worker.on('error', (error) => {
      console.error(`Worker error for Fibonacci(${num}):`, error);
      reject(error);
    });

    // Exit handling for the worker
    worker.on('exit', (code) => {
      if (code !== 0) {
        console.error(`Worker exited with code ${code} for Fibonacci(${num})`);
        reject(new Error(`Worker stopped with exit code ${code}`));
      } else {
        console.log(`Worker completed Fibonacci(${num})`);
      }
    });
  });
};

// Main thread: Spawns worker threads if isMainThread is true
if (isMainThread) {
  // Running multiple Fibonacci calculations concurrently
  Promise.all([runFibonacci(30), runFibonacci(35), runFibonacci(40)])
    .then((results) => {
      console.log(`Fibonacci Results: ${results}`);
    })
    .catch((err) => console.error('Error processing Fibonacci calculation:', err));

} else {
  // Worker thread: Executes the Fibonacci calculation with workerData as input
  const result = fibonacci(workerData);
  parentPort.postMessage(result); // Send the result back to the main thread
}
