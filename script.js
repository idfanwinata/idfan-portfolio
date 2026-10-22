document.getElementById('year').textContent = new Date().getFullYear();
document.querySelectorAll('[data-placeholder]').forEach(link => link.addEventListener('click', event => {
  event.preventDefault();
  alert('Replace this placeholder with your real profile URL before publishing.');
}));