function toggleMenu() {
  const menu = document.getElementById('menuLinks');
  const icon = document.getElementById('hamburgerIcon');
  if (!menu || !icon) return;

  menu.classList.toggle('show');
  icon.classList.toggle('open');
}

function initPortfolioInteractions() {
  const hamburgerIcon = document.getElementById('hamburgerIcon');
  if (hamburgerIcon) {
    hamburgerIcon.addEventListener('click', toggleMenu);
  }

  document.querySelectorAll('#menuLinks a').forEach((link) => {
    link.addEventListener('click', toggleMenu);
  });

  const profileSection = document.getElementById('profile');
  const profileScene = document.querySelector('.profile-scene');

  if (profileSection && profileScene) {
    profileSection.addEventListener('mousemove', (event) => {
      const rect = profileSection.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width - 0.5) * 16;
      const y = ((event.clientY - rect.top) / rect.height - 0.5) * -10;
      profileScene.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
    });

    profileSection.addEventListener('mouseleave', () => {
      profileScene.style.transform = 'rotateX(0deg) rotateY(0deg)';
    });
  }
}

initPortfolioInteractions();