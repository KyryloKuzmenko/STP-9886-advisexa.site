document.addEventListener('DOMContentLoaded', function () {
  const modal = document.querySelector('.cookie-modal');
  const accept = document.querySelector('.cookies-accept');
  const decline = document.querySelector('.cookies-decline');

  const value = localStorage.getItem('cookies-privacy');

  if (value === 'false' || value === null) {
    modal.style.display = 'flex';
  }

  accept && accept.addEventListener('click', () => {
    localStorage.setItem('cookies-privacy', true);
    modal.style.display = 'none';
  });

  decline && decline.addEventListener('click', () => {
    localStorage.setItem('cookies-privacy', false);
    modal.style.display = 'none';
  });
});
