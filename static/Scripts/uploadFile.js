
(function(){
    let upload = document.querySelector("#upload");
    upload.addEventListener('click', (event) => {

        event.preventDefault();
        const check = new Check();
        const frm = document.querySelector("#formUpl");
        const file = document.querySelector("#upl").files[0];
        console.log(file);
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
                */
                document.querySelector("#blb").files[0] = result;
                frm.setAttribute('enctype', "multipart/form-data");
                frm.setAttribute('method', "post");
                frm.setAttribute('action', 'avg/getFile');
                frm.submit();

            },
            error(err) {
              console.log(err.message);
            },
        });

        //frm.submit();

    });
})();