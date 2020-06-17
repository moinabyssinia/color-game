//to upgrade//
// how to always optimize for heading legibility 

// define variables
{
    var message = document.getElementsByClassName("message");
    var title = document.getElementsByTagName("h1")[0];
    
    //pick a color to display at the top
    var pickedColor; // later to assign true color randomly

    //display picked color
    var heading = document.getElementsByClassName("color-display"); //later to label the heading
    var newColors = document.getElementsByClassName("reset");
    var levelEasy = document.getElementsByClassName("level")[0];
    var levelHard = document.getElementsByClassName("level")[1];
    var secondRowSquares = document.getElementsByClassName("second-row");
    var firstRowSquares = document.getElementsByClassName("first-row");
    //select both row squares
    var allSquares = document.querySelectorAll(".square");
    var isEasy = false;
    var boxes ; //later to assign allsquares or only first-rowers
    var selectedBox; //later to assign the box of the true color
}

//defining level of difficulty
function chooseLevel(level){
    if(level === "Easy"){
        isEasy = true;
        //assign the number of boxes to work with
        boxes = firstRowSquares;
        
        //hide the second row of boxes
        for(var k = 0; k < secondRowSquares.length; k++){
            console.log("changing colors");
            secondRowSquares[k].style.backgroundColor = "#232323";
        }
        
        //select first row squares
        //randomly choose a box to assign the true color
        selectedBox = Math.floor(Math.random()*boxes.length); 
        pickedColor = "rgb("+Math.ceil(Math.random()*255)+", "+Math.ceil(Math.random()*255)+", "+Math.ceil(Math.random()*255)+")";

        //label the heading
        heading[0].textContent = pickedColor.toUpperCase();
        
        //reset the colors
        resetColor();
    } else {
        //assign the number of boxes to work with
        boxes = allSquares;
        console.log(boxes);
        
        //randomly choose a box to assign the true color
        selectedBox = Math.floor(Math.random()*boxes.length); 
        console.log(selectedBox);

        pickedColor = "rgb("+Math.ceil(Math.random()*255)+", "+Math.ceil(Math.random()*255)+", "+Math.ceil(Math.random()*255)+")";

        //label the heading
        heading[0].textContent = pickedColor.toUpperCase();

        //reset the colors
        resetColor();
        
        //randomly choose a box to assign the true color
        selectedBox = Math.floor(Math.random()*boxes.length); 
    }
}

//define a function that gives color to boxes randomly
function resetColor(){
    for(var i = 0; i < boxes.length; i++){
        //assign the selected box its color
        if(i === selectedBox){
            boxes[i].style.backgroundColor = pickedColor;
        } else{
            //else randomly choose a color
            boxes[i].style.backgroundColor = "rgb("+Math.ceil(Math.random()*255)+", "+Math.ceil(Math.random()*255)+", "+Math.ceil(Math.random()*255)+")";
        }       
    }
     //remove the message
    message[0].textContent = ""
    title.style.backgroundColor = "steelblue";
    title.style.color = "white";
}

//add event listeners
{
    //add listener for level of difficulty
    levelEasy.addEventListener("click", function(){
        //making it look selected when clicked
        //remove selection from other buttons and add to "this"
        levelHard.classList.remove("selected");
        this.classList.add("selected");
        chooseLevel("Easy");
    })
    levelHard.addEventListener("click", function(){
        //making it look selcted when cliked
        levelEasy.classList.remove("selected");
        this.classList.add("selected");
        chooseLevel("Hard");
    })

    //add hovering effect
    levelEasy.addEventListener("mouseover", function(){
        levelEasy.classList.toggle("hover");
    })
    levelEasy.addEventListener("mouseout", function(){
        levelEasy.classList.toggle("hover");
    })

    levelHard.addEventListener("mouseover", function(){
        this.classList.toggle("hover");
    })

    levelHard.addEventListener("mouseout", function(){
        this.classList.toggle("hover");
    })

    newColors[0].addEventListener("mouseover", function(){
        this.classList.toggle("hover");
    })
    newColors[0].addEventListener("mouseout", function(){
        this.classList.toggle("hover");
    })

}

//choose default level of difficulty
chooseLevel("Hard")

//assign colors to boxes
resetColor();

//validate user's selection
for(var i = 0; i < boxes.length; i++){
    boxes[i].addEventListener("click", function(){
        //user selects the right box
        if(this.style.backgroundColor === pickedColor.toLowerCase()){
            //display message to user 
            message[0].textContent = "Correct!";
            newColors[0].textContent = "Play Again?";
            // iterate over boxes to change color
            //refractor the following 
            for(var j = 0; j < boxes.length; j++){
                boxes[j].style.backgroundColor = pickedColor;
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
    //randomly choose a box to assign the true color
    selectedBox = Math.floor(Math.random()*boxes.length); 

    pickedColor = "rgb("+Math.ceil(Math.random()*255)+", "+Math.ceil(Math.random()*255)+", "+Math.ceil(Math.random()*255)+")";

    //label the heading
    heading[0].textContent = pickedColor.toUpperCase();
    resetColor();
    //change button message to new colors
    newColors[0].textContent = "New Colors?";
});
