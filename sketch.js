function setup() {
    createCanvas(500, 500); //my canvas
}

function draw() {
  background("#990099"); // background 
    ellipse(200, 200, 20, 20);
      ellipse(mouseX, mouseY, 5, 5)
    
    if (mouseIsPressed) {
        diameter= 100;
        fill(250, 0, 0)
    } else { 
    
    diameter = 50;
    fill(250, 250, 250)
    }
 
    ellipse(250, 250, diameter, diameter); 
    triangle(500, 300, 520, 300, 510, 280);
    triangle(300, 100, 320, 100, 310, 80);
}


