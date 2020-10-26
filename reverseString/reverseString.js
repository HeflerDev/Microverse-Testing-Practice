const reverseString = (str) => {
    if (typeof str === 'string') {
        return str.split('').reverse().join('');
    } else {
        throw new Error('Hey')
    }
}

module.exports = reverseString;
