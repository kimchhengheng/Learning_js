window.addEventListener('load',   ()=> {
  const sounds = document.querySelectorAll(".sound");
  const pads = document.querySelectorAll(".pads div");
  const visual = document.querySelector(".visual");
  const colors = [
    "#ffff66",
    "#66ff66",
    "#ff66ff",
    "#ff0080",
    "#9659a6",
    "#f5ccff"
  ];

  pads.forEach((pad, index) => {
    pad.addEventListener("mouseover", function(){
      sounds[index].currentTime = 0;
      sounds[index].play();
      createBubbles(index)
    });
  });
  // create a function that make bubble
  const createBubbles = (index) => {
    const bubble = document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = "jump 1s ease";
  /*  bubble.addEventListener('animationend',function(){
      visual.removeChild(this);
    });*/
  };


});

/*
listener  load then call anony mous function
the construct sounds with get all with the class .sounds
the construct pads with get all with the class .pads but with tag div only
loop with forEach( ( pad like elemetn ,index ))
  then we add another even listener for click
the track need to finish when you want to click again
reset current time  to 0 for click multiple time so when it click does not need to finish


*/
