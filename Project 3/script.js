let image =  document.getElementById("img");
let resizeButton = document.getElementById("button");


resizeButton.addEventListener('click', function(){
    image.style.width = '150px';
    image.style.height = '150px';
})