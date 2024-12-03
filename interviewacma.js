// // How do you remove all but the first occurrence of $ from a given string?
// let a = "like for example $  you don't have $  network $  access";

// // expected "like for example $  you don't have  network   access";

// function removeOccurence(a){
    
//     let str = ''
//     let check = {}
    
//     for(let  i= 0 ; i < a.length ; i++){
//         // if(check.length == 0 ){
//             if(a[i] == "$"){
//                 check[i] = "$"
//             } 
//             // str = str + a[i]
//         // }else{
//             // if(check[0] === "$"){
//             //     break;
//             // }
//             // str = str + a[i]
//         // }
//     }
    
     
    
//     console.log(check)
//     console.log(str)
// }


// removeOccurence(a)






function removeOccurence(a) {
    let firstDollarFound = false; // To track if the first $ has been found
    let result = ""; // The final string

    for (let i = 0; i < a.length; i++) {
        if (a[i] === "$") {
            if (!firstDollarFound) {
                // Keep the first $
                firstDollarFound = true;
                result += "$";
            } else {
                // Ignore subsequent $
                continue;
            }
        } else {
            // Add other characters to the result
            result += a[i];
        }
    }

    return result;
}

// Example Usage
let a = "like for example $  you don't have $  network $  access";
let output = removeOccurence(a);
console.log(output);
// Expected: "like for example $  you don't have  network   access"






