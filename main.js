var startButton  = '<button id="tutorial-start-button">Start</button>'
var homeMenu = '<ul class="game-nav-2">' +
    '<li><a href="#">Home</a></li>' +
    '<li><a href="#">Club</a></li>' +
    '<li><a href="#">Finances</a></li>' +
    '<li><a href="#">Stadium</a></li>' +
    '<li><a href="#">Account</a></li>' +
    '</ul>';
var tacticsMenu = '<ul class="game-nav-2">' +
    '<li><a href="#">Tactics</a></li>' +
    '<li><a href="#">Players</a></li>' +
    '<li><a href="#">Youth Development</a></li>' +
    '<li><a href="#">Training</a></li>' +
    '</ul>';
$('#game-nav').append(homeMenu)
$('#step-1').append(startButton).addClass('selected-step')