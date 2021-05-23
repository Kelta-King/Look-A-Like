async function uploadToServer(file){
    //const csrftoken = $.cookie("csrftoken")
    function getCookie(name) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
    const csrftoken = getCookie('csrftoken');
    const request = new Request('avg/getFile', {headers: {'HTTP_X_CSRFTOKEN': csrftoken}});
    console.log(csrftoken);
    
    $.ajax({
        url: 'avg/getFile',
        type: 'POST',
        data: file,
        cache: false,
        processData: false,
        contentType: file,
        headers:{"HTTP_X_CSRF_TOKEN":csrftoken},
        success: function(data) {
            alert(data);
        }
    });

}

async function handleImageUpload(event) {

    document.body.querySelector("#loader").style.display = 'block';
    document.body.querySelector("#content").style.display = 'none';

    const imageFile = event.target.files[0];
    console.log('originalFile instanceof Blob', imageFile instanceof Blob); // true
    console.log(`originalFile size ${imageFile.size / 1024 / 1024} MB`);
  
    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1920,
      useWebWorker: true
    }
    try {
      const compressedFile = await imageCompression(imageFile, options);
      event.target.files[0] = compressedFile
      //event.target.files[0].name = "Image.jpg";
      console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
      console.log(`compressedFile size ${compressedFile.size / 1024 / 1024} MB`); // smaller than maxSizeMB
      document.body.querySelector("#loader").style.display = 'none';
      document.body.querySelector("#content").style.display = 'block';
      await uploadToServer(compressedFile);
    } catch (error) {
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