const form = document.getElementById("myform");
form.addEventListener("submit", (e) => {
    e.preventDefault();
     // acces the value using variables
    let nm = document.getElementById("name").value;
    let num = document.getElementById("contact").value;
    let eml = document.getElementById("email").value;
    let addr =  document.getElementById("address").value;
    
    
    let isvalid = true;

    // remove preivious error
    document.getElementById("name-error").innerHTML = "";
    document.getElementById("contact-error").innerHTML = "";
    document.getElementById("email-error").innerHTML = "";
    document.getElementById("add-error").innerHTML = ""



    // regular expression 
let nameRegex = /^[a-zA-Z\s]{1,30}$/;
let contactRegex = /^[0-9]{6,15}$/;
let emailRegex = /^([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+)\.([a-zA-Z]{2,})$/; 

    
if (!nameRegex.test(nm.trim())) {
    document.getElementById("name-error").innerHTML ="pleae enter the valid name only characters use";
    isvalid = false;
}
if (!contactRegex.test(num)) {
    document.getElementById("contact-error").innerHTML = "please enter the valid number ";
    isvalid = false;
}
if (!emailRegex.test(eml.trim())) {
    document.getElementById("email-error").innerHTML = "please enter the valid email";
    isvalid = true
}
if (addr === "") {
    document.getElementById("add-error").innerHTML = "please enter the  address";
    isvalid = false
}
if (isvalid) {
    alert ("form submitted successfully");
    console.log(nm);
    console.log(num);
    console.log(eml);
    console.log(addr);
    // form.reset();
}
});




