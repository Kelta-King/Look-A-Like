async function uploadToServer(file){
    
    const fd = new FormData();
    const d = new Date();
    const n = d.getTime();
    const x = file.name.split('.');
    if(x.length != 2){
      endLoader();
      showError("Please upload proper format image")
      return false;
    }
    
    console.log(file.name);
    const name = String(n) + "." + String(x[1]);
    fd.append('image', file, name);
    for (var key of fd.entries()) {
        console.log(key[0] + ', ' + key[1]);
    }
    const csrf_token = $('input[name="csrfmiddlewaretoken"]').val();
    $.ajax({
        url: 'avg/getFile',
        csrfmiddlewaretoken: csrf_token,
        enctype: "multipart/form-data",
        type: 'POST',
        data: fd,
        cache: false,
        processData: false,
        contentType: false,
        success: function(data) {
            document.querySelector("#images").innerHTML = `<img src='${data}' />`;
        }
    });

}

async function handleImageUpload(event) {
  
    showError("yo");
    return false;
    startLoader();
    const imageFile = event.target.files[0];
    
    if(String(imageFile.type) !== 'image/jpeg' && String(imageFile.type) !== 'image/jpg' && String(imageFile.type) !== 'image/png'){
      endLoader();
      showError(`Only jpeg and png formats are allowed. Provided format: ${imageFile.type}`);
      return false;
    }
    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1920,
      useWebWorker: true
    }
    try {
      const compressedFile = await imageCompression(imageFile, options);
      event.target.files[0] = compressedFile
      
      document.body.querySelector("#loader").style.display = 'none';
      document.body.querySelector("#content").style.display = 'block';
      await uploadToServer(compressedFile);
    }
    catch(error){
      console.log(error);
    }
  
  }
