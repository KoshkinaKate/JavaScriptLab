// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = n1 + n2 + n3 + n4 == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique =
  n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis =
  n1 + n2 + n3 + n4 == 50 &&
  (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2 &&
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) &&
  n1 != n2 &&
  n1 != n3 &&
  n1 != n4 &&
  n2 != n3 &&
  n2 != n4 &&
  n3 != n4;

//   DIVISIBLE BY 5;
const allDivisibleBy5 =
  n1 % 5 === 0 && n2 % 5 === 0 && n3 % 5 === 0 && n3 % 5 === 0;

console.log("Are all divisible by 5?", allDivisibleBy5);

// Second is larger
const isFirstLargerThanLast = n1 > n4;

console.log("Is first larger than last?", isFirstLargerThanLast);
// 3.
const arithmetic = ((n2 - n1) * n3) % n4;

console.log("The result", arithmetic);

// 4.
const isAllUnder26 = n1 <= 25 && n2 <= 25 && n3 <= 25 && n4 <= 25;

// const isValid = isSum50 && isTwoOdd && isAllUnder26 && isUnique;
console.log("Numbers under 26", isAllUnder26);
// PART 2.

const distance = 1500;

const feulEff55 = 30;
const feulEff60 = 28;
const feulEff75 = 23;
const budget = 175;
const costPerGallon = 3;
const mpg55 = 55;
const mpg60 = 60;
const mpg75 = 75;

// 1. Gal per mil for a trip

// 1500 at 55
const distance55 = distance / feulEff55;
console.log("miles for 55mph", distance55);
// 1500 at 60
const distance60 = distance / feulEff60;
console.log("miles for 60mph", distance60);
// 1500 at 75
const distance75 = distance / feulEff75;
console.log("miles for 75mph", distance75);

// 2. COST
// 1500 at 55
const distanceCost55 = (distance / feulEff55) * costPerGallon;
console.log("price for 55mph", distanceCost55);
// 1500 at 60
const distanceCost60 = (distance / feulEff60) * costPerGallon;
console.log("price for 60mph", distanceCost60);
// 1500 at 75
const distanceCost75 = (distance / feulEff75) * costPerGallon;
console.log("price for 75mph", distanceCost75);

// 3. ENOUGH BUDGET YES OR NO
const compare55 = distanceCost55 < budget;
console.log("Is it true that budget for 55 miles is enough?", compare55);

const compare60 = distanceCost60 < budget;
console.log("Is it true that budget for 55 miles is enough?", compare60);

const compare75 = distanceCost75 < budget;
console.log("Is it true that budget for 75 miles is enough?", compare75);

// 4. HOW MANY HOURS TRIP WILL TAKE
const timeFor55 = distance / mpg55;
console.log("hours for 55mpg", timeFor55);

const timeFor60 = distance / mpg60;
console.log("hours for 60mpg", timeFor60);

const timeFor75 = distance / mpg75;
console.log("hours for 75mpg", timeFor75);
