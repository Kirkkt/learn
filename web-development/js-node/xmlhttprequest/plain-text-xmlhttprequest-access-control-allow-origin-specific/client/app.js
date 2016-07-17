var xml = new XMLHttpRequest();
xml.open('GET', 'http://0.0.0.0:2039');
xml.onload = function(progressEvent) {
  if (xml.readyState === 4) {
    alert('the response contains text ' + xml.responseText);
  }
};
xml.onerror = function(error) {
  console.log('onerror', error);
};
xml.send();
