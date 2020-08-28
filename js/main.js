// $('.navbar a, .btn').on('click', function(event) {
//     if (this.hash !== '') {
//       event.preventDefault();
  
//       const hash = this.hash;
  
//       $('html, body').animate(
//         {
//           scrollTop: $(hash).offset().top - 0
//         },
//         800
//       );
//     }
//   });
const image_container = document.getElementById('image-container');
// const text = document.getElementById('text');

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;
 breathAnimation();

function breathAnimation() {
  // text.innerText = 'Breathe In!';
  image_container.className = 'image-container grow';

  setTimeout(() => {
    // text.innerText = 'Hold';

    setTimeout(() => {
      // text.innerText = 'Breathe Out!';
      image_container.className = 'image-container shrink';
    }, holdTime);
  }, breatheTime);
}

 setInterval(breathAnimation, totalTime);
