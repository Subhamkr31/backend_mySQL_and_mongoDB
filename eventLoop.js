// console.log("first")

// setTimeout(()=>{
//     console.log("set timeout")
// },1000)

// fetch("https://jsonplaceholder.typicode.com/todos").then(function cbf(){
//     console.log("net flix")
// })


// console.log("end")

// const fs = require('fs');

// (function lib() {
//     function first() {
//         setTimeout(()=>{console.log("timmer")},100)
//         process.nextTick(()=> console.log("tick"))
//         setImmediate(()=>console.log("inmmediate"))

//         console.log("first")
//         second();
//     }


//     function second() {
//         console.log("second");
//         third();
//     }

//     function third() {
//         console.log("third")
//         setTimeout(()=>{console.log("timmer2")},0)
//         // console.trace()
        
//     }

//     // first();
//     fs.readFile('./destination.txt',() => first())
// })() ;     // IIFE
 


const fs = require('fs');

(function lib() {
    function first() {
        setTimeout(()=>{console.trace()},100)
        process.nextTick(()=> console.trace())
        setImmediate(()=>console.trace())

        console.log("first")
        second();
    }


    function second() {
        console.log("second");
        third();
    }

    function third() {
        console.log("third")
        setTimeout(()=>{console.log("timmer2")},0)
        // console.trace()
        
    }

    // first();
    fs.readFile('./destination.txt',() => first())
})() ;     // IIFE
 