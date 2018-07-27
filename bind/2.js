// Function 顶级对象 
Function.prototype.bind2 = function (context) {
  // console.log(this.arguments)
  var args = Array.prototype.slice.call(arguments, 1)
  // this
  var that = this
  // console.log(context)
  return function() {
    // bar 是谁
    // console.log(this) 返回的闭包中的this指向全局
    const bindArgs = Array.prototype.slice.call(arguments)
    that.apply(this instanceof that? this : context , args.concat(bindArgs))
    // console.log(context)
  }
}


var value = 2
var foo = {
  value: 1
}

function bar(name, age) {
  this.habit = 'sleepping'
  console.log(this.value)
  console.log(name)
  console.log(age)
}
bar.prototype.friend = 'kevin'
var bindFoo = bar.bind(foo, 'daisy')
var obj = new bindFoo('18')
console.log(obj.habit)
console.log(obj.friend)
//  bindFoo(20)

// var foo = {
//   value: 1
// }

// function bar(name, age) {
//   console.log(this.value)
//   console.log(name)
//   console.log(age)
// }

// // bar.call(foo)

// var baa = bar.bind2(foo, 'hah')
// baa(20)


// bind 执行之后返回一个新的函数 => 高阶函数（函数的形参或者返回是一个函数）
// return function() { bar() }
// this的指向？ 利用闭包