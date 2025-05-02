document.addEventListener("DOMContentLoaded", () => {
    const preloader = document.getElementById("preloader");
  
    window.addEventListener("load", () => {
      setTimeout(() => {
        preloader.classList.add("hidden");
      }, 1500); // уменьшил до 1.5 секунды для быстрого теста
    });
  
    // Spotlight
    const spotlight = document.getElementById('spotlight');
    document.addEventListener('mousemove', (e) => {
      spotlight.style.left = e.clientX + 'px';
      spotlight.style.top = e.clientY + 'px';
    });
  
    // Particles
    const chars = ['✬', '❁', '❄', 'M', 'W', 'X'];
    function createParticle() {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      particle.innerText = chars[Math.floor(Math.random() * chars.length)];
      particle.style.left = Math.random() * window.innerWidth + 'px';
      particle.style.top = '-20px';
      particle.style.fontSize = (Math.random() * 20 + 10) + 'px';
      particle.style.animationDuration = (Math.random() * 5 + 5) + 's';
      particle.style.transform = `rotate(${Math.random() * 360}deg)`;
      document.body.appendChild(particle);
      setTimeout(() => particle.remove(), 10000);
    }
    setInterval(createParticle, 250);
  
    // Gift menu toggle
    const giftIcon = document.getElementById('giftIcon');
    const giftMenu = document.getElementById('giftMenu');
    giftIcon.addEventListener('click', (e) => {
      e.stopPropagation();
      giftMenu.classList.toggle('active');
    });
    document.addEventListener('click', () => {
      giftMenu.classList.remove('active');
    });
  
    // Activation
    window.activateRole = function () {
      const nickname = document.getElementById('discordNickname').value;
      if (!nickname) {
        alert('Пожалуйста, введите ваш никнейм!');
        return;
      }
      fetch('/activate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nickname })
      })
      .then(response => response.json())
      .then(data => {
        alert(data.success ? 'Роль активирована!' : 'Ошибка активации.');
      })
      .catch(() => {
        alert('Произошла ошибка при активации роли.');
      });
    };
  });
  