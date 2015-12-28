var Car2 = (function () {
    function Car2(engine) {
        this.engine = engine;
    }
    Car2.prototype.start = function () {
        alert("Engine started: " + this.engine);
    };
    Car2.prototype.stop = function () {
        alert("Engine stopped: " + this.engine);
    };
    return Car2;
})();
window.onload = function () {
    var car = new Car2('V8');
    car.start();
    car.stop();
};
//# sourceMappingURL=Car.js.map