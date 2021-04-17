export class Player{
    constructor(gameHeight,gameWidth){
        this.image=document.getElementById("boyRight");

        this.gameWidth=gameWidth;
        this.gameHeight=gameHeight;
        
        this.height=60;
        this.width=50;
        this.rotate=180;
        this.position={
            x: gameWidth/2-this.width/2,
            y: gameHeight-this.height,
        }
        
        this.x_maxSpeed=10;
        this.x_speed = 0;
        this.ymaxspeed = 10;
        this.y_speed =0;
        
        this.x_velocity=0;
        this.y_velocity=0;
        this.weight=0;
        this.jumping=false;
        this.jumpForce=0;               
    }
    
    moveLeft(){
        this.x_speed=-this.x_maxSpeed;
        this.image=document.getElementById("boyLeft");
    }

    moveRight(){
        this.x_speed=this.x_maxSpeed;
        this.image=document.getElementById("boyRight");
    }
    jump(){       
        this.y_speed-=this.jumpForce;  
        this.jumpForce-=this.weight;      
    }
    
    stop_x(){
        this.x_speed=0;
    }

    stop_y(){
        this.y_speed=0;
    }

    draw(ctx){
      
        ctx.drawImage(this.image,this.position.x,this.position.y,this.width,this.height);
    }

    update(deltaTime){
        if(!deltaTime){return;}
       
        this.position.x+=this.x_speed;
        this.position.y+=this.y_speed;
         
        if(this.position.y + this.height>this.gameHeight){
            this.position.y=this.gameHeight-this.height;
            this.weight=0;
            this.jumpForce=0;
            this.y_speed=0;
            this.jumping=false;
        }
        if(this.position.y<0){this.position.y=0;}
        
        if(this.position.x<0 ){this.position.x =0}
        if(this.position.x+this.width>this.gameWidth){
            this.position.x = this.gameWidth-this.width;
        }
    }
}
