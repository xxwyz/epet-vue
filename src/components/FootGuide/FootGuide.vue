<template>
  <div class="footer_guide border-1px">
    <a href="javascript:;" class="guide_item"
       :class="{on: '/msite'===$route.path}" @click="goto('/msite')">
      <span class="item_icon">
        <i class="iconfont icon-home"></i>
      </span>
      <span>首页</span>
    </a>
    <a href="javascript:;" class="guide_item"
       :class="{on: '/list/classify'===$route.path || '/list/brand' === $route.path}" @click="goto('/list')">
      <span class="item_icon">
        <i class="iconfont icon-chazhaobiaodanliebiao"></i>
      </span>
      <span>分类</span>
    </a>
    <a href="javascript:;" class="guide_item"
       :class="{on: '/order'===$route.path}" @click="goto('/order')">
      <span class="item_icon">
        <i class="iconfont icon-cart"></i>
      </span>
      <span>购物车</span>
    </a>
    <div class="guide_item"
       :class="{on: '/profile'===$route.path}" @click="goto('/profile')">
      <span class="item_icon">
        <i class="iconfont icon-wode"></i>
      </span>
      <span>我的E宠</span>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      goto (path) {
        this.$router.replace(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .footer_guide //footer
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 50px
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      color #999999
      &.on
        color #02a774
      span
        font-size 12px
        margin-top 2px
        margin-bottom 2px
        .iconfont
          font-size 22px
</style>
