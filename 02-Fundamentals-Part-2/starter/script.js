'use strict'; 
// #strict mode shows errors that other mode may miss

// let hasDriversLicense = false;
// const passTest = true;

// if(passTest) hasDriversLicense = true;
// if(hasDriversLicense) console.log('I can drive')





//coding challenge 1
const calcAverage = (scoreOne, scoreTwo, scoreThree) =>
(scoreOne + scoreTwo + scoreThree)/3;


const avgKoalas = calcAverage(2,2,80)
const avgDolphins = calcAverage(85, 54,41)

const checkWinner = function(avgKoalas, avgDolphins){
if(avgKoalas >= avgDolphins * 2){
    return console.log(`Koalas win(${avgKoalas} vs. ${avgDolphins})`)
}else if(avgDolphins >= avgKoalas * 2){
    return console.log(`Dolphins win(${avgDolphins} vs. ${avgKoalas})`)
}else{
   return console.log('no one wins')
}
}

checkWinner(avgKoalas, avgDolphins)