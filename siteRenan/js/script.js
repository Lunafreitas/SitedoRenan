// ---------- CARROSSEL ----------
function iniciarCarrossel() {
    const carrossel = document.querySelector('.carrossel');
    const prev = document.getElementById('prev');
    const next = document.getElementById('next');
    const slideWidth = 350;
    if (!carrossel || !prev || !next) return;

    function scrollToPosition(position) {
      carrossel.scrollTo({
        left: position,
        behavior: 'smooth'
      });
    }

    next.addEventListener('click', () => {
      const maxScroll = carrossel.scrollWidth - carrossel.clientWidth;
      const newScroll = carrossel.scrollLeft + slideWidth;

      if (carrossel.scrollLeft >= maxScroll - 5) {
        scrollToPosition(0);
      } else {
        scrollToPosition(Math.min(newScroll, maxScroll));
      }
    });

    prev.addEventListener('click', () => {
      const newScroll = carrossel.scrollLeft - slideWidth;

      if (carrossel.scrollLeft <= 0) {
        const maxScroll = carrossel.scrollWidth - carrossel.clientWidth;
        scrollToPosition(maxScroll);
      } else {
        scrollToPosition(Math.max(newScroll, 0));
      }
    });
}
iniciarCarrossel();


// ------ PLANOS FILTRADOS (planos de fundo) -----
function btncell() {
  document.querySelectorAll('.pc').forEach(e => e.classList.add("esconder"));
  document.querySelectorAll('.cel').forEach(e => e.classList.remove("esconder"));
}

function btnpcs() {
  document.querySelectorAll('.cel').forEach(e => e.classList.add("esconder"));
  document.querySelectorAll('.pc').forEach(e => e.classList.remove("esconder"));
}

function btntodos() {
  document.querySelectorAll('.pc, .cel').forEach(e => e.classList.remove("esconder"));
}
