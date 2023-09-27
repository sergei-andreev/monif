const workers = ["Olivier", "Alena", "Tom", "Ivo"];
const workersNames = ["Olivier Binet", "Alena Valovaya", "Thomas Finan", "Ivo Dimitrov"];

var swiper = new Swiper(".swiper", {
  pagination: {
    el: ".about-us__bullets",
    bulletActiveClass: "about-us__bullet_active",
    bulletClass: "about-us__bullet",
    clickable: true,
    renderBullet: function (index, className) {
      return `<div class="${className}">
      <img src="./img/workers/${workers[index]}.png" alt="" />
      <p class="about-us__bullet-name">${workersNames[index]}</p>
    </div>`;
    },
  },
});
