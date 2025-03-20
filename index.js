//First-Question
let extra = "extravaganza";
let lastFour = extra.slice(-4);
console.log(lastFour);



//Second-Question
let fox = "The quick fox jumped over the lazy dog";
let updatedFox= fox.slice(0, 4) + "eat" + fox.slice(4);
console.log(updatedFox);



//Third-Question
let dog = "The quick brown fox jumps over the lazy dog";
let countThe = (dog.match(/the/gi) || []).length;
let countBrown = (dog.match(/brown/gi) || []).length;
console.log(`"the": ${countThe}, "brown": ${countBrown}`);



//forth-Question
let pupils = "The pupils are reading in the library";
let child = "The child was sitting on the table before it fell";
let are = pupils.includes("are");
let sitting = child.includes("sitting");
console.log(`Are found: ${are}, Sitting found: ${sitting}`);



//Fifth-Question

// 1. UpperCase
let upperCase = "wonderful".toUpperCase();
console.log(upperCase);


// 2. LowerCase
let lowerCaseA = "amazing".toLowerCase();
let lowerCaseB = "UndERneath".toLowerCase();
console.log(lowerCaseA, lowerCaseB);


// 3. Title case
let titleCaseC = "A wonderful world".split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
console.log(titleCaseC);