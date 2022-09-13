function enableButton()
{
	if(document.getElementById("tosbox").checked == true)
	{
		document.getElementById("buybutton").disabled = false;
		document.getElementById("buybutton").className = "enabledbutton";
	}
	if(document.getElementById("tosbox").checked == false)
	{
		document.getElementById("buybutton").disabled = true;
		document.getElementById("buybutton").className = "disabledbutton";
	}
}

function buy() {
    window.location.replace("list.html");
}
