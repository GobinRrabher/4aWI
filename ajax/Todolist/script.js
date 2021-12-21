var car = {name:"ferrari", color:"red", age: 17}; 

const tasks = [];

document.getElementById("addTask").addEventListener("click", function(){
    addTask();
})

function addTask(){
    let taskName = document.getElementById("txtNewTask").value;
    let taskResponsible = document.getElementById("txtResponsible").value;
    let task = {name:taskName, isDone:false, responsible:taskResponsible};
    tasks.push(task);
    printTaskList();
}

function printTaskList(){
    document.getElementById("taskList").innerHTML = getHTMLTasks();
}

function markTask(element){
    let index = element.attributes["data-index"].value;
    let isChecked = element.checked;

    tasks[index].isDone = isChecked;
    printTaskList();
}

function getHTMLTasks(){
    let html = "";
    let index = 0;
    tasks.forEach(element => {
        var checked = "";
        if(element.isDone){
            checked = "checked";
        }
        html += "<li><input onClick='markTask(this)' name='checkboc' type='checkbox' data-index='" + index + "'" + checked + "></input>" + element.isDone + " - " + element.name + " - " + element.responsible + "-" + index + "</li>";
        index++;
        console.log(element);  
    });
    return html;
}