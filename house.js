
class House {
    constructor(_x, _y) {
        this.x = _x;
        this.y = _y;
        this.w1 = 50;
        this.h1 = 20;
        this.w2 = 15;
        this.h2 = 30;
    }

    show(){
        noStroke();
        fill(255);
        rect(this.x-this.w1/3-1,this.y+this.h1/2,this.w2,this.h2);
        rect(this.x+this.w1/3+1,this.y+this.h1/2,this.w2,this.h2);
        rectMode(CENTER)
        rect(this.x,this.y,this.w1,this.h1);
    }
}
