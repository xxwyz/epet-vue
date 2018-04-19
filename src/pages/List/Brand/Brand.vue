<template>
    <div class="brand_content">
      <div class="content" v-for="(brd, index) in brand.brand" :key="index">
        <div class="header_text">
          <span>—— {{brd.title}} ——</span>
        </div>
        <!--品牌图片-->
        <div class="content_photo">
          <ul>
            <li v-for="(lis, index) in brd.list" :key="index">
              <a href="#">
                <div class="photo"><img :src="lis.logo"></div>
                <p class="name">{{lis.name}}</p>
                <p class="country">{{lis.address}}</p>
              </a>
            </li>
          </ul>
        </div>
      </div>

    </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    mounted(){
      this.$store.dispatch('getBrand')
    },
    computed: {
      ...mapState(['brand'])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"
  .brand_content
    width 100%
    height 100%
    position relative
    right 0
    left 0
    top 39px
    bottom 50px
    background #F3F4F5
    .content
      width 100%
      height 100%
      padding-bottom 15px
      margin-bottom 10px
      background #FFFFFF
      .header_text
        width 100%
        height 19px
        padding-top: 20px;
        text-align center
        line-height 19px
        span
          color #999
          font-size 12px
      .content_photo
        display inline-flex
        width 100%
        padding 0 5px
        box-sizing border-box
        ul
          width 100%
          height 100%
          li
            float left
            width 103px
            height 107px
            margin-top: 20px
            padding: 0 9px
            a
              display: block
              width 103px
              height 100%
              box-sizing border-box
              .photo
                width 103px
                height 62px
                text-align center
                padding-top 10px
                border 1px solid #7e8c8d
                box-sizing border-box
                img
                  width 72.9px
                  height 40px
              .name
                width 100%
                height 20px
                text-align center
                line-height 20px
                font-size: 13px
                margin-top 5px
                color #333
                box-sizing border-box
              .country
                width 100%
                font-size: 12px
                text-align center
                color #999
</style>
