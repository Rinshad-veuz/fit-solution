



// gsap.from(".popular-blogs", {
//     duration: 0.5 ,
//     y: 50,
//     opacity: 0,
//     stagger:0.2,
//     ease: "power1.out",
//     scrollTrigger: {
//         trigger: ".categories-cont",
//         start: "top 90%",
//         toggleActions: "play none play none",
 
//     }
// }); 

    gsap.from(".categories-section li", {
    duration: 0.6,
    y: 70,
    opacity: 0,
    stagger: 0.3,
    ease: "power1.out",
    scrollTrigger: {
        trigger: ".categories-section",
        start: "top 80%",
        toggleActions: "play none play none",
    }
}); 



gsap.from(".blog-tags a", {
    duration: 0.6,
    y: 50,
    opacity: 0,
    stagger: 0.3,
    ease: "power1.out",
    scrollTrigger: {
        trigger: ".blog-tags",
        start: "top 80%",
        toggleActions: "play none play none",
    }
}); 


// slider js

  // Initialize Lenis
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  $('.menu-toggle').on('click', function () {
    $('.menu-toggle').toggleClass('active');

    // Disable/Enable Lenis scrolling
    if ($('.menu-toggle').hasClass('active')) {
      lenis.stop(); // Stop Lenis scrolling
      $('body').addClass('no-scroll'); // Additional safeguard
    } else {
      lenis.start(); // Restart Lenis scrolling
      $('body').removeClass('no-scroll'); // Allow scrolling again
    }
  });
  

  
// Lenis disabled
const disableLenisSections = document.querySelectorAll('.no-lenis');

disableLenisSections.forEach((section) => {
  section.addEventListener('wheel', (e) => {
    lenis.stop();
    
    section.scrollTop += e.deltaY;
    
    e.preventDefault();
    
    setTimeout(() => lenis.start(), 100);
  }, { passive: false });
});

