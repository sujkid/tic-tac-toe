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


const createGame = () =>
  $.ajax({
    url: config.host + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
  }
);

const updateGameJoin = () =>
  $.ajax({
    url: config.host + '/games/' + store.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    }
  }
);

const updateGame = () =>
  $.ajax({
    url: config.host + '/games/' + store.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    }
  }
);


module.exports = {
  index,
  show,
  //showGames,
  createGame,
  //showGame
  updateGameJoin,
  updateGame
};
