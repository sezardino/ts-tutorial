// boolean
var bool = false;
// number
var num1 = 1;
var num2 = 1.2;
// string
var str = 'some string';
var tStr = "some template string";
// undefined
var und = undefined;
// null
var n = null;
// array
var array1 = [1, 2, 3, 4];
var array2 = [1, 2, 3, 4];
var array3 = ['string', 1];
var array4;
array4 = [1, 'string'];
// any
var someNumber = 1;
var someBool = false;
var someString = 'string';
someNumber = true;
someBool = 'string';
someString = 1;
console.log(1 /* Down */);
console.log(9 /* Right */);
var user1 = {
    name: 'Edward', age: 24, nickName: 'sezardino'
};
var admin1 = {
    name: 'Edward', age: 24, nickName: 'sezardino'
};
var user2 = {
    name: 'Edward', age: 24, nickName: 'sezardino'
};
var admin2 = {
    name: 'Edward', age: 24,
    someAct: function () { return 'action'; }
};
//functions
// arguments
var createPassword1 = function (name, age) {
    if (age === void 0) { age = 99; }
    return "" + name + age;
};
var createPassword2 = function (name, age) { return "" + name + age; };
console.log(createPassword1('Edward', 24));
console.log(createPassword1('Edward'));
console.log(createPassword2('Edward', '24'));
console.log(createPassword2('Edward'));
// rest
var getSkills = function (name) {
    var skills = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        skills[_i - 1] = arguments[_i];
    }
    return "My name is " + name + ", my skills are " + skills.join();
};
console.log(getSkills('Edward', 'JS', 'HTML', 'CSS', 'TS', 'React'));
//classes
var User1 = /** @class */ (function () {
    function User1() {
        this.name = 'Edward';
        this.age = 24;
        this.nickName = 'Sezardino';
    }
    return User1;
}());
var User2 = /** @class */ (function () {
    function User2(name, age, nickName) {
        this.nickName = 'Sezardino';
        this.name = name;
        this.age = age;
        this.nickName = nickName;
    }
    return User2;
}());
var userEdward1 = new User2('Edward', 24, 'Sezardino');
var userEdward2 = new User2('Edward', 24);
console.log(userEdward1);
var User3 = /** @class */ (function () {
    function User3(name, age, nickName, pass) {
        this.name = name;
        this.age = age;
        this.nickName = nickName;
        this.pass = pass;
    }
    return User3;
}());
var userEdward3 = new User3('Edward', 24, 'Sezardino', 1234);
//userEdward2.name; // Edward
//userEdward2.age; // available only in User3
//userEdward2.nickName; //available only in User3 class and its subclass
//userEdward2.pass = 42; //readonly
//minimization class properties
var User4 = /** @class */ (function () {
    function User4(name, age, nickName, pass) {
        this.name = name;
        this.age = age;
        this.nickName = nickName;
        this.pass = pass;
    }
    return User4;
}());
//private properties
var User5 = /** @class */ (function () {
    function User5(age) {
        this.age = age;
    }
    User5.prototype.setAge = function (age) {
        this.age = age;
    };
    return User5;
}());
var someUser = new User5(24);
// someUser.myAge = 25;
someUser.setAge(31);
// inheritance
var Inh = /** @class */ (function () {
    function Inh(name) {
        this.name = name;
    }
    Inh.prototype.getPass = function () {
        return this.name + Inh.secret;
    };
    Inh.secret = 12345;
    return Inh;
}());
// abstract class
var absUser = /** @class */ (function () {
    function absUser(name, age) {
        this.name = name;
        this.age = age;
    }
    return absUser;
}());
var Interface;
(function (Interface) {
    // interface
    var User = /** @class */ (function () {
        function User() {
            this.name = 'Edward';
            this.age = 24;
            this.nickName = 'Sezardino';
        }
        return User;
    }());
})(Interface || (Interface = {}));
