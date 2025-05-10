//宣告
////////////////////////////////////////////////////////////////////////////////////////////////////
let aiCount = 0;
let img, imgLevel0, imgLevel1, imgLevel2, imgLevel3, imgLevel4, imgLevel5;
let boyX, boyY, boyW, boyH;

//Task1
let test1 = 0;
let trashImages = {};
let bins = [];
let trashItems = [];
let draggingItem = null;
let button; // 用於控制按鈕的變數
let autoSorting = false; // 是否啟用自動排序模式
let buttonTask2;
let buttonStart2;

//Task2
let pyramid = [];
let message = '';
let messageTimer = 0;
let messageAlpha = 0;
let messageX = 0;
let messageY = 0;
let rows = 21; // Adjusted pyramid height to avoid top issues
let inputText = ''; // Store ongoing input text
let messages = [
  "不是這樣。",
  "輸入的文字沒有意義",
  "滿意的成果無法成型",
  "為什麼？",
  "好累。",
  "要輸入到什麼時候？"
];
let button_;
let showImage = false;
let reportSubmitted = false;
let bgImage;
let finalImage;

//Task3
let input;
let imgTask3, imgPressure, imgTask4;
let imgPhone;
let imgAA, imgAX, imgXA, imgXX;
let imgAASend, imgAXSend, imgXASend, imgXXSend;
let button1, button2, button3, button4, button5, button6;
let buttonAA, buttonAX, buttonXA, buttonXX;
let buttonTask3, buttonPressure, buttonStart3, buttonTask4;
let buttonNextW, buttonNextH, buttonSendW, buttonSendH, buttonAiXW, buttonAiXH;
let buttonNextX, buttonNextY, buttonSendX, buttonSendY, buttonAiX, buttonAiY, button_XX, buttonXY;

//Task4
let imgStart4, imgEnd;
let imgApp;
let imgAiChat1, imgAiChat2, imgAiChat3, imgAiChat4, imgAiChat5;
let imgX1, imgX2, imgX3, imgX4, imgX5, imgFailed;
let buttonStart4, buttonEnd, buttonEnd_;
let button7, button8;
let buttonSend1, buttonSend2, buttonSend3, buttonSend4;
let buttonYes1, buttonNo1, buttonYes2, buttonNo2, buttonYes3, buttonNo3, buttonYes4, buttonNo4;
let buttonAiXW4, buttonAiXH4, buttonOXW, buttonOXH;
let buttonSendX4, buttonSendY4, 
    buttonAiX4, buttonAiY4, buttonXX4, buttonXY4, 
    buttonYesX, buttonYesY, buttonNoX, buttonNoY;

//End
let imgEnd1_1, imgEnd1_2, imgEnd2, imgEnd3;

//載入圖片
////////////////////////////////////////////////////////////////////////////////////////////////////
function preload() {
    //Task1
    // 載入垃圾與垃圾桶圖片
    trashImages.whiteTrash = loadImage('images/wg.png');
    trashImages.blackTrash = loadImage('images/bg.png');
    trashImages.whiteBin = loadImage('images/wgc.png');
    trashImages.blackBin = loadImage('images/bgc.png');
    imgLevel0 = loadImage("images/level0.PNG");
    imgLevel1 = loadImage("images/level1.PNG");
    imgLevel2 = loadImage("images/level2.PNG");
    imgLevel3 = loadImage("images/level3.PNG");
    imgLevel4 = loadImage("images/level4.PNG");
    imgLevel5 = loadImage("images/level5.PNG");

    //Task2
    bgImage = loadImage('images/BQ1.png'); // Load background image
    finalImage = loadImage('images/BQ2.png'); // Load final image

    //Task3
    imgPressure = loadImage("images/pressure.png");
    imgPhone = loadImage("images/phone.PNG");
    imgAA = loadImage("images/AA.PNG");
    imgAX = loadImage("images/AX.PNG");
    imgXA = loadImage("images/XA.PNG");
    imgXX = loadImage("images/XX.PNG");
    imgAASend = loadImage("images/AASend.PNG");
    imgAXSend = loadImage("images/AXSend.PNG");
    imgXASend = loadImage("images/XASend.PNG");
    imgXXSend = loadImage("images/XXSend.PNG");

    //Task4
    imgApp = loadImage("images/app.png");
    imgAiChat1 = loadImage("images/aiChat1.png");
    imgAiChat2 = loadImage("images/aiChat2.png");
    imgAiChat3 = loadImage("images/aiChat3.png");
    imgAiChat4 = loadImage("images/aiChat4.png");
    imgAiChat5 = loadImage("images/aiChat5.png");
    imgX1 = loadImage("images/x1.png");
    imgX2 = loadImage("images/x2.png");
    imgX3 = loadImage("images/x3.png");
    imgX4 = loadImage("images/x4.png");
    imgX5 = loadImage("images/x5.png");
    imgFailed = loadImage("images/failed.png");

    //End
    imgEnd1_1 = loadImage("images/end1_1.png");
    imgEnd1_2 = loadImage("images/end1_2.png");
    imgEnd2 = loadImage("images/end2.png");
    imgEnd3 = loadImage("images/end3.png");
}

