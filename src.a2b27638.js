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
})({"node_modules/preact/dist/preact.module.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.render = H;
exports.hydrate = I;
exports.h = exports.createElement = h;
exports.Fragment = d;
exports.createRef = p;
exports.Component = m;
exports.cloneElement = L;
exports.createContext = M;
exports.toChildArray = x;
exports._unmount = D;
exports.options = exports.isValidElement = void 0;
var n,
    l,
    u,
    i,
    t,
    o,
    r,
    f,
    e = {},
    c = [],
    a = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
exports.isValidElement = l;
exports.options = n;

function s(n, l) {
  for (var u in l) n[u] = l[u];

  return n;
}

function v(n) {
  var l = n.parentNode;
  l && l.removeChild(n);
}

function h(n, l, u) {
  var i,
      t = arguments,
      o = {};

  for (i in l) "key" !== i && "ref" !== i && (o[i] = l[i]);

  if (arguments.length > 3) for (u = [u], i = 3; i < arguments.length; i++) u.push(t[i]);
  if (null != u && (o.children = u), "function" == typeof n && null != n.defaultProps) for (i in n.defaultProps) void 0 === o[i] && (o[i] = n.defaultProps[i]);
  return y(n, o, l && l.key, l && l.ref, null);
}

function y(l, u, i, t, o) {
  var r = {
    type: l,
    props: u,
    key: i,
    ref: t,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __d: void 0,
    __c: null,
    constructor: void 0,
    __v: o
  };
  return null == o && (r.__v = r), n.vnode && n.vnode(r), r;
}

function p() {
  return {};
}

function d(n) {
  return n.children;
}

function m(n, l) {
  this.props = n, this.context = l;
}

function w(n, l) {
  if (null == l) return n.__ ? w(n.__, n.__.__k.indexOf(n) + 1) : null;

  for (var u; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) return u.__e;

  return "function" == typeof n.type ? w(n) : null;
}

function k(n) {
  var l, u;

  if (null != (n = n.__) && null != n.__c) {
    for (n.__e = n.__c.base = null, l = 0; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) {
      n.__e = n.__c.base = u.__e;
      break;
    }

    return k(n);
  }
}

function g(l) {
  (!l.__d && (l.__d = !0) && u.push(l) && !i++ || o !== n.debounceRendering) && ((o = n.debounceRendering) || t)(_);
}

function _() {
  for (var n; i = u.length;) n = u.sort(function (n, l) {
    return n.__v.__b - l.__v.__b;
  }), u = [], n.some(function (n) {
    var l, u, i, t, o, r, f;
    n.__d && (r = (o = (l = n).__v).__e, (f = l.__P) && (u = [], (i = s({}, o)).__v = i, t = z(f, o, i, l.__n, void 0 !== f.ownerSVGElement, null, u, null == r ? w(o) : r), T(u, o), t != r && k(o)));
  });
}

function b(n, l, u, i, t, o, r, f, a, s) {
  var h,
      p,
      m,
      k,
      g,
      _,
      b,
      x,
      A,
      P = i && i.__k || c,
      C = P.length;

  for (a == e && (a = null != r ? r[0] : C ? w(i, 0) : null), u.__k = [], h = 0; h < l.length; h++) if (null != (k = u.__k[h] = null == (k = l[h]) || "boolean" == typeof k ? null : "string" == typeof k || "number" == typeof k ? y(null, k, null, null, k) : Array.isArray(k) ? y(d, {
    children: k
  }, null, null, null) : null != k.__e || null != k.__c ? y(k.type, k.props, k.key, null, k.__v) : k)) {
    if (k.__ = u, k.__b = u.__b + 1, null === (m = P[h]) || m && k.key == m.key && k.type === m.type) P[h] = void 0;else for (p = 0; p < C; p++) {
      if ((m = P[p]) && k.key == m.key && k.type === m.type) {
        P[p] = void 0;
        break;
      }

      m = null;
    }

    if (g = z(n, k, m = m || e, t, o, r, f, a, s), (p = k.ref) && m.ref != p && (x || (x = []), m.ref && x.push(m.ref, null, k), x.push(p, k.__c || g, k)), null != g) {
      if (null == b && (b = g), A = void 0, void 0 !== k.__d) A = k.__d, k.__d = void 0;else if (r == m || g != a || null == g.parentNode) {
        n: if (null == a || a.parentNode !== n) n.appendChild(g), A = null;else {
          for (_ = a, p = 0; (_ = _.nextSibling) && p < C; p += 2) if (_ == g) break n;

          n.insertBefore(g, a), A = a;
        }

        "option" == u.type && (n.value = "");
      }
      a = void 0 !== A ? A : g.nextSibling, "function" == typeof u.type && (u.__d = a);
    } else a && m.__e == a && a.parentNode != n && (a = w(m));
  }

  if (u.__e = b, null != r && "function" != typeof u.type) for (h = r.length; h--;) null != r[h] && v(r[h]);

  for (h = C; h--;) null != P[h] && D(P[h], P[h]);

  if (x) for (h = 0; h < x.length; h++) j(x[h], x[++h], x[++h]);
}

function x(n) {
  return null == n || "boolean" == typeof n ? [] : Array.isArray(n) ? c.concat.apply([], n.map(x)) : [n];
}

function A(n, l, u, i, t) {
  var o;

  for (o in u) "children" === o || "key" === o || o in l || C(n, o, null, u[o], i);

  for (o in l) t && "function" != typeof l[o] || "children" === o || "key" === o || "value" === o || "checked" === o || u[o] === l[o] || C(n, o, l[o], u[o], i);
}

function P(n, l, u) {
  "-" === l[0] ? n.setProperty(l, u) : n[l] = "number" == typeof u && !1 === a.test(l) ? u + "px" : null == u ? "" : u;
}

function C(n, l, u, i, t) {
  var o, r, f, e, c;
  if (t ? "className" === l && (l = "class") : "class" === l && (l = "className"), "style" === l) {
    if (o = n.style, "string" == typeof u) o.cssText = u;else {
      if ("string" == typeof i && (o.cssText = "", i = null), i) for (e in i) u && e in u || P(o, e, "");
      if (u) for (c in u) i && u[c] === i[c] || P(o, c, u[c]);
    }
  } else "o" === l[0] && "n" === l[1] ? (r = l !== (l = l.replace(/Capture$/, "")), f = l.toLowerCase(), l = (f in n ? f : l).slice(2), u ? (i || n.addEventListener(l, N, r), (n.l || (n.l = {}))[l] = u) : n.removeEventListener(l, N, r)) : "list" !== l && "tagName" !== l && "form" !== l && "type" !== l && "size" !== l && !t && l in n ? n[l] = null == u ? "" : u : "function" != typeof u && "dangerouslySetInnerHTML" !== l && (l !== (l = l.replace(/^xlink:?/, "")) ? null == u || !1 === u ? n.removeAttributeNS("http://www.w3.org/1999/xlink", l.toLowerCase()) : n.setAttributeNS("http://www.w3.org/1999/xlink", l.toLowerCase(), u) : null == u || !1 === u && !/^ar/.test(l) ? n.removeAttribute(l) : n.setAttribute(l, u));
}

function N(l) {
  this.l[l.type](n.event ? n.event(l) : l);
}

function z(l, u, i, t, o, r, f, e, c) {
  var a,
      v,
      h,
      y,
      p,
      w,
      k,
      g,
      _,
      x,
      A,
      P = u.type;

  if (void 0 !== u.constructor) return null;
  (a = n.__b) && a(u);

  try {
    n: if ("function" == typeof P) {
      if (g = u.props, _ = (a = P.contextType) && t[a.__c], x = a ? _ ? _.props.value : a.__ : t, i.__c ? k = (v = u.__c = i.__c).__ = v.__E : ("prototype" in P && P.prototype.render ? u.__c = v = new P(g, x) : (u.__c = v = new m(g, x), v.constructor = P, v.render = E), _ && _.sub(v), v.props = g, v.state || (v.state = {}), v.context = x, v.__n = t, h = v.__d = !0, v.__h = []), null == v.__s && (v.__s = v.state), null != P.getDerivedStateFromProps && (v.__s == v.state && (v.__s = s({}, v.__s)), s(v.__s, P.getDerivedStateFromProps(g, v.__s))), y = v.props, p = v.state, h) null == P.getDerivedStateFromProps && null != v.componentWillMount && v.componentWillMount(), null != v.componentDidMount && v.__h.push(v.componentDidMount);else {
        if (null == P.getDerivedStateFromProps && g !== y && null != v.componentWillReceiveProps && v.componentWillReceiveProps(g, x), !v.__e && null != v.shouldComponentUpdate && !1 === v.shouldComponentUpdate(g, v.__s, x) || u.__v === i.__v) {
          for (v.props = g, v.state = v.__s, u.__v !== i.__v && (v.__d = !1), v.__v = u, u.__e = i.__e, u.__k = i.__k, v.__h.length && f.push(v), a = 0; a < u.__k.length; a++) u.__k[a] && (u.__k[a].__ = u);

          break n;
        }

        null != v.componentWillUpdate && v.componentWillUpdate(g, v.__s, x), null != v.componentDidUpdate && v.__h.push(function () {
          v.componentDidUpdate(y, p, w);
        });
      }
      v.context = x, v.props = g, v.state = v.__s, (a = n.__r) && a(u), v.__d = !1, v.__v = u, v.__P = l, a = v.render(v.props, v.state, v.context), null != v.getChildContext && (t = s(s({}, t), v.getChildContext())), h || null == v.getSnapshotBeforeUpdate || (w = v.getSnapshotBeforeUpdate(y, p)), A = null != a && a.type == d && null == a.key ? a.props.children : a, b(l, Array.isArray(A) ? A : [A], u, i, t, o, r, f, e, c), v.base = u.__e, v.__h.length && f.push(v), k && (v.__E = v.__ = null), v.__e = !1;
    } else null == r && u.__v === i.__v ? (u.__k = i.__k, u.__e = i.__e) : u.__e = $(i.__e, u, i, t, o, r, f, c);

    (a = n.diffed) && a(u);
  } catch (l) {
    u.__v = null, n.__e(l, u, i);
  }

  return u.__e;
}

function T(l, u) {
  n.__c && n.__c(u, l), l.some(function (u) {
    try {
      l = u.__h, u.__h = [], l.some(function (n) {
        n.call(u);
      });
    } catch (l) {
      n.__e(l, u.__v);
    }
  });
}

function $(n, l, u, i, t, o, r, f) {
  var a,
      s,
      v,
      h,
      y,
      p = u.props,
      d = l.props;
  if (t = "svg" === l.type || t, null != o) for (a = 0; a < o.length; a++) if (null != (s = o[a]) && ((null === l.type ? 3 === s.nodeType : s.localName === l.type) || n == s)) {
    n = s, o[a] = null;
    break;
  }

  if (null == n) {
    if (null === l.type) return document.createTextNode(d);
    n = t ? document.createElementNS("http://www.w3.org/2000/svg", l.type) : document.createElement(l.type, d.is && {
      is: d.is
    }), o = null, f = !1;
  }

  if (null === l.type) p !== d && n.data != d && (n.data = d);else {
    if (null != o && (o = c.slice.call(n.childNodes)), v = (p = u.props || e).dangerouslySetInnerHTML, h = d.dangerouslySetInnerHTML, !f) {
      if (null != o) for (p = {}, y = 0; y < n.attributes.length; y++) p[n.attributes[y].name] = n.attributes[y].value;
      (h || v) && (h && v && h.__html == v.__html || (n.innerHTML = h && h.__html || ""));
    }

    A(n, d, p, t, f), h ? l.__k = [] : (a = l.props.children, b(n, Array.isArray(a) ? a : [a], l, u, i, "foreignObject" !== l.type && t, o, r, e, f)), f || ("value" in d && void 0 !== (a = d.value) && a !== n.value && C(n, "value", a, p.value, !1), "checked" in d && void 0 !== (a = d.checked) && a !== n.checked && C(n, "checked", a, p.checked, !1));
  }
  return n;
}

function j(l, u, i) {
  try {
    "function" == typeof l ? l(u) : l.current = u;
  } catch (l) {
    n.__e(l, i);
  }
}

function D(l, u, i) {
  var t, o, r;

  if (n.unmount && n.unmount(l), (t = l.ref) && (t.current && t.current !== l.__e || j(t, null, u)), i || "function" == typeof l.type || (i = null != (o = l.__e)), l.__e = l.__d = void 0, null != (t = l.__c)) {
    if (t.componentWillUnmount) try {
      t.componentWillUnmount();
    } catch (l) {
      n.__e(l, u);
    }
    t.base = t.__P = null;
  }

  if (t = l.__k) for (r = 0; r < t.length; r++) t[r] && D(t[r], u, i);
  null != o && v(o);
}

function E(n, l, u) {
  return this.constructor(n, u);
}

function H(l, u, i) {
  var t, o, f;
  n.__ && n.__(l, u), o = (t = i === r) ? null : i && i.__k || u.__k, l = h(d, null, [l]), f = [], z(u, (t ? u : i || u).__k = l, o || e, e, void 0 !== u.ownerSVGElement, i && !t ? [i] : o ? null : u.childNodes.length ? c.slice.call(u.childNodes) : null, f, i || e, t), T(f, l);
}

function I(n, l) {
  H(n, l, r);
}

function L(n, l) {
  var u, i;

  for (i in l = s(s({}, n.props), l), arguments.length > 2 && (l.children = c.slice.call(arguments, 2)), u = {}, l) "key" !== i && "ref" !== i && (u[i] = l[i]);

  return y(n.type, u, l.key || n.key, l.ref || n.ref, null);
}

function M(n) {
  var l = {},
      u = {
    __c: "__cC" + f++,
    __: n,
    Consumer: function (n, l) {
      return n.children(l);
    },
    Provider: function (n) {
      var i,
          t = this;
      return this.getChildContext || (i = [], this.getChildContext = function () {
        return l[u.__c] = t, l;
      }, this.shouldComponentUpdate = function (n) {
        t.props.value !== n.value && i.some(function (l) {
          l.context = n.value, g(l);
        });
      }, this.sub = function (n) {
        i.push(n);
        var l = n.componentWillUnmount;

        n.componentWillUnmount = function () {
          i.splice(i.indexOf(n), 1), l && l.call(n);
        };
      }), n.children;
    }
  };
  return u.Consumer.contextType = u, u.Provider.__ = u, u;
}

exports.options = n = {
  __e: function (n, l) {
    for (var u, i; l = l.__;) if ((u = l.__c) && !u.__) try {
      if (u.constructor && null != u.constructor.getDerivedStateFromError && (i = !0, u.setState(u.constructor.getDerivedStateFromError(n))), null != u.componentDidCatch && (i = !0, u.componentDidCatch(n)), i) return g(u.__E = u);
    } catch (l) {
      n = l;
    }

    throw n;
  }
}, exports.isValidElement = l = function (n) {
  return null != n && void 0 === n.constructor;
}, m.prototype.setState = function (n, l) {
  var u;
  u = this.__s !== this.state ? this.__s : this.__s = s({}, this.state), "function" == typeof n && (n = n(u, this.props)), n && s(u, n), null != n && this.__v && (l && this.__h.push(l), g(this));
}, m.prototype.forceUpdate = function (n) {
  this.__v && (this.__e = !0, n && this.__h.push(n), g(this));
}, m.prototype.render = d, u = [], i = 0, t = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, r = e, f = 0;
},{}],"node_modules/preact/hooks/dist/hooks.module.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useState = m;
exports.useReducer = p;
exports.useEffect = l;
exports.useLayoutEffect = y;
exports.useRef = d;
exports.useImperativeHandle = s;
exports.useMemo = h;
exports.useCallback = T;
exports.useContext = w;
exports.useDebugValue = A;
exports.useErrorBoundary = F;

