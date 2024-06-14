console.log('****** Loops Practice *******');


// 1. 'for' loop
console.log('---- 1. For loops ----');
// Example: a for loop to console.log numbers from 0 to 3
console.log('count from 0 to 3');
// start i at 0, while i is < 4 do code between {}, afterwards add 1 to i (i++)
for (let i=0; i<4; i++) {  
  console.log(i);
}

// TODO: Write a for loop to console.log the numbers from 0 to 5 
//   - Which part of the example loop do you need to change to do this?
console.log('count from 0 to 5');

for (let i=0; i<6; i++) {  
  console.log(i);
}

// TODO: Write a for loop to console.log the numbers from 3 to 5
//   - Which part of the example loop do you need to change to do this?
console.log('count from 3 to 5');
for (let i=3; i<6; i++) {  
  console.log(i);
}

// TODO: Write a for loop to console.log EVEN numbers from 2 to 10
//   - Which part of the example loop do you need to change to do this?
console.log('count even numbers from 2 to 10 (2, 4, 6, 8, 10):');
for (let i=0; i<12; i+=2) {  
  console.log(i);
}

// STRETCH: Write a for loop to do a counddown from 5 to 0
console.log('countdown from 5 to 0');
for (let i=5; i<-1; i--) {  
  console.log(i);
}
// does this work? setting it to -1 so that it wont count past 0?


// 2. For of loops  
console.log('---- 2. For Of loop ----');
let stars = ['Polaris', 'Gacrux', 'Formalhaut', 'Rigel', 'Deneb']

// TODO: Write a for of loop to console.log each star in the 'stars' array
console.log('Some stars:');
for (let i=0; i < stars.length; i++) {
  console.log(stars(i))
}
// just getting it down in a format that i understand so i can better understand how to convert it

for (let i of stars) {
  console.log(i);
}


// 3. While loops  
console.log('---- 3. While loop ----');

// TODO: Write a while loop to console.log each star in the 'stars' array
console.log('Some stars using while:');
let j = stars;
do {
  console.log[j];
  j++;
} while(j<4)

  // is this still considered a while loop even if i am using the 'do' command?

// TODO: Write a while loop to console.log the numbers from 0 to 5
console.log('count from 0 to 5');
let k=1;

while(k<6) {
  console.log(k);
  k++;
}

// or is this the way that it is meant to be done?


// TODO: Write a while loop to console.log the numbers from 10 to 5
console.log('count backwards from 10 to 5');
let i =10;

while(i > 4) {
  console.log(i);
  i--;
}