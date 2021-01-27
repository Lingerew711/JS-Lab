function sum(vals) {
    let sum = 0;
    vals = vals.split(",")
    vals.forEach(element => {
        sum += parseInt(element)
    });

    return sum;
}
function subtract(vals) {
    vals = vals.split(",")
    let sum = parseFloat(vals[0]);
    for (let i = 1; i < vals.length; i++) {
        sum -= parseFloat(vals[i])
    }
    return sum
}
function multiply(vals) {
    let sum = 1;
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
function max(vals){
    vals = vals.split(",")
    let maxNum = parseFloat(vals[0]);
    for(let i = 1; i < vals.length; i++){
        if(vals[i] > maxNum){
            maxNum = vals[i]
        }else{
            return "numbers are equal"
        }
    }
    return "maximum number " + maxNum
}
function min(vals){
    vals = vals.split(",")
    let minNum = parseFloat(vals[0]);
    for(let i = 1; i < vals.length; i++){
        if(vals[i] < minNum){
            minNum = vals[i]
        }else{
            return "numbers are equal"
        }
    }
    return "minimum number " + minNum
}
function average(vals) {
    let sum = 0;
    vals = vals.split(",")
    vals.forEach(element => {
        sum += parseInt(element)
        mean = sum / vals.length
    });

    return mean;
}
function square(val) {
   sum = val **2;
    return sum;
}
(function(){
    let check = true;
    while (check) {
        let choice = prompt("1: Additon \n 2: Subtraction \n 3: Multiplication \n 4: Division \n 5: Max \n 6: Min \n 7: Average \n 8: Square \n press any other key to quite")
        if(choice == "1") {
            let nums = prompt("enter the numbers in commas")
            console.log("result " + sum(nums))
            return
        }
        else if( choice == "2"){
            let nums = prompt("enter the numbers in commas")
            console.log("result " + subtract(nums))
            return
        }
        else if(choice == "3"){
            let nums = prompt("enter the numbers in commas")
            console.log("result " + multiply(nums))
            return
        }
        else if(choice == "4"){
            let nums = prompt("enter the numbers in commas")
            console.log("result " + divde(nums))
            return
        }
        else if(choice == "5"){
            let nums = prompt("enter the numbers in commas")
            console.log(max(nums))
            return
        }
        else if(choice == "6"){
            let nums = prompt("enter the numbers in commas")
            console.log(min(nums))
            return
        }
        else if(choice == "7"){
            let nums = prompt("enter the numbers in commas")
            console.log("result " + average(nums))
            return
        }
        else if(choice == "8"){
            let nums = prompt("enter the number")
            console.log("result " + square(nums))
            return
        }
        else{
            check = false;
        }        
    }

}())

