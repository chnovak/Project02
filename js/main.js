function getData() {
    $(".inner").empty();
    var input = $('#search').val();
    $.get('http://api.giphy.com/v1/gifs/search?q='+ input +'+&api_key=KGu4zQMiVhxF5VLjrBolQiJzyLardbaM&limit=30', function (response) {

        for (i = 0; response.data.length; i++) {
       $('.inner').append("<img src=" + response.data[i].images.original.url +">")
    }    

})
$div.addClass("gif-box");

}
