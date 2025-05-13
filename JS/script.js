

// var temp = document.getElementsByClassName("cal-button");

// var temp2 = temp.forEach(element => {
//     element.addEventListener("click",calculateFn)
// })

// console.log(temp2);

// var calString = null;

var concatedStr = "";

function concatString(symbol){
    concatedStr = concatedStr + symbol;
    console.log(concatedStr);
    calcDisplay(concatedStr);
    
}

function calcDisplay(value){
    document.getElementById("calc-display").value = value;
}


function get1Fn(){
    let one = document.getElementById("1").value;
    console.log(one);
    concatString(one);
}

function get2Fn(){
    let two = document.getElementById("2").value;
    console.log(two);
    concatString(two);
}

function get3Fn(){
    let three = document.getElementById("3").value;
    console.log(three);
    concatString(three);
}

function get4Fn(){
    let four = document.getElementById("4").value;
    console.log(four);
    concatString(four);
}

function get5Fn(){
    let five = document.getElementById("5").value;
    console.log(five);
    concatString(five);
}

function get6Fn(){
    let six = document.getElementById("6").value;
    console.log(six);
    concatString(six);
}

function get7Fn(){
    let seven = document.getElementById("7").value;
    console.log(seven);
    concatString(seven);
}

function get8Fn(){
    let eight = document.getElementById("8").value;
    console.log(eight);
    concatString(eight);
}

function get9Fn(){
    let nine = document.getElementById("9").value;
    console.log(nine);
    concatString(nine);
}

function get0Fn(){
    let zero = document.getElementById("0").value;
    console.log(zero);
    concatString(zero);
}

function get00Fn(){
    let zeroZero = document.getElementById("00").value;
    console.log(zeroZero);
    concatString(zeroZero);
}

function getAcFn(){
    concatedStr = "";
    console.log(concatedStr);
    calcDisplay(concatedStr);
}

function getAddFn(){
    let plus = document.getElementById("add").value;
    console.log(plus);
    concatString(plus);
}

function getSubFn(){
    let minus = document.getElementById("sub").value;
    console.log(minus);
    concatString(minus);
}

function getMulFn(){
    let multiply = document.getElementById("mul").value;
    console.log(multiply);
    concatString(multiply);
}

function getDivFn(){
    let divide = document.getElementById("div").value;
    console.log(divide);
    concatString(divide);
}

function getModFn(){
    let modulus = document.getElementById("mod").value;
    console.log(modulus);
    concatString(modulus);
}

function getDotFn(){
    let dot = document.getElementById("dot").value;
    console.log(dot);
    concatString(dot);
}

function popElement(){
    let length = concatedStr.length-1;
    concatedStr = concatedStr.slice(0, length)
    console.log(concatedStr);
    calcDisplay(concatedStr);
}

function getResult(){
    var result = eval(concatedStr);
    console.log(result);
    concatedStr = result;
    calcDisplay(result);
}


// Adding keyboard events

document.body.addEventListener("keypress",(event)=>{
    console.log(event.key);
    if(event.key === "1"){
        console.log(event.key);
        event.preventDefault();
        document.getElementById("1").click();
    }
    else if(event.key === "2"){
        event.preventDefault();
        document.getElementById("2").click();
    }
    else if(event.key === "3"){
        event.preventDefault();
        document.getElementById("3").click();
    }
    else if(event.key === "4"){
        event.preventDefault();
        document.getElementById("4").click();
    }
    else if(event.key === "5"){
        event.preventDefault();
        document.getElementById("5").click();
    }
    else if(event.key === "6"){
        event.preventDefault();
        document.getElementById("6").click();
    }
    else if(event.key === "7"){
        event.preventDefault();
        document.getElementById("7").click();
    }
    else if(event.key === "8"){
        event.preventDefault();
        document.getElementById("8").click();
    }
    else if(event.key === "9"){
        event.preventDefault();
        document.getElementById("9").click();
    }
    else if(event.key === "0"){
        event.preventDefault();
        document.getElementById("0").click();
    }
    else if(event.key === "o"){
        event.preventDefault();
        document.getElementById("00").click();
    }
    else if(event.key === "+"){
        event.preventDefault();
        document.getElementById("add").click();
    }
    else if(event.key === "-"){
        event.preventDefault();
        document.getElementById("sub").click();
    }
    else if(event.key === "*"){
        event.preventDefault();
        document.getElementById("mul").click();
    }
    else if(event.key === "/"){
        event.preventDefault();
        document.getElementById("div").click();
    }
    else if(event.key === "%"){
        event.preventDefault();
        document.getElementById("mod").click();
    }
    else if(event.key === "."){
        event.preventDefault();
        document.getElementById("dot").click();
    }
    else if(event.key === "Enter" || event.key === "="){
        event.preventDefault();
        document.getElementById("equals").click();
    }
    else if(event.key === "q"){
        event.preventDefault();
        document.getElementById("ac").click();
    }
    else if(event.key === "Delete"){
        event.preventDefault();
        document.getElementById("backspace").click();
    }
});
 

// Differnce Between framework and library
