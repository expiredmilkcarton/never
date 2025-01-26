document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menuToggle');
  const menuContent = document.getElementById('menuContent');

  menuToggle.addEventListener('click', () => {
    if (menuContent.style.display === 'flex') {
      menuContent.style.display = 'none';
    } else {
      menuContent.style.display = 'flex';
    }
  });

  // Smooth open/close animation
  menuContent.style.transition = 'opacity 0.5s ease-in-out';
  menuContent.style.opacity = 0;

  menuToggle.addEventListener('click', () => {
    if (menuContent.style.opacity === '0') {
      menuContent.style.opacity = 1;
      menuContent.style.display = 'flex';
    } else {
      menuContent.style.opacity = 0;
      setTimeout(() => {
        menuContent.style.display = 'none';
      }, 500); // Match the duration of the animation
    }
  });
});
