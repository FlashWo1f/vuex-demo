<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    {{ count }}

    <button @click="handleClickCount"> click me </button>
    {{ text }}
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { mapState } from 'vuex'
export default {
  name: 'Home',
  data() {
    return {
      // count: 0
    }
  },
  // 当一个组件需要获取多个状态时候，将这些状态都声明为计算属性会有些重复和冗余。为了解决这个问题，我们可以使用 mapState 辅助函数帮助我们生成计算属性，让你少按几次键：
  // https://vuex.vuejs.org/zh/guide/state.html
  computed: {
    count() {
      return this.$store.state.count
    },
    ...mapState({
      count: state => state.count,
      text: state => state.text
    })
  },
  components: {
    HelloWorld
  },
  methods: {
    handleClickCount() {
      // 组件的 methods 中提交 mutation
      this.$store.commit('increment')
    }
  },
  mounted() {
    console.log(this)
  }
}
</script>
