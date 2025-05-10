function setup() {
    createCanvas(400, 400);

    // 創建 sprite
    let sheepSprite = createSprite(200, 200, 50, 50);
    sheepSprite.shapeColor = color(255, 0, 0); // 設定顏色

    // 測試 mousePressedOver
    sheepSprite.onMousePressed = () => {
        console.log("Sheep clicked!");
    };
}

function draw() {
    background(220);

    // 繪製所有 sprite
    drawSprites();
}
