// import Vue from 'vue'
// import App from './App.vue'

// Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')

new Vue({
  el: '#example-3',
  data: {
    checkedNames: []
  }
});

var example1 = new Vue({
  el: '#example-1',
  data: {
    arrUser: [
      {mail: 'abc1@gmail.com', isActive: true},
      {mail: 'abc2@gmail.com', isActive: false},
      {mail: 'abc3@gmail.com', isActive: true},
      {mail: 'abc4@gmail.com', isActive: false},
      {mail: 'abc5@gmail.com', isActive: false}
    ],

    scores: {
      Cà : 9,
      Trà : 8,
      Bò : 7,
    },

    items: [
      {
        name: 'Cà phê',
        detail: 'Cà phê là một loại thức uống được ủ từ hạt cà phê rang, lấy từ quả của cây cà phê. Các giống cây cà phê được bắt nguồn từ vùng nhiệt đới châu Phi và các vùng Madagascar, Comoros, Mauritius và Réunion trên các khu vực thuộc đường xích đạo.'
      },
      {
        name: 'Trà đặc',
        detail: '- Uống trà đặc: Trà đặc đồng nghĩa với lượng tanin rất cao. Khi thường xuyên nạp tanin với lượng lớn sẽ dẫn tới thiếu vitamin B, làm co thắt niêm mạc dạ dày, gây kết tủa protein, ảnh hưởng đến chức năng tiêu hóa. Trà đặc còn làm giảm khả năng hấp thụ chất sắt trong thức ăn, lâu ngày dẫn đến bệnh thiếu máu.11 thg 4, 2020'
      },
      {
        name: 'Cà phê',
        detail: 'Cà phê là một loại thức uống được ủ từ hạt cà phê rang, lấy từ quả của cây cà phê. Các giống cây cà phê được bắt nguồn từ vùng nhiệt đới châu Phi và các vùng Madagascar, Comoros, Mauritius và Réunion trên các khu vực thuộc đường xích đạo.'
      },
      {
        name: 'Trà đặc',
        detail: '- Uống trà đặc: Trà đặc đồng nghĩa với lượng tanin rất cao. Khi thường xuyên nạp tanin với lượng lớn sẽ dẫn tới thiếu vitamin B, làm co thắt niêm mạc dạ dày, gây kết tủa protein, ảnh hưởng đến chức năng tiêu hóa. Trà đặc còn làm giảm khả năng hấp thụ chất sắt trong thức ăn, lâu ngày dẫn đến bệnh thiếu máu.11 thg 4, 2020'
      },
      {
        name: 'Cà phê',
        detail: 'Cà phê là một loại thức uống được ủ từ hạt cà phê rang, lấy từ quả của cây cà phê. Các giống cây cà phê được bắt nguồn từ vùng nhiệt đới châu Phi và các vùng Madagascar, Comoros, Mauritius và Réunion trên các khu vực thuộc đường xích đạo.'
      },
      {
        name: 'Trà đặc',
        detail: '- Uống trà đặc: Trà đặc đồng nghĩa với lượng tanin rất cao. Khi thường xuyên nạp tanin với lượng lớn sẽ dẫn tới thiếu vitamin B, làm co thắt niêm mạc dạ dày, gây kết tủa protein, ảnh hưởng đến chức năng tiêu hóa. Trà đặc còn làm giảm khả năng hấp thụ chất sắt trong thức ăn, lâu ngày dẫn đến bệnh thiếu máu.11 thg 4, 2020'
      },
      {
        name: 'Cà phê',
        detail: 'Cà phê là một loại thức uống được ủ từ hạt cà phê rang, lấy từ quả của cây cà phê. Các giống cây cà phê được bắt nguồn từ vùng nhiệt đới châu Phi và các vùng Madagascar, Comoros, Mauritius và Réunion trên các khu vực thuộc đường xích đạo.'
      },
      {
        name: 'Trà đặc',
        detail: '- Uống trà đặc: Trà đặc đồng nghĩa với lượng tanin rất cao. Khi thường xuyên nạp tanin với lượng lớn sẽ dẫn tới thiếu vitamin B, làm co thắt niêm mạc dạ dày, gây kết tủa protein, ảnh hưởng đến chức năng tiêu hóa. Trà đặc còn làm giảm khả năng hấp thụ chất sắt trong thức ăn, lâu ngày dẫn đến bệnh thiếu máu.11 thg 4, 2020'
      },
      {
        name: 'Bò húc',
        detail: 'Red Bull còn có tên gọi khác là Bò húc, Bò cụng. Đây là loại nước uống có nguồn gốc từ Thái Lan. Ban đầu, Red Bull là loại nước uống dinh dưỡng, không có gas sau được các nhà đầu tư nước ngoài phát triển thành nước tăng lực và lan rộng ra toàn thế giới.',
      }
    ]
  }
});

