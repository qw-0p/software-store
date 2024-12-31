'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var express_1 = require('express');
var users_1 = require('./users');
var router = (0, express_1.Router)();
router.use('/', users_1.default);
exports.default = router;
