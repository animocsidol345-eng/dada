$(document).ready(function(){
  // Анимация появления заголовка и кнопки (fuller / fuller2)
  $("#intro h3").delay(1000).queue(function(n){
    $(this).toggleClass("fuller");
    n();
  });
  $("#intro a").delay(1400).queue(function(n){
    $(this).toggleClass("fuller2");
    n();
  });
  
  // Эффект наведения на кнопку "узнать больше"
  $("#intro a").hover(function(){
    $("#button-overlay").toggleClass("grow");
    $("#button-container a").toggleClass("grow2");
  });
  
  // Анимация иконки меню при наведении
  $("#menu-button").hover(function(){
    $("#menu-button").toggleClass("hover-animation");
    $("#menu-button").toggleClass("hover-color");
  });
  
  // Эффект наведения на пункты меню (смена цвета)
  $('#nav-container ul li a').hover(function(){
    $('#nav-container ul li a').toggleClass('nav-animate');
    $(this).toggleClass('nav-animate');
  });
  
  // ОСНОВНОЕ СОБЫТИЕ: клик по кнопке меню (открыть / закрыть)
  $("#menu-button").click(function (){
    // скрыть/показать intro заголовок
    $("#intro h3").toggleClass("fuller");
    $("#intro a").toggleClass('fuller2');
    
    // анимация иконки меню
    $("#menu-button").toggleClass("animate");
    // показать оверлей меню (на весь экран)
    $("#menu-overlay").toggleClass("reveal");
    // сменить цвет иконки при открытом меню
    $("#menu-button").toggleClass("change-color");
    
    // дополнительное наведение для смены цвета фона
    $("#menu-button").hover(function(){
      $("#menu-button").toggleClass('hover-color');
      $("#menu-button").toggleClass('hover-color2');
    });
    
    // поочерёдное появление пунктов навигации с задержкой
    $("#nav-container").delay(200).queue(function(n){
      $(this).toggleClass("hidden");
      n();
    });
    $("#nav1").delay(400).queue(function(n){
      $(this).toggleClass("hidden");
      n();
    });
    $("#nav2").delay(600).queue(function(n){
      $(this).toggleClass("hidden");
      n();
    });
    $("#nav3").delay(800).queue(function(n){
      $(this).toggleClass("hidden");
      n();
    });
  });
  
  // дополнительная функция для плавной прокрутки по якорям (улучшение UX)
  $('a[href^="#"]').on('click', function(e) {
    var target = $(this.getAttribute('href'));
    if (target.length) {
      e.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top - 20
      }, 600);
    }
  });
});