var _preact = require("preact");

var t,
    u,
    r,
    i = 0,
    o = [],
    c = _preact.options.__r,
    f = _preact.options.diffed,
    e = _preact.options.__c,
    a = _preact.options.unmount;

function v(t, r) {
  _preact.options.__h && _preact.options.__h(u, t, i || r), i = 0;
  var o = u.__H || (u.__H = {
    __: [],
    __h: []
  });
  return t >= o.__.length && o.__.push({}), o.__[t];
}

function m(n) {
  return i = 1, p(E, n);
}

function p(n, r, i) {
  var o = v(t++, 2);
  return o.t = n, o.__c || (o.__c = u, o.__ = [i ? i(r) : E(void 0, r), function (n) {
    var t = o.t(o.__[0], n);
    o.__[0] !== t && (o.__[0] = t, o.__c.setState({}));
  }]), o.__;
}

function l(r, i) {
  var o = v(t++, 3);
  !_preact.options.__s && x(o.__H, i) && (o.__ = r, o.__H = i, u.__H.__h.push(o));
}

function y(r, i) {
  var o = v(t++, 4);
  !_preact.options.__s && x(o.__H, i) && (o.__ = r, o.__H = i, u.__h.push(o));
}

function d(n) {
  return i = 5, h(function () {
    return {
      current: n
    };
  }, []);
}

