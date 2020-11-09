
//Global Variables
var xRed = -300
var cyanVisible = true

function setup() {
	createCanvas(400, 400);
}
//Background function
	 function draw_background()
	 {
	 	//ground
	 fill(100);
	rect(0, 300, 400, 100);

	//window
	fill(180);
	rect(40, 40, 320, 220);
	fill(0);
	rect(50, 50, 300, 200);

	//stars
	function drawStars()
	{
	fill(255);
	circle(70, 80, 20);
	circle(100, 120, 15);
	circle(130, 200, 10);
	circle(125, 90, 5);
	circle(110, 240, 5);
	circle(114, 180, 5);
	circle(110, 90, 5);
	circle(73, 130, 7);
	}

	drawStars();

	push();
		translate(300, 45);
		rotate(PI/2);
		drawStars();
	pop();

	push();
		translate(400, 245);
		scale(-1);
		angleMode(degrees);
		rotate(100);
		drawStars();
	pop();

	//extra stars
	fill(255);
	circle(275, 80, 10);
	circle(280, 100, 3);
	circle(175, 220, 7);
	circle(185, 210, 5);
	circle(310, 110, 7);
	circle(307, 120, 10);
	circle(330, 150, 10);
	circle(200, 55, 7);
	circle(210, 65, 4);

		//Among Us Text
	push();
	strokeWeight(2)
	fill(255, 0, 0);
	textSize(32);
	text('Among Us', 130, 30);
	pop();
	 }
//character
	function drawCharacter(x, y, z)
	{
		fill(x, y, z);
		//backpack
		rect(190, 230, 20, 48, 20, 40, 10, 10);
		//body
		rect(200, 200, 50, 80, 20, 40, 10, 10);
		//legs
		rect(200, 270, 15, 30, 20, 40, 4, 4);
		rect(234, 270, 15, 30, 20, 40, 4, 4);
		push();
			noStroke();
			rect(201, 265, 46, 14);
		pop();
		//eye thing
		push();
			strokeWeight(5);
			fill(100);
			rect(212, 213, 40, 20, 6, 10, 10, 7);
		pop();
		push();
			noStroke()
			fill(150);
			ellipse(233, 220, 30, 10);
			fill(200);
			ellipse(235, 218, 20, 5);
		pop();
	}

//knife
	function draw_knife()
	{
		push();
			translate(150, 260);
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
	}

	//dead body
	function draw_dead()
	{
		//blood puddle
		fill(250, 0, 0);
		ellipse(255, 305, 40, 5);

		//body
		push();
			translate(220, 310);
			angleMode(degrees);
			rotate(193);
			fill(0, 255, 255);
			rect(0, 0, 40, 35, 20, 20, 20, 20);
			fill(51, 102, 95);
			translate(6, 15);
			rect(0, 0, 30, 17, 20, 20, 20, 20);
		pop();
	
		//leg2
		push();
			translate(226, 292);
			rotate(6*PI/13);
			fill(0, 255, 255);
			rect(0, 0, 15, 30, 20, 40, 4, 4);
		pop();

		//leg1
		push();
			translate(218, 273);
			rotate(PI/3);
			fill(0, 255, 255);
			rect(0, 0, 15, 30, 20, 40, 4, 4);
		pop();

		//cover up
		push();
			noStroke();
			translate(218, 305);
			angleMode(degrees);
			rotate(193);
			fill(0, 255, 255);
			rect(0, 0, 27, 12, 20, 20, 20, 20);
		pop();

		//bone
		push();
		translate(-2, 0);
		push();
			translate(238, 282);
			fill(230);
			rotate(-PI/7);
			rect(0, 0, 20, 8, 10, 10, 10, 10);
		pop();

		push();
			translate(257, 273);
			fill(230);
			rotate(PI/8);
			ellipse(0, 0, 10, 13, 10, 10, 10, 10);
		pop();

		push();
			translate(257, 283);
			fill(230);
			rotate(-PI/4);
			ellipse(0, 0, 10, 13, 10, 10, 10, 10);
		pop();

		//bone cover up
		push();
		noStroke();
		fill(230);
		circle(255, 280, 9)
		pop();
		pop();

	}

	function hover()
	{
		if (mouseX > 320 && mouseX < 375 && mouseY > 320 && mouseY < 380 && xRed == -100)
			draw_knife();
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

function drawBack2()
{
fill(100);
ellipse(200, 200, 30, 30);
console.log(event);
}

function mouseClicked(event)
	{
	if (mouseX > 320 && mouseX < 375 && mouseY > 320 && mouseY < 380 && xRed == -100)
		cyanVisible = false;
	}


function draw() {
	background(50);

	 draw_background();

	//cyan
	if (cyanVisible)
		drawCharacter(0, 255, 255);
	else
		draw_dead();

	//red
	push();
	translate(xRed, 0);
	drawCharacter(255, 0, 0);
	if (xRed < -100)
	{
		xRed += 1
	}
	pop();

	hover();

	draw_kill_button();

}


