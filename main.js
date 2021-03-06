var app = new Vue({
  el: '#root',
  data: {
    index:0,
    imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg',
    arrayImg: [
      './img/1.jpg',
      './img/2.jpg',
      './img/3.jpg',
      './img/4.jpg',
      './img/5.jpg'
    ],
    timer: '',
  },
  //aggiungere questo per rendere lo slide automatico,
  //senza dover premere alcun bottone

  // mounted: function() {
  //   this.startSlide();
  // },

  methods: {
    next: function (e){
      // if (e && e.type == "click") {
      //   clearInterval(this.timer);
      // }
      if (this.index < this.arrayImg.length - 1) {
        this.index ++;
      } else {
        this.index = 0;
      }
    },
    prev: function (){
      if (this.index > 0) {
        this.index --;
      } else {
        this.index = this.arrayImg.length - 1;
      }
    },
    dotSelection: function (index){
      this.index = index;
    },
    //function per fare lo slider automatico
    startSlide: function() {
      // this.timer = setInterval(this.timer);
      // let _self = this
    if (!this.timer) {
      this.timer = setInterval(() => {
        this.next();
      }, 1000);
    } else {
      clearInterval(this.timer);
      this.timer = clearInterval(this.timer);
    }
      // _self.next(true);
   },
    //function per fermare lo slider automatico
  //   stopSlide: function() {
  //   this.timer = clearInterval(this.timer);
  // },
  }

});
