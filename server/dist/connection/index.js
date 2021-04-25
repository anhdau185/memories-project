"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CONNECTION_URL = void 0;

var _credentials = _interopRequireDefault(require("./credentials.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CONNECTION_URL = "mongodb+srv://".concat(_credentials["default"].USERNAME, ":").concat(_credentials["default"].PASSWORD, "@cluster0.eefb5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
exports.CONNECTION_URL = CONNECTION_URL;