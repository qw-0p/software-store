'use strict';
var __extends =
  (this && this.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b;
          }) ||
        function (d, b) {
          for (var p in b)
            if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function (d, b) {
      if (typeof b !== 'function' && b !== null)
        throw new TypeError(
          'Class extends value ' + String(b) + ' is not a constructor or null',
        );
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype =
        b === null
          ? Object.create(b)
          : ((__.prototype = b.prototype), new __());
    };
  })();
Object.defineProperty(exports, '__esModule', { value: true });
var sequelize_1 = require('sequelize');
var config_1 = require('../config');
var Exporter = /** @class */ (function (_super) {
  __extends(Exporter, _super);
  function Exporter() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  return Exporter;
})(sequelize_1.Model);
Exporter.init(
  {
    id: {
      type: sequelize_1.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    country: {
      type: sequelize_1.DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    flag: {
      type: sequelize_1.DataTypes.STRING,
    },
  },
  {
    tableName: 'exporters',
    sequelize: config_1.default,
  },
);
exports.default = Exporter;
