var num1 = prompt("Enter a number");
var operator = prompt("Enter an operator");
var num2 = prompt("Enter another number");

num1 = parseFloat(num1);
num2 = parseFloat(num2);

function add(num1, num2) {
    return num1 + num2;

}

function subtract(num1, num2) {
    return num1 - num2;

}

function mutiply(num1, num2) {
    return num1 * num2;

}

function divide(num1, num2) {
    return num1 / num2;

}
if (operator == "+") {
    console.log(num1 + " " + operator + " " + num2 + " = " + add(num1, num2));
} else if (operator == "-") {
    console.log(num1 + " " + operator + " " + num2 + " = " + subtract(num1, num2));
} else if (operator == "") {
    console.log(num1 + " " + operator + " " + num2 + " = " + mutiply(num1, num2));
} else if (operator == "/") {
    console.log(num1 + " " + operator + " " + num2 + " = " + divide(num1, num2));
}

