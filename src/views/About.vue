<template>
  <div class="about">
    <h1>This is an about page</h1>
    <input v-model="value" @keydown.enter="handleAddTodo" />
    <ul>
      <li :class="{done: todo.done}" v-for="todo in todos" :key="todo.id" @click="handleTriggerStatus(todo.id)">
        {{ todo.title }}
      </li>
      <!-- {{todoList}} -->
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      value: ""
    }
  },
  computed: {
    todos() {
      return this.$store.getters.todoList
    },
    ...mapGetters(['todoList'])
  },
  methods: {
    handleAddTodo() {
      this.$store.commit("addTodo", { title: this.value })
      this.value = ""
    },
    handleTriggerStatus(id) {
      this.$store.dispatch("triggerStatus", { id })
    }
  },
  mounted() {
    console.log(this)
  }
}
</script>

<style lang="less">
.done {
  text-decoration: line-through red;
}
</style>