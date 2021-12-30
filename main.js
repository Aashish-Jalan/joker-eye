noseX  = 0;
noseY = 0;
LeyeX = 0;
LeyeY = 0;
ReyeX = 0;
ReyeY = 0;
function preload(){
nose = loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
leye = loadImage('https://i.postimg.cc/bw9GQNhZ/right-eye-removebg-preview.png');
reye = loadImage('https://i.postimg.cc/QCtSrTxW/left-eye-removebg-preview.png')
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300 , 300);
    video.hide();

    poseNet =  ml5.poseNet(video , modelLoaded);
    poseNet.on('pose' , gotPoses);

}

function modelLoaded(){
    console.log("Posenet is working ");
}

function draw() {
 image(video , 0 , 0 ,300 ,300);
  image(nose , noseX , noseY , 50 , 50);
 image(leye , LeyeX , LeyeY , 30 , 60);
 image(reye , ReyeX , ReyeY , 30 , 60);

}

function take_snapshot(){
    save('mustache.png');
}

function gotPoses(results){
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x-20;
        noseY = results[0].pose.nose.y-5;
        LeyeX = results[0].pose.leftEye.x-10;
        LeyeY = results[0].pose.leftEye.y-25;
        ReyeX = results[0].pose.rightEye.x-10;
        ReyeY = results[0].pose.rightEye.y-25;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
        console.log("left eye x = " + LeyeX);
        console.log("left eye y = " + LeyeY);
        console.log("right eye x = " +  ReyeX);
        console.log("right eye y = " +  ReyeY);
        
    }
}

