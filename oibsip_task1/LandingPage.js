let my_image = document.getElementById('image');
my_image.onclick = function () {
    let img_src = my_image.getAttribute('src');
    if (img_src === "image.png") {
        my_image.setAttribute('src', "image1.png");
    }
    if (img_src === "image1.png") {
        my_image.setAttribute('src', "image3.png");
    }
    if (img_src === "image3.png") {
        my_image.setAttribute('src', "image.png");
    }
}
