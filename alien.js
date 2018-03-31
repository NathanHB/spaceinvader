
class Alien {
    constructor(_x, _y, _lamma) {
        this.x = _x;
        this.y = _y;
        this.r = 40
        this.direction = 1;
        this.lamma = _lamma;
    }

    move(){
        this.x += this.direction;
    }

    turnback(){
        this.direction *= -1;
    }

    shift(){
        this.y += 20;
    }

    show(){
        fill(255, 0, 20);
        image(this.lamma,this.x,this.y);
    }

    die(i){
        aliens.splice(i, 1)
    }



}
