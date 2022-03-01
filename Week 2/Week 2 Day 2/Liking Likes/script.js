
var countOne = 0;
var countElement1 = document.querySelector("#countOne");
console.log(countElement1);
function add1(){
    countOne++;
    countElement1.innerText = countOne + " likes(s)"
    console.log(countOne)
}

var countTwo = 0;
var countElement2 = document.querySelector("#countTwo");
console.log(countElement2);
function add2(){
    countTwo++;
    countElement2.innerText = countTwo + " likes(s)"
    console.log(countTwo)
}

var countThree = 0;
var countElement3 = document.querySelector("#countThree");
console.log(countElement3);
function add3(){
    countThree++;
    countElement3.innerText = countThree + " likes(s)"
    console.log(countThree)
}