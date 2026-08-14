function calculate() {
    let a = Number(document.getElementById("firstNumber").value);

    let b = Number(document.getElementById("secondNumber").value);

    let operator = document.getElementById("operator").value;

    let result;

    if (operator === "+") {

        result = a + b;
    } else if (operator === "-") {

        result = a - b;
    } else if (operator === "*") {
        result = a * b;

    } else if (operator === "/") {

        result = b === 0 ? "Cannot divide by zero" : a / b;
    }

    document.getElementById("result").textContent = "Result: " + result;
}