function s(n, t, u) {
  i = 6, y(function () {
    "function" == typeof n ? n(t()) : n && (n.current = t());
  }, null == u ? u : u.concat(n));
}

function h(n, u) {
  var r = v(t++, 7);
  return x(r.__H, u) ? (r.__H = u, r.__h = n, r.__ = n()) : r.__;
}

function T(n, t) {
  return i = 8, h(function () {
    return n;
  }, t);
}

function w(n) {
  var r = u.context[n.__c],
      i = v(t++, 9);
  return i.__c = n, r ? (null == i.__ && (i.__ = !0, r.sub(u)), r.props.value) : n.__;
}

function A(t, u) {
  _preact.options.useDebugValue && _preact.options.useDebugValue(u ? u(t) : t);
}

function F(n) {
  var r = v(t++, 10),
      i = m();
  return r.__ = n, u.componentDidCatch || (u.componentDidCatch = function (n) {
    r.__ && r.__(n), i[1](n);
  }), [i[0], function () {
    i[1](void 0);
  }];
}

function _() {
  o.some(function (t) {
    if (t.__P) try {
      t.__H.__h.forEach(g), t.__H.__h.forEach(q), t.__H.__h = [];
    } catch (u) {
      return t.__H.__h = [], _preact.options.__e(u, t.__v), !0;
    }
  }), o = [];
}

