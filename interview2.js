// const i = 5

// function cehc(){
//     console.log(i);
//     // if(true){
//         // var i = 5

//     // }
// }


function cehc() {
    var i; // Hoisted declaration
    console.log(i); // `i` is declared but not initialized, so it's `undefined`.
    if (true) {
        i = 5; // Initialization happens here.
    }
}


cehc()


console.log('1');
setTimeout(()=>{
    console.log("2")
},0);
Promise.resolve(()=> "3").then(()=> console.log('3'))
console.log('4')
