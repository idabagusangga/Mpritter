<template lang="html">
  <div class="modal" id="myModalPp">
     <div class="modal-dialog" role="document">
       <div class="modal-content">
         <div class="modal-header">
           <h5 class="modal-title">Upload Profile Pic</h5>
           <button type="button" class="close" data-dismiss="modal" aria-label="Close">
             <span aria-hidden="true">&times;</span>
           </button>
         </div>
         <div class="modal-body">
             <div class="form-group">
               <label for="exampleInputFile">File input</label>
               <input type="file" class="form-control-file" id="inputFile2" aria-describedby="fileHelp" @change="readURL">
               <small id="fileHelp" class="form-text text-muted">This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line.</small>
             </div>
         </div>
         <div class="modal-footer">
           <button type="button" class="btn btn-primary" @click="multer">Upload</button>
           <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
         </div>
       </div>
     </div>
   </div>
</template>

<script>
export default {
    data : function(){
        return {
            preUpload : {},
            fotoBaru : '',
            image : null
        }
    },
    methods : {
        multer(){
        let token = localStorage.getItem('token')
        let data1 = new FormData()
        data1.append('caption',this.preUpload.caption)
        data1.append('image',document.getElementById('inputFile2').files[0])
        data1.append('token',token)
        data1.append('uploadDate',new Date())
        
        console.log(document.getElementById('inputFile2').files[0]);
    
        axios.post('http://35.187.250.71:3000/pictures/addpp',data1)
        .then(response=>{
            // this.fotoBaru = response.data.data.album[response.data.data.album.length-1]
            // this.$emit('fotoBaruNih',this.fotoBaru)
            alert('hello2 berhasil')
            // location.reload()
        })
        .catch(err=>{
            console.log(err);
            // this.$router.push('/login')
        })
    },
    readURL(e) {
        var files = e.target.files || e.dataTransfer.files;
        if (!files.length)
        return;
        console.log('ini read url -------->',files);
        this.createImage(files[0]);
        this.image = files[0]
    },
    createImage(file) {
        var image = new Image();
        var reader = new FileReader();
        var vm = this;
        reader.onload = (e) => {
            vm.image = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    }       
}
</script>

<style lang="css">
</style>
