class Hold
{
    constructor(id, isFoot, isClip, LR, x, y, width, height, boardLayer)
    {
        this.id = id;
        this.isFoot = isFoot;
        this.isClip = isClip;
        this.LR = LR;
        this.x = x;

        var fill = "orange";
        if(isFoot) fill = "darkseagreen";
        if(isClip) fill = "silver";

        this.rect = new Konva.Rect({
            x: x,
            y: y,
            width: width,
            height: height,
            fill: fill,
            stroke: "black",
            strokeWidth: 1,
        });

        boardLayer.add(this.rect);
    }
}

class Board
{
    constructor(stage)
    {
        var boardColor = "tan";
        var leftBarX = 100;
        var leftMainBoardX = 160;
        var rightBarX = 380;
        var rightMainBoardX = 300;
        var mainHoldWidth = 40;

        this.layer = new Konva.Layer();

        var leftBar = new Konva.Rect({
            x: leftBarX,
            y: 0,
            width: 20,
            height: 580,
            fill: boardColor,
            stroke: "black",
            strokeWidth: 1,
        });
        this.layer.add(leftBar);
    
        var rightBar = new Konva.Rect({
            x: rightBarX,
            y: 0,
            width: 20,
            height: 580,
            fill: boardColor,
            stroke: "black",
            strokeWidth: 1,
        });
        this.layer.add(rightBar);
    
        var mainBoard = new Konva.Rect({
            x: leftBarX,
            y: 140,
            width: 300,
            height: 120,
            fill: boardColor,
            stroke: "black",
            strokeWidth: 1,
        });
        this.layer.add(mainBoard);    

        this.holds = [];

        //  LeftHolds
        this.holds.push(new Hold("LeftHand1", false, false, "L", leftBarX, 20, 20, 20, this.layer));
        this.holds.push(new Hold("LeftHand2", false, false, "L", leftBarX, 60, 20, 20, this.layer));
        this.holds.push(new Hold("LeftHand3", false, false, "L", leftBarX-20, 100, 20, 20, this.layer));
        this.holds.push(new Hold("LeftHand4", false, false, "L", leftBarX, 140, 20, 20, this.layer));
        this.holds.push(new Hold("LeftHand5", false, false, "L", leftBarX-20, 240, 20, 20, this.layer));
        this.holds.push(new Hold("LeftHand6", false, false, "L", leftBarX, 280, 20, 20, this.layer));
    
        this.holds.push(new Hold("LeftFoot1", true, false, "L", leftBarX, 420, 20, 20, this.layer));
        this.holds.push(new Hold("LeftFoot2", true, false, "L", leftBarX+20, 420, 20, 20, this.layer));
        this.holds.push(new Hold("LeftFoot3", true, false, "L", leftBarX, 540, 20, 20, this.layer));
        this.holds.push(new Hold("LeftFoot4", true, false, "L", leftBarX+20, 540, 20, 20, this.layer));
    
        this.holds.push(new Hold("LeftHandGaba1", false, false, "L", leftMainBoardX-40, 140, mainHoldWidth, 20, this.layer));
        this.holds.push(new Hold("LeftHandGaba2", false, false, "L", leftMainBoardX+40, 140, mainHoldWidth, 20, this.layer));
        this.holds.push(new Hold("LeftHand38mm", false, false, "L", leftMainBoardX, 180, mainHoldWidth, 20, this.layer));
        this.holds.push(new Hold("LeftHand19mm", false, false, "L", leftMainBoardX, 220, mainHoldWidth, 20, this.layer));
        this.holds.push(new Hold("LeftHandClip", false, true, "L", leftBarX, 260, 20, 20, this.layer));

        //  RightHolds
        this.holds.push(new Hold("RightHand1", false, false, "R", rightBarX, 20, 20, 20, this.layer));
        this.holds.push(new Hold("RightHand2", false, false, "R", rightBarX, 60, 20, 20, this.layer));
        this.holds.push(new Hold("RightHand3", false, false, "R", rightBarX+20, 100, 20, 20, this.layer));
        this.holds.push(new Hold("RightHand4", false, false, "R", rightBarX, 140, 20, 20, this.layer));
        this.holds.push(new Hold("RightHand5", false, false, "R", rightBarX+20, 240, 20, 20, this.layer));
        this.holds.push(new Hold("RightHand6", false, false, "R", rightBarX, 280, 20, 20, this.layer));
    
        this.holds.push(new Hold("RightFoot1", true, false, "R", rightBarX, 420, 20, 20, this.layer));
        this.holds.push(new Hold("RightFoot2", true, false, "R", rightBarX-20, 420, 20, 20, this.layer));
        this.holds.push(new Hold("RightFoot3", true, false, "R", rightBarX, 540, 20, 20, this.layer));
        this.holds.push(new Hold("RightFoot4", true, false, "R", rightBarX-20, 540, 20, 20, this.layer));
    
        this.holds.push(new Hold("RightHandGaba1", false, false, "R", rightMainBoardX+40, 140, mainHoldWidth, 20, this.layer));
        this.holds.push(new Hold("RightHandGaba2", false, false, "R", rightMainBoardX-40, 140, mainHoldWidth, 20, this.layer));
        this.holds.push(new Hold("RightHand38mm", false, false, "R", rightMainBoardX, 180, mainHoldWidth, 20, this.layer));
        this.holds.push(new Hold("RightHand19mm", false, false, "R", rightMainBoardX, 220, mainHoldWidth, 20, this.layer));
        this.holds.push(new Hold("RightHandClip", false, true, "R", rightBarX, 260, 20, 20, this.layer));

        stage.add(this.layer);
    }

