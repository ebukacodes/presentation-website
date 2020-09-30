const carouselSlide = document.querySelector(
   '.carousel-slide'
);
const carouselImages = document.querySelectorAll(
   '.carousel-slide img'
);

// Buttons
const prevbtn = document.querySelector('#prev');
const nextbtn = document.querySelector('#next');

// Counter
let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform =
   'translateX(' + -size * counter + 'px)';

// Button events
nextbtn.addEventListener('click', () => {
   if (counter >= carouselImages.length - 1) return;
   carouselSlide.style.transition =
      'transform 0.8s ease-in-out';
   counter++;
   carouselSlide.style.transform =
      'translateX(' + -size * counter + 'px)';
});

prevbtn.addEventListener('click', () => {
   if (counter <= 0) return;
   carouselSlide.style.transition =
      'transform 0.8s ease-in-out';
   counter--;
   carouselSlide.style.transform =
      'translateX(' + -size * counter + 'px)';
});

carouselSlide.addEventListener('transitionend', () => {
   if (carouselImages[counter].id === 'lastClone') {
      carouselSlide.style.transform = 'none';
      counter = carouselImages.length - 2;
      carouselSlide.style.transform =
         'translateX(' + -size * counter + 'px)';
   }
   if (carouselImages[counter].id === 'firstClone') {
      carouselSlide.style.transform = 'none';
      counter = carouselImages.length - counter;
      carouselSlide.style.transform =
         'translateX(' + -size * counter + 'px)';
   }
});
