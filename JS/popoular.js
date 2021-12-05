window.onload = function() {

  var bannerTimeSet = null;
  // let e = 1;
  
  $(".banner_photo > li").hide();
  $("#banner_1").show();
  $(".banner_btn_area > div").on("click", banneraction);

  function banneraction(){
    clearInterval(bannerTimeSet);
    const idx = $(this)[0].id.split('').reverse()[0];
    bannerDomRender(idx);
    bannerTimeGo(idx);
    console.log(idx);
  }

  function bannerTimeGo(i){
    bannerTimeSet = setInterval(() => {
      if(i < $(".banner_img").length){
        i++;
      }else{
        i = 1;
      }
      bannerDomRender(i);
      console.log(i);
    },5000);
  }

  function bannerDomRender(e){
    $(".banner_photo > .banner_img").fadeOut(1000);
    $("#banner_" + e).delay(100).fadeIn(500);
    $(".banner_btn_area > div").removeClass("box_white");
    $("#banner_btn_" + e).addClass("box_white");
  }

  bannerTimeGo(1);


// 內容換圖區=========================================>
  var canyanTimeSet = null;
  var trainTimeSet = null;
  var templeTimeSet = null;
  var shrineTimeSet = null;
  let i = 1;

  $(".content_photo > .content_img").hide();
  $("#canyon_1").show();
  $("#train_1").show();
  $("#temple_1").show();
  $("#shrine_1").show();
  $(".canyan_btn > div").on("click", canyanaction);
  $(".train_btn > div").on("click", trainaction);
  $(".temple_btn > div").on("click", templeaction);
  $(".shrine_btn > div").on("click", shrineaction);


  function canyanaction(){
    clearInterval(canyanTimeSet);
    const idx = $(this)[0].id.split('').reverse()[0];
    canyanDomRender(idx);
    canyanTimeGo(idx);
    console.log(idx);
  }

  function trainaction(){
    clearInterval(trainTimeSet);
    const idx = $(this)[0].id.split('').reverse()[0];
    trainDomRender(idx);
    trainTimeGo(idx);
    console.log(idx);
  }

  function templeaction(){
    clearInterval(templeTimeSet);
    const idx = $(this)[0].id.split('').reverse()[0];
    templeDomRender(idx);
    templeTimeGo(idx);
    console.log(idx);
  }

  function shrineaction(){
    clearInterval(shrineTimeSet);
    const idx = $(this)[0].id.split('').reverse()[0];
    shrineDomRender(idx);
    shrineTimeGo(idx);
    console.log(idx);
  }

  function canyanTimeGo(i){
    canyanTimeSet = setInterval(() => {
      if(i < $(".canyon_img").length){
        i++;
      }else{
        i = 1;
      }
      canyanDomRender(i);
      // console.log(i);
    },5000);
  }

  function trainTimeGo(i){
    trainTimeSet = setInterval(() => {
      if(i < $(".train_img").length){
        i++;
      }else{
        i = 1;
      }
      trainDomRender(i)
      // console.log(i);
    },6000);
  }

  function templeTimeGo(i){
    templeTimeSet = setInterval(() => {
      if(i < $(".temple_img").length){
        i++;
      }else{
        i = 1;
      }
      templeDomRender(i)
      // console.log(i);
    },5000);
  }

  function shrineTimeGo(i){
    shrineTimeSet = setInterval(() => {
      if(i < $(".shrine_img").length){
        i++;
      }else{
        i = 1;
      }
      shrineDomRender(i)
      // console.log(i);
    },6000);
  }

  function canyanDomRender(e){
    $(".content_photo > .canyon_img").fadeOut(1000);
    $("#canyon_" + e).delay(100).fadeIn(500);
    $(".canyan_btn > div").removeClass("con_btn_color");
    $("#content_btn_" + e).addClass("con_btn_color");
  }

  function trainDomRender(e){
    $(".content_photo > .train_img").fadeOut(1000);
    $("#train_" + e).delay(100).fadeIn(500);
    $(".train_btn > div").removeClass("con_btn_color");
    $("#train_btn_" + e).addClass("con_btn_color");
  }

  function templeDomRender(e){
    $(".content_photo > .temple_img").fadeOut(1000);
    $("#temple_" + e).delay(100).fadeIn(500);
    $(".temple_btn > div").removeClass("con_btn_color");
    $("#temple_btn_" + e).addClass("con_btn_color");
  }

  function shrineDomRender(e){
    $(".content_photo > .shrine_img").fadeOut(1000);
    $("#shrine_" + e).delay(100).fadeIn(500);
    $(".shrine_btn > div").removeClass("con_btn_color");
    $("#shrine_btn_" + e).addClass("con_btn_color");
  }

  canyanTimeGo(1);
  trainTimeGo(1);
  templeTimeGo(1);
  shrineTimeGo(1);

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
      navGreen();
      canyonMove();
      trainMove();
      templeMove();
      shrineMove();
      bannerTxtMove();
      othersItemMove();
    }
  
  // 導覽列變色 + Scroll Bar出現 + GoTop=============>
    function navGreen(){
      let position = $('.news').offset().top;
      if(window.scrollY > position){
        $('.nav_btn').addClass('nav_green');
        $('.toTop').addClass('toTopBtn');
      }else{
        $('.nav_btn').removeClass('nav_green');
        $('.toTop').removeClass('toTopBtn');
      }
    }
  
    $('.toTop').on("click", function(){
      $('html, body').animate({scrollTop: 0}, 500);
    })

  // 開關導覽列======================================>
    $('.banner_textarea > h2').addClass('banner_textarea_h2_move');
    $('.banner_textarea > h1').addClass('banner_textarea_h1_move');

    function bannerTxtMove(){
      let position = $('.news').offset().top;
      if(window.scrollY > position){
        $('.banner_textarea > h2').removeClass('banner_textarea_h2_move');
        $('.banner_textarea > h1').removeClass('banner_textarea_h1_move');
      }else{
        $('.banner_textarea > h2').addClass('banner_textarea_h2_move');
        $('.banner_textarea > h1').addClass('banner_textarea_h1_move');    
      }
    }

  // 內文文字滑入=====================================>

    function canyonMove(){
      let position = ($('.canyon_txt').offset().top) - ($('.canyon_txt')[0].clientHeight)*2;
      if(window.scrollY > position){
        $('.canyon_txt').addClass('canyon_txt_move');
      }else{
        $('.canyon_txt').removeClass('canyon_txt_move');
      }
    }

    function trainMove(){
      let position = ($('.train_txt').offset().top) - ($('.train_txt')[0].clientHeight)*2;
      if(window.scrollY > position){
        $('.train_txt').addClass('train_txt_move');
      }else{
        $('.train_txt').removeClass('train_txt_move');
      }
    }

    function templeMove(){
      let position = ($('.temple_txt').offset().top) - ($('.temple_txt')[0].clientHeight)*2;
      if(window.scrollY > position){
        $('.temple_txt').addClass('temple_txt_move');
      }else{
        $('.temple_txt').removeClass('temple_txt_move');
      }
    }

    function shrineMove(){
      let position = ($('.shrine_txt').offset().top) - ($('.shrine_txt')[0].clientHeight)*2;
      if(window.scrollY > position){
        $('.shrine_txt').addClass('shrine_txt_move');
      }else{
        $('.shrine_txt').removeClass('shrine_txt_move');
      }
    }

    
  // 下方額外內容向上滑入=====================================>

  function othersItemMove(){
    let position = ($('.others_item').offset().top) - ($('.others_item')[0].clientHeight)*2;
    if(window.scrollY > position){
      $('.others_item').addClass('others_item_move');
    }else{
      $('.others_item').removeClass('others_item_move');
    }
  }  


}