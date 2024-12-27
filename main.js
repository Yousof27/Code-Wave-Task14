/*

Task
-----
Fill an array of 3 elements from the user, and apply each of
the following mathematical operations on it (+ , * , /).

*/

let form = document.forms[0];
let input1 = document.querySelector('input.input1');
let input2 = document.querySelector('input.input2');
let input3 = document.querySelector('input.input3');
let result = document.querySelector('p.result');

const isInputEmpty = (input) => {
    let value = input.value.trim();
    let notEmpty = true;
    if (value === '') {
        input.classList.add('wrong');
        notEmpty = false;
    } else input.classList.remove('wrong');
    return [value, notEmpty];
}

function handleButton(btn) {
    let [n1, valid1] = isInputEmpty(input1);
    let [n2, valid2] = isInputEmpty(input2);
    let [n3, valid3] = isInputEmpty(input3);

    if (!(valid1 && valid2 && valid3)) {
        result.innerHTML = '';
        return;
    }

    let sign = btn.getAttribute('sign'), operations = null, answer = 0;

    if (sign === '➕') answer = +n1 + +n2 + +n3;
    else if (sign === '✖️') answer = +n1 * +n2 * +n3;
    if (sign === '➗') answer = +n1 / +n2 / +n3;

    let span = `<span class="${answer > 0}">${answer.toFixed(2)}</span>`;
    let message = `${n1} ${sign} ${n2} ${sign} ${n3} = ${span}`;
    result.innerHTML = message;
}


