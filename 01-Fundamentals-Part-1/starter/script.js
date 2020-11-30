// variable assignment
let country = "United States"
let continent = "North America"
let population = 3282000000
// console.log(country, continent, population)

// dataType assignment
// let isIsland = false;
// let language;
// console.log(typeof country,typeof population,typeof isIsland,typeof language)

// let,const, and var assignment
language = "English"


// basic operations assignment 

// operator precedence assignment 

// coding challenge 1

const markHeight = 1.6;
const markMass = 78;

const johnHeight = 1.88;
const johnWeight = 95;

// BMI = mass / height ** 2 = mass / (height * height)

function bmi(height, mass){
   return mass / (height ** 2)

}

let markBmi = bmi(markHeight, markMass)
let johnBmi = bmi(johnHeight, johnWeight)
console.log(markBmi, johnBmi)

let markHigherBMI = markBmi > johnBmi

console.log(markHigherBMI)