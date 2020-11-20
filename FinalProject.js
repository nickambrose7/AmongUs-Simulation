/*
Final Project
Section: 01
Group #: 4

Names: Nick Ambrose, Advaitha Bhavanasi, Diana Koralski, Murat Oney
*/

// character variables
var charX = 0;
var charY = 200;
var charState = 1;

// mouseClicked variable
var click = false;

// timer
var count = 0;

function setup()
{
   createCanvas(400, 400);
}

function draw()
{
   backgroundScene();
   drawCharacter(charX, charY, 1, 0);
   updateCharacter();

   //drawText(); 

   count++;
}

function backgroundScene(){
   backgroundVersion1();
 //hello group


}

function backgroundVersion1()
{
   //TODO: draw a white background
   // for project 3, you can change the scene here
   background(255);
}

function backgroundVersion2()
{
   // TODO: draw a black background
   // for project 3, you can change the scene here
   background(0);
}

function updateCharacter()
{
   // TODO: make the character's x grow by 1 each frame
   //       when they hit the edge, reset the x to 0



   // TODO:  Make the charState switch between 1 and 2 every 10 frames 
   // hint: you can use this equation:
   //       Math.floor(count / 10) % 2 == 0


   // NOTE: for project 3, make some of the conditions based on
   //       the counter and use that same time for the text
}

function drawCharacter(x, y, sc, rot)
{
   charVersion1(x, y, sc, rot);

}

// Do you see common code between the versions?
// You could pull that into the drawCharacter function!
function charVersion1(x, y, sc, rot)
{
   push();
      translate(x, y);
      rotate(rot);
      scale(sc);
      fill(255, 255, 0);
      ellipse(0, 0, 30, 20);
   pop();
}


function mouseClicked()
{
   click = !click;
}

