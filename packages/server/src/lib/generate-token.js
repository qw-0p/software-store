'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.generateToken = void 0;
//@ts-ignore
var jsonwebtoken_1 = require('jsonwebtoken');
var generateToken = function (id, email, role) {
  return jsonwebtoken_1.default.sign(
    { id: id, email: email, role: role },
    process.env.SECRET_KEY,
    {
      expiresIn: '24h',
    },
  );
};
exports.generateToken = generateToken;
