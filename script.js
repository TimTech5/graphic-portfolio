document.addEventListener("DOMContentLoaded", () => {
  new Swiper(".social-swiper", {
    loop: true,
    lazy: { loadPrevNext: true },
    pagination: {
      el: ".social-swiper .swiper-pagination",
      clickable: true
    }
  });

  new Swiper(".eflier-swiper", {
    loop: true,
    lazy: { loadPrevNext: true },
    pagination: {
      el: ".eflier-swiper .swiper-pagination",
      clickable: true
    }
  });

  new Swiper(".brand-swiper", {
    loop: true,
    lazy: { loadPrevNext: true },
    pagination: {
      el: ".brand-swiper .swiper-pagination",
      clickable: true
    }
  });
});
