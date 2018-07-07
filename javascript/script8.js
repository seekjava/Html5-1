/**
 * 函数
 */
// 对象是函数创建的，而函数却又是一种对象。
// 也是属性的集合，可以对函数进行自定义属性。
// 每个函数都有一个属性叫做prototype。
// 这个prototype的属性值是一个对象，
// 默认的只有一个叫做constructor指向这个函数本身。
// 函数的作用，我们可以一次代码，反复重用这行代码。

/**
 * 创建函数的方式
 */
// 命名式函数
var fn = function() {
  this.name = "cat";
  this.age = 3;
}

// 声明式函数
add(); // true 会进行预处理
function add() {
  return true;
}

// 自执行式函数
(function sub() {})();
// function sub() {}();

// 函数的调用方式
// 直接调用： foo();
// 对象方法： obj.method();
// 构造器： new Foo();

function fun() {
  function add(x, y) {
    console.log(x + y);
  }
  return {
    add: add
  };
}
fun(); //直接调用
fun().add(1, 2); // 对象方法

var f1 = new fun(); //构造器

// 函数中的this
function f1() {
  return this;
}
f1() === window； // true
  // 如果是在浏览器中是window
  // 如果是在nodejs 环境中是 global

// 作为对象方法的函数中的this，指向的是对象本身
var obj = {
  prop: 37,
  f: function() {
    return this.prop;
  }
};

/**
 * call / apply 方法
 * call / apply 方法与this
 */

function add(c, d) {
  return this.a + this.b + c + d;
}
var o = {
  a: 1,
  b: 3
};

// 我们是用o调用add方法
// apply：调用一个对象的一个方法，用另一个对象替换当前对象。例如：B.apply(A, arguments);即A对象应用B对象的方法。
// call：调用一个对象的一个方法，用另一个对象替换当前对象。例如：B.call(A, args1,args2);即A对象调用B对象的方法。
// // 区别apply 最多只有两个参数--新this对象和一个数组arg
add.call(o, 5, 7); // 1+3 + 5 +7 = 16
add.apply(o, [10, 20]); //1 + 3 + 10 +20 =34



function bar() {
  console.log(Object.prototype.toString.call(this));
}

bar.call(7); // [object Number]
// Object.prototype.toString.call(this),
// 这个方法让this 继承了这个方法


/**
 * bind 方法
 * es5 提供的，我们又一个函数对象，我们发现bind中有一个参数，是一个对象，
 * 我们会把参数传进去作为this，那么新的g对象，我们在重复调用时，
 * 那么this已经指向了bind这样一个参数，在我们绑定一次，
 * 重复调用时，会比call和apply更高效一些
 */
function f() {
  return this.a;
}
var g = f.bind({
  a: "test"
});
g()； // "test"

var o = {
  a: 37,
  f: f,
  g: g
};
console.log(o.f(), o.g()); // 37 , test

/**
 * 闭包
 * 有权访问另一个函数作用域内变量的函数都是闭包.
 * 缺点： 当调用的时候，是通过匿名函数的方式返回的这个值，
 * 然后长期存在内容的，不能被释放掉
 */
function outer() {
  var n = 30;
  return n;
}

function outer() {
  var n = 30;
  return function() {
    return n + 2;
  }
}
var func = outer();
func(); // 32

// 前端闭包例子
! function() {
  var d = "localdata";
  document.addEventListener("click", function() { // 闭包
    console.log(localData);
  });
}();

! function() {
  var d = "localData";
  var url = "http:// www.baidu.com/";
  $ajax({
    url: url,
    success: fuction() { // 闭包
      // do sth
      console.log(d);
    }
  });
}
闭包 - 常见错误之循环闭包
document.body.innerHTML = "<div id =div1>aaa</div>" + "<div id="
div2 ">bbb</div> <div id=div3>ccc</div>"
for (var i = 1; i < 4; i++) {
  document.getElementById('div' + i).
  addEventListener('click', function() {
    alert(i); // all are 4!
  });
}

解决办法， 我们可以在这个循环中使用立即执行函数
document.body.innerHTML = "<div id =div1>aaa</div>" + "<div id="
div2 ">bbb</div> <div id=div3>ccc</div>"
for (var i = 1; i < 4; i++) {！
  function(i) {
    document.getElementById('div' + i).
    addEventListener('click', function() {
      alert(i); // 1, 2, 3
    });
  }(i); // 1, 2, 3
}

闭包 - 封装(function() {
  var _userId = 23489;
  var _typeId = "item";
  var exp = {};

  function converter(userId) {
    return +userId;
  }
  exp.getUserId = function() {
    return converter(_userId);
  }
  exp.getTypeId = function() {
    return _typeId;
  }
  window.exp = exp;
}());
