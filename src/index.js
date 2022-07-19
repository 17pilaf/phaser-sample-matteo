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
  
  platforms = this.physics.add.staticGroup();
  platforms.create(400, 568, 'ground').setScale(2).refreshBody();
  
}

function update ()
{
}

function fly() {
 bird.body.velocity.y = -200;
 bird.body.velocity.x = 70
}

