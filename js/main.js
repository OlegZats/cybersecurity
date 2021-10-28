$(function(){
  $(".menu").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});
    $('.cybersecurity__slider, .cyber-threats__slider').slick({
        prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="assets/back.svg" alt="back"></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"><img src="assets/next.svg" alt="next"></button>',
        autoplay: true,
        fade: true,
        responsive: [
          {
            breakpoint: 601,
            settings: {
              arrows: false
            }
          },
        ]
    });




});