/**
 * 对象
 * js语言使用构造器作为对象的模版。构造函数，就是专门用来生成实例对象的函数，
 * 它就是对象的的模版，描述实例对象的基本结构。一个构造函数，可以生成多个实例对象，
 * 这些实例对象都有相同的结构
 * /

/**
 * 对象的特性：
 * 对象包含一些属性和方法, 并且对象中的属性是无序的。
 * 每个属性都有一个字符串key和脆响的value，
 * 对象的结构中，属性是可以动态添加或者删除
 */
var obj1 = {
  a: 12
};
obj1.b = "jim";
delete obj1.b;

// 赋值方式
obj1['c'] = 58;
obj1.c = 42;

/**
 * new: 被用来生成对象，作用是执行构造函数，返回一个实例对象
 *
 * new原理：
 * 1. 创建一个空对象，作为将要返回的对象的实例。
 * 2. 讲这个空对象的原型，指向构造函数的prototype属性
 * 3. 讲这个空对象赋值给函数内部的this关键字。
 * 4. 开始执行构造函数内部的代码
 * 如果构造函数内部有return语句，而且return后面跟着一个对象，
 * new命令会返回语句指定的对象；否则返回this对象
 */

// 创建一个自定义对象有两种方式
var person = new Object();
person.name = "victor";
person.job = "engineer";
person.sayName = function() {
  console.log(this.name);
}

// 对象字面量
var student = {
  name: 'tom',
  job: 'sdt',
  sayName: function() {
    console.log(this.name);
  }
}

// 创建object 的方式一
var obj = {};
// 创建object 的方式二
var obj1 = Object.create(null);

/**
 * 对象的属性类型(操作权限的控制)：主要用来描述对象属性的各种特征
 * configurable: 默认false，定义能否修改对象的属性
 * enumerable: 默认false，forin循环返回属性
 * writable： 默认false，能否修改属性值
 * value: 默认undenfined，表示一个具体的值
 * get/set 方法
 */

//对象原型上的属性和方法查找方式
var obj = {
  x: 1
};
obj.y; //undefined
// 原因：访问不存在的属性，它会在对象本身查找，查找不到，回去原型链上查找，
// 一直查找到原型链的末端null
var yz = obj.y.z; // 返回error
obj.y = 3;

// 如果我们想写入，并检测时
var yz;
if (obj.y) {
  yz = obj.y.z;
}


/**
 * 属性删除
 */
var person = {
  age: 28,
  title: 'example'
}
delete person.age; //true
delete person['title']; // true
person.age; // undefined 说明已经成功
delete person.age; // true 已经不存在了，所以返回true
// 注意：不能把delete 结果作为判断是否成功的依据
// !!person.age

/**
 * 属性的检测
 */
var cat = new Object;
cat.legs = 4;
'legs' in cat; //true

cat.name = 'kitty';
cat.hasOwnProperty('name'); // true
cat.propertyIsEnumerable('legs'); //true 每个属性上都有这个是否可枚举的属性

Object.defineProperty(cat, 'name', {
  enumberable: false,
  value: 'kitty'
});
// 使用forin是不能遍历出name的
var o = {
  x: 1,
  y: 2,
  z: 3
};
'toString' in o; // true
o.propertyIsEnumerable('toString'); // false 所以对象上的属性是不会出来的
var key;
for (key in o) {
  console.log(key); // x, y, z
}

var obj = Object.create(o);
obj.a = 4;
obj.hasOwnProperty('x'); // 对象的原型上的属性
var key;
for (key in obj) {
  console.log(key); // a, x, y, z
}
var obj = Object.create(o);
obj.a = 4;
var key;
for (key in obj) {
  // 用来过滤掉那些原型链上的属性
  if (obj.hasOwnProperty(key)) {
    console.log(key); //a
  }
}

/**
 * 属性getter / setter方法
 */
var man = {
  name: 'bosn',
  score: 86,
  get age() {
    return new Date().getFullYear() - 1990;
  },
  set age(val) {
    console.log('age can\'t set to ' + val);
  }
}
console.log(man.age); //27
man.age = 100; // age can't set to  100
console.log(man.age); // 27
// 因为我们在set 中并没有做任何的事情
//
var women = {
  name: 'victor',
  $age: null,
  get age() {
    if (this.$age == undefined) { // 这个是== ，不是严格等于，所以null || undefined都适用
      return new Date().getFullYear() - 1990;
    } else {
      return this.$age;
    }
  },
  set age(val) {
    val = +val; // 字符串的时候会转换成NaN
    if (!isNaN(val) && val > 0 && val < 150) {
      this.$age = +val;
    } else {
      throw new Error("Incorrect val = ", val);
    }
  }
}
console.log(women.age); // 30
women.age = 100;
console.log(women.age); // 100
women.age = 'abc'; // error: Incorrect val = NaN


// get/set 与原型链
function foo() {}
// 我们给foo对象创建一个属性z， get方法是在原型链上，如果是普通的属性的时候可以赋值成功
// 实际上get或set 方法在原型链时，并不能给对象上增加一个新属性，并赋值的方法实现
Object.defineProperty(foo.prototype, 'z', {
  get: function() {
    return 1;
  }
});
var obj = new foo();
obj.z; // 1
obj.z = 10;
obj.z; // 1

// writable
var obj1 = {};
Object.defineProperty(obj1, 'name', {
  value: 'tom'
});
var copy1 = Object.create(obj1);
copy1.name // "tom"
copy1.name = "abc";
copy1.name // "tom"

修改：
Object.defineProperty(obj1, 'x', {
  writable: true,
  configurable: true,
  value: 100
});

var c = Object.create(obj1);
c.x; // 100
c.x = 200;
c.x; // 200

// defineProperties
var boss = {};
Object.defineProperties(boss, {
  title: {
    value: 'manager',
    enumerable: true
  },
  corp: {
    value: 'anyway',
    enumberable: true
  },
  salary: {
    value: 5000000,
    enumberable: true,
    writable: true
  },
  luck: {
    get: function() {
      return Math.random() > 0.5 ? 'good' : 'bad'; // 几率各50%
    }
  },
  promote: {
    set: function(level) {
      this.salary *= 1 + level * 0.1;
    }
  }
});
// 查找对象属性的操作权限
// 第一个参数是对象，第二个是对象的属性名
Object.getOwnPropertyDescriptor(boss, 'title')

/**
 * JSON.stringify(), JSOn.parse()
 */
var o = {
  x: 1,
  y: 2,
  z: 3
};
JSON.stringify(o); // 序列化
var a = '{"x":1,"y":2,"z":3}';
JSON.parse(a); // 反序列化
