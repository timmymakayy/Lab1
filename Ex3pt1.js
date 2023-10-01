
// Create an array of strings
let tasksArray =[];


//Create an addTask function:
//It receives a string as a parameter called task
let addTask= (task)=>{
    tasksArray.push(task);
    //adds the task to the array
    console.log ("Task:"+task+" has been added to your Array");
    return tasksArray.length;
}
//Create an addTlistAllTasks function:
let listAllTasks =()=>{

    //for(let i=0;i<tasksArray.length;i++){
       // console.log(tasksArray[i]);
   // }

   tasksArray.forEach((item) => {
    console.log(item);
   });
}
//Create an deleteTask function:
//It deltets a  tasks from the array
let deleteTask =(task) => {
    let index = tasksArray.indexOf(task);
    if(index > -1){

        tasksArray.splice(index,1);
        console.log("Task:" +task+" has been removed from your Array");
    }
    return tasksArray.length;
}


// prints a message in the console indicating the insertion
addTask("Learn Js");
addTask("Learn React");
listAllTasks();
deleteTask("Learn JS");
deleteTask("Learn React");