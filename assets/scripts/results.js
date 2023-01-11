var resultsJsn = {};

function getSearchResults(){
    var format = location.search.split("&")[0].split("=")[1];
    var queryStr = location.search.split("&")[1].split("=")[1];

    var urlStr = "https://www.loc.gov/" + format + "/?c=5&fo=json&q=" + queryStr;

    fetch(urlStr)
    .then(function (response) {
      if (response.ok) {
        console.log(response);
        response.json().then(function (data) {
          resultsJsn = data;
          console.log(resultsJsn);
        //   displayResults(data);
        });
      } else {
        alert('Error: ' + response.statusText);
      }
    })
    .catch(function (error) {
      alert('Unable to connect to site');
    });
}

$(function(){
    getSearchResults();
});