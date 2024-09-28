console.log("Answer for Q8: ");

function repeatedSum(num) {
    while (num > 9) {
        num = num.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
    }
    return num;
}

console.log(repeatedSum(456)); // Output: 6
