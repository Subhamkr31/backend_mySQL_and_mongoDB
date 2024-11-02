function pass_func(num) {
    return num * num
}


function calculateSquare(val, callback) {

    return callback(val)
}


let result = calculateSquare(10, pass_func)

console.log("result", result)



const { rejects } = require('assert')
let os = require('os')
const { resolve } = require('path')

console.log(os.cpus().length)

setTimeout(() => {
    console.log('Timeout');
}, 0);

setImmediate(() => {
    console.log('Immediate');
});

process.nextTick(() => {
    console.log('Next Tick');
});


// const  myPromise = function () {
//   return  new Promise((resolve, rejects)=> {

//         let  check = false;
//         if(check){
//             resolve("promise resolved =====> 😀")
//         }else{
//             rejects("promise rejected =====> 😥")
//         }
// })
// }



// myPromise().then((x)=> console.log(x)).catch(e => console.log(e))






const myPromise = function () {
    return new Promise((resolve, rejects) => {
        setTimeout(() => {
            const randomNumber = Math.floor(Math.random() * 10)
            console.log("randomNumber",randomNumber)
            if (randomNumber > 5) {
                resolve("Success ! random number ",)
            } else {
                rejects("Error ! Rndom number",randomNumber)
            }
        }, 1000) 
    })
}
  

myPromise().then((x) => console.log(x)).catch(e => console.log(e))


process.nextTick(() => {
    console.log('This runs immediately after the current operation.');
});

console.log('This runs first, before process.nextTick callback.');
      