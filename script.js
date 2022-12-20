//Task 1 -- Palindrome -- Not case sensitive
const palindromeInput = document.getElementById('palindrome_input')
const palindromeRes = document.getElementById('palindrome_res')
function checkPalindrome() {
    const string = palindromeInput.value.toLowerCase()
    //reverseString
    const revString = palindromeInput.value.toLowerCase().split('').reverse().join('')
    if (string === revString) {
        palindromeRes.textContent = 'TRUE'
    } else {
        palindromeRes.textContent = 'FALSE'
    }
}

//Task 2 -- Reverse String
const reverseInput = document.getElementById('reverse_input')
const reverseRes = document.getElementById('reverse_result')
function reverseString() {
    reverseRes.textContent = reverseInput.value.split('').reverse().join('')
}

//Task 3 -- Find character on string -- Case sensitive
const stringValue = document.getElementById('string_value')
const charValue = document.getElementById('character_value')
const resCalc = document.getElementById('res_calc')
function getCount() {
    const str = stringValue.value.split('')
    let counter = 0;
    for (let i = 0; i <= str.length; i++) {
        if (str[i] === charValue.value) {
            counter++;
        }
    }
    resCalc.textContent = counter.toString();
}