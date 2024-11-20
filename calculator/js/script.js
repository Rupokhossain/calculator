let display = document.getElementById("display");

// append numbers or operator to the display
function appendToDisplay(value) {
    if(display.textContent === "0") {
        display.textContent = value;
    } else {
        display.textContent += value;
    }
}

// clear the display
function clearDisplay() {
    display.textContent = "0";
}

// remove the last character
function backSpace() {
    display.textContent = display.textContent.slice(0. -1) || "0";
}

// calculate the result 
function calculateResult() {
    try {
        display.textContent = eval(display.textContent) || "0";
    }
    catch(e) {
        display.textContent = "Error";
    }
}