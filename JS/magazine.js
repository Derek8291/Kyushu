window.onload = function() {



  const data = [
    { 
      name: 'oita',
      ctname: '大分',
      area: '大分 Oita',
      data: '2021/9/25',
      content: '想好好享受大分縣的溫泉，絕對不能錯過別府地獄巡禮!',
      viewurl: './img/magazine/magazine-view-1.jpg',
      personurl: './img/magazine/magazine-person-1.jpg',
      keyword1: '溫泉',
      keyword2: '體驗',
      keyword3: '奇景',
    },
    { 
      name: 'kumamoto',
      ctname: '熊本',
      area: '熊本 Kumamoto',
      data: '2021/11/18',
      content: '來與熊本熊相見吧！介紹出沒地點以及熊本熊的活動秘辛!',
      viewurl: './img/magazine/magazine-view-2.jpg',
      personurl: './img/magazine/magazine-person-2.jpg',
      keyword1: '吉祥物',
      keyword2: '地方',
      keyword3: '逛街',
    },
    { 
      name: 'nagasaki',
      ctname: '長崎',
      area: '長崎 Nagasaki',
      data: '2021/12/4',
      content: '「豪斯登堡」重現了中世紀絕美的荷蘭、歐洲建築造景!',
      viewurl: './img/magazine/magazine-view-3.jpg',
      personurl: './img/magazine/magazine-person-3.jpg',
      keyword1: '歷史',
      keyword2: '度假',
      keyword3: '文化',
    },
    { 
      name: 'fukuoka',
      ctname: '福岡',
      area: '福岡 Fukuoka',
      data: '2019/12/14',
      content: '在門司港一起享受海風和獨門香濃燒咖哩!',
      viewurl: './img/magazine/magazine-view-4.jpg',
      personurl: './img/magazine/magazine-person-4.jpg',
      keyword1: '美食',
      keyword2: '度假',
      keyword3: '逛街',
    },.
    { 
      name: 'oita',
      ctname: '大分',
      area: '大分 Oita',
      data: '2020/7/21',
      content: '九州大分懷古散策：「城下町」以及「昭和之町」巡禮',
      viewurl: './img/magazine/magazine-view-5.jpg',
      personurl: './img/magazine/magazine-person-5.jpg',
      keyword1: '懷舊',
      keyword2: '和服',
      keyword3: '散步',
    },
    { 
      name: 'saga',
      ctname: '佐賀',
      area: '佐賀 Saga',
      data: '2021/4/18',
      content: '黑毛和種的佐賀牛，是來武雄溫泉旅行時必吃的美食',
      viewurl: './img/magazine/magazine-view-6.jpg',
      personurl: './img/magazine/magazine-person-6.jpg',
      keyword1: '美食',
      keyword2: '逛街',
      keyword3: '鐵道',
    },
    { 
      name: 'miyazaki',
      ctname: '宮崎',
      area: '宮崎 Miyazaki',
      data: '2020/3/24',
      content: '宮崎的峽谷絕景!在高千穗峽搭乘小船來場大自然之旅!',
      viewurl: './img/magazine/magazine-view-7.jpg',
      personurl: './img/magazine/magazine-person-7.jpg',
      keyword1: '體驗',
      keyword2: '自然',
      keyword3: '運動',
    },
    { 
      name: 'oita',
      ctname: '大分',
      area: '大分 Oita',
      data: '2021/10/28',
      content: '彷彿走入歐洲童話中-由布院Floral Village!',
      viewurl: './img/magazine/magazine-view-8.jpg',
      personurl: './img/magazine/magazine-person-8.jpg',
      keyword1: '由布院',
      keyword2: '逛街',
      keyword3: '小物',
    },
    { 
      name: 'saga',
      ctname: '佐賀',
      area: '佐賀 Saga',
      data: '2020/3/7',
      content: '佐賀秋天玩什麼？來參加歡樂熱情的熱氣球嘉年華!',
      viewurl: './img/magazine/magazine-view-9.jpg',
      personurl: './img/magazine/magazine-person-9.jpg',
      keyword1: '熱氣球',
      keyword2: '活動',
      keyword3: '嘉年華',
    },
    { 
      name: 'kagoshima',
      ctname: '鹿兒島',
      area: '鹿兒島 Kagoshima',
      data: '2020/1/25',
      content: '鹿兒島拉麵老店：黑豬骨湯頭濃郁，熟細麵一口接一口!',
      viewurl: './img/magazine/magazine-view-10.jpg',
      personurl: './img/magazine/magazine-person-10.jpg',
      keyword1: '美食',
      keyword2: '黑豚',
      keyword3: '拉麵',
    },
    { 
      name: 'nagasaki',
      ctname: '長崎',
      area: '長崎 Nagasaki',
      data: '2021/2/7',
      content: '冬季九州最美聖夜！豪斯登堡「光之街聖誕節」',
      viewurl: './img/magazine/magazine-view-11.jpg',
      personurl: './img/magazine/magazine-person-11.jpg',
      keyword1: '豪斯登堡',
      keyword2: '樂團',
      keyword3: '夜景',
    },
    { 
      name: 'fukuoka',
      ctname: '福岡',
      area: '福岡 Fukuoka',
      data: '2020/8/15',
      content: '戀愛觀音坐鎮、海島公園景色超夢幻!',
      viewurl: './img/magazine/magazine-view-12.jpg',
      personurl: './img/magazine/magazine-person-12.jpg',
      keyword1: '能古島',
      keyword2: '賞花',
      keyword3: '海島',
    },
  ];

  var html = '';
  const magcontain = document.getElementsByClassName("magazine_contain")[0];
  const area = document.getElementById("city_area");
  const searchbar = document.getElementsByClassName("search_bar")[0];

  function DomRender(arr){
    html= '';
    magcontain.innerHTML = '';
    arr.forEach((e)=>{
      html += `
            <div class="magazine_item">
              <div class="magazine_item_img">
                <div class="magazine_location ${e.name}">
                  <i class="fas fa-location-arrow"></i> ${e.area}
                </div>
                <img src="${e.viewurl}" alt="">
              </div>
              <div class="magazine_item_text">
                <p>${e.data}</p>
                <h3>${e.content}</h3>
                <div>
                  <img src="${e.personurl}" alt="">
                  <div>
                    <a href="javascript:;">#${e.keyword1}</a>
                    <a href="javascript:;">#${e.keyword2}</a>
                    <a href="javascript:;">#${e.keyword3}</a>
                  </div>
                </div>
              </div>
            </div>
                `
    })
    magcontain.innerHTML = html;
  }

  DomRender(data);

  function areachose(value){
    let arr = data.filter(function(obj){
      if(value === 'no'){
        return obj;
      }
      return obj.name === value;
    });
    DomRender(arr);
    // console.log(data);
  }


  area.addEventListener("change", function(){
    areachose(this.value);
  });

  searchbar.addEventListener("keyup", function(e){
    if(this.value === ''){
      DomRender(data);
    }
    if(e.keyCode !== 13) return;
    searchTag(this.value);
    console.log(this.value);
  })

  function searchTag(value){
    let arr = data.filter(function(obj){
      if(obj.keyword1 === value){
        return obj.keyword1 === value;
      }else if(obj.keyword2 === value){
        return obj.keyword2 === value;
      }else if(obj.keyword3 === value){
        return obj.keyword3 === value;
      }else if(obj.ctname === value){
        return obj.ctname === value;
      }
    });
    DomRender(arr);
  }

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

      }
    
    // 導覽列變色 + Scroll Bar出現 + GoTop=============>
      function navGreen(){
        let position = $('.magazine_introduce').offset().top;
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

  // 下方額外內容向上滑入=====================================>
  $('.magazine_contain').addClass('magazine_move');
  function bannerMove(){
    let position = $('.magazine_contain').offset().top;
    if(window.scrollY > position){
      $('.magazine_contain').removeClass('magazine_move');
    }else{
      $('.magazine_contain').addClass('magazine_move');
    }
  };


}