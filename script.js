var concatenationInput = document.getElementById('concatenation-input');
var input = '';

function getNum(num) {
    input += num;
    concatenationInput.value = input;
}

function calculate() {
    var inputElement = document.getElementById('input-box');
    var value = concatenationInput.value;
    var result = eval(value);
    inputElement.value = result;

    concatenationInput.value = '';
}

function cls() {
    var inputElement = document.getElementById('input-box');
    inputElement.value = input = '';
    concatenationInput.value = '';
}

function del() {
    var inputElement = document.getElementById('concatenation-input');
    var inputValue = inputElement.value;

    if (inputValue.length > 0) {
        inputElement.value = inputValue.slice(0, -1);
        input = inputValue.slice(0, -1);
    }
}
