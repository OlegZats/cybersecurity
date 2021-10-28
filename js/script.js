let slider = tns({
    container: '.slider__wrapper',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    nav: false,
    arrowKeys: false,
    mouseDrag: true
  });

document.querySelector('.left').addEventListener('click', function() {
    slider.goTo('prev');
});

document.querySelector('.right').addEventListener('click', function() {
  slider.goTo('next');
});
