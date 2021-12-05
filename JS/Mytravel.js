window.onload = function() {
  
  const hotelBtn =  document.getElementById("hotel_extend_btn");
  const hotel_list = document.getElementsByClassName("hotel_list")[0];
  const foodBtn =  document.getElementById("food_extend_btn");
  const food_list = document.getElementsByClassName("food_list")[0];

  hotelBtn.addEventListener("click", () => {
    hotel_list.classList.toggle("hotel_extend");
  })

  foodBtn.addEventListener("click", () => {
    food_list.classList.toggle("food_extend");
  })

   // 開關導覽列======================================>
   $(".nav_btn").on("click",function(){
    $(".nav_btn").toggleClass("nav_action");
    $("header > nav").toggleClass("nav_open");
    if(window.scrollY === 0) return;
    $(".toTop").toggleClass("toTopBtn");
  })

// 監聽scroll bar=================================>
  window.addEventListener("scroll", order);
  function order(){
    bannerMove();
    navGreen();
    tramethodTop();
    tramethodBottom();
    experenceMove();
    historyTopMove();
    historyBottomMove();
  }

// 導覽列變色 + Scroll Bar出現 + GoTop=============>
  function navGreen(){
    let position = $('.banner_container_bottom').offset().top;
    if(window.scrollY > position){
      $('.nav_btn').addClass('nav_green');
      $('.toTop').addClass('toTopBtn');
    }else{
      $('.nav_btn').removeClass('nav_green');
      $('.toTop').removeClass('toTopBtn');
    }
  }

  $('.toTop').on('click', function(){
    $('html, body').animate({scrollTop: 0}, 500);
  })


// 開場Banner進來=======================================>
$('.banner_container_textarea').addClass('bannerMove');
  function bannerMove(){
    let position = $('.tramethod').offset().top;
    if(window.scrollY > position){
      $('.banner_container_textarea').removeClass('bannerMove');
    }else{
      $('.banner_container_textarea').addClass('bannerMove');
    }
  };

// 九州絕景圖片進來=====================================>

  function tramethodTop(){
    let position = $('.banner').offset().top;
    if(window.scrollY > position){
      $('.tramethod_top_right').addClass('tramethod_top_right_move');
    }else{
      $('.tramethod_top_right').removeClass('tramethod_top_right_move');

    }
  }

  function tramethodBottom(){
    let position = $('.tramethod_top_left').offset().top;
    if(window.scrollY > position){
      $('.tramethod_lfImg').addClass('tramethod_lfImg_move');
      $('.tramethod_rtImg').addClass('tramethod_rtImg_move');
    }else{
      $('.tramethod_lfImg').removeClass('tramethod_lfImg_move');
      $('.tramethod_rtImg').removeClass('tramethod_rtImg_move');
    }
  }

// 體驗圖片進來=========================================>
  function experenceMove(){
    let position = ($('.experence').offset().top) - (($('.experence_top_left_img')[0].clientHeight));
    if(window.scrollY > position){
      $('.experence_top_left_img').addClass('experence_top_img_move');
    }else{
      $('.experence_top_left_img').removeClass('experence_top_img_move');
    }
  }

// 歷史圖片進來=========================================>
  function historyTopMove(){
    let position = $('.experence_bottom').offset().top;
    if(window.scrollY > position){
      $('.history_top_right').addClass('history_top_right_move');
    }else{
      $('.history_top_right').removeClass('history_top_right_move');
    }
  }
  function historyBottomMove(){
    let position = $('.history_top').offset().top;
    if(window.scrollY > position){
      $('.history_lfImg').addClass('history_lfImg_move');
      $('.history_rtImg').addClass('history_rtImg_move');
    }else{
      $('.history_lfImg').removeClass('history_lfImg_move');
      $('.history_rtImg').removeClass('history_rtImg_move');
    }
  }










}