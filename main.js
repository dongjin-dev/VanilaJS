const clockTitle = document.querySelector('.js-clock');

function handledChangeValue(event) {
  const diffDate = new Date('2024-12-25') - new Date();

  const seconds = Math.floor(diffDate / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  const remainingSeconds = seconds % 60;
  const remainingMinutes = minutes % 60;
  const remainingHours = (hours % 24).toString().padStart(2, '0');

  clockTitle.innerHTML = `${days}d ${remainingHours}h ${remainingMinutes}m ${remainingSeconds}s`;
}

setInterval(handledChangeValue, 1000);
