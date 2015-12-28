var Engine = (function () {
    function Engine(housePower, engineType) {
        this.housePower = housePower;
        this.engineType = engineType;
    }
    return Engine;
})();
var Car = (function () {
    function Car(engine) {
        this.engine = engine;
    }
    Object.defineProperty(Car.prototype, "engine", {
        get: function () {
            return this._engine;
        },
        set: function (value) {
            if (!value)
                throw 'Please supply an engine';
            this._engine = value;
        },
        enumerable: true,
        configurable: true
    });
    Car.prototype.start = function () {
        alert("Car engine started " + this._engine.engineType);
    };
    return Car;
})();
window.onload = function () {
    var engine = new Engine(300, 'v8');
    var car = new Car(engine);
    alert(car.engine.engineType);
    car.start();
};
//# sourceMappingURL=Car.js.map