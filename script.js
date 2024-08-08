let stack = [];

function push() {
    const inputValue = document.getElementById('inputValue').value;
    const message = document.getElementById('message');
    
    if (inputValue === "") {
        message.textContent = "Please enter a value to push.";
        return;
    }
    
    stack.push(inputValue);
    updateStackDisplay();
    message.textContent = `"${inputValue}" pushed to stack.`;
    document.getElementById('inputValue').value = ""; // Clear input field
}

function pop() {
    const message = document.getElementById('message');
    
    if (stack.length === 0) {
        message.textContent = "Stack is empty. Nothing to pop.";
        return;
    }
    
    const poppedValue = stack.pop();
    updateStackDisplay();
    message.textContent = `"${poppedValue}" popped from stack.`;
}

function updateStackDisplay() {
    const stackDisplay = document.getElementById('stack');
    stackDisplay.innerHTML = ""; // Clear current display

    stack.forEach(item => {
        const stackItem = document.createElement('div');
        stackItem.className = 'stack-item';
        stackItem.textContent = item;
        stackDisplay.appendChild(stackItem);
    });
}