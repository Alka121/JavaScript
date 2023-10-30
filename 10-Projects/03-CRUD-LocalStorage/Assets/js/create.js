let userForm = document.getElementById("userForm");
let userName = document.getElementById("name");
let userEmail = document.getElementById("email");
let userProfile = document.getElementById("profile");
let userGender = document.getElementById("gender");
let selGender = "";


//Local storage  config
let users = localStorage.getItem("userinfo")
?JSON.parse(localStorage.getItem("userinfo"))
:[];

//to generate random id - arrow function
const genRanId = () => {
    let ranId = Math.floor(Math.random()*1000);
    //console.log(ranId);
    return ranId;
};

//form submit handlers
userForm.addEventListener("submit", function (e) {
    e.preventDefault();//to avoid page referes

    for (let index=0; index < userGender.length; index++){
      if (userGender[index].checked){
        selGender = userGender[index].value;
        //console.log(selGender);
      }  
    }

    //object
    let data ={
        id:genRanId(),//user defined method
        name: userName.value,
        email: userEmail.value,
        profile: userProfile.value,
        gender: selGender,
    };
    console.log("new user =",data);
    createUser(data);
});


//To create a new user
function createUser(user){
    //console.log(user);

    console.log(users);

    if (user.email === users.email){
      alert("USer email already registered.");
    }
    else{
     localStorage.setItem("userinfo", JSON.stringify(user));
     alert("new user created successfully");
     window.location.href = "/10-Projects/03-CRUD-LocalStorage/index.html";
}

}