/*
Final Project
Section: 01
Group #: 4

Names: Nick Ambrose, Advaitha Bhavanasi, Diana Koralski, Murat Oney
*/
//project vars
var sceneNum = 1;

//scene1 vars
var redVisible = true; // red character is visible - murat
var xRed = -100 

var accX = 0;//controls  movement of orange character - nick
var accY = 0;

var nx = 20; //starting postion of the orange character that i will update  for  movement -nick
var ny = 50;

var lx = 250; // starting position of the lime character -murat
var ly = 300;

var unitX = 0;//this controls direction of the movement of orange - nick
var unitY = 0;

var killVis = false; //kill button is visible - murat
var moveLime = false; // lime start

//scene2 vars
var count = 0;
var scenechange = false;

//scene3 vars

function setup()
{
   createCanvas(400, 400);
}

function draw()
{

   backgroundScene();
    
   drawCharacter(nx, ny, 255, 128, 0, .7, .7) //this is the character that I want to move - nick
   checkKeys(); //this clump of 3 functions are what's necessary for movement, just thought I'd specifiy in case you want to mess with them -nick
   updateorange();
   
   if(nx >= 130 && nx <= 250 && ny >= -10 && ny <= 170){
      killVis = true;
   }
   else{
      killVis = false;
   }

   if(killVis){
      draw_kill_button();
   }

   drawCharacter(lx, ly, 69, 249, 56, -.7, .7)

   if (redVisible){
      drawCharacter(200, 100, 255, 0, 0, .7, .7)
   }
   else{
      draw_dead();
      updatelime();        
   }

}

function backgroundScene(){
   scene1();

   if(ly == 160){
      scene2();
      sceneNum = 2;
   }
   //TODO booleans that switch between scenes
}

function scene2()
{

   if (count < 100)
   {
       //background(255);
     backgroundVersion1();
   }

   else if (count >= 100 && count <800)
   {
        backgroundVersion2();
   }

   else if (count >= 800)
   {
        backgroundVersion3();
   }
}

function scene1()
{
   background(36,50,59)
   push();
      strokeWeight(3);
      //left hall 
         //wall
      fill(33,105,122);
      rect(0, 0, 250, 70);
      rect(50, 0, 200, 70);
      rect(100, 0, 150, 70);
      rect(150, 0, 100, 70);
      rect(150, 0, 50, 70);

         //floor
      fill(126,176,204)
      rect(0,70,250,100)
      rect(150,70,100,100)

      //going down hall
         //floor
      rect(150 ,170, 100, 220)
      rect(150 ,290, 100, 100)

      //bottom hall
         //floor
      rect(250 ,290, 200, 100)

         //wall
      fill(33,105,122)
      rect(250, 220, 200, 70)
      rect(300, 220, 150, 70)
      rect(350, 220, 100, 70)
      rect(398, 220, 50, 70)
   pop();
}

//emergency meeting alert
function backgroundVersion1()
{
   background(230);
   //mini banner character
   push();
      translate(-20,-100)
      stroke(0);
      drawCharacter(250,246,35,0.8,0.8);
   pop();
   //banner
   fill(255,0,0);
   noStroke();
   rect(0,150,400,100);
   fill(190);
   ellipse(200,200,200,100);
   textSize(25);
   fill(100);
   strokeWeight(2);
   stroke(0,0,255);
   text('EMERGENCY \n MEETING',123,195);

}

//characters conversing who to eject
function backgroundVersion2() 
{
   background(50)
   //floor
   push();
      fill(154, 164, 199);
      rect(0, 260, 400, 200)
   pop();
   //drawGrid();
   //drawCenter();
   stroke(0);

   //charcters behind table
   //blue
   push();
      translate(-100, 10);
      drawCharacter(0, 0, 255, 1, 1);
   pop();
   //lime
   push();
      translate(30, 0);
      drawCharacter(69, 245, 56, -1, 1);
   pop();
   // yellow
   push();
      translate(120, 10);
      drawCharacter(250, 246, 35, -1, 1);
   pop();

   drawTable();

   //characters in front of table (with backs to us)
   //purple
   push();
      translate(-200, 10);
      scale(1.3)
      characterBacks(166, 75, 191);
   pop();
   //orange
   push();
      translate(0, 10);
      scale(1.3)
      characterBacks(255, 128, 0);
   pop();

   //text conversation
   if (count >=130 && count <300)
   {
      //text //purple
      fill(255);
      rect(100,250,100,50);
      fill(0);
      noStroke();
      textSize(10);
      text('I was in the engine \n room, it was not me', 105,270);
   }
   if (count >=300 && count <450)
   {
      //text (blue)
      fill(255);
      rect(200,300,100,50);
      fill(0);
      noStroke();
         textSize(10);
         text('I saw Lime there, \n I think it was him!', 205,320);
   }
   if (count >=450 && count <600)
   {
      //text(yellow)
      fill(255);
      rect(300,150,100,50);
      fill(0);
      noStroke();
      textSize(10);
      text('Yea, Lime looks sus\n we should eject\n Lime', 305, 170);
   }
   if (count >=600 && count <750)
   {
      //text(lime)
      fill(255);
      rect(100,150,100,50);
      fill(0);
      noStroke();
      textSize(10);
      text('It was not me,\n I left the room!', 105, 170);
   }

}


