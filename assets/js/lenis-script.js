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

    
    

        const buttons = document.querySelectorAll('.button');
    
        buttons.forEach(button => {
          button.addEventListener('mousemove', function (evt) {
            const movX = evt.clientX - this.getBoundingClientRect().x;
            const movY = evt.clientY - this.getBoundingClientRect().y;
    
            gsap.to(this.querySelector(".button__spotlight"), {
              x: movX,
              y: movY,
              scale: 30,
              duration: 0.3,
            });
          });
    
          button.addEventListener('mouseleave', function (evt) {
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

    
    

        AOS.init({
          disable: 'mobile'
        });

    
    

        const navbar = document.getElementById('navbar');
    
        window.addEventListener('scroll', () => {
          if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
          } else {
            navbar.classList.remove('scrolled');
          }
        });

    
    

       /* <!-- ==================== Reveal type ==================== --> */



gsap.registerPlugin(ScrollTrigger);

const splitTypes = document.querySelectorAll('.reveal-type');

splitTypes.forEach((char, i) => {
    const bg = char.dataset.bgColor;
    const fg = char.dataset.fgColor;

    // Split into words first to prevent breakage
    const text = new SplitType(char, {
        types: 'words, chars' // First split into words, then into characters
    });

    // Ensure words stay together by using `white-space: nowrap`
    gsap.set(text.words, {
        display: 'inline-block',
        whiteSpace: 'nowrap'
    });

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
    });
});

/* <!-- ==================== Reveal type ==================== --> */
    
    
    
        requestAnimationFrame(raf)

    

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
              duration: 2, // Animation duration
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

    
        // slider js

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

  });
});

        $(document).ready(function () {
          const lenis = new Lenis({
            smooth: true, // Enable smooth scrolling
            duration: 1.2,
          });
    
          // Initialize Lenis
          // function raf(time) {
          //   lenis.raf(time);
          //   requestAnimationFrame(raf);
          // }
          // requestAnimationFrame(raf);
    
          // $('.menu-toggle').on('click', function () {
          //   $('.menu-toggle').toggleClass('active');
    
          //   // Disable/Enable Lenis scrolling
          //   if ($('.menu-toggle').hasClass('active')) {
          //     lenis.stop(); // Stop Lenis scrolling
          //     $('body').addClass('no-scroll'); // Additional safeguard
          //   } else {
          //     lenis.start(); // Restart Lenis scrolling
          //     $('body').removeClass('no-scroll'); // Allow scrolling again
          //   }
          // });
    
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
            submenu.toggleClass('active');
          });
        });
        $(document).ready(function () {
          $('.nsd-menu-overlay').addClass('active');
        });

    

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

    

        if ($('.reveal').length) {
          gsap.registerPlugin(ScrollTrigger);
          let revealContainers = document.querySelectorAll(".reveal");
          revealContainers.forEach((container) => {
            let image = container.querySelector("img");
            let tl = gsap.timeline({
              scrollTrigger: {
                trigger: container,
                toggleActions: "play none none none"
              }
            });
            tl.set(container, {
              autoAlpha: 1
            });
            tl.from(container, 1, {
              xPercent: -100,
              ease: Power2.out
            });
            tl.from(image, 1, {
              xPercent: 100,
              scale: 1,
              delay: -1,
              ease: Power2.out
            });
          });
        }




      $('.odoo-module1').owlCarousel({
          loop: true,
  
      nav: false,
      autoplay: true,
      autoplayTimeout: 2000, 
      autoplaySpeed: 1000,   
      smartSpeed: 1000,      
      responsive: {
          
          0: {
              items:1
          },
          425: {
              items: 2
          },
          768: {
              items: 4
          },
          1000: {
              items: 5
          },
          1200: {
              items: 6
          }
      }
  });




  $('.odoo-module2').owlCarousel({
      loop: true,
  
      nav: false,
      autoplay: true,
      autoplayTimeout: 2000, 
      autoplaySpeed: 1000,   
      smartSpeed: 1000,      
      rtl: true,
      responsive: {
          0: {
              items: 1
          },
          425: {
              items: 2
          },
          768: {
              items: 4
          },
          1000: {
              items: 5
          },
          1200: {
              items: 6
          }
      }
  });

  
  

      $('.bs-slider').owlCarousel({
          loop: true,
          margin: 10,
          nav: false,
          autoplay: true,
          autoplayTimeout: 2000, 
      autoplaySpeed: 1000,   
      smartSpeed: 1000, 
          responsive: {
              0: {
                  items: 1
              },
              768: {
                  items: 2
              },
              1000: {
                  items: 3
              },
              1200: {
                  items: 3
              }
          }
      });
  
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

          // $(document).ready(function () {
          //     const $marqueeBlock = $(".marquee-block");
          //     const $marqueeList = $(".marquee-item-list");
  
          //     // Clone marquee content once for seamless scrolling
          //     $marqueeList.clone().appendTo($marqueeBlock);
  
          //     // Trigger animation
          //     const animateMarquee = () => {
          //         const scrollWidth = $marqueeBlock[0].scrollWidth / 12; // Width of one cycle
          //         const animationDuration = 10; // Adjust duration for speed (seconds)
  
          //         $marqueeBlock.css({
          //             animation: `marquee ${animationDuration}s linear infinite`,
          //         });
          //     };
  
          //     animateMarquee();
          // });

          $(document).ready(function () {
            const $marqueeBlock = $(".marquee-block");
            const $marqueeList = $(".marquee-item-list");
          
            // Clone the list for seamless scroll
            const $clonedList = $marqueeList.clone();
            $marqueeBlock.append($clonedList);
          
            const listWidth = $marqueeList.width(); // Actual full width
            const totalWidth = listWidth * 2; // because we clone it once
          
            // Set dynamic width for scrolling
            $marqueeBlock.css({
              "--totalWidth": totalWidth + "px",
              "--scrollSpeed": (totalWidth / 250) + "s", // adjust speed here
            });
          });


          console.clear();
          gsap.registerPlugin(ScrollTrigger);
      
          // Initialize variables
          const panels = gsap.utils.toArray(".panel");
          let scrollTriggers = [];
          let pinScrollTrigger;
      
          function setupAnimations() {
              // Clear existing triggers
              scrollTriggers.forEach(st => st.kill());
              if (pinScrollTrigger) pinScrollTrigger.kill();
      
              // Mobile behavior (≤768px)
              if (window.innerWidth <= 768) {
                  // Reset all panels to visible
                  gsap.set(panels, {
                      scale: 1,
                      autoAlpha: 1,
                      clearProps: "all"
                  });
                  
                  // Reset container styles
                  document.querySelector("#main").style.overflow = "visible";
                  document.querySelector("body").style.overflow = "auto";
              } 
              // Desktop behavior (>768px)
              else {
                  // Set initial states
                  gsap.set(panels, { scale: 1, autoAlpha: 1 });
                  gsap.set(panels.slice(1), { scale: 0.8, autoAlpha: 0 });
      
                  // Create panel animations
                  panels.forEach((panel, i) => {
                      if (panels[i + 1]) {
                          const st = ScrollTrigger.create({
                              trigger: "#main",
                              start: "top+=" + 100 * (i + 1) + "%" + " top",
                              end: "top+=" + 100 * (i + 1) + "%" + " top",
                              id: i,
                              onEnter: () => {
                                  gsap.timeline()
                                      .to(panel, { scale: 0.8, autoAlpha: 0 })
                                      .to(panels[i + 1], { scale: 1, autoAlpha: 1 }, "<");
                              },
                              onEnterBack: () => {
                                  gsap.timeline()
                                      .to(panel, { scale: 1, autoAlpha: 1 })
                                      .to(panels[i + 1], { scale: 0.8, autoAlpha: 0 }, "<");
                              }
                          });
                          scrollTriggers.push(st);
                      }
                  });
      
                  // Create pinning effect
                  pinScrollTrigger = ScrollTrigger.create({
                      trigger: "#main",
                      pin: true,
                      end: "+=" + panels.length * 100 + "%"
                  });
              }
          }
      
          // Initial setup
          setupAnimations();
      
          // Handle resize with debounce
          let resizeTimeout;
          window.addEventListener('resize', function() {
              clearTimeout(resizeTimeout);
              resizeTimeout = setTimeout(() => {
                  setupAnimations();
              }, 100);
          });

  
          // // Portfolio Slider Animation
          // gsap.registerPlugin(ScrollTrigger);
        
          // const sliderTrack = document.querySelector('.slider-track');
          // const sliderItems = document.querySelectorAll('.slider-item');
          
          // // Calculate the total width
          // const totalWidth = sliderItems.length * (600 + 64); // item width + gap
          
          // // Set the track width
          // sliderTrack.style.width = `${totalWidth}px`;
        
          // // Create the horizontal scroll animation
          // gsap.to('.slider-track', {
          //   x: -totalWidth + window.innerWidth,
          //   ease: "none",
          //   scrollTrigger: {
          //     trigger: ".portfolio-slider",
          //     start: "top top",
          //     end: `+=${totalWidth}`,
          //     pin: true,
          //     scrub: 2,
          //     anticipatePin: 1,
          //     invalidateOnRefresh: true,
          //     markers: false
          //   }
          // });
        
          // // Add hover effects
          // sliderItems.forEach(item => {
          //   item.addEventListener('mouseenter', () => {
          //     gsap.to(item, {
          //       scale: 1.05,
          //       duration: 0.5,
          //       ease: "power2.out"
          //     });
          //   });
        
          //   item.addEventListener('mouseleave', () => {
          //     gsap.to(item, {
          //       scale: 1,
          //       duration: 0.5,
          //       ease: "power2.out"
          //     });
          //   });
          // });


            // gsap.registerPlugin(ScrollTrigger);
          
            // window.addEventListener("load", () => {
            //   const sliderTrack = document.querySelector(".slider-track");
            //   const sliderItems = document.querySelectorAll(".slider-item");
          
            //   if (!sliderTrack || sliderItems.length === 0) return;
          
            //   const itemWidth = 600;
            //   const gap = 64;
            //   const totalWidth = sliderItems.length * (itemWidth + gap);
          
            //   sliderTrack.style.width = `${totalWidth}px`;
          
            //   gsap.to(sliderTrack, {
            //     x: () => -(totalWidth - window.innerWidth),
            //     ease: "none",
            //     scrollTrigger: {
            //       trigger: ".portfolio-slider",
            //       start: "top top",
            //       end: () => `+=${totalWidth}`,
            //       pin: true,
            //       scrub: 1.5,
            //       anticipatePin: 1,
            //       invalidateOnRefresh: true,
            //       markers: false
            //     }
            //   });
          
            //   // Hover Effects
            //   sliderItems.forEach(item => {
            //     item.addEventListener('mouseenter', () => {
            //       gsap.to(item, {
            //         scale: 1.05,
            //         duration: 0.3,
            //         ease: "power2.out"
            //       });
            //     });
            //     item.addEventListener('mouseleave', () => {
            //       gsap.to(item, {
            //         scale: 1,
            //         duration: 0.3,
            //         ease: "power2.out"
            //       });
            //     });
            //   });
            // });

          


