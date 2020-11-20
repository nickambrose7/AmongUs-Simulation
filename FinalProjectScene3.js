
//Global Variables
var imposterTextAddTo = ""
var imposterTextFinal = "Lime was not the Imposter"
var visibleLetters = 0
var xBlue = -350
var xOrange = -280;
var xYellow = 230;
var xPurp = 300

// space imposter variables
var numChars;
var dx = 1;
var dfX = 0;
var dfY = 150;
var dfRot = [];

function setup() {
	createCanvas(400, 400);

	numChars = 1
	//character variables
	for (var i = 0; i < numChars; i = i + 1)
	{
		dfRot.push(PI / random(3, 7))
	}
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
	circle(70, 230, 6);
	circle(275, 80, 10);
	circle(280, 100, 3);
	circle(175, 220, 7);
	circle(185, 210, 5);
	circle(310, 110, 7);
	circle(307, 120, 10);
	circle(330, 150, 10);
	circle(200, 55, 7);
	circle(210, 65, 4);
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

function spaceImposter(x, y, rot)
{
	push();
		translate(x, y);
		scale(0.5);
		rotate(rot);
		fill(69, 245, 56);
		//backpack
		rect(-25, -10, 20, 48, 20, 40, 10, 10);
		//body
		rect(-25, -40, 50, 80, 20, 40, 10, 10);
		//legs
		rect(-25, 30, 15, 30, 20, 40, 4, 4);
		rect(9, 30, 15, 30, 20, 40, 4, 4);
		push();
			noStroke();
			rect(-24, 25, 46, 14);
		pop();
		//eye thing
		push();
			strokeWeight(5);
			fill(100);
			rect(-13, -27, 40, 20, 6, 10, 10, 7);
		pop();
		push();
			noStroke()
			fill(150);
			ellipse(8, -20, 30, 10);
			fill(200);
			ellipse(15, -22, 20, 5);
		pop();
	pop();
}

function drawSpaceImposter()
{
	for (var i = 0; i < numChars; i = i + 1)
	{
		spaceImposter(dfX, dfY, dfRot[i]);
	}
}

function updateSpaceImposter()
{
	for (var i = 0; i < numChars; i++)
	{
		//rotate characters
		dfRot[i] += PI/40

		//update charcters location
		dfX += dx;

		// character disappears at x = 350
		if (dfX >= 350);
		{
			ejectOn = false;
		}
	}
}

function coverMistakes()
{
//window edge
push();
	fill(180);
	noStroke();
	rect(40, 41, 10, 200);
	rect(350, 41, 10, 200);
	//darker parts
	fill(50);
	rect(0, 0, 40, 200);
	rect(0, 0, 400, 40);
	rect(360, 40, 100, 200);
pop();
//left frame
line(40, 40, 40, 240)
line(50, 50, 50, 250)
//right frame
line(360, 40, 360, 240)
line(350, 50, 350, 250)
}

function draw() 
{
	background(50);
	draw_background();

	drawSpaceImposter();
	updateSpaceImposter();
	coverMistakes();
	
	//yellow
	push();
		translate(xYellow, 0);
		if (xYellow > 30)
		{
			drawCharacter(250, 246, 35, -1, 1);
			xYellow -=1.1
		}
		else
		{
			push();
				translate(-35, 0)
				characterBacks(250, 246, 35);
			pop();
		}
	pop();

	//purple
	push();
		translate(xPurp, 0);
		if (xPurp > 100)
		{
			drawCharacter(166, 75, 191, -1, 1);
			xPurp -=1.1
		}
		else
		{
			push();
				translate(-35, 0)
				characterBacks(166, 75, 191);
			pop();
		}
	pop();

	//orange
	push();
		translate(xRed, 0);
		if (xOrange < -80)
		{
			drawCharacter(255, 128, 0, 1, 1);
			xOrange += 1.1
		}
		else
		{
			characterBacks(255, 128, 0);
		}
	pop();

	//blue
	push();
		translate(xBlue, 0);
		if (xBlue < -150)
		{
			drawCharacter(0, 0, 255, 1, 1);
			xBlue += 1.1
		}
		else
		{
			characterBacks(0, 0, 255);
		}
	pop();




	if (dfX > 100)
	{
		visibleLetters = (dfX - 100) / 9;
		imposterTextAddTo = imposterTextFinal.substring(0, visibleLetters);
		push();
			textSize(16);
			strokeWeight(2);
			stroke(0);
			fill(255);
			text(imposterTextAddTo, 100, 150);
		pop();
	}
}
