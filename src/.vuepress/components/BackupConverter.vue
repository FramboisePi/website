<template>
	<span>

		<!-- Successful Backup Conversion Dialog -->
		<el-dialog title="Successful backup conversion" :visible.sync="successDialogVisible" center width="80%">
			<!-- Download Button -->
			<div class="downloadBackup">
		  		<el-button type="primary" plain @click="downloadData">Download Paperback backup <i class="el-icon-download"></i></el-button>
			</div>

			<!-- Unresolved items list -->
			<div v-if="convertedBackupData.noConverted.length != 0">
				<p>The conversion was successful but {{convertedBackupData.noConverted.length}} items could not be resolved</p>
				<table>
					<thead>
						<tr>
							<th>Source Id</th>
							<th>Manga Title</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="item in convertedBackupData.noConverted" :key="item.sourceId">
							<td class="sourceID">{{item.sourceId}}</td>
							<td>{{item.mangaTitle}}</td>
						</tr>
					</tbody>
			</table>
			</div>
		</el-dialog>

		<!-- Page content -->
		<p class="instruction">
			Provide a Tachiyomi <code>.gz</code> Backup
		</p>

		<!--
			ref="upload" is used to call clearFiles()
		-->
		<el-upload
			ref="upload"
			class="upload-backup"
			drag
			action="#"
			:http-request="sendRequest"
			v-loading="loading"
		>
			<i class="el-icon-upload"></i>
			<div class="el-upload__text">Drop backup here or <em>click to upload</em></div>
			<div class="el-upload__tip" slot="tip">Upload a Tachiyomi <code>.proto.gz</code> backup</div>
		</el-upload>

	</span>
</template>

<script>
// Axios is used to make the POST request to the converter
import axios from "axios";

const remoteEndpoint = "https://convert.stormcloud.host" // Where we do send files for conversion

export default {
	data() {
		return {
			loading:false,					// Put the uploader in loading mode
			successDialogVisible: false,	// Show the Successful Backup Conversion Dialog
			convertedBackupData: {			// Will countain data of the converted backup
				filename: "",
				text: [],					// JSON countaining the converted backup
				noConverted: []
				},
		};
	},
	
	methods: {
		sendRequest(data) {
			/* Send a conversion request and manage the server response */
			console.log("Sending the backup to the server");

			// First, read the file contents
			console.log("Tachiyomi backup:");
			console.log(data.file);

			var form = new FormData()
			form.append("backupFile", data.file, data.file.name)

			// Send this in for processing
			var settings = {
				"url": remoteEndpoint,
				"method": "POST",
				"timeout": 0,
				"mimeType": "multipart/form-data",
				"contentType": false,
				"processData": false,
				"data": form
			};

			console.log("Settings:")
			console.log(settings)
			
			// Show the user hs backup is being processed and prevent him from uploading a second one
			this.$data.loading = true
			
			// Send the request
			axios(settings)
				.then((response) => {
					console.log("Success")
					console.log(response);
					// Generate a filename and queue a download operation'
					let title = new Date().toDateString() + "-PaperbackConversion.json"

					// Save returned data to be able to display it from the dialog and download button
					this.$data.convertedBackupData.filename = title
					this.$data.convertedBackupData.text = response.data.paperbackBackup
					this.$data.convertedBackupData.noConverted = response.data.noConvert

					console.log("Filename:", this.$data.convertedBackupData.filename, "Paperback backup:", this.$data.convertedBackupData.text, "Unresolved items:", this.$data.convertedBackupData.noConverted)

					// Show the dialog allowing the user to download its backup
					this.$data.successDialogVisible = true

					this.$data.loading = false

				}, (error) => {
					console.log("Error")
					console.log(error.response.data)

					// Show an error alert
					// https://element.eleme.io/#/en-US/component/message-box
					this.$alert(error.response.data, 'The conversion failed', {
						confirmButtonText: 'Cancel',
						type: 'warning'
						}).then(() => {
						this.$message({
							type: 'error',
							message: 'Conversion failed'
						});    
						})
			
					this.$data.loading = false
				});

				// Remove the file from the upload list
				this.$refs.upload.clearFiles();

	},
	
 	downloadData() {
		/* Tell the browser to start a download operation on a given set of text */

		// The data is in the dictionnary convertedBackupData
		var element = document.createElement('a')

		element.setAttribute('href', 'data:application/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(this.$data.convertedBackupData.text)))
		element.setAttribute('download', this.$data.convertedBackupData.filename)

		element.style.display = 'none'
		document.body.appendChild(element)
		element.click()
		document.body.removeChild(element)
		}
	},

};

</script>

<style lang="stylus">
.upload-backup
	text-align center
.el-upload-dragger
	background-color #fbfdff
	border 1.2px dashed #d9d9d9
	// Prevent the component from being to large
	width unset
	padding-left 4rem
	padding-right 4rem
.instruction
	font-size 1.65rem
	font-weight 600
	line-height 1.25
.downloadBackup
	text-align center
	padding-bottom 1rem
table
	display table
	width 100%
	table-layout auto
	.sourceID
		text-align center

</style>
