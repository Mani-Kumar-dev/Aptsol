document.addEventListener("DOMContentLoaded",function(){
    fetch('navbar.html')
    .then(response => response.text())
    .then(html => {
        document.body.insertAdjacentHTML('afterBegin',html);
       
    });
});