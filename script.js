const photos = Array.from(document.querySelectorAll("#picture"));
let activeImage = null;

const expandImage = (currentPicture => {
    if (activeImage === currentPicture) {
        return;
    }
    if (activeImage) {
        activeImage.classList.remove("active")
    }
    currentPicture.classList.add("active") 
    activeImage = currentPicture
})


photos.map((photo) => {
    photo.addEventListener("click", (e) => {
        expandImage(e.target)
    })
})

