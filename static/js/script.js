let registerForm = document.getElementById("registerForm");
if(registerForm){
    registerForm.addEventListener("submit", function(event){
        event.preventDefault();
        console.log(event);
        let name=document.getElementById("name").value;
        let email=document.getElementById("email").value;
        let password=document.getElementById("password").value;
        let dob=document.getElementById("dob").value;
        let gender=document.querySelector('input[name="gender"]:checked');
        let course=document.querySelector('input[name="course"]:checked');
        let gender="";
        if (male){
            gender="male";
        }else if(female){
            gender="female"
        }
        if (name=="" || email=="" || password=="" || dob=="" || !gender || !course) {
            alert("Please fill in all fields.");
            return;
        }else{
            alert("Registration successful!");
        }
    });
}
let loginForm = document.getElementById("loginForm");
if(loginForm){
    loginForm.addEventListener("submit", function(event)
    {
        event.preventDefault();
        console.log(event);
        let email=document.getElementById("loginEmail").value;
        let password=document.getElementById("loginPassword").value;
        if (email=="" || password=="") {
            alert("Please fill in all fields.");
        } else {
            alert("Login successful!");
        }
    });
}