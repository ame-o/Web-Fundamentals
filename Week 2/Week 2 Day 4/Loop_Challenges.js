// 1. Print odds 1-20
// Using a loop write code that will console.log all of the odd values from 1 up to 20.
function Print1to20(){
    for(var i = 1;i<21; i++) {
        console.log(i);
    }
}       
//Print1to20();

// 2. Decreasing Multiples of 3
// Using a loop write code that will console.log all of the values that are evenly divisible by 3 from 100 down to 0.
function DecreasingBy3(){
    for(var i = 100;i>=0; i--) {
        if(i%3==0){
            console.log(i);
        }
    }
}
//DecreasingBy3();

//3.Print the sequence
// Using a loop write code that will console.log the values in this sequence 4, 2.5, 1, -0.5, -2, -3.5.
let seq = [4, 2.5, 1, -0.5, -2, -3.5]
function printSequence(arr){
    for(var i = 0;i<arr.length; i++) {
        console.log(arr[i]);
    }
}
//printSequence(seq);

// 4. Sigma
// Write code that will add all of the values from 1-100 onto some variable sum and at the end console.log the result 1 + 2 + 3 + ... + 98 + 99 + 100. We should get back 5050 at the end.
function add100(){
    let sum = 0
    for(var i = 1;i<=100; i++) {
        sum+=i
    }   
    console.log(sum);
}
//add100();

// 5. Factorial
// Write code that will multiply all of the values from 1-12 onto some variable product and at the end console.log the result 1 * 2 * 3 * ... * 10 * 11 * 12. We should get back 479001600 at the end.
function multiply12(){
    let product = 1
    for(var i = 1;i<=12; i++) {
        product*=i
    }   
    console.log(product);
}
//multiply12();