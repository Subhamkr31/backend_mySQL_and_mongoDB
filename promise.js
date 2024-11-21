// const resolvedPromise = Promise.resolve("Success!");
// resolvedPromise.then((value) => console.log(value)); // Logs: "Success!"


// const rejectedPromise = Promise.reject("Error occurred!");
// rejectedPromise.catch((error) => console.error(error)); // Logs: "Error occurred!"


// const p1 = Promise.resolve(10);
// const p2 = Promise.resolve(20);
// const p3 = Promise.resolve(30);

// Promise.all([p1, p2, p3])
//     .then((results) => console.log(results)) // Logs: [10, 20, 30]
//     .catch((error) => console.error(error));

// const p1 = Promise.resolve("Success");
// const p2 = Promise.reject("Failure");
// const p3 = Promise.resolve("Another Success");

// Promise.allSettled([p1, p2, p3]).then((results) => console.log(results));
// Logs:
// [  
//   { status: 'fulfilled', value: 'Success' },
//   { status: 'rejected', reason: 'Failure' },
//   { status: 'fulfilled', value: 'Another Success' }
// ]


// const p1 = new Promise((resolve) => setTimeout(resolve, 100, "First"));
// const p2 = new Promise((resolve) => setTimeout(resolve, 200, "Second"));

// Promise.race([p1, p2]).then((result) => console.log(result)); // Logs: "First"



// const p1 = Promise.reject("Error 1");
// const p2 = Promise.reject("Error 2");
// const p3 = Promise.resolve("Success");

// Promise.any([p1, p2, p3])
//     .then((result) => console.log(result)) // Logs: "Success"
//     .catch((error) => console.error(error)); // AggregateError if all promises fail



//     const promise = new Promise((resolve) => resolve("Hello!"));
// promise.then((value) => console.log(value)); // Logs: "Hello!"


// const promise = new Promise((_, reject) => reject("Error occurred!"));
// promise.catch((error) => console.error(error)); // Logs: "Error occurred!"



// const promise = new Promise((resolve) => resolve("Done!"));

// promise
//     .then((value) => console.log(value)) // Logs: "Done!"
//     .finally(() => console.log("Cleanup actions")); // Logs: "Cleanup actions"




async function handlePromises() {
    try {
        const p1 = Promise.resolve(10);
        const p2 = Promise.resolve(20);
        const p3 = Promise.resolve(30);

        const results = await Promise.all([p1, p2, p3]);
        console.log(results); // Logs: [10, 20, 30]
    } catch (error) {
        console.error(error); // Logs any error if one of the promises rejects
    }
}

handlePromises();

async function handlePromisesWithMap() {
    try {
        const values = [10, 20, 30];

        // Map each value to a resolved promise
        const promises = values.map((value) =>  Promise.resolve(value));

        // Wait for all promises to resolve
        const results =  await Promise.all(promises);

        console.log(results); // Logs: [10, 20, 30]
    } catch (error) {
        console.error(error); // Logs any error if one of the promises rejects
    }
}

handlePromisesWithMap();

