let navbar = document.querySelector('.header .navbar')

document.querySelector('#menu-btn').onclick = () =>{
  navbar.classList.add('active');
}

document.querySelector('#close-navbar').onclick = () =>{
  navbar.classList.remove('active');
};


// const tl = gsap.timeline();

// tl.from(".content h1", 1.8, {
//   y: 100,
//   ease: "power4.out",
//   delay: 1,
//   skewY: 7,
//   stagger: {
//     amount: 0.3
//   }
// })

$( document ).ready(function() {
  // AOS.init();
  AOS.init({disable: 'mobile'});
});

