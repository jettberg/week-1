console.log('****** Part Supply *******');
// REQUIRED FEATURES

// 1. Create a variable called 'partsNeeded' with a value of the number 40 
//    & console.log the variable
console.log('1. Number of partsNeeded:');
var partsNeeded = 40;
console.log(partsNeeded);

// 2. Create a variable call 'supplyChanges' set it to an array containing
//    the following numbers: 3, 5, -6, 0, 7, 11
console.log('2. Array of supplyChanges:');
var supplyChanges = [3, 5, -6, 0, 7, 11];

// 3. Console log the value of 'supplyChanges' at index 2
console.log('3. Item at index 2 is:');
console.log(supplyChanges [3]);

// 4. The last item was added by mistake. Remove it from the 'supplyChanges' 
//    array & console.log the value removed.
console.log('4. Removed item:');
console.log (supplyChanges.pop());

// is this how it works? im using pop to take off the last thing in the list while also console logging the action?



// 5. A delivery of 25 more parts arrived. Add the value 25 to the end of the array
console.log('5. Adding 25 to supplyChanges.'); 
supplyChanges.push(25);


// 6. Write a `for` loop that shows each value in the 'supplyChanges' array
//    Use a console.log formatted as follows, where x is the value from the array
//    - if it is a positive number (greater than 0), log 'Added x parts.' 
//    - if the value is 0, skip it. Do not log it to the console.
//    - if the value is negative, format the log as 'Part count -x.' 
console.log('6. Showing supplyChanges...');

for (let i=0; i<supplyChanges.length; i++ ){
    console.log (supplyChanges[i]);
    if( supplyChanges[i] > 0) {
        console.log('Added x parts');
    } else if ( supplyChanges[i] < 0) {
        console.log( 'Part count -x.');
    }
}

// after writing this and rereading the question i realized that i can/need to subsititue all the variables to just = x
for (let i=0; i<supplyChanges.length; i++ ){
    console.log (supplyChanges[i]);

let (supplyChanges[i]) = x;
    if( x > 0) {
        console.log('Added x parts');
    } else if ( x < 0) {
        console.log( 'Part count -x.');
    }
}
// is this a proper substituion?



// STRETCH GOALS
console.log('---  Stretch Goals  ---');
// 7. Rewrite the `for` loop from #6 as a `for of` loop. 
console.log('7. Showing supplyChanges with "for of" loop');

for( value in supplyChanges){
    console.log(value);
}

let (supplyChanges[i]) = x;
    if( x > 0) {
        console.log('Added x parts');
    } else if ( x < 0) {
        console.log( 'Part count -x.');
    }

// 8. Rewrite the `for` loop from #6 as a `while` loop.
console.log('8. Showing supplyChanges with "while" loop');

while(x < supplyChanges.length){
    console.log(x);
}

let (supplyChanges[i]) = x;
    if( x > 0) {
        console.log('Added x parts');
    } else if ( x < 0) {
        console.log( 'Part count -x.');
    }

// 9. Write a loop to determine the total number of parts available by
//    adding up all the numbers in the 'supplyChanges' array.
console.log('9. Total supplies available is:');


let count = 0;
while (x < supplyChanges.length){
count + x;
}

console.log(count);