function selectPeriod(evt, name) {

  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(name).style.display = "flex";
  evt.currentTarget.className += " active";
  
}

function hideAlert() {
  const alertEl = document.getElementById('alert');
  if (!alertEl) return;
  alertEl.classList.add('closing');
  const onTransitionEnd = (e) => {
    if (e.propertyName === 'opacity') {
      alertEl.style.visibility = 'hidden';
      alertEl.removeEventListener('transitionend', onTransitionEnd);
    }
  };
  alertEl.addEventListener('transitionend', onTransitionEnd);
  setTimeout(() => {
    if (getComputedStyle(alertEl).opacity === '0') {
      alertEl.style.visibility = 'hidden';
      alertEl.removeEventListener('transitionend', onTransitionEnd);
    }
  }, 500);
}