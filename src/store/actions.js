import {
  RECEIVE_HOME,
  RECEIVE_CAROUSEL
} from "./mutation-types"
import {
  reqHome,
  reqCarousel,
} from "../api/index";

export default {
  // 获取首页广告列表
   async getHome({commit},db){
      const result =await reqHome()
      if (result.code === 0) {
        const home = result.data
        commit(RECEIVE_HOME, {home})
        db&&db()
      }
    },

  // 获取首页广告列表
  async getCarousel({commit},db){
    const result =await reqCarousel()
    if (result.code === 0) {
      const carousel = result.data
      commit(RECEIVE_CAROUSEL, {carousel})
      db&&db()
    }
  }
}

