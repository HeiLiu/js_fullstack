Function.prototype.bind2 = function(context) {
  var self = this
  var args = Array.prototype.slice.call(arguments, 1)
  var fNOP = function () {}
  var bound = function () {
    // console.log('hahahah')
    var bindArgs = Array.prototype.slice.call(arguments)
    // 解决new 与 bind 的冲突 如果 this 为 self => bar 的实例 
    self.apply(this instanceof self ? this : context, args.concat(bindArgs))
  }
  fNOP.prototype = this.prototype
  bound.prototype = new fNOP()
  return bound
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
bindFoo(20)