// ===========================SLIDER================================

const swiper = new Swiper('.swiper', {

    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    spaceBetween: 50,
   

    navigation: {
      nextEl: '.swiper-button-right', 
      prevEl: '.swiper-button-left',
    },
  });


 

// ===========================TIMER================================


  document.addEventListener('DOMContentLoaded', function() {
    // конечная дата, например 1 июля 2021
    const deadline = new Date(2023, 04, 01);
    // id таймера
    let timerId = null;
    // склонение числительных
    function declensionNum(num, words) {
      return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
    }
    // вычисляем разницу дат и устанавливаем оставшееся времени в качестве содержимого элементов
    function countdownTimer() {
      const diff = deadline - new Date();
      if (diff <= 0) {
        clearInterval(timerId);
      }
      const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
      const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
      const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
      const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
      $days.textContent = days < 10 ? '0' + days : days;
      $hours.textContent = hours < 10 ? '0' + hours : hours;
      $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
      $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
      $days.dataset.title = declensionNum(days, ['день', 'дня', 'дней']);
      $hours.dataset.title = declensionNum(hours, ['час', 'часа', 'часов']);
      $minutes.dataset.title = declensionNum(minutes, ['минута', 'минуты', 'минут']);
      $seconds.dataset.title = declensionNum(seconds, ['секунда', 'секунды', 'секунд']);
    }
    // получаем элементы, содержащие компоненты даты
    const $days = document.querySelector('.timer__days');
    const $hours = document.querySelector('.timer__hours');
    const $minutes = document.querySelector('.timer__minutes');
    const $seconds = document.querySelector('.timer__seconds');
    // вызываем функцию countdownTimer
    countdownTimer();
    // вызываем функцию countdownTimer каждую секунду
    timerId = setInterval(countdownTimer, 1000);
  });
  
  
// ===========================Добавляем класс по hover в блок Team и убираем когда мыша ушла  ================================

const teamHover = document.querySelector('.team__image--hover')
const teamImage = document.querySelector('.team__image-left')
teamImage.addEventListener('mouseover', ()=>{
  teamHover.style.display = 'block'
});

teamHover.addEventListener('mouseout', ()=>{
  teamHover.style.display = 'none'
});

const teamHoverCenter = document.querySelector('.team__image--hover-center')
const teamImageCenter = document.querySelector('.team__image-center')
teamImageCenter.addEventListener('mouseover', ()=>{
  teamHoverCenter.style.display = 'block'
});

teamHoverCenter.addEventListener('mouseout', ()=>{
  teamHoverCenter.style.display = 'none'
});


const teamHoverRight = document.querySelector('.team__image--hover-right')
const teamImagerRight = document.querySelector('.team__image-right')
teamImagerRight.addEventListener('mouseover', ()=>{
  teamHoverRight.style.display = 'block'
});

teamHoverRight.addEventListener('mouseout', ()=>{
  teamHoverRight.style.display = 'none'
});
