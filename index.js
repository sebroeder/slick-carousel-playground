$(document).ready(() => {
  $('.carousel').slick({
    mobileFirst: true,
    infinite: false,
    slidesToScroll: 1,
    slidesToShow: 3,
    arrows: false,
    variableWidth: true,
    centerMode: true,
    responsive: [
      {
        breakpoint: 392,
        settings: {
          slidesToShow: 5,
          arrows: true,
          centerMode: false,
        }
      },
    ]
  })
})
