/**
 * 表达式
 */
// 算术表达式
var num = 2;
num = num + 1;
var name = "hello" + "world";
var j = 2 > 3;
num == 5;
num < 60;

/**
 * 运算符
 *
 * var a =5, b = 9;
  a < b (小于)
  a <= b (小于或等于)
  a >= b (大于或等于)
  a != b (a 不等于b)
 */
var numb = "     6876";
~~numb; // 利用符号进行类型转换，转换成数字类型
~~true; // 1
~~false; // 0

"12321" | 0;
undefined | 0;

/**
 * 操作符的优先级
 * 算术运算符 > 比较运算符 > 逻辑运算符 > "=" 赋值符号
 */
var numa = 3;
var numb = 6;
var t1 = numa + 30 / 2 - numb * 3; // 0
var t2 = ((numa + 30) / (2 - numb)) * 3; // -24.75
var t3 = numa + 30 > 10 && numb * 3 < 2; // false

/**
 * new 运算符
 * 可以创建构造器的实例
 */
function foo() {}
foo.prototype.x = 1;
var obj = new foo();
obj.x; // 1
obj.hasOwnProperty('x'); //false
// 用来判断是对象本身上的，还是原型链上的属性。

/**
 * this 运算符
 * this： 全局的this指向的是window, nodejs中this指向的是global
 */
var obj = {
  func: function() {
    return this;
  }
}

/**
 * 运算符void
 * 无论void 后的表达式是什么，void操作符都会返回undefined
 * 通过采用void 0取undefined比采用字面上的undefined更靠谱更安全，应该优先采用void 0这种方式
 * 为什么要用void，不直接用undefined
 * 因为undefined在javascript中不是保留字。换言之，你可以写出：
 */
void 0
void 123

function joke() {
  var undefined = "hello world";
  console.log(undefined); //会输出"hello world"
}
console.log(undefined); //输出undefined
