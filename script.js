/* ═══════════════════════════════════════
   OUR STORY — JavaScript
   ═══════════════════════════════════════ */

// ── LOGIN SYSTEM ──
function handleLogin(e) {
  e.preventDefault();
  
  const uid = document.getElementById('login-id').value.trim().toLowerCase();
  const pwd = document.getElementById('login-pwd').value.trim().toLowerCase();
  const errorEl = document.getElementById('login-error');
  
  if (uid === 'kya khana hai' && pwd === 'tum batao') {
    // Success!
    const loginPage = document.getElementById('login-page');
    const mainContent = document.getElementById('main-content');
    
    loginPage.classList.add('hidden');
    
    setTimeout(() => {
      loginPage.style.display = 'none';
      mainContent.classList.add('visible');
      document.body.style.overflow = 'auto';
      initScrollReveal();
      initPetals();
    }, 800);
    
  } else if (uid === '' || pwd === '') {
    errorEl.textContent = 'Dono fill karo na pehle 🙈';
  } else {
    errorEl.textContent = 'Galat! Sochke batao... 😏💕';
    
    // Shake animation
    const card = document.querySelector('.login-card');
    card.style.animation = 'none';
    card.offsetHeight; // trigger reflow
    card.style.animation = 'shake 0.5s ease';
    setTimeout(() => { card.style.animation = 'cardPulse 3s ease-in-out infinite'; }, 500);
  }
}

// Add shake keyframe
const shakeStyle = document.createElement('style');
shakeStyle.textContent = `
  @keyframes shake {
    0%,100% { transform: translateX(0); }
    20% { transform: translateX(-10px); }
    40% { transform: translateX(10px); }
    60% { transform: translateX(-6px); }
    80% { transform: translateX(6px); }
  }
`;
document.head.appendChild(shakeStyle);


// ── FLOATING HEARTS ON LOGIN ──
function createLoginHearts() {
  const container = document.getElementById('login-particles');
  if (!container) return;
  
  const hearts = ['💕', '💗', '💖', '🌸', '✨', '💝', '🩷', '🫶'];
  
  for (let i = 0; i < 15; i++) {
    const heart = document.createElement('span');
    heart.className = 'login-heart';
    heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDelay = Math.random() * 6 + 's';
    heart.style.animationDuration = (4 + Math.random() * 4) + 's';
    heart.style.fontSize = (0.8 + Math.random() * 1.2) + 'rem';
    container.appendChild(heart);
  }
}


// ── SCROLL REVEAL ──
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -50px 0px'
  });
  
  reveals.forEach(el => observer.observe(el));
}


// ── FALLING PETALS ──
function initPetals() {
  const container = document.getElementById('petals');
  if (!container) return;
  
  for (let i = 0; i < 20; i++) {
    const petal = document.createElement('span');
    petal.className = 'petal';
    petal.style.left = Math.random() * 100 + '%';
    petal.style.animationDelay = Math.random() * 8 + 's';
    petal.style.animationDuration = (6 + Math.random() * 6) + 's';
    petal.style.width = (8 + Math.random() * 10) + 'px';
    petal.style.height = petal.style.width;
    container.appendChild(petal);
  }
}


// ── INIT ──
document.addEventListener('DOMContentLoaded', () => {
  document.body.style.overflow = 'hidden';
  createLoginHearts();
  
  const form = document.getElementById('login-form');
  if (form) {
    form.addEventListener('submit', handleLogin);
  }
});
