<template>
  <div class="">
    {{ TongTien | dauchamphantach }}
    <button @click="TongTien += 20000">buy</button>
  </div>
</template>

<script>
export default {
  name: "TanKing",
  data() {
    return {
      TongTien: 1000000
    }
  },
  

  filters: {
    dauchamphantach: function(sotien){
      return sotien .toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    }
  }
}
</script>

<style scoped>
/*
*/
</style>
