<template>
    <div class="list">
      <div class="header">
          <div class="classify gg_ys">
            <span class="on">分类</span>
          </div>
          <div class="brand gg_ys">
            <span>品牌</span>
          </div>
          <img src="./images/sousuo.jpg">
      </div>
    </div>
</template>

<script>
    export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .list
    width 100%
    height 100%
    .header
      padding 0 15px
      border-bottom 1px solid #cbcbcb
      position fixed
      left 0
      right 0
      top 0
      height 40px
      z-index 11
      background: #fff
      .classify
        text-align right
        padding-right 5%
        float left
      .brand
        padding-left 5%
        float left
      .gg_ys
        box-sizing border-box
        width 50%
        height 40px
        line-height 40px
        font-size 13px
        font-weight 700
      .span
        display inline-block
        height 40px
        padding 0 4px
        cursor pointer
        &.on
          color #ed4044
          border-bottom 2px solid #ed4044
      img
        width 14px
        height 14px
        position absolute
        vertical-align middle
        top 13px
        right 15px


</style>
