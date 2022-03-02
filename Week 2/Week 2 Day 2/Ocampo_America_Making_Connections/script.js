var nameA = "Jane Doe"
var nameElement = document.querySelector("#nameA");
console.log(nameElement);

function nameChange(){
 nameA= "Leader Supreme"
 nameElement.innerText = nameA
 console.log(nameA);
}

function hideT() {
    var elementT = document.querySelector("#fwiendT");
    elementT.remove();
}

function hideP() {
    var elementP = document.querySelector("#fwiendP");
    elementP.remove();
}
//could not get to completing this :(
var exFriends = 500;
var exFriendsCount = document.querySelector("exFriends");
console.log(exFriendsCount);
function addFriends(){
    exFriends++;
    exFriendsCount.innerText = exFriends
    console.log(exFriends);
}
function loseFriends(){
    exFriends--;
    exFriendsCount.innerText = exFriends
    console.log(exFriends);
    }