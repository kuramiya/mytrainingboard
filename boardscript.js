var boardLayer = new Konva.Layer();
var holds = {};

Init();

window.onload = Start();

function Init()
{
    // first we need to create a stage
    var stage = new Konva.Stage({
        container: 'konvacontainer',   // id of container <div>
        width: 500,
        height: 600
    });

    var boardColor = "tan";
    var leftBarX = 100;
    var leftMainBoardX = 160;
    var rightBarX = 380;
    var rightMainBoardX = 300;
    var mainHoldWidth = 40;

    // then create layer
    var leftBar = new Konva.Rect({
        x: leftBarX,
        y: 0,
        width: 20,
        height: 580,
        fill: boardColor,
        stroke: "black",
        strokeWidth: 1,
    });
    boardLayer.add(leftBar);

    var rightBar = new Konva.Rect({
        x: rightBarX,
        y: 0,
        width: 20,
        height: 580,
        fill: boardColor,
        stroke: "black",
        strokeWidth: 1,
    });
    boardLayer.add(rightBar);

    var mainBoard = new Konva.Rect({
        x: leftBarX,
        y: 140,
        width: 300,
        height: 120,
        fill: boardColor,
        stroke: "black",
        strokeWidth: 1,
    });
    boardLayer.add(mainBoard);

    holds["LeftHand1"] = CreateHold(leftBarX, 20);
    holds["LeftHand2"] = CreateHold(leftBarX, 60,);
    holds["LeftHand3"] = CreateHold(leftBarX - 20, 100);
    holds["LeftHand4"] = CreateHold(leftBarX, 140,);
    holds["LeftHand5"] = CreateHold(leftBarX - 20, 240);
    holds["LeftHand6"] = CreateHold(leftBarX, 280);

    holds["LeftFoot1"] = CreateHold(leftBarX, 420, 20, 20, "green");
    holds["LeftFoot2"] = CreateHold(leftBarX + 20, 420, 20, 20, "green");
    holds["LeftFoot3"] = CreateHold(leftBarX, 540, 20, 20, "green");
    holds["LeftFoot4"] = CreateHold(leftBarX + 20, 540, 20, 20, "green");

    holds["LeftHandGaba1"] = CreateHold(leftMainBoardX - 40, 140, mainHoldWidth);
    holds["LeftHandGaba2"] = CreateHold(leftMainBoardX + 40, 140, mainHoldWidth);
    holds["LeftHand38mm"] = CreateHold(leftMainBoardX, 180, mainHoldWidth);
    holds["LeftHand19mm"] = CreateHold(leftMainBoardX, 220, mainHoldWidth);
    holds["LeftHandClip"] = CreateHold(leftBarX, 260, 20, 20, "silver");

    holds["RightHand1"] = CreateHold(rightBarX, 20);
    holds["RightHand2"] = CreateHold(rightBarX, 60);
    holds["RightHand3"] = CreateHold(rightBarX + 20, 100);
    holds["RightHand4"] = CreateHold(rightBarX, 140);
    holds["RightHand5"] = CreateHold(rightBarX + 20, 240);
    holds["RightHand6"] = CreateHold(rightBarX, 280);

    holds["RightFoot1"] = CreateHold(rightBarX, 420, 20, 20, "green");
    holds["RightFoot2"] = CreateHold(rightBarX - 20, 420, 20, 20, "green");
    holds["RightFoot3"] = CreateHold(rightBarX, 540, 20, 20, "green");
    holds["RightFoot4"] = CreateHold(rightBarX - 20, 540, 20, 20, "green");

    holds["RightHandGaba1"] = CreateHold(rightMainBoardX + 40, 140, mainHoldWidth);
    holds["RightHandGaba2"] = CreateHold(rightMainBoardX - 40, 140, mainHoldWidth);
    holds["RightHand38mm"] = CreateHold(rightMainBoardX, 180, mainHoldWidth);
    holds["RightHand19mm"] = CreateHold(rightMainBoardX, 220, mainHoldWidth);
    holds["RightHandClip"] = CreateHold(rightBarX, 260, 20, 20, "silver");

    for(let key in holds)
    {
        boardLayer.add(holds[key]);
    }

    var str = new Konva.Text({
        x: 105,
        y: 45,
        text: "L",
        fill: "white",
    });
    boardLayer.add(str);

    // add the layer to the stage
    stage.add(boardLayer);

    // draw the image
    boardLayer.draw();
}

function CreateHold(x, y, width = 20, height = 20, fill = "red")
{
    var hold = new Konva.Rect({
        x: x,
        y: y,
        width: width,
        height: height,
        fill: fill,
        stroke: "black",
        strokeWidth: 1,
    });

    return hold;
}

function Start()
{
    setInterval(function timerHandler(){
        var hold = holds["RightHandGaba1"];
        var x = hold.x();
        hold.x(x + 1);
        boardLayer.draw();
    }, parseInt(document.getElementById("updateIntervalText").value, 10));
}

