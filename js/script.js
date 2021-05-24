// niceScroll
$("html").niceScroll();


// Stick menu
$(".menu").sticky({
  topSpacing: 0
});




// Menu Scroll to content and Active menu
var lastId,
  topMenu = $("#menu"),
  topMenuHeight = topMenu.outerHeight() + 145,
  menuItems = topMenu.find("a"),
  scrollItems = menuItems.map(function () {
    var item = $($(this).attr("href"));
    if (item.length) {
      return item;
    }
  });

$('a[href*=#]').bind('click', function (e) {
  e.preventDefault();

  var target = $(this).attr("href");


  $('html, body').stop().animate({
    scrollTop: $(target).offset().top - 140
  }, 1000, function () {

  });

  return false;
});

$(window).scroll(function () {
  var fromTop = $(this).scrollTop() + topMenuHeight;
  var cur = scrollItems.map(function () {
    if ($(this).offset().top < fromTop)
      return this;
  });

  cur = cur[cur.length - 1];
  var id = cur && cur.length ? cur[0].id : "";

  if (lastId !== id) {
    lastId = id;
    menuItems
      .parent().removeClass("active")
      .end().filter("[href=#" + id + "]").parent().addClass("active");
  }
});


if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

  $(".footer").css("position", "relative");
  $(".contact").css("marginBottom", "0");

} else {

  // FadeTo elements
  if ($(window).width() > 1023) {

    tiles = $("h2, h3, .about-item, .column, .partners-logos img, .contact, footer .container ").fadeTo(0, 0);

    $(window).scroll(function (d, h) {
      tiles.each(function (i) {
        a = $(this).offset().top + $(this).height();
        b = $(window).scrollTop() + $(window).height();
        if (a < b) $(this).fadeTo(1000, 1);
      });
    });

  }

}



//Menu mobile click
$(".icon").click(function () {
  $(" ul.menu-click").slideToggle("slow", function () {
    // Animation complete.
  });
});


$(window).load(function () {

  $(".preloader").delay(1000).fadeOut("slow")

  // Parallax
  if ($('.parallax-background').length) {
    $(".parallax-background").parallax();
  }

  // Parallax
  if ($('.parallax-background-partners').length) {
    $(".parallax-background-partners").parallax();
  }

});

window.onload = function () {
  const prev = document.getElementById('btn-prev'),
    next = document.getElementById('btn-next'),
    slides = document.querySelectorAll('.slide');

  let index = 0;

  const activeSlide = n => {
    for (let slide of slides) {
      slide.classList.remove('activeSlide');
    }
    slides[n].classList.add('activeSlide');
  }

  const nextSlide = () => {
    if (index == slides.length - 1) {
      index = 0;
      activeSlide(index);
    } else {
      index++;
      activeSlide(index);
    }
  }
  const prevSlide = () => {
    if (index == 0) {
      index = slides.length - 1;
      activeSlide(index);
    } else {
      index--;
      activeSlide(index);
    }
  }

  next.addEventListener('click', nextSlide);
  prev.addEventListener('click', prevSlide);

}