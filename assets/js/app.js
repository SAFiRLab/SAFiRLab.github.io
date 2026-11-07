document.addEventListener('DOMContentLoaded', function () {
  var burgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  burgers.forEach(function (burger) {
    burger.addEventListener('click', function () {
      var target = document.getElementById(burger.dataset.target);
      burger.classList.toggle('is-active');
      target.classList.toggle('is-active');
      burger.setAttribute('aria-expanded', burger.classList.contains('is-active'));
    });
  });

  var lightbox = null;

  function closeLightbox() {
    if (!lightbox) return;
    document.body.removeChild(lightbox);
    document.body.classList.remove('lightbox-open');
    lightbox = null;
  }

  function openLightbox(src, alt) {
    lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML =
      '<button type="button" class="lightbox-close" aria-label="Close">' +
      '<span class="icon"><i class="fas fa-times"></i></span></button>' +
      '<img alt="">';
    lightbox.querySelector('img').src = src;
    lightbox.querySelector('img').alt = alt;
    lightbox.addEventListener('click', function (event) {
      if (event.target !== lightbox.querySelector('img')) closeLightbox();
    });
    document.body.appendChild(lightbox);
    document.body.classList.add('lightbox-open');
    lightbox.querySelector('.lightbox-close').focus();
  }

  document.querySelectorAll('[data-lightbox]').forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      openLightbox(link.href, link.querySelector('img').alt);
    });
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') closeLightbox();
  });
});
