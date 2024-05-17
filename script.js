// stores buttons html content inside of an array called buttons
// console.log(buttons[1]) returns <div class="button btnNum">2</div>
//gains access to the HTML elements
let buttons = document.querySelectorAll('.btnNum');
let operators = document.querySelectorAll('.btnSpcl')
let display = document.querySelector('.display')
let equal = document.querySelector('[equal]')
let clear = document.querySelector('.AllClear')

// for of loop
// gain access to the number buttons
for (let button of buttons) {
    let newValue = button.innerHTML;
    button.addEventListener('click', () => {
        display.innerText += newValue
    })
}
// Check if the display already contains an operator or dot
// adds the value if it didn't break 
// the loop runs everytime any operator or dot button is clicked through an event listener
for (let operator of operators) {
    operator.addEventListener('click', () => {
        let newValue1 = operator.innerHTML;
        if (display.innerText.includes("*")) return;
        if (display.innerText.includes("/")) return;
        if (display.innerText.includes("+")) return;
        if (display.innerText.includes("-")) return;
        if (display.innerText.includes(".")) return;
        display.innerText += newValue1;
    })
}


// clear and equal to buttons

clear.addEventListener('click', () => { display.innerText = "" })
equal.addEventListener('click', () => {
    calculation = eval(display.innerText)
    display.innerText = calculation
})