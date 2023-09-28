//creating inputBox constant element which holds task name
const inputBox=document.getElementById("inputbox");

//creating listContainer constant element which holds task as list item
const listContainer=document.getElementById("list-container");

//addTask is a function which is called when user click on Add button
function addTask(){
    if(inputBox.value === ''){ 
        //showing an alert message when no task available on todo list
        alert("You must write something!");
    }
    else{
        let li=document.createElement("li");
        //shows list item values 
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement("span");
        //this is for cross button
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
}

listContainer.addEventListener("click",function(e){
    //when user click on toggle it will checked that task or uncheck that task
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("check");
        //calling saveData function to save content
        saveData();
    }
    //when user click on cross symbol it's going remove item from todo list
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        //calling saveData function to save content
        saveData();
    }
}, false);

//save data on browser if user will refresh the page content remain on page
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}

showTask();
