var cyanVisible = true
var xRed = -100
var stateC = 2;

var accX = 0;//controls  movement of orange character - nick
var accY = 0;

var nx = 20; //starting postion of the orange character that i will update  for  movement -nick
var ny = 50;

var unitX = 0;//this controls direction of the movement of orange - nick
var unitY = 0;

function setup() {
  createCanvas(400, 400);
}

function scene(){
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

function drawMoveCharacter(posx, posy, x, y, z, scal1, scal2)
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
		if(stateC == 1){
			rect(0, 70, 15, 30, 20, 40, 4, 4);
			rect(34, 70, 15, 30, 20, 40, 4, 4);
		}
		else if(stateC == 2){
			rect(0, 70, 15, 30, 20, 40, 4, 4);
			push();
				rect(34, 70, 15, 30, 20, 40, 4, 4);
				rotate(PI/2)
			pop();
		}

		
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

/*function hover()
	{
		if (mouseX > 320 && mouseX < 375 && mouseY > 320 && mouseY < 380 && xRed == -100)
			draw_knife();
	}

//knife
	function draw_knife()
	{
		push();
			translate(200, 200);
			//handle
			fill(87, 60, 34);
			quad(-3, 0, 7, -10, 6, -5, -3, 5);
			//blade
			translate(7, -8);
			fill(156, 156, 154);
			if(cyanVisible)
				stroke(0);
			else
				stroke(255,0,0);
			quad(-3, 1, 10, -10, 8, 0, -3, 5);
		pop();
	}*/

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

function mouseClicked(event)
	{
	if (mouseX > 320 && mouseX < 375 && mouseY > 320 && mouseY < 380 && xRed == -100)
		cyanVisible = false;
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





function draw() {
	background(36,50,59)
	scene();
	


	drawCharacter(nx, ny, 255, 128, 0, .7, .7) //this is the character that I want to move - nick
	checkKeys(); //this clump of 3 functions are what's necessary for movement, just thought I'd specifiy in case you want to mess with them -nick
	updateorange();
	




// drawMoveCharacter(20, 50, 0, 200, 0, .7, .7)
	drawCharacter(250, 300, 0, 0, 200, .7, .7)
	
	draw_kill_button()

	//hover();

	draw_kill_button();
	
	if (cyanVisible){
		drawCharacter(200, 100, 255, 0, 0, .7, .7)
	}
	else{
		draw_dead();
	}
}






