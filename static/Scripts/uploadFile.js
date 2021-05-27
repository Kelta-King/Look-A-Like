async function uploadToServer(file){
    
    const fd = new FormData();
    fd.append('image', file, 'user.jpeg');
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
  
    document.body.querySelector("#loader").style.display = 'block';
    document.body.querySelector("#content").style.display = 'none';

    const imageFile = event.target.files[0];
    
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
    catch (error) {
      console.log(error);
    }
  
  }

(function(){
    let upload = document.querySelector("#upload");
    upload.addEventListener('click', (event) => {

        event.preventDefault();
        const check = new Check();
        const frm = document.querySelector("#formUpl");
        const file = document.querySelector("#upl").files[0];
        //console.log(file);
        if(check.isUndefined(file)) return false;
        //console.log(file['size']);
        if(check.dataTypeCheck(file['type'])) return false;

    });
})();