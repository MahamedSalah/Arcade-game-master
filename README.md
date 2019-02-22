frontend-nanodegree-arcade-game
===============================    
How the game is played?

-You can choose player or start with default player.
-The player should pass to another side without touch any enemy.
-Player has three chances to pass.  
-Player you will win when pass to another side.
-Player will lose when all your chances finish 

------------------------------------------------------------------------------------------------------------------------

How the Game was created?

1- in file engin.js 
    -Craete board game and manage the game
    -Check colision, when enemy and Player at the same coordinate player die and go to it's intial position
    -Update entities
    -Render the board,player and enemies
    
2- in file app.js
    -Class Player
    -Class Enemy
	-6 objects from enemies with 6 different coordinates and speed.
    -1 player object
3- in file My_design.js
	- Check for the choice character.
	- Hide and show game.

------------------------------------------------------------------------------------------------------------------------
Instructions and how to start the game:

-To strat the game open index.html file then choose any player or press start
-When the player won or lose and want to play aging , press on play aging button.
-To win the game you should pass to another side without touch any enemy.

What the player is to expect from the game?
The player expect how to pass without touch any enemies and without lose hearts. 

Game dependencies if any:
No game dependencies.
 