<template>
	<div>
		<div v-for="extension in extensions"
        :id="extension.name"
				:key="extension.id"
				class="anchor"
                >


				<div class="extension">
					<a
						:href="`#${extension.name}`"
						aria-hidden="true"
						class="header-anchor"
						>#
					</a>
					<img :src="iconUrl(extension.id, extension.icon)" width="42" />
					<div class="extension-text">
						<div class="upper">
							<span class="bold">{{
								extension.name
							}}</span>
							<Badge :text="'v' + extension.version" />
						</div>
						<div class="down">
							{{ extension.author }}
						</div>
					</div>
					<a
						:href="'paperback:source?id=' + extension.id"
						class="button"
						title="Download APK"
                    >
						<img src="/icons/logo-alt.png" width="10" />
						<span>Install</span>
					</a>
				</div>
            <!--


            <div slot="header" class="clearfix">
                <span>{{extension.name}}</span>
                <Badge :text="'v' + extension.version" style="float: right; padding: 3px 0"/>
            </div>
            

            <el-col :span="4"><img :src="iconUrl(extension.id, extension.icon)" width="42" /></div></el-col>
            
            <span>{{
				extension.author
			}}</span>
            <span>{{
				extension.desc
			}}</span>
            
            -->
        </div>
	</div>
</template>

<script>
import axios from "axios";


const EXTENSION_JSON =
	"https://raw.githubusercontent.com/Paperback-iOS/extensions/gh-pages/versioning.json";

export default {
	data() {
		return {
			extensions: [],
		};
	},

	async beforeMount() {
        const { data } = await axios.get(EXTENSION_JSON);
        console.log(data)
		this.$data.extensions = data["sources"]
	},
methods: {

		iconUrl(extension_id, file_name) {
			return `https://raw.githubusercontent.com/Paperback-iOS/extensions/gh-pages/${extension_id}/includes/${file_name}`;
		},

	},
	
};
</script>

<style lang="stylus">
.anchor
	margin-top -3.9em
	padding-top 3.9em
	.extension
		align-items center
		display flex
		padding 0.4em 0.2em
		.header-anchor
			font-size 1.2em
		&:hover .header-anchor
			opacity 1
		img
			margin-right 0.5em
		.extension-text
			flex 1
			.down
				color #6c757d
				font-family monospace
				font-size 0.8rem
		.button
			background-color #2e84bf
			border-bottom 1px solid #2977ac
			border-radius 4px
			box-sizing border-box
			color #fff
			display inline-block
			font-size 0.8em
			padding 0.5rem
			text-transform uppercase
			transition background-color 0.1s ease
			&:hover
				background-color #3992cf
				text-decoration none !important
			.material-holder
				color #fff
				+ span
					margin-left 0.25rem
		&:not(:last-child)
			border-bottom 1px solid #eaecef
		&:target
			.extension
				background #f1f8ff
		@media (max-width: 767px)
			.extension-text .down
			.button span
				display none
</style>