//player can press button in this background
function backgroundVersion3()
{
   background(50)
   //floor
   push();
      fill(154, 164, 199);
      rect(0, 260, 400, 200)
   pop();
   //drawGrid();
   //drawCenter();
   stroke(0);

   //charcters behind table
   //blue
   push();
      translate(-100, 10);
      drawCharacter(0, 0, 255, 1, 1);
   pop();
   //lime
   push();
      translate(30, 0);
      drawCharacter(69, 245, 56, -1, 1);
   pop();
   // yellow
   push();
      translate(120, 10);
      drawCharacter(250, 246, 35, -1, 1);
   pop();

   drawTable();

   //characters in front of table (with backs to us)
   //purple
   push();
      translate(-200, 10);
      scale(1.3)
      characterBacks(166, 75, 191);
   pop();
   //orange
   push();
      translate(0, 10);
      scale(1.3)
      characterBacks(255, 128, 0);
   pop();

   //vote Lime Out button
   fill(255);
   rect(250,0,150,50);
   fill(0);
    textSize(18);
    text('VOTE LIME OUT', 259,27);


}


function drawCharacter(posx, posy, x, y, z, scal1, scal2)
{
   push();
      translate(posx, posy)
      scale(scal1, scal2)
      fill(x, y, z);
      //backpack
      rect(-10, 30, 20, 48, 20, 40, 10, 10);
      //body
      rect(0, 0, 50, 80, 20, 40, 10, 10);
      //leg movement states
      rect(0, 70, 15, 30, 20, 40, 4, 4);
      rect(34, 70, 15, 30, 20, 40, 4, 4);
      
      push();
         noStroke();
         rect(1, 65, 46, 14);
      pop();
      //eye thing
      push();
         strokeWeight(5);
         fill(100);
         rect(12, 13, 40, 20, 6, 10, 10, 7);
      pop();
      push();
         noStroke()
         fill(150);
         ellipse(33, 20, 30, 10);
         fill(200);
         ellipse(35, 18, 20, 5);
      pop();
   pop();
}

//kill button (skull) on bottom right that will be clickable
   function draw_kill_button()
   {
   push();

      scale(1.2);
      translate(-50, -50);
      fill(230);
      ellipse(340, 340, 50, 35);
      quad(330, 340, 350, 340, 347, 367, 333, 367);
      push();
         noStroke();
         ellipse(340, 340, 49, 34);
      pop();
      line(338, 367 ,337, 358);
      line(342, 367 ,343, 360);
      fill(116, 16, 6);
      ellipse(330, 337, 15, 10);
      ellipse(350, 337, 15, 10);
      fill(90);
      triangle(340, 340, 345, 350, 335, 350);
      strokeWeight(4);
      fill(255, 0, 0);
      textSize(20);
      text('KILL', 320, 348);
   pop();
   }


//dead body
   function draw_dead(){
      //blood puddle
      fill(250, 0, 0);
      ellipse(230, 155, 40, 5);

      //body
      push();
         translate(200, 160);
         angleMode(degrees);
         rotate(193);
         fill(255, 0, 0);
         rect(0, 0, 40, 35, 20, 20, 20, 20);
         fill(51, 102, 95);
         translate(6, 15);
         rect(0, 0, 30, 17, 20, 20, 20, 20);
      pop();
   
      //leg2
      push();
         translate(206, 142);
         rotate(6*PI/13);
         fill(255, 0, 0);
         rect(0, 0, 15, 30, 20, 40, 4, 4);
      pop();

      //leg1
      push();
         translate(198, 123);
         rotate(PI/3);
         fill(255, 0, 0);
         rect(0, 0, 15, 30, 20, 40, 4, 4);
      pop();

      //cover up
      push();
         noStroke();
         translate(198, 153);
         angleMode(degrees);
         rotate(193);
         fill(255, 0, 0);
         rect(0, 0, 27, 12, 20, 20, 20, 20);
      pop();

      //bone
      push();
      translate(-2, 0);
      push();
         translate(218, 132);
         fill(230);
         rotate(-PI/7);
         rect(0, 0, 20, 8, 10, 10, 10, 10);
      pop();

      push();
         translate(237, 123);
         fill(230);
         rotate(PI/8);
         ellipse(0, 0, 10, 13, 10, 10, 10, 10);
      pop();

      push();
         translate(237, 133);
         fill(230);
         rotate(-PI/4);
         ellipse(0, 0, 10, 13, 10, 10, 10, 10);
      pop();

      //bone cover up
         push();
            noStroke();
            fill(230);
            circle(235, 130, 9)
         pop();
      pop();

   }

 //characterbacks
