<template>
    <div class="shop-wrapper">
        <div class="jiazi">
            <span class="fanhui" @click="$router.go(-1)">返回</span>
            <span>我的书架</span>
        </div>
        <div class="zzk">
            <span>正在看</span>
            <span class="lakai" @click="iszheng = !iszheng">拉开</span>
        </div>
        <ul class="zheng" v-show="iszheng == true">
            <li v-for="(item,index) in book" :key="item.id" v-show="item.state === 0">
                <span class="ming">{{item.name}}</span>
                <p>
                    <a href="javascript:;" @click="gai(item)">标记已读</a>|
                    <a href="javascript:;" @click="del(index)">删除</a>
                </p>
            </li>
        </ul>
        <div class="ywc">
            <span>已完成</span>
            <span class="lakai" @click="iswan = !iswan">拉开</span>
        </div>
        <ol class="wan" v-show="iswan == true">
            <li v-for="(item,index) in book" :key="index" v-show="item.state === 1">
                <span class="ming">{{item.name}}</span>
                <p>
                    <a href="javascript:;" @click="gai(item)">再看一遍</a>|
                    <a href="javascript:;" @click="del(index)">删除</a>
                </p>
            </li>
        </ol>
    </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
    data() {
        return {
            iszheng:false,
            iswan:false
        };
    },
    computed: {
        ...mapState(['book'])
    },

    mounted() {
        
    },

    methods: {
        gai(item) {
            if(item.state === 0) {
                item.state = 1
            }else {
                item.state = 0
            }
        },
        del(index) {
            this.$store.commit('del',index)
        }
    },
};
</script>

<style>
.shop-wrapper {
    width: 500px;
    height: 50px;
    line-height: 50px;
    margin: auto;
}
.jiazi {
    width: 100%;
    background: red;
    color: white;
    text-align: center;
    font-size: 30px;
}
.fanhui {
    font-size: 20px;
    float: left;
    color: skyblue;
    cursor: pointer;
    margin-left: 5px;
}
.zzk {
    margin-top: 10px;
    width: 100%;
    height: 30px;
    background: red;
    color: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 20px;
}
.lakai {
    font-size: 12px;
    cursor: pointer;
}
.ywc {
    margin-top: 5px;
    width: 100%;
    height: 30px;
    background: red;
    color: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 20px;
}
li {
    display: flex;
    justify-content: space-around;
    align-items: center;
}
</style>