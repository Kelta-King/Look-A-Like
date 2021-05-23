class ErrorThrow{
    emptyURL(message = 'URL field is empty'){
        throw message;
    }
    emptyFormat(message = 'Format is not provided'){
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