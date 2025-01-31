const display = document.querySelector("#display");


const allNumbers = document.querySelectorAll(".number");
let currentOperation = {valueOne: "", valueTwo: "", operator: "",};
for(let number of allNumbers){
    console.log(number.value);
    number.addEventListener("click", () => {
        if(currentOperation.valueOne == ""){
            currentOperation.valueOne = number.value;
            display.textContent = currentOperation.valueOne;
        } else if(currentOperation.valueTwo == "" && currentOperation.operator != ""){
            currentOperation.valueTwo = number.value;
            display.textContent = currentOperation.valueTwo;
        } else if (currentOperation.valueOne != "" && currentOperation.operator == ""){
            currentOperation.valueOne += number.value;
            display.textContent = currentOperation.valueOne;
        } else {
            currentOperation.valueTwo += number.value;
            display.textContent = currentOperation.valueTwo;
        }
    });
}

const allOperators = document.querySelectorAll(".operator");

for(let operator of allOperators){
    console.log(operator.value);
    operator.addEventListener("click", () => {
        if(currentOperation.operator == ""){
            currentOperation.operator = operator.value;
            display.textContent = currentOperation.operator;
        }
    });
}

const myPoint = document.querySelector("#point");

myPoint.addEventListener("click", () => {
    let checkOneForPoint = currentOperation.valueOne.toString();
    let checkTwoForPoint = currentOperation.valueTwo.toString();
    if(currentOperation.valueOne == ""){
        currentOperation.valueOne = "0.";
        display.textContent = currentOperation.valueOne;
    } else if(currentOperation.valueTwo == "" && currentOperation.operator != ""){
        currentOperation.valueTwo = "0.";
        display.textContent = currentOperation.valueTwo;
    } else if(checkOneForPoint.includes(".") && currentOperation.operator == ""){
        alert("There already is a point in that value!");
    }else if(checkTwoForPoint.includes(".") && currentOperation.operator != ""){
        alert("There already is a point in that value!");
    }else if (currentOperation.valueOne != "" && currentOperation.operator == ""){
        currentOperation.valueOne += myPoint.value;
        display.textContent = currentOperation.valueOne;
    } else {
        currentOperation.valueTwo += myPoint.value;
        display.textContent = currentOperation.valueTwo;
    }
});


const resultBtn = document.querySelector("#equals");

resultBtn.addEventListener("click", () => {
    if(currentOperation.valueTwo == ""){
        alert("First input a second value!");
    } else {
        let endValueOne = parseFloat(currentOperation.valueOne);
        let endValueTwo = parseFloat(currentOperation.valueTwo);
        let endOperator = currentOperation.operator;
        if (endOperator == "+"){
            let endResult = endValueOne + endValueTwo;
            display.textContent = endResult;
            currentOperation.valueOne = endResult.toString();
            currentOperation.operator = "";
            currentOperation.valueTwo = "";
        } else if(endOperator == "-"){
            let endResult = endValueOne - endValueTwo;
            display.textContent = endResult;
            currentOperation.valueOne = endResult.toString();
            currentOperation.operator = "";
            currentOperation.valueTwo = "";
        } else if(endOperator == "*"){
            let endResult = endValueOne * endValueTwo;
            display.textContent = endResult;
            currentOperation.valueOne = endResult.toString();
            currentOperation.operator = "";
            currentOperation.valueTwo = "";
        } else{
            let endResult = endValueOne / endValueTwo;
            display.textContent = endResult;
            currentOperation.valueOne = endResult.toString();
            currentOperation.operator = "";
            currentOperation.valueTwo = "";
        }
    }
    
});

const erazer = document.querySelector("#erase");
erazer.addEventListener("click", () => {
    currentOperation.valueOne = "";
    currentOperation.valueTwo = "";
    currentOperation.operator = "";
    display.textContent = 0;
});


const delBtn = document.querySelector("#backspace");
delBtn.addEventListener("click", () => {
    if(currentOperation.valueTwo == "" && currentOperation.valueOne != "" && currentOperation.operator == 0){
        let placeholderForString = currentOperation.valueOne;
        placeholderForString = placeholderForString.toString();
        if(placeholderForString.length > 1){
            currentOperation.valueOne = placeholderForString.slice(0, placeholderForString.length - 1);
        }
        display.textContent = currentOperation.valueOne;
        
    } else if (currentOperation.operator != "" && currentOperation.valueTwo == ""){
        alert("Not possible!");
    } else if(currentOperation.operator != "" && currentOperation.valueTwo != ""){
        let placeholderForString = currentOperation.valueTwo;
        placeholderForString = placeholderForString.toString();
        if(placeholderForString.length > 1){
            currentOperation.valueOne = placeholderForString.slice(0, placeholderForString.length - 1);
        }
        display.textContent = currentOperation.valueTwo;
        
    }
});

const changeValue = document.querySelector("#change");
changeValue.addEventListener("click", () => {
    if(currentOperation.operator == ""){
        if(changeValue.value == "-"){
            currentOperation.valueOne = "-" + currentOperation.valueOne;
            changeValue.setAttribute("value", "+");
            display.textContent = currentOperation.valueOne;
        } else {
            currentOperation.valueOne = currentOperation.valueOne.slice(1, currentOperation.valueOne.length);
            changeValue.setAttribute("value", "-");
            display.textContent = currentOperation.valueOne;
        }
    } else {
        if(changeValue.value == "-"){
            currentOperation.valueTwo = "-" + currentOperation.valueTwo;
            changeValue.setAttribute("value", "+");
            display.textContent = currentOperation.valueTwo;
        } else {
            currentOperation.valueTwo = currentOperation.valueTwo.slice(1, currentOperation.valueTwo.length);
            changeValue.setAttribute("value", "-");
            display.textContent = currentOperation.valueTwo;
        }
    }
});