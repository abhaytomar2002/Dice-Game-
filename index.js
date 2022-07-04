//alert("Hello");

var randomNumber1 = Math.floor(7*Math.random());
var randomNumber2 = Math.floor(7*Math.random());

//document.querySelector("img").setAttribute("src", "images/dice1.png");

/*
if (randomNumber1 === 1) {
    setAttribute("src", "images/dice1.png");
}

else if(randomNumber1 === 2){
    setAttribute("src", "images/dice2.png");
}
*/

switch (randomNumber1) {
    case 1:
        document.querySelector("img").setAttribute("src", "images/dice1.png");
        break;
    
        case 2:
        document.querySelector("img").setAttribute("src", "images/dice2.png");
        break;

        case 3:
        document.querySelector("img").setAttribute("src", "images/dice3.png");
        break;

        case 4:
        document.querySelector("img").setAttribute("src", "images/dice4.png");
        break;

        case 5:
        document.querySelector("img").setAttribute("src", "images/dice5.png");
        break;

        case 6:
        document.querySelector("img").setAttribute("src", "images/dice6.png");
        break;

    default:
        break;
}

switch (randomNumber2) {
    case 1:
        document.querySelector(".img2").setAttribute("src", "images/dice1.png");
        break;
    
        case 2:
        document.querySelector(".img2").setAttribute("src", "images/dice2.png");
        break;

        case 3:
        document.querySelector(".img2").setAttribute("src", "images/dice3.png");
        break;

        case 4:
        document.querySelector(".img2").setAttribute("src", "images/dice4.png");
        break;

        case 5:
        document.querySelector(".img2").setAttribute("src", "images/dice5.png");
        break;

        case 6:
        document.querySelector(".img2").setAttribute("src", "images/dice6.png");
        break;

    default:
        break;
}

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML="Player 1 is winner!"
}
if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML="Player 2 is winner!"
}
