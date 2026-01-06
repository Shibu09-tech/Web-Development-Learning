function getNumber(success){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
        if(success){
            resolve("Data Fetched successfuly");
        }else{
            reject("Something went wrong");
        }
        }, 3000);
    });
}

console.log("Starting for obtaining the data");
//using the promise 
const data=getNumber(true);
data
.then((v) => {console.log("Success: ", v);
})
.catch((error) => {console.log("Error: ", error);
});

console.log("Fetching...");
console.log("Done with the task");