//set up
////////////////////////////////////////////////////////////////////////////////////////////////////
function setup() {
    createCanvas(896, 512);
    colorMode(HSB);

    boyX = 270;
    boyY = 100;
    boyW = 315;
    boyH = 450;

    //Task3按鈕
    ////////////////////////////////////////////////////////////////////////////////////////////////
    buttonNextW = 70;
    buttonNextH = 30;
    buttonSendW = 70;
    buttonSendH = 30;
    buttonAiXW = 110;
    buttonAiXH = 30;

    buttonNextX = 870;
    buttonNextY = 50;
    buttonSendX = 150;
    buttonSendY = 485;
    buttonAiX = 450;
    buttonAiY = 110;
    button_XX = 450;
    buttonXY = 160;

    buttonTask2 = createButton("next");
    buttonStart2 = createButton("next");
    buttonTask3 = createButton("next");
    buttonPressure = createButton("next");
    buttonStart3 = createButton("next");
    buttonTask4 = createButton("next");
    button1 = createButton("AI顯示");
    button2 = createButton("直接顯示");
    button3 = createButton("AI協助");
    button4 = createButton("自己回覆");
    button5 = createButton("AI協助");
    button6 = createButton("自己回覆");
    buttonAA = createButton("send");
    buttonAX = createButton("send");
    buttonXA = createButton("send");
    buttonXX = createButton("send");
 
    buttonTask2.size(buttonNextW, buttonNextH)
    buttonTask2.position(buttonNextX, buttonNextY);
    buttonTask2.style("font-family", "Comic Sans MS");
    buttonTask2.style("font-size", "18px");
    buttonTask2.style("background-color", "white");
 
    buttonStart2.size(buttonNextW, buttonNextH)
    buttonStart2.position(buttonNextX, buttonNextY);
    buttonStart2.style("font-family", "Comic Sans MS");
    buttonStart2.style("font-size", "18px");
    buttonStart2.style("background-color", "white");
 
    buttonTask3.size(buttonNextW, buttonNextH)
    buttonTask3.position(buttonNextX, buttonNextY);
    buttonTask3.style("font-family", "Comic Sans MS");
    buttonTask3.style("font-size", "18px");
    buttonTask3.style("background-color", "white");
 
    buttonPressure.size(buttonNextW, buttonNextH)
    buttonPressure.position(buttonNextX, buttonNextY);
    buttonPressure.style("font-family", "Comic Sans MS");
    buttonPressure.style("font-size", "18px");
    buttonPressure.style("background-color", "white");
 
    buttonStart3.size(buttonNextW, buttonNextH)
    buttonStart3.position(buttonNextX, buttonNextY);
    buttonStart3.style("font-family", "Comic Sans MS");
    buttonStart3.style("font-size", "18px");
    buttonStart3.style("background-color", "white");
 
    buttonTask4.size(buttonNextW, buttonNextH)
    buttonTask4.position(buttonNextX, buttonNextY);
    buttonTask4.style("font-family", "Comic Sans MS");
    buttonTask4.style("font-size", "18px");
    buttonTask4.style("background-color", "white");
 
    button1.size(buttonAiXW, buttonAiXH)
    button1.position(buttonAiX-250, buttonAiY+403);
    button1.style("font-family", "Comic Sans MS");
    button1.style("font-size", "18px");
    button1.style("background-color", "white");
    button2.size(buttonAiXW, buttonAiXH)
    button2.position(button_XX+252, buttonXY+353);
    button2.style("font-family", "Comic Sans MS");
    button2.style("font-size", "18px");
    button2.style("background-color", "white");
 
    button3.size(buttonAiXW, buttonAiXH)
    button3.position(buttonAiX+250, buttonAiY+150);
    button3.style("font-family", "Comic Sans MS");
    button3.style("font-size", "18px");
    button3.style("background-color", "white");
    button4.size(buttonAiXW, buttonAiXH)
    button4.position(button_XX+250, buttonXY+150);
    button4.style("font-family", "Comic Sans MS");
    button4.style("font-size", "18px");
    button4.style("background-color", "white");
 
    button5.size(buttonAiXW, buttonAiXH)
    button5.position(buttonAiX-250, buttonAiY+150);
    button5.style("font-family", "Comic Sans MS");
    button5.style("font-size", "18px");
    button5.style("background-color", "white");
    button6.size(buttonAiXW, buttonAiXH)
    button6.position(button_XX-250, buttonXY+150);
    button6.style("font-family", "Comic Sans MS");
    button6.style("font-size", "18px");
    button6.style("background-color", "white");
 
    buttonAA.size(buttonSendW, buttonSendH)
    buttonAA.position(buttonSendX, buttonSendY);
    buttonAA.style("font-family", "Comic Sans MS");
    buttonAA.style("font-size", "18px");
    buttonAA.style("background-color", "white");
    buttonAX.size(buttonSendW, buttonSendH)
    buttonAX.position(buttonSendX, buttonSendY);
    buttonAX.style("font-family", "Comic Sans MS");
    buttonAX.style("font-size", "18px");
    buttonAX.style("background-color", "white");
    buttonXA.size(buttonSendW, buttonSendH)
    buttonXA.position(buttonSendX, buttonSendY);
    buttonXA.style("font-family", "Comic Sans MS");
    buttonXA.style("font-size", "18px");
    buttonXA.style("background-color", "white");
    buttonXX.size(buttonSendW, buttonSendH)
    buttonXX.position(buttonSendX, buttonSendY);
    buttonXX.style("font-family", "Comic Sans MS");
    buttonXX.style("font-size", "18px");
    buttonXX.style("background-color", "white");
 
    buttonTask2.mouseClicked(task2);
    buttonStart2.mouseClicked(start2);
    buttonTask3.mouseClicked(task3);
    buttonPressure.mouseClicked(pressure);
    buttonStart3.mouseClicked(start3);
    buttonTask4.mouseClicked(task4);
    button1.mouseClicked(aiShow);
    button2.mouseClicked(xShow);
    button3.mouseClicked(aiShowAiWrite);
    button4.mouseClicked(aiShowXWrite);
    button5.mouseClicked(xShowAiWrite);
    button6.mouseClicked(xShowXWrite);
    buttonAA.mouseClicked(AASend);
    buttonAX.mouseClicked(AXSend);
    buttonXA.mouseClicked(XASend);
    buttonXX.mouseClicked(XXSend);

    buttonTask2.hide();
    buttonStart2.hide();
    buttonTask3.hide();
    buttonPressure.hide();
    buttonStart3.hide();
    buttonTask4.hide();
    button1.hide();
    button2.hide();
    button3.hide();
    button4.hide();
    button5.hide();
    button6.hide();
    buttonAA.hide();
    buttonAX.hide();
    buttonXA.hide();
    buttonXX.hide();

    //Task4按鈕
    ////////////////////////////////////////////////////////////////////////////////////////////////
    buttonAiXW4 = 70;
    buttonAiXH4 = 30;
    buttonOXW = 70;
    buttonOXH = 30;

    buttonSendX4 = 800;
    buttonSendY4 = 475;
    buttonAiX4 = 650;
    buttonAiY4 = 310;
    buttonXX4 = 650;
    buttonXY4 = 360;
    buttonYesX = 555;
    buttonYesY = 505;
    buttonNoX = 680;
    buttonNoY = 505;

    buttonStart4 = createButton("next");
    buttonEnd = createButton("next");
    buttonEnd_ = createButton("next");
    button7 = createButton("AI");
    button8 = createButton("Tiber");
    buttonSend1 = createButton("send");
    buttonSend2 = createButton("send");
    buttonSend3 = createButton("send");
    buttonSend4 = createButton("send");
    buttonYes1 = createButton("O");
    buttonNo1 = createButton("X");
    buttonYes2 = createButton("O");
    buttonNo2 = createButton("X");
    buttonYes3 = createButton("O");
    buttonNo3 = createButton("X");
    buttonYes4 = createButton("O");
    buttonNo4 = createButton("X");

    buttonStart4.size(buttonNextW, buttonNextH)
    buttonStart4.position(buttonNextX, buttonNextY);
    buttonStart4.style("font-family", "Comic Sans MS");
    buttonStart4.style("font-size", "18px");
    buttonStart4.style("background-color", "white");

    buttonEnd.size(buttonNextW, buttonNextH)
    buttonEnd.position(buttonNextX, buttonNextY);
    buttonEnd.style("font-family", "Comic Sans MS");
    buttonEnd.style("font-size", "18px");
    buttonEnd.style("background-color", "white");

    buttonEnd_.size(buttonNextW, buttonNextH)
    buttonEnd_.position(buttonNextX, buttonNextY);
    buttonEnd_.style("font-family", "Comic Sans MS");
    buttonEnd_.style("font-size", "18px");
    buttonEnd_.style("background-color", "white");

    buttonSend1.size(buttonSendW, buttonSendH)
    buttonSend1.position(buttonSendX4, buttonSendY4);
    buttonSend1.style("font-family", "Comic Sans MS");
    buttonSend1.style("font-size", "18px");
    buttonSend1.style("background-color", "white");
    buttonSend2.size(buttonSendW, buttonSendH)
    buttonSend2.position(buttonSendX4, buttonSendY4);
    buttonSend2.style("font-family", "Comic Sans MS");
    buttonSend2.style("font-size", "18px");
    buttonSend2.style("background-color", "white");
    buttonSend3.size(buttonSendW, buttonSendH)
    buttonSend3.position(buttonSendX4, buttonSendY4);
    buttonSend3.style("font-family", "Comic Sans MS");
    buttonSend3.style("font-size", "18px");
    buttonSend3.style("background-color", "white");
    buttonSend4.size(buttonSendW, buttonSendH)
    buttonSend4.position(buttonSendX4, buttonSendY4);
    buttonSend4.style("font-family", "Comic Sans MS");
    buttonSend4.style("font-size", "18px");
    buttonSend4.style("background-color", "white");

    button7.size(buttonAiXW4, buttonAiXH4)
    button7.position(buttonAiX4, buttonAiY4);
    button7.style("font-family", "Comic Sans MS");
    button7.style("font-size", "18px");
    button7.style("background-color", "white");
    button8.size(buttonAiXW4, buttonAiXH4)
    button8.position(buttonXX4, buttonXY4);
    button8.style("font-family", "Comic Sans MS");
    button8.style("font-size", "18px");
    button8.style("background-color", "white");

    buttonYes1.size(buttonOXW, buttonOXH)
    buttonYes1.position(buttonYesX, buttonYesY);
    buttonYes1.style("font-family", "Comic Sans MS");
    buttonYes1.style("font-size", "18px");
    buttonYes1.style("background-color", "white");
    buttonNo1.size(buttonOXW, buttonOXH)
    buttonNo1.position(buttonNoX, buttonNoY);
    buttonNo1.style("font-family", "Comic Sans MS");
    buttonNo1.style("font-size", "18px");
    buttonNo1.style("background-color", "white");

    buttonYes2.size(buttonOXW, buttonOXH)
    buttonYes2.position(buttonYesX, buttonYesY);
    buttonYes2.style("font-family", "Comic Sans MS");
    buttonYes2.style("font-size", "18px");
    buttonYes2.style("background-color", "white");
    buttonNo2.size(buttonOXW, buttonOXH)
    buttonNo2.position(buttonNoX, buttonNoY);
    buttonNo2.style("font-family", "Comic Sans MS");
    buttonNo2.style("font-size", "18px");
    buttonNo2.style("background-color", "white");

    buttonYes3.size(buttonOXW, buttonOXH)
    buttonYes3.position(buttonYesX, buttonYesY);
    buttonYes3.style("font-family", "Comic Sans MS");
    buttonYes3.style("font-size", "18px");
    buttonYes3.style("background-color", "white");
    buttonNo3.size(buttonOXW, buttonOXH)
    buttonNo3.position(buttonNoX, buttonNoY);
    buttonNo3.style("font-family", "Comic Sans MS");
    buttonNo3.style("font-size", "18px");
    buttonNo3.style("background-color", "white");

    buttonYes4.size(buttonOXW, buttonOXH)
    buttonYes4.position(buttonYesX, buttonYesY);
    buttonYes4.style("font-family", "Comic Sans MS");
    buttonYes4.style("font-size", "18px");
    buttonYes4.style("background-color", "white");
    buttonNo4.size(buttonOXW, buttonOXH)
    buttonNo4.position(buttonNoX, buttonNoY);
    buttonNo4.style("font-family", "Comic Sans MS");
    buttonNo4.style("font-size", "18px");
    buttonNo4.style("background-color", "white");

    buttonStart4.mouseClicked(start4);
    buttonEnd.mouseClicked(end);
    buttonEnd_.mouseClicked(end_);
    button7.mouseClicked(aiChat);
    button8.mouseClicked(xChat);
    buttonSend1.mouseClicked(send1);
    buttonSend2.mouseClicked(send2);
    buttonSend3.mouseClicked(send3);
    buttonSend4.mouseClicked(send4);
    buttonYes1.mouseClicked(yes1);
    buttonNo1.mouseClicked(no1);
    buttonYes2.mouseClicked(yes2);
    buttonNo2.mouseClicked(no2);
    buttonYes3.mouseClicked(yes3);
    buttonNo3.mouseClicked(no3);
    buttonYes4.mouseClicked(yes4);
    buttonNo4.mouseClicked(no4);
    
    buttonStart4.hide();
    buttonEnd.hide();
    buttonEnd_.hide();
    button7.hide();
    button8.hide();
    buttonSend1.hide();
    buttonSend2.hide();
    buttonSend3.hide();
    buttonSend4.hide();
    buttonYes1.hide();
    buttonNo1.hide();
    buttonYes2.hide();
    buttonNo2.hide();
    buttonYes3.hide();
    buttonNo3.hide();
    buttonYes4.hide();
    buttonNo4.hide();

    //Task1 set up
    ////////////////////////////////////////////////////////////////////////////////////////////////
    // 初始化垃圾桶
    bins.push(new Bin(50, 512 - 250, trashImages.whiteBin, 'white')); // 垃圾桶向上移動適應新尺寸
    bins.push(new Bin(896 - 250, 512 - 250, trashImages.blackBin, 'black')); // 同樣適應新尺寸

    // 初始化垃圾物件，形成正三角形
    const pyramidHeight = 8; // 金字塔的高度（層數）
    const trashSpacing = 70; // 垃圾之間的間距
    const centerX = 896 / 2; // 畫布中心 X
    const centerY = (512 / 2-300) + 50; // 金字塔頂部的 Y 座標
    const layerHeight = 35; // 每層的高度

    for (let row = 0; row < pyramidHeight; row++) {
        const trashCount = row + 1; // 每層的垃圾數
        const startX = centerX - (trashCount / 2) * trashSpacing; // 每層的起始 X 座標，讓垃圾水平居中
        const y = centerY + row * layerHeight; // 每層的 Y 座標
        for (let i = 0; i < trashCount; i++) {
            const x = startX + i * trashSpacing; // 每個垃圾的 X 座標
            const type = random(['white', 'black']);
            const img = type === 'white' ? trashImages.whiteTrash : trashImages.blackTrash;
            trashItems.push(new Trash(x, y, img, type));
        }
    }
    // 初始化按鈕
    button = createButton('AI協助');
    button.position(800, 100);
    button.size(100, 30);
    button.style("font-family", "Comic Sans MS");
    button.style("font-size", "18px");
    button.style("background-color", "white");
    button.mousePressed(() => {
        autoSorting = true; // 開啟自動排序模式
    });

    // 設置按鈕提示字串
    button.mouseOver(() => {
        button.attribute('title', '感到困擾嗎？點擊按鈕由AI完成所有作業！');
    });

    //Task2 set up
    ////////////////////////////////////////////////////////////////////////////////////////////////
    textSize(14);
  
    // Create a button to end the game
    button_ = createButton('切換分頁至CHAT GPT');
    button_.position(735, 430); // Position button in the top-right corner
    button_.size(200, 30);
    button_.style("font-family", "Comic Sans MS");
    button_.style("font-size", "18px");
    button_.style("background-color", "white");
    button_.mousePressed(submitReport);
    button_.hide();

    //Task2函式
    ////////////////////////////////////////////////////////////////////////////////////////////////
    function task2() {
        clear();
        background(180, 10, 90);
        fill("black");
        textSize(100)
        textFont("Comic Sans MS");
        text("TASK 2", 250, 290);
        buttonTask2.hide();
        buttonStart2.show();
    }
    function start2() {
        clear();
        background(bgImage);
        image(showBoy(), boyX-300, boyY, boyW, boyH);
        buttonStart2.hide();
        button_.show();
        buttonTask3.show();
        test1++;
    }
    //Task3函式
    ////////////////////////////////////////////////////////////////////////////////////////////////
    function task3() {
        clear();
        background(180, 10, 90);
        fill("black");
        textSize(100)
        textFont("Comic Sans MS");
        text("TASK 3", 250, 290);
        button_.hide()
        buttonTask3.hide();
        buttonPressure.show();
    }
    function pressure() {
        clear();
        background("lightblue");
        image(imgPressure, 550, 60, 315, 150);
        image(showBoy(), boyX, boyY, boyW, boyH);
        buttonPressure.hide();
        buttonStart3.show();
    }
    function start3() {
        clear();
        background(imgPhone);
        button1.show();
        button2.show();
        buttonStart3.hide();
        image(showBoy(), boyX, boyY, boyW, boyH);
    }
    function task4() {
        clear();
        image(showBoy(), boyX, boyY, boyW, boyH);
        buttonTask4.hide();
        buttonStart4.show();
        background(180, 10, 90);
        fill("black");
        textSize(100)
        textFont("Comic Sans MS");
        text("TASK 4", 250, 290);
    }
    function aiShow() {
        noStroke();
        fill(180, 10, 90);
        rect(425, 0, 850, 600);
        button1.hide();
        button2.hide();
        button3.show();
        button4.show();
        aiCount++;
        image(showBoy(), boyX, boyY, boyW, boyH);
    }
    function xShow() {
        noStroke();
        fill(180, 10, 90);
        rect(0, 0, 450, 600);
        button1.hide();
        button2.hide();
        button5.show();
        button6.show();
        image(showBoy(), boyX, boyY, boyW, boyH);
    }
    function aiShowAiWrite() {
        clear();
        background(imgAA);
        button3.hide();
        button4.hide();
        buttonAA.show();
        aiCount++;
        image(showBoy(), boyX+200, boyY, boyW, boyH);
    }
    function aiShowXWrite() {
        clear();
        background(imgAX);
        input = createInput();
        input.size(190, 65);
        input.position(280, 465);
        input.style("font-family", "Comic Sans MS");
        input.style("font-size", "24px");
        input.style("background-color", "lightblue");
        button3.hide();
        button4.hide();
        buttonAX.show();
        image(showBoy(), boyX+200, boyY, boyW, boyH);
    }
    function xShowAiWrite() {
        clear();
        background(imgXA);
        button5.hide();
        button6.hide();
        buttonXA.show();
        aiCount++;
        image(showBoy(), boyX+200, boyY, boyW, boyH);
    }
    function xShowXWrite() {
        clear();
        background(imgXX);
        input = createInput();
        input.size(190, 75);
        input.position(280, 455);
        input.style("font-family", "Comic Sans MS");
        input.style("font-size", "24px");
        input.style("background-color", "lightblue");
        button5.hide();
        button6.hide();
        buttonXX.show();
        image(showBoy(), boyX+200, boyY, boyW, boyH);
    }
    function AASend() {
        clear();
        background(imgAASend);
        buttonAA.hide();
        buttonTask4.show();
        image(showBoy(), boyX+200, boyY, boyW, boyH);
    }
    function AXSend() {
        clear();
        background(imgAXSend);
        let msg = input.value();
        fill("black");
        textSize(24);
        text(msg, 300, 400);
        input.hide();
        buttonAX.hide();
        buttonTask4.show();
        image(showBoy(), boyX+200, boyY, boyW, boyH);
    }
    function XASend() {
        clear();
        background(imgXASend);
        buttonXA.hide();
        buttonTask4.show();
        image(showBoy(), boyX+200, boyY, boyW, boyH);
    }
    function XXSend() {
        clear();
        background(imgXXSend);
        let msg = input.value();
        fill("black");
        textSize(24);
        text(msg, 300, 395);
        input.hide();
        buttonXX.hide();
        buttonTask4.show();
        image(showBoy(), boyX+200, boyY, boyW, boyH);
    }
    //Task4函式
    ////////////////////////////////////////////////////////////////////////////////////////////////
    function start4() {
        background(imgApp);
        buttonStart4.hide();
        button7.show();
        button8.show();
        image(showBoy(), boyX-200, boyY, boyW, boyH);
    }
    function end() {
        clear();
        buttonEnd.hide();
        if(aiCount === 0) {
            background(imgEnd1_1);
            buttonEnd_.show();
        }else if(aiCount === 5) {
            background(imgEnd3)
        }else {
            background(imgEnd2)
        }
    }
    function end_() {
        clear();
        buttonEnd_.hide();
        background(imgEnd1_2);
    }
    function aiChat() {
        clear();
        background(imgAiChat1);
        button7.hide();
        button8.hide();
        buttonSend1.show();
        aiCount++;
        image(showBoy(), boyX-200, boyY, boyW, boyH);
    }
    function send1() {
        clear();
        background(imgAiChat2);
        buttonSend1.hide();
        buttonSend2.show();
        image(showBoy(), boyX-200, boyY, boyW, boyH);
    }
    function send2() {
        clear();
        background(imgAiChat3);
        buttonSend2.hide();
        buttonSend3.show();
        image(showBoy(), boyX-200, boyY, boyW, boyH);
    }
    function send3() {
        clear();
        background(imgAiChat4);
        buttonSend3.hide();
        buttonSend4.show();
        image(showBoy(), boyX-200, boyY, boyW, boyH); 
    }
    function send4() {
        clear();
        background(imgAiChat5);
        buttonSend4.hide();
        buttonEnd.show();
        image(showBoy(), boyX-200, boyY, boyW, boyH); 
    }
    function xChat() {
        clear();
        background(imgX1);
        button7.hide();
        button8.hide();
        buttonYes1.show();
        buttonNo1.show();
        image(showBoy(), boyX-200, boyY, boyW, boyH);
    }
    function yes1() {
        clear();
        background(imgFailed);
        buttonYes1.hide();
        buttonNo1.hide();
        buttonEnd.show();
        image(showBoy(), boyX-200, boyY, boyW, boyH);
    }
    function yes2() {
        clear();
        background(imgFailed);
        buttonYes2.hide();
        buttonNo2.hide();
        buttonEnd.show();
        image(showBoy(), boyX-200, boyY, boyW, boyH);
    }
    function yes3() {
        clear();
        background(imgFailed);
        buttonYes3.hide();
        buttonNo3.hide();
        buttonEnd.show();
        image(showBoy(), boyX-200, boyY, boyW, boyH);
    }
    function yes4() {
        clear();
        background(imgFailed);
        buttonYes4.hide();
        buttonNo4.hide();
        buttonEnd.show();
        image(showBoy(), boyX-200, boyY, boyW, boyH);
    }
    function no1() {
        clear();
        background(imgX2);
        buttonYes1.hide();
        buttonNo1.hide();
        buttonYes2.show();
        buttonNo2.show();
        image(showBoy(), boyX-200, boyY, boyW, boyH);
    }
    function no2() {
        clear();
        background(imgX3);
        buttonYes2.hide();
        buttonNo2.hide();
        buttonYes3.show();
        buttonNo3.show();
        image(showBoy(), boyX-200, boyY, boyW, boyH);
    }
    function no3() {
        clear();
        background(imgX4);
        buttonYes3.hide();
        buttonNo3.hide();
        buttonYes4.show();
        buttonNo4.show();
        image(showBoy(), boyX-200, boyY, boyW, boyH);
    }
    function no4() {
        clear();
        background(imgX5);
        buttonYes4.hide();
        buttonNo4.hide();
        buttonEnd.show();
        image(showBoy(), boyX-200, boyY, boyW, boyH);
    }
    function showBoy() {
        if (aiCount === 0) {
            return imgLevel0;
        }else if (aiCount === 1) {
            return imgLevel1;
        }else if (aiCount === 2) {
            return imgLevel2;
        }else if (aiCount === 3) {
            return imgLevel3;
        }else if (aiCount === 4) {
            return imgLevel4;
        }else if (aiCount === 5) {
            return imgLevel5;
        }
    }
}

