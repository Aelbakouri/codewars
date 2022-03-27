'use strict'

// function lovefunc(flower1, flower2){

//     // if(flower1.toString() !==flower2.toString()){return false;}
//     // else{return true;}
// return (flower1.toString() !==flower2.toString())

// }


//   console.log(lovefunc(607,525))

// function partlist(arr) {
// const list = [];
// for (var i = 1; i <= arr.length; i++) {
// list.push( arr.slice(0,i) +'     '+arr.slice(i,arr.length));

// }
// return list;
// return arr.slice(0,1).toString().split(',').join(' ') +'\n'+arr.slice(1,arr.length).toString().split(',').join(' ');
// }


// function gradingStudents(grades) {
             
//      if(grades<5){return null}

//      // Write your code here
     
//      let g= Math.round(grades/10)*10
//      if(grades>g){
//          g=g+5
//      }
//      if(grades<40){
//          return g;
//      }
 
//      if((g-grades)<3){
 
//          return g
//      }else{return grades}
     
    

// }4
// 73
// 67
// 38
// 33
// console.log(gradingStudents(4))
// console.log(gradingStudents(73))
// console.log(gradingStudents(67))
// console.log(gradingStudents(38))
// console.log(gradingStudents(33))


// function sockMerchant(n, arr) {
//     // Write your code here
//     // return ar
//     // const arr = [1, 5, 2, 1, 6, 2, 2, 9];
//     const countPairs = (arr = []) => {
//        const { length } = arr;
//        let count = 0;
//     //    console.log(length)
//        // making a shallow copy so that the original array remains unaltered
//        const copy = arr.slice();
//        console.log(copy.sort((a, b) =>  a-b))
//        copy.sort((a, b) => a - b);
//        for(let i = 0; i < length; i++){
//           if(copy[i] === copy[i + 1]){
//              i++;

//              count++;
//           };
//        };
//        return count;
//     };
//     return countPairs(arr);
// }

// console.log(sockMerchant(9,[10, 20, 20, 10, 10, 30, 50, 10, 20]))






// function countingValleys(steps, path) {
//     let valleys=0
//     let altitude=0
//     for(let i=0;i<steps;i++){
//       // if path is 'D' we decrement the altitide
//       if(path[i]=='D'){
//         altitude--
//       }else{
//         // this means a down and up movement suggesting a valley passed
//         if(altitude == -1){
//           valleys++
//         }
//         // else we increment the altititude
//         altitude++
//       }
//     }
//     return valleys
// }
// console.log(partlist(["az", "toto", "picaro", "zone", "kiwi"]))

// function getAge(inputString){
  
//   return Number(inputString.split('')[0])
//   }
//   console.log(getAge('1 year old'))

// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//   return distanceToPump<=fuelLeft*mpg
// };

// console.log(zeroFuel(50,25,2))

// function aspectRatio(x,y){
//   return [Math.ceil(x*16/9),y]
//   }
//   console.log(aspectRatio(640,480))
// ***********************************************************************************************************************************************
  // ####################################################################################################################################
  // ***********************************************************************************************************************************************
// 01: 
