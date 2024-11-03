const { parentPort, workerData } = require('worker_threads');

// Perform a computation (e.g., factorial)
function computeFactorial(num) {
  if (num <= 1) return 1;
  return num * computeFactorial(num - 1);
}

const result = computeFactorial(workerData.num);
parentPort.postMessage(result); // Send result back to the main thread
