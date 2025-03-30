
// https://jsonplaceholder.typicode.com/todos


// { "2": "title of id 2", "3": "title against id 3" }
 

// async function apicall(){
//     let getData = await fetch("https://jsonplaceholder.typicode.com/todos")
//     let newData = await getData.json()

//     let obj ={}
//     newData.filter(x => x.completed === false ).forEach(x => obj[x.id] = x.title)
    
// console.log(obj)
// }


// apicall()


// async function apicall(){
//     let getData = await fetch("https://jsonplaceholder.typicode.com/todos")
//     let newData =  await getData.json()
 
//     return newData 
// }

// apicall().then(x => console.log(x))



// function aipCall() {
//     console.log("aipCall function started");

//     return new Promise(async (res, rej) => {
//         console.log("Inside Promise executor");

//         try {
//             console.log("Fetching data...");
//             let get = await fetch("https://jsonplaceholder.typicode.com/todos");
            
//             console.log("Data fetched, parsing JSON...");
//             let data = await get.json();
            
//             console.log("Data parsed:", );

//             if (data) {
//                 console.log("Data exists, resolving Promise");
//                 res(data); // Resolves the Promise with data
//             } else {
//                 console.log("No data found, rejecting Promise");
//                 rej("No Data Found"); // Rejects if no data found
//             }
//         } catch (error) {
//             console.log("Error occurred, rejecting Promise with error:", error);
//             rej(error); // Rejects if there's a fetch or parsing error
//         }
//     });
// }

// let a = aipCall();
// console.log("AipCall result (initially a Promise):", a);

// a.then(data => {
//     console.log("Promise resolved with data:", );
// }).catch(error => {
//     console.log("Promise rejected with error:", error);
// });

const https = require("https");

function fetchData() {
    const options = {
        hostname: "jsonplaceholder.typicode.com", // Correct hostname
        path: "/todos", // Correct path
        method: "GET",
    };


    const req = https.request(options, (res) => {
        let data = "";

        // Collect data chunks
        res.on("data", (chunk) => {
            data += chunk;
        });

        // Parse data when the response ends
        res.on("end", () => {
            try {
                const parsedData = JSON.parse(data);
                console.log("parsedData ====>",data);
            } catch (error) {
                console.error("Error parsing JSON:", error);
            }
        });
    });

    req.on("error", (error) => {
        console.error("Error making API call:", error);
    });

    req.end(); // End the request
}

fetchData();



// function fetchData() {
//     const xhr = new XMLHttpRequest();
//     xhr.open("GET", "https://jsonplaceholder.typicode.com/todos", true);

//     xhr.onload = function () {
//         if (xhr.status === 200) {
//             const data = JSON.parse(xhr.responseText);
//             console.log(data);
//         } else {
//             console.error(`Error: ${xhr.status}`);
//         }
//     };

//     xhr.onerror = function () {
//         console.error("Request failed");
//     };

//     xhr.send();
// }

// fetchData();

