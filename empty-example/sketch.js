var diam1=0;

function setup() {
  // put setup code here
createCanvas (500,500);
background("#FF8C00");
}

function draw() {
  // put drawing code here
fill("#add8e6");    
stroke("#affff00");    
strokeWeight(5);        
ellipse(50,100,diam1,diam1);
fill("#ff69b4")
ellipse(mouseX-20,mouseY-20,20,20);
stroke("#e0ffff");
line(75,200,40,40);
fill("#228b22")
ellipse(random(width),random(height),66,66);
//diam1=diam1+5
}

function mousePressed() {
    diam1=diam1+5;
}