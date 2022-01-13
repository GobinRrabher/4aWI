function generate(){
    let height = parseInt(document.getElementById("height").value);
    let weight = parseInt(document.getElementById("weight").value);
    if (weight == 0) weight = 0.01;
    let output = ((height * 1.43) / weight) - 3.4;
    output = Math.round(output);

    if (output > 0){
        var arr = [];
        var ex = "Positiv<br>";
        for (let i = 0; i <= output; i++){
            arr.push(i);
        }
    }
    else if (output < 0){
        var arr = [];
        var ex = "Negativ<br>";
        for (let i = 0; i >= output; i--){
            arr.push(i);
        }
    }
    else {
        arr = [0];
        ex = "Positiv<br>";
    }

    console.log(arr);
    output = ex;
    for (let i = 0; i < arr.length; i++) {
        output += arr[i] + ",";
    }
    if(output == "undefined0") output = "Positiv<br>0";
    output = output.slice(0, output.length - 1);
    console.log(output)
    document.getElementById("output").innerHTML = output;
}