/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 



window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function

    var navbarShrink = function () {

        const navbarCollapsible = document.body.querySelector('#mainNav');

        if (!navbarCollapsible) {

            return;

        }

        if (window.scrollY > 50) {

            navbarCollapsible.style.backgroundColor = 'white'; // Aseta taustaväri valkoiseksi

            // Aseta menu-tekstien väri valkoiseksi

            const menuTexts = document.querySelectorAll('.navbar-nav .nav-link');

            menuTexts.forEach(menuText => {

                menuText.style.color = 'white';

            });

        } else {

            navbarCollapsible.style.backgroundColor = 'transparent'; // Aseta taustaväri läpinäkyväksi

            // Palauta menu-tekstien alkuperäinen väri

            const menuTexts = document.querySelectorAll('.navbar-nav .nav-link');

            menuTexts.forEach(menuText => {

                menuText.style.color = ''; // Tyhjennä väri, jotta käytetään alkuperäistä väriä

            });

        }

    };

 

    // Shrink the navbar

    navbarShrink();

 

    // Shrink the navbar when page is scrolled

    document.addEventListener('scroll', navbarShrink);

 

    // Activate Bootstrap scrollspy on the main nav element

    const mainNav = document.body.querySelector('#mainNav');

    if (mainNav) {

        new bootstrap.ScrollSpy(document.body, {

            target: '#mainNav',

            rootMargin: '0px 0px -40%',

        });

    };

 

    var contentWayPoint = function () {

        var i = 0;

        $('.animate-box').waypoint(function (direction) {

            if (direction === 'down' && !$(this.element).hasClass('animated-fast')) {

                i++;

                $(this.element).addClass('item-animate');

                setTimeout(function () {

                    $('body .animate-box.item-animate').each(function (k) {

                        var el = $(this);

                        setTimeout(function () {

                            var effect = el.data('animate-effect');

                            if (effect === 'fadeIn') {

                                el.addClass('fadeIn animated-fast');

                            } else if (effect === 'fadeInLeft') {

                                el.addClass('fadeInLeft animated-fast');

                            } else if (effect === 'fadeInRight') {

                                el.addClass('fadeInRight animated-fast');

                            } else {

                                el.addClass('fadeInUp animated-fast');

                            }

                            el.removeClass('item-animate');

                        }, k * 200, 'easeInOutExpo');

                    });

                }, 100);

            }

        }, { offset: '85%' });

    };

 

    // Collapse responsive navbar when toggler is visible

    const navbarToggler = document.body.querySelector('.navbar-toggler');

    const responsiveNavItems = [].slice.call(

        document.querySelectorAll('#navbarResponsive .nav-link')

    );

    responsiveNavItems.map(function (responsiveNavItem) {

        responsiveNavItem.addEventListener('click', () => {

            if (window.getComputedStyle(navbarToggler).display !== 'none') {

                navbarToggler.click();

            }

        });

    });

 

});
var videoBtn = document.querySelector('.video-btn')
var videoModal = document.getElementById('videoModal')
var video = document.getElementById('video')
var videoSrc

videoBtn.addEventListener('click',function(e){
    videoSrc = videoBtn.getAttribute('data-bs-src')
})

videoModal.addEventListener('shown.bs.modal',(e)=>{
    video.setAttribute('src', videoSrc + '?autoplay=1&amp;modestbranding=1&amp;showinfo=0')
})

videoModal.addEventListener('hide.bs.modal',(e)=>{
    video.setAttribute('src', videoSrc)
})
