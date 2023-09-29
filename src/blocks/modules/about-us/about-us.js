import Swiper from "swiper";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";

const workers = [
  { name: "Olivier Binet", img: "Olivier" },
  { name: "Alena Valovaya", img: "Alena" },
  { name: "Thomas Finan", img: "Tom" },
  { name: "Ivo Dimitrov", img: "Ivo" },
];

const swiper = new Swiper(".swiper", {
  modules: [Pagination, Navigation],
  spaceBetween: 100,
  pagination: {
    el: ".about-us__bullets",
    bulletActiveClass: "about-us__bullet_active",
    bulletClass: "about-us__bullet",
    clickable: true,
    renderBullet: function (index, className) {
      return `<div class="${className}">
        <img src="./img/workers/${workers[index].img}.png" alt="${workers[index].name}" />
        <p class="about-us__bullet-name">${workers[index].name}</p>
      </div>`;
    },
  },
});
