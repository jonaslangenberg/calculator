const display = document.querySelector("#display");


const allNumbers = document.querySelectorAll(".number");
let currentOperation = {valueOne: 0, valueTwo: 0, operator: 0, result: 0,};
for(let number of allNumbers){
    console.log(number.value);
    number.addEventListener("click", () => {
        if(currentOperation.valueOne == 0){
            currentOperation.valueOne = number.value;
            console.log(currentOperation);
            display.textContent = currentOperation.valueOne;
        } else if(currentOperation.valueTwo == 0 && currentOperation.operator != 0){
            currentOperation.valueTwo = number.value;
            display.textContent = currentOperation.valueTwo;
            console.log(currentOperation);
        } else if (currentOperation.valueOne != 0 && currentOperation.operator == 0){
            currentOperation.valueOne += number.value;
            console.log(currentOperation);
            display.textContent = currentOperation.valueOne;
        } else {
            currentOperation.valueTwo += number.value;
            console.log(currentOperation);
            display.textContent = currentOperation.valueTwo;
        }
    });
}

const allOperators = document.querySelectorAll(".operator");

for(let operator of allOperators){
    console.log(operator.value);
    operator.addEventListener("click", () => {
        if(currentOperation.operator == 0){
            currentOperation.operator = operator.value;
            console.log(currentOperation);
            display.textContent = currentOperation.operator;
        }
    });
}

const myPoint = document.querySelector("#point");

myPoint.addEventListener("click", () => {
    let checkOneForPoint = currentOperation.valueOne.toString();
    let checkTwoForPoint = currentOperation.valueTwo.toString();
    if(currentOperation.valueOne == 0){
        currentOperation.valueOne = "0.";
        display.textContent = currentOperation.valueOne;
        console.log(currentOperation);
    } else if(currentOperation.valueTwo == 0 && currentOperation.operator != 0){
        currentOperation.valueTwo = "0.";
        display.textContent = currentOperation.valueTwo;
        console.log(currentOperation);
    } else if(checkOneForPoint.includes(".") && currentOperation.operator == 0){
        alert("There already is a point in that value!");
    }else if(checkTwoForPoint.includes(".") && currentOperation.operator != 0){
        alert("There already is a point in that value!");
    }else if (currentOperation.valueOne != 0 && currentOperation.operator == 0){
        currentOperation.valueOne += myPoint.value;
        display.textContent = currentOperation.valueOne;
        console.log(currentOperation);
    } else {
        currentOperation.valueTwo += myPoint.value;
        display.textContent = currentOperation.valueTwo;
        console.log(currentOperation);
    }
});


const resultBtn = document.querySelector("#equals");

resultBtn.addEventListener("click", () => {
    let endValueOne = parseFloat(currentOperation.valueOne);
    let endValueTwo = parseFloat(currentOperation.valueTwo);
    let endOperator = currentOperation.operator;
    if (endOperator == "+"){
        let endResult = endValueOne + endValueTwo;
        display.textContent = endResult;
        currentOperation.valueOne = endResult.toString();
        currentOperation.operator = 0;
        currentOperation.valueTwo = 0;
    } else if(endOperator == "-"){
        let endResult = endValueOne - endValueTwo;
        display.textContent = endResult;
        currentOperation.valueOne = endResult.toString();
        currentOperation.operator = 0;
        currentOperation.valueTwo = 0;
    } else if(endOperator == "*"){
        let endResult = endValueOne * endValueTwo;
        display.textContent = endResult;
        currentOperation.valueOne = endResult.toString();
        currentOperation.operator = 0;
        currentOperation.valueTwo = 0;
    } else{
        let endResult = endValueOne / endValueTwo;
        display.textContent = endResult;
        currentOperation.valueOne = endResult.toString();
        currentOperation.operator = 0;
        currentOperation.valueTwo = 0;
    }
});

