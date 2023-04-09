'use strict';

 $(function(){
  // 1,メイン画像のカルーセル
    $('.carousel').slick({
    // 自動再生
    autoplay: true,
    // dotsを表示
    dots: true,
    // 画像のループ
    infinite: true,
    // 次の画像表示までの待ち時間
    autoplaySpeed: 5000,
    // 矢印の非表示化
    arrows: false,
  });

})

const lang = document.querySelector('html').lang;

  if(lang === 'ja') {
    document.querySelector('option[value="index.html"]').selected = true;
  } else if(lang === 'en') {
    document.querySelector('option[value="index-en.html"]').selected = true;
  }
  
  document.getElementById('form').select.onchange = function(){
    location.href = document.getElementById('form').select.value;}

