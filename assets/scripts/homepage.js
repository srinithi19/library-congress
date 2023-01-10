var searchBtn = $("#searchBtn");


function getUrlString() {
    var format = $('#formatType').val();
    var searchString = $('#libName').val().trim();
    
    searchString = searchString.split(" ").join("-");

    let urlStr = "https://www.loc.gov/" + format + "/?c=5&fo=json&q=" + searchString;
    console.log(urlStr);
    return urlStr;
}

$(function() {
    $("#searchBtn").on("click", getUrlString);
})