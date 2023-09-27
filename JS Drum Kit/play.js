// Method to play sound on click.
function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    if(!audio){
      return;
    }
    audio.currentTime = 0;                // rewind the sound to the start
    audio.play();
    key.classList.add("playing");
}


// method to remove the transition after playing.
function removeTransition(e){
    // only return the transform propertyName from each node.
    if(e.propertyName !== 'transform'){
      return;
    }
    
    this.classList.remove('playing');
}

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener("keydown", playSound);