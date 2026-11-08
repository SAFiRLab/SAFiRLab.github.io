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
  var trigger = null;

  var copyButtons = Array.prototype.slice.call(document.querySelectorAll('[data-copy]'));
  copyButtons.forEach(function (button) {
    var label = button.textContent;
    button.addEventListener('click', function () {
      var code = button.closest('.pub-code').querySelector('pre').textContent;
      navigator.clipboard.writeText(code).then(function () {
        button.textContent = 'Copied';
        setTimeout(function () { button.textContent = label; }, 1500);
      });
    });
  });

  Array.prototype.slice.call(document.querySelectorAll('[data-bibtex-toggle]')).forEach(function (button) {
    button.addEventListener('click', function () {
      var group = button.closest('.pub-body');
      var open = button.getAttribute('aria-expanded') !== 'true';
      Array.prototype.slice.call(group.querySelectorAll('[data-bibtex-toggle]')).forEach(function (other) {
        other.setAttribute('aria-expanded', 'false');
        document.getElementById(other.getAttribute('aria-controls')).hidden = true;
      });
      if (open) {
        button.setAttribute('aria-expanded', 'true');
        document.getElementById(button.getAttribute('aria-controls')).hidden = false;
      }
    });
  });

  function closeLightbox() {
    if (!lightbox) return;
    document.body.removeChild(lightbox);
    document.body.classList.remove('lightbox-open');
    lightbox = null;
    if (trigger) trigger.focus();
    trigger = null;
  }

  function captionFor(link) {
    if (link.dataset.caption) return link.dataset.caption;
    var figure = link.closest('figure');
    var caption = figure && figure.querySelector('figcaption');
    return caption ? caption.textContent : link.querySelector('img').alt;
  }

  function showImage(index) {
    var count = gallery.length;
    current = (index + count) % count;
    var img = lightbox.querySelector('img');
    img.src = gallery[current].href;
    img.alt = gallery[current].querySelector('img').alt;
    lightbox.querySelector('.lightbox-caption').textContent = captionFor(gallery[current]);
  }

  function openLightbox(group, index, opener) {
    gallery = groups[group];
    trigger = opener;
    lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.setAttribute('role', 'dialog');
    lightbox.setAttribute('aria-modal', 'true');
    lightbox.setAttribute('aria-label', 'Image viewer');
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
      openLightbox(group, groups[group].indexOf(link), link);
    });
  });

  document.addEventListener('keydown', function (event) {
    if (!lightbox) return;
    if (event.key === 'Escape') return closeLightbox();
    if (event.key === 'ArrowLeft') return showImage(current - 1);
    if (event.key === 'ArrowRight') return showImage(current + 1);
    if (event.key === 'Tab') {
      var controls = lightbox.querySelectorAll('button');
      var first = controls[0];
      var last = controls[controls.length - 1];
      var active = document.activeElement;
      if (!lightbox.contains(active)) {
        event.preventDefault();
        first.focus();
      } else if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    }
  });
});
