# 红包算法  
发红包的问题  
    发红包的(1人),收红包的(n)  

    典型的计算问题,运算的公式或者过程的抽象,  

算法规则  
    
    1. 随机金额 Math.random()  
    2. 所有人抢到的金额之和等于红包金额  
    3. 快速的将红包进行随机 并且不能超过红包总金额
    后台实现：每个人手里的钱 一开始都是红包的平均数  
        在已有的金额中随机给左手边的人
        总数减去给的钱，就是给右手边的人的钱