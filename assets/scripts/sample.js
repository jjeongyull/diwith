!function() {
  // load_today_count();
  new Swiper(".mySwiper1", {
      spaceBetween: 30,
      pagination: {
          el: ".swiper-pagination",
          clickable: !0
      }
  }), new Swiper(".mySwiper1_2", {
      spaceBetween: 30,
      pagination: {
          el: ".swiper-pagination2",
          clickable: !0
      }
  }), new Swiper("", {
      spaceBetween: 30
  });
  var e = document.querySelectorAll(".mySwiper2 .swiper-slide").length,
      e = (new Swiper(".mySwiper2", {
          slidesPerView: 1.5,
          spaceBetween: 20,
          centeredSlides: !0,
          loop: 3 < e,
          breakpoints: {
              760: {
                  slidesPerView: 2.5,
                  spaceBetween: 30,
                  centeredSlides: !1,
                  loop: !1
              }
          },
          navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev"
          }
      }),new Swiper(".mySwiper2_1", {
        slidesPerView: 1.5,
        spaceBetween: 20,
        centeredSlides: !0,
        loop: 3 < e,
        breakpoints: {
          760: {
                slidesPerView: 1.7,
                spaceBetween: 30,
                centeredSlides: !1,
                loop: !1
            }
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        }
    }),new Swiper(".mySwiper2_2", {
      slidesPerView: 1.5,
      spaceBetween: 20,
      centeredSlides: !0,
      // loop: 3 < e,
      breakpoints: {
        760: {
              slidesPerView: 1.5,
              spaceBetween: 30,
              centeredSlides: !1,
        
          }
      },
      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
      }
  }), new Swiper(".mySwiper3", {
          spaceBetween: 50,
          navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev"
          }
      }), new Swiper(".mySwiper3.mo", {
          spaceBetween: 50,
          pagination: {
              el: ".swiper-pagination3",
              clickable: !0
          }
      }), new Swiper(".mySwiper3-1", {
          spaceBetween: 50,
          navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev"
          }
      }), document.querySelectorAll(".mySwiper4 .swiper-slide").length);
  new Swiper(".mySwiper4", {
          slidesPerView: 1.5,
          spaceBetween: 20,
          centeredSlides: !0,
          loop: 3 < e,
          navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev"
          },
          breakpoints: {
            760: {
                  slidesPerView: 4.5,
                  spaceBetween: 30,
                  centeredSlides: !1,
                  loop: !1
              }
          }
      }),
      function() {
          "use strict";

          function n(e) {
              var t = e.querySelectorAll(".tab"),
                  i = e.querySelectorAll(".content");
              t.forEach(function(e, n) {
                  e.addEventListener("click", function() {
                      t.forEach(function(e) {
                          return e.classList.remove("active")
                      }), i.forEach(function(e) {
                          return e.classList.remove("active")
                      }), this.classList.add("active"), i[n].classList.add("active")
                  })
              })
          }
          document.addEventListener("DOMContentLoaded", function() {
              var e;
              null != (e = document.querySelectorAll(".sz-tab-container")) && e.forEach(n)
          })
      }(),
      function(e) {
          "use strict";
          var n = e("#toggle"),
              t = e("#overlay"),
              i = function() {
                  n.removeClass("active"), t.removeClass("open")
              };
          n.on("click", function() {
              n.hasClass("active") ? i() : (n.addClass("active"), t.addClass("open"))
          }), t.find("a").on("click", function() {
              i()
          })
      }(jQuery)
}();