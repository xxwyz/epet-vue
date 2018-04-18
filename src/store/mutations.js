import Vue from 'vue'
import {
  RECEIVE_HOME,
  RECEIVE_CAROUSEL,
} from "./mutation-types";

export default {
  [RECEIVE_HOME](state,{home}){
    state.home = home
  },
  [RECEIVE_CAROUSEL](state,{carousel}){
    state.carousel = carousel
  }
}
