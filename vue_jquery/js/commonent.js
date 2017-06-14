Vue.component('remark',{
  props: ['remark','show'],
  template: `
    <div class="modify-remark">
  	  <input type="text" :value="remark" class="modify-remark__input"/>
  	  <a v-on:click="save()" class="modify-remark__determine">确定</a>
  	  <a v-on:click="change_show()" class="modify-remark__cancel">取消</a>
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