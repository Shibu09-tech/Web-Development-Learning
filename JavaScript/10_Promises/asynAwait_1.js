async function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data got");
        }, 3000);
    })
}

async function main(){
    console.log("Loading modules...");
    console.log("do something else");
    console.log("Load data");
    let data= await getData();
    console.log("procesed the data");
    console.log("task 2");
   
}

main();