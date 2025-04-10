/* <!-- ==================== Fixed Header ==================== --> */

const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

/* <!-- ==================== Fixed Header ==================== --> */


/* <!-- ==================== To top Button ==================== --> */


// Show the button when the user scrolls down
window.onscroll = function () {
  var toTopBtn = document.getElementById('toTopBtn');
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    toTopBtn.style.display = 'block';
  } else {
    toTopBtn.style.display = 'none';
  }
};

// Smooth scroll to top when the button is clicked
document.getElementById('toTopBtn').onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

/* <!-- ==================== To top Button ==================== --> */



/* <!-- ==================== Cursor ==================== --> */

let cursor = document.querySelector(".cursor");
let cursor2 = document.querySelector(".cursor2");
let cursorScale = document.querySelectorAll(".cursor-scale");
let mouseX = 0;
let mouseY = 0;

gsap.to({}, 0.016, {
  repeat: -1,
  onRepeat: function () {
    gsap.set(cursor, {
      css: {
        left: mouseX,
        top: mouseY
      }
    });
    gsap.set(cursor2, {
      css: {
        left: mouseX,
        top: mouseY
      }
    });
  }
});

window.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

/* <!-- ==================== Cursor ==================== --> */

/* <!-- ==================== Image rotate ==================== --> */


gsap.registerPlugin(ScrollTrigger);

gsap.to("#rotatingImage", {
  scrollTrigger: {
    trigger: ".image-container",
    start: "top center",
    end: "bottom center",
    scrub: true,
  },
  rotation: 1080,
  ease: "linear",
});


/* <!-- ==================== Image rotate ==================== --> */


/* <!-- ==================== AOS ==================== --> */

AOS.init({});

/* <!-- ==================== AOS ==================== --> */


/* <!-- ==================== Wheel ==================== --> */

gsap.registerPlugin(ScrollTrigger);

let wheel = document.querySelector(".wheel"),
  images = gsap.utils.toArray(".wheel__card");

function setup() {
  let radius = wheel.offsetWidth / 2,
    center = radius,
    slice = 360 / images.length,
    DEG2RAD = Math.PI / 180;
  gsap.set(images, {
    x: i => center + radius * Math.sin(i * slice * DEG2RAD),
    y: i => center - radius * Math.cos(i * slice * DEG2RAD),
    rotation: i => i * slice,
    xPercent: -50,
    yPercent: -50
  });
}

setup();

window.addEventListener("resize", setup);

// Rotate wheel on scroll
ScrollTrigger.create({
  trigger: ".wheel",
  start: "top bottom",
  end: "bottom top",
  scrub: 2,
  onUpdate: self => {

    gsap.to(wheel, {
      rotation: -360 * self.progress,
      ease: "none",
      overwrite: true,
    });
  },
});

/* <!-- ==================== Wheel ==================== --> */


/* <!-- ==================== Reveal type ==================== --> */


gsap.registerPlugin(ScrollTrigger)

const splitTypes = document.querySelectorAll('.reveal-type')

splitTypes.forEach((char, i) => {

  const bg = char.dataset.bgColor
  const fg = char.dataset.fgColor

  const text = new SplitType(char, {
    types: 'chars'
  })

  gsap.fromTo(text.chars, {
    color: bg,
  }, {
    color: fg,
    duration: 0.3,
    stagger: 0.02,
    scrollTrigger: {
      trigger: char,
      start: 'top 90%',
      end: 'bottom 40%',
      scrub: true,
      markers: false,
      toggleActions: 'play play reverse reverse'
    }
  })
})



requestAnimationFrame(raf)

/* <!-- ==================== Reveal type ==================== --> */

/* <!-- ==================== Counter ==================== --> */

gsap.registerPlugin(ScrollTrigger);

function animateCounters() {
  const counters = document.querySelectorAll('.counter');

  counters.forEach(counter => {
    const targetValue = +counter.getAttribute('data-target');

    // Reset counter value
    counter.innerText = '0';

    // Animate the counter value
    gsap.to(counter, {
      innerText: targetValue, // Animates the `innerText` property
      duration: 10, // Animation duration
      ease: "power1.out", // Smooth easing
      snap: {
        innerText: 1
      }, // Snap to whole numbers
      scrollTrigger: {
        trigger: counter, // Trigger on the counter
        start: "top 90%", // Start when 90% of the counter is in the viewport
        toggleActions: "play reset play reset" // Refresh animation on re-entry
      }
    });
  });
}

// Initialize the animation
document.addEventListener('DOMContentLoaded', animateCounters);

/* <!-- ==================== Counter ==================== --> */


/* <!-- ==================== Menu ==================== --> */

