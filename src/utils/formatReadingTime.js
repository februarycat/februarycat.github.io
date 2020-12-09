// Shamelessly copied from https://github.com/gaearon/overreacted.io/blob/master/src/utils/helpers.js

export default (minutes) => {
  let cups = Math.round(minutes / 5);

  if (cups > 5)
    return `${new Array(Math.round(cups / Math.E))
      .fill('🍱')
      .join('')} ${minutes} min read`;

  return `${new Array(cups || 1).fill('☕️').join('')} ${minutes} min read`;
};
