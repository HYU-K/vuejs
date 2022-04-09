// import Vue from 'vue'
// import App from './App.vue'

// Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')



var vueInstance = new Vue({
  el: '#app',
  data: {
    title: 'dituuahsha adjaiosj',
    check: false,
    price: '12000',
    url: 'https://www.youtube.com/watch?v=AHPkqa5ZaN0&list=PLv6GftO355AtDjStqeyXvhA1oRLuhvJWf&index=6'
  },

  methods: {
    say: function(text) {
      return "hello " + text;
    },

    formatPrice() {
      var number = this.price;
      return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(number);
    }
  }
});

console.log(vueInstance);


setTimeout (() => {
  vueInstance.title = '12132131321321'
}, 3000);