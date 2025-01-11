const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container-app");

function addTask(){
    if(inputBox.value == ''){
        alert("You Must Write Some Task!")
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span); 
    }
    inputBox.value = '';
    toSaveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked");
        toSaveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        toSaveData();
    }
}, false);


function toSaveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTasks(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTasks();