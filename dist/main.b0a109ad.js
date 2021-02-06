// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/utils.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routes = exports.input = void 0;
exports.input = [1619, 1919, 1441, 1861, 1932, 1514, 1847, 1871, 1764, 1467, 1970, 1589, 2009, 1429, 1098, 1327, 1502, 1398, 1710, 1562, 1512, 1468, 1762, 1348, 1356, 1950, 1266, 1969, 1815, 1583, 1959, 1092, 1694, 1814, 1763, 1151, 1981, 1193, 1614, 1413, 1642, 1943, 1407, 895, 1430, 1706, 1962, 1522, 1486, 1986, 1623, 1489, 1411, 1851, 1817, 1416, 1654, 1438, 1419, 1649, 1362, 690, 1804, 1452, 1766, 1360, 1807, 1385, 1964, 1626, 1832, 745, 1702, 1602, 1471, 1996, 1915, 1813, 1460, 1925, 1638, 1581, 1584, 1379, 1148, 1554, 1564, 1914, 1757, 1820, 1559, 1096, 1944, 1587, 1499, 390, 1733, 1371, 1781, 2002, 324, 1655, 1639, 1482, 1198, 1264, 1953, 1320, 1704, 1321, 1449, 1455, 1509, 1765, 1797, 1703, 1758, 1610, 1756, 1901, 1707, 1968, 1601, 1328, 1336, 1592, 1678, 1699, 1793, 1957, 2000, 1306, 1094, 1545, 1331, 1751, 1739, 1335, 1753, 1983, 1966, 1934, 1831, 1426, 1711, 1840, 1857, 1347, 1789, 1409, 1310, 1752, 1897, 1497, 1485, 1125, 1803, 1577, 919, 1635, 1791, 1456, 1796, 1974, 1954, 1828, 2004, 1890, 1376, 1569, 1406, 1463, 2006, 1109, 1620, 1656, 1870, 1498, 1645, 1145, 1681, 1269, 1527, 1621, 1575, 1324, 1647, 1519, 1697, 1421, 1216, 1846, 1625, 1585, 1369, 1882, 1823, 1388, 1548, 1879];
exports.routes = [{
  path: "/about",
  label: "O mnie",
  routes: [{
    path: "/consultations",
    label: "Konsultacje",
    routes: [{
      path: "/details",
      label: "Details"
    }]
  }, {
    path: "/collaboration",
    label: "Współpraca"
  }]
}, {
  path: "/settings",
  label: "Ustawienia",
  routes: [{
    path: "/agreements",
    label: "Zgody"
  }, {
    path: "/data",
    label: "Dane"
  }]
}];
},{}],"src/recursion/Breadcrumbs/Breadcrumbs.ts":[function(require,module,exports) {
"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchRoutes = void 0;

var utils_1 = require("../../utils");

var searchRoutes = function searchRoutes(routes, path) {
  if (path.length === 0) return [];
  var node = routes.find(function (elem) {
    return path.startsWith(elem.path);
  });

  if (!node) {
    return null;
  }

  var currentPathLength = node.path.length;
  var actualPath = path.slice(currentPathLength);
  var breadcrumbs = exports.searchRoutes(node.routes, actualPath);

  if (!breadcrumbs) {
    return null;
  }

  return [{
    label: node.label,
    path: node.path
  }].concat(_toConsumableArray(breadcrumbs));
};

exports.searchRoutes = searchRoutes;
console.log(exports.searchRoutes(utils_1.routes, '/about/consultations/details'));
},{"../../utils":"src/utils.ts"}],"src/recursion/Breadcrumbs/description.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routes = void 0;
exports.routes = [{
  path: '/about',
  label: 'O mnie',
  routes: [{
    path: '/consultations',
    label: 'Konsultacje'
  }, {
    path: '/collaboration',
    label: 'Współpraca'
  }]
}, {
  path: '/settings',
  label: 'Ustawienia',
  routes: [{
    path: '/agreements',
    label: 'Zgody'
  }, {
    path: '/data',
    label: 'Dane'
  }]
}];
},{}],"src/AdventOfCode/Day1.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getThreeValues = exports.sum2020Part3 = exports.sum2020Part2 = exports.sum2020 = void 0;

var utils_1 = require("../utils");

var sum2020 = function sum2020(arr, targetValue) {
  for (var i = 0; i < arr.length - 1; i++) {
    for (var j = i + 1; j < arr.length - 1; j++) {
      var num1 = arr[i];
      var num2 = arr[j];
      if (num1 + num2 === targetValue) return num1 * num2;
    }
  }
};

exports.sum2020 = sum2020;
var setArray = new Set(utils_1.input);
console.log("setArray", setArray);

var sum2020Part2 = function sum2020Part2(arr, targetValue) {
  for (var i = 0; i < arr.length - 1; i++) {
    var num1 = arr[i];
    var num2 = targetValue - num1;
    if (setArray.has(num2)) return num1 * num2;
  }
};

exports.sum2020Part2 = sum2020Part2;
var sortedInput = utils_1.input.sort(function (a, b) {
  return a - b;
});

var sum2020Part3 = function sum2020Part3() {
  var l = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : sortedInput.length - 1;
  var targetValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2020;
  var array = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : sortedInput;
  var rightValue = array[r];
  var leftValue = array[l];
  var sum = rightValue + leftValue;
  if (sum === targetValue) return {
    rightValue: rightValue,
    leftValue: leftValue
  };else if (sum < targetValue) return exports.sum2020Part3(l + 1, r, targetValue, array);else if (sum > targetValue) return exports.sum2020Part3(l, r - 1, targetValue, array);
};

exports.sum2020Part3 = sum2020Part3;

var getThreeValues = function getThreeValues() {
  var targetValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2020;
  var array = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : utils_1.input;
};

exports.getThreeValues = getThreeValues;
},{"../utils":"src/utils.ts"}],"src/main.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Breadcrumbs_1 = require("./recursion/Breadcrumbs/Breadcrumbs");

var description_1 = require("./recursion/Breadcrumbs/description");

var Day1_1 = require("./AdventOfCode/Day1");

var utils_1 = require("./utils");

var path = '/about/consultations/collaboration';
var BreadCrumb = Breadcrumbs_1.Breadcrumbs(description_1.routes, path);
var Day1Part1 = Day1_1.sum2020(utils_1.input, 2020);
var Day1Part2 = Day1_1.sum2020Part2(utils_1.input, 2020);
var Day1Part3 = Day1_1.sum2020Part3();
var Day1Part4 = Day1_1.getThreeValues();
var SearchRoutes = searchRoutes(description_1.routes, '/about/consultations/details');
console.log(SearchRoutes, 'SearchRoutes');
window.onload = description_1.routes;
},{"./recursion/Breadcrumbs/Breadcrumbs":"src/recursion/Breadcrumbs/Breadcrumbs.ts","./recursion/Breadcrumbs/description":"src/recursion/Breadcrumbs/description.ts","./AdventOfCode/Day1":"src/AdventOfCode/Day1.ts","./utils":"src/utils.ts"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "17923" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/main.ts"], null)
//# sourceMappingURL=/main.b0a109ad.js.map