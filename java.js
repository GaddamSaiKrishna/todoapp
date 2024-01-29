let add=document.querySelector("#add");
let input=document.querySelector("input");
let listItems=document.querySelector(".list-items")
const func=()=>{
    if(input.value===''){
        alert("You must write something");
    }
    else{
        let li=document.createElement("li");
        li.innerText=input.value;
        listItems.appendChild(li);
        let delBtn=document.createElement("button")
        delBtn.classList.add("del");
        li.appendChild(delBtn);
        let editBtn=document.createElement("button");
        editBtn.classList.add("edit")
        li.appendChild(editBtn);
    }
    input.value="";
    saveData();
}
add.addEventListener("click",func);
// li.addEventListener("click",()=>{
//     li.classList.add("checked");
// })
listItems.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.className==="del"){
        e.target.parentElement.remove();
        saveData();
    }
    else if(e.target.className==="edit"){
        input.value=e.target.parentElement.innerText;
        console.log(input.value)
        e.target.parentElement.remove();
        saveData();
    }
},false);


function saveData() {
    localStorage.setItem("data",listItems.innerHTML);
}
function showData(){
    listItems.innerHTML=localStorage.getItem("data");
}
showData();
