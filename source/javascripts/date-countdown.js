function updateTimer() {
  future  = Date.parse('May 25, 2019 12:00:00');
  now     = new Date();
  diff    = future - now;

  days  = Math.floor(diff / (1000 * 60 * 60 * 24));
  hours = Math.floor(diff / (1000 * 60 * 60));
  mins  = Math.floor(diff / (1000 * 60));
  secs  = Math.floor(diff / 1000);

  d = days;
  h = hours - days  * 24;
  m = mins  - hours * 60;
  s = secs  - mins  * 60;

  document.getElementById('timer')
    .innerHTML =
      '<div class="counter-block"><div class="counter-item"><span class="day">' + d + '</span><span class="unit">Dagen</span></div></div>' +
      '<div class="counter-block"><div class="counter-item"><span class="day">' + h + '</span><span class="unit">Uren</span></div></div>' +
      '<div class="counter-block"><div class="counter-item"><span class="day">' + m + '</span><span class="unit">Minuten</span></div></div>' +
      '<div class="counter-block"><div class="counter-item"><span class="day">' + s + '</span><span class="unit">Seconden</span></div></div>';
}

setInterval('updateTimer()', 1000);
