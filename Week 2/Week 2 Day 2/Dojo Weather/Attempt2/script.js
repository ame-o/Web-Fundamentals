function remove(element){
element.remove();
}
/**/


function cTof(temp){
return Math.round(5/9 * temp + 32);
}

function fToc(temp){
return Math.round(5/9 *(temp - 32))
}

function changeTemp(element){
    console.log(element.value);
    for(var i = 1;i<9; i++){//we need for loop to call all values under ID we want
        var tempIDs = document.querySelector("#temp" + i)//this is calling on any HTML id with "temp" + the numbers we assigned them
        var tempNum = parseInt(tempIDs.innerText); //this is taking the numbers inside that ID and converting to intergers instead of strings
        if(element.value == "C&deg"){
            tempIDs.innerText = fToc(tempNum);
        }
        else{
            tempIDs.innerText = cTof(tempNum);
        }
    }
}