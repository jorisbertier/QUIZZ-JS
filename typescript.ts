function calculate() {
    let num1: number = parseFloat((<HTMLInputElement>document.getElementById("num1")).value);
    const num2: number = parseFloat((<HTMLInputElement>document.getElementById("num2")).value);
    const operator: string = (<HTMLSelectElement>document.getElementById("operator")).value;
    let result: number;
    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result= num1 - num2;
            break;
        case "x":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        default:
            result = 0;
    }
    (<HTMLInputElement>document.getElementById("result")).innerText = "Resultat : " + result;
}