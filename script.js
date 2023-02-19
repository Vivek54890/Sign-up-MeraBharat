function validate() {
	
	var password1=document.getElementById("password1").value
	var password2=document.getElementById("password2").value;
    
    if(password1 == password2)
    {
    	alert("Login Sucessfully!");
    	return false;
    }

    else if(password1 == "")
    {
        alert("Enter Password1...");
        return false;
    }

    else if(password2 == "")
    {
        alert("Enter Password2...");
        return false;
    }

    else
    {
    	alert("Loing failed__!!");
    }
}