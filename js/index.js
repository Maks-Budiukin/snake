const LEFT = 37;
const UP = 38;
const RIGHT = 39;
const DOWN = 40;


const square = document.querySelector('.square');
const square2 = document.querySelector('.square2');
const square3 = document.querySelector('.square3');
const square4 = document.querySelector('.square4');
const square5 = document.querySelector('.square5');

document.addEventListener('keyup', move);

let x = 0;
let y = 0;

let L;
let R;
let U;
let D;


function clearIntervals() {
    window.clearInterval(L);
    window.clearInterval(R);
    window.clearInterval(U);
    window.clearInterval(D);
}

function onFailureReset() {
    if (x <= -270 || x >= 240 || y <= -120 || y >= 180) {
            setTimeout(() => {
                reset();
            }, 200);
            
            clearIntervals();
        }
}

function move(event) {
    
    if (event.keyCode === DOWN) {
        clearIntervals()
        D = setInterval(() => {
        y += 30;
            square.setAttribute("style", `transform: translate(${x}px, ${y}px);transition: transform 0.3s ease`)
            setTimeout(() =>            
                square2.setAttribute("style", `${square.getAttribute('style')}`), 250);
            setTimeout(() =>            
                square3.setAttribute("style", `${square2.getAttribute('style')}`), 240);
            setTimeout(() =>            
                square4.setAttribute("style", `${square3.getAttribute('style')}`), 230);
            setTimeout(() =>            
                square5.setAttribute("style", `${square4.getAttribute('style')}`), 220);
            onFailureReset() 
    }, 300);
        
    } else if (event.keyCode === UP) {
        clearIntervals()
        U = setInterval(() => {
        y -= 30;
            square.setAttribute("style", `transform: translate(${x}px, ${y}px);transition: transform 0.3s ease`)
            setTimeout(() =>            
                square2.setAttribute("style", `${square.getAttribute('style')}`), 250);
            setTimeout(() =>            
                square3.setAttribute("style", `${square2.getAttribute('style')}`), 240);
            setTimeout(() =>            
                square4.setAttribute("style", `${square3.getAttribute('style')}`), 230);
            setTimeout(() =>            
                square5.setAttribute("style", `${square4.getAttribute('style')}`), 220);
            onFailureReset() 
    }, 300);
        
    } else if (event.keyCode === LEFT) {
        clearIntervals()
        L = setInterval(() => {
        x -= 30;
            square.setAttribute("style", `transform: translate(${x}px, ${y}px);transition: transform 0.3s ease`)
            const a = setTimeout(() =>            
                square2.setAttribute("style", `${square.getAttribute('style')}`), 250);
            const b =setTimeout(() =>            
                square3.setAttribute("style", `${square2.getAttribute('style')}`), 240);
            const c =setTimeout(() =>            
                square4.setAttribute("style", `${square3.getAttribute('style')}`), 230);
            const d =setTimeout(() =>            
                square5.setAttribute("style", `${square4.getAttribute('style')}`), 220);
            const e =onFailureReset()  
    }, 300);
        
    } else if (event.keyCode === RIGHT) {
        clearIntervals()
        R = setInterval(() => {
        x += 30;
            square.setAttribute("style", `transform: translate(${x}px, ${y}px);transition: transform 0.3s ease`)
            setTimeout(() =>            
                square2.setAttribute("style", `${square.getAttribute('style')}`), 250);
            setTimeout(() =>            
                square3.setAttribute("style", `${square2.getAttribute('style')}`), 240);
            setTimeout(() =>            
                square4.setAttribute("style", `${square3.getAttribute('style')}`), 230);
            setTimeout(() =>            
                square5.setAttribute("style", `${square4.getAttribute('style')}`), 220);
            onFailureReset() 
    }, 300);
        
    }
}

function reset() {
    x = 0;
    y = 0;
    square.setAttribute("style", `transform: translate(${x}px, ${y}px);transition: transform 0.3s ease`);
    square2.setAttribute("style", `transform: translate(${x}px, ${y}px);transition: transform 0.3s ease`);
    square3.setAttribute("style", `transform: translate(${x}px, ${y}px);transition: transform 0.3s ease`);
    square4.setAttribute("style", `transform: translate(${x}px, ${y}px);transition: transform 0.3s ease`);
    square5.setAttribute("style", `transform: translate(${x}px, ${y}px);transition: transform 0.3s ease`);
    
    
    
}

