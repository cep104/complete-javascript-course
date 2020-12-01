
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

// coding challenge 2

if(markHigherBMI)

console.log(`Mark's (${markBmi}) is higher than John's!`)
else
console.log(`John's (${johnBmi}) is higher than Mark's!`)

// coding challenge 3

// Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

let dolphinsScore = (96 + 108 + 89)/ 3 
let koalasScore = (88 + 91 + 110)/ 3

console.log(dolphinsScore, koalasScore)

if(dolphinsScore > koalasScore){
    console.log(dolphinsScore)
}
if(koalasScore > dolphinsScore){
    console.log(koalasScore)
}
if(koalasScore === dolphinsScore){
    console.log(`it's a draw`)
}

dolphinsScore = (97 + 112 + 101)/ 3 
 koalasScore = (109 + 95 + 123)/ 3

 if(dolphinsScore > koalasScore && dolphinsScore > 100){
    console.log(`Dolphins win with a score of: ${dolphinsScore}`)
 }else if(koalasScore > dolphinsScore && koalasScore > 100){
    console.log(`Koalas win with a score of: ${koalasScore}`)
    }else{
       console.log(`no one wins`) 
    }

    dolphinsScore = (97 + 112 + 101)/ 3 
    koalasScore = (109 + 95 + 106)/ 3

    if(dolphinsScore > koalasScore && dolphinsScore > 100){
        console.log(`Dolphins win with a score of: ${dolphinsScore}`)
     }else if(koalasScore > dolphinsScore && koalasScore > 100){
        console.log(`Koalas win with a score of: ${koalasScore}`)
        }else if(dolphinsScore === koalasScore && koalasScore > 100 && dolphinsScore > 100){
           console.log(`it's a draw koalas: ${koalasScore}, dolphins: ${dolphinsScore}`) 
        }