function g(n) {
  "function" == typeof n.u && n.u();
}

function q(n) {
  n.u = n.__();
}

function x(n, t) {
  return !n || t.some(function (t, u) {
    return t !== n[u];
  });
}

function E(n, t) {
  return "function" == typeof t ? t(n) : t;
}

_preact.options.__r = function (n) {
  c && c(n), t = 0;
  var r = (u = n.__c).__H;
  r && (r.__h.forEach(g), r.__h.forEach(q), r.__h = []);
}, _preact.options.diffed = function (t) {
  f && f(t);
  var u = t.__c;
  u && u.__H && u.__H.__h.length && (1 !== o.push(u) && r === _preact.options.requestAnimationFrame || ((r = _preact.options.requestAnimationFrame) || function (n) {
    var t,
        u = function () {
      clearTimeout(r), cancelAnimationFrame(t), setTimeout(n);
    },
        r = setTimeout(u, 100);

    "undefined" != typeof window && (t = requestAnimationFrame(u));
  })(_));
}, _preact.options.__c = function (t, u) {
  u.some(function (t) {
    try {
      t.__h.forEach(g), t.__h = t.__h.filter(function (n) {
        return !n.__ || q(n);
      });
    } catch (r) {
      u.some(function (n) {
        n.__h && (n.__h = []);
      }), u = [], _preact.options.__e(r, t.__v);
    }
  }), e && e(t, u);
}, _preact.options.unmount = function (t) {
  a && a(t);
  var u = t.__c;
  if (u && u.__H) try {
    u.__H.__.forEach(g);
  } catch (t) {
    _preact.options.__e(t, u.__v);
  }
};
},{"preact":"node_modules/preact/dist/preact.module.js"}],"node_modules/preact/compat/dist/compat.module.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  version: true,
  Children: true,
  render: true,
  hydrate: true,
  unmountComponentAtNode: true,
  createPortal: true,
  createFactory: true,
  cloneElement: true,
  isValidElement: true,
  findDOMNode: true,
  PureComponent: true,
  memo: true,
  forwardRef: true,
  unstable_batchedUpdates: true,
  StrictMode: true,
  Suspense: true,
  SuspenseList: true,
  lazy: true,
  createElement: true,
  createContext: true,
  createRef: true,
  Fragment: true,
  Component: true
};
exports.render = V;
exports.hydrate = Z;
exports.unmountComponentAtNode = X;
exports.createPortal = D;
exports.createFactory = J;
exports.cloneElement = Q;
exports.isValidElement = K;
exports.findDOMNode = Y;
exports.memo = C;
exports.forwardRef = k;
exports.Suspense = M;
exports.SuspenseList = P;
exports.lazy = O;
Object.defineProperty(exports, "createElement", {
  enumerable: true,
  get: function () {
    return _preact.createElement;
  }
});
Object.defineProperty(exports, "createContext", {
  enumerable: true,
  get: function () {
    return _preact.createContext;
  }
});
Object.defineProperty(exports, "createRef", {
  enumerable: true,
  get: function () {
    return _preact.createRef;
  }
});
Object.defineProperty(exports, "Fragment", {
  enumerable: true,
  get: function () {
    return _preact.Fragment;
  }
});
Object.defineProperty(exports, "Component", {
  enumerable: true,
  get: function () {
    return _preact.Component;
  }
});
exports.StrictMode = exports.unstable_batchedUpdates = exports.PureComponent = exports.Children = exports.version = exports.default = void 0;

