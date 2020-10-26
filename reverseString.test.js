const reverseString = require('./reverseString');

test("Reverse a String", () => {
    expect(reverseString('abc')).toBe('cba');
      expect(reverseString('abc def')).toBe('fed cba');
       expect(reverseString('')).toBe('');
       expect(reverseString(0123)).toThrow(Error);
       expect(reverseString(null)).toThrow(Error);
       expect(reverseString([])).toThrow(Error);
       expect(reverseString({})).toThrow(Error);
 });


