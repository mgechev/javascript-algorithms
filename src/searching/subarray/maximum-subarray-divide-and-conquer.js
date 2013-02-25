/**
 * Finds the maximum subarray using the divide and conquer algorithm 
 * by Bentley, Jon (1984) (complexity O(n(logn)));
 */
var array = [4,5,-4,6,-34,-2,-34,-5,3,4,-1,2,3,2,8,-32,-45];

/**
 * Accepts an array and range. Finds the maximum sum of elements
 * around the middle of the range.
 *
 * @param {array} array
 * @param {number} left - the left interval of the range
 * @param {number} middle - the middle of the range
 * @param {number} right - the right side of the range
 * @return {number} the maximum sum including the middle element
 */
function crossSubarray(array, left, middle, right) {
    var leftSum = -Infinity,
        rightSum = -Infinity,
        sum = 0,
        i;

    for (i = middle; i >= left; i -= 1) {
        if (sum + array[i] >= leftSum) {
            leftSum = sum + array[i];
        }
        sum += array[i];
    }
    sum = 0;
    for (i = middle + 1; i < right; i += 1) {
        if (sum + array[i] >= rightSum) {
            rightSum = sum + array[i];
        }
        sum += array[i];
    }
    return leftSum + rightSum;
}

/**
 * Using divide and conquer finds the maximum sum of subarray of the given
 *
 * @param {array} array
 * @param {number} left side of the range
 * @param {number} the right side of the range
 * @return {number} the maximum sum of the elements of subarray whithin the given range
 */
function maxSubarrayPartitioner(array, left, right) {
    if (right - left <= 1) {
        return array[left];
    }
    var middle = Math.floor((left + right) / 2),
        leftSum = maxSubarrayPartitioner(array, left, middle),
        rightSum = maxSubarrayPartitioner(array, middle, right),
        crossSum = crossSubarray(array, left, middle, right);

   return Math.max(crossSum, leftSum, rightSum);
}

/**
 * Returns the maximum sum of the elements of a subarray of the given array
 *
 * @param {array} the array
 * @return the maximum sum
 */
function maxSubarray(array) {
    return maxSubarrayPartitioner(array, 0, array.length);
}

console.log(maxSubarray(array));
