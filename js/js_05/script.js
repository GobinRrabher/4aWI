function generate(){
    let length = parseInt(document.getElementById("length").value);
    let uppercase = document.getElementById("uppercase").checked;
    let numbers = document.getElementById("numbers").checked;
    let special = document.getElementById("special").checked;

    function generatePassword(length, uppercase, numbers, special){
        let allchars = "abcdefghijklmnopqrstuvwxyz";
        let upperchars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let numberchars = "0123456789";
        let specialchars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

        if(uppercase == 1){
            allchars = allchars + "," + upperchars;
        }       
        if(numbers == 1){
            allchars = allchars + "," + numberchars;
        }
        if(special == 1){
            allchars = allchars + "," + specialchars;
        }
        console.log(allchars);

        makeid(length, allchars);
    }

    function makeid(length, allchars) {
        var result = '';
        var characters = allchars;
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
       }
        document.getElementById("output").innerHTML = result;
    }
    
    //console.log(makeid(length));

    generatePassword(length, uppercase, numbers, special);
}