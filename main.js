function getData(){
    var input = $("#searchtext").val()
var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=KGu4zQMiVhxF5VLjrBolQiJzyLardbaM&limit=5");
xhr.done(function(response) { 
    console.log("success got data", response); 

    var jiffs = response.getData

    for (i in jiffs)
    {
        $('.inner').append("<img src='"+jiffs[i].images.original.url+"' style='height:350px; width:350px;'/>")
    }    

});

}
