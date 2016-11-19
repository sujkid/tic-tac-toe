'use strict';

const config = require('../config');
const store = require('../store');

const index = function () {
  return $.ajax({
    url: config.host + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
  });
};

// const show = function (id) {
//   return $.ajax({
//     url: config.host + '/games/' + id,
//     method: 'GET',
//     headers: {
//       Authorization: 'Token token=' + store.user.token,
//     },
//   });
// };

const createGame = function () {

  // console.log('inside create');

  return $.ajax({
    url: config.host + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
  });
};

//
// const updateGameJoin = () =>
//   $.ajax({
//     url: config.host + '/games/' + store.user.id,
//     method: 'PATCH',
//     headers: {
//       Authorization: 'Token token=' + store.user.token,
//     }
//   }
// );

const updateStatus = (index, value, gameOver) =>
  $.ajax({
    url: config.host + '/games/' + store.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
    data: {
        game: {
          cell: {
            index: index,
            value: value,
          },
          over: gameOver,
        },
      },
  }
);

module.exports = {
  index,

  // show,
  createGame,
  updateStatus,
};
