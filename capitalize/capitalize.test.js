const capitalize = require('./capitalize');

test("capitalize string", () => {
    expect(capitalize('string')).toBe('String');
    expect(capitalize('i love JS')).toBe('I love JS');
    expect(capitalize(15335)).toThrow(Error);
    expect(capitalize('8 ball')).toBe('8 Ball');

});

test("Reverse a String", () => {
    expect(reverseString('abc')).toBe('cba');
    expect(reverseString('abc def')).toBe('fed cba');
    expect(reverseString(0123)).toThrow(Error);
    expect(reverseString(null)).toThrow(Error);
    expect(reverseString([])).toThrow(Error);
    expect(reverseString({})).toThrow(Error);
    expect(reverseString('')).toBe('');
});