var _hooks = require("preact/hooks");

Object.keys(_hooks).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _hooks[key];
    }
  });
});

var _preact = require("preact");

function w(n, t) {
  for (var e in t) n[e] = t[e];

  return n;
}

function x(n, t) {
  for (var e in n) if ("__source" !== e && !(e in t)) return !0;

  for (var r in t) if ("__source" !== r && n[r] !== t[r]) return !0;

  return !1;
}

var E = function (n) {
  var t, e;

  function r(t) {
    var e;
    return (e = n.call(this, t) || this).isPureReactComponent = !0, e;
  }

  return e = n, (t = r).prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e, r.prototype.shouldComponentUpdate = function (n, t) {
    return x(this.props, n) || x(this.state, t);
  }, r;
}(_preact.Component);

exports.PureComponent = E;

function C(n, t) {
  function e(n) {
    var e = this.props.ref,
        r = e == n.ref;
    return !r && e && (e.call ? e(null) : e.current = null), t ? !t(this.props, n) || !r : x(this.props, n);
  }

  function r(t) {
    return this.shouldComponentUpdate = e, (0, _preact.createElement)(n, t);
  }

  return r.prototype.isReactComponent = !0, r.displayName = "Memo(" + (n.displayName || n.name) + ")", r.t = !0, r;
}

var _ = _preact.options.__b;

_preact.options.__b = function (n) {
  n.type && n.type.t && n.ref && (n.props.ref = n.ref, n.ref = null), _ && _(n);
};

var A = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;

function k(n) {
  function t(t, e) {
    var r = w({}, t);
    return delete r.ref, n(r, t.ref || e);
  }

  return t.$$typeof = A, t.render = t, t.prototype.isReactComponent = t.t = !0, t.displayName = "ForwardRef(" + (n.displayName || n.name) + ")", t;
}

var R = function (n, t) {
  return n ? (0, _preact.toChildArray)(n).reduce(function (n, e, r) {
    return n.concat(t(e, r));
  }, []) : null;
},
    F = {
  map: R,
  forEach: R,
  count: function (n) {
    return n ? (0, _preact.toChildArray)(n).length : 0;
  },
  only: function (n) {
    if (1 !== (n = (0, _preact.toChildArray)(n)).length) throw new Error("Children.only() expects only one child.");
    return n[0];
  },
  toArray: _preact.toChildArray
},
    N = _preact.options.__e;

exports.Children = F;

function U(n) {
  return n && ((n = w({}, n)).__c = null, n.__k = n.__k && n.__k.map(U)), n;
}

function M() {
  this.__u = 0, this.o = null, this.__b = null;
}

function L(n) {
  var t = n.__.__c;
  return t && t.u && t.u(n);
}

function O(n) {
  var t, e, r;

  function o(o) {
    if (t || (t = n()).then(function (n) {
      e = n.default || n;
    }, function (n) {
      r = n;
    }), r) throw r;
    if (!e) throw t;
    return (0, _preact.createElement)(e, o);
  }

  return o.displayName = "Lazy", o.t = !0, o;
}

function P() {
  this.i = null, this.l = null;
}

