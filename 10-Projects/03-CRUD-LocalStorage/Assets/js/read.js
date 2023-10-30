//Local storage  config
let users = localStorage.getItem("userinfo")
  ?JSON.parse(localStorage.getItem("userinfo"))
  :[];

console.log(users);

let result = document.getElementById("result");
//to print the data from the local storage
function printUser(){
    result.innerHTML += `
    <img src=${users.profile} alt="" >
        
        <p><b>User ID: </b><span>${user.id}</span></p>
        <p><b>Name:</b><span>${users.name}</span></p>
        <p><b>Email:</b><span>${users.email}</span></p>
        <p><a href="#" class="btn">Edit</a> 
        <a href="#" class="btn" onclick='deleteUser(${users.id})>Delete</a></p>
    `;
}
printUser();

function deleteUser(id){
  if(conform(`Are you sure to delete  an user id= ${id}?`)){
    if(id === null){
        alert("user id doesn't exists.");

    }
    else if(id === users.id){
        localStorage.removeItem("userinfo");
        alert("users deleted successfully");
        result.style.display = "none";
    }
  } 
  else{
    alert("Delete oprations cancelled");
  }
}
