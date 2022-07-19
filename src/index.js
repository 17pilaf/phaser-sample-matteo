import Phaser, { Time } from 'phaser';

var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  debug: true,
  scene: {
      preload,
      create,
      update
  },
  physics: {
    default: 'arcade',
    arcade: {
    }
  }
};

var game = new Phaser.Game(config);
let bird = null;

function preload ()
{
  this.load.image('sky','/assets/sky.png');
  this.load.image('bird','/assets/bird.png');
  this.load.image("ground", "/assests/platform.png");
  let space = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
  space.on('down',fly);
  
}
var platforms;
function create ()
{
  this.add.image(0,0,'sky').setOrigin(0);
  bird = this.physics.add.sprite(0,300, 'bird').setOrigin(0);
  bird.body.gravity.y= 200;


  // platforms = this.physics.add.staticGroup();
  // this.physics.add.collider(bird, platforms, hitPlatforms, null, this);
  // platforms.create(400, 1100, 'ground').setScale(40).refreshBody();
  
}

function update ()
{
  let birdPosition = bird.body.position.y;
  if(birdPosition < 0 || birdPosition > 600 ) {
    bird.setTint(0xff0000);
    alert("Hai perso coglione!");
    bird.body.position.y = 300;
    bird.body.position.x = 0;
    bird.body.velocity.x = 0;
    bird.body.velocity.y = 0
  }
}

function fly() {
 bird.body.velocity.y = -200;
 bird.body.velocity.x = 70
}


function haiperso() {
      
  setTimeout(function(){ alert("hai perso"); }, 100)
}

function hitPlatforms (bird, platforms)
{
  this.physics.pause();
  
  bird.setTint(0xff0000);

  haiperso()

  
    
}