_preact.options.__e = function (n, t, e) {
  if (n.then) for (var r, o = t; o = o.__;) if ((r = o.__c) && r.__c) return r.__c(n, t.__c);
  N(n, t, e);
}, (M.prototype = new _preact.Component()).__c = function (n, t) {
  var e = this;
  null == e.o && (e.o = []), e.o.push(t);

  var r = L(e.__v),
      o = !1,
      u = function () {
    o || (o = !0, r ? r(i) : i());
  };

  t.__c = t.componentWillUnmount, t.componentWillUnmount = function () {
    u(), t.__c && t.__c();
  };

  var i = function () {
    var n;
    if (! --e.__u) for (e.__v.__k[0] = e.state.u, e.setState({
      u: e.__b = null
    }); n = e.o.pop();) n.forceUpdate();
  };

  e.__u++ || e.setState({
    u: e.__b = e.__v.__k[0]
  }), n.then(u, u);
}, M.prototype.render = function (n, t) {
  return this.__b && (this.__v.__k[0] = U(this.__b), this.__b = null), [(0, _preact.createElement)(_preact.Component, null, t.u ? null : n.children), t.u && n.fallback];
};

var W = function (n, t, e) {
  if (++e[1] === e[0] && n.l.delete(t), n.props.revealOrder && ("t" !== n.props.revealOrder[0] || !n.l.size)) for (e = n.i; e;) {
    for (; e.length > 3;) e.pop()();

    if (e[1] < e[0]) break;
    n.i = e = e[2];
  }
};

(P.prototype = new _preact.Component()).u = function (n) {
  var t = this,
      e = L(t.__v),
      r = t.l.get(n);
  return r[0]++, function (o) {
    var u = function () {
      t.props.revealOrder ? (r.push(o), W(t, n, r)) : o();
    };

    e ? e(u) : u();
  };
}, P.prototype.render = function (n) {
  this.i = null, this.l = new Map();
  var t = (0, _preact.toChildArray)(n.children);
  n.revealOrder && "b" === n.revealOrder[0] && t.reverse();

  for (var e = t.length; e--;) this.l.set(t[e], this.i = [1, 0, this.i]);

  return n.children;
}, P.prototype.componentDidUpdate = P.prototype.componentDidMount = function () {
  var n = this;
  n.l.forEach(function (t, e) {
    W(n, e, t);
  });
};

var j = function () {
  function n() {}

  var t = n.prototype;
  return t.getChildContext = function () {
    return this.props.context;
  }, t.render = function (n) {
    return n.children;
  }, n;
}();

function z(n) {
  var t = this,
      e = n.container,
      r = (0, _preact.createElement)(j, {
    context: t.context
  }, n.vnode);
  return t.s && t.s !== e && (t.v.parentNode && t.s.removeChild(t.v), (0, _preact._unmount)(t.h), t.p = !1), n.vnode ? t.p ? (e.__k = t.__k, (0, _preact.render)(r, e), t.__k = e.__k) : (t.v = document.createTextNode(""), (0, _preact.hydrate)("", e), e.appendChild(t.v), t.p = !0, t.s = e, (0, _preact.render)(r, e, t.v), t.__k = t.v.__k) : t.p && (t.v.parentNode && t.s.removeChild(t.v), (0, _preact._unmount)(t.h)), t.h = r, t.componentWillUnmount = function () {
    t.v.parentNode && t.s.removeChild(t.v), (0, _preact._unmount)(t.h);
  }, null;
}

function D(n, t) {
  return (0, _preact.createElement)(z, {
    vnode: n,
    container: t
  });
}

var H = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
_preact.Component.prototype.isReactComponent = {};
var T = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103;

function V(n, t, e) {
  if (null == t.__k) for (; t.firstChild;) t.removeChild(t.firstChild);
  return (0, _preact.render)(n, t), "function" == typeof e && e(), n ? n.__c : null;
}

function Z(n, t, e) {
  return (0, _preact.hydrate)(n, t), "function" == typeof e && e(), n ? n.__c : null;
}

var I = _preact.options.event;

function $(n, t) {
  n["UNSAFE_" + t] && !n[t] && Object.defineProperty(n, t, {
    configurable: !1,
    get: function () {
      return this["UNSAFE_" + t];
    },
    set: function (n) {
      this["UNSAFE_" + t] = n;
    }
  });
}

_preact.options.event = function (n) {
  I && (n = I(n)), n.persist = function () {};
  var t = !1,
      e = !1,
      r = n.stopPropagation;

  n.stopPropagation = function () {
    r.call(n), t = !0;
  };

  var o = n.preventDefault;
  return n.preventDefault = function () {
    o.call(n), e = !0;
  }, n.isPropagationStopped = function () {
    return t;
  }, n.isDefaultPrevented = function () {
    return e;
  }, n.nativeEvent = n;
};

var q = {
  configurable: !0,
  get: function () {
    return this.class;
  }
},
    B = _preact.options.vnode;

