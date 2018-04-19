import Vue from 'vue'
import {
  RECEIVE_HOME,
  RECEIVE_CAROUSEL,
  RECEIVE_CLASSIFY,
  RECEIVE_BRAND,
} from "./mutation-types";

export default {
  [RECEIVE_HOME](state,{home}){
    state.home = home
  },
  [RECEIVE_CAROUSEL](state,{carousel}){
    state.carousel = carousel
  },
  [RECEIVE_CLASSIFY](state,{classify}){
    state.classify = classify
  },
  [RECEIVE_BRAND](state,{brand}){
    state.brand = brand
  }
}
