document.addEventListener("DOMContentLoaded", () => {
  console.log('static scripts are loaded');

  // Play video
  const video = document.getElementById("video-source");
  if (video) {
    video.play();
  }

  // Sticky header
  const header = document.querySelector(".header");
  if (header) {
    window.addEventListener("scroll", function() {
      const isSticky = window.scrollY > 0;
      header.classList.toggle("header-sticky", isSticky);
    });
  }

  // Cookie modal
  const cookieWrapper = document.getElementById("cookieWrapper");
  const acceptCookie = document.getElementById("acceptCookie");
  if (cookieWrapper && acceptCookie) {
    if (!localStorage.getItem("cookieAccepted")) {
      cookieWrapper.style.display = "block";
    }
    acceptCookie.addEventListener("click", function() {
      localStorage.setItem("cookieAccepted", "true");
      cookieWrapper.style.display = "none";
    });
  }

  // Mobile menu
  const openMenuButton = document.getElementById('js-open-mobile-menu');
  const mobileMenu = document.getElementById('js-mobile-menu');
  if (openMenuButton && mobileMenu) {
    openMenuButton.addEventListener('click', () => {
      if (mobileMenu.classList.contains('open')) {
        mobileMenu.classList.remove('open');
      } else {
        mobileMenu.classList.add('open');
      }
    });
  }

  // Go Explore bottom position from Cookie height
  const goExplore = document.getElementById("goExplore");
  const resizeObserver = new ResizeObserver(() => {
    goExplore.style.bottom = `${cookieWrapper.clientHeight}px`
  });

  resizeObserver.observe(cookieWrapper);
});
