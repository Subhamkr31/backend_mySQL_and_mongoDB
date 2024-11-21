
 
//  db.employee.aggreaget([
//     {
//         $group:{
//             _id:{email :"$email"},
//             uniquiId:{$first:"$_id"},
//             count:{$sum: 1}
//         }
//     },
//     {
//         $match :{count :{$gte:1}}
//     }
// ])

let str = 'sdfd32fe3r438sf494vssg3498dfs21';


function SumDigit(str){

    let sum = 0

    let alp ="abcdefghijklmnopqrstuvwxyz"

    for(let i = 0 ; i < str.length; i++){
        // console.log(typeof str[i])

        if(!alp.includes(str[i])){
            // console.log(true)
            sum = sum + Number(str[i])
        }
        
        // else{
        //     console.log(false)
        //     sum = sum + Number(str[i])
        // }

    }
    console.log("sum",sum)

}


SumDigit(str)


let arr = 5;
console.log(arr == 5);
console.log(typeof(null));
console.log(typeof([]));
console.log(typeof(undefined))

let =  fs.readFile('./text', ()=>{})
