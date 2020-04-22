var minimax = require('../../src/others/minimax.js').minimax;

describe('Minimax with tic tac toe', function () {
  'use strict';

  let game = ticTacToe();

  function getAllNextStates(state) {
    const possibleMoves = game.emptyCells(state);

    return possibleMoves.map(move => ({
      move,
      state: game.nextState(state, move),
    }));
  }

  function minimaxFor(player, state) {
    const getScoreFn = player === 'x'
      ? state => game.getScore(state).x - game.getScore(state).o
      : state => game.getScore(state).o - game.getScore(state).x;

    return minimax(
      state,
      true,
      5,
      -Infinity,
      Infinity,
      getAllNextStates,
      state => game.isGameOver(state),
      getScoreFn
    );
  }

  it('should be defined', function () {
    expect(minimax).toBeDefined();
  });

  it('should win versus dumb agent as first player', function () {
    let state = game.newState('x');

    while (!game.isGameOver(state)) {
      if (state.turn === 'x') {
        state = game.nextState(state, minimaxFor(state.turn, state).move);
      } else {
        const move = game.emptyCells(state)[0];
        state = game.nextState(state, move);
      }
    }

    expect(game.isGameOver(state)).toBe(true);
    expect(game.getScore(state)).toEqual({x: 1, o: 0});
  });

  it('should win versus dumb agent as second player', function () {
    let state = game.newState('x');

    while (!game.isGameOver(state)) {
      if (state.turn === 'o') {
        state = game.nextState(state, minimaxFor(state.turn, state).move);
      } else {
        const move = game.emptyCells(state)[0];
        state = game.nextState(state, move);
      }
    }

    expect(game.isGameOver(state)).toBe(true);
    expect(game.getScore(state)).toEqual({x: 0, o: 1});
  });


  it('should be a tie for two minimax agents', function () {
    let state = game.newState('x');

    while (!game.isGameOver(state)) {
      state = game.nextState(state, minimaxFor(state.turn, state).move);
    }
    expect(game.isGameOver(state)).toBe(true);
    expect(game.getScore(state)).toEqual({x: 0, o: 0});
  });
});

function ticTacToe() {
  'use strict';

  function newState(turn) {
    return {
      board: [[0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]],
      turn
    };
  }

  function emptyCells(state) {
    const result = [];
    state.board.forEach((row, y) => {
      row.forEach((cell, x) => {
        if (cell === 0) {
          result.push({x, y})
        }
      });
    });

    return result;
  }

  function getWinner(state) {
    const winVariants = [
      [{x: 0, y: 0}, {x: 0, y: 1}, {x: 0, y: 2}],
      [{x: 1, y: 0}, {x: 1, y: 1}, {x: 1, y: 2}],
      [{x: 2, y: 0}, {x: 2, y: 1}, {x: 2, y: 2}],

      [{x: 0, y: 0}, {x: 1, y: 0}, {x: 2, y: 0}],
      [{x: 0, y: 1}, {x: 1, y: 1}, {x: 2, y: 1}],
      [{x: 0, y: 2}, {x: 1, y: 0}, {x: 2, y: 2}],

      [{x: 0, y: 0}, {x: 1, y: 1}, {x: 2, y: 2}],
      [{x: 2, y: 0}, {x: 1, y: 1}, {x: 2, y: 0}],
    ];

    for (const variant of winVariants) {
      const combo = variant.map(cell => state.board[cell.y][cell.x]).join('');
      if (combo === 'xxx') {
        return 'x';
      } else if (combo === 'ooo') {
        return 'o';
      }
    }

    return null;
  }

  function allFieldsMarked(state) {
    return state.board.every(row => row.every(cell => cell !== 0));
  }

  function isGameOver(state) {
    return allFieldsMarked(state) || getWinner(state) !== null;
  }

  function getScore(state) {
    if (getWinner(state) === 'x') {
      return {x: 1, o: 0};
    } else if (getWinner(state) === 'o') {
      return {x: 0, o: 1};
    }

    return {x: 0, o: 0};
  }

  function nextState(state, move) {
    const board = state.board;
    return {
      board: [
        ...board.slice(0, move.y),
        [...board[move.y].slice(0, move.x), state.turn, ...board[move.y].slice(move.x + 1)],
        ...board.slice(move.y + 1)
      ],
      turn: state.turn === 'x' ? 'o' : 'x',
    };
  }

  return {
    newState,
    getScore,
    nextState,
    isGameOver,
    emptyCells,
  }
}
