// const obj = [
//     {
//         a:"priya",
//         b :{
//             surname : "karn"
//         }
//     }



// ]


// const [name] = obj;
// console.log(obj[0].a)


// const fname = "";
// console.log(fname.trim())

// const name = "priya";
// console.log(name.includes("k"))

// const users = [
//     { id: 1, name: 'Alice' },
//     { id: 2, name: 'Bob' },
//     { id: 3, name: 'Charlie' }
//   ];

//   const res = users.find((e)=>{
//     return e;
//   })

//   console.log(res)


// Day 38:-

// const calculateDaysBetweenDates = (Date1,Date2)=>{
//     return(Math.abs(new Date(Date1).getDate()- new Date(Date2).getDate()));
// }

// console.log(calculateDaysBetweenDates("2024-01-01","2024-01-31"));  //output 30



// console.log(new Date().toLocaleDateString())

// // console.log(new Date().toString())
// // console.log(Date.now())
// console.log(new Date().toLocaleString()) //time and date both show
// console.log(new Date().getDate())



// Day 39:-

// const calculateAge = (DOB)=>{
//    const todaydate = new Date().getDate();
//    const todayMonth = new Date().getMonth();
//    const birthDate = new Date(DOB).getDate();
//    const birthMonth = new Date(DOB).getMonth();

//   if(todayMonth+1<=birthMonth+1 && todaydate<birthDate){
//     return Math.abs(new Date(DOB).getFullYear()-new Date().getFullYear())-1
//   }else{
//     return Math.abs(new Date(DOB).getFullYear()-new Date().getFullYear())
//   }
// }

// console.log(calculateAge("2007-07-07")); 
// console.log(calculateAge("1990-02-15"));  
// 2024-05-11  2024-06-15



// Day 40:-


const generateBarChart = (arr)=>{
  
//  let stararr = []
//    for(var i=0;i<arr.length;i++){
//     let star = "";
//     for(var j=1;j<=arr[i];j++){
//         star = star + "*";
//     }
//     stararr.push(star);
//    }
// //    [ '*****', '***', '*********', '**' ]

// const obj = {}
// for(ele in stararr){
//    (obj[Number(ele)+1]) = stararr[ele];
// }
// return obj; 



// const starArr = arr.map((e,ind)=>{
//     let star = "";
//     for(let number=1; number<=e;number++){
//         star = star + "*"
//     }
//     return ind+1 + ":" + star;
// })
// return starArr.join("\n");

// or using method:-

const starArr = arr.map((e,i)=>{
    return i+1 + ":" + "*".repeat(e);
}).join("\n");
return starArr

}

// `console.log(generateBarChart([5,3,9,2]));`
// output:-
// 1 : *****
// 2 : ***
// 3 : *********
// 4 : **






// const name = "priya";
// console.log(name.slice(0,1))
// console.log(name.substr(0,1))

// const content = (text)=>{
   
//     if(text.length>=10){
//         return text.substr(0,10)+"..."
//     }else{
//         return text;
//     }
// }

// console.log(content("my name is priya karn here i want to create project"));


const thapa = [
    {
        name:["priya"]
    }
]

thapa[0].name.push("ankita");
console.log(thapa)