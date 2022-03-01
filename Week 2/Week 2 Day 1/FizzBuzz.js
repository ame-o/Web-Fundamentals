// Write code that will go through each number from 1 to 100 and:

// For each number that is a multiple of 3, print "Fizz"
// For each number that is a multiple of 5, print "Buzz"
// For numbers which are a multiple of both 3 and 5, print "FizzBuzz"
// All other numbers should just print normally
// Hint: We may need to make use of the modulo operator a % b
start = 1
end = 255
function fizzBuzz (start,end){
    for(var i = start;i<end+1; i++) { //instead of start&end you could easily use 1 & 255.
        if(i %3==0 && i %5==0){
            console.log("FizzBuzz");
        }
        else if(i %3==0){
            console.log("Fizz") 
        }
        else if(i %5==0){
            console.log("Buzz");
        }
        else{
        console.log(i);
        }
    }
}
fizzBuzz(start,end);

