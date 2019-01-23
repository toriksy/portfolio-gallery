var scroll = new SmoothScroll()
new Vue({
  el: '#top',
  methods: {
    scrollTop: function () {
      scroll.animateScroll(0)
    }
  }
})