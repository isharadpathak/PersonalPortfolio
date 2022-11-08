$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-button').addClass("show");
        }else{
            $('.scroll-up-button').removeClass("show"); 
        }
    });

    // slide up script
    $('.scroll-up-button').click(function(){
        $('html').animate({scrollTop: 0});
    });

    // typing animation script
    var typed = new Typed(".typing", {
        strings: ["Tester", "Developer" ,"Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Tester", "Developer" ,"Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // toggle menu/navbar Script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
});

