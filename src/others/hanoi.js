/*
 * Hanoi towers
 */
function hanoi(count, source, intermediate, goal, result) {
  'use strict';
  result = result || [];
  if (count === 1) {
    result.push([source, goal]);
  } else {
    hanoi(count - 1, source, goal, intermediate, result);
    result.push([source, goal]);
    hanoi(count - 1, intermediate, source, goal, result);
  }
  return result;
}
