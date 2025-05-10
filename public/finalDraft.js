let customFont;
let aiCount = 0;

// =================== 劇本 ===================
let intro = [
    "「我們輕易地接受了現實，也許因為我們直覺感到什麼都不是真實的。」\n——博爾赫斯《永生》"
];
let storyTexts = ["1111111", "111111"];
let act01Content = ["2111111", "211111"];
let act1_1Content = ["劇情1_1內容", "劇情1_1後續"];
let act1_2Content = ["劇情1_2內容", "劇情1_2後續"];
let act02Content = ["act02Content", "act02Content"];
let act2_1Content = ["劇情2_1內容", "劇情2_1後續"];
let act2_2Content = ["劇情2_2內容", "劇情2_2後續"];
let act03Content = ["act03Content", "act03Content"];
let act3_1Content = ["劇情3_1內容", "劇情3_1後續"];
let act3_2Content = ["劇情3_2內容", "劇情3_2後續"];
let act04Content = ["act04Content", "act04Content"];
let act4_1Content = ["劇情4_1內容", "劇情4_1後續"];
let act4_2Content = ["劇情4_2內容", "劇情4_2後續"];
let endContent = [];
let end1Content = ["重度使用內容", "重度使用後續"];
let end2Content = ["輕度使用內容", "輕度使用後續"];
let end3Content = ["中度使用內容", "中度使用後續"];

// =================== 狀態變數 ===================
let displayingIntro = true;
let displayingStory = false;
let displayingIntro01 = false;
let displayingIntro02 = false;
let displayingIntro03 = false;
let displayingIntro04 = false;
let displayingAct01 = false;
let displayingAct02 = false;
let displayingAct03 = false;
let displayingAct04 = false;
let displayingAct1_1 = false;
let displayingAct1_2 = false;
let displayingAct2_1 = false;
let displayingAct2_2 = false;
let displayingAct3_1 = false;
let displayingAct3_2 = false;
let displayingAct4_1 = false;
let displayingAct4_2 = false;
let displayingTask1 = false;
let displayingTask2 = false;
let displayingTask3 = false;
let displayingTask4 = false;
let displayingEnd = false;

// =================== 文字控制變數 ===================
let currentTextIndex = 0;
let currentString = "";
let charIndex = 0;
let timer = 0;
let textBoxHeight = 180;
let textBoxWidth = 600;
let textPadding = 50;
let clickDisabled = false;

// =================== task1變數 ===================
let bgImage;
let trashImages = {};
let bins = [];
let trashItems = [];
let draggingItem = null;
let buttonTask1;
let autoSorting = false;

// =================== Task2相關變數 ===================
let bgImageTask2;
let finalImageTask2;
let pyramid = [];
let message = '';
let messageTimer = 0;
let messageAlpha = 0;
let messageX = 0;
let messageY = 0;
let rows = 17;
let inputText = '';
let messagesTask2 = [
    "正確的答案不是這樣。",
    "輸入的文字沒有意義",
    "滿意的成果無法成型",
    "為什麼一直失敗？",
    "心好累。",
    "要輸入到什麼時候？"
];
let showImageTask2 = false;
let Task2Submitted = false;
let endTask2Button; // Task2按鈕

// =================== Task3相關變數 (優化命名) ===================
let imgLevel0, imgLevel1, imgLevel2, imgLevel3, imgLevel4, imgLevel5;
let imgPhone, imgPressure;
let imgAA, imgAX, imgXA, imgXX;
let imgAASend, imgAXSend, imgXASend, imgXXSend;

let task3HasStarted = false;

// boy 圖像位置與尺寸
let boyPosX, boyPosY, boyWidth, boyHeight;
let boyPosXmain, boyPosYmain;

// Task3 的按鈕
let btnTask3, btnPressure, btnStart3, btnTask4;
let btnChoice1, btnChoice2, btnChoice3, btnChoice4, btnChoice5, btnChoice6;
let btnAA, btnAX, btnXA, btnXX;

// Task3 按鈕位置大小
let btnNextWidth, btnNextHeight;
let btnSendWidth, btnSendHeight;
let btnAiWidth, btnAiHeight;
let btnNextX, btnNextY;
let btnSendX, btnSendY;
let btnAiX, btnAiY;
let btnPosXX, btnPosXY;

let mainHue;
let inputBox;

//task4
let task4HasStarted = false;

let imgTask4, imgStart4, imgEnd;
let imgApp;
let imgAiChat1, imgAiChat2, imgAiChat3, imgAiChat4, imgAiChat5;
let imgX1, imgX2, imgX3, imgX4, imgX5, imgFailed;


let buttonTask44, buttonStart4, buttonEnd;
let button7, button8;
let buttonSend1, buttonSend2, buttonSend3, buttonSend4;
let buttonYes1, buttonNo1, buttonYes2, buttonNo2, buttonYes3, buttonNo3, buttonYes4, buttonNo4;
let buttonNextW, buttonNextH, buttonSendW, buttonSendH, buttonAiXW4, buttonAiXH4, buttonOXW, buttonOXH;
let buttonNextX, buttonNextY, buttonSendX4, buttonSendY4,
    buttonAiX4, buttonAiY4, buttonXX4, buttonXY4,
    buttonYesX, buttonYesY, buttonNoX, buttonNoY;


