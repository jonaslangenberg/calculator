const allNumbers = document.querySelectorAll(".number");
let currentOperation = {valueOne: 0, valueTwo: 0, operator: 0, result: 0,};
for(let number of allNumbers){
    console.log(number.value);
    number.addEventListener("click", () => {
        if(currentOperation.valueOne == 0){
            currentOperation.valueOne = number.value;
            console.log(currentOperation);
        } else if(currentOperation.valueTwo == 0 && currentOperation.operator != 0){
            currentOperation.valueTwo = number.value;
            console.log(currentOperation);
        } else if (currentOperation.valueOne != 0 && currentOperation.operator == 0){
            currentOperation.valueOne += number.value;
            console.log(currentOperation);
        } else {
            currentOperation.valueTwo += number.value;
            console.log(currentOperation);
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
        }
    });
}

