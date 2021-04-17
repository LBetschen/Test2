import {Player} from "./player.js";
import {InputHandler} from "./input.js";

let canvas=document.getElementById("gameScreen");

const GAME_HEIGHT=400;
const GAME_WIDTH=600;

canvas.width=GAME_WIDTH;
canvas.height=GAME_HEIGHT;

var ctx=canvas.getContext('2d');

let player = new Player(GAME_HEIGHT, GAME_WIDTH);




let lastTime =0;

function gameLoop(timestamp){
    let deltaTime=timestamp-lastTime;
    lastTime=timestamp;

    ctx.clearRect(0,0,GAME_WIDTH,GAME_HEIGHT);
    
    player.jump();
    player.draw(ctx);
    player.update(deltaTime);

    requestAnimationFrame(gameLoop);
}
gameLoop();
