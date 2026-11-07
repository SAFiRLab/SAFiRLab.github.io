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
  var gallery = [];
  var current = 0;
  var groups = {};

  function closeLightbox() {
    if (!lightbox) return;
    document.body.removeChild(lightbox);
    document.body.classList.remove('lightbox-open');
    lightbox = null;
  }

  function captionFor(link) {
    if (link.dataset.caption) return link.dataset.caption;
    return link.closest('figure').querySelector('figcaption').textContent;
  }

  function showImage(index) {
    var count = gallery.length;
    current = (index + count) % count;
    var img = lightbox.querySelector('img');
    img.src = gallery[current].href;
    img.alt = gallery[current].querySelector('img').alt;
    lightbox.querySelector('.lightbox-caption').textContent = captionFor(gallery[current]);
  }

  function openLightbox(group, index) {
    gallery = groups[group];
    lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML =
      '<button type="button" class="lightbox-close" aria-label="Close">' +
      '<span class="icon"><i class="fas fa-times"></i></span></button>' +
      '<button type="button" class="lightbox-nav lightbox-prev" aria-label="Previous photo">' +
      '<span class="icon"><i class="fas fa-chevron-left"></i></span></button>' +
      '<figure class="lightbox-figure"><img alt=""><figcaption class="lightbox-caption"></figcaption></figure>' +
      '<button type="button" class="lightbox-nav lightbox-next" aria-label="Next photo">' +
      '<span class="icon"><i class="fas fa-chevron-right"></i></span></button>';
    lightbox.addEventListener('click', function (event) {
      var target = event.target;
      if (target.closest('.lightbox-close')) return closeLightbox();
      if (target.closest('.lightbox-prev')) return showImage(current - 1);
      if (target.closest('.lightbox-next')) return showImage(current + 1);
      if (target === lightbox || target.classList.contains('lightbox-figure')) closeLightbox();
    });
    document.body.appendChild(lightbox);
    document.body.classList.add('lightbox-open');
    showImage(index);
    lightbox.querySelector('.lightbox-close').focus();
  }

  Array.prototype.slice.call(document.querySelectorAll('[data-lightbox]')).forEach(function (link) {
    var group = link.dataset.lightbox;
    groups[group] = groups[group] || [];
    groups[group].push(link);
    link.addEventListener('click', function (event) {
      event.preventDefault();
      openLightbox(group, groups[group].indexOf(link));
    });
  });

  document.addEventListener('keydown', function (event) {
    if (!lightbox) return;
    if (event.key === 'Escape') closeLightbox();
    if (event.key === 'ArrowLeft') showImage(current - 1);
    if (event.key === 'ArrowRight') showImage(current + 1);
  });
});
