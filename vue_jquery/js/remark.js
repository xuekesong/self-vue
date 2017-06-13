//备注
new Vue({
  el: '#remark',
  data: {
    remark: '备注',
    show: false
  },
  methods: {
    toggle() {
  	  this.show = !this.show;
  	  var self = this;
  	  $.ajax({
  	    url: './js/new_file.json',
  	    type: 'GET',
  	  	success: function (res) {
  	  	  self.remark = res.data.remark;
  	  	},
  	  	error: function () {
  	  	  	
  	  	}
  	  })
  	}
  }
})