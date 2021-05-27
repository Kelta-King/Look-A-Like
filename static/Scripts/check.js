class ErrorThrow{
    emptyURL(message = 'URL field is empty'){
        throw message;
    }
    emptyFormat(message = 'Format is not provided'){
        throw message;
    }
    emptyParameter(message = 'Provide proper details'){
        throw message;
    }
}

class Check{
    constructor(){
        this.errorThrow = new ErrorThrow();
    }
    dataTypeCheck(format = this.errorThrow.emptyFormat()){
        if(!(String(format) === String('image/jpeg') || String(format) === String('image/png'))){
            return true;
        }
        return false;
    }
    isUndefined(myVar){
        return typeof myVar === 'undefined'
    }
}

const errThr = new ErrorThrow();
const showError = (value = errThr.emptyParameter()) => {
    alert(value);
    console.log(value);
}

const startLoader = () => {
    document.body.querySelector("#loader").style.display = 'block';
    document.body.querySelector("#content").style.display = 'none';
}

const endLoader = () => {
    document.body.querySelector("#loader").style.display = 'none';
    document.body.querySelector("#content").style.display = 'block';
}