// // function evenNumbers(numArray){
// //     for(i=0; i<numArray.length; i++){
// // if(numArray[i]%2==0)
// //     }
// // }

// function evenNumbers(numbers) {
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] % 2 == 0) {
//             console.log(numbers[i]);
//         }
//     }
// }

// evenNumbers([1,2,3,4,5,6,7,8,9,10]);



// function greet(){
//     for(i=1;i<=10;i++)
//         console.log(i);

// }greet();

// function evenNumbers(){
//     for(i=1;i<=20;i++){
//         if(i%2==0){
//             console.log(i);
//         }
//     }
// }evenNumbers();


// function sign(number){
//     if(number>0){
//         console.log("positive");
//     }else{
//         console.log("negative");
//     }
// }sign(-1);


// function numbers(numArray){
//     for(i=0;i<numArray.length;i++){
//         console.log(numArray[i]);
//     }
// }numbers([10, 20, 30, 40, 50]);

// function evenNumbers(numArray){
//     for(i=0;i<numArray.length;i++){
//         if(numArray[i]%2==0){
//             console.log(numArray[i]);
//         }
//     }
// }evenNumbers([11, 12, 13, 14, 15, 16, 17, 18]);

// function oddNumbers (numArray){
//     for(i=0;i<numArray.length;i++){
//         if(numArray[i]%2!=0){
//             console.log(numArray[i]);
//         }
//     }
// }oddNumbers( [1, 2, 3, 4, 5, 6, 7, 8, 9]);

// function reverse (numArray){
//     for(i=numArray.length-1; i>=0;i--){
//         console.log(numArray[i]);
//     }
// }reverse( [10, 20, 30, 40, 50]);

// function checkNumbers(){
//     for(let i=1;i<=20;i++){
//         if(i%2!=0){
//             console.log(i)
//         }
//         }
// }checkNumbers();
 function greet(callback){
    callback();
 }
 function message(){
    console.log("welcome");
 }
 greet(message);