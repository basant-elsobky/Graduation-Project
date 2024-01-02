$(window).on("load",()=>{
  setTimeout(()=> {
    $(".loader").hide();
    $("head").append(`<meta name="theme-color" content="#1876f3">`)
  }, 1000);
});
// change mode
var f = 0;
$("#mode").click(function() {
    if (f == 0) {
        f = 1;
        $("body,.container,.settings,img,.text").addClass("dark");
        $(this).html("light_mode");
    } else {
        f = 0;
        $("body,.container,.settings,img,.text").removeClass("dark");
        $(this).html("dark_mode");
    }
});
// var faAbout = [" <span>عني</span>", "مطور ويب يدرس نفسه بنفسه ويتمتع بخبرة عملية في إنشاء مواقع الويب. اسمي مهاب ، مطور واجهات المبتدئين. حاصل على درجة البكالوريوس في الحاسبات والمعلومات من الجامعة المصرية للتعلم الإلكتروني (EELU). ", "A self taught Web Developer with hands on experience of build Websites. My name is Mohab, Junior Front-end developer. have a Bachelor's degree in Computers and Information from The Egyptian University for E-Learning (EELU)."];
// $("#lang").click(() => {
//     if (f == 0) {
//         f = 1;
//         $(".text h1").html(faAbout[0]);
//         $(".text p").html(faAbout[1]);
//         $(".container,.hero img,.text").addClass("rtl");
//     } else {
//         f = 0;
//         $(".text h1").html(faAbout[2]);
//         $(".text p").html(faAbout[3]);
//         $(".container,.hero img,.text").removeClass("rtl");
//     }
// });
// play background music
var music = new Audio("assets/js/music.mp3");
$("#play").click(function() {
    if (music.paused) {
        music.play();
        $(this).html("pause_circle");
        $(".top-bar .ad-anim div").css("animation-play-state", "running");
    } else {
        music.pause();
        $(this).html("play_circle");
        $(".top-bar .ad-anim div").css("animation-play-state", "paused");
    }
});
$(".top-bar #more").click(function() {
    if (f == 0) {
        f = 1;
        $(".social,#more").addClass("act");
        $(this).html("close")
    } else {
        f = 0;
        $(".social,#more").removeClass("act");
        $(this).html("more_vert")
    }
})