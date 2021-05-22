
window.onload = (function(){
    document.body.querySelector("#loader").style.display = 'none';
    document.body.querySelector("#content").style.display = 'block';
});
let check = new Check();
let openURL = (url = check.emptyURL()) => {
    document.body.querySelector("#loader").style.display = 'block';
    document.body.querySelector("#content").style.display = 'none';
    window.open(url, '_self');
}
