const isValidPassword = (pass) => {
    if (pass.length < 6)
        return "Invalid, should contain more than 5 characters";

    let numFlag = false;
    let capitalFlag = false;
    let smallFlag = false;
    let symbolFlag = false;
    let symbols = `!@#$%^&*(),.<>/';:"][{}|?`;

    for (let i = 0; i < pass.length; i++) {
        if (pass[i] >= "0" && pass[i] <= "9") numFlag = true;
        if (pass[i] >= "a" && pass[i] <= "z") smallFlag = true;
        if (pass[i] >= "A" && pass[i] <= "Z") capitalFlag = true;
        if (symbols.includes(pass[i])) symbolFlag = true;
    }

    if (!numFlag) return "number is missing";
    if (!smallFlag) return "small letter is missing";
    if (!capitalFlag) return "capital letter is missing";
    if (!symbolFlag) return "special character is missing";

    return "Valid Password";
};

module.exports = isValidPassword;
