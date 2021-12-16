function generate(){
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);

    var items = [];
    for (var i = num1; i <= num2; i++) {
        items.push(i);
    }

    ul = document.createElement('ul');

    document.getElementById('output').appendChild(ul);
    
    items.forEach(function (item) {
        let li = document.createElement('li');
        ul.appendChild(li);
    
        li.innerHTML += item;
    });
}