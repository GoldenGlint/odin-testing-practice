function add(a, b){
    return a+b;
}

function subtract(a, b){
    return a-b;
}

function divide(a, b){
    if(b!=0){
        return a/b;
    }
    else{
        return "This is not valid";
    }

}

function multiply(a, b){
    return a*b;
}

const calculator = { add, subtract, divide, multiply };

export { calculator };