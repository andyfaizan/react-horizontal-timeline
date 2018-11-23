/**
 * This file contains some helper functions which are stateless (provide a pure interface)
 * and are used by the timeline component.
 */

import { MIN_PADDING_COUNT, MAX_PADDING_COUNT } from "./Constants";

/**
 * Given dates and some bounds returns an array of positioning information w.r.t. some origin for
 * that set of dates.
 *
 * @param {array} counts array containing counts for each event
 * @param {number} unitPadding The amount of padding between events
 * @param {number} startPadding The padding at the beginning of the timeline
 * @param {number} minPadding The min padding between labels
 * @param {number} maxPadding The max padding between labels
 * @return {array} positioning information for events from a given origin point
 */
// the interface for this function is pure
export const cummulativeSeperation = (
  counts,
  unitPadding,
  startPadding,
  minPadding,
  maxPadding
) => {
  // using dynamic programming to set up the distance from the origin of the timeline.
  let totalCount = 0;
  for (let i = 0; i < counts.length; i++) {
    totalCount += counts[i];
  }
  const distances = new Array(totalCount);
  distances[0] = startPadding;

  let j = 0;
  let count = 0;
  let distanceIndex = 1;
  let unit = unitPadding;
  for (let i = 0; i < counts.length; i++) {
    count = counts[i];
    if (minPadding && count * unitPadding < minPadding) {
      unit = Math.round(minPadding / count);
    }
    if (
      maxPadding &&
      (minPadding && maxPadding > minPadding) &&
      count * unitPadding > maxPadding
    ) {
      unit = Math.round(maxPadding / count);
    }
    if (!minPadding && count < MIN_PADDING_COUNT) {
      unit = Math.round((unitPadding * MIN_PADDING_COUNT) / count);
    } else if (!maxPadding && count > MAX_PADDING_COUNT) {
      unit = Math.round((unitPadding * MAX_PADDING_COUNT) / count);
    }
    for (j = count; j > 0; j--) {
      distances[distanceIndex] = distances[distanceIndex - 1] + unit;
      distanceIndex++;
    }
  }
  return distances;
};
