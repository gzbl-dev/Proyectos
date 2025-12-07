let particles = [];
const numParticles = 100;
const connectionDistance = 120; 

function setup() {
    
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('canvas-container');
    
    
    for (let i = 0; i < numParticles; i++) {
        particles.push(new Particle());
    }
}

function draw() {
    background(15, 20, 35); 
    
    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].display();
        
        let d = dist(mouseX, mouseY, particles[i].x, particles[i].y);
        
        if (d < connectionDistance) {
            stroke(0, 210, 255, 150 - d); 
            line(mouseX, mouseY, particles[i].x, particles[i].y);
        }
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

class Particle {
    constructor() {
        this.x = random(width);
        this.y = random(height);
        this.vx = random(-1, 1);
        this.vy = random(-1, 1);
        this.size = random(2, 5);
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
    }

    display() {
        noStroke();
        fill(255, 100);
        ellipse(this.x, this.y, this.size);
    }
}