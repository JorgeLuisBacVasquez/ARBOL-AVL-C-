// Calculator.cpp
#include <iostream>
#include <stdexcept> // Para std::invalid_argument

using namespace std;

class Calculator {
public:
    Calculator(); // Constructor
    void setNumber1(double num);
    void setNumber2(double num);
    void setOperation(char op);
    double calculate();
    void clear(); // Limpiar los valores actuales

private:
    double number1;
    double number2;
    char operation;
};

// Implementación de la clase Calculator

Calculator::Calculator() : number1(0), number2(0), operation('+') {}

void Calculator::setNumber1(double num) {
    number1 = num;
}

void Calculator::setNumber2(double num) {
    number2 = num;
}

void Calculator::setOperation(char op) {
    if (op == '+' || op == '-' || op == '*' || op == '/') {
        operation = op;
    } else {
        throw invalid_argument("Operación no válida");
    }
}

double Calculator::calculate() {
    switch (operation) {
        case '+': return number1 + number2;
        case '-': return number1 - number2;
        case '*': return number1 * number2;
        case '/':
            if (number2 != 0) return number1 / number2;
            else throw invalid_argument("División por cero");
        default: throw invalid_argument("Operación no válida");
    }
}

void Calculator::clear() {
    number1 = 0;
    number2 = 0;
    operation = '+';
}

// Programa principal

int main() {
    Calculator calc;
    double num1, num2;
    char op;

    cout << "Calculadora básica\n";
    cout << "Ingrese el primer número: ";
    cin >> num1;
    calc.setNumber1(num1);

    cout << "Ingrese el segundo número: ";
    cin >> num2;
    calc.setNumber2(num2);

    cout << "Ingrese la operación (+, -, *, /): ";
    cin >> op;
    try {
        calc.setOperation(op);
    } catch (const invalid_argument& e) {
        cerr << e.what() << endl;
        return 1;
    }

    try {
        double result = calc.calculate();
        cout << "Resultado: " << result << endl;
    } catch (const invalid_argument& e) {
        cerr << e.what() << endl;
        return 1;
    }

    return 0;
}

