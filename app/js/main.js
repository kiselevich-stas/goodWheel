// function initSlider() {
//     let slides = document.querySelectorAll('.section-num');
//     slides.forEach(el => {
//         el.classList.add('fadeUppText')
//     })
// }
//     function slideActive(slide){
//         let toup = document.querySelector('.toup')
//         if(slide != 0){
//             toup.classList.add('show')
//         }else {
//             toup.classList.remove('show')
//         }
//         animate(slide)
//         menuActiveSlide(slide)
//     }
//     function animate(slide){
//         let parr = document.querySelector(`.section-${slide+1}`);
//         console.log(parr);
//         parr.querySelectorAll('.anim').forEach(e => e.classList.add('animate__slideInUp'))
//         parr.querySelectorAll('.anim').forEach(e => e.classList.add('animate__animated'))
//     }
//     function menuActiveSlide(slide){
//         console.log('sads');
//         let slides = document.querySelectorAll('.nav-link')
//         slides.forEach(e => {
//             if(e.dataset.active == slide)
//             activateSlide(e)
//         })
//     }
//     function activateSlide(navItem){
//         let navItems = document.querySelectorAll('.nav-link');
//         navItems.forEach(e => e.classList.remove('active'));
//         navItem.classList.add('active');
//     }
//     function backToTop() {
//         let swiper =  document.querySelector('.intro-slider__content');
//         let firstSlide = document.querySelector('.section-1')
//         let currentActive = swiper.querySelector('.swiper-slide-active')
//         swiper.initialSlide = 1;
//     }
//     function circle(slide) {
//         let circle = document.querySelector('.circle');
//         let circleRight = document.querySelector('.circle-right')
//         let circleImg = circle.querySelector('.circle-img');
//         let circleRightImg = circleRight.querySelector('.circle-img');
//         let allSlides = document.querySelectorAll('.section-2-list__item')
//         allSlides.forEach(e => {
//             if(e.dataset.slide == slide+1){
//                 circleImg.src = e.dataset.img
//                 circleRightImg.src = e.dataset.img
//             }
//         })
//     }
//     // (() => {
//     //     let tabs = document.querySelectorAll('.intro-slider-item');
//     //     tabs.forEach(e => e.addEventListener('click', (e) => {
//     //         e.preventDefault()
//     //         let parrent = e.target.closest('section');
//     //         console.log(parrent);
//     //         let tab = e.target.closest('li');
//     //         parrent.querySelectorAll('.intro-slider-item').forEach(e => e.classList.remove('active'))
//     //         parrent.querySelectorAll('.intro-slider-item').forEach(e => e.classList.remove('tab'))
//     //         tab.classList.add('tab')
//     //         tab.classList.add('active')
//     //     }))
//     // })()
//     // header
//     const BURGER = document.querySelector('.aside-btn');
//     BURGER.addEventListener('click', toggleMenu);
//     const NAV_MOBILE = document.querySelector('.navigation');
//     NAV_MOBILE.addEventListener('click', closeMenu);
//     const NAV_SUPPORT = document.querySelector('.aside-nav-supports');
//     const aside = document.querySelector('.aside');
//     const scrollBar = document.querySelector('.swiper-scrollbar');
//     let headerLeft = document.querySelector('.header-anchor')
//     let headerRightNum = document.querySelector('.header__num')
//     let headerRightNumIcon = document.querySelector('.header__num-icon')
//     console.log(headerLeft);
//     function toggleMenu() {
//         const width = window.innerWidth
//         if(width < 740){
//             menu()
//         }else {
//             delMenu()
//         }
//         BURGER.classList.toggle('open');
//         if (NAV_MOBILE.classList.contains('open')) {
//             NAV_MOBILE.classList.remove('open');
//             NAV_MOBILE.classList.add('close');
//             NAV_SUPPORT.classList.add('close');
//             NAV_SUPPORT.classList.remove('open');
//             aside.classList.add('close');
//             aside.classList.remove('open');
//             scrollBar.style.zIndex = "410";
//             headerLeft.classList.remove('hidden')
//             headerRightNum.classList.remove('hidden')
//             headerRightNumIcon.classList.remove('hidden')
//             headerLeft.classList.remove('dis-none')
//             headerRightNum.classList.remove('dis-none')
//             headerRightNumIcon.classList.remove('dis-none')
//             console.log(headerLeft);
//         } else {
//             NAV_MOBILE.classList.add('open');
//             NAV_MOBILE.classList.remove('close');
//             NAV_SUPPORT.classList.add('open');
//             NAV_SUPPORT.classList.remove('close');
//             aside.classList.add('open');
//             aside.classList.remove('close');
//             scrollBar.style.zIndex = "1";
//             headerLeft.classList.add('hidden')
//             headerRightNum.classList.add('hidden')
//             headerRightNumIcon.classList.add('hidden')
//             setTimeout(() => {
//                 headerLeft.classList.add('dis-none')
//                 headerRightNumIcon.classList.add('dis-none')
//                 headerRightNum.classList.add('dis-none')
//             },300)
//         }
//     }
//     function closeMenu(event){
//         console.log(event.target);
//             function closeM(){
//                 BURGER.classList.remove('open');
//                 NAV_MOBILE.classList.remove('open');
//                 NAV_MOBILE.classList.add('close');
//                 NAV_SUPPORT.classList.remove('open');
//                 aside.classList.remove('open');
//                 scrollBar.style.zIndex = "410";
//                 headerLeft.classList.remove('hidden');
//                 headerRightNum.classList.remove('hidden');
//                 headerRightNumIcon.classList.remove('hidden');
//                 headerLeft.classList.remove('dis-none');
//                 headerRightNum.classList.remove('dis-none');
//                 headerRightNumIcon.classList.remove('dis-none');
//             }   
//             // event.target.classList.add('active');
//             if (event.target.classList.contains('nav-link-anchor')) {
//                 setTimeout(closeM, 400);
//             }else if(event.target.classList.contains('navigation-body') || event.target.classList.contains('nav-container')){
//                 event.preventDefault();
//             }
//             else {
//                 closeM();
//             }
//         event.preventDefault();
//     }
//     function animateText (slideNum){
//         setTimeout(() => {
//             let slides = document.querySelectorAll('.section-num');
//             slides.forEach(el => {
//                 el.classList.remove('fadeUppText');
//             });
//             let section = document.querySelector(`#section-${slideNum + 1}`);
//             console.log(section);
//             section.classList.add('fadeUppText');
//         },300)
//     };
//     function showTextWidth() {
//         let slides = document.querySelectorAll('.section-num');
//         slides.forEach(el => {
//             el.classList.add('fadeUppText')
//         })
//     }
//     // burge konets
//     function menu(){
//         let nav = document.querySelector('.aside-nav-supports')
//        nav.classList.add('tablet-open')
//     }
//     function delMenu() {
//         let nav = document.querySelector('.aside-nav-supports')
//         nav.classList.remove('tablet-open')
//     }
//     function getCoords(elem) {
//         let box = elem.getBoundingClientRect();
//         return {
//           top: box.top + window.pageYOffset,
//           bottom: box.bottom + window.pageYOffset,
//         };
//       }
//     window.addEventListener('scroll', () => {
//         const nav = document.querySelector('.navigation');
//         const navLink = nav.querySelectorAll('.nav-link');
//         scroll = window.scrollY
//         const section = document.querySelectorAll('.section-num')
//         section.forEach((el,index) => {
//             if(getCoords(el).top < scroll && getCoords(el).bottom > scroll){
//                 navLink.forEach(el => {
//                     el.classList.remove('active')
//                     if(el.classList.contains(`nav-link-${index}`)){
//                         el.classList.add('active')
//                     }
//                 });
//             }
//         })
//     });
//     //   (() => {
//     //     let elem = document.querySelectorAll('.anim');
//     //     setTimeout(
//     //         () => clear(elem)
//     //         ,1
//     //     )
//     //     function clear(nodeList) {
//     //         nodeList.forEach(e => e.classList.remove('tranformation'))
//     //     }
//     //   })()
//     (() => {
//         window.swiper = swiper;
//         let toup = document.querySelector('.toup');
//         let navLinks = document.querySelectorAll('.nav-link');
//         toup.addEventListener('click', () => {
//           console.log(swiper);
//           swiper.slideTo(0,1000,true);
//         });
//         navLinks.forEach(e => {
//             e.addEventListener('click', () => {
//                 swiper.slideTo(e.dataset.active,1000,true);
//                 closeMenu(e)
//             })
//         })
//     })()
"use strict";
// const header = document.querySelector('.header');
// let prevScroll = window.scrollY;
// window.addEventListener('scroll', () => {
//     scroll = window.scrollY
//     if (scroll > 0) {
//         header.classList.add('fixed')
//     } else {
//         header.classList.remove('fixed')
//     }
//     prevScroll = scroll;
// });
"use strict";
// const swiper = new Swiper(".intro-slider__content-slider", {
//   slidesPerView: 'auto',
//   pagination: {
//     el: '.swiper-pagination',
//     type: 'bullets',
//     clickable: true,
//   },
//   allowTouchMove: false,
//   direction: 'vertical',
//   speed: 1000,
//   mousewheel: {
//     invert: false,
//   },
//   parallax:true,
//   scrollbar: {
//     el: '.swiper-scrollbar',
//     dragClass: 'swiper-drag-scrollbar',
//     draggable: true,
//   },
//   on: {
//     slideChange: function (swiper) {
//       let activeIndex = swiper.realIndex
//       let prevIndex = swiper.previousIndex
//       console.log(activeIndex);
//       if(activeIndex == 5) {
//         document.querySelector('.aside-container').classList.add('change')
//       }
//       else{
//         document.querySelector('.aside-container').classList.remove('change')
//       }
//       if(activeIndex == 5) {
//         document.querySelector('.header__num').classList.add('change')
//         animateText(activeIndex)
//       }
//       else{
//         document.querySelector('.header__num').classList.remove('change')
//       }
//       if(activeIndex % 2 != 0){
//         document.querySelector('#header').classList.add('change')
//       }
//       else{
//         document.querySelector('#header').classList.remove('change')
//       }
//       if(activeIndex == 0){
//         document.querySelector('.header-logo__title').style.display = 'block'
//       }
//       else{
//         document.querySelector('.header-logo__title').style.display = 'none'
//       }
//       slideActive(activeIndex)
//       menuActiveSlide(activeIndex)
//       animateText(activeIndex)
//     },
//     beforeInit: function (swiper) {
//       let activeIndex = swiper.realIndex;
//       initSlider(activeIndex)
//     },
//     afterInit: function (swiper) {
//       let activeIndex = swiper.realIndex;
//       console.log('1');
//       animateText(activeIndex)
//     },
//   },
// });
// console.log(swiper);
// const swiper2 = new Swiper(".section-4__wrapper-right-swiper", {
//   slidesPerView: '1',
//   loop: true,
//   pagination: {
//     el: '.swiper-pagination',
//     type: 'bullets',
//     clickable: true,
//   },
//   speed: 300,
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
// });
// $('.section-2__wrapper-right-swiper').slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   arrows: false,
//   // fade: true,
//   asNavFor: '.section-2-list',
//   infinite: true,
//   responsive: [
//     {
//       breakpoint: 980,
//       settings: {
//         dots: true
//       }
//     },
//   ]
// });
// $('.section-2-list').slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   asNavFor: '.section-2__wrapper-right-swiper',
//   speed: 400,
//   vertical: true,
//   arrows: false,
//   touchMove: true,
//   // slidesPerRow: 8,
//   infinite: true,
//   focusOnSelect: true,
// });
// $('.section-2-list').on('beforeChange', function(event, slick, currentSlide, nextSlide){
//   circle(nextSlide);
// });
// document.addEventListener('DOMContentLoaded', () => {
//   const width = window.innerWidth
//   const height = window.innerHeight;
//   if(width < 740 || height < 601){
//     console.log('2');
//     swiper.destroy()
//     setTimeout(() => {
//       showTextWidth()
//     },300)
//     $('a[href*="#"]').on('click', function() {
//       $('html, body').animate({
//         scrollTop: $($.attr(this, 'href')).offset().top
//       }, 300);
//       closeMenu()
//     });
//   }
// })
// // document.addEventListener('DOMContentLoaded', () => {
// //   const width = window.innerWidth
// //   if (width > 1024){
// //     const swiper = new Swiper(".intro-slider__content", {
// //       slidesPerView: 'auto',
// //       pagination: {
// //         el: '.swiper-pagination',
// //         type: 'bullets',
// //         clickable: true,
// //       },
// //       allowTouchMove: false,
// //       direction: 'vertical',
// //       speed: 1000,
// //       mousewheel: {
// //         invert: false,
// //       },
// //       parallax:true,
// //       scrollbar: {
// //         el: '.swiper-scrollbar',
// //         dragClass: 'swiper-drag-scrollbar',
// //         draggable: true,
// //       },
// //       on: {
// //         slideChange: function (swiper) {
// //           let activeIndex = swiper.realIndex
// //           let prevIndex = swiper.previousIndex
// //           console.log(activeIndex);
// //           if(activeIndex == 5) {
// //             document.querySelector('.aside-container').classList.add('change')
// //           }
// //           else{
// //             document.querySelector('.aside-container').classList.remove('change')
// //           }
// //           if(activeIndex == 5) {
// //             document.querySelector('.header__num').classList.add('change')
// //             animateText(activeIndex)
// //           }
// //           else{
// //             document.querySelector('.header__num').classList.remove('change')
// //           }
// //           if(activeIndex % 2 != 0){
// //             document.querySelector('#header').classList.add('change')
// //           }
// //           else{
// //             document.querySelector('#header').classList.remove('change')
// //           }
// //           if(activeIndex == 0){
// //             document.querySelector('.header-logo__title').style.display = 'block'
// //           }
// //           else{
// //             document.querySelector('.header-logo__title').style.display = 'none'
// //           }
// //           slideActive(activeIndex)
// //           menuActiveSlide(activeIndex)
// //           animateText(activeIndex)
// //         },
// //         beforeInit: function (swiper) {
// //           let activeIndex = swiper.realIndex;
// //           initSlider(activeIndex)
// //         },
// //         afterInit: function (swiper) {
// //           let activeIndex = swiper.realIndex;
// //           animateText(activeIndex)
// //         },
// //       },
// //     });
// //   }
// // })
"use strict";
"use strict";
//# sourceMappingURL=main.js.map
