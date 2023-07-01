document.addEventListener('DOMContentLoaded', () => {
    const timeElement = document.getElementById('time');
    setInterval(() => {
      const currentTime = new Date().toLocaleTimeString();
      timeElement.textContent = currentTime;
    }, 10);
  });
  