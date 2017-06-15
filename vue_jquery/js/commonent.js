Vue.component('vue-remark-modify',{
  props: ['remark', 'ajax_url', 'ajax_data'],
  template: `
    <div class="modify-remark">
      <div class="modify-remark__content">
        <span class="modify-remark__content__value" v-text="remark"></span>
        <a class="modify-remark__content__icon" v-on:click="toggle()">er</a>
      </div>
      <div class="modify-remark__describle" v-show="show_remark">
  	    <input type="text" :value="''" class="modify-remark__input" maxlength="200"/>
  	    <a v-on:click="save()" class="modify-remark__determine">确定</a>
  	    <a v-on:click="change_show()" class="modify-remark__cancel">取消</a>
  	  </div>
    </div>
  `,
  data: function () {
  	return {
  	  show_remark: true
  	}
  },
  methods: {
  	toggle() {
  	  if (true == this.show_remark) {
  	  	this.show_remark = false;
  	  } else {
  	  	this.show_remark = true;
  	  }
  	},
  	change_show() {
      this.show_remark = false;
  	},
  	save() {
  	  this.show_remark = false;
  	  var new_remark = $(".modify-remark__input").val();
  	  $.ajax({
  	    url: this.ajax_url+'?remark=' + new_remark,
  	    type: 'GET',
  	    data: this.ajax_data,
  	  	success(res) {
  	  	  console.log(res)
  	  	},
  	  	error() {
  	  	  	
  	  	}
  	  })
  	}
  }
})

Vue.component('vue-swiper', {
	props: [],
	template: `
	  <div class="swiper-container">
	    <div class="swiper-wrapper">
        <slot></slot>
	    </div>
	        
	    <!-- Add Pagination -->
	    <div class="swiper-pagination"></div>
	  </div>
	`,
	mounted: function (){
		//初始化swiper
		var swiper = new Swiper('.swiper-container', {
	    pagination: '.swiper-pagination',
	    paginationClickable: true,
	    direction: 'vertical', //滑动方向，水平(horizontal)或垂直(vertical)
	    autoplay: 1000,  //自动切换的时间间隔（单位ms），不设定该参数slide不会自动切换。
	    loop: true,  //用于无限循环切换。
	    slidesPerView: 1,  //可以设置为number或者 'auto'则自动根据slides的宽度来设定数量。
	    spaceBetween: 0,  //slide之间的距离（单位px）。
	    effect: 'slide' //slide的切换效果，默认为"slide"（位移切换），可设置为"fade"（淡入）"cube"（方块）"coverflow"（3d流）"flip"（3d翻转）。
	  });
	}
})
	  
Vue.component('vue-count-down', {
	props: [],
	template: `
	  <div id="countdown"></div>
	`,
	mounted: function () {
	  $("#countdown").countdown({
      //活动开始时间 (可采用时间戳 或者 标准日期时间格式 "yyyy/MM/dd HH:mm:ss")
			//优先采取元素的data-stime值(该值只能为时间戳格式)
			startTime: '2017/05/10 17:54:00',//活动结束时间 (可采用时间戳 或者 标准日期时间格式 "yyyy/MM/dd HH:mm:ss")
			//优先采取元素的data-etime值(该值只能为时间戳格式)   
			endTime: '2017/06/11 17:54:00',
			//活动开始前倒计时的修饰
			//可自定义元素,例如"<span>距离活动开始倒计时还有:</span>"   
			beforeStart: '距离活动开始倒计时还有:',
			//活动进行中倒计时的修饰 
			//可自定义元素,例如"<span>距离活动截止还有:</span>" 
			beforeEnd: '距离活动截止还有:',
			//活动结束后的修饰
			//可自定义元素,例如"<span>活动已结束</span>"    
			afterEnd: '亲，活动结束啦，请继续关注哦!',
			//时间格式化(可采用"ddd:hh:mm:ss、 dd:hh:mm:ss、 hh:mm:ss、 mm:ss、 ss"等)     
			format: 'dd:hh:mm:ss',
			//活动结束后的回调函数     
			callback: function() {
			  console.log('亲，活动结束啦，请继续关注哦!');
			}
	  })
	}
})