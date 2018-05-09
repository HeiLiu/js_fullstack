{
    // 用symbol声明的值是独一无二的
    let a1 = Symbol();
    let a2 = Symbol();
    console.log(a1===a2);
    let a3 = Symbol.for('a3');
    let a4 = Symbol.for('a3');
    console.log(a4===a3);
}
{

    let a1 = Symbol.for('abc');
    let obj ={
        [a1]:'123',
         'abc':345,
         'c':456
    }
    console.log(obj);

    Object.getOwnPropertySymbols(obj).forEach(function(item){
        console.log(obj[item]);
    })
}
