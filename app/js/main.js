(function($) {
  "use strict"; // Start of use strict

  $(window).load(function(){
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
      $('body').addClass('ios');
    };
    $('body').removeClass('loaded'); 
  });

  // Old browser notification
  $(function() { 
    $.reject({
      reject: {
        msie: 9
      },
      imagePath: 'img/icons/jReject/',
      display: [ 'chrome','firefox','safari','opera' ],
      closeCookie: true,
      cookieSettings: {
        expires: 60*60*24*365
      },
      header: 'Ваш браузер устарел!',
      paragraph1: 'Вы пользуетесь устаревшим браузером, который не поддерживает современные веб-стандарты и представляет угрозу вашей безопасности.',
      paragraph2: 'Пожалуйста, установите современный браузер:',
      closeMessage: 'Закрывая это уведомление вы соглашаетесь с тем, что сайт в вашем браузере может отображаться некорректно.',
      closeLink: 'Закрыть это уведомление',
    });
  });

  /* placeholder*/     
  $('input, textarea').each(function(){
    var placeholder = $(this).attr('placeholder');
    $(this).focus(function() { $(this).attr('placeholder', '');});
    $(this).focusout(function() {       
      $(this).attr('placeholder', placeholder);       
    });
  });

  $('.intro__col').hide();
  $('.intro__btn').on("click", (function(e) {
    var $this = $(this);
    $('.intro__col').show();
    $this.hide();
    e.preventDefault();
  }));

  $('.header__scroll').click(function(){
    $("html, body").animate({ scrollTop: $(".intro").offset().top }, 1000);
    return false;
  });

})(jQuery); // End of use strict