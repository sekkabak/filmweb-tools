"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _ResponseLiveSearch = _interopRequireDefault(require("./models/ResponseLiveSearch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var LiveSearch =
/*#__PURE__*/
function () {
  function LiveSearch() {
    _classCallCheck(this, LiveSearch);
  }

  _createClass(LiveSearch, null, [{
    key: "search",
    value: function () {
      var _search = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(query, callback) {
        var request, data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _axios["default"].get(LiveSearch.URL + query);

              case 2:
                request = _context.sent;
                data = request.data.split('\\a').map(function (record) {
                  var data = record.split('\\c');
                  data[1] = parseInt(data[1]);
                  data[2] = LiveSearch.IMAGE_URL + data[2];
                  data[6] = parseInt(data[6]);
                  data[7] = data[7].split(', ');
                  return _construct(_ResponseLiveSearch["default"], _toConsumableArray(data));
                });
                callback(data);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function search(_x, _x2) {
        return _search.apply(this, arguments);
      }

      return search;
    }()
  }]);

  return LiveSearch;
}();

exports["default"] = LiveSearch;

_defineProperty(LiveSearch, "URL", 'http://www.filmweb.pl/search/live?q=');

_defineProperty(LiveSearch, "IMAGE_URL", 'https://1.fwcdn.pl/po');
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9MaXZlU2VhcmNoLnRzIl0sIm5hbWVzIjpbIkxpdmVTZWFyY2giLCJxdWVyeSIsImNhbGxiYWNrIiwiYXhpb3MiLCJnZXQiLCJVUkwiLCJyZXF1ZXN0IiwiZGF0YSIsInNwbGl0IiwibWFwIiwicmVjb3JkIiwicGFyc2VJbnQiLCJJTUFHRV9VUkwiLCJSZXNwb25zZUxpdmVTZWFyY2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxVOzs7Ozs7Ozs7Ozs7K0NBSVVDLEssRUFBZUMsUTs7Ozs7Ozt1QkFDREMsa0JBQU1DLEdBQU4sQ0FBVUosVUFBVSxDQUFDSyxHQUFYLEdBQWlCSixLQUEzQixDOzs7QUFBL0JLLGdCQUFBQSxPO0FBQ0ZDLGdCQUFBQSxJLEdBQTZCRCxPQUFPLENBQUNDLElBQVIsQ0FBYUMsS0FBYixDQUFtQixLQUFuQixFQUEwQkMsR0FBMUIsQ0FBOEIsVUFBQ0MsTUFBRCxFQUFvQjtBQUMvRSxzQkFBTUgsSUFBVyxHQUFHRyxNQUFNLENBQUNGLEtBQVAsQ0FBYSxLQUFiLENBQXBCO0FBQ0FELGtCQUFBQSxJQUFJLENBQUMsQ0FBRCxDQUFKLEdBQVVJLFFBQVEsQ0FBQ0osSUFBSSxDQUFDLENBQUQsQ0FBTCxDQUFsQjtBQUNBQSxrQkFBQUEsSUFBSSxDQUFDLENBQUQsQ0FBSixHQUFVUCxVQUFVLENBQUNZLFNBQVgsR0FBdUJMLElBQUksQ0FBQyxDQUFELENBQXJDO0FBQ0FBLGtCQUFBQSxJQUFJLENBQUMsQ0FBRCxDQUFKLEdBQVVJLFFBQVEsQ0FBQ0osSUFBSSxDQUFDLENBQUQsQ0FBTCxDQUFsQjtBQUNBQSxrQkFBQUEsSUFBSSxDQUFDLENBQUQsQ0FBSixHQUFVQSxJQUFJLENBQUMsQ0FBRCxDQUFKLENBQVFDLEtBQVIsQ0FBYyxJQUFkLENBQVY7QUFDQSxvQ0FBV0ssOEJBQVgscUJBQWlDTixJQUFqQztBQUNILGlCQVBnQyxDO0FBUWpDTCxnQkFBQUEsUUFBUSxDQUFDSyxJQUFELENBQVI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dCQWRhUCxVLFNBQ0osc0M7O2dCQURJQSxVLGVBRUUsdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MsIHtBeGlvc1Jlc3BvbnNlfSBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IFJlc3BvbnNlTGl2ZVNlYXJjaCBmcm9tIFwiLi9tb2RlbHMvUmVzcG9uc2VMaXZlU2VhcmNoXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXZlU2VhcmNoIHtcclxuICAgIHN0YXRpYyBVUkwgPSAnaHR0cDovL3d3dy5maWxtd2ViLnBsL3NlYXJjaC9saXZlP3E9JztcclxuICAgIHN0YXRpYyBJTUFHRV9VUkwgPSAnaHR0cHM6Ly8xLmZ3Y2RuLnBsL3BvJztcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIHNlYXJjaChxdWVyeTogc3RyaW5nLCBjYWxsYmFjazogRnVuY3Rpb24pIHtcclxuICAgICAgICBjb25zdCByZXF1ZXN0OiBBeGlvc1Jlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KExpdmVTZWFyY2guVVJMICsgcXVlcnkpO1xyXG4gICAgICAgIGxldCBkYXRhOiBSZXNwb25zZUxpdmVTZWFyY2hbXSA9IHJlcXVlc3QuZGF0YS5zcGxpdCgnXFxcXGEnKS5tYXAoKHJlY29yZDogU3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGE6IGFueVtdID0gcmVjb3JkLnNwbGl0KCdcXFxcYycpO1xyXG4gICAgICAgICAgICBkYXRhWzFdID0gcGFyc2VJbnQoZGF0YVsxXSk7XHJcbiAgICAgICAgICAgIGRhdGFbMl0gPSBMaXZlU2VhcmNoLklNQUdFX1VSTCArIGRhdGFbMl07XHJcbiAgICAgICAgICAgIGRhdGFbNl0gPSBwYXJzZUludChkYXRhWzZdKTtcclxuICAgICAgICAgICAgZGF0YVs3XSA9IGRhdGFbN10uc3BsaXQoJywgJyk7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUmVzcG9uc2VMaXZlU2VhcmNoKC4uLmRhdGEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNhbGxiYWNrKGRhdGEpO1xyXG4gICAgfVxyXG59XHJcblxyXG4iXX0=