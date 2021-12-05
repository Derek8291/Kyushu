
window.onload = function() {
  
  const a1 = document.getElementById("a1");
  const a2 = document.getElementById("a2");
  const a3 = document.getElementById("a3");
  const a4 = document.getElementById("a4");
  const bannerimg = document.getElementsByClassName("banner_img");
  const bannerbox = document.getElementsByClassName("banner_box");
  var imgtime = null;

  a1.addEventListener("click", handChange);
  a2.addEventListener("click", handChange);
  a3.addEventListener("click", handChange);
  a4.addEventListener("click", handChange);

  function timeGo(e){
  imgtime = setInterval(() => {

      if(e < bannerimg.length){
        e++;
      }else{
        e = 1;
      }
      autoChange(e);
      // console.log(e);
    },5000)
  }

  function autoChange(e){
    reset();
    document.getElementById("b" + e).classList.add("baimgchange");
    document.getElementById("a" + e).classList.add("box_white");
  }
  
  function handChange(){
    reset();
    clearInterval(imgtime);
    let idx = null;
    idx = Number(this.id.substr(1));
    document.getElementById("b" + idx).classList.add("baimgchange");
    document.getElementById("a" + idx).classList.add("box_white");
    timeGo(idx);
  }

    function reset(){
    for(let i = 0; i < bannerbox.length; i++){
      bannerimg[i].classList.remove("baimgchange");
      bannerbox[i].classList.remove("box_white");
    }
  }

  document.getElementById("b" + 1).classList.add("baimgchange");
  document.getElementById("a" + 1).classList.add("box_white");
  timeGo(1);

  // const bannerimg = document.getElementsByClassName("banner_img");
  // const bannerbox = document.getElementsByClassName("banner_box")
  // var timecont = null;

  // addCircleListen();
  // // 監聽所有小圓點
  // function addCircleListen(){
  //   for(let i = 0; i < bannerbox.length; i++){
  //     bannerbox[i].addEventListener("click", photochange);
  //   }
  // }
  // // 移除監聽所有小圓點
  // function removeCircleListen(){
  //   for(let i = 0; i < bannerbox.length; i++){
  //     bannerbox[i].removeEventListener("click", photochange);
  //   }
  // }

  // // 手動小圓點換圖
  // function photochange(){
  //   clearInterval(timecont);
  //   removeCircleListen();
  //   let i = Number(this.id.substr(1) -1);
  //   photoGo(i);
  //   setTimeout(() => {
  //     let e = i + 1;
  //     if(e < 4){
  //       return e;
  //     }else{
  //       e = 0;
  //     }
  //     timego(e);
  //     console.log(e);
  //   },2000)
  // }

  // // 清除所有class
  // function baimgReset(){
  //   for(let i = 0; i < bannerbox.length; i++){
  //     bannerimg[i].classList.remove("baimgchange");
  //     bannerbox[i].classList.remove("box_white");
  //   }
  // }

  // // 計時器
  // function timego(idx){
  //   photoGo(idx);
  //   addCircleListen();
  //   timecont = setInterval(() => {
  //     if(idx < bannerimg.length-1){
  //       idx++;
  //     }else{
  //       idx = 0;
  //     }
  //     photoGo(idx);
  //   }, 5000)
  // }

  // // 換圖(新增移除class)
  // function photoGo(e){
  //   baimgReset();
  //   bannerimg[e].classList.toggle("baimgchange");
  //   bannerbox[e].classList.toggle("box_white");
  // }

  // timego(idx);


}