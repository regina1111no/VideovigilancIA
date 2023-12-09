video = "";
objects=[];
status="";

function preload(){

  video = createVideo('video.mp4');
  
}
function setup(){
    canvas = createCanvas(500,400);
    canvas.center();
    video.hide();
}

function start(){
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("estatus").innerHTML="estadp detectadpo";
}
function modelLoaded() {
     console.log("¡Modelo cargado!");
     status = true;
      video.loop(); 
     video.speed(1); 
     video.volume(0);
}
function gotResult(error,results){
    if(error){
        console.error(error);
    }
    console.log(results);
    objects=results;
}
function draw(){
    image(video,0,0,500,400);
    if(status != "")
      {
        r =  random(255);
        g =  random(255);
        b =  random(255);      
        objectDetector.detect(video, gotResult);
        for(i=0; i<objects.length; i++)
        {
            document.getElementById("estatus").innerHTML="objetos detectados";
            document.getElementById("numeroobjetos").innerHTML="numero de objetos detectados:"+objects.length;        

            fill(r,g,b);
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke(r,g,b);
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);        
        }
     }
}