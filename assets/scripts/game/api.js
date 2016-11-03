'use strict';

const config = require('../config');
const store = require( '../store' );


const index = function () {
  return $.ajax({
    url: config.host + '/games',
    method: 'GET',
  });
};

const show = function (id) {
  return $.ajax({
    url: config.host + '/games/' + id,
    method: 'GET',
  });
};
//
// const showGames = () =>
//   $.ajax({
//     url: config.host + '/games',
//     method: 'GET',
//     headers: {
//       Authorization: 'Token token=' + store.user.token,
//     },
//   }
// );

const playGame = () =>
  $.ajax({
    url: config.host + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
  }
);

// const showGame = () =>
//   $.ajax({
//     url: config.host + '/games' + store.user.id,
//     method: 'GET',
//     headers: {
//       Authorization: 'Token token=' + store.user.token,
//     },
//   }
// );

module.exports = {
  index,
  show,
  //showGames,
  playGame,
  //showGame
};
