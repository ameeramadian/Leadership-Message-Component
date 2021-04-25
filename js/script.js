// Switch Layout Buttons 
const firstLayoutBtn = document.querySelector(".btnFirstLayout");
const secondLayoutBtn = document.querySelector(".btnSecondLayout");
const thirdLayoutBtn = document.querySelector(".btnThirdLayout");

//elements for styling
const themeDiv = document.querySelector(".theme")

// elements for re-ordering
const leaderDiv = document.querySelector(".leader");
const leaderInfoDiv = document.querySelector(".leader__info");
const leaderMessageDiv = document.querySelector(".leadersMessage");
const leaderMessageSeeMore = document.querySelector(".leadersMessage__seeMore")

//////////////////////////////////////////////////////////////// Layout  Stylings ////////////////////////////////////////////////////////////////

function setLayoutButtonActive(activeLayout){
    switch (activeLayout) {
         case 2 : { 
            firstLayoutBtn.classList.remove("active");
            secondLayoutBtn.classList.add("active");
            thirdLayoutBtn.classList.remove("active");
            break;
         }
         case 3 : {
            firstLayoutBtn.classList.remove("active");
            secondLayoutBtn.classList.remove("active");
            thirdLayoutBtn.classList.add("active");
            break;
         }
         default: {
            firstLayoutBtn.classList.add("active");
            secondLayoutBtn.classList.remove("active");
            thirdLayoutBtn.classList.remove("active");
            break;
         }
    }
}

function clearClassList(element){
    if(element === themeDiv){
        let themeClass = themeDiv.className.match(/(^|\s)theme-\S+/g) || []
        themeDiv.className = themeDiv.className.replace(themeClass, "")
    }else{
        [...element.classList].filter(
            c=>{
                return c.startsWith("col-")
           }
        ).forEach(e => {
            element.classList.remove(e)
          }) 
    }   
}

function addThemeClass(theme){
    themeDiv.classList.add(`theme--${theme}`)
}

function addStyleClasses(activeLayout){
    clearClassList(themeDiv)
    clearClassList(leaderDiv)
    clearClassList(leaderMessageDiv)
    clearClassList(leaderInfoDiv)

    switch (activeLayout) {
        case 2 : { 
            addThemeClass("light");
            leaderDiv.classList.add("col-sm-12");
            leaderDiv.classList.add("col-md-4");
            leaderMessageDiv.classList.add("col-sm-12"); 
            leaderMessageDiv.classList.add("col-md-8");        
           break;
        }
        case 3 : {
            addThemeClass("dark");
            leaderDiv.classList.add("col-12");
            leaderMessageDiv.classList.add("col-12"); 
           break;
        }
        default: {
            addThemeClass("medium");
             leaderDiv.classList.add("col-4");
             leaderMessageDiv.classList.add("col-8");
           break;
        }
   }
}

function repositionLeaderDiv(){
    leaderDiv.remove();
    document.querySelector(".row").prepend(leaderDiv)
}

////////////////////////////////////////////////////////////////First Layout ////////////////////////////////////////////////////////////////

setLayoutButtonActive(1);
addStyleClasses(1);
placeInfoinMessageDiv();

function placeInfoinMessageDiv(){
    leaderInfoDiv.remove();
    leaderMessageDiv.appendChild(leaderInfoDiv);
}

firstLayoutBtn.addEventListener('click',event => {
   setLayoutButtonActive(1);
   addStyleClasses(1);
   placeInfoinMessageDiv();
   repositionLeaderDiv();
});

// //////////////////////////////////////////////////////////////// second Layout ////////////////////////////////////////////////////////////////

function placInfoinLeaderDiv(){
    leaderInfoDiv.remove();
    leaderDiv.appendChild(leaderInfoDiv);
}

secondLayoutBtn.addEventListener('click',event => {
    setLayoutButtonActive(2);
    addStyleClasses(2);
    placInfoinLeaderDiv(); 
    repositionLeaderDiv();
 });

///////////////////////////////////////////////////////////////// third Layout ////////////////////////////////////////////////////////////////

function placeLeaderBelowMessageDiv(){
    leaderMessageDiv.append(leaderDiv);
    leaderDiv.append(leaderInfoDiv)
}

thirdLayoutBtn.addEventListener('click',event => {
    setLayoutButtonActive(3);
    addStyleClasses(3);
    placeLeaderBelowMessageDiv()
});

