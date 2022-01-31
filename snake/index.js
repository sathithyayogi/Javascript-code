const BGCOLOR = '#231F20';
const FOOD_COLOR = '#e66916';
const SNAKE_COLOR = '#c2c2c2';

const socket = io('http://localhost:3000');

const handleInit = (msg) => {
  console.log(msg);
}
socket.init('init',handleInit);

const gameScreen = document.getElementById('gameScreen');

let canvas, ctx;

const gameState = {
  player :{
    pos:{
      x:3,
      y:10
    },
    vel:{
      x:1,
      y:0
    },
    snake:[
      {x:1,y:10},
      {x:2,y:10},
      {x:3,y:10}
    ]
  },
  food:{
    x:7,y:7
  },
  gridsize:20
}

function init() {
  canvas = document.getElementById('canvas');
  ctx = canvas.getContext('2d');

  canvas.width = canvas.height = 600;

  ctx.fillStyle= BGCOLOR;
  ctx.fillRect(0,0,canvas.width, canvas.height);

  document.addEventListener('keydown', keyDownEvent);
}

const keyDownEvent = (e) => {
  console.log(e.key);
}

init();

const paintGame = (state) => {
ctx.fillStyle = BGCOLOR;
ctx.fillRect(0,0,canvas.width, canvas.height);

const food = state.food;
const gridsize = state.gridsize;
const size = canvas.width / gridsize;

ctx.fillStyle = FOOD_COLOR;
ctx.fillRect(food.x * size, food.y * size, size, size);
paintPlayer(state.player, size, SNAKE_COLOR);
}

const paintPlayer = (playerState, size, color) => {
const snake = playerState.snake;
ctx.fillStyle = color;
for(let cell of snake){
  ctx.fillRect(cell.x * size, cell.y * size, size, size);
}
}

paintGame(gameState);

