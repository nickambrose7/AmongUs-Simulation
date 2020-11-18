// let INC = 50;
// //hi

// function drawGrid()
// {
//  // horizontal
//  for (i = 0; i < width; i+=INC)
//  {

//   if(i % (INC*2) == 0)
//   {
//    stroke(0);
//    fill(0);
//    text(i, 10, i);
//    strokeWeight(2);
//   }
//   else
//   {
//    strokeWeight(1);
//   }
//   stroke(0, 0, 255);
//   line(0, i, width, i);

//  }

//  //vertical
//  for (i = 0; i < height; i+=INC)
//  {

//   if(i % (INC*2) == 0)
//   {
//    stroke(0);
//    fill(0);
//    text(i, i, 10);
//    strokeWeight(2);
//   }
//   else
//   {
//    strokeWeight(1);
//   }
//   stroke(255, 0, 255);
//   line(i, 0, i, height);
//  }
// }
// function drawCenter()
// {
//  noStroke();
//  fill(0);
//  ellipse(width / 2, height / 2, 10, 10);
//  stroke(0);
//  fill(0);
//  text("(" + width / 2 + ", " + height / 2 + ")", width / 2 + 10, height / 2 + 10);
// }


//Global Variables
count = 0
//scenechange = false;

function setup() 
{
	createCanvas(400, 400);
}

function draw()
{
	background(0);
	backgroundScene();
	count ++;
}
	
function backgroundScene()
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

//character
function drawCharacter(x, y, z, scal1, scal2)
{
	push();
		translate(200, 200)
		scale(scal1, scal2)
		fill(x, y, z);
		//backpack
		rect(-10, 30, 20, 48, 20, 40, 10, 10);
		//body
		rect(0, 0, 50, 80, 20, 40, 10, 10);
		//legs
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

function mouseClicked()
{
	//scene change to scene 3 if you click the "Vote Lime Out" button
   	if (mouseX > 250 && mouseX < 400 && mouseY > 0 && mouseY < 50)
   	{
    	//scenechange = true;
    }
}
