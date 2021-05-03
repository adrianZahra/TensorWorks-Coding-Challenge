$(function () {
     // AJAX SPINNER 
    $(document).ajaxStart(function () {
        $('#activate-GET-users-name').attr("disabled", true);
        $('#loading-img').addClass('visible').removeClass('invisible');
    });
    $(document).ajaxStop(function () {
        $('#activate-GET-users-name').attr("disabled", false);
        $('#loading-img').addClass('invisible').removeClass('visible');
    });

    $("#activate-to-post-users-name").on('click', function(){
        var personsNameValue = $('#user-name-text-input').val();
        POST_to_desplay_users_name(personsNameValue);
    });

    function POST_to_desplay_users_name(personsNameValue) {
        var postBack = {
            name: personsNameValue,
        };

        $.ajax({
            url: "greeter",
            type: "POST",
            data: postBack,
            success: function (data, textStatus, jqXHR) {
                $("#greeting").html(data.name);
                if($("#greeting").hasClass('invisible')){
                    $("#greeting").removeClass('invisible');
                }               
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log(jqXHR + "\n" + textStatus + "\n" + errorThrown);               
            }
        });
    }
});