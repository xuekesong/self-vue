Vue.component('remark',{
  props: ['remark','show'],
  template: `
    <div class="modify-remark">
  	  <input type="text" :value="remark" class="modify-remark__input"/>
  	  <button v-on:click="save()">保存</button>
  	  <button v-on:click="change_show()">取消</button>
  	</div>
  `,
  methods: {
  	change_show() {
      this.show = false;
  	  this.$emit('show_hide',this.show)
  	},
  	save() {
  	  this.show = false;
  	  this.$emit('show_hide',this.show)
  	  var new_remark = $(".modify-remark__input").val();
  	  $.ajax({
  	    url: './js/new_file.json',
  	    type: 'GET',
  	    data: {
  	   	  "remark": new_remark
  	  	},
  	  	success: function (res) {
  	  	  console.log(res)
  	  	},
  	  	error: function () {
  	  	  	
  	  	}
  	  })
  	}
  }
})