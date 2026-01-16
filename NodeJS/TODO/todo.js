const fs = require("fs");
const filepath = "./tasks.json";

const loadTasks =() =>{
    try {
        const dataBuffer = fs.readFileSync(filepath)
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (error) {
        return []
    }
}

const saveTask = (tasks) => {
    const dataJSON = JSON.stringify(tasks);
    fs.writeFileSync(filepath,dataJSON);
}

const addTask = (task) => {
    const tasks = loadTasks();
    tasks.push({task});
    saveTask(tasks);
    console.log("Task added", task);
    
};

const listTask = () => {
    const tasks = loadTasks()
    tasks.forEach((task, index) => console.log(`${index + 1} - ${task.task}`));
};

const removeTask = (index) =>{
    const tasks = loadTasks();
    if(index>0 && index<= tasks.length){
        const removed = tasks.splice(index-1,1);
        saveTask(tasks);
        console.log(
          "Removed Task:",
          removed[0].task || removed[0].tasks || removed[0]
        );
 
    }else{
        console.log("Invalid task number");
        
    }
};

const command = process.argv[2];
const argument = process.argv[3];

if(command === 'add'){
    addTask(argument)
}else if(command === 'list'){
    listTask()
}else if(command === 'remove'){
    removeTask(parseInt(argument))
}else{
    console.log("command not found");  
}
