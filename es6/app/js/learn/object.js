{
    // 简洁表达式
     let o =9;
     let k = 8;
     let es5 = {
         o:o,
         k:k
     };
     let es6 ={
         o,k
     };
     console.log(es5,es6);
     let es5_method ={
         hello:function(){
             console.log('hello es5');
         }
     };
     let ese6_method={
         hello(){
             console.log('hello es6');
         }
     }
     es5_method.hello();
     ese6_method.hello();
}