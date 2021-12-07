window.onload = function() {
 
  const left_btn = document.getElementsByClassName("introduce_btn_left")[0];
  const right_btn = document.getElementsByClassName("introduce_btn_right")[0];
  const travelchange = document.getElementById("travel_img_change");
  let imageidx = 0;
  const travel_text_title = document.getElementById("travel_text_title");
  const travel_text_content = document.getElementById("travel_text_content");
  const county_name = document.getElementsByClassName("county_name")[0];
  const introduce_imf = [
    {
      county:"大分縣",
      title:"湯布院",
      content:"大分縣最有人氣的觀光景點就屬「湯布院」，很多旅客來過一次就會愛上而不斷再訪，由布院的絕美自然景色「由布岳」與「金鱗湖」美得讓人醉心，來由布院除了可以入住溫泉旅館享受泡湯樂趣外，觀光景點附近便是美食餐廳與伴手禮店林立的逛街大道，豐後牛、蕎麥麵、漢堡排道可樂餅、布丁甜點等由布院必吃美食都很可口，縱使入住兩天一夜也不無聊。",
  },
  {
    county:"宮崎縣",
    title:"高千穗",
    content:"神話故鄉的高千穗，有著一個美麗的峽谷奇景「高千穗峽」，由五瀨川侵蝕10萬年的阿蘇熔岩而形成的峽谷，乍看很難相信是大自然的作品，與世界知名峽谷相比雖稱不上壯觀，但其細緻幽靜是日本獨有，縱使走過各國峽谷飄兒也推薦要來高千穗峽感受此處特有的神靈氣息，整個高千穗盆地被霧覆蓋著，若隱若現的景觀，彷彿人間仙境，令人著迷。",
  },
  {
    county:"長崎縣",
    title:"豪斯登堡",
    content:"飄兒心目中小小覺得一個超越歐洲的美好度假村，日本第一大主題樂園「豪斯登堡」重現了中世紀的歐洲街景，除了絕美的荷蘭風車造景、歐洲建築造景，3月〜4月100萬株鬱金香花海更是美不勝收，沒有歐洲人山人海的擁擠，是個可以同時體驗歐洲美景與日本優質環境與服務的地方，園區內還有很多新科技VR遊戲，無論大人小孩或情侶都很適合！",
  },
  {
    county:"熊本縣",
    title:"黑川溫泉",
    content:"黒川温泉是這次九州自由行中飄兒最愛的景點了！有「日本百大秘湯首選」、「神秘的山間溫泉小鎮」美稱的黒川温泉位於阿蘇外環山包圍的北部區域，走在高低起伏的溫泉老街上，兩旁盡是江戶時期的木造古式建築，清晨時籠罩在霧氣白煙中的景色令人難以忘懷，預算足夠的話，不妨找一間喜歡的溫泉旅館入住一天，享受日本票選氛圍第一名的溫泉秘境吧！",
  },
  {
    county:"福岡縣",
    title:"博多運河城",
    content:"來到九州福岡，除了超好逛好買的天神站地下街，博多運河城也是必逛的複合式購物商場，內有服飾、藥妝到美食餐廳等超過200間品牌商家進駐，松本清等藥妝店、無印良品、三麗鷗Sanrio GALLERY、迪士尼商店等品牌應有盡有，而飄兒喜歡博多運河城的原因，是這裡整個戶外都設計得很有氣氛，搭上貫穿商城的人工運河，走在商場裡很詩情畫意呢！"
  },
  {
    county:"佐賀縣",
    title:"祐德稻荷神社",
    content:"日本稻荷神社是京都的「伏見稻荷大社」，其他兩座與祂齊名的分別是「佐賀縣：祐德稻荷神社」以及「茨城縣：笠間稻荷神社」，並稱日本三大稻荷，來到佐賀南部，你會發現這裡的公車名為「祐德巴士」，其實祐德這個名字就是指祐德神社。祐德稻荷神社別名「鎮西日光」，舊社格為縣社和伏見稻荷大社、笠間稻荷神社並稱日本三大稻荷。"
  },
  {
    county:"鹿兒島縣",
    title:"櫻島",
    content:"鹿兒島的象徵-櫻島是浮現於距南九州鹿兒島市僅4公里的海上火山島。海拔1,117公尺，是世界上屈指可數的活火山。櫻島是出現於姶良破火山口南部邊緣上的火山，曾多次出現大的噴發。其中，大正大噴發（1914年），掩埋了寬400公尺的海峽，與對岸的大隅半島陸地連接到了一起。山腰上建有可眺望山頂的展望台，可近距離感受偶爾噴煙的活火山之活力。"
  }
  ];

  // <-------------------景點介紹輪播------------------>
  
  left_btn.addEventListener("click",()=>{
    clearInterval(timeauto);
    imageidx--;
    if(imageidx < 0) imageidx = introduce_imf.length -1;
    total_change();
    timego();
  })

  right_btn.addEventListener("click",()=>{
    clearInterval(timeauto);
    imageidx++;
    if(imageidx > introduce_imf.length -1) imageidx = 0;
    total_change();
    timego();
  })

  const total_change = function(){
    let i = imageidx+1;
    travel_text_title.innerText = introduce_imf[imageidx].title;
    travelchange.src = "./img/kyushu/main/Kyushu-introduce-"+ i +".jpg";
    travel_text_content.innerText = introduce_imf[imageidx].content;
    county_name.innerText = introduce_imf[imageidx].county;
  };

  const timego = function(){
    timeauto = setInterval(function(){
      imageidx++;
      if(imageidx > introduce_imf.length - 1 ){
        imageidx = 0;
      }
      // console.log(imageidx);
      total_change();
    },5000);
  };
  timego();

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
    mapMove();  
    travelMove();
    magazineMove();
    popularMove();
  }
 
// 導覽列變色 + Scroll Bar出現 + GoTop=============>
  function navGreen(){
    let position = $('.kyushu_introduce').offset().top;
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
// Banner Scroll===================================>

    $('.banner_scroll').on('click', ()=>{
      let position = $('.kyushu_introduce').offset().top;
      $('html, body').animate({scrollTop: position}, 500);
    });

// 九州地圖進來=====================================>

  function mapMove(){
    let position = ($('.banner_photo').offset().top)/2;
    if(window.scrollY > position){
      $('.kyushu-map').addClass("map_move");
    }else{
      $('.kyushu-map').removeClass("map_move");
    }
  }

// 旅行圖片進來=====================================>

  function travelMove(){
    let position = ($('.my_travel_contain').offset().top) - ($('.my_travel_contain')[0].clientHeight);
    if(window.scrollY > position){
      $('.my_travel_contain > ul').addClass('travel_move');
    }else{
      $('.my_travel_contain > ul').removeClass('travel_move');
    }
  }

// 雜誌圖片進來=====================================>
const magazine_contain = $('.magazine_contain');

function magazineMove(){
  let position = (magazine_contain.offset().top) - (magazine_contain[0].clientHeight)*3;
  if(window.scrollY > position){
    magazine_contain.addClass('magazine_move');
  }else{
    magazine_contain.removeClass('magazine_move');
  }
}

// 景點進來=====================================>
const travel_contain = $('.travel_contain');

function popularMove(){
  let position = (travel_contain.offset().top) - (travel_contain[0].clientHeight)*3;
  if(window.scrollY > position){
    travel_contain.addClass('popular_move');
  }else{
    travel_contain.removeClass('popular_move');
  }
}






}
