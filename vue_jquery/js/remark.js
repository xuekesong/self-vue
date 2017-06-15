//备注
var remark_form = new Vue({
  el: '#remark',
  data: {
    remark: '备注'
  },
  methods: {
  	remark_er() {
  	  var self = this;
  	  $.ajax({
  	    url: './js/new_file.json',
  	    type: 'GET',
  	  	success: function (res) {
  	  	  self.remark = res.data.remark;
  	  	  return self.remark;
  	  	},
  	  	error: function () {
  	  	  	
  	  	}
  	  })	
  	}
  }
})
remark_form.remark_er()
