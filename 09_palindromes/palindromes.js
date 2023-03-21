const palindromes = function (string) {
    const isPalindromes=string.toLowerCase().replace(/[^a-z]/g, "");
    if(isPalindromes==isPalindromes.split("").reverse().join("")){
        return true;
    }
    else return false;
};

// Do not edit below this line
module.exports = palindromes;
