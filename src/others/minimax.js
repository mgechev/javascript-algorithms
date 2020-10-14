(function (exports) {
  'use strict';
  /* eslint max-params: 0 */

  /**
  * @param {Function} getPossibleNextStatesFn Function which returns all possible next moves with states .
  * @param {Function} isGameOverFn Function which returns if game is over.
  * @param {Function} getScoreFn Function which returns score.
  * @return {Function} minimax function
   */
  function minimaxBuilder(
    getPossibleNextStatesFn,
    isGameOverFn,
    getScoreFn
  ) {
    /**
     * Minimax (sometimes MinMax, MM[1] or saddle point[2]) is a decision rule used in artificial intelligence,
     * decision theory, game theory, statistics, and philosophy for minimizing the possible loss for a worst case (maximum loss) scenario.
     * Optimized with alpha-beta pruning.
     *  {@link https://en.wikipedia.org/wiki/Minimax}
     *  {@link https://en.wikipedia.org/wiki/Alpha%E2%80%93beta_pruning}
     *
     * @public
     * @module others/minimax
     *
     * @example
     *
     * var miniMax =
     *  require('path-to-algorithms/src/others/minimax').minimax;
     * var result = minimax(
     *   [1, 2, 3],
     *   true,
     *   5,
     *   -Infinity,
     *   Infinity,
     *   state => ({ move: 0, state: [2, 3, 4] }),
     *   state => state[1] < 3,
     *   state => state[1]
     * );
     *
     * @param {*} state Current game state
     * @param {Boolean} maximize Defines if the result should be maximized or minimized
     * @param {Number} depth Defines the maximum depth search
     * @param {Number} alpha Maximum score that the minimizing player is assured
     * @param {Number} beta Minimum score that the maximizing player is assured
     * @return {{score: Number, move: *}} which contains the minimum coins from the given
     *  list, required for the change.
     */
    const minimax = (
      state,
      maximize,
      depth,
      alpha,
      beta
    ) => {
      if (depth === 0 || isGameOverFn(state)) {
        const score = getScoreFn(state);
        return {score, move: null};
      }

      const possibleMoveResults = getPossibleNextStatesFn(state);

      if (maximize) {

        let maxResult = {score: -Infinity, move: null};

        for (const next of possibleMoveResults) {
          const result = minimax(
            next.state,
            false,
            depth - 1,
            alpha,
            beta
          );

          if (result.score > maxResult.score) {
            maxResult = {score: result.score, move: next.move};
          }

          alpha = Math.max(alpha, result.score);

          if (alpha >= beta) {
            break;
          }
        }

        return maxResult;
      } else {
        let minResult = {score: Infinity, move: null};

        for (const next of possibleMoveResults) {
          const result = minimax(
            next.state,
            true,
            depth - 1,
            alpha,
            beta
          );

          if (result.score < minResult.score) {
            minResult = {score: result.score, move: next.move};
          }

          beta = Math.min(beta, result.score);

          if (beta <= alpha) {
            break;
          }
        }

        return minResult;
      }
    }

    return minimax;
  }

  exports.minimaxBuilder = minimaxBuilder;

})(typeof window === 'undefined' ? module.exports : window);
