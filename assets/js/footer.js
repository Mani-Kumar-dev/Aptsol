document.addEventListener("DOMContentLoaded",function(){
    fetch('footer.html')
    .then(response => response.text())
    .then(html => {
        document.body.insertAdjacentHTML('beforeEnd',html);
       
    });
});

