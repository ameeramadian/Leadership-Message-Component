// Switch Layout Buttons 
const firstLayoutBtn = document.querySelector("#btnFirstLayout");
const secondLayoutBtn = document.querySelector("#btnSecondLayout");
const thirdLayoutBtn = document.querySelector("#btnThirdLayout");

// elements for re-ordering
const nameTitleDiv = document.querySelector("#titleDiv");
const leftColumn = document.querySelector("#leftColumn");
const rightColumn = document.querySelector("#rightColumn");

//elemnts for re-styling 
const messageDiv = document.querySelector("#messageDiv");
const titleDiv = document.querySelector("#titleDiv");

// elements for showing and hiding 
const seeMoreButton = document.querySelector("#see-more-btn");
const seeLessButton = document.querySelector("#see-less-btn");
const longParag = document.querySelector("#collapseOne");



////////////////////////////////////////////////////////////////First Layout ////////////////////////////////////////////////////////////////

// styles
const backgroundDarkerBlue = "#0c6396";
const backgroundLighterBlue = "#008dc4";

function styleFirstLayoutTextButtons(){
    seeMoreButton.classList.toggle("text-white", true);
    seeMoreButton.style.textDecoration = "underline";
    seeMoreButton.style.textDecorationColor = "white";

    seeLessButton.classList.toggle("text-white", true);
    seeLessButton.style.textDecoration = "underline";
    seeLessButton.style.textDecorationColor = "white";
}

function removeTextFromTopOfImage(){
    leftColumn.classList.remove("position-relative");
    titleDiv.classList.remove("position-absolute");
}

function styleHorizontalLayout(){
    if(rightColumn.classList.contains("col-12")){
        rightColumn.classList.add("col-8")
        rightColumn.classList.remove("col-12")
        rightColumn.classList.remove("col-md-8")
    }
    if(leftColumn.classList.contains("col-12")){
        leftColumn.classList.add("col-4")
        leftColumn.classList.remove("col-12")
        leftColumn.classList.remove("col-md-4")
        leftColumn.classList.remove("m-0");
    }
}

function styleFirstLayout(){
    messageDiv.style.background = backgroundLighterBlue;
    titleDiv.style.background = backgroundDarkerBlue;
    messageDiv.classList.toggle("text-white",true);
    titleDiv.style.opacity = "1";
    seeMoreButton.classList.remove("my-4")
    seeLessButton.classList.remove("my-4")
    styleHorizontalLayout()
    removeTextFromTopOfImage()
    styleFirstLayoutTextButtons();
}

styleFirstLayout();

firstLayoutBtn.addEventListener('click',event => {
   console.log("first button clicked !")
   rightColumn.appendChild(nameTitleDiv);
   styleFirstLayout();
});

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


//////////////////////////////////////////////////////////////// second Layout ////////////////////////////////////////////////////////////////

const backgroundWhite = "#fff";
const backgroundLessOpaqueDarkeBlue = "#0A2554";
const textDarkBlue = "#0A2554";
const textDecoartionGreen = "#42C3AF";

function styleSecondLayoutText(){
    messageDiv.classList.toggle("text-white", false);
    messageDiv.style.color = textDarkBlue;
}

function styleSecondLayoutTextButtons(){
    seeMoreButton.classList.toggle("text-white", false);
    seeMoreButton.style.color = textDarkBlue;
    seeMoreButton.style.textDecoration = "underline";
    seeMoreButton.style.textDecorationColor = "textDecoartionGreen";

    seeLessButton.classList.toggle("text-white", false);

    seeLessButton.style.color = textDarkBlue;
    seeLessButton.style.textDecoration = "underline";
    seeLessButton.style.textDecorationColor = "textDecoartionGreen";

}

function styleVerticalLayout(){
    if(rightColumn.classList.contains("col-8")){
        rightColumn.classList.remove("col-8")
        rightColumn.classList.add("col-12")
        rightColumn.classList.add("col-md-8")
    }
    if(leftColumn.classList.contains("col-4")){
        leftColumn.classList.remove("col-4")
        leftColumn.classList.add("col-12")
        leftColumn.classList.add("col-md-4")
        leftColumn.classList.add("m-0");
    }
}

function makeTextOnTopOfImage(){
    leftColumn.classList.add("position-relative");
    titleDiv.classList.add("position-absolute");
    titleDiv.style.bottom = "26px";
    titleDiv.style.left = "1px;"
}

function styleSecondLayout(){     
    messageDiv.style.background = backgroundWhite;
    titleDiv.style.background = backgroundLessOpaqueDarkeBlue;
    titleDiv.style.opacity = "0.7";
    seeMoreButton.classList.add("my-4")
    seeLessButton.classList.add("my-4")
    seeMoreButton.style.textDecorationColor = textDecoartionGreen;
    styleVerticalLayout()
    makeTextOnTopOfImage()
    styleSecondLayoutText();
    styleSecondLayoutTextButtons();
}

function repositionTitleDiv(){
    nameTitleDiv.remove();
    nameTitleDiv.style.zIndex = "10";
    leftColumn.appendChild(nameTitleDiv);
}

secondLayoutBtn.addEventListener('click',event => {
    console.log("second button clicked !")
    repositionTitleDiv(); 
    styleSecondLayout();
    
 });

 //////////////////////////////////////////////////////////////// third Layout ////////////////////////////////////////////////////////////////

 thirdLayoutBtn.addEventListener('click',event => {
    console.log("third button clicked !")
 });