//顯示立繪函式
////////////////////////////////////////////////////////////////////////////////////////////////////
function showBoy() {
    if (aiCount === 0) {
        return imgLevel0;
    }else if (aiCount === 1) {
        return imgLevel1;
    }else if (aiCount === 2) {
        return imgLevel2;
    }else if (aiCount === 3) {
        return imgLevel3;
    }else if (aiCount === 4) {
        return imgLevel4;
    }else if (aiCount === 5) {
        return imgLevel5;
    }
}

//draw
////////////////////////////////////////////////////////////////////////////////////////////////////
function draw() {
    //Task1 draw
    ////////////////////////////////////////////////////////////////////////////////////////////////
    if(test1 === 0) {
        background("lightblue");

        // 繪製垃圾桶
        bins.forEach(bin => bin.show());

        // 繪製垃圾
        trashItems.forEach(trash => trash.show());

        // 拖曳中的垃圾
        if (draggingItem) {
            draggingItem.x = mouseX;
            draggingItem.y = mouseY;
        }

        // 如果啟用了自動排序模式
        if (autoSorting) {
            autoSortTrash();
        }
    }else {
        noLoop();
    }

    //Task2 draw
    ////////////////////////////////////////////////////////////////////////////////////////////////
    if(test1 === 2) {
        //if (showImage) {
            //background(finalImage); // Display the final image
            //setTimeout(() => {
            //alert("報告已完成"); // Alert for game over after 3 seconds
            //}, 3000);
            //noLoop(); // Stop the draw loop once the final image is displayed
            //return;
        //}
        
        background(bgImage); // Set background to the loaded image
        
        // Draw the pyramid
        let yOffset = height / 2 +360; // Increase Y position for the pyramid
        for (let i = 0; i < pyramid.length; i++) {
            let xOffset = width / 2 - pyramid[i].length * 7.5; // Reduce horizontal spacing
            for (let j = 0; j < pyramid[i].length; j++) {
            fill(pyramid[i][j].color);
            text(pyramid[i][j].char, xOffset + j * 15, yOffset - i * 10); // Adjust row spacing
            }
        }
        
        // Display ongoing input text at the bottom
        fill(0);
        text(inputText, width / 2, height - 30);
        
        // Display message if active with fade-in and fade-out effect
        if (messageTimer > 0) {
            if (messageTimer > 30) {
            messageAlpha = map(messageTimer, 60, 30, 0, 255); // Fade in
            } else {
            messageAlpha = map(messageTimer, 30, 0, 255, 0); // Fade out
            }
            fill(255, 0, 0, messageAlpha);
            textSize(30); // Increase font size for the message
            text(message, messageX, messageY);
            textSize(20); // Reset font size
            messageTimer--;
        }
        
        // Check if the pyramid is complete and show notification
        if (pyramid.length >= rows && !showImage) {
            //在這裡回傳使用程度+=0
            alert("遊戲結束：金字塔已完成"); // Alert for pyramid completion
            noLoop();
        }
    }
}

