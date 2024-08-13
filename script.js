function authe(){
    let name = document.getElementById("name").value;
    let user = document.getElementById("user").value;
    let number = document.getElementById("number").value;
    let dob = document.getElementById("dob").value;
    let email = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;

    let memory = JSON.parse(sessionStorage.getItem("item"));

    if(name == "" || user == "" || number == "" || dob == "" || email =="" || pass ==""){
       document.getElementById("alert").innerHTML = "fill detail"
    }else{
        document.getElementById("alert").innerHTML = "Registration Successfully Done"
    };
    
    if(memory == null)
       memory = []

    memory.push({
        name : name,
        user : user,
        number : number,
        dob : dob,   
        email : email,
        pass : pass
    
    });
    console.log(memory);

    sessionStorage.setItem("item",JSON.stringify(memory));
}