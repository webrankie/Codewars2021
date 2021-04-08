function validate(n) {
    const stringNumber = n.toString();
    let double = true;
    let sum = Number(stringNumber[stringNumber.length - 1]);
    for (let i = stringNumber.length - 2; i >= 0; i--) {
        let digit = Number(stringNumber[i]);
        if (double) {
            digit *= 2;
            double = false;
        } else {
            double = true;
        }
        if (digit > 9) {
            digit -= 9;
        }
        sum += digit;
    }
    return (sum % 10 === 0);
}

console.log(validate(123));
console.log(validate(1));
console.log(validate(2121));
console.log(validate(1230));