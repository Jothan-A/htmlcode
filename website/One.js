function say2Hello(){
	alert('hello');
	alert('hello2');
	alert('hello3');
}


function addNumers(){
	var num1=parseInt(document.getElementById('number1').value);
	var num2=parseInt(document.getElementById('number2').value);
	document.getElementById("number3").value=num1+num2;
}