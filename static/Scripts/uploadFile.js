
(function(){
    let upload = document.querySelector("#upload");
    upload.addEventListener('click', (event) => {

        event.preventDefault();
        const check = new Check();
        const frm = document.querySelector("#formUpl");
        const file = document.querySelector("#upl").files[0];
        //console.log(file);
        if(check.isUndefined(file)) return false;
        
        if(check.dataTypeCheck(file['type'])) return false;
        
        new Compressor(file, {
            quality: 0.6,
            success(result) {
                /*
                console.log(result);
                
                const formData = new FormData();
            
                formData.append('file', result, result.name);
                
                console.log(file);
                
                frm.setAttribute('enctype', "multipart/form-data");
                frm.setAttribute('method', "post");
                frm.setAttribute('action', 'avg/getFile');
                frm.submit();
                
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
                */
                const x = document.getElementsByTagName('input');
                
                let xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = (evt) => {
                    if(this.readystate = 4 && this.status == 200){
                        console.log(this.responseText);
                    }
                }
                xhttp.open("POST", "avg/getFile", false);
                xhttp.setRequestHeader("Content-type", "image/jpeg");
                xhttp.setRequestHeader("X-CSRF-Token", x[0].value);
                xhttp.send(result);
                
            },
            error(err) {
              console.log(err.message);
            },
        });

        //frm.submit();

    });
})();