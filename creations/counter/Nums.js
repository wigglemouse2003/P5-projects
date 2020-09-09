function Num(digit, num, clearfun) {
    var loadSegs;
    loadSegs = new Segments();
    

    this.clearlast = function() {
//   translate(width / 4, height / 4);

        return loadSegs.seg1.show(digit, 0, 1),
        loadSegs.seg2.show(digit, 0, 1),
        loadSegs.seg3.show(digit, 0, 1),
        loadSegs.seg4.show(digit, 0, 1),
        loadSegs.seg5.show(digit, 0, 1),
        loadSegs.seg6.show(digit, 0, 1),
        loadSegs.seg7.show(digit, 0, 1);
    }

    this.one = function() {
//   translate(width / 4, height / 4);

        return loadSegs.seg1.show(digit, 1),
        loadSegs.seg2.show(digit, 1);
    }

    this.two = function() {
//   translate(width / 4, height / 4);

        return loadSegs.seg1.show(digit, 1),
        loadSegs.seg3.show(digit, 1),
        loadSegs.seg4.show(digit, 1),
        loadSegs.seg6.show(digit, 1),
        loadSegs.seg7.show(digit, 1);
    }

    this.three = function() {
//   translate(width / 4, height / 4);

        return loadSegs.seg1.show(digit, 1),
        loadSegs.seg2.show(digit, 1),
        loadSegs.seg3.show(digit, 1),
        loadSegs.seg6.show(digit, 1),
        loadSegs.seg7.show(digit, 1);
    }

    this.four = function() {
//   translate(width / 4, height / 4);

        return loadSegs.seg1.show(digit, 1),
        loadSegs.seg2.show(digit, 1),
        loadSegs.seg5.show(digit, 1),
        loadSegs.seg7.show(digit, 1);
    }

    this.five = function() {
//   translate(width / 4, height / 4);

        return loadSegs.seg2.show(digit, 1),
        loadSegs.seg3.show(digit, 1),
        loadSegs.seg5.show(digit, 1),
        loadSegs.seg6.show(digit, 1),
        loadSegs.seg7.show(digit, 1);
    }

    this.six = function() {
//   translate(width / 4, height / 4);

        return loadSegs.seg2.show(digit, 1),
        loadSegs.seg3.show(digit, 1),
        loadSegs.seg4.show(digit, 1),
        loadSegs.seg5.show(digit, 1),
        loadSegs.seg6.show(digit, 1),
        loadSegs.seg7.show(digit, 1);
    }

    this.seven = function() {
//   translate(width / 4, height / 4);

        return loadSegs.seg1.show(digit, 1),
        loadSegs.seg2.show(digit, 1),
        loadSegs.seg6.show(digit, 1);
    }

    this.eight = function() {
//   translate(width / 4, height / 4);

        return loadSegs.seg1.show(digit, 1),
        loadSegs.seg2.show(digit, 1),
        loadSegs.seg3.show(digit, 1),
        loadSegs.seg4.show(digit, 1),
        loadSegs.seg5.show(digit, 1),
        loadSegs.seg6.show(digit, 1),
        loadSegs.seg7.show(digit, 1);
    }

    this.nine = function() {
//   translate(width / 4, height / 4);

        return loadSegs.seg1.show(digit, 1),
        loadSegs.seg2.show(digit, 1),
        loadSegs.seg3.show(digit, 1),
        loadSegs.seg5.show(digit, 1),
        loadSegs.seg6.show(digit, 1),
        loadSegs.seg7.show(digit, 1);
    }

    this.zero = function() {
//   translate(width / 4, height / 4);

        return loadSegs.seg1.show(digit, 1),
        loadSegs.seg2.show(digit, 1),
        loadSegs.seg3.show(digit, 1),
        loadSegs.seg4.show(digit, 1),
        loadSegs.seg5.show(digit, 1),
        loadSegs.seg6.show(digit, 1);
    }
    
    if (clearfun == 1) {
        return this.clearlast();
    } else if (num == 1) {
        return this.one();
    } else if (num == 2) {
        return this.two();
    } else if (num == 3) {
        return this.three();
    } else if (num == 4) {
        return this.four();
    } else if (num == 5) {
        return this.five();
    } else if (num == 6) {
        return this.six();
    } else if (num == 7) {
        return this.seven();
    } else if (num == 8) {
        return this.eight();
    } else if (num == 9) {
        return this.nine();
    } else if (num == 0) {
        return this.zero();
    }
}
