gsap.registerPlugin(ScrollTrigger);

// const tl = new TimelineMax();

// tl.fromTo(
//   ".type-me",
//   6,
//   {
//     width: "0",
//   },
//   {
//     width: "650px" /* same as text-description width */,
//     ease: SteppedEase.config(44),
//     scrollTrigger: {
//       trigger: ".type-me",
//       markers: true,
//       start: "top 20%",
//       end: "bottom 10%",
//       //   events: onEnter onLeave onEnterBack onLeaveBack
//       toggleActions: " restart pause reverse reset",
//       //   options: play, pause, resume, reset, restart, complete, reverse,none
//     },
//   },

//   0
// );

gsap.from(".scroll-trigger-1", {
  scrollTrigger: {
    trigger: ".scroll-trigger-1",
    toggleActions: "restart pause resume pause",
  },

  scaleX: 0,
  duration: 0.3,
  transformOrigin: "right center",
  ease: "none",
});

gsap.from(".scroll-trigger-2", {
  scrollTrigger: {
    trigger: ".scroll-trigger-2",
    toggleActions: "restart pause resume pause",
  },
  scaleX: 0,
  duration: 0.3,
  transformOrigin: "right center",
  ease: "none",
});

gsap.from(".scroll-trigger-3", {
  scrollTrigger: {
    trigger: ".scroll-trigger-3",
    toggleActions: "restart pause resume pause",
  },
  scaleX: 0,
  duration: 0.3,
  transformOrigin: "right center",
  ease: "none",
});
