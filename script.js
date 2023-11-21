// Variables

const num_buttons = document.querySelectorAll('.box');

const o_buttons = document.querySelectorAll('.box-o');

const eq_button = document.querySelector('.box-eq');

const display_b = document.querySelector('.display-b');

const display_a = document.querySelector('.display-a');



// Debounce variable
let num_ed = false;


// Operation variables
let num1 = "";
let num2 = "";
let operator;






// Functions

function operate(num1, operator, num2) {
    if (operator == '+') {
        return num1 + num2;
    } else if (operator == '-') {
        return num1 - num2;
    } else if (operator == '*') {
        return num1 * num2;
    } else if (operator == '/') {
        return num1 / num2;
    } else {
        return 'ERROR';
    }
};


num_buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (num_ed == false) {
            num1 += button.value;

            console.log(num1);
        } else {
            num2 += button.value;
            console.log(num2);
        }
    
    });
});






o_buttons.forEach(button => {
    button.addEventListener('click', () => {
        num_ed = true;
        operator = button.value;

        console.log(operator);


    });
});





eq_button.addEventListener('click', () => {
    
    console.log(operate(num1, operator, num2));

    num_ed = false;

    num1 = "";
    num2 = "";
});



