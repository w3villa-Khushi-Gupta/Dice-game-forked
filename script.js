function play(){
var random1 = Math.floor(Math.random()*6) + 1 ;    //generate number between 1-6
var random1_dice_image = "images/dice" + random1 + ".png" ;

var img1 = document.querySelectorAll('img')[0]
img1.src = random1_dice_image

var random2 = Math.floor(Math.random()*6) + 1 ;    //generate number between 1-6
var random2_dice_image = "images/dice" + random2 + ".png" ;

var img2 = document.querySelectorAll('img')[1]
img2.src = random2_dice_image

if(random1 > random2){
    document.querySelector("h1").innerHTML = "Player 1 🏆 wins!! 🥳 🥳"
}
else if (random1 < random2){
    document.querySelector("h1").innerHTML = "Player 2 🏆 wins!! 🥳 🥳"
}
else{
    document.querySelector("h1").innerHTML = "Draw !!!"
}
}

document.querySelector("button").addEventListener("click", play);
