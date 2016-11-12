'use strict';

const store = require('../store');
const success = (data) => {
  $('#messages').text('success');
  console.log(data);
};

// const signInSuccess = data => {
//
//   store.user = data.user;
//   success(data);
// };
const successCreateGame = data => {
  store.game = data.game;
  success(data);
};

const failure = (error) => {
  console.log('failed');
  $('#messages').text('fail');
  console.error(error);
};

module.exports = {
  failure,
  success,
  successCreateGame,
};
