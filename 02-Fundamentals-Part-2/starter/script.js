'use strict'; 
// #strict mode shows errors that other mode may miss

// let hasDriversLicense = false;
// const passTest = true;

// if(passTest) hasDriversLicense = true;
// if(hasDriversLicense) console.log('I can drive')





//coding challenge 1
// const calcAverage = (scoreOne, scoreTwo, scoreThree) =>
// (scoreOne + scoreTwo + scoreThree)/3;


// const avgKoalas = calcAverage(2,2,80)
// const avgDolphins = calcAverage(85, 54,41)

// const checkWinner = function(avgKoalas, avgDolphins){
// if(avgKoalas >= avgDolphins * 2){
//     return console.log(`Koalas win(${avgKoalas} vs. ${avgDolphins})`)
// }else if(avgDolphins >= avgKoalas * 2){
//     return console.log(`Dolphins win(${avgDolphins} vs. ${avgKoalas})`)
// }else{
//    return console.log('no one wins')
// }
// }

// checkWinner(avgKoalas, avgDolphins)

//coding challenge 2
// const bills = [125, 555, 44]
// const calcTip = function(bill){
// if(bill > 50 && bill < 300){
//    let tip = bill * (20/100)
//    let billTotal = bill + tip
//    return tip
// }else{
//     let tip = bill * (15/100)
//     let billTotal = bill + tip
//     return tip
// }
// }
// let tips = []
// let total = []
// tips.push(calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2]))
// console.log(tips)
// // calcTip(600)
// total = [(tips[0] + bills[0]), (tips[1] + bills[1]), (tips[2] + bills[2]) ]
// console.log(total)

// coding challenge 3

const mark = {
fullName: "Mark Miller",
height: 1.69,
mass: 78,
calcBMI: function(){
   this.bmi = this.mass / (this.height ** 2)
   return this.bmi
}
}

const john = {
    fullName: "John Smith",
    height: 1.95,
    mass: 92,
    calcBMI: function(){
     this.bmi = this.mass / (this.height ** 2)
    return this.bmi
}

}

console.log(mark.calcBMI());
console.log(john.calcBMI());
console.log(mark.calcBMI() > john.calcBMI() ? `${mark.fullName} BMI (${mark.calcBMI()}) is higher than ${john.fullName}'s (${john.calcBMI()})!`:`${john.fullName}'s BMI (${john.calcBMI()})'s is higher than ${mark.fullName}'s (${mark.calcBMI()})!`)



//coding challenge 4

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52 ];

const tips = [];

const totals = [];

const calcTip = function(bill){
    if(bill > 50 && bill < 300){
       let tip = bill * (20/100)
       let billTotal = bill + tip
       return tip
    }else{
        let tip = bill * (15/100)
        let billTotal = bill + tip
        return tip
    }
    }

const calcAverage = function(arr){
    let sum = 0;
for(let i = 0; i < arr.length; i++){
    sum = arr[i] + sum
    
}
return (sum/arr.length)
}

for(let i = 0; i < bills.length; i++){
    // console.log(bills[i])
    console.log(`The Tip total for $${bills[i]} is $${calcTip(bills[i])}`)
        tips.push(calcTip(bills[i]))
        totals.push(calcTip(bills[i]) + bills[i])
        
}
console.log(tips)
console.log(totals)

console.log(calcAverage(totals))

