(function() {
  var req = new XMLHttpRequest();
  req.onreadystatechange = function () {
    if (req.readyState === 4 && req.status === 201) {
      console.log(JSON.parse(req.response).widgetConfig);
    }
  };
  req.open('GET', 'http://localhost:3000/v1/widgetConfig', true);
  req.setRequestHeader("x-client-partner-key", "acm");
  req.send();
})();

