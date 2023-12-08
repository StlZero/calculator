// Variables

const num_buttons = document.querySelectorAll('.box');

const dot_button = document.querySelector('.box-dot')

const o_buttons = document.querySelectorAll('.box-o');

const eq_button = document.querySelector('.box-eq');

const display_b = document.querySelector('.display-b');

const display_a = document.querySelector('.display-a');

const delete_button = document.querySelector('.delete')

const clear_button = document.querySelector('.clear')

// Operation variables
let num1 = "0";
let num2 = "";
let operator = "";

let const_num2 = "";


// Debounce variables
let dot_debounce = false;

let o_debounce = false;


// Functions

function operate(num1, operator, num2) {
    if (operator == '+') {
        return (parseInt(num1) + parseInt(num2)).toString();
    } else if (operator == '-') {
        return (parseInt(num1) - parseInt(num2)).toString();
    } else if (operator == '*') {
        return (parseInt(num1) * parseInt(num2)).toString();
    } else if (operator == '/') {
        return (parseInt(num1) / parseInt(num2)).toString();
    } else {
        return 'ERROR';
    }
};



num_buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (num1 == "0" && o_debounce == false) { // Case that first number is being clicked
            num1 = button.value;
            display_a.textContent = num1;
        } else if (num1 != "0" && o_debounce == false) { // Case that the first number is more than one digit
            num1 += button.value;
            display_a.textContent = num1;
        } else if (num2 == "" && o_debounce == true) { // Case that second number is being clicked
            num2 = button.value;
            display_a.textContent = num2;

            document.querySelector('.btnSpecial')?.classList.remove('btnSpecial');
        } else if (num2 != "" && o_debounce == true) { // Case that the second number is more than one digit
            num2 += button.value;
            display_a.textContent = num2;

            document.querySelector('.btnSpecial')?.classList.remove('btnSpecial');
        }
    });
});

dot_button.addEventListener('click', () => {
    if (dot_debounce == false) {
        if (o_debounce == false) {
            num1 += ".";
            display_a.textContent = num1;
    
        } else if (o_debounce == true) {
            if (num2 == "") {
                num2 = "0.";
                display_a.textContent = num2;
            } else if (num2 != "") {
                num2 += ".";
                display_a.textContent = num2;
            }
        };
    };

    dot_debounce = true;
});



delete_button.addEventListener('click', () => {
    if (o_debounce == true && num2 == "") { // Case that a number is deleted after operator-operation
        num1 = num1.slice(0, -1);
        display_a.textContent = num1;

        if (num1 == "") {
            num1 = "0";
            display_a.textContent = num1;
        }
    } else if (o_debounce == false) {
        num1 = num1.slice(0, -1);
        display_a.textContent = num1;

        if (num1 == "") {
            num1 = "0";
            display_a.textContent = num1;
        }
    } else {
        num2 = num2.slice(0, -1);
        display_a.textContent = num2;
        
        if (num2 == "") {
            num2 = "0";
            display_a.textContent = num2;
        }
    } 

});



o_buttons.forEach(button => {
    button.addEventListener('click', () => {

        if (o_debounce == true) {
            if (num2 == "") {
                operator = button.value;
            } else {
                num1 = operate(num1, operator, num2).toString();
                display_a.textContent = num1;
    
                num2 = "";
            }  
        } else {
            o_debounce = true;
        }

        operator = button.value;

        dot_debounce = false;
    });
});



eq_button.addEventListener('click', () => {
    if (o_debounce == true) {
        num1 = operate(num1, operator, num2).toString();
        display_a.textContent = num1;
    
        num2 = "";
        o_debounce = false;
    } else {
        display_a.textContent = num1;
    }

    dot_debounce = false;
    
    document.querySelector('.btnSpecial')?.classList.remove('btnSpecial');
});



clear_button.addEventListener('click', () => {
    display_a.textContent = 0;

    num1 = "0";
    num2 = "";
    operator = "";

    dot_debounce = false;
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