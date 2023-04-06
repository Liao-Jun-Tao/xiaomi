<template>
    <div class="user" :class="{'active':state.headerScroll}">
    <van-sticky>
        <header class="header" >

            <div class="header-content" >
                <img src="https://s1.ax1x.com/2023/03/13/pplZaTK.jpg" >
                <div>1234***789</div>
            </div>
            <div class="header-box">
            <div class="vip">会员码</div>
            <div class="header-icon"><van-icon name="qr-invalid" /></div>
            <div class="header-icon"><van-icon name="setting-o" /></div>
            <div class="header-icon mar-right"><van-icon name="chat-o" /></div>
            </div>
        </header>
         </van-sticky>
        <main class="main">
            <div class="account" @click="gotoLogin" v-if="!store.isLogin">
                <div class="portrait"><img class="portrait-photo"  src="https://s1.ax1x.com/2023/03/13/pplZaTK.jpg" ></div>
                <div class="member">登录/注册</div>
                <div class="account-icon"><van-icon name="arrow" /></div>
            </div>

            <div class="account" v-else>
                <div class="portrait"><img class="portrait-photo"  src="https://s1.ax1x.com/2023/03/13/pplZaTK.jpg" ></div>
                <div class="member">123***789</div>
               
            </div>



            <div class="coupon" v-if="!store.isLogin">
                <div class="coupon-item">
                    <div class="coupon-black">--</div>
                    <div>米金</div>
                </div>
                <div class="coupon-item">
                    <div class="coupon-black">--</div>
                    <div>优惠卷</div>
                </div >
                <div class="coupon-item">
                    <div class="coupon-black">--</div>
                    <div>红包</div>
                </div>
                <div class="coupon-item">
                    <div class="coupon-black">--</div>
                    <div>最高额度</div>
                </div>
                <div class="coupon-item">
                    <div class="coupon-black"><van-icon name="pending-payment" /></div>
                    <div>钱包</div>
                </div>
            </div>

            <div class="coupon" v-else>
                <div class="coupon-item">
                    <div class="coupon-black">88</div>
                    <div>米金</div>
                </div>
                <div class="coupon-item">
                    <div class="coupon-black">19</div>
                    <div>优惠卷</div>
                </div >
                <div class="coupon-item">
                    <div class="coupon-black">0</div>
                    <div>红包</div>
                </div>
                <div class="coupon-item">
                    <div class="coupon-black">20w</div>
                    <div>最高额度</div>
                </div>
                <div class="coupon-item">
                    <div class="coupon-black"><van-icon name="pending-payment" /></div>
                    <div>钱包</div>
                </div>
            </div>



            <div class="new-user">
                <img src="https://s1.ax1x.com/2023/03/14/pplmDsA.png"  />
            </div>

            <div class="message">
                <div class="message-collect">
                    <div class="collect">收藏</div>
                    <div class="vertical-line"></div>
                    <div class="collect">足迹</div>
                    <div class="vertical-line"></div>
                    <div class="collect">关注</div>
                </div>
                <div class="transverse-line"></div>

                <div class="order">
                    <div class="payment" @click="gotoPayment">
                        <div class="payment-icon"><van-icon name="pending-payment" /></div>
                        <div class="payment-text">待付款</div>
                    </div>
                    <div class="payment">
                        <div class="payment-icon"><van-icon name="logistics" /></div>
                        <div class="payment-text">待收货</div>
                    </div >
                    <div class="payment">
                        <div class="payment-icon"><van-icon name="chat-o" /></div>
                        <div class="payment-text">待评论</div>
                    </div>
                    <div class="payment">
                        <div class="payment-icon"><van-icon name="exchange" /></div>
                        <div class="payment-text">退换/售后</div>
                    </div>
                    <div class="payment">
                        <div class="payment-icon"><van-icon name="notes-o" /></div>
                        <div class="payment-text">全部订单</div>
                    </div>
                
                </div>
            </div>
            <div class="serve"><img src="https://s1.ax1x.com/2023/03/14/pplu6C8.png" alt=""></div>
            <div class="selection">为你精选</div>
            
        </main>
        <footer><NavBar /></footer>
        
    </div>
</template>

<script setup>
import _ from 'lodash'
import NavBar from "../../components/NavBar.vue";
import { useRouter } from "vue-router";
import { reactive,nextTick } from "vue";
import {useUserStore} from '@/store/user'
const store = useUserStore()
const state = reactive({
    headerScroll:false
})


const router = useRouter()

const gotoLogin = ()=>{
    router.push({
    path: '/login'
  })
}
const gotoPayment=()=>{
router.push({
    path:`/payment`
})

}

nextTick(()=>{
    const handleScroll = () =>{
    let scrollTop = window.pageYOffset
        || document.documentElement.scrollTop
        || document.body.scrollTop
        if(scrollTop > 40) {
            if (!state.headerScroll) {
                state.headerScroll = true
              } 
}
            if (scrollTop < 40){
                if(state.headerScroll) {
                    state.headerScroll = false
                }
            }   
    }
    
    window.addEventListener('scroll',_.throttle(handleScroll,100))
})
</script>

<style lang="stylus" scoped>
@import '../../common/mixin.styl'



.user
    
    background-color #f4f4f4
    wh(100vw,100%)
    &.active 
        .header-content img 
            width .8rem
        .header-content
            color #000
        
    .header
        background-color #fff
        fj()
        align-items center
    .header-content
        margin-left .533333rem
        fj()
        align-items center
        color #fff
        // display none
    .header-content img 
        width 0
    .header-box
       
        fj(flex-end)
        align-items center
        .header-icon
            font-size .48rem
            margin-left .426667rem
        .mar-right
            margin-right .426667rem

    .main
        .account
            background-color #fff
            display flex
            align-items center
            .portrait  
                .portrait-photo
                    wh(1.333333rem,1.333333rem)
                    margin-left .426667rem
                    margin-right .266667rem   
                    border-radius: 50%;    
            .member
                font-size .426667rem
                font-weight 600
            .account-icon
                margin-left .32rem


        .coupon
            padding-bottom .266667rem
            fj(space-around)
            text-align center
            color rgb(147,147,147)
            background-color #fff
            // .coupon-item
            .coupon-item
                .coupon-black
                    text-align center
                    line-height .8rem
                    wh(.666667rem,.8rem)
                    color rgb(54,54,54)
                    font-size .586667rem
        .new-user
            fj(center)
            
        .new-user img
            width 9.44rem


        .message
            background-color #ffffff
            width 9.386667rem
            height 2.933333rem
            position relative
            top .266667rem
            left 50%
            translate -50%  
            border-radius .213333rem
            .message-collect
                display flex
                .vertical-line
                    background-color rgb(174,174,174)
                    width .013333rem
                    height .4rem
                    translate 0 50%
                .collect
                    wh(33%,.8rem)
                    text-align center
                    line-height .8rem
                    color rgb(156,156,156)

        .transverse-line
            width 8.533333rem
            height .013333rem
            position absolute
            left 50%
            translate -50%
            background-color #e6e6e6


        .order
            margin-top .373333rem
            fj(space-around)
            .payment
                text-align center
                .payment-icon
                    font-size .533333rem
                .payment-text
                    color #000
        
        .serve
            fj(center)
            
            
        .serve img
            width 9.44rem
            margin-top .533333rem
            
        .selection
            margin .266667rem .266667rem
            font-size .426667rem
            font-weight 600
        

            
        





</style>