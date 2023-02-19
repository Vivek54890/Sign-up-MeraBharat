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
        alert("please Enter the Password...");
        return false;
    }

    else if(password2 == "")
    {
        alert("Please Enter Confirm Password...");
        return false;
    }

    else
    {
    	alert("Wrong User Id or Password... Loing failed__!!");
    }
}
