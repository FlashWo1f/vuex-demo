import Vue from 'vue'
import Vuex from 'vuex'
const path = require("path");

Vue.use(Vuex)
const files = require.context("./modules", false, /\.js$/);
let modules = {};
files.keys().forEach(key => {
  let name = path.basename(key, ".js");
  modules[name] = files(key).default || files(key);
});
export default new Vuex.Store({
  state: {
    count: 0,
    text: "我是你哥哥"
  },
  mutations: {
    // mutation 必须是同步函数 why
    // 现在想象，我们正在 debug 一个 app 并且观察 devtool 中的 mutation 日志。每一条 mutation 被记录，devtools 都需要捕捉到前一状态和后一状态的快照。
    // 然而，在上面的例子中 mutation 中的异步函数中的回调让这不可能完成：
    // 因为当 mutation 触发的时候，回调函数还没有被调用，devtools 不知道什么时候回调函数实际上被调用——实质上任何在回调函数中进行的状态的改变都是不可追踪的。
    increment(state) {
      state.count ++
    }
  },
  actions: {
  },
  modules
})
