"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ResponseLiveSearch = function ResponseLiveSearch() {
  _classCallCheck(this, ResponseLiveSearch);

  _defineProperty(this, "type", void 0);

  _defineProperty(this, "id", void 0);

  _defineProperty(this, "img", void 0);

  _defineProperty(this, "title", void 0);

  _defineProperty(this, "title2", void 0);

  _defineProperty(this, "title3", void 0);

  _defineProperty(this, "year", void 0);

  _defineProperty(this, "stars", void 0);

  _defineProperty(this, "link", void 0);

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  this.type = args[0];
  this.id = args[1];
  this.img = args[2];
  this.title = args[3];
  this.title2 = args[4];
  this.title3 = args[5];
  this.year = args[6];
  this.stars = args[7];
  this.link = 'https://www.filmweb.pl/film/' + encodeURI(this.title2) + '-' + this.year + '-' + this.id;
};

exports["default"] = ResponseLiveSearch;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvUmVzcG9uc2VMaXZlU2VhcmNoLnRzIl0sIm5hbWVzIjpbIlJlc3BvbnNlTGl2ZVNlYXJjaCIsImFyZ3MiLCJ0eXBlIiwiaWQiLCJpbWciLCJ0aXRsZSIsInRpdGxlMiIsInRpdGxlMyIsInllYXIiLCJzdGFycyIsImxpbmsiLCJlbmNvZGVVUkkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBQXFCQSxrQixHQVdqQiw4QkFBNEI7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQSxvQ0FBYkMsSUFBYTtBQUFiQSxJQUFBQSxJQUFhO0FBQUE7O0FBQ3ZCLE9BQUtDLElBRGtCLEdBQ3NFRCxJQUR0RTtBQUNaLE9BQUtFLEVBRE8sR0FDc0VGLElBRHRFO0FBQ0gsT0FBS0csR0FERixHQUNzRUgsSUFEdEU7QUFDTyxPQUFLSSxLQURaLEdBQ3NFSixJQUR0RTtBQUNtQixPQUFLSyxNQUR4QixHQUNzRUwsSUFEdEU7QUFDZ0MsT0FBS00sTUFEckMsR0FDc0VOLElBRHRFO0FBQzZDLE9BQUtPLElBRGxELEdBQ3NFUCxJQUR0RTtBQUN3RCxPQUFLUSxLQUQ3RCxHQUNzRVIsSUFEdEU7QUFFeEIsT0FBS1MsSUFBTCxHQUFZLGlDQUFpQ0MsU0FBUyxDQUFDLEtBQUtMLE1BQU4sQ0FBMUMsR0FBMEQsR0FBMUQsR0FBZ0UsS0FBS0UsSUFBckUsR0FBNEUsR0FBNUUsR0FBa0YsS0FBS0wsRUFBbkc7QUFDSCxDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVzcG9uc2VMaXZlU2VhcmNoIHtcclxuICAgIHB1YmxpYyB0eXBlOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgaWQ6IG51bWJlcjtcclxuICAgIHB1YmxpYyBpbWc6IHN0cmluZztcclxuICAgIHB1YmxpYyB0aXRsZTogc3RyaW5nO1xyXG4gICAgcHVibGljIHRpdGxlMjogc3RyaW5nO1xyXG4gICAgcHVibGljIHRpdGxlMzogc3RyaW5nO1xyXG4gICAgcHVibGljIHllYXI6IG51bWJlcjtcclxuICAgIHB1YmxpYyBzdGFyczogc3RyaW5nW107XHJcbiAgICBwdWJsaWMgbGluazogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3M6IGFueVtdKSB7XHJcbiAgICAgICAgW3RoaXMudHlwZSwgdGhpcy5pZCwgdGhpcy5pbWcsIHRoaXMudGl0bGUsIHRoaXMudGl0bGUyLCB0aGlzLnRpdGxlMywgdGhpcy55ZWFyLCB0aGlzLnN0YXJzXSA9IGFyZ3M7XHJcbiAgICAgICAgdGhpcy5saW5rID0gJ2h0dHBzOi8vd3d3LmZpbG13ZWIucGwvZmlsbS8nICsgZW5jb2RlVVJJKHRoaXMudGl0bGUyKSArICctJyArIHRoaXMueWVhciArICctJyArIHRoaXMuaWQ7XHJcbiAgICB9XHJcbn0iXX0=