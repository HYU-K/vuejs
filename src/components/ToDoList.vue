<template>
  <div class="ToDoList">
    <input type="text" v-model="newtask" />
    <button @click="tasks.push({ content: newtask, done: false })">add</button>
    <div v-for="(task, index) in tasks" :key="index">
      <input type="checkbox" v-model="task.done" />
      <span :class="{ done: task.done }">{{ task.content }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ToDoList",
  data() {
    return {
      newtask: "",
      tasks: [
        { content: "íijsij", done: false },
        { content: "aa", done: false },
        { content: "avvv", done: false },
        { content: "qqqq", done: false },
        { content: "ppppp", done: false },
      ],
    };
  },
};
</script>

<style scoped>
.done {
  text-decoration: line-through;
}
</style>
