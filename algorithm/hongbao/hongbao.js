// es6 class关键字新增
class RandomHongBao {
    constructor(num) {
        // 金额要进行验证是否合法
        this.num = this.getNum(num);
        // 得到一确定的小数位数的数
        try {
            // 数值的小数长度
            this.multiple = this.num.toString().split('.')[1].length;
        } catch (e) {
            this.multiple = 0;
        }
        // 通过小数的位数 用Math.pow将小数放大
        this.calNum = this.num * Math.pow(10, this.multiple);
        // this.num.toString().split('.');
        // 我的解决方案
        // var dot=this.num.toString().lastIndexOf('.')-1;
        // console.log(dot);

    }
    getNum(num, defaultNum = 0) {
        return this.isNumber(num) ? num : defaultNum;
    }
    isNumber(num) {
        // 各种可能出问题的，排除各种会出问题的可能性
        // number化数值化 +num 将num更加的合规矩
        // 挡掉一下一堆妖魔鬼怪money 0000 .123 0.1230
        let number = +num;
        // NaN: not a number
        // NaN的typeof任然是number 
        // console.log(typeof number);
        if ((number - num) !== 0) {
            return false;
        }
        if (number === num) {
            return true;
        }
        if (typeof num === 'string') {
            return false;
        }
        return true;
    }
    split(n, precision) {
        // 人数 n 精确度 precision
        // this.num 原金额
        // this.calNum 如果是小数 放大以后的金额
        // 偷偷的先等分一下
        let arr = this.average(n, precision);
        console.log(arr);
        // 随机性 把手里的钱再变化一下
        // 三人同行为一单位 产生几次随机 把钱分给左右的人 ，形成环，数据结构 链表
        let arrResult = arr;
        for (let i = 0, len = arr.length; i < len; i++) {
            let item = arr[i];
            // 产生第一次随机 生成要分出去给左右两边的人的钱 再从这里里面随机出给左右两边的钱            let num =Math.floor(Math.random()*item);
            let num = Math.floor(Math.random()*item);
            let numLeft = Math.floor(Math.random() * num);
            let numRight = num - numLeft;
            arrResult[i] -= num;
            // 边界问题
            let iLeft = i === 0 ? (arr.length - 1) : i - 1;
            let iRight = i === (arr.length - 1) ? 0 : i + 1;
            arrResult[iLeft] += numLeft;
            arrResult[iRight] += numRight;
        }
        return arrResult;
    }

    average(n, precision) {
        // 整除
        let avg = Math.floor(this.calNum / n);
        // 余数
        let rest = this.calNum % n;
        // rest + avg *n =this.calNum 放大后的总金额
        // 怎么将rest在数组里平分掉
        console.log(rest);
        let result = Array(n).fill(avg);
        // 多余的钱填充间隔 隔多少个人发一次1 
        let gap = Math.round((n - rest) / rest) + 1;
        let index = 0;
        while (rest > 0) {
            index = (--rest) * gap; //哪个位置得到1
            result[index >= n ? (n - 1) : index]++;
        }
        //将放大后分的平均值 缩回放大前
        return result.map(item => {
            return (item / Math.pow(10, this.multiple));
        })
    }
}
// 200 =>总金额
// split() 发给26个人 红包金额的精确度 2
const hongbao = new RandomHongBao(100);
console.log(hongbao.split(10, 0));