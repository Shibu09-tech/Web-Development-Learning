function fetchData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(455);
        }, 3000);
    })
}

console.log("Data goes for fetching");
console.log("Do something else");
console.log("Load Data");
let data= fetchData();
console.log("processing the data");
console.log("data loaded");
console.log("task finished");

