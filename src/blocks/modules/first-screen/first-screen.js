import { gsap } from "gsap";

document.addEventListener("DOMContentLoaded", function () {
  gsap.from(".title_h1", {
    opacity: 0,
    x: -200,
    duration: 2,
    ease: "power4.out",
    delay: 1.5,
  });

  gsap.from(".first-screen__text", {
    opacity: 0,
    x: -200,
    duration: 1.5,
    ease: "power4.out",
    delay: 1,
  });

  gsap.from(".bg-image_center", {
    opacity: 0,
    duration: 1.5,
    ease: "power4.out",
    delay: 3.4,
  });

  gsap.from(".bg-image_left", {
    opacity: 0,
    duration: 1.5,
    ease: "power4.out",
    delay: 3,
  });

  gsap.from(".bg-image_right", {
    opacity: 0,
    duration: 1.5,
    ease: "power4.out",
    delay: 3.2,
  });

  gsap.from(".bg-image_bottom", {
    opacity: 0,
    duration: 1.5,
    ease: "power4.out",
    delay: 3.6,
  });
});
