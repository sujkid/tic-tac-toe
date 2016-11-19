'use strict';

const store = require('../store');
const success = (/*data*/) => {
  // $('.game_stats').text('You have played ' + data.games.length + ' games');
  // console.log(data);
};

// const signInSuccess = data => {
//
//   store.user = data.user;
//   success(data);
// };

const successCreateGame = data => {
  store.game = data.game;

  // success(data);
};

const successShowGame = (data) => {
  $('.game_stats').show();
  $('.game_stats').text('You have played ' + data.games.length + ' games');

  // console.log(data);
};

const failure = (/*error*/) => {

  // console.log('failed');
  $('#messages').text('fail');

  // console.error(error);
};

module.exports = {
  failure,
  success,
  successCreateGame,
  successShowGame,
};
