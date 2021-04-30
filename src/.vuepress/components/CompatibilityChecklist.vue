<template>
	<span>

  <div style="margin-top: 20px">
    <el-radio-group v-model="radio1" size="mini">
      <el-radio-button label="Yes" class="success"></el-radio-button>
      <el-radio-button label="Maybe" class="info"></el-radio-button>
      <el-radio-button label="No" class="danger"></el-radio-button>
    </el-radio-group>
	<span>The source is not overly encrypted</span>
  </div>

  <div style="margin-top: 20px">
    <el-radio-group v-model="radio2" size="mini">
      <el-radio-button label="Yes" class="success"></el-radio-button>
      <el-radio-button label="Maybe" class="info"></el-radio-button>
      <el-radio-button label="No" class="danger"></el-radio-button>
    </el-radio-group>
	<span>All pages url are available in a single page</span>
  </div>

  <div style="margin-top: 20px">
    <el-radio-group v-model="radio3" size="mini">
      <el-radio-button label="Yes" class="success"></el-radio-button>
      <el-radio-button label="Maybe" class="info"></el-radio-button>
      <el-radio-button label="No" class="danger"></el-radio-button>
    </el-radio-group>
	<span>There is a good homepage which lots of discover sections</span>
  </div>

	<br/>
	<br/>
	<br/>

	<div class="result guide">
	<el-progress type="dashboard" :percentage="getPercent()" :color="colors"></el-progress>
	<br/>
	<span>{{text}}</span>
	</div>
  </span>
</template>

<script>
  export default {
    data () {
      return {
        radio1: 'Maybe',
        radio2: 'Maybe',
        radio3: 'Maybe',
        radio4: 'Maybe',
		values: {'Yes': 10, 'Maybe':0, 'No': -10},
		colors: [
          {color: '#f56c6c', percentage: 20},
          {color: '#e6a23c', percentage: 40},
          {color: '#5cb87a', percentage: 60},
          {color: '#1989fa', percentage: 80},
          {color: '#6f7ad3', percentage: 100}
        ],
		text:"There is a good homepage which lots of discover sections"
      };
	  
    },

	methods: {
		getPercent() {
			var result = 50
			result += this.$data.values[this.$data.radio1]
			result += this.$data.values[this.$data.radio2]
			result += this.$data.values[this.$data.radio3]
			result += this.$data.values[this.$data.radio4]
			
			if (result > 50)
			{
				this.$data.text = "This look like a promising website"
			} else 
			{
				this.$data.text = "This could not be a good website for a source"
			}
			
			return result
		},
		
  }

  }
  /*



.el-radio-button__orig-radio:checked
	&.el-radio-button__inner
		background-color: #fcba03;
		border-color: #fcba03;
		

*/
</script>


<style lang="stylus">
/*
label.el-radio-button--medium:nth-child(2) > span:nth-child(2) {
	color: red;
}
.el-radio-button
	color red
	.el-radio-button__inner
		color green
*/

// https://element.eleme.io/#/en-US/component/color
.success
	.el-radio-button__orig-radio:checked + .el-radio-button__inner
		background-color #67C23A
		border-color #67C23A
		box-shadow -1px 0 0 0 #67C23A !important
		color #FFF
	.el-radio-button__inner:hover
		color: #67C23A;
.info
	.el-radio-button__orig-radio:checked + .el-radio-button__inner
		background-color #909399
		border-color #909399
		box-shadow -1px 0 0 0 #909399 !important
		color #FFF
	.el-radio-button__inner:hover
		color: #909399;
.danger
	.el-radio-button__orig-radio:checked + .el-radio-button__inner
		background-color #F56C6C
		border-color #F56C6C
		box-shadow -1px 0 0 0 #F56C6C !important
		color #FFF
	.el-radio-button__inner:hover
		color: #F56C6C;
.result
	text-align center
	padding 1.5rem
</style>