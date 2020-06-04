var module = (function() {
    'use strict'

    let createBicyclePrototype = function() {
        return {
            speed: 0,
            applyBrake: function(speed) {
                this.speed -= speed;
            },
            speedUp: function(speed) {
                this.speed += speed;
            }
        }
    }

    let mountainBikePrototype = function(bike) {
        let newBike = Object.create(bike);
        newBike.gear = 1;
        newBike.setGear = function(gear) {
            this.gear = gear;
        }
        return newBike;
    }


    let start = function() {
        let bikePrototype = createBicyclePrototype(),
            mbikePrototype = mountainBikePrototype(bikePrototype);
        console.log(bikePrototype.speed);
        console.log(bikePrototype.applyBrake(5));
        console.log(mbikePrototype.speed);
        console.log(mbikePrototype.hasOwnProperty('speed'));

        let smallBike = Object.create(createBicyclePrototype);
        console.log(smallBike.speed);
        smallBike.speedUp(15);
        console.log(smallBike.speed);

        let bigBike = Object.create(mountainBikePrototype(bike));
        console.log(bigBike.gear);
        console.log(bigBike.setGear(20));
        console.log(bigBike.gear);

    }

    return {
        start: start,
        createBicyclePrototype: createBicyclePrototype,
        mountainBikePrototype: mountainBikePrototype
    }
})();

module.start();