<template>
  <div class="hello">
    <div class="list">
      <div class="selected"
        v-for="(task, index) in tasks" 
        :key="index"
        @click="task.active =! task.active"
        :class="{active : task.active}"
      >
        <span>{{ task.content }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tasks: [
        {content: 'íijsij', active: false},
        {content: 'aa', active: false},
        {content: 'avvv', active: false},
        {content: 'qqqq', active: false},
        {content: 'ppppp', active: false},
      ]
    }
  },
}
</script>

<style scoped>
.list {
  display: flex;
}
.selected {
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 6px;
  color: #4f4f4f;
  margin: 0 4px;
}
.active {
    background-color: red;
  }
</style>
