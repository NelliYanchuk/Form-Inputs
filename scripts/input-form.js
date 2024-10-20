const inputTXT = document.getElementById('tb-string')
const functionUSE = document.getElementById('func')
const enterBTN = document.getElementById('enter-btn')
const outputTXT = document.getElementById('output-box')
const vowels = 'aeiouAEIOU'

function getSentence() {
    outputTXT.innerHTML = inputTXT.value
}

function allVocals() {
    let vocal = []
    let str = inputTXT.value
    for (let char of str) {
        if (vowels.includes(char) && !vocal.includes(char)) {
            vocal.push(char)
        }
    }
    if (functionUSE.value === 'searchVocals') {
        outputTXT.innerHTML = vocal.length > 0 ? JSON.stringify(vocal) : 'No vowels in your string'
    } else if (functionUSE.value === 'deleteDuplicity') {
        outputTXT.innerHTML = JSON.stringify(vocal)
    } else {
        outputTXT.innerHTML = vocal.length > 0 ? vocal.join(',') : 'No vowels in your string'
    }
}

enterBTN.addEventListener('click', function () {
    if (functionUSE.value === 'getSentence') {
        getSentence()
    } else {
        allVocals()
    }
})
