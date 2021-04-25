"use strict";

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _cors = _interopRequireDefault(require("cors"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _posts = _interopRequireDefault(require("./routes/posts"));

var _index = require("./connection/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* Determine port */
var PORT = process.env.PORT || 5000;
/* Creating Express app */

var app = (0, _express["default"])();
/* Applying middleware */

app.use(_bodyParser["default"].json({
  limit: '30mb',
  extended: true
}));
app.use(_bodyParser["default"].urlencoded({
  limit: '30mb',
  extended: true
}));
app.use((0, _cors["default"])());
/* Using routes */

app.use('/posts', _posts["default"]);

_mongoose["default"].connect(_index.CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function () {
  return app.listen(PORT, function () {
    return console.log("Server is running on port: ".concat(PORT));
  });
})["catch"](function (err) {
  return console.error(err.message);
});

_mongoose["default"].set('useFindAndModify', false);