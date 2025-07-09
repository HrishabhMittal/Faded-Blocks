function level1() {
    blackScreen();
    canvasContext.fillStyle = "White";
    canvasContext.font = "30px Arial";
    canvasContext.fillText("So, Want to play a game",300,290);
    canvasContext.font = "15px Arial";
    canvasContext.fillText("press enter to play a game",360,320);
    if (keys.enter) {
        if (player.y <= 0) {
            keys.up = false;
        }
    renderScreen();
    renderPlayer();
    renderPlatform(0,100,230,15);
    renderPlatform(0,250,230,15);
    renderPlatform(0,400,230,15);
    renderPlatform(335,175,230,15);
    renderPlatform(335,325,230,15);
    renderPlatform(335,465,230,15);
    renderPlatform(670,100,230,15);
    renderPlatform(670,250,230,15);
    renderPlatform(670,400,230,15);
    dangerBlock(0,500,canvas.width,canvas.height-500);
    renderTarget();
    playerJump();
    restrict();
    respawn();
    scorezero();
    nextLevel();
    }
    function nextLevel() {
        if (target.score == 7) {
            level.one = true;
            player.x = 0;
            player.y = 0;
            keys.enter = false;
        }

    };
};

function level2() {
    blackScreen();
    canvasContext.fillStyle = "White";
    canvasContext.font = "30px Arial";
    canvasContext.fillText("Well, That was easy",330,290);
    canvasContext.font = "15px Arial";
    canvasContext.fillText("press enter to play next game",360,320);
    if (keys.enter) {
        if (player.y <= 0) {
            keys.up = false;
        }
    renderScreen();
    renderPlayer();
    renderPlatform(0,100,100,15);
    renderPlatform(100,115,100,15);
    dangerBlock(200,130,150,15);
    renderPlatform(350,115,100,15);
    dangerBlock(450,130,150,30);
    renderPlatform(600,100,100,15);
    dangerBlock(600,115,200,15);
    trampoline(600,220,300,15);
    renderPlatform(400,235,200,15);
    dangerBlock(300,215,100,15);
    renderPlatform(200,200,100,15);
    dangerBlock(0,115,50,100);
    dangerBlock(100,200,100,15);
    renderPlatform(0,285,100,15);
    invisibleBlock(100,215,100,30);
    dangerBlock(100,300,100,15);
    renderPlatform(200,285,100,15);
    renderPlatform(300,300,200,15);
    dangerBlock(500,315,120,15);
    renderPlatform(620,315,205,15);
    renderPlatform(0,330,825,15);
    dangerBlock(0,410,canvas.width,300);
    renderPlatform(0,395,30,300);
    renderPlatform(100,395,30,300);
    renderPlatform(200,395,30,300);
    renderPlatform(300,395,30,300);
    renderPlatform(400,395,30,300);
    renderPlatform(500,395,30,300);
    renderPlatform(600,395,30,300);
    renderPlatform(700,395,30,300);
    renderPlatform(800,395,200,300);
   function nextLevel(x,y,w,h) {
        canvasContext.fillStyle = "lime";
        canvasContext.fillRect(x, y, w, h);
        if (player.y >= y-player.height && player.y <= y && player.x >= x-player.width && player.x <= x+w) {
            level.two = true;
            player.x = 0;
            player.y = 0;
            keys.enter = false;
        }
        if (player.y >= y&& player.y <= y+h && player.x >= x-player.width && player.x <= x+w) {
            level.two = true;
            player.x = 0;
            player.y = 0;
            keys.enter = false;
        }
        if (player.y >= y+h-10 && player.y < y+h && player.x >= x-player.width && player.x <= x+w) {
            level.two = true;
            player.x = 0;
            player.y = 0;
            keys.enter = false;
        }

    }
    nextLevel(0,375,20,20);
    playerJump(10);
    restrict();
    respawn();
    }
};

function level3() {
    blackScreen();
    canvasContext.fillStyle = "White";
    canvasContext.font = "30px Arial";
    canvasContext.fillText("Wow, you're good!",340,290);
    canvasContext.font = "15px Arial";
    canvasContext.fillText("press enter to play next game",360,320);
    if (keys.enter) {
        if (player.y <= 0) {
            keys.up = false;
        }
    renderScreen();
    teleport(0,120,20,20,324,225);
    teleport(195,120,20,20,324,525);
    teleport(0,270,20,20,324,375);
    teleport(195,270,20,20,99,525);
    teleport(0,420,20,20,774,75);
    teleport(195,420,20,20,774,75);
    teleport(0,560,20,20,99,525);
    teleport(195,560,20,20,549,75);
    teleport(235,120,20,20,99,75);
    teleport(420,120,20,20,99,225);
    teleport(235,270,20,20,549,375);
    teleport(420,270,20,20,99,375);
    teleport(235,420,20,20,324,225);
    teleport(420,420,20,20,549,225);
    teleport(235,560,20,20,774,225);
    teleport(420,560,20,20,549,225);
    teleport(460,120,20,20,99,75);
    teleport(645,120,20,20,324,75);
    teleport(460,270,20,20,549,525);
    teleport(645,270,20,20,774,375);
    teleport(460,420,20,20,774,225);
    teleport(645,420,20,20,324,375);
    teleport(460,560,20,20,549,75);
    teleport(645,560,20,20,549,525);
    teleport(685,120,20,20,324,75);
    teleport(880,120,20,20,324,525);
    teleport(685,270,20,20,549,375);
    teleport(880,270,20,20,99,375);
    teleport(685,420,20,20,99,225);
    teleport(880,420,20,20,774,525);
    renderPlayer();
    renderPlatform(440,0,20,canvas.height);
    renderPlatform(215,0,20,canvas.height);
    renderPlatform(665,0,20,canvas.height);
    renderPlatform(0,580,canvas.width,20);
    renderPlatform(0,290,canvas.width,20);
    renderPlatform(0,140,canvas.width,20);
    renderPlatform(0,440,canvas.width,20);
    nextLevel(880,560,20,20);
    playerJump(10);
    restrict();
    }
    function nextLevel(x,y,w,h) {
        canvasContext.fillStyle = "lime";
        canvasContext.fillRect(x, y, w, h);
        if (player.y >= y-player.height && player.y <= y && player.x >= x-player.width && player.x <= x+w) {
            level.three = true;
            player.x = 0;
            player.y = 0;
            keys.enter = false;
        }
        if (player.y >= y&& player.y <= y+h && player.x >= x-player.width && player.x <= x+w) {
            level.three = true;
            player.x = 0;
            player.y = 0;
            keys.enter = false;
        }
        if (player.y >= y+h-10 && player.y < y+h && player.x >= x-player.width && player.x <= x+w) {
            level.three = true;
            player.x = 0;
            player.y = 0;
            keys.enter = false;
        }
    }
};

