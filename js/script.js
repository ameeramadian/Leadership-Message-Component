// Switch Layout Buttons 
const firstLayoutBtn = document.querySelector(".btnFirstLayout");
const secondLayoutBtn = document.querySelector(".btnSecondLayout");
const thirdLayoutBtn = document.querySelector(".btnThirdLayout");

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

function clearClassList(element, classToRemove){
    for( i = 0; i < element.classList.length; i++){
        c = element.classList[i];
        if( c.startsWith(classToRemove) || c.startsWith("col-")){
            element.classList.remove(c);
            i--;
        }
    }
}

function addThemeClasses(theme){
    leaderDiv.classList.add(`leader--${theme}`);
    leaderMessageDiv.classList.add(`leadersMessage--${theme}`);
    leaderInfoDiv.classList.add(`leader__info--${theme}`);
    leaderMessageSeeMore.classList.add(`leadersMessage__seeMore--${theme}`);
}

function addStyleClasses(activeLayout){
    clearClassList(leaderDiv, "leader-")
    clearClassList(leaderMessageDiv, "leadersMessage-")
    clearClassList(leaderInfoDiv, "leader__info-")
    clearClassList(leaderMessageSeeMore, "leadersMessage__seeMore-")

    switch (activeLayout) {
        case 2 : { 
            addThemeClasses("light");
            leaderDiv.classList.add("col-sm-12");
            leaderDiv.classList.add("col-md-4");
            leaderMessageDiv.classList.add("col-sm-12"); 
            leaderMessageDiv.classList.add("col-md-8");        
           break;
        }
        case 3 : {
            addThemeClasses("dark");
            leaderDiv.classList.add("col-12");
            leaderMessageDiv.classList.add("col-12"); 
           break;
        }
        default: {
            addThemeClasses("medium");
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

