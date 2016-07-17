var refresh = function() {
  var records = [];
  var text = 'something\nnew';
  var app = document.getElementById('app');
  var div = document.createElement('div');
  div.innerText = text;
  app.replaceChild(div);
  // app.appendChild(div);
};
