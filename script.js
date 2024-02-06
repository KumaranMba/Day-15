//section div
let entire_div = document.createElement('section');
entire_div.setAttribute("id", "whole");
entire_div.setAttribute("class","bg-dark bg-gradient m-0 p-0 d-flex align-items-center justify-content-center");
entire_div.setAttribute("style","min-height:100vh");
entire_div.style.width="100%";
entire_div.style.fontFamily = 'Montserrat';
document.body.appendChild(entire_div);

// container div
let container_div = document.createElement('div');
container_div.setAttribute("class","container bg-secondary bg-gradient rounded-3 overflow-hidden");
container_div.style.width="90%";
container_div.style.maxWidth = "400px";
entire_div.append(container_div);

// creating parent display

let display_div = document.createElement('div');
display_div.setAttribute("id", "display");
display_div.setAttribute("class","bg-light bg-gradient p-3 m-1 fs-3 rounded-2 w-100 text-end")
display_div.style.height = "3.5 em";
container_div.appendChild(display_div);

//creating display 

let display = document.createElement('div');
display.setAttribute('id','display');
display.textContent= 0;
display_div.appendChild(display);

// create entire_button div
let entire_buttons = document.createElement('div');
entire_buttons.setAttribute('id','entire_button');
entire_buttons.setAttribute("class","text-white");
entire_buttons.style.display='grid';
entire_buttons.style.gridTemplateColumns ="repeat(4,1fr)";
entire_buttons.style.gridTemplateRows ="repeat(4,1fr)";
container_div.appendChild(entire_buttons);

//clear display
let button_all_clear = document.createElement('div');
button_all_clear.setAttribute('id', 'button_all_clear');
button_all_clear.textContent='C';
button_all_clear.setAttribute("class","all_clear bg-black bg-gradient d-flex justify-content-center align-items-center w-100 border border-2 rounded-circle fw-bold ");
entire_buttons.appendChild(button_all_clear);

// button last entity clear

let button_last_entity_clear = document.createElement('div');
button_last_entity_clear.setAttribute('id', 'button_last_entity_clear');
button_last_entity_clear.textContent='DEL';
button_last_entity_clear.setAttribute("class", " last_entity_clear bg-black bg-gradient d-flex justify-content-center align-items-center w-100 border border-2 rounded-circle fw-bold");
entire_buttons.appendChild(button_last_entity_clear);

// button modulus

let button_modulus = document.createElement('div');
button_modulus.setAttribute('id', 'button_modulus');
button_modulus.setAttribute("class","operation");
button_modulus.textContent='%';
entire_buttons.appendChild(button_modulus);

//button divide

let button_divide = document.createElement('div');
button_divide.setAttribute('id', 'button_divide');
button_divide.setAttribute("class", "operation");
button_divide.textContent='/';
entire_buttons.appendChild(button_divide);

//button 7

let button_7 = document.createElement('div');
button_7.setAttribute('id', 'button_7');
button_7.setAttribute("class", "button");
button_7.textContent= 7;
entire_buttons.appendChild(button_7);

// button8
let button_8 = document.createElement('div');
button_8.setAttribute('id', 'button_8');
button_8.setAttribute("class", "button");
button_8.textContent= 8;
entire_buttons.appendChild(button_8);

//button9

let button_9 = document.createElement('div');
button_9.setAttribute('id', 'button_9');
button_9.setAttribute("class", "button");
button_9.textContent= 9;
entire_buttons.appendChild(button_9);

//buttonMultiply

let button_Multiply = document.createElement('div');
button_Multiply.setAttribute('id', 'button_Multiply');
button_Multiply.setAttribute("class", "operation");
button_Multiply.textContent='*';
entire_buttons.appendChild(button_Multiply);

//button4

let button_4 = document.createElement('div');
button_4.setAttribute('id', 'button_4');
button_4.setAttribute("class", "button");
button_4.textContent= 4;
entire_buttons.appendChild(button_4);

//button5

let button_5 = document.createElement('div');
button_5.setAttribute('id', 'button_5');
button_5.setAttribute("class", "button");
button_5.textContent= 5;
entire_buttons.appendChild(button_5);


// button6

let button_6 = document.createElement('div');
button_6.setAttribute('id', 'button_6');
button_6.setAttribute("class", "button");
button_6.textContent= 6;
entire_buttons.appendChild(button_6);

//button_Substract

let button_substract = document.createElement('div');
button_substract.setAttribute('id', 'button_substract');
button_substract.setAttribute("class", "operation");
button_substract.textContent='-';
entire_buttons.appendChild(button_substract);

//button_1

let button_1 = document.createElement('div');
button_1.setAttribute('id', 'button_1');
button_1.setAttribute("class", "button ");
button_1.textContent= 1;
entire_buttons.appendChild(button_1);

//button_2

