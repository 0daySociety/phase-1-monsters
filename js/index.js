document.addEventListener("DOMContentLoaded",initialize)

function initialize(){
    fetchdata()
    addMonster()
}


function fetchdata(){
    fetch(`http://localhost:3000/monsters/?_limit=50`)
    .then(response=>response.json())
    .then(data=>data.forEach(element=>loadData(element)))
}



function loadData(data){
    let parent =document.querySelector("#monster-container")
    let child=document.createElement("div");
    child.id="moster_data"
    let name=document.createElement("h1")
    name.innerText=data.name
    let description=document.createElement("p")
    description.innerText=data.description;

    let age=document.createElement("h4")
    age.innerText=data.age;
    child.appendChild(name)
    child.appendChild(description)
    child.appendChild(age);
    parent.appendChild(child);


}

function addMonster(){
let form=document.querySelector("form");
    form.addEventListener("submit",(e)=>{
        e.preventDefault();
        let name=document.querySelector("#name").value
        let age=document.querySelector("#age").value
        let description=document.querySelector("#description").value
    formData={
        name:name,
        age:age,
        description:description
    }

fetch("http://localhost:3000/monsters",{
    method:"POST",
    headers:{"Content-type":"application/json",
            Accept:"application/json"},
    body:JSON.stringify(formData)        
})
.then(response=>response.json())
.then(data=>loadData(data))



    })
}