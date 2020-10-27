const analyze = (arr) => {
  const reducer = arr.reduce((acc, val) => acc + val);
  return {
    average: reducer / arr.length,
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length,
  };
};

module.exports = analyze;
