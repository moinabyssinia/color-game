// define variables
{
    var squares = document.querySelectorAll(".square");
    var message = document.getElementsByClassName("message");
    var title = document.getElementsByTagName("h1")[0];
    //randomly choose a box from 6 of them
    var selectedBox = Math.floor(Math.random()*6);
    //pick a color to display at the top
    var pickedColor = "rgb("+Math.ceil(Math.random()*255)+", "+Math.ceil(Math.random()*255)+", "+Math.ceil(Math.random()*255)+")";
    //display picked color
    var heading = document.getElementsByClassName("color-display")
    heading[0].textContent = pickedColor.toUpperCase();
    var newColors = document.getElementsByClassName("reset");
}

//define a function that gives color to boxes randomly
function resetColor(){
    for(var i = 0; i < squares.length; i++){
        //assign the selected box its color
        if(i === selectedBox){
            squares[i].style.backgroundColor = pickedColor;
        } else{
            squares[i].style.backgroundColor = "rgb("+Math.ceil(Math.random()*255)+", "+Math.ceil(Math.random()*255)+", "+Math.ceil(Math.random()*255)+")";
        }
        
    }
}
//assign colors to boxes
resetColor();

//validate user's selection
for(var i = 0; i < squares.length; i++){
    squares[i].addEventListener("click", function(){
        //user selects the right box
        if(this.style.backgroundColor === pickedColor.toLowerCase()){
            //display message to user 
            message[0].textContent = "Correct!"

            // iterate over boxes to change color
            //refractor the following 
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

//add listener to the reset span
newColors[0].addEventListener("click", function(){
    resetColor();
});