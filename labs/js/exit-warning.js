window.addEventListener('beforeunload', function (e) {
  navigator.sendBeacon("https://labs.play-with-docker.com/sessions/" + pwd.sessionId + "/close");
  // Cancel the event
  e.preventDefault();
  // Chrome requires returnValue to be set
  e.returnValue = '';
});