    getHold(id)
    {
        var targetHolds = this.holds.filter(x => x.id == id);

        return targetHolds[0];
    }

    getRandomHold()
    {
        return this.holds[Math.floor(Math.random() * this.holds.length)];
    }

    draw()
    {
        this.layer.draw();
    }
}

class Select
{
    constructor(id, isFoot, LR, selectLayer, selectedHold)
    {
        this.id = id;
        this.isFoot = isFoot;
        this.LR = LR;

        var fill = "red";

        if(isFoot) fill = "green";

        this.rect = new Konva.Rect({
            x: selectedHold.rect.x(),
            y: selectedHold.rect.y(),
            width: selectedHold.rect.width(),
            height: selectedHold.rect.height(),
            fill: fill,
            stroke: "black",
            strokeWidth: 1,
        });
        selectLayer.add(this.rect);

        this.text = new Konva.Text({
            x: selectedHold.rect.x() + (selectedHold.rect.width() / 4),
            y: selectedHold.rect.y() + (selectedHold.rect.height() / 4),
            text: LR,
            fill: "white",
        });
        selectLayer.add(this.text);
    }

    updateSelect(selectedHold)
    {
        this.rect.x(selectedHold.rect.x());
        this.rect.y(selectedHold.rect.y());
        this.rect.width(selectedHold.rect.width());
        this.rect.height(selectedHold.rect.height());

        this.text.x(selectedHold.rect.x() + (selectedHold.rect.width() / 4));
        this.text.y(selectedHold.rect.y() + (selectedHold.rect.height() / 4));
    }
}

class Selector
{
    constructor(stage)
    {
        this.layer = new Konva.Layer();

        this.leftHand = new Select("LeftHandSelect", false, "L", this.layer, board.getHold("LeftHand38mm"));
        this.rightHand = new Select("RightHandSelect", false, "R", this.layer, board.getHold("RightHand38mm"));
        this.leftFoot = new Select("LeftFootSelect", true, "L", this.layer, board.getHold("LeftFoot4"));
        this.rightFoot = new Select("RightFootSelect", true, "R", this.layer, board.getHold("RightFoot4"));
    
        stage.add(this.layer);
    }

    selectHold(hold)
    {
        this.leftHand.updateSelect(hold);
    }

    draw()
    {
        this.layer.draw();
    }
}

function Init()
{
    // first we need to create a stage
    var stage = new Konva.Stage({
        container: 'konvacontainer',   // id of container <div>
        width: 500,
        height: 600
    });

    board = new Board(stage);
    selector = new Selector(stage);

    board.draw();
    selector.draw();
}

function Start()
{
    setInterval(function timerHandler()
    {
        let hold = board.getRandomHold();

        selector.selectHold(hold);

        selector.draw();
    }, parseInt(document.getElementById("updateIntervalText").value, 10));
}

//  ボード本体のレイヤー、動作不要
var board;

//  選択状態のレイヤー、動作させる
var selector;

//  初期化処理（ボード描画など）
Init();

window.onload = Start();
