{
    let list = new Set();
    list.add(3);
    list.add(7);
    console.log('size',list.size);
}
{
    // set 在初始化的时候赋值
    let arr = [1,3,4,5];
    let list = new Set(arr);
}
{
    // set中的元素必须是唯一 添加重复的元素不会生效
    // 利用这个特性可以去重
    let list = new Set();
    list.add(1);
    list.add(2);
    list.add(3);
    // 重复添加不会生效
    list.add(3);
    console.log(list);

    // 去重应用 但不会做数据类型的转化
    let arr = [1,2,3,4,5,3,2];
    let arr1 = [1,2,3,4,'2'];
    let list2 = new Set(arr);
    console.log(list2);
}

{

    // 删除 属于 清空
    let arr = ['add','delete','clear','hads'];
    let list = new Set(arr);
    console.log('delete',list.delete('add'),list);
    console.log('has',list.has('add'));
    console.log('list',list.clear(),list);
}

{

    // 读取Set 值 三种遍历都是得到value
    let arr = ['add','delete','clear','hads'];
    let list = new Set(arr);
    for(let key of list.keys()){
        console.log('key',key);
    } 
    for(let value of list.values()){
        console.log('value',value);
    }  
    for(let value of list){
        console.log('list',value);
    }  
    //  利用entries()方法
    for(let value of list.entries()){
        console.log('entries',value);
    }   
    // for-each遍历
    list.forEach(item=>console.log(item)); 
}
{
    // weakSet 和set支持的数据类型不一样
    // WeakSet 只能是对象 Set
    // WeakSet 对象是弱引用
    //  在weakset中添加对象只是添加的一个对象的引用
    // 没有clear方法 没有size属性 不能遍历
    let weakList = new WeakSet();
    let arg ={
    }
    weakList.add(arg);
    // weakList.forEach(item=>console.log(item)); 
}
{
    // map
    let map = new Map();
    let arr = [1,2,3];
    // map的key值可以是任何类型
    map.set(arr,[4,5,6]);
    console.log('map',map,map.get(arr));
}
{
    let map = new Map([['a',123],['b',456]]); 
    console.log('map args',map);
    console.log('size',map.size);
    console.log('delete',map.delete('a'),map);
    console.log('has',map.has('a'));
    // console.log('clear',map.clear(),map);
    // map的遍历和set的一模一样
    // 匹配变量的解构赋值
    for(let [key,value] of map){
        console.log(key + ' is ' + value);
    }
    // 如果只想获取键值 或者只想获取value 可以如下进行编辑
    for(let [key] of map){
        console.log(key);
    }
    for(let [value] of map){
        console.log(value);
    }
}
{
    // WeakMap 和Map的区别 与weakset 和Set的区别一模一样
    let weakMap = new WeakMap();
    let o ={}
    weakMap.set(o,123);
    console.log(weakMap.get(o));
}