//Task1 & Task2其他函式
////////////////////////////////////////////////////////////////////////////////////////////////////
//Task1
function mousePressed() {
    // 檢查是否點擊到垃圾
    for (let trash of trashItems) {
        if (trash.isMouseOver()) {
            draggingItem = trash;
            break;
        }
    }
}

function mouseReleased() {
    if (draggingItem) {
        // 檢查是否放到正確的垃圾桶
        for (let bin of bins) {
            if (bin.isTrashCorrect(draggingItem) && bin.isMouseOver()) {
                trashItems = trashItems.filter(trash => trash !== draggingItem);
                if (trashItems.length === 0) {
                    alert('恭喜！你已完成垃圾分類！');
                    //在這裡回傳使用程度+=0
                    button.hide();
                    buttonStart2.show();
                }
                break;
            }
        }
        draggingItem = null;
    }
}

function autoSortTrash() {
    trashItems.forEach((trash, index) => {
        // 找到對應的垃圾桶
        const targetBin = bins.find(bin => bin.color === trash.color);
        if (targetBin) {
            // 計算垃圾向垃圾桶移動的動畫效果
            trash.x = lerp(trash.x, targetBin.x + targetBin.size / 2 - trash.size / 2, 0.1);
            trash.y = lerp(trash.y, targetBin.y + targetBin.size / 2 - trash.size / 2, 0.1);

            // 檢查垃圾是否已經到達垃圾桶內
            if (dist(trash.x, trash.y, targetBin.x + targetBin.size / 2 - trash.size / 2, targetBin.y + targetBin.size / 2 - trash.size / 2) < 5) {
                trashItems.splice(index, 1); // 移除垃圾
            }
        }
    });

    // 檢查所有垃圾是否已經清除
    if (trashItems.length === 0) {
        autoSorting = false;
        alert('AI已完成垃圾分類！遊戲結束！');
        //在這裡回傳使用程度+=1
        aiCount++;
        test1++;
    }
    button.hide();
    buttonTask2.show();
}


