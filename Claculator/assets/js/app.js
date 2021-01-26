


function sum(vals) {
    let sum = 0;
    vals = vals.split(",")
    vals.forEach(element => {
        sum += parseInt(element)
    });

    return sum;
}
function multiply(vals) {
    let sum = 0;
    vals = vals.split(",")
    vals.forEach(element => {
        sum *= parseInt(element)
    });

    return sum;
}

function divde(vals) {
    vals = vals.split(",")
    if(parseInt(vals[1]) == 0) {
        return "Division error"
    } else {
        return parseInt(vals[0]) / parseInt(vals[1])
    }
}

function subtract(vals) {
    vals = vals.split(",")
    let sum = parseFloat(vals[0]);
    for (let i = 1; i < vals.length; i++) {
        sum -= parseFloat(vals[i])
    }
    return sum
}



let choice = prompt("1: Additon 2: Subtraction 3: Multiplication 4: Division ")
let nums = prompt("enter the numbers in commas")
if(choice == "1") {
    console.log("result " + sum(nums))
}
else if( choice == "2"){
    console.log("result " + subtract(nums))
}
else if(choice == "3"){
    console.log("result " + multiply(nums))
}
else if(choice == "4"){
    console.log("result " + divde(nums))
}
else{
    console.error("illegal choice");
}