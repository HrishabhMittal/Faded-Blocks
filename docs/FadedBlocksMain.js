var fps=30;
var keys = {
    up:false,
    right:false,
    left:false,
    down:false,
    enter:false,
};
var Ball = {
    x:440,
    y:290,
    side:20,
    xVelocity:10,
    yVelocity:10,
}
var player = {
    x:0,
    y:0,
    xVelocity:0,
    yVelocity:0,
    height:20,
    width:20,
    jump:false,
};
var level = {
    zero:true,
    one:false,
    two:false,
    three:false,
    four:false,
    five:false,
};
var physics = {
    friction:0.5,
    gravity:1,
};
var target = {
    x:440,
    y:305,
    score:0,
    height:20,
    width:20,
}
var ai = {
    x:865,
    y:200,
}
var points = {
    player:0,
    enemy:0,
}
var canvas = document.getElementById("canvas");
var canvasContext=canvas.getContext("2d");
let levelcache = localStorage.getItem("levels");
let x=JSON.parse(levelcache);
if (x.one!=undefined) {
    level=x;
} else {
    localStorage.clear();
}



document.addEventListener("keydown",keydown);
document.addEventListener("keyup",keyup);
setInterval(renderLevel,1000/fps);
var lastLevel=0;
function renderLevel() {
    if (level.zero && level.one == false) {
        level1();
        if (lastLevel!=1) {
            lastLevel=1;
            localStorage.setItem("levels",JSON.stringify(level));
        } 
    }
    if (level.one && level.two == false) {
        level2();
        if (lastLevel!=2) {
            lastLevel=2;
            localStorage.setItem("levels",JSON.stringify(level));
        } 
    }
    if (level.two && level.three == false) {
        level3();
        if (lastLevel!=3) {
            lastLevel=3;
            localStorage.setItem("levels",JSON.stringify(level));
        } 
    }
    if (level.three && level.four == false) {
        level4();
        if (lastLevel!=4) {
            lastLevel=4;
            localStorage.setItem("levels",JSON.stringify(level));
        } 
    }
    if (level.four && level.five == false) {
        level5();
        if (lastLevel!=5) {
            lastLevel=5;
            localStorage.setItem("levels",JSON.stringify(level));
        } 
    }
    if (level.five) {
        end();
        if (lastLevel!=6) {
            lastLevel=6;
            localStorage.setItem("levels",JSON.stringify(level));
        } 
    }
};
function keydown(event) {
    switch (event.keyCode) {
        case 13:
            keys.enter=true;
            break;
        case 32:
            keys.up=true;
            break;
        case 37:
        case 65:
            keys.left=true;
            break;
        case 38:
        case 87:
            keys.up=true;
            break;
        case 39:
        case 68:
            keys.right=true;
            break;
        case 40:
        case 83:
            keys.down=true;
            break;
    }
};

function keyup(event) {
    switch (event.keyCode) {
        case 32:
            keys.up=false;
            break;
        case 37:
        case 65:
            keys.left=false;
            break;
        case 38:
        case 87:
            keys.up=false;
            break;
        case 39:
        case 68:
            keys.right=false;
            break;
        case 40:
        case 83:
            keys.down=false;
            break;
    }
}
function renderPlayer() {
    canvasContext.fillStyle = "#F08080";
    canvasContext.fillRect(player.x, player.y, player.width, player.height);
    physics.gravity = 1;
    player.y += player.yVelocity;
    player.x += player.xVelocity;
    if (player.yVelocity < 10) {
        player.yVelocity += 1;
    }
    if(keys.left) {
        player.xVelocity = -20;
    }
    if (keys.right) {
        player.xVelocity = 20;
    }
    player.xVelocity = player.xVelocity*physics.friction;
}

function renderPlatform(x,y,w,h) {
    canvasContext.fillStyle = "#45597E";
    canvasContext.fillRect(x,y,w,h);
    if (player.y >= y-player.height && player.y <= y && player.x >= x-player.width && player.x <= x+w) {
        player.yVelocity = 0;
        physics.gravity = 0;
        player.y = y-player.height;
        player.jump=true;
    }
    if (player.y >= y&& player.y <= y+h && player.x >= x-player.width && player.x <=  x-player.width+10) {
        if (player.xVelocity > 0) {
            player.xVelocity = 0;
            player.x = x-player.width;
        }
    }
        if (player.y >= y&& player.y <= y+h && player.x >= x+w-10 && player.x <= x+w) {
            if (player.xVelocity < 0) {
                player.xVelocity = 0;
                player.x = x+w;
            }
    }
    if (player.y >= y+h-10 && player.y < y+h && player.x >= x-player.width && player.x <= x+w) {
        if (player.yVelocity < 0) {
            player.yVelocity = 0;
        }
        player.y = y+h;
    }
}

