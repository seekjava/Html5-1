/**
 * 数组
 */
// 数组是值的有序集合。每个值叫做元素，每个元素在数组中都有数字位置编号，也叫索引。
// js中的数组是弱类型的，数组中可以含有不同类型的元素。
// 数组元素甚至可以是对象或者其他数组。
// 是一种基于字面量的创建方式

var arr = [1, true, , null, undefined, {
    x: 1
  },
  [1, 2, 3]
];
arr[3]; // null

var bat = ['baidu', 'alibaba', 'tencent'];
var arrInArr = [
  [1, 2],
  [3, 4]
];
var arr = [, , 12]; // 代表着数组中有两个undefined
arr.length; // 3

// 创建数组-  new array
// 可以使用构造器的方式创建
new Array(4294967295) // 数组的最大长度
var arr = new Array();
var arr1 = new Array(100); // undefined * 100
var arr2 = new Array(true, false, null, 1, 2, "hi");
//字面量的方式和使用构造器的方式创建是等价的。


var arr = [];
arr[0] = 1;
arr[1] = 2;
shift / unshift
push / pop // 增删


// es6
arr.forEach((item) => {
  console.log('----->', item);
});

// 数组迭代
var i = 0,
  n = 10;
var arr = [1, 2, 3, 4, 5];
for (; i < n; i++) {
  console.log(arr[i]); // 1,2,3,4,5
}
Array.prototype.x = 'inherited';
for (i in arr) {
  // 需要注意数组也是对象
  // 如果家在array原型上一个属性，也是可以使用对象上
  // forin的方式遍历出来的
  console.log(arr[i]);
}

/**
 * 之前的都是prototype上的，所以每个元素直接可以使用，
 * isArray是array构造器上的属性，我们必须用Array构造器.isArray 的方式进行调用
 * 判断一个对象是不是数组，如果是返回true
 */
Array.isArray([]); // true

[] instanceof Array; // true
