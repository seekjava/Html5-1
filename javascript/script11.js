// 原型继承
/**
 * 优点是继承了父类的模板，又继承了父类的原型对象，
 * 缺点就是父类实例传参，不是子类实例化传参
 */
function person(name, age) {
  this.name = name;
  this.age = age;
}

person.prototype.id = 0011;

// 子类
function man(sex) {
  this.sex = sex;
}

//继承
man.prototype = new person('c5', 27);
var m = new man();
console.log(m.name, m.id);

// call, apply, bind
// 构造器继承
/**
 * 继承了父类的模板，不继承了父类的原型对象。
 * 优点是方便了子类实例传参，
 * 缺点就是不继承了父类的原型对象
 */
function person(name, age) {
  this.name = name;
  this.age = age;
}

person.prototype.id = 0011;

function women(name, age, sex) {
  person.call(this, name, age);
  this.sex = sex;
}

var wm = new women('ray', 10, '男');

console.log(wm.name, wm.id);
