scoreLW=0;
scoreRW=0;
song1="";
song2="";
song1_status="";
song2_status="";
LWY=0;
LWX=0;
RWY=0;
RWX=0;
function preload(){
    song1=loadSound("music.e.mp3");
    song2=loadSound("music.mp3");
}
function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video,loaded)
    poseNet.on("pose",gotposes)
}
function draw(){
    image(video,0,0,600,500);
    fill("red");
    stroke("red");
song1_status=song1.isPlaying();
song2_status=song2.isPlaying();

    if(scoreLW>0.2){
song2.stop()
    
    circle(LWX,LWY,20)
    if(song1_status==false){
        song1.play()}
document.getElementById("status").innerHTML="playing= pizza tower lap 3 "
}
if(scoreRW>0.2){
    song1.stop()
        
        circle(RWX,RWY,20)
        if(song2_status==false){
            song2.play()}
    document.getElementById("status").innerHTML="playing= vibe of song "
    }
  }



function loaded(){
    console.log("this is ready")
}
function gotposes(results){
    if(results.length>0){
        console.log(results)
        LWX=results[0].pose.leftWrist.x;
        LWY=results[0].pose.leftWrist.y;
        
        RWX=results[0].pose.rightWrist.x;
        RWY=results[0].pose.rightWrist.y;
        
        console.log("leftwristX="+LWX+"leftWristY="+LWY)
        console.log("righttwristX="+RWX+"rightWristY="+RWY)

        scoreLW=results[0].pose.keypoints[9].score
        scoreRW=results[0].pose.keypoints[10].score
    
    }
}