$(".faq__q").on("click", function () {
    $(this).parent().toggleClass("-active");
    $(this).next().slideToggle();
  });


  /* --------------------------------------- */
/* iOS用フルスクリーンのテコ入れ */
/* --------------------------------------- */
const setFillHeight = () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
};

let vw = window.innerWidth;

window.addEventListener("resize", () => {
  if (vw === window.innerWidth) {
    // 画面の横幅にサイズ変動がないので処理を終える。ガタツキ防止
    return;
  }

  // 画面の横幅のサイズ変動があった時のみ高さを再計算する
  vw = window.innerWidth;
  setFillHeight();
});

// 初期化
setFillHeight();


/* ハンバーガーメニュー */

$(".openbtn1").click(function () {
  $(this).toggleClass('active');
});

$(".openbtn1").click(function () {
  $('.toggle__menu').toggleClass('open');
});


/* a スクロール */

$('a[href*="#"]').click(function () {//全てのページ内リンクに適用させたい場合はa[href*="#"]のみでもOK
	var elmHash = $(this).attr('href'); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
	var pos = $(elmHash).offset().top;	//idの上部の距離を取得
	$('body,html').animate({scrollTop: pos}, 500); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
	return false;
});