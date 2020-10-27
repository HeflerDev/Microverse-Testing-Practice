
const cipher = (shift, text) => {
  if (shift > 25 || shift < 0) { throw new Error('Invalid Shift Number'); }
  let result = '';
  /* eslint-disable no-plusplus */
  for (let i = 0; i < text.length; i++) {
    /* eslint-enable no-plusplus */
    const lowerCaseText = text.toLowerCase();
    const c = lowerCaseText.charCodeAt(i);
    if (c >= 97 && c <= 122) {
      result += String.fromCharCode(((c - 97 + shift) % 26) + 97);
    } else {
      result += text.charAt(i);
    }
  }
  return result;
};


module.exports = cipher;
