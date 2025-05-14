function toggleGameInfo() {
  const info = document.getElementById('game-info');
  info.style.display = (info.style.display === 'none') ? 'block' : 'none';
}

function validateForm() {
  const name = document.getElementById('name').value;
  if (name.trim() === '') {
    alert('Please enter your name.');
    return false;
  }
  return true;
}

