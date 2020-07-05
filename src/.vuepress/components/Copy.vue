<template>
<div class="copybutton">
<el-button type="primary" plain size="mini" @click="copyLink">Copy</el-button>
</div>
</template>


<script>
import axios from "axios";

export default {
	props: {
		text: {
			type: String,
			required: true,
		},
	},

	data() {
		return {
			
			
		};
	},

	async beforeMount() {
		
		console.log("Copy.vue");
		//this.$data.last_id = data["sources"][data["sources"].length - 1];


	},
methods: {
		
		copyLink(){
			/* Get the text field */
            const el = document.createElement('textarea');
            el.value = this.$props.text;
            el.setAttribute('readonly', '');
            el.style.position = 'absolute';
            el.style.left = '-9999px';
            document.body.appendChild(el);
            el.select();
            document.execCommand('copy');
            document.body.removeChild(el);
            console.log("Test copied");
		},

	},
};
</script>

<style lang="stylus">
.copybutton
    position absolute
    width 100%
    left 0

.el-button
	margin-top 5px
</style>
