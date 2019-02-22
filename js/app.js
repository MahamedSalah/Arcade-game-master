// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
	this.x=100,this.y=100,this.speed=300;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
	this.x+=this.speed*dt;
    if(this.x>=505)
        this.x=0;
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var Player = function() {
    this.players = [
        "images/char-boy.png",
        "images/char-cat-girl.png",
		"images/char-horn-girl.png",
        "images/char-pink-girl.png",
        "images/char-princess-girl.png"
    ];
	this.x=205,this.y=410,this.speed=0,this.move="";
	this.id=0;
};
Player.prototype.update = function() {
    if(this.move=="up"&&this.y!=-15) // move up if player can move
		this.y-=85;
	else if(this.move=="down"&&this.y!=410) // move down if player can move
		this.y+=85;
	else if(this.move=="left"&&this.x!=5) // move left if player can move
		this.x-=100;
	else if(this.move=="right"&&this.x!=405) // move right if player can move
		this.x+=100;
	this.move="";
};
Player.prototype.render = function() {
     ctx.drawImage(Resources.get(this.players[this.id]), this.x, this.y);
};
Player.prototype.handleInput = function(input) {
	this.move=input;
};
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    player.handleInput(allowedKeys[e.keyCode]);
});
var allEnemies  = [new Enemy(),new Enemy(),new Enemy(),new Enemy(),new Enemy(),new Enemy()];
var player = new Player();
// valuse and speed for each enemy
allEnemies[0].x=105,allEnemies[0].y=60,allEnemies[0].speed=600; 
allEnemies[1].x=105,allEnemies[1].y=60,allEnemies[1].speed=500;
allEnemies[2].x=150,allEnemies[2].y=150,allEnemies[2].speed=400;
allEnemies[3].x=150,allEnemies[3].y=150,allEnemies[3].speed=300;
allEnemies[4].x=240,allEnemies[4].y=240,allEnemies[4].speed=200;
allEnemies[5].x=240,allEnemies[5].y=240,allEnemies[5].speed=100;