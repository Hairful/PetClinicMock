<!-- 悬浮窗 -->
<template>
	<div class="supenpopup"
		:style="{top:`${elTop}px`,left:`${elLeft}px`,width:`${width}rpx`,height:`${height}rpx`,zIndex}"
		@touchmove.prevent.stop="onTouchMove" @touchstart="onTouchStart">
		<!-- 插槽-自定义内容 -->
		<slot></slot>
</div>
</template>
 
<script>
	export default {
		props: {
			//组件高，单位rpx
			height: {
				type: [String, Number],
				default: 100
			},
			//组件宽，单位rpx
			width: {
				type: [String, Number],
				default: 100
			},
			//起始位置距离顶部距离，单位rpx,auto:自动设置，将位于页面最顶端
			top: {
				type: [String, Number],
				default: 'auto'
			},
			//起始位置距离左边距离，单位rpx，auto:自动设置，将位于页面最左边
			left: {
				type: [String, Number],
				default: 'auto'
			},
			//层级
			zIndex: {
				type: Number,
				default: 999
			}
		},
 
		data() {
			return {
				elTop: 0, //组件距离顶部距离
				elLeft: 0, //组件距离左边距离
				windowHeight: 0, //窗口高度
				windowWidth: 0, //窗口宽度
				rate: 0, //px和rpx换算比例
				windowTop: 0, //窗口距离屏幕顶部距离
				startX: 0, //开始移动触摸点x坐标，相对页面左上角
				startY: 0, //开始移动点触摸点y坐标，，相对页面左上角
				startTop: 0, //悬浮框顶部距离顶部距离，小程序相对页面顶部，h5和app相对屏幕顶部
				startLeft: 0, //悬浮窗左边距离页面左边距离
			}
		},
		created() {
				//this.rate = 750 / this.windowWidth;//rpx和px转换比例
                this.rate = 1;
				this.elTop = this.top === 'auto' ? 0 : this.top / this.rate;
				this.elLeft = this.left === 'auto' ? 0 : this.left / this.rate;
		},
		methods: {
			//开始移动
			onTouchStart(e) {
			   //记录开始时候触摸点坐标
				this.startX = e.touches[0].clientX;
				this.startY = e.touches[0].clientY
				
				//记录移动前组件位置
				this.startTop = this.elTop
				this.startLeft = this.elLeft
			},
			//移动中
			onTouchMove(e) {
				let x = e.touches[0].clientX;
				let y = e.touches[0].clientY;
				//忽略触摸屏幕最左边外面
				if (x < 0) {
					x = 0;
				}
                
				//当前组件距离左边位置=开始位置(x轴)+（当前触摸点x坐标-开始移动触摸点x坐标）
				let elLeft = this.startLeft + (x - this.startX);
 
				//悬浮窗右边限制移出屏幕外 this.rate单位换算比例，windowWidth单位px，width单位rpx
				//屏幕宽度-组件宽度=组件最大向左可移动距离（elLeft）
				//可移动范围elLeft值限制在0~（this.windowWidth - this.width / this.rate）范围内
				elLeft = Math.min(elLeft, this.windowWidth - this.width / this.rate)
				this.elLeft = elLeft > 0 ? elLeft : 0
 
				//忽略触摸屏幕最顶部外面
				if (y < 0) {
					y = 0;
				}
				let elTop = this.startTop + (y - this.startY);
 
				//悬浮窗限制移出屏幕底部
				//可移动范围elTop值限制在this.windowTop~（this.windowHeight - this.height / this.rate + this.windowTop）范围内
				elTop = Math.min(elTop, this.windowHeight - this.height / this.rate + this.windowTop)
				//悬浮窗限制移到导航栏上或移出屏幕顶部
				this.elTop = Math.max(elTop, this.windowTop)
 
			},
 
 
		},
 
	}
</script>
 
<style scoped>
	.supenpopup {
		position: fixed;
		z-index: 999;
	}
</style>