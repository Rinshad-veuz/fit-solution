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