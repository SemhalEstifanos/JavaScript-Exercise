//First-Question
let extra = "extravaganza";
let lastFour = extra.slice(-4);
console.log(lastFour);



//Second-Question
let fox = "The quick fox jumped over the lazy dog";
let updatedFox= fox.slice(0, 4) + "eat" + fox.slice(4);
console.log(updatedFox);



//Question 3
const story = "The quick brown fox jumps over the lazy dog";
let theCount = story.toLowerCase().split("the").length - 1;
let brownCount = story.toLowerCase().split("brown").length - 1;
console.log(`"the" appears ${theCount} times`);
console.log(`"brown" appears ${brownCount} times`);



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