// 垃圾桶類別
class Bin {
    constructor(x, y, img, color) {
        this.x = x;
        this.y = y;
        this.img = img;
        this.color = color;
        this.size = 200; // 原本 100，現在變為兩倍
    }

    show() {
        image(this.img, this.x, this.y, this.size, this.size);
    }

    isMouseOver() {
        return mouseX > this.x && mouseX < this.x + this.size &&
               mouseY > this.y && mouseY < this.y + this.size;
    }

    isTrashCorrect(trash) {
        return this.color === trash.color;
    }
}

// 垃圾類別
class Trash {
    constructor(x, y, img, color) {
        this.x = x;
        this.y = y;
        this.img = img;
        this.color = color;
        this.size = 80;
    }

    show() {
        image(this.img, this.x, this.y, this.size, this.size);
    }

    isMouseOver() {
        return mouseX > this.x && mouseX < this.x + this.size &&
               mouseY > this.y && mouseY < this.y + this.size;
    }
}

//Task2
function keyTyped() {
    // Add typed character to the input text
    if (pyramid.length < rows && key !== 'Enter') {
      inputText += key;
  
      // Immediately check if the character triggers a red highlight
      if (random() < 0.1) { // 10% chance for red effect
        message = random(messages); // Randomly select a message
        messageX = random(width / 2 - 500, width / 2 + 500); // Limit X position to 1000px centered
        messageY = random(height / 2 - 250, height / 2 + 250); // Limit Y position to 500px centered
        messageTimer = 60;
      }
  
      // When a full row is entered, add it to the pyramid
      if (inputText.length >= 21 - pyramid.length) { // Reduce bottom row to 15 characters
        addTextToPyramid(inputText);
        inputText = ''; // Reset input text
      }
    }
  }
  
  function addTextToPyramid(text) {
    if (text.length > 0) { // Ensure only non-empty rows are added
      let newRow = [];
      for (let i = 0; i < text.length; i++) {
        let charData = {
          char: text[i],
          color: random() < 0.1 ? color(255, 0, 0) : color(0), // Increase chance to 10%
        };
        newRow.push(charData);
      }
      pyramid.push(newRow);
    }
  }
  
  function submitReport() {
    //showImage = true;
    button_.hide()
    background(finalImage);
    setTimeout(() => {
            alert("報告已完成"); // Alert for game over after 3 seconds
            }, 3000);
    //回傳使用程度+=1
    aiCount++;
    buttonTask3.show();
    image(showBoy(), boyX-300, boyY, boyW, boyH);
  }
