const toggleBtn = document.getElementById('toggle-theme');

function loadTheme() {
  const theme = localStorage.getItem('theme');
  if (theme === 'dark') {
    document.body.classList.add('dark');
  }
}

function saveTheme(isDark) {
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  saveTheme(document.body.classList.contains('dark'));
});

loadTheme();

function showSection(id) {
  document.querySelectorAll('.section').forEach(section => {
    section.classList.remove('active');
  });
  const selected = document.getElementById(id);
  if (selected) selected.classList.add('active');
}
