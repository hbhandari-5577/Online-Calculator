const defaultResult = 0;
let currentResult = defaultResult;

function getUserNumberInput() {
    return parseInt(userInput.value);
}

function add() {
    const inputNumber = getUserNumberInput();
    const calcDescription = `${currentResult} + ${inputNumber}`;
    currentResult = currentResult + inputNumber;
    outputResult(currentResult, calcDescription);
}

function subtract() {
    const inputNumber = getUserNumberInput();
    const calcDescription = `${currentResult} - ${inputNumber}`;
    currentResult = currentResult - inputNumber;
    outputResult(currentResult, calcDescription);
}

function multiply() {
    const inputNumber = getUserNumberInput();
    const calcDescription = `${currentResult} * ${inputNumber}`;
    currentResult = currentResult * inputNumber;
    outputResult(currentResult, calcDescription);
}

function divide() {
    const inputNumber = getUserNumberInput();
    const calcDescription = `${currentResult} / ${inputNumber}`;
    currentResult = currentResult / inputNumber;
    outputResult(currentResult, calcDescription);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
