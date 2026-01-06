/* 1. stop the for loop when it finds the word "chai" from the array and store all the teas before chai in a new array named selectedtees */

let tees=["green tea", "black tea", "chai","oolong tea"];
let selectedtees=[];
for(let i=0; i<tees.length;i++){
    if(tees[i] == "chai"){
        break;
    }
    selectedtees.push(tees[i]);
}
// console.log(selectedtees);

/* 2. 'for' loop and skip the word 'back tea' and store the other tees in new array named 'visitedtees' */

let tees2=["green tea", "black tea", "chai","oolong tea"];
let visitedtees=[];
for(let i=0; i<tees.length;i++){
    if(tees[i] == "black tea"){
        continue;
    }
   visitedtees.push(tees[i]);
}
// console.log(visitedtees);

/* 3. use a 'for-of' loop to iterate through the array'[1,2,3,4,5]' and stop whne the number '4' is found. store the number before '4' in  an array named 'smallNumber'  */

let number=[1,2,3,4,5];
let smallNumber=[];
for (const num of number) {
    if(num == 4){
        break;
    }
    smallNumber.push(num)
}
// console.log(smallNumber);

/* 4. use 'for..in' loop to loop through an object containing city populations. stop the loop when the population of 'Berlin' is found and store all previous cities poupulation in a new object named 'citypopulations'. */

let citiesPopulation={
    "London":8900000,
    "New York":8400000,
    "Paris":2200000,
    "Berlin":3500000,

};

let citypopulations={};

for (const city in citiesPopulation) {
    if (city == "Berlin"){
        break;
    }
    // creating key = value (becoz it doen't have have push method in object like array)

    citypopulations[city]= citiesPopulation[city];
}
// console.log(citypopulations);

/* 5. 'for..in' loop . skip any city with population below 3 million and store the rest in a new object named 'largecities' */

let cities = {
  London: 5000000,
  "New York": 9000000,
  Paris: 2200000,
  Berlin: 3500000,
};

let largecities={};

for (const city in cities) {
    if(cities[city] < 3000000) {
        continue;
    }
    largecities[city]=cities[city];
    
}
// console.log(largecities);

/* 6. write a 'forEach' loop that iterates through the array . Stop the loop when "Chai is found, and store all prevois tea types in an array named 'availableTeas'. " */

let teas3=["green tea", "black tea", "chai","oolong tea"];
let availableTeas=[];
teas3.forEach(tea => {
    if(tea === 'chai'){
        return;
    }
    availableTeas.push(tea);
});
// console.log(availableTeas);

/* 7. 'for' loop that iterates through the array [2,5,7,9] . Skip the value '7' and multiply the rest by 2. Store the result in a new array named 'dobledNumber' */

let numbers= [2,5,7,9];
let dobledNumber=[];

for (let index = 0; index < numbers.length; index++) {
    if( numbers[index] === 7){
        continue;
    }
    dobledNumber.push(numbers[index] * 2)
}
// console.log(dobledNumber);

/* 8. use 'for-of' loop to iterate the array and stop when the length of the current tea name is greater than 10. store in 'shortteas*/

let tea4 = ["green tea", "black tea", "jasmine tea", "herbal tea"];
let shortteas=[];

for (const tea of tea4) {
    if(tea.length>10){
        break;
    }
    shortteas.push(tea);
}
console.log(shortteas);