<!--
Create a coma separated list of name of sources from the repo.
The component get the sources from the `versioning.json` file of the repo.
The url argument must be of the form "https://paperback-ios.github.io/extensions" without a trailing slash.
-->

<template>
	<div style="text-align: left">
		<ul id="v-for-object">
			<li v-for="extension in extensions"
			:id="extension.name"
			:key="extension.id"
			>
				{{ extension.name.replace(" (18+)", "").replace(" (Country-Proof)", "").replace("[FR] ", "") }}
				<!--<span v-for="tag in extension.tags"> <el-tag :type="getType(tag.type)" size="mini">{{ tag.text }}</el-tag> </span>-->
				<!--<span v-for="tag in extension.tags"> <Badge :text="tag.text" :type="getType(tag.type)" vertical="middle"/> </span>-->

				<span v-for="tag in extension.tags"> <el-tag :type="getType(tag.type)" size="mini" effect="light">{{ tag.text }}</el-tag> </span>
			</li>
			
		</ul>
		<a class="morebutton" v-if="more" @click="buttonClick"> more </a>
		
	</div>
</template>

<script>
import axios from "axios";

export default {
	props: {
		url: {
			type: String,
			required: true,
		},
	},

	data() {
		return {
			extensions: [],
			extensionsCompletList: [],
			more: false, 

			//last_id: "",			// id of the last source. Used to removed the last coma
			
		};
	},

	async beforeMount() {
		const { data } = await axios.get(this.$props.url + "/versioning.json");
		this.$data.extensions = data["sources"];
		//this.$data.last_id = data["sources"][data["sources"].length - 1];


		/*
		let data = {
  			"buildTime": "2020-06-30T15:08:41.866Z",
  			"sources": [
  			  {
  			    "id": "ComicExtra",
  			    "name": "ComicExtra",
  			    "author": "Conrad Weiser",
  			    "desc": "Extension that pulls western comics from ComicExtra",
  			    "website": "http://github.com/conradweiser",
  			    "version": "0.6.6",
  			    "icon": "logo.png",
  			    //"tags": []
				},
				{
  			    "id": "Manhwa18",
  			    "name": "Manhwa18 (18+)",
  			    "author": "Conrad Weiser",
  			    "desc": "Extension that pulls western comics from ComicExtra",
  			    "website": "http://github.com/conradweiser",
  			    "version": "0.6.6",
  			    "icon": "logo.png",
  			    "tags": [{
  			        "text": "18+",
  			        "type": "red"
  			    }]
				},
				{
  			    "id": "nHentai",
  			    "name": "nHentai (Country-Proof)",
  			    "author": "Conrad Weiser",
  			    "desc": "Extension that pulls western comics from ComicExtra",
  			    "website": "http://github.com/conradweiser",
  			    "version": "0.6.6",
  			    "icon": "logo.png",
  			    "tags": [{
  			        "text": "Country-Proof",
  			        "type": "grey"
  			    }]
				},
				{
  			    "id": "JapScan",
  			    "name": "[FR] JapScan",
  			    "author": "Conrad Weiser",
  			    "desc": "Extension that pulls western comics from ComicExtra",
  			    "website": "http://github.com/conradweiser",
  			    "version": "0.6.6",
  			    "icon": "logo.png",
  			    "tags": [{
  			        "text": "Fr",
  			        "type": "green"
  			    }]
				},
				{
  			    "id": "Manhwa18CP",
  			    "name": "Manhwa18 (Country-Proof) (18+) ",
  			    "author": "Conrad Weiser",
  			    "desc": "Extension that pulls western comics from ComicExtra",
  			    "website": "http://github.com/conradweiser",
  			    "version": "0.6.6",
  			    "icon": "logo.png",
  			    "tags": [{
  			        "text": "18+",
  			        "type": "red"
  			    },{
  			        "text": "Country-Proof",
  			        "type": "grey"
  			    }]
				}
				
  			]
		};
		*/
		let extensionsData = data["sources"];

		/*
		let extensionsList = [];
		extensionsData.forEach(function(item) {
			console.log(item);
			let is18 = item.name.includes("(18+)"); 
			var name = item.name.replace(" (18+)", ""); 

			let isCountryProof = item.name.includes("(Country-Proof)"); 
			name = name.replace(" (Country-Proof)", ""); 
			extensionsList.push({
				  id: item.id,
				  name: name,
				  is18: is18,
			  })
			});
		this.$data.extensions = extensionsList;
		*/
		//TEST

		if (extensionsData.length > 3) 
		{
			this.$data.extensionsCompletList = extensionsData;
			this.$data.more = true;
			this.$data.extensions = extensionsData.slice(0, 3)
		}
		else
		{
			this.$data.extensionsCompletList = extensionsData;
			this.$data.more = false;
			this.$data.extensions = extensionsData
		}
		
		console.log(this.$data.extensions);
		//this.$data.last_id = data["sources"][data["sources"].length - 1];


	},
methods: {
		iconUrl(extensionId, fileName) {
			//https://paperback-ios.github.io/extensions/${extension_id}/includes/${file_name}
			return this.$props.url + "/" + extensionId + "/includes/" + fileName;
		},
		buttonClick() {
			//https://paperback-ios.github.io/extensions/${extension_id}/includes/${file_name}
			this.$data.extensions = this.$data.extensionsCompletList;
			this.$data.more = false;
			console.log("SUCCESS")
		},
		getType(sourceType) {
			// Return a Element badge type
			console.log("Get type");
			return sourceType
			/*
			console.log({
				"red": "danger",
				"grey": "info",
				"green": "success"
			}[sourceType]);
		 	return {
				"red": "danger",
				"grey": "info",
				"green": "success"
			}[sourceType]
			//*/
			/*
			return {
				"red": "error",
				"grey": "warning",
				"green": "tip"
			}[sourceType]
			*/
		},
		copyLink(){
			/* Get the text field */
	const el = document.createElement('textarea');
  el.value = "copiedtext";
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
		},

	},
};
</script>

<style lang="stylus">

.morebutton
	text-align: center;
	display: block;
	cursor:pointer;
	margin-top -10px
	font-size 14px
</style>