_preact.options.vnode = function (n) {
  n.$$typeof = T;
  var t = n.type,
      e = n.props;

  if (t) {
    if (e.class != e.className && (q.enumerable = "className" in e, null != e.className && (e.class = e.className), Object.defineProperty(e, "className", q)), "function" != typeof t) {
      var r, o, u;

      for (u in e.defaultValue && void 0 !== e.value && (e.value || 0 === e.value || (e.value = e.defaultValue), delete e.defaultValue), Array.isArray(e.value) && e.multiple && "select" === t && ((0, _preact.toChildArray)(e.children).forEach(function (n) {
        -1 != e.value.indexOf(n.props.value) && (n.props.selected = !0);
      }), delete e.value), e) if (r = H.test(u)) break;

      if (r) for (u in o = n.props = {}, e) o[H.test(u) ? u.replace(/[A-Z0-9]/, "-$&").toLowerCase() : u] = e[u];
    }

    !function (t) {
      var e = n.type,
          r = n.props;

      if (r && "string" == typeof e) {
        var o = {};

        for (var u in r) /^on(Ani|Tra|Tou)/.test(u) && (r[u.toLowerCase()] = r[u], delete r[u]), o[u.toLowerCase()] = u;

        if (o.ondoubleclick && (r.ondblclick = r[o.ondoubleclick], delete r[o.ondoubleclick]), o.onbeforeinput && (r.onbeforeinput = r[o.onbeforeinput], delete r[o.onbeforeinput]), o.onchange && ("textarea" === e || "input" === e.toLowerCase() && !/^fil|che|ra/i.test(r.type))) {
          var i = o.oninput || "oninput";
          r[i] || (r[i] = r[o.onchange], delete r[o.onchange]);
        }
      }
    }(), "function" == typeof t && !t.m && t.prototype && ($(t.prototype, "componentWillMount"), $(t.prototype, "componentWillReceiveProps"), $(t.prototype, "componentWillUpdate"), t.m = !0);
  }

  B && B(n);
};

var G = "16.8.0";
exports.version = G;

function J(n) {
  return _preact.createElement.bind(null, n);
}

function K(n) {
  return !!n && n.$$typeof === T;
}

function Q(n) {
  return K(n) ? _preact.cloneElement.apply(null, arguments) : n;
}

function X(n) {
  return !!n.__k && ((0, _preact.render)(null, n), !0);
}

function Y(n) {
  return n && (n.base || 1 === n.nodeType && n) || null;
}

var nn = function (n, t) {
  return n(t);
},
    tn = _preact.Fragment;

exports.StrictMode = tn;
exports.unstable_batchedUpdates = nn;
var _default = {
  useState: _hooks.useState,
  useReducer: _hooks.useReducer,
  useEffect: _hooks.useEffect,
  useLayoutEffect: _hooks.useLayoutEffect,
  useRef: _hooks.useRef,
  useImperativeHandle: _hooks.useImperativeHandle,
  useMemo: _hooks.useMemo,
  useCallback: _hooks.useCallback,
  useContext: _hooks.useContext,
  useDebugValue: _hooks.useDebugValue,
  version: "16.8.0",
  Children: F,
  render: V,
  hydrate: Z,
  unmountComponentAtNode: X,
  createPortal: D,
  createElement: _preact.createElement,
  createContext: _preact.createContext,
  createFactory: J,
  cloneElement: Q,
  createRef: _preact.createRef,
  Fragment: _preact.Fragment,
  isValidElement: K,
  findDOMNode: Y,
  Component: _preact.Component,
  PureComponent: E,
  memo: C,
  forwardRef: k,
  unstable_batchedUpdates: nn,
  StrictMode: _preact.Fragment,
  Suspense: M,
  SuspenseList: P,
  lazy: O
};
exports.default = _default;
},{"preact/hooks":"node_modules/preact/hooks/dist/hooks.module.js","preact":"node_modules/preact/dist/preact.module.js"}],"node_modules/@babel/runtime/helpers/arrayWithHoles.js":[function(require,module,exports) {
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;
},{}],"node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":[function(require,module,exports) {
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;
},{}],"node_modules/@babel/runtime/helpers/arrayLikeToArray.js":[function(require,module,exports) {
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;
},{}],"node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":[function(require,module,exports) {
var arrayLikeToArray = require("./arrayLikeToArray");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;
},{"./arrayLikeToArray":"node_modules/@babel/runtime/helpers/arrayLikeToArray.js"}],"node_modules/@babel/runtime/helpers/nonIterableRest.js":[function(require,module,exports) {
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;
},{}],"node_modules/@babel/runtime/helpers/slicedToArray.js":[function(require,module,exports) {
var arrayWithHoles = require("./arrayWithHoles");

var iterableToArrayLimit = require("./iterableToArrayLimit");

var unsupportedIterableToArray = require("./unsupportedIterableToArray");

var nonIterableRest = require("./nonIterableRest");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;
},{"./arrayWithHoles":"node_modules/@babel/runtime/helpers/arrayWithHoles.js","./iterableToArrayLimit":"node_modules/@babel/runtime/helpers/iterableToArrayLimit.js","./unsupportedIterableToArray":"node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js","./nonIterableRest":"node_modules/@babel/runtime/helpers/nonIterableRest.js"}],"src/ui/images/loading.gif":[function(require,module,exports) {
module.exports = "/loading.c72e719c.gif";
},{}],"src/ui/components/Spinner.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _loading = _interopRequireDefault(require("../images/loading.gif"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Spinner() {
  return /*#__PURE__*/_react.default.createElement("img", {
    src: _loading.default
  });
}

