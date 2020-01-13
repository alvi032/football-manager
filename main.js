var speech2 = 'Hello and welcome to the proud club Bannu RSC.\n' +
    '\n' +
    'I\'m Miguel Tutoriález, your guide into the world of Trophy Manager.\n' +
    '\n' +
    'I have created a schedule for today to get you started as a new manager. Press the START button to begin.'
var speech1 = 'First let us have a look at our players and tactics\n' +
    '\n' +
    'Click on the TACTICS link in the top menu.';

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