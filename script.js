// Variables

const buttons = document.querySelectorAll('.box');

const display_a = document.querySelector('.display-a');



// Operation variables
let num1 = "";
let num2 = "";
let operator = "";






// Functions

function operate(num1, operator, num2) {
    
};





buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Case that button's value is a number
        if (display_a.textContent == 0) { // Might break later on
            display_a.textContent = button.value;
        }
        else {
            display_a.textContent += button.value;
        }

        // Case that button's value is an operator
        if (['*', '/', '+', '-'].includes(button.value)) {
            display_a.textContent = button.value;
        }

    });
});