

class Bullet {
    constructor(_x, _y) {
        this.x = _x;
        this.y = _y;
        this.r = 10;
    }

    show(){
        fill(125);
        rect(this.x,this.y,2, 10)
    }

    move(dir){
        this.y += 3*dir;
    }

    hits(object){
        return dist(this.x, this.y, object.x, object.y) <= 42;
    }

    disapear(k){
        bullets.splice(k, 1);
    }
}
