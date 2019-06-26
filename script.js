let numerator, denominator, operation, result;
let reset = function () {
    document.querySelector('.output').innerHTML = '0';
};
reset();

document.querySelector('.divide').addEventListener('click', function (event) {
    operation = 'divide';
    numerator = parseInt(document.querySelector('.output').innerHTML);
    reset();
});

document.querySelector('.multiply').addEventListener('click', function (event) {
    operation = 'multiply';
    numerator = parseInt(document.querySelector('.output').innerHTML);
    reset();
});

document.querySelector('.subtract').addEventListener('click', function (event) {
    operation = 'subtract';
    numerator = parseInt(document.querySelector('.output').innerHTML);
    reset();
});

document.querySelector('.summation').addEventListener('click', function (event) {
    operation = 'summation';
    numerator = parseInt(document.querySelector('.output').innerHTML);
    reset();
});


document.querySelector('.result').addEventListener('click', function (event) {
    denominator = parseInt(document.querySelector('.output').innerHTML);
    if (operation === 'divide') {
        result = numerator / denominator;
    } else if (operation === 'multiply') {
        result = numerator * denominator;
    } else if (operation === 'subtract') {
        result = numerator - denominator;
    } else if (operation === 'summation') {
        result = numerator + denominator;
    }
    document.querySelector('.output').innerHTML = result.toString();
});

numbersArray = document.getElementsByClassName('number');

for (let i = 0; i < numbersArray.length; i++) {

    numbersArray[i].addEventListener('click', function (event) {
        if (document.querySelector('.output').innerHTML === '0') {
            document.querySelector('.output').innerHTML = '';
        }
        document.querySelector('.output').innerHTML += event.target.innerHTML;
    });
}

document.querySelector('.backspace').addEventListener('click', function (event) {
    document.querySelector('.output').innerHTML =
        document.querySelector('.output').innerHTML.substr(0,
            document.querySelector('.output').innerHTML.length - 1);
    if (document.querySelector('.output').innerHTML.length === 0) {
        reset();
    }
});

document.querySelector('.clear').addEventListener('click', function (event) {
    reset();
});

