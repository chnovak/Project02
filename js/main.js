$(function() {

    
    var $input = $('#input');
    var $submit = $('#submit');
    var apiKey = 'KGu4zQMiVhxF5VLjrBolQiJzyLardbaM';
    var $imgBody = $('.img-body');
    
    $submit.on('click', function(event) {
        event.preventDefault();
        $imgBody.empty();
        var inputVal = $input.val();
        getGiphys(inputVal);
        
        $inputVal.val(' ');
    });

    function getGiphys(inputVal) {
        $.get('http://api.giphy.com/v1/gifs/search?q=' + inputVal + '&api_key=' +
                apiKey + '&limit=20')
            .done(function(data) {
                for (var i = 0; i < 20; i++) {
                    var gifImg = data.data[i].images.original.url;
                    createBox(gifImg);
                }
            });
    };

    function createBox(gifImg) {
        var $newImg = $('<img>');
        $newImg.attr('src', gifImg);
        $newImg.addClass('img-box');

        $imgBody.append($newImg);

    }




});