var _default = Spinner;
exports.default = _default;
},{"react":"node_modules/preact/compat/dist/compat.module.js","../images/loading.gif":"src/ui/images/loading.gif"}],"src/UniversityList.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _Spinner = _interopRequireDefault(require("ui/components/Spinner"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UniversityList = function UniversityList() {
  var _useState = (0, _react.useState)(null),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      error = _useState2[0],
      setError = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      isLoaded = _useState4[0],
      setIsLoaded = _useState4[1];

  var _useState5 = (0, _react.useState)([]),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      items = _useState6[0],
      setItems = _useState6[1];

  var _useState7 = (0, _react.useState)(""),
      _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
      searchFilter = _useState8[0],
      setFilter = _useState8[1];

  var _useState9 = (0, _react.useState)(["name"]),
      _useState10 = (0, _slicedToArray2.default)(_useState9, 1),
      searchParam = _useState10[0];

  (0, _react.useEffect)(function () {
    fetch("http://universities.hipolabs.com/search?country=Mexico").then(function (res) {
      return res.json();
    }).then(function (data) {
      setIsLoaded(true);
      setItems(data);
    }, function (error) {
      setIsLoaded(true);
      setError(error);
    });
  }, []);

  function search(items) {
    return items.filter(function (item) {
      return searchParam.some(function (newItem) {
        return item[newItem].toString().toLowerCase().indexOf(searchFilter.toLowerCase()) > -1;
      });
    });
  }

  if (error) {
    return /*#__PURE__*/_react.default.createElement("div", null, "Error: ", error.message);
  } else if (!isLoaded) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "center-screen"
    }, /*#__PURE__*/_react.default.createElement(_Spinner.default, null));
  } else {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "container"
    }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
      className: "row"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "col-md-6 col-sm-12"
    }, /*#__PURE__*/_react.default.createElement("h2", null, "Universidades")), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-md-6 col-sm-12 text-right"
    }, /*#__PURE__*/_react.default.createElement("label", {
      htmlFor: "search-form"
    }, /*#__PURE__*/_react.default.createElement("input", {
      type: "search",
      name: "search-form",
      id: "search-form",
      className: "form-control me-2",
      placeholder: "Encuentra tu universidad",
      value: searchFilter,
      onChange: function onChange(e) {
        return setFilter(e.target.value);
      }
    }))))), /*#__PURE__*/_react.default.createElement("div", {
      className: "d-flex flex-wrap"
    }, search(items).map(function (item) {
      return /*#__PURE__*/_react.default.createElement(UniveristyCard, {
        items: item
      });
    })));
  }
};

function UniveristyCard(props) {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "card",
    style: "width: 25rem;"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/_react.default.createElement("h5", {
    className: "card-title text-truncate",
    title: props.items.name
  }, props.items.name), /*#__PURE__*/_react.default.createElement("p", {
    className: "card-text"
  }, /*#__PURE__*/_react.default.createElement("b", null, "Ubicaci\xF3n:"), " ", props.items.country, /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("b", null, "Dominio:"), " ", props.items.domains), /*#__PURE__*/_react.default.createElement("a", {
    href: props.items.web_pages,
    className: "btn btn-primary",
    target: "_blank"
  }, "Visitar")));
}

var _default = UniversityList;
exports.default = _default;
},{"@babel/runtime/helpers/slicedToArray":"node_modules/@babel/runtime/helpers/slicedToArray.js","react":"node_modules/preact/compat/dist/compat.module.js","ui/components/Spinner":"src/ui/components/Spinner.js"}],"src/ui/images/logo.png":[function(require,module,exports) {
module.exports = "/logo.0eb3c795.png";
},{}],"src/ui/components/Header.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Header;

var _react = _interopRequireDefault(require("react"));

var _logo = _interopRequireDefault(require("../images/logo.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Header() {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("nav", {
    className: "navbar navbar-dark bg-dark"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "container-fluid"
  }, /*#__PURE__*/_react.default.createElement("a", {
    class: "navbar-brand",
    href: "/"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _logo.default
  })))));
}
},{"react":"node_modules/preact/compat/dist/compat.module.js","../images/logo.png":"src/ui/images/logo.png"}],"src/App.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = App;

var _react = _interopRequireDefault(require("react"));

var _UniversityList = _interopRequireDefault(require("./UniversityList"));

var _Header = _interopRequireDefault(require("ui/components/Header"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function App() {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Header.default, null), /*#__PURE__*/_react.default.createElement(_UniversityList.default, null));
}
},{"react":"node_modules/preact/compat/dist/compat.module.js","./UniversityList":"src/UniversityList.js","ui/components/Header":"src/ui/components/Header.js"}],"src/index.js":[function(require,module,exports) {
"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _App = _interopRequireDefault(require("./App"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ReactRoot() {
  return /*#__PURE__*/_react.default.createElement(_App.default, null);
}

_reactDom.default.render( /*#__PURE__*/_react.default.createElement(ReactRoot, null), document.getElementById("root"));
},{"react":"node_modules/preact/compat/dist/compat.module.js","react-dom":"node_modules/preact/compat/dist/compat.module.js","./App":"src/App.js"}],"node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "51271" + '/');

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
},{}]},{},["node_modules/parcel/src/builtins/hmr-runtime.js","src/index.js"], null)
//# sourceMappingURL=/src.a2b27638.js.map