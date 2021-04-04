
const seeMoreButton = document.querySelector("#see-more-btn");
const seeLessButton = document.querySelector("#see-less-btn");
const longParag = document.querySelector("#collapseOne")

seeLessButton.style.display = "none"

seeMoreButton.addEventListener('click',event => {
    seeMoreButton.style.display = "none"
    seeLessButton.style.display = "inline"
    longParag.classList.toggle("invisible");
    longParag.classList.toggle("d-none");
});

seeLessButton.addEventListener('click',event => {
    seeMoreButton.style.display = "inline"
    seeLessButton.style.display = "none"
    longParag.classList.toggle("invisible");
    longParag.classList.toggle("d-none");
});

