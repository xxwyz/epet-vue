<template>
  <div class="classify_content" v-if="classify.categorys">
    <!--左边列表-->
    <div class="left_list">
        <ul v-if="classify.categorys">
          <li @click="handleList(index)" :class="{on: index === listIndex}" v-for="(category, index) in classify.categorys" :key="index">
            {{category.name}}
          </li>
        </ul>
    </div>
    <!--右边列表 图片-->
    <div class="right_content">
      <div  class="right_list" v-for="(category, index) in classify.categorys[listIndex].cate_list" :key="index">
        <div class="right_list_top" v-if="category.type===0">
          <div class="text">{{category.title}}<img src="../images/quanbu.png"></div>
          <ul>
            <li v-for="(imglist, index) in category.list" :key="index">
              <a href="#">
                <img :src="imglist.photo">
                <p>{{imglist.name}}</p>
              </a>
            </li>
          </ul>
        </div>
        <div class="right_list_bottom" v-if="category.type===2">
          <div class="text">{{category.title}}</div>
          <ul>
            <li v-for="(imglist, index) in category.list" :key="index">
                <a href="#">
                  <div class="img_text">
                    <img :src="imglist.logo">
                  </div>
                  <p>{{imglist.name}}</p>
                </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default {
    data(){
      return{
        listIndex: 0
      }
    },
    mounted () {
      this.$store.dispatch('getClassify', ()=>{
        this.$nextTick(() => {
          let scroll = new BScroll('.left_list', {
            scrollY: true,
            click: true,
          })
        })
      })
    },
    methods:{
      handleList(index){
        this.listIndex = index
      }
    },
    computed: {
      ...mapState(['classify'])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"
  .classify_content
    display inline-flex
    width 100%
    height 100%
    padding-top 39px
    padding-bottom 50px
    .left_list
      position fixed
      height 100%
      border-right: 5px solid #f3f4f5;
      ul
        width 70px
        height 110%
        z-index 9
        li
          padding 15px 0
          border-bottom 1px solid #f3f4f5
          width 70px
          height 50px
          font-size 13px
          text-overflow ellipsis
          white-space nowrap
          overflow hidden
          text-align center
          box-sizing border-box
          &.on
            background #f3f4f5
            color red
    .right_content
      width 300px
      height 100%
      border-top 6px solid #f3f4f5
      margin-left 75px
      .right_list
        width 100%
        height 100%
        padding 5px 5px 20px
        box-sizing border-box
        .right_list_top
          .text
            display block
            color #999
            font-size 12px
            margin-top 10px
            padding-left 5px
            img
              height 10px
              margin-top 2px
              margin-right 5px
              float right
          ul
            width 290px
            height 100%
            overflow hidden
            li
              width 33.3%
              height 116.66px
              padding: 0 5px
              margin-top 10px
              box-sizing border-box
              float left
              a
                width 86.6px
                height 100%
                display block
                img
                  display block
                  width 100%
                p
                  overflow hidden
                  text-overflow ellipsis
                  white-space nowrap
                  height 20px
                  color #333
                  font-size 13px
                  margin-top 10px
                  text-align center
        .right_list_bottom
          .text
            display block
            color #999
            font-size 12px
            margin-top 10px
            padding-left 5px
          ul
            width 290px
            height 100%
            overflow hidden
            li
              width 145px
              height 80px
              padding: 0 5px
              margin-top 10px
              box-sizing border-box
              float left
              a
                width 135px
                height 80px
                display block
                .img_text
                  position relative
                  border 1px solid #f3f4f5
                  text-align center
                  height 55px
                  img
                    position absolute
                    left 0
                    right 0
                    margin 0 auto
                    margin-top 4px
                    height 45px
                    max-width 100%
                p
                  overflow hidden
                  text-overflow ellipsis
                  white-space nowrap
                  height 20px
                  color #333
                  font-size 12px
                  margin-top 5px
                  text-align center

</style>
