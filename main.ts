// Day 06  #100daysofcodingchallenge 


// Question 22

const days : string [] = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
//console.log(days{7})

console.log(days[5]);

    // Question 23


    let car = 'subaru';

    // Test 1
    console.log("Is car == 'subaru'? I predict True.");
    console.log(car == 'subaru');
    
    // Test 2
    console.log("Is car != 'toyota'? I predict True.");
    console.log(car != 'toyota');
    
    // Test 3
    console.log("Is car === 'Covi'? I predict False.");
    console.log(car === 'covi');
    
    // Test 4
    console.log("Is car !== 'honda'? I predict True.");
    console.log(car !== 'honda');
    
    // Test 5
    console.log("Is car.startsWith('du')? I predict False.");
    console.log(car === ('du'));
    
    // Test 6
    console.log("Is car.includes('ba')? I predict False.");
    console.log(car ===('ba'));
    
    // Test 7
    let isJapanese = false;
    console.log("Is car === 'subaru' && isJapanese? I predict False.");
    console.log(car === 'subaru' && isJapanese);
    
    // Test 8
    let hasFourLetters = car.length === 4;
    console.log("Is car.length === 4 || HasFourLetters? I predict True.");
    console.log(car.length !== 4 || hasFourLetters);
    
    // Test 9
    let hasVowels = car.includes('a') || car.includes('e') || car.includes('i') || car.includes('o') || car.includes('u');
    console.log("Does car have vowels? I predict True.");
    console.log(hasVowels);
    
    // Test 10
    let isUpperCase = car.toUpperCase() === car;
    console.log("Is car in uppercase? I predict False.");
    console.log(isUpperCase);
    