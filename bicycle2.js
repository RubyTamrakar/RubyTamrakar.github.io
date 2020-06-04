(function() {
    'use strict'
    class createBicyclePrototype {
        speed = 0;

        constructor(speed) {
            this.speed = speed;
        }

        applyBrake(speed) {
            return this.speed -= speed;
        }


        speedUp(speed) {
            return this.speed += speed;
        }
    }

    class mountainBikePrototype extends createBicyclePrototype {
        gear = 1;

        constructor(speed, gear) {
            super(speed);
            this.gear = gear;
        }
        SetGear(gear) {
            return this.gear;
        }

    }

    let smallBike = new createBicyclePrototype(10);
    console.log(smallBike.applyBrake(10));
    console.log(smallBike.speedUp(10));

    let bigBike = new mountainBikePrototype(4, 2);
    console.log(bigBike.SetGear(18));
    console.log(bigBike.speedUp(19));

})();