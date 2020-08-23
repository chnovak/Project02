function getData() {
    $("button").click(function() {
        $(".inner").empty();
    });
    var input = $("#searchtext").val()
    var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=" + input + "+&api_key=KGu4zQMiVhxF5VLjrBolQiJzyLardbaM&limit=30"); {
        xhr.done(function(response) {

            console.log("success got data", response);

            var jiffs = response.data

            for (i in jiffs) {
                $('.inner').append("<div class='flex-child'><img src='" + jiffs[i].images.original.url + "' style='height:350px; width:350px;' />")
            }
        });
    }
}
