<template>
  <div class="list">
    <!--t头部-->
    <div class="header">
      <div class="classify">
        <router-link to="/list/classify" class="cfy"
           :class="{on: '/list/classify'===$route.path}" @click="gotoChange('/list/classify')"
        >分类</router-link>
      </div>
      <div class="brand">
        <router-link to="/list/brand" class='brd'
           :class="{on: '/list/brand'===$route.path}" @click="goto('/list/brand')"
        >品牌</router-link>
      </div>
      <img src="//static.epetbar.com/static_web/wap/src/images/background/search-ico.png">
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    methods: {
      gotoChange (path) {
        this.$router.replace(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .list
    width 100%
    height 100%
    /*头部*/
    .header
      padding 0 15px
      position fixed
      left 0
      right 0
      top 0
      height 40px
      border-bottom 2px solid #cbcbcb
      box-sizing border-box
      background #fff
      z-index 6
      .classify
        float left
        width 50%
        height 100%
        text-align center
        line-height 38px
        box-sizing border-box
        padding-right 5%
        .cfy
          display block
          float right
          margin 0 5px
          font-weight 700
          font-size 13px
          color #333
          &.on
            color #ed4044
            border-bottom 2px solid #ed4044
      .brand
        float right
        width 50%
        height 100%
        text-align center
        line-height 38px
        box-sizing border-box
        padding-left 5%
        .brd
          display block
          float left
          margin 0 5px
          font-size 13px
          font-weight 700
          color #333
          &.on
            color #ed4044
            border-bottom 2px solid #ed4044
      img
        width 14px
        height 14px
        position absolute
        vertical-align middle
        top 12px
        right 15px
</style>
