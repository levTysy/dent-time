let works = document.querySelectorAll('.works__wrapper-item');

for (let work of works) {
  work.addEventListener('click', function() {
    work.classList.toggle('show');
  });
}

