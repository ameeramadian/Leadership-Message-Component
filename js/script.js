
const seeMoreButton = document.querySelector("#see-more-btn");
const seeLessButton = document.querySelector("#see-less-btn");

seeMoreButton.addEventListener('click',event => {
        seeMoreButton.style.display = "none"
        seeLessButton.style.display = "inline"
});

seeLessButton.addEventListener('click',event => {
    seeLessButton.style.display = "none"
    seeMoreButton.style.display = "inline"
});

