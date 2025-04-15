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