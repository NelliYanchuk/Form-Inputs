const inputTXT = document.getElementById('tb-string')
const functionUSE = document.getElementById('func')
const enterBTN = document.getElementById('enter-btn')
const outputTXT = document.getElementById('output-box')
const vowels = 'aeiouAEIOU';

function getSentence () {
  outputTXT.innerHTML = inputTXT.value
}

function getVocals () {
    let vocal = [];
    var str = inputTXT.value;
    
    for (let char of str) {
      if (vowels.includes(char) && !vocal.includes(char)) {
          vocal.push(char); }
    }
    outputTXT.innerHTML = vocal.length > 0 ? vocal.join(',') : 'No vowels in your string'; 
  }
  

function searchVocals () {
    let vocal = [];
    var str = inputTXT.value;
    for (let char of str) {
      if (vowels.includes(char) && !vocal.includes(char)) {
        vocal.push(char);
      }}
      outputTXT.innerHTML = vocal || 'No vowels in your string';
  }

enterBTN.addEventListener('click', function () {
  if (functionUSE.value === 'getSentence') {
    getSentence()
  } else if (functionUSE.value === 'searchVocals') {
    searchVocals()
  } else if (functionUSE.value === 'deleteDuplicity') {
    deleteDuplicity()
  } else if (functionUSE.value === 'getVocals') {
    getVocals()
  }
})
