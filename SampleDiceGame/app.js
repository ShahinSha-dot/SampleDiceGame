var randomNumber1= Math.floor(Math.random() * 6) + 1;
var randomNumber2= Math.floor(Math.random() * 6) + 1;

var source1 = "img/dice" + randomNumber1 + ".png";
var source2 = "img/dice" + randomNumber2 + ".png";

var img1 = document.querySelector(".img1");
var img2 = document.querySelector(".img2");

img1.setAttribute("src", source1);
img2.setAttribute("src", source2);

var result = document.getElementById('result');

if(randomNumber1>randomNumber2){
	result.innerHTML= "Player one wins!!";
}
else{
	result.innerHTML= 'Player two wins!!';
}