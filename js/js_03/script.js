function calculate(){
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let operator = document.getElementById("operation").value;
    let result;
    console.log(operator);
    if(operator == "add")
    { 
        result = num1 + num2;
        document.getElementById("output").innerHTML = result;
    }
    else if(operator == "sub"){
        result = num1 - num2;
        document.getElementById("output").innerHTML = result;
    }
    else if(operator == "mul"){
        result = num1 * num2;
        document.getElementById("output").innerHTML = result;
    }
    else if(operator == "div" && num2 != "0"){
        result = num1 / num2
        document.getElementById("output").innerHTML = result;
    }
    else{
        document.getElementById("output").innerHTML = "Cannot do division by 0";
    }

    console.log(num1);
    console.log(num2);
}
