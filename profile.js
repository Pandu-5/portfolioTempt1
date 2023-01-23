$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });

    $(window).on('scroll load', function () {

        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');

        if ($(window).scrollTop() > 0) {
            $('.top').show();
        } else {
            $('.top').hide();
        }
    });


    // smooth scrolling

    $('a[href*="#"]').on('click', function (e) {

        e.preventDefault();

        $('html, body').animate({

            scrollTop: $($(this).attr('href')).offset().top,
        },
            500,
            'linear'
        );

    });


});















// Draggable nav

// getting elements
// const nav = document.querySelector("nav"),
//     toggleBtn = nav.querySelector(".toggle-btn");

// toggleBtn.addEventListener("click", () => {
//     nav.classList.toggle("open");
// });

// Make nav draggable

// function onDrag({ movementY }) {
//     const navStyle = window.getComputedStyle(nav),
//         navTop = parseInt(navStyle.top),
//         navHeight = parseInt(navStyle.height),
//         windHeight = window.innerHeight;

//     nav.style.top = navTop > 0 ? `${navTop + movementY}px` : "1px";
//     if (navTop > windHeight - navHeight) {
//         nav.style.top = `${windHeight - navHeight}px`;
//     }
// }

// nav.addEventListener("mousedown", () => {
//     nav.addEventListener("mousemove", onDrag);
// });

// nav.addEventListener("mouseup", () => {
//     nav.removeEventListener("mousemove", onDrag);
// });

// nav.addEventListener("mouseleave", () => {
//     nav.removeEventListener("mousemove", onDrag);
// });