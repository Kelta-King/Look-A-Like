class ErrorThrow{
    emptyURL(message = 'URL field is empty'){
        throw message;
    }
    emptyFormat(message = 'Format is not provided'){
        throw message;
    }
    static emptyParameter(message = 'Provide proper details'){
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

const showError = (value = ErrorThrow.emptyParameter()) => {

    try {
    const divModal = document.createElement("DIV");
    const divModalContent = document.createElement("DIV");
    const header = document.createElement("HEADER");
    const endTimes = document.createElement("SPAN");
    const divHeader = document.createElement("DIV");
    const divContainer = document.createElement("DIV");
    const footer = document.createElement("FOOTER");

    divModal.setAttribute('class', 'w3-modal');
    divModalContent.setAttribute('class', 'w3-modal-content w3-animate-top w3-card-4');
    header.setAttribute('class', 'w3-container w3-red');
    footer.setAttribute('class', 'w3-container w3-red w3-padding-16');
    divHeader.setAttribute('class', 'w3-xlarge w3-padding-16');
    divContainer.setAttribute('class', 'w3-container w3-text-black w3-large w3-padding w3-margin w3-center');
    endTimes.setAttribute('class', 'w3-button w3-display-topright');

    divModal.setAttribute('id', 'errorModal');
    divModal.setAttribute('style', 'display:block');
    divModalContent.setAttribute('style', 'max-width:600px');

    endTimes.onclick = function(evt){
        deleteError('errorModal');
    };
    
    endTimes.innerHTML = "&times;";
    divHeader.appendChild(document.createTextNode("Something went wrong"));
    footer.appendChild(document.createTextNode("Please follow the instructions above"));
    divContainer.appendChild(document.createTextNode(value));

    header.appendChild(endTimes);
    header.appendChild(divHeader);
    divModalContent.appendChild(header);
    divModalContent.appendChild(divContainer);
    divModalContent.appendChild(footer);
    divModal.appendChild(divModalContent);

    document.body.appendChild(divModal);
    console.log(value);
            
    }catch (error) {
        alert("Something went wrong, please reload the page");
        console.log(error);       
    }
}

const deleteError = (modalId) => {
    const myNode = document.getElementById(modalId);
    while (myNode.firstChild) {
        myNode.removeChild(myNode.lastChild);
    }
    myNode.remove();
}

const startLoader = () => {
    document.body.querySelector("#loader").style.display = 'block';
    document.body.querySelector("#content").style.display = 'none';
}

const endLoader = () => {
    document.body.querySelector("#loader").style.display = 'none';
    document.body.querySelector("#content").style.display = 'block';
}