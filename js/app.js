// I'm using the ES6 for this project

// Enemies our player must avoid
class Enemy {
  constructor(x,y,movement){
      // Variables applied to each of our instances go here,
      // we've provided one for you to get started
      this.x= x;
      this.y= y;
      this.movement=movement;

      // The image/sprite for our enemies, this uses
      // a helper we've provided to easily load images
      this.sprite = 'images/enemy-bug.png';
  }

  // Update the enemy's position, required method for game
  // Parameter: dt, a time delta between ticks
  update(dt){
      // You should multiply any movement by the dt parameter
      // which will ensure the game runs at the same speed for
      // all computers.
      if (this.x <=510) {
      this.x += this.movement * dt;
      }

      else if (this.x > 510){
          if (this.y === 50){
              enemy50 = new Enemy(-100,50,Math.floor(Math.random() * 400)+ 150);
              allEnemies.splice(0,1,enemy50);
          }
          else if (this.y === 140){
              enemy140 = new Enemy(-100,140,Math.floor(Math.random() * 400)+ 150);
              allEnemies.splice(1,1,enemy140);
          }
          else if (this.y === 220){
              enemy220 = new Enemy(-100,220,Math.floor(Math.random() * 400)+ 150);
              allEnemies.splice(2,1,enemy220);
          }
      }

      // Check if player collisions the enemies, if a collision happened the game will start again
      // If the enemies are in the same rectangle of player then collision happened
      if ((this.x>=player.x-50 && this.x<=player.x+50) && ( this.y===player.y || this.y===player.y+10)){
        start();
      }
  }

  // Draw the enemy on the screen, required method for game
  render(){
      ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Player {
  constructor(x,y){
      this.x = x;
      this.y = y;

      this.figure = 'images/char-horn-girl.png';
  }

  // Update the player position, required method for game
  update(){
      // Control the player movement
      if (this.y > 400){
        this.y =400;
      }
      else if (this.x < 0){
        this.x = 0;
      }
      else if (this.x > 400){
        this.x = 400;
      }
      // When player reaches the water the message will show and restart the game
      else if (this.y < 0) {
      alert('Congratulations! You Win!!');
      start();
      }
  }

  // Draw the player on the screen, required method for game
  render(){
      ctx.drawImage(Resources.get(this.figure), this.x, this.y);
  }

  // When press some key the player will move depending on the key
  handleInput(keypress){
      if (keypress === 'left') {
        this.x -= 100;
      }
      else if (keypress === 'up') {
        this.y -= 90;
      }
      else if (keypress === 'right') {
        this.x += 100;
      }
      else if (keypress === 'down') {
        this.y += 90;
      }
  }
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

let allEnemies;
let player;
let enemy50, enemy140 ,enemy220;

start();

// This function for start and restart the game also
function start(){
  allEnemies =[];
  player = new Player(200,400);
  enemy50 = new Enemy(-100,50,Math.floor(Math.random() * 400)+ 150);
  enemy140 = new Enemy(-100,140,Math.floor(Math.random() * 400)+ 150);
  enemy220 = new Enemy(-100,220,Math.floor(Math.random() * 400)+ 150);

  allEnemies.push(enemy50);
  allEnemies.push(enemy140);
  allEnemies.push(enemy220);
  console.log(allEnemies);
}

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
