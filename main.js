nosex=0;
nosey=0;
lwristx=0;
rwristx=0;
difference=0;
function setup()
{
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,550);
    canvas.center();

    poseNet=ml5.poseNet(video,modelloaded);

    poseNet.on('pose',gotposes);
}

function draw()
{
    background("aliceblue");
    document.getElementById("square_sides").innerHTML="width and height of the text = "+difference +"px";
    textSize(difference);
    text("EMOTIONAL DAMAGE",50,50);
    fill()="red";
}

function modelloaded()
{
    console.log("posenet is initialized");
}

function gotposes(results)
{
    if(results.length > 0)
    console.log(results);
    nosex=results[0].pose.nose.x;
    nosey=results[0].pose.nose.y;

    console.log("nosex = "+nosex);
    console.log("nosey = "+nosey);

    lwristx=results[0].pose.leftWrist.x;
    rwristx=results[0].pose.rightWrist.x;

    console.log("lwristx = "+lwristx);
    console.log("rwristx = "+rwristx);

    difference=floor(lwristx-rwristx);

    
}