const inputTXT = document.getElementById('tb-string');
const functionUSE = document.getElementById('func');
const enterBTN = document.getElementById('enter-btn');
const outputTXT = document.getElementById('output-box');

function getSentence() {
    outputTXT.innerHTML = inputTXT.value;
}

enterBTN.addEventListener('click', function() {
    if (functionUSE.value === 'getSentence') {
        getSentence();
    }
});
