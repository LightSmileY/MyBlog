import {USERINFO} from './mutation-type'

export default {
  getUserInfo({commit}, data){
    commit(USERINFO, data)
  }
}