const { SHA256 } = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const password = '123abc!';

console.log('Starting hash proces...')

bcrypt.genSalt(10, (err, salt) => {
  bcrypt.hash(password, salt, (err, hash) => {
    console.log('Bcrypt gensalt process...', hash);
  });
});

const hashPassword = '$2a$10$PDC7o2sBaTAYtHrmATptb.xpYnTHGP3R.KEG6hhfeYF5biYEjcrp2';
console.log('hashPassword outside of the function: ', hashPassword);

bcrypt.compare(password, hashPassword, (err, res) => {
  console.log('hashPassword inside of bycrypt.compare: ', hashPassword);
  console.log('Comparing password and hashPassword: ', res);
});

// const data = {
//   id: 10
// };

// const token = jwt.sign(data, '123abc');
// console.log(token);

// const decoded = jwt.verify(token, '123abc');
// console.log('Decoded: ', decoded);


// const message = 'I am user number 3';
// const hash = SHA256(message).toString();

// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);

// const data = {
//   id: 4
// };
// const token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// };

// // token.data.id = 5;
// // token.hash = SHA256(JSON.stringify(token.data)).toString();

// const resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();

// if (resultHash === token.hash) {
//   console.log('Data was not changed');
// } else {
//   console.log('Data was changed. Do not trust!');
// }
