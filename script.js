function goTo(num) {
  document.querySelectorAll('.screen').forEach(s => {
    s.classList.remove('active');
  });

  document.getElementById('screen-' + num).classList.add('active');
}

