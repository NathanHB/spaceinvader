var canon;
var aliens = [];
var bullets = [];
var score = 0;
let lamma;
let houses = [];
var laserbeams = [];

function preload(){
	lamma = loadImage('img/llama.png');
}


function setup() {
	createCanvas(600, 400);
	canon = new Canon();
	for (var i = 0; i < 3; i++) {
		house = new House(75+230*i, 300);
		houses.push(house);
	}

	for (var i = 0; i < 10; i++) {
		for (var j = 0; j <3; j++) {
			alien = new Alien(30+i*45, 20+j*40, lamma);
			aliens.push(alien);
		}
	}
}


function draw() {
	background(0);

	for (var i = 0; i < houses.length; i++) {
		houses[i].show()
	}

	canon.show();

	text('SCORE: ' + score, width - 65, 15);

	if (aliens.length == 0) {
		text('YOU WIN',width/2-20,height/2);
	}

	for (var k = 0; k < bullets.length; k++) {
		bullets[k].show();
		bullets[k].move(-1);
		for (var i = 0; i < aliens.length; i++) {
			if (bullets[k].hits(aliens[i])){
				aliens[i].die(i);
				bullets[k].disapear(k);
				score ++;
				break;
			}
		}
	}

	if (keyIsDown(RIGHT_ARROW)){
		canon.move(3);
	}else if (keyIsDown(LEFT_ARROW)){
		canon.move(-3);
	}

	for (var k = 0; k < aliens.length; k++) {
		aliens[k].show();
		aliens[k].move();
		if (int(random(0, 15000)) === 2){
			var laserbeam = new Laserbeams(aliens[k].x, aliens[k].y);
			laserbeams.push(laserbeam);
	}
	if (laserbeams.length != 0){
		for (var i = 0; i < laserbeams.length; i++) {
			laserbeams[i].show();
			laserbeams[i].move(1)
		}
	}




		if (aliens[k].x >= width || aliens[k].x <= 0){
			for (var i = 0; i < aliens.length; i++) {
				aliens[i].turnback();
				aliens[i].shift();
				}
			}
		}
	}


function keyPressed() {
	if (key === ' ') {
		var bullet = new Bullet(canon.x, canon.y-10);
		bullets.push(bullet)
	}
}
