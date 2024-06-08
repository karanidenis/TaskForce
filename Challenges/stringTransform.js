// Problem Statement: Given a string, transform it based on the following rules: 
// ● If the length of the string is divisible by 3, reverse the entire string. 
// ● If the length of the string is divisible by 5, replace each character with its ASCII code.
// ● If the length of the string is divisible by both 3 and 5 (i.e., divisible by 15), perform both operations in the order specified above. 

// Example: Input: "Hamburger" 
// Output: "regrubmaH" 
// Explanation: The length of the string is 9, which is divisible by 3 but not by 5 or 15. Therefore, the string is reversed, resulting in "regrubmaH". 

// Example: Input: "Pizza" 
// Output: "80 105 122 122 97" 
// Explanation: The length of the string is 5, which is divisible by 5 but not by 3 or 15. Therefore, each character is replaced by its ASCII code, resulting in "80 105 122 122 97".

function stringTransform(str) {
    if (str.length % 15 === 0) {
        return str.split('').reverse().join('').split('').map(char => char.charCodeAt(0)).join(' ');
    } else if (str.length % 3 === 0) {
        return str.split('').reverse().join('');
    } else if (str.length % 5 === 0) {
        return str.split('').map(char => char.charCodeAt(0)).join(' ');
    } else {
        return str;
    }
}

console.log(stringTransform("Hamburger"));
console.log(stringTransform("Pizza"));
console.log(stringTransform("Chocolate Chip Cookie"));
console.log(stringTransform("Hello how are u"));