function generatePassword(length, includeLowerCase, includeUpperCase, includeSpecialCharacters, includeNumbers){

    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+-=<>";

    let allowed = "";
    let password = "";
    
    allowed += includeLowerCase ? lowerCase : "";
    allowed += includeUpperCase ? upperCase : "";
    allowed += includeSpecialCharacters ? symbols : "";
    allowed += includeNumbers ? numbers : "";

    if(length <= 5){
        return `Password length must be at least 6`;
    }

    if(allowed.length === 0){
        return `At least one character type must be included`;
    }

    for(let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * allowed.length);
        password += allowed[randomIndex]; 
    }

    return password;
}

const passwordLength = 12;
const includeLowerCase = true;
const includeUpperCase = true;
const includeSpecialCharacters = true;
const includeNumbers = true;

const generatedPassword = generatePassword(passwordLength, includeLowerCase, includeUpperCase, includeSpecialCharacters, includeNumbers);

console.log(`Generated Password: ${generatedPassword}`);
