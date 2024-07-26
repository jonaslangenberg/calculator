


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

const myPoint = document.querySelector("#point");

myPoint.addEventListener("click", () => {
    let checkOneForPoint = currentOperation.valueOne.toString();
    let checkTwoForPoint = currentOperation.valueTwo.toString();
    if(currentOperation.valueOne == 0){
        currentOperation.valueOne = "0.";
        console.log(currentOperation);
    } else if(currentOperation.valueTwo == 0 && currentOperation.operator != 0){
        currentOperation.valueTwo = "0.";
        console.log(currentOperation);
    } else if(checkOneForPoint.includes(".") && currentOperation.operator == 0){
        alert("There already is a point in that value!");
    }else if(checkTwoForPoint.includes(".") && currentOperation.operator != 0){
        alert("There already is a point in that value!");
    }else if (currentOperation.valueOne != 0 && currentOperation.operator == 0){
        currentOperation.valueOne += myPoint.value;
        console.log(currentOperation);
    } else {
        currentOperation.valueTwo += myPoint.value;
        console.log(currentOperation);
    }
});


