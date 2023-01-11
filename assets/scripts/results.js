var resultsJsn = {};
var resultsEl = $('#results');

function getSearchResults(){
    var format = location.search.split("&")[0].split("=")[1];
    var queryStr = location.search.split("&")[1].split("=")[1];

    $('#libName').text(queryStr);

    var urlStr = "https://www.loc.gov/" + format + "/?c=5&fo=json&q=" + queryStr;

    fetch(urlStr)
    .then(function (response) {
      if (response.ok) {
        console.log(response);
        response.json().then(function (data) {
          resultsJsn = data;
          console.log(resultsJsn);
          displayResults();
        });
      } else {
        alert('Error: ' + response.statusText);
      }
    })
    .catch(function (error) {
      alert('Unable to connect to site');
    });

}
function displayResults(){

  var resultsArr = resultsJsn.content.results;
  console.log(resultsArr)

  $('#results').empty();

  for(i = 0; i < resultsArr.length; i++) {
    
    var cardEl = $('<div>').addClass("card");
    var headerEl = $("<div>").addClass("card-header");
    var cardbodyEl = $('<div>').addClass("card-body");
    var cardtitelEl = $('<h5>').addClass("card-title");
    var cardtextEl = $('<p>').addClass("card-text");
    var dateTextEl = $('<p>').addClass("card-text");
    var descTextEl = $('<p>').addClass("card-text");
    
    if(resultsArr[i].date) {
      dateTextEl.text("Date: " + resultsArr[i].date);
    }
   
    if(resultsArr[i].description) {
      descTextEl.text("Description: " + resultsArr[i].description);
    }

    if(resultsArr[i].subject) {
      cardtextEl.text("Subjects: " + resultsArr[i].subject.join(", "));
    }
    
    cardtitelEl.text(resultsArr[i].title);
    headerEl.append(cardtitelEl);
    cardbodyEl.append(dateTextEl).append(descTextEl).append(cardtextEl);
    cardEl.append(headerEl).append(cardbodyEl);
    resultsEl.append(cardEl);
  }

  $('#back').on('click', function(){
    location.assign('./index.html');
  });
}

$(function(){
    getSearchResults();
});