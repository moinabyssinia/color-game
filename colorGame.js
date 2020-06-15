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
var message = document.getElementsByClassName("message");
var title = document.getElementsByTagName("h1")[0];
//pick a color to display at the top
var pickedColor = colors[3];

//display picked color
var heading = document.getElementsByClassName("color-display")
heading[0].textContent = pickedColor.toUpperCase();

for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
}

//check if user selected correct color

//validate user's selection
for(var i = 0; i < squares.length; i++){
    squares[i].addEventListener("click", function(){
        //user selects the right box
        if(this.style.backgroundColor === pickedColor.toLowerCase()){
            //display message to user 
            message[0].textContent = "Correct!"

            // iterate over boxes to change color
            for(var j = 0; j < squares.length; j++){
                squares[j].style.backgroundColor = pickedColor;
            };
            title.style.backgroundColor = pickedColor;
            title.style.color = "black";
        } else{
            //display message to user 
            message[0].textContent = "Try Again"
            //match the color of the body
            this.style.backgroundColor = "#232323";
        }
    });
}