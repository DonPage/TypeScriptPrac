var demo;
(function (demo) {
    //any
    var data;
    var info;
    var doSomething = function (arg) {
        return arg;
    };
    var x = doSomething('nothing');
    //primitives
    var age = 21;
    var score = 42.9000;
    var rating = 99.99;
    var hasData = true;
    var isReady = true;
    var isBald = function () {
        return 'yes';
    };
    var hasHair = !!isBald();
    //string array
    function getArrayLength(x) {
        var len = x.length;
        return len;
    }
    var names = ['Don', 'John', 'Don', 'Aaron'];
    var firstPerson = names[0];
    console.log(getArrayLength(names));
    //null
    var guitarSales = null;
    var animal = null;
    var orderDate = null;
    //undefined
    var quantity;
    var company = undefined;
    //object
    var points = { x: 1, y: 2 };
})(demo || (demo = {}));
//# sourceMappingURL=ApplyingTypes.js.map