$("#homeMenu").css("display", "flex");

$("#tutorial-home-screen").css("display", "block");

$(' #step-1').append(startButton).addClass('selected-step')

$('.manager-speech').empty().append(speech1)

$('#tutorial-start-button').click(function(){
    $("#homeMenu").css("display", "none");
    $("#tacticsMenu").css("display", "flex");
    $('.manager-speech').empty().append(speech2);

    $('#menu-tactics').click(function(){
        $("#tutorial-home-screen").css("display", "none");
        $("#tactics").css("display", "block");
        $('.manager-speech').empty().append(speech3);

        $('#continue').click(function(){
            $('.manager-speech').empty().append(speech4);

            $('#continue').click(function(){
                $("#tactics").css("display", "none");
                $("#match-simulation").css("display", "block");
                $('.manager-speech').empty().append(speech5);
                console.log('match-sim');

                $('#continue2').click(function(){
                    $("#match-simulation").css("display", "none");
                    $("#tutorial-home-screen").css("display", "block");

                    $('#continue').click(function(){
                        console.log('hello')
                    })
                });
            });
        });
    });
});
