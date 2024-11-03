// const { parentPort, workerData } = require('worker_threads');
// const fs = require('fs').promises;

// async function copyFile(source, destination) {
//     try {
//         const data = await fs.readFile(source, 'utf8');
//         await fs.writeFile(destination, data);
//         parentPort.postMessage({ success: true, message: 'Data successfully copied to destination file.' });
//     } catch (error) {
//         parentPort.postMessage({ success: false, message: `Error: ${error.message}` });
//     }
// }

// // Start the copy operation using the provided workerData
// copyFile(workerData.source, workerData.destination);


const fs = require('fs');
const { workerData, parentPort } = require('worker_threads');

const { sourceFile, destinationFile } = workerData;

// Function to read from source and write to destination
function readAndWriteFiles() {
    try {
        // Read the content of the source file
        const data = fs.readFileSync(sourceFile, 'utf8');

        // Write the content to the destination file
        fs.writeFileSync(destinationFile, data, { encoding: 'utf8' });
        
        // Notify the parent thread about the success
        parentPort.postMessage('Data has been copied from source.txt to destination.txt.');
    } catch (error) {
        parentPort.postMessage(`Error: ${error.message}`);
    }
}

// Execute the function
readAndWriteFiles();
