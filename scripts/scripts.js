/*
    JavaScript for Text Compare App
    Written by: Aaron McCollum
*/

// Declaring global variables for DOM nodes
const results = document.getElementById('results');
const clearButtonVar = document.getElementById('clearButton');
const submitButtonVar = document.getElementById('submitButton');

// Refresh page with onclick event listener on the clear button
clearButtonVar.addEventListener('click', function () {
    window.location.reload();
}, false);

// Text analysis function
function compareText() {
    // Clear the Results area when the Submit button is clicked
    results.innerText = "";

    // Get values from textbox
    const textAreaOne = document.getElementById('textAreaOne');
    const textAreaTwo = document.getElementById('textAreaTwo');

    let indexWithChange;
    let count;
    const userInput1String = textAreaOne.value;
    const userInput2String = textAreaTwo.value;

    // Loop through values in textbox1 and compare to index of textbox2
    for (let i = 0; i < userInput1String.length; i++) {
        count = 0;
        if (userInput1String[i] === userInput2String[i]) {
            continue;
        } else {
            // If a change is detected, stop the program, return index value of where change is at
            count += 1;
            indexWithChange = i;
            results.innerHTML += `<p>There is a difference starting at index ${indexWithChange}</p>`;
            break;
        }
    }

    // If no change is detected, print "No differences" on the browser screen
    if (count === 0) {
        results.innerHTML += `<p>No differences between text inputs.</p>`;
    }
}

// Add event listener to submit button
submitButtonVar.addEventListener('click', compareText);
