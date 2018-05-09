{
    function test(x, y = 'world') {
        console.log('默认值', x, y);
    }
    test('hello');
    test('kill', 'bill');
} {
    let x = 'test';

    function test2(x, y = x) {
        console.log('作用域', x, y);

    }
    test2(1, 2);
    test2();
} {
    function test3(...arg) {
        //rest 将所有参数转换为数组，rest参数后面不能再有其他参数
        for (let v of arg) {
            console.log(v);
        }
    }
    test3(1, 2, 3, 4, 5, 6, 7);
} {
    // 扩展运算符 将数组变成离散的值
    console.log(...[1, 2, 3]);
} {
    // 箭头函数
    let arrow = v => v + 2;
    console.log('arrow',arrow(4));
}
{
    // 尾调用
    // 存在函数式编程中 是函数式编程的一个重要概念，就是指某个函数的最后一步是调用另一个函数。
    function tail(x){
        console.log('tail',x);
    }
    function fx(x){
        return tail(x);
    }
    fx(0);
}