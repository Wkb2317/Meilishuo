export default {
  addCounter(state, payload) {
    payload.count++;
  },
  addToCart(state, payload) {
    state.cartList.push(payload);
  },
  setUserInfo(state, payload){
    state.userInfo = {...payload}
  }

};
