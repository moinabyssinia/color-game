//fixed colors
var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)"
]

// //randomized colors
// var x = Math.ceil(Math.random()*255);
// var y = Math.ceil(Math.random()*255);
// var z = Math.ceil(Math.random()*255);

var squares = document.querySelectorAll(".square");

//pick a color to display at the top
var pickedColor = colors[3];

//display picked color
var heading = document.getElementsByClassName("color-display")
heading[0].textContent = pickedColor.toUpperCase();

for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
}

//check if user selected correct color

//add event listener to squares
for(var i = 0; i < squares.length; i++){
    squares[i].addEventListener("click", function(){
        if(this.style.backgroundColor === pickedColor.toLowerCase()){
            // iterate over boxes to change color
            for(var j = 0; j < squares.length; j++){
                squares[j].style.backgroundColor = pickedColor;
            };
        } else{
            //match the color of the body
            this.style.backgroundColor = "#232323";
        }
    });
}