// Variables

const num_buttons = document.querySelectorAll('.box');

const display_b = document.querySelector('.display-b');

const display_a = document.querySelector('.display-a');



// Operation variables
let num1 = "";
let num2 = "";
let operator = "";






// Functions

function operate(num1, operator, num2) {
    
};

// function getNum1(num) {
//     return num;
// };


num_buttons.forEach(button => {
    button.addEventListener('click', () => {
        num1 += button.value;

        console.log(num1);
    });
});





// Needs rework
// num_buttons.forEach(button => {
//     button.addEventListener('click', () => {
//         let num1_dis = '';

//         // Case that button's value is a number
//         if (display_a.textContent == 0) { // Might break later on
//             display_a.textContent = button.value;
//             num1_dis = button.value;
//         }
//         else {
//             display_a.textContent += button.value;
//             num1_dis += button.value;
//         }

//         // Case that button's value is an operator
//         if (['*', '/', '+', '-'].includes(button.value)) {
//             display_a.textContent = button.value;

//             console.log(num1_dis);
//         }

//     });
// });