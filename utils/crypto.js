const crypto = require('crypto');
const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

module.exports = function encrypt(password) {
    // Nodejs encryption with CTR
    var mykey = crypto.createCipher('aes-128-cbc', password);
    var mystr = mykey.update('abc', 'utf8', 'hex')
    mystr += mykey.final('hex');
    return mystr;
}

module.exports = function decrypt(password) {
    var mykey = crypto.createDecipher('aes-128-cbc', password);
    var mystr = mykey.update('34feb914c099df25794bf9ccb85bea72', 'hex', 'utf8')
    mystr += mykey.final('utf8');
    return mystr;
}

// module.exports = {
//     export function =>encrypt(passsword);
//     decrypt(passsword);
// }