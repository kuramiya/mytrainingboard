var boardLayer = new Konva.Layer();
var holds = {};

Init();

Start();

function Init()
{
    // first we need to create a stage
    var stage = new Konva.Stage({
        container: 'konvacontainer',   // id of container <div>
        width: 500,
        height: 600
    });

    var leftBarX = 100;
    var rightBarX = 400;

    // then create layer
    var leftBar = new Konva.Rect({
        x: leftBarX,
        y: 0,
        width: 20,
        height: 580,
        fill: "gray",
        stroke: "black",
        strokeWidth: 1,
    });
    boardLayer.add(leftBar);

    var rightBar = new Konva.Rect({
        x: rightBarX,
        y: 0,
        width: 20,
        height: 580,
        fill: "gray",
        stroke: "black",
        strokeWidth: 1,
    });
    boardLayer.add(rightBar);

    var mainBoard = new Konva.Rect({
        x: leftBarX,
        y: 140,
        width: 320,
        height: 120,
        fill: "gray",
        stroke: "black",
        strokeWidth: 1,
    });
    boardLayer.add(mainBoard);

    holds["L1"] = CreateHold(leftBarX, 20);
    holds["L2"] = CreateHold(leftBarX, 60,);
    holds["L3"] = CreateHold(leftBarX - 20, 100,);
    holds["L4"] = CreateHold(leftBarX, 140,);
    holds["L5"] = CreateHold(leftBarX - 20, 240,);
    holds["L6"] = CreateHold(leftBarX, 280,);
    holds["L7"] = CreateHold(leftBarX, 420,);
    holds["L8"] = CreateHold(leftBarX + 20, 420,);
    holds["L9"] = CreateHold(leftBarX, 540,);
    holds["L10"] = CreateHold(leftBarX + 20, 540,);

    holds["LGaba"] = CreateHold(140, 140, 60);
    holds["L38mm"] = CreateHold(140, 180, 60);
    holds["L19mm"] = CreateHold(140, 220, 60);
    holds["LClip"] = CreateHold(leftBarX, 260, 20, 20, "orange");

    holds["R1"] = CreateHold(rightBarX, 20);
    holds["R2"] = CreateHold(rightBarX, 60);
    holds["R3"] = CreateHold(rightBarX + 20, 100);
    holds["R4"] = CreateHold(rightBarX, 140);
    holds["R5"] = CreateHold(rightBarX + 20, 240);
    holds["R6"] = CreateHold(rightBarX, 280);
    holds["R7"] = CreateHold(rightBarX, 420);
    holds["R8"] = CreateHold(rightBarX - 20, 420);
    holds["R9"] = CreateHold(rightBarX, 540);
    holds["R10"] = CreateHold(rightBarX - 20, 540);

    holds["RGaba"] = CreateHold(320, 140, 60);
    holds["R38mm"] = CreateHold(320, 180, 60);
    holds["R19mm"] = CreateHold(320, 220, 60);
    holds["RClip"] = CreateHold(rightBarX, 260, 20, 20, "orange");

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
        var hold = holds["RGaba"];
        var x = hold.x();
        hold.x(x + 1);
        boardLayer.draw();
    }, 1000);
}

