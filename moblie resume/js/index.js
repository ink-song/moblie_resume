/**
 * Created by Administrator on 2017/3/17 0017.
 */
window.onload = function () {
    //设置第一屏为默认类名
     $('.swiper-slide').eq(0).addClass('current');
    //设置视口
    setRem();
    window.onresize = function () {
        setRem();
        mouseOver();
    }

    //滚屏
    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'vertical',
        loop: false,

        //分页器
        pagination: '.swiper-pagination',

        //切换到某一屏后的回调函数
        onSlideChangeEnd: function(swiper){
            var index = swiper.activeIndex;
            //当前添加类名 其他删除
            $('.swiper-slide').removeClass('current').eq(index).addClass('current');
        }
    });
    function mouseOver() {
        $('.cft').children('div').mouseenter(function () {
                this.css({
                    "background":red
                })
        })
    }
    //播放音频
    var music = document.querySelector('.music');
    var audio = music.querySelector('audio');
    audio.play();
    music.onclick = function () {
        if(audio.paused){
            audio.play();
            music.style.backgroundImage = 'url(images/play.png)';
        }else{
            audio.pause();
            music.style.backgroundImage = 'url(images/pause.png)';
        }
    }
}

//设置视口
function setRem(){
    var w = document.documentElement.clientWidth;
    w = w>640 ? 640 : w;
    document.querySelector('html').style.fontSize = w/20 + 'px';
}