function preload() {

    customFont = loadFont('Cubic_11.woff');
    bgImage = loadImage('images/background.png');
    //幕間
    act01 = loadImage('images/Act01.png');
    act02 = loadImage('images/Act02.png');
    act03 = loadImage('images/Act03.png');
    act04 = loadImage('images/Act04.png');
    //使用程度變化的立繪
    imgLevel0 = loadImage("images/level0.PNG");
    imgLevel1 = loadImage("images/level1.PNG");
    imgLevel2 = loadImage("images/level2.PNG");
    imgLevel3 = loadImage("images/level3.PNG");
    imgLevel4 = loadImage("images/level4.PNG");
    imgLevel5 = loadImage("images/level5.PNG");

    //Task1
    trashImages.whiteTrash = loadImage('images/wg.png');
    trashImages.blackTrash = loadImage('images/bg.png');
    trashImages.whiteBin = loadImage('images/wgc.png');
    trashImages.blackBin = loadImage('images/bgc.png');

    //Task2
    bgImageTask2 = loadImage('images/BQ1.png');
    finalImageTask2 = loadImage('images/BQ2.png');

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

    //task4
    boyX = 270;
    boyY = 150;
    boyW = 315;
    boyH = 450;
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



function setup() {
    createCanvas(896, 512);
    textAlign(CENTER, CENTER);
    textSize(24);
    fill(255);

    //人物位置
    boyPosXmain = 600;
    boyPosYmain = 100;
    boyWidthmain = 315;
    boyHeightmain = 450;

    // ---- Task1初始化 ----
    bins.push(new Bin(50, height - 250, trashImages.whiteBin, 'white'));
    bins.push(new Bin(width - 200, height - 250, trashImages.blackBin, 'black'));
    initializeTrashItems();

    buttonTask1 = createButton('AI自動分類');
    buttonTask1.position(width - 150, 100);
    buttonTask1.size(120, 40);
    buttonTask1.style('font-family', 'Cubic-11'); // 設定字型
    buttonTask1.style('font-size', '16px'); // 設定字體大小
    buttonTask1.style('padding', '5px 10px'); // 設定內邊距
    buttonTask1.mousePressed(() => {
        autoSorting = true;
        aiCount++;
    });
    buttonTask1.hide();

    // Task2
    endTask2Button = createButton('切換分頁至CHAT GPT');
    endTask2Button.position(width - 150, 100);
    endTask2Button.style('font-family', 'Cubic-11'); // 設定字型
    endTask2Button.style('font-size', '16px'); // 設定字體大小
    endTask2Button.style('padding', '5px 10px'); // 設定內邊距
    endTask2Button.mousePressed(submitReportTask2);
    endTask2Button.hide();

    //Task3
    colorMode(HSB);
    mainHue = random(0, 360);

    boyPosX = 270;
    boyPosY = 150;
    boyWidth = 315;
    boyHeight = 450;

    btnNextWidth = 70;
    btnNextHeight = 30;
    btnSendWidth = 70;
    btnSendHeight = 30;
    btnAiWidth = 110;
    btnAiHeight = 30;

    btnNextX = 870;
    btnNextY = 500;
    btnSendX = 150;
    btnSendY = 485;
    btnAiX = 450;
    btnAiY = 110;
    btnPosXX = 450;
    btnPosXY = 160;

    // 建立 Task3 的所有按鈕
    btnTask3 = createButton("next");
    btnPressure = createButton("next");
    btnStart3 = createButton("next");
    btnTask4 = createButton("next");

    btnChoice1 = createButton("AI顯示");
    btnChoice2 = createButton("直接顯示");
    btnChoice3 = createButton("AI協助");
    btnChoice4 = createButton("自己回覆");
    btnChoice5 = createButton("AI協助");
    btnChoice6 = createButton("自己回覆");

    btnAA = createButton("send");
    btnAX = createButton("send");
    btnXA = createButton("send");
    btnXX = createButton("send");

    // 設定按鈕大小、位置、樣式
    btnTask3.size(btnNextWidth, btnNextHeight);
    btnTask3.position(btnNextX, btnNextY);
    btnTask3.style("font-family", 'Cubic-11');
    btnTask3.style("font-size", "18px");
    btnTask3.style("background-color", "white");

    btnPressure.size(btnNextWidth, btnNextHeight);
    btnPressure.position(btnNextX, btnNextY);
    btnPressure.style("font-family", 'Cubic-11');
    btnPressure.style("font-size", "18px");
    btnPressure.style("background-color", "white");

    btnStart3.size(btnNextWidth, btnNextHeight);
    btnStart3.position(btnNextX, btnNextY);
    btnStart3.style("font-family", 'Cubic-11');
    btnStart3.style("font-size", "18px");
    btnStart3.style("background-color", "white");

    btnTask4.size(btnNextWidth, btnNextHeight);
    btnTask4.position(btnNextX, btnNextY);
    btnTask4.style("font-family", 'Cubic-11');
    btnTask4.style("font-size", "18px");
    btnTask4.style("background-color", "white");

    btnChoice1.size(btnAiWidth, btnAiHeight);
    btnChoice1.position(btnAiX - 250, btnAiY + 403);
    btnChoice1.style("font-family", 'Cubic-11');
    btnChoice1.style("font-size", "18px");
    btnChoice1.style("background-color", "white");

    btnChoice2.size(btnAiWidth, btnAiHeight);
    btnChoice2.position(btnPosXX + 252, btnPosXY + 353);
    btnChoice2.style("font-family", 'Cubic-11');
    btnChoice2.style("font-size", "18px");
    btnChoice2.style("background-color", "white");

    btnChoice3.size(btnAiWidth, btnAiHeight);
    btnChoice3.position(btnAiX + 250, btnAiY + 150);
    btnChoice3.style("font-family", 'Cubic-11');
    btnChoice3.style("font-size", "18px");
    btnChoice3.style("background-color", "white");

    btnChoice4.size(btnAiWidth, btnAiHeight);
    btnChoice4.position(btnPosXX + 250, btnPosXY + 150);
    btnChoice4.style("font-family", 'Cubic-11');
    btnChoice4.style("font-size", "18px");
    btnChoice4.style("background-color", "white");

    btnChoice5.size(btnAiWidth, btnAiHeight);
    btnChoice5.position(btnAiX - 250, btnAiY + 150);
    btnChoice5.style("font-family", 'Cubic-11');
    btnChoice5.style("font-size", "18px");
    btnChoice5.style("background-color", "white");

    btnChoice6.size(btnAiWidth, btnAiHeight);
    btnChoice6.position(btnPosXX - 250, btnPosXY + 150);
    btnChoice6.style("font-family", 'Cubic-11');
    btnChoice6.style("font-size", "18px");
    btnChoice6.style("background-color", "white");

    btnAA.size(btnSendWidth, btnSendHeight);
    btnAA.position(btnSendX, btnSendY);
    btnAA.style("font-family", 'Cubic-11');
    btnAA.style("font-size", "18px");
    btnAA.style("background-color", "white");

    btnAX.size(btnSendWidth, btnSendHeight);
    btnAX.position(btnSendX, btnSendY);
    btnAX.style("font-family", 'Cubic-11');
    btnAX.style("font-size", "18px");
    btnAX.style("background-color", "white");

    btnXA.size(btnSendWidth, btnSendHeight);
    btnXA.position(btnSendX, btnSendY);
    btnXA.style("font-family", 'Cubic-11');
    btnXA.style("font-size", "18px");
    btnXA.style("background-color", "white");

    btnXX.size(btnSendWidth, btnSendHeight);
    btnXX.position(btnSendX, btnSendY);
    btnXX.style("font-family", 'Cubic-11');
    btnXX.style("font-size", "18px");
    btnXX.style("background-color", "white");

    // 綁定事件
    btnTask3.mouseClicked(startTask3);
    btnPressure.mouseClicked(showPressure);
    btnStart3.mouseClicked(showPhoneUI);
    btnTask4.mouseClicked(startTask4);

    btnChoice1.mouseClicked(aiShow);
    btnChoice2.mouseClicked(xShow);
    btnChoice3.mouseClicked(aiShowAiWrite);
    btnChoice4.mouseClicked(aiShowXWrite);
    btnChoice5.mouseClicked(xShowAiWrite);
    btnChoice6.mouseClicked(xShowXWrite);

    btnAA.mouseClicked(AASend);
    btnAX.mouseClicked(AXSend);
    btnXA.mouseClicked(XASend);
    btnXX.mouseClicked(XXSend);

    // 一開始全部隱藏 (Task3按鈕)
    hideAllTask3Buttons();

    //Task4按鈕
    ////////////////////////////////////////////////////////////////////////////////////////////////
    buttonAiXW4 = 70;
    buttonAiXH4 = 30;
    buttonOXW = 70;
    buttonOXH = 30;
    buttonNextX = 870;
    buttonNextY = 500;

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
    buttonStart4.style("font-family", 'Cubic-11');
    buttonStart4.style("font-size", "18px");
    buttonStart4.style("background-color", "white");

    buttonEnd.size(buttonNextW, buttonNextH)
    buttonEnd.position(buttonNextX, buttonNextY);
    buttonEnd.style("font-family", 'Cubic-11');
    buttonEnd.style("font-size", "18px");
    buttonEnd.style("background-color", "white");

    buttonEnd_.size(buttonNextW, buttonNextH)
    buttonEnd_.position(buttonNextX, buttonNextY);
    buttonEnd_.style("font-family", 'Cubic-11');
    buttonEnd_.style("font-size", "18px");
    buttonEnd_.style("background-color", "white");

    buttonSend1.size(buttonSendW, buttonSendH)
    buttonSend1.position(buttonSendX4, buttonSendY4);
    buttonSend1.style("font-family", 'Cubic-11');
    buttonSend1.style("font-size", "18px");
    buttonSend1.style("background-color", "white");
    buttonSend2.size(buttonSendW, buttonSendH)
    buttonSend2.position(buttonSendX4, buttonSendY4);
    buttonSend2.style("font-family", 'Cubic-11');
    buttonSend2.style("font-size", "18px");
    buttonSend2.style("background-color", "white");
    buttonSend3.size(buttonSendW, buttonSendH)
    buttonSend3.position(buttonSendX4, buttonSendY4);
    buttonSend3.style("font-family", 'Cubic-11');
    buttonSend3.style("font-size", "18px");
    buttonSend3.style("background-color", "white");
    buttonSend4.size(buttonSendW, buttonSendH)
    buttonSend4.position(buttonSendX4, buttonSendY4);
    buttonSend4.style("font-family", 'Cubic-11');
    buttonSend4.style("font-size", "18px");
    buttonSend4.style("background-color", "white");

    button7.size(buttonAiXW4, buttonAiXH4)
    button7.position(buttonAiX4, buttonAiY4);
    button7.style("font-family", 'Cubic-11');
    button7.style("font-size", "18px");
    button7.style("background-color", "white");
    button8.size(buttonAiXW4, buttonAiXH4)
    button8.position(buttonXX4, buttonXY4);
    button8.style("font-family", 'Cubic-11');
    button8.style("font-size", "18px");
    button8.style("background-color", "white");

    buttonYes1.size(buttonOXW, buttonOXH)
    buttonYes1.position(buttonYesX, buttonYesY);
    buttonYes1.style("font-family", 'Cubic-11');
    buttonYes1.style("font-size", "18px");
    buttonYes1.style("background-color", "white");
    buttonNo1.size(buttonOXW, buttonOXH)
    buttonNo1.position(buttonNoX, buttonNoY);
    buttonNo1.style("font-family", 'Cubic-11');
    buttonNo1.style("font-size", "18px");
    buttonNo1.style("background-color", "white");

    buttonYes2.size(buttonOXW, buttonOXH)
    buttonYes2.position(buttonYesX, buttonYesY);
    buttonYes2.style("font-family", 'Cubic-11');
    buttonYes2.style("font-size", "18px");
    buttonYes2.style("background-color", "white");
    buttonNo2.size(buttonOXW, buttonOXH)
    buttonNo2.position(buttonNoX, buttonNoY);
    buttonNo2.style("font-family", 'Cubic-11');
    buttonNo2.style("font-size", "18px");
    buttonNo2.style("background-color", "white");

    buttonYes3.size(buttonOXW, buttonOXH)
    buttonYes3.position(buttonYesX, buttonYesY);
    buttonYes3.style("font-family", 'Cubic-11');
    buttonYes3.style("font-size", "18px");
    buttonYes3.style("background-color", "white");
    buttonNo3.size(buttonOXW, buttonOXH)
    buttonNo3.position(buttonNoX, buttonNoY);
    buttonNo3.style("font-family", 'Cubic-11');
    buttonNo3.style("font-size", "18px");
    buttonNo3.style("background-color", "white");

    buttonYes4.size(buttonOXW, buttonOXH)
    buttonYes4.position(buttonYesX, buttonYesY);
    buttonYes4.style("font-family", 'Cubic-11');
    buttonYes4.style("font-size", "18px");
    buttonYes4.style("background-color", "white");
    buttonNo4.size(buttonOXW, buttonOXH)
    buttonNo4.position(buttonNoX, buttonNoY);
    buttonNo4.style("font-family", 'Cubic-11');
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

    // 一開始全部隱藏 (Task3按鈕)
    hideAllTask4Buttons();
}


// =================== 主程式的draw() ===================
function draw() {
    // 只要不是任務內就統一隱藏按鈕
    if (!displayingTask3) {
        hideAllTask3Buttons();
    }
    if (!displayingTask4) {
        hideAllTask4Buttons();
    }
    //順序（基本上可以不用動）
    if (displayingIntro) {
        displayIntro();
    } else if (displayingStory) {
        image(bgImage, 0, 0, width, height);
        image(showBoy(), boyPosXmain, boyPosYmain, boyWidth, boyHeight);
        displayStory();
    } else if (displayingIntro01) {
        displayIntro01();
    } else if (displayingAct01) {
        image(bgImage, 0, 0, width, height);
        image(showBoy(), boyPosXmain, boyPosYmain, boyWidth, boyHeight);
        displayAct01();
    } else if (displayingTask1) {
        buttonTask1.show();
        displayTask1();
    } else if (displayingAct1_1) {
        image(bgImage, 0, 0, width, height);
        image(showBoy(), boyPosXmain, boyPosYmain, boyWidth, boyHeight);
        buttonTask1.hide();
        displayAct1_1();
    } else if (displayingAct1_2) {
        image(bgImage, 0, 0, width, height);
        image(showBoy(), boyPosXmain, boyPosYmain, boyWidth, boyHeight);
        buttonTask1.hide();
        displayAct1_2();
    } else if (displayingIntro02) {
        buttonTask1.hide();
        displayIntro02();
    } else if (displayingAct02) {
        image(bgImage, 0, 0, width, height);
        image(showBoy(), boyPosXmain, boyPosYmain, boyWidth, boyHeight);
        buttonTask1.hide();
        displayAct02();
    } else if (displayingTask2) {
        drawTask2();
    } else if (displayingAct2_1) {
        image(bgImage, 0, 0, width, height);
        image(showBoy(), boyPosXmain, boyPosYmain, boyWidth, boyHeight);
        displayAct2_1();
    } else if (displayingAct2_2) {
        console.log("2-2");
        image(bgImage, 0, 0, width, height);
        image(showBoy(), boyPosXmain, boyPosYmain, boyWidth, boyHeight);
        displayAct2_2();
    } else if (displayingIntro03) {
        displayIntro03();
    } else if (displayingAct03) {
        image(bgImage, 0, 0, width, height);
        image(showBoy(), boyPosXmain, boyPosYmain, boyWidth, boyHeight);
        displayAct03();
        // ★ 一旦 Act03 結束後，mousePressed() 裡會令 displayingTask3 = true
    } else if (displayingTask3) {
        drawTask3();
    } else if (displayingAct3_1) {
        image(bgImage, 0, 0, width, height);
        image(showBoy(), boyPosXmain, boyPosYmain, boyWidth, boyHeight);
        displayAct3_1();
    } else if (displayingAct3_2) {
        image(bgImage, 0, 0, width, height);
        image(showBoy(), boyPosXmain, boyPosYmain, boyWidth, boyHeight);
        displayAct3_2();
    } else if (displayingIntro04) {
        displayIntro04();
    } else if (displayingAct04) {
        image(bgImage, 0, 0, width, height);
        image(showBoy(), boyPosXmain, boyPosYmain, boyWidth, boyHeight);
        displayAct04();
    } else if (displayingTask4) {
        drawTask4();
    } else if (displayingAct4_1) {
        image(bgImage, 0, 0, width, height);
        image(showBoy(), boyPosXmain, boyPosYmain, boyWidth, boyHeight);
        displayAct4_1();
    } else if (displayingAct4_2) {
        image(bgImage, 0, 0, width, height);
        image(showBoy(), boyPosXmain, boyPosYmain, boyWidth, boyHeight);
        displayAct4_2();
    } else if (displayingEnd) {
        displayEnd();
    }
}



// =================== 滑鼠事件 ===================
function mousePressed() {
    if (displayingIntro) {
        displayingIntro = false;
        displayingStory = true;
        timer = 0;

    } else if (displayingStory) {
        resetText();
        //所有劇情使用的邏輯都是播完>>設下一個階段為true
        if (currentTextIndex >= storyTexts.length) {
            currentTextIndex = 0;
            displayingStory = false;
            displayingIntro01 = true;
        }

    } else if (displayingIntro01) {
        resetText();
        displayingIntro01 = false;
        displayingAct01 = true;

    } else if (displayingAct01) {
        resetText();
        if (currentTextIndex >= act01Content.length) {
            currentTextIndex = 0;
            displayingAct01 = false;
            displayingTask1 = true;
        }

    } else if (displayingTask1) {
        for (let trash of trashItems) {
            if (trash.isMouseOver()) {
                draggingItem = trash;
                break;
            }
        }

    } else if (displayingAct1_1) {
        resetText();
        if (currentTextIndex >= act1_1Content.length) {
            currentTextIndex = 0;
            displayingAct1_1 = false;
            displayingIntro02 = true;
        }

    } else if (displayingAct1_2) {
        resetText();
        if (currentTextIndex >= act1_2Content.length) {
            currentTextIndex = 0;
            displayingAct1_2 = false;
            displayingIntro02 = true;
        }

    } else if (displayingIntro02) {
        resetText();
        displayingIntro02 = false;
        displayingAct02 = true;

    } else if (displayingAct02) {
        resetText();
        if (currentTextIndex >= act02Content.length) {
            currentTextIndex = 0;
            displayingAct02 = false;
            displayingTask2 = true;
            endTask2Button.show();
        }

    } else if (displayingAct2_1) {
        resetText();
        if (currentTextIndex >= act2_1Content.length) {
            currentTextIndex = 0;
            displayingAct2_1 = false;
            displayingIntro03 = true;
        }

    } else if (displayingAct2_2) {
        resetText();
        if (currentTextIndex >= act2_2Content.length) {
            currentTextIndex = 0;
            displayingAct2_2 = false;
            displayingIntro03 = true;
        }

    } else if (displayingIntro03) {
        resetText();
        displayingIntro03 = false;
        displayingAct03 = true;

    } else if (displayingAct03) {
        resetText();
        if (currentTextIndex >= act03Content.length) {
            currentTextIndex = 0;
            displayingAct03 = false;
            displayingTask3 = true;
        }
    } else if (displayingAct3_1) {
        resetText();
        if (currentTextIndex >= act3_1Content.length) {
            currentTextIndex = 0;
            displayingAct3_1 = false;
            displayingIntro04 = true;
        }

    } else if (displayingAct3_2) {
        resetText();
        if (currentTextIndex >= act3_2Content.length) {
            currentTextIndex = 0;
            displayingAct3_2 = false;
            displayingIntro04 = true;
        }

    } else if (displayingIntro04) {
        resetText();
        displayingIntro04 = false;
        displayingAct04 = true;

    } else if (displayingAct04) {
        resetText();
        if (currentTextIndex >= act04Content.length) {
            currentTextIndex = 0;
            displayingAct04 = false;
            displayingTask4 = true;
        }
    } else if (displayingAct4_1) {
        resetText();
        if (currentTextIndex >= act4_1Content.length) {
            currentTextIndex = 0;
            displayingAct4_1 = false;
            displayingEnd = true;
        }

    } else if (displayingAct4_2) {
        resetText();
        if (currentTextIndex >= act4_2Content.length) {
            currentTextIndex = 0;
            displayingAct4_2 = false;
            displayingEnd = true;
        }
    } else if (displayingEnd) {
        resetText();
        if (currentTextIndex >= endContent.length) {
            currentTextIndex = 0;
            displayingEnd = false;
            console.log("結束");//此行為測試用，可刪
        }
    }
}

//只有任務一用到的mouseReleased
function mouseReleased() {
    if (displayingTask1) {
        if (draggingItem) {
            for (let bin of bins) {
                if (bin.isTrashCorrect(draggingItem) && bin.isMouseOver()) {
                    trashItems = trashItems.filter(trash => trash !== draggingItem);
                    if (trashItems.length === 0) {
                        if (autoSorting) {
                            displayingTask1 = false;
                            displayingAct1_1 = true;
                        } else {
                            displayingTask1 = false;
                            displayingAct1_2 = true;
                        }
                    }
                    break;
                }
            }
            draggingItem = null;
        }
    }
}


// =================== 劇情function ===================
function showBoy() {

    if (aiCount === 0) {
        return imgLevel0;
    } else if (aiCount === 1) {
        return imgLevel1;
    } else if (aiCount === 2) {
        return imgLevel2;
    } else if (aiCount === 3) {
        return imgLevel3;
    } else if (aiCount === 4) {
        return imgLevel4;
    } else {
        return imgLevel5;
    }
}

function resetText() {
    charIndex = 0;
    currentString = "";
    currentTextIndex++;
}


function displayAct1_1() {
    drawTextBox();
    typewriterEffect(act1_1Content[currentTextIndex]);
}
function displayAct1_2() {
    drawTextBox();
    typewriterEffect(act1_2Content[currentTextIndex]);
}
function displayAct2_1() {
    drawTextBox();
    typewriterEffect(act2_1Content[currentTextIndex]);
}
function displayAct2_2() {
    drawTextBox();
    typewriterEffect(act2_2Content[currentTextIndex]);
}
function displayAct3_1() {
    drawTextBox();
    typewriterEffect(act3_1Content[currentTextIndex]);
}
function displayAct3_2() {
    drawTextBox();
    typewriterEffect(act3_2Content[currentTextIndex]);
}
function displayAct4_1() {
    drawTextBox();
    typewriterEffect(act4_1Content[currentTextIndex]);
}
function displayAct4_2() {
    drawTextBox();
    typewriterEffect(act4_2Content[currentTextIndex]);
}
function displayIntro() {
    textFadeIn(intro[0]);
}
function displayIntro01() {
    image(act01, 0, 0, width, height);
}
function displayIntro02() {
    image(act02, 0, 0, width, height);
}
function displayIntro03() {
    image(act03, 0, 0, width, height);
}
function displayIntro04() {
    image(act04, 0, 0, width, height);
}
function displayStory() {
    drawTextBox();
    typewriterEffect(storyTexts[currentTextIndex]);
}
function displayAct01() {
    drawTextBox();
    typewriterEffect(act01Content[currentTextIndex]);
}
function displayAct02() {
    drawTextBox();
    typewriterEffect(act02Content[currentTextIndex]);
}
function displayAct03() {
    drawTextBox();
    typewriterEffect(act03Content[currentTextIndex]);
}
function displayAct04() {
    drawTextBox();
    typewriterEffect(act04Content[currentTextIndex]);
}
function displayEnd() {
    if (aiCount == 4) {
        image(imgEnd1_1, 0, 0, width, height);
        drawTextBox();
        typewriterEffect(end1Content[currentTextIndex]);
        endContent = end1Content;
    }
    else if (aiCount == 0) {
        image(imgEnd2, 0, 0, width, height);
        drawTextBox();
        typewriterEffect(end2Content[currentTextIndex]);
        endContent = end2Content;
    }
    else {
        image(imgEnd3, 0, 0, width, height);
        drawTextBox();
        typewriterEffect(end3Content[currentTextIndex]);
        endContent = end3Content;
    }
}


// =================== 對話方塊 ===================
function drawTextBox() {
    fill(0, 150);
    noStroke();
    rect(50, height - 50 - textBoxHeight, textBoxWidth, textBoxHeight);
}
function typewriterEffect(content) {
    if (typeof content !== "string") {
        console.error("Invalid content type:", content);
        return;
    }
    if (charIndex < content.length) {
        currentString += content.charAt(charIndex);
        charIndex++;
    }
    drawText(currentString);
}
function drawText(textContent) {
    fill(255);
    textFont(customFont);
    textSize(18);
    textAlign(LEFT, TOP);
    text(
        textContent,
        50 + textPadding,
        height - 50 - textBoxHeight + textPadding,
        textBoxWidth - textPadding * 2
    );
}
function textFadeIn(content) {
    textFont(customFont);
    let alpha = map(timer, 0, 120, 0, 255);
    fill(220 - alpha);
    text(content, width / 2, height / 2 - textBoxHeight / 2);
    if (timer < 120) {
        timer++;
    }
}
// =================== task1 function ===================
function initializeTrashItems() {
    trashItems = [];
    const totalItems = 30;
    const margin = 200;
    for (let i = 0; i < totalItems; i++) {
        const x = random(margin, width - margin - 100);
        const y = random(margin * 0.6, height - margin * 0.8);
        const type = random(['white', 'black']);
        const img = (type === 'white') ? trashImages.whiteTrash : trashImages.blackTrash;
        trashItems.push(new Trash(x, y, img, type));
    }
}

function displayTask1() {
    background(240);
    bins.forEach(bin => {
        bin.size = width / 8;
        bin.show();
    });
    trashItems.forEach(trash => {
        trash.size = width / 16;
        trash.show();
    });
    if (draggingItem) {
        draggingItem.x = mouseX;
        draggingItem.y = mouseY;
    }
    if (autoSorting) {
        autoSortTrash();
    }
}

function autoSortTrash() {
    trashItems.forEach((trash, index) => {
        const targetBin = bins.find(bin => bin.color === trash.color);
        if (targetBin) {
            trash.x = lerp(trash.x, targetBin.x + targetBin.size / 2 - trash.size / 2, 0.1);
            trash.y = lerp(trash.y, targetBin.y + targetBin.size / 2 - trash.size / 2, 0.1);

            if (dist(
                trash.x, trash.y,
                targetBin.x + targetBin.size / 2 - trash.size / 2,
                targetBin.y + targetBin.size / 2 - trash.size / 2
            ) < 5) {
                trashItems.splice(index, 1);
            }
        }
    });

    if (trashItems.length === 0) {
        autoSorting = false;
        displayingTask1 = false;
        displayingAct1_1 = true;
    }
}


// =================== Task2 ===================
function drawTask2() {
    if (showImageTask2) {
        background(finalImageTask2);
        setTimeout(() => {
            displayingTask2 = false;
            displayingAct2_1 = true;
            loop();
            endTask2Button.hide();
        }, 3000);
        noLoop();
        return;
    }

    background(bgImageTask2);
    let yOffset = height / 2 + 200;
    for (let i = 0; i < pyramid.length; i++) {
        let xOffset = width / 2 - pyramid[i].length * 7.5;
        for (let j = 0; j < pyramid[i].length; j++) {
            fill(pyramid[i][j].color);
            text(pyramid[i][j].char, xOffset + j * 15, yOffset - i * 10);
        }
    }


    text(inputText, 280, height - 30);

    if (messageTimer > 0) {
        if (messageTimer > 30) {
            messageAlpha = map(messageTimer, 60, 30, 0, 255);
        } else {
            messageAlpha = map(messageTimer, 30, 0, 255, 0);
        }
        fill(255, 0, 0);
        textSize(25);
        text(message, messageX, messageY);
        textSize(20);
        messageTimer--;
    }

    if (pyramid.length >= rows) {
        console.log("j2iejijiejieji");
        displayingTask2 = false;
        displayingAct2_2 = true;
        endTask2Button.hide();
    }
}
function submitReportTask2() {
    showImageTask2 = true;
    aiCount++;
}
function keyTyped() {
    // Task2 的鍵盤事件
    if (!displayingTask2) return;
    if (pyramid.length < rows && key !== 'Enter') {
        inputText += key;
        if (random() < 0.1) {
            message = random(messagesTask2);
            messageX = random(width / 2 - 500, width / 2 + 500);
            messageY = random(height / 2 - 250, height / 2 + 250);
            messageTimer = 40;
        }
        if (inputText.length >= 17 - pyramid.length) {
            addTextToPyramidTask2(inputText);
            inputText = '';
        }
    }
}
function addTextToPyramidTask2(text) {
    if (text.length > 0) { // Ensure only non-empty rows are added
        let newRow = [];
        for (let i = 0; i < text.length; i++) {
            let charData = {
                char: text[i],
                color: random() < 0.1 ? color(255, 0, 0) : color(0),
            };
            newRow.push(charData);
        }
        pyramid.push(newRow);
    }
}


// =================== Task3 ===================

function drawTask3() {
    // 若尚未開始Task3，則自動執行startTask3()
    if (!task3HasStarted) {
        startTask3();
        task3HasStarted = true;
    }
}

// ---- Task3的函式 ----
async function startTask3() {
    for (let i = 0; i < 1000; i++) {
        let posX = random(-100, 800);
        let posY = random(-100, 1000);
        let sizeX = random(10, 200);
        let sizeY = random(10, 200);
        let colorH = mainHue + random(-30, 30);
        let colorS = random(10, 40);
        let colorB = random(80, 100);
        fill(colorH, colorS, colorB);
        noStroke();
        rect(posX, posY, sizeX, sizeY);
    }
    fill("black");
    textSize(100);
    textFont('Cubic-11');
    text("TASK 3", 240, 320);

    btnTask3.hide();
    btnPressure.show();
}

function showPressure() {
    clear();
    background("lightblue");
    image(imgPressure, 550, 60, 315, 150);
    btnPressure.hide();
    btnStart3.show();
    image(showBoy(), boyPosX, boyPosY, boyWidth, boyHeight);
}

function showPhoneUI() {
    background(imgPhone);
    btnChoice1.show();
    btnChoice2.show();
    btnStart3.hide();
    image(showBoy(), boyPosX, boyPosY, boyWidth, boyHeight);
}

async function startTask4() {
    clear();
    image(showBoy(), boyPosX, boyPosY, boyWidth, boyHeight);
    btnTask4.hide();
    buttonStart4.show();

    for (let i = 0; i < 700; i++) {
        let posX = random(-100, 800);
        let posY = random(-100, 1000);
        let sizeX = random(10, 200);
        let sizeY = random(10, 200);
        let colorH = mainHue + random(-30, 30);
        let colorS = random(40, 60);
        let colorB = random(80, 100);
        fill(colorH, colorS, colorB);
        noStroke();
        rect(posX, posY, sizeX, sizeY);
    }
    fill("black");
    textSize(100);
    textFont('Cubic-11');
    text("TASK 4", 240, 320);
}


function aiShow() {
    fill(180, 10, 90);
    rect(425, 0, 850, 600);
    btnChoice1.hide();
    btnChoice2.hide();
    btnChoice3.show();
    btnChoice4.show();
    aiCount++;
    image(showBoy(), boyPosX, boyPosY, boyWidth, boyHeight);
}

function xShow() {
    fill(180, 10, 90);
    rect(0, 0, 450, 600);
    btnChoice1.hide();
    btnChoice2.hide();
    btnChoice5.show();
    btnChoice6.show();
    image(showBoy(), boyPosX, boyPosY, boyWidth, boyHeight);
}

function aiShowAiWrite() {
    clear();
    background(imgAA);
    btnChoice3.hide();
    btnChoice4.hide();
    btnAA.show();
    aiCount++;
    image(showBoy(), boyPosX + 200, boyPosY, boyWidth, boyHeight);
}

function aiShowXWrite() {
    clear();
    background(imgAX);
    inputBox = createInput();
    inputBox.size(190, 65);
    inputBox.position(280, 465);
    inputBox.style("font-family", 'Cubic-11');
    inputBox.style("font-size", "24px");
    inputBox.style("background-color", "lightblue");

    btnChoice3.hide();
    btnChoice4.hide();
    btnAX.show();
    image(showBoy(), boyPosX + 200, boyPosY, boyWidth, boyHeight);
}

function xShowAiWrite() {
    clear();
    background(imgXA);
    btnChoice5.hide();
    btnChoice6.hide();
    btnXA.show();
    aiCount++;
    image(showBoy(), boyPosX + 200, boyPosY, boyWidth, boyHeight);
}

function xShowXWrite() {
    clear();
    background(imgXX);
    inputBox = createInput();
    inputBox.size(190, 75);
    inputBox.position(280, 455);
    inputBox.style("font-family", 'Cubic-11');
    inputBox.style("font-size", "24px");
    inputBox.style("background-color", "lightblue");

    btnChoice5.hide();
    btnChoice6.hide();
    btnXX.show();
    image(showBoy(), boyPosX + 200, boyPosY, boyWidth, boyHeight);
}

function AASend() {
    clear();
    background(imgAASend);
    btnAA.hide();
    btnTask4.show();
    image(showBoy(), boyPosX + 200, boyPosY, boyWidth, boyHeight);
    displayingTask3 = false;
    displayingAct3_1 = true;
}

function AXSend() {
    clear();
    background(imgAXSend);
    let msg = inputBox.value();
    fill("black");
    textSize(24);
    text(msg, 300, 400);
    inputBox.hide();
    btnAX.hide();
    btnTask4.show();
    image(showBoy(), boyPosX + 200, boyPosY, boyWidth, boyHeight);
    displayingTask3 = false;
    displayingAct3_2 = true;
}

function XASend() {
    clear();
    background(imgXASend);
    btnXA.hide();
    btnTask4.show();
    image(showBoy(), boyPosX + 200, boyPosY, boyWidth, boyHeight);
    displayingTask3 = false;
    displayingAct3_1 = true;
}

function XXSend() {
    clear();
    background(imgXXSend);
    let msg = inputBox.value();
    fill("black");
    textSize(24);
    text(msg, 300, 395);
    inputBox.hide();
    btnXX.hide();
    btnTask4.show();
    image(showBoy(), boyPosX + 200, boyPosY, boyWidth, boyHeight);
    displayingTask3 = false;
    displayingAct3_2 = true;
}

function hideAllTask3Buttons() {
    btnTask3.hide();
    btnPressure.hide();
    btnStart3.hide();
    btnTask4.hide();
    btnChoice1.hide();
    btnChoice2.hide();
    btnChoice3.hide();
    btnChoice4.hide();
    btnChoice5.hide();
    btnChoice6.hide();
    btnAA.hide();
    btnAX.hide();
    btnXA.hide();
    btnXX.hide();
    if (inputBox) {
        inputBox.hide();
    }
}

//Task4函式
////////////////////////////////////////////////////////////////////////////////////////////////

function drawTask4() {
    // 若尚未開始Task3，則自動執行startTask3()
    if (!task4HasStarted) {
        startTask4();
        task4HasStarted = true;
    }
}
function start4() {
    background(imgApp);
    buttonStart4.hide();
    button7.show();
    button8.show();
    image(showBoy(), boyX - 200, boyY, boyW, boyH);
}
function end() {
    clear();
    buttonEnd.hide();
    displayingTask4 = false;
    displayingAct4_1 = true;
}
function end_() {
    clear();
    buttonEnd_.hide();
    displayingTask4 = false;
    displayingAct4_2 = true;
}
function aiChat() {
    clear();
    background(imgAiChat1);
    button7.hide();
    button8.hide();
    buttonSend1.show();
    aiCount++;
    image(showBoy(), boyX - 200, boyY, boyW, boyH);
}
function send1() {
    clear();
    background(imgAiChat2);
    buttonSend1.hide();
    buttonSend2.show();
    image(showBoy(), boyX - 200, boyY, boyW, boyH);
}
function send2() {
    clear();
    background(imgAiChat3);
    buttonSend2.hide();
    buttonSend3.show();
    image(showBoy(), boyX - 200, boyY, boyW, boyH);
}
function send3() {
    clear();
    background(imgAiChat4);
    buttonSend3.hide();
    buttonSend4.show();
    image(showBoy(), boyX - 200, boyY, boyW, boyH);
}
function send4() {
    clear();
    background(imgAiChat5);
    buttonSend4.hide();
    buttonEnd.show();
    image(showBoy(), boyX - 200, boyY, boyW, boyH);
}
function xChat() {
    clear();
    background(imgX1);
    button7.hide();
    button8.hide();
    buttonYes1.show();
    buttonNo1.show();
    image(showBoy(), boyX - 200, boyY, boyW, boyH);
}
function yes1() {
    clear();
    background(imgFailed);
    buttonYes1.hide();
    buttonNo1.hide();
    buttonEnd.show();
    image(showBoy(), boyX - 200, boyY, boyW, boyH);
}
function yes2() {
    clear();
    background(imgFailed);
    buttonYes2.hide();
    buttonNo2.hide();
    buttonEnd.show();
    image(showBoy(), boyX - 200, boyY, boyW, boyH);
}
function yes3() {
    clear();
    background(imgFailed);
    buttonYes3.hide();
    buttonNo3.hide();
    buttonEnd.show();
    image(showBoy(), boyX - 200, boyY, boyW, boyH);
}
function yes4() {
    clear();
    background(imgFailed);
    buttonYes4.hide();
    buttonNo4.hide();
    buttonEnd.show();
    image(showBoy(), boyX - 200, boyY, boyW, boyH);
}
function no1() {
    clear();
    background(imgX2);
    buttonYes1.hide();
    buttonNo1.hide();
    buttonYes2.show();
    buttonNo2.show();
    image(showBoy(), boyX - 200, boyY, boyW, boyH);
}
function no2() {
    clear();
    background(imgX3);
    buttonYes2.hide();
    buttonNo2.hide();
    buttonYes3.show();
    buttonNo3.show();
    image(showBoy(), boyX - 200, boyY, boyW, boyH);
}
function no3() {
    clear();
    background(imgX4);
    buttonYes3.hide();
    buttonNo3.hide();
    buttonYes4.show();
    buttonNo4.show();
    image(showBoy(), boyX - 200, boyY, boyW, boyH);
}
function no4() {
    clear();
    background(imgX5);
    buttonYes4.hide();
    buttonNo4.hide();
    buttonEnd.show();
    image(showBoy(), boyX - 200, boyY, boyW, boyH);
}

function hideAllTask4Buttons() {
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

}

// =================== 任務一類別定義 (Bin & Trash) ===================
class Bin {
    constructor(x, y, img, color) {
        this.x = x;
        this.y = y;
        this.img = img;
        this.color = color;
        this.size = 200;
    }
    show() {
        image(this.img, this.x, this.y, this.size, this.size);
    }
    isMouseOver() {
        return (mouseX > this.x && mouseX < this.x + this.size &&
            mouseY > this.y && mouseY < this.y + this.size);
    }
    isTrashCorrect(trash) {
        return this.color === trash.color;
    }
}

class Trash {
    constructor(x, y, img, color) {
        this.x = x;
        this.y = y;
        this.img = img;
        this.color = color;
        this.size = 100;
    }
    show() {
        image(this.img, this.x, this.y, this.size, this.size);
    }
    isMouseOver() {
        return (mouseX > this.x && mouseX < this.x + this.size &&
            mouseY > this.y && mouseY < this.y + this.size);
    }
}
