const analyze = require('./analyze.js');

test('Return the expected object', () => {
  const mock = [0, 0, 0, 0, 0, 0];
  expect(analyze(mock)).toHaveProperty('average');
  expect(analyze(mock)).toHaveProperty('min');
  expect(analyze(mock)).toHaveProperty('max');
  expect(analyze(mock)).toHaveProperty('length');
});

test('Return the right values', () => {
  expect(analyze([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
