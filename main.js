video = "";

function preload(){

  video = createVideo('video.mp4');
  
}
function setup(){
    canvas = createCanvas(500,400);
    canvas.center();
    video.hide();
}
function draw(){
    image(video,0,0,500,400);
}
function start(){
    detector=ml5.objectDetector("cocossd", modelloaded);
    document.getElementByid("estatus").innerHTML="estadp detectadpo"
}
function modelLoaded() {
     console.log("¡Modelo cargado!");
     status = true;
      video.loop(); 
     video.speed(1); 
     video.volume(0);
}