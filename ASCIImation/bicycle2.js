(function() {
    'use strict'
    class createBicyclePrototype {
        speed = 0;

        BicyclePrototype(speed) {
            this.speed = speed;
        }

        applyBrake(speed) {
            this.speed -= speed;
        }


        speedUp(speed) {
            this.speed += speed;
        }
    }

    class mountainBikePrototype extends createBicyclePrototype {
        gear = 1;
        SetGear(gear) {
            this.gear = gear;
        }

    }

    let smallBike = newcreateBicyclePrototype();
    console.log(smallBike.ApplyBrake(10));
    smallBike.speed = 20;
    console.log(smallBike.SpeedUp(10));

    let bigBike = new mountainBikePrototype();
    console.log(bigBike.SetGear(18));
    console.log(bigBike.SpeedUp(19));

})();