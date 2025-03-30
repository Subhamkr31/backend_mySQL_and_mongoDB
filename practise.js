// let   block scope      
//  var function al scope
// const   block scope      

// let a 
// console.log(a)

// function check(){
    
//     console.log(a)
//     if(true){
//         let a = 2
//     }

// }

// check()

// Using let:

let a = 5;

function check(){
    console.log(a);  // Outputs 5
        
    if (true) {
        let a = 2;   // Declares a new `a` in this block scope
    }
}
check();

// Explanation:

//     When you declare let a = 5; outside the function, it is in the global scope.
//     Inside the function check, console.log(a); refers to the global a, since no other a is declared in the function scope.
//     Inside the if block, let a = 2; declares a new a that is only accessible within the block due to let's block-level scope. This does not affect the a outside the block.
//     Therefore, console.log(a); outputs 5, the value of the global a.

// Using var:

// var a = 5;

// function check(){
//     console.log(a);  // Outputs undefined due to hoisting
        
//     if (true) {
//         var a = 2;   // Declares `a` in the function scope (not block-scoped)
//     }
// }
// check();

// Explanation:

//     var a = 5; declares a in the global scope.
//     Inside check, the line var a = 2; within the if block is actually hoisted to the top of the function scope. This means a is redeclared at the top of check, but it has no value assigned at this point, so it is undefined.
//     Because of this hoisting, console.log(a); refers to the function-scoped a, which is hoisted but not yet initialized. Therefore, it outputs undefined.
//     Then, when a = 2; is assigned in the if block, it sets the value of a for the entire check function scope. However, by this point, the initial console.log(a); has already executed.


// Have access to the arguments object,
// function sum() {
//     console.log(arguments); // [1, 2, 3]
//   }
//   sum(1, 2, 3);

// Arrow Functions: Do not have their own arguments object
//   const sum = () => {
//     console.log(arguments); // Error: arguments is not defined
//   };
//   sum(1, 2, 3)

  const sum = (...args) => {
    console.log(args); // [1, 2, 3]
  };
  sum(1, 2, 3);
  


  const jsonString = '{"title": "Learn JSON", "completed": true}';
const jsonObject = JSON.parse(jsonString);
console.log(jsonObject.title); // Output: Learn JSON


// console.log(ab)
// var ab = 2


// console.log(hoistedLet); // ReferenceError: Cannot access 'hoistedLet' before initialization
// let hoistedLet = "I am in TDZ!";


// Function hoisting
add(5, 3); // Output: 8

function add(a, b) {
    return a + b;
}

// Variable hoisting
console.log(x); // Output: undefined
var x = 10;

// let/const hoisting
// console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 20;


// console.log "Hello World"; // SyntaxError: Unexpected string
