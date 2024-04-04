//スライド
var windowwidth = window.innerWidth || document.documentElement.clientWidth || 0;
    if (windowwidth > 768){
      var responsiveImage = [//PC用の画像
        { src: 'img/IMG_2326.jpg'},
        { src: 'img/IMG_2348.jpg'},
        { src: 'img/IMG_5268.jpg'},
        { src: 'img/IMG_5635.jpg'}
      ];
    } else {
      var responsiveImage = [//タブレットサイズ（768px）以下用の画像
        { src: 'https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-1-3/img/img_sp_01.jpg' },
        { src: 'https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-1-3/img/img_sp_02.jpg' },
        { src: 'https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-1-3/img/img_sp_03.jpg' }
      ];
    }


$('#slider').vegas({
    overlay: false,//画像の上に網線やドットのオーバーレイパターン画像はなしに設定。
    transition: 'blur',//切り替わりのアニメーション。http://vegas.jaysalvat.com/documentation/transitions/参照。fade、fade2、slideLeft、slideLeft2、slideRight、slideRight2、slideUp、slideUp2、slideDown、slideDown2、zoomIn、zoomIn2、zoomOut、zoomOut2、swirlLeft、swirlLeft2、swirlRight、swirlRight2、burnburn2、blurblur2、flash、flash2が設定可能。
    transitionDuration: 2000,//切り替わりのアニメーション時間をミリ秒単位で設定
    delay: 10000,//スライド間の遅延をミリ秒単位で。
    animationDuration: 20000,//スライドアニメーション時間をミリ秒単位で設定
    animation: 'kenburns',//スライドアニメーションの種類。http://vegas.jaysalvat.com/documentation/transitions/参照。kenburns、kenburnsUp、kenburnsDown、kenburnsRight、kenburnsLeft、kenburnsUpLeft、kenburnsUpRight、kenburnsDownLeft、kenburnsDownRight、randomが設定可能。
    slides: responsiveImage,//画像設定を読む
  });



//   //スライド
// var windowwidth = window.innerWidth || document.documentElement.clientWidth || 0;
// if (windowwidth > 768){
//   var responsiveImage = [//PC用の画像
//     { src: 'img/ring1.jpg'},
//     { src: 'img/bracelet1.jpg'},
//     { src: 'img/earrings1.jpg'},
//     { src: 'img/neclace1.jpg'}
//   ];
// } else {
//   var responsiveImage = [//タブレットサイズ（768px）以下用の画像
//     { src: 'https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-1-3/img/img_sp_01.jpg' },
//     { src: 'https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-1-3/img/img_sp_02.jpg' },
//     { src: 'https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-1-3/img/img_sp_03.jpg' }
//   ];
// }


$('#slider-item').vegas({
overlay: false,//画像の上に網線やドットのオーバーレイパターン画像はなしに設定。
transition: 'blur',//切り替わりのアニメーション。http://vegas.jaysalvat.com/documentation/transitions/参照。fade、fade2、slideLeft、slideLeft2、slideRight、slideRight2、slideUp、slideUp2、slideDown、slideDown2、zoomIn、zoomIn2、zoomOut、zoomOut2、swirlLeft、swirlLeft2、swirlRight、swirlRight2、burnburn2、blurblur2、flash、flash2が設定可能。
transitionDuration: 2000,//切り替わりのアニメーション時間をミリ秒単位で設定
delay: 10000,//スライド間の遅延をミリ秒単位で。
animationDuration: 20000,//スライドアニメーション時間をミリ秒単位で設定
animation: 'kenburns',//スライドアニメーションの種類。http://vegas.jaysalvat.com/documentation/transitions/参照。kenburns、kenburnsUp、kenburnsDown、kenburnsRight、kenburnsLeft、kenburnsUpLeft、kenburnsUpRight、kenburnsDownLeft、kenburnsDownRight、randomが設定可能。
slides: responsiveImage,//画像設定を読む
});



//アイテム
$(window).on('load scroll', function (){

  var box = $('.slide-img');//変数定義
  var isPlay= 'isPlay';//変数定義
  
  box.each(function () {//ループ処理
  
    var boxOffset = $(this).offset().top;//要素が存在する位置までスクロールしたら何らかの処理を実行するために、要素が存在する位置を取得する必要がある
    var scrollPos = $(window).scrollTop();//スクロール量取得、ユーザがどれくらいスクロールしているかを知るため
    var wh = $(window).height();//高さ取得、画面内のどの位置で処理を実行するかを指定するために必要

    if(scrollPos > boxOffset - wh + (wh / 2) ){//要素の頭が画面の真中まできたら処理を実行する
      $(this).addClass(isPlay);//クラス名付与
    }else{
      $(this).removeClass(isPlay);
    }
  });

});

let swipeOption = {
  loop: true,
  pagination: {
    el: '.swiper-pagination',//黒丸
  },
  effect: 'fade',
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  speed: 2000,

}
new Swiper('.swiper-container', swipeOption);
//ABOUTフェードイン
$(function(){
    $(window).scroll(function (){
        $('.fadein').each(function(){
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > position - windowHeight + 200){
                $(function(){
                    $('.fadein').each(function(i){
                        $(this).delay(i * 200).queue(function(){//delayで0.2秒毎に順番に読み込み
                            $(this).addClass('about-move-image1');
                        });
                    });
                });
            }
        });
    });
});
// particlesJS("particles-js",{
// 	"particles":{
// 		"number":{
// 			"value":125,//この数値を変更すると紙吹雪の数が増減できる
// 			"density":{
// 				"enable":false,
// 				"value_area":400
// 			}
// 		},
// 		"color": {
//         "value": ["#008b8b", "#2f4f4f", "#008b8b", "#008b8b", "#008b8b", "#008b8b","#008b8b", "#008b8b"]//紙吹雪の色の数を増やすことが出来る
// 		},
// 		"shape":{
// 			"type":"polygon",//形状はpolygonを指定
// 			"stroke":{
// 				"width":0,
// 			},
// 			"polygon":{
// 				"nb_sides":5//多角形の角の数
// 			}
// 			},
// 			"opacity":{
// 				"value":1,
// 				"random":false,
// 				"anim":{
// 					"enable":true,
// 					"speed":20,
// 					"opacity_min":0,
// 					"sync":false
// 				}
// 			},
// 			"size":{
// 				"value":5.305992965476349,
// 				"random":true,//サイズをランダムに
// 				"anim":{
// 					"enable":true,
// 					"speed":1.345709068776642,
// 					"size_min":0.8,
// 					"sync":false
// 				}
// 			},
// 			"line_linked":{
// 				"enable":false,
// 			},
// 			"move":{
// 				"enable":true,
// 			"speed":10,//この数値を小さくするとゆっくりな動きになる
// 			"direction":"bottom",//下に向かって落ちる
// 			"random":false,//動きはランダムにならないように
// 			"straight":false,//動きをとどめない
// 			"out_mode":"out",//画面の外に出るように描写
// 			"bounce":false,//跳ね返りなし
// 				"attract":{
// 					"enable":false,
// 					"rotateX":600,
// 					"rotateY":1200
// 				}
// 			}
// 		},
// 		"interactivity":{
// 			"detect_on":"canvas",
// 			"events":{
// 				"onhover":{
// 					"enable":false,
// 				},
// 				"onclick":{
// 					"enable":false,
// 				},
// 				"resize":true
// 			},
// 		},
// 		"retina_detect":true
// 	});