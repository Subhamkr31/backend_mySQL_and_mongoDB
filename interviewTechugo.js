

// async function promisefuc(){
//     await Promise.all([query("2 sec"),query("2 sec")]    )
// }


// promisefuc().then()

// Rajat Paliwal
// 6:21 PM


// table 1 -> student ->
// _id ,name, age , dob


// table 2 -> academic  ->
// studentId , subject , marks


// student table -> (example)
// id        name       age          dob
// 1         harch        25       2024/02/25

// academic table -> (example)
// id    studentId     subject          marks
// 1           1           english            30
// 2           1           match             50
// 3           1           chemistry        80
  

// MongoDB Query
// For a Particular User

// To fetch a single student's details along with their academic subjects and marks:

// db.students.aggregate([
//     {
//         $lookup: {
//             from: "academics", // Collection to join
//             localField: "_id", // Local field in `students`
//             foreignField: "studentId", // Foreign field in `academics`
//             as: "academicDetails", // Output array field
//         },
//     },
//     {
//         $match: { _id: 1 }, // Filter for a particular student
//     },
//     {
//         $project: {
//             _id: 0,
//             name: 1,
//             age: 1,
//             dob: 1,
//             academicDetails: {
//                 $map: {
//                     input: "$academicDetails",
//                     as: "details",
//                     in: {
//                         subject: "$$details.subject",
//                         marks: "$$details.marks",
//                     },
//                 },
//             },
//         },
//     },
// ]);

// For Admin (All Students)

// To fetch all students with their academic details:

// db.students.aggregate([
//     {
//         $lookup: {
//             from: "academics",
//             localField: "_id",
//             foreignField: "studentId",
//             as: "academicDetails",
//         },
//     },
//     {
//         $project: {
//             _id: 0,
//             name: 1,
//             age: 1,
//             dob: 1,
//             academicDetails: {
//                 $map: {
//                     input: "$academicDetails",
//                     as: "details",
//                     in: {
//                         subject: "$$details.subject",
//                         marks: "$$details.marks",
//                     },
//                 },
//             },
//         },
//     },
// ]);

// SQL Query
// For a Particular User

// To fetch details of a specific student:

// SELECT 
//     s.name, 
//     s.age, 
//     s.dob,
//     JSON_ARRAYAGG(JSON_OBJECT('subject', a.subject, 'marks', a.marks)) AS academicDetails
// FROM 
//     student s
// LEFT JOIN 
//     academic a
// ON 
//     s.id = a.studentId
// WHERE 
//     s.id = 1 -- Filter for a particular user
// GROUP BY 
//     s.id;

// For Admin (All Students)

// To fetch all students and their academic details:

// SELECT 
//     s.name, 
//     s.age, 
//     s.dob,
//     JSON_ARRAYAGG(JSON_OBJECT('subject', a.subject, 'marks', a.marks)) AS academicDetails
// FROM 
//     student s
// LEFT JOIN 
//     academic a
// ON 
//     s.id = a.studentId
// GROUP BY 
//     s.id;

// Output

// For Particular User:

// {
//     "name": "harch",
//     "age": 25,
//     "dob": "2024-02-25",
//     "academicDetails": [
//         { "subject": "math", "marks": 50 },
//         { "subject": "english", "marks": 30 },
//         { "subject": "chemistry", "marks": 80 }
//     ]
// }

// For Admin:

// [
//     {
//         "name": "harch",
//         "age": 25,
//         "dob": "2024-02-25",
//         "academicDetails": [
//             { "subject": "math", "marks": 50 },
//             { "subject": "english", "marks": 30 },
//             { "subject": "chemistry", "marks": 80 }
//         ]
//     },
//     {
//         "name": "another_student",
//         "age": 22,
//         "dob": "2023-01-01",
//         "academicDetails": [
//             { "subject": "math", "marks": 40 },
//             { "subject": "english", "marks": 50 }
//         ]
//     }
// ]



// write a query which first filter my data and i want these in return 
// name, age , dob, [{subject:"math",marks : 20}, {subject:"english",marks : 40}]

// for particular user ->
// {name, age , dob, [{subject:"math",marks : 20}, {subject:"english",marks : 40}]}

// for admin ->
// [{name, age , dob, [{subject:"math",marks : 20}, {subject:"english",marks : 40}]},...etc]


let arr = [3,6,7,1,2,0,-2,-1,-3,,9999,87,56,77]
// find the 2nd least or lowest value in this array without using any predefined methods and you can use only one loop


function CheckSecondLeast(arr){
    
    let  min = Infinity;
    let secondleast = null;
    
    
    for(let  i = 0 ; i < arr.length; i++ ){
        if(min > arr[i]){
           secondleast = min
            min = arr[i]
        }
        
    }
        
    console.log(secondleast)
    
}



CheckSecondLeast(arr)
