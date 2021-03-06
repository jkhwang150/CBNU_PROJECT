// COMMON




//NOTICE
const btnAdd = document.querySelector('.notice__right .add');
const btnHide = document.querySelector('.notice__right .hide');

const noticeSwiper = new Swiper('.notice .swiper', {
        // Optional parameters
        direction: 'vertical',
        loop: true,
        autoplay : {
          delay : 3000
        }
      });

btnAdd.addEventListener('click',function(){
        const help = document.querySelector('.help');
        help.classList.toggle('display');
        btnAdd.classList.toggle('off');
        btnHide.classList.toggle('off');
        const texts = document.querySelectorAll('.help h1');
        texts.forEach(function(text,index){
                text.classList.add('active');
        })
        const logo = document.querySelector('.help .logo');
        logo.classList.add('active');
        const swipe = document.querySelector('.help .swiper');
        swipe.classList.add('active');
        const slides = document.querySelectorAll('.help .swiper .swiper-slide');
        slides.forEach(function(slide,index){
                slide.classList.add('active');
        })
})

btnAdd.addEventListener('mouseover',function(){
        btnAdd.innerHTML = 'add_circle';
})

btnAdd.addEventListener('mouseout',function(){
        btnAdd.innerHTML = 'add_circle_outline';
})

btnHide.addEventListener('click',function(){
        const help = document.querySelector('.help');
        help.classList.toggle('display');
        btnHide.classList.toggle('off');
        btnAdd.classList.toggle('off');
        const texts = document.querySelectorAll('.help h1');
        texts.forEach(function(text,index){
                text.classList.remove('active');
        })
        const logo = document.querySelector('.help .logo');
        logo.classList.remove('active');
        const swipe = document.querySelector('.help .swiper');
        swipe.classList.remove('active');
        const slides = document.querySelectorAll('.help .swiper .swiper-slide');
        slides.forEach(function(slide,index){
                slide.classList.remove('active');
        })
})

btnHide.addEventListener('mouseover',function(){
        btnHide.innerHTML = 'remove_circle';
})

btnHide.addEventListener('mouseout',function(){
        btnHide.innerHTML = 'remove_circle_outline';
})

const helpSwiper = new Swiper('.help .swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        autoplay: {
          delay: 0
        },
        slidesPerView: 12,
        spaceBetween : 20,

      });


//MENU
const menuLists = document.querySelectorAll('.menuList');
const boards = document.querySelectorAll('.board .element');
menuLists.forEach(function(menu,index){
        menu.addEventListener('click',function(){
                for(let i=0;i<5;i++){
                        boards[`${i}`].classList.remove('select'); 
                        menuLists[`${i}`].classList.remove('active');
                }
                menuLists[`${index}`].classList.add('active');
                boards[`${index}`].classList.add('select');
        })
})

const btnCancel = document.querySelector('.board .element .material-icons');
const btnCancels = document.querySelectorAll('.board .element .material-icons');
btnCancels.forEach(function(btn,index){
        btn.addEventListener('mouseover',function(){
                btn.innerHTML = 'cancel';
        })

        btn.addEventListener('mouseout',function(){
        btn.innerHTML = 'highlight_off';
        })

        btn.addEventListener('click',function(){
                boards[`${index}`].classList.remove('select');
                menuLists[`${index}`].classList.remove('active');
        })
})