$(document).ready(function () {
  const lenis = new Lenis({
    smooth: true, // Enable smooth scrolling
    duration: 1.2,
  });

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

  // GSAP Header Overlay Animation
  const headerOverlay = gsap.timeline({
    paused: true
  });

  if ($(".nsd-menu-overlay")[0]) {
    setupHeaderAnimation();
  }

  initializeSubmenu();

  function initializeSubmenu() {
    var menuItemWithChild = $(".nsd-menu-fullscren .has-sub > a");

    menuItemWithChild.on('click', function (e) {
      e.preventDefault();

      var thisItem = $(this),
        thisItemParent = thisItem.parent(),
        submenu = thisItemParent.find('> ul.sub-menu'),
        thisItemParentSiblings = thisItemParent.siblings('.has-sub');

      if (submenu.is(':visible')) {
        submenu.slideUp(); // Hide submenu
        thisItemParent.removeClass('open_sub'); // Remove active class
      } else {
        thisItemParent.addClass('open_sub'); // Add active class to the clicked item
        submenu.slideDown(); // Show submenu

        // Close all sibling submenus
        thisItemParentSiblings.removeClass('open_sub').find('> ul.sub-menu').slideUp();
      }

      return false;
    });
  }

  function setupHeaderAnimation() {
    gsap.set(".nsd-menu-overlay", {
      yPercent: -100
    });
    gsap.set(".nsd-menu-overlay__content_part__left", {
      yPercent: 100
    });
    gsap.set(".nsd-menu-overlay__content_part__left ul .fullscreen-single__item", {
      rotate: 0,
      y: 250,
      skewY: 0,
    });

    headerOverlay
      .to(".nsd-menu-overlay", {
        yPercent: 0,
        duration: 1
      })
      .to(".nsd-menu-overlay__content_part__left", {
        yPercent: 0,
        duration: 1
      }, "-=1")
      .to(".nsd-menu-overlay__content_part__left ul .fullscreen-single__item", {
        opacity: 1,
        rotate: 0,
        y: 0,
        skewY: 0,
        stagger: 0.2,
        duration: 0.5,
      }, "-=0.5")
      .to(".nsd-menu-overlay__content_part__right", {
        y: 0,
        opacity: 1,
        duration: 0.5,
      }, "-=0.5");

    headerOverlay.reverse();

    $(document).on("click", ".menu-toggle", function () {
      headerOverlay.reversed(!headerOverlay.reversed());
    });
  }
});

$(document).ready(function () {
  $('.has-sub > a').click(function (e) {
    e.preventDefault();
    var submenu = $(this).siblings('.sub-menu');
    submenu.toggleClass('active'); // Toggle the 'active' class for showing or hiding
  });
});
$(document).ready(function () {
  $('.nsd-menu-overlay').addClass('active'); // This will show the menu with a fade-in effect
});

/* <!-- ==================== Menu ==================== --> */



/* <!-- ==================== Loader ==================== --> */

  $(function () {
    const svg = document.getElementById("svg");
    const tl = gsap.timeline();
    const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
    const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";

          tl.to(".loader-wrap-heading .load-text, .loader-wrap-heading .cont, .loader-image", {
      delay: 1.5,
      y: -100,
      opacity: 0,
    });
    tl.to(svg, {
      duration: 0.5,
      attr: {
        d: curve
      },
      ease: "power2.easeIn",
    }).to(svg, {
      duration: 0.5,
      attr: {
        d: flat
      },
      ease: "power2.easeOut",
    });
    tl.to(".loader-wrap", {
      y: -1500,
    });
    tl.to(".loader-wrap", {
      zIndex: -1,
      display: "none",
    });
  });


  /* <!-- ==================== Loader ==================== --> */


  /* <!-- ==================== Marquee ==================== --> */

    $(document).ready(function () {
      const $marqueeBlock = $(".marquee-block");
      const $marqueeList = $(".marquee-item-list");

      // Clone marquee content once for seamless scrolling
      $marqueeList.clone().appendTo($marqueeBlock);

      // Trigger animation
      const animateMarquee = () => {
        const scrollWidth = $marqueeBlock[0].scrollWidth / 2; // Width of one cycle
        const animationDuration = 10; // Adjust duration for speed (seconds)

        $marqueeBlock.css({
          animation: `marquee ${animationDuration}s linear infinite`,
        });
      };

      animateMarquee();
    });


    /* <!-- ==================== Marquee ==================== --> */



    /* <!-- ==================== Icon rotating ==================== --> */

  gsap.registerPlugin(ScrollTrigger);

  // Select all icons
  const icons = document.querySelectorAll('.icon-block');

  // Create flipping animation
  icons.forEach((icon, index) => {
    gsap.fromTo(
      icon,
      {
        rotationY: 0,
        scale: 1,
      },
      {
        rotationY: 360,
        scale: 1.1,
        duration: 3,
        repeat: -1,
        ease: 'elastic.out(1, 0.3)', // Adds a realistic bounce effect
        delay: index * 0.3, // Stagger animations
      }
    );

    // Hover effect for interaction
    icon.addEventListener('mouseenter', () => {
      gsap.to(icon, { scale: 1.3, duration: 0.3 });
    });

    icon.addEventListener('mouseleave', () => {
      gsap.to(icon, { scale: 1, duration: 0.3 });
    });
  });


/* <!-- ==================== Icon rotating ==================== --> */

/* <!-- ==================== Smooth Scroll ==================== --> */


    const lenis = new Lenis();

    let isScrolling = false;
    const scrollDelay = 100; 

    lenis.on('scroll', (e) => {
      if (!isScrolling) {
        isScrolling = true;

        console.log(`Scroll event:`, e);

        setTimeout(() => {
          isScrolling = false;
        }, scrollDelay);
      }
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);


/* <!-- ==================== Smooth Scroll ==================== --> */



const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
  button.addEventListener('mousemove', function(evt) {
    const movX = evt.clientX - this.getBoundingClientRect().x;
    const movY = evt.clientY - this.getBoundingClientRect().y;

    gsap.to(this.querySelector(".button__spotlight"), {
      x: movX,
      y: movY,
      scale: 30,
      duration: 0.3,
    });
  });

  button.addEventListener('mouseleave', function(evt) {
    const movX = evt.clientX - this.getBoundingClientRect().x;
    const movY = evt.clientY - this.getBoundingClientRect().y;

    gsap.to(this.querySelector(".button__spotlight"), {
      x: movX,
      y: movY,
      scale: 0,
      duration: 0.3,
    });
  });
});









 
  