function restrict() {
    if (player.x < 0) {
        player.x = 0;
    }
    if (player.x > canvas.width-player.width) {
        player.x = canvas.width-player.width;
    }
}

function playerJump() {
    if (keys.up && player.jump == true && player.yVelocity == 0) {
        player.yVelocity =-10;
        player.jump=false;
    }
}

function renderScreen() {
    canvasContext.fillStyle = "#F5F5F5";
    canvasContext.fillRect(0,0,canvas.width,canvas.height);
}
function dangerBlock(x,y,w,h) {
    canvasContext.fillStyle = "#ED2939";
    canvasContext.fillRect(x, y,w,h);
    if (player.y >= y-player.height && player.y <= y && player.x >= x && player.x <= x+w) {
        player.x = 0;
        player.y = 0;
    }
    if (player.y >= y&& player.y <= y+h && player.x >= x && player.x <= x+w) {
        player.x = 0;
        player.y = 0;
    }
    if (player.y >= y+h-10 && player.y < y+h && player.x >= x && player.x <= x+w) {
        player.x = 0;
        player.y = 0;
    }
}

function trampoline(x,y,w,h) {
    canvasContext.fillStyle = "#6FA068";
    canvasContext.fillRect(x, y,w,h); 
    if (player.y >= y-player.height && player.y <= y && player.x >= x-player.width && player.x <= x+w) {
        player.yVelocity = player.yVelocity+1;
        player.yVelocity = -player.yVelocity;
    }
    if (player.y >= y&& player.y <= y+h && player.x >= x-player.width && player.x <= x+w) {
        player.xVelocity = -player.xVelocity;
    }
    if (player.y >= y+h-10 && player.y < y+h && player.x >= x-player.width && player.x <= x+w) {
        player.yVelocity = player.yVelocity-1;
        player.yVelocity = -player.yVelocity;
    }
}

function invisibleBlock(x,y,w,h) {
    if (player.y >= y-player.height && player.y <= y && player.x >= x-player.width && player.x <= x+w) {
        player.yVelocity = 0;
        physics.gravity = 0;
        player.y = y-player.height;
        player.jump=true;
        canvasContext.fillStyle = "#45597E";
        canvasContext.fillRect(x,y,w,h);
    }
    if (player.y >= y&& player.y <= y+h && player.x >= x-player.width && player.x <= x+w) {
        player.xVelocity = 0;
        canvasContext.fillStyle = "#45597E";
        canvasContext.fillRect(x,y,w,h);
    }
    if (player.y >= y+h-10 && player.y < y+h && player.x >= x-player.width && player.x <= x+w) {
        if (player.yVelocity < 0) {
            player.yVelocity = 0;
            canvasContext.fillStyle = "#45597E";
            canvasContext.fillRect(x,y,w,h);
        }
        player.y = y+h;
    }
}

function respawn() {
    if (player.x < 0) {
        player.x = 0;
    }
    if(player.y > canvas.height) {
        player.x = 0;
        player.y = 0;
    }
}

function teleport(x,y,w,h,x1,y1) {
    canvasContext.fillStyle = "#ADD8E6";
    canvasContext.fillRect(x,y,w,h);
    if (player.y >= y-player.height && player.y <= y && player.x >= x-player.width && player.x <= x+w) {
        player.yVelocity = 0;
        physics.gravity = 0;
        player.y = y-player.height;
        player.jump=true;
        player.x = x1;
        player.y = y1;
    }
    if (player.y >= y&& player.y <= y+h && player.x >= x-player.width && player.x <=  x-player.width+10) {
        if (player.xVelocity > 0) {
            player.xVelocity = 0;
            player.x = x1;
            player.y = y1;
        }
    }
        if (player.y >= y&& player.y <= y+h && player.x >= x+w-10 && player.x <= x+w) {
            if (player.xVelocity < 0) {
                player.xVelocity = 0;
                player.x = x1;
                player.y = y1;
            }
    }
    if (player.y >= y+h-10 && player.y < y+h && player.x >= x-player.width && player.x <= x+w) {
        if (player.yVelocity < 0) {
            player.yVelocity = 0;
            player.x = x1;
            player.y = y1;
        }
    }
}

