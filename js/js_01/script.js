//Aufgabe 1
let x = "";
let o = "";
for (let row = 0; row < 4; row++)
{
    if(row%2 == 0)
    {
        console.log("X X X X")
    }
    else console.log("O O O O")
}
////////////////////////////////
//Aufgabe 2
let sum = 0;

for (let i = 0; i <= 100; i++)
{
    if(i%2 == 0)
    {
        sum += i;
    }
}

console.log(sum);
////////////////////////////////
//Aufgabe 3
console.log("XXXX");
console.log("X   X");
console.log("X   X");
console.log("XXX");
console.log("X   X");
console.log("X    X");