$(document).ready(function () {
    $("#jogos ul").bxSlider({
        auto: true,
        speed: 2000,
        controls: false,
      });
    $("#galeria-camisas .container").magnificPopup({
      delegate: "a",
      type: "image",
      closeOnContentClick: false,
      closeBtnInside: false,
      mainClass: "mfp-with-zoom mfp-img-mobile",
  
      image: {
        verticalFit: true,
      },
      gallery: {
        enabled: true,
      },
      zoom: {
        enabled: true,
        duration: 300,
        opener: function (element) {
          return element.find("img");
        },
      },
    });
  });