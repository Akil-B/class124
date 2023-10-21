function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);
    
    canvas= createCreate(550,500);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses)
    }
function draw(){
    background('#969A97');
    textsize(difference);
    fill('#0000FF.');
    text('Peter',50,400)
}
function modelLoaded(){

    console.log('PoseNet Is Initialised!');

}

function gotPoses(){
if(result.length > 0)
{
    console.log(results);
    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference = floor(leftWristX - rightWristX);
}

}