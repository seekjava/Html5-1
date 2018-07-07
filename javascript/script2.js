/**
 * 数据类型
 *
 *  弱类型：变量也可以不声明，直接使用， 但不规范。
   需要先声明，后使用
   "use strict"; 严格模式下，需要先声明，后使用
 */

/**
 * number
 * string
 * boolean
 * null
 * undefined
 * object(function, array, date, ...)
 */

/**
 * NaN 属性代表非数字值的特殊值，该属性用于表示某个值不是数字
 *   可以把Number对象设置为该值，来表示不是数字值
 *  Number.isNaN();
 */

/**
 * 类型检测
 * typeof
 * 注意：typeof null  ? // "object"
 * typeof 一遇null 就失效
 */

// typeof  100  "number"
// typeof true  "boolean"
// typeof function  "function"
//
// typeof (undefined)  "undefined"
// typeof new Object()  "object"
// typeof [1, 2]  "object"
// typeof NaN  "number"

/**
 * 数据类型转换
 * 隐式类型转换:
 * var a = 32 +32;
 * typeof a;
 *
 * 可以隐式转换成string类型，也可以用做-拼接
 * var b = 32 + "1";
 * typeof b;
 *
 * 可以隐式的转换成number类型
 * var c = "32" - 0;
 *
 * 显示的转换
 * var d = parseInt("123");
 * typeof d;
 *
 * parseFloat("123.123")
 */

/**
 * instanceof 是基于原型链的，一般判断对象类型
 * var obj = {};
 * obj instanceof Object
 *
 *  var arr = [1, 2];
 *  arr instanceof Array
 *
 * function Person() {}
   function Student() {}
   Student.prototype = new Person()
   Student.prototype.contructor = Student

   var bosn = new Student()
   bosn instanceof Strudent   // true
   var one = new Person()
   one instanceof Person    // true

   one instanceof Student   // false
   bosn instanceof Person  // true
   缺点：在不同的iframe和window检测时失效
 */

/**
 * 严格等于 ===, !==
 * 特殊：null == undefined // true
 */

/**
 * 包装对象
 * var str = "string"; // 不应该有属性和方法？？比如length属性
    st.t = 10; // undefined
    实际上js中字符串，当成对象使用时，js会把基本类型转化成包装类型。
    但是转化完后，会销毁掉这次转换。
    var strObj = new String("string");
 */
