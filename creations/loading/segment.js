function Segment(x, y, a, n) {
    this.angle = 0;
    if (a <= 0) {
        this.angle = 0;
    } else {
        this.angle = PI/2;
    }

    this.show = function(digit, TF, clear) {
        push();
        translate(x - (digit + 1) * 42.5, y);
        rotate(this.angle);
        noStroke();
        if (TF === 0) {
            fill(75, 0, 0);
        } else if (clear != 1) {
            fill(0, 255, 0);
        } else {
            nofill();
        }
        triangle(3.75, -7.5, 0, -15, -3.75, -7.5);
        triangle(3.75, 7.5, 0, 15, -3.75, 7.5);
        rectMode(CENTER);
        rect(0, 0, 7.5, 15.5);
        pop();
    }
}