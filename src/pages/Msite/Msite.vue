<template>
  <div class="home">
    <!-- 搜索导航 -->
    <div class="header">
      <!-- 搜索 -->
      <div class="header-top">
        <div class="header-address">
          <span>狗狗</span>
          <span>|</span>
          <span>北京</span>
          <span class="item_icon">
            <i class="iconfont icon-xiala"></i>
         </span>
        </div>
        <div class="header_search">
          <input type="text" placeholder="搜索商品和品牌">
          <span class="item_icon">
            <i class="iconfont icon-sousuo"></i>
          </span>
        </div>
        <div class="header-category">
          <span class="item_icon">
            <i class="iconfont icon-xiaoxi"></i>
          </span>
        </div>
      </div>
      <!-- 导航 -->
      <div class="header_nav">
        <ul v-if="home.menus">
          <li @click="handleNav(index)" :class="{on:index === navIndex}" v-for="(menu, index) in home.menus" :key="index">
            <span>{{menu.menu_name}}</span>
          </li>
        </ul>
      </div>
    </div>
    <!-- 内容 -->
    <div class="wrap" v-if="carousel.data">
      <!-- 中间图片区 -->
      <div class="content">
        <!-- 轮播 -->
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(urls,index) in carousel.data['1'].value">
              <a href="javascript:;">
                <img :src="urls.image">
              </a>
            </div>
          </div>
          <!-- Add Pagination -->
          <div class="swiper-pagination"></div>
        </div>
        <!-- 小图标列表 -->
        <div class="list" v-if="home.datas">
          <div class="small_icon">
            <img v-for="(menu, index) in home.datas[1].menus" :key="index"
              :src="menu.image">
          </div>
        </div>
        <!-- 新人专享 -->
        <div class="banner">
          <a href="javascript:;">
            <img src="https://img2.epetbar.com/nowater/2017-12/18/10/5a3f9a270c73b55bd2525b0578e47782.gif">
          </a>
        </div>
        <!-- 每日疯抢 -->
        <div class="discounts">
          <div class="discounts_tit">
            <div class="title_img">
              <img src="https://static.epetbar.com/static_wap/appmall/main/new_index_icon_suprice.png?version=03">
            </div>
            <div class="title_text">下一场开始</div>
            <div class="time">
              <span class="time1_1">08</span>
              <span class="time_mao">:</span>
              <span class="time1_1">00</span>
            </div>
            <div class="more">
              <img src="https://img2.epetbar.com/nowater/2018-02/02/12/0e7b95a6cae2f593c0277eac64f94794.png">
            </div>
          </div>
          <div class="discounts_pro">
            <ul class="discounts_list">
              <li class="list_item" v-for="(good, index) in carousel.data['3'].goods" :key="index">
                <img :src="good.image.image">
                <span class="new">￥{{good.sale_price}}</span>
                <span class="old">{{good.little_price}}</span>
              </li>
            </ul>
          </div>
        </div>
        <!-- 线 -->
        <div class="page_line"></div>
        <!-- 三张图片 -->
        <div class="three-pic">
          <img src="https://img2.epetbar.com/nowater/2017-12/13/09/1ec9379f83eb421db9a09195c9594e29.jpg@!water">
          <div class="three-pic_right">
            <img src="https://img2.epetbar.com/nowater/2017-12/13/10/35bb7f3bd146cb9a9e74a935803f0d9a.jpg@!water">
            <img src="https://img2.epetbar.com/nowater/2017-12/19/13/62a49af47aa7f713fc0ac0c9b9657e33.jpg@!water">
          </div>
        </div>
        <!-- 线 -->
        <div class="page_line"></div>
        <div class="default_bg">
            <img src="https://img2.epetbar.com/nowater/2018-04/13/10/4ab786b5e5c592c05e13c7f6b780b75b.jpg@!water" lazy="loaded" style="height: 160px;">
        </div>
        <div class="page_line"></div>
        <!-- 潮品视频 -->
        <div class="shop_video">
          <div class="shop_left">
            <img src="https://img2.epetbar.com/nowater/2017-12/20/15/38688d8d92c7da7aae64eda8b8bb3a94.jpg">
          </div>
          <div class="shop_right">
            <img src="https://img2.epetbar.com/nowater/2017-12/20/15/0855ecf27a6ca47b32170caab2503ddd.jpg">
          </div>
        </div>
        <div class="fashion">
          <a href="javascript:;">
            <div class="fashion_video">
              <img src="https://img1.epetbar.com/2018-04/15/22/822b52d6f9a909d5e427efe9cef5a91e.jpg?x-oss-process=style/waterfall&$1=500">
              <img class="play_icon" src="./bofang.png">
            </div>
            <div class="fashion_text">
              <span class="text">SodaPup 易拉罐漏食狗玩具 口感软弹洁牙护牙</span>
              <div class="yan_icon">
                <span class="item_icon">
                  <i class="iconfont icon-yanjing"></i>
                </span>
                <span>1699</span>
                <span class="shu_gang">|</span>
                <span>01:29</span>
              </div>
            </div>
          </a>
        </div>
        <!-- 分割 -->
        <div class="page_line"></div>
        <!-- 四张小图 -->
        <div class="four_pic">
          <div class="four_pic_zong" >
            <img src="https://img2.epetbar.com/nowater/2018-02/05/14/4c32811744e04f6b63632b42a0d5325d.jpg@!water">
            <img src="https://img2.epetbar.com/nowater/2018-02/05/14/4c32811744e04f6b63632b42a0d5325d.jpg@!water">
          </div>
          <div class="four_pic_zong">
            <img src="https://img2.epetbar.com/nowater/2018-02/05/14/4c32811744e04f6b63632b42a0d5325d.jpg@!water">
            <img src="https://img2.epetbar.com/nowater/2018-02/05/14/4c32811744e04f6b63632b42a0d5325d.jpg@!water">
          </div>
        </div>
        <!-- 分割 -->
        <div class="page_line"></div>
        <!-- 品牌特卖 -->
        <div class="shop_video">
          <div class="shop_left">
            <img src="https://img2.epetbar.com/nowater/2017-12/13/13/11acf905ca327ed7aae8f9b4851850a0.jpg">
          </div>
          <div class="shop_right">
            <img src="https://img2.epetbar.com/nowater/2017-12/20/15/0855ecf27a6ca47b32170caab2503ddd.jpg">
          </div>
        </div>
        <!-- 品牌特卖列表 -->
        <div class="brand_list">
          <ul class="list">
            <li v-for="(image, index) in home.images" :key="index">
              <img :src="image">
              <div class="page_line"></div>
            </li>

          </ul>
        </div>
        <!-- 萌爪 -->
        <div class="shop_video">
          <div class="shop_left">
            <img src="https://img2.epetbar.com/nowater/2018-02/07/10/79d53b0ab1c8a630802d74b5beb0a632.jpg">
          </div>
          <div class="shop_right">
            <img src="https://img2.epetbar.com/nowater/2017-12/20/15/0855ecf27a6ca47b32170caab2503ddd.jpg">
          </div>
        </div>
        <!-- 轮播 -->
        <div class="swiper-container">
          <div class="swiper-wrapper" v-if="home.datas">
            <div class="swiper-slide" v-for="(urls2, index) in home.datas[44].value">
              <a href="javascript:;">
                <img :src="urls2.image">
              </a>
            </div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
        <div class="page_line"></div>
        <!-- 萌宠说 -->
        <div class="shop_video">
          <div class="shop_left">
            <img src="https://img2.epetbar.com/nowater/2017-12/13/14/77c0017136e51145788b7607a3a0914c.jpg">
          </div>
          <div class="shop_right">
            <img src="https://img2.epetbar.com/nowater/2017-12/20/15/0855ecf27a6ca47b32170caab2503ddd.jpg">
          </div>
        </div>
        <div class="fashion">
          <a href="javascript:;">
            <div class="fashion_video">
              <img src="https://img1.epetbar.com/2017-12/13/16/5837d50b4993a5de2aff2b26ce8cf3d5.png?x-oss-process=style/waterfall&$1=500">
              <img class="play_icon" src="./bofang.png">
            </div>
            <div class="fashion_text">
              <span class="text">第3期-汪星人你的大姨妈来了吗？</span>
              <div class="yan_icon">
                <span class="item_icon">
                  <i class="iconfont icon-yanjing"></i>
                </span>
                <span>99917</span>
                <span class="shu_gang">|</span>
                <span>03:00</span>
              </div>
            </div>
          </a>
        </div>
        <div class="page_line"></div>
        <!-- 小剧场 -->
        <div class="shop_video">
          <div class="shop_left">
            <img src="https://img2.epetbar.com/nowater/2017-12/13/13/e747ca83834dbd4d1f9663f11f7bf146.jpg">
          </div>
          <div class="shop_right">
            <img src="https://img2.epetbar.com/nowater/2017-12/20/15/0855ecf27a6ca47b32170caab2503ddd.jpg">
          </div>
        </div>
        <div class="fashion">
          <a href="javascript:;">
            <div class="fashion_video">
              <img src="https://img1.epetbar.com/2018-04/10/16/98507cf93340adddcea4a44701891a4b.png?x-oss-process=style/waterfall&$1=500">
              <img class="play_icon" src="./bofang.png">
            </div>
            <div class="fashion_text">
              <span class="text">一个位德艺双馨老艺术家（指的是就我）的日常</span>
              <div class="yan_icon">
                <span class="item_icon">
                  <i class="iconfont icon-yanjing"></i>
                </span>
                <span>1699</span>
                <span class="shu_gang">|</span>
                <span>01:29</span>
              </div>
            </div>
          </a>
        </div>
        <div class="page_line"></div>
        <!-- 底部图片 -->
        <div class="bottom_pic">
          <img src="https://img2.epetbar.com/nowater/2017-12/13/11/be84f01e893b0e631d8512566eb79117.jpg@!water">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  export default {
    data(){
      return{
        navIndex: 0
      }
    },
    mounted(){
      this.$store.dispatch('getCarousel',()=>{
        this.$nextTick(() => {
          let scroll = new BScroll('.discounts_pro', {
            scrollX: true,
            click: true,
          })
        })
        new Swiper('.swiper-container', {
          loop: true,
          pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true,
          },
          autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          }
        })
      })
      this.$store.dispatch('getHome',()=> {
        this.$nextTick(() => {
          let scroll = new BScroll('.header_nav', {
            scrollX: true,
            click: true,
          })
          new Swiper('.swiper-container', {
            loop: true,
            pagination: {
              el: '.swiper-pagination',
              dynamicBullets: true,
            },
            autoplay: {
              delay: 2500,
              disableOnInteraction: false,
            }
          })
        })
      })
    },

    methods:{
      handleNav(index){
        this.navIndex = index
      }
    },

    computed: {
      ...mapState(['home','carousel'])
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .home
    width 100%
    height  100%
    .header
      height 86px
      background-color white
      position fixed
      top 0
      left 0
      right 0
      overflow hidden
      display flex
      flex-direction column
      justify-content space-between
      z-index 6
      .header-top
        display flex
        height 60px
        align-items center
        justify-content space-around
        color #898989
        .header-address
          width 25%
          margin-left 5px
          display flex
          justify-content space-around
          >span
            font-size 13px
        .header_search
          width 58%
          font-size 13px
          display flex
          >input
            background-color #E9E9E9
            width 100%
            border 0
            height 25px
            border-radius 4px
            color #bcbcbc
            text-indent 10px
          .item_icon
            margin-left -16px
            line-height 25px
            >i
              font-size 12px
      .header_nav
        width 100%
        >ul
          width 525px
          display flex
          >li
            text-align center
            width 74.5px
            &.on
              color green
              border-bottom 3px solid green
            span
              width 74.5px
              text-align center
              font-size 14px
              height 36px
              line-height 36px
              color #666666
    .wrap
      width 100%
      position relative
      left 0
      right 0
      top 86px
      bottom 46px
      .content
        position relative
        margin-bottom 50px
        .swiper-container
          width 100%
          height 180px
          img
            width 100%
            height 100%
      .list
        width 100%
        .small_icon
          width 100%
          display flex
          flex-wrap wrap
          align-items center
          img
            width 20%
            height 90px
      .banner
        width 100%
        height 120px
        img
          width 100%
          height 100%
      .discounts
        width 100%
        overflow hidden
        .discounts_tit
          position relative
          width 100%
          height 20px
          display flex
          justify-content space-between
          align-items center
          padding 10px
          .title_img
            img
              width 85px
          .title_text
            position absolute
            right: 117px
            margin-right 5px
            font-size 13px
          .time
            display flex
            position absolute
            right 69px
            font-size 13px
            .time1_1
              padding 2px
              border 1px solid #ccc
          .more
            position: absolute;
            top: 1px;
            right: -51px;
            img
              width 50%
              margin 0 0 0 auto
        .discounts_pro
          width 100%
          height 130px
          padding-left 5px
          margin-bottom 10px
          .discounts_list
            width 120%
            height 120px
            display flex
            .list_item
              width: 98.5714px;
              margin-right: 10px;
              display flex
              flex-direction column
              justify-content space-around
              align-items center
              img
                width 85px
                height 85px
              .new
                color red
                font-size 14px
                margin-bottom 4px
                margin-top 4px
              .old
                color #7e8c8d
                font-size 14px


      .page_line
        background #f3f4f5
        height 10px
      .currency
        width 100%
        height 250px
        display inline-block
        .currency_a
          width 50%
          img
            width 100%
        .currency_b
          width 30%
          img
            width 100%



      .three-pic
        width 100%
        height 250px
        display flex
        flex-direction row
        img
          width 50%
          height 250px
        .three-pic_right
          width 100%
          height 50%
          img
            width 100%
            height 100%
            vertical-align top
      .default_bg
        width 100%
        img
          width 100%
      .shop_video
        overflow hidden
        position relative
        display flex
        justify-content space-between
        align-items center
        height 73px
        padding-top 10px
        padding-bottom 5px
        .shop_left
          width 50%
          height 100%
          img
            width 100%
            height 100%
            padding-left 10px
        .shop_right
          position absolute
          text-align right
          right 0
          top 9px
          img
            width 60px
            height 55px


      .fashion
        width 100%
        height 268px
        a
          .fashion_video
            position relative
            height 210px
            img
              width 100%
              height 100%
            .play_icon
              position absolute
              left 0
              right 0
              top 0
              bottom 0
              margin auto
              width 40px
              height 40px
          .fashion_text
            height 52px
            color #999
            padding 10px 10px 0 10px
            text-align center
            .text
              font-size 13px
              color #333
            .yan_icon
              display flex
              position absolute
              right 140px
              font-size 13px
              padding 3px
              .shu_gang
                padding 0 3px

      .four_pic
        width 100%
        height 200px
        .four_pic_zong
          display flex
          flex-direction row
          width 50%
          height 50%
          img
            width 100%
            height 100%
      .brand_list
        width 100%
        height 100%
        .list
          width 100%
          height 100%
          li
            width 100%
            height 170px
            img
              width 100%
              height 160px
              vertical-align top
            .page_line
              width 100%
              height 10px
      .bottom_pic
        width 100%
        height 30.5px
        img
          width 100%
          height 100%
</style>
