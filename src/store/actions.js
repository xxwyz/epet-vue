import {
  RECEIVE_HOME,
  RECEIVE_CAROUSEL,
  RECEIVE_CLASSIFY,
  RECEIVE_BRAND,
} from "./mutation-types"
import {
  reqHome,
  reqCarousel,
  reqClassify,
  reqBrand,
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
  },

  // 获取E宠分类列表
  async getClassify({commit},db){
    const result =await reqClassify()
    if (result.code === 0) {
      const classify = result.data
      commit(RECEIVE_CLASSIFY, {classify})
      db&&db()
    }
  },

  // 获取E宠品牌列表
  async getBrand({commit}){
    const result =await reqBrand()
    if (result.code === 0) {
      const brand = result.data
      commit(RECEIVE_BRAND, {brand})
    }
  },
}

