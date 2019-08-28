import {USERINFO} from './mutation-type'

export default {
  [USERINFO](state, data){
    state.userInfo = data;
    console.log("用户资料获取成功");
  }
}