function teleportCheck(x,y,w,h,x1,y1,x2,y2,x3,y3) {
    canvasContext.fillStyle = "#ADD8E6";
    canvasContext.fillRect(x,y,w,h);

    if (player.y >= y-player.height && player.y <= y && player.x >= x-player.width && player.x <= x+w) {
        player.yVelocity = 0;
        physics.gravity = 0;
        player.y = y-player.height;
        player.jump=true;
        if (player.xVelocity ==0) {
            player.x = x1;
            player.y = y1;
        }
        if (player.xVelocity > 0) {
            player.x = x2;
            player.y = y2;
        }
        if (player.xVelocity < 0) {
            player.x = x3;
            player.y = y3;
        }
    }
    if (player.y >= y&& player.y <= y+h && player.x >= x-player.width && player.x <=  x-player.width+10) {
        if (player.xVelocity ==0) {
            player.x = x1;
            player.y = y1;
        }
        if (player.xVelocity > 0) {
            player.x = x2;
            player.y = y2;
        }
        if (player.xVelocity < 0) {
            player.x = x3;
            player.y = y3;
        }
    }
    if (player.y >= y&& player.y <= y+h && player.x >= x+w-10 && player.x <= x+w) {
        if (player.xVelocity ==0) {
            player.x = x1;
            player.y = y1;
        }
        if (player.xVelocity > 0) {
            player.x = x2;
            player.y = y2;
        }
        if (player.xVelocity < 0) {
            player.x = x3;
            player.y = y3;
        }
    }
    if (player.y >= y+h-10 && player.y < y+h && player.x >= x-player.width && player.x <= x+w) {
        if (player.xVelocity ==0) {
            player.x = x1;
            player.y = y1;
        }
        if (player.xVelocity > 0) {
            player.x = x2;
            player.y = y2;
        }
        if (player.xVelocity < 0) {
            player.x = x3;
            player.y = y3;
        }
    }
}

function renderTarget(random1,random2,random3) {
    var scorePlace;
    if (target.score < 7) {
        scorePlace = 440;
    }
    if (target.score >= 7 || target.score == "You Win") {
        target.score = "You Win";
        scorePlace = 400;
    }
    canvasContext.fillStyle = "lime";
    canvasContext.font = "30px Arial";
    canvasContext.fillText(target.score,scorePlace,30);
    canvasContext.fillStyle = "lime";
    canvasContext.fillRect(target.x, target.y, target.width, target.height);
    if (player.x >= target.x  && player.y == target.y && player.x <= target.x+target.width) {
        target.score += 1;
        random1=Math.random()*3;
        random2=Math.random()*3;
        random3=Math.random()*(200-target.width);
        if (random1>=0 && random1<1 && random2>=0 && random2<1) {
            target.x=0+random3;
            target.y=100-target.height;
        }
        if (random1>=0 && random1<1 && random2>=1 && random2<2) {
            target.x=0+random3;
            target.y=250-target.height;
        }
        if (random1>=0 && random1<1 && random2>=2 && random2<=3) {
            target.x=0+random3;
            target.y=400-target.height;
        }
        if (random1>=1 && random1<2 && random2>=0 && random2<1) {
            target.x=335+random3;
            target.y=175-target.height;
        }
        if (random1>=1 && random1<2 && random2>=1 && random2<2) {
            target.x=335+random3;
            target.y=325-target.height;
        }
        if (random1>=1 && random1<2 && random2>=2 && random2<=3) {
            target.x=335+random3;
            target.y=465-target.height;
        }
        if (random1>=2 && random1<=3 && random2>=0 && random2<1) {
            target.x=670+random3;
            target.y=100-target.height;
        }
        if (random1>=2 && random1<=3 && random2>=1 && random2<2) {
            target.x=670+random3;
            target.y=250-target.height;
        }
        if (random1>=2 && random1<=3 && random2>=2 && random2<=3) {
            target.x=670+random3;
            target.y=400-target.height;
        }
    }
}

