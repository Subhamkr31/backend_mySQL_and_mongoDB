//  let is block  scope

// function closure() {
//     // let i = 2                             
//     for(let i = 1 ; i <= 5 ;i++){               // let  create new copy of every  function with new variable 
//         setTimeout(() => {
//             console.log(i)
//         }, i*1000)

//     }
// }

// closure()

//  var is functional scope    

//  if not use function then its refer to  lexical  function with  reference variable 

// function closure() {
    
//     for(var i = 1 ; i <= 5 ;i++){                        // var create new copy of every function with new variable 
//         function newFunc(i){
//             setTimeout(() => {
//                 console.log(i)
//             }, i*1000)
//         }
//         newFunc(i)
//     }
// }

// closure()



function closure1(){
    var a = 2;
    
    function y (b= 5){
        return a + b
    }
    a = 200
    console.log("first")
    return y
}


let  b = closure1()()


console.log(b)