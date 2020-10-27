const cipher = require('./cipher');

test("validate", () => {
    expect(cipher(0, 'aBc')).toBe('abc');
    expect(cipher(1, 'abcde')).toBe('bcdef');
    expect(cipher(10, "abcdefghijklmnopqrstuvxywz")).toBe("klmnopqrstuvwxyzabcdefhigj");
    expect(cipher(8, "This is a string")).toBe("bpqa qa i abzqvo");
    expect(cipher(13, "Original Cipher")).toBe("bevtvany pvcure");
    expect(cipher(25, "Max Value")).toBe("lzw uzktd");
    expect(() => cipher(26, "Invalid Call")).toThrow(Error);
    expect(() => cipher(-1, "Invalid Call")).toThrow(Error);
});

test("edge cases", () => {
    expect(cipher(10, "Hello! World")).toBe("rovvy! gybvn");
    expect(cipher(10, "!@#$%^&*()_+=")).toBe("!@#$%^&*()_+=");
    expect(cipher(10, "!!!Lots of ^&#*")).toBe("!!!vydc yp ^&#*");
});
