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
  console.log(document.getElementsByClassName("alert")[0].style);
  
    document.getElementsByClassName("alert")[0].style.visibility="hidden"
}
