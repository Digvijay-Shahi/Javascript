//Basics

// console.log(null +1)
// console.log(true +false)
// console.log(typeof 123n)

// let a = []
// console.log(typeof a)


//Loops 




// let  i= 1;
// while(i<=31){
//     console.log(i)
//     i++
// }


// for (let i =1; i<11;i++){
//     console.log(i)
// }


// let i = 10
// while(i>0){
//     console.log(i)
//     i--
// }


// for (let i= 1; i<= 20 ; i++){
//     if(i%2==0){
//         console.log(i)
//     }
// }

// let i =1
// while (i <= 15){
//     if(i % 2 != 0){
//     console.log(i)
// }
// i++
// }



// for (let i = 1;i <11 ; i++){
//     // console.log("5 * " + i +  " = " + 5 * i )

//     console.log(`5 * ${i} = ${5*i}`)
// }

// let sum = 0
// for (let i=1 ;i<101; i++){
//      sum = sum + i
// }
// console.log(sum)



// for (let i =1 ; i<51 ; i++){
//     if (i%3===0){
//         console.log(i)
//     }
// }

// let val = prompt("enter the num ")

//     for (let i = 1; i <= val ; i++){
//         if(i % 2 === 0){
//             console.log(`${i} is even`)
//         }
//         else{
//             console.log ( `${i} is odd`)
//         }
//     }

// let count = 0 
// for (let i= 1; i <101 ; i++){
//     if (i % 3 ===0 && i % 5 === 0){
//         console.log(i)
//         count++
//     }
// }
// console.log(count)


// for (let i = 1 ; i<21; i++){
//     if (i %3 ===0 )  continue; 
//     console.log(i)
// }


//clouser, iife, hof


// let test=function(){
//     console.log("hello")
// }

// test() 
// function outer() {
//     let x = 10;

//     return function () {
//         console.log(x);
//     };
// }

// const fn = outer();

// fn();


// function counter() {
//     let count = 0;

//     return function () {
//         count++;
//         console.log(count);
//     };
// }

// const a = counter();

// a();
// a();
// a();


// function counter() {
//     let count = 0;

//     return function () {
//         count++;
//         return count;
//     };
// }

// const a = counter();
// const b = counter();

// console.log(a());
// console.log(a());
// console.log(b());
// console.log(b());


// (function () {
//     let x = 10;
//     console.log(x);
// })();

// (function () {
//     let secret = 100;
// })();

// console.log(secret);

// const result = (function () {
//     return 10 + 20;
// })();

// console.log(result);



// const counter = /* your code here */
// (function(){
// let count =0;

// return function(){
//     count++;
//     return count
// }
// })();

// console.log(counter()); // 1
// console.log(counter()); // 2
// console.log(counter()); // 3

// function calculate(a, b, operation) {
//     return operation(a, b);
// }

// function add(x, y) {
//     return x + y;
// }

// console.log(calculate(10, 20, add));

//Array


let arr = [1,2,3,4,5]
console.log(arr)

let newArr = arr.slice(1,3)
console.log(newArr)