// /* 1. declare an array named "teaFlavors" that contains the strings "green tea", "black tea", and "oolong tea".*/

// let teaFlavors = ["green tea", "black tea", "oolong tea"]

// const firsrtea=teaFlavors[0]

// console.log(firsrtea);

// /*2. you have an array named 'cities' containg "london", "Tokyo", "Paris", "New York". access the third element in te array and store it in a variable named 'favoriteCity */

// let cities=["london", "Tokyo", "Paris", "New York"]

// let favoriteCity=cities[2]
// console.log(favoriteCity)

// /* 3. change the second element from question one to matcha  */

// teaFlavors[1]="matcha"
// console.log(teaFlavors);

// /*4. add element to the array in the question two*/

// //method 1
// cities[4]="Mumbai"
// console.log(cities);

// //method 2 (if we don't know the length of array how much it is big so how to add element)
// // cities[cities.length]="banglore";
// // console.log(cities);
//  cities.push("banglore")
//  console.log(cities)

//  /* 5. pop the last city of the array and store it is lastvisited */

//  const lastvisited=cities.pop();
//  console.log(cities);

// /* 6. declare an array named "popularTea" that contains the strings "green tea", "black tea", and "oolong tea". Create a soft copy of this array named 'softcopytea' */

// let popularTea=["green tea", "black tea","oolong tea"]

// let softcopytea=popularTea
// popularTea.pop();
// console.log(softcopytea)
// console.log(popularTea) // both has the same output as it is manipulated 

// /* 7. now create the hardcopy of the popular tea by name 'hardcopytea' */
// // method 1
// let hardcopytea=[...popularTea];
// popularTea.pop()
// console.log(hardcopytea);
// console.log(popularTea); 

// //method 2
// // let hardcopytea=popularTea.slice();

// /* 8. merge two arrays above arrays */
 
let fruits=["Apple","banana"]
let veges=["potato","tamato"]
// let merge= fruits + veges;
// console.log(merge);
// console.log(typeof(merge)); // it is converted to string we don't want that

let merge2= fruits.concat(veges);
console.log(merge2);
console.log(typeof(merge2));