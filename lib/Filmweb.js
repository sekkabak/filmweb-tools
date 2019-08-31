"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _md = _interopRequireDefault(require("crypto-js/md5"));

var _axios = _interopRequireDefault(require("axios"));

var _ResponseGetFilmInfoFull = _interopRequireDefault(require("./models/ResponseGetFilmInfoFull"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Filmweb =
/*#__PURE__*/
function () {
  function Filmweb() {
    _classCallCheck(this, Filmweb);
  }

  _createClass(Filmweb, [{
    key: "getFilmInfoFull",
    value: function () {
      var _getFilmInfoFull = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(itemId, callback) {
        var method, signature, qs, request, _request$data$split, _request$data$split2, status, data, json, result;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                method = "getFilmInfoFull [" + itemId + "]";
                signature = method + "\\n" + Filmweb.APPID + Filmweb.KEY;
                signature = Filmweb.APP_VERSION + "," + (0, _md["default"])(signature);
                method += "\\n";
                qs = "methods=" + encodeURI(method);
                qs += "&signature=" + encodeURI(signature);
                qs += "&version=" + encodeURI(Filmweb.APP_VERSION);
                qs += "&appId=" + encodeURI(Filmweb.APPID);
                _context.next = 10;
                return _axios["default"].get(Filmweb.API_SERVER + qs);

              case 10:
                request = _context.sent;
                _request$data$split = request.data.split('\n'), _request$data$split2 = _slicedToArray(_request$data$split, 2), status = _request$data$split2[0], data = _request$data$split2[1]; // @TODO: ogarnąć jak jest błąd

                json = JSON.parse(data.replace(/t:.*/, ''));
                result = _construct(_ResponseGetFilmInfoFull["default"], [json[0] == null ? "" : json[0], // title1
                json[1] == null ? "" : json[1], // title2
                json[2], // rating
                json[3], // rateCount
                json[4].split(','), // genres
                json[5], // year
                json[6], // minutes
                json[8], // forumLink
                json[9], // isReleasedInPoland
                json[10], // isReleasedWorldly
                Filmweb.IMAGE_URL + json[11], // posterLink
                json[12][0] == undefined ? "" : json[12][0], // trailerPosterLink
                json[12][1] == undefined ? "" : json[12][1], // trailerVideoLink
                json[13], // releaseWorldDate
                json[14], // releasePolandData
                json[15], // isSeries
                json[16], // seasonCount
                json[17], // episodesCount
                json[18], // productionCountry
                json[19] //description
                ]);
                callback(result);

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getFilmInfoFull(_x, _x2) {
        return _getFilmInfoFull.apply(this, arguments);
      }

      return getFilmInfoFull;
    }()
  }]);

  return Filmweb;
}();

exports["default"] = Filmweb;

_defineProperty(Filmweb, "KEY", 'qjcGhW2JnvGT9dfCt3uT_jozR3s');

_defineProperty(Filmweb, "API_SERVER", 'https://ssl.filmweb.pl/api?');

_defineProperty(Filmweb, "APPID", "android");

_defineProperty(Filmweb, "APP_VERSION", "1.0");

_defineProperty(Filmweb, "IMAGE_URL", 'https://1.fwcdn.pl/po');
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9GaWxtd2ViLnRzIl0sIm5hbWVzIjpbIkZpbG13ZWIiLCJpdGVtSWQiLCJjYWxsYmFjayIsIm1ldGhvZCIsInNpZ25hdHVyZSIsIkFQUElEIiwiS0VZIiwiQVBQX1ZFUlNJT04iLCJxcyIsImVuY29kZVVSSSIsImF4aW9zIiwiZ2V0IiwiQVBJX1NFUlZFUiIsInJlcXVlc3QiLCJkYXRhIiwic3BsaXQiLCJzdGF0dXMiLCJqc29uIiwiSlNPTiIsInBhcnNlIiwicmVwbGFjZSIsInJlc3VsdCIsIlJlc3BvbnNlR2V0RmlsbUluZm9GdWxsIiwiSU1BR0VfVVJMIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsTzs7Ozs7Ozs7Ozs7OytDQVNZQyxNLEVBQWdCQyxROzs7Ozs7O0FBQ3JDQyxnQkFBQUEsTSxHQUFTLHNCQUFzQkYsTUFBdEIsR0FBK0IsRztBQUN4Q0csZ0JBQUFBLFMsR0FBWUQsTUFBTSxHQUFHLEtBQVQsR0FBaUJILE9BQU8sQ0FBQ0ssS0FBekIsR0FBaUNMLE9BQU8sQ0FBQ00sRztBQUN6REYsZ0JBQUFBLFNBQVMsR0FBR0osT0FBTyxDQUFDTyxXQUFSLEdBQXNCLEdBQXRCLEdBQTRCLG9CQUFJSCxTQUFKLENBQXhDO0FBRUFELGdCQUFBQSxNQUFNLElBQUksS0FBVjtBQUVJSyxnQkFBQUEsRSxHQUFLLGFBQWFDLFNBQVMsQ0FBQ04sTUFBRCxDO0FBQy9CSyxnQkFBQUEsRUFBRSxJQUFJLGdCQUFnQkMsU0FBUyxDQUFDTCxTQUFELENBQS9CO0FBQ0FJLGdCQUFBQSxFQUFFLElBQUksY0FBY0MsU0FBUyxDQUFDVCxPQUFPLENBQUNPLFdBQVQsQ0FBN0I7QUFDQUMsZ0JBQUFBLEVBQUUsSUFBSSxZQUFZQyxTQUFTLENBQUNULE9BQU8sQ0FBQ0ssS0FBVCxDQUEzQjs7dUJBRXFDSyxrQkFBTUMsR0FBTixDQUFVWCxPQUFPLENBQUNZLFVBQVIsR0FBcUJKLEVBQS9CLEM7OztBQUEvQkssZ0JBQUFBLE87c0NBQ2lCQSxPQUFPLENBQUNDLElBQVIsQ0FBYUMsS0FBYixDQUFtQixJQUFuQixDLGlFQUFoQkMsTSw0QkFBUUYsSSw0QkFFZjs7QUFFTUcsZ0JBQUFBLEksR0FBT0MsSUFBSSxDQUFDQyxLQUFMLENBQVdMLElBQUksQ0FBQ00sT0FBTCxDQUFhLE1BQWIsRUFBcUIsRUFBckIsQ0FBWCxDO0FBQ1BDLGdCQUFBQSxNLGNBQWFDLG1DLEVBQTJCLENBQzFDTCxJQUFJLENBQUMsQ0FBRCxDQUFKLElBQVcsSUFBWCxHQUFrQixFQUFsQixHQUF1QkEsSUFBSSxDQUFDLENBQUQsQ0FEZSxFQUNWO0FBQ2hDQSxnQkFBQUEsSUFBSSxDQUFDLENBQUQsQ0FBSixJQUFXLElBQVgsR0FBa0IsRUFBbEIsR0FBdUJBLElBQUksQ0FBQyxDQUFELENBRmUsRUFFVjtBQUNoQ0EsZ0JBQUFBLElBQUksQ0FBQyxDQUFELENBSHNDLEVBR1Y7QUFDaENBLGdCQUFBQSxJQUFJLENBQUMsQ0FBRCxDQUpzQyxFQUlWO0FBQ2hDQSxnQkFBQUEsSUFBSSxDQUFDLENBQUQsQ0FBSixDQUFRRixLQUFSLENBQWMsR0FBZCxDQUwwQyxFQUtsQjtBQUN4QkUsZ0JBQUFBLElBQUksQ0FBQyxDQUFELENBTnNDLEVBTVY7QUFDaENBLGdCQUFBQSxJQUFJLENBQUMsQ0FBRCxDQVBzQyxFQU9WO0FBQ2hDQSxnQkFBQUEsSUFBSSxDQUFDLENBQUQsQ0FSc0MsRUFRVjtBQUNoQ0EsZ0JBQUFBLElBQUksQ0FBQyxDQUFELENBVHNDLEVBU1Y7QUFDaENBLGdCQUFBQSxJQUFJLENBQUMsRUFBRCxDQVZzQyxFQVVWO0FBQ2hDakIsZ0JBQUFBLE9BQU8sQ0FBQ3VCLFNBQVIsR0FBb0JOLElBQUksQ0FBQyxFQUFELENBWGtCLEVBV1U7QUFDcERBLGdCQUFBQSxJQUFJLENBQUMsRUFBRCxDQUFKLENBQVMsQ0FBVCxLQUFlTyxTQUFmLEdBQTJCLEVBQTNCLEdBQStCUCxJQUFJLENBQUMsRUFBRCxDQUFKLENBQVMsQ0FBVCxDQVpXLEVBWUU7QUFDNUNBLGdCQUFBQSxJQUFJLENBQUMsRUFBRCxDQUFKLENBQVMsQ0FBVCxLQUFlTyxTQUFmLEdBQTJCLEVBQTNCLEdBQStCUCxJQUFJLENBQUMsRUFBRCxDQUFKLENBQVMsQ0FBVCxDQWJXLEVBYUU7QUFDNUNBLGdCQUFBQSxJQUFJLENBQUMsRUFBRCxDQWRzQyxFQWM5QjtBQUNaQSxnQkFBQUEsSUFBSSxDQUFDLEVBQUQsQ0Fmc0MsRUFlOUI7QUFDWkEsZ0JBQUFBLElBQUksQ0FBQyxFQUFELENBaEJzQyxFQWdCOUI7QUFDWkEsZ0JBQUFBLElBQUksQ0FBQyxFQUFELENBakJzQyxFQWlCOUI7QUFDWkEsZ0JBQUFBLElBQUksQ0FBQyxFQUFELENBbEJzQyxFQWtCOUI7QUFDWkEsZ0JBQUFBLElBQUksQ0FBQyxFQUFELENBbkJzQyxFQW1COUI7QUFDWkEsZ0JBQUFBLElBQUksQ0FBQyxFQUFELENBcEJzQyxDQW9COUI7QUFwQjhCLGlCO0FBdUI5Q2YsZ0JBQUFBLFFBQVEsQ0FBQ21CLE1BQUQsQ0FBUjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBbERhckIsTyxTQUNKLDZCOztnQkFESUEsTyxnQkFFRyw2Qjs7Z0JBRkhBLE8sV0FJRixTOztnQkFKRUEsTyxpQkFLSSxLOztnQkFMSkEsTyxlQU9FLHVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1ENSBmcm9tICdjcnlwdG8tanMvbWQ1JztcclxuaW1wb3J0IGF4aW9zLCB7QXhpb3NSZXNwb25zZX0gZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBSZXNwb25zZUdldEZpbG1JbmZvRnVsbCBmcm9tIFwiLi9tb2RlbHMvUmVzcG9uc2VHZXRGaWxtSW5mb0Z1bGxcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbG13ZWIge1xyXG4gICAgc3RhdGljIEtFWSA9ICdxamNHaFcySm52R1Q5ZGZDdDN1VF9qb3pSM3MnO1xyXG4gICAgc3RhdGljIEFQSV9TRVJWRVIgPSAnaHR0cHM6Ly9zc2wuZmlsbXdlYi5wbC9hcGk/JztcclxuXHJcbiAgICBzdGF0aWMgQVBQSUQgPSBcImFuZHJvaWRcIjtcclxuICAgIHN0YXRpYyBBUFBfVkVSU0lPTiA9IFwiMS4wXCI7XHJcblxyXG4gICAgc3RhdGljIElNQUdFX1VSTCA9ICdodHRwczovLzEuZndjZG4ucGwvcG8nO1xyXG5cclxuICAgIHB1YmxpYyBhc3luYyBnZXRGaWxtSW5mb0Z1bGwoaXRlbUlkOiBudW1iZXIsIGNhbGxiYWNrOiBGdW5jdGlvbikge1xyXG4gICAgICAgIGxldCBtZXRob2QgPSBcImdldEZpbG1JbmZvRnVsbCBbXCIgKyBpdGVtSWQgKyBcIl1cIjtcclxuICAgICAgICBsZXQgc2lnbmF0dXJlID0gbWV0aG9kICsgXCJcXFxcblwiICsgRmlsbXdlYi5BUFBJRCArIEZpbG13ZWIuS0VZO1xyXG4gICAgICAgIHNpZ25hdHVyZSA9IEZpbG13ZWIuQVBQX1ZFUlNJT04gKyBcIixcIiArIE1ENShzaWduYXR1cmUpO1xyXG5cclxuICAgICAgICBtZXRob2QgKz0gXCJcXFxcblwiO1xyXG5cclxuICAgICAgICBsZXQgcXMgPSBcIm1ldGhvZHM9XCIgKyBlbmNvZGVVUkkobWV0aG9kKTtcclxuICAgICAgICBxcyArPSBcIiZzaWduYXR1cmU9XCIgKyBlbmNvZGVVUkkoc2lnbmF0dXJlKTtcclxuICAgICAgICBxcyArPSBcIiZ2ZXJzaW9uPVwiICsgZW5jb2RlVVJJKEZpbG13ZWIuQVBQX1ZFUlNJT04pO1xyXG4gICAgICAgIHFzICs9IFwiJmFwcElkPVwiICsgZW5jb2RlVVJJKEZpbG13ZWIuQVBQSUQpO1xyXG5cclxuICAgICAgICBjb25zdCByZXF1ZXN0OiBBeGlvc1Jlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KEZpbG13ZWIuQVBJX1NFUlZFUiArIHFzKTtcclxuICAgICAgICBjb25zdCBbc3RhdHVzLCBkYXRhXSA9IHJlcXVlc3QuZGF0YS5zcGxpdCgnXFxuJyk7XHJcblxyXG4gICAgICAgIC8vIEBUT0RPOiBvZ2FybsSFxIcgamFrIGplc3QgYsWCxIVkXHJcblxyXG4gICAgICAgIGNvbnN0IGpzb24gPSBKU09OLnBhcnNlKGRhdGEucmVwbGFjZSgvdDouKi8sICcnKSk7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFJlc3BvbnNlR2V0RmlsbUluZm9GdWxsKC4uLltcclxuICAgICAgICAgICAganNvblswXSA9PSBudWxsID8gXCJcIiA6IGpzb25bMF0sIC8vIHRpdGxlMVxyXG4gICAgICAgICAgICBqc29uWzFdID09IG51bGwgPyBcIlwiIDoganNvblsxXSwgLy8gdGl0bGUyXHJcbiAgICAgICAgICAgIGpzb25bMl0sICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmF0aW5nXHJcbiAgICAgICAgICAgIGpzb25bM10sICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmF0ZUNvdW50XHJcbiAgICAgICAgICAgIGpzb25bNF0uc3BsaXQoJywnKSwgICAgIC8vIGdlbnJlc1xyXG4gICAgICAgICAgICBqc29uWzVdLCAgICAgICAgICAgICAgICAgICAgICAgIC8vIHllYXJcclxuICAgICAgICAgICAganNvbls2XSwgICAgICAgICAgICAgICAgICAgICAgICAvLyBtaW51dGVzXHJcbiAgICAgICAgICAgIGpzb25bOF0sICAgICAgICAgICAgICAgICAgICAgICAgLy8gZm9ydW1MaW5rXHJcbiAgICAgICAgICAgIGpzb25bOV0sICAgICAgICAgICAgICAgICAgICAgICAgLy8gaXNSZWxlYXNlZEluUG9sYW5kXHJcbiAgICAgICAgICAgIGpzb25bMTBdLCAgICAgICAgICAgICAgICAgICAgICAgLy8gaXNSZWxlYXNlZFdvcmxkbHlcclxuICAgICAgICAgICAgRmlsbXdlYi5JTUFHRV9VUkwgKyBqc29uWzExXSwgICAgICAgICAgICAgICAgICAgICAgIC8vIHBvc3RlckxpbmtcclxuICAgICAgICAgICAganNvblsxMl1bMF0gPT0gdW5kZWZpbmVkID8gXCJcIjoganNvblsxMl1bMF0sIC8vIHRyYWlsZXJQb3N0ZXJMaW5rXHJcbiAgICAgICAgICAgIGpzb25bMTJdWzFdID09IHVuZGVmaW5lZCA/IFwiXCI6IGpzb25bMTJdWzFdLCAvLyB0cmFpbGVyVmlkZW9MaW5rXHJcbiAgICAgICAgICAgIGpzb25bMTNdLCAgIC8vIHJlbGVhc2VXb3JsZERhdGVcclxuICAgICAgICAgICAganNvblsxNF0sICAgLy8gcmVsZWFzZVBvbGFuZERhdGFcclxuICAgICAgICAgICAganNvblsxNV0sICAgLy8gaXNTZXJpZXNcclxuICAgICAgICAgICAganNvblsxNl0sICAgLy8gc2Vhc29uQ291bnRcclxuICAgICAgICAgICAganNvblsxN10sICAgLy8gZXBpc29kZXNDb3VudFxyXG4gICAgICAgICAgICBqc29uWzE4XSwgICAvLyBwcm9kdWN0aW9uQ291bnRyeVxyXG4gICAgICAgICAgICBqc29uWzE5XSAgICAvL2Rlc2NyaXB0aW9uXHJcbiAgICAgICAgXSk7XHJcblxyXG4gICAgICAgIGNhbGxiYWNrKHJlc3VsdCk7XHJcbiAgICB9XHJcbn0iXX0=