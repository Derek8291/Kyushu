window.onload = function() {

  const data = [
    {
      idx:1,
      area: "福岡縣",
      classify: "活動",
      title: "櫻井二見浦 糸島",
      content: "於糸島的櫻井二見浦是入選「日本海灘百選」與「日本夕陽百選」的絕景景點。沙灘上矗立著莊嚴鳥居，另外還有以注連繩相繫，宛如夫妻般兩相對望的 2 座巨岩（夫婦岩）。相對於以朝陽著稱的三重縣伊勢二見浦，福岡縣筑前二見浦則以夕陽而聞名，而巨岩並立於岸邊約 150 公尺處海面的和睦景象，也成為締結良緣與夫妻圓滿的幸福象徵。",
    },
    {
      idx:2,
      area: "福岡縣",
      classify: "住宿",
      title: "筑後川溫泉",
      content: "筑後川溫泉廣布於筑後川河畔，除了對風濕痛、痛風、神經痛有良好的效果外，更有美容效果，可讓肌膚變得光滑柔嫩，又被稱為「美肌之湯」。其泉質優良，甚至被指定為日本環境省國民保養溫泉地區。",
    },
    {
      idx:3,
      area: "佐賀縣",
      classify: "文化",
      title: "九年庵",
      content: "九年庵是佐賀的大企業家，伊丹彌太郎於明治 25 年著手建造的別墅，耗時約 9 年歲月，於明治 33 年完成的 6,800 平方公尺庭園。別墅為歇山頂，屋頂為葦葺，土牆為杉板，還有周圍是使用真竹的濡緣等等，光是外觀就有著豐富的山野之趣，這是一棟從材質、構造等，一切都值得細心品味的數寄屋建築物。庭園相當遼闊，還種植了許多杜鵑花及紅葉類等植物，藉著四季更替描繪出美麗的景色。再者，庭園的一整片青苔會讓人有種彷彿像鋪了地毯一樣的錯覺。九年庵在每年春末及秋天紅葉盛開時期會對外開放。您可搭配到仁比山神社等地散步的行程一起同樂。",
    },
    {
      idx:4,
      area: "佐賀縣",
      classify: "購物",
      title: "川古大楠公園",
      content: "川古大楠公園位於武雄市若木町。那是個以宏偉壯麗的川古大楠及水車讓人印象深刻的公園。附設的為朝館除了有上演參考當地傳說的人偶劇以外，還有販賣從幼樹摘採的蔬菜及加工品，以及大楠公園水車精米的「水車米」。",
    },
    {
      idx:5,
      area: "長崎縣",
      classify: "活動",
      title: "筒城濱海水浴場",
      content: "白濱青松沙灘廣闊延伸，筒城七濱是壹岐最具代表性的沙灘群。其中的筒城濱海水浴場是壹岐唯一一個獲選為日本百大海水浴場、日本百大海灘的海灘。又白又細緻的沙灘持續延伸約 600 公尺，淺灘寬闊，海浪平穩，因此夏天聚集了許多來享受海水浴的遊客，極為熱鬧。相鄰的筒城濱交流廣場內也有完備的露營區、烤肉廣場、網球場等設施，此處是壹岐在夏天期間人潮最多的觀光景點。",
    },
    {
      idx:6,
      area: "熊本縣",
      classify: "文化",
      title: "熊本城",
      content: "居高守望城下，熊本的象徵性存在在震災中受創嚴重的熊本城，是熊本縣的重要觀光景點，目前正積極地展開重建。熊本城乃由戰國時代名將加藤清正命人於 1601 年 (慶長 6 年) 開始動工，耗時 7 年才建造完成，被列為日本三大名城之一。清正所建的這座熊本城堅固無比，堪稱戰國要塞，在西南戰爭之際，薩摩軍久久無法攻陷。當時約有 3,000 多名政府軍困守城內，撐過了 50 多天。這也就不難理解，為何在數年後，坊間會盛傳西鄉隆盛曾說道：「吾等並非輸給政府軍，而是輸給清正公。」",
    },
    {
      idx:7,
      area: "熊本縣",
      classify: "活動",
      title: "菊池溪谷",
      content: "菊池西谷位在菊池市的東北部，阿蘇九重國立公園的一隅，從阿蘇外輪山湧出的伏流水甚至被選為「日本名水百選」，水質無比清澈。",
    },
    {
      idx:8,
      area: "大分縣",
      classify: "美食",
      title: "雞肉天婦羅",
      content: "1962 年，在大分市食堂誕生的「雞肉天婦羅」，如今已是大分鄉土料理的代表。包裹金黃色天婦羅麵衣的雞肉，炸得酥酥脆脆軟嫩多汁，沾上橘醋醬之後，就是令人上癮的美味。",
    },
    {
      idx:9,
      area: "大分縣",
      classify: "住宿",
      title: "天瀨溫泉",
      content: "位於大分縣日田市天瀨町的天瀨溫泉，以混浴露天式的川湯聞名。河川沿岸有 5 個公共露天溫泉池，飄起的縷縷白煙更為此處添增幾許溫泉鄉的風情。在這裡單日來回的旅途也能泡湯，混浴更設計為女性也能放心使用的公共露天溫泉池，讓更多旅客都能舒適地享受溫泉。泉質多樣，泉量豐富。以往的溫泉湧出量極多，甚至有「只要在河邊到處都有溫泉湧現」的這種說法。現在幾乎所有登錄於天瀨溫泉旅館組合的溫泉都是泉源溫泉。",
    },
    {
      idx:10,
      area: "宮崎縣",
      classify: "活動",
      title: "南鄉溫泉 山霧",
      content: "南鄉溫泉是舉辦美鄉町三大祭典之一『師走祭』的登門（伊佐賀神社的木城、與比木神社會面、在一本鳥居前迎火）首日時，從祭祀著百濟王族的神社後山湧出的溫泉。",
    },
    {
      idx:11,
      area: "宮崎縣",
      classify: "美食",
      title: "牡蠣小屋 牡蠣寧",
      content: "宮崎縣日向市的細島港為天然良港，發展定置網漁等漁業，以宮崎縣第一大的岩牡蠣產量為傲，充滿著大海的恩惠。港內的捕撈場以可撈起新鮮海產著稱，人潮總是絡繹不絕。在充滿海潮香氣的細島港旁，獨具摩登氛圍的牡蠣小屋『牡蠣寧』提供剛捕獲的美味細島岩牡蠣。",
    },
    {
      idx:12,
      area: "鹿兒島縣",
      classify: "購物",
      title: "天文館通",
      content: "想在鹿兒島買伴手禮的話，不妨來天文館，這裡有許多販售當地特產和甜點的伴手禮商店。除了購買伴手禮外，這裡也有許多餐廳，觀光之際可在此休憩，享受美食。晚上的天文館則到處都是居酒屋，熱鬧不已。不妨體驗看看天文館的不同面貌。",
    },
    {
      idx:13,
      area: "鹿兒島縣",
      classify: "住宿",
      title: "霧島溫泉鄉",
      content: "霧島的山腳到平原佈滿了各種不同的溫泉，共有 4 個溫泉鄉：「霧島溫泉鄉」、「霧島神宮溫泉鄉」、「妙見、安樂溫泉鄉」、「日當山溫泉鄉」。每處溫泉設施都有不同泉質的溫泉，一般常見的 10 種泉質，霧島的溫泉地就有其中的 9 種。",
    },
    {
      idx:14,
      area: "佐賀縣",
      classify: "體驗",
      title: "柳川渡船",
      content: "艘，可瞧見船隻四處穿梭在街巷中的光景、以及船伕清洗著渡船的愜意風光。 4 個溫泉鄉：「霧島溫泉鄉」、「霧島神宮溫泉鄉」、「妙見、安樂溫泉鄉」、「日當山溫泉鄉」。每處溫泉設施都有不同泉質的溫泉，一般常見的 10 種泉質，霧島的溫泉地就有其中的 9 種。",
    },

  ]

  const searchimg = document.getElementsByClassName("sraechimg");
  const color = document.getElementsByClassName("color");
  const areaimg = document.getElementsByClassName("areaimg");
  const togreen = document.getElementsByClassName("togreen");
  const viewcontain = document.getElementsByClassName("viewrelease_contain")[0];
  var html = '';
  const event = document.getElementById("event");
  const culture = document.getElementById("culture");
  const food = document.getElementById("food");
  const hotel = document.getElementById("hotel");
  const shop = document.getElementById("shop");
  const experence = document.getElementById("experence");
  const all = document.getElementById("all");
  const catecoclear = document.getElementsByClassName("category_color_clear");

  event.addEventListener("click", eventbtn);
  culture.addEventListener("click", culturebtn);
  food.addEventListener("click", foodbtn);
  hotel.addEventListener("click", hotelbtn);
  shop.addEventListener("click", shopbtn);
  experence.addEventListener("click", experencebtn);
  all.addEventListener("click", allbtn);

//監聽所有縣市的按鈕
  for(let i=0; i<searchimg.length; i++){
    searchimg[i].addEventListener("click", cityId);
  }

  function cityId(){
    let idx = Number(this.id.substr(1) - 1);
    imgtobig(idx);
  }

  $('.fukuBtn').on('click', ()=>{
    areaRender(0);
    imgtobig(0);
  })

  $('.oitaBtn').on('click', ()=>{
    areaRender(1);
    imgtobig(1);
  })

  $('.sagaBtn').on('click', ()=>{
    areaRender(2);
    imgtobig(2);
  })

  $('.nagaBtn').on('click', ()=>{
    areaRender(3);
    imgtobig(3);
  })

  $('.kumaBtn').on('click', ()=>{
    areaRender(4);
    imgtobig(4);
  })

  $('.miyaBtn').on('click', ()=>{
    areaRender(5);
    imgtobig(5);
  })

  $('.kagoBtn').on('click', ()=>{
    areaRender(6);
    imgtobig(6);
  })

//area的圖片點擊放大
  function imgtobig(idx){
    catecolorreset();
    // console.log(idx);
    imgareaReset();
    color[idx].classList.add("colorchange");
    areaimg[idx].classList.add("imgbigger");
    togreen[idx].classList.add("backcolor");
    searchimg[idx].classList.add("bordertobig");
    areaRender(idx);
    $('html, body').animate({scrollTop: $('.viewrelease').offset().top}, 500);
  };

//area重製
  function imgareaReset(){
    for(let i=0; i<searchimg.length; i++){
      color[i].classList.remove("colorchange");
      areaimg[i].classList.remove("imgbigger");
      togreen[i].classList.remove("backcolor");
      searchimg[i].classList.remove("bordertobig");
    }
  };

//渲染畫面
    function DOMrender(arr){
        html = '';
        viewcontain.innerHTML = '';
        arr.forEach((obj) => {
          html += `
            <div class="viewrelease_item">
                <div class="viewrelease_item_photo">
                  <img src="./img/introduce/main/viewrelease-${obj.idx}.png" alt="">
                  <span>${obj.area}</span>
                </div>
                <div class="viewrelease_item_text">
                  <h4>${obj.classify}</h4>
                  <h2>${obj.title}</h2>
                  <p>${obj.content}</p>
                </div>
              </div>
            `
          });
        viewcontain.innerHTML = html;
    }
//初始渲染內容
DOMrender(data)

//內容點擊連結
$('.viewrelease_item').on('click', () => {
  window.location = "../popular.html";
});
$('.content_item').on('click', () => {
  window.location = "../popular.html";
})

//類別按鈕
    function eventbtn(){
      catecolorreset();
      imgareaReset();
      event.classList.add("category_color");
      let arr = data.filter((obj) => {
        return obj.classify === "活動";
      })
          DOMrender(arr);
          $('html, body').animate({scrollTop: $('.viewrelease').offset().top}, 500);
    }

    function culturebtn(){
      catecolorreset();
      imgareaReset();
      culture.classList.add("category_color");
      let arr = data.filter((obj) => {
        return obj.classify === "文化";
      })
          DOMrender(arr);
          $('html, body').animate({scrollTop: $('.viewrelease').offset().top}, 500);
    }
    
    function foodbtn(){
      catecolorreset();
      imgareaReset();
      food.classList.add("category_color");
      let arr = data.filter((obj) => {
        return obj.classify === "美食";
      })
          DOMrender(arr);
          $('html, body').animate({scrollTop: $('.viewrelease').offset().top}, 500);
    }

    function hotelbtn(){
      catecolorreset();
      imgareaReset();
      hotel.classList.add("category_color");
      let arr = data.filter((obj) => {
        return obj.classify === "住宿";
      })
          DOMrender(arr);
          $('html, body').animate({scrollTop: $('.viewrelease').offset().top}, 500);
    }

    function shopbtn(){
      catecolorreset();
      imgareaReset();
      shop.classList.add("category_color");
      let arr = data.filter((obj) => {
        return obj.classify === "購物";
      })
          DOMrender(arr);
          $('html, body').animate({scrollTop: $('.viewrelease').offset().top}, 500);
    }

    function experencebtn(){
      catecolorreset();
      imgareaReset();
      experence.classList.add("category_color");
      let arr = data.filter((obj) => {
        return obj.classify === "體驗";
      })
          DOMrender(arr);
          $('html, body').animate({scrollTop: $('.viewrelease').offset().top}, 500);
    }

    function allbtn(){
      catecolorreset();
      imgareaReset();
      all.classList.add("category_color");
      DOMrender(data);
      $('html, body').animate({scrollTop: $('.viewrelease').offset().top}, 500);
    }
//類別reset
    function catecolorreset(){
      for(let i = 0; i < catecoclear.length; i++){
        catecoclear[i].classList.remove("category_color");
      }
    }

    function areaRender(idx){
      if(idx === 0){
        let arr = data.filter((obj) => {
          return obj.area === "福岡縣";
        })
            DOMrender(arr);
      }
      if(idx === 1){
        let arr = data.filter((obj) => {
          return obj.area === "大分縣";
        })
            DOMrender(arr);
      }
      if(idx === 2){
        let arr = data.filter((obj) => {
          return obj.area === "佐賀縣";
        })
            DOMrender(arr);
      }
      if(idx === 3){
        let arr = data.filter((obj) => {
          return obj.area === "長崎縣";
        })
            DOMrender(arr);
      }
      if(idx === 4){
        let arr = data.filter((obj) => {
          return obj.area === "熊本縣";
        })
            DOMrender(arr);
      }
      if(idx === 5){
        let arr = data.filter((obj) => {
          return obj.area === "宮崎縣";
        })
            DOMrender(arr);
      }
      if(idx === 6){
        let arr = data.filter((obj) => {
          return obj.area === "鹿兒島縣";
        })
            DOMrender(arr);
      };
    };


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
    textareaMove();
    searchLeftMove();
    searchRightMove();
    viewreleaseMove();
  }

