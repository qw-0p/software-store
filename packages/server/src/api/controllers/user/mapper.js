'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.toUser = void 0;
var toUser = function (user) {
  return {
    id: user.id,
    email: user.email,
    password: user.password,
    role: user.role,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
  };
};
exports.toUser = toUser;
