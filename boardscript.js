//  更新頻度の初期値（ミリ秒）
const UPTDATE_INTERVAL_MSEC = 5000;

//  更新頻度加算の初期値（ミリ秒）
const INTERVAL_INCREASE_MSEC = 100;

//  ホールドを表現するクラス
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

//  トレーニングボード自体を表現するクラス
class Board
{
    constructor(stage)
    {
        let boardColor = "tan";
        let leftBarX = 100;
        let leftMainBoardX = 160;
        let rightBarX = 380;
        let rightMainBoardX = 300;
        let mainHoldWidth = 40;

        this.layer = new Konva.Layer();

        let leftBar = new Konva.Rect({
            x: leftBarX,
            y: 0,
            width: 20,
            height: 580,
            fill: boardColor,
            stroke: "black",
            strokeWidth: 1,
        });
        this.layer.add(leftBar);
    
        let rightBar = new Konva.Rect({
            x: rightBarX,
            y: 0,
            width: 20,
            height: 580,
            fill: boardColor,
            stroke: "black",
            strokeWidth: 1,
        });
        this.layer.add(rightBar);
    
        let mainBoard = new Konva.Rect({
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

    //  指定されたIDのホールドを返す
    getHold(id)
    {
        let targetHolds = this.holds.filter(x => x.id == id);

        return targetHolds[0];
    }

    //  ランダムな手用のホールドを返す
    getRandomHandHold()
    {
        let handHolds = this.holds.filter(x => x.id.match(/Hand/));

        return handHolds[Math.floor(Math.random() * handHolds.length)];
    }

    //  ランダムな足用のホールドを返す
    getRandomFootHold()
    {
        let footHolds = this.holds.filter(x => x.id.match(/Foot/));

        return footHolds[Math.floor(Math.random() * footHolds.length)];
    }

    //  ボードを描画する
    draw()
    {
        this.layer.draw();
    }
}

//  ホールド選択
class HoldSelect
{
    constructor(id, isFoot, LR, selectLayer, selectedHold)
    {
        this.id = id;
        this.isFoot = isFoot;
        this.LR = LR;

        let fill = "red";

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

        this.circle = new Konva.Circle({            
            x: selectedHold.rect.x() + (selectedHold.rect.width() / 2),
            y: selectedHold.rect.y() + (selectedHold.rect.height() / 2),
            radius: 25,
            stroke: fill,
            strokeWidth : 2,
        });
        selectLayer.add(this.circle);

        this.text = new Konva.Text({
            x: selectedHold.rect.x() + (selectedHold.rect.width() / 2) - 5,
            y: selectedHold.rect.y() + (selectedHold.rect.height() / 4),
            text: LR,
            fill: "white",
        });
        selectLayer.add(this.text);
    }

    //  選択しているホールドを更新する
    updateSelect(selectedHold)
    {
        this.rect.x(selectedHold.rect.x());
        this.rect.y(selectedHold.rect.y());
        this.rect.width(selectedHold.rect.width());
        this.rect.height(selectedHold.rect.height());

        this.circle.x(selectedHold.rect.x() + (selectedHold.rect.width() / 2));
        this.circle.y(selectedHold.rect.y() + (selectedHold.rect.height() / 2));

        this.text.x(selectedHold.rect.x() + (selectedHold.rect.width() / 2) - 5);
        this.text.y(selectedHold.rect.y() + (selectedHold.rect.height() / 4));
    }
}

//  ホールド選択を管理するクラス
class HoldSelector
{
    constructor(stage)
    {
        this.layer = new Konva.Layer();

        this.selects = [];
        
        this.selects.push(new HoldSelect("LeftHandSelect", false, "L", this.layer, board.getHold("LeftHand38mm")));
        this.selects.push(new HoldSelect("RightHandSelect", false, "R", this.layer, board.getHold("RightHand38mm")));
        this.selects.push(new HoldSelect("LeftFootSelect", true, "L", this.layer, board.getHold("LeftFoot4")));
        this.selects.push(new HoldSelect("RightFootSelect", true, "R", this.layer, board.getHold("RightFoot4")));
    
        this.previousSelect = this.selects[0];

        stage.add(this.layer);
    }

    //  指定したIDに一致する一手の配列を返す
    getHoldSelects(regExpId)
    {
        let targetSelects = this.selects.filter(x => x.id.match(regExpId));

        return targetSelects;
    }

    //  初期化する
    reset(board)
    {
        this.getHoldSelects(/LeftHand/)[0].updateSelect(board.getHold("LeftHand38mm"));
        this.getHoldSelects(/RightHand/)[0].updateSelect(board.getHold("RightHand38mm"));
        this.getHoldSelects(/LeftFoot/)[0].updateSelect(board.getHold("LeftFoot4"));
        this.getHoldSelects(/RightFoot/)[0].updateSelect(board.getHold("RightFoot4"));
    }

    update(board)
    {
        let nextSelect;
        let nextHold;

        //  最後に動かしたのが足の場合、次は手を動かす
        if(this.previousSelect == this.leftFoot || this.previousSelect == this.rightFoot)
        {
            let nextHandSelects = this.getHoldSelects(/Hand/);

            nextSelect = nextHandSelects[Math.floor(Math.random() * nextHandSelects.length)];

            nextHold = board.getRandomHandHold();
        }
        else
        {
            nextSelect = this.selects[Math.floor(Math.random() * this.selects.length)];

            if(nextSelect.id.match(/Hand/))
            {
                nextHold = board.getRandomHandHold();
            }
            else
            {
                nextHold = board.getRandomFootHold();
            }
        }

        nextSelect.updateSelect(nextHold);

        this.previousSelect = nextSelect;
    }

    //  ホールド選択を描画する
    draw()
    {
        this.layer.draw();
    }
}

//  初期化する
function init()
{
    // first we need to create a stage
    var stage = new Konva.Stage({
        container: 'konvacontainer',   // id of container <div>
        width: 500,
        height: 600
    });

    board = new Board(stage);
    selector = new HoldSelector(stage);

    board.draw();
    selector.draw();
}

//  再度初期化する
function reset()
{
    isRunning = false;

    selector.reset(board);

    document.getElementById("updateIntervalText").value = UPTDATE_INTERVAL_MSEC;
    document.getElementById("intervalIncreaseText").value = INTERVAL_INCREASE_MSEC;

    selector.draw();
}

//  処理を開始する
function start()
{
    updateInterval_msec = parseInt(document.getElementById("updateIntervalText").value, 10);
    intervalIncrease_msec = parseInt(document.getElementById("intervalIncreaseText").value, 10);

    isRunning = true;

    setTimeout(intervalHandler, updateInterval_msec);
}

//  周期更新処理のハンドラ
function intervalHandler()
{
    if(isRunning == false) return;

    selector.update(board);

    selector.draw();

    updateInterval_msec = updateInterval_msec + intervalIncrease_msec;

    setTimeout(intervalHandler, updateInterval_msec);
}


//  ボード本体のレイヤー、動作不要
var board;

//  選択状態のレイヤー、動作させる
var selector;

//  更新周期
var updateInterval_msec = UPTDATE_INTERVAL_MSEC;

//  更新加算値
var intervalIncrease_msec = INTERVAL_INCREASE_MSEC;

//  動作中フラグ
var isRunning = false;

//  初期化処理（ボード描画など）
init();

//  ボタンイベント登録
document.getElementById("startButton").onclick = start;
document.getElementById("resetButton").onclick = reset;