//tax calculation

function calculateTax(salary){
    let tax = 0;

    switch(true){
        case(salary>0 && salary <=500000):
        tax = 0;
        break;

        case(salary > 500000 && salary <=1000000):
        tax = salary * 0.10;
        break;

        case(salary > 1000000 && salary <=1500000):
        tax = salary * 0.20;
        break;

        case(salary > 1500000):
        tax = salary * 0.30;
        break;

        default:
            return "Invalid salary input"
    }

    return tax;
}

// Example usage:
console.log(calculateTax(450000) + "% tax deducted from your salary.");  // Output: 0
console.log(calculateTax(750000) + "% tax deducted from your salary.");  // Output: 75000
console.log(calculateTax(1250000) + "% tax deducted from your salary."); // Output: 250000
console.log(calculateTax(2000000) + "% tax deducted from your salary."); // Output: 600000