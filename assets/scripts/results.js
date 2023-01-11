var resultsJsn = {};
var resultsEl = $('#results');

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
    
    var cardEl = $('<div>').addClass("card");
    var headerEl = $("<div>").addClass("card-header");
    var cardbodyEl = $('<div>').addClass("card-body");
    var cardtitelEl = $('<h5>').addClass("card-title");
    var cardtext = $('<p>').addClass("card-text");

    headerEl.text(resultsJsn.content.results[0].title);
    cardtitelEl.text("Subjects: " + resultsJsn.content.results[0].subject.join(", "));

    cardbodyEl.append(cardtitelEl).append(cardtext);
    cardEl.append(headerEl).append(cardbodyEl);

    resultsEl.append(cardEl);

/* <div class="card">
  <div class="card-header">
    Featured
  </div>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */
}

$(function(){
    getSearchResults();
});