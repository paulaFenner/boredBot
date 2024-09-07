const getBtn = document.getElementById('get-btn');

getBtn.addEventListener('click', renderActivity);

function renderActivity() {
  fetch('https://apis.scrimba.com/bored/api/activity')
    .then((response) => response.json())
    .then((data) => {
      document.getElementById('random-activity').textContent = data.activity;
      document.getElementById('title').textContent = '🦾 HappyBot🦿';
      document.querySelector('main').classList.add('fun');
    });
}
