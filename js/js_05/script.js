function generate(){
    let length = parseInt(document.getElementById("length"));
    let lowercase = document.getElementById("lowercase");

    if(lowercase.checked){
        lowercase = 1;
    }
    else{
        lowercase = 0;
    }

    console.log(lowercase);
}