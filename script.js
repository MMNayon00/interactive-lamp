let isLightOn = false;

function toggleLight() {
  const bulb = document.getElementById('bulb');
  const room = document.getElementById('room');
  const sound = document.getElementById('pullSound');

  isLightOn = !isLightOn;
  bulb.classList.toggle('on', isLightOn);
  room.classList.toggle('light-on', isLightOn);

  sound.currentTime = 0;
  sound.play();
}
