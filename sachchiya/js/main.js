(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);


    // Fixed Navbar
    $(window).scroll(function () {
        if ($(window).width() < 992) {
            if ($(this).scrollTop() > 55) {
                $('.fixed-top').addClass('shadow');
            } else {
                $('.fixed-top').removeClass('shadow');
            }
        } else {
            if ($(this).scrollTop() > 55) {
                $('.fixed-top').addClass('shadow').css('top', -55);
            } else {
                $('.fixed-top').removeClass('shadow').css('top', 0);
            }
        } 
    });
    
    
   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonial carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 2000,
        center: false,
        dots: true,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:1
            },
            992:{
                items:2
            },
            1200:{
                items:2
            }
        }
    });


    // vegetable carousel
    $(".vegetable-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        center: false,
        dots: true,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            },
            1200:{
                items:4
            }
        }
    });


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });



    // Product Quantity
    $('.quantity button').on('click', function () {
        var button = $(this);
        var oldValue = button.parent().parent().find('input').val();
        if (button.hasClass('btn-plus')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        button.parent().parent().find('input').val(newVal);
    });

})(jQuery);


fetch("header.html")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.text();
  })
  .then((content) => {
    document.querySelector(".header-container").innerHTML = content;
    const btn = document.querySelectorAll('.fruite-name a')
    btn.forEach((item) => {
        item.addEventListener('click', function(event){
        event.preventDefault()
        const menu = this.getAttribute('href')
        const tabMenu = document.querySelector(menu)
        const nav =  document.querySelectorAll(".fadeIn")
        nav.forEach((item, index) => {
            item.classList.remove('active')
        });
        tabMenu.classList.add('active');
    })
    })
    const faq = document.querySelectorAll(".faq")
    faq.forEach((item) => {
        item.addEventListener('click',() => {
        item.classList.toggle("active")
        let nav = item.querySelector(".faq_icon i")
        if(nav.className === "fa fa-plus"){
            nav.className = "fa fa-minus"
        }else{
            nav.className = "fa fa-plus"
        }
    })
    
})

function openWhatsAppChat(){
    let phoneNum = "";
    console.log("sdlknas")
    let message = "hlo";
    let url = "https://api.whatsapp.com/send?phone=" + phoneNum + "&text=" + encodeURIComponent(message);
              window.open(url, "_blank");
    }
   const menu =  document.querySelectorAll(".click")
   menu.forEach((item ) => {
    item.addEventListener('click', (e) => {
        e.preventDefault()
        openWhatsAppChat()
    })
   })
    
    
  })
  .catch((err) => {
    document.querySelector(".header-container").innerHTML = content
  })
  
  fetch("footer.html")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.text();
  })
  .then((content) => {
    document.querySelector(".footer-container").innerHTML = content;

  })
  .catch((err) => {
    document.querySelector(".footer-container").innerHTML = content
  })
  

