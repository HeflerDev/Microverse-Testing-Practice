const capitalize = require('./capitalize');

test('capitalize string', () => {
  expect(capitalize('string')).toBe('String');
  expect(capitalize('i love JS')).toBe('I love JS');
});

test('should throw error with invalid format', () => {
  expect(() => capitalize(15335)).toThrow(Error);
  expect(() => capitalize([])).toThrow(Error);
  expect(() => capitalize({})).toThrow(Error);
});
