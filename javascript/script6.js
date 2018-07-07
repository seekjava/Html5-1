/**
 * [[class]]: 用来判断对象是什么类型
 */
var toString = Object.prototype.toString;

function getType(o) {
  return toString.call(o).slice(8, -1)
};

toString.call(null); // "[object Null]"
getType(null); //"Null"
getType(1); // "Number

/**
 * [[extensible]] 表示对象是否可以扩展
 */
var obj = {
  x: 1,
  y: 2
};
Object.isExtensible(obj); // true
Object.preventExtensions(obj); // 使obj对象不可新增属性，原属性可改、可删
Object.isExtensible(obj); //false
obj.z = 1;
obj.z; // undefined

// 判断Object是否为空的
var obj = {}
Object.keys(obj).length

// 其他方法
var obj = {
  x: 1,
  y: 2
};
obj.toString(); // "[object, Object]"
obj.toString = function() {
  return this.x + this.y;
}
"Result" + obj; // Result 3
obj.valueOf = function() {
  return this.x + this.y + 100;
} + obj; // 转换为数字
“
Result” + obj; // Result 103