var vueInstance = new Vue({
  el: '#app',
  data: {
    title: 'dituuahsha adjaiosj',
    check: false,
    price: '20000',
    sale: '0.4',
    url: 'https://www.youtube.com/watch?v=AHPkqa5ZaN0&list=PLv6GftO355AtDjStqeyXvhA1oRLuhvJWf&index=6',
    count: 0,
    clientX: 0,
    clientY: 0,
    message: 'Hello world',
    a: 0,
    b: 0,
    number: 20,
    firsrName:'',
    about:'',
    isActive: false,
    isError: true,
    activeColor: 'red',
    fontSize: 36,
    bgsz: 'cover',
    bg: 'https://img5.thuthuatphanmem.vn/uploads/2021/08/25/background-3d-4k_085529380.jpg',
    tabSelected: 'login',
    selectedProduct: 1,
    listproductDetail: [
      {
        image: '../assets/red.jpg',
        quantity: 2,
        textColor: 'Màu đỏ',
      },{
        image: '../assets/yellow.jpg',
        quantity: 0,
        textColor: 'Màu vàng',
      },{
        image: '../assets/blue.png',
        quantity: 8,
        textColor: 'Màu xanh',
      }
    ],

    listDeas: [
      'chất liệu: .....................',
      'blalaal: .....................',
      'okkokokokk: .....................',
      'plal sllslslsl: .....................',
    ],

    cartnumber: 0,
  },

  methods: {
    handleCick() {
      console.log('click', this);
      this.count += 1;
    },

    handmousemove(e) {
      console.log('mousemove', this);
      this.clientX = e.clientX;
      this.clientY = e.clientY;
    },

    handSubmitForm(e) {
      console.log(e);
    },

    say: function(text) {
      return "hello " + text;
    },

    changleActive() {
      this.isActive = ! this.isActive;
    },

    changleError() {
      this.isError = ! this.isError;
    },

    formatOriginalPrice() {
      var number = this.price;
      return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(number);
    },

    formatFinalPrice() {
      var number = this.price - this.sale * this.price;
      return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(number);
    },

    changletab(tab) {
      this.tabSelected = tab;
    },

    handerclickColor(index) {
      this.selectedProduct = index;
    },

    AddToCart(e) {
      if(this.cartnumber + 1 > this.getProducts.quantity) {
        alert('Số lượng không đủ =))))');
      }
      else {
        this.cartnumber = this.cartnumber + 1;
      }
      console.log(e.target)
    }
  },

  computed: {
    reversedMessage: function () {
      return this.message.split(' ').reverse().join(' ')
    },

    addA() {
      console.log('addA run');
      return this.a + this.number
    },

    addB() {
      console.log('addB run');
      return this.b + this.number
    },

    ojbclass: function() {
      return {
        active: this.isActive,
        error: this.isError
      }
    },

    objectStyle: function() {
      return {
        backgroundImage: 'url(' + this.bg +')',
        backgroundSize: 'cover',
      }
    },

    getProducts() {
      let index = this.selectedProduct;
      return this.listproductDetail[index];
    }
  }
});

console.log(vueInstance);


setTimeout (() => {
  vueInstance.title = '12132131321321'
}, 3000);