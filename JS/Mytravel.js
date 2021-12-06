window.onload = function() {
  
  const hotelBtn =  document.getElementById("hotel_extend_btn");
  const hotel_list = document.getElementsByClassName("hotel_list")[0];
  const foodBtn =  document.getElementById("food_extend_btn");
  const food_list = document.getElementsByClassName("food_list")[0];
  let hotelIsOpen = true;
  let foodIsOpen = true;

  // 開場Banner進來=======================================>
const banner_container_textarea = $('.banner_container_textarea');

banner_container_textarea.addClass('bannerMove');
  function bannerMove(){
    let position = $('.tramethod').offset().top;
    if(window.scrollY > position){
      banner_container_textarea.removeClass('bannerMove');
    }else{
      banner_container_textarea.addClass('bannerMove');
    }
  };
  
   // 旅館more開關====================================>

  hotelBtn.addEventListener("click", () => {
    hotel_list.classList.toggle("hotel_extend");
    if(hotelIsOpen === true) {
      hotelBtn.innerText = "back";
      console.log(foodIsOpen);
      hotelIsOpen = false;
    }else{
      hotelBtn.innerText = "more";
      hotelIsOpen = true;
    }
  })

   // 美食more開關====================================>
  foodBtn.addEventListener("click", () => {
    food_list.classList.toggle("food_extend");
    if(foodIsOpen === true) {
      foodBtn.innerText = "back";
      console.log(foodIsOpen);
      foodIsOpen = false;
    }else{
      foodBtn.innerText = "more";
      foodIsOpen = true;
    }
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


// 九州絕景圖片進來=====================================>
  const tramethod_top_right = $('.tramethod_top_right');
  const tramethod_lfImg = $('.tramethod_lfImg');
  const tramethod_rtImg = $('.tramethod_rtImg');

  function tramethodTop(){
    let position = $('.banner').offset().top;
    if(window.scrollY > position){
      tramethod_top_right.addClass('tramethod_top_right_move');
    }else{
      tramethod_top_right.removeClass('tramethod_top_right_move');

    }
  }

  function tramethodBottom(){
    let position = $('.tramethod_top_left').offset().top;
    if(window.scrollY > position){
      tramethod_lfImg.addClass('tramethod_lfImg_move');
      tramethod_rtImg.addClass('tramethod_rtImg_move');
    }else{
      tramethod_lfImg.removeClass('tramethod_lfImg_move');
      tramethod_rtImg.removeClass('tramethod_rtImg_move');
    }
  }

// 體驗圖片進來=========================================>
  const experence_top_left_img = $('.experence_top_left_img');

  function experenceMove(){
    let position = ($('.experence').offset().top) - ((experence_top_left_img[0].clientHeight));
    if(window.scrollY > position){
      experence_top_left_img.addClass('experence_top_img_move');
    }else{
      experence_top_left_img.removeClass('experence_top_img_move');
    }
  }

// 歷史圖片進來=========================================>
  const history_top_right = $('.history_top_right');
  const history_lfImg = $('.history_lfImg');
  const history_rtImg = $('.history_rtImg');

  function historyTopMove(){
    let position = $('.experence_bottom').offset().top;
    if(window.scrollY > position){
      history_top_right.addClass('history_top_right_move');
    }else{
      history_top_right.removeClass('history_top_right_move');
    }
  }
  function historyBottomMove(){
    let position = $('.history_top').offset().top;
    if(window.scrollY > position){
      history_lfImg.addClass('history_lfImg_move');
      history_rtImg.addClass('history_rtImg_move');
    }else{
      history_lfImg.removeClass('history_lfImg_move');
      history_rtImg.removeClass('history_rtImg_move');
    }
  }










}