let button_2 = document.createElement('div');
button_2.setAttribute('id', 'button_2');
button_2.setAttribute("class", "button");
button_2.textContent= 2;
entire_buttons.appendChild(button_2);

//button_3

let button_3 = document.createElement('div');
button_3.setAttribute('id', 'button_3');
button_3.setAttribute("class", "button");
button_3.textContent= 3;
entire_buttons.appendChild(button_3);

//button_Addition

let button_Addition = document.createElement('div');
button_Addition.setAttribute('id', 'button_Addition');
button_Addition.setAttribute("class","operation");
button_Addition.textContent='+';
entire_buttons.appendChild(button_Addition);

//button_0

let button_0 = document.createElement('div');
button_0.setAttribute('id', 'button_0');
button_0.setAttribute("class",
"zero number bg-black bg-gradient d-flex justify-content-center align-items-center w-100 border border-2 fw-bold");
button_0.textContent= 0;
button_0.style.gridArea= "5/ 1/ span 2 /span 2";
button_0.style.width ="9.375 em";
button_0.style.height ="4.6875 em";
button_0.style.borderRadius ="4.6875em";
entire_buttons.appendChild(button_0);

//button_dot

let button_dot = document.createElement('div');
button_dot.setAttribute('id', 'button_dot');
button_dot.setAttribute("class","button");
button_dot.textContent= ".";
entire_buttons.appendChild(button_dot);

//button_equal

let button_equal = document.createElement('div');
button_equal.setAttribute('id', 'button_equal');
button_equal.setAttribute("class",
"equal bg-black bg-gradient d-flex justify-content-center align-items-center w-100 border border-2 rounded-circle fw-bold");
button_equal.textContent= "=";
entire_buttons.appendChild(button_equal);


let all_buttons = document.querySelectorAll('.button');
console.log(all_buttons);
for(let index=0; index < all_buttons.length;index++){
    all_buttons[index].setAttribute("class"," button number bg-black bg-gradient d-flex justify-content-center align-items-center w-100 border border-2 rounded-circle fw-bold");
    all_buttons[index].style.height ="6.25em";
   
}

let all_Operation = document.querySelectorAll(".operation");
console.log(all_Operation);

for(let index=0; index < all_Operation.length;index++){
    all_Operation[index].setAttribute("class"," button operation bg-black bg-gradient d-flex justify-content-center align-items-center w-100 border border-2 rounded-circle fw-bold");
    all_Operation[index].style.height ="6.25em";
    
}


let numbersEl = document.querySelectorAll(".number"); 
let zero = document.querySelector(".zero");
let Equal = document.getElementById('button_equal');
let clearAllEl = document.getElementById('button_all_clear');
let clearLastEl = document.getElementById('button_last_entity_clear');
const displayEl = document.getElementById('display');

//Adding events

window.addEventListener('keydown',(e)=>{
    if(
        e.key ==="0"   ||
        e.key ==="1"   ||
        e.key ==="2"   ||
        e.key ==="3"   ||
        e.key ==="4"   ||
        e.key ==="5"   ||
        e.key ==="6"   ||
        e.key ==="7"   ||
        e.key ==="8"   ||
        e.key ==="9"   ||
        e.key ==="."
    ){
        clickButtonEl(e.key);
        
    } else if(
        e.key === "+" ||
        e.key === "-" ||
        e.key === "/" ||
        e.key ==="*"
    ) {
        clickOperation(e.key);
    }
    else if(e.key.toLocaleUpperCase() === "%" && e.shiftKey){
        e.preventDefault();
        clickOperation("%");
    }
        else if( e.key == "Enter" || e.key === "=")
    {
        clickEqual();
    }else if(e.key =="Delete"){
        Del();
    }else if (e.key == "Backspace") {
        clr();
    }   
 });

let disValue = "";
let lastOperation = null;
let result = "";


const clickButtonEl = function(key) {
    numbersEl.forEach(button => {
        if (button.innerText === key) {
            disValue += button.innerText;
            updateDisplay();
        }
    });
};

const clickOperation = function(key) {
    all_Operation.forEach(button => {
        if (button.innerText === key) {
            if (lastOperation !== null) {
                calculateResult(); // Calculate result before updating disValue with the new operation
            }
            disValue += key; // Use key instead of button.innerText
            lastOperation = key;
            updateDisplay();
        }
    });
};

function clickEqual() {
    calculateResult(); // Calculate the final result
};

const clr = function() {
    if (disValue.length > 0) {
        disValue = disValue.slice(0, -1);
        updateDisplay();
    }
};

const Del = function() {
    disValue = " ";
    lastOperation = null;
    result = 0;
    updateDisplay();
};

const calculateResult = function() {
         try{
        let result = eval(disValue);
        disValue = result.toString(); // Convert result to a string
        lastOperation = "";
        updateDisplay();
    } catch{
        alert('Only numbers are allowed');
    }
    
};
const updateDisplay = function() {
    displayEl.innerText = disValue;
};
