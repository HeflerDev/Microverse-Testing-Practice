
const cipher = (shift, text) => {
    if (shift > 25 || shift < 0) { throw new Error('Invalid Shift Number') };
    var result = "";
        for (let i = 0; i < text.length; i++) {
            const lowerCaseText = text.toLowerCase();
            var c = lowerCaseText.charCodeAt(i);
            if(c >= 97 && c <= 122){
                result += String.fromCharCode((c - 97 + shift) % 26 + 97);
            }else {
                result += text.charAt(i);
            }
        }
    return result;
}


module.exports = cipher
