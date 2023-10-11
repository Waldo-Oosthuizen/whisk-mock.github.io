/*Navbar */
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");



hamburger.addEventListener('click', ()=>{
  //Animate Links
   navLinks.classList.toggle("open");
   
;

   //Hamburger Animation
   hamburger.classList.toggle("toggle");
   
});


/*Close Navbar when  */
navLinks.addEventListener('click', ()=>{
  navLinks.classList.remove("open");
  hamburger.classList.remove("toggle");
})


//show more for about

function showMore(){
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("moreBtn")

  if (dots.style.display === "none"){
    dots.style.display = "inline";
    btnText.innerHTML = "Read More";
    moreText.style.display = "none";
  }
  else{
    dots.style.display = "none";
    btnText.style.display ="none";
    moreText.style.display = "inline";
  };
}

// Testimonials


// Select all slides
const slides = document.querySelectorAll(".slide");
const nextSlide = document.querySelector(".btn-next");
const prevSlide = document.querySelector(".btn-prev");

let curSlide = 0;
let maxSlide = slides.length - 1;

// loop through slides and set each slides translateX
slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;
});







// add event listener and navigation functionality
nextSlide.addEventListener("click", function () {
  // check if current slide is the last and reset current slide
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  //   move slide by -100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});

// select next slide button


// add event listener and navigation functionality
prevSlide.addEventListener("click", function () {
  // check if current slide is the first and reset current slide to last
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }

  //   move slide by 100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});
