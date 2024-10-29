import Swiper from "swiper";
import { Pagination, Autoplay, Scrollbar, Navigation } from "swiper/modules";

export default function sliders() {
  const heroSlider = document.querySelector(".hero__slider");
  if (heroSlider) {
    const swiper = new Swiper(heroSlider, {
      speed: 700,
      modules: [Pagination, Autoplay, Scrollbar],
      slidesPerView: "auto",
      spaceBetween: 16,
      scrollbar: {
        el: ".hero .slider-scrollbar",
      },
      pagination: {
        el: ".hero .fraction",
        type: "custom",
        renderCustom: function (swiper, current, total) {
          return `<span>${("0" + current).slice(-2)}</span> <span>— ${("0" + total).slice(-2)}</span>`;
        },
      },
      breakpoints: {
        1460: {
          slidesPerView: 4,
          spaceBetween: 24,
        },
      },
    });
  }

  const addServicesSlider = document.querySelector(".add-services__slider");
  if (addServicesSlider && window.matchMedia("(max-width: 1365px)").matches) {
    const swiper = new Swiper(addServicesSlider, {
      speed: 700,
      modules: [Pagination, Autoplay, Scrollbar],
      slidesPerView: "auto",
      spaceBetween: 16,
      scrollbar: {
        el: ".add-services .slider-scrollbar",
      },
      pagination: {
        el: ".add-services .fraction",
        type: "custom",
        renderCustom: function (swiper, current, total) {
          return `<span>${("0" + current).slice(-2)}</span> <span>— ${("0" + total).slice(-2)}</span>`;
        },
      },
    });
  }

  const calcSlider = document.querySelector(".calc__slider");
  if (calcSlider) {
    const swiper = new Swiper(calcSlider, {
      speed: 700,
      modules: [Pagination, Autoplay, Scrollbar],
      slidesPerView: "auto",
      spaceBetween: 16,
      autoHeight: true,
      scrollbar: {
        el: ".calc .slider-scrollbar",
      },
      pagination: {
        el: ".calc .fraction",
        type: "custom",
        renderCustom: function (swiper, current, total) {
          return `<span>${("0" + current).slice(-2)}</span> <span>— ${("0" + total).slice(-2)}</span>`;
        },
      },
      breakpoints: {
        1460: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
      },
    });
  }

  const trialsSlider = document.querySelector(".trials__slider");
  if (trialsSlider) {
    const swiper = new Swiper(trialsSlider, {
      speed: 700,
      modules: [Pagination, Autoplay, Navigation],
      slidesPerView: "auto",
      spaceBetween: -10,
      centeredSlides: true,
      initialSlide: 5,
      simulateTouch: false,
      navigation: {
        nextEl: ".trials .slider-nav__btn--next",
        prevEl: ".trials .slider-nav__btn--prev",
      },
      pagination: {
        el: ".trials .slider-pagination",
        clickable: true,
      },
      breakpoints: {
        1110: {
          spaceBetween: 25,
        },
      },
    });
  }

  const aboutSlider = document.querySelector(".about-main__slider");
  if (aboutSlider) {
    const swiper = new Swiper(aboutSlider, {
      speed: 700,
      modules: [Pagination, Autoplay, Scrollbar],
      slidesPerView: "auto",
      spaceBetween: 16,
      scrollbar: {
        el: ".about-main .slider-scrollbar",
      },
      pagination: {
        el: ".about-main .fraction",
        type: "custom",
        renderCustom: function (swiper, current, total) {
          return `<span>${("0" + current).slice(-2)}</span> <span>— ${("0" + total).slice(-2)}</span>`;
        },
      },
      breakpoints: {
        1460: {
          slidesPerView: 4,
          spaceBetween: 24,
        },
      },
    });
  }

  const portfolioSlider = document.querySelector(".portfolio__slider");
  if (portfolioSlider) {
    const swiper = new Swiper(portfolioSlider, {
      speed: 700,
      modules: [Pagination, Autoplay, Scrollbar],
      slidesPerView: "auto",
      spaceBetween: 16,
      scrollbar: {
        el: ".portfolio .slider-scrollbar",
      },
      pagination: {
        el: ".portfolio .fraction",
        type: "custom",
        renderCustom: function (swiper, current, total) {
          return `<span>${("0" + current).slice(-2)}</span> <span>— ${("0" + total).slice(-2)}</span>`;
        },
      },
      breakpoints: {
        993: {
          slidesPerView: 3,
          spaceBetween: 24,
          pagination: {
            el: ".portfolio .slider-pagination",
            type: "bullets",
            clickable: true,
          },
        },
        744: {
          slidesPerView: 3,
          scrollbar: false,
          pagination: {
            el: ".portfolio .slider-pagination",
            type: "bullets",
            clickable: true,
          },
        },
      },
    });
  }
}
