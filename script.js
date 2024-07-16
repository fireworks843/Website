console.log("JS LOADED YIPPEEE")

var splashScreen = document.querySelector('.splash');
splashScreen.addEventListener('click',()=>{
  splashScreen.style.opacity = 0;
  setTimeout(()=>{
    splashScreen.classList.add('hidden')
  },610)
})

body {
  overflow-y: hidden; /* Hide vertical scrollbar */
  overflow-x: hidden; /* Hide horizontal scrollbar */
}
