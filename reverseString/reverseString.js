const reverseString = (str) => {
  if (typeof str === 'string') {
    return str.split('').reverse().join('');
  }
  throw new Error('Hey');
};

module.exports = reverseString;
