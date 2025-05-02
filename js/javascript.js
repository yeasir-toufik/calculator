console.log("js conncetion working.")


function add (num1, num2){
    return num1+num2;
};

function sub (num1, num2){
    return num1-num2;
};

function mul (num1, num2){
    return num1*num2;
};

function divi(num1, num2) {

    if (num1!= 0) {

        return num1 / num2;
    }
    else {
        console.log("Zero is not allowed");
    }
};

// let addition= add(5,10);
// console.log(addition);

// addition = sub(20,10);
// console.log(addition);

// addition=mul(5,5);
// console.log(addition);

// addition=divi(10,5);
// console.log(addition);

let number1,number2,operator;

function operate(num1, op, num2) {

    if (op == "+") {
        return add(num1, num2);
    }
    else if (op == "-") {
        return sub(num1, num2);

    }

    else if (op == "*") {
        return mul(num1, num2);
    }
    else if (op == "/") {
        return divi(num1, num2);
    }

    else { console.log("Operate function error") };

};

let test = operate(10,"-",50);
console.log(test);