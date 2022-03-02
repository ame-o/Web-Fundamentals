var countOne = 0;

function add1(){
    var countElement1 = document.querySelector("#countOne");
    countOne++;
    countElement1.innerText = countOne + " likes(s)"
    console.log(countOne)
}

var countTwo = 0;
var countElement2 = document.querySelector("#countTwo");

function add2(){
    countTwo++;
    countElement2.innerText = countTwo + " likes(s)"
    console.log(countTwo)
}

var countThree = 0;
var countElement3 = document.querySelector("#countThree");

function add3(){
    countThree++;
    countElement3.innerText = countThree + " likes(s)"
    console.log(countThree)
}

//alternatively:
//HTML <span> # of likes 
function like(element){
    var counter = document.querySelector(element);
    var count= counter.innerText;
    count++;
    counter.innerText = count;
}