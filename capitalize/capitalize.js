function capitalize(str) {
    if (typeof str !== 'string') { throw new Error('Invalid Input') }
    return str.charAt(0).toUpperCase() + str.slice(1);
}

module.exports = capitalize;
