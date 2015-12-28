interface IEngine {
    start();

}
class Engine {
    constructor(public housePower: number,
                public engineType: string) {}
}

class Car implements IEngine{
    private _engine: Engine;

    constructor(engine: Engine) {
        this.engine = engine;
    }

    get engine() : Engine {
        return this._engine;
    }

    set engine(value: Engine) {
        if (!value) throw 'Please supply an engine';
        this._engine = value;
    }

    start() {
        alert(`Car engine started ${this._engine.engineType}`);
    }
}

window.onload = function () {
    var engine = new Engine(300, 'v8');
    var car = new Car(engine);
    alert(car.engine.engineType);
    car.start();
};