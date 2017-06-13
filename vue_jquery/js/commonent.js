Vue.component('remark',{
  props: ['remark','show'],
  template: `
    <div class="modify-remark">
  	  <input type="text" :value="remark" class="modify-remark__input"/>
  	  <button v-on:click="save()">保存</button>
  	  <button v-on:click="change_show()">取消</button>
  	</div>
  `,
  data: function () {
    return {
  	  hide: true
  	}
  },
  watch: {
  	hide(){
  	  this.$emit('change_show', this.hide);
  	}
  },
  methods: {
  	change_show() {
      $(".modify-remark").hide();
  	},
  	save() {
  	  this.hide != this.hide;
  	  $(".modify-remark").hide();
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