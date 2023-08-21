const images = document.querySelectorAll(".picture")

images.forEach((picture) => {
    picture.addEventListener("click", () => {
        removeActive()
        picture.classList.add("active")
    })
})

function removeActive() {
    images.forEach((picture) => {
        picture.classList.remove("active")
    })
}