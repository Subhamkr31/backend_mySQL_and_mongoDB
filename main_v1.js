// const { Worker } = require('worker_threads');
// const path = require('path');

// // Define file paths
// const sourceFilePath = path.join(__dirname, 'source.txt');
// const destinationFilePath = path.join(__dirname, 'destination.txt');

// // Function to create a worker thread
// function runService() {
//     return new Promise((resolve, reject) => {
//         const worker = new Worker(path.join(__dirname, 'fileWorker.js'), {
//             workerData: {
//                 source: sourceFilePath,
//                 destination: destinationFilePath
//             }
//         });

//         // Listen for messages from the worker
//         worker.on('message', (message) => {
//             if (message.success) {
//                 resolve(message.message);
//             } else {
//                 reject(message.message);
//             }
//         });

//         // Handle errors
//         worker.on('error', reject);
//         worker.on('exit', (code) => {
//             if (code !== 0) {
//                 reject(new Error(`Worker stopped with exit code ${code}`));
//             }
//         });
//     });
// }

// // Start the worker thread and handle the result
// runService()
//     .then(message => console.log(message))
//     .catch(error => console.error(error));



const fs = require('fs');
const path = require('path');
const { Worker } = require('worker_threads');

const sourceFile = path.join(__dirname, 'source.txt');
const destinationFile = path.join(__dirname, 'destination.txt');

// Function to ensure source.txt exists
function ensureSourceFile() {
    if (!fs.existsSync(sourceFile)) {
        fs.writeFileSync(sourceFile, 'This is a default content for source.txt.', { encoding: 'utf8' });
        console.log('source.txt was created with default content.');
    }
}

// Ensure source file exists
ensureSourceFile();

// Create a worker to read from source.txt and write to destination.txt
const worker = new Worker('./fileWorker.js', {
    workerData: {
        sourceFile,
        destinationFile,
    },
});

worker.on('message', (msg) => {
    console.log('Message from worker:', msg);
});

worker.on('error', (error) => {
    console.error('Error from worker:', error);
});

worker.on('exit', (code) => {
    if (code !== 0) {
        console.error(`Worker stopped with exit code ${code}`);
    } else {
        console.log('File writing completed successfully.');
    }
});
