//参数不限
// js函数很灵活 参数的数量都可以不定
function sum(...args){
    let total=0;
    // console.log(args);
    // arguments 所有的参数
    // arguments只是类数组 是js早期生成的怪胎
    // 没有数组的foreach方法
    // Array.prototype.forEach 可进行如下处理
    Array.from(arguments).forEach(i=>{
        total+=i;
    });
    // for(let i=0,len=args.length;i<len;i++){
    //     total +=args[i];
    //     // console.log(args[i]);
    // }
    // console.log(total) ;
 // arguments只是类数组 是js早期生成的怪胎
    // 没有数组的foreach方法
    // args.forEach(i=>{
    //     total+=i;
    // })
    console.log(total) ;
}
sum(1,2,3);