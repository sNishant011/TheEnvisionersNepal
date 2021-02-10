var tl = gsap.timeline();
gsap.registerPlugin(ScrollTrigger);

tl.to(".content li", 1, {
    scrollTrigger:{
        trigger:'.showcase',
        start:'top top',
        pin: true,
        


    },
    scale:1.3,
    y:-100,
    opacity:1,
    delay:2,
    stagger: {
      amount: 2,

    }
  });