// 導覽列變色 + Scroll Bar出現 + GoTop=============>
  function navGreen(){
    let position = $('.banner_textarea').offset().top;
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

// 景點介紹文字區往上進來============================>

  function textareaMove(){
    let position = ($('.banner_textarea').offset().top) - ($('.item_imagearea')[0].clientHeight / 2);
    if(window.scrollY > position){
      $('.item_textarea').addClass('item_textarea_move');
    }else{
      $('.item_textarea').removeClass('item_textarea_move');
    };
  };

// 地區左邊搜尋往右進來============================>

  function searchLeftMove(){
    let position = ($('.search_left').offset().top) - ($('.search_left')[0].clientHeight)*2;
    if(window.scrollY > position){
      $('.search_left').addClass('search_left_move');
    }else{
      $('.search_left').removeClass('search_left_move');
    };
  };

// 地區右邊搜尋往左進來============================>

function searchRightMove(){
  let position = ($('.search_right').offset().top) - ($('.search_right')[0].clientHeight)*2;
  if(window.scrollY > position){
    $('.search_right').addClass('search_right_move');
  }else{
    $('.search_right').removeClass('search_right_move');
  };
};

// 搜尋物件往上進來============================>

function viewreleaseMove(){
  let position = ($('.viewrelease_item').offset().top) - ($('.viewrelease_item')[0].clientHeight*2);
  if(window.scrollY > position){
    $('.viewrelease_item').addClass('viewrelease_item_move');
  }else{
    $('.viewrelease_item').removeClass('viewrelease_item_move');
  };
};


}