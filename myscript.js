
   //IMG PREVIEW ---------

const cards = document.querySelectorAll('.image');

for ( let card of cards) {
  card.addEventListener('dblclick', imageClicker);
}

function imageClicker(){
  document.querySelector('.preview img').src = this.src;
  document.body.classList.add('show-preview');
}

const preview = document.querySelector('#preview');

preview.addEventListener('dblclick', closePreview);
preview.addEventListener('click', closePreview);


function closePreview(){
  document.body.classList.remove('show-preview');
}
    //FOLDER ----------------


const randomFolderOrder = document.getElementsByClassName('iframed');

for ( let randomness of randomFolderOrder) {

  randomness.style.top = "40 " + (18*Math.random()) + "% ";
  console.log("random");

};


//Öppna iframe -----------------


document.addEventListener('DOMContentLoaded', function() {

  const desktopButtons = document.getElementsByClassName("desktop-icon");
});

function findButtonWindow(button) {
    if (!button) return;
    let id = button.id;

    for (let element of document.getElementsByClassName("desktop-window")) {
      if (element.id === id) {
        return element;
      }
    }
    throw `${id} does not have a matching window`;
}

const desktopButtons = document.getElementsByClassName("desktop-icon");
const allFolders = document.getElementById("allFolders");

for (let i = 0; i < desktopButtons.length; i++) {

   let desktopButton = desktopButtons[i];

   desktopButton.addEventListener("dblclick", function() {

     let desktopWindow = findButtonWindow(desktopButton);
        //allFolders.insertBefore(desktopWindow, allFolders.firstChild);
        allFolders.appendChild(desktopWindow);
        desktopWindow.classList.add("is-open");
        //topelement????
        /*var elements = document.getElementsByTagName("*");
            var highest_index = 0;

            for (var i = 0; i < elements.length - 1; i++)
            {

                if (parseInt(elements[i].style.zIndex) > highest_index)
                {

                    highest_index = parseInt(elements[i].style.zIndex);
                }
            }
            console.log("hihellow");
          desktopWindow.style.zIndex = highest_index + 1;
*/
        }
     )};



    //Stäng i-frame ---------

      const desktopCloseButtons = document.getElementsByClassName("closeButton");

    function findCloseButtonWindow(button2) {
        if (!button) return;
        let id2 = button2.id;

        for (let element2 of document.getElementsByClassName("desktop-window")) {
          if (element2.id === id2) {
            return element2;
          }
        }
        throw `${id} does not have a matching window`;
    }



    for (let i = 0; i < desktopCloseButtons.length; i++) {

       let desktopCloseButton = desktopCloseButtons[i];

       desktopCloseButton.addEventListener("click", function() {

         let desktopCloseWindow = findButtonWindow(desktopCloseButton);
            //allFolders.insertBefore(desktopWindow, allFolders.firstChild);
            desktopCloseWindow.classList.remove("is-open");
            const videoplayer = document.getElementsByClassName("desktop-5");

          }
       )};


// ----- audio play/pause ------ >>>>

var playaudio = document.getElementById("desktop-7");
var audioplayer = document.getElementById("player");
var pauseaudio = document.querySelector(".audioclose");

playaudio.addEventListener("dblclick", function(){
    audioplayer.play();
  });

  pauseaudio.addEventListener("click", function(){
      audioplayer.pause();
    });




//-----PlayGIFRemidners -------->>>



const mouseTarget = document.getElementById('remindersid');
const changeRem = document.getElementById('changeReminders')

mouseTarget.addEventListener('mouseover', e => {
  console.log("working");
  changeRem.src = "assets/images/UI/todoicongif2.gif";

});

mouseTarget.addEventListener('mouseleave', e => {
  changeRem.src = "assets/images/UI/todoicon.png";

});

var trashcaniconstart = true;
const mouseTargetTrash = document.getElementById('trashcan');
const changeTrash = document.getElementById('changeTrasher');

mouseTargetTrash.addEventListener('mouseover', e => {
  if (trashcaniconstart === true) {
  changeTrash .src = "assets/images/UI/testtrash.gif";
}
});

mouseTargetTrash.addEventListener('mouseleave', e => {
  if (trashcaniconstart === true) {
    changeTrash .src = "assets/images/UI/trash.png";
    console.log("true");
  }
  else {
      changeTrash .src = "assets/images/UI/trashempty.png";
  }



});




//----  EMPTY trash------->>>>

const emptyTrash = document.getElementById('emptytrashid');

const removethis = document.getElementById('everythinInsideTrash');

const trashagain = document.getElementsByClassName('trashinside');


emptyTrash.addEventListener('click', e => {
  removeAllChildNodes(removethis);
  function removeAllChildNodes(parent) {
      while (parent.firstChild) {
          parent.removeChild(parent.firstChild);
          emptyTrash.classList.add("hidetrash");
          changeTrash.src = "assets/images/UI/trashempty.png";
          trashcaniconstart = !trashcaniconstart;
          console.log("false");
}}});

// ----- new --->

setInterval(function(){

  let div = document.createElement("div");
  const location = document.getElementById("everythinInsideTrash");
  location.appendChild(div);
  console.log("Hello");
  div.classList.add("neuron");
  emptyTrash.classList.remove("hidetrash");
  changeTrash.src = "assets/images/UI/trash.png";

var elem = document.createElement("img");
elem.setAttribute("src", "assets/images/neuron2.png")

div.appendChild(elem);

}, 5000);

// ---- draggable ---->



// Wrap the module in a self-executing anonymous function
// to avoid leaking variables into global scope:
(function (document) {
    // Enable ECMAScript 5 strict mode within this function:
    'use strict';

    // Obtain a node list of all elements that have class="draggable":
    var draggable = document.getElementsByClassName('draggable'),
        draggableCount = draggable.length, // cache the length
        i; // iterator placeholder

    // This function initializes the drag of an element where an
    // event ("mousedown") has occurred:
    function startDrag(evt) {

        // The element's position is based on its top left corner,
        // but the mouse coordinates are inside of it, so we need
        // to calculate the positioning difference:
        var diffX = evt.clientX - this.offsetLeft,
            diffY = evt.clientY - this.offsetTop,
            that = this; // "this" refers to the current element,
                         // let's keep it in cache for later use.

        // moveAlong places the current element (referenced by "that")
        // according to the current cursor position:
        function moveAlong(evt) {
            that.style.left = (evt.clientX - diffX) + 'px';
            that.style.top = (evt.clientY - diffY) + 'px';
        }

        // stopDrag removes event listeners from the element,
        // thus stopping the drag:
        function stopDrag() {
            document.removeEventListener('mousemove', moveAlong);
            document.removeEventListener('mouseup', stopDrag);

        }

        document.addEventListener('mouseup', stopDrag);
        document.addEventListener('mousemove', moveAlong);
    }

    // Now that all the variables and functions are created,
    // we can go on and make the elements draggable by assigning
    // a "startDrag" function to a "mousedown" event that occurs
    // on those elements:
    for (i = 0; i < draggableCount; i += 1) {
        draggable[i].addEventListener('mousedown', startDrag);
    }

}(document));
