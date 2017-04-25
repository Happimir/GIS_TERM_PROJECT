/**
 * Created by koval on 4/24/2017.
 */

function buttonClick() {
    $("#submission").submit(function(e) {
        e.preventDefault();
    });
    sendData();
}

function sendData() {

    var region = $("#region").val();
    var hashtag = $("#hashtag").val();
    var category = $("#category").val();

    $.when(

        $.get("../php/ProduceResults.php",
            {
                reg: region,
                hash: hashtag,
                cat: category
            }, function (data) {

                $("#Sentiment-Analysis").html(data);

            })

    ).then(function () {

    });

}