// script.js
class Calculator {
    constructor() {
        this.currentInput = '';
        this.previousInput = '';
        this.operation = null;
        this.updateDisplay();
    }

    updateDisplay() {
        document.getElementById('display').value = this.currentInput || '0';
    }

    appendNumber(number) {
        if (this.currentInput.length < 12) {
            this.currentInput += number;
            this.updateDisplay();
        }
    }

    appendDecimal() {
        if (!this.currentInput.includes('.')) {
            this.currentInput += '.';
            this.updateDisplay();
        }
    }

    setOperation(op) {
        if (this.currentInput === '' && this.previousInput === '') return;

        if (this.previousInput !== '') {
            this.calculate();
        }

        this.operation = op;
        this.previousInput = this.currentInput;
        this.currentInput = '';
        this.updateDisplay();
    }

    clear() {
        this.currentInput = '';
        this.previousInput = '';
        this.operation = null;
        this.updateDisplay();
    }

    calculate() {
        let result;
        const prev = parseFloat(this.previousInput);
        const current = parseFloat(this.currentInput);

        if (isNaN(prev) || isNaN(current)) return;

        switch (this.operation) {
            case '+':
                result = prev + current;
                break;
            case '-':
                result = prev - current;
                break;
            case '*':
                result = prev * current;
                break;
            case '/':
                result = prev / current;
                break;
            default:
                return;
        }

        this.currentInput = result.toString();
        this.operation = null;
        this.previousInput = '';
        this.updateDisplay();
    }
}

const calculator = new Calculator();
