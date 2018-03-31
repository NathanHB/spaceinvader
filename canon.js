
class Canon {
    constructor() {
        this.x = width / 2;
        this.y = height - 20;
    }

    show(){
        fill(255);
        noStroke();
        rectMode(CENTER);
        rect(this.x,this.y,30,10);
        rect(this.x, this.y-9, 10, 10);
    }

    move(direction){
        this.x += direction;
    }
}
