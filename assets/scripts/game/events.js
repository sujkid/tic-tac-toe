'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);


const api = require('./api');
const ui = require('./ui');


let lastPlayed = "";

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
};


const onClickBox = function () {
  if(( lastPlayed === "") || (lastPlayed === "O")) {
    $(this).text('X');
    lastPlayed = "X";
  }
  else {
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
    console.log( "Player X wins" );
    alert('Player X wins');
    onResetGame();
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
    console.log( "Player O wins" );
    alert('Player O wins');
    onResetGame();
  }
};

// const onShowGames = function() {
//   api.showGames()
//     .then(ui.success)
//     .catch(ui.failure);
// };

const onPlayGame = function() {
  api.playGame()
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
  $('#play-game').on('click', onPlayGame);
  // $('#show-game').on('click', onShowGame);
  $('#reset-game').on('click', onResetGame);
};

module.exports = {
  addHandlers
};
