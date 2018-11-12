/**
 * This file contains some helper functions which are stateless (provide a pure interface)
 * and are used by the timeline component.
 */

/**
 * Differance between two dates
 *
 * @param  {Date} first Date of the first event
 * @param  {Date} second Date of the second event
 * @return {number} Differance between the two dates
 */
export const daydiff = (first, second) => Math.round(second - first);

/**
 * Takes a list of lists and zips them together (size should be the same).
 *
 * e.g. zip([['row0col0', 'row0col1', 'row0col2'], ['row1col0', 'row1col1', 'row1col2']]);
 * = [["row0col0","row1col0"], ["row0col1","row1col1"], ["row0col2","row1col2"]]
 * @param {array} rows An array (of size 2) of arrays (of equal size).
 * @return {array} An array (of size of either array in param) of arrays (of size 2)
 */
export const zip = rows => rows[0].map((_, c) => rows.map(row => row[c]));

/**
 * Determines the minimum and maximum distance between a list of dates
 * @param {array} dates The array containing all the dates
 * @return {{min: number, max: number}} The minimum and maximum distances
 */
export const dateDistanceExtremes = dates => {
  // determine the minimum distance among events
  const datePairs = zip([dates.slice(0, -1), dates.slice(1)]);
  const dateDistances = datePairs.map(([x, y]) => daydiff(x, y));

  // return the minimum distance between two dates but considering that all dates
  // are the same then return the provided minimum seperation.
  return {
    min: Math.min.apply(null, dateDistances),
    max: Math.max.apply(null, dateDistances)
  };
};

/**
 * Given dates and some bounds returns an array of positioning information w.r.t. some origin for
 * that set of dates.
 *
 * @param {array} counts array containing counts for each event
 * @param {number} unitPadding The amount of padding between events
 * @param {number} startPadding The padding at the beginning of the timeline
 * @return {array} positioning information for events from a given origin point
 */
// the interface for this function is pure
export const cummulativeSeperation = (counts, unitPadding, startPadding) => {
  // using dynamic programming to set up the distance from the origin of the timeline.
  let totalCount = 0;
  for (let i = 0; i < counts.length; i++) {
    totalCount += counts[i];
  }
  const distances = new Array(totalCount);
  distances[0] = startPadding;

  let j = 0;
  let distanceIndex = 1;
  let unit = unitPadding;
  for (let i = 0; i < counts.length; i++) {
    if (counts[i] < 5) {
      unit = Math.round((unitPadding * 5) / counts[i]);
    }
    for (j = counts[i]; j > 0; j--) {
      distances[distanceIndex] = distances[distanceIndex - 1] + unit;
      distanceIndex++;
    }
  }
  return distances;
};
