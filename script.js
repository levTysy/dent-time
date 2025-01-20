// Увеличение-уменьшение фото в галерее

let works = document.querySelectorAll('.works__wrapper-item');
let body = document.querySelector('body');

for (let work of works) {
  work.addEventListener('click', function() {
    work.classList.toggle('show');
  });
}

// АПИ Яндекс Карт

let center = [45.05328446435812,42.032487139561994];

function init() {
  let map = new ymaps.Map('map__block', {
    center: center,
    zoom: 17    
  });

  let placemark = new ymaps.Placemark(center, {
    balloonContent: `
      <div>
        <h2>Удаление вмятин</h2>
        <p>Ставрополь, Старомарьевское ш., 30Б</p>
        <a href="tel:+79887679341">+79887679341</a>
      </div>
    `
  }, {
    iconLayout: 'default#image',
    iconImageHref: './assests/img/map-location/2.png'
  });

  map.geoObjects.add(placemark);
}

ymaps.ready(init);