function blackScreen() {
    canvasContext.fillStyle = "black";
    canvasContext.fillRect(0,0,canvas.width,canvas.height);
}
var playerX=15;
var playerY=200;
var playerWidth=15;
var playerHeight=200;
var speed=5;
function finalPlayer() {
    canvasContext.fillStyle = "#6FA068";
    canvasContext.fillRect(playerX,playerY,playerWidth,playerHeight);
    if (keys.up) {
        playerY = playerY - speed;
    }
    if (keys.down) {
        playerY += speed;
    }
    if (playerY >= canvas.height-playerHeight) {
        playerY = canvas.height-playerHeight;
    }
    if (playerY <= 0) {
        playerY = 0;
    }
}
function ball() {
    Ball.x += Ball.xVelocity;
    Ball.y += Ball.yVelocity;
    canvasContext.fillStyle = "#F08080";
    canvasContext.fillRect(Ball.x,Ball.y,Ball.side,Ball.side);
    if (Ball.x < 0) {
        if (Ball.x != 1000) {points.enemy += 1;};
        Ball.x = 1000;
        Ball.y = 290;
        Ball.xVelocity = 0;
        Ball.yVelocity = 0;
        if (keys.up || keys.down) {
        Ball.x = 440;
        Ball.y + 290;
        Ball.xVelocity = 9;
        Ball.yVelocity = 10;
        }
    }
    if (Ball.x > canvas.width-Ball.side) {
        if (Ball.x != 1000) {points.player += 1;};
        Ball.x = 1000;
        Ball.y = 290;
        Ball.xVelocity = 0;
        Ball.yVelocity = 0;

        if (keys.up || keys.down) {
        Ball.x = 440;
        Ball.y + 290;
        Ball.xVelocity = 9;
        Ball.yVelocity = 10;
        }
    }
    if (Ball.y < 0) {
        Ball.yVelocity = -Ball.yVelocity;
    }
    if (Ball.y > canvas.height-Ball.side) {
        Ball.yVelocity = -Ball.yVelocity;
    }
    if (Ball.y >= playerY && Ball.y <= playerY+playerHeight && Ball.x < playerX+playerWidth+10) {
        Ball.xVelocity = -Ball.xVelocity;
    }
    if (Ball.y >= ai.y && Ball.y <= ai.y+playerHeight && Ball.x > ai.x-(playerWidth+10)) {
        Ball.xVelocity = -Ball.xVelocity;
    }
}
function finalAI() {
    var speedAI; 
    canvasContext.fillStyle = "#6FA068";
    canvasContext.fillRect(ai.x,ai.y,playerWidth,playerHeight);
    if (ai.y > Ball.y) {
        speedAI = -5;
        ai.y += speedAI;
    }
    if (ai.y + playerHeight < Ball.y) {
        speedAI = 5;
        ai.y += speedAI;
    }
    if (ai.y == Ball.y) {
        speedAI = 5;
        ai.y += speedAI;
    }
    if (Ball.x < canvas.width*5/8) {
        if (ai.y+playerHeight/2 > canvas.height/2) {
            speedAI = -5;
            ai.y += speedAI;
        }
        if (ai.y+playerHeight/2 < canvas.height/2) {
            speedAI = 5;
            ai.y += speedAI;
        }
        if (ai.y+playerHeight/2 == canvas.height/2) {
            speedAI = 0;
            ai.y += speedAI;
        }
    }

}

function score() {
    canvasContext.fillStyle = "#6FA068";
    canvasContext.font = "30px Arial";
    canvasContext.fillText(points.player,220,30);
    canvasContext.fillStyle = "#6FA068";
    canvasContext.font = "30px Arial";
    canvasContext.fillText(points.enemy,670,30);
    if (points.enemy >= 7 || points.player == "You lose") {
        points.player = "You lose";
        points.enemy = " ";
        Ball.x = 440;
        Ball.y = 290;
        Ball.xVelocity = 0;
        Ball.yVelocity = 0;
    }
    if (points.player >= 7 || points.player == "You Win") {
        if (Ball.x != 1000) {
        points.player = "You Win";
        points.enemy = " ";
        Ball.x = 440;
        Ball.y = 290;
        Ball.xVelocity = 0;
        Ball.yVelocity = 0;
        }
    }
    if (Ball.x == 1000) {
        canvasContext.fillStyle = "#6FA068";
        canvasContext.font = "30px Arial";
        canvasContext.fillText("press spacebar",350,290);
    }
}

function scorezero() {
    if (player.x == 0 && player.y == 0) {
        target.score = 0;
    }
}
