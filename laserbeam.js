
class Laserbeams {
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
        this.y += dir/18;
    }

    hits(object){
        return dist(this.x, this.y, object.x, object.y) <= 42;
    }

    disapear(k){
        laserbeams.splice(k, 1);
    }
}