function level4() {
    blackScreen();
    canvasContext.fillStyle = "White";
    canvasContext.font = "30px Arial";
    canvasContext.fillText("This one will be hard",315,290);
    canvasContext.font = "15px Arial";
    canvasContext.fillText("press enter to play a game",360,320);
    if (keys.enter) {
        if (player.y <= 0) {
            keys.up = false;
        }
    renderScreen();
    renderPlayer();
    renderPlatform(0,-20,canvas.width,20);
    renderPlatform(440,0,60,canvas.height);
    renderPlatform(210,0,60,canvas.height);
    renderPlatform(500,140,canvas.width,20);
    renderPlatform(0,580,canvas.width,20);
    dangerBlock(0,150,185,15);
    renderPlatform(90,190,120,15);
    dangerBlock(20,260,70,15);
    dangerBlock(90,360,120,15);
    renderPlatform(20,460,20,15);
    teleportCheck(0,475,210,105,500,160,500,90,860,90);
    renderPlatform(0,60,20,canvas.height);
    renderPlatform(500,110,10,15);
    renderPlatform(870,110,10,15);
    renderPlatform(500,180,10,15);
    renderPlatform(880,0,20,canvas.height);
    dangerBlock(500,125,380,15);
    dangerBlock(500,195,70,15);
    dangerBlock(570,250,310,15);
    invisibleBlock(500,320,75,15);
    invisibleBlock(575,265,100,15);
    invisibleBlock(675,320,100,15);
    invisibleBlock(775,320,80,15)
    dangerBlock(575,335,100,15);
    dangerBlock(775,335,80,15);
    trampoline(775,415,105,15);
    invisibleBlock(600,415,100,15);
    dangerBlock(550,420,225,10);
    renderPlatform(550,430,400,30);
    invisibleBlock(550,450,400,30);
    dangerBlock(500,550,380,30);
    invisibleBlock(550,535,100,15);
    invisibleBlock(650,535,50,15);
    invisibleBlock(800,535,100,15);
    teleport(860,515,20,20,350,570);
    renderPlatform(270,530,100,15);
    renderPlatform(270,480,100,15);
    renderPlatform(270,430,100,15);
    renderPlatform(270,380,100,15);
    renderPlatform(270,330,100,15);
    renderPlatform(270,280,100,15);
    renderPlatform(270,230,100,15);
    renderPlatform(270,180,100,15);
    renderPlatform(270,130,100,15);
    renderPlatform(270,80,100,15);
    renderPlatform(270,30,100,15);
    nextLevel(270,10,20,20);
    }
    function nextLevel(x,y,w,h) {
        canvasContext.fillStyle = "lime";
        canvasContext.fillRect(x, y, w, h);
        if (player.y >= y-player.height && player.y <= y && player.x >= x-player.width && player.x <= x+w) {
            level.four = true;
            player.x = 0;
            player.y = 0;
            keys.enter = false;
        }
        if (player.y >= y&& player.y <= y+h && player.x >= x-player.width && player.x <= x+w) {
            level.four = true;
            player.x = 0;
            player.y = 0;
            keys.enter = false;
        }
        if (player.y >= y+h-10 && player.y < y+h && player.x >= x-player.width && player.x <= x+w) {
            level.four = true;
            player.x = 0;
            player.y = 0;
            keys.enter = false;
        }

    }
    playerJump();
    restrict();

};

function level5() {
    blackScreen();
    canvasContext.fillStyle = "White";
    canvasContext.font = "30px Arial";
    canvasContext.fillText("Very well then, How will you fare against me?",140,290);
    canvasContext.font = "15px Arial";
    canvasContext.fillText("press enter to play a game",360,320);
    if (keys.enter) {
        if (player.y <= 0) {
            keys.up = false;
        }
    renderScreen();
    finalPlayer(10,0,10,200,5);
    finalAI();
    ball();
    score();
    nextLevel();
    function nextLevel() {
        if (points.player == "You Win") {
            level.five = true;
            player.x = 0;
            player.y = 0;
            keys.enter = false;
        }

    }
    }
};

function end() {
    blackScreen();
    canvasContext.fillStyle = "white";
    canvasContext.font = "30px Arial";
    canvasContext.fillText("Well Done, You Win",320,290);
    canvasContext.fillText("-By Hrishabh Mittal",320,320);
}