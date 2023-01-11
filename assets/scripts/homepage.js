var searchBtn = $("#searchBtn");


function getUrlString() {
    var format = $('#formatType').val();
    var searchString = $('#libName').val().trim();
    
    searchString = searchString.split(" ").join("-");


    // "https://www.loc.gov/"
    let urlStr = "./results.html?formatType=" + format + "&q=" + searchString;
    console.log(urlStr);
    location.assign(urlStr);
    return urlStr;
}

$(function() {
    $("#searchBtn").on("click", getUrlString);
})