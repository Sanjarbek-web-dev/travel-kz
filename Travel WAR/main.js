    "use strict";

// language hover
const ru = document.querySelector('#ru'),
    kz = document.querySelector('#kz');

ru.addEventListener('click', ()=> {
  ru.classList.add('active');
  kz.classList.remove('active');
})
kz.addEventListener('click', ()=> {
  kz.classList.add('active');
  ru.classList.remove('active');
})

// toggle
const toggle = document.querySelector('#toggle-btn'),
  header = document.querySelector('#header-links'),
  close = document.querySelector('#close-btn1');

  toggle.addEventListener('click', ()=> {
    header.classList.add('show');
    close.classList.add('show');
  })
  close.addEventListener('click', ()=> {
    header.classList.remove('show');
    close.classList.remove('show');
  })

    productScroll();

    function productScroll() {
    let slider = document.getElementById("slider");
    let next = document.getElementsByClassName("pro-next");
    let prev = document.getElementsByClassName("pro-prev");
    let slide = document.getElementById("slide");
    let item = document.getElementById("slide");

    for (let i = 0; i < next.length; i++) {
        //refer elements by class name

        let position = 0; //slider postion

        prev[i].addEventListener("click", function() {
        //click previos button
        if (position > 0) {
            //avoid slide left beyond the first item
            position -= 1;
            translateX(position); //translate items
        }
        });

        next[i].addEventListener("click", function() {
        if (position >= 0 && position < hiddenItems()) {
            //avoid slide right beyond the last item
            position += 1;
            translateX(position); //translate items
        }
        });
    }

    function hiddenItems() {
        //get hidden items
        let items = getCount(item, false);
        let visibleItems = slider.offsetWidth / 190;
        return items - Math.ceil(visibleItems);
    }
    }

    function translateX(position) {
    //translate items
    slide.style.left = position * -190 + "px";
    }

    function getCount(parent, getChildrensChildren) {
    //count no of items
    let relevantChildren = 0;
    let children = parent.childNodes.length;
    for (let i = 0; i < children; i++) {
        if (parent.childNodes[i].nodeType != 3) {
        if (getChildrensChildren)
            relevantChildren += getCount(parent.childNodes[i], true);
        relevantChildren++;
        }
    }
    return relevantChildren;
    }


    // const swiper = new Swiper('.swiper', {
    //     // Optional parameters
    //     direction: 'vertical',
    //     loop: true,
      
    //     // If we need pagination
    //     pagination: {
    //       el: '.swiper-pagination',
    //     },
      
    //     // Navigation arrows
    //     navigation: {
    //       nextEl: '.swiper-button-next',
    //       prevEl: '.swiper-button-prev',
    //     },
      
    //     // And if we need scrollbar
    //     scrollbar: {
    //       el: '.swiper-scrollbar',
    //     },
    //   });

// slider 2
var slideMain = document.getElementById("slider-main");
var item = slideMain.getElementsByClassName('item1')

function next() {
  slideMain.append(item[0])
}
function prev() {
  slideMain.prepend(item[item.length - 1])
}

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 6,
  centeredSlides: false,
  grabCursor: true,
  keyboard: {
    enabled: true,
  }, 
  mousewheel: {
    invert: true,
  },
  spaceBetween: 30,
  autoplay: {
    delay: 5000,
  }, 
  breakpoints: {
    769: {
      slidesPerView: 6,
      slidesPerGroup: 6,
    },
  },
  loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

// person adder
let number = 1;
let decr = document.querySelector("#decr"),
  incr = document.querySelector("#incr"),
  add = document.querySelector("#add");
  
function changeNumber(button){
  if(button == decr && 0 < number) {
    number -= 1;
  }else if(button == incr){
    number += 1;
  }else if(number <= 0){
    number = 0;
  }else{
    number = 0;
  }
  add.innerHTML = number;
}
changeNumber();