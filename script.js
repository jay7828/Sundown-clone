const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


function page4Animation() {
    var elemC = document.querySelector('#elemC');
    var fix_img = document.querySelector('#fixed-image');

    elemC.addEventListener("mouseenter", function () {
        fix_img.style.display = "block";
    });

    elemC.addEventListener("mouseleave", function () {
        fix_img.style.display = "none";
    });

    var elems = document.querySelectorAll('.elem');
    elems.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
            var image = e.getAttribute('data-img');
            console.log(image);
            fix_img.style.backgroundImage = `url('${image}')`;
        });

        e.addEventListener("mouseleave", function () {
            // You can reset the background image or take any other action when mouse leaves
            fix_img.style.backgroundImage = 'none';
        });
    });
}

function swipperAnimation(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 2,
        spaceBetween: 30,
        centeredSlides: true,
      });
}
function menuAnimation(){
    var menu =document.querySelector("#nav h3")
var nav =document.querySelector("#nav")

var full =document.querySelector("#fullscr")
var navimg =document.querySelector("#nav img")
var flag=0 
menu.addEventListener('click',function(){
    if(flag==0){
        full.style.top=0
        navimg.style.opacity=0
        menu.style.right=0;
        // nav.style.position="fixed";
        flag=1
    }
    else{
        full.style.top="-100%"
        nav.style.position="relative";
        navimg.style.opacity=1
        flag=0
    }
})
}

function loaderAnimation(){
    var loader = document.querySelector('#loader')

setTimeout(function(){
    loader.style.top="-100%"
},3400)
}



page4Animation()
menuAnimation()
swipperAnimation()
loaderAnimation()