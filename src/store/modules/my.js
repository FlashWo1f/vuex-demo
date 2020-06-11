// 如果希望你的模块具有更高的封装度和复用性，你可以通过添加 namespaced: true 的方式使其成为带命名空间的模块。
// 当模块被注册后，它的所有 getter、action 及 mutation 都会自动根据模块注册的路径调整命名。例如：

export default {
  state: {
    todoList: [
      { id: 1, title: "睡觉", done: true },
      { id: 2, title: "LOL", done: false },
    ]
  },
  mutations: {
    // modules中的mutations是放在一起的  也都是 this.$store._mutations 对象中
    // 如果这里跟最外层的mutations中的重名的话 那么 this.$store._mutations 对象中的increment将是一个数组 在某个地方commit("increment") 将执行两个地方的increment
    // increment(state) {
    //   console.log("mydstate", state)
    // }
    addTodo(state, payload = {}) {
      const id = state.todoList.length + 1
      const { title } = payload
      state.todoList.push(
        { id, title, done: false }
      )
    },
    editDone(state, { id }) {
      const item = state.todoList.find(item => item.id === id)
      item.done = !item.done
    }
  },
  actions: {
    // Action 提交的是 mutation，而不是直接变更状态。
    // Action 可以包含任意异步操作。
    // 那么 组件 dispatch => actions => mutation 的意义在哪
    triggerStatus(context, payload) {
      // context 本组件内部和root store的state
      context.commit("editDone", payload)
    }
  },
  getters: {
    // getters 定义在模块中  也会在 $store.getters的最外层
    todoList: state => { 
      // 这里面的state => 该模块的state
      console.log("?!!", state); 
      return state.todoList
    }
  }
}