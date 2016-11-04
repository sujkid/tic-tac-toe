'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);


const api = require('./api');
const ui = require('./ui');


let lastPlayed = "";
let gameOver = 0;


const onResetGame = function() {
  lastPlayed = "";
  $('#box1').text("");
  $('#box2').text("");
  $('#box3').text("");
  $('#box4').text("");
  $('#box5').text("");
  $('#box6').text("");
  $('#box7').text("");
  $('#box8').text("");
  $('#box9').text("");
  $('.display').hide( );
  gameOver = 0;
};


const onClickBox = function () {
  if(($(this).text() === "X") || ($(this).text() === "O") || gameOver === 1) {
    return;
  }
  if(( lastPlayed === "") || (lastPlayed === "O")) {

    $(this).text('X');
    lastPlayed = "X";
  } else {
    $(this).text('O');
    lastPlayed = "O";
  }

  if(($('#box1').text() === 'X' && $('#box2').text() === 'X' &&
      $('#box3').text() === 'X') ||
     ($('#box4').text() === 'X' && $('#box5').text() === 'X' &&
      $('#box6').text() === 'X') ||
     ($('#box7').text() === 'X' && $('#box8').text() === 'X' &&
      $('#box9').text() === 'X') ||
     ($('#box1').text() === 'X' && $('#box4').text() === 'X' &&
      $('#box7').text() === 'X') ||
     ($('#box2').text() === 'X' && $('#box5').text() === 'X' &&
      $('#box8').text() === 'X') ||
     ($('#box3').text() === 'X' && $('#box6').text() === 'X' &&
      $('#box9').text() === 'X') ||
     ($('#box1').text() === 'X' && $('#box5').text() === 'X' &&
      $('#box9').text() === 'X') ||
     ($('#box3').text() === 'X' && $('#box5').text() === 'X' &&
      $('#box7').text() === 'X')) {

    $('.display').show();
    $('.display').text("Player X wins");
    gameOver = 1;
  }

  if(($('#box1').text() === 'O' && $('#box2').text() === 'O' &&
      $('#box3').text() === 'O') ||
     ($('#box4').text() === 'O' && $('#box5').text() === 'O' &&
      $('#box6').text() === 'O') ||
     ($('#box7').text() === 'O' && $('#box8').text() === 'O' &&
      $('#box9').text() === 'O') ||
     ($('#box1').text() === 'O' && $('#box4').text() === 'O' &&
      $('#box7').text() === 'O') ||
     ($('#box2').text() === 'O' && $('#box5').text() === 'O' &&
      $('#box8').text() === 'O') ||
     ($('#box3').text() === 'O' && $('#box6').text() === 'O' &&
      $('#box9').text() === 'O') ||
     ($('#box1').text() === 'O' && $('#box5').text() === 'O' &&
      $('#box9').text() === 'O') ||
     ($('#box3').text() === 'O' && $('#box5').text() === 'O' &&
      $('#box7').text() === 'O')) {
    $('.display').show();
    $('.display').text("Player O wins");
    gameOver = 1;
  }
  // api.updateGameJoin();
  // api.updateGame();
};

// const onShowGames = function() {
//   api.showGames()
//     .then(ui.success)
//     .catch(ui.failure);
// };

const onCreateGame = function() {
  api.createGame()
    .then(ui.success)
    .catch(ui.failure);
};

// const onShowGame = function() {
//   api.showGame()
//     .then(ui.success)
//     .catch(ui.failure);
// };

const onShowGames = function (event) {
  event.preventDefault();
  let gameId = $('#game-id').val();

  if (gameId.length === 0){
      api.index()
        .then(ui.success)
        .catch(ui.failure);
  } else {
    api.show(gameId)
      .then(ui.success)
      .catch(ui.failure);
  }
};

const addHandlers = () => {
  $('#box1').on('click', onClickBox );
  $('#box2').on('click', onClickBox );
  $('#box3').on('click', onClickBox );
  $('#box4').on('click', onClickBox );
  $('#box5').on('click', onClickBox );
  $('#box6').on('click', onClickBox );
  $('#box7').on('click', onClickBox );
  $('#box8').on('click', onClickBox );
  $('#box9').on('click', onClickBox );
  $('.games').on('click', onShowGames);
  $('#create-game').on('click', onCreateGame);
  $('#reset-game').on('click', onResetGame);
};

module.exports = {
  addHandlers
};
