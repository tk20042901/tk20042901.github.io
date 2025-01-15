function update(picturePrev) {
    x = document.getElementById("image");
    x.style.background="url("+picturePrev.src+")";
    x.innerHTML = picturePrev.alt;
}

function undo () {
    x = document.getElementById("image");
    x.style.background='#8e69ff';
    x.innerHTML = '<b>Hover.</b>';
}