class Calculator {
  constructor(previousOperandTextElement,currentOperandTextElement){
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.reset = false;
    this.clear();
  }
  clear(){
    this.currentOperand ="";
    this.previousOperand ="";
    this.operation = undefined;
  }
  delete(){
    this.currentOperand = this.currentOperand.toString().slice(0, -1)

  }
  appendNumber(number){
    if( number === "." && this.currentOperand.includes('.')) return
    this.currentOperand = this.currentOperand.toString() + number.toString() ;
  }
  /* if currentoperation is empty cannot compute the operation
     if the prevous operation is not empty but it afte the current operation already so we make sure that both current and previous is not empty
     both of this for no = is click like 78 + 45 +
     if pass the first current operation === "" and previous !== "" operation has two old one with previous and new operation as parameter
  */
  chooseOperation(operation){
    if (this.currentOperand === "") return
    if (this.previousOperand !== ""){
      this.compute();
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand ="";
  }
  compute(){
    let computation;
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);
    if (isNaN(prev) || isNaN(current)) return
    switch (this.operation) {
      case "+":
        computation = prev + current;
        break;
      case "-":
        computation = prev - current;
        break;
      case "*":
        computation = prev * current;
        break;
      case "/":
        computation = prev / current;
        break;
      default:

    }
    this.reset = true;
    this.currentOperand = computation;
    this.operation = undefined;
    this.previousOperand ="";

  }
  updateDisplay(){
    this.currentOperandTextElement.innerText = this.getDisplayNumber(this.currentOperand);
    if (this.operation != undefined)
      this.previousOperandTextElement.innerText = `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
    else{
      this.previousOperandTextElement.innerText = "";
    }
  }
  getDisplayNumber(number){
    const stringNumber = number.toString();
    const integerDigits = parseFloat(stringNumber.split('.')[0]);
    const decimalDigits = stringNumber.split('.')[1];
    let integerDisplay;
    if(isNaN(integerDigits)){
      integerDisplay ='';
    }
    else {
      integerDisplay = integerDigits.toLocaleString('en' , {maximumFractionDigits: 0})
    }
    if(decimalDigits != null){
      return `${integerDisplay}.${decimalDigits}`
    }
    else {
      return integerDisplay
    }
/*
    const floatNumber =parseFloat(number);
    if (isNaN(floatNumber)) return ''
    return floatNumber.toLocaleString('en');
    problem with the decimal
    ` string formate combine ${var} delim ${var}`
    */
  }
}


const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons =document.querySelectorAll('[data-operation]');
const equalsButtons = document.querySelector('[data-equals]');
const deleteButtons = document.querySelector('[data-delete]');
const allClearButtons = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');
/*

*/

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);
/* button.innerText is what inside the button like 1 2
somehow for each method does not work i found that on stack overflow said because IE 11 querrySelector return node list */
for(let i=0; i<numberButtons.length; i++ ){
  let button = numberButtons[i];
  button.addEventListener('click', () => {
    if(calculator.previousOperand === "" & calculator.currentOperand !== "" & calculator.reset){
      calculator.currentOperand = "";
      calculator.reset = false;
    }
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
};
for(let i=0; i<operationButtons.length; i++ ){
  let button = operationButtons[i];
  button.addEventListener('click', () => {
    calculator.chooseOperation(button.innerText);
    calculator.updateDisplay();
  });
};
equalsButtons.addEventListener('click', () =>{
  calculator.compute();
  calculator.updateDisplay();
});
deleteButtons.addEventListener('click', () =>{
  calculator.delete();
  calculator.updateDisplay();
});
allClearButtons.addEventListener('click', () =>{
  calculator.clear()
  calculator.updateDisplay();
});