function characterBacks(x, y, z)
{
   push();
      translate(200, 200)
      fill(x, y, z);
      //body
      rect(0, 0, 50, 80, 20, 40, 10, 10);
      //legs
      rect(0, 70, 15, 30, 20, 40, 4, 4);
      rect(34, 70, 15, 30, 20, 40, 4, 4);
      push();
         noStroke();
         rect(1, 65, 46, 14);
      pop();
      //backpack
      rect(-3, 20, 50, 55, 20, 20, 20, 20);
   pop();
}

//centraltable
function drawTable()
{
   //legs
   fill(95, 174, 255);
   rect(100, 320, 10, 80)
   rect(120, 320, 10, 60)
   rect(270, 320, 10, 60)
   rect(290, 320, 10, 80)

   //tabletop
   fill(95, 174, 255);
   ellipse(200, 310, 300, 100);
   ellipse(200, 300, 300, 100);
   stroke(0);
   line(50, 300, 50, 310);
   line(350, 300, 350, 310);

   //emergecy button
   fill('yellow');
   quad(170, 310, 180, 275, 220, 275, 230, 310);
   fill('black');
   //vertical stripes (left to right)
   quad(177, 310, 187, 275, 192, 275, 187, 310);
   quad(195, 310, 198, 275, 202, 275, 205, 310);
   quad(213, 310, 209, 275, 213, 275, 223, 310);
   //horizontal stripes (bottom to top)
   quad(173, 301, 175, 295, 225, 295, 227, 301);
   quad(176, 290, 178, 286, 222, 286, 224, 290);
   quad(178, 282, 180, 278, 220, 278, 222, 282);
   
   push();
      translate(60, 85);
      scale( 0.7);
      fill(250);
      quad(170, 310, 180, 275, 220, 275, 230, 310);
   pop();
   fill('red');
   rect(190, 285, 20, 10)
   ellipse(200, 285, 20, 5);

   //glass
   push();
   translate(-5, 0)
      strokeWeight(0.5)
      stroke('blue');
      fill(80, 209, 230, 200);
      quad(175, 298, 180, 280, 190, 280, 187, 298);
      rect(180, 260, 10, 23);
      rect(175, 275, 10, 23);
      quad(175, 275, 180, 260, 190, 260, 185, 275);
   pop();

}
  

function mouseClicked(event)
   {
      //TODO: add scene boolean check
      if (mouseX > 320 && mouseX < 375 && mouseY > 320 && mouseY < 380 && xRed == -100){
         redVisible = false;
      }

      //scene change to scene 3 if you click the "Vote Lime Out" button
      
      if (mouseX > 250 && mouseX < 400 && mouseY > 0 && mouseY < 50)
      {
      //scenechange = true;
       }
   }

function checkKeys() //must check what keys are down before changing variables to allow orange to move - Nick
{
   
   //x movement
   
   if (keyIsDown(RIGHT_ARROW))
   {
      unitX = 1;
      accX = .7;

   }
   else if (keyIsDown(LEFT_ARROW))
      {
         unitX = -1;
         accX = .7; 
      }
      else
      {
         accX = 0;
         unitX = 0;
      }

   //y movement
   if (keyIsDown(UP_ARROW))
   {
      unitY = -1;
      accY = .7;

   }
   else if (keyIsDown(DOWN_ARROW))
      {
         unitY = 1;
         accY = .7; 
      }
      else
      {
         accY = 0;
         unitY = 0;
      }
   
}

function updateorange() //updates orange's variables based on what keys are pressed - nick
{
   nx += accX * unitX;
   ny += accY * unitY;
}

function updatelime()
{
   if(lx > 230){
      lx--
   }

   if(lx == 230 && ly > 160){
      ly--
   }

}

