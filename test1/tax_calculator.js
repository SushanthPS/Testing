const taxCalc = (income, savings) => {
    let deduct = 0;
    let tax = 0;

    if (income < 500000) deduct = (50 / 100) * savings;
    else if (income < 1000000) deduct = (30 / 100) * savings;
    else deduct = (10 / 100) * savings;

    if (deduct > 50000) deduct = 50000;

    let newIncome = income - deduct;

    if (income < 250000) tax = 0;
    else if (income < 500000) tax = (10 / 100) * newIncome;
    else if (income < 1000000) tax = (20 / 100) * newIncome;
    else tax = (30 / 100) * newIncome;

    return Math.round(tax);
};

module.exports = taxCalc;
