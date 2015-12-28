module demo {
    //any
    var data: any;
    var info;
    var doSomething = function (arg) {
        return arg;
    };
    var x = doSomething('nothing');

    //primitives
    var age: number = 21;
    var score: number = 42.9000;
    var rating = 99.99;

    var hasData: boolean = true;
    var isReady = true;
    var isBald = function () {
        return 'yes';
    };
    var hasHair = !!isBald();

    //string array
    function getArrayLength(x: string[]) {
        var len: number = x.length;
        return len;
    }

    var names: string[] = ['Don', 'John', 'Don', 'Aaron'];
    var firstPerson: string = names[0];
    console.log(getArrayLength(names));

    //null
    var guitarSales: any = null;
    var animal = null;
    var orderDate: Date = null;

    //undefined
    var quantity: number;
    var company = undefined;

    //object
    var points: Object = {x: 1, y: 2};

}