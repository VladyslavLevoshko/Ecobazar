document.getElementById('adress').addEventListener('click', function(){
    const adress = 'ul. Niedziałkowskiego 24/31, Poznań, Polska'
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(adress)}`;
    const confirmRedict = confirm(`Открыть адрес в Google Maps \n\n ${adress}`);
    if(confirmRedict){
        window.open(url, '_blank')
    }
});

// Меню языка и валюты

document.querySelectorAll('.dropdown').forEach(dropdown => {
    const span = dropdown.querySelector('span');
    const menu = dropdown.querySelector('.dropdown-menu');

    dropdown.addEventListener('click', e => {
      e.stopPropagation();
      document.querySelectorAll('.dropdown').forEach(d => {
        if (d !== dropdown) d.classList.remove('open');
      });
      dropdown.classList.toggle('open');
    });

    menu.querySelectorAll('li').forEach(item => {
      item.addEventListener('click', () => {
        span.textContent = item.textContent;
        dropdown.classList.remove('open');
      });
    });
  });


document.addEventListener('click', () => {
    document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('open'));
  });

