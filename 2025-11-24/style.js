function pressNum(num) {
    document.getElementById('mytext').value += num;
}

function pressop(op) {
    document.getElementById('mytext').value += op;
}

function clearDisplay() {
    document.getElementById('mytext').value = '';
}

function calculate() {
    try {
        let result = eval(document.getElementById('mytext').value);
        document.getElementById('mytext').value = result;
    } catch(e) {
        document.getElementById('mytext').value = 'Error';
    }
}
