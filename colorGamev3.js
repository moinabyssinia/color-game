//to upgrade//
//how to always optimize for heading legibility 

var message = document.getElementsByClassName("message");
var title = document.getElementsByTagName("h1")[0];
var pickedColor; 
var heading = document.getElementsByClassName("color-display"); //later to label the heading
var newColors = document.getElementsByClassName("reset");
var modeButtons = document.querySelectorAll(".level");
var secondRowSquares = document.getElementsByClassName("second-row");
var firstRowSquares = document.getElementsByClassName("first-row");
//select both row squares
var allSquares = document.querySelectorAll(".square");
var currentSquares = allSquares;
var boxes = 6; //by default start with 6 boxes
var selectedBox; //later to assign the box of the true color


init();

function init(){
    setUpModeButtons();
    validateSelection();

    //mode button event listeners
    function setUpModeButtons(){
        for (var i = 0; i < modeButtons.length; i++){
            //change background color for selcted level only
            modeButtons[i].addEventListener("click", function(){
                modeButtons[0].classList.remove("selected");
                modeButtons[1].classList.remove("selected");
                this.classList.add("selected");
        
                //figure out how many squares to show
                if (this.textContent === "Easy"){
                    boxes = 3;
                    for (var i = 0; i < secondRowSquares.length; i++){
                        secondRowSquares[i].style.backgroundColor = "#232323";
                    }
                    currentSquares = firstRowSquares;
                } else {
                    boxes = 6;
                    currentSquares = allSquares;
                }
        
                reset();
        
            })
        }
    }
    //validate user's selection
    function validateSelection(){
        for(var i = 0; i < boxes; i++){
            currentSquares[i].addEventListener("click", function(){
                //user selects the right box
                if(this.style.backgroundColor === pickedColor.toLowerCase()){
                    //display message to user 
                    message[0].textContent = "Correct!";
                    newColors[0].textContent = "Play Again?";
                    // iterate over boxes to change color
                    //refractor the following 
                    for(var j = 0; j < boxes; j++){
                        currentSquares[j].style.backgroundColor = pickedColor;
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
    }
    reset();
}


//color generating function
function colorGenerator(){
    //picking a color 
    return "rgb("+Math.ceil(Math.random()*255)+", "+Math.ceil(Math.random()*255)+", "+Math.ceil(Math.random()*255)+")";
}
//reseting function
function reset(){
    //select the box to place the true color
    selectedBox = Math.floor(Math.random()*boxes);
   
    pickedColor = colorGenerator();

    //label the heading
    heading[0].textContent = pickedColor.toUpperCase();
    //change button message to new colors
    newColors[0].textContent = "New Colors?";

    for(var i = 0; i < boxes; i++){
        //assign the selected box its color
        if(i === selectedBox){
            allSquares[i].style.backgroundColor = pickedColor;
        } else{
            //else randomly choose a color
            allSquares[i].style.backgroundColor = colorGenerator();     
        }
    }
    //remove the message
    message[0].textContent = ""
    title.style.backgroundColor = "steelblue";
    title.style.color = "white";
}
//add listener to the reset button
newColors[0].addEventListener("click", function(){
    reset();
});
