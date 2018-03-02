$(document).ready(function() {

  /******** Homepage Carousel - All Photos *********/
  const olapicEndpoint = "https://photorankapi-a.akamaihd.net/customers/215757/media/recent?rights_given=0&include_tagged_galleries=0&auth_token=0a40a13fd9d531110b4d6515ef0d6c529acdb59e81194132356a1b8903790c18&version=v2.2";

  $.ajax({
    dataType: "json",
    url: olapicEndpoint,
    type: "GET",
    data: {
      format: "json"
    },
    success: function(data) {      
      const mediaArray = data.data._embedded.media;

      // Loop through the mediaArray
      for (let i = 0; i < mediaArray.length; i++) {
        let olapicImage = mediaArray[i].images.normal;

        $(".owl-carousel").append("<div class='item olapic-image'><img src='" + olapicImage + "'></div>");
      };

      // Set up Owl Carousel
      $(".owl-carousel").owlCarousel({
        items: 6,
        loop: true,
        touchDrag: true,
        nav: true,
        navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
        dots: false,
        video: true,
        slideBy: 'page',
        navSpeed: 150,
        autoplay: false,
        autoplayTimeout: 2000,
        autoplaySpeed: 150,
        responsive: {
          0: {
            items:1,
            center:true
          },
          414: {
            items:2
          },
          550: {
            items:4
          },
          1000: {
            items:6
          }
        }
      });
    },
    error: function(error){
      console.log(error);
    }
  });
});