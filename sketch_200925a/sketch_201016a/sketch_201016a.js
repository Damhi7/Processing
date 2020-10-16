let state = 0;

function setup(){
  createCanvas(500, 500);
} 
 function draw(){
  if(state){
    background(255);
    noStroke();
    fill(0);
    ellipse(mouseX, mouseY, 50, 50);
  }
  else{
    background(0);
    noStroke();
    fill(255);
    ellipse(mouseX, mouseY, 50, 50);
     
     background(255);
    noStroke();
    fill(255);
    ellipse(mouseX, mouseY, 50, 50);
    
    background(100);
    noStroke();
    fill(255);
    ellipse(mouseX, mouseY, 50, 50);
  }
 
function mousePressed(){
  state = !state;
  
}
 
