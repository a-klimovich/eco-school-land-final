$(function() {
  // NAV

  $(document).on('click', '.burgermenu', function(e) {
    e.preventDefault();

    $('.burgermenu__lines').toggleClass('open');
    $('.navigation').toggleClass('active');
  })

  // FORM

  $(document).on('submit', '.registration__form', function(e) {
    e.preventDefault();

    const $form = $(this);

    $.ajax({
      method: $form.attr('method'),
      url: $form.attr('action'),
      data: $form.serialize()
    })
    .done(() => {
      alert('Отправлено успешно')
    })
    .fail(() => {
      alert('Ошибка отправки')
    })
  })

  // SLIDERS

  // header
  const $hedaeSlider = $('.header__slider');
  $hedaeSlider.slick({
    dots: false,
    arrows: false,
    fade: true,
  })
  handleSliderArrows($hedaeSlider, '#headerSliderPrev', '#headerSliderNext', '#headerSliderCounter')

  // extra
  const $extraSlider = $('.extra__slider');
  $extraSlider.slick({
    dots: false,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  })
  handleSliderArrows($extraSlider, '#extraSliderPrev', '#extraSliderNext', '#extraSliderCounter')

  // maintenance
  const $maintenanceSlider = $('.maintenance__slider');
  $maintenanceSlider.slick({
    dots: false,
    arrows: false,
  })
  handleSliderArrows($maintenanceSlider, '#sliderMaintenancePrev', '#sliderMaintenanceNext', '#sliderMaintenanceCounter')

  // comments
  const $commentsSlider = $('.comments-slider');
  $commentsSlider.slick({
    dots: false,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  })
  handleSliderArrows($commentsSlider, '#sliderCommentsPrev', '#sliderCommentsNext', '#sliderCommentsCounter')

  function handleSliderArrows($slider, selectorPrev, selectorNext, selectorCounter) {
    $(document)
      .on('click', selectorNext, function() {
        $slider.slick('slickNext');
      })
      .on('click', selectorPrev, function() {
        $slider.slick('slickPrev');
      });

    $slider.on('afterChange', (event, slick, currentSlide) => {
      const counter = currentSlide + 1;
  
      $(selectorCounter).find('span').html(counter);
    })
  }
})