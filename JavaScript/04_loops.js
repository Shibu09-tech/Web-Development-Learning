/* 1 . while loop that calculates sum of all numbers from 1 to 5 and store the  result in the varisble named 'sum'*/

let sum=0;
let i=0;
while(i<=5){
    sum+= i;
    i++;
}
console.log(sum);

/* 2. write while loop that counts down from 5 to 1 and stores the numbers in an array named 'countdown' */
let countdown=[];
let j=5;
while(j>0){
    countdown.push(j);
    j--;
}
console.log(countdown);

/* 3. write 'do-while' that prompts the user to enter their favourite tea type until they enter "stop". Store each tea type in an array named 'teaCollection'. */

// let teaCollection =[];
// let tea;
// do {
//     tea=prompt("Enter your favourite tea (type 'stop' to finish")
//     if(tea!== "stop"){
//         teaCollection.push(tea); 
//     }
// } while (tea!== "stop");

/* 4.write 'for' loop that multiplies each element in the array '[2,4,6]' by 2 and stores the result in a new array named 'multipliedNumbers' */

let multipliedNumbers=[];
let numarr=[2,4,6];
let n;
let l=numarr.length;
for(let k=0;k<l;k++){
    n=numarr[k] * 2;
    multipliedNumbers.push(n);
}
console.log(multipliedNumbers)

/* 5.  write  'for' loop that lists all the cities in the arrya '['"paris", "New York", "Tokyo", "london"]' and store each city ina new arrya named 'cityList'*/

let cities= ["paris", "New York", "Tokyo", "london"];
let cityList=[];
for(m=0;m<cities.length;m++){
    cityList.push(cities[m]);
}
console.log(cityList)

