
//task1.1//

// function findLargerNumber(a, b) {
//   if (a > b) {
//       console.log(a + " is larger.");
//   } else if (b > a) {
//       console.log(b + " is larger.");}
      
//       else {
//       console.log("Both numbers are equal.");
//   }
// }
// findLargerNumber(5,6) 


//task1.2//

// let number1 = 3;
// let number2 = -7;
// let number3 = 2;

//   function productsign(a, b, c) {
//     let product = a + b - c;
  
//     if (product > 0) {
//       alert(" sign is +");
//     } else if (product < 0) {
//       alert(" sign is -");
//     } else {
//       alert(" product is 0");
//     }
//   }
//   productsign(number1, number2, number3);



//task1.3//
//sortnumbers(0, -1, 4);
// function sortnumbers(a, b, c) {
//   let arr = [a, b, c];
//   arr.sort(function(x, y) {
//       return y - x;
//   });
//   alert(arr.join(", "));
// }






//task1.4//
// largestnumber(-5, -2, -6, 0, -1);
// function largestnumber(a, b, c, d, e) {
//   let largest = a;
  
//   if (b > largest) {
//       largest = b;
//   }
//   if (c > largest) {
//       largest = c;
//   }
//   if (d > largest) {
//       largest = d;
//   }
//   if (e > largest) {
//       largest = e;
//   }
  
//   alert( largest);
// }


 
//task2.1//

// Write a JavaScript program that returns rate as text
// less than 50 return ==> Fail
// equal or between 50 and 59 ===> E
// equal or between 60 and 69 ===> D
// equal or between 70 and 79 ===> C
// equal or between 80 and 89 ===> B
// equal or between 90 and 100 ===> A
// */

// function Rate(score) {
//   let rate;

//   if (score < 50) {
//       rate = "Fail";
//   } else if (score >= 50 && score <= 59) {
//       rate = "E";
//   } else if (score >= 60 && score <= 69) {
//       rate = "D";
//   } else if (score >= 70 && score <= 79) {
//       rate = "C";
//   } else if (score >= 80 && score <= 89) {
//       rate = "B";
//   } else if (score >= 90 && score <= 100) {
//       rate = "A";
//   } else {
//       rate = "Invalid score";
//   }

//   return rate;
// }

// console.log(Rate(45)); 
// console.log(Rate(55)); 
// console.log(Rate(65)); 
// console.log(Rate(75)); 
// console.log(Rate(85)); 
// console.log(Rate(95)); 
// console.log(Rate(105)); 





//task3.1//

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }


//task3.2//

// var arr = [13, 23, 12, 45, 22, 48, 66, 100];

// for (let i = 0; i <= 8; i++) {
//     if (arr[i] % 2 === 0) {
//         console.log(arr[i]);
//     }
// }

//task3.3//

// let array;
// for ( let i = 1 ; i <= 8 ; i++)
//     { array = ''; 
//     for (let m = 1 ; m <= i ; m++ ){
//        array = array+m ;
//     }
//     console.log (array);
// }

//task3.4//

// let huh = "don’t know why";

// if (huh.includes("y")) {
//     console.log("yes");
// } else {
//     console.log("no");
// }