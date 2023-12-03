// Variables

const num_buttons = document.querySelectorAll('.box');

const o_buttons = document.querySelectorAll('.box-o');

const eq_button = document.querySelector('.box-eq');

const display_b = document.querySelector('.display-b');

const display_a = document.querySelector('.display-a');

const clear_button = document.querySelector('.clear')

// Operation variables
let num1 = "0";
let num2 = "";
let operator = "";

let const_num2 = "";


// Debounce variables
let o_debounce = false; // Special case that operator acts as equal sign


// Functions

function operate(num1, operator, num2) {
    if (operator == '+') {
        return parseInt(num1) + parseInt(num2);
    } else if (operator == '-') {
        return parseInt(num1) - parseInt(num2);
    } else if (operator == '*') {
        return parseInt(num1) * parseInt(num2);
    } else if (operator == '/') {
        return parseInt(num1) / parseInt(num2);
    } else {
        return 'ERROR';
    }
};



num_buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (num1 == "0" && operator == "") { // Case that first number is being clicked
            num1 = button.value;
            display_a.textContent = num1;
        } else if (num1 != "0" && operator == "") { // Case that the first number is more than one digit
            num1 += button.value;
            display_a.textContent = num1;
        } else if ((operator != "" && num2 == "") || o_debounce == true) { // Case that second number is being clicked
            num2 = button.value;
            display_a.textContent = num2;

            document.querySelector('.btnSpecial')?.classList.remove('btnSpecial');
        } else if ((operator != "" && num2 != "") || o_debounce == true) { // Case that the second number is more than one digit
            num2 += button.value;
            display_a.textContent = num2;

            document.querySelector('.btnSpecial')?.classList.remove('btnSpecial');
        }
    });
});



o_buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (num1 != "" && operator != "" && num2 != "") { // Case that operator button acts as equal sign
            num1 = operate(num1, operator, num2);
            display_a.textContent = num1;

            num2 = "";
            o_debounce = true;

            operator = button.value;
        } else { // Normal case
            operator = button.value;
        }
    });
});



eq_button.addEventListener('click', () => {

    if (num1 != "0" && operator == "" && num2 == "") {
        display_a.textContent = num1;
    } else if (num1 != "" && operator != "" && num2 != "") {
        num1 = operate(num1, operator, num2);
        display_a.textContent = num1;
    } else if (num != "" && operator != "" && num2 == "") {
        display_a.textContent = num1;
    } else {
        console.log("NEW ERROR");
    }

    num2 = "";
    o_debounce = false;
    
    document.querySelector('.btnSpecial')?.classList.remove('btnSpecial');
});



clear_button.addEventListener('click', () => {
    display_a.textContent = 0;

    num1 = "0";
    num2 = "";
    operator = "";

    o_debounce = false;

    document.querySelector('.btnSpecial')?.classList.remove('btnSpecial');
});


// Special class adder/remover
o_buttons.forEach(button => {
    button.addEventListener('click', () => {
        document.querySelector('.btnSpecial')?.classList.remove('btnSpecial');
        button.classList.add('btnSpecial');
    });
});