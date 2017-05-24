
$(document).ready(function () {
    $('.js-search-form').submit(function (event) {
        event.preventDefault();
        var searchTerm = $('.js-query').val();
        getRequest(searchTerm);
    });
});

function getRequest(searchTerm) {
    url = 'https://www.googleapis.com/youtube/v3/search';
    var params = {
        part: 'snippet',
        key: 'AIzaSyCOCLYNFxPUr3vSp4pdFIGfIPUDLeCiP5M',
        q: searchTerm
    };
  
    $.getJSON(url, params, function (searchTerm) {
        showResults(searchTerm);
    });
}

function showResults(results) {
    var html = "";
    var entries = results.items;
    
    $.each(entries, function (index, value) {
        var title = value.snippet.title;
        var thumbnail = value.snippet.thumbnails.default.url;
        html += '<p>' + title + '</p>';
        html += '<img src="' + thumbnail + '">';
    }); 
    
    $('.js-search-results').html(html);
}
