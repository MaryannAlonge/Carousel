// VARIABLES
let thumbnails = document.getElementsByClassName('thumbnail')
let slider = document.getElementById('slider')
let buttonRight = document.getElementById('slide-right')
let buttonLeft = document.getElementById('slide-left')

buttonLeft.addEventListener('click', () => {
  // slides the content to the left by 125px
  slider.scrollLeft -= 125;
})
buttonRight.addEventListener('click', () => {
  // slides the content to the right by 125px
  slider.scrollLeft += 125;
});

const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
// alert(maxScrollLeft)

// AutoPlay Slider

function autoPlay() {
  if(slider.scrollLeft > (maxScrollLeft -1)){
    slider.scrollLeft -= maxScrollLeft;
  } else {
    slider.scrollLeft += 1;
  }
}

let play = setInterval(autoPlay, 50);

// PAUSE THE SLIDER ON HOVER

for(let i = 0; i < thumbnails.length; i++) {
  thumbnails[i].addEventListener('mouseover', () => {
    clearInterval(play)
  })

  thumbnails[i].addEventListener('mouseout', () => {
    return play = setInterval(autoPlay, 50);
  })
}