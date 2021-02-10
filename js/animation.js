var tl = gsap.timeline();
gsap.registerPlugin(ScrollTrigger);

tl.to(".content li", 1, {
    scrollTrigger:{
        trigger:'.showcase',
        start:'top center',
    },
    scale:1.2,
    y:-100,
    opacity:1,
    delay:0.5,
    stagger: {
      amount: 2,

    }
  });