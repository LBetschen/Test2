export class InputHandler{
    
    constructor(player){
        
        document.addEventListener("keydown",(event)=>{
            
            switch (event.keyCode){
                case 65:
                    player.moveLeft();                   
                    break;
                case 68:
                    player.moveRight();                   
                    break;
                case 32:
                    if(player.jumping==false){
                        player.jumpForce=2;
                        player.weight=0.2;
                    }
                    player.jumping=true;                   
                    break;               
            }
        });
        
        document.addEventListener("keyup",(event)=>{
            
            switch (event.keyCode){
                case 65:
                    if(player.x_speed<0){
                        player.stop_x();
                    }
                    break;

                case 68:
                    if(player.x_speed>0){
                        player.stop_x();
                    }
                    break;                                     
            }
        });      
    }
}