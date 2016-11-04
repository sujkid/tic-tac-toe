'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);

const api = require('./api');
const ui = require('./ui');


let lastPlayed = "";
let gameOver = "false";
const gameBoard = ["box1","box2","box3","box4","box5","box6","box7","box8","box9"];


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
  gameOver = "false";
};

const onUpdateStatus = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  alert(data);
  api.updateStatus(data)
    .then(ui.success)
    .catch(ui.failure);
};


const onClickBox = function (event) {
  event.preventDefault();
  if(($(this).text() === "X") || ($(this).text() === "O") || gameOver === "true") {
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
    gameOver = "true";
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
    gameOver = "true";
  }
  if($('#box1').text() !== "" && $('#box2').text() !== "" &&
     $('#box3').text() !== "" && $('#box4').text() !== "" &&
     $('#box5').text() !== "" && $('#box6').text() !== "" &&
     $('#box7').text() !== "" && $('#box8').text() !== "" &&
     $('#box9').text() !== "" && gameOver === "false" ) {
       $('.display').show();
         gameOver = "true";
       $('.display').text("It's a draw! Play again!");
  }
// //debugger;
let n = $(this).attr('id');
//   alert(gameBoard.indexOf(n));
  // onUpdateJoin();

 //document.getElementById('game[over]').value=gameOver;
 //document.getElementById('game[cell][index]').value=gameBoard.indexOf(n);
 //document.getElementById('game[cell][value]').value=$(this).text();
 api.updateStatus( gameBoard.indexOf(n), $(this).text(), gameOver );
};



// const onShowGames = function() {
//   api.showGames()
//     .then(ui.success)
//     .catch(ui.failure);
// };

const onCreateGame = function(event) {

  onResetGame();
  event.preventDefault();
  api.createGame()
    .then(ui.successCreateGame)
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
  addHandlers,
  onUpdateStatus
};
