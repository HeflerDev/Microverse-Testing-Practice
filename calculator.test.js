const calculator = require('./calculator');

test('has basic operations', () => {
    expect(calculator).toHaveProperty('add');
    expect(calculator).toHaveProperty('sub');
    expect(calculator).toHaveProperty('mult');
    expect(calculator).toHaveProperty('div');
});

test('is a object', () => {
    expect(typeof calculator === 'object').toBeTruthy();
});
