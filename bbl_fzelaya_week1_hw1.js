// Write a function called squareNumber that will take one argument (a 
// number), square that number, and return the result. It should also log
// a string like The result of squaring the number 3 is 9.

function squareNumber(aNumber) {

    var aNumberSquared = Math.pow(aNumber,2);

    console.log("The result of squaring the number " + aNumber + " is " + aNumberSquared);

    return aNumberSquared;
    
}

squareNumber(9);

// Write a function called halfNumber that will take one argument (a
// number), divide it by 2, and return the result. It should also log a
// string like Half of 5 is 2.5.

function halfNumber(aNumber) {

    var halfANumber = aNumber / 2;

    console.log("Half of " + aNumber + " is " + halfANumber);

    return halfANumber;

}

halfNumber(80);

// Write a function called percentOf that will take two numbers, figure
// out what percent the first number represents of the second number,
// and return the result. It should also log a string like 2 is 50% of 4.

function percentOf(numberOne, numberTwo) {

    var percentage = (numberOne/numberTwo) * 100;

    console.log(numberOne + " is " + percentage + "% of " + numberTwo);

    return percentage;

}

percentOf(2,4);

// Write a function called areaOfCircle that will take one argument
// (the radius), calculate the area based on that, and return the result. It
// should also log a string like The area for a circle with radius 2 is 12.566370614359172.
// ◦ Bonus: Round the result so there are only two digits after the decimal.

function areaOfCircle(aRadius) { 

    var area = Math.PI * Math.pow(aRadius,2); 
    var areaRounded = Math.round(area * 100) / 100;

    console.log("The area for a circle with radius " + aRadius + " is exactly " + area + ", rounded " + areaRounded);    
    
    return areaRounded;

}

areaOfCircle(2);

// Write a function that will take one argument (a number) and perform
// the following operations, using the functions you wrote earlier1:
// 1. Take half of the number and store the result.
// 2. Square the result of #1 and store that result.
// 3. Calculate the area of a circle with the result of #2 as the radius.
// 4. Calculate what percentage that area is of the squared result (#3).

function performCalc(aNumber) {
    var halfNum = halfNumber(aNumber);
    var numSquared = squareNumber(halfNum);
    var area = areaOfCircle(numSquared);
    var percentage = percentOf(area,numSquared);
} 

performCalc(4);

// Create a function called DrEvil. It should take a single argument, an
// amount, and return '<amount> dollars', except it will add '(pinky)' at the
// end if the amount is 1 million. For example:
//  DrEvil(10): 10 dollars
//  DrEvil(1000000): 1000000 dollars (pinky) 

function drEvil(amount) {

    var outputStr;

    if(amount === 1000000){
        outputStr = amount + ' dollars (pinky)';
    }else{
        outputStr = amount + ' dollars';
    }

    console.log(outputStr);

    return outputStr;
}

drEvil(1000000);

// Create a function called mixUp. It should take in two strings, and return the
// concatenation of the two strings (separated by a space) slicing out and
// swapping the first 2 characters of each. You can assume that the strings
// are at least 2 characters long. For example:
//  mixUp('mix', pod'): 'pox mid'
//  mixUp('dog', 'dinner'): 'dig donner' 

function mixUp(strOne, strTwo) {

    var newStrOne = strOne.replace((strOne.substr(0,2)),(strTwo.substr(0,2)));
    var newStrTwo = strTwo.replace((strTwo.substr(0,2)),(strOne.substr(0,2)));
    var strsConcat = newStrOne.concat(" ").concat(newStrTwo);

    console.log(strsConcat);

    return strsConcat;

}

mixUp('mix', 'pod');

// Create a function called fixStart. It should take a single argument, a
// string, and return a version where all occurences of its first character have
// been replaced with '*', except for the first character itself. You can assume
// that the string is at least one character long. For example:
// fixStart('babble'): 'ba**le' 

function fixStart(aString) {

    var firstLetter = aString.substr(0,1);
    var newString = firstLetter + aString.substr(1,aString.length).replace(new RegExp(firstLetter, 'g'),'*');
    
    console.log("The first letter in " + aString + " is " + firstLetter);
    console.log(newString); 

    return newString;

}

fixStart('babble');

// Create a function called verbing. It should take a single argument, a
// string. If its length is at least 3, it should add 'ing' to its end, unless it
// already ends in 'ing', in which case it should add 'ly' instead. If the string
// length is less than 3, it should leave it unchanged. For example:
//  verbing('swim'): 'swimming'
//  verbing('swimming'): 'swimmingly'
//  verbing('go'): 'go' 

function verbing(aString) {

    var newString;

    if(aString.length >= 3){
        if(aString.endsWith('ing')){
            newString = aString.concat('ly');
        }else{
            newString = aString.concat('ing');
        }
    }else{
        newString = aString;
    }

    console.log(newString);

    return newString;

}

verbing('go'); 

// Create a function called notBad that takes a single argument, a string.
	//  •	 It should find the first appearance of the substring 'not' and 'bad'.
	//  •	 If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
	//  •	 If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.
// For example:
//  notBad('This dinner is not that bad!'): 'This dinner is good!'
//  notBad('This movie is not so bad!'): 'This movie is good!'
//  notBad('This dinner is bad!'): 'This dinner is bad!'

function notBad(aString) {

    var indexOfNot = aString.indexOf('not');
    var indexOfBad = aString.indexOf('bad');

    console.log("index Of Not " + indexOfNot);
    console.log("index Of Bad " + indexOfBad); 

    var newString;

    if(indexOfBad > indexOfNot && (indexOfBad > 0 && indexOfNot > 0)){
        newString = aString.replace((aString.substr(indexOfNot,indexOfBad)),'good');
    }else{
        newString = aString;
    }

    console.log(newString);

    return newString;

}

notBad('This dinner is not so bad!');