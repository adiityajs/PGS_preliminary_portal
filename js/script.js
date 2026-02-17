var vh = (e) => {
  throw TypeError(e);
};
var $l = (e, t, n) => t.has(e) || vh("Cannot " + n);
var j = (e, t, n) => (
    $l(e, t, "read from private field"),
    n ? n.call(e) : t.get(e)
  ),
  J = (e, t, n) =>
    t.has(e)
      ? vh("Cannot add the same private member more than once")
      : t instanceof WeakSet
        ? t.add(e)
        : t.set(e, n),
  H = (e, t, n, r) => (
    $l(e, t, "write to private field"),
    r ? r.call(e, n) : t.set(e, n),
    n
  ),
  Le = (e, t, n) => ($l(e, t, "access private method"), n);
var No = (e, t, n, r) => ({
  set _(s) {
    H(e, t, s, n);
  },
  get _() {
    return j(e, t, r);
  },
});
function Lw(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const s in r)
        if (s !== "default" && !(s in e)) {
          const i = Object.getOwnPropertyDescriptor(r, s);
          i &&
            Object.defineProperty(
              e,
              s,
              i.get ? i : { enumerable: !0, get: () => r[s] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) r(s);
  new MutationObserver((s) => {
    for (const i of s)
      if (i.type === "childList")
        for (const o of i.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(s) {
    const i = {};
    return (
      s.integrity && (i.integrity = s.integrity),
      s.referrerPolicy && (i.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : s.crossOrigin === "anonymous"
          ? (i.credentials = "omit")
          : (i.credentials = "same-origin"),
      i
    );
  }
  function r(s) {
    if (s.ep) return;
    s.ep = !0;
    const i = n(s);
    fetch(s.href, i);
  }
})();
function _g(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var zg = { exports: {} },
  ol = {},
  Bg = { exports: {} },
  X = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ho = Symbol.for("react.element"),
  Ow = Symbol.for("react.portal"),
  Iw = Symbol.for("react.fragment"),
  Fw = Symbol.for("react.strict_mode"),
  Vw = Symbol.for("react.profiler"),
  _w = Symbol.for("react.provider"),
  zw = Symbol.for("react.context"),
  Bw = Symbol.for("react.forward_ref"),
  $w = Symbol.for("react.suspense"),
  Uw = Symbol.for("react.memo"),
  Ww = Symbol.for("react.lazy"),
  xh = Symbol.iterator;
function Hw(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (xh && e[xh]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var $g = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Ug = Object.assign,
  Wg = {};
function Us(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = Wg),
    (this.updater = n || $g));
}
Us.prototype.isReactComponent = {};
Us.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Us.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Hg() {}
Hg.prototype = Us.prototype;
function vd(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = Wg),
    (this.updater = n || $g));
}
var xd = (vd.prototype = new Hg());
xd.constructor = vd;
Ug(xd, Us.prototype);
xd.isPureReactComponent = !0;
var wh = Array.isArray,
  Kg = Object.prototype.hasOwnProperty,
  wd = { current: null },
  Yg = { key: !0, ref: !0, __self: !0, __source: !0 };
function Gg(e, t, n) {
  var r,
    s = {},
    i = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      Kg.call(t, r) && !Yg.hasOwnProperty(r) && (s[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) s.children = n;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    s.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) s[r] === void 0 && (s[r] = a[r]);
  return {
    $$typeof: ho,
    type: e,
    key: i,
    ref: o,
    props: s,
    _owner: wd.current,
  };
}
function Kw(e, t) {
  return {
    $$typeof: ho,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function bd(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ho;
}
function Yw(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var bh = /\/+/g;
function Ul(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Yw("" + e.key)
    : t.toString(36);
}
function na(e, t, n, r, s) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (i) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case ho:
          case Ow:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (s = s(o)),
      (e = r === "" ? "." + Ul(o, 0) : r),
      wh(s)
        ? ((n = ""),
          e != null && (n = e.replace(bh, "$&/") + "/"),
          na(s, t, n, "", function (u) {
            return u;
          }))
        : s != null &&
          (bd(s) &&
            (s = Kw(
              s,
              n +
                (!s.key || (o && o.key === s.key)
                  ? ""
                  : ("" + s.key).replace(bh, "$&/") + "/") +
                e,
            )),
          t.push(s)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), wh(e)))
    for (var a = 0; a < e.length; a++) {
      i = e[a];
      var l = r + Ul(i, a);
      o += na(i, t, n, l, s);
    }
  else if (((l = Hw(e)), typeof l == "function"))
    for (e = l.call(e), a = 0; !(i = e.next()).done; )
      ((i = i.value), (l = r + Ul(i, a++)), (o += na(i, t, n, l, s)));
  else if (i === "object")
    throw (
      (t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead.",
      )
    );
  return o;
}
function Ro(e, t, n) {
  if (e == null) return e;
  var r = [],
    s = 0;
  return (
    na(e, r, "", "", function (i) {
      return t.call(n, i, s++);
    }),
    r
  );
}
function Gw(e) {
  if (e._status === -1) {
    var t = e._result;
    ((t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t)));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Ye = { current: null },
  ra = { transition: null },
  Qw = {
    ReactCurrentDispatcher: Ye,
    ReactCurrentBatchConfig: ra,
    ReactCurrentOwner: wd,
  };
function Qg() {
  throw Error("act(...) is not supported in production builds of React.");
}
X.Children = {
  map: Ro,
  forEach: function (e, t, n) {
    Ro(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Ro(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Ro(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!bd(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
X.Component = Us;
X.Fragment = Iw;
X.Profiler = Vw;
X.PureComponent = vd;
X.StrictMode = Fw;
X.Suspense = $w;
X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Qw;
X.act = Qg;
X.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = Ug({}, e.props),
    s = e.key,
    i = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (o = wd.current)),
      t.key !== void 0 && (s = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (l in t)
      Kg.call(t, l) &&
        !Yg.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: ho, type: e.type, key: s, ref: i, props: r, _owner: o };
};
X.createContext = function (e) {
  return (
    (e = {
      $$typeof: zw,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: _w, _context: e }),
    (e.Consumer = e)
  );
};
X.createElement = Gg;
X.createFactory = function (e) {
  var t = Gg.bind(null, e);
  return ((t.type = e), t);
};
X.createRef = function () {
  return { current: null };
};
X.forwardRef = function (e) {
  return { $$typeof: Bw, render: e };
};
X.isValidElement = bd;
X.lazy = function (e) {
  return { $$typeof: Ww, _payload: { _status: -1, _result: e }, _init: Gw };
};
X.memo = function (e, t) {
  return { $$typeof: Uw, type: e, compare: t === void 0 ? null : t };
};
X.startTransition = function (e) {
  var t = ra.transition;
  ra.transition = {};
  try {
    e();
  } finally {
    ra.transition = t;
  }
};
X.unstable_act = Qg;
X.useCallback = function (e, t) {
  return Ye.current.useCallback(e, t);
};
X.useContext = function (e) {
  return Ye.current.useContext(e);
};
X.useDebugValue = function () {};
X.useDeferredValue = function (e) {
  return Ye.current.useDeferredValue(e);
};
X.useEffect = function (e, t) {
  return Ye.current.useEffect(e, t);
};
X.useId = function () {
  return Ye.current.useId();
};
X.useImperativeHandle = function (e, t, n) {
  return Ye.current.useImperativeHandle(e, t, n);
};
X.useInsertionEffect = function (e, t) {
  return Ye.current.useInsertionEffect(e, t);
};
X.useLayoutEffect = function (e, t) {
  return Ye.current.useLayoutEffect(e, t);
};
X.useMemo = function (e, t) {
  return Ye.current.useMemo(e, t);
};
X.useReducer = function (e, t, n) {
  return Ye.current.useReducer(e, t, n);
};
X.useRef = function (e) {
  return Ye.current.useRef(e);
};
X.useState = function (e) {
  return Ye.current.useState(e);
};
X.useSyncExternalStore = function (e, t, n) {
  return Ye.current.useSyncExternalStore(e, t, n);
};
X.useTransition = function () {
  return Ye.current.useTransition();
};
X.version = "18.3.1";
Bg.exports = X;
var w = Bg.exports;
const D = _g(w),
  Xg = Lw({ __proto__: null, default: D }, [w]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Xw = w,
  qw = Symbol.for("react.element"),
  Zw = Symbol.for("react.fragment"),
  Jw = Object.prototype.hasOwnProperty,
  eb = Xw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  tb = { key: !0, ref: !0, __self: !0, __source: !0 };
function qg(e, t, n) {
  var r,
    s = {},
    i = null,
    o = null;
  (n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (o = t.ref));
  for (r in t) Jw.call(t, r) && !tb.hasOwnProperty(r) && (s[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) s[r] === void 0 && (s[r] = t[r]);
  return {
    $$typeof: qw,
    type: e,
    key: i,
    ref: o,
    props: s,
    _owner: eb.current,
  };
}
ol.Fragment = Zw;
ol.jsx = qg;
ol.jsxs = qg;
zg.exports = ol;
var f = zg.exports,
  Zg = { exports: {} },
  lt = {},
  Jg = { exports: {} },
  ey = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(k, N) {
    var O = k.length;
    k.push(N);
    e: for (; 0 < O; ) {
      var U = (O - 1) >>> 1,
        B = k[U];
      if (0 < s(B, N)) ((k[U] = N), (k[O] = B), (O = U));
      else break e;
    }
  }
  function n(k) {
    return k.length === 0 ? null : k[0];
  }
  function r(k) {
    if (k.length === 0) return null;
    var N = k[0],
      O = k.pop();
    if (O !== N) {
      k[0] = O;
      e: for (var U = 0, B = k.length, Q = B >>> 1; U < Q; ) {
        var q = 2 * (U + 1) - 1,
          xe = k[q],
          De = q + 1,
          ee = k[De];
        if (0 > s(xe, O))
          De < B && 0 > s(ee, xe)
            ? ((k[U] = ee), (k[De] = O), (U = De))
            : ((k[U] = xe), (k[q] = O), (U = q));
        else if (De < B && 0 > s(ee, O)) ((k[U] = ee), (k[De] = O), (U = De));
        else break e;
      }
    }
    return N;
  }
  function s(k, N) {
    var O = k.sortIndex - N.sortIndex;
    return O !== 0 ? O : k.id - N.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var o = Date,
      a = o.now();
    e.unstable_now = function () {
      return o.now() - a;
    };
  }
  var l = [],
    u = [],
    c = 1,
    d = null,
    h = 3,
    p = !1,
    x = !1,
    v = !1,
    b = typeof setTimeout == "function" ? setTimeout : null,
    g = typeof clearTimeout == "function" ? clearTimeout : null,
    m = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function y(k) {
    for (var N = n(u); N !== null; ) {
      if (N.callback === null) r(u);
      else if (N.startTime <= k)
        (r(u), (N.sortIndex = N.expirationTime), t(l, N));
      else break;
      N = n(u);
    }
  }
  function S(k) {
    if (((v = !1), y(k), !x))
      if (n(l) !== null) ((x = !0), $(C));
      else {
        var N = n(u);
        N !== null && _(S, N.startTime - k);
      }
  }
  function C(k, N) {
    ((x = !1), v && ((v = !1), g(T), (T = -1)), (p = !0));
    var O = h;
    try {
      for (
        y(N), d = n(l);
        d !== null && (!(d.expirationTime > N) || (k && !z()));
      ) {
        var U = d.callback;
        if (typeof U == "function") {
          ((d.callback = null), (h = d.priorityLevel));
          var B = U(d.expirationTime <= N);
          ((N = e.unstable_now()),
            typeof B == "function" ? (d.callback = B) : d === n(l) && r(l),
            y(N));
        } else r(l);
        d = n(l);
      }
      if (d !== null) var Q = !0;
      else {
        var q = n(u);
        (q !== null && _(S, q.startTime - N), (Q = !1));
      }
      return Q;
    } finally {
      ((d = null), (h = O), (p = !1));
    }
  }
  var E = !1,
    P = null,
    T = -1,
    R = 5,
    A = -1;
  function z() {
    return !(e.unstable_now() - A < R);
  }
  function I() {
    if (P !== null) {
      var k = e.unstable_now();
      A = k;
      var N = !0;
      try {
        N = P(!0, k);
      } finally {
        N ? Y() : ((E = !1), (P = null));
      }
    } else E = !1;
  }
  var Y;
  if (typeof m == "function")
    Y = function () {
      m(I);
    };
  else if (typeof MessageChannel < "u") {
    var L = new MessageChannel(),
      G = L.port2;
    ((L.port1.onmessage = I),
      (Y = function () {
        G.postMessage(null);
      }));
  } else
    Y = function () {
      b(I, 0);
    };
  function $(k) {
    ((P = k), E || ((E = !0), Y()));
  }
  function _(k, N) {
    T = b(function () {
      k(e.unstable_now());
    }, N);
  }
  ((e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (k) {
      k.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      x || p || ((x = !0), $(C));
    }),
    (e.unstable_forceFrameRate = function (k) {
      0 > k || 125 < k
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (R = 0 < k ? Math.floor(1e3 / k) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (k) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var N = 3;
          break;
        default:
          N = h;
      }
      var O = h;
      h = N;
      try {
        return k();
      } finally {
        h = O;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (k, N) {
      switch (k) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          k = 3;
      }
      var O = h;
      h = k;
      try {
        return N();
      } finally {
        h = O;
      }
    }),
    (e.unstable_scheduleCallback = function (k, N, O) {
      var U = e.unstable_now();
      switch (
        (typeof O == "object" && O !== null
          ? ((O = O.delay), (O = typeof O == "number" && 0 < O ? U + O : U))
          : (O = U),
        k)
      ) {
        case 1:
          var B = -1;
          break;
        case 2:
          B = 250;
          break;
        case 5:
          B = 1073741823;
          break;
        case 4:
          B = 1e4;
          break;
        default:
          B = 5e3;
      }
      return (
        (B = O + B),
        (k = {
          id: c++,
          callback: N,
          priorityLevel: k,
          startTime: O,
          expirationTime: B,
          sortIndex: -1,
        }),
        O > U
          ? ((k.sortIndex = O),
            t(u, k),
            n(l) === null &&
              k === n(u) &&
              (v ? (g(T), (T = -1)) : (v = !0), _(S, O - U)))
          : ((k.sortIndex = B), t(l, k), x || p || ((x = !0), $(C))),
        k
      );
    }),
    (e.unstable_shouldYield = z),
    (e.unstable_wrapCallback = function (k) {
      var N = h;
      return function () {
        var O = h;
        h = N;
        try {
          return k.apply(this, arguments);
        } finally {
          h = O;
        }
      };
    }));
})(ey);
Jg.exports = ey;
var nb = Jg.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var rb = w,
  at = nb;
function M(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var ty = new Set(),
  Oi = {};
function Br(e, t) {
  (Ms(e, t), Ms(e + "Capture", t));
}
function Ms(e, t) {
  for (Oi[e] = t, e = 0; e < t.length; e++) ty.add(t[e]);
}
var cn = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  _u = Object.prototype.hasOwnProperty,
  sb =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Sh = {},
  Ch = {};
function ib(e) {
  return _u.call(Ch, e)
    ? !0
    : _u.call(Sh, e)
      ? !1
      : sb.test(e)
        ? (Ch[e] = !0)
        : ((Sh[e] = !0), !1);
}
function ob(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function ab(e, t, n, r) {
  if (t === null || typeof t > "u" || ob(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Ge(e, t, n, r, s, i, o) {
  ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = s),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = o));
}
var Me = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Me[e] = new Ge(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Me[t] = new Ge(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Me[e] = new Ge(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Me[e] = new Ge(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Me[e] = new Ge(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Me[e] = new Ge(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Me[e] = new Ge(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Me[e] = new Ge(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Me[e] = new Ge(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Sd = /[\-:]([a-z])/g;
function Cd(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Sd, Cd);
    Me[t] = new Ge(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Sd, Cd);
    Me[t] = new Ge(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Sd, Cd);
  Me[t] = new Ge(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Me[e] = new Ge(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Me.xlinkHref = new Ge(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Me[e] = new Ge(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ed(e, t, n, r) {
  var s = Me.hasOwnProperty(t) ? Me[t] : null;
  (s !== null
    ? s.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (ab(t, n, s, r) && (n = null),
    r || s === null
      ? ib(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : s.mustUseProperty
        ? (e[s.propertyName] = n === null ? (s.type === 3 ? !1 : "") : n)
        : ((t = s.attributeName),
          (r = s.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((s = s.type),
              (n = s === 3 || (s === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var yn = rb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Ao = Symbol.for("react.element"),
  Jr = Symbol.for("react.portal"),
  es = Symbol.for("react.fragment"),
  Pd = Symbol.for("react.strict_mode"),
  zu = Symbol.for("react.profiler"),
  ny = Symbol.for("react.provider"),
  ry = Symbol.for("react.context"),
  Td = Symbol.for("react.forward_ref"),
  Bu = Symbol.for("react.suspense"),
  $u = Symbol.for("react.suspense_list"),
  kd = Symbol.for("react.memo"),
  Rn = Symbol.for("react.lazy"),
  sy = Symbol.for("react.offscreen"),
  Eh = Symbol.iterator;
function ri(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Eh && e[Eh]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var me = Object.assign,
  Wl;
function pi(e) {
  if (Wl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Wl = (t && t[1]) || "";
    }
  return (
    `
` +
    Wl +
    e
  );
}
var Hl = !1;
function Kl(e, t) {
  if (!e || Hl) return "";
  Hl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var s = u.stack.split(`
`),
          i = r.stack.split(`
`),
          o = s.length - 1,
          a = i.length - 1;
        1 <= o && 0 <= a && s[o] !== i[a];
      )
        a--;
      for (; 1 <= o && 0 <= a; o--, a--)
        if (s[o] !== i[a]) {
          if (o !== 1 || a !== 1)
            do
              if ((o--, a--, 0 > a || s[o] !== i[a])) {
                var l =
                  `
` + s[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= o && 0 <= a);
          break;
        }
    }
  } finally {
    ((Hl = !1), (Error.prepareStackTrace = n));
  }
  return (e = e ? e.displayName || e.name : "") ? pi(e) : "";
}
function lb(e) {
  switch (e.tag) {
    case 5:
      return pi(e.type);
    case 16:
      return pi("Lazy");
    case 13:
      return pi("Suspense");
    case 19:
      return pi("SuspenseList");
    case 0:
    case 2:
    case 15:
      return ((e = Kl(e.type, !1)), e);
    case 11:
      return ((e = Kl(e.type.render, !1)), e);
    case 1:
      return ((e = Kl(e.type, !0)), e);
    default:
      return "";
  }
}
function Uu(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case es:
      return "Fragment";
    case Jr:
      return "Portal";
    case zu:
      return "Profiler";
    case Pd:
      return "StrictMode";
    case Bu:
      return "Suspense";
    case $u:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case ry:
        return (e.displayName || "Context") + ".Consumer";
      case ny:
        return (e._context.displayName || "Context") + ".Provider";
      case Td:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case kd:
        return (
          (t = e.displayName || null),
          t !== null ? t : Uu(e.type) || "Memo"
        );
      case Rn:
        ((t = e._payload), (e = e._init));
        try {
          return Uu(e(t));
        } catch {}
    }
  return null;
}
function ub(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Uu(t);
    case 8:
      return t === Pd ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Jn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function iy(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function cb(e) {
  var t = iy(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var s = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return s.call(this);
        },
        set: function (o) {
          ((r = "" + o), i.call(this, o));
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          ((e._valueTracker = null), delete e[t]);
        },
      }
    );
  }
}
function Mo(e) {
  e._valueTracker || (e._valueTracker = cb(e));
}
function oy(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = iy(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function ba(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Wu(e, t) {
  var n = t.checked;
  return me({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Ph(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  ((n = Jn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    }));
}
function ay(e, t) {
  ((t = t.checked), t != null && Ed(e, "checked", t, !1));
}
function Hu(e, t) {
  ay(e, t);
  var n = Jn(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  (t.hasOwnProperty("value")
    ? Ku(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Ku(e, t.type, Jn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked));
}
function Th(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    ((t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t));
  }
  ((n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n));
}
function Ku(e, t, n) {
  (t !== "number" || ba(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var mi = Array.isArray;
function ms(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var s = 0; s < n.length; s++) t["$" + n[s]] = !0;
    for (n = 0; n < e.length; n++)
      ((s = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== s && (e[n].selected = s),
        s && r && (e[n].defaultSelected = !0));
  } else {
    for (n = "" + Jn(n), t = null, s = 0; s < e.length; s++) {
      if (e[s].value === n) {
        ((e[s].selected = !0), r && (e[s].defaultSelected = !0));
        return;
      }
      t !== null || e[s].disabled || (t = e[s]);
    }
    t !== null && (t.selected = !0);
  }
}
function Yu(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(M(91));
  return me({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function kh(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(M(92));
      if (mi(n)) {
        if (1 < n.length) throw Error(M(93));
        n = n[0];
      }
      t = n;
    }
    (t == null && (t = ""), (n = t));
  }
  e._wrapperState = { initialValue: Jn(n) };
}
function ly(e, t) {
  var n = Jn(t.value),
    r = Jn(t.defaultValue);
  (n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r));
}
function jh(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function uy(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Gu(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? uy(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var Do,
  cy = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, s) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, s);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Do = Do || document.createElement("div"),
          Do.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Do.firstChild;
        e.firstChild;
      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Ii(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var wi = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  db = ["Webkit", "ms", "Moz", "O"];
Object.keys(wi).forEach(function (e) {
  db.forEach(function (t) {
    ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (wi[t] = wi[e]));
  });
});
function dy(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (wi.hasOwnProperty(e) && wi[e])
      ? ("" + t).trim()
      : t + "px";
}
function fy(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        s = dy(n, t[n], r);
      (n === "float" && (n = "cssFloat"), r ? e.setProperty(n, s) : (e[n] = s));
    }
}
var fb = me(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function Qu(e, t) {
  if (t) {
    if (fb[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(M(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(M(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(M(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(M(62));
  }
}
function Xu(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var qu = null;
function jd(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Zu = null,
  gs = null,
  ys = null;
function Nh(e) {
  if ((e = go(e))) {
    if (typeof Zu != "function") throw Error(M(280));
    var t = e.stateNode;
    t && ((t = dl(t)), Zu(e.stateNode, e.type, t));
  }
}
function hy(e) {
  gs ? (ys ? ys.push(e) : (ys = [e])) : (gs = e);
}
function py() {
  if (gs) {
    var e = gs,
      t = ys;
    if (((ys = gs = null), Nh(e), t)) for (e = 0; e < t.length; e++) Nh(t[e]);
  }
}
function my(e, t) {
  return e(t);
}
function gy() {}
var Yl = !1;
function yy(e, t, n) {
  if (Yl) return e(t, n);
  Yl = !0;
  try {
    return my(e, t, n);
  } finally {
    ((Yl = !1), (gs !== null || ys !== null) && (gy(), py()));
  }
}
function Fi(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = dl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      ((r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r));
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(M(231, t, typeof n));
  return n;
}
var Ju = !1;
if (cn)
  try {
    var si = {};
    (Object.defineProperty(si, "passive", {
      get: function () {
        Ju = !0;
      },
    }),
      window.addEventListener("test", si, si),
      window.removeEventListener("test", si, si));
  } catch {
    Ju = !1;
  }
function hb(e, t, n, r, s, i, o, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var bi = !1,
  Sa = null,
  Ca = !1,
  ec = null,
  pb = {
    onError: function (e) {
      ((bi = !0), (Sa = e));
    },
  };
function mb(e, t, n, r, s, i, o, a, l) {
  ((bi = !1), (Sa = null), hb.apply(pb, arguments));
}
function gb(e, t, n, r, s, i, o, a, l) {
  if ((mb.apply(this, arguments), bi)) {
    if (bi) {
      var u = Sa;
      ((bi = !1), (Sa = null));
    } else throw Error(M(198));
    Ca || ((Ca = !0), (ec = u));
  }
}
function $r(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do ((t = e), t.flags & 4098 && (n = t.return), (e = t.return));
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function vy(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Rh(e) {
  if ($r(e) !== e) throw Error(M(188));
}
function yb(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = $r(e)), t === null)) throw Error(M(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var s = n.return;
    if (s === null) break;
    var i = s.alternate;
    if (i === null) {
      if (((r = s.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (s.child === i.child) {
      for (i = s.child; i; ) {
        if (i === n) return (Rh(s), e);
        if (i === r) return (Rh(s), t);
        i = i.sibling;
      }
      throw Error(M(188));
    }
    if (n.return !== r.return) ((n = s), (r = i));
    else {
      for (var o = !1, a = s.child; a; ) {
        if (a === n) {
          ((o = !0), (n = s), (r = i));
          break;
        }
        if (a === r) {
          ((o = !0), (r = s), (n = i));
          break;
        }
        a = a.sibling;
      }
      if (!o) {
        for (a = i.child; a; ) {
          if (a === n) {
            ((o = !0), (n = i), (r = s));
            break;
          }
          if (a === r) {
            ((o = !0), (r = i), (n = s));
            break;
          }
          a = a.sibling;
        }
        if (!o) throw Error(M(189));
      }
    }
    if (n.alternate !== r) throw Error(M(190));
  }
  if (n.tag !== 3) throw Error(M(188));
  return n.stateNode.current === n ? e : t;
}
function xy(e) {
  return ((e = yb(e)), e !== null ? wy(e) : null);
}
function wy(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = wy(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var by = at.unstable_scheduleCallback,
  Ah = at.unstable_cancelCallback,
  vb = at.unstable_shouldYield,
  xb = at.unstable_requestPaint,
  ve = at.unstable_now,
  wb = at.unstable_getCurrentPriorityLevel,
  Nd = at.unstable_ImmediatePriority,
  Sy = at.unstable_UserBlockingPriority,
  Ea = at.unstable_NormalPriority,
  bb = at.unstable_LowPriority,
  Cy = at.unstable_IdlePriority,
  al = null,
  Yt = null;
function Sb(e) {
  if (Yt && typeof Yt.onCommitFiberRoot == "function")
    try {
      Yt.onCommitFiberRoot(al, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Lt = Math.clz32 ? Math.clz32 : Pb,
  Cb = Math.log,
  Eb = Math.LN2;
function Pb(e) {
  return ((e >>>= 0), e === 0 ? 32 : (31 - ((Cb(e) / Eb) | 0)) | 0);
}
var Lo = 64,
  Oo = 4194304;
function gi(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Pa(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    s = e.suspendedLanes,
    i = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var a = o & ~s;
    a !== 0 ? (r = gi(a)) : ((i &= o), i !== 0 && (r = gi(i)));
  } else ((o = n & ~s), o !== 0 ? (r = gi(o)) : i !== 0 && (r = gi(i)));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & s) &&
    ((s = r & -r), (i = t & -t), s >= i || (s === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      ((n = 31 - Lt(t)), (s = 1 << n), (r |= e[n]), (t &= ~s));
  return r;
}
function Tb(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function kb(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      s = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;
  ) {
    var o = 31 - Lt(i),
      a = 1 << o,
      l = s[o];
    (l === -1
      ? (!(a & n) || a & r) && (s[o] = Tb(a, t))
      : l <= t && (e.expiredLanes |= a),
      (i &= ~a));
  }
}
function tc(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Ey() {
  var e = Lo;
  return ((Lo <<= 1), !(Lo & 4194240) && (Lo = 64), e);
}
function Gl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function po(e, t, n) {
  ((e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Lt(t)),
    (e[t] = n));
}
function jb(e, t) {
  var n = e.pendingLanes & ~t;
  ((e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements));
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var s = 31 - Lt(n),
      i = 1 << s;
    ((t[s] = 0), (r[s] = -1), (e[s] = -1), (n &= ~i));
  }
}
function Rd(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Lt(n),
      s = 1 << r;
    ((s & t) | (e[r] & t) && (e[r] |= t), (n &= ~s));
  }
}
var te = 0;
function Py(e) {
  return (
    (e &= -e),
    1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
  );
}
var Ty,
  Ad,
  ky,
  jy,
  Ny,
  nc = !1,
  Io = [],
  Wn = null,
  Hn = null,
  Kn = null,
  Vi = new Map(),
  _i = new Map(),
  Mn = [],
  Nb =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function Mh(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Wn = null;
      break;
    case "dragenter":
    case "dragleave":
      Hn = null;
      break;
    case "mouseover":
    case "mouseout":
      Kn = null;
      break;
    case "pointerover":
    case "pointerout":
      Vi.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      _i.delete(t.pointerId);
  }
}
function ii(e, t, n, r, s, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [s],
      }),
      t !== null && ((t = go(t)), t !== null && Ad(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      s !== null && t.indexOf(s) === -1 && t.push(s),
      e);
}
function Rb(e, t, n, r, s) {
  switch (t) {
    case "focusin":
      return ((Wn = ii(Wn, e, t, n, r, s)), !0);
    case "dragenter":
      return ((Hn = ii(Hn, e, t, n, r, s)), !0);
    case "mouseover":
      return ((Kn = ii(Kn, e, t, n, r, s)), !0);
    case "pointerover":
      var i = s.pointerId;
      return (Vi.set(i, ii(Vi.get(i) || null, e, t, n, r, s)), !0);
    case "gotpointercapture":
      return (
        (i = s.pointerId),
        _i.set(i, ii(_i.get(i) || null, e, t, n, r, s)),
        !0
      );
  }
  return !1;
}
function Ry(e) {
  var t = wr(e.target);
  if (t !== null) {
    var n = $r(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = vy(n)), t !== null)) {
          ((e.blockedOn = t),
            Ny(e.priority, function () {
              ky(n);
            }));
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function sa(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = rc(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ((qu = r), n.target.dispatchEvent(r), (qu = null));
    } else return ((t = go(n)), t !== null && Ad(t), (e.blockedOn = n), !1);
    t.shift();
  }
  return !0;
}
function Dh(e, t, n) {
  sa(e) && n.delete(t);
}
function Ab() {
  ((nc = !1),
    Wn !== null && sa(Wn) && (Wn = null),
    Hn !== null && sa(Hn) && (Hn = null),
    Kn !== null && sa(Kn) && (Kn = null),
    Vi.forEach(Dh),
    _i.forEach(Dh));
}
function oi(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    nc ||
      ((nc = !0),
      at.unstable_scheduleCallback(at.unstable_NormalPriority, Ab)));
}
function zi(e) {
  function t(s) {
    return oi(s, e);
  }
  if (0 < Io.length) {
    oi(Io[0], e);
    for (var n = 1; n < Io.length; n++) {
      var r = Io[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Wn !== null && oi(Wn, e),
      Hn !== null && oi(Hn, e),
      Kn !== null && oi(Kn, e),
      Vi.forEach(t),
      _i.forEach(t),
      n = 0;
    n < Mn.length;
    n++
  )
    ((r = Mn[n]), r.blockedOn === e && (r.blockedOn = null));
  for (; 0 < Mn.length && ((n = Mn[0]), n.blockedOn === null); )
    (Ry(n), n.blockedOn === null && Mn.shift());
}
var vs = yn.ReactCurrentBatchConfig,
  Ta = !0;
function Mb(e, t, n, r) {
  var s = te,
    i = vs.transition;
  vs.transition = null;
  try {
    ((te = 1), Md(e, t, n, r));
  } finally {
    ((te = s), (vs.transition = i));
  }
}
function Db(e, t, n, r) {
  var s = te,
    i = vs.transition;
  vs.transition = null;
  try {
    ((te = 4), Md(e, t, n, r));
  } finally {
    ((te = s), (vs.transition = i));
  }
}
function Md(e, t, n, r) {
  if (Ta) {
    var s = rc(e, t, n, r);
    if (s === null) (su(e, t, r, ka, n), Mh(e, r));
    else if (Rb(s, e, t, n, r)) r.stopPropagation();
    else if ((Mh(e, r), t & 4 && -1 < Nb.indexOf(e))) {
      for (; s !== null; ) {
        var i = go(s);
        if (
          (i !== null && Ty(i),
          (i = rc(e, t, n, r)),
          i === null && su(e, t, r, ka, n),
          i === s)
        )
          break;
        s = i;
      }
      s !== null && r.stopPropagation();
    } else su(e, t, r, null, n);
  }
}
var ka = null;
function rc(e, t, n, r) {
  if (((ka = null), (e = jd(r)), (e = wr(e)), e !== null))
    if (((t = $r(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = vy(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return ((ka = e), null);
}
function Ay(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (wb()) {
        case Nd:
          return 1;
        case Sy:
          return 4;
        case Ea:
        case bb:
          return 16;
        case Cy:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var zn = null,
  Dd = null,
  ia = null;
function My() {
  if (ia) return ia;
  var e,
    t = Dd,
    n = t.length,
    r,
    s = "value" in zn ? zn.value : zn.textContent,
    i = s.length;
  for (e = 0; e < n && t[e] === s[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === s[i - r]; r++);
  return (ia = s.slice(e, 1 < r ? 1 - r : void 0));
}
function oa(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Fo() {
  return !0;
}
function Lh() {
  return !1;
}
function ut(e) {
  function t(n, r, s, i, o) {
    ((this._reactName = n),
      (this._targetInst = s),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = o),
      (this.currentTarget = null));
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(i) : i[a]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Fo
        : Lh),
      (this.isPropagationStopped = Lh),
      this
    );
  }
  return (
    me(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Fo));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Fo));
      },
      persist: function () {},
      isPersistent: Fo,
    }),
    t
  );
}
var Ws = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Ld = ut(Ws),
  mo = me({}, Ws, { view: 0, detail: 0 }),
  Lb = ut(mo),
  Ql,
  Xl,
  ai,
  ll = me({}, mo, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Od,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== ai &&
            (ai && e.type === "mousemove"
              ? ((Ql = e.screenX - ai.screenX), (Xl = e.screenY - ai.screenY))
              : (Xl = Ql = 0),
            (ai = e)),
          Ql);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Xl;
    },
  }),
  Oh = ut(ll),
  Ob = me({}, ll, { dataTransfer: 0 }),
  Ib = ut(Ob),
  Fb = me({}, mo, { relatedTarget: 0 }),
  ql = ut(Fb),
  Vb = me({}, Ws, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  _b = ut(Vb),
  zb = me({}, Ws, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Bb = ut(zb),
  $b = me({}, Ws, { data: 0 }),
  Ih = ut($b),
  Ub = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Wb = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Hb = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Kb(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Hb[e]) ? !!t[e] : !1;
}
function Od() {
  return Kb;
}
var Yb = me({}, mo, {
    key: function (e) {
      if (e.key) {
        var t = Ub[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = oa(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? Wb[e.keyCode] || "Unidentified"
          : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Od,
    charCode: function (e) {
      return e.type === "keypress" ? oa(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? oa(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  Gb = ut(Yb),
  Qb = me({}, ll, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Fh = ut(Qb),
  Xb = me({}, mo, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Od,
  }),
  qb = ut(Xb),
  Zb = me({}, Ws, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Jb = ut(Zb),
  eS = me({}, ll, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  tS = ut(eS),
  nS = [9, 13, 27, 32],
  Id = cn && "CompositionEvent" in window,
  Si = null;
cn && "documentMode" in document && (Si = document.documentMode);
var rS = cn && "TextEvent" in window && !Si,
  Dy = cn && (!Id || (Si && 8 < Si && 11 >= Si)),
  Vh = " ",
  _h = !1;
function Ly(e, t) {
  switch (e) {
    case "keyup":
      return nS.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Oy(e) {
  return ((e = e.detail), typeof e == "object" && "data" in e ? e.data : null);
}
var ts = !1;
function sS(e, t) {
  switch (e) {
    case "compositionend":
      return Oy(t);
    case "keypress":
      return t.which !== 32 ? null : ((_h = !0), Vh);
    case "textInput":
      return ((e = t.data), e === Vh && _h ? null : e);
    default:
      return null;
  }
}
function iS(e, t) {
  if (ts)
    return e === "compositionend" || (!Id && Ly(e, t))
      ? ((e = My()), (ia = Dd = zn = null), (ts = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Dy && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var oS = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function zh(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!oS[e.type] : t === "textarea";
}
function Iy(e, t, n, r) {
  (hy(r),
    (t = ja(t, "onChange")),
    0 < t.length &&
      ((n = new Ld("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t })));
}
var Ci = null,
  Bi = null;
function aS(e) {
  Yy(e, 0);
}
function ul(e) {
  var t = ss(e);
  if (oy(t)) return e;
}
function lS(e, t) {
  if (e === "change") return t;
}
var Fy = !1;
if (cn) {
  var Zl;
  if (cn) {
    var Jl = "oninput" in document;
    if (!Jl) {
      var Bh = document.createElement("div");
      (Bh.setAttribute("oninput", "return;"),
        (Jl = typeof Bh.oninput == "function"));
    }
    Zl = Jl;
  } else Zl = !1;
  Fy = Zl && (!document.documentMode || 9 < document.documentMode);
}
function $h() {
  Ci && (Ci.detachEvent("onpropertychange", Vy), (Bi = Ci = null));
}
function Vy(e) {
  if (e.propertyName === "value" && ul(Bi)) {
    var t = [];
    (Iy(t, Bi, e, jd(e)), yy(aS, t));
  }
}
function uS(e, t, n) {
  e === "focusin"
    ? ($h(), (Ci = t), (Bi = n), Ci.attachEvent("onpropertychange", Vy))
    : e === "focusout" && $h();
}
function cS(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return ul(Bi);
}
function dS(e, t) {
  if (e === "click") return ul(t);
}
function fS(e, t) {
  if (e === "input" || e === "change") return ul(t);
}
function hS(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var It = typeof Object.is == "function" ? Object.is : hS;
function $i(e, t) {
  if (It(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var s = n[r];
    if (!_u.call(t, s) || !It(e[s], t[s])) return !1;
  }
  return !0;
}
function Uh(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Wh(e, t) {
  var n = Uh(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Uh(n);
  }
}
function _y(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? _y(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function zy() {
  for (var e = window, t = ba(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = ba(e.document);
  }
  return t;
}
function Fd(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function pS(e) {
  var t = zy(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    _y(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Fd(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        ((n.selectionStart = t),
          (n.selectionEnd = Math.min(e, n.value.length)));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var s = n.textContent.length,
          i = Math.min(r.start, s);
        ((r = r.end === void 0 ? i : Math.min(r.end, s)),
          !e.extend && i > r && ((s = r), (r = i), (i = s)),
          (s = Wh(n, i)));
        var o = Wh(n, r);
        s &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== s.node ||
            e.anchorOffset !== s.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(s.node, s.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      ((e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top));
  }
}
var mS = cn && "documentMode" in document && 11 >= document.documentMode,
  ns = null,
  sc = null,
  Ei = null,
  ic = !1;
function Hh(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ic ||
    ns == null ||
    ns !== ba(r) ||
    ((r = ns),
    "selectionStart" in r && Fd(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Ei && $i(Ei, r)) ||
      ((Ei = r),
      (r = ja(sc, "onSelect")),
      0 < r.length &&
        ((t = new Ld("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = ns))));
}
function Vo(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var rs = {
    animationend: Vo("Animation", "AnimationEnd"),
    animationiteration: Vo("Animation", "AnimationIteration"),
    animationstart: Vo("Animation", "AnimationStart"),
    transitionend: Vo("Transition", "TransitionEnd"),
  },
  eu = {},
  By = {};
cn &&
  ((By = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete rs.animationend.animation,
    delete rs.animationiteration.animation,
    delete rs.animationstart.animation),
  "TransitionEvent" in window || delete rs.transitionend.transition);
function cl(e) {
  if (eu[e]) return eu[e];
  if (!rs[e]) return e;
  var t = rs[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in By) return (eu[e] = t[n]);
  return e;
}
var $y = cl("animationend"),
  Uy = cl("animationiteration"),
  Wy = cl("animationstart"),
  Hy = cl("transitionend"),
  Ky = new Map(),
  Kh =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function ar(e, t) {
  (Ky.set(e, t), Br(t, [e]));
}
for (var tu = 0; tu < Kh.length; tu++) {
  var nu = Kh[tu],
    gS = nu.toLowerCase(),
    yS = nu[0].toUpperCase() + nu.slice(1);
  ar(gS, "on" + yS);
}
ar($y, "onAnimationEnd");
ar(Uy, "onAnimationIteration");
ar(Wy, "onAnimationStart");
ar("dblclick", "onDoubleClick");
ar("focusin", "onFocus");
ar("focusout", "onBlur");
ar(Hy, "onTransitionEnd");
Ms("onMouseEnter", ["mouseout", "mouseover"]);
Ms("onMouseLeave", ["mouseout", "mouseover"]);
Ms("onPointerEnter", ["pointerout", "pointerover"]);
Ms("onPointerLeave", ["pointerout", "pointerover"]);
Br(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
Br(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
Br("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Br(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
Br(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
Br(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var yi =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  vS = new Set("cancel close invalid load scroll toggle".split(" ").concat(yi));
function Yh(e, t, n) {
  var r = e.type || "unknown-event";
  ((e.currentTarget = n), gb(r, t, void 0, e), (e.currentTarget = null));
}
function Yy(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      s = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var a = r[o],
            l = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), l !== i && s.isPropagationStopped())) break e;
          (Yh(s, a, u), (i = l));
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((a = r[o]),
            (l = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            l !== i && s.isPropagationStopped())
          )
            break e;
          (Yh(s, a, u), (i = l));
        }
    }
  }
  if (Ca) throw ((e = ec), (Ca = !1), (ec = null), e);
}
function oe(e, t) {
  var n = t[cc];
  n === void 0 && (n = t[cc] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Gy(t, e, 2, !1), n.add(r));
}
function ru(e, t, n) {
  var r = 0;
  (t && (r |= 4), Gy(n, e, r, t));
}
var _o = "_reactListening" + Math.random().toString(36).slice(2);
function Ui(e) {
  if (!e[_o]) {
    ((e[_o] = !0),
      ty.forEach(function (n) {
        n !== "selectionchange" && (vS.has(n) || ru(n, !1, e), ru(n, !0, e));
      }));
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[_o] || ((t[_o] = !0), ru("selectionchange", !1, t));
  }
}
function Gy(e, t, n, r) {
  switch (Ay(t)) {
    case 1:
      var s = Mb;
      break;
    case 4:
      s = Db;
      break;
    default:
      s = Md;
  }
  ((n = s.bind(null, t, n, e)),
    (s = void 0),
    !Ju ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (s = !0),
    r
      ? s !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: s })
        : e.addEventListener(t, n, !0)
      : s !== void 0
        ? e.addEventListener(t, n, { passive: s })
        : e.addEventListener(t, n, !1));
}
function su(e, t, n, r, s) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var a = r.stateNode.containerInfo;
        if (a === s || (a.nodeType === 8 && a.parentNode === s)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var l = o.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = o.stateNode.containerInfo),
              l === s || (l.nodeType === 8 && l.parentNode === s))
            )
              return;
            o = o.return;
          }
        for (; a !== null; ) {
          if (((o = wr(a)), o === null)) return;
          if (((l = o.tag), l === 5 || l === 6)) {
            r = i = o;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  yy(function () {
    var u = i,
      c = jd(n),
      d = [];
    e: {
      var h = Ky.get(e);
      if (h !== void 0) {
        var p = Ld,
          x = e;
        switch (e) {
          case "keypress":
            if (oa(n) === 0) break e;
          case "keydown":
          case "keyup":
            p = Gb;
            break;
          case "focusin":
            ((x = "focus"), (p = ql));
            break;
          case "focusout":
            ((x = "blur"), (p = ql));
            break;
          case "beforeblur":
          case "afterblur":
            p = ql;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            p = Oh;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            p = Ib;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            p = qb;
            break;
          case $y:
          case Uy:
          case Wy:
            p = _b;
            break;
          case Hy:
            p = Jb;
            break;
          case "scroll":
            p = Lb;
            break;
          case "wheel":
            p = tS;
            break;
          case "copy":
          case "cut":
          case "paste":
            p = Bb;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            p = Fh;
        }
        var v = (t & 4) !== 0,
          b = !v && e === "scroll",
          g = v ? (h !== null ? h + "Capture" : null) : h;
        v = [];
        for (var m = u, y; m !== null; ) {
          y = m;
          var S = y.stateNode;
          if (
            (y.tag === 5 &&
              S !== null &&
              ((y = S),
              g !== null && ((S = Fi(m, g)), S != null && v.push(Wi(m, S, y)))),
            b)
          )
            break;
          m = m.return;
        }
        0 < v.length &&
          ((h = new p(h, x, null, n, c)), d.push({ event: h, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((h = e === "mouseover" || e === "pointerover"),
          (p = e === "mouseout" || e === "pointerout"),
          h &&
            n !== qu &&
            (x = n.relatedTarget || n.fromElement) &&
            (wr(x) || x[dn]))
        )
          break e;
        if (
          (p || h) &&
          ((h =
            c.window === c
              ? c
              : (h = c.ownerDocument)
                ? h.defaultView || h.parentWindow
                : window),
          p
            ? ((x = n.relatedTarget || n.toElement),
              (p = u),
              (x = x ? wr(x) : null),
              x !== null &&
                ((b = $r(x)), x !== b || (x.tag !== 5 && x.tag !== 6)) &&
                (x = null))
            : ((p = null), (x = u)),
          p !== x)
        ) {
          if (
            ((v = Oh),
            (S = "onMouseLeave"),
            (g = "onMouseEnter"),
            (m = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((v = Fh),
              (S = "onPointerLeave"),
              (g = "onPointerEnter"),
              (m = "pointer")),
            (b = p == null ? h : ss(p)),
            (y = x == null ? h : ss(x)),
            (h = new v(S, m + "leave", p, n, c)),
            (h.target = b),
            (h.relatedTarget = y),
            (S = null),
            wr(c) === u &&
              ((v = new v(g, m + "enter", x, n, c)),
              (v.target = y),
              (v.relatedTarget = b),
              (S = v)),
            (b = S),
            p && x)
          )
            t: {
              for (v = p, g = x, m = 0, y = v; y; y = Zr(y)) m++;
              for (y = 0, S = g; S; S = Zr(S)) y++;
              for (; 0 < m - y; ) ((v = Zr(v)), m--);
              for (; 0 < y - m; ) ((g = Zr(g)), y--);
              for (; m--; ) {
                if (v === g || (g !== null && v === g.alternate)) break t;
                ((v = Zr(v)), (g = Zr(g)));
              }
              v = null;
            }
          else v = null;
          (p !== null && Gh(d, h, p, v, !1),
            x !== null && b !== null && Gh(d, b, x, v, !0));
        }
      }
      e: {
        if (
          ((h = u ? ss(u) : window),
          (p = h.nodeName && h.nodeName.toLowerCase()),
          p === "select" || (p === "input" && h.type === "file"))
        )
          var C = lS;
        else if (zh(h))
          if (Fy) C = fS;
          else {
            C = cS;
            var E = uS;
          }
        else
          (p = h.nodeName) &&
            p.toLowerCase() === "input" &&
            (h.type === "checkbox" || h.type === "radio") &&
            (C = dS);
        if (C && (C = C(e, u))) {
          Iy(d, C, n, c);
          break e;
        }
        (E && E(e, h, u),
          e === "focusout" &&
            (E = h._wrapperState) &&
            E.controlled &&
            h.type === "number" &&
            Ku(h, "number", h.value));
      }
      switch (((E = u ? ss(u) : window), e)) {
        case "focusin":
          (zh(E) || E.contentEditable === "true") &&
            ((ns = E), (sc = u), (Ei = null));
          break;
        case "focusout":
          Ei = sc = ns = null;
          break;
        case "mousedown":
          ic = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ((ic = !1), Hh(d, n, c));
          break;
        case "selectionchange":
          if (mS) break;
        case "keydown":
        case "keyup":
          Hh(d, n, c);
      }
      var P;
      if (Id)
        e: {
          switch (e) {
            case "compositionstart":
              var T = "onCompositionStart";
              break e;
            case "compositionend":
              T = "onCompositionEnd";
              break e;
            case "compositionupdate":
              T = "onCompositionUpdate";
              break e;
          }
          T = void 0;
        }
      else
        ts
          ? Ly(e, n) && (T = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      (T &&
        (Dy &&
          n.locale !== "ko" &&
          (ts || T !== "onCompositionStart"
            ? T === "onCompositionEnd" && ts && (P = My())
            : ((zn = c),
              (Dd = "value" in zn ? zn.value : zn.textContent),
              (ts = !0))),
        (E = ja(u, T)),
        0 < E.length &&
          ((T = new Ih(T, e, null, n, c)),
          d.push({ event: T, listeners: E }),
          P ? (T.data = P) : ((P = Oy(n)), P !== null && (T.data = P)))),
        (P = rS ? sS(e, n) : iS(e, n)) &&
          ((u = ja(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new Ih("onBeforeInput", "beforeinput", null, n, c)),
            d.push({ event: c, listeners: u }),
            (c.data = P))));
    }
    Yy(d, t);
  });
}
function Wi(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ja(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var s = e,
      i = s.stateNode;
    (s.tag === 5 &&
      i !== null &&
      ((s = i),
      (i = Fi(e, n)),
      i != null && r.unshift(Wi(e, i, s)),
      (i = Fi(e, t)),
      i != null && r.push(Wi(e, i, s))),
      (e = e.return));
  }
  return r;
}
function Zr(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Gh(e, t, n, r, s) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      u = a.stateNode;
    if (l !== null && l === r) break;
    (a.tag === 5 &&
      u !== null &&
      ((a = u),
      s
        ? ((l = Fi(n, i)), l != null && o.unshift(Wi(n, l, a)))
        : s || ((l = Fi(n, i)), l != null && o.push(Wi(n, l, a)))),
      (n = n.return));
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var xS = /\r\n?/g,
  wS = /\u0000|\uFFFD/g;
function Qh(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      xS,
      `
`,
    )
    .replace(wS, "");
}
function zo(e, t, n) {
  if (((t = Qh(t)), Qh(e) !== t && n)) throw Error(M(425));
}
function Na() {}
var oc = null,
  ac = null;
function lc(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var uc = typeof setTimeout == "function" ? setTimeout : void 0,
  bS = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Xh = typeof Promise == "function" ? Promise : void 0,
  SS =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Xh < "u"
        ? function (e) {
            return Xh.resolve(null).then(e).catch(CS);
          }
        : uc;
function CS(e) {
  setTimeout(function () {
    throw e;
  });
}
function iu(e, t) {
  var n = t,
    r = 0;
  do {
    var s = n.nextSibling;
    if ((e.removeChild(n), s && s.nodeType === 8))
      if (((n = s.data), n === "/$")) {
        if (r === 0) {
          (e.removeChild(s), zi(t));
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = s;
  } while (n);
  zi(t);
}
function Yn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function qh(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Hs = Math.random().toString(36).slice(2),
  Ht = "__reactFiber$" + Hs,
  Hi = "__reactProps$" + Hs,
  dn = "__reactContainer$" + Hs,
  cc = "__reactEvents$" + Hs,
  ES = "__reactListeners$" + Hs,
  PS = "__reactHandles$" + Hs;
function wr(e) {
  var t = e[Ht];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[dn] || n[Ht])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = qh(e); e !== null; ) {
          if ((n = e[Ht])) return n;
          e = qh(e);
        }
      return t;
    }
    ((e = n), (n = e.parentNode));
  }
  return null;
}
function go(e) {
  return (
    (e = e[Ht] || e[dn]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function ss(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(M(33));
}
function dl(e) {
  return e[Hi] || null;
}
var dc = [],
  is = -1;
function lr(e) {
  return { current: e };
}
function ae(e) {
  0 > is || ((e.current = dc[is]), (dc[is] = null), is--);
}
function se(e, t) {
  (is++, (dc[is] = e.current), (e.current = t));
}
var er = {},
  ze = lr(er),
  Ze = lr(!1),
  Lr = er;
function Ds(e, t) {
  var n = e.type.contextTypes;
  if (!n) return er;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var s = {},
    i;
  for (i in n) s[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    s
  );
}
function Je(e) {
  return ((e = e.childContextTypes), e != null);
}
function Ra() {
  (ae(Ze), ae(ze));
}
function Zh(e, t, n) {
  if (ze.current !== er) throw Error(M(168));
  (se(ze, t), se(Ze, n));
}
function Qy(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var s in r) if (!(s in t)) throw Error(M(108, ub(e) || "Unknown", s));
  return me({}, n, r);
}
function Aa(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || er),
    (Lr = ze.current),
    se(ze, e),
    se(Ze, Ze.current),
    !0
  );
}
function Jh(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(M(169));
  (n
    ? ((e = Qy(e, t, Lr)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      ae(Ze),
      ae(ze),
      se(ze, e))
    : ae(Ze),
    se(Ze, n));
}
var sn = null,
  fl = !1,
  ou = !1;
function Xy(e) {
  sn === null ? (sn = [e]) : sn.push(e);
}
function TS(e) {
  ((fl = !0), Xy(e));
}
function ur() {
  if (!ou && sn !== null) {
    ou = !0;
    var e = 0,
      t = te;
    try {
      var n = sn;
      for (te = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      ((sn = null), (fl = !1));
    } catch (s) {
      throw (sn !== null && (sn = sn.slice(e + 1)), by(Nd, ur), s);
    } finally {
      ((te = t), (ou = !1));
    }
  }
  return null;
}
var os = [],
  as = 0,
  Ma = null,
  Da = 0,
  ht = [],
  pt = 0,
  Or = null,
  an = 1,
  ln = "";
function yr(e, t) {
  ((os[as++] = Da), (os[as++] = Ma), (Ma = e), (Da = t));
}
function qy(e, t, n) {
  ((ht[pt++] = an), (ht[pt++] = ln), (ht[pt++] = Or), (Or = e));
  var r = an;
  e = ln;
  var s = 32 - Lt(r) - 1;
  ((r &= ~(1 << s)), (n += 1));
  var i = 32 - Lt(t) + s;
  if (30 < i) {
    var o = s - (s % 5);
    ((i = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (s -= o),
      (an = (1 << (32 - Lt(t) + s)) | (n << s) | r),
      (ln = i + e));
  } else ((an = (1 << i) | (n << s) | r), (ln = e));
}
function Vd(e) {
  e.return !== null && (yr(e, 1), qy(e, 1, 0));
}
function _d(e) {
  for (; e === Ma; )
    ((Ma = os[--as]), (os[as] = null), (Da = os[--as]), (os[as] = null));
  for (; e === Or; )
    ((Or = ht[--pt]),
      (ht[pt] = null),
      (ln = ht[--pt]),
      (ht[pt] = null),
      (an = ht[--pt]),
      (ht[pt] = null));
}
var it = null,
  st = null,
  ce = !1,
  Dt = null;
function Zy(e, t) {
  var n = mt(5, null, null, 0);
  ((n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
}
function ep(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (it = e), (st = Yn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (it = e), (st = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Or !== null ? { id: an, overflow: ln } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = mt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (it = e),
            (st = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function fc(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function hc(e) {
  if (ce) {
    var t = st;
    if (t) {
      var n = t;
      if (!ep(e, t)) {
        if (fc(e)) throw Error(M(418));
        t = Yn(n.nextSibling);
        var r = it;
        t && ep(e, t)
          ? Zy(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (ce = !1), (it = e));
      }
    } else {
      if (fc(e)) throw Error(M(418));
      ((e.flags = (e.flags & -4097) | 2), (ce = !1), (it = e));
    }
  }
}
function tp(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  it = e;
}
function Bo(e) {
  if (e !== it) return !1;
  if (!ce) return (tp(e), (ce = !0), !1);
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !lc(e.type, e.memoizedProps))),
    t && (t = st))
  ) {
    if (fc(e)) throw (Jy(), Error(M(418)));
    for (; t; ) (Zy(e, t), (t = Yn(t.nextSibling)));
  }
  if ((tp(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(M(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              st = Yn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      st = null;
    }
  } else st = it ? Yn(e.stateNode.nextSibling) : null;
  return !0;
}
function Jy() {
  for (var e = st; e; ) e = Yn(e.nextSibling);
}
function Ls() {
  ((st = it = null), (ce = !1));
}
function zd(e) {
  Dt === null ? (Dt = [e]) : Dt.push(e);
}
var kS = yn.ReactCurrentBatchConfig;
function li(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(M(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(M(147, e));
      var s = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (o) {
            var a = s.refs;
            o === null ? delete a[i] : (a[i] = o);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(M(284));
    if (!n._owner) throw Error(M(290, e));
  }
  return e;
}
function $o(e, t) {
  throw (
    (e = Object.prototype.toString.call(t)),
    Error(
      M(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    )
  );
}
function np(e) {
  var t = e._init;
  return t(e._payload);
}
function ev(e) {
  function t(g, m) {
    if (e) {
      var y = g.deletions;
      y === null ? ((g.deletions = [m]), (g.flags |= 16)) : y.push(m);
    }
  }
  function n(g, m) {
    if (!e) return null;
    for (; m !== null; ) (t(g, m), (m = m.sibling));
    return null;
  }
  function r(g, m) {
    for (g = new Map(); m !== null; )
      (m.key !== null ? g.set(m.key, m) : g.set(m.index, m), (m = m.sibling));
    return g;
  }
  function s(g, m) {
    return ((g = qn(g, m)), (g.index = 0), (g.sibling = null), g);
  }
  function i(g, m, y) {
    return (
      (g.index = y),
      e
        ? ((y = g.alternate),
          y !== null
            ? ((y = y.index), y < m ? ((g.flags |= 2), m) : y)
            : ((g.flags |= 2), m))
        : ((g.flags |= 1048576), m)
    );
  }
  function o(g) {
    return (e && g.alternate === null && (g.flags |= 2), g);
  }
  function a(g, m, y, S) {
    return m === null || m.tag !== 6
      ? ((m = hu(y, g.mode, S)), (m.return = g), m)
      : ((m = s(m, y)), (m.return = g), m);
  }
  function l(g, m, y, S) {
    var C = y.type;
    return C === es
      ? c(g, m, y.props.children, S, y.key)
      : m !== null &&
          (m.elementType === C ||
            (typeof C == "object" &&
              C !== null &&
              C.$$typeof === Rn &&
              np(C) === m.type))
        ? ((S = s(m, y.props)), (S.ref = li(g, m, y)), (S.return = g), S)
        : ((S = ha(y.type, y.key, y.props, null, g.mode, S)),
          (S.ref = li(g, m, y)),
          (S.return = g),
          S);
  }
  function u(g, m, y, S) {
    return m === null ||
      m.tag !== 4 ||
      m.stateNode.containerInfo !== y.containerInfo ||
      m.stateNode.implementation !== y.implementation
      ? ((m = pu(y, g.mode, S)), (m.return = g), m)
      : ((m = s(m, y.children || [])), (m.return = g), m);
  }
  function c(g, m, y, S, C) {
    return m === null || m.tag !== 7
      ? ((m = Mr(y, g.mode, S, C)), (m.return = g), m)
      : ((m = s(m, y)), (m.return = g), m);
  }
  function d(g, m, y) {
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return ((m = hu("" + m, g.mode, y)), (m.return = g), m);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Ao:
          return (
            (y = ha(m.type, m.key, m.props, null, g.mode, y)),
            (y.ref = li(g, null, m)),
            (y.return = g),
            y
          );
        case Jr:
          return ((m = pu(m, g.mode, y)), (m.return = g), m);
        case Rn:
          var S = m._init;
          return d(g, S(m._payload), y);
      }
      if (mi(m) || ri(m))
        return ((m = Mr(m, g.mode, y, null)), (m.return = g), m);
      $o(g, m);
    }
    return null;
  }
  function h(g, m, y, S) {
    var C = m !== null ? m.key : null;
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return C !== null ? null : a(g, m, "" + y, S);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case Ao:
          return y.key === C ? l(g, m, y, S) : null;
        case Jr:
          return y.key === C ? u(g, m, y, S) : null;
        case Rn:
          return ((C = y._init), h(g, m, C(y._payload), S));
      }
      if (mi(y) || ri(y)) return C !== null ? null : c(g, m, y, S, null);
      $o(g, y);
    }
    return null;
  }
  function p(g, m, y, S, C) {
    if ((typeof S == "string" && S !== "") || typeof S == "number")
      return ((g = g.get(y) || null), a(m, g, "" + S, C));
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case Ao:
          return (
            (g = g.get(S.key === null ? y : S.key) || null),
            l(m, g, S, C)
          );
        case Jr:
          return (
            (g = g.get(S.key === null ? y : S.key) || null),
            u(m, g, S, C)
          );
        case Rn:
          var E = S._init;
          return p(g, m, y, E(S._payload), C);
      }
      if (mi(S) || ri(S)) return ((g = g.get(y) || null), c(m, g, S, C, null));
      $o(m, S);
    }
    return null;
  }
  function x(g, m, y, S) {
    for (
      var C = null, E = null, P = m, T = (m = 0), R = null;
      P !== null && T < y.length;
      T++
    ) {
      P.index > T ? ((R = P), (P = null)) : (R = P.sibling);
      var A = h(g, P, y[T], S);
      if (A === null) {
        P === null && (P = R);
        break;
      }
      (e && P && A.alternate === null && t(g, P),
        (m = i(A, m, T)),
        E === null ? (C = A) : (E.sibling = A),
        (E = A),
        (P = R));
    }
    if (T === y.length) return (n(g, P), ce && yr(g, T), C);
    if (P === null) {
      for (; T < y.length; T++)
        ((P = d(g, y[T], S)),
          P !== null &&
            ((m = i(P, m, T)),
            E === null ? (C = P) : (E.sibling = P),
            (E = P)));
      return (ce && yr(g, T), C);
    }
    for (P = r(g, P); T < y.length; T++)
      ((R = p(P, g, T, y[T], S)),
        R !== null &&
          (e && R.alternate !== null && P.delete(R.key === null ? T : R.key),
          (m = i(R, m, T)),
          E === null ? (C = R) : (E.sibling = R),
          (E = R)));
    return (
      e &&
        P.forEach(function (z) {
          return t(g, z);
        }),
      ce && yr(g, T),
      C
    );
  }
  function v(g, m, y, S) {
    var C = ri(y);
    if (typeof C != "function") throw Error(M(150));
    if (((y = C.call(y)), y == null)) throw Error(M(151));
    for (
      var E = (C = null), P = m, T = (m = 0), R = null, A = y.next();
      P !== null && !A.done;
      T++, A = y.next()
    ) {
      P.index > T ? ((R = P), (P = null)) : (R = P.sibling);
      var z = h(g, P, A.value, S);
      if (z === null) {
        P === null && (P = R);
        break;
      }
      (e && P && z.alternate === null && t(g, P),
        (m = i(z, m, T)),
        E === null ? (C = z) : (E.sibling = z),
        (E = z),
        (P = R));
    }
    if (A.done) return (n(g, P), ce && yr(g, T), C);
    if (P === null) {
      for (; !A.done; T++, A = y.next())
        ((A = d(g, A.value, S)),
          A !== null &&
            ((m = i(A, m, T)),
            E === null ? (C = A) : (E.sibling = A),
            (E = A)));
      return (ce && yr(g, T), C);
    }
    for (P = r(g, P); !A.done; T++, A = y.next())
      ((A = p(P, g, T, A.value, S)),
        A !== null &&
          (e && A.alternate !== null && P.delete(A.key === null ? T : A.key),
          (m = i(A, m, T)),
          E === null ? (C = A) : (E.sibling = A),
          (E = A)));
    return (
      e &&
        P.forEach(function (I) {
          return t(g, I);
        }),
      ce && yr(g, T),
      C
    );
  }
  function b(g, m, y, S) {
    if (
      (typeof y == "object" &&
        y !== null &&
        y.type === es &&
        y.key === null &&
        (y = y.props.children),
      typeof y == "object" && y !== null)
    ) {
      switch (y.$$typeof) {
        case Ao:
          e: {
            for (var C = y.key, E = m; E !== null; ) {
              if (E.key === C) {
                if (((C = y.type), C === es)) {
                  if (E.tag === 7) {
                    (n(g, E.sibling),
                      (m = s(E, y.props.children)),
                      (m.return = g),
                      (g = m));
                    break e;
                  }
                } else if (
                  E.elementType === C ||
                  (typeof C == "object" &&
                    C !== null &&
                    C.$$typeof === Rn &&
                    np(C) === E.type)
                ) {
                  (n(g, E.sibling),
                    (m = s(E, y.props)),
                    (m.ref = li(g, E, y)),
                    (m.return = g),
                    (g = m));
                  break e;
                }
                n(g, E);
                break;
              } else t(g, E);
              E = E.sibling;
            }
            y.type === es
              ? ((m = Mr(y.props.children, g.mode, S, y.key)),
                (m.return = g),
                (g = m))
              : ((S = ha(y.type, y.key, y.props, null, g.mode, S)),
                (S.ref = li(g, m, y)),
                (S.return = g),
                (g = S));
          }
          return o(g);
        case Jr:
          e: {
            for (E = y.key; m !== null; ) {
              if (m.key === E)
                if (
                  m.tag === 4 &&
                  m.stateNode.containerInfo === y.containerInfo &&
                  m.stateNode.implementation === y.implementation
                ) {
                  (n(g, m.sibling),
                    (m = s(m, y.children || [])),
                    (m.return = g),
                    (g = m));
                  break e;
                } else {
                  n(g, m);
                  break;
                }
              else t(g, m);
              m = m.sibling;
            }
            ((m = pu(y, g.mode, S)), (m.return = g), (g = m));
          }
          return o(g);
        case Rn:
          return ((E = y._init), b(g, m, E(y._payload), S));
      }
      if (mi(y)) return x(g, m, y, S);
      if (ri(y)) return v(g, m, y, S);
      $o(g, y);
    }
    return (typeof y == "string" && y !== "") || typeof y == "number"
      ? ((y = "" + y),
        m !== null && m.tag === 6
          ? (n(g, m.sibling), (m = s(m, y)), (m.return = g), (g = m))
          : (n(g, m), (m = hu(y, g.mode, S)), (m.return = g), (g = m)),
        o(g))
      : n(g, m);
  }
  return b;
}
var Os = ev(!0),
  tv = ev(!1),
  La = lr(null),
  Oa = null,
  ls = null,
  Bd = null;
function $d() {
  Bd = ls = Oa = null;
}
function Ud(e) {
  var t = La.current;
  (ae(La), (e._currentValue = t));
}
function pc(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function xs(e, t) {
  ((Oa = e),
    (Bd = ls = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (qe = !0), (e.firstContext = null)));
}
function xt(e) {
  var t = e._currentValue;
  if (Bd !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), ls === null)) {
      if (Oa === null) throw Error(M(308));
      ((ls = e), (Oa.dependencies = { lanes: 0, firstContext: e }));
    } else ls = ls.next = e;
  return t;
}
var br = null;
function Wd(e) {
  br === null ? (br = [e]) : br.push(e);
}
function nv(e, t, n, r) {
  var s = t.interleaved;
  return (
    s === null ? ((n.next = n), Wd(t)) : ((n.next = s.next), (s.next = n)),
    (t.interleaved = n),
    fn(e, r)
  );
}
function fn(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    ((e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return));
  return n.tag === 3 ? n.stateNode : null;
}
var An = !1;
function Hd(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function rv(e, t) {
  ((e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      }));
}
function un(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Gn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), Z & 2)) {
    var s = r.pending;
    return (
      s === null ? (t.next = t) : ((t.next = s.next), (s.next = t)),
      (r.pending = t),
      fn(e, n)
    );
  }
  return (
    (s = r.interleaved),
    s === null ? ((t.next = t), Wd(r)) : ((t.next = s.next), (s.next = t)),
    (r.interleaved = t),
    fn(e, n)
  );
}
function aa(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Rd(e, n));
  }
}
function rp(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var s = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        (i === null ? (s = i = o) : (i = i.next = o), (n = n.next));
      } while (n !== null);
      i === null ? (s = i = t) : (i = i.next = t);
    } else s = i = t;
    ((n = {
      baseState: r.baseState,
      firstBaseUpdate: s,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n));
    return;
  }
  ((e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t));
}
function Ia(e, t, n, r) {
  var s = e.updateQueue;
  An = !1;
  var i = s.firstBaseUpdate,
    o = s.lastBaseUpdate,
    a = s.shared.pending;
  if (a !== null) {
    s.shared.pending = null;
    var l = a,
      u = l.next;
    ((l.next = null), o === null ? (i = u) : (o.next = u), (o = l));
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (a = c.lastBaseUpdate),
      a !== o &&
        (a === null ? (c.firstBaseUpdate = u) : (a.next = u),
        (c.lastBaseUpdate = l)));
  }
  if (i !== null) {
    var d = s.baseState;
    ((o = 0), (c = u = l = null), (a = i));
    do {
      var h = a.lane,
        p = a.eventTime;
      if ((r & h) === h) {
        c !== null &&
          (c = c.next =
            {
              eventTime: p,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var x = e,
            v = a;
          switch (((h = t), (p = n), v.tag)) {
            case 1:
              if (((x = v.payload), typeof x == "function")) {
                d = x.call(p, d, h);
                break e;
              }
              d = x;
              break e;
            case 3:
              x.flags = (x.flags & -65537) | 128;
            case 0:
              if (
                ((x = v.payload),
                (h = typeof x == "function" ? x.call(p, d, h) : x),
                h == null)
              )
                break e;
              d = me({}, d, h);
              break e;
            case 2:
              An = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (h = s.effects),
          h === null ? (s.effects = [a]) : h.push(a));
      } else
        ((p = {
          eventTime: p,
          lane: h,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          c === null ? ((u = c = p), (l = d)) : (c = c.next = p),
          (o |= h));
      if (((a = a.next), a === null)) {
        if (((a = s.shared.pending), a === null)) break;
        ((h = a),
          (a = h.next),
          (h.next = null),
          (s.lastBaseUpdate = h),
          (s.shared.pending = null));
      }
    } while (!0);
    if (
      (c === null && (l = d),
      (s.baseState = l),
      (s.firstBaseUpdate = u),
      (s.lastBaseUpdate = c),
      (t = s.shared.interleaved),
      t !== null)
    ) {
      s = t;
      do ((o |= s.lane), (s = s.next));
      while (s !== t);
    } else i === null && (s.shared.lanes = 0);
    ((Fr |= o), (e.lanes = o), (e.memoizedState = d));
  }
}
function sp(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        s = r.callback;
      if (s !== null) {
        if (((r.callback = null), (r = n), typeof s != "function"))
          throw Error(M(191, s));
        s.call(r);
      }
    }
}
var yo = {},
  Gt = lr(yo),
  Ki = lr(yo),
  Yi = lr(yo);
function Sr(e) {
  if (e === yo) throw Error(M(174));
  return e;
}
function Kd(e, t) {
  switch ((se(Yi, t), se(Ki, e), se(Gt, yo), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Gu(null, "");
      break;
    default:
      ((e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Gu(t, e)));
  }
  (ae(Gt), se(Gt, t));
}
function Is() {
  (ae(Gt), ae(Ki), ae(Yi));
}
function sv(e) {
  Sr(Yi.current);
  var t = Sr(Gt.current),
    n = Gu(t, e.type);
  t !== n && (se(Ki, e), se(Gt, n));
}
function Yd(e) {
  Ki.current === e && (ae(Gt), ae(Ki));
}
var fe = lr(0);
function Fa(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      ((t.child.return = t), (t = t.child));
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    ((t.sibling.return = t.return), (t = t.sibling));
  }
  return null;
}
var au = [];
function Gd() {
  for (var e = 0; e < au.length; e++)
    au[e]._workInProgressVersionPrimary = null;
  au.length = 0;
}
var la = yn.ReactCurrentDispatcher,
  lu = yn.ReactCurrentBatchConfig,
  Ir = 0,
  pe = null,
  Ee = null,
  ke = null,
  Va = !1,
  Pi = !1,
  Gi = 0,
  jS = 0;
function Oe() {
  throw Error(M(321));
}
function Qd(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!It(e[n], t[n])) return !1;
  return !0;
}
function Xd(e, t, n, r, s, i) {
  if (
    ((Ir = i),
    (pe = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (la.current = e === null || e.memoizedState === null ? MS : DS),
    (e = n(r, s)),
    Pi)
  ) {
    i = 0;
    do {
      if (((Pi = !1), (Gi = 0), 25 <= i)) throw Error(M(301));
      ((i += 1),
        (ke = Ee = null),
        (t.updateQueue = null),
        (la.current = LS),
        (e = n(r, s)));
    } while (Pi);
  }
  if (
    ((la.current = _a),
    (t = Ee !== null && Ee.next !== null),
    (Ir = 0),
    (ke = Ee = pe = null),
    (Va = !1),
    t)
  )
    throw Error(M(300));
  return e;
}
function qd() {
  var e = Gi !== 0;
  return ((Gi = 0), e);
}
function Bt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return (ke === null ? (pe.memoizedState = ke = e) : (ke = ke.next = e), ke);
}
function wt() {
  if (Ee === null) {
    var e = pe.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Ee.next;
  var t = ke === null ? pe.memoizedState : ke.next;
  if (t !== null) ((ke = t), (Ee = e));
  else {
    if (e === null) throw Error(M(310));
    ((Ee = e),
      (e = {
        memoizedState: Ee.memoizedState,
        baseState: Ee.baseState,
        baseQueue: Ee.baseQueue,
        queue: Ee.queue,
        next: null,
      }),
      ke === null ? (pe.memoizedState = ke = e) : (ke = ke.next = e));
  }
  return ke;
}
function Qi(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function uu(e) {
  var t = wt(),
    n = t.queue;
  if (n === null) throw Error(M(311));
  n.lastRenderedReducer = e;
  var r = Ee,
    s = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (s !== null) {
      var o = s.next;
      ((s.next = i.next), (i.next = o));
    }
    ((r.baseQueue = s = i), (n.pending = null));
  }
  if (s !== null) {
    ((i = s.next), (r = r.baseState));
    var a = (o = null),
      l = null,
      u = i;
    do {
      var c = u.lane;
      if ((Ir & c) === c)
        (l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action)));
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        (l === null ? ((a = l = d), (o = r)) : (l = l.next = d),
          (pe.lanes |= c),
          (Fr |= c));
      }
      u = u.next;
    } while (u !== null && u !== i);
    (l === null ? (o = r) : (l.next = a),
      It(r, t.memoizedState) || (qe = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = l),
      (n.lastRenderedState = r));
  }
  if (((e = n.interleaved), e !== null)) {
    s = e;
    do ((i = s.lane), (pe.lanes |= i), (Fr |= i), (s = s.next));
    while (s !== e);
  } else s === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function cu(e) {
  var t = wt(),
    n = t.queue;
  if (n === null) throw Error(M(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    s = n.pending,
    i = t.memoizedState;
  if (s !== null) {
    n.pending = null;
    var o = (s = s.next);
    do ((i = e(i, o.action)), (o = o.next));
    while (o !== s);
    (It(i, t.memoizedState) || (qe = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i));
  }
  return [i, r];
}
function iv() {}
function ov(e, t) {
  var n = pe,
    r = wt(),
    s = t(),
    i = !It(r.memoizedState, s);
  if (
    (i && ((r.memoizedState = s), (qe = !0)),
    (r = r.queue),
    Zd(uv.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (ke !== null && ke.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Xi(9, lv.bind(null, n, r, s, t), void 0, null),
      je === null)
    )
      throw Error(M(349));
    Ir & 30 || av(n, t, s);
  }
  return s;
}
function av(e, t, n) {
  ((e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = pe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (pe.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
}
function lv(e, t, n, r) {
  ((t.value = n), (t.getSnapshot = r), cv(t) && dv(e));
}
function uv(e, t, n) {
  return n(function () {
    cv(t) && dv(e);
  });
}
function cv(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !It(e, n);
  } catch {
    return !0;
  }
}
function dv(e) {
  var t = fn(e, 1);
  t !== null && Ot(t, e, 1, -1);
}
function ip(e) {
  var t = Bt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Qi,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = AS.bind(null, pe, e)),
    [t.memoizedState, e]
  );
}
function Xi(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = pe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (pe.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function fv() {
  return wt().memoizedState;
}
function ua(e, t, n, r) {
  var s = Bt();
  ((pe.flags |= e),
    (s.memoizedState = Xi(1 | t, n, void 0, r === void 0 ? null : r)));
}
function hl(e, t, n, r) {
  var s = wt();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Ee !== null) {
    var o = Ee.memoizedState;
    if (((i = o.destroy), r !== null && Qd(r, o.deps))) {
      s.memoizedState = Xi(t, n, i, r);
      return;
    }
  }
  ((pe.flags |= e), (s.memoizedState = Xi(1 | t, n, i, r)));
}
function op(e, t) {
  return ua(8390656, 8, e, t);
}
function Zd(e, t) {
  return hl(2048, 8, e, t);
}
function hv(e, t) {
  return hl(4, 2, e, t);
}
function pv(e, t) {
  return hl(4, 4, e, t);
}
function mv(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function gv(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null),
    hl(4, 4, mv.bind(null, t, e), n)
  );
}
function Jd() {}
function yv(e, t) {
  var n = wt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Qd(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function vv(e, t) {
  var n = wt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Qd(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function xv(e, t, n) {
  return Ir & 21
    ? (It(n, t) || ((n = Ey()), (pe.lanes |= n), (Fr |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (qe = !0)), (e.memoizedState = n));
}
function NS(e, t) {
  var n = te;
  ((te = n !== 0 && 4 > n ? n : 4), e(!0));
  var r = lu.transition;
  lu.transition = {};
  try {
    (e(!1), t());
  } finally {
    ((te = n), (lu.transition = r));
  }
}
function wv() {
  return wt().memoizedState;
}
function RS(e, t, n) {
  var r = Xn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    bv(e))
  )
    Sv(t, n);
  else if (((n = nv(e, t, n, r)), n !== null)) {
    var s = Ke();
    (Ot(n, e, r, s), Cv(n, t, r));
  }
}
function AS(e, t, n) {
  var r = Xn(e),
    s = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (bv(e)) Sv(t, s);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var o = t.lastRenderedState,
          a = i(o, n);
        if (((s.hasEagerState = !0), (s.eagerState = a), It(a, o))) {
          var l = t.interleaved;
          (l === null
            ? ((s.next = s), Wd(t))
            : ((s.next = l.next), (l.next = s)),
            (t.interleaved = s));
          return;
        }
      } catch {
      } finally {
      }
    ((n = nv(e, t, s, r)),
      n !== null && ((s = Ke()), Ot(n, e, r, s), Cv(n, t, r)));
  }
}
function bv(e) {
  var t = e.alternate;
  return e === pe || (t !== null && t === pe);
}
function Sv(e, t) {
  Pi = Va = !0;
  var n = e.pending;
  (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t));
}
function Cv(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Rd(e, n));
  }
}
var _a = {
    readContext: xt,
    useCallback: Oe,
    useContext: Oe,
    useEffect: Oe,
    useImperativeHandle: Oe,
    useInsertionEffect: Oe,
    useLayoutEffect: Oe,
    useMemo: Oe,
    useReducer: Oe,
    useRef: Oe,
    useState: Oe,
    useDebugValue: Oe,
    useDeferredValue: Oe,
    useTransition: Oe,
    useMutableSource: Oe,
    useSyncExternalStore: Oe,
    useId: Oe,
    unstable_isNewReconciler: !1,
  },
  MS = {
    readContext: xt,
    useCallback: function (e, t) {
      return ((Bt().memoizedState = [e, t === void 0 ? null : t]), e);
    },
    useContext: xt,
    useEffect: op,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        ua(4194308, 4, mv.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return ua(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return ua(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Bt();
      return (
        (t = t === void 0 ? null : t),
        (e = e()),
        (n.memoizedState = [e, t]),
        e
      );
    },
    useReducer: function (e, t, n) {
      var r = Bt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = RS.bind(null, pe, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Bt();
      return ((e = { current: e }), (t.memoizedState = e));
    },
    useState: ip,
    useDebugValue: Jd,
    useDeferredValue: function (e) {
      return (Bt().memoizedState = e);
    },
    useTransition: function () {
      var e = ip(!1),
        t = e[0];
      return ((e = NS.bind(null, e[1])), (Bt().memoizedState = e), [t, e]);
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = pe,
        s = Bt();
      if (ce) {
        if (n === void 0) throw Error(M(407));
        n = n();
      } else {
        if (((n = t()), je === null)) throw Error(M(349));
        Ir & 30 || av(r, t, n);
      }
      s.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (s.queue = i),
        op(uv.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Xi(9, lv.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Bt(),
        t = je.identifierPrefix;
      if (ce) {
        var n = ln,
          r = an;
        ((n = (r & ~(1 << (32 - Lt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Gi++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":"));
      } else ((n = jS++), (t = ":" + t + "r" + n.toString(32) + ":"));
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  DS = {
    readContext: xt,
    useCallback: yv,
    useContext: xt,
    useEffect: Zd,
    useImperativeHandle: gv,
    useInsertionEffect: hv,
    useLayoutEffect: pv,
    useMemo: vv,
    useReducer: uu,
    useRef: fv,
    useState: function () {
      return uu(Qi);
    },
    useDebugValue: Jd,
    useDeferredValue: function (e) {
      var t = wt();
      return xv(t, Ee.memoizedState, e);
    },
    useTransition: function () {
      var e = uu(Qi)[0],
        t = wt().memoizedState;
      return [e, t];
    },
    useMutableSource: iv,
    useSyncExternalStore: ov,
    useId: wv,
    unstable_isNewReconciler: !1,
  },
  LS = {
    readContext: xt,
    useCallback: yv,
    useContext: xt,
    useEffect: Zd,
    useImperativeHandle: gv,
    useInsertionEffect: hv,
    useLayoutEffect: pv,
    useMemo: vv,
    useReducer: cu,
    useRef: fv,
    useState: function () {
      return cu(Qi);
    },
    useDebugValue: Jd,
    useDeferredValue: function (e) {
      var t = wt();
      return Ee === null ? (t.memoizedState = e) : xv(t, Ee.memoizedState, e);
    },
    useTransition: function () {
      var e = cu(Qi)[0],
        t = wt().memoizedState;
      return [e, t];
    },
    useMutableSource: iv,
    useSyncExternalStore: ov,
    useId: wv,
    unstable_isNewReconciler: !1,
  };
function jt(e, t) {
  if (e && e.defaultProps) {
    ((t = me({}, t)), (e = e.defaultProps));
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function mc(e, t, n, r) {
  ((t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : me({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n));
}
var pl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? $r(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ke(),
      s = Xn(e),
      i = un(r, s);
    ((i.payload = t),
      n != null && (i.callback = n),
      (t = Gn(e, i, s)),
      t !== null && (Ot(t, e, s, r), aa(t, e, s)));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ke(),
      s = Xn(e),
      i = un(r, s);
    ((i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = Gn(e, i, s)),
      t !== null && (Ot(t, e, s, r), aa(t, e, s)));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Ke(),
      r = Xn(e),
      s = un(n, r);
    ((s.tag = 2),
      t != null && (s.callback = t),
      (t = Gn(e, s, r)),
      t !== null && (Ot(t, e, r, n), aa(t, e, r)));
  },
};
function ap(e, t, n, r, s, i, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, o)
      : t.prototype && t.prototype.isPureReactComponent
        ? !$i(n, r) || !$i(s, i)
        : !0
  );
}
function Ev(e, t, n) {
  var r = !1,
    s = er,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = xt(i))
      : ((s = Je(t) ? Lr : ze.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? Ds(e, s) : er)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = pl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = s),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function lp(e, t, n, r) {
  ((e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && pl.enqueueReplaceState(t, t.state, null));
}
function gc(e, t, n, r) {
  var s = e.stateNode;
  ((s.props = n), (s.state = e.memoizedState), (s.refs = {}), Hd(e));
  var i = t.contextType;
  (typeof i == "object" && i !== null
    ? (s.context = xt(i))
    : ((i = Je(t) ? Lr : ze.current), (s.context = Ds(e, i))),
    (s.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (mc(e, t, i, n), (s.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function" ||
      (typeof s.UNSAFE_componentWillMount != "function" &&
        typeof s.componentWillMount != "function") ||
      ((t = s.state),
      typeof s.componentWillMount == "function" && s.componentWillMount(),
      typeof s.UNSAFE_componentWillMount == "function" &&
        s.UNSAFE_componentWillMount(),
      t !== s.state && pl.enqueueReplaceState(s, s.state, null),
      Ia(e, n, s, r),
      (s.state = e.memoizedState)),
    typeof s.componentDidMount == "function" && (e.flags |= 4194308));
}
function Fs(e, t) {
  try {
    var n = "",
      r = t;
    do ((n += lb(r)), (r = r.return));
    while (r);
    var s = n;
  } catch (i) {
    s =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: s, digest: null };
}
function du(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function yc(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var OS = typeof WeakMap == "function" ? WeakMap : Map;
function Pv(e, t, n) {
  ((n = un(-1, n)), (n.tag = 3), (n.payload = { element: null }));
  var r = t.value;
  return (
    (n.callback = function () {
      (Ba || ((Ba = !0), (kc = r)), yc(e, t));
    }),
    n
  );
}
function Tv(e, t, n) {
  ((n = un(-1, n)), (n.tag = 3));
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var s = t.value;
    ((n.payload = function () {
      return r(s);
    }),
      (n.callback = function () {
        yc(e, t);
      }));
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        (yc(e, t),
          typeof r != "function" &&
            (Qn === null ? (Qn = new Set([this])) : Qn.add(this)));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function up(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new OS();
    var s = new Set();
    r.set(t, s);
  } else ((s = r.get(t)), s === void 0 && ((s = new Set()), r.set(t, s)));
  s.has(n) || (s.add(n), (e = QS.bind(null, e, t, n)), t.then(e, e));
}
function cp(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function dp(e, t, n, r, s) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = s), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = un(-1, 1)), (t.tag = 2), Gn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var IS = yn.ReactCurrentOwner,
  qe = !1;
function $e(e, t, n, r) {
  t.child = e === null ? tv(t, null, n, r) : Os(t, e.child, n, r);
}
function fp(e, t, n, r, s) {
  n = n.render;
  var i = t.ref;
  return (
    xs(t, s),
    (r = Xd(e, t, n, r, i, s)),
    (n = qd()),
    e !== null && !qe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~s),
        hn(e, t, s))
      : (ce && n && Vd(t), (t.flags |= 1), $e(e, t, r, s), t.child)
  );
}
function hp(e, t, n, r, s) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !lf(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), kv(e, t, i, r, s))
      : ((e = ha(n.type, null, r, t, t.mode, s)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & s))) {
    var o = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : $i), n(o, r) && e.ref === t.ref)
    )
      return hn(e, t, s);
  }
  return (
    (t.flags |= 1),
    (e = qn(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function kv(e, t, n, r, s) {
  if (e !== null) {
    var i = e.memoizedProps;
    if ($i(i, r) && e.ref === t.ref)
      if (((qe = !1), (t.pendingProps = r = i), (e.lanes & s) !== 0))
        e.flags & 131072 && (qe = !0);
      else return ((t.lanes = e.lanes), hn(e, t, s));
  }
  return vc(e, t, n, r, s);
}
function jv(e, t, n) {
  var r = t.pendingProps,
    s = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        se(cs, nt),
        (nt |= n));
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          se(cs, nt),
          (nt |= e),
          null
        );
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        se(cs, nt),
        (nt |= r));
    }
  else
    (i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      se(cs, nt),
      (nt |= r));
  return ($e(e, t, s, n), t.child);
}
function Nv(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function vc(e, t, n, r, s) {
  var i = Je(n) ? Lr : ze.current;
  return (
    (i = Ds(t, i)),
    xs(t, s),
    (n = Xd(e, t, n, r, i, s)),
    (r = qd()),
    e !== null && !qe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~s),
        hn(e, t, s))
      : (ce && r && Vd(t), (t.flags |= 1), $e(e, t, n, s), t.child)
  );
}
function pp(e, t, n, r, s) {
  if (Je(n)) {
    var i = !0;
    Aa(t);
  } else i = !1;
  if ((xs(t, s), t.stateNode === null))
    (ca(e, t), Ev(t, n, r), gc(t, n, r, s), (r = !0));
  else if (e === null) {
    var o = t.stateNode,
      a = t.memoizedProps;
    o.props = a;
    var l = o.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = xt(u))
      : ((u = Je(n) ? Lr : ze.current), (u = Ds(t, u)));
    var c = n.getDerivedStateFromProps,
      d =
        typeof c == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    (d ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== r || l !== u) && lp(t, o, r, u)),
      (An = !1));
    var h = t.memoizedState;
    ((o.state = h),
      Ia(t, r, o, s),
      (l = t.memoizedState),
      a !== r || h !== l || Ze.current || An
        ? (typeof c == "function" && (mc(t, n, c, r), (l = t.memoizedState)),
          (a = An || ap(t, n, a, r, h, l, u))
            ? (d ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (o.props = r),
          (o.state = l),
          (o.context = u),
          (r = a))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1)));
  } else {
    ((o = t.stateNode),
      rv(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : jt(t.type, a)),
      (o.props = u),
      (d = t.pendingProps),
      (h = o.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = xt(l))
        : ((l = Je(n) ? Lr : ze.current), (l = Ds(t, l))));
    var p = n.getDerivedStateFromProps;
    ((c =
      typeof p == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== d || h !== l) && lp(t, o, r, l)),
      (An = !1),
      (h = t.memoizedState),
      (o.state = h),
      Ia(t, r, o, s));
    var x = t.memoizedState;
    a !== d || h !== x || Ze.current || An
      ? (typeof p == "function" && (mc(t, n, p, r), (x = t.memoizedState)),
        (u = An || ap(t, n, u, r, h, x, l) || !1)
          ? (c ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, x, l),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, x, l)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (a === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = x)),
        (o.props = r),
        (o.state = x),
        (o.context = l),
        (r = u))
      : (typeof o.componentDidUpdate != "function" ||
          (a === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return xc(e, t, n, r, i, s);
}
function xc(e, t, n, r, s, i) {
  Nv(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return (s && Jh(t, n, !1), hn(e, t, i));
  ((r = t.stateNode), (IS.current = t));
  var a =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = Os(t, e.child, null, i)), (t.child = Os(t, null, a, i)))
      : $e(e, t, a, i),
    (t.memoizedState = r.state),
    s && Jh(t, n, !0),
    t.child
  );
}
function Rv(e) {
  var t = e.stateNode;
  (t.pendingContext
    ? Zh(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Zh(e, t.context, !1),
    Kd(e, t.containerInfo));
}
function mp(e, t, n, r, s) {
  return (Ls(), zd(s), (t.flags |= 256), $e(e, t, n, r), t.child);
}
var wc = { dehydrated: null, treeContext: null, retryLane: 0 };
function bc(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Av(e, t, n) {
  var r = t.pendingProps,
    s = fe.current,
    i = !1,
    o = (t.flags & 128) !== 0,
    a;
  if (
    ((a = o) ||
      (a = e !== null && e.memoizedState === null ? !1 : (s & 2) !== 0),
    a
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (s |= 1),
    se(fe, s & 1),
    e === null)
  )
    return (
      hc(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = o))
                : (i = yl(o, r, 0, null)),
              (e = Mr(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = bc(n)),
              (t.memoizedState = wc),
              e)
            : ef(t, o))
    );
  if (((s = e.memoizedState), s !== null && ((a = s.dehydrated), a !== null)))
    return FS(e, t, o, r, a, s, n);
  if (i) {
    ((i = r.fallback), (o = t.mode), (s = e.child), (a = s.sibling));
    var l = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== s
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (t.deletions = null))
        : ((r = qn(s, l)), (r.subtreeFlags = s.subtreeFlags & 14680064)),
      a !== null ? (i = qn(a, i)) : ((i = Mr(i, o, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? bc(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (i.memoizedState = o),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = wc),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = qn(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function ef(e, t) {
  return (
    (t = yl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Uo(e, t, n, r) {
  return (
    r !== null && zd(r),
    Os(t, e.child, null, n),
    (e = ef(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function FS(e, t, n, r, s, i, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = du(Error(M(422)))), Uo(e, t, o, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((i = r.fallback),
          (s = t.mode),
          (r = yl({ mode: "visible", children: r.children }, s, 0, null)),
          (i = Mr(i, s, o, null)),
          (i.flags |= 2),
          (r.return = t),
          (i.return = t),
          (r.sibling = i),
          (t.child = r),
          t.mode & 1 && Os(t, e.child, null, o),
          (t.child.memoizedState = bc(o)),
          (t.memoizedState = wc),
          i);
  if (!(t.mode & 1)) return Uo(e, t, o, null);
  if (s.data === "$!") {
    if (((r = s.nextSibling && s.nextSibling.dataset), r)) var a = r.dgst;
    return (
      (r = a),
      (i = Error(M(419))),
      (r = du(i, r, void 0)),
      Uo(e, t, o, r)
    );
  }
  if (((a = (o & e.childLanes) !== 0), qe || a)) {
    if (((r = je), r !== null)) {
      switch (o & -o) {
        case 4:
          s = 2;
          break;
        case 16:
          s = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          s = 32;
          break;
        case 536870912:
          s = 268435456;
          break;
        default:
          s = 0;
      }
      ((s = s & (r.suspendedLanes | o) ? 0 : s),
        s !== 0 &&
          s !== i.retryLane &&
          ((i.retryLane = s), fn(e, s), Ot(r, e, s, -1)));
    }
    return (af(), (r = du(Error(M(421)))), Uo(e, t, o, r));
  }
  return s.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = XS.bind(null, e)),
      (s._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (st = Yn(s.nextSibling)),
      (it = t),
      (ce = !0),
      (Dt = null),
      e !== null &&
        ((ht[pt++] = an),
        (ht[pt++] = ln),
        (ht[pt++] = Or),
        (an = e.id),
        (ln = e.overflow),
        (Or = t)),
      (t = ef(t, r.children)),
      (t.flags |= 4096),
      t);
}
function gp(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  (r !== null && (r.lanes |= t), pc(e.return, t, n));
}
function fu(e, t, n, r, s) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: s,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = s));
}
function Mv(e, t, n) {
  var r = t.pendingProps,
    s = r.revealOrder,
    i = r.tail;
  if (($e(e, t, r.children, n), (r = fe.current), r & 2))
    ((r = (r & 1) | 2), (t.flags |= 128));
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && gp(e, n, t);
        else if (e.tag === 19) gp(e, n, t);
        else if (e.child !== null) {
          ((e.child.return = e), (e = e.child));
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    r &= 1;
  }
  if ((se(fe, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (s) {
      case "forwards":
        for (n = t.child, s = null; n !== null; )
          ((e = n.alternate),
            e !== null && Fa(e) === null && (s = n),
            (n = n.sibling));
        ((n = s),
          n === null
            ? ((s = t.child), (t.child = null))
            : ((s = n.sibling), (n.sibling = null)),
          fu(t, !1, s, n, i));
        break;
      case "backwards":
        for (n = null, s = t.child, t.child = null; s !== null; ) {
          if (((e = s.alternate), e !== null && Fa(e) === null)) {
            t.child = s;
            break;
          }
          ((e = s.sibling), (s.sibling = n), (n = s), (s = e));
        }
        fu(t, !0, n, null, i);
        break;
      case "together":
        fu(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function ca(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function hn(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Fr |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(M(153));
  if (t.child !== null) {
    for (
      e = t.child, n = qn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;
    )
      ((e = e.sibling),
        (n = n.sibling = qn(e, e.pendingProps)),
        (n.return = t));
    n.sibling = null;
  }
  return t.child;
}
function VS(e, t, n) {
  switch (t.tag) {
    case 3:
      (Rv(t), Ls());
      break;
    case 5:
      sv(t);
      break;
    case 1:
      Je(t.type) && Aa(t);
      break;
    case 4:
      Kd(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        s = t.memoizedProps.value;
      (se(La, r._currentValue), (r._currentValue = s));
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (se(fe, fe.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? Av(e, t, n)
            : (se(fe, fe.current & 1),
              (e = hn(e, t, n)),
              e !== null ? e.sibling : null);
      se(fe, fe.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Mv(e, t, n);
        t.flags |= 128;
      }
      if (
        ((s = t.memoizedState),
        s !== null &&
          ((s.rendering = null), (s.tail = null), (s.lastEffect = null)),
        se(fe, fe.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return ((t.lanes = 0), jv(e, t, n));
  }
  return hn(e, t, n);
}
var Dv, Sc, Lv, Ov;
Dv = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      ((n.child.return = n), (n = n.child));
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    ((n.sibling.return = n.return), (n = n.sibling));
  }
};
Sc = function () {};
Lv = function (e, t, n, r) {
  var s = e.memoizedProps;
  if (s !== r) {
    ((e = t.stateNode), Sr(Gt.current));
    var i = null;
    switch (n) {
      case "input":
        ((s = Wu(e, s)), (r = Wu(e, r)), (i = []));
        break;
      case "select":
        ((s = me({}, s, { value: void 0 })),
          (r = me({}, r, { value: void 0 })),
          (i = []));
        break;
      case "textarea":
        ((s = Yu(e, s)), (r = Yu(e, r)), (i = []));
        break;
      default:
        typeof s.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Na);
    }
    Qu(n, r);
    var o;
    n = null;
    for (u in s)
      if (!r.hasOwnProperty(u) && s.hasOwnProperty(u) && s[u] != null)
        if (u === "style") {
          var a = s[u];
          for (o in a) a.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Oi.hasOwnProperty(u)
              ? i || (i = [])
              : (i = i || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (
        ((a = s != null ? s[u] : void 0),
        r.hasOwnProperty(u) && l !== a && (l != null || a != null))
      )
        if (u === "style")
          if (a) {
            for (o in a)
              !a.hasOwnProperty(o) ||
                (l && l.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in l)
              l.hasOwnProperty(o) &&
                a[o] !== l[o] &&
                (n || (n = {}), (n[o] = l[o]));
          } else (n || (i || (i = []), i.push(u, n)), (n = l));
        else
          u === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (i = i || []).push(u, l))
            : u === "children"
              ? (typeof l != "string" && typeof l != "number") ||
                (i = i || []).push(u, "" + l)
              : u !== "suppressContentEditableWarning" &&
                u !== "suppressHydrationWarning" &&
                (Oi.hasOwnProperty(u)
                  ? (l != null && u === "onScroll" && oe("scroll", e),
                    i || a === l || (i = []))
                  : (i = i || []).push(u, l));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Ov = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function ui(e, t) {
  if (!ce)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          (t.alternate !== null && (n = t), (t = t.sibling));
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          (n.alternate !== null && (r = n), (n = n.sibling));
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Ie(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var s = e.child; s !== null; )
      ((n |= s.lanes | s.childLanes),
        (r |= s.subtreeFlags & 14680064),
        (r |= s.flags & 14680064),
        (s.return = e),
        (s = s.sibling));
  else
    for (s = e.child; s !== null; )
      ((n |= s.lanes | s.childLanes),
        (r |= s.subtreeFlags),
        (r |= s.flags),
        (s.return = e),
        (s = s.sibling));
  return ((e.subtreeFlags |= r), (e.childLanes = n), t);
}
function _S(e, t, n) {
  var r = t.pendingProps;
  switch ((_d(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return (Ie(t), null);
    case 1:
      return (Je(t.type) && Ra(), Ie(t), null);
    case 3:
      return (
        (r = t.stateNode),
        Is(),
        ae(Ze),
        ae(ze),
        Gd(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Bo(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Dt !== null && (Rc(Dt), (Dt = null)))),
        Sc(e, t),
        Ie(t),
        null
      );
    case 5:
      Yd(t);
      var s = Sr(Yi.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        (Lv(e, t, n, r, s),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(M(166));
          return (Ie(t), null);
        }
        if (((e = Sr(Gt.current)), Bo(t))) {
          ((r = t.stateNode), (n = t.type));
          var i = t.memoizedProps;
          switch (((r[Ht] = t), (r[Hi] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              (oe("cancel", r), oe("close", r));
              break;
            case "iframe":
            case "object":
            case "embed":
              oe("load", r);
              break;
            case "video":
            case "audio":
              for (s = 0; s < yi.length; s++) oe(yi[s], r);
              break;
            case "source":
              oe("error", r);
              break;
            case "img":
            case "image":
            case "link":
              (oe("error", r), oe("load", r));
              break;
            case "details":
              oe("toggle", r);
              break;
            case "input":
              (Ph(r, i), oe("invalid", r));
              break;
            case "select":
              ((r._wrapperState = { wasMultiple: !!i.multiple }),
                oe("invalid", r));
              break;
            case "textarea":
              (kh(r, i), oe("invalid", r));
          }
          (Qu(n, i), (s = null));
          for (var o in i)
            if (i.hasOwnProperty(o)) {
              var a = i[o];
              o === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (i.suppressHydrationWarning !== !0 &&
                      zo(r.textContent, a, e),
                    (s = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (i.suppressHydrationWarning !== !0 &&
                      zo(r.textContent, a, e),
                    (s = ["children", "" + a]))
                : Oi.hasOwnProperty(o) &&
                  a != null &&
                  o === "onScroll" &&
                  oe("scroll", r);
            }
          switch (n) {
            case "input":
              (Mo(r), Th(r, i, !0));
              break;
            case "textarea":
              (Mo(r), jh(r));
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Na);
          }
          ((r = s), (t.updateQueue = r), r !== null && (t.flags |= 4));
        } else {
          ((o = s.nodeType === 9 ? s : s.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = uy(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script><\/script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                  ? (e = o.createElement(n, { is: r.is }))
                  : ((e = o.createElement(n)),
                    n === "select" &&
                      ((o = e),
                      r.multiple
                        ? (o.multiple = !0)
                        : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[Ht] = t),
            (e[Hi] = r),
            Dv(e, t, !1, !1),
            (t.stateNode = e));
          e: {
            switch (((o = Xu(n, r)), n)) {
              case "dialog":
                (oe("cancel", e), oe("close", e), (s = r));
                break;
              case "iframe":
              case "object":
              case "embed":
                (oe("load", e), (s = r));
                break;
              case "video":
              case "audio":
                for (s = 0; s < yi.length; s++) oe(yi[s], e);
                s = r;
                break;
              case "source":
                (oe("error", e), (s = r));
                break;
              case "img":
              case "image":
              case "link":
                (oe("error", e), oe("load", e), (s = r));
                break;
              case "details":
                (oe("toggle", e), (s = r));
                break;
              case "input":
                (Ph(e, r), (s = Wu(e, r)), oe("invalid", e));
                break;
              case "option":
                s = r;
                break;
              case "select":
                ((e._wrapperState = { wasMultiple: !!r.multiple }),
                  (s = me({}, r, { value: void 0 })),
                  oe("invalid", e));
                break;
              case "textarea":
                (kh(e, r), (s = Yu(e, r)), oe("invalid", e));
                break;
              default:
                s = r;
            }
            (Qu(n, s), (a = s));
            for (i in a)
              if (a.hasOwnProperty(i)) {
                var l = a[i];
                i === "style"
                  ? fy(e, l)
                  : i === "dangerouslySetInnerHTML"
                    ? ((l = l ? l.__html : void 0), l != null && cy(e, l))
                    : i === "children"
                      ? typeof l == "string"
                        ? (n !== "textarea" || l !== "") && Ii(e, l)
                        : typeof l == "number" && Ii(e, "" + l)
                      : i !== "suppressContentEditableWarning" &&
                        i !== "suppressHydrationWarning" &&
                        i !== "autoFocus" &&
                        (Oi.hasOwnProperty(i)
                          ? l != null && i === "onScroll" && oe("scroll", e)
                          : l != null && Ed(e, i, l, o));
              }
            switch (n) {
              case "input":
                (Mo(e), Th(e, r, !1));
                break;
              case "textarea":
                (Mo(e), jh(e));
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Jn(r.value));
                break;
              case "select":
                ((e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? ms(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      ms(e, !!r.multiple, r.defaultValue, !0));
                break;
              default:
                typeof s.onClick == "function" && (e.onclick = Na);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return (Ie(t), null);
    case 6:
      if (e && t.stateNode != null) Ov(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(M(166));
        if (((n = Sr(Yi.current)), Sr(Gt.current), Bo(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Ht] = t),
            (i = r.nodeValue !== n) && ((e = it), e !== null))
          )
            switch (e.tag) {
              case 3:
                zo(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  zo(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Ht] = t),
            (t.stateNode = r));
      }
      return (Ie(t), null);
    case 13:
      if (
        (ae(fe),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ce && st !== null && t.mode & 1 && !(t.flags & 128))
          (Jy(), Ls(), (t.flags |= 98560), (i = !1));
        else if (((i = Bo(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(M(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(M(317));
            i[Ht] = t;
          } else
            (Ls(),
              !(t.flags & 128) && (t.memoizedState = null),
              (t.flags |= 4));
          (Ie(t), (i = !1));
        } else (Dt !== null && (Rc(Dt), (Dt = null)), (i = !0));
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || fe.current & 1 ? Te === 0 && (Te = 3) : af())),
          t.updateQueue !== null && (t.flags |= 4),
          Ie(t),
          null);
    case 4:
      return (
        Is(),
        Sc(e, t),
        e === null && Ui(t.stateNode.containerInfo),
        Ie(t),
        null
      );
    case 10:
      return (Ud(t.type._context), Ie(t), null);
    case 17:
      return (Je(t.type) && Ra(), Ie(t), null);
    case 19:
      if ((ae(fe), (i = t.memoizedState), i === null)) return (Ie(t), null);
      if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
        if (r) ui(i, !1);
        else {
          if (Te !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = Fa(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    ui(i, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;
                )
                  ((i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (o = i.alternate),
                    o === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = o.childLanes),
                        (i.lanes = o.lanes),
                        (i.child = o.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = o.memoizedProps),
                        (i.memoizedState = o.memoizedState),
                        (i.updateQueue = o.updateQueue),
                        (i.type = o.type),
                        (e = o.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling));
                return (se(fe, (fe.current & 1) | 2), t.child);
              }
              e = e.sibling;
            }
          i.tail !== null &&
            ve() > Vs &&
            ((t.flags |= 128), (r = !0), ui(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Fa(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              ui(i, !0),
              i.tail === null && i.tailMode === "hidden" && !o.alternate && !ce)
            )
              return (Ie(t), null);
          } else
            2 * ve() - i.renderingStartTime > Vs &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), ui(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = i.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (i.last = o));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = ve()),
          (t.sibling = null),
          (n = fe.current),
          se(fe, r ? (n & 1) | 2 : n & 1),
          t)
        : (Ie(t), null);
    case 22:
    case 23:
      return (
        of(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? nt & 1073741824 && (Ie(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Ie(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(M(156, t.tag));
}
function zS(e, t) {
  switch ((_d(t), t.tag)) {
    case 1:
      return (
        Je(t.type) && Ra(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Is(),
        ae(Ze),
        ae(ze),
        Gd(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return (Yd(t), null);
    case 13:
      if (
        (ae(fe), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(M(340));
        Ls();
      }
      return (
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return (ae(fe), null);
    case 4:
      return (Is(), null);
    case 10:
      return (Ud(t.type._context), null);
    case 22:
    case 23:
      return (of(), null);
    case 24:
      return null;
    default:
      return null;
  }
}
var Wo = !1,
  Ve = !1,
  BS = typeof WeakSet == "function" ? WeakSet : Set,
  V = null;
function us(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        ye(e, t, r);
      }
    else n.current = null;
}
function Cc(e, t, n) {
  try {
    n();
  } catch (r) {
    ye(e, t, r);
  }
}
var yp = !1;
function $S(e, t) {
  if (((oc = Ta), (e = zy()), Fd(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var s = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            (n.nodeType, i.nodeType);
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            a = -1,
            l = -1,
            u = 0,
            c = 0,
            d = e,
            h = null;
          t: for (;;) {
            for (
              var p;
              d !== n || (s !== 0 && d.nodeType !== 3) || (a = o + s),
                d !== i || (r !== 0 && d.nodeType !== 3) || (l = o + r),
                d.nodeType === 3 && (o += d.nodeValue.length),
                (p = d.firstChild) !== null;
            )
              ((h = d), (d = p));
            for (;;) {
              if (d === e) break t;
              if (
                (h === n && ++u === s && (a = o),
                h === i && ++c === r && (l = o),
                (p = d.nextSibling) !== null)
              )
                break;
              ((d = h), (h = d.parentNode));
            }
            d = p;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (ac = { focusedElem: e, selectionRange: n }, Ta = !1, V = t; V !== null; )
    if (((t = V), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      ((e.return = t), (V = e));
    else
      for (; V !== null; ) {
        t = V;
        try {
          var x = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (x !== null) {
                  var v = x.memoizedProps,
                    b = x.memoizedState,
                    g = t.stateNode,
                    m = g.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? v : jt(t.type, v),
                      b,
                    );
                  g.__reactInternalSnapshotBeforeUpdate = m;
                }
                break;
              case 3:
                var y = t.stateNode.containerInfo;
                y.nodeType === 1
                  ? (y.textContent = "")
                  : y.nodeType === 9 &&
                    y.documentElement &&
                    y.removeChild(y.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(M(163));
            }
        } catch (S) {
          ye(t, t.return, S);
        }
        if (((e = t.sibling), e !== null)) {
          ((e.return = t.return), (V = e));
          break;
        }
        V = t.return;
      }
  return ((x = yp), (yp = !1), x);
}
function Ti(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var s = (r = r.next);
    do {
      if ((s.tag & e) === e) {
        var i = s.destroy;
        ((s.destroy = void 0), i !== void 0 && Cc(t, n, i));
      }
      s = s.next;
    } while (s !== r);
  }
}
function ml(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Ec(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Iv(e) {
  var t = e.alternate;
  (t !== null && ((e.alternate = null), Iv(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Ht], delete t[Hi], delete t[cc], delete t[ES], delete t[PS])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null));
}
function Fv(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function vp(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Fv(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      ((e.child.return = e), (e = e.child));
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Pc(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Na)));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Pc(e, t, n), e = e.sibling; e !== null; )
      (Pc(e, t, n), (e = e.sibling));
}
function Tc(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Tc(e, t, n), e = e.sibling; e !== null; )
      (Tc(e, t, n), (e = e.sibling));
}
var Ne = null,
  Mt = !1;
function En(e, t, n) {
  for (n = n.child; n !== null; ) (Vv(e, t, n), (n = n.sibling));
}
function Vv(e, t, n) {
  if (Yt && typeof Yt.onCommitFiberUnmount == "function")
    try {
      Yt.onCommitFiberUnmount(al, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Ve || us(n, t);
    case 6:
      var r = Ne,
        s = Mt;
      ((Ne = null),
        En(e, t, n),
        (Ne = r),
        (Mt = s),
        Ne !== null &&
          (Mt
            ? ((e = Ne),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Ne.removeChild(n.stateNode)));
      break;
    case 18:
      Ne !== null &&
        (Mt
          ? ((e = Ne),
            (n = n.stateNode),
            e.nodeType === 8
              ? iu(e.parentNode, n)
              : e.nodeType === 1 && iu(e, n),
            zi(e))
          : iu(Ne, n.stateNode));
      break;
    case 4:
      ((r = Ne),
        (s = Mt),
        (Ne = n.stateNode.containerInfo),
        (Mt = !0),
        En(e, t, n),
        (Ne = r),
        (Mt = s));
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Ve &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        s = r = r.next;
        do {
          var i = s,
            o = i.destroy;
          ((i = i.tag),
            o !== void 0 && (i & 2 || i & 4) && Cc(n, t, o),
            (s = s.next));
        } while (s !== r);
      }
      En(e, t, n);
      break;
    case 1:
      if (
        !Ve &&
        (us(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          ((r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount());
        } catch (a) {
          ye(n, t, a);
        }
      En(e, t, n);
      break;
    case 21:
      En(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Ve = (r = Ve) || n.memoizedState !== null), En(e, t, n), (Ve = r))
        : En(e, t, n);
      break;
    default:
      En(e, t, n);
  }
}
function xp(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    (n === null && (n = e.stateNode = new BS()),
      t.forEach(function (r) {
        var s = qS.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(s, s));
      }));
  }
}
function Et(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var s = n[r];
      try {
        var i = e,
          o = t,
          a = o;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              ((Ne = a.stateNode), (Mt = !1));
              break e;
            case 3:
              ((Ne = a.stateNode.containerInfo), (Mt = !0));
              break e;
            case 4:
              ((Ne = a.stateNode.containerInfo), (Mt = !0));
              break e;
          }
          a = a.return;
        }
        if (Ne === null) throw Error(M(160));
        (Vv(i, o, s), (Ne = null), (Mt = !1));
        var l = s.alternate;
        (l !== null && (l.return = null), (s.return = null));
      } catch (u) {
        ye(s, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) (_v(t, e), (t = t.sibling));
}
function _v(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Et(t, e), zt(e), r & 4)) {
        try {
          (Ti(3, e, e.return), ml(3, e));
        } catch (v) {
          ye(e, e.return, v);
        }
        try {
          Ti(5, e, e.return);
        } catch (v) {
          ye(e, e.return, v);
        }
      }
      break;
    case 1:
      (Et(t, e), zt(e), r & 512 && n !== null && us(n, n.return));
      break;
    case 5:
      if (
        (Et(t, e),
        zt(e),
        r & 512 && n !== null && us(n, n.return),
        e.flags & 32)
      ) {
        var s = e.stateNode;
        try {
          Ii(s, "");
        } catch (v) {
          ye(e, e.return, v);
        }
      }
      if (r & 4 && ((s = e.stateNode), s != null)) {
        var i = e.memoizedProps,
          o = n !== null ? n.memoizedProps : i,
          a = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            (a === "input" && i.type === "radio" && i.name != null && ay(s, i),
              Xu(a, o));
            var u = Xu(a, i);
            for (o = 0; o < l.length; o += 2) {
              var c = l[o],
                d = l[o + 1];
              c === "style"
                ? fy(s, d)
                : c === "dangerouslySetInnerHTML"
                  ? cy(s, d)
                  : c === "children"
                    ? Ii(s, d)
                    : Ed(s, c, d, u);
            }
            switch (a) {
              case "input":
                Hu(s, i);
                break;
              case "textarea":
                ly(s, i);
                break;
              case "select":
                var h = s._wrapperState.wasMultiple;
                s._wrapperState.wasMultiple = !!i.multiple;
                var p = i.value;
                p != null
                  ? ms(s, !!i.multiple, p, !1)
                  : h !== !!i.multiple &&
                    (i.defaultValue != null
                      ? ms(s, !!i.multiple, i.defaultValue, !0)
                      : ms(s, !!i.multiple, i.multiple ? [] : "", !1));
            }
            s[Hi] = i;
          } catch (v) {
            ye(e, e.return, v);
          }
      }
      break;
    case 6:
      if ((Et(t, e), zt(e), r & 4)) {
        if (e.stateNode === null) throw Error(M(162));
        ((s = e.stateNode), (i = e.memoizedProps));
        try {
          s.nodeValue = i;
        } catch (v) {
          ye(e, e.return, v);
        }
      }
      break;
    case 3:
      if (
        (Et(t, e), zt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          zi(t.containerInfo);
        } catch (v) {
          ye(e, e.return, v);
        }
      break;
    case 4:
      (Et(t, e), zt(e));
      break;
    case 13:
      (Et(t, e),
        zt(e),
        (s = e.child),
        s.flags & 8192 &&
          ((i = s.memoizedState !== null),
          (s.stateNode.isHidden = i),
          !i ||
            (s.alternate !== null && s.alternate.memoizedState !== null) ||
            (rf = ve())),
        r & 4 && xp(e));
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Ve = (u = Ve) || c), Et(t, e), (Ve = u)) : Et(t, e),
        zt(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (V = e, c = e.child; c !== null; ) {
            for (d = V = c; V !== null; ) {
              switch (((h = V), (p = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ti(4, h, h.return);
                  break;
                case 1:
                  us(h, h.return);
                  var x = h.stateNode;
                  if (typeof x.componentWillUnmount == "function") {
                    ((r = h), (n = h.return));
                    try {
                      ((t = r),
                        (x.props = t.memoizedProps),
                        (x.state = t.memoizedState),
                        x.componentWillUnmount());
                    } catch (v) {
                      ye(r, n, v);
                    }
                  }
                  break;
                case 5:
                  us(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    bp(d);
                    continue;
                  }
              }
              p !== null ? ((p.return = h), (V = p)) : bp(d);
            }
            c = c.sibling;
          }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                ((s = d.stateNode),
                  u
                    ? ((i = s.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((a = d.stateNode),
                      (l = d.memoizedProps.style),
                      (o =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (a.style.display = dy("display", o))));
              } catch (v) {
                ye(e, e.return, v);
              }
            }
          } else if (d.tag === 6) {
            if (c === null)
              try {
                d.stateNode.nodeValue = u ? "" : d.memoizedProps;
              } catch (v) {
                ye(e, e.return, v);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            ((d.child.return = d), (d = d.child));
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            (c === d && (c = null), (d = d.return));
          }
          (c === d && (c = null),
            (d.sibling.return = d.return),
            (d = d.sibling));
        }
      }
      break;
    case 19:
      (Et(t, e), zt(e), r & 4 && xp(e));
      break;
    case 21:
      break;
    default:
      (Et(t, e), zt(e));
  }
}
function zt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Fv(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(M(160));
      }
      switch (r.tag) {
        case 5:
          var s = r.stateNode;
          r.flags & 32 && (Ii(s, ""), (r.flags &= -33));
          var i = vp(e);
          Tc(e, i, s);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            a = vp(e);
          Pc(e, a, o);
          break;
        default:
          throw Error(M(161));
      }
    } catch (l) {
      ye(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function US(e, t, n) {
  ((V = e), zv(e));
}
function zv(e, t, n) {
  for (var r = (e.mode & 1) !== 0; V !== null; ) {
    var s = V,
      i = s.child;
    if (s.tag === 22 && r) {
      var o = s.memoizedState !== null || Wo;
      if (!o) {
        var a = s.alternate,
          l = (a !== null && a.memoizedState !== null) || Ve;
        a = Wo;
        var u = Ve;
        if (((Wo = o), (Ve = l) && !u))
          for (V = s; V !== null; )
            ((o = V),
              (l = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? Sp(s)
                : l !== null
                  ? ((l.return = o), (V = l))
                  : Sp(s));
        for (; i !== null; ) ((V = i), zv(i), (i = i.sibling));
        ((V = s), (Wo = a), (Ve = u));
      }
      wp(e);
    } else
      s.subtreeFlags & 8772 && i !== null ? ((i.return = s), (V = i)) : wp(e);
  }
}
function wp(e) {
  for (; V !== null; ) {
    var t = V;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ve || ml(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ve)
                if (n === null) r.componentDidMount();
                else {
                  var s =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : jt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    s,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var i = t.updateQueue;
              i !== null && sp(t, i, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                sp(t, o, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var d = c.dehydrated;
                    d !== null && zi(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(M(163));
          }
        Ve || (t.flags & 512 && Ec(t));
      } catch (h) {
        ye(t, t.return, h);
      }
    }
    if (t === e) {
      V = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      ((n.return = t.return), (V = n));
      break;
    }
    V = t.return;
  }
}
function bp(e) {
  for (; V !== null; ) {
    var t = V;
    if (t === e) {
      V = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      ((n.return = t.return), (V = n));
      break;
    }
    V = t.return;
  }
}
function Sp(e) {
  for (; V !== null; ) {
    var t = V;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            ml(4, t);
          } catch (l) {
            ye(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var s = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              ye(t, s, l);
            }
          }
          var i = t.return;
          try {
            Ec(t);
          } catch (l) {
            ye(t, i, l);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Ec(t);
          } catch (l) {
            ye(t, o, l);
          }
      }
    } catch (l) {
      ye(t, t.return, l);
    }
    if (t === e) {
      V = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      ((a.return = t.return), (V = a));
      break;
    }
    V = t.return;
  }
}
var WS = Math.ceil,
  za = yn.ReactCurrentDispatcher,
  tf = yn.ReactCurrentOwner,
  yt = yn.ReactCurrentBatchConfig,
  Z = 0,
  je = null,
  be = null,
  Ae = 0,
  nt = 0,
  cs = lr(0),
  Te = 0,
  qi = null,
  Fr = 0,
  gl = 0,
  nf = 0,
  ki = null,
  Xe = null,
  rf = 0,
  Vs = 1 / 0,
  rn = null,
  Ba = !1,
  kc = null,
  Qn = null,
  Ho = !1,
  Bn = null,
  $a = 0,
  ji = 0,
  jc = null,
  da = -1,
  fa = 0;
function Ke() {
  return Z & 6 ? ve() : da !== -1 ? da : (da = ve());
}
function Xn(e) {
  return e.mode & 1
    ? Z & 2 && Ae !== 0
      ? Ae & -Ae
      : kS.transition !== null
        ? (fa === 0 && (fa = Ey()), fa)
        : ((e = te),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Ay(e.type))),
          e)
    : 1;
}
function Ot(e, t, n, r) {
  if (50 < ji) throw ((ji = 0), (jc = null), Error(M(185)));
  (po(e, n, r),
    (!(Z & 2) || e !== je) &&
      (e === je && (!(Z & 2) && (gl |= n), Te === 4 && Dn(e, Ae)),
      et(e, r),
      n === 1 && Z === 0 && !(t.mode & 1) && ((Vs = ve() + 500), fl && ur())));
}
function et(e, t) {
  var n = e.callbackNode;
  kb(e, t);
  var r = Pa(e, e === je ? Ae : 0);
  if (r === 0)
    (n !== null && Ah(n), (e.callbackNode = null), (e.callbackPriority = 0));
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Ah(n), t === 1))
      (e.tag === 0 ? TS(Cp.bind(null, e)) : Xy(Cp.bind(null, e)),
        SS(function () {
          !(Z & 6) && ur();
        }),
        (n = null));
    else {
      switch (Py(r)) {
        case 1:
          n = Nd;
          break;
        case 4:
          n = Sy;
          break;
        case 16:
          n = Ea;
          break;
        case 536870912:
          n = Cy;
          break;
        default:
          n = Ea;
      }
      n = Gv(n, Bv.bind(null, e));
    }
    ((e.callbackPriority = t), (e.callbackNode = n));
  }
}
function Bv(e, t) {
  if (((da = -1), (fa = 0), Z & 6)) throw Error(M(327));
  var n = e.callbackNode;
  if (ws() && e.callbackNode !== n) return null;
  var r = Pa(e, e === je ? Ae : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Ua(e, r);
  else {
    t = r;
    var s = Z;
    Z |= 2;
    var i = Uv();
    (je !== e || Ae !== t) && ((rn = null), (Vs = ve() + 500), Ar(e, t));
    do
      try {
        YS();
        break;
      } catch (a) {
        $v(e, a);
      }
    while (!0);
    ($d(),
      (za.current = i),
      (Z = s),
      be !== null ? (t = 0) : ((je = null), (Ae = 0), (t = Te)));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((s = tc(e)), s !== 0 && ((r = s), (t = Nc(e, s)))), t === 1)
    )
      throw ((n = qi), Ar(e, 0), Dn(e, r), et(e, ve()), n);
    if (t === 6) Dn(e, r);
    else {
      if (
        ((s = e.current.alternate),
        !(r & 30) &&
          !HS(s) &&
          ((t = Ua(e, r)),
          t === 2 && ((i = tc(e)), i !== 0 && ((r = i), (t = Nc(e, i)))),
          t === 1))
      )
        throw ((n = qi), Ar(e, 0), Dn(e, r), et(e, ve()), n);
      switch (((e.finishedWork = s), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(M(345));
        case 2:
          vr(e, Xe, rn);
          break;
        case 3:
          if (
            (Dn(e, r), (r & 130023424) === r && ((t = rf + 500 - ve()), 10 < t))
          ) {
            if (Pa(e, 0) !== 0) break;
            if (((s = e.suspendedLanes), (s & r) !== r)) {
              (Ke(), (e.pingedLanes |= e.suspendedLanes & s));
              break;
            }
            e.timeoutHandle = uc(vr.bind(null, e, Xe, rn), t);
            break;
          }
          vr(e, Xe, rn);
          break;
        case 4:
          if ((Dn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, s = -1; 0 < r; ) {
            var o = 31 - Lt(r);
            ((i = 1 << o), (o = t[o]), o > s && (s = o), (r &= ~i));
          }
          if (
            ((r = s),
            (r = ve() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * WS(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = uc(vr.bind(null, e, Xe, rn), r);
            break;
          }
          vr(e, Xe, rn);
          break;
        case 5:
          vr(e, Xe, rn);
          break;
        default:
          throw Error(M(329));
      }
    }
  }
  return (et(e, ve()), e.callbackNode === n ? Bv.bind(null, e) : null);
}
function Nc(e, t) {
  var n = ki;
  return (
    e.current.memoizedState.isDehydrated && (Ar(e, t).flags |= 256),
    (e = Ua(e, t)),
    e !== 2 && ((t = Xe), (Xe = n), t !== null && Rc(t)),
    e
  );
}
function Rc(e) {
  Xe === null ? (Xe = e) : Xe.push.apply(Xe, e);
}
function HS(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var s = n[r],
            i = s.getSnapshot;
          s = s.value;
          try {
            if (!It(i(), s)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      ((n.return = t), (t = n));
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
  }
  return !0;
}
function Dn(e, t) {
  for (
    t &= ~nf,
      t &= ~gl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;
  ) {
    var n = 31 - Lt(t),
      r = 1 << n;
    ((e[n] = -1), (t &= ~r));
  }
}
function Cp(e) {
  if (Z & 6) throw Error(M(327));
  ws();
  var t = Pa(e, 0);
  if (!(t & 1)) return (et(e, ve()), null);
  var n = Ua(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = tc(e);
    r !== 0 && ((t = r), (n = Nc(e, r)));
  }
  if (n === 1) throw ((n = qi), Ar(e, 0), Dn(e, t), et(e, ve()), n);
  if (n === 6) throw Error(M(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    vr(e, Xe, rn),
    et(e, ve()),
    null
  );
}
function sf(e, t) {
  var n = Z;
  Z |= 1;
  try {
    return e(t);
  } finally {
    ((Z = n), Z === 0 && ((Vs = ve() + 500), fl && ur()));
  }
}
function Vr(e) {
  Bn !== null && Bn.tag === 0 && !(Z & 6) && ws();
  var t = Z;
  Z |= 1;
  var n = yt.transition,
    r = te;
  try {
    if (((yt.transition = null), (te = 1), e)) return e();
  } finally {
    ((te = r), (yt.transition = n), (Z = t), !(Z & 6) && ur());
  }
}
function of() {
  ((nt = cs.current), ae(cs));
}
function Ar(e, t) {
  ((e.finishedWork = null), (e.finishedLanes = 0));
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), bS(n)), be !== null))
    for (n = be.return; n !== null; ) {
      var r = n;
      switch ((_d(r), r.tag)) {
        case 1:
          ((r = r.type.childContextTypes), r != null && Ra());
          break;
        case 3:
          (Is(), ae(Ze), ae(ze), Gd());
          break;
        case 5:
          Yd(r);
          break;
        case 4:
          Is();
          break;
        case 13:
          ae(fe);
          break;
        case 19:
          ae(fe);
          break;
        case 10:
          Ud(r.type._context);
          break;
        case 22:
        case 23:
          of();
      }
      n = n.return;
    }
  if (
    ((je = e),
    (be = e = qn(e.current, null)),
    (Ae = nt = t),
    (Te = 0),
    (qi = null),
    (nf = gl = Fr = 0),
    (Xe = ki = null),
    br !== null)
  ) {
    for (t = 0; t < br.length; t++)
      if (((n = br[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var s = r.next,
          i = n.pending;
        if (i !== null) {
          var o = i.next;
          ((i.next = s), (r.next = o));
        }
        n.pending = r;
      }
    br = null;
  }
  return e;
}
function $v(e, t) {
  do {
    var n = be;
    try {
      if (($d(), (la.current = _a), Va)) {
        for (var r = pe.memoizedState; r !== null; ) {
          var s = r.queue;
          (s !== null && (s.pending = null), (r = r.next));
        }
        Va = !1;
      }
      if (
        ((Ir = 0),
        (ke = Ee = pe = null),
        (Pi = !1),
        (Gi = 0),
        (tf.current = null),
        n === null || n.return === null)
      ) {
        ((Te = 1), (qi = t), (be = null));
        break;
      }
      e: {
        var i = e,
          o = n.return,
          a = n,
          l = t;
        if (
          ((t = Ae),
          (a.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var u = l,
            c = a,
            d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var h = c.alternate;
            h
              ? ((c.updateQueue = h.updateQueue),
                (c.memoizedState = h.memoizedState),
                (c.lanes = h.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var p = cp(o);
          if (p !== null) {
            ((p.flags &= -257),
              dp(p, o, a, i, t),
              p.mode & 1 && up(i, u, t),
              (t = p),
              (l = u));
            var x = t.updateQueue;
            if (x === null) {
              var v = new Set();
              (v.add(l), (t.updateQueue = v));
            } else x.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              (up(i, u, t), af());
              break e;
            }
            l = Error(M(426));
          }
        } else if (ce && a.mode & 1) {
          var b = cp(o);
          if (b !== null) {
            (!(b.flags & 65536) && (b.flags |= 256),
              dp(b, o, a, i, t),
              zd(Fs(l, a)));
            break e;
          }
        }
        ((i = l = Fs(l, a)),
          Te !== 4 && (Te = 2),
          ki === null ? (ki = [i]) : ki.push(i),
          (i = o));
        do {
          switch (i.tag) {
            case 3:
              ((i.flags |= 65536), (t &= -t), (i.lanes |= t));
              var g = Pv(i, l, t);
              rp(i, g);
              break e;
            case 1:
              a = l;
              var m = i.type,
                y = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof m.getDerivedStateFromError == "function" ||
                  (y !== null &&
                    typeof y.componentDidCatch == "function" &&
                    (Qn === null || !Qn.has(y))))
              ) {
                ((i.flags |= 65536), (t &= -t), (i.lanes |= t));
                var S = Tv(i, a, t);
                rp(i, S);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Hv(n);
    } catch (C) {
      ((t = C), be === n && n !== null && (be = n = n.return));
      continue;
    }
    break;
  } while (!0);
}
function Uv() {
  var e = za.current;
  return ((za.current = _a), e === null ? _a : e);
}
function af() {
  ((Te === 0 || Te === 3 || Te === 2) && (Te = 4),
    je === null || (!(Fr & 268435455) && !(gl & 268435455)) || Dn(je, Ae));
}
function Ua(e, t) {
  var n = Z;
  Z |= 2;
  var r = Uv();
  (je !== e || Ae !== t) && ((rn = null), Ar(e, t));
  do
    try {
      KS();
      break;
    } catch (s) {
      $v(e, s);
    }
  while (!0);
  if (($d(), (Z = n), (za.current = r), be !== null)) throw Error(M(261));
  return ((je = null), (Ae = 0), Te);
}
function KS() {
  for (; be !== null; ) Wv(be);
}
function YS() {
  for (; be !== null && !vb(); ) Wv(be);
}
function Wv(e) {
  var t = Yv(e.alternate, e, nt);
  ((e.memoizedProps = e.pendingProps),
    t === null ? Hv(e) : (be = t),
    (tf.current = null));
}
function Hv(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = zS(n, t)), n !== null)) {
        ((n.flags &= 32767), (be = n));
        return;
      }
      if (e !== null)
        ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
      else {
        ((Te = 6), (be = null));
        return;
      }
    } else if (((n = _S(n, t, nt)), n !== null)) {
      be = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      be = t;
      return;
    }
    be = t = e;
  } while (t !== null);
  Te === 0 && (Te = 5);
}
function vr(e, t, n) {
  var r = te,
    s = yt.transition;
  try {
    ((yt.transition = null), (te = 1), GS(e, t, n, r));
  } finally {
    ((yt.transition = s), (te = r));
  }
  return null;
}
function GS(e, t, n, r) {
  do ws();
  while (Bn !== null);
  if (Z & 6) throw Error(M(327));
  n = e.finishedWork;
  var s = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(M(177));
  ((e.callbackNode = null), (e.callbackPriority = 0));
  var i = n.lanes | n.childLanes;
  if (
    (jb(e, i),
    e === je && ((be = je = null), (Ae = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Ho ||
      ((Ho = !0),
      Gv(Ea, function () {
        return (ws(), null);
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    ((i = yt.transition), (yt.transition = null));
    var o = te;
    te = 1;
    var a = Z;
    ((Z |= 4),
      (tf.current = null),
      $S(e, n),
      _v(n, e),
      pS(ac),
      (Ta = !!oc),
      (ac = oc = null),
      (e.current = n),
      US(n),
      xb(),
      (Z = a),
      (te = o),
      (yt.transition = i));
  } else e.current = n;
  if (
    (Ho && ((Ho = !1), (Bn = e), ($a = s)),
    (i = e.pendingLanes),
    i === 0 && (Qn = null),
    Sb(n.stateNode),
    et(e, ve()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      ((s = t[n]), r(s.value, { componentStack: s.stack, digest: s.digest }));
  if (Ba) throw ((Ba = !1), (e = kc), (kc = null), e);
  return (
    $a & 1 && e.tag !== 0 && ws(),
    (i = e.pendingLanes),
    i & 1 ? (e === jc ? ji++ : ((ji = 0), (jc = e))) : (ji = 0),
    ur(),
    null
  );
}
function ws() {
  if (Bn !== null) {
    var e = Py($a),
      t = yt.transition,
      n = te;
    try {
      if (((yt.transition = null), (te = 16 > e ? 16 : e), Bn === null))
        var r = !1;
      else {
        if (((e = Bn), (Bn = null), ($a = 0), Z & 6)) throw Error(M(331));
        var s = Z;
        for (Z |= 4, V = e.current; V !== null; ) {
          var i = V,
            o = i.child;
          if (V.flags & 16) {
            var a = i.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (V = u; V !== null; ) {
                  var c = V;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ti(8, c, i);
                  }
                  var d = c.child;
                  if (d !== null) ((d.return = c), (V = d));
                  else
                    for (; V !== null; ) {
                      c = V;
                      var h = c.sibling,
                        p = c.return;
                      if ((Iv(c), c === u)) {
                        V = null;
                        break;
                      }
                      if (h !== null) {
                        ((h.return = p), (V = h));
                        break;
                      }
                      V = p;
                    }
                }
              }
              var x = i.alternate;
              if (x !== null) {
                var v = x.child;
                if (v !== null) {
                  x.child = null;
                  do {
                    var b = v.sibling;
                    ((v.sibling = null), (v = b));
                  } while (v !== null);
                }
              }
              V = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) ((o.return = i), (V = o));
          else
            e: for (; V !== null; ) {
              if (((i = V), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ti(9, i, i.return);
                }
              var g = i.sibling;
              if (g !== null) {
                ((g.return = i.return), (V = g));
                break e;
              }
              V = i.return;
            }
        }
        var m = e.current;
        for (V = m; V !== null; ) {
          o = V;
          var y = o.child;
          if (o.subtreeFlags & 2064 && y !== null) ((y.return = o), (V = y));
          else
            e: for (o = m; V !== null; ) {
              if (((a = V), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ml(9, a);
                  }
                } catch (C) {
                  ye(a, a.return, C);
                }
              if (a === o) {
                V = null;
                break e;
              }
              var S = a.sibling;
              if (S !== null) {
                ((S.return = a.return), (V = S));
                break e;
              }
              V = a.return;
            }
        }
        if (
          ((Z = s), ur(), Yt && typeof Yt.onPostCommitFiberRoot == "function")
        )
          try {
            Yt.onPostCommitFiberRoot(al, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      ((te = n), (yt.transition = t));
    }
  }
  return !1;
}
function Ep(e, t, n) {
  ((t = Fs(n, t)),
    (t = Pv(e, t, 1)),
    (e = Gn(e, t, 1)),
    (t = Ke()),
    e !== null && (po(e, 1, t), et(e, t)));
}
function ye(e, t, n) {
  if (e.tag === 3) Ep(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Ep(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Qn === null || !Qn.has(r)))
        ) {
          ((e = Fs(n, e)),
            (e = Tv(t, e, 1)),
            (t = Gn(t, e, 1)),
            (e = Ke()),
            t !== null && (po(t, 1, e), et(t, e)));
          break;
        }
      }
      t = t.return;
    }
}
function QS(e, t, n) {
  var r = e.pingCache;
  (r !== null && r.delete(t),
    (t = Ke()),
    (e.pingedLanes |= e.suspendedLanes & n),
    je === e &&
      (Ae & n) === n &&
      (Te === 4 || (Te === 3 && (Ae & 130023424) === Ae && 500 > ve() - rf)
        ? Ar(e, 0)
        : (nf |= n)),
    et(e, t));
}
function Kv(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Oo), (Oo <<= 1), !(Oo & 130023424) && (Oo = 4194304))
      : (t = 1));
  var n = Ke();
  ((e = fn(e, t)), e !== null && (po(e, t, n), et(e, n)));
}
function XS(e) {
  var t = e.memoizedState,
    n = 0;
  (t !== null && (n = t.retryLane), Kv(e, n));
}
function qS(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        s = e.memoizedState;
      s !== null && (n = s.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(M(314));
  }
  (r !== null && r.delete(t), Kv(e, n));
}
var Yv;
Yv = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ze.current) qe = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return ((qe = !1), VS(e, t, n));
      qe = !!(e.flags & 131072);
    }
  else ((qe = !1), ce && t.flags & 1048576 && qy(t, Da, t.index));
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      (ca(e, t), (e = t.pendingProps));
      var s = Ds(t, ze.current);
      (xs(t, n), (s = Xd(null, t, r, e, s, n)));
      var i = qd();
      return (
        (t.flags |= 1),
        typeof s == "object" &&
        s !== null &&
        typeof s.render == "function" &&
        s.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Je(r) ? ((i = !0), Aa(t)) : (i = !1),
            (t.memoizedState =
              s.state !== null && s.state !== void 0 ? s.state : null),
            Hd(t),
            (s.updater = pl),
            (t.stateNode = s),
            (s._reactInternals = t),
            gc(t, r, e, n),
            (t = xc(null, t, r, !0, i, n)))
          : ((t.tag = 0), ce && i && Vd(t), $e(null, t, s, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (ca(e, t),
          (e = t.pendingProps),
          (s = r._init),
          (r = s(r._payload)),
          (t.type = r),
          (s = t.tag = JS(r)),
          (e = jt(r, e)),
          s)
        ) {
          case 0:
            t = vc(null, t, r, e, n);
            break e;
          case 1:
            t = pp(null, t, r, e, n);
            break e;
          case 11:
            t = fp(null, t, r, e, n);
            break e;
          case 14:
            t = hp(null, t, r, jt(r.type, e), n);
            break e;
        }
        throw Error(M(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : jt(r, s)),
        vc(e, t, r, s, n)
      );
    case 1:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : jt(r, s)),
        pp(e, t, r, s, n)
      );
    case 3:
      e: {
        if ((Rv(t), e === null)) throw Error(M(387));
        ((r = t.pendingProps),
          (i = t.memoizedState),
          (s = i.element),
          rv(e, t),
          Ia(t, r, null, n));
        var o = t.memoizedState;
        if (((r = o.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            ((s = Fs(Error(M(423)), t)), (t = mp(e, t, r, n, s)));
            break e;
          } else if (r !== s) {
            ((s = Fs(Error(M(424)), t)), (t = mp(e, t, r, n, s)));
            break e;
          } else
            for (
              st = Yn(t.stateNode.containerInfo.firstChild),
                it = t,
                ce = !0,
                Dt = null,
                n = tv(t, null, r, n),
                t.child = n;
              n;
            )
              ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
        else {
          if ((Ls(), r === s)) {
            t = hn(e, t, n);
            break e;
          }
          $e(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        sv(t),
        e === null && hc(t),
        (r = t.type),
        (s = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (o = s.children),
        lc(r, s) ? (o = null) : i !== null && lc(r, i) && (t.flags |= 32),
        Nv(e, t),
        $e(e, t, o, n),
        t.child
      );
    case 6:
      return (e === null && hc(t), null);
    case 13:
      return Av(e, t, n);
    case 4:
      return (
        Kd(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Os(t, null, r, n)) : $e(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : jt(r, s)),
        fp(e, t, r, s, n)
      );
    case 7:
      return ($e(e, t, t.pendingProps, n), t.child);
    case 8:
      return ($e(e, t, t.pendingProps.children, n), t.child);
    case 12:
      return ($e(e, t, t.pendingProps.children, n), t.child);
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (s = t.pendingProps),
          (i = t.memoizedProps),
          (o = s.value),
          se(La, r._currentValue),
          (r._currentValue = o),
          i !== null)
        )
          if (It(i.value, o)) {
            if (i.children === s.children && !Ze.current) {
              t = hn(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var a = i.dependencies;
              if (a !== null) {
                o = i.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (i.tag === 1) {
                      ((l = un(-1, n & -n)), (l.tag = 2));
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        (c === null
                          ? (l.next = l)
                          : ((l.next = c.next), (c.next = l)),
                          (u.pending = l));
                      }
                    }
                    ((i.lanes |= n),
                      (l = i.alternate),
                      l !== null && (l.lanes |= n),
                      pc(i.return, n, t),
                      (a.lanes |= n));
                    break;
                  }
                  l = l.next;
                }
              } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((o = i.return), o === null)) throw Error(M(341));
                ((o.lanes |= n),
                  (a = o.alternate),
                  a !== null && (a.lanes |= n),
                  pc(o, n, t),
                  (o = i.sibling));
              } else o = i.child;
              if (o !== null) o.return = i;
              else
                for (o = i; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((i = o.sibling), i !== null)) {
                    ((i.return = o.return), (o = i));
                    break;
                  }
                  o = o.return;
                }
              i = o;
            }
        ($e(e, t, s.children, n), (t = t.child));
      }
      return t;
    case 9:
      return (
        (s = t.type),
        (r = t.pendingProps.children),
        xs(t, n),
        (s = xt(s)),
        (r = r(s)),
        (t.flags |= 1),
        $e(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (s = jt(r, t.pendingProps)),
        (s = jt(r.type, s)),
        hp(e, t, r, s, n)
      );
    case 15:
      return kv(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : jt(r, s)),
        ca(e, t),
        (t.tag = 1),
        Je(r) ? ((e = !0), Aa(t)) : (e = !1),
        xs(t, n),
        Ev(t, r, s),
        gc(t, r, s, n),
        xc(null, t, r, !0, e, n)
      );
    case 19:
      return Mv(e, t, n);
    case 22:
      return jv(e, t, n);
  }
  throw Error(M(156, t.tag));
};
function Gv(e, t) {
  return by(e, t);
}
function ZS(e, t, n, r) {
  ((this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null));
}
function mt(e, t, n, r) {
  return new ZS(e, t, n, r);
}
function lf(e) {
  return ((e = e.prototype), !(!e || !e.isReactComponent));
}
function JS(e) {
  if (typeof e == "function") return lf(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Td)) return 11;
    if (e === kd) return 14;
  }
  return 2;
}
function qn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = mt(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function ha(e, t, n, r, s, i) {
  var o = 2;
  if (((r = e), typeof e == "function")) lf(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case es:
        return Mr(n.children, s, i, t);
      case Pd:
        ((o = 8), (s |= 8));
        break;
      case zu:
        return (
          (e = mt(12, n, t, s | 2)),
          (e.elementType = zu),
          (e.lanes = i),
          e
        );
      case Bu:
        return ((e = mt(13, n, t, s)), (e.elementType = Bu), (e.lanes = i), e);
      case $u:
        return ((e = mt(19, n, t, s)), (e.elementType = $u), (e.lanes = i), e);
      case sy:
        return yl(n, s, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case ny:
              o = 10;
              break e;
            case ry:
              o = 9;
              break e;
            case Td:
              o = 11;
              break e;
            case kd:
              o = 14;
              break e;
            case Rn:
              ((o = 16), (r = null));
              break e;
          }
        throw Error(M(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = mt(o, n, t, s)),
    (t.elementType = e),
    (t.type = r),
    (t.lanes = i),
    t
  );
}
function Mr(e, t, n, r) {
  return ((e = mt(7, e, r, t)), (e.lanes = n), e);
}
function yl(e, t, n, r) {
  return (
    (e = mt(22, e, r, t)),
    (e.elementType = sy),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function hu(e, t, n) {
  return ((e = mt(6, e, null, t)), (e.lanes = n), e);
}
function pu(e, t, n) {
  return (
    (t = mt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function eC(e, t, n, r, s) {
  ((this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Gl(0)),
    (this.expirationTimes = Gl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Gl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = s),
    (this.mutableSourceEagerHydrationData = null));
}
function uf(e, t, n, r, s, i, o, a, l) {
  return (
    (e = new eC(e, t, n, a, l)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = mt(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Hd(i),
    e
  );
}
function tC(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Jr,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Qv(e) {
  if (!e) return er;
  e = e._reactInternals;
  e: {
    if ($r(e) !== e || e.tag !== 1) throw Error(M(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Je(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(M(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Je(n)) return Qy(e, n, t);
  }
  return t;
}
function Xv(e, t, n, r, s, i, o, a, l) {
  return (
    (e = uf(n, r, !0, e, s, i, o, a, l)),
    (e.context = Qv(null)),
    (n = e.current),
    (r = Ke()),
    (s = Xn(n)),
    (i = un(r, s)),
    (i.callback = t ?? null),
    Gn(n, i, s),
    (e.current.lanes = s),
    po(e, s, r),
    et(e, r),
    e
  );
}
function vl(e, t, n, r) {
  var s = t.current,
    i = Ke(),
    o = Xn(s);
  return (
    (n = Qv(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = un(i, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Gn(s, t, o)),
    e !== null && (Ot(e, s, o, i), aa(e, s, o)),
    o
  );
}
function Wa(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Pp(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function cf(e, t) {
  (Pp(e, t), (e = e.alternate) && Pp(e, t));
}
function nC() {
  return null;
}
var qv =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function df(e) {
  this._internalRoot = e;
}
xl.prototype.render = df.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(M(409));
  vl(e, t, null, null);
};
xl.prototype.unmount = df.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    (Vr(function () {
      vl(null, e, null, null);
    }),
      (t[dn] = null));
  }
};
function xl(e) {
  this._internalRoot = e;
}
xl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = jy();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Mn.length && t !== 0 && t < Mn[n].priority; n++);
    (Mn.splice(n, 0, e), n === 0 && Ry(e));
  }
};
function ff(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function wl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Tp() {}
function rC(e, t, n, r, s) {
  if (s) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var u = Wa(o);
        i.call(u);
      };
    }
    var o = Xv(t, r, e, 0, null, !1, !1, "", Tp);
    return (
      (e._reactRootContainer = o),
      (e[dn] = o.current),
      Ui(e.nodeType === 8 ? e.parentNode : e),
      Vr(),
      o
    );
  }
  for (; (s = e.lastChild); ) e.removeChild(s);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var u = Wa(l);
      a.call(u);
    };
  }
  var l = uf(e, 0, !1, null, null, !1, !1, "", Tp);
  return (
    (e._reactRootContainer = l),
    (e[dn] = l.current),
    Ui(e.nodeType === 8 ? e.parentNode : e),
    Vr(function () {
      vl(t, l, n, r);
    }),
    l
  );
}
function bl(e, t, n, r, s) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof s == "function") {
      var a = s;
      s = function () {
        var l = Wa(o);
        a.call(l);
      };
    }
    vl(t, o, e, s);
  } else o = rC(n, t, e, s, r);
  return Wa(o);
}
Ty = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = gi(t.pendingLanes);
        n !== 0 &&
          (Rd(t, n | 1), et(t, ve()), !(Z & 6) && ((Vs = ve() + 500), ur()));
      }
      break;
    case 13:
      (Vr(function () {
        var r = fn(e, 1);
        if (r !== null) {
          var s = Ke();
          Ot(r, e, 1, s);
        }
      }),
        cf(e, 1));
  }
};
Ad = function (e) {
  if (e.tag === 13) {
    var t = fn(e, 134217728);
    if (t !== null) {
      var n = Ke();
      Ot(t, e, 134217728, n);
    }
    cf(e, 134217728);
  }
};
ky = function (e) {
  if (e.tag === 13) {
    var t = Xn(e),
      n = fn(e, t);
    if (n !== null) {
      var r = Ke();
      Ot(n, e, t, r);
    }
    cf(e, t);
  }
};
jy = function () {
  return te;
};
Ny = function (e, t) {
  var n = te;
  try {
    return ((te = e), t());
  } finally {
    te = n;
  }
};
Zu = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Hu(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var s = dl(r);
            if (!s) throw Error(M(90));
            (oy(r), Hu(r, s));
          }
        }
      }
      break;
    case "textarea":
      ly(e, n);
      break;
    case "select":
      ((t = n.value), t != null && ms(e, !!n.multiple, t, !1));
  }
};
my = sf;
gy = Vr;
var sC = { usingClientEntryPoint: !1, Events: [go, ss, dl, hy, py, sf] },
  ci = {
    findFiberByHostInstance: wr,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  iC = {
    bundleType: ci.bundleType,
    version: ci.version,
    rendererPackageName: ci.rendererPackageName,
    rendererConfig: ci.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: yn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return ((e = xy(e)), e === null ? null : e.stateNode);
    },
    findFiberByHostInstance: ci.findFiberByHostInstance || nC,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ko = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ko.isDisabled && Ko.supportsFiber)
    try {
      ((al = Ko.inject(iC)), (Yt = Ko));
    } catch {}
}
lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sC;
lt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ff(t)) throw Error(M(200));
  return tC(e, t, null, n);
};
lt.createRoot = function (e, t) {
  if (!ff(e)) throw Error(M(299));
  var n = !1,
    r = "",
    s = qv;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (s = t.onRecoverableError)),
    (t = uf(e, 1, !1, null, null, n, !1, r, s)),
    (e[dn] = t.current),
    Ui(e.nodeType === 8 ? e.parentNode : e),
    new df(t)
  );
};
lt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(M(188))
      : ((e = Object.keys(e).join(",")), Error(M(268, e)));
  return ((e = xy(t)), (e = e === null ? null : e.stateNode), e);
};
lt.flushSync = function (e) {
  return Vr(e);
};
lt.hydrate = function (e, t, n) {
  if (!wl(t)) throw Error(M(200));
  return bl(null, e, t, !0, n);
};
lt.hydrateRoot = function (e, t, n) {
  if (!ff(e)) throw Error(M(405));
  var r = (n != null && n.hydratedSources) || null,
    s = !1,
    i = "",
    o = qv;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (s = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = Xv(t, null, e, 1, n ?? null, s, !1, i, o)),
    (e[dn] = t.current),
    Ui(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      ((n = r[e]),
        (s = n._getVersion),
        (s = s(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, s])
          : t.mutableSourceEagerHydrationData.push(n, s));
  return new xl(t);
};
lt.render = function (e, t, n) {
  if (!wl(t)) throw Error(M(200));
  return bl(null, e, t, !1, n);
};
lt.unmountComponentAtNode = function (e) {
  if (!wl(e)) throw Error(M(40));
  return e._reactRootContainer
    ? (Vr(function () {
        bl(null, null, e, !1, function () {
          ((e._reactRootContainer = null), (e[dn] = null));
        });
      }),
      !0)
    : !1;
};
lt.unstable_batchedUpdates = sf;
lt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!wl(n)) throw Error(M(200));
  if (e == null || e._reactInternals === void 0) throw Error(M(38));
  return bl(e, t, n, !1, r);
};
lt.version = "18.3.1-next-f1338f8080-20240426";
function Zv() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Zv);
    } catch (e) {
      console.error(e);
    }
}
(Zv(), (Zg.exports = lt));
var vo = Zg.exports;
const Jv = _g(vo);
var e0,
  kp = vo;
((e0 = kp.createRoot), kp.hydrateRoot);
const oC = 1,
  aC = 1e6;
let mu = 0;
function lC() {
  return ((mu = (mu + 1) % Number.MAX_SAFE_INTEGER), mu.toString());
}
const gu = new Map(),
  jp = (e) => {
    if (gu.has(e)) return;
    const t = setTimeout(() => {
      (gu.delete(e), Ni({ type: "REMOVE_TOAST", toastId: e }));
    }, aC);
    gu.set(e, t);
  },
  uC = (e, t) => {
    switch (t.type) {
      case "ADD_TOAST":
        return { ...e, toasts: [t.toast, ...e.toasts].slice(0, oC) };
      case "UPDATE_TOAST":
        return {
          ...e,
          toasts: e.toasts.map((n) =>
            n.id === t.toast.id ? { ...n, ...t.toast } : n,
          ),
        };
      case "DISMISS_TOAST": {
        const { toastId: n } = t;
        return (
          n
            ? jp(n)
            : e.toasts.forEach((r) => {
                jp(r.id);
              }),
          {
            ...e,
            toasts: e.toasts.map((r) =>
              r.id === n || n === void 0 ? { ...r, open: !1 } : r,
            ),
          }
        );
      }
      case "REMOVE_TOAST":
        return t.toastId === void 0
          ? { ...e, toasts: [] }
          : { ...e, toasts: e.toasts.filter((n) => n.id !== t.toastId) };
    }
  },
  pa = [];
let ma = { toasts: [] };
function Ni(e) {
  ((ma = uC(ma, e)),
    pa.forEach((t) => {
      t(ma);
    }));
}
function cC({ ...e }) {
  const t = lC(),
    n = (s) => Ni({ type: "UPDATE_TOAST", toast: { ...s, id: t } }),
    r = () => Ni({ type: "DISMISS_TOAST", toastId: t });
  return (
    Ni({
      type: "ADD_TOAST",
      toast: {
        ...e,
        id: t,
        open: !0,
        onOpenChange: (s) => {
          s || r();
        },
      },
    }),
    { id: t, dismiss: r, update: n }
  );
}
function t0() {
  const [e, t] = w.useState(ma);
  return (
    w.useEffect(
      () => (
        pa.push(t),
        () => {
          const n = pa.indexOf(t);
          n > -1 && pa.splice(n, 1);
        }
      ),
      [e],
    ),
    {
      ...e,
      toast: cC,
      dismiss: (n) => Ni({ type: "DISMISS_TOAST", toastId: n }),
    }
  );
}
function Pe(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (s) {
    if ((e == null || e(s), n === !1 || !s.defaultPrevented))
      return t == null ? void 0 : t(s);
  };
}
function Np(e, t) {
  if (typeof e == "function") return e(t);
  e != null && (e.current = t);
}
function n0(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((s) => {
      const i = Np(s, t);
      return (!n && typeof i == "function" && (n = !0), i);
    });
    if (n)
      return () => {
        for (let s = 0; s < r.length; s++) {
          const i = r[s];
          typeof i == "function" ? i() : Np(e[s], null);
        }
      };
  };
}
function Ft(...e) {
  return w.useCallback(n0(...e), e);
}
function Sl(e, t = []) {
  let n = [];
  function r(i, o) {
    const a = w.createContext(o),
      l = n.length;
    n = [...n, o];
    const u = (d) => {
      var g;
      const { scope: h, children: p, ...x } = d,
        v = ((g = h == null ? void 0 : h[e]) == null ? void 0 : g[l]) || a,
        b = w.useMemo(() => x, Object.values(x));
      return f.jsx(v.Provider, { value: b, children: p });
    };
    u.displayName = i + "Provider";
    function c(d, h) {
      var v;
      const p = ((v = h == null ? void 0 : h[e]) == null ? void 0 : v[l]) || a,
        x = w.useContext(p);
      if (x) return x;
      if (o !== void 0) return o;
      throw new Error(`\`${d}\` must be used within \`${i}\``);
    }
    return [u, c];
  }
  const s = () => {
    const i = n.map((o) => w.createContext(o));
    return function (a) {
      const l = (a == null ? void 0 : a[e]) || i;
      return w.useMemo(() => ({ [`__scope${e}`]: { ...a, [e]: l } }), [a, l]);
    };
  };
  return ((s.scopeName = e), [r, dC(s, ...t)]);
}
function dC(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((s) => ({ useScope: s(), scopeName: s.scopeName }));
    return function (i) {
      const o = r.reduce((a, { useScope: l, scopeName: u }) => {
        const d = l(i)[`__scope${u}`];
        return { ...a, ...d };
      }, {});
      return w.useMemo(() => ({ [`__scope${t.scopeName}`]: o }), [o]);
    };
  };
  return ((n.scopeName = t.scopeName), n);
}
function Ha(e) {
  const t = hC(e),
    n = w.forwardRef((r, s) => {
      const { children: i, ...o } = r,
        a = w.Children.toArray(i),
        l = a.find(mC);
      if (l) {
        const u = l.props.children,
          c = a.map((d) =>
            d === l
              ? w.Children.count(u) > 1
                ? w.Children.only(null)
                : w.isValidElement(u)
                  ? u.props.children
                  : null
              : d,
          );
        return f.jsx(t, {
          ...o,
          ref: s,
          children: w.isValidElement(u) ? w.cloneElement(u, void 0, c) : null,
        });
      }
      return f.jsx(t, { ...o, ref: s, children: i });
    });
  return ((n.displayName = `${e}.Slot`), n);
}
var fC = Ha("Slot");
function hC(e) {
  const t = w.forwardRef((n, r) => {
    const { children: s, ...i } = n;
    if (w.isValidElement(s)) {
      const o = yC(s),
        a = gC(i, s.props);
      return (
        s.type !== w.Fragment && (a.ref = r ? n0(r, o) : o),
        w.cloneElement(s, a)
      );
    }
    return w.Children.count(s) > 1 ? w.Children.only(null) : null;
  });
  return ((t.displayName = `${e}.SlotClone`), t);
}
var r0 = Symbol("radix.slottable");
function pC(e) {
  const t = ({ children: n }) => f.jsx(f.Fragment, { children: n });
  return ((t.displayName = `${e}.Slottable`), (t.__radixId = r0), t);
}
function mC(e) {
  return (
    w.isValidElement(e) &&
    typeof e.type == "function" &&
    "__radixId" in e.type &&
    e.type.__radixId === r0
  );
}
function gC(e, t) {
  const n = { ...t };
  for (const r in t) {
    const s = e[r],
      i = t[r];
    /^on[A-Z]/.test(r)
      ? s && i
        ? (n[r] = (...a) => {
            const l = i(...a);
            return (s(...a), l);
          })
        : s && (n[r] = s)
      : r === "style"
        ? (n[r] = { ...s, ...i })
        : r === "className" && (n[r] = [s, i].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function yC(e) {
  var r, s;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (s = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : s.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
function vC(e) {
  const t = e + "CollectionProvider",
    [n, r] = Sl(t),
    [s, i] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
    o = (v) => {
      const { scope: b, children: g } = v,
        m = D.useRef(null),
        y = D.useRef(new Map()).current;
      return f.jsx(s, { scope: b, itemMap: y, collectionRef: m, children: g });
    };
  o.displayName = t;
  const a = e + "CollectionSlot",
    l = Ha(a),
    u = D.forwardRef((v, b) => {
      const { scope: g, children: m } = v,
        y = i(a, g),
        S = Ft(b, y.collectionRef);
      return f.jsx(l, { ref: S, children: m });
    });
  u.displayName = a;
  const c = e + "CollectionItemSlot",
    d = "data-radix-collection-item",
    h = Ha(c),
    p = D.forwardRef((v, b) => {
      const { scope: g, children: m, ...y } = v,
        S = D.useRef(null),
        C = Ft(b, S),
        E = i(c, g);
      return (
        D.useEffect(
          () => (
            E.itemMap.set(S, { ref: S, ...y }),
            () => void E.itemMap.delete(S)
          ),
        ),
        f.jsx(h, { [d]: "", ref: C, children: m })
      );
    });
  p.displayName = c;
  function x(v) {
    const b = i(e + "CollectionConsumer", v);
    return D.useCallback(() => {
      const m = b.collectionRef.current;
      if (!m) return [];
      const y = Array.from(m.querySelectorAll(`[${d}]`));
      return Array.from(b.itemMap.values()).sort(
        (E, P) => y.indexOf(E.ref.current) - y.indexOf(P.ref.current),
      );
    }, [b.collectionRef, b.itemMap]);
  }
  return [{ Provider: o, Slot: u, ItemSlot: p }, x, r];
}
var xC = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul",
  ],
  tt = xC.reduce((e, t) => {
    const n = Ha(`Primitive.${t}`),
      r = w.forwardRef((s, i) => {
        const { asChild: o, ...a } = s,
          l = o ? n : t;
        return (
          typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
          f.jsx(l, { ...a, ref: i })
        );
      });
    return ((r.displayName = `Primitive.${t}`), { ...e, [t]: r });
  }, {});
function s0(e, t) {
  e && vo.flushSync(() => e.dispatchEvent(t));
}
function tr(e) {
  const t = w.useRef(e);
  return (
    w.useEffect(() => {
      t.current = e;
    }),
    w.useMemo(
      () =>
        (...n) => {
          var r;
          return (r = t.current) == null ? void 0 : r.call(t, ...n);
        },
      [],
    )
  );
}
function wC(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = tr(e);
  w.useEffect(() => {
    const r = (s) => {
      s.key === "Escape" && n(s);
    };
    return (
      t.addEventListener("keydown", r, { capture: !0 }),
      () => t.removeEventListener("keydown", r, { capture: !0 })
    );
  }, [n, t]);
}
var bC = "DismissableLayer",
  Ac = "dismissableLayer.update",
  SC = "dismissableLayer.pointerDownOutside",
  CC = "dismissableLayer.focusOutside",
  Rp,
  i0 = w.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  hf = w.forwardRef((e, t) => {
    const {
        disableOutsidePointerEvents: n = !1,
        onEscapeKeyDown: r,
        onPointerDownOutside: s,
        onFocusOutside: i,
        onInteractOutside: o,
        onDismiss: a,
        ...l
      } = e,
      u = w.useContext(i0),
      [c, d] = w.useState(null),
      h =
        (c == null ? void 0 : c.ownerDocument) ??
        (globalThis == null ? void 0 : globalThis.document),
      [, p] = w.useState({}),
      x = Ft(t, (P) => d(P)),
      v = Array.from(u.layers),
      [b] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1),
      g = v.indexOf(b),
      m = c ? v.indexOf(c) : -1,
      y = u.layersWithOutsidePointerEventsDisabled.size > 0,
      S = m >= g,
      C = PC((P) => {
        const T = P.target,
          R = [...u.branches].some((A) => A.contains(T));
        !S ||
          R ||
          (s == null || s(P),
          o == null || o(P),
          P.defaultPrevented || a == null || a());
      }, h),
      E = TC((P) => {
        const T = P.target;
        [...u.branches].some((A) => A.contains(T)) ||
          (i == null || i(P),
          o == null || o(P),
          P.defaultPrevented || a == null || a());
      }, h);
    return (
      wC((P) => {
        m === u.layers.size - 1 &&
          (r == null || r(P),
          !P.defaultPrevented && a && (P.preventDefault(), a()));
      }, h),
      w.useEffect(() => {
        if (c)
          return (
            n &&
              (u.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((Rp = h.body.style.pointerEvents),
                (h.body.style.pointerEvents = "none")),
              u.layersWithOutsidePointerEventsDisabled.add(c)),
            u.layers.add(c),
            Ap(),
            () => {
              n &&
                u.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (h.body.style.pointerEvents = Rp);
            }
          );
      }, [c, h, n, u]),
      w.useEffect(
        () => () => {
          c &&
            (u.layers.delete(c),
            u.layersWithOutsidePointerEventsDisabled.delete(c),
            Ap());
        },
        [c, u],
      ),
      w.useEffect(() => {
        const P = () => p({});
        return (
          document.addEventListener(Ac, P),
          () => document.removeEventListener(Ac, P)
        );
      }, []),
      f.jsx(tt.div, {
        ...l,
        ref: x,
        style: {
          pointerEvents: y ? (S ? "auto" : "none") : void 0,
          ...e.style,
        },
        onFocusCapture: Pe(e.onFocusCapture, E.onFocusCapture),
        onBlurCapture: Pe(e.onBlurCapture, E.onBlurCapture),
        onPointerDownCapture: Pe(
          e.onPointerDownCapture,
          C.onPointerDownCapture,
        ),
      })
    );
  });
hf.displayName = bC;
var EC = "DismissableLayerBranch",
  o0 = w.forwardRef((e, t) => {
    const n = w.useContext(i0),
      r = w.useRef(null),
      s = Ft(t, r);
    return (
      w.useEffect(() => {
        const i = r.current;
        if (i)
          return (
            n.branches.add(i),
            () => {
              n.branches.delete(i);
            }
          );
      }, [n.branches]),
      f.jsx(tt.div, { ...e, ref: s })
    );
  });
o0.displayName = EC;
function PC(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = tr(e),
    r = w.useRef(!1),
    s = w.useRef(() => {});
  return (
    w.useEffect(() => {
      const i = (a) => {
          if (a.target && !r.current) {
            let l = function () {
              a0(SC, n, u, { discrete: !0 });
            };
            const u = { originalEvent: a };
            a.pointerType === "touch"
              ? (t.removeEventListener("click", s.current),
                (s.current = l),
                t.addEventListener("click", s.current, { once: !0 }))
              : l();
          } else t.removeEventListener("click", s.current);
          r.current = !1;
        },
        o = window.setTimeout(() => {
          t.addEventListener("pointerdown", i);
        }, 0);
      return () => {
        (window.clearTimeout(o),
          t.removeEventListener("pointerdown", i),
          t.removeEventListener("click", s.current));
      };
    }, [t, n]),
    { onPointerDownCapture: () => (r.current = !0) }
  );
}
function TC(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = tr(e),
    r = w.useRef(!1);
  return (
    w.useEffect(() => {
      const s = (i) => {
        i.target &&
          !r.current &&
          a0(CC, n, { originalEvent: i }, { discrete: !1 });
      };
      return (
        t.addEventListener("focusin", s),
        () => t.removeEventListener("focusin", s)
      );
    }, [t, n]),
    {
      onFocusCapture: () => (r.current = !0),
      onBlurCapture: () => (r.current = !1),
    }
  );
}
function Ap() {
  const e = new CustomEvent(Ac);
  document.dispatchEvent(e);
}
function a0(e, t, n, { discrete: r }) {
  const s = n.originalEvent.target,
    i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  (t && s.addEventListener(e, t, { once: !0 }),
    r ? s0(s, i) : s.dispatchEvent(i));
}
var kC = hf,
  jC = o0,
  nr = globalThis != null && globalThis.document ? w.useLayoutEffect : () => {},
  NC = "Portal",
  l0 = w.forwardRef((e, t) => {
    var a;
    const { container: n, ...r } = e,
      [s, i] = w.useState(!1);
    nr(() => i(!0), []);
    const o =
      n ||
      (s &&
        ((a = globalThis == null ? void 0 : globalThis.document) == null
          ? void 0
          : a.body));
    return o ? Jv.createPortal(f.jsx(tt.div, { ...r, ref: t }), o) : null;
  });
l0.displayName = NC;
function RC(e, t) {
  return w.useReducer((n, r) => t[n][r] ?? n, e);
}
var pf = (e) => {
  const { present: t, children: n } = e,
    r = AC(t),
    s =
      typeof n == "function" ? n({ present: r.isPresent }) : w.Children.only(n),
    i = Ft(r.ref, MC(s));
  return typeof n == "function" || r.isPresent
    ? w.cloneElement(s, { ref: i })
    : null;
};
pf.displayName = "Presence";
function AC(e) {
  const [t, n] = w.useState(),
    r = w.useRef(null),
    s = w.useRef(e),
    i = w.useRef("none"),
    o = e ? "mounted" : "unmounted",
    [a, l] = RC(o, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    w.useEffect(() => {
      const u = Yo(r.current);
      i.current = a === "mounted" ? u : "none";
    }, [a]),
    nr(() => {
      const u = r.current,
        c = s.current;
      if (c !== e) {
        const h = i.current,
          p = Yo(u);
        (e
          ? l("MOUNT")
          : p === "none" || (u == null ? void 0 : u.display) === "none"
            ? l("UNMOUNT")
            : l(c && h !== p ? "ANIMATION_OUT" : "UNMOUNT"),
          (s.current = e));
      }
    }, [e, l]),
    nr(() => {
      if (t) {
        let u;
        const c = t.ownerDocument.defaultView ?? window,
          d = (p) => {
            const v = Yo(r.current).includes(p.animationName);
            if (p.target === t && v && (l("ANIMATION_END"), !s.current)) {
              const b = t.style.animationFillMode;
              ((t.style.animationFillMode = "forwards"),
                (u = c.setTimeout(() => {
                  t.style.animationFillMode === "forwards" &&
                    (t.style.animationFillMode = b);
                })));
            }
          },
          h = (p) => {
            p.target === t && (i.current = Yo(r.current));
          };
        return (
          t.addEventListener("animationstart", h),
          t.addEventListener("animationcancel", d),
          t.addEventListener("animationend", d),
          () => {
            (c.clearTimeout(u),
              t.removeEventListener("animationstart", h),
              t.removeEventListener("animationcancel", d),
              t.removeEventListener("animationend", d));
          }
        );
      } else l("ANIMATION_END");
    }, [t, l]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(a),
      ref: w.useCallback((u) => {
        ((r.current = u ? getComputedStyle(u) : null), n(u));
      }, []),
    }
  );
}
function Yo(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function MC(e) {
  var r, s;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (s = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : s.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
var DC = Xg[" useInsertionEffect ".trim().toString()] || nr;
function LC({ prop: e, defaultProp: t, onChange: n = () => {}, caller: r }) {
  const [s, i, o] = OC({ defaultProp: t, onChange: n }),
    a = e !== void 0,
    l = a ? e : s;
  {
    const c = w.useRef(e !== void 0);
    w.useEffect(() => {
      const d = c.current;
      (d !== a &&
        console.warn(
          `${r} is changing from ${d ? "controlled" : "uncontrolled"} to ${a ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`,
        ),
        (c.current = a));
    }, [a, r]);
  }
  const u = w.useCallback(
    (c) => {
      var d;
      if (a) {
        const h = IC(c) ? c(e) : c;
        h !== e && ((d = o.current) == null || d.call(o, h));
      } else i(c);
    },
    [a, e, i, o],
  );
  return [l, u];
}
function OC({ defaultProp: e, onChange: t }) {
  const [n, r] = w.useState(e),
    s = w.useRef(n),
    i = w.useRef(t);
  return (
    DC(() => {
      i.current = t;
    }, [t]),
    w.useEffect(() => {
      var o;
      s.current !== n &&
        ((o = i.current) == null || o.call(i, n), (s.current = n));
    }, [n, s]),
    [n, r, i]
  );
}
function IC(e) {
  return typeof e == "function";
}
var FC = Object.freeze({
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal",
  }),
  VC = "VisuallyHidden",
  Cl = w.forwardRef((e, t) =>
    f.jsx(tt.span, { ...e, ref: t, style: { ...FC, ...e.style } }),
  );
Cl.displayName = VC;
var _C = Cl,
  mf = "ToastProvider",
  [gf, zC, BC] = vC("Toast"),
  [u0, s4] = Sl("Toast", [BC]),
  [$C, El] = u0(mf),
  c0 = (e) => {
    const {
        __scopeToast: t,
        label: n = "Notification",
        duration: r = 5e3,
        swipeDirection: s = "right",
        swipeThreshold: i = 50,
        children: o,
      } = e,
      [a, l] = w.useState(null),
      [u, c] = w.useState(0),
      d = w.useRef(!1),
      h = w.useRef(!1);
    return (
      n.trim() ||
        console.error(
          `Invalid prop \`label\` supplied to \`${mf}\`. Expected non-empty \`string\`.`,
        ),
      f.jsx(gf.Provider, {
        scope: t,
        children: f.jsx($C, {
          scope: t,
          label: n,
          duration: r,
          swipeDirection: s,
          swipeThreshold: i,
          toastCount: u,
          viewport: a,
          onViewportChange: l,
          onToastAdd: w.useCallback(() => c((p) => p + 1), []),
          onToastRemove: w.useCallback(() => c((p) => p - 1), []),
          isFocusedToastEscapeKeyDownRef: d,
          isClosePausedRef: h,
          children: o,
        }),
      })
    );
  };
c0.displayName = mf;
var d0 = "ToastViewport",
  UC = ["F8"],
  Mc = "toast.viewportPause",
  Dc = "toast.viewportResume",
  f0 = w.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        hotkey: r = UC,
        label: s = "Notifications ({hotkey})",
        ...i
      } = e,
      o = El(d0, n),
      a = zC(n),
      l = w.useRef(null),
      u = w.useRef(null),
      c = w.useRef(null),
      d = w.useRef(null),
      h = Ft(t, d, o.onViewportChange),
      p = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
      x = o.toastCount > 0;
    (w.useEffect(() => {
      const b = (g) => {
        var y;
        r.length !== 0 &&
          r.every((S) => g[S] || g.code === S) &&
          ((y = d.current) == null || y.focus());
      };
      return (
        document.addEventListener("keydown", b),
        () => document.removeEventListener("keydown", b)
      );
    }, [r]),
      w.useEffect(() => {
        const b = l.current,
          g = d.current;
        if (x && b && g) {
          const m = () => {
              if (!o.isClosePausedRef.current) {
                const E = new CustomEvent(Mc);
                (g.dispatchEvent(E), (o.isClosePausedRef.current = !0));
              }
            },
            y = () => {
              if (o.isClosePausedRef.current) {
                const E = new CustomEvent(Dc);
                (g.dispatchEvent(E), (o.isClosePausedRef.current = !1));
              }
            },
            S = (E) => {
              !b.contains(E.relatedTarget) && y();
            },
            C = () => {
              b.contains(document.activeElement) || y();
            };
          return (
            b.addEventListener("focusin", m),
            b.addEventListener("focusout", S),
            b.addEventListener("pointermove", m),
            b.addEventListener("pointerleave", C),
            window.addEventListener("blur", m),
            window.addEventListener("focus", y),
            () => {
              (b.removeEventListener("focusin", m),
                b.removeEventListener("focusout", S),
                b.removeEventListener("pointermove", m),
                b.removeEventListener("pointerleave", C),
                window.removeEventListener("blur", m),
                window.removeEventListener("focus", y));
            }
          );
        }
      }, [x, o.isClosePausedRef]));
    const v = w.useCallback(
      ({ tabbingDirection: b }) => {
        const m = a().map((y) => {
          const S = y.ref.current,
            C = [S, ...nE(S)];
          return b === "forwards" ? C : C.reverse();
        });
        return (b === "forwards" ? m.reverse() : m).flat();
      },
      [a],
    );
    return (
      w.useEffect(() => {
        const b = d.current;
        if (b) {
          const g = (m) => {
            var C, E, P;
            const y = m.altKey || m.ctrlKey || m.metaKey;
            if (m.key === "Tab" && !y) {
              const T = document.activeElement,
                R = m.shiftKey;
              if (m.target === b && R) {
                (C = u.current) == null || C.focus();
                return;
              }
              const I = v({ tabbingDirection: R ? "backwards" : "forwards" }),
                Y = I.findIndex((L) => L === T);
              yu(I.slice(Y + 1))
                ? m.preventDefault()
                : R
                  ? (E = u.current) == null || E.focus()
                  : (P = c.current) == null || P.focus();
            }
          };
          return (
            b.addEventListener("keydown", g),
            () => b.removeEventListener("keydown", g)
          );
        }
      }, [a, v]),
      f.jsxs(jC, {
        ref: l,
        role: "region",
        "aria-label": s.replace("{hotkey}", p),
        tabIndex: -1,
        style: { pointerEvents: x ? void 0 : "none" },
        children: [
          x &&
            f.jsx(Lc, {
              ref: u,
              onFocusFromOutsideViewport: () => {
                const b = v({ tabbingDirection: "forwards" });
                yu(b);
              },
            }),
          f.jsx(gf.Slot, {
            scope: n,
            children: f.jsx(tt.ol, { tabIndex: -1, ...i, ref: h }),
          }),
          x &&
            f.jsx(Lc, {
              ref: c,
              onFocusFromOutsideViewport: () => {
                const b = v({ tabbingDirection: "backwards" });
                yu(b);
              },
            }),
        ],
      })
    );
  });
f0.displayName = d0;
var h0 = "ToastFocusProxy",
  Lc = w.forwardRef((e, t) => {
    const { __scopeToast: n, onFocusFromOutsideViewport: r, ...s } = e,
      i = El(h0, n);
    return f.jsx(Cl, {
      "aria-hidden": !0,
      tabIndex: 0,
      ...s,
      ref: t,
      style: { position: "fixed" },
      onFocus: (o) => {
        var u;
        const a = o.relatedTarget;
        !((u = i.viewport) != null && u.contains(a)) && r();
      },
    });
  });
Lc.displayName = h0;
var xo = "Toast",
  WC = "toast.swipeStart",
  HC = "toast.swipeMove",
  KC = "toast.swipeCancel",
  YC = "toast.swipeEnd",
  p0 = w.forwardRef((e, t) => {
    const { forceMount: n, open: r, defaultOpen: s, onOpenChange: i, ...o } = e,
      [a, l] = LC({ prop: r, defaultProp: s ?? !0, onChange: i, caller: xo });
    return f.jsx(pf, {
      present: n || a,
      children: f.jsx(XC, {
        open: a,
        ...o,
        ref: t,
        onClose: () => l(!1),
        onPause: tr(e.onPause),
        onResume: tr(e.onResume),
        onSwipeStart: Pe(e.onSwipeStart, (u) => {
          u.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: Pe(e.onSwipeMove, (u) => {
          const { x: c, y: d } = u.detail.delta;
          (u.currentTarget.setAttribute("data-swipe", "move"),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-x",
              `${c}px`,
            ),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-y",
              `${d}px`,
            ));
        }),
        onSwipeCancel: Pe(e.onSwipeCancel, (u) => {
          (u.currentTarget.setAttribute("data-swipe", "cancel"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y"));
        }),
        onSwipeEnd: Pe(e.onSwipeEnd, (u) => {
          const { x: c, y: d } = u.detail.delta;
          (u.currentTarget.setAttribute("data-swipe", "end"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-x",
              `${c}px`,
            ),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-y",
              `${d}px`,
            ),
            l(!1));
        }),
      }),
    });
  });
p0.displayName = xo;
var [GC, QC] = u0(xo, { onClose() {} }),
  XC = w.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        type: r = "foreground",
        duration: s,
        open: i,
        onClose: o,
        onEscapeKeyDown: a,
        onPause: l,
        onResume: u,
        onSwipeStart: c,
        onSwipeMove: d,
        onSwipeCancel: h,
        onSwipeEnd: p,
        ...x
      } = e,
      v = El(xo, n),
      [b, g] = w.useState(null),
      m = Ft(t, (L) => g(L)),
      y = w.useRef(null),
      S = w.useRef(null),
      C = s || v.duration,
      E = w.useRef(0),
      P = w.useRef(C),
      T = w.useRef(0),
      { onToastAdd: R, onToastRemove: A } = v,
      z = tr(() => {
        var G;
        ((b == null ? void 0 : b.contains(document.activeElement)) &&
          ((G = v.viewport) == null || G.focus()),
          o());
      }),
      I = w.useCallback(
        (L) => {
          !L ||
            L === 1 / 0 ||
            (window.clearTimeout(T.current),
            (E.current = new Date().getTime()),
            (T.current = window.setTimeout(z, L)));
        },
        [z],
      );
    (w.useEffect(() => {
      const L = v.viewport;
      if (L) {
        const G = () => {
            (I(P.current), u == null || u());
          },
          $ = () => {
            const _ = new Date().getTime() - E.current;
            ((P.current = P.current - _),
              window.clearTimeout(T.current),
              l == null || l());
          };
        return (
          L.addEventListener(Mc, $),
          L.addEventListener(Dc, G),
          () => {
            (L.removeEventListener(Mc, $), L.removeEventListener(Dc, G));
          }
        );
      }
    }, [v.viewport, C, l, u, I]),
      w.useEffect(() => {
        i && !v.isClosePausedRef.current && I(C);
      }, [i, C, v.isClosePausedRef, I]),
      w.useEffect(() => (R(), () => A()), [R, A]));
    const Y = w.useMemo(() => (b ? b0(b) : null), [b]);
    return v.viewport
      ? f.jsxs(f.Fragment, {
          children: [
            Y &&
              f.jsx(qC, {
                __scopeToast: n,
                role: "status",
                "aria-live": r === "foreground" ? "assertive" : "polite",
                "aria-atomic": !0,
                children: Y,
              }),
            f.jsx(GC, {
              scope: n,
              onClose: z,
              children: vo.createPortal(
                f.jsx(gf.ItemSlot, {
                  scope: n,
                  children: f.jsx(kC, {
                    asChild: !0,
                    onEscapeKeyDown: Pe(a, () => {
                      (v.isFocusedToastEscapeKeyDownRef.current || z(),
                        (v.isFocusedToastEscapeKeyDownRef.current = !1));
                    }),
                    children: f.jsx(tt.li, {
                      role: "status",
                      "aria-live": "off",
                      "aria-atomic": !0,
                      tabIndex: 0,
                      "data-state": i ? "open" : "closed",
                      "data-swipe-direction": v.swipeDirection,
                      ...x,
                      ref: m,
                      style: {
                        userSelect: "none",
                        touchAction: "none",
                        ...e.style,
                      },
                      onKeyDown: Pe(e.onKeyDown, (L) => {
                        L.key === "Escape" &&
                          (a == null || a(L.nativeEvent),
                          L.nativeEvent.defaultPrevented ||
                            ((v.isFocusedToastEscapeKeyDownRef.current = !0),
                            z()));
                      }),
                      onPointerDown: Pe(e.onPointerDown, (L) => {
                        L.button === 0 &&
                          (y.current = { x: L.clientX, y: L.clientY });
                      }),
                      onPointerMove: Pe(e.onPointerMove, (L) => {
                        if (!y.current) return;
                        const G = L.clientX - y.current.x,
                          $ = L.clientY - y.current.y,
                          _ = !!S.current,
                          k = ["left", "right"].includes(v.swipeDirection),
                          N = ["left", "up"].includes(v.swipeDirection)
                            ? Math.min
                            : Math.max,
                          O = k ? N(0, G) : 0,
                          U = k ? 0 : N(0, $),
                          B = L.pointerType === "touch" ? 10 : 2,
                          Q = { x: O, y: U },
                          q = { originalEvent: L, delta: Q };
                        _
                          ? ((S.current = Q), Go(HC, d, q, { discrete: !1 }))
                          : Mp(Q, v.swipeDirection, B)
                            ? ((S.current = Q),
                              Go(WC, c, q, { discrete: !1 }),
                              L.target.setPointerCapture(L.pointerId))
                            : (Math.abs(G) > B || Math.abs($) > B) &&
                              (y.current = null);
                      }),
                      onPointerUp: Pe(e.onPointerUp, (L) => {
                        const G = S.current,
                          $ = L.target;
                        if (
                          ($.hasPointerCapture(L.pointerId) &&
                            $.releasePointerCapture(L.pointerId),
                          (S.current = null),
                          (y.current = null),
                          G)
                        ) {
                          const _ = L.currentTarget,
                            k = { originalEvent: L, delta: G };
                          (Mp(G, v.swipeDirection, v.swipeThreshold)
                            ? Go(YC, p, k, { discrete: !0 })
                            : Go(KC, h, k, { discrete: !0 }),
                            _.addEventListener(
                              "click",
                              (N) => N.preventDefault(),
                              { once: !0 },
                            ));
                        }
                      }),
                    }),
                  }),
                }),
                v.viewport,
              ),
            }),
          ],
        })
      : null;
  }),
  qC = (e) => {
    const { __scopeToast: t, children: n, ...r } = e,
      s = El(xo, t),
      [i, o] = w.useState(!1),
      [a, l] = w.useState(!1);
    return (
      eE(() => o(!0)),
      w.useEffect(() => {
        const u = window.setTimeout(() => l(!0), 1e3);
        return () => window.clearTimeout(u);
      }, []),
      a
        ? null
        : f.jsx(l0, {
            asChild: !0,
            children: f.jsx(Cl, {
              ...r,
              children:
                i && f.jsxs(f.Fragment, { children: [s.label, " ", n] }),
            }),
          })
    );
  },
  ZC = "ToastTitle",
  m0 = w.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e;
    return f.jsx(tt.div, { ...r, ref: t });
  });
m0.displayName = ZC;
var JC = "ToastDescription",
  g0 = w.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e;
    return f.jsx(tt.div, { ...r, ref: t });
  });
g0.displayName = JC;
var y0 = "ToastAction",
  v0 = w.forwardRef((e, t) => {
    const { altText: n, ...r } = e;
    return n.trim()
      ? f.jsx(w0, {
          altText: n,
          asChild: !0,
          children: f.jsx(yf, { ...r, ref: t }),
        })
      : (console.error(
          `Invalid prop \`altText\` supplied to \`${y0}\`. Expected non-empty \`string\`.`,
        ),
        null);
  });
v0.displayName = y0;
var x0 = "ToastClose",
  yf = w.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e,
      s = QC(x0, n);
    return f.jsx(w0, {
      asChild: !0,
      children: f.jsx(tt.button, {
        type: "button",
        ...r,
        ref: t,
        onClick: Pe(e.onClick, s.onClose),
      }),
    });
  });
yf.displayName = x0;
var w0 = w.forwardRef((e, t) => {
  const { __scopeToast: n, altText: r, ...s } = e;
  return f.jsx(tt.div, {
    "data-radix-toast-announce-exclude": "",
    "data-radix-toast-announce-alt": r || void 0,
    ...s,
    ref: t,
  });
});
function b0(e) {
  const t = [];
  return (
    Array.from(e.childNodes).forEach((r) => {
      if (
        (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent),
        tE(r))
      ) {
        const s = r.ariaHidden || r.hidden || r.style.display === "none",
          i = r.dataset.radixToastAnnounceExclude === "";
        if (!s)
          if (i) {
            const o = r.dataset.radixToastAnnounceAlt;
            o && t.push(o);
          } else t.push(...b0(r));
      }
    }),
    t
  );
}
function Go(e, t, n, { discrete: r }) {
  const s = n.originalEvent.currentTarget,
    i = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: n });
  (t && s.addEventListener(e, t, { once: !0 }),
    r ? s0(s, i) : s.dispatchEvent(i));
}
var Mp = (e, t, n = 0) => {
  const r = Math.abs(e.x),
    s = Math.abs(e.y),
    i = r > s;
  return t === "left" || t === "right" ? i && r > n : !i && s > n;
};
function eE(e = () => {}) {
  const t = tr(e);
  nr(() => {
    let n = 0,
      r = 0;
    return (
      (n = window.requestAnimationFrame(
        () => (r = window.requestAnimationFrame(t)),
      )),
      () => {
        (window.cancelAnimationFrame(n), window.cancelAnimationFrame(r));
      }
    );
  }, [t]);
}
function tE(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function nE(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) => {
        const s = r.tagName === "INPUT" && r.type === "hidden";
        return r.disabled || r.hidden || s
          ? NodeFilter.FILTER_SKIP
          : r.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function yu(e) {
  const t = document.activeElement;
  return e.some((n) =>
    n === t ? !0 : (n.focus(), document.activeElement !== t),
  );
}
var rE = c0,
  S0 = f0,
  C0 = p0,
  E0 = m0,
  P0 = g0,
  T0 = v0,
  k0 = yf;
function j0(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var s = e.length;
      for (t = 0; t < s; t++)
        e[t] && (n = j0(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function N0() {
  for (var e, t, n = 0, r = "", s = arguments.length; n < s; n++)
    (e = arguments[n]) && (t = j0(e)) && (r && (r += " "), (r += t));
  return r;
}
const Dp = (e) => (typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e),
  Lp = N0,
  R0 = (e, t) => (n) => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
      return Lp(
        e,
        n == null ? void 0 : n.class,
        n == null ? void 0 : n.className,
      );
    const { variants: s, defaultVariants: i } = t,
      o = Object.keys(s).map((u) => {
        const c = n == null ? void 0 : n[u],
          d = i == null ? void 0 : i[u];
        if (c === null) return null;
        const h = Dp(c) || Dp(d);
        return s[u][h];
      }),
      a =
        n &&
        Object.entries(n).reduce((u, c) => {
          let [d, h] = c;
          return (h === void 0 || (u[d] = h), u);
        }, {}),
      l =
        t == null || (r = t.compoundVariants) === null || r === void 0
          ? void 0
          : r.reduce((u, c) => {
              let { class: d, className: h, ...p } = c;
              return Object.entries(p).every((x) => {
                let [v, b] = x;
                return Array.isArray(b)
                  ? b.includes({ ...i, ...a }[v])
                  : { ...i, ...a }[v] === b;
              })
                ? [...u, d, h]
                : u;
            }, []);
    return Lp(
      e,
      o,
      l,
      n == null ? void 0 : n.class,
      n == null ? void 0 : n.className,
    );
  };
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const sE = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  A0 = (...e) =>
    e
      .filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var iE = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const oE = w.forwardRef(
  (
    {
      color: e = "currentColor",
      size: t = 24,
      strokeWidth: n = 2,
      absoluteStrokeWidth: r,
      className: s = "",
      children: i,
      iconNode: o,
      ...a
    },
    l,
  ) =>
    w.createElement(
      "svg",
      {
        ref: l,
        ...iE,
        width: t,
        height: t,
        stroke: e,
        strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
        className: A0("lucide", s),
        ...a,
      },
      [
        ...o.map(([u, c]) => w.createElement(u, c)),
        ...(Array.isArray(i) ? i : [i]),
      ],
    ),
);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ne = (e, t) => {
  const n = w.forwardRef(({ className: r, ...s }, i) =>
    w.createElement(oE, {
      ref: i,
      iconNode: t,
      className: A0(`lucide-${sE(e)}`, r),
      ...s,
    }),
  );
  return ((n.displayName = `${e}`), n);
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const vf = ne("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Oc = ne("Award", [
  [
    "path",
    {
      d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
      key: "1yiouv",
    },
  ],
  ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const aE = ne("Beaker", [
  ["path", { d: "M4.5 3h15", key: "c7n0jr" }],
  ["path", { d: "M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3", key: "m1uhx7" }],
  ["path", { d: "M6 14h12", key: "4cwo0f" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const xf = ne("BookOpen", [
  ["path", { d: "M12 7v14", key: "1akyts" }],
  [
    "path",
    {
      d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
      key: "ruj8y",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const lE = ne("Brain", [
  [
    "path",
    {
      d: "M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",
      key: "l5xja",
    },
  ],
  [
    "path",
    {
      d: "M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",
      key: "ep3f8r",
    },
  ],
  ["path", { d: "M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4", key: "1p4c4q" }],
  ["path", { d: "M17.599 6.5a3 3 0 0 0 .399-1.375", key: "tmeiqw" }],
  ["path", { d: "M6.003 5.125A3 3 0 0 0 6.401 6.5", key: "105sqy" }],
  ["path", { d: "M3.477 10.896a4 4 0 0 1 .585-.396", key: "ql3yin" }],
  ["path", { d: "M19.938 10.5a4 4 0 0 1 .585.396", key: "1qfode" }],
  ["path", { d: "M6 18a4 4 0 0 1-1.967-.516", key: "2e4loj" }],
  ["path", { d: "M19.967 17.484A4 4 0 0 1 18 18", key: "159ez6" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const uE = ne("Bug", [
  ["path", { d: "m8 2 1.88 1.88", key: "fmnt4t" }],
  ["path", { d: "M14.12 3.88 16 2", key: "qol33r" }],
  ["path", { d: "M9 7.13v-1a3.003 3.003 0 1 1 6 0v1", key: "d7y7pr" }],
  [
    "path",
    {
      d: "M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6",
      key: "xs1cw7",
    },
  ],
  ["path", { d: "M12 20v-9", key: "1qisl0" }],
  ["path", { d: "M6.53 9C4.6 8.8 3 7.1 3 5", key: "32zzws" }],
  ["path", { d: "M6 13H2", key: "82j7cp" }],
  ["path", { d: "M3 21c0-2.1 1.7-3.9 3.8-4", key: "4p0ekp" }],
  ["path", { d: "M20.97 5c0 2.1-1.6 3.8-3.5 4", key: "18gb23" }],
  ["path", { d: "M22 13h-4", key: "1jl80f" }],
  ["path", { d: "M17.2 17c2.1.1 3.8 1.9 3.8 4", key: "k3fwyw" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const cE = ne("Calendar", [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  [
    "rect",
    { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" },
  ],
  ["path", { d: "M3 10h18", key: "8toen8" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Op = ne("CircleCheck", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const wf = ne("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ip = ne("Eye", [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0",
    },
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const dE = ne("Facebook", [
  [
    "path",
    {
      d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
      key: "1jg4f8",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const fE = ne("GraduationCap", [
  [
    "path",
    {
      d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",
      key: "j76jl0",
    },
  ],
  ["path", { d: "M22 10v6", key: "1lu8f3" }],
  ["path", { d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5", key: "1r8lef" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const hE = ne("Heart", [
  [
    "path",
    {
      d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
      key: "c3ymky",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const pE = ne("Instagram", [
  [
    "rect",
    {
      width: "20",
      height: "20",
      x: "2",
      y: "2",
      rx: "5",
      ry: "5",
      key: "2e1cvw",
    },
  ],
  [
    "path",
    { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z", key: "9exkf1" },
  ],
  ["line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5", key: "r4j83e" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const mE = ne("Leaf", [
  [
    "path",
    {
      d: "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",
      key: "nnexq3",
    },
  ],
  [
    "path",
    { d: "M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12", key: "mt58a7" },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const gE = ne("LoaderCircle", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const yE = ne("Mail", [
  [
    "rect",
    { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" },
  ],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Fp = ne("MapPin", [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z",
    },
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const vE = ne("Menu", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const M0 = ne("Phone", [
  [
    "path",
    {
      d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
      key: "foiqr5",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const xE = ne("Quote", [
  [
    "path",
    {
      d: "M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
      key: "rib7q0",
    },
  ],
  [
    "path",
    {
      d: "M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
      key: "1ymkrd",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const wE = ne("Send", [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3",
    },
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ic = ne("Target", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const D0 = ne("Trophy", [
  ["path", { d: "M6 9H4.5a2.5 2.5 0 0 1 0-5H6", key: "17hqa7" }],
  ["path", { d: "M18 9h1.5a2.5 2.5 0 0 0 0-5H18", key: "lmptdp" }],
  ["path", { d: "M4 22h16", key: "57wxv0" }],
  [
    "path",
    {
      d: "M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",
      key: "1nw9bq",
    },
  ],
  [
    "path",
    {
      d: "M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",
      key: "1np0yb",
    },
  ],
  ["path", { d: "M18 2H6v7a6 6 0 0 0 12 0V2Z", key: "u46fv3" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const bE = ne("UserCheck", [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["polyline", { points: "16 11 18 13 22 9", key: "1pwet4" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Fc = ne("Users", [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Vc = ne("Video", [
  [
    "path",
    {
      d: "m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",
      key: "ftymec",
    },
  ],
  [
    "rect",
    { x: "2", y: "6", width: "14", height: "12", rx: "2", key: "158x01" },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const L0 = ne("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const SE = ne("Youtube", [
    [
      "path",
      {
        d: "M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",
        key: "1q2vi4",
      },
    ],
    ["path", { d: "m10 15 5-3-5-3z", key: "1jp15x" }],
  ]),
  bf = "-",
  CE = (e) => {
    const t = PE(e),
      { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
    return {
      getClassGroupId: (o) => {
        const a = o.split(bf);
        return (a[0] === "" && a.length !== 1 && a.shift(), O0(a, t) || EE(o));
      },
      getConflictingClassGroupIds: (o, a) => {
        const l = n[o] || [];
        return a && r[o] ? [...l, ...r[o]] : l;
      },
    };
  },
  O0 = (e, t) => {
    var o;
    if (e.length === 0) return t.classGroupId;
    const n = e[0],
      r = t.nextPart.get(n),
      s = r ? O0(e.slice(1), r) : void 0;
    if (s) return s;
    if (t.validators.length === 0) return;
    const i = e.join(bf);
    return (o = t.validators.find(({ validator: a }) => a(i))) == null
      ? void 0
      : o.classGroupId;
  },
  Vp = /^\[(.+)\]$/,
  EE = (e) => {
    if (Vp.test(e)) {
      const t = Vp.exec(e)[1],
        n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
      if (n) return "arbitrary.." + n;
    }
  },
  PE = (e) => {
    const { theme: t, prefix: n } = e,
      r = { nextPart: new Map(), validators: [] };
    return (
      kE(Object.entries(e.classGroups), n).forEach(([i, o]) => {
        _c(o, r, i, t);
      }),
      r
    );
  },
  _c = (e, t, n, r) => {
    e.forEach((s) => {
      if (typeof s == "string") {
        const i = s === "" ? t : _p(t, s);
        i.classGroupId = n;
        return;
      }
      if (typeof s == "function") {
        if (TE(s)) {
          _c(s(r), t, n, r);
          return;
        }
        t.validators.push({ validator: s, classGroupId: n });
        return;
      }
      Object.entries(s).forEach(([i, o]) => {
        _c(o, _p(t, i), n, r);
      });
    });
  },
  _p = (e, t) => {
    let n = e;
    return (
      t.split(bf).forEach((r) => {
        (n.nextPart.has(r) ||
          n.nextPart.set(r, { nextPart: new Map(), validators: [] }),
          (n = n.nextPart.get(r)));
      }),
      n
    );
  },
  TE = (e) => e.isThemeGetter,
  kE = (e, t) =>
    t
      ? e.map(([n, r]) => {
          const s = r.map((i) =>
            typeof i == "string"
              ? t + i
              : typeof i == "object"
                ? Object.fromEntries(
                    Object.entries(i).map(([o, a]) => [t + o, a]),
                  )
                : i,
          );
          return [n, s];
        })
      : e,
  jE = (e) => {
    if (e < 1) return { get: () => {}, set: () => {} };
    let t = 0,
      n = new Map(),
      r = new Map();
    const s = (i, o) => {
      (n.set(i, o), t++, t > e && ((t = 0), (r = n), (n = new Map())));
    };
    return {
      get(i) {
        let o = n.get(i);
        if (o !== void 0) return o;
        if ((o = r.get(i)) !== void 0) return (s(i, o), o);
      },
      set(i, o) {
        n.has(i) ? n.set(i, o) : s(i, o);
      },
    };
  },
  I0 = "!",
  NE = (e) => {
    const { separator: t, experimentalParseClassName: n } = e,
      r = t.length === 1,
      s = t[0],
      i = t.length,
      o = (a) => {
        const l = [];
        let u = 0,
          c = 0,
          d;
        for (let b = 0; b < a.length; b++) {
          let g = a[b];
          if (u === 0) {
            if (g === s && (r || a.slice(b, b + i) === t)) {
              (l.push(a.slice(c, b)), (c = b + i));
              continue;
            }
            if (g === "/") {
              d = b;
              continue;
            }
          }
          g === "[" ? u++ : g === "]" && u--;
        }
        const h = l.length === 0 ? a : a.substring(c),
          p = h.startsWith(I0),
          x = p ? h.substring(1) : h,
          v = d && d > c ? d - c : void 0;
        return {
          modifiers: l,
          hasImportantModifier: p,
          baseClassName: x,
          maybePostfixModifierPosition: v,
        };
      };
    return n ? (a) => n({ className: a, parseClassName: o }) : o;
  },
  RE = (e) => {
    if (e.length <= 1) return e;
    const t = [];
    let n = [];
    return (
      e.forEach((r) => {
        r[0] === "[" ? (t.push(...n.sort(), r), (n = [])) : n.push(r);
      }),
      t.push(...n.sort()),
      t
    );
  },
  AE = (e) => ({ cache: jE(e.cacheSize), parseClassName: NE(e), ...CE(e) }),
  ME = /\s+/,
  DE = (e, t) => {
    const {
        parseClassName: n,
        getClassGroupId: r,
        getConflictingClassGroupIds: s,
      } = t,
      i = [],
      o = e.trim().split(ME);
    let a = "";
    for (let l = o.length - 1; l >= 0; l -= 1) {
      const u = o[l],
        {
          modifiers: c,
          hasImportantModifier: d,
          baseClassName: h,
          maybePostfixModifierPosition: p,
        } = n(u);
      let x = !!p,
        v = r(x ? h.substring(0, p) : h);
      if (!v) {
        if (!x) {
          a = u + (a.length > 0 ? " " + a : a);
          continue;
        }
        if (((v = r(h)), !v)) {
          a = u + (a.length > 0 ? " " + a : a);
          continue;
        }
        x = !1;
      }
      const b = RE(c).join(":"),
        g = d ? b + I0 : b,
        m = g + v;
      if (i.includes(m)) continue;
      i.push(m);
      const y = s(v, x);
      for (let S = 0; S < y.length; ++S) {
        const C = y[S];
        i.push(g + C);
      }
      a = u + (a.length > 0 ? " " + a : a);
    }
    return a;
  };
function LE() {
  let e = 0,
    t,
    n,
    r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = F0(t)) && (r && (r += " "), (r += n));
  return r;
}
const F0 = (e) => {
  if (typeof e == "string") return e;
  let t,
    n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = F0(e[r])) && (n && (n += " "), (n += t));
  return n;
};
function OE(e, ...t) {
  let n,
    r,
    s,
    i = o;
  function o(l) {
    const u = t.reduce((c, d) => d(c), e());
    return ((n = AE(u)), (r = n.cache.get), (s = n.cache.set), (i = a), a(l));
  }
  function a(l) {
    const u = r(l);
    if (u) return u;
    const c = DE(l, n);
    return (s(l, c), c);
  }
  return function () {
    return i(LE.apply(null, arguments));
  };
}
const ie = (e) => {
    const t = (n) => n[e] || [];
    return ((t.isThemeGetter = !0), t);
  },
  V0 = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  IE = /^\d+\/\d+$/,
  FE = new Set(["px", "full", "screen"]),
  VE = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  _E =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  zE = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  BE = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  $E =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  tn = (e) => bs(e) || FE.has(e) || IE.test(e),
  Pn = (e) => Ks(e, "length", XE),
  bs = (e) => !!e && !Number.isNaN(Number(e)),
  vu = (e) => Ks(e, "number", bs),
  di = (e) => !!e && Number.isInteger(Number(e)),
  UE = (e) => e.endsWith("%") && bs(e.slice(0, -1)),
  K = (e) => V0.test(e),
  Tn = (e) => VE.test(e),
  WE = new Set(["length", "size", "percentage"]),
  HE = (e) => Ks(e, WE, _0),
  KE = (e) => Ks(e, "position", _0),
  YE = new Set(["image", "url"]),
  GE = (e) => Ks(e, YE, ZE),
  QE = (e) => Ks(e, "", qE),
  fi = () => !0,
  Ks = (e, t, n) => {
    const r = V0.exec(e);
    return r
      ? r[1]
        ? typeof t == "string"
          ? r[1] === t
          : t.has(r[1])
        : n(r[2])
      : !1;
  },
  XE = (e) => _E.test(e) && !zE.test(e),
  _0 = () => !1,
  qE = (e) => BE.test(e),
  ZE = (e) => $E.test(e),
  JE = () => {
    const e = ie("colors"),
      t = ie("spacing"),
      n = ie("blur"),
      r = ie("brightness"),
      s = ie("borderColor"),
      i = ie("borderRadius"),
      o = ie("borderSpacing"),
      a = ie("borderWidth"),
      l = ie("contrast"),
      u = ie("grayscale"),
      c = ie("hueRotate"),
      d = ie("invert"),
      h = ie("gap"),
      p = ie("gradientColorStops"),
      x = ie("gradientColorStopPositions"),
      v = ie("inset"),
      b = ie("margin"),
      g = ie("opacity"),
      m = ie("padding"),
      y = ie("saturate"),
      S = ie("scale"),
      C = ie("sepia"),
      E = ie("skew"),
      P = ie("space"),
      T = ie("translate"),
      R = () => ["auto", "contain", "none"],
      A = () => ["auto", "hidden", "clip", "visible", "scroll"],
      z = () => ["auto", K, t],
      I = () => [K, t],
      Y = () => ["", tn, Pn],
      L = () => ["auto", bs, K],
      G = () => [
        "bottom",
        "center",
        "left",
        "left-bottom",
        "left-top",
        "right",
        "right-bottom",
        "right-top",
        "top",
      ],
      $ = () => ["solid", "dashed", "dotted", "double", "none"],
      _ = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      k = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
      ],
      N = () => ["", "0", K],
      O = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      U = () => [bs, K];
    return {
      cacheSize: 500,
      separator: ":",
      theme: {
        colors: [fi],
        spacing: [tn, Pn],
        blur: ["none", "", Tn, K],
        brightness: U(),
        borderColor: [e],
        borderRadius: ["none", "", "full", Tn, K],
        borderSpacing: I(),
        borderWidth: Y(),
        contrast: U(),
        grayscale: N(),
        hueRotate: U(),
        invert: N(),
        gap: I(),
        gradientColorStops: [e],
        gradientColorStopPositions: [UE, Pn],
        inset: z(),
        margin: z(),
        opacity: U(),
        padding: I(),
        saturate: U(),
        scale: U(),
        sepia: N(),
        skew: U(),
        space: I(),
        translate: I(),
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", "video", K] }],
        container: ["container"],
        columns: [{ columns: [Tn] }],
        "break-after": [{ "break-after": O() }],
        "break-before": [{ "break-before": O() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: [...G(), K] }],
        overflow: [{ overflow: A() }],
        "overflow-x": [{ "overflow-x": A() }],
        "overflow-y": [{ "overflow-y": A() }],
        overscroll: [{ overscroll: R() }],
        "overscroll-x": [{ "overscroll-x": R() }],
        "overscroll-y": [{ "overscroll-y": R() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: [v] }],
        "inset-x": [{ "inset-x": [v] }],
        "inset-y": [{ "inset-y": [v] }],
        start: [{ start: [v] }],
        end: [{ end: [v] }],
        top: [{ top: [v] }],
        right: [{ right: [v] }],
        bottom: [{ bottom: [v] }],
        left: [{ left: [v] }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: ["auto", di, K] }],
        basis: [{ basis: z() }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
        flex: [{ flex: ["1", "auto", "initial", "none", K] }],
        grow: [{ grow: N() }],
        shrink: [{ shrink: N() }],
        order: [{ order: ["first", "last", "none", di, K] }],
        "grid-cols": [{ "grid-cols": [fi] }],
        "col-start-end": [{ col: ["auto", { span: ["full", di, K] }, K] }],
        "col-start": [{ "col-start": L() }],
        "col-end": [{ "col-end": L() }],
        "grid-rows": [{ "grid-rows": [fi] }],
        "row-start-end": [{ row: ["auto", { span: [di, K] }, K] }],
        "row-start": [{ "row-start": L() }],
        "row-end": [{ "row-end": L() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", K] }],
        "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", K] }],
        gap: [{ gap: [h] }],
        "gap-x": [{ "gap-x": [h] }],
        "gap-y": [{ "gap-y": [h] }],
        "justify-content": [{ justify: ["normal", ...k()] }],
        "justify-items": [
          { "justify-items": ["start", "end", "center", "stretch"] },
        ],
        "justify-self": [
          { "justify-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        "align-content": [{ content: ["normal", ...k(), "baseline"] }],
        "align-items": [
          { items: ["start", "end", "center", "baseline", "stretch"] },
        ],
        "align-self": [
          { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
        ],
        "place-content": [{ "place-content": [...k(), "baseline"] }],
        "place-items": [
          { "place-items": ["start", "end", "center", "baseline", "stretch"] },
        ],
        "place-self": [
          { "place-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        p: [{ p: [m] }],
        px: [{ px: [m] }],
        py: [{ py: [m] }],
        ps: [{ ps: [m] }],
        pe: [{ pe: [m] }],
        pt: [{ pt: [m] }],
        pr: [{ pr: [m] }],
        pb: [{ pb: [m] }],
        pl: [{ pl: [m] }],
        m: [{ m: [b] }],
        mx: [{ mx: [b] }],
        my: [{ my: [b] }],
        ms: [{ ms: [b] }],
        me: [{ me: [b] }],
        mt: [{ mt: [b] }],
        mr: [{ mr: [b] }],
        mb: [{ mb: [b] }],
        ml: [{ ml: [b] }],
        "space-x": [{ "space-x": [P] }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": [P] }],
        "space-y-reverse": ["space-y-reverse"],
        w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", K, t] }],
        "min-w": [{ "min-w": [K, t, "min", "max", "fit"] }],
        "max-w": [
          {
            "max-w": [
              K,
              t,
              "none",
              "full",
              "min",
              "max",
              "fit",
              "prose",
              { screen: [Tn] },
              Tn,
            ],
          },
        ],
        h: [{ h: [K, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
        "min-h": [
          { "min-h": [K, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        "max-h": [
          { "max-h": [K, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        size: [{ size: [K, t, "auto", "min", "max", "fit"] }],
        "font-size": [{ text: ["base", Tn, Pn] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [
          {
            font: [
              "thin",
              "extralight",
              "light",
              "normal",
              "medium",
              "semibold",
              "bold",
              "extrabold",
              "black",
              vu,
            ],
          },
        ],
        "font-family": [{ font: [fi] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [
          {
            tracking: [
              "tighter",
              "tight",
              "normal",
              "wide",
              "wider",
              "widest",
              K,
            ],
          },
        ],
        "line-clamp": [{ "line-clamp": ["none", bs, vu] }],
        leading: [
          {
            leading: [
              "none",
              "tight",
              "snug",
              "normal",
              "relaxed",
              "loose",
              tn,
              K,
            ],
          },
        ],
        "list-image": [{ "list-image": ["none", K] }],
        "list-style-type": [{ list: ["none", "disc", "decimal", K] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "placeholder-color": [{ placeholder: [e] }],
        "placeholder-opacity": [{ "placeholder-opacity": [g] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "text-color": [{ text: [e] }],
        "text-opacity": [{ "text-opacity": [g] }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...$(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: ["auto", "from-font", tn, Pn] },
        ],
        "underline-offset": [{ "underline-offset": ["auto", tn, K] }],
        "text-decoration-color": [{ decoration: [e] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: I() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              K,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", K] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-opacity": [{ "bg-opacity": [g] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: [...G(), KE] }],
        "bg-repeat": [
          { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
        ],
        "bg-size": [{ bg: ["auto", "cover", "contain", HE] }],
        "bg-image": [
          {
            bg: [
              "none",
              { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
              GE,
            ],
          },
        ],
        "bg-color": [{ bg: [e] }],
        "gradient-from-pos": [{ from: [x] }],
        "gradient-via-pos": [{ via: [x] }],
        "gradient-to-pos": [{ to: [x] }],
        "gradient-from": [{ from: [p] }],
        "gradient-via": [{ via: [p] }],
        "gradient-to": [{ to: [p] }],
        rounded: [{ rounded: [i] }],
        "rounded-s": [{ "rounded-s": [i] }],
        "rounded-e": [{ "rounded-e": [i] }],
        "rounded-t": [{ "rounded-t": [i] }],
        "rounded-r": [{ "rounded-r": [i] }],
        "rounded-b": [{ "rounded-b": [i] }],
        "rounded-l": [{ "rounded-l": [i] }],
        "rounded-ss": [{ "rounded-ss": [i] }],
        "rounded-se": [{ "rounded-se": [i] }],
        "rounded-ee": [{ "rounded-ee": [i] }],
        "rounded-es": [{ "rounded-es": [i] }],
        "rounded-tl": [{ "rounded-tl": [i] }],
        "rounded-tr": [{ "rounded-tr": [i] }],
        "rounded-br": [{ "rounded-br": [i] }],
        "rounded-bl": [{ "rounded-bl": [i] }],
        "border-w": [{ border: [a] }],
        "border-w-x": [{ "border-x": [a] }],
        "border-w-y": [{ "border-y": [a] }],
        "border-w-s": [{ "border-s": [a] }],
        "border-w-e": [{ "border-e": [a] }],
        "border-w-t": [{ "border-t": [a] }],
        "border-w-r": [{ "border-r": [a] }],
        "border-w-b": [{ "border-b": [a] }],
        "border-w-l": [{ "border-l": [a] }],
        "border-opacity": [{ "border-opacity": [g] }],
        "border-style": [{ border: [...$(), "hidden"] }],
        "divide-x": [{ "divide-x": [a] }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": [a] }],
        "divide-y-reverse": ["divide-y-reverse"],
        "divide-opacity": [{ "divide-opacity": [g] }],
        "divide-style": [{ divide: $() }],
        "border-color": [{ border: [s] }],
        "border-color-x": [{ "border-x": [s] }],
        "border-color-y": [{ "border-y": [s] }],
        "border-color-s": [{ "border-s": [s] }],
        "border-color-e": [{ "border-e": [s] }],
        "border-color-t": [{ "border-t": [s] }],
        "border-color-r": [{ "border-r": [s] }],
        "border-color-b": [{ "border-b": [s] }],
        "border-color-l": [{ "border-l": [s] }],
        "divide-color": [{ divide: [s] }],
        "outline-style": [{ outline: ["", ...$()] }],
        "outline-offset": [{ "outline-offset": [tn, K] }],
        "outline-w": [{ outline: [tn, Pn] }],
        "outline-color": [{ outline: [e] }],
        "ring-w": [{ ring: Y() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: [e] }],
        "ring-opacity": [{ "ring-opacity": [g] }],
        "ring-offset-w": [{ "ring-offset": [tn, Pn] }],
        "ring-offset-color": [{ "ring-offset": [e] }],
        shadow: [{ shadow: ["", "inner", "none", Tn, QE] }],
        "shadow-color": [{ shadow: [fi] }],
        opacity: [{ opacity: [g] }],
        "mix-blend": [{ "mix-blend": [..._(), "plus-lighter", "plus-darker"] }],
        "bg-blend": [{ "bg-blend": _() }],
        filter: [{ filter: ["", "none"] }],
        blur: [{ blur: [n] }],
        brightness: [{ brightness: [r] }],
        contrast: [{ contrast: [l] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", Tn, K] }],
        grayscale: [{ grayscale: [u] }],
        "hue-rotate": [{ "hue-rotate": [c] }],
        invert: [{ invert: [d] }],
        saturate: [{ saturate: [y] }],
        sepia: [{ sepia: [C] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
        "backdrop-blur": [{ "backdrop-blur": [n] }],
        "backdrop-brightness": [{ "backdrop-brightness": [r] }],
        "backdrop-contrast": [{ "backdrop-contrast": [l] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [u] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [c] }],
        "backdrop-invert": [{ "backdrop-invert": [d] }],
        "backdrop-opacity": [{ "backdrop-opacity": [g] }],
        "backdrop-saturate": [{ "backdrop-saturate": [y] }],
        "backdrop-sepia": [{ "backdrop-sepia": [C] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": [o] }],
        "border-spacing-x": [{ "border-spacing-x": [o] }],
        "border-spacing-y": [{ "border-spacing-y": [o] }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "none",
              "all",
              "",
              "colors",
              "opacity",
              "shadow",
              "transform",
              K,
            ],
          },
        ],
        duration: [{ duration: U() }],
        ease: [{ ease: ["linear", "in", "out", "in-out", K] }],
        delay: [{ delay: U() }],
        animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", K] }],
        transform: [{ transform: ["", "gpu", "none"] }],
        scale: [{ scale: [S] }],
        "scale-x": [{ "scale-x": [S] }],
        "scale-y": [{ "scale-y": [S] }],
        rotate: [{ rotate: [di, K] }],
        "translate-x": [{ "translate-x": [T] }],
        "translate-y": [{ "translate-y": [T] }],
        "skew-x": [{ "skew-x": [E] }],
        "skew-y": [{ "skew-y": [E] }],
        "transform-origin": [
          {
            origin: [
              "center",
              "top",
              "top-right",
              "right",
              "bottom-right",
              "bottom",
              "bottom-left",
              "left",
              "top-left",
              K,
            ],
          },
        ],
        accent: [{ accent: ["auto", e] }],
        appearance: [{ appearance: ["none", "auto"] }],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              K,
            ],
          },
        ],
        "caret-color": [{ caret: [e] }],
        "pointer-events": [{ "pointer-events": ["none", "auto"] }],
        resize: [{ resize: ["none", "y", "x", ""] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": I() }],
        "scroll-mx": [{ "scroll-mx": I() }],
        "scroll-my": [{ "scroll-my": I() }],
        "scroll-ms": [{ "scroll-ms": I() }],
        "scroll-me": [{ "scroll-me": I() }],
        "scroll-mt": [{ "scroll-mt": I() }],
        "scroll-mr": [{ "scroll-mr": I() }],
        "scroll-mb": [{ "scroll-mb": I() }],
        "scroll-ml": [{ "scroll-ml": I() }],
        "scroll-p": [{ "scroll-p": I() }],
        "scroll-px": [{ "scroll-px": I() }],
        "scroll-py": [{ "scroll-py": I() }],
        "scroll-ps": [{ "scroll-ps": I() }],
        "scroll-pe": [{ "scroll-pe": I() }],
        "scroll-pt": [{ "scroll-pt": I() }],
        "scroll-pr": [{ "scroll-pr": I() }],
        "scroll-pb": [{ "scroll-pb": I() }],
        "scroll-pl": [{ "scroll-pl": I() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          { "will-change": ["auto", "scroll", "contents", "transform", K] },
        ],
        fill: [{ fill: [e, "none"] }],
        "stroke-w": [{ stroke: [tn, Pn, vu] }],
        stroke: [{ stroke: [e, "none"] }],
        sr: ["sr-only", "not-sr-only"],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
    };
  },
  eP = OE(JE);
function cr(...e) {
  return eP(N0(e));
}
const tP = rE,
  z0 = w.forwardRef(({ className: e, ...t }, n) =>
    f.jsx(S0, {
      ref: n,
      className: cr(
        "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        e,
      ),
      ...t,
    }),
  );
z0.displayName = S0.displayName;
const nP = R0(
    "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
    {
      variants: {
        variant: {
          default: "border bg-background text-foreground",
          destructive:
            "destructive group border-destructive bg-destructive text-destructive-foreground",
        },
      },
      defaultVariants: { variant: "default" },
    },
  ),
  B0 = w.forwardRef(({ className: e, variant: t, ...n }, r) =>
    f.jsx(C0, { ref: r, className: cr(nP({ variant: t }), e), ...n }),
  );
B0.displayName = C0.displayName;
const rP = w.forwardRef(({ className: e, ...t }, n) =>
  f.jsx(T0, {
    ref: n,
    className: cr(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50",
      e,
    ),
    ...t,
  }),
);
rP.displayName = T0.displayName;
const $0 = w.forwardRef(({ className: e, ...t }, n) =>
  f.jsx(k0, {
    ref: n,
    className: cr(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      e,
    ),
    "toast-close": "",
    ...t,
    children: f.jsx(L0, { className: "h-4 w-4" }),
  }),
);
$0.displayName = k0.displayName;
const U0 = w.forwardRef(({ className: e, ...t }, n) =>
  f.jsx(E0, { ref: n, className: cr("text-sm font-semibold", e), ...t }),
);
U0.displayName = E0.displayName;
const W0 = w.forwardRef(({ className: e, ...t }, n) =>
  f.jsx(P0, { ref: n, className: cr("text-sm opacity-90", e), ...t }),
);
W0.displayName = P0.displayName;
function sP() {
  const { toasts: e } = t0();
  return f.jsxs(tP, {
    children: [
      e.map(function ({ id: t, title: n, description: r, action: s, ...i }) {
        return f.jsxs(
          B0,
          {
            ...i,
            children: [
              f.jsxs("div", {
                className: "grid gap-1",
                children: [
                  n && f.jsx(U0, { children: n }),
                  r && f.jsx(W0, { children: r }),
                ],
              }),
              s,
              f.jsx($0, {}),
            ],
          },
          t,
        );
      }),
      f.jsx(z0, {}),
    ],
  });
}
var zp = ["light", "dark"],
  iP = "(prefers-color-scheme: dark)",
  oP = w.createContext(void 0),
  aP = { setTheme: (e) => {}, themes: [] },
  lP = () => {
    var e;
    return (e = w.useContext(oP)) != null ? e : aP;
  };
w.memo(
  ({
    forcedTheme: e,
    storageKey: t,
    attribute: n,
    enableSystem: r,
    enableColorScheme: s,
    defaultTheme: i,
    value: o,
    attrs: a,
    nonce: l,
  }) => {
    let u = i === "system",
      c =
        n === "class"
          ? `var d=document.documentElement,c=d.classList;${`c.remove(${a.map((x) => `'${x}'`).join(",")})`};`
          : `var d=document.documentElement,n='${n}',s='setAttribute';`,
      d = s
        ? zp.includes(i) && i
          ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${i}'`
          : "if(e==='light'||e==='dark')d.style.colorScheme=e"
        : "",
      h = (x, v = !1, b = !0) => {
        let g = o ? o[x] : x,
          m = v ? x + "|| ''" : `'${g}'`,
          y = "";
        return (
          s &&
            b &&
            !v &&
            zp.includes(x) &&
            (y += `d.style.colorScheme = '${x}';`),
          n === "class"
            ? v || g
              ? (y += `c.add(${m})`)
              : (y += "null")
            : g && (y += `d[s](n,${m})`),
          y
        );
      },
      p = e
        ? `!function(){${c}${h(e)}}()`
        : r
          ? `!function(){try{${c}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${iP}',m=window.matchMedia(t);if(m.media!==t||m.matches){${h("dark")}}else{${h("light")}}}else if(e){${o ? `var x=${JSON.stringify(o)};` : ""}${h(o ? "x[e]" : "e", !0)}}${u ? "" : "else{" + h(i, !1, !1) + "}"}${d}}catch(e){}}()`
          : `!function(){try{${c}var e=localStorage.getItem('${t}');if(e){${o ? `var x=${JSON.stringify(o)};` : ""}${h(o ? "x[e]" : "e", !0)}}else{${h(i, !1, !1)};}${d}}catch(t){}}();`;
    return w.createElement("script", {
      nonce: l,
      dangerouslySetInnerHTML: { __html: p },
    });
  },
);
var uP = (e) => {
    switch (e) {
      case "success":
        return fP;
      case "info":
        return pP;
      case "warning":
        return hP;
      case "error":
        return mP;
      default:
        return null;
    }
  },
  cP = Array(12).fill(0),
  dP = ({ visible: e, className: t }) =>
    D.createElement(
      "div",
      {
        className: ["sonner-loading-wrapper", t].filter(Boolean).join(" "),
        "data-visible": e,
      },
      D.createElement(
        "div",
        { className: "sonner-spinner" },
        cP.map((n, r) =>
          D.createElement("div", {
            className: "sonner-loading-bar",
            key: `spinner-bar-${r}`,
          }),
        ),
      ),
    ),
  fP = D.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    D.createElement("path", {
      fillRule: "evenodd",
      d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
      clipRule: "evenodd",
    }),
  ),
  hP = D.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    D.createElement("path", {
      fillRule: "evenodd",
      d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
      clipRule: "evenodd",
    }),
  ),
  pP = D.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    D.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
      clipRule: "evenodd",
    }),
  ),
  mP = D.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    D.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
      clipRule: "evenodd",
    }),
  ),
  gP = D.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "12",
      height: "12",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    D.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
    D.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" }),
  ),
  yP = () => {
    let [e, t] = D.useState(document.hidden);
    return (
      D.useEffect(() => {
        let n = () => {
          t(document.hidden);
        };
        return (
          document.addEventListener("visibilitychange", n),
          () => window.removeEventListener("visibilitychange", n)
        );
      }, []),
      e
    );
  },
  zc = 1,
  vP = class {
    constructor() {
      ((this.subscribe = (e) => (
        this.subscribers.push(e),
        () => {
          let t = this.subscribers.indexOf(e);
          this.subscribers.splice(t, 1);
        }
      )),
        (this.publish = (e) => {
          this.subscribers.forEach((t) => t(e));
        }),
        (this.addToast = (e) => {
          (this.publish(e), (this.toasts = [...this.toasts, e]));
        }),
        (this.create = (e) => {
          var t;
          let { message: n, ...r } = e,
            s =
              typeof (e == null ? void 0 : e.id) == "number" ||
              ((t = e.id) == null ? void 0 : t.length) > 0
                ? e.id
                : zc++,
            i = this.toasts.find((a) => a.id === s),
            o = e.dismissible === void 0 ? !0 : e.dismissible;
          return (
            this.dismissedToasts.has(s) && this.dismissedToasts.delete(s),
            i
              ? (this.toasts = this.toasts.map((a) =>
                  a.id === s
                    ? (this.publish({ ...a, ...e, id: s, title: n }),
                      { ...a, ...e, id: s, dismissible: o, title: n })
                    : a,
                ))
              : this.addToast({ title: n, ...r, dismissible: o, id: s }),
            s
          );
        }),
        (this.dismiss = (e) => (
          this.dismissedToasts.add(e),
          e ||
            this.toasts.forEach((t) => {
              this.subscribers.forEach((n) => n({ id: t.id, dismiss: !0 }));
            }),
          this.subscribers.forEach((t) => t({ id: e, dismiss: !0 })),
          e
        )),
        (this.message = (e, t) => this.create({ ...t, message: e })),
        (this.error = (e, t) =>
          this.create({ ...t, message: e, type: "error" })),
        (this.success = (e, t) =>
          this.create({ ...t, type: "success", message: e })),
        (this.info = (e, t) => this.create({ ...t, type: "info", message: e })),
        (this.warning = (e, t) =>
          this.create({ ...t, type: "warning", message: e })),
        (this.loading = (e, t) =>
          this.create({ ...t, type: "loading", message: e })),
        (this.promise = (e, t) => {
          if (!t) return;
          let n;
          t.loading !== void 0 &&
            (n = this.create({
              ...t,
              promise: e,
              type: "loading",
              message: t.loading,
              description:
                typeof t.description != "function" ? t.description : void 0,
            }));
          let r = e instanceof Promise ? e : e(),
            s = n !== void 0,
            i,
            o = r
              .then(async (l) => {
                if (((i = ["resolve", l]), D.isValidElement(l)))
                  ((s = !1),
                    this.create({ id: n, type: "default", message: l }));
                else if (wP(l) && !l.ok) {
                  s = !1;
                  let u =
                      typeof t.error == "function"
                        ? await t.error(`HTTP error! status: ${l.status}`)
                        : t.error,
                    c =
                      typeof t.description == "function"
                        ? await t.description(`HTTP error! status: ${l.status}`)
                        : t.description;
                  this.create({
                    id: n,
                    type: "error",
                    message: u,
                    description: c,
                  });
                } else if (t.success !== void 0) {
                  s = !1;
                  let u =
                      typeof t.success == "function"
                        ? await t.success(l)
                        : t.success,
                    c =
                      typeof t.description == "function"
                        ? await t.description(l)
                        : t.description;
                  this.create({
                    id: n,
                    type: "success",
                    message: u,
                    description: c,
                  });
                }
              })
              .catch(async (l) => {
                if (((i = ["reject", l]), t.error !== void 0)) {
                  s = !1;
                  let u =
                      typeof t.error == "function" ? await t.error(l) : t.error,
                    c =
                      typeof t.description == "function"
                        ? await t.description(l)
                        : t.description;
                  this.create({
                    id: n,
                    type: "error",
                    message: u,
                    description: c,
                  });
                }
              })
              .finally(() => {
                var l;
                (s && (this.dismiss(n), (n = void 0)),
                  (l = t.finally) == null || l.call(t));
              }),
            a = () =>
              new Promise((l, u) =>
                o.then(() => (i[0] === "reject" ? u(i[1]) : l(i[1]))).catch(u),
              );
          return typeof n != "string" && typeof n != "number"
            ? { unwrap: a }
            : Object.assign(n, { unwrap: a });
        }),
        (this.custom = (e, t) => {
          let n = (t == null ? void 0 : t.id) || zc++;
          return (this.create({ jsx: e(n), id: n, ...t }), n);
        }),
        (this.getActiveToasts = () =>
          this.toasts.filter((e) => !this.dismissedToasts.has(e.id))),
        (this.subscribers = []),
        (this.toasts = []),
        (this.dismissedToasts = new Set()));
    }
  },
  Qe = new vP(),
  xP = (e, t) => {
    let n = (t == null ? void 0 : t.id) || zc++;
    return (Qe.addToast({ title: e, ...t, id: n }), n);
  },
  wP = (e) =>
    e &&
    typeof e == "object" &&
    "ok" in e &&
    typeof e.ok == "boolean" &&
    "status" in e &&
    typeof e.status == "number",
  bP = xP,
  SP = () => Qe.toasts,
  CP = () => Qe.getActiveToasts();
Object.assign(
  bP,
  {
    success: Qe.success,
    info: Qe.info,
    warning: Qe.warning,
    error: Qe.error,
    custom: Qe.custom,
    message: Qe.message,
    promise: Qe.promise,
    dismiss: Qe.dismiss,
    loading: Qe.loading,
  },
  { getHistory: SP, getToasts: CP },
);
function EP(e, { insertAt: t } = {}) {
  if (typeof document > "u") return;
  let n = document.head || document.getElementsByTagName("head")[0],
    r = document.createElement("style");
  ((r.type = "text/css"),
    t === "top" && n.firstChild
      ? n.insertBefore(r, n.firstChild)
      : n.appendChild(r),
    r.styleSheet
      ? (r.styleSheet.cssText = e)
      : r.appendChild(document.createTextNode(e)));
}
EP(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function Qo(e) {
  return e.label !== void 0;
}
var PP = 3,
  TP = "32px",
  kP = "16px",
  Bp = 4e3,
  jP = 356,
  NP = 14,
  RP = 20,
  AP = 200;
function Pt(...e) {
  return e.filter(Boolean).join(" ");
}
function MP(e) {
  let [t, n] = e.split("-"),
    r = [];
  return (t && r.push(t), n && r.push(n), r);
}
var DP = (e) => {
  var t, n, r, s, i, o, a, l, u, c, d;
  let {
      invert: h,
      toast: p,
      unstyled: x,
      interacting: v,
      setHeights: b,
      visibleToasts: g,
      heights: m,
      index: y,
      toasts: S,
      expanded: C,
      removeToast: E,
      defaultRichColors: P,
      closeButton: T,
      style: R,
      cancelButtonStyle: A,
      actionButtonStyle: z,
      className: I = "",
      descriptionClassName: Y = "",
      duration: L,
      position: G,
      gap: $,
      loadingIcon: _,
      expandByDefault: k,
      classNames: N,
      icons: O,
      closeButtonAriaLabel: U = "Close toast",
      pauseWhenPageIsHidden: B,
    } = e,
    [Q, q] = D.useState(null),
    [xe, De] = D.useState(null),
    [ee, Kr] = D.useState(!1),
    [vn, fr] = D.useState(!1),
    [xn, Yr] = D.useState(!1),
    [wn, To] = D.useState(!1),
    [Vl, ko] = D.useState(!1),
    [_l, ti] = D.useState(0),
    [Gr, fh] = D.useState(0),
    ni = D.useRef(p.duration || L || Bp),
    hh = D.useRef(null),
    hr = D.useRef(null),
    Pw = y === 0,
    Tw = y + 1 <= g,
    ct = p.type,
    Qr = p.dismissible !== !1,
    kw = p.className || "",
    jw = p.descriptionClassName || "",
    jo = D.useMemo(
      () => m.findIndex((W) => W.toastId === p.id) || 0,
      [m, p.id],
    ),
    Nw = D.useMemo(() => {
      var W;
      return (W = p.closeButton) != null ? W : T;
    }, [p.closeButton, T]),
    ph = D.useMemo(() => p.duration || L || Bp, [p.duration, L]),
    zl = D.useRef(0),
    Xr = D.useRef(0),
    mh = D.useRef(0),
    qr = D.useRef(null),
    [Rw, Aw] = G.split("-"),
    gh = D.useMemo(
      () => m.reduce((W, re, ue) => (ue >= jo ? W : W + re.height), 0),
      [m, jo],
    ),
    yh = yP(),
    Mw = p.invert || h,
    Bl = ct === "loading";
  ((Xr.current = D.useMemo(() => jo * $ + gh, [jo, gh])),
    D.useEffect(() => {
      ni.current = ph;
    }, [ph]),
    D.useEffect(() => {
      Kr(!0);
    }, []),
    D.useEffect(() => {
      let W = hr.current;
      if (W) {
        let re = W.getBoundingClientRect().height;
        return (
          fh(re),
          b((ue) => [
            { toastId: p.id, height: re, position: p.position },
            ...ue,
          ]),
          () => b((ue) => ue.filter((bt) => bt.toastId !== p.id))
        );
      }
    }, [b, p.id]),
    D.useLayoutEffect(() => {
      if (!ee) return;
      let W = hr.current,
        re = W.style.height;
      W.style.height = "auto";
      let ue = W.getBoundingClientRect().height;
      ((W.style.height = re),
        fh(ue),
        b((bt) =>
          bt.find((St) => St.toastId === p.id)
            ? bt.map((St) => (St.toastId === p.id ? { ...St, height: ue } : St))
            : [{ toastId: p.id, height: ue, position: p.position }, ...bt],
        ));
    }, [ee, p.title, p.description, b, p.id]));
  let bn = D.useCallback(() => {
    (fr(!0),
      ti(Xr.current),
      b((W) => W.filter((re) => re.toastId !== p.id)),
      setTimeout(() => {
        E(p);
      }, AP));
  }, [p, E, b, Xr]);
  (D.useEffect(() => {
    if (
      (p.promise && ct === "loading") ||
      p.duration === 1 / 0 ||
      p.type === "loading"
    )
      return;
    let W;
    return (
      C || v || (B && yh)
        ? (() => {
            if (mh.current < zl.current) {
              let re = new Date().getTime() - zl.current;
              ni.current = ni.current - re;
            }
            mh.current = new Date().getTime();
          })()
        : ni.current !== 1 / 0 &&
          ((zl.current = new Date().getTime()),
          (W = setTimeout(() => {
            var re;
            ((re = p.onAutoClose) == null || re.call(p, p), bn());
          }, ni.current))),
      () => clearTimeout(W)
    );
  }, [C, v, p, ct, B, yh, bn]),
    D.useEffect(() => {
      p.delete && bn();
    }, [bn, p.delete]));
  function Dw() {
    var W, re, ue;
    return O != null && O.loading
      ? D.createElement(
          "div",
          {
            className: Pt(
              N == null ? void 0 : N.loader,
              (W = p == null ? void 0 : p.classNames) == null
                ? void 0
                : W.loader,
              "sonner-loader",
            ),
            "data-visible": ct === "loading",
          },
          O.loading,
        )
      : _
        ? D.createElement(
            "div",
            {
              className: Pt(
                N == null ? void 0 : N.loader,
                (re = p == null ? void 0 : p.classNames) == null
                  ? void 0
                  : re.loader,
                "sonner-loader",
              ),
              "data-visible": ct === "loading",
            },
            _,
          )
        : D.createElement(dP, {
            className: Pt(
              N == null ? void 0 : N.loader,
              (ue = p == null ? void 0 : p.classNames) == null
                ? void 0
                : ue.loader,
            ),
            visible: ct === "loading",
          });
  }
  return D.createElement(
    "li",
    {
      tabIndex: 0,
      ref: hr,
      className: Pt(
        I,
        kw,
        N == null ? void 0 : N.toast,
        (t = p == null ? void 0 : p.classNames) == null ? void 0 : t.toast,
        N == null ? void 0 : N.default,
        N == null ? void 0 : N[ct],
        (n = p == null ? void 0 : p.classNames) == null ? void 0 : n[ct],
      ),
      "data-sonner-toast": "",
      "data-rich-colors": (r = p.richColors) != null ? r : P,
      "data-styled": !(p.jsx || p.unstyled || x),
      "data-mounted": ee,
      "data-promise": !!p.promise,
      "data-swiped": Vl,
      "data-removed": vn,
      "data-visible": Tw,
      "data-y-position": Rw,
      "data-x-position": Aw,
      "data-index": y,
      "data-front": Pw,
      "data-swiping": xn,
      "data-dismissible": Qr,
      "data-type": ct,
      "data-invert": Mw,
      "data-swipe-out": wn,
      "data-swipe-direction": xe,
      "data-expanded": !!(C || (k && ee)),
      style: {
        "--index": y,
        "--toasts-before": y,
        "--z-index": S.length - y,
        "--offset": `${vn ? _l : Xr.current}px`,
        "--initial-height": k ? "auto" : `${Gr}px`,
        ...R,
        ...p.style,
      },
      onDragEnd: () => {
        (Yr(!1), q(null), (qr.current = null));
      },
      onPointerDown: (W) => {
        Bl ||
          !Qr ||
          ((hh.current = new Date()),
          ti(Xr.current),
          W.target.setPointerCapture(W.pointerId),
          W.target.tagName !== "BUTTON" &&
            (Yr(!0), (qr.current = { x: W.clientX, y: W.clientY })));
      },
      onPointerUp: () => {
        var W, re, ue, bt;
        if (wn || !Qr) return;
        qr.current = null;
        let St = Number(
            ((W = hr.current) == null
              ? void 0
              : W.style
                  .getPropertyValue("--swipe-amount-x")
                  .replace("px", "")) || 0,
          ),
          Sn = Number(
            ((re = hr.current) == null
              ? void 0
              : re.style
                  .getPropertyValue("--swipe-amount-y")
                  .replace("px", "")) || 0,
          ),
          pr =
            new Date().getTime() -
            ((ue = hh.current) == null ? void 0 : ue.getTime()),
          Ct = Q === "x" ? St : Sn,
          Cn = Math.abs(Ct) / pr;
        if (Math.abs(Ct) >= RP || Cn > 0.11) {
          (ti(Xr.current),
            (bt = p.onDismiss) == null || bt.call(p, p),
            De(
              Q === "x" ? (St > 0 ? "right" : "left") : Sn > 0 ? "down" : "up",
            ),
            bn(),
            To(!0),
            ko(!1));
          return;
        }
        (Yr(!1), q(null));
      },
      onPointerMove: (W) => {
        var re, ue, bt, St;
        if (
          !qr.current ||
          !Qr ||
          ((re = window.getSelection()) == null
            ? void 0
            : re.toString().length) > 0
        )
          return;
        let Sn = W.clientY - qr.current.y,
          pr = W.clientX - qr.current.x,
          Ct = (ue = e.swipeDirections) != null ? ue : MP(G);
        !Q &&
          (Math.abs(pr) > 1 || Math.abs(Sn) > 1) &&
          q(Math.abs(pr) > Math.abs(Sn) ? "x" : "y");
        let Cn = { x: 0, y: 0 };
        (Q === "y"
          ? (Ct.includes("top") || Ct.includes("bottom")) &&
            ((Ct.includes("top") && Sn < 0) ||
              (Ct.includes("bottom") && Sn > 0)) &&
            (Cn.y = Sn)
          : Q === "x" &&
            (Ct.includes("left") || Ct.includes("right")) &&
            ((Ct.includes("left") && pr < 0) ||
              (Ct.includes("right") && pr > 0)) &&
            (Cn.x = pr),
          (Math.abs(Cn.x) > 0 || Math.abs(Cn.y) > 0) && ko(!0),
          (bt = hr.current) == null ||
            bt.style.setProperty("--swipe-amount-x", `${Cn.x}px`),
          (St = hr.current) == null ||
            St.style.setProperty("--swipe-amount-y", `${Cn.y}px`));
      },
    },
    Nw && !p.jsx
      ? D.createElement(
          "button",
          {
            "aria-label": U,
            "data-disabled": Bl,
            "data-close-button": !0,
            onClick:
              Bl || !Qr
                ? () => {}
                : () => {
                    var W;
                    (bn(), (W = p.onDismiss) == null || W.call(p, p));
                  },
            className: Pt(
              N == null ? void 0 : N.closeButton,
              (s = p == null ? void 0 : p.classNames) == null
                ? void 0
                : s.closeButton,
            ),
          },
          (i = O == null ? void 0 : O.close) != null ? i : gP,
        )
      : null,
    p.jsx || w.isValidElement(p.title)
      ? p.jsx
        ? p.jsx
        : typeof p.title == "function"
          ? p.title()
          : p.title
      : D.createElement(
          D.Fragment,
          null,
          ct || p.icon || p.promise
            ? D.createElement(
                "div",
                {
                  "data-icon": "",
                  className: Pt(
                    N == null ? void 0 : N.icon,
                    (o = p == null ? void 0 : p.classNames) == null
                      ? void 0
                      : o.icon,
                  ),
                },
                p.promise || (p.type === "loading" && !p.icon)
                  ? p.icon || Dw()
                  : null,
                p.type !== "loading"
                  ? p.icon || (O == null ? void 0 : O[ct]) || uP(ct)
                  : null,
              )
            : null,
          D.createElement(
            "div",
            {
              "data-content": "",
              className: Pt(
                N == null ? void 0 : N.content,
                (a = p == null ? void 0 : p.classNames) == null
                  ? void 0
                  : a.content,
              ),
            },
            D.createElement(
              "div",
              {
                "data-title": "",
                className: Pt(
                  N == null ? void 0 : N.title,
                  (l = p == null ? void 0 : p.classNames) == null
                    ? void 0
                    : l.title,
                ),
              },
              typeof p.title == "function" ? p.title() : p.title,
            ),
            p.description
              ? D.createElement(
                  "div",
                  {
                    "data-description": "",
                    className: Pt(
                      Y,
                      jw,
                      N == null ? void 0 : N.description,
                      (u = p == null ? void 0 : p.classNames) == null
                        ? void 0
                        : u.description,
                    ),
                  },
                  typeof p.description == "function"
                    ? p.description()
                    : p.description,
                )
              : null,
          ),
          w.isValidElement(p.cancel)
            ? p.cancel
            : p.cancel && Qo(p.cancel)
              ? D.createElement(
                  "button",
                  {
                    "data-button": !0,
                    "data-cancel": !0,
                    style: p.cancelButtonStyle || A,
                    onClick: (W) => {
                      var re, ue;
                      Qo(p.cancel) &&
                        Qr &&
                        ((ue = (re = p.cancel).onClick) == null ||
                          ue.call(re, W),
                        bn());
                    },
                    className: Pt(
                      N == null ? void 0 : N.cancelButton,
                      (c = p == null ? void 0 : p.classNames) == null
                        ? void 0
                        : c.cancelButton,
                    ),
                  },
                  p.cancel.label,
                )
              : null,
          w.isValidElement(p.action)
            ? p.action
            : p.action && Qo(p.action)
              ? D.createElement(
                  "button",
                  {
                    "data-button": !0,
                    "data-action": !0,
                    style: p.actionButtonStyle || z,
                    onClick: (W) => {
                      var re, ue;
                      Qo(p.action) &&
                        ((ue = (re = p.action).onClick) == null ||
                          ue.call(re, W),
                        !W.defaultPrevented && bn());
                    },
                    className: Pt(
                      N == null ? void 0 : N.actionButton,
                      (d = p == null ? void 0 : p.classNames) == null
                        ? void 0
                        : d.actionButton,
                    ),
                  },
                  p.action.label,
                )
              : null,
        ),
  );
};
function $p() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  let e = document.documentElement.getAttribute("dir");
  return e === "auto" || !e
    ? window.getComputedStyle(document.documentElement).direction
    : e;
}
function LP(e, t) {
  let n = {};
  return (
    [e, t].forEach((r, s) => {
      let i = s === 1,
        o = i ? "--mobile-offset" : "--offset",
        a = i ? kP : TP;
      function l(u) {
        ["top", "right", "bottom", "left"].forEach((c) => {
          n[`${o}-${c}`] = typeof u == "number" ? `${u}px` : u;
        });
      }
      typeof r == "number" || typeof r == "string"
        ? l(r)
        : typeof r == "object"
          ? ["top", "right", "bottom", "left"].forEach((u) => {
              r[u] === void 0
                ? (n[`${o}-${u}`] = a)
                : (n[`${o}-${u}`] =
                    typeof r[u] == "number" ? `${r[u]}px` : r[u]);
            })
          : l(a);
    }),
    n
  );
}
var OP = w.forwardRef(function (e, t) {
  let {
      invert: n,
      position: r = "bottom-right",
      hotkey: s = ["altKey", "KeyT"],
      expand: i,
      closeButton: o,
      className: a,
      offset: l,
      mobileOffset: u,
      theme: c = "light",
      richColors: d,
      duration: h,
      style: p,
      visibleToasts: x = PP,
      toastOptions: v,
      dir: b = $p(),
      gap: g = NP,
      loadingIcon: m,
      icons: y,
      containerAriaLabel: S = "Notifications",
      pauseWhenPageIsHidden: C,
    } = e,
    [E, P] = D.useState([]),
    T = D.useMemo(
      () =>
        Array.from(
          new Set(
            [r].concat(E.filter((B) => B.position).map((B) => B.position)),
          ),
        ),
      [E, r],
    ),
    [R, A] = D.useState([]),
    [z, I] = D.useState(!1),
    [Y, L] = D.useState(!1),
    [G, $] = D.useState(
      c !== "system"
        ? c
        : typeof window < "u" &&
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light",
    ),
    _ = D.useRef(null),
    k = s.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
    N = D.useRef(null),
    O = D.useRef(!1),
    U = D.useCallback((B) => {
      P((Q) => {
        var q;
        return (
          ((q = Q.find((xe) => xe.id === B.id)) != null && q.delete) ||
            Qe.dismiss(B.id),
          Q.filter(({ id: xe }) => xe !== B.id)
        );
      });
    }, []);
  return (
    D.useEffect(
      () =>
        Qe.subscribe((B) => {
          if (B.dismiss) {
            P((Q) => Q.map((q) => (q.id === B.id ? { ...q, delete: !0 } : q)));
            return;
          }
          setTimeout(() => {
            Jv.flushSync(() => {
              P((Q) => {
                let q = Q.findIndex((xe) => xe.id === B.id);
                return q !== -1
                  ? [...Q.slice(0, q), { ...Q[q], ...B }, ...Q.slice(q + 1)]
                  : [B, ...Q];
              });
            });
          });
        }),
      [],
    ),
    D.useEffect(() => {
      if (c !== "system") {
        $(c);
        return;
      }
      if (
        (c === "system" &&
          (window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
            ? $("dark")
            : $("light")),
        typeof window > "u")
      )
        return;
      let B = window.matchMedia("(prefers-color-scheme: dark)");
      try {
        B.addEventListener("change", ({ matches: Q }) => {
          $(Q ? "dark" : "light");
        });
      } catch {
        B.addListener(({ matches: q }) => {
          try {
            $(q ? "dark" : "light");
          } catch (xe) {
            console.error(xe);
          }
        });
      }
    }, [c]),
    D.useEffect(() => {
      E.length <= 1 && I(!1);
    }, [E]),
    D.useEffect(() => {
      let B = (Q) => {
        var q, xe;
        (s.every((De) => Q[De] || Q.code === De) &&
          (I(!0), (q = _.current) == null || q.focus()),
          Q.code === "Escape" &&
            (document.activeElement === _.current ||
              ((xe = _.current) != null &&
                xe.contains(document.activeElement))) &&
            I(!1));
      };
      return (
        document.addEventListener("keydown", B),
        () => document.removeEventListener("keydown", B)
      );
    }, [s]),
    D.useEffect(() => {
      if (_.current)
        return () => {
          N.current &&
            (N.current.focus({ preventScroll: !0 }),
            (N.current = null),
            (O.current = !1));
        };
    }, [_.current]),
    D.createElement(
      "section",
      {
        ref: t,
        "aria-label": `${S} ${k}`,
        tabIndex: -1,
        "aria-live": "polite",
        "aria-relevant": "additions text",
        "aria-atomic": "false",
        suppressHydrationWarning: !0,
      },
      T.map((B, Q) => {
        var q;
        let [xe, De] = B.split("-");
        return E.length
          ? D.createElement(
              "ol",
              {
                key: B,
                dir: b === "auto" ? $p() : b,
                tabIndex: -1,
                ref: _,
                className: a,
                "data-sonner-toaster": !0,
                "data-theme": G,
                "data-y-position": xe,
                "data-lifted": z && E.length > 1 && !i,
                "data-x-position": De,
                style: {
                  "--front-toast-height": `${((q = R[0]) == null ? void 0 : q.height) || 0}px`,
                  "--width": `${jP}px`,
                  "--gap": `${g}px`,
                  ...p,
                  ...LP(l, u),
                },
                onBlur: (ee) => {
                  O.current &&
                    !ee.currentTarget.contains(ee.relatedTarget) &&
                    ((O.current = !1),
                    N.current &&
                      (N.current.focus({ preventScroll: !0 }),
                      (N.current = null)));
                },
                onFocus: (ee) => {
                  (ee.target instanceof HTMLElement &&
                    ee.target.dataset.dismissible === "false") ||
                    O.current ||
                    ((O.current = !0), (N.current = ee.relatedTarget));
                },
                onMouseEnter: () => I(!0),
                onMouseMove: () => I(!0),
                onMouseLeave: () => {
                  Y || I(!1);
                },
                onDragEnd: () => I(!1),
                onPointerDown: (ee) => {
                  (ee.target instanceof HTMLElement &&
                    ee.target.dataset.dismissible === "false") ||
                    L(!0);
                },
                onPointerUp: () => L(!1),
              },
              E.filter(
                (ee) => (!ee.position && Q === 0) || ee.position === B,
              ).map((ee, Kr) => {
                var vn, fr;
                return D.createElement(DP, {
                  key: ee.id,
                  icons: y,
                  index: Kr,
                  toast: ee,
                  defaultRichColors: d,
                  duration:
                    (vn = v == null ? void 0 : v.duration) != null ? vn : h,
                  className: v == null ? void 0 : v.className,
                  descriptionClassName:
                    v == null ? void 0 : v.descriptionClassName,
                  invert: n,
                  visibleToasts: x,
                  closeButton:
                    (fr = v == null ? void 0 : v.closeButton) != null ? fr : o,
                  interacting: Y,
                  position: B,
                  style: v == null ? void 0 : v.style,
                  unstyled: v == null ? void 0 : v.unstyled,
                  classNames: v == null ? void 0 : v.classNames,
                  cancelButtonStyle: v == null ? void 0 : v.cancelButtonStyle,
                  actionButtonStyle: v == null ? void 0 : v.actionButtonStyle,
                  removeToast: U,
                  toasts: E.filter((xn) => xn.position == ee.position),
                  heights: R.filter((xn) => xn.position == ee.position),
                  setHeights: A,
                  expandByDefault: i,
                  gap: g,
                  loadingIcon: m,
                  expanded: z,
                  pauseWhenPageIsHidden: C,
                  swipeDirections: e.swipeDirections,
                });
              }),
            )
          : null;
      }),
    )
  );
});
const IP = ({ ...e }) => {
    const { theme: t = "system" } = lP();
    return f.jsx(OP, {
      theme: t,
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      },
      ...e,
    });
  },
  FP = ["top", "right", "bottom", "left"],
  rr = Math.min,
  rt = Math.max,
  Ka = Math.round,
  Xo = Math.floor,
  Qt = (e) => ({ x: e, y: e }),
  VP = { left: "right", right: "left", bottom: "top", top: "bottom" },
  _P = { start: "end", end: "start" };
function Bc(e, t, n) {
  return rt(e, rr(t, n));
}
function pn(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function mn(e) {
  return e.split("-")[0];
}
function Ys(e) {
  return e.split("-")[1];
}
function Sf(e) {
  return e === "x" ? "y" : "x";
}
function Cf(e) {
  return e === "y" ? "height" : "width";
}
const zP = new Set(["top", "bottom"]);
function Kt(e) {
  return zP.has(mn(e)) ? "y" : "x";
}
function Ef(e) {
  return Sf(Kt(e));
}
function BP(e, t, n) {
  n === void 0 && (n = !1);
  const r = Ys(e),
    s = Ef(e),
    i = Cf(s);
  let o =
    s === "x"
      ? r === (n ? "end" : "start")
        ? "right"
        : "left"
      : r === "start"
        ? "bottom"
        : "top";
  return (t.reference[i] > t.floating[i] && (o = Ya(o)), [o, Ya(o)]);
}
function $P(e) {
  const t = Ya(e);
  return [$c(e), t, $c(t)];
}
function $c(e) {
  return e.replace(/start|end/g, (t) => _P[t]);
}
const Up = ["left", "right"],
  Wp = ["right", "left"],
  UP = ["top", "bottom"],
  WP = ["bottom", "top"];
function HP(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? (t ? Wp : Up) : t ? Up : Wp;
    case "left":
    case "right":
      return t ? UP : WP;
    default:
      return [];
  }
}
function KP(e, t, n, r) {
  const s = Ys(e);
  let i = HP(mn(e), n === "start", r);
  return (
    s && ((i = i.map((o) => o + "-" + s)), t && (i = i.concat(i.map($c)))),
    i
  );
}
function Ya(e) {
  return e.replace(/left|right|bottom|top/g, (t) => VP[t]);
}
function YP(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function H0(e) {
  return typeof e != "number"
    ? YP(e)
    : { top: e, right: e, bottom: e, left: e };
}
function Ga(e) {
  const { x: t, y: n, width: r, height: s } = e;
  return {
    width: r,
    height: s,
    top: n,
    left: t,
    right: t + r,
    bottom: n + s,
    x: t,
    y: n,
  };
}
function Hp(e, t, n) {
  let { reference: r, floating: s } = e;
  const i = Kt(t),
    o = Ef(t),
    a = Cf(o),
    l = mn(t),
    u = i === "y",
    c = r.x + r.width / 2 - s.width / 2,
    d = r.y + r.height / 2 - s.height / 2,
    h = r[a] / 2 - s[a] / 2;
  let p;
  switch (l) {
    case "top":
      p = { x: c, y: r.y - s.height };
      break;
    case "bottom":
      p = { x: c, y: r.y + r.height };
      break;
    case "right":
      p = { x: r.x + r.width, y: d };
      break;
    case "left":
      p = { x: r.x - s.width, y: d };
      break;
    default:
      p = { x: r.x, y: r.y };
  }
  switch (Ys(t)) {
    case "start":
      p[o] -= h * (n && u ? -1 : 1);
      break;
    case "end":
      p[o] += h * (n && u ? -1 : 1);
      break;
  }
  return p;
}
const GP = async (e, t, n) => {
  const {
      placement: r = "bottom",
      strategy: s = "absolute",
      middleware: i = [],
      platform: o,
    } = n,
    a = i.filter(Boolean),
    l = await (o.isRTL == null ? void 0 : o.isRTL(t));
  let u = await o.getElementRects({ reference: e, floating: t, strategy: s }),
    { x: c, y: d } = Hp(u, r, l),
    h = r,
    p = {},
    x = 0;
  for (let v = 0; v < a.length; v++) {
    const { name: b, fn: g } = a[v],
      {
        x: m,
        y,
        data: S,
        reset: C,
      } = await g({
        x: c,
        y: d,
        initialPlacement: r,
        placement: h,
        strategy: s,
        middlewareData: p,
        rects: u,
        platform: o,
        elements: { reference: e, floating: t },
      });
    ((c = m ?? c),
      (d = y ?? d),
      (p = { ...p, [b]: { ...p[b], ...S } }),
      C &&
        x <= 50 &&
        (x++,
        typeof C == "object" &&
          (C.placement && (h = C.placement),
          C.rects &&
            (u =
              C.rects === !0
                ? await o.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: s,
                  })
                : C.rects),
          ({ x: c, y: d } = Hp(u, h, l))),
        (v = -1)));
  }
  return { x: c, y: d, placement: h, strategy: s, middlewareData: p };
};
async function Zi(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: r, y: s, platform: i, rects: o, elements: a, strategy: l } = e,
    {
      boundary: u = "clippingAncestors",
      rootBoundary: c = "viewport",
      elementContext: d = "floating",
      altBoundary: h = !1,
      padding: p = 0,
    } = pn(t, e),
    x = H0(p),
    b = a[h ? (d === "floating" ? "reference" : "floating") : d],
    g = Ga(
      await i.getClippingRect({
        element:
          (n = await (i.isElement == null ? void 0 : i.isElement(b))) == null ||
          n
            ? b
            : b.contextElement ||
              (await (i.getDocumentElement == null
                ? void 0
                : i.getDocumentElement(a.floating))),
        boundary: u,
        rootBoundary: c,
        strategy: l,
      }),
    ),
    m =
      d === "floating"
        ? { x: r, y: s, width: o.floating.width, height: o.floating.height }
        : o.reference,
    y = await (i.getOffsetParent == null
      ? void 0
      : i.getOffsetParent(a.floating)),
    S = (await (i.isElement == null ? void 0 : i.isElement(y)))
      ? (await (i.getScale == null ? void 0 : i.getScale(y))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    C = Ga(
      i.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: a,
            rect: m,
            offsetParent: y,
            strategy: l,
          })
        : m,
    );
  return {
    top: (g.top - C.top + x.top) / S.y,
    bottom: (C.bottom - g.bottom + x.bottom) / S.y,
    left: (g.left - C.left + x.left) / S.x,
    right: (C.right - g.right + x.right) / S.x,
  };
}
const QP = (e) => ({
    name: "arrow",
    options: e,
    async fn(t) {
      const {
          x: n,
          y: r,
          placement: s,
          rects: i,
          platform: o,
          elements: a,
          middlewareData: l,
        } = t,
        { element: u, padding: c = 0 } = pn(e, t) || {};
      if (u == null) return {};
      const d = H0(c),
        h = { x: n, y: r },
        p = Ef(s),
        x = Cf(p),
        v = await o.getDimensions(u),
        b = p === "y",
        g = b ? "top" : "left",
        m = b ? "bottom" : "right",
        y = b ? "clientHeight" : "clientWidth",
        S = i.reference[x] + i.reference[p] - h[p] - i.floating[x],
        C = h[p] - i.reference[p],
        E = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(u));
      let P = E ? E[y] : 0;
      (!P || !(await (o.isElement == null ? void 0 : o.isElement(E)))) &&
        (P = a.floating[y] || i.floating[x]);
      const T = S / 2 - C / 2,
        R = P / 2 - v[x] / 2 - 1,
        A = rr(d[g], R),
        z = rr(d[m], R),
        I = A,
        Y = P - v[x] - z,
        L = P / 2 - v[x] / 2 + T,
        G = Bc(I, L, Y),
        $ =
          !l.arrow &&
          Ys(s) != null &&
          L !== G &&
          i.reference[x] / 2 - (L < I ? A : z) - v[x] / 2 < 0,
        _ = $ ? (L < I ? L - I : L - Y) : 0;
      return {
        [p]: h[p] + _,
        data: {
          [p]: G,
          centerOffset: L - G - _,
          ...($ && { alignmentOffset: _ }),
        },
        reset: $,
      };
    },
  }),
  XP = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "flip",
        options: e,
        async fn(t) {
          var n, r;
          const {
              placement: s,
              middlewareData: i,
              rects: o,
              initialPlacement: a,
              platform: l,
              elements: u,
            } = t,
            {
              mainAxis: c = !0,
              crossAxis: d = !0,
              fallbackPlacements: h,
              fallbackStrategy: p = "bestFit",
              fallbackAxisSideDirection: x = "none",
              flipAlignment: v = !0,
              ...b
            } = pn(e, t);
          if ((n = i.arrow) != null && n.alignmentOffset) return {};
          const g = mn(s),
            m = Kt(a),
            y = mn(a) === a,
            S = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)),
            C = h || (y || !v ? [Ya(a)] : $P(a)),
            E = x !== "none";
          !h && E && C.push(...KP(a, v, x, S));
          const P = [a, ...C],
            T = await Zi(t, b),
            R = [];
          let A = ((r = i.flip) == null ? void 0 : r.overflows) || [];
          if ((c && R.push(T[g]), d)) {
            const L = BP(s, o, S);
            R.push(T[L[0]], T[L[1]]);
          }
          if (
            ((A = [...A, { placement: s, overflows: R }]),
            !R.every((L) => L <= 0))
          ) {
            var z, I;
            const L = (((z = i.flip) == null ? void 0 : z.index) || 0) + 1,
              G = P[L];
            if (
              G &&
              (!(d === "alignment" ? m !== Kt(G) : !1) ||
                A.every((k) => k.overflows[0] > 0 && Kt(k.placement) === m))
            )
              return {
                data: { index: L, overflows: A },
                reset: { placement: G },
              };
            let $ =
              (I = A.filter((_) => _.overflows[0] <= 0).sort(
                (_, k) => _.overflows[1] - k.overflows[1],
              )[0]) == null
                ? void 0
                : I.placement;
            if (!$)
              switch (p) {
                case "bestFit": {
                  var Y;
                  const _ =
                    (Y = A.filter((k) => {
                      if (E) {
                        const N = Kt(k.placement);
                        return N === m || N === "y";
                      }
                      return !0;
                    })
                      .map((k) => [
                        k.placement,
                        k.overflows
                          .filter((N) => N > 0)
                          .reduce((N, O) => N + O, 0),
                      ])
                      .sort((k, N) => k[1] - N[1])[0]) == null
                      ? void 0
                      : Y[0];
                  _ && ($ = _);
                  break;
                }
                case "initialPlacement":
                  $ = a;
                  break;
              }
            if (s !== $) return { reset: { placement: $ } };
          }
          return {};
        },
      }
    );
  };
function Kp(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width,
  };
}
function Yp(e) {
  return FP.some((t) => e[t] >= 0);
}
const qP = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "hide",
        options: e,
        async fn(t) {
          const { rects: n } = t,
            { strategy: r = "referenceHidden", ...s } = pn(e, t);
          switch (r) {
            case "referenceHidden": {
              const i = await Zi(t, { ...s, elementContext: "reference" }),
                o = Kp(i, n.reference);
              return {
                data: { referenceHiddenOffsets: o, referenceHidden: Yp(o) },
              };
            }
            case "escaped": {
              const i = await Zi(t, { ...s, altBoundary: !0 }),
                o = Kp(i, n.floating);
              return { data: { escapedOffsets: o, escaped: Yp(o) } };
            }
            default:
              return {};
          }
        },
      }
    );
  },
  K0 = new Set(["left", "top"]);
async function ZP(e, t) {
  const { placement: n, platform: r, elements: s } = e,
    i = await (r.isRTL == null ? void 0 : r.isRTL(s.floating)),
    o = mn(n),
    a = Ys(n),
    l = Kt(n) === "y",
    u = K0.has(o) ? -1 : 1,
    c = i && l ? -1 : 1,
    d = pn(t, e);
  let {
    mainAxis: h,
    crossAxis: p,
    alignmentAxis: x,
  } = typeof d == "number"
    ? { mainAxis: d, crossAxis: 0, alignmentAxis: null }
    : {
        mainAxis: d.mainAxis || 0,
        crossAxis: d.crossAxis || 0,
        alignmentAxis: d.alignmentAxis,
      };
  return (
    a && typeof x == "number" && (p = a === "end" ? x * -1 : x),
    l ? { x: p * c, y: h * u } : { x: h * u, y: p * c }
  );
}
const JP = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: "offset",
        options: e,
        async fn(t) {
          var n, r;
          const { x: s, y: i, placement: o, middlewareData: a } = t,
            l = await ZP(t, e);
          return o === ((n = a.offset) == null ? void 0 : n.placement) &&
            (r = a.arrow) != null &&
            r.alignmentOffset
            ? {}
            : { x: s + l.x, y: i + l.y, data: { ...l, placement: o } };
        },
      }
    );
  },
  eT = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "shift",
        options: e,
        async fn(t) {
          const { x: n, y: r, placement: s } = t,
            {
              mainAxis: i = !0,
              crossAxis: o = !1,
              limiter: a = {
                fn: (b) => {
                  let { x: g, y: m } = b;
                  return { x: g, y: m };
                },
              },
              ...l
            } = pn(e, t),
            u = { x: n, y: r },
            c = await Zi(t, l),
            d = Kt(mn(s)),
            h = Sf(d);
          let p = u[h],
            x = u[d];
          if (i) {
            const b = h === "y" ? "top" : "left",
              g = h === "y" ? "bottom" : "right",
              m = p + c[b],
              y = p - c[g];
            p = Bc(m, p, y);
          }
          if (o) {
            const b = d === "y" ? "top" : "left",
              g = d === "y" ? "bottom" : "right",
              m = x + c[b],
              y = x - c[g];
            x = Bc(m, x, y);
          }
          const v = a.fn({ ...t, [h]: p, [d]: x });
          return {
            ...v,
            data: { x: v.x - n, y: v.y - r, enabled: { [h]: i, [d]: o } },
          };
        },
      }
    );
  },
  tT = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(t) {
          const { x: n, y: r, placement: s, rects: i, middlewareData: o } = t,
            { offset: a = 0, mainAxis: l = !0, crossAxis: u = !0 } = pn(e, t),
            c = { x: n, y: r },
            d = Kt(s),
            h = Sf(d);
          let p = c[h],
            x = c[d];
          const v = pn(a, t),
            b =
              typeof v == "number"
                ? { mainAxis: v, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...v };
          if (l) {
            const y = h === "y" ? "height" : "width",
              S = i.reference[h] - i.floating[y] + b.mainAxis,
              C = i.reference[h] + i.reference[y] - b.mainAxis;
            p < S ? (p = S) : p > C && (p = C);
          }
          if (u) {
            var g, m;
            const y = h === "y" ? "width" : "height",
              S = K0.has(mn(s)),
              C =
                i.reference[d] -
                i.floating[y] +
                ((S && ((g = o.offset) == null ? void 0 : g[d])) || 0) +
                (S ? 0 : b.crossAxis),
              E =
                i.reference[d] +
                i.reference[y] +
                (S ? 0 : ((m = o.offset) == null ? void 0 : m[d]) || 0) -
                (S ? b.crossAxis : 0);
            x < C ? (x = C) : x > E && (x = E);
          }
          return { [h]: p, [d]: x };
        },
      }
    );
  },
  nT = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "size",
        options: e,
        async fn(t) {
          var n, r;
          const { placement: s, rects: i, platform: o, elements: a } = t,
            { apply: l = () => {}, ...u } = pn(e, t),
            c = await Zi(t, u),
            d = mn(s),
            h = Ys(s),
            p = Kt(s) === "y",
            { width: x, height: v } = i.floating;
          let b, g;
          d === "top" || d === "bottom"
            ? ((b = d),
              (g =
                h ===
                ((await (o.isRTL == null ? void 0 : o.isRTL(a.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((g = d), (b = h === "end" ? "top" : "bottom"));
          const m = v - c.top - c.bottom,
            y = x - c.left - c.right,
            S = rr(v - c[b], m),
            C = rr(x - c[g], y),
            E = !t.middlewareData.shift;
          let P = S,
            T = C;
          if (
            ((n = t.middlewareData.shift) != null && n.enabled.x && (T = y),
            (r = t.middlewareData.shift) != null && r.enabled.y && (P = m),
            E && !h)
          ) {
            const A = rt(c.left, 0),
              z = rt(c.right, 0),
              I = rt(c.top, 0),
              Y = rt(c.bottom, 0);
            p
              ? (T = x - 2 * (A !== 0 || z !== 0 ? A + z : rt(c.left, c.right)))
              : (P =
                  v - 2 * (I !== 0 || Y !== 0 ? I + Y : rt(c.top, c.bottom)));
          }
          await l({ ...t, availableWidth: T, availableHeight: P });
          const R = await o.getDimensions(a.floating);
          return x !== R.width || v !== R.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function Pl() {
  return typeof window < "u";
}
function Gs(e) {
  return Y0(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function ot(e) {
  var t;
  return (
    (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  );
}
function en(e) {
  var t;
  return (t = (Y0(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : t.documentElement;
}
function Y0(e) {
  return Pl() ? e instanceof Node || e instanceof ot(e).Node : !1;
}
function Vt(e) {
  return Pl() ? e instanceof Element || e instanceof ot(e).Element : !1;
}
function Zt(e) {
  return Pl() ? e instanceof HTMLElement || e instanceof ot(e).HTMLElement : !1;
}
function Gp(e) {
  return !Pl() || typeof ShadowRoot > "u"
    ? !1
    : e instanceof ShadowRoot || e instanceof ot(e).ShadowRoot;
}
const rT = new Set(["inline", "contents"]);
function wo(e) {
  const { overflow: t, overflowX: n, overflowY: r, display: s } = _t(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !rT.has(s);
}
const sT = new Set(["table", "td", "th"]);
function iT(e) {
  return sT.has(Gs(e));
}
const oT = [":popover-open", ":modal"];
function Tl(e) {
  return oT.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const aT = ["transform", "translate", "scale", "rotate", "perspective"],
  lT = ["transform", "translate", "scale", "rotate", "perspective", "filter"],
  uT = ["paint", "layout", "strict", "content"];
function Pf(e) {
  const t = Tf(),
    n = Vt(e) ? _t(e) : e;
  return (
    aT.some((r) => (n[r] ? n[r] !== "none" : !1)) ||
    (n.containerType ? n.containerType !== "normal" : !1) ||
    (!t && (n.backdropFilter ? n.backdropFilter !== "none" : !1)) ||
    (!t && (n.filter ? n.filter !== "none" : !1)) ||
    lT.some((r) => (n.willChange || "").includes(r)) ||
    uT.some((r) => (n.contain || "").includes(r))
  );
}
function cT(e) {
  let t = sr(e);
  for (; Zt(t) && !_s(t); ) {
    if (Pf(t)) return t;
    if (Tl(t)) return null;
    t = sr(t);
  }
  return null;
}
function Tf() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
const dT = new Set(["html", "body", "#document"]);
function _s(e) {
  return dT.has(Gs(e));
}
function _t(e) {
  return ot(e).getComputedStyle(e);
}
function kl(e) {
  return Vt(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function sr(e) {
  if (Gs(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || (Gp(e) && e.host) || en(e);
  return Gp(t) ? t.host : t;
}
function G0(e) {
  const t = sr(e);
  return _s(t)
    ? e.ownerDocument
      ? e.ownerDocument.body
      : e.body
    : Zt(t) && wo(t)
      ? t
      : G0(t);
}
function Ji(e, t, n) {
  var r;
  (t === void 0 && (t = []), n === void 0 && (n = !0));
  const s = G0(e),
    i = s === ((r = e.ownerDocument) == null ? void 0 : r.body),
    o = ot(s);
  if (i) {
    const a = Uc(o);
    return t.concat(
      o,
      o.visualViewport || [],
      wo(s) ? s : [],
      a && n ? Ji(a) : [],
    );
  }
  return t.concat(s, Ji(s, [], n));
}
function Uc(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Q0(e) {
  const t = _t(e);
  let n = parseFloat(t.width) || 0,
    r = parseFloat(t.height) || 0;
  const s = Zt(e),
    i = s ? e.offsetWidth : n,
    o = s ? e.offsetHeight : r,
    a = Ka(n) !== i || Ka(r) !== o;
  return (a && ((n = i), (r = o)), { width: n, height: r, $: a });
}
function kf(e) {
  return Vt(e) ? e : e.contextElement;
}
function Ss(e) {
  const t = kf(e);
  if (!Zt(t)) return Qt(1);
  const n = t.getBoundingClientRect(),
    { width: r, height: s, $: i } = Q0(t);
  let o = (i ? Ka(n.width) : n.width) / r,
    a = (i ? Ka(n.height) : n.height) / s;
  return (
    (!o || !Number.isFinite(o)) && (o = 1),
    (!a || !Number.isFinite(a)) && (a = 1),
    { x: o, y: a }
  );
}
const fT = Qt(0);
function X0(e) {
  const t = ot(e);
  return !Tf() || !t.visualViewport
    ? fT
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function hT(e, t, n) {
  return (t === void 0 && (t = !1), !n || (t && n !== ot(e)) ? !1 : t);
}
function _r(e, t, n, r) {
  (t === void 0 && (t = !1), n === void 0 && (n = !1));
  const s = e.getBoundingClientRect(),
    i = kf(e);
  let o = Qt(1);
  t && (r ? Vt(r) && (o = Ss(r)) : (o = Ss(e)));
  const a = hT(i, n, r) ? X0(i) : Qt(0);
  let l = (s.left + a.x) / o.x,
    u = (s.top + a.y) / o.y,
    c = s.width / o.x,
    d = s.height / o.y;
  if (i) {
    const h = ot(i),
      p = r && Vt(r) ? ot(r) : r;
    let x = h,
      v = Uc(x);
    for (; v && r && p !== x; ) {
      const b = Ss(v),
        g = v.getBoundingClientRect(),
        m = _t(v),
        y = g.left + (v.clientLeft + parseFloat(m.paddingLeft)) * b.x,
        S = g.top + (v.clientTop + parseFloat(m.paddingTop)) * b.y;
      ((l *= b.x),
        (u *= b.y),
        (c *= b.x),
        (d *= b.y),
        (l += y),
        (u += S),
        (x = ot(v)),
        (v = Uc(x)));
    }
  }
  return Ga({ width: c, height: d, x: l, y: u });
}
function jf(e, t) {
  const n = kl(e).scrollLeft;
  return t ? t.left + n : _r(en(e)).left + n;
}
function q0(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(),
    s = r.left + t.scrollLeft - (n ? 0 : jf(e, r)),
    i = r.top + t.scrollTop;
  return { x: s, y: i };
}
function pT(e) {
  let { elements: t, rect: n, offsetParent: r, strategy: s } = e;
  const i = s === "fixed",
    o = en(r),
    a = t ? Tl(t.floating) : !1;
  if (r === o || (a && i)) return n;
  let l = { scrollLeft: 0, scrollTop: 0 },
    u = Qt(1);
  const c = Qt(0),
    d = Zt(r);
  if (
    (d || (!d && !i)) &&
    ((Gs(r) !== "body" || wo(o)) && (l = kl(r)), Zt(r))
  ) {
    const p = _r(r);
    ((u = Ss(r)), (c.x = p.x + r.clientLeft), (c.y = p.y + r.clientTop));
  }
  const h = o && !d && !i ? q0(o, l, !0) : Qt(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + c.x + h.x,
    y: n.y * u.y - l.scrollTop * u.y + c.y + h.y,
  };
}
function mT(e) {
  return Array.from(e.getClientRects());
}
function gT(e) {
  const t = en(e),
    n = kl(e),
    r = e.ownerDocument.body,
    s = rt(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
    i = rt(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let o = -n.scrollLeft + jf(e);
  const a = -n.scrollTop;
  return (
    _t(r).direction === "rtl" && (o += rt(t.clientWidth, r.clientWidth) - s),
    { width: s, height: i, x: o, y: a }
  );
}
function yT(e, t) {
  const n = ot(e),
    r = en(e),
    s = n.visualViewport;
  let i = r.clientWidth,
    o = r.clientHeight,
    a = 0,
    l = 0;
  if (s) {
    ((i = s.width), (o = s.height));
    const u = Tf();
    (!u || (u && t === "fixed")) && ((a = s.offsetLeft), (l = s.offsetTop));
  }
  return { width: i, height: o, x: a, y: l };
}
const vT = new Set(["absolute", "fixed"]);
function xT(e, t) {
  const n = _r(e, !0, t === "fixed"),
    r = n.top + e.clientTop,
    s = n.left + e.clientLeft,
    i = Zt(e) ? Ss(e) : Qt(1),
    o = e.clientWidth * i.x,
    a = e.clientHeight * i.y,
    l = s * i.x,
    u = r * i.y;
  return { width: o, height: a, x: l, y: u };
}
function Qp(e, t, n) {
  let r;
  if (t === "viewport") r = yT(e, n);
  else if (t === "document") r = gT(en(e));
  else if (Vt(t)) r = xT(t, n);
  else {
    const s = X0(e);
    r = { x: t.x - s.x, y: t.y - s.y, width: t.width, height: t.height };
  }
  return Ga(r);
}
function Z0(e, t) {
  const n = sr(e);
  return n === t || !Vt(n) || _s(n)
    ? !1
    : _t(n).position === "fixed" || Z0(n, t);
}
function wT(e, t) {
  const n = t.get(e);
  if (n) return n;
  let r = Ji(e, [], !1).filter((a) => Vt(a) && Gs(a) !== "body"),
    s = null;
  const i = _t(e).position === "fixed";
  let o = i ? sr(e) : e;
  for (; Vt(o) && !_s(o); ) {
    const a = _t(o),
      l = Pf(o);
    (!l && a.position === "fixed" && (s = null),
      (
        i
          ? !l && !s
          : (!l && a.position === "static" && !!s && vT.has(s.position)) ||
            (wo(o) && !l && Z0(e, o))
      )
        ? (r = r.filter((c) => c !== o))
        : (s = a),
      (o = sr(o)));
  }
  return (t.set(e, r), r);
}
function bT(e) {
  let { element: t, boundary: n, rootBoundary: r, strategy: s } = e;
  const o = [
      ...(n === "clippingAncestors"
        ? Tl(t)
          ? []
          : wT(t, this._c)
        : [].concat(n)),
      r,
    ],
    a = o[0],
    l = o.reduce(
      (u, c) => {
        const d = Qp(t, c, s);
        return (
          (u.top = rt(d.top, u.top)),
          (u.right = rr(d.right, u.right)),
          (u.bottom = rr(d.bottom, u.bottom)),
          (u.left = rt(d.left, u.left)),
          u
        );
      },
      Qp(t, a, s),
    );
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top,
  };
}
function ST(e) {
  const { width: t, height: n } = Q0(e);
  return { width: t, height: n };
}
function CT(e, t, n) {
  const r = Zt(t),
    s = en(t),
    i = n === "fixed",
    o = _r(e, !0, i, t);
  let a = { scrollLeft: 0, scrollTop: 0 };
  const l = Qt(0);
  function u() {
    l.x = jf(s);
  }
  if (r || (!r && !i))
    if (((Gs(t) !== "body" || wo(s)) && (a = kl(t)), r)) {
      const p = _r(t, !0, i, t);
      ((l.x = p.x + t.clientLeft), (l.y = p.y + t.clientTop));
    } else s && u();
  i && !r && s && u();
  const c = s && !r && !i ? q0(s, a) : Qt(0),
    d = o.left + a.scrollLeft - l.x - c.x,
    h = o.top + a.scrollTop - l.y - c.y;
  return { x: d, y: h, width: o.width, height: o.height };
}
function xu(e) {
  return _t(e).position === "static";
}
function Xp(e, t) {
  if (!Zt(e) || _t(e).position === "fixed") return null;
  if (t) return t(e);
  let n = e.offsetParent;
  return (en(e) === n && (n = n.ownerDocument.body), n);
}
function J0(e, t) {
  const n = ot(e);
  if (Tl(e)) return n;
  if (!Zt(e)) {
    let s = sr(e);
    for (; s && !_s(s); ) {
      if (Vt(s) && !xu(s)) return s;
      s = sr(s);
    }
    return n;
  }
  let r = Xp(e, t);
  for (; r && iT(r) && xu(r); ) r = Xp(r, t);
  return r && _s(r) && xu(r) && !Pf(r) ? n : r || cT(e) || n;
}
const ET = async function (e) {
  const t = this.getOffsetParent || J0,
    n = this.getDimensions,
    r = await n(e.floating);
  return {
    reference: CT(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: r.width, height: r.height },
  };
};
function PT(e) {
  return _t(e).direction === "rtl";
}
const TT = {
  convertOffsetParentRelativeRectToViewportRelativeRect: pT,
  getDocumentElement: en,
  getClippingRect: bT,
  getOffsetParent: J0,
  getElementRects: ET,
  getClientRects: mT,
  getDimensions: ST,
  getScale: Ss,
  isElement: Vt,
  isRTL: PT,
};
function ex(e, t) {
  return (
    e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
  );
}
function kT(e, t) {
  let n = null,
    r;
  const s = en(e);
  function i() {
    var a;
    (clearTimeout(r), (a = n) == null || a.disconnect(), (n = null));
  }
  function o(a, l) {
    (a === void 0 && (a = !1), l === void 0 && (l = 1), i());
    const u = e.getBoundingClientRect(),
      { left: c, top: d, width: h, height: p } = u;
    if ((a || t(), !h || !p)) return;
    const x = Xo(d),
      v = Xo(s.clientWidth - (c + h)),
      b = Xo(s.clientHeight - (d + p)),
      g = Xo(c),
      y = {
        rootMargin: -x + "px " + -v + "px " + -b + "px " + -g + "px",
        threshold: rt(0, rr(1, l)) || 1,
      };
    let S = !0;
    function C(E) {
      const P = E[0].intersectionRatio;
      if (P !== l) {
        if (!S) return o();
        P
          ? o(!1, P)
          : (r = setTimeout(() => {
              o(!1, 1e-7);
            }, 1e3));
      }
      (P === 1 && !ex(u, e.getBoundingClientRect()) && o(), (S = !1));
    }
    try {
      n = new IntersectionObserver(C, { ...y, root: s.ownerDocument });
    } catch {
      n = new IntersectionObserver(C, y);
    }
    n.observe(e);
  }
  return (o(!0), i);
}
function jT(e, t, n, r) {
  r === void 0 && (r = {});
  const {
      ancestorScroll: s = !0,
      ancestorResize: i = !0,
      elementResize: o = typeof ResizeObserver == "function",
      layoutShift: a = typeof IntersectionObserver == "function",
      animationFrame: l = !1,
    } = r,
    u = kf(e),
    c = s || i ? [...(u ? Ji(u) : []), ...Ji(t)] : [];
  c.forEach((g) => {
    (s && g.addEventListener("scroll", n, { passive: !0 }),
      i && g.addEventListener("resize", n));
  });
  const d = u && a ? kT(u, n) : null;
  let h = -1,
    p = null;
  o &&
    ((p = new ResizeObserver((g) => {
      let [m] = g;
      (m &&
        m.target === u &&
        p &&
        (p.unobserve(t),
        cancelAnimationFrame(h),
        (h = requestAnimationFrame(() => {
          var y;
          (y = p) == null || y.observe(t);
        }))),
        n());
    })),
    u && !l && p.observe(u),
    p.observe(t));
  let x,
    v = l ? _r(e) : null;
  l && b();
  function b() {
    const g = _r(e);
    (v && !ex(v, g) && n(), (v = g), (x = requestAnimationFrame(b)));
  }
  return (
    n(),
    () => {
      var g;
      (c.forEach((m) => {
        (s && m.removeEventListener("scroll", n),
          i && m.removeEventListener("resize", n));
      }),
        d == null || d(),
        (g = p) == null || g.disconnect(),
        (p = null),
        l && cancelAnimationFrame(x));
    }
  );
}
const NT = JP,
  RT = eT,
  AT = XP,
  MT = nT,
  DT = qP,
  qp = QP,
  LT = tT,
  OT = (e, t, n) => {
    const r = new Map(),
      s = { platform: TT, ...n },
      i = { ...s.platform, _c: r };
    return GP(e, t, { ...s, platform: i });
  };
var IT = typeof document < "u",
  FT = function () {},
  ga = IT ? w.useLayoutEffect : FT;
function Qa(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == "function" && e.toString() === t.toString()) return !0;
  let n, r, s;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (((n = e.length), n !== t.length)) return !1;
      for (r = n; r-- !== 0; ) if (!Qa(e[r], t[r])) return !1;
      return !0;
    }
    if (((s = Object.keys(e)), (n = s.length), n !== Object.keys(t).length))
      return !1;
    for (r = n; r-- !== 0; ) if (!{}.hasOwnProperty.call(t, s[r])) return !1;
    for (r = n; r-- !== 0; ) {
      const i = s[r];
      if (!(i === "_owner" && e.$$typeof) && !Qa(e[i], t[i])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function tx(e) {
  return typeof window > "u"
    ? 1
    : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Zp(e, t) {
  const n = tx(e);
  return Math.round(t * n) / n;
}
function wu(e) {
  const t = w.useRef(e);
  return (
    ga(() => {
      t.current = e;
    }),
    t
  );
}
function VT(e) {
  e === void 0 && (e = {});
  const {
      placement: t = "bottom",
      strategy: n = "absolute",
      middleware: r = [],
      platform: s,
      elements: { reference: i, floating: o } = {},
      transform: a = !0,
      whileElementsMounted: l,
      open: u,
    } = e,
    [c, d] = w.useState({
      x: 0,
      y: 0,
      strategy: n,
      placement: t,
      middlewareData: {},
      isPositioned: !1,
    }),
    [h, p] = w.useState(r);
  Qa(h, r) || p(r);
  const [x, v] = w.useState(null),
    [b, g] = w.useState(null),
    m = w.useCallback((k) => {
      k !== E.current && ((E.current = k), v(k));
    }, []),
    y = w.useCallback((k) => {
      k !== P.current && ((P.current = k), g(k));
    }, []),
    S = i || x,
    C = o || b,
    E = w.useRef(null),
    P = w.useRef(null),
    T = w.useRef(c),
    R = l != null,
    A = wu(l),
    z = wu(s),
    I = wu(u),
    Y = w.useCallback(() => {
      if (!E.current || !P.current) return;
      const k = { placement: t, strategy: n, middleware: h };
      (z.current && (k.platform = z.current),
        OT(E.current, P.current, k).then((N) => {
          const O = { ...N, isPositioned: I.current !== !1 };
          L.current &&
            !Qa(T.current, O) &&
            ((T.current = O),
            vo.flushSync(() => {
              d(O);
            }));
        }));
    }, [h, t, n, z, I]);
  ga(() => {
    u === !1 &&
      T.current.isPositioned &&
      ((T.current.isPositioned = !1), d((k) => ({ ...k, isPositioned: !1 })));
  }, [u]);
  const L = w.useRef(!1);
  (ga(
    () => (
      (L.current = !0),
      () => {
        L.current = !1;
      }
    ),
    [],
  ),
    ga(() => {
      if ((S && (E.current = S), C && (P.current = C), S && C)) {
        if (A.current) return A.current(S, C, Y);
        Y();
      }
    }, [S, C, Y, A, R]));
  const G = w.useMemo(
      () => ({ reference: E, floating: P, setReference: m, setFloating: y }),
      [m, y],
    ),
    $ = w.useMemo(() => ({ reference: S, floating: C }), [S, C]),
    _ = w.useMemo(() => {
      const k = { position: n, left: 0, top: 0 };
      if (!$.floating) return k;
      const N = Zp($.floating, c.x),
        O = Zp($.floating, c.y);
      return a
        ? {
            ...k,
            transform: "translate(" + N + "px, " + O + "px)",
            ...(tx($.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: n, left: N, top: O };
    }, [n, a, $.floating, c.x, c.y]);
  return w.useMemo(
    () => ({ ...c, update: Y, refs: G, elements: $, floatingStyles: _ }),
    [c, Y, G, $, _],
  );
}
const _T = (e) => {
    function t(n) {
      return {}.hasOwnProperty.call(n, "current");
    }
    return {
      name: "arrow",
      options: e,
      fn(n) {
        const { element: r, padding: s } = typeof e == "function" ? e(n) : e;
        return r && t(r)
          ? r.current != null
            ? qp({ element: r.current, padding: s }).fn(n)
            : {}
          : r
            ? qp({ element: r, padding: s }).fn(n)
            : {};
      },
    };
  },
  zT = (e, t) => ({ ...NT(e), options: [e, t] }),
  BT = (e, t) => ({ ...RT(e), options: [e, t] }),
  $T = (e, t) => ({ ...LT(e), options: [e, t] }),
  UT = (e, t) => ({ ...AT(e), options: [e, t] }),
  WT = (e, t) => ({ ...MT(e), options: [e, t] }),
  HT = (e, t) => ({ ...DT(e), options: [e, t] }),
  KT = (e, t) => ({ ..._T(e), options: [e, t] });
var YT = "Arrow",
  nx = w.forwardRef((e, t) => {
    const { children: n, width: r = 10, height: s = 5, ...i } = e;
    return f.jsx(tt.svg, {
      ...i,
      ref: t,
      width: r,
      height: s,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : f.jsx("polygon", { points: "0,0 30,0 15,10" }),
    });
  });
nx.displayName = YT;
var GT = nx;
function QT(e) {
  const [t, n] = w.useState(void 0);
  return (
    nr(() => {
      if (e) {
        n({ width: e.offsetWidth, height: e.offsetHeight });
        const r = new ResizeObserver((s) => {
          if (!Array.isArray(s) || !s.length) return;
          const i = s[0];
          let o, a;
          if ("borderBoxSize" in i) {
            const l = i.borderBoxSize,
              u = Array.isArray(l) ? l[0] : l;
            ((o = u.inlineSize), (a = u.blockSize));
          } else ((o = e.offsetWidth), (a = e.offsetHeight));
          n({ width: o, height: a });
        });
        return (r.observe(e, { box: "border-box" }), () => r.unobserve(e));
      } else n(void 0);
    }, [e]),
    t
  );
}
var rx = "Popper",
  [sx, ix] = Sl(rx),
  [i4, ox] = sx(rx),
  ax = "PopperAnchor",
  lx = w.forwardRef((e, t) => {
    const { __scopePopper: n, virtualRef: r, ...s } = e,
      i = ox(ax, n),
      o = w.useRef(null),
      a = Ft(t, o);
    return (
      w.useEffect(() => {
        i.onAnchorChange((r == null ? void 0 : r.current) || o.current);
      }),
      r ? null : f.jsx(tt.div, { ...s, ref: a })
    );
  });
lx.displayName = ax;
var Nf = "PopperContent",
  [XT, qT] = sx(Nf),
  ux = w.forwardRef((e, t) => {
    var ee, Kr, vn, fr, xn, Yr;
    const {
        __scopePopper: n,
        side: r = "bottom",
        sideOffset: s = 0,
        align: i = "center",
        alignOffset: o = 0,
        arrowPadding: a = 0,
        avoidCollisions: l = !0,
        collisionBoundary: u = [],
        collisionPadding: c = 0,
        sticky: d = "partial",
        hideWhenDetached: h = !1,
        updatePositionStrategy: p = "optimized",
        onPlaced: x,
        ...v
      } = e,
      b = ox(Nf, n),
      [g, m] = w.useState(null),
      y = Ft(t, (wn) => m(wn)),
      [S, C] = w.useState(null),
      E = QT(S),
      P = (E == null ? void 0 : E.width) ?? 0,
      T = (E == null ? void 0 : E.height) ?? 0,
      R = r + (i !== "center" ? "-" + i : ""),
      A =
        typeof c == "number"
          ? c
          : { top: 0, right: 0, bottom: 0, left: 0, ...c },
      z = Array.isArray(u) ? u : [u],
      I = z.length > 0,
      Y = { padding: A, boundary: z.filter(JT), altBoundary: I },
      {
        refs: L,
        floatingStyles: G,
        placement: $,
        isPositioned: _,
        middlewareData: k,
      } = VT({
        strategy: "fixed",
        placement: R,
        whileElementsMounted: (...wn) =>
          jT(...wn, { animationFrame: p === "always" }),
        elements: { reference: b.anchor },
        middleware: [
          zT({ mainAxis: s + T, alignmentAxis: o }),
          l &&
            BT({
              mainAxis: !0,
              crossAxis: !1,
              limiter: d === "partial" ? $T() : void 0,
              ...Y,
            }),
          l && UT({ ...Y }),
          WT({
            ...Y,
            apply: ({
              elements: wn,
              rects: To,
              availableWidth: Vl,
              availableHeight: ko,
            }) => {
              const { width: _l, height: ti } = To.reference,
                Gr = wn.floating.style;
              (Gr.setProperty("--radix-popper-available-width", `${Vl}px`),
                Gr.setProperty("--radix-popper-available-height", `${ko}px`),
                Gr.setProperty("--radix-popper-anchor-width", `${_l}px`),
                Gr.setProperty("--radix-popper-anchor-height", `${ti}px`));
            },
          }),
          S && KT({ element: S, padding: a }),
          ek({ arrowWidth: P, arrowHeight: T }),
          h && HT({ strategy: "referenceHidden", ...Y }),
        ],
      }),
      [N, O] = fx($),
      U = tr(x);
    nr(() => {
      _ && (U == null || U());
    }, [_, U]);
    const B = (ee = k.arrow) == null ? void 0 : ee.x,
      Q = (Kr = k.arrow) == null ? void 0 : Kr.y,
      q = ((vn = k.arrow) == null ? void 0 : vn.centerOffset) !== 0,
      [xe, De] = w.useState();
    return (
      nr(() => {
        g && De(window.getComputedStyle(g).zIndex);
      }, [g]),
      f.jsx("div", {
        ref: L.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...G,
          transform: _ ? G.transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: xe,
          "--radix-popper-transform-origin": [
            (fr = k.transformOrigin) == null ? void 0 : fr.x,
            (xn = k.transformOrigin) == null ? void 0 : xn.y,
          ].join(" "),
          ...(((Yr = k.hide) == null ? void 0 : Yr.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none",
          }),
        },
        dir: e.dir,
        children: f.jsx(XT, {
          scope: n,
          placedSide: N,
          onArrowChange: C,
          arrowX: B,
          arrowY: Q,
          shouldHideArrow: q,
          children: f.jsx(tt.div, {
            "data-side": N,
            "data-align": O,
            ...v,
            ref: y,
            style: { ...v.style, animation: _ ? void 0 : "none" },
          }),
        }),
      })
    );
  });
ux.displayName = Nf;
var cx = "PopperArrow",
  ZT = { top: "bottom", right: "left", bottom: "top", left: "right" },
  dx = w.forwardRef(function (t, n) {
    const { __scopePopper: r, ...s } = t,
      i = qT(cx, r),
      o = ZT[i.placedSide];
    return f.jsx("span", {
      ref: i.onArrowChange,
      style: {
        position: "absolute",
        left: i.arrowX,
        top: i.arrowY,
        [o]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0",
        }[i.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)",
        }[i.placedSide],
        visibility: i.shouldHideArrow ? "hidden" : void 0,
      },
      children: f.jsx(GT, {
        ...s,
        ref: n,
        style: { ...s.style, display: "block" },
      }),
    });
  });
dx.displayName = cx;
function JT(e) {
  return e !== null;
}
var ek = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var b, g, m;
    const { placement: n, rects: r, middlewareData: s } = t,
      o = ((b = s.arrow) == null ? void 0 : b.centerOffset) !== 0,
      a = o ? 0 : e.arrowWidth,
      l = o ? 0 : e.arrowHeight,
      [u, c] = fx(n),
      d = { start: "0%", center: "50%", end: "100%" }[c],
      h = (((g = s.arrow) == null ? void 0 : g.x) ?? 0) + a / 2,
      p = (((m = s.arrow) == null ? void 0 : m.y) ?? 0) + l / 2;
    let x = "",
      v = "";
    return (
      u === "bottom"
        ? ((x = o ? d : `${h}px`), (v = `${-l}px`))
        : u === "top"
          ? ((x = o ? d : `${h}px`), (v = `${r.floating.height + l}px`))
          : u === "right"
            ? ((x = `${-l}px`), (v = o ? d : `${p}px`))
            : u === "left" &&
              ((x = `${r.floating.width + l}px`), (v = o ? d : `${p}px`)),
      { data: { x, y: v } }
    );
  },
});
function fx(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var tk = lx,
  nk = ux,
  rk = dx,
  [jl, o4] = Sl("Tooltip", [ix]),
  Rf = ix(),
  hx = "TooltipProvider",
  sk = 700,
  Jp = "tooltip.open",
  [ik, px] = jl(hx),
  mx = (e) => {
    const {
        __scopeTooltip: t,
        delayDuration: n = sk,
        skipDelayDuration: r = 300,
        disableHoverableContent: s = !1,
        children: i,
      } = e,
      o = w.useRef(!0),
      a = w.useRef(!1),
      l = w.useRef(0);
    return (
      w.useEffect(() => {
        const u = l.current;
        return () => window.clearTimeout(u);
      }, []),
      f.jsx(ik, {
        scope: t,
        isOpenDelayedRef: o,
        delayDuration: n,
        onOpen: w.useCallback(() => {
          (window.clearTimeout(l.current), (o.current = !1));
        }, []),
        onClose: w.useCallback(() => {
          (window.clearTimeout(l.current),
            (l.current = window.setTimeout(() => (o.current = !0), r)));
        }, [r]),
        isPointerInTransitRef: a,
        onPointerInTransitChange: w.useCallback((u) => {
          a.current = u;
        }, []),
        disableHoverableContent: s,
        children: i,
      })
    );
  };
mx.displayName = hx;
var gx = "Tooltip",
  [a4, Nl] = jl(gx),
  Wc = "TooltipTrigger",
  ok = w.forwardRef((e, t) => {
    const { __scopeTooltip: n, ...r } = e,
      s = Nl(Wc, n),
      i = px(Wc, n),
      o = Rf(n),
      a = w.useRef(null),
      l = Ft(t, a, s.onTriggerChange),
      u = w.useRef(!1),
      c = w.useRef(!1),
      d = w.useCallback(() => (u.current = !1), []);
    return (
      w.useEffect(
        () => () => document.removeEventListener("pointerup", d),
        [d],
      ),
      f.jsx(tk, {
        asChild: !0,
        ...o,
        children: f.jsx(tt.button, {
          "aria-describedby": s.open ? s.contentId : void 0,
          "data-state": s.stateAttribute,
          ...r,
          ref: l,
          onPointerMove: Pe(e.onPointerMove, (h) => {
            h.pointerType !== "touch" &&
              !c.current &&
              !i.isPointerInTransitRef.current &&
              (s.onTriggerEnter(), (c.current = !0));
          }),
          onPointerLeave: Pe(e.onPointerLeave, () => {
            (s.onTriggerLeave(), (c.current = !1));
          }),
          onPointerDown: Pe(e.onPointerDown, () => {
            (s.open && s.onClose(),
              (u.current = !0),
              document.addEventListener("pointerup", d, { once: !0 }));
          }),
          onFocus: Pe(e.onFocus, () => {
            u.current || s.onOpen();
          }),
          onBlur: Pe(e.onBlur, s.onClose),
          onClick: Pe(e.onClick, s.onClose),
        }),
      })
    );
  });
ok.displayName = Wc;
var ak = "TooltipPortal",
  [l4, lk] = jl(ak, { forceMount: void 0 }),
  zs = "TooltipContent",
  yx = w.forwardRef((e, t) => {
    const n = lk(zs, e.__scopeTooltip),
      { forceMount: r = n.forceMount, side: s = "top", ...i } = e,
      o = Nl(zs, e.__scopeTooltip);
    return f.jsx(pf, {
      present: r || o.open,
      children: o.disableHoverableContent
        ? f.jsx(vx, { side: s, ...i, ref: t })
        : f.jsx(uk, { side: s, ...i, ref: t }),
    });
  }),
  uk = w.forwardRef((e, t) => {
    const n = Nl(zs, e.__scopeTooltip),
      r = px(zs, e.__scopeTooltip),
      s = w.useRef(null),
      i = Ft(t, s),
      [o, a] = w.useState(null),
      { trigger: l, onClose: u } = n,
      c = s.current,
      { onPointerInTransitChange: d } = r,
      h = w.useCallback(() => {
        (a(null), d(!1));
      }, [d]),
      p = w.useCallback(
        (x, v) => {
          const b = x.currentTarget,
            g = { x: x.clientX, y: x.clientY },
            m = pk(g, b.getBoundingClientRect()),
            y = mk(g, m),
            S = gk(v.getBoundingClientRect()),
            C = vk([...y, ...S]);
          (a(C), d(!0));
        },
        [d],
      );
    return (
      w.useEffect(() => () => h(), [h]),
      w.useEffect(() => {
        if (l && c) {
          const x = (b) => p(b, c),
            v = (b) => p(b, l);
          return (
            l.addEventListener("pointerleave", x),
            c.addEventListener("pointerleave", v),
            () => {
              (l.removeEventListener("pointerleave", x),
                c.removeEventListener("pointerleave", v));
            }
          );
        }
      }, [l, c, p, h]),
      w.useEffect(() => {
        if (o) {
          const x = (v) => {
            const b = v.target,
              g = { x: v.clientX, y: v.clientY },
              m =
                (l == null ? void 0 : l.contains(b)) ||
                (c == null ? void 0 : c.contains(b)),
              y = !yk(g, o);
            m ? h() : y && (h(), u());
          };
          return (
            document.addEventListener("pointermove", x),
            () => document.removeEventListener("pointermove", x)
          );
        }
      }, [l, c, o, u, h]),
      f.jsx(vx, { ...e, ref: i })
    );
  }),
  [ck, dk] = jl(gx, { isInside: !1 }),
  fk = pC("TooltipContent"),
  vx = w.forwardRef((e, t) => {
    const {
        __scopeTooltip: n,
        children: r,
        "aria-label": s,
        onEscapeKeyDown: i,
        onPointerDownOutside: o,
        ...a
      } = e,
      l = Nl(zs, n),
      u = Rf(n),
      { onClose: c } = l;
    return (
      w.useEffect(
        () => (
          document.addEventListener(Jp, c),
          () => document.removeEventListener(Jp, c)
        ),
        [c],
      ),
      w.useEffect(() => {
        if (l.trigger) {
          const d = (h) => {
            const p = h.target;
            p != null && p.contains(l.trigger) && c();
          };
          return (
            window.addEventListener("scroll", d, { capture: !0 }),
            () => window.removeEventListener("scroll", d, { capture: !0 })
          );
        }
      }, [l.trigger, c]),
      f.jsx(hf, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: i,
        onPointerDownOutside: o,
        onFocusOutside: (d) => d.preventDefault(),
        onDismiss: c,
        children: f.jsxs(nk, {
          "data-state": l.stateAttribute,
          ...u,
          ...a,
          ref: t,
          style: {
            ...a.style,
            "--radix-tooltip-content-transform-origin":
              "var(--radix-popper-transform-origin)",
            "--radix-tooltip-content-available-width":
              "var(--radix-popper-available-width)",
            "--radix-tooltip-content-available-height":
              "var(--radix-popper-available-height)",
            "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-tooltip-trigger-height":
              "var(--radix-popper-anchor-height)",
          },
          children: [
            f.jsx(fk, { children: r }),
            f.jsx(ck, {
              scope: n,
              isInside: !0,
              children: f.jsx(_C, {
                id: l.contentId,
                role: "tooltip",
                children: s || r,
              }),
            }),
          ],
        }),
      })
    );
  });
yx.displayName = zs;
var xx = "TooltipArrow",
  hk = w.forwardRef((e, t) => {
    const { __scopeTooltip: n, ...r } = e,
      s = Rf(n);
    return dk(xx, n).isInside ? null : f.jsx(rk, { ...s, ...r, ref: t });
  });
hk.displayName = xx;
function pk(e, t) {
  const n = Math.abs(t.top - e.y),
    r = Math.abs(t.bottom - e.y),
    s = Math.abs(t.right - e.x),
    i = Math.abs(t.left - e.x);
  switch (Math.min(n, r, s, i)) {
    case i:
      return "left";
    case s:
      return "right";
    case n:
      return "top";
    case r:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function mk(e, t, n = 5) {
  const r = [];
  switch (t) {
    case "top":
      r.push({ x: e.x - n, y: e.y + n }, { x: e.x + n, y: e.y + n });
      break;
    case "bottom":
      r.push({ x: e.x - n, y: e.y - n }, { x: e.x + n, y: e.y - n });
      break;
    case "left":
      r.push({ x: e.x + n, y: e.y - n }, { x: e.x + n, y: e.y + n });
      break;
    case "right":
      r.push({ x: e.x - n, y: e.y - n }, { x: e.x - n, y: e.y + n });
      break;
  }
  return r;
}
function gk(e) {
  const { top: t, right: n, bottom: r, left: s } = e;
  return [
    { x: s, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: s, y: r },
  ];
}
function yk(e, t) {
  const { x: n, y: r } = e;
  let s = !1;
  for (let i = 0, o = t.length - 1; i < t.length; o = i++) {
    const a = t[i],
      l = t[o],
      u = a.x,
      c = a.y,
      d = l.x,
      h = l.y;
    c > r != h > r && n < ((d - u) * (r - c)) / (h - c) + u && (s = !s);
  }
  return s;
}
function vk(e) {
  const t = e.slice();
  return (
    t.sort((n, r) =>
      n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0,
    ),
    xk(t)
  );
}
function xk(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let r = 0; r < e.length; r++) {
    const s = e[r];
    for (; t.length >= 2; ) {
      const i = t[t.length - 1],
        o = t[t.length - 2];
      if ((i.x - o.x) * (s.y - o.y) >= (i.y - o.y) * (s.x - o.x)) t.pop();
      else break;
    }
    t.push(s);
  }
  t.pop();
  const n = [];
  for (let r = e.length - 1; r >= 0; r--) {
    const s = e[r];
    for (; n.length >= 2; ) {
      const i = n[n.length - 1],
        o = n[n.length - 2];
      if ((i.x - o.x) * (s.y - o.y) >= (i.y - o.y) * (s.x - o.x)) n.pop();
      else break;
    }
    n.push(s);
  }
  return (
    n.pop(),
    t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y
      ? t
      : t.concat(n)
  );
}
var wk = mx,
  wx = yx;
const bk = wk,
  Sk = w.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) =>
    f.jsx(wx, {
      ref: r,
      sideOffset: t,
      className: cr(
        "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        e,
      ),
      ...n,
    }),
  );
Sk.displayName = wx.displayName;
var Rl = class {
    constructor() {
      ((this.listeners = new Set()),
        (this.subscribe = this.subscribe.bind(this)));
    }
    subscribe(e) {
      return (
        this.listeners.add(e),
        this.onSubscribe(),
        () => {
          (this.listeners.delete(e), this.onUnsubscribe());
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  Al = typeof window > "u" || "Deno" in globalThis;
function Nt() {}
function Ck(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ek(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function Pk(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function Hc(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Tk(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function em(e, t) {
  const {
    type: n = "all",
    exact: r,
    fetchStatus: s,
    predicate: i,
    queryKey: o,
    stale: a,
  } = e;
  if (o) {
    if (r) {
      if (t.queryHash !== Af(o, t.options)) return !1;
    } else if (!to(t.queryKey, o)) return !1;
  }
  if (n !== "all") {
    const l = t.isActive();
    if ((n === "active" && !l) || (n === "inactive" && l)) return !1;
  }
  return !(
    (typeof a == "boolean" && t.isStale() !== a) ||
    (s && s !== t.state.fetchStatus) ||
    (i && !i(t))
  );
}
function tm(e, t) {
  const { exact: n, status: r, predicate: s, mutationKey: i } = e;
  if (i) {
    if (!t.options.mutationKey) return !1;
    if (n) {
      if (eo(t.options.mutationKey) !== eo(i)) return !1;
    } else if (!to(t.options.mutationKey, i)) return !1;
  }
  return !((r && t.state.status !== r) || (s && !s(t)));
}
function Af(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || eo)(e);
}
function eo(e) {
  return JSON.stringify(e, (t, n) =>
    Kc(n)
      ? Object.keys(n)
          .sort()
          .reduce((r, s) => ((r[s] = n[s]), r), {})
      : n,
  );
}
function to(e, t) {
  return e === t
    ? !0
    : typeof e != typeof t
      ? !1
      : e && t && typeof e == "object" && typeof t == "object"
        ? Object.keys(t).every((n) => to(e[n], t[n]))
        : !1;
}
function bx(e, t) {
  if (e === t) return e;
  const n = nm(e) && nm(t);
  if (n || (Kc(e) && Kc(t))) {
    const r = n ? e : Object.keys(e),
      s = r.length,
      i = n ? t : Object.keys(t),
      o = i.length,
      a = n ? [] : {},
      l = new Set(r);
    let u = 0;
    for (let c = 0; c < o; c++) {
      const d = n ? c : i[c];
      ((!n && l.has(d)) || n) && e[d] === void 0 && t[d] === void 0
        ? ((a[d] = void 0), u++)
        : ((a[d] = bx(e[d], t[d])), a[d] === e[d] && e[d] !== void 0 && u++);
    }
    return s === o && u === s ? e : a;
  }
  return t;
}
function nm(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function Kc(e) {
  if (!rm(e)) return !1;
  const t = e.constructor;
  if (t === void 0) return !0;
  const n = t.prototype;
  return !(
    !rm(n) ||
    !n.hasOwnProperty("isPrototypeOf") ||
    Object.getPrototypeOf(e) !== Object.prototype
  );
}
function rm(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function kk(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function jk(e, t, n) {
  return typeof n.structuralSharing == "function"
    ? n.structuralSharing(e, t)
    : n.structuralSharing !== !1
      ? bx(e, t)
      : t;
}
function Nk(e, t, n = 0) {
  const r = [...e, t];
  return n && r.length > n ? r.slice(1) : r;
}
function Rk(e, t, n = 0) {
  const r = [t, ...e];
  return n && r.length > n ? r.slice(0, -1) : r;
}
var Mf = Symbol();
function Sx(e, t) {
  return !e.queryFn && t != null && t.initialPromise
    ? () => t.initialPromise
    : !e.queryFn || e.queryFn === Mf
      ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`))
      : e.queryFn;
}
var Pr,
  On,
  Es,
  Ag,
  Ak =
    ((Ag = class extends Rl {
      constructor() {
        super();
        J(this, Pr);
        J(this, On);
        J(this, Es);
        H(this, Es, (t) => {
          if (!Al && window.addEventListener) {
            const n = () => t();
            return (
              window.addEventListener("visibilitychange", n, !1),
              () => {
                window.removeEventListener("visibilitychange", n);
              }
            );
          }
        });
      }
      onSubscribe() {
        j(this, On) || this.setEventListener(j(this, Es));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = j(this, On)) == null || t.call(this), H(this, On, void 0));
      }
      setEventListener(t) {
        var n;
        (H(this, Es, t),
          (n = j(this, On)) == null || n.call(this),
          H(
            this,
            On,
            t((r) => {
              typeof r == "boolean" ? this.setFocused(r) : this.onFocus();
            }),
          ));
      }
      setFocused(t) {
        j(this, Pr) !== t && (H(this, Pr, t), this.onFocus());
      }
      onFocus() {
        const t = this.isFocused();
        this.listeners.forEach((n) => {
          n(t);
        });
      }
      isFocused() {
        var t;
        return typeof j(this, Pr) == "boolean"
          ? j(this, Pr)
          : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !==
              "hidden";
      }
    }),
    (Pr = new WeakMap()),
    (On = new WeakMap()),
    (Es = new WeakMap()),
    Ag),
  Cx = new Ak(),
  Ps,
  In,
  Ts,
  Mg,
  Mk =
    ((Mg = class extends Rl {
      constructor() {
        super();
        J(this, Ps, !0);
        J(this, In);
        J(this, Ts);
        H(this, Ts, (t) => {
          if (!Al && window.addEventListener) {
            const n = () => t(!0),
              r = () => t(!1);
            return (
              window.addEventListener("online", n, !1),
              window.addEventListener("offline", r, !1),
              () => {
                (window.removeEventListener("online", n),
                  window.removeEventListener("offline", r));
              }
            );
          }
        });
      }
      onSubscribe() {
        j(this, In) || this.setEventListener(j(this, Ts));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = j(this, In)) == null || t.call(this), H(this, In, void 0));
      }
      setEventListener(t) {
        var n;
        (H(this, Ts, t),
          (n = j(this, In)) == null || n.call(this),
          H(this, In, t(this.setOnline.bind(this))));
      }
      setOnline(t) {
        j(this, Ps) !== t &&
          (H(this, Ps, t),
          this.listeners.forEach((r) => {
            r(t);
          }));
      }
      isOnline() {
        return j(this, Ps);
      }
    }),
    (Ps = new WeakMap()),
    (In = new WeakMap()),
    (Ts = new WeakMap()),
    Mg),
  Xa = new Mk();
function Dk() {
  let e, t;
  const n = new Promise((s, i) => {
    ((e = s), (t = i));
  });
  ((n.status = "pending"), n.catch(() => {}));
  function r(s) {
    (Object.assign(n, s), delete n.resolve, delete n.reject);
  }
  return (
    (n.resolve = (s) => {
      (r({ status: "fulfilled", value: s }), e(s));
    }),
    (n.reject = (s) => {
      (r({ status: "rejected", reason: s }), t(s));
    }),
    n
  );
}
function Lk(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function Ex(e) {
  return (e ?? "online") === "online" ? Xa.isOnline() : !0;
}
var Px = class extends Error {
  constructor(e) {
    (super("CancelledError"),
      (this.revert = e == null ? void 0 : e.revert),
      (this.silent = e == null ? void 0 : e.silent));
  }
};
function bu(e) {
  return e instanceof Px;
}
function Tx(e) {
  let t = !1,
    n = 0,
    r = !1,
    s;
  const i = Dk(),
    o = (v) => {
      var b;
      r || (h(new Px(v)), (b = e.abort) == null || b.call(e));
    },
    a = () => {
      t = !0;
    },
    l = () => {
      t = !1;
    },
    u = () =>
      Cx.isFocused() &&
      (e.networkMode === "always" || Xa.isOnline()) &&
      e.canRun(),
    c = () => Ex(e.networkMode) && e.canRun(),
    d = (v) => {
      var b;
      r ||
        ((r = !0),
        (b = e.onSuccess) == null || b.call(e, v),
        s == null || s(),
        i.resolve(v));
    },
    h = (v) => {
      var b;
      r ||
        ((r = !0),
        (b = e.onError) == null || b.call(e, v),
        s == null || s(),
        i.reject(v));
    },
    p = () =>
      new Promise((v) => {
        var b;
        ((s = (g) => {
          (r || u()) && v(g);
        }),
          (b = e.onPause) == null || b.call(e));
      }).then(() => {
        var v;
        ((s = void 0), r || (v = e.onContinue) == null || v.call(e));
      }),
    x = () => {
      if (r) return;
      let v;
      const b = n === 0 ? e.initialPromise : void 0;
      try {
        v = b ?? e.fn();
      } catch (g) {
        v = Promise.reject(g);
      }
      Promise.resolve(v)
        .then(d)
        .catch((g) => {
          var E;
          if (r) return;
          const m = e.retry ?? (Al ? 0 : 3),
            y = e.retryDelay ?? Lk,
            S = typeof y == "function" ? y(n, g) : y,
            C =
              m === !0 ||
              (typeof m == "number" && n < m) ||
              (typeof m == "function" && m(n, g));
          if (t || !C) {
            h(g);
            return;
          }
          (n++,
            (E = e.onFail) == null || E.call(e, n, g),
            kk(S)
              .then(() => (u() ? void 0 : p()))
              .then(() => {
                t ? h(g) : x();
              }));
        });
    };
  return {
    promise: i,
    cancel: o,
    continue: () => (s == null || s(), i),
    cancelRetry: a,
    continueRetry: l,
    canStart: c,
    start: () => (c() ? x() : p().then(x), i),
  };
}
var Ok = (e) => setTimeout(e, 0);
function Ik() {
  let e = [],
    t = 0,
    n = (a) => {
      a();
    },
    r = (a) => {
      a();
    },
    s = Ok;
  const i = (a) => {
      t
        ? e.push(a)
        : s(() => {
            n(a);
          });
    },
    o = () => {
      const a = e;
      ((e = []),
        a.length &&
          s(() => {
            r(() => {
              a.forEach((l) => {
                n(l);
              });
            });
          }));
    };
  return {
    batch: (a) => {
      let l;
      t++;
      try {
        l = a();
      } finally {
        (t--, t || o());
      }
      return l;
    },
    batchCalls:
      (a) =>
      (...l) => {
        i(() => {
          a(...l);
        });
      },
    schedule: i,
    setNotifyFunction: (a) => {
      n = a;
    },
    setBatchNotifyFunction: (a) => {
      r = a;
    },
    setScheduler: (a) => {
      s = a;
    },
  };
}
var Ue = Ik(),
  Tr,
  Dg,
  kx =
    ((Dg = class {
      constructor() {
        J(this, Tr);
      }
      destroy() {
        this.clearGcTimeout();
      }
      scheduleGc() {
        (this.clearGcTimeout(),
          Ek(this.gcTime) &&
            H(
              this,
              Tr,
              setTimeout(() => {
                this.optionalRemove();
              }, this.gcTime),
            ));
      }
      updateGcTime(e) {
        this.gcTime = Math.max(
          this.gcTime || 0,
          e ?? (Al ? 1 / 0 : 5 * 60 * 1e3),
        );
      }
      clearGcTimeout() {
        j(this, Tr) && (clearTimeout(j(this, Tr)), H(this, Tr, void 0));
      }
    }),
    (Tr = new WeakMap()),
    Dg),
  ks,
  kr,
  ft,
  jr,
  Fe,
  co,
  Nr,
  Rt,
  nn,
  Lg,
  Fk =
    ((Lg = class extends kx {
      constructor(t) {
        super();
        J(this, Rt);
        J(this, ks);
        J(this, kr);
        J(this, ft);
        J(this, jr);
        J(this, Fe);
        J(this, co);
        J(this, Nr);
        (H(this, Nr, !1),
          H(this, co, t.defaultOptions),
          this.setOptions(t.options),
          (this.observers = []),
          H(this, jr, t.client),
          H(this, ft, j(this, jr).getQueryCache()),
          (this.queryKey = t.queryKey),
          (this.queryHash = t.queryHash),
          H(this, ks, _k(this.options)),
          (this.state = t.state ?? j(this, ks)),
          this.scheduleGc());
      }
      get meta() {
        return this.options.meta;
      }
      get promise() {
        var t;
        return (t = j(this, Fe)) == null ? void 0 : t.promise;
      }
      setOptions(t) {
        ((this.options = { ...j(this, co), ...t }),
          this.updateGcTime(this.options.gcTime));
      }
      optionalRemove() {
        !this.observers.length &&
          this.state.fetchStatus === "idle" &&
          j(this, ft).remove(this);
      }
      setData(t, n) {
        const r = jk(this.state.data, t, this.options);
        return (
          Le(this, Rt, nn).call(this, {
            data: r,
            type: "success",
            dataUpdatedAt: n == null ? void 0 : n.updatedAt,
            manual: n == null ? void 0 : n.manual,
          }),
          r
        );
      }
      setState(t, n) {
        Le(this, Rt, nn).call(this, {
          type: "setState",
          state: t,
          setStateOptions: n,
        });
      }
      cancel(t) {
        var r, s;
        const n = (r = j(this, Fe)) == null ? void 0 : r.promise;
        return (
          (s = j(this, Fe)) == null || s.cancel(t),
          n ? n.then(Nt).catch(Nt) : Promise.resolve()
        );
      }
      destroy() {
        (super.destroy(), this.cancel({ silent: !0 }));
      }
      reset() {
        (this.destroy(), this.setState(j(this, ks)));
      }
      isActive() {
        return this.observers.some((t) => Tk(t.options.enabled, this) !== !1);
      }
      isDisabled() {
        return this.getObserversCount() > 0
          ? !this.isActive()
          : this.options.queryFn === Mf ||
              this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
      }
      isStatic() {
        return this.getObserversCount() > 0
          ? this.observers.some(
              (t) => Hc(t.options.staleTime, this) === "static",
            )
          : !1;
      }
      isStale() {
        return this.getObserversCount() > 0
          ? this.observers.some((t) => t.getCurrentResult().isStale)
          : this.state.data === void 0 || this.state.isInvalidated;
      }
      isStaleByTime(t = 0) {
        return this.state.data === void 0
          ? !0
          : t === "static"
            ? !1
            : this.state.isInvalidated
              ? !0
              : !Pk(this.state.dataUpdatedAt, t);
      }
      onFocus() {
        var n;
        const t = this.observers.find((r) => r.shouldFetchOnWindowFocus());
        (t == null || t.refetch({ cancelRefetch: !1 }),
          (n = j(this, Fe)) == null || n.continue());
      }
      onOnline() {
        var n;
        const t = this.observers.find((r) => r.shouldFetchOnReconnect());
        (t == null || t.refetch({ cancelRefetch: !1 }),
          (n = j(this, Fe)) == null || n.continue());
      }
      addObserver(t) {
        this.observers.includes(t) ||
          (this.observers.push(t),
          this.clearGcTimeout(),
          j(this, ft).notify({
            type: "observerAdded",
            query: this,
            observer: t,
          }));
      }
      removeObserver(t) {
        this.observers.includes(t) &&
          ((this.observers = this.observers.filter((n) => n !== t)),
          this.observers.length ||
            (j(this, Fe) &&
              (j(this, Nr)
                ? j(this, Fe).cancel({ revert: !0 })
                : j(this, Fe).cancelRetry()),
            this.scheduleGc()),
          j(this, ft).notify({
            type: "observerRemoved",
            query: this,
            observer: t,
          }));
      }
      getObserversCount() {
        return this.observers.length;
      }
      invalidate() {
        this.state.isInvalidated ||
          Le(this, Rt, nn).call(this, { type: "invalidate" });
      }
      fetch(t, n) {
        var u, c, d;
        if (this.state.fetchStatus !== "idle") {
          if (this.state.data !== void 0 && n != null && n.cancelRefetch)
            this.cancel({ silent: !0 });
          else if (j(this, Fe))
            return (j(this, Fe).continueRetry(), j(this, Fe).promise);
        }
        if ((t && this.setOptions(t), !this.options.queryFn)) {
          const h = this.observers.find((p) => p.options.queryFn);
          h && this.setOptions(h.options);
        }
        const r = new AbortController(),
          s = (h) => {
            Object.defineProperty(h, "signal", {
              enumerable: !0,
              get: () => (H(this, Nr, !0), r.signal),
            });
          },
          i = () => {
            const h = Sx(this.options, n),
              x = (() => {
                const v = {
                  client: j(this, jr),
                  queryKey: this.queryKey,
                  meta: this.meta,
                };
                return (s(v), v);
              })();
            return (
              H(this, Nr, !1),
              this.options.persister ? this.options.persister(h, x, this) : h(x)
            );
          },
          a = (() => {
            const h = {
              fetchOptions: n,
              options: this.options,
              queryKey: this.queryKey,
              client: j(this, jr),
              state: this.state,
              fetchFn: i,
            };
            return (s(h), h);
          })();
        ((u = this.options.behavior) == null || u.onFetch(a, this),
          H(this, kr, this.state),
          (this.state.fetchStatus === "idle" ||
            this.state.fetchMeta !==
              ((c = a.fetchOptions) == null ? void 0 : c.meta)) &&
            Le(this, Rt, nn).call(this, {
              type: "fetch",
              meta: (d = a.fetchOptions) == null ? void 0 : d.meta,
            }));
        const l = (h) => {
          var p, x, v, b;
          ((bu(h) && h.silent) ||
            Le(this, Rt, nn).call(this, { type: "error", error: h }),
            bu(h) ||
              ((x = (p = j(this, ft).config).onError) == null ||
                x.call(p, h, this),
              (b = (v = j(this, ft).config).onSettled) == null ||
                b.call(v, this.state.data, h, this)),
            this.scheduleGc());
        };
        return (
          H(
            this,
            Fe,
            Tx({
              initialPromise: n == null ? void 0 : n.initialPromise,
              fn: a.fetchFn,
              abort: r.abort.bind(r),
              onSuccess: (h) => {
                var p, x, v, b;
                if (h === void 0) {
                  l(new Error(`${this.queryHash} data is undefined`));
                  return;
                }
                try {
                  this.setData(h);
                } catch (g) {
                  l(g);
                  return;
                }
                ((x = (p = j(this, ft).config).onSuccess) == null ||
                  x.call(p, h, this),
                  (b = (v = j(this, ft).config).onSettled) == null ||
                    b.call(v, h, this.state.error, this),
                  this.scheduleGc());
              },
              onError: l,
              onFail: (h, p) => {
                Le(this, Rt, nn).call(this, {
                  type: "failed",
                  failureCount: h,
                  error: p,
                });
              },
              onPause: () => {
                Le(this, Rt, nn).call(this, { type: "pause" });
              },
              onContinue: () => {
                Le(this, Rt, nn).call(this, { type: "continue" });
              },
              retry: a.options.retry,
              retryDelay: a.options.retryDelay,
              networkMode: a.options.networkMode,
              canRun: () => !0,
            }),
          ),
          j(this, Fe).start()
        );
      }
    }),
    (ks = new WeakMap()),
    (kr = new WeakMap()),
    (ft = new WeakMap()),
    (jr = new WeakMap()),
    (Fe = new WeakMap()),
    (co = new WeakMap()),
    (Nr = new WeakMap()),
    (Rt = new WeakSet()),
    (nn = function (t) {
      const n = (r) => {
        switch (t.type) {
          case "failed":
            return {
              ...r,
              fetchFailureCount: t.failureCount,
              fetchFailureReason: t.error,
            };
          case "pause":
            return { ...r, fetchStatus: "paused" };
          case "continue":
            return { ...r, fetchStatus: "fetching" };
          case "fetch":
            return {
              ...r,
              ...Vk(r.data, this.options),
              fetchMeta: t.meta ?? null,
            };
          case "success":
            return (
              H(this, kr, void 0),
              {
                ...r,
                data: t.data,
                dataUpdateCount: r.dataUpdateCount + 1,
                dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
                error: null,
                isInvalidated: !1,
                status: "success",
                ...(!t.manual && {
                  fetchStatus: "idle",
                  fetchFailureCount: 0,
                  fetchFailureReason: null,
                }),
              }
            );
          case "error":
            const s = t.error;
            return bu(s) && s.revert && j(this, kr)
              ? { ...j(this, kr), fetchStatus: "idle" }
              : {
                  ...r,
                  error: s,
                  errorUpdateCount: r.errorUpdateCount + 1,
                  errorUpdatedAt: Date.now(),
                  fetchFailureCount: r.fetchFailureCount + 1,
                  fetchFailureReason: s,
                  fetchStatus: "idle",
                  status: "error",
                };
          case "invalidate":
            return { ...r, isInvalidated: !0 };
          case "setState":
            return { ...r, ...t.state };
        }
      };
      ((this.state = n(this.state)),
        Ue.batch(() => {
          (this.observers.forEach((r) => {
            r.onQueryUpdate();
          }),
            j(this, ft).notify({ query: this, type: "updated", action: t }));
        }));
    }),
    Lg);
function Vk(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: Ex(t.networkMode) ? "fetching" : "paused",
    ...(e === void 0 && { error: null, status: "pending" }),
  };
}
function _k(e) {
  const t =
      typeof e.initialData == "function" ? e.initialData() : e.initialData,
    n = t !== void 0,
    r = n
      ? typeof e.initialDataUpdatedAt == "function"
        ? e.initialDataUpdatedAt()
        : e.initialDataUpdatedAt
      : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: n ? (r ?? Date.now()) : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: n ? "success" : "pending",
    fetchStatus: "idle",
  };
}
var $t,
  Og,
  zk =
    ((Og = class extends Rl {
      constructor(t = {}) {
        super();
        J(this, $t);
        ((this.config = t), H(this, $t, new Map()));
      }
      build(t, n, r) {
        const s = n.queryKey,
          i = n.queryHash ?? Af(s, n);
        let o = this.get(i);
        return (
          o ||
            ((o = new Fk({
              client: t,
              queryKey: s,
              queryHash: i,
              options: t.defaultQueryOptions(n),
              state: r,
              defaultOptions: t.getQueryDefaults(s),
            })),
            this.add(o)),
          o
        );
      }
      add(t) {
        j(this, $t).has(t.queryHash) ||
          (j(this, $t).set(t.queryHash, t),
          this.notify({ type: "added", query: t }));
      }
      remove(t) {
        const n = j(this, $t).get(t.queryHash);
        n &&
          (t.destroy(),
          n === t && j(this, $t).delete(t.queryHash),
          this.notify({ type: "removed", query: t }));
      }
      clear() {
        Ue.batch(() => {
          this.getAll().forEach((t) => {
            this.remove(t);
          });
        });
      }
      get(t) {
        return j(this, $t).get(t);
      }
      getAll() {
        return [...j(this, $t).values()];
      }
      find(t) {
        const n = { exact: !0, ...t };
        return this.getAll().find((r) => em(n, r));
      }
      findAll(t = {}) {
        const n = this.getAll();
        return Object.keys(t).length > 0 ? n.filter((r) => em(t, r)) : n;
      }
      notify(t) {
        Ue.batch(() => {
          this.listeners.forEach((n) => {
            n(t);
          });
        });
      }
      onFocus() {
        Ue.batch(() => {
          this.getAll().forEach((t) => {
            t.onFocus();
          });
        });
      }
      onOnline() {
        Ue.batch(() => {
          this.getAll().forEach((t) => {
            t.onOnline();
          });
        });
      }
    }),
    ($t = new WeakMap()),
    Og),
  Ut,
  Be,
  Rr,
  Wt,
  kn,
  Ig,
  Bk =
    ((Ig = class extends kx {
      constructor(t) {
        super();
        J(this, Wt);
        J(this, Ut);
        J(this, Be);
        J(this, Rr);
        ((this.mutationId = t.mutationId),
          H(this, Be, t.mutationCache),
          H(this, Ut, []),
          (this.state = t.state || $k()),
          this.setOptions(t.options),
          this.scheduleGc());
      }
      setOptions(t) {
        ((this.options = t), this.updateGcTime(this.options.gcTime));
      }
      get meta() {
        return this.options.meta;
      }
      addObserver(t) {
        j(this, Ut).includes(t) ||
          (j(this, Ut).push(t),
          this.clearGcTimeout(),
          j(this, Be).notify({
            type: "observerAdded",
            mutation: this,
            observer: t,
          }));
      }
      removeObserver(t) {
        (H(
          this,
          Ut,
          j(this, Ut).filter((n) => n !== t),
        ),
          this.scheduleGc(),
          j(this, Be).notify({
            type: "observerRemoved",
            mutation: this,
            observer: t,
          }));
      }
      optionalRemove() {
        j(this, Ut).length ||
          (this.state.status === "pending"
            ? this.scheduleGc()
            : j(this, Be).remove(this));
      }
      continue() {
        var t;
        return (
          ((t = j(this, Rr)) == null ? void 0 : t.continue()) ??
          this.execute(this.state.variables)
        );
      }
      async execute(t) {
        var i, o, a, l, u, c, d, h, p, x, v, b, g, m, y, S, C, E, P, T;
        const n = () => {
          Le(this, Wt, kn).call(this, { type: "continue" });
        };
        H(
          this,
          Rr,
          Tx({
            fn: () =>
              this.options.mutationFn
                ? this.options.mutationFn(t)
                : Promise.reject(new Error("No mutationFn found")),
            onFail: (R, A) => {
              Le(this, Wt, kn).call(this, {
                type: "failed",
                failureCount: R,
                error: A,
              });
            },
            onPause: () => {
              Le(this, Wt, kn).call(this, { type: "pause" });
            },
            onContinue: n,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => j(this, Be).canRun(this),
          }),
        );
        const r = this.state.status === "pending",
          s = !j(this, Rr).canStart();
        try {
          if (r) n();
          else {
            (Le(this, Wt, kn).call(this, {
              type: "pending",
              variables: t,
              isPaused: s,
            }),
              await ((o = (i = j(this, Be).config).onMutate) == null
                ? void 0
                : o.call(i, t, this)));
            const A = await ((l = (a = this.options).onMutate) == null
              ? void 0
              : l.call(a, t));
            A !== this.state.context &&
              Le(this, Wt, kn).call(this, {
                type: "pending",
                context: A,
                variables: t,
                isPaused: s,
              });
          }
          const R = await j(this, Rr).start();
          return (
            await ((c = (u = j(this, Be).config).onSuccess) == null
              ? void 0
              : c.call(u, R, t, this.state.context, this)),
            await ((h = (d = this.options).onSuccess) == null
              ? void 0
              : h.call(d, R, t, this.state.context)),
            await ((x = (p = j(this, Be).config).onSettled) == null
              ? void 0
              : x.call(
                  p,
                  R,
                  null,
                  this.state.variables,
                  this.state.context,
                  this,
                )),
            await ((b = (v = this.options).onSettled) == null
              ? void 0
              : b.call(v, R, null, t, this.state.context)),
            Le(this, Wt, kn).call(this, { type: "success", data: R }),
            R
          );
        } catch (R) {
          try {
            throw (
              await ((m = (g = j(this, Be).config).onError) == null
                ? void 0
                : m.call(g, R, t, this.state.context, this)),
              await ((S = (y = this.options).onError) == null
                ? void 0
                : S.call(y, R, t, this.state.context)),
              await ((E = (C = j(this, Be).config).onSettled) == null
                ? void 0
                : E.call(
                    C,
                    void 0,
                    R,
                    this.state.variables,
                    this.state.context,
                    this,
                  )),
              await ((T = (P = this.options).onSettled) == null
                ? void 0
                : T.call(P, void 0, R, t, this.state.context)),
              R
            );
          } finally {
            Le(this, Wt, kn).call(this, { type: "error", error: R });
          }
        } finally {
          j(this, Be).runNext(this);
        }
      }
    }),
    (Ut = new WeakMap()),
    (Be = new WeakMap()),
    (Rr = new WeakMap()),
    (Wt = new WeakSet()),
    (kn = function (t) {
      const n = (r) => {
        switch (t.type) {
          case "failed":
            return {
              ...r,
              failureCount: t.failureCount,
              failureReason: t.error,
            };
          case "pause":
            return { ...r, isPaused: !0 };
          case "continue":
            return { ...r, isPaused: !1 };
          case "pending":
            return {
              ...r,
              context: t.context,
              data: void 0,
              failureCount: 0,
              failureReason: null,
              error: null,
              isPaused: t.isPaused,
              status: "pending",
              variables: t.variables,
              submittedAt: Date.now(),
            };
          case "success":
            return {
              ...r,
              data: t.data,
              failureCount: 0,
              failureReason: null,
              error: null,
              status: "success",
              isPaused: !1,
            };
          case "error":
            return {
              ...r,
              data: void 0,
              error: t.error,
              failureCount: r.failureCount + 1,
              failureReason: t.error,
              isPaused: !1,
              status: "error",
            };
        }
      };
      ((this.state = n(this.state)),
        Ue.batch(() => {
          (j(this, Ut).forEach((r) => {
            r.onMutationUpdate(t);
          }),
            j(this, Be).notify({ mutation: this, type: "updated", action: t }));
        }));
    }),
    Ig);
function $k() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0,
  };
}
var on,
  At,
  fo,
  Fg,
  Uk =
    ((Fg = class extends Rl {
      constructor(t = {}) {
        super();
        J(this, on);
        J(this, At);
        J(this, fo);
        ((this.config = t),
          H(this, on, new Set()),
          H(this, At, new Map()),
          H(this, fo, 0));
      }
      build(t, n, r) {
        const s = new Bk({
          mutationCache: this,
          mutationId: ++No(this, fo)._,
          options: t.defaultMutationOptions(n),
          state: r,
        });
        return (this.add(s), s);
      }
      add(t) {
        j(this, on).add(t);
        const n = qo(t);
        if (typeof n == "string") {
          const r = j(this, At).get(n);
          r ? r.push(t) : j(this, At).set(n, [t]);
        }
        this.notify({ type: "added", mutation: t });
      }
      remove(t) {
        if (j(this, on).delete(t)) {
          const n = qo(t);
          if (typeof n == "string") {
            const r = j(this, At).get(n);
            if (r)
              if (r.length > 1) {
                const s = r.indexOf(t);
                s !== -1 && r.splice(s, 1);
              } else r[0] === t && j(this, At).delete(n);
          }
        }
        this.notify({ type: "removed", mutation: t });
      }
      canRun(t) {
        const n = qo(t);
        if (typeof n == "string") {
          const r = j(this, At).get(n),
            s =
              r == null ? void 0 : r.find((i) => i.state.status === "pending");
          return !s || s === t;
        } else return !0;
      }
      runNext(t) {
        var r;
        const n = qo(t);
        if (typeof n == "string") {
          const s =
            (r = j(this, At).get(n)) == null
              ? void 0
              : r.find((i) => i !== t && i.state.isPaused);
          return (s == null ? void 0 : s.continue()) ?? Promise.resolve();
        } else return Promise.resolve();
      }
      clear() {
        Ue.batch(() => {
          (j(this, on).forEach((t) => {
            this.notify({ type: "removed", mutation: t });
          }),
            j(this, on).clear(),
            j(this, At).clear());
        });
      }
      getAll() {
        return Array.from(j(this, on));
      }
      find(t) {
        const n = { exact: !0, ...t };
        return this.getAll().find((r) => tm(n, r));
      }
      findAll(t = {}) {
        return this.getAll().filter((n) => tm(t, n));
      }
      notify(t) {
        Ue.batch(() => {
          this.listeners.forEach((n) => {
            n(t);
          });
        });
      }
      resumePausedMutations() {
        const t = this.getAll().filter((n) => n.state.isPaused);
        return Ue.batch(() =>
          Promise.all(t.map((n) => n.continue().catch(Nt))),
        );
      }
    }),
    (on = new WeakMap()),
    (At = new WeakMap()),
    (fo = new WeakMap()),
    Fg);
function qo(e) {
  var t;
  return (t = e.options.scope) == null ? void 0 : t.id;
}
function sm(e) {
  return {
    onFetch: (t, n) => {
      var c, d, h, p, x;
      const r = t.options,
        s =
          (h =
            (d = (c = t.fetchOptions) == null ? void 0 : c.meta) == null
              ? void 0
              : d.fetchMore) == null
            ? void 0
            : h.direction,
        i = ((p = t.state.data) == null ? void 0 : p.pages) || [],
        o = ((x = t.state.data) == null ? void 0 : x.pageParams) || [];
      let a = { pages: [], pageParams: [] },
        l = 0;
      const u = async () => {
        let v = !1;
        const b = (y) => {
            Object.defineProperty(y, "signal", {
              enumerable: !0,
              get: () => (
                t.signal.aborted
                  ? (v = !0)
                  : t.signal.addEventListener("abort", () => {
                      v = !0;
                    }),
                t.signal
              ),
            });
          },
          g = Sx(t.options, t.fetchOptions),
          m = async (y, S, C) => {
            if (v) return Promise.reject();
            if (S == null && y.pages.length) return Promise.resolve(y);
            const P = (() => {
                const z = {
                  client: t.client,
                  queryKey: t.queryKey,
                  pageParam: S,
                  direction: C ? "backward" : "forward",
                  meta: t.options.meta,
                };
                return (b(z), z);
              })(),
              T = await g(P),
              { maxPages: R } = t.options,
              A = C ? Rk : Nk;
            return {
              pages: A(y.pages, T, R),
              pageParams: A(y.pageParams, S, R),
            };
          };
        if (s && i.length) {
          const y = s === "backward",
            S = y ? Wk : im,
            C = { pages: i, pageParams: o },
            E = S(r, C);
          a = await m(C, E, y);
        } else {
          const y = e ?? i.length;
          do {
            const S = l === 0 ? (o[0] ?? r.initialPageParam) : im(r, a);
            if (l > 0 && S == null) break;
            ((a = await m(a, S)), l++);
          } while (l < y);
        }
        return a;
      };
      t.options.persister
        ? (t.fetchFn = () => {
            var v, b;
            return (b = (v = t.options).persister) == null
              ? void 0
              : b.call(
                  v,
                  u,
                  {
                    client: t.client,
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal,
                  },
                  n,
                );
          })
        : (t.fetchFn = u);
    },
  };
}
function im(e, { pages: t, pageParams: n }) {
  const r = t.length - 1;
  return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0;
}
function Wk(e, { pages: t, pageParams: n }) {
  var r;
  return t.length > 0
    ? (r = e.getPreviousPageParam) == null
      ? void 0
      : r.call(e, t[0], t, n[0], n)
    : void 0;
}
var ge,
  Fn,
  Vn,
  js,
  Ns,
  _n,
  Rs,
  As,
  Vg,
  Hk =
    ((Vg = class {
      constructor(e = {}) {
        J(this, ge);
        J(this, Fn);
        J(this, Vn);
        J(this, js);
        J(this, Ns);
        J(this, _n);
        J(this, Rs);
        J(this, As);
        (H(this, ge, e.queryCache || new zk()),
          H(this, Fn, e.mutationCache || new Uk()),
          H(this, Vn, e.defaultOptions || {}),
          H(this, js, new Map()),
          H(this, Ns, new Map()),
          H(this, _n, 0));
      }
      mount() {
        (No(this, _n)._++,
          j(this, _n) === 1 &&
            (H(
              this,
              Rs,
              Cx.subscribe(async (e) => {
                e &&
                  (await this.resumePausedMutations(), j(this, ge).onFocus());
              }),
            ),
            H(
              this,
              As,
              Xa.subscribe(async (e) => {
                e &&
                  (await this.resumePausedMutations(), j(this, ge).onOnline());
              }),
            )));
      }
      unmount() {
        var e, t;
        (No(this, _n)._--,
          j(this, _n) === 0 &&
            ((e = j(this, Rs)) == null || e.call(this),
            H(this, Rs, void 0),
            (t = j(this, As)) == null || t.call(this),
            H(this, As, void 0)));
      }
      isFetching(e) {
        return j(this, ge).findAll({ ...e, fetchStatus: "fetching" }).length;
      }
      isMutating(e) {
        return j(this, Fn).findAll({ ...e, status: "pending" }).length;
      }
      getQueryData(e) {
        var n;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (n = j(this, ge).get(t.queryHash)) == null
          ? void 0
          : n.state.data;
      }
      ensureQueryData(e) {
        const t = this.defaultQueryOptions(e),
          n = j(this, ge).build(this, t),
          r = n.state.data;
        return r === void 0
          ? this.fetchQuery(e)
          : (e.revalidateIfStale &&
              n.isStaleByTime(Hc(t.staleTime, n)) &&
              this.prefetchQuery(t),
            Promise.resolve(r));
      }
      getQueriesData(e) {
        return j(this, ge)
          .findAll(e)
          .map(({ queryKey: t, state: n }) => {
            const r = n.data;
            return [t, r];
          });
      }
      setQueryData(e, t, n) {
        const r = this.defaultQueryOptions({ queryKey: e }),
          s = j(this, ge).get(r.queryHash),
          i = s == null ? void 0 : s.state.data,
          o = Ck(t, i);
        if (o !== void 0)
          return j(this, ge)
            .build(this, r)
            .setData(o, { ...n, manual: !0 });
      }
      setQueriesData(e, t, n) {
        return Ue.batch(() =>
          j(this, ge)
            .findAll(e)
            .map(({ queryKey: r }) => [r, this.setQueryData(r, t, n)]),
        );
      }
      getQueryState(e) {
        var n;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (n = j(this, ge).get(t.queryHash)) == null ? void 0 : n.state;
      }
      removeQueries(e) {
        const t = j(this, ge);
        Ue.batch(() => {
          t.findAll(e).forEach((n) => {
            t.remove(n);
          });
        });
      }
      resetQueries(e, t) {
        const n = j(this, ge);
        return Ue.batch(
          () => (
            n.findAll(e).forEach((r) => {
              r.reset();
            }),
            this.refetchQueries({ type: "active", ...e }, t)
          ),
        );
      }
      cancelQueries(e, t = {}) {
        const n = { revert: !0, ...t },
          r = Ue.batch(() =>
            j(this, ge)
              .findAll(e)
              .map((s) => s.cancel(n)),
          );
        return Promise.all(r).then(Nt).catch(Nt);
      }
      invalidateQueries(e, t = {}) {
        return Ue.batch(
          () => (
            j(this, ge)
              .findAll(e)
              .forEach((n) => {
                n.invalidate();
              }),
            (e == null ? void 0 : e.refetchType) === "none"
              ? Promise.resolve()
              : this.refetchQueries(
                  {
                    ...e,
                    type:
                      (e == null ? void 0 : e.refetchType) ??
                      (e == null ? void 0 : e.type) ??
                      "active",
                  },
                  t,
                )
          ),
        );
      }
      refetchQueries(e, t = {}) {
        const n = { ...t, cancelRefetch: t.cancelRefetch ?? !0 },
          r = Ue.batch(() =>
            j(this, ge)
              .findAll(e)
              .filter((s) => !s.isDisabled() && !s.isStatic())
              .map((s) => {
                let i = s.fetch(void 0, n);
                return (
                  n.throwOnError || (i = i.catch(Nt)),
                  s.state.fetchStatus === "paused" ? Promise.resolve() : i
                );
              }),
          );
        return Promise.all(r).then(Nt);
      }
      fetchQuery(e) {
        const t = this.defaultQueryOptions(e);
        t.retry === void 0 && (t.retry = !1);
        const n = j(this, ge).build(this, t);
        return n.isStaleByTime(Hc(t.staleTime, n))
          ? n.fetch(t)
          : Promise.resolve(n.state.data);
      }
      prefetchQuery(e) {
        return this.fetchQuery(e).then(Nt).catch(Nt);
      }
      fetchInfiniteQuery(e) {
        return ((e.behavior = sm(e.pages)), this.fetchQuery(e));
      }
      prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(Nt).catch(Nt);
      }
      ensureInfiniteQueryData(e) {
        return ((e.behavior = sm(e.pages)), this.ensureQueryData(e));
      }
      resumePausedMutations() {
        return Xa.isOnline()
          ? j(this, Fn).resumePausedMutations()
          : Promise.resolve();
      }
      getQueryCache() {
        return j(this, ge);
      }
      getMutationCache() {
        return j(this, Fn);
      }
      getDefaultOptions() {
        return j(this, Vn);
      }
      setDefaultOptions(e) {
        H(this, Vn, e);
      }
      setQueryDefaults(e, t) {
        j(this, js).set(eo(e), { queryKey: e, defaultOptions: t });
      }
      getQueryDefaults(e) {
        const t = [...j(this, js).values()],
          n = {};
        return (
          t.forEach((r) => {
            to(e, r.queryKey) && Object.assign(n, r.defaultOptions);
          }),
          n
        );
      }
      setMutationDefaults(e, t) {
        j(this, Ns).set(eo(e), { mutationKey: e, defaultOptions: t });
      }
      getMutationDefaults(e) {
        const t = [...j(this, Ns).values()],
          n = {};
        return (
          t.forEach((r) => {
            to(e, r.mutationKey) && Object.assign(n, r.defaultOptions);
          }),
          n
        );
      }
      defaultQueryOptions(e) {
        if (e._defaulted) return e;
        const t = {
          ...j(this, Vn).queries,
          ...this.getQueryDefaults(e.queryKey),
          ...e,
          _defaulted: !0,
        };
        return (
          t.queryHash || (t.queryHash = Af(t.queryKey, t)),
          t.refetchOnReconnect === void 0 &&
            (t.refetchOnReconnect = t.networkMode !== "always"),
          t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
          !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
          t.queryFn === Mf && (t.enabled = !1),
          t
        );
      }
      defaultMutationOptions(e) {
        return e != null && e._defaulted
          ? e
          : {
              ...j(this, Vn).mutations,
              ...((e == null ? void 0 : e.mutationKey) &&
                this.getMutationDefaults(e.mutationKey)),
              ...e,
              _defaulted: !0,
            };
      }
      clear() {
        (j(this, ge).clear(), j(this, Fn).clear());
      }
    }),
    (ge = new WeakMap()),
    (Fn = new WeakMap()),
    (Vn = new WeakMap()),
    (js = new WeakMap()),
    (Ns = new WeakMap()),
    (_n = new WeakMap()),
    (Rs = new WeakMap()),
    (As = new WeakMap()),
    Vg),
  Kk = w.createContext(void 0),
  Yk = ({ client: e, children: t }) => (
    w.useEffect(
      () => (
        e.mount(),
        () => {
          e.unmount();
        }
      ),
      [e],
    ),
    f.jsx(Kk.Provider, { value: e, children: t })
  );
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function no() {
  return (
    (no = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    no.apply(this, arguments)
  );
}
var $n;
(function (e) {
  ((e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE"));
})($n || ($n = {}));
const om = "popstate";
function Gk(e) {
  e === void 0 && (e = {});
  function t(r, s) {
    let { pathname: i, search: o, hash: a } = r.location;
    return Yc(
      "",
      { pathname: i, search: o, hash: a },
      (s.state && s.state.usr) || null,
      (s.state && s.state.key) || "default",
    );
  }
  function n(r, s) {
    return typeof s == "string" ? s : qa(s);
  }
  return Xk(t, n, null, e);
}
function Se(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function jx(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Qk() {
  return Math.random().toString(36).substr(2, 8);
}
function am(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Yc(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    no(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Qs(t) : t,
      { state: n, key: (t && t.key) || r || Qk() },
    )
  );
}
function qa(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Qs(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    (r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e));
  }
  return t;
}
function Xk(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: s = document.defaultView, v5Compat: i = !1 } = r,
    o = s.history,
    a = $n.Pop,
    l = null,
    u = c();
  u == null && ((u = 0), o.replaceState(no({}, o.state, { idx: u }), ""));
  function c() {
    return (o.state || { idx: null }).idx;
  }
  function d() {
    a = $n.Pop;
    let b = c(),
      g = b == null ? null : b - u;
    ((u = b), l && l({ action: a, location: v.location, delta: g }));
  }
  function h(b, g) {
    a = $n.Push;
    let m = Yc(v.location, b, g);
    u = c() + 1;
    let y = am(m, u),
      S = v.createHref(m);
    try {
      o.pushState(y, "", S);
    } catch (C) {
      if (C instanceof DOMException && C.name === "DataCloneError") throw C;
      s.location.assign(S);
    }
    i && l && l({ action: a, location: v.location, delta: 1 });
  }
  function p(b, g) {
    a = $n.Replace;
    let m = Yc(v.location, b, g);
    u = c();
    let y = am(m, u),
      S = v.createHref(m);
    (o.replaceState(y, "", S),
      i && l && l({ action: a, location: v.location, delta: 0 }));
  }
  function x(b) {
    let g = s.location.origin !== "null" ? s.location.origin : s.location.href,
      m = typeof b == "string" ? b : qa(b);
    return (
      (m = m.replace(/ $/, "%20")),
      Se(
        g,
        "No window.location.(origin|href) available to create URL for href: " +
          m,
      ),
      new URL(m, g)
    );
  }
  let v = {
    get action() {
      return a;
    },
    get location() {
      return e(s, o);
    },
    listen(b) {
      if (l) throw new Error("A history only accepts one active listener");
      return (
        s.addEventListener(om, d),
        (l = b),
        () => {
          (s.removeEventListener(om, d), (l = null));
        }
      );
    },
    createHref(b) {
      return t(s, b);
    },
    createURL: x,
    encodeLocation(b) {
      let g = x(b);
      return { pathname: g.pathname, search: g.search, hash: g.hash };
    },
    push: h,
    replace: p,
    go(b) {
      return o.go(b);
    },
  };
  return v;
}
var lm;
(function (e) {
  ((e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error"));
})(lm || (lm = {}));
function qk(e, t, n) {
  return (n === void 0 && (n = "/"), Zk(e, t, n, !1));
}
function Zk(e, t, n, r) {
  let s = typeof t == "string" ? Qs(t) : t,
    i = Df(s.pathname || "/", n);
  if (i == null) return null;
  let o = Nx(e);
  Jk(o);
  let a = null;
  for (let l = 0; a == null && l < o.length; ++l) {
    let u = c2(i);
    a = l2(o[l], u, r);
  }
  return a;
}
function Nx(e, t, n, r) {
  (t === void 0 && (t = []),
    n === void 0 && (n = []),
    r === void 0 && (r = ""));
  let s = (i, o, a) => {
    let l = {
      relativePath: a === void 0 ? i.path || "" : a,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: o,
      route: i,
    };
    l.relativePath.startsWith("/") &&
      (Se(
        l.relativePath.startsWith(r),
        'Absolute route path "' +
          l.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes.",
      ),
      (l.relativePath = l.relativePath.slice(r.length)));
    let u = Zn([r, l.relativePath]),
      c = n.concat(l);
    (i.children &&
      i.children.length > 0 &&
      (Se(
        i.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".'),
      ),
      Nx(i.children, t, c, u)),
      !(i.path == null && !i.index) &&
        t.push({ path: u, score: o2(u, i.index), routesMeta: c }));
  };
  return (
    e.forEach((i, o) => {
      var a;
      if (i.path === "" || !((a = i.path) != null && a.includes("?"))) s(i, o);
      else for (let l of Rx(i.path)) s(i, o, l);
    }),
    t
  );
}
function Rx(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    s = n.endsWith("?"),
    i = n.replace(/\?$/, "");
  if (r.length === 0) return s ? [i, ""] : [i];
  let o = Rx(r.join("/")),
    a = [];
  return (
    a.push(...o.map((l) => (l === "" ? i : [i, l].join("/")))),
    s && a.push(...o),
    a.map((l) => (e.startsWith("/") && l === "" ? "/" : l))
  );
}
function Jk(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : a2(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex),
        ),
  );
}
const e2 = /^:[\w-]+$/,
  t2 = 3,
  n2 = 2,
  r2 = 1,
  s2 = 10,
  i2 = -2,
  um = (e) => e === "*";
function o2(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(um) && (r += i2),
    t && (r += n2),
    n
      .filter((s) => !um(s))
      .reduce((s, i) => s + (e2.test(i) ? t2 : i === "" ? r2 : s2), r)
  );
}
function a2(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, s) => r === t[s])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function l2(e, t, n) {
  let { routesMeta: r } = e,
    s = {},
    i = "/",
    o = [];
  for (let a = 0; a < r.length; ++a) {
    let l = r[a],
      u = a === r.length - 1,
      c = i === "/" ? t : t.slice(i.length) || "/",
      d = cm(
        { path: l.relativePath, caseSensitive: l.caseSensitive, end: u },
        c,
      ),
      h = l.route;
    if (
      (!d &&
        u &&
        n &&
        !r[r.length - 1].route.index &&
        (d = cm(
          { path: l.relativePath, caseSensitive: l.caseSensitive, end: !1 },
          c,
        )),
      !d)
    )
      return null;
    (Object.assign(s, d.params),
      o.push({
        params: s,
        pathname: Zn([i, d.pathname]),
        pathnameBase: p2(Zn([i, d.pathnameBase])),
        route: h,
      }),
      d.pathnameBase !== "/" && (i = Zn([i, d.pathnameBase])));
  }
  return o;
}
function cm(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = u2(e.path, e.caseSensitive, e.end),
    s = t.match(n);
  if (!s) return null;
  let i = s[0],
    o = i.replace(/(.)\/+$/, "$1"),
    a = s.slice(1);
  return {
    params: r.reduce((u, c, d) => {
      let { paramName: h, isOptional: p } = c;
      if (h === "*") {
        let v = a[d] || "";
        o = i.slice(0, i.length - v.length).replace(/(.)\/+$/, "$1");
      }
      const x = a[d];
      return (
        p && !x ? (u[h] = void 0) : (u[h] = (x || "").replace(/%2F/g, "/")),
        u
      );
    }, {}),
    pathname: i,
    pathnameBase: o,
    pattern: e,
  };
}
function u2(e, t, n) {
  (t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    jx(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'),
    ));
  let r = [],
    s =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (o, a, l) => (
            r.push({ paramName: a, isOptional: l != null }),
            l ? "/?([^\\/]+)?" : "/([^\\/]+)"
          ),
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (s += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
        ? (s += "\\/*$")
        : e !== "" && e !== "/" && (s += "(?:(?=\\/|$))"),
    [new RegExp(s, t ? void 0 : "i"), r]
  );
}
function c2(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      jx(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ")."),
      ),
      e
    );
  }
}
function Df(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function d2(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: s = "",
  } = typeof e == "string" ? Qs(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : f2(n, t)) : t,
    search: m2(r),
    hash: g2(s),
  };
}
function f2(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((s) => {
      s === ".." ? n.length > 1 && n.pop() : s !== "." && n.push(s);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function Su(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function h2(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0),
  );
}
function Ax(e, t) {
  let n = h2(e);
  return t
    ? n.map((r, s) => (s === n.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function Mx(e, t, n, r) {
  r === void 0 && (r = !1);
  let s;
  typeof e == "string"
    ? (s = Qs(e))
    : ((s = no({}, e)),
      Se(
        !s.pathname || !s.pathname.includes("?"),
        Su("?", "pathname", "search", s),
      ),
      Se(
        !s.pathname || !s.pathname.includes("#"),
        Su("#", "pathname", "hash", s),
      ),
      Se(!s.search || !s.search.includes("#"), Su("#", "search", "hash", s)));
  let i = e === "" || s.pathname === "",
    o = i ? "/" : s.pathname,
    a;
  if (o == null) a = n;
  else {
    let d = t.length - 1;
    if (!r && o.startsWith("..")) {
      let h = o.split("/");
      for (; h[0] === ".."; ) (h.shift(), (d -= 1));
      s.pathname = h.join("/");
    }
    a = d >= 0 ? t[d] : "/";
  }
  let l = d2(s, a),
    u = o && o !== "/" && o.endsWith("/"),
    c = (i || o === ".") && n.endsWith("/");
  return (!l.pathname.endsWith("/") && (u || c) && (l.pathname += "/"), l);
}
const Zn = (e) => e.join("/").replace(/\/\/+/g, "/"),
  p2 = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  m2 = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  g2 = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function y2(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const Dx = ["post", "put", "patch", "delete"];
new Set(Dx);
const v2 = ["get", ...Dx];
new Set(v2);
/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ro() {
  return (
    (ro = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ro.apply(this, arguments)
  );
}
const Lf = w.createContext(null),
  x2 = w.createContext(null),
  Ur = w.createContext(null),
  Ml = w.createContext(null),
  Wr = w.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Lx = w.createContext(null);
function w2(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  bo() || Se(!1);
  let { basename: r, navigator: s } = w.useContext(Ur),
    { hash: i, pathname: o, search: a } = Ix(e, { relative: n }),
    l = o;
  return (
    r !== "/" && (l = o === "/" ? r : Zn([r, o])),
    s.createHref({ pathname: l, search: a, hash: i })
  );
}
function bo() {
  return w.useContext(Ml) != null;
}
function Hr() {
  return (bo() || Se(!1), w.useContext(Ml).location);
}
function Ox(e) {
  w.useContext(Ur).static || w.useLayoutEffect(e);
}
function b2() {
  let { isDataRoute: e } = w.useContext(Wr);
  return e ? L2() : S2();
}
function S2() {
  bo() || Se(!1);
  let e = w.useContext(Lf),
    { basename: t, future: n, navigator: r } = w.useContext(Ur),
    { matches: s } = w.useContext(Wr),
    { pathname: i } = Hr(),
    o = JSON.stringify(Ax(s, n.v7_relativeSplatPath)),
    a = w.useRef(!1);
  return (
    Ox(() => {
      a.current = !0;
    }),
    w.useCallback(
      function (u, c) {
        if ((c === void 0 && (c = {}), !a.current)) return;
        if (typeof u == "number") {
          r.go(u);
          return;
        }
        let d = Mx(u, JSON.parse(o), i, c.relative === "path");
        (e == null &&
          t !== "/" &&
          (d.pathname = d.pathname === "/" ? t : Zn([t, d.pathname])),
          (c.replace ? r.replace : r.push)(d, c.state, c));
      },
      [t, r, o, i, e],
    )
  );
}
function Ix(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = w.useContext(Ur),
    { matches: s } = w.useContext(Wr),
    { pathname: i } = Hr(),
    o = JSON.stringify(Ax(s, r.v7_relativeSplatPath));
  return w.useMemo(() => Mx(e, JSON.parse(o), i, n === "path"), [e, o, i, n]);
}
function C2(e, t) {
  return E2(e, t);
}
function E2(e, t, n, r) {
  bo() || Se(!1);
  let { navigator: s } = w.useContext(Ur),
    { matches: i } = w.useContext(Wr),
    o = i[i.length - 1],
    a = o ? o.params : {};
  o && o.pathname;
  let l = o ? o.pathnameBase : "/";
  o && o.route;
  let u = Hr(),
    c;
  if (t) {
    var d;
    let b = typeof t == "string" ? Qs(t) : t;
    (l === "/" || ((d = b.pathname) != null && d.startsWith(l)) || Se(!1),
      (c = b));
  } else c = u;
  let h = c.pathname || "/",
    p = h;
  if (l !== "/") {
    let b = l.replace(/^\//, "").split("/");
    p = "/" + h.replace(/^\//, "").split("/").slice(b.length).join("/");
  }
  let x = qk(e, { pathname: p }),
    v = N2(
      x &&
        x.map((b) =>
          Object.assign({}, b, {
            params: Object.assign({}, a, b.params),
            pathname: Zn([
              l,
              s.encodeLocation
                ? s.encodeLocation(b.pathname).pathname
                : b.pathname,
            ]),
            pathnameBase:
              b.pathnameBase === "/"
                ? l
                : Zn([
                    l,
                    s.encodeLocation
                      ? s.encodeLocation(b.pathnameBase).pathname
                      : b.pathnameBase,
                  ]),
          }),
        ),
      i,
      n,
      r,
    );
  return t && v
    ? w.createElement(
        Ml.Provider,
        {
          value: {
            location: ro(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              c,
            ),
            navigationType: $n.Pop,
          },
        },
        v,
      )
    : v;
}
function P2() {
  let e = D2(),
    t = y2(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
        ? e.message
        : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    s = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return w.createElement(
    w.Fragment,
    null,
    w.createElement("h2", null, "Unexpected Application Error!"),
    w.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? w.createElement("pre", { style: s }, n) : null,
    null,
  );
}
const T2 = w.createElement(P2, null);
class k2 extends w.Component {
  constructor(t) {
    (super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      }));
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n,
    );
  }
  render() {
    return this.state.error !== void 0
      ? w.createElement(
          Wr.Provider,
          { value: this.props.routeContext },
          w.createElement(Lx.Provider, {
            value: this.state.error,
            children: this.props.component,
          }),
        )
      : this.props.children;
  }
}
function j2(e) {
  let { routeContext: t, match: n, children: r } = e,
    s = w.useContext(Lf);
  return (
    s &&
      s.static &&
      s.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (s.staticContext._deepestRenderedBoundaryId = n.route.id),
    w.createElement(Wr.Provider, { value: t }, r)
  );
}
function N2(e, t, n, r) {
  var s;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var i;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (
      (i = r) != null &&
      i.v7_partialHydration &&
      t.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      e = n.matches;
    else return null;
  }
  let o = e,
    a = (s = n) == null ? void 0 : s.errors;
  if (a != null) {
    let c = o.findIndex(
      (d) => d.route.id && (a == null ? void 0 : a[d.route.id]) !== void 0,
    );
    (c >= 0 || Se(!1), (o = o.slice(0, Math.min(o.length, c + 1))));
  }
  let l = !1,
    u = -1;
  if (n && r && r.v7_partialHydration)
    for (let c = 0; c < o.length; c++) {
      let d = o[c];
      if (
        ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (u = c),
        d.route.id)
      ) {
        let { loaderData: h, errors: p } = n,
          x =
            d.route.loader &&
            h[d.route.id] === void 0 &&
            (!p || p[d.route.id] === void 0);
        if (d.route.lazy || x) {
          ((l = !0), u >= 0 ? (o = o.slice(0, u + 1)) : (o = [o[0]]));
          break;
        }
      }
    }
  return o.reduceRight((c, d, h) => {
    let p,
      x = !1,
      v = null,
      b = null;
    n &&
      ((p = a && d.route.id ? a[d.route.id] : void 0),
      (v = d.route.errorElement || T2),
      l &&
        (u < 0 && h === 0
          ? ((x = !0), (b = null))
          : u === h &&
            ((x = !0), (b = d.route.hydrateFallbackElement || null))));
    let g = t.concat(o.slice(0, h + 1)),
      m = () => {
        let y;
        return (
          p
            ? (y = v)
            : x
              ? (y = b)
              : d.route.Component
                ? (y = w.createElement(d.route.Component, null))
                : d.route.element
                  ? (y = d.route.element)
                  : (y = c),
          w.createElement(j2, {
            match: d,
            routeContext: { outlet: c, matches: g, isDataRoute: n != null },
            children: y,
          })
        );
      };
    return n && (d.route.ErrorBoundary || d.route.errorElement || h === 0)
      ? w.createElement(k2, {
          location: n.location,
          revalidation: n.revalidation,
          component: v,
          error: p,
          children: m(),
          routeContext: { outlet: null, matches: g, isDataRoute: !0 },
        })
      : m();
  }, null);
}
var Fx = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(Fx || {}),
  Za = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(Za || {});
function R2(e) {
  let t = w.useContext(Lf);
  return (t || Se(!1), t);
}
function A2(e) {
  let t = w.useContext(x2);
  return (t || Se(!1), t);
}
function M2(e) {
  let t = w.useContext(Wr);
  return (t || Se(!1), t);
}
function Vx(e) {
  let t = M2(),
    n = t.matches[t.matches.length - 1];
  return (n.route.id || Se(!1), n.route.id);
}
function D2() {
  var e;
  let t = w.useContext(Lx),
    n = A2(Za.UseRouteError),
    r = Vx(Za.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function L2() {
  let { router: e } = R2(Fx.UseNavigateStable),
    t = Vx(Za.UseNavigateStable),
    n = w.useRef(!1);
  return (
    Ox(() => {
      n.current = !0;
    }),
    w.useCallback(
      function (s, i) {
        (i === void 0 && (i = {}),
          n.current &&
            (typeof s == "number"
              ? e.navigate(s)
              : e.navigate(s, ro({ fromRouteId: t }, i))));
      },
      [e, t],
    )
  );
}
function O2(e, t) {
  (e == null || e.v7_startTransition, e == null || e.v7_relativeSplatPath);
}
function jn(e) {
  Se(!1);
}
function I2(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: s = $n.Pop,
    navigator: i,
    static: o = !1,
    future: a,
  } = e;
  bo() && Se(!1);
  let l = t.replace(/^\/*/, "/"),
    u = w.useMemo(
      () => ({
        basename: l,
        navigator: i,
        static: o,
        future: ro({ v7_relativeSplatPath: !1 }, a),
      }),
      [l, a, i, o],
    );
  typeof r == "string" && (r = Qs(r));
  let {
      pathname: c = "/",
      search: d = "",
      hash: h = "",
      state: p = null,
      key: x = "default",
    } = r,
    v = w.useMemo(() => {
      let b = Df(c, l);
      return b == null
        ? null
        : {
            location: { pathname: b, search: d, hash: h, state: p, key: x },
            navigationType: s,
          };
    }, [l, c, d, h, p, x, s]);
  return v == null
    ? null
    : w.createElement(
        Ur.Provider,
        { value: u },
        w.createElement(Ml.Provider, { children: n, value: v }),
      );
}
function F2(e) {
  let { children: t, location: n } = e;
  return C2(Gc(t), n);
}
new Promise(() => {});
function Gc(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    w.Children.forEach(e, (r, s) => {
      if (!w.isValidElement(r)) return;
      let i = [...t, s];
      if (r.type === w.Fragment) {
        n.push.apply(n, Gc(r.props.children, i));
        return;
      }
      (r.type !== jn && Se(!1), !r.props.index || !r.props.children || Se(!1));
      let o = {
        id: r.props.id || i.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      (r.props.children && (o.children = Gc(r.props.children, i)), n.push(o));
    }),
    n
  );
}
/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Qc() {
  return (
    (Qc = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Qc.apply(this, arguments)
  );
}
function V2(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    s,
    i;
  for (i = 0; i < r.length; i++)
    ((s = r[i]), !(t.indexOf(s) >= 0) && (n[s] = e[s]));
  return n;
}
function _2(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function z2(e, t) {
  return e.button === 0 && (!t || t === "_self") && !_2(e);
}
const B2 = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "viewTransition",
  ],
  $2 = "6";
try {
  window.__reactRouterVersion = $2;
} catch {}
const U2 = "startTransition",
  dm = Xg[U2];
function W2(e) {
  let { basename: t, children: n, future: r, window: s } = e,
    i = w.useRef();
  i.current == null && (i.current = Gk({ window: s, v5Compat: !0 }));
  let o = i.current,
    [a, l] = w.useState({ action: o.action, location: o.location }),
    { v7_startTransition: u } = r || {},
    c = w.useCallback(
      (d) => {
        u && dm ? dm(() => l(d)) : l(d);
      },
      [l, u],
    );
  return (
    w.useLayoutEffect(() => o.listen(c), [o, c]),
    w.useEffect(() => O2(r), [r]),
    w.createElement(I2, {
      basename: t,
      children: n,
      location: a.location,
      navigationType: a.action,
      navigator: o,
      future: r,
    })
  );
}
const H2 =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  K2 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Ln = w.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: s,
        reloadDocument: i,
        replace: o,
        state: a,
        target: l,
        to: u,
        preventScrollReset: c,
        viewTransition: d,
      } = t,
      h = V2(t, B2),
      { basename: p } = w.useContext(Ur),
      x,
      v = !1;
    if (typeof u == "string" && K2.test(u) && ((x = u), H2))
      try {
        let y = new URL(window.location.href),
          S = u.startsWith("//") ? new URL(y.protocol + u) : new URL(u),
          C = Df(S.pathname, p);
        S.origin === y.origin && C != null
          ? (u = C + S.search + S.hash)
          : (v = !0);
      } catch {}
    let b = w2(u, { relative: s }),
      g = Y2(u, {
        replace: o,
        state: a,
        target: l,
        preventScrollReset: c,
        relative: s,
        viewTransition: d,
      });
    function m(y) {
      (r && r(y), y.defaultPrevented || g(y));
    }
    return w.createElement(
      "a",
      Qc({}, h, { href: x || b, onClick: v || i ? r : m, ref: n, target: l }),
    );
  });
var fm;
(function (e) {
  ((e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState"));
})(fm || (fm = {}));
var hm;
(function (e) {
  ((e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration"));
})(hm || (hm = {}));
function Y2(e, t) {
  let {
      target: n,
      replace: r,
      state: s,
      preventScrollReset: i,
      relative: o,
      viewTransition: a,
    } = t === void 0 ? {} : t,
    l = b2(),
    u = Hr(),
    c = Ix(e, { relative: o });
  return w.useCallback(
    (d) => {
      if (z2(d, n)) {
        d.preventDefault();
        let h = r !== void 0 ? r : qa(u) === qa(c);
        l(e, {
          replace: h,
          state: s,
          preventScrollReset: i,
          relative: o,
          viewTransition: a,
        });
      }
    },
    [u, l, c, r, s, n, e, i, o, a],
  );
}
const Of = w.createContext({});
function If(e) {
  const t = w.useRef(null);
  return (t.current === null && (t.current = e()), t.current);
}
const _x = typeof window < "u",
  zx = _x ? w.useLayoutEffect : w.useEffect,
  Dl = w.createContext(null);
function Ff(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Vf(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
const Jt = (e, t, n) => (n > t ? t : n < e ? e : n);
let Ll = () => {},
  Bs = () => {};
const gn = {},
  Bx = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);
function $x(e) {
  return typeof e == "object" && e !== null;
}
const Ux = (e) => /^0[^.\s]+$/u.test(e);
function _f(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const vt = (e) => e,
  G2 = (e, t) => (n) => t(e(n)),
  So = (...e) => e.reduce(G2),
  so = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  };
class zf {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return (Ff(this.subscriptions, t), () => Vf(this.subscriptions, t));
  }
  notify(t, n, r) {
    const s = this.subscriptions.length;
    if (s)
      if (s === 1) this.subscriptions[0](t, n, r);
      else
        for (let i = 0; i < s; i++) {
          const o = this.subscriptions[i];
          o && o(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const Xt = (e) => e * 1e3,
  gt = (e) => e / 1e3;
function Wx(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const Hx = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  Q2 = 1e-7,
  X2 = 12;
function q2(e, t, n, r, s) {
  let i,
    o,
    a = 0;
  do ((o = t + (n - t) / 2), (i = Hx(o, r, s) - e), i > 0 ? (n = o) : (t = o));
  while (Math.abs(i) > Q2 && ++a < X2);
  return o;
}
function Co(e, t, n, r) {
  if (e === t && n === r) return vt;
  const s = (i) => q2(i, 0, 1, e, n);
  return (i) => (i === 0 || i === 1 ? i : Hx(s(i), t, r));
}
const Kx = (e) => (t) => (t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2),
  Yx = (e) => (t) => 1 - e(1 - t),
  Gx = Co(0.33, 1.53, 0.69, 0.99),
  Bf = Yx(Gx),
  Qx = Kx(Bf),
  Xx = (e) =>
    (e *= 2) < 1 ? 0.5 * Bf(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  $f = (e) => 1 - Math.sin(Math.acos(e)),
  qx = Yx($f),
  Zx = Kx($f),
  Z2 = Co(0.42, 0, 1, 1),
  J2 = Co(0, 0, 0.58, 1),
  Jx = Co(0.42, 0, 0.58, 1),
  ej = (e) => Array.isArray(e) && typeof e[0] != "number",
  e1 = (e) => Array.isArray(e) && typeof e[0] == "number",
  pm = {
    linear: vt,
    easeIn: Z2,
    easeInOut: Jx,
    easeOut: J2,
    circIn: $f,
    circInOut: Zx,
    circOut: qx,
    backIn: Bf,
    backInOut: Qx,
    backOut: Gx,
    anticipate: Xx,
  },
  tj = (e) => typeof e == "string",
  mm = (e) => {
    if (e1(e)) {
      Bs(
        e.length === 4,
        "Cubic bezier arrays must contain four numerical values.",
        "cubic-bezier-length",
      );
      const [t, n, r, s] = e;
      return Co(t, n, r, s);
    } else if (tj(e))
      return (
        Bs(
          pm[e] !== void 0,
          `Invalid easing type '${e}'`,
          "invalid-easing-type",
        ),
        pm[e]
      );
    return e;
  },
  Zo = [
    "setup",
    "read",
    "resolveKeyframes",
    "preUpdate",
    "update",
    "preRender",
    "render",
    "postRender",
  ],
  gm = { value: null, addProjectionMetrics: null };
function nj(e, t) {
  let n = new Set(),
    r = new Set(),
    s = !1,
    i = !1;
  const o = new WeakSet();
  let a = { delta: 0, timestamp: 0, isProcessing: !1 },
    l = 0;
  function u(d) {
    (o.has(d) && (c.schedule(d), e()), l++, d(a));
  }
  const c = {
    schedule: (d, h = !1, p = !1) => {
      const v = p && s ? n : r;
      return (h && o.add(d), v.has(d) || v.add(d), d);
    },
    cancel: (d) => {
      (r.delete(d), o.delete(d));
    },
    process: (d) => {
      if (((a = d), s)) {
        i = !0;
        return;
      }
      ((s = !0),
        ([n, r] = [r, n]),
        n.forEach(u),
        t && gm.value && gm.value.frameloop[t].push(l),
        (l = 0),
        n.clear(),
        (s = !1),
        i && ((i = !1), c.process(d)));
    },
  };
  return c;
}
const rj = 40;
function t1(e, t) {
  let n = !1,
    r = !0;
  const s = { delta: 0, timestamp: 0, isProcessing: !1 },
    i = () => (n = !0),
    o = Zo.reduce((y, S) => ((y[S] = nj(i, t ? S : void 0)), y), {}),
    {
      setup: a,
      read: l,
      resolveKeyframes: u,
      preUpdate: c,
      update: d,
      preRender: h,
      render: p,
      postRender: x,
    } = o,
    v = () => {
      const y = gn.useManualTiming ? s.timestamp : performance.now();
      ((n = !1),
        gn.useManualTiming ||
          (s.delta = r ? 1e3 / 60 : Math.max(Math.min(y - s.timestamp, rj), 1)),
        (s.timestamp = y),
        (s.isProcessing = !0),
        a.process(s),
        l.process(s),
        u.process(s),
        c.process(s),
        d.process(s),
        h.process(s),
        p.process(s),
        x.process(s),
        (s.isProcessing = !1),
        n && t && ((r = !1), e(v)));
    },
    b = () => {
      ((n = !0), (r = !0), s.isProcessing || e(v));
    };
  return {
    schedule: Zo.reduce((y, S) => {
      const C = o[S];
      return (
        (y[S] = (E, P = !1, T = !1) => (n || b(), C.schedule(E, P, T))),
        y
      );
    }, {}),
    cancel: (y) => {
      for (let S = 0; S < Zo.length; S++) o[Zo[S]].cancel(y);
    },
    state: s,
    steps: o,
  };
}
const {
  schedule: le,
  cancel: ir,
  state: Re,
  steps: Cu,
} = t1(typeof requestAnimationFrame < "u" ? requestAnimationFrame : vt, !0);
let ya;
function sj() {
  ya = void 0;
}
const We = {
    now: () => (
      ya === void 0 &&
        We.set(
          Re.isProcessing || gn.useManualTiming
            ? Re.timestamp
            : performance.now(),
        ),
      ya
    ),
    set: (e) => {
      ((ya = e), queueMicrotask(sj));
    },
  },
  n1 = (e) => (t) => typeof t == "string" && t.startsWith(e),
  r1 = n1("--"),
  ij = n1("var(--"),
  Uf = (e) => (ij(e) ? oj.test(e.split("/*")[0].trim()) : !1),
  oj =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function ym(e) {
  return typeof e != "string" ? !1 : e.split("/*")[0].includes("var(--");
}
const Xs = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  io = { ...Xs, transform: (e) => Jt(0, 1, e) },
  Jo = { ...Xs, default: 1 },
  Ri = (e) => Math.round(e * 1e5) / 1e5,
  Wf = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function aj(e) {
  return e == null;
}
const lj =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  Hf = (e, t) => (n) =>
    !!(
      (typeof n == "string" && lj.test(n) && n.startsWith(e)) ||
      (t && !aj(n) && Object.prototype.hasOwnProperty.call(n, t))
    ),
  s1 = (e, t, n) => (r) => {
    if (typeof r != "string") return r;
    const [s, i, o, a] = r.match(Wf);
    return {
      [e]: parseFloat(s),
      [t]: parseFloat(i),
      [n]: parseFloat(o),
      alpha: a !== void 0 ? parseFloat(a) : 1,
    };
  },
  uj = (e) => Jt(0, 255, e),
  Eu = { ...Xs, transform: (e) => Math.round(uj(e)) },
  Cr = {
    test: Hf("rgb", "red"),
    parse: s1("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      Eu.transform(e) +
      ", " +
      Eu.transform(t) +
      ", " +
      Eu.transform(n) +
      ", " +
      Ri(io.transform(r)) +
      ")",
  };
function cj(e) {
  let t = "",
    n = "",
    r = "",
    s = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (s = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (s = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (s += s)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: s ? parseInt(s, 16) / 255 : 1,
    }
  );
}
const Xc = { test: Hf("#"), parse: cj, transform: Cr.transform },
  Eo = (e) => ({
    test: (t) =>
      typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  Nn = Eo("deg"),
  qt = Eo("%"),
  F = Eo("px"),
  dj = Eo("vh"),
  fj = Eo("vw"),
  vm = {
    ...qt,
    parse: (e) => qt.parse(e) / 100,
    transform: (e) => qt.transform(e * 100),
  },
  ds = {
    test: Hf("hsl", "hue"),
    parse: s1("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      qt.transform(Ri(t)) +
      ", " +
      qt.transform(Ri(n)) +
      ", " +
      Ri(io.transform(r)) +
      ")",
  },
  we = {
    test: (e) => Cr.test(e) || Xc.test(e) || ds.test(e),
    parse: (e) =>
      Cr.test(e) ? Cr.parse(e) : ds.test(e) ? ds.parse(e) : Xc.parse(e),
    transform: (e) =>
      typeof e == "string"
        ? e
        : e.hasOwnProperty("red")
          ? Cr.transform(e)
          : ds.transform(e),
    getAnimatableNone: (e) => {
      const t = we.parse(e);
      return ((t.alpha = 0), we.transform(t));
    },
  },
  hj =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function pj(e) {
  var t, n;
  return (
    isNaN(e) &&
    typeof e == "string" &&
    (((t = e.match(Wf)) == null ? void 0 : t.length) || 0) +
      (((n = e.match(hj)) == null ? void 0 : n.length) || 0) >
      0
  );
}
const i1 = "number",
  o1 = "color",
  mj = "var",
  gj = "var(",
  xm = "${}",
  yj =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function oo(e) {
  const t = e.toString(),
    n = [],
    r = { color: [], number: [], var: [] },
    s = [];
  let i = 0;
  const a = t
    .replace(
      yj,
      (l) => (
        we.test(l)
          ? (r.color.push(i), s.push(o1), n.push(we.parse(l)))
          : l.startsWith(gj)
            ? (r.var.push(i), s.push(mj), n.push(l))
            : (r.number.push(i), s.push(i1), n.push(parseFloat(l))),
        ++i,
        xm
      ),
    )
    .split(xm);
  return { values: n, split: a, indexes: r, types: s };
}
function a1(e) {
  return oo(e).values;
}
function l1(e) {
  const { split: t, types: n } = oo(e),
    r = t.length;
  return (s) => {
    let i = "";
    for (let o = 0; o < r; o++)
      if (((i += t[o]), s[o] !== void 0)) {
        const a = n[o];
        a === i1
          ? (i += Ri(s[o]))
          : a === o1
            ? (i += we.transform(s[o]))
            : (i += s[o]);
      }
    return i;
  };
}
const vj = (e) =>
  typeof e == "number" ? 0 : we.test(e) ? we.getAnimatableNone(e) : e;
function xj(e) {
  const t = a1(e);
  return l1(e)(t.map(vj));
}
const or = {
  test: pj,
  parse: a1,
  createTransformer: l1,
  getAnimatableNone: xj,
};
function Pu(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
        ? t
        : n < 2 / 3
          ? e + (t - e) * (2 / 3 - n) * 6
          : e
  );
}
function wj({ hue: e, saturation: t, lightness: n, alpha: r }) {
  ((e /= 360), (t /= 100), (n /= 100));
  let s = 0,
    i = 0,
    o = 0;
  if (!t) s = i = o = n;
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t,
      l = 2 * n - a;
    ((s = Pu(l, a, e + 1 / 3)), (i = Pu(l, a, e)), (o = Pu(l, a, e - 1 / 3)));
  }
  return {
    red: Math.round(s * 255),
    green: Math.round(i * 255),
    blue: Math.round(o * 255),
    alpha: r,
  };
}
function Ja(e, t) {
  return (n) => (n > 0 ? t : e);
}
const he = (e, t, n) => e + (t - e) * n,
  Tu = (e, t, n) => {
    const r = e * e,
      s = n * (t * t - r) + r;
    return s < 0 ? 0 : Math.sqrt(s);
  },
  bj = [Xc, Cr, ds],
  Sj = (e) => bj.find((t) => t.test(e));
function wm(e) {
  const t = Sj(e);
  if (
    (Ll(
      !!t,
      `'${e}' is not an animatable color. Use the equivalent color code instead.`,
      "color-not-animatable",
    ),
    !t)
  )
    return !1;
  let n = t.parse(e);
  return (t === ds && (n = wj(n)), n);
}
const bm = (e, t) => {
    const n = wm(e),
      r = wm(t);
    if (!n || !r) return Ja(e, t);
    const s = { ...n };
    return (i) => (
      (s.red = Tu(n.red, r.red, i)),
      (s.green = Tu(n.green, r.green, i)),
      (s.blue = Tu(n.blue, r.blue, i)),
      (s.alpha = he(n.alpha, r.alpha, i)),
      Cr.transform(s)
    );
  },
  qc = new Set(["none", "hidden"]);
function Cj(e, t) {
  return qc.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
}
function Ej(e, t) {
  return (n) => he(e, t, n);
}
function Kf(e) {
  return typeof e == "number"
    ? Ej
    : typeof e == "string"
      ? Uf(e)
        ? Ja
        : we.test(e)
          ? bm
          : kj
      : Array.isArray(e)
        ? u1
        : typeof e == "object"
          ? we.test(e)
            ? bm
            : Pj
          : Ja;
}
function u1(e, t) {
  const n = [...e],
    r = n.length,
    s = e.map((i, o) => Kf(i)(i, t[o]));
  return (i) => {
    for (let o = 0; o < r; o++) n[o] = s[o](i);
    return n;
  };
}
function Pj(e, t) {
  const n = { ...e, ...t },
    r = {};
  for (const s in n)
    e[s] !== void 0 && t[s] !== void 0 && (r[s] = Kf(e[s])(e[s], t[s]));
  return (s) => {
    for (const i in r) n[i] = r[i](s);
    return n;
  };
}
function Tj(e, t) {
  const n = [],
    r = { color: 0, var: 0, number: 0 };
  for (let s = 0; s < t.values.length; s++) {
    const i = t.types[s],
      o = e.indexes[i][r[i]],
      a = e.values[o] ?? 0;
    ((n[s] = a), r[i]++);
  }
  return n;
}
const kj = (e, t) => {
  const n = or.createTransformer(t),
    r = oo(e),
    s = oo(t);
  return r.indexes.var.length === s.indexes.var.length &&
    r.indexes.color.length === s.indexes.color.length &&
    r.indexes.number.length >= s.indexes.number.length
    ? (qc.has(e) && !s.values.length) || (qc.has(t) && !r.values.length)
      ? Cj(e, t)
      : So(u1(Tj(r, s), s.values), n)
    : (Ll(
        !0,
        `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`,
        "complex-values-different",
      ),
      Ja(e, t));
};
function c1(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number"
    ? he(e, t, n)
    : Kf(e)(e, t);
}
const jj = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: (n = !0) => le.update(t, n),
      stop: () => ir(t),
      now: () => (Re.isProcessing ? Re.timestamp : We.now()),
    };
  },
  d1 = (e, t, n = 10) => {
    let r = "";
    const s = Math.max(Math.round(t / n), 2);
    for (let i = 0; i < s; i++)
      r += Math.round(e(i / (s - 1)) * 1e4) / 1e4 + ", ";
    return `linear(${r.substring(0, r.length - 2)})`;
  },
  el = 2e4;
function Yf(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < el; ) ((t += n), (r = e.next(t)));
  return t >= el ? 1 / 0 : t;
}
function Nj(e, t = 100, n) {
  const r = n({ ...e, keyframes: [0, t] }),
    s = Math.min(Yf(r), el);
  return {
    type: "keyframes",
    ease: (i) => r.next(s * i).value / t,
    duration: gt(s),
  };
}
const Rj = 5;
function f1(e, t, n) {
  const r = Math.max(t - Rj, 0);
  return Wx(n - e(r), t - r);
}
const de = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: 0.3,
    visualDuration: 0.3,
    restSpeed: { granular: 0.01, default: 2 },
    restDelta: { granular: 0.005, default: 0.5 },
    minDuration: 0.01,
    maxDuration: 10,
    minDamping: 0.05,
    maxDamping: 1,
  },
  ku = 0.001;
function Aj({
  duration: e = de.duration,
  bounce: t = de.bounce,
  velocity: n = de.velocity,
  mass: r = de.mass,
}) {
  let s, i;
  Ll(
    e <= Xt(de.maxDuration),
    "Spring duration must be 10 seconds or less",
    "spring-duration-limit",
  );
  let o = 1 - t;
  ((o = Jt(de.minDamping, de.maxDamping, o)),
    (e = Jt(de.minDuration, de.maxDuration, gt(e))),
    o < 1
      ? ((s = (u) => {
          const c = u * o,
            d = c * e,
            h = c - n,
            p = Zc(u, o),
            x = Math.exp(-d);
          return ku - (h / p) * x;
        }),
        (i = (u) => {
          const d = u * o * e,
            h = d * n + n,
            p = Math.pow(o, 2) * Math.pow(u, 2) * e,
            x = Math.exp(-d),
            v = Zc(Math.pow(u, 2), o);
          return ((-s(u) + ku > 0 ? -1 : 1) * ((h - p) * x)) / v;
        }))
      : ((s = (u) => {
          const c = Math.exp(-u * e),
            d = (u - n) * e + 1;
          return -ku + c * d;
        }),
        (i = (u) => {
          const c = Math.exp(-u * e),
            d = (n - u) * (e * e);
          return c * d;
        })));
  const a = 5 / e,
    l = Dj(s, i, a);
  if (((e = Xt(e)), isNaN(l)))
    return { stiffness: de.stiffness, damping: de.damping, duration: e };
  {
    const u = Math.pow(l, 2) * r;
    return { stiffness: u, damping: o * 2 * Math.sqrt(r * u), duration: e };
  }
}
const Mj = 12;
function Dj(e, t, n) {
  let r = n;
  for (let s = 1; s < Mj; s++) r = r - e(r) / t(r);
  return r;
}
function Zc(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const Lj = ["duration", "bounce"],
  Oj = ["stiffness", "damping", "mass"];
function Sm(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function Ij(e) {
  let t = {
    velocity: de.velocity,
    stiffness: de.stiffness,
    damping: de.damping,
    mass: de.mass,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!Sm(e, Oj) && Sm(e, Lj))
    if (e.visualDuration) {
      const n = e.visualDuration,
        r = (2 * Math.PI) / (n * 1.2),
        s = r * r,
        i = 2 * Jt(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(s);
      t = { ...t, mass: de.mass, stiffness: s, damping: i };
    } else {
      const n = Aj(e);
      ((t = { ...t, ...n, mass: de.mass }), (t.isResolvedFromDuration = !0));
    }
  return t;
}
function tl(e = de.visualDuration, t = de.bounce) {
  const n =
    typeof e != "object"
      ? { visualDuration: e, keyframes: [0, 1], bounce: t }
      : e;
  let { restSpeed: r, restDelta: s } = n;
  const i = n.keyframes[0],
    o = n.keyframes[n.keyframes.length - 1],
    a = { done: !1, value: i },
    {
      stiffness: l,
      damping: u,
      mass: c,
      duration: d,
      velocity: h,
      isResolvedFromDuration: p,
    } = Ij({ ...n, velocity: -gt(n.velocity || 0) }),
    x = h || 0,
    v = u / (2 * Math.sqrt(l * c)),
    b = o - i,
    g = gt(Math.sqrt(l / c)),
    m = Math.abs(b) < 5;
  (r || (r = m ? de.restSpeed.granular : de.restSpeed.default),
    s || (s = m ? de.restDelta.granular : de.restDelta.default));
  let y;
  if (v < 1) {
    const C = Zc(g, v);
    y = (E) => {
      const P = Math.exp(-v * g * E);
      return (
        o - P * (((x + v * g * b) / C) * Math.sin(C * E) + b * Math.cos(C * E))
      );
    };
  } else if (v === 1) y = (C) => o - Math.exp(-g * C) * (b + (x + g * b) * C);
  else {
    const C = g * Math.sqrt(v * v - 1);
    y = (E) => {
      const P = Math.exp(-v * g * E),
        T = Math.min(C * E, 300);
      return (
        o - (P * ((x + v * g * b) * Math.sinh(T) + C * b * Math.cosh(T))) / C
      );
    };
  }
  const S = {
    calculatedDuration: (p && d) || null,
    next: (C) => {
      const E = y(C);
      if (p) a.done = C >= d;
      else {
        let P = C === 0 ? x : 0;
        v < 1 && (P = C === 0 ? Xt(x) : f1(y, C, E));
        const T = Math.abs(P) <= r,
          R = Math.abs(o - E) <= s;
        a.done = T && R;
      }
      return ((a.value = a.done ? o : E), a);
    },
    toString: () => {
      const C = Math.min(Yf(S), el),
        E = d1((P) => S.next(C * P).value, C, 30);
      return C + "ms " + E;
    },
    toTransition: () => {},
  };
  return S;
}
tl.applyToOptions = (e) => {
  const t = Nj(e, 100, tl);
  return (
    (e.ease = t.ease),
    (e.duration = Xt(t.duration)),
    (e.type = "keyframes"),
    e
  );
};
function Jc({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: s = 10,
  bounceStiffness: i = 500,
  modifyTarget: o,
  min: a,
  max: l,
  restDelta: u = 0.5,
  restSpeed: c,
}) {
  const d = e[0],
    h = { done: !1, value: d },
    p = (T) => (a !== void 0 && T < a) || (l !== void 0 && T > l),
    x = (T) =>
      a === void 0
        ? l
        : l === void 0 || Math.abs(a - T) < Math.abs(l - T)
          ? a
          : l;
  let v = n * t;
  const b = d + v,
    g = o === void 0 ? b : o(b);
  g !== b && (v = g - d);
  const m = (T) => -v * Math.exp(-T / r),
    y = (T) => g + m(T),
    S = (T) => {
      const R = m(T),
        A = y(T);
      ((h.done = Math.abs(R) <= u), (h.value = h.done ? g : A));
    };
  let C, E;
  const P = (T) => {
    p(h.value) &&
      ((C = T),
      (E = tl({
        keyframes: [h.value, x(h.value)],
        velocity: f1(y, T, h.value),
        damping: s,
        stiffness: i,
        restDelta: u,
        restSpeed: c,
      })));
  };
  return (
    P(0),
    {
      calculatedDuration: null,
      next: (T) => {
        let R = !1;
        return (
          !E && C === void 0 && ((R = !0), S(T), P(T)),
          C !== void 0 && T >= C ? E.next(T - C) : (!R && S(T), h)
        );
      },
    }
  );
}
function Fj(e, t, n) {
  const r = [],
    s = n || gn.mix || c1,
    i = e.length - 1;
  for (let o = 0; o < i; o++) {
    let a = s(e[o], e[o + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[o] || vt : t;
      a = So(l, a);
    }
    r.push(a);
  }
  return r;
}
function Vj(e, t, { clamp: n = !0, ease: r, mixer: s } = {}) {
  const i = e.length;
  if (
    (Bs(
      i === t.length,
      "Both input and output ranges must be the same length",
      "range-length",
    ),
    i === 1)
  )
    return () => t[0];
  if (i === 2 && t[0] === t[1]) return () => t[1];
  const o = e[0] === e[1];
  e[0] > e[i - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const a = Fj(t, r, s),
    l = a.length,
    u = (c) => {
      if (o && c < e[0]) return t[0];
      let d = 0;
      if (l > 1) for (; d < e.length - 2 && !(c < e[d + 1]); d++);
      const h = so(e[d], e[d + 1], c);
      return a[d](h);
    };
  return n ? (c) => u(Jt(e[0], e[i - 1], c)) : u;
}
function _j(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const s = so(0, t, r);
    e.push(he(n, 1, s));
  }
}
function zj(e) {
  const t = [0];
  return (_j(t, e.length - 1), t);
}
function Bj(e, t) {
  return e.map((n) => n * t);
}
function $j(e, t) {
  return e.map(() => t || Jx).splice(0, e.length - 1);
}
function Ai({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut",
}) {
  const s = ej(r) ? r.map(mm) : mm(r),
    i = { done: !1, value: t[0] },
    o = Bj(n && n.length === t.length ? n : zj(t), e),
    a = Vj(o, t, { ease: Array.isArray(s) ? s : $j(t, s) });
  return {
    calculatedDuration: e,
    next: (l) => ((i.value = a(l)), (i.done = l >= e), i),
  };
}
const Uj = (e) => e !== null;
function Gf(e, { repeat: t, repeatType: n = "loop" }, r, s = 1) {
  const i = e.filter(Uj),
    a = s < 0 || (t && n !== "loop" && t % 2 === 1) ? 0 : i.length - 1;
  return !a || r === void 0 ? i[a] : r;
}
const Wj = { decay: Jc, inertia: Jc, tween: Ai, keyframes: Ai, spring: tl };
function h1(e) {
  typeof e.type == "string" && (e.type = Wj[e.type]);
}
class Qf {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((t) => {
      this.resolve = t;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  then(t, n) {
    return this.finished.then(t, n);
  }
}
const Hj = (e) => e / 100;
class Xf extends Qf {
  constructor(t) {
    (super(),
      (this.state = "idle"),
      (this.startTime = null),
      (this.isStopped = !1),
      (this.currentTime = 0),
      (this.holdTime = null),
      (this.playbackSpeed = 1),
      (this.stop = () => {
        var r, s;
        const { motionValue: n } = this.options;
        (n && n.updatedAt !== We.now() && this.tick(We.now()),
          (this.isStopped = !0),
          this.state !== "idle" &&
            (this.teardown(),
            (s = (r = this.options).onStop) == null || s.call(r)));
      }),
      (this.options = t),
      this.initAnimation(),
      this.play(),
      t.autoplay === !1 && this.pause());
  }
  initAnimation() {
    const { options: t } = this;
    h1(t);
    const {
      type: n = Ai,
      repeat: r = 0,
      repeatDelay: s = 0,
      repeatType: i,
      velocity: o = 0,
    } = t;
    let { keyframes: a } = t;
    const l = n || Ai;
    l !== Ai &&
      typeof a[0] != "number" &&
      ((this.mixKeyframes = So(Hj, c1(a[0], a[1]))), (a = [0, 100]));
    const u = l({ ...t, keyframes: a });
    (i === "mirror" &&
      (this.mirroredGenerator = l({
        ...t,
        keyframes: [...a].reverse(),
        velocity: -o,
      })),
      u.calculatedDuration === null && (u.calculatedDuration = Yf(u)));
    const { calculatedDuration: c } = u;
    ((this.calculatedDuration = c),
      (this.resolvedDuration = c + s),
      (this.totalDuration = this.resolvedDuration * (r + 1) - s),
      (this.generator = u));
  }
  updateTime(t) {
    const n = Math.round(t - this.startTime) * this.playbackSpeed;
    this.holdTime !== null
      ? (this.currentTime = this.holdTime)
      : (this.currentTime = n);
  }
  tick(t, n = !1) {
    const {
      generator: r,
      totalDuration: s,
      mixKeyframes: i,
      mirroredGenerator: o,
      resolvedDuration: a,
      calculatedDuration: l,
    } = this;
    if (this.startTime === null) return r.next(0);
    const {
      delay: u = 0,
      keyframes: c,
      repeat: d,
      repeatType: h,
      repeatDelay: p,
      type: x,
      onUpdate: v,
      finalKeyframe: b,
    } = this.options;
    (this.speed > 0
      ? (this.startTime = Math.min(this.startTime, t))
      : this.speed < 0 &&
        (this.startTime = Math.min(t - s / this.speed, this.startTime)),
      n ? (this.currentTime = t) : this.updateTime(t));
    const g = this.currentTime - u * (this.playbackSpeed >= 0 ? 1 : -1),
      m = this.playbackSpeed >= 0 ? g < 0 : g > s;
    ((this.currentTime = Math.max(g, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = s));
    let y = this.currentTime,
      S = r;
    if (d) {
      const T = Math.min(this.currentTime, s) / a;
      let R = Math.floor(T),
        A = T % 1;
      (!A && T >= 1 && (A = 1),
        A === 1 && R--,
        (R = Math.min(R, d + 1)),
        !!(R % 2) &&
          (h === "reverse"
            ? ((A = 1 - A), p && (A -= p / a))
            : h === "mirror" && (S = o)),
        (y = Jt(0, 1, A) * a));
    }
    const C = m ? { done: !1, value: c[0] } : S.next(y);
    i && (C.value = i(C.value));
    let { done: E } = C;
    !m &&
      l !== null &&
      (E =
        this.playbackSpeed >= 0
          ? this.currentTime >= s
          : this.currentTime <= 0);
    const P =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && E));
    return (
      P && x !== Jc && (C.value = Gf(c, this.options, b, this.speed)),
      v && v(C.value),
      P && this.finish(),
      C
    );
  }
  then(t, n) {
    return this.finished.then(t, n);
  }
  get duration() {
    return gt(this.calculatedDuration);
  }
  get iterationDuration() {
    const { delay: t = 0 } = this.options || {};
    return this.duration + gt(t);
  }
  get time() {
    return gt(this.currentTime);
  }
  set time(t) {
    var n;
    ((t = Xt(t)),
      (this.currentTime = t),
      this.startTime === null ||
      this.holdTime !== null ||
      this.playbackSpeed === 0
        ? (this.holdTime = t)
        : this.driver &&
          (this.startTime = this.driver.now() - t / this.playbackSpeed),
      (n = this.driver) == null || n.start(!1));
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    this.updateTime(We.now());
    const n = this.playbackSpeed !== t;
    ((this.playbackSpeed = t), n && (this.time = gt(this.currentTime)));
  }
  play() {
    var s, i;
    if (this.isStopped) return;
    const { driver: t = jj, startTime: n } = this.options;
    (this.driver || (this.driver = t((o) => this.tick(o))),
      (i = (s = this.options).onPlay) == null || i.call(s));
    const r = this.driver.now();
    (this.state === "finished"
      ? (this.updateFinished(), (this.startTime = r))
      : this.holdTime !== null
        ? (this.startTime = r - this.holdTime)
        : this.startTime || (this.startTime = n ?? r),
      this.state === "finished" &&
        this.speed < 0 &&
        (this.startTime += this.calculatedDuration),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start());
  }
  pause() {
    ((this.state = "paused"),
      this.updateTime(We.now()),
      (this.holdTime = this.currentTime));
  }
  complete() {
    (this.state !== "running" && this.play(),
      (this.state = "finished"),
      (this.holdTime = null));
  }
  finish() {
    var t, n;
    (this.notifyFinished(),
      this.teardown(),
      (this.state = "finished"),
      (n = (t = this.options).onComplete) == null || n.call(t));
  }
  cancel() {
    var t, n;
    ((this.holdTime = null),
      (this.startTime = 0),
      this.tick(0),
      this.teardown(),
      (n = (t = this.options).onCancel) == null || n.call(t));
  }
  teardown() {
    ((this.state = "idle"),
      this.stopDriver(),
      (this.startTime = this.holdTime = null));
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(t) {
    return ((this.startTime = 0), this.tick(t, !0));
  }
  attachTimeline(t) {
    var n;
    return (
      this.options.allowFlatten &&
        ((this.options.type = "keyframes"),
        (this.options.ease = "linear"),
        this.initAnimation()),
      (n = this.driver) == null || n.stop(),
      t.observe(this)
    );
  }
}
function Kj(e) {
  for (let t = 1; t < e.length; t++) e[t] ?? (e[t] = e[t - 1]);
}
const Er = (e) => (e * 180) / Math.PI,
  ed = (e) => {
    const t = Er(Math.atan2(e[1], e[0]));
    return td(t);
  },
  Yj = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: (e) => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
    rotate: ed,
    rotateZ: ed,
    skewX: (e) => Er(Math.atan(e[1])),
    skewY: (e) => Er(Math.atan(e[2])),
    skew: (e) => (Math.abs(e[1]) + Math.abs(e[2])) / 2,
  },
  td = (e) => ((e = e % 360), e < 0 && (e += 360), e),
  Cm = ed,
  Em = (e) => Math.sqrt(e[0] * e[0] + e[1] * e[1]),
  Pm = (e) => Math.sqrt(e[4] * e[4] + e[5] * e[5]),
  Gj = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: Em,
    scaleY: Pm,
    scale: (e) => (Em(e) + Pm(e)) / 2,
    rotateX: (e) => td(Er(Math.atan2(e[6], e[5]))),
    rotateY: (e) => td(Er(Math.atan2(-e[2], e[0]))),
    rotateZ: Cm,
    rotate: Cm,
    skewX: (e) => Er(Math.atan(e[4])),
    skewY: (e) => Er(Math.atan(e[1])),
    skew: (e) => (Math.abs(e[1]) + Math.abs(e[4])) / 2,
  };
function nd(e) {
  return e.includes("scale") ? 1 : 0;
}
function rd(e, t) {
  if (!e || e === "none") return nd(t);
  const n = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let r, s;
  if (n) ((r = Gj), (s = n));
  else {
    const a = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    ((r = Yj), (s = a));
  }
  if (!s) return nd(t);
  const i = r[t],
    o = s[1].split(",").map(Xj);
  return typeof i == "function" ? i(o) : o[i];
}
const Qj = (e, t) => {
  const { transform: n = "none" } = getComputedStyle(e);
  return rd(n, t);
};
function Xj(e) {
  return parseFloat(e.trim());
}
const qs = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  Zs = new Set(qs),
  Tm = (e) => e === Xs || e === F,
  qj = new Set(["x", "y", "z"]),
  Zj = qs.filter((e) => !qj.has(e));
function Jj(e) {
  const t = [];
  return (
    Zj.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t
  );
}
const Un = {
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: (e, { transform: t }) => rd(t, "x"),
  y: (e, { transform: t }) => rd(t, "y"),
};
Un.translateX = Un.x;
Un.translateY = Un.y;
const Dr = new Set();
let sd = !1,
  id = !1,
  od = !1;
function p1() {
  if (id) {
    const e = Array.from(Dr).filter((r) => r.needsMeasurement),
      t = new Set(e.map((r) => r.element)),
      n = new Map();
    (t.forEach((r) => {
      const s = Jj(r);
      s.length && (n.set(r, s), r.render());
    }),
      e.forEach((r) => r.measureInitialState()),
      t.forEach((r) => {
        r.render();
        const s = n.get(r);
        s &&
          s.forEach(([i, o]) => {
            var a;
            (a = r.getValue(i)) == null || a.set(o);
          });
      }),
      e.forEach((r) => r.measureEndState()),
      e.forEach((r) => {
        r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
      }));
  }
  ((id = !1), (sd = !1), Dr.forEach((e) => e.complete(od)), Dr.clear());
}
function m1() {
  Dr.forEach((e) => {
    (e.readKeyframes(), e.needsMeasurement && (id = !0));
  });
}
function eN() {
  ((od = !0), m1(), p1(), (od = !1));
}
class qf {
  constructor(t, n, r, s, i, o = !1) {
    ((this.state = "pending"),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.unresolvedKeyframes = [...t]),
      (this.onComplete = n),
      (this.name = r),
      (this.motionValue = s),
      (this.element = i),
      (this.isAsync = o));
  }
  scheduleResolve() {
    ((this.state = "scheduled"),
      this.isAsync
        ? (Dr.add(this),
          sd || ((sd = !0), le.read(m1), le.resolveKeyframes(p1)))
        : (this.readKeyframes(), this.complete()));
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: t,
      name: n,
      element: r,
      motionValue: s,
    } = this;
    if (t[0] === null) {
      const i = s == null ? void 0 : s.get(),
        o = t[t.length - 1];
      if (i !== void 0) t[0] = i;
      else if (r && n) {
        const a = r.readValue(n, o);
        a != null && (t[0] = a);
      }
      (t[0] === void 0 && (t[0] = o), s && i === void 0 && s.set(t[0]));
    }
    Kj(t);
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete(t = !1) {
    ((this.state = "complete"),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t),
      Dr.delete(this));
  }
  cancel() {
    this.state === "scheduled" && (Dr.delete(this), (this.state = "pending"));
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const tN = (e) => e.startsWith("--");
function nN(e, t, n) {
  tN(t) ? e.style.setProperty(t, n) : (e.style[t] = n);
}
const rN = _f(() => window.ScrollTimeline !== void 0),
  sN = {};
function iN(e, t) {
  const n = _f(e);
  return () => sN[t] ?? n();
}
const g1 = iN(() => {
    try {
      document
        .createElement("div")
        .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return !1;
    }
    return !0;
  }, "linearEasing"),
  vi = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  km = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: vi([0, 0.65, 0.55, 1]),
    circOut: vi([0.55, 0, 1, 0.45]),
    backIn: vi([0.31, 0.01, 0.66, -0.59]),
    backOut: vi([0.33, 1.53, 0.69, 0.99]),
  };
function y1(e, t) {
  if (e)
    return typeof e == "function"
      ? g1()
        ? d1(e, t)
        : "ease-out"
      : e1(e)
        ? vi(e)
        : Array.isArray(e)
          ? e.map((n) => y1(n, t) || km.easeOut)
          : km[e];
}
function oN(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: s = 300,
    repeat: i = 0,
    repeatType: o = "loop",
    ease: a = "easeOut",
    times: l,
  } = {},
  u = void 0,
) {
  const c = { [t]: n };
  l && (c.offset = l);
  const d = y1(a, s);
  Array.isArray(d) && (c.easing = d);
  const h = {
    delay: r,
    duration: s,
    easing: Array.isArray(d) ? "linear" : d,
    fill: "both",
    iterations: i + 1,
    direction: o === "reverse" ? "alternate" : "normal",
  };
  return (u && (h.pseudoElement = u), e.animate(c, h));
}
function v1(e) {
  return typeof e == "function" && "applyToOptions" in e;
}
function aN({ type: e, ...t }) {
  return v1(e) && g1()
    ? e.applyToOptions(t)
    : (t.duration ?? (t.duration = 300), t.ease ?? (t.ease = "easeOut"), t);
}
class lN extends Qf {
  constructor(t) {
    if (
      (super(),
      (this.finishedTime = null),
      (this.isStopped = !1),
      (this.manualStartTime = null),
      !t)
    )
      return;
    const {
      element: n,
      name: r,
      keyframes: s,
      pseudoElement: i,
      allowFlatten: o = !1,
      finalKeyframe: a,
      onComplete: l,
    } = t;
    ((this.isPseudoElement = !!i),
      (this.allowFlatten = o),
      (this.options = t),
      Bs(
        typeof t.type != "string",
        `Mini animate() doesn't support "type" as a string.`,
        "mini-spring",
      ));
    const u = aN(t);
    ((this.animation = oN(n, r, s, u, i)),
      u.autoplay === !1 && this.animation.pause(),
      (this.animation.onfinish = () => {
        if (((this.finishedTime = this.time), !i)) {
          const c = Gf(s, this.options, a, this.speed);
          (this.updateMotionValue ? this.updateMotionValue(c) : nN(n, r, c),
            this.animation.cancel());
        }
        (l == null || l(), this.notifyFinished());
      }));
  }
  play() {
    this.isStopped ||
      ((this.manualStartTime = null),
      this.animation.play(),
      this.state === "finished" && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    var t, n;
    (n = (t = this.animation).finish) == null || n.call(t);
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {}
  }
  stop() {
    if (this.isStopped) return;
    this.isStopped = !0;
    const { state: t } = this;
    t === "idle" ||
      t === "finished" ||
      (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),
      this.isPseudoElement || this.cancel());
  }
  commitStyles() {
    var t, n;
    this.isPseudoElement ||
      (n = (t = this.animation).commitStyles) == null ||
      n.call(t);
  }
  get duration() {
    var n, r;
    const t =
      ((r =
        (n = this.animation.effect) == null ? void 0 : n.getComputedTiming) ==
      null
        ? void 0
        : r.call(n).duration) || 0;
    return gt(Number(t));
  }
  get iterationDuration() {
    const { delay: t = 0 } = this.options || {};
    return this.duration + gt(t);
  }
  get time() {
    return gt(Number(this.animation.currentTime) || 0);
  }
  set time(t) {
    ((this.manualStartTime = null),
      (this.finishedTime = null),
      (this.animation.currentTime = Xt(t)));
  }
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(t) {
    (t < 0 && (this.finishedTime = null), (this.animation.playbackRate = t));
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return this.manualStartTime ?? Number(this.animation.startTime);
  }
  set startTime(t) {
    this.manualStartTime = this.animation.startTime = t;
  }
  attachTimeline({ timeline: t, observe: n }) {
    var r;
    return (
      this.allowFlatten &&
        ((r = this.animation.effect) == null ||
          r.updateTiming({ easing: "linear" })),
      (this.animation.onfinish = null),
      t && rN() ? ((this.animation.timeline = t), vt) : n(this)
    );
  }
}
const x1 = { anticipate: Xx, backInOut: Qx, circInOut: Zx };
function uN(e) {
  return e in x1;
}
function cN(e) {
  typeof e.ease == "string" && uN(e.ease) && (e.ease = x1[e.ease]);
}
const ju = 10;
class dN extends lN {
  constructor(t) {
    (cN(t),
      h1(t),
      super(t),
      t.startTime !== void 0 && (this.startTime = t.startTime),
      (this.options = t));
  }
  updateMotionValue(t) {
    const {
      motionValue: n,
      onUpdate: r,
      onComplete: s,
      element: i,
      ...o
    } = this.options;
    if (!n) return;
    if (t !== void 0) {
      n.set(t);
      return;
    }
    const a = new Xf({ ...o, autoplay: !1 }),
      l = Math.max(ju, We.now() - this.startTime),
      u = Jt(0, ju, l - ju);
    (n.setWithVelocity(
      a.sample(Math.max(0, l - u)).value,
      a.sample(l).value,
      u,
    ),
      a.stop());
  }
}
const jm = (e, t) =>
  t === "zIndex"
    ? !1
    : !!(
        typeof e == "number" ||
        Array.isArray(e) ||
        (typeof e == "string" &&
          (or.test(e) || e === "0") &&
          !e.startsWith("url("))
      );
function fN(e) {
  const t = e[0];
  if (e.length === 1) return !0;
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function hN(e, t, n, r) {
  const s = e[0];
  if (s === null) return !1;
  if (t === "display" || t === "visibility") return !0;
  const i = e[e.length - 1],
    o = jm(s, t),
    a = jm(i, t);
  return (
    Ll(
      o === a,
      `You are trying to animate ${t} from "${s}" to "${i}". "${o ? i : s}" is not an animatable value.`,
      "value-not-animatable",
    ),
    !o || !a ? !1 : fN(e) || ((n === "spring" || v1(n)) && r)
  );
}
function ad(e) {
  ((e.duration = 0), (e.type = "keyframes"));
}
const pN = new Set(["opacity", "clipPath", "filter", "transform"]),
  mN = _f(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function gN(e) {
  var c;
  const {
    motionValue: t,
    name: n,
    repeatDelay: r,
    repeatType: s,
    damping: i,
    type: o,
  } = e;
  if (
    !(
      ((c = t == null ? void 0 : t.owner) == null
        ? void 0
        : c.current) instanceof HTMLElement
    )
  )
    return !1;
  const { onUpdate: l, transformTemplate: u } = t.owner.getProps();
  return (
    mN() &&
    n &&
    pN.has(n) &&
    (n !== "transform" || !u) &&
    !l &&
    !r &&
    s !== "mirror" &&
    i !== 0 &&
    o !== "inertia"
  );
}
const yN = 40;
class vN extends Qf {
  constructor({
    autoplay: t = !0,
    delay: n = 0,
    type: r = "keyframes",
    repeat: s = 0,
    repeatDelay: i = 0,
    repeatType: o = "loop",
    keyframes: a,
    name: l,
    motionValue: u,
    element: c,
    ...d
  }) {
    var x;
    (super(),
      (this.stop = () => {
        var v, b;
        (this._animation &&
          (this._animation.stop(),
          (v = this.stopTimeline) == null || v.call(this)),
          (b = this.keyframeResolver) == null || b.cancel());
      }),
      (this.createdAt = We.now()));
    const h = {
        autoplay: t,
        delay: n,
        type: r,
        repeat: s,
        repeatDelay: i,
        repeatType: o,
        name: l,
        motionValue: u,
        element: c,
        ...d,
      },
      p = (c == null ? void 0 : c.KeyframeResolver) || qf;
    ((this.keyframeResolver = new p(
      a,
      (v, b, g) => this.onKeyframesResolved(v, b, h, !g),
      l,
      u,
      c,
    )),
      (x = this.keyframeResolver) == null || x.scheduleResolve());
  }
  onKeyframesResolved(t, n, r, s) {
    this.keyframeResolver = void 0;
    const {
      name: i,
      type: o,
      velocity: a,
      delay: l,
      isHandoff: u,
      onUpdate: c,
    } = r;
    ((this.resolvedAt = We.now()),
      hN(t, i, o, a) ||
        ((gn.instantAnimations || !l) && (c == null || c(Gf(t, r, n))),
        (t[0] = t[t.length - 1]),
        ad(r),
        (r.repeat = 0)));
    const h = {
        startTime: s
          ? this.resolvedAt
            ? this.resolvedAt - this.createdAt > yN
              ? this.resolvedAt
              : this.createdAt
            : this.createdAt
          : void 0,
        finalKeyframe: n,
        ...r,
        keyframes: t,
      },
      p =
        !u && gN(h)
          ? new dN({ ...h, element: h.motionValue.owner.current })
          : new Xf(h);
    (p.finished.then(() => this.notifyFinished()).catch(vt),
      this.pendingTimeline &&
        ((this.stopTimeline = p.attachTimeline(this.pendingTimeline)),
        (this.pendingTimeline = void 0)),
      (this._animation = p));
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(t, n) {
    return this.finished.finally(t).then(() => {});
  }
  get animation() {
    var t;
    return (
      this._animation ||
        ((t = this.keyframeResolver) == null || t.resume(), eN()),
      this._animation
    );
  }
  get duration() {
    return this.animation.duration;
  }
  get iterationDuration() {
    return this.animation.iterationDuration;
  }
  get time() {
    return this.animation.time;
  }
  set time(t) {
    this.animation.time = t;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(t) {
    this.animation.speed = t;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(t) {
    return (
      this._animation
        ? (this.stopTimeline = this.animation.attachTimeline(t))
        : (this.pendingTimeline = t),
      () => this.stop()
    );
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    var t;
    (this._animation && this.animation.cancel(),
      (t = this.keyframeResolver) == null || t.cancel());
  }
}
const xN = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function wN(e) {
  const t = xN.exec(e);
  if (!t) return [,];
  const [, n, r, s] = t;
  return [`--${n ?? r}`, s];
}
const bN = 4;
function w1(e, t, n = 1) {
  Bs(
    n <= bN,
    `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`,
    "max-css-var-depth",
  );
  const [r, s] = wN(e);
  if (!r) return;
  const i = window.getComputedStyle(t).getPropertyValue(r);
  if (i) {
    const o = i.trim();
    return Bx(o) ? parseFloat(o) : o;
  }
  return Uf(s) ? w1(s, t, n + 1) : s;
}
function Zf(e, t) {
  return (e == null ? void 0 : e[t]) ?? (e == null ? void 0 : e.default) ?? e;
}
const SN = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  CN = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  EN = { type: "keyframes", duration: 0.8 },
  PN = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  TN = (e, { keyframes: t }) =>
    t.length > 2
      ? EN
      : Zs.has(e)
        ? e.startsWith("scale")
          ? CN(t[1])
          : SN
        : PN;
function kN({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: s,
  repeat: i,
  repeatType: o,
  repeatDelay: a,
  from: l,
  elapsed: u,
  ...c
}) {
  return !!Object.keys(c).length;
}
const jN = (e) => e !== null;
function NN(e, { repeat: t, repeatType: n = "loop" }, r) {
  const s = e.filter(jN),
    i = t && n !== "loop" && t % 2 === 1 ? 0 : s.length - 1;
  return !i || r === void 0 ? s[i] : r;
}
function b1(e, t, n, r = 0, s = 1) {
  const i = Array.from(e)
      .sort((u, c) => u.sortNodePosition(c))
      .indexOf(t),
    o = e.size,
    a = (o - 1) * r;
  return typeof n == "function" ? n(i, o) : s === 1 ? i * r : a - i * r;
}
const Jf =
    (e, t, n, r = {}, s, i) =>
    (o) => {
      const a = Zf(r, e) || {},
        l = a.delay || r.delay || 0;
      let { elapsed: u = 0 } = r;
      u = u - Xt(l);
      const c = {
        keyframes: Array.isArray(n) ? n : [null, n],
        ease: "easeOut",
        velocity: t.getVelocity(),
        ...a,
        delay: -u,
        onUpdate: (h) => {
          (t.set(h), a.onUpdate && a.onUpdate(h));
        },
        onComplete: () => {
          (o(), a.onComplete && a.onComplete());
        },
        name: e,
        motionValue: t,
        element: i ? void 0 : s,
      };
      (kN(a) || Object.assign(c, TN(e, c)),
        c.duration && (c.duration = Xt(c.duration)),
        c.repeatDelay && (c.repeatDelay = Xt(c.repeatDelay)),
        c.from !== void 0 && (c.keyframes[0] = c.from));
      let d = !1;
      if (
        ((c.type === !1 || (c.duration === 0 && !c.repeatDelay)) &&
          (ad(c), c.delay === 0 && (d = !0)),
        (gn.instantAnimations || gn.skipAnimations) &&
          ((d = !0), ad(c), (c.delay = 0)),
        (c.allowFlatten = !a.type && !a.ease),
        d && !i && t.get() !== void 0)
      ) {
        const h = NN(c.keyframes, a);
        if (h !== void 0) {
          le.update(() => {
            (c.onUpdate(h), c.onComplete());
          });
          return;
        }
      }
      return a.isSync ? new Xf(c) : new vN(c);
    },
  S1 = new Set(["width", "height", "top", "left", "right", "bottom", ...qs]),
  Nm = 30,
  RN = (e) => !isNaN(parseFloat(e));
class AN {
  constructor(t, n = {}) {
    ((this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (r) => {
        var i;
        const s = We.now();
        if (
          (this.updatedAt !== s && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(r),
          this.current !== this.prev &&
            ((i = this.events.change) == null || i.notify(this.current),
            this.dependents))
        )
          for (const o of this.dependents) o.dirty();
      }),
      (this.hasAnimated = !1),
      this.setCurrent(t),
      (this.owner = n.owner));
  }
  setCurrent(t) {
    ((this.current = t),
      (this.updatedAt = We.now()),
      this.canTrackVelocity === null &&
        t !== void 0 &&
        (this.canTrackVelocity = RN(this.current)));
  }
  setPrevFrameValue(t = this.current) {
    ((this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt));
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new zf());
    const r = this.events[t].add(n);
    return t === "change"
      ? () => {
          (r(),
            le.read(() => {
              this.events.change.getSize() || this.stop();
            }));
        }
      : r;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, n) {
    ((this.passiveEffect = t), (this.stopPassiveEffect = n));
  }
  set(t) {
    this.passiveEffect
      ? this.passiveEffect(t, this.updateAndNotify)
      : this.updateAndNotify(t);
  }
  setWithVelocity(t, n, r) {
    (this.set(n),
      (this.prev = void 0),
      (this.prevFrameValue = t),
      (this.prevUpdatedAt = this.updatedAt - r));
  }
  jump(t, n = !0) {
    (this.updateAndNotify(t),
      (this.prev = t),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      n && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
  dirty() {
    var t;
    (t = this.events.change) == null || t.notify(this.current);
  }
  addDependent(t) {
    (this.dependents || (this.dependents = new Set()), this.dependents.add(t));
  }
  removeDependent(t) {
    this.dependents && this.dependents.delete(t);
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const t = We.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      t - this.updatedAt > Nm
    )
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, Nm);
    return Wx(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        ((this.hasAnimated = !0),
          (this.animation = t(n)),
          this.events.animationStart && this.events.animationStart.notify());
      }).then(() => {
        (this.events.animationComplete &&
          this.events.animationComplete.notify(),
          this.clearAnimation());
      })
    );
  }
  stop() {
    (this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation());
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    var t, n;
    ((t = this.dependents) == null || t.clear(),
      (n = this.events.destroy) == null || n.notify(),
      this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
}
function $s(e, t) {
  return new AN(e, t);
}
function Rm(e) {
  const t = [{}, {}];
  return (
    e == null ||
      e.values.forEach((n, r) => {
        ((t[0][r] = n.get()), (t[1][r] = n.getVelocity()));
      }),
    t
  );
}
function eh(e, t, n, r) {
  if (typeof t == "function") {
    const [s, i] = Rm(r);
    t = t(n !== void 0 ? n : e.custom, s, i);
  }
  if (
    (typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function")
  ) {
    const [s, i] = Rm(r);
    t = t(n !== void 0 ? n : e.custom, s, i);
  }
  return t;
}
function Cs(e, t, n) {
  const r = e.getProps();
  return eh(r, t, n !== void 0 ? n : r.custom, e);
}
const ld = (e) => Array.isArray(e);
function MN(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, $s(n));
}
function DN(e) {
  return ld(e) ? e[e.length - 1] || 0 : e;
}
function LN(e, t) {
  const n = Cs(e, t);
  let { transitionEnd: r = {}, transition: s = {}, ...i } = n || {};
  i = { ...i, ...r };
  for (const o in i) {
    const a = DN(i[o]);
    MN(e, o, a);
  }
}
const _e = (e) => !!(e && e.getVelocity);
function ON(e) {
  return !!(_e(e) && e.add);
}
function ud(e, t) {
  const n = e.getValue("willChange");
  if (ON(n)) return n.add(t);
  if (!n && gn.WillChange) {
    const r = new gn.WillChange("auto");
    (e.addValue("willChange", r), r.add(t));
  }
}
function th(e) {
  return e.replace(/([A-Z])/g, (t) => `-${t.toLowerCase()}`);
}
const IN = "framerAppearId",
  C1 = "data-" + th(IN);
function E1(e) {
  return e.props[C1];
}
function FN({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return ((t[n] = !1), r);
}
function P1(e, t, { delay: n = 0, transitionOverride: r, type: s } = {}) {
  let { transition: i = e.getDefaultTransition(), transitionEnd: o, ...a } = t;
  r && (i = r);
  const l = [],
    u = s && e.animationState && e.animationState.getState()[s];
  for (const c in a) {
    const d = e.getValue(c, e.latestValues[c] ?? null),
      h = a[c];
    if (h === void 0 || (u && FN(u, c))) continue;
    const p = { delay: n, ...Zf(i || {}, c) },
      x = d.get();
    if (
      x !== void 0 &&
      !d.isAnimating &&
      !Array.isArray(h) &&
      h === x &&
      !p.velocity
    )
      continue;
    let v = !1;
    if (window.MotionHandoffAnimation) {
      const g = E1(e);
      if (g) {
        const m = window.MotionHandoffAnimation(g, c, le);
        m !== null && ((p.startTime = m), (v = !0));
      }
    }
    (ud(e, c),
      d.start(
        Jf(c, d, h, e.shouldReduceMotion && S1.has(c) ? { type: !1 } : p, e, v),
      ));
    const b = d.animation;
    b && l.push(b);
  }
  return (
    o &&
      Promise.all(l).then(() => {
        le.update(() => {
          o && LN(e, o);
        });
      }),
    l
  );
}
function cd(e, t, n = {}) {
  var l;
  const r = Cs(
    e,
    t,
    n.type === "exit"
      ? (l = e.presenceContext) == null
        ? void 0
        : l.custom
      : void 0,
  );
  let { transition: s = e.getDefaultTransition() || {} } = r || {};
  n.transitionOverride && (s = n.transitionOverride);
  const i = r ? () => Promise.all(P1(e, r, n)) : () => Promise.resolve(),
    o =
      e.variantChildren && e.variantChildren.size
        ? (u = 0) => {
            const {
              delayChildren: c = 0,
              staggerChildren: d,
              staggerDirection: h,
            } = s;
            return VN(e, t, u, c, d, h, n);
          }
        : () => Promise.resolve(),
    { when: a } = s;
  if (a) {
    const [u, c] = a === "beforeChildren" ? [i, o] : [o, i];
    return u().then(() => c());
  } else return Promise.all([i(), o(n.delay)]);
}
function VN(e, t, n = 0, r = 0, s = 0, i = 1, o) {
  const a = [];
  for (const l of e.variantChildren)
    (l.notify("AnimationStart", t),
      a.push(
        cd(l, t, {
          ...o,
          delay:
            n +
            (typeof r == "function" ? 0 : r) +
            b1(e.variantChildren, l, r, s, i),
        }).then(() => l.notify("AnimationComplete", t)),
      ));
  return Promise.all(a);
}
function _N(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const s = t.map((i) => cd(e, i, n));
    r = Promise.all(s);
  } else if (typeof t == "string") r = cd(e, t, n);
  else {
    const s = typeof t == "function" ? Cs(e, t, n.custom) : t;
    r = Promise.all(P1(e, s, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
const zN = { test: (e) => e === "auto", parse: (e) => e },
  T1 = (e) => (t) => t.test(e),
  k1 = [Xs, F, qt, Nn, fj, dj, zN],
  Am = (e) => k1.find(T1(e));
function BN(e) {
  return typeof e == "number"
    ? e === 0
    : e !== null
      ? e === "none" || e === "0" || Ux(e)
      : !0;
}
const $N = new Set(["brightness", "contrast", "saturate", "opacity"]);
function UN(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [r] = n.match(Wf) || [];
  if (!r) return e;
  const s = n.replace(r, "");
  let i = $N.has(t) ? 1 : 0;
  return (r !== n && (i *= 100), t + "(" + i + s + ")");
}
const WN = /\b([a-z-]*)\(.*?\)/gu,
  dd = {
    ...or,
    getAnimatableNone: (e) => {
      const t = e.match(WN);
      return t ? t.map(UN).join(" ") : e;
    },
  },
  Mm = { ...Xs, transform: Math.round },
  HN = {
    rotate: Nn,
    rotateX: Nn,
    rotateY: Nn,
    rotateZ: Nn,
    scale: Jo,
    scaleX: Jo,
    scaleY: Jo,
    scaleZ: Jo,
    skew: Nn,
    skewX: Nn,
    skewY: Nn,
    distance: F,
    translateX: F,
    translateY: F,
    translateZ: F,
    x: F,
    y: F,
    z: F,
    perspective: F,
    transformPerspective: F,
    opacity: io,
    originX: vm,
    originY: vm,
    originZ: F,
  },
  nh = {
    borderWidth: F,
    borderTopWidth: F,
    borderRightWidth: F,
    borderBottomWidth: F,
    borderLeftWidth: F,
    borderRadius: F,
    radius: F,
    borderTopLeftRadius: F,
    borderTopRightRadius: F,
    borderBottomRightRadius: F,
    borderBottomLeftRadius: F,
    width: F,
    maxWidth: F,
    height: F,
    maxHeight: F,
    top: F,
    right: F,
    bottom: F,
    left: F,
    inset: F,
    insetBlock: F,
    insetBlockStart: F,
    insetBlockEnd: F,
    insetInline: F,
    insetInlineStart: F,
    insetInlineEnd: F,
    padding: F,
    paddingTop: F,
    paddingRight: F,
    paddingBottom: F,
    paddingLeft: F,
    paddingBlock: F,
    paddingBlockStart: F,
    paddingBlockEnd: F,
    paddingInline: F,
    paddingInlineStart: F,
    paddingInlineEnd: F,
    margin: F,
    marginTop: F,
    marginRight: F,
    marginBottom: F,
    marginLeft: F,
    marginBlock: F,
    marginBlockStart: F,
    marginBlockEnd: F,
    marginInline: F,
    marginInlineStart: F,
    marginInlineEnd: F,
    backgroundPositionX: F,
    backgroundPositionY: F,
    ...HN,
    zIndex: Mm,
    fillOpacity: io,
    strokeOpacity: io,
    numOctaves: Mm,
  },
  KN = {
    ...nh,
    color: we,
    backgroundColor: we,
    outlineColor: we,
    fill: we,
    stroke: we,
    borderColor: we,
    borderTopColor: we,
    borderRightColor: we,
    borderBottomColor: we,
    borderLeftColor: we,
    filter: dd,
    WebkitFilter: dd,
  },
  j1 = (e) => KN[e];
function N1(e, t) {
  let n = j1(e);
  return (
    n !== dd && (n = or),
    n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
const YN = new Set(["auto", "none", "0"]);
function GN(e, t, n) {
  let r = 0,
    s;
  for (; r < e.length && !s; ) {
    const i = e[r];
    (typeof i == "string" && !YN.has(i) && oo(i).values.length && (s = e[r]),
      r++);
  }
  if (s && n) for (const i of t) e[i] = N1(n, s);
}
class QN extends qf {
  constructor(t, n, r, s, i) {
    super(t, n, r, s, i, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n || !n.current) return;
    super.readKeyframes();
    for (let c = 0; c < t.length; c++) {
      let d = t[c];
      if (typeof d == "string" && ((d = d.trim()), Uf(d))) {
        const h = w1(d, n.current);
        (h !== void 0 && (t[c] = h),
          c === t.length - 1 && (this.finalKeyframe = d));
      }
    }
    if ((this.resolveNoneKeyframes(), !S1.has(r) || t.length !== 2)) return;
    const [s, i] = t,
      o = Am(s),
      a = Am(i),
      l = ym(s),
      u = ym(i);
    if (l !== u && Un[r]) {
      this.needsMeasurement = !0;
      return;
    }
    if (o !== a)
      if (Tm(o) && Tm(a))
        for (let c = 0; c < t.length; c++) {
          const d = t[c];
          typeof d == "string" && (t[c] = parseFloat(d));
        }
      else Un[r] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this,
      r = [];
    for (let s = 0; s < t.length; s++) (t[s] === null || BN(t[s])) && r.push(s);
    r.length && GN(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t || !t.current) return;
    (r === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = Un[r](
        t.measureViewportBox(),
        window.getComputedStyle(t.current),
      )),
      (n[0] = this.measuredOrigin));
    const s = n[n.length - 1];
    s !== void 0 && t.getValue(r, s).jump(s, !1);
  }
  measureEndState() {
    var a;
    const { element: t, name: n, unresolvedKeyframes: r } = this;
    if (!t || !t.current) return;
    const s = t.getValue(n);
    s && s.jump(this.measuredOrigin, !1);
    const i = r.length - 1,
      o = r[i];
    ((r[i] = Un[n](t.measureViewportBox(), window.getComputedStyle(t.current))),
      o !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = o),
      (a = this.removedTransforms) != null &&
        a.length &&
        this.removedTransforms.forEach(([l, u]) => {
          t.getValue(l).set(u);
        }),
      this.resolveNoneKeyframes());
  }
}
function XN(e, t, n) {
  if (e instanceof EventTarget) return [e];
  if (typeof e == "string") {
    const s = document.querySelectorAll(e);
    return s ? Array.from(s) : [];
  }
  return Array.from(e);
}
const R1 = (e, t) => (t && typeof e == "number" ? t.transform(e) : e);
function A1(e) {
  return $x(e) && "offsetHeight" in e;
}
const { schedule: rh, cancel: u4 } = t1(queueMicrotask, !1),
  kt = { x: !1, y: !1 };
function M1() {
  return kt.x || kt.y;
}
function qN(e) {
  return e === "x" || e === "y"
    ? kt[e]
      ? null
      : ((kt[e] = !0),
        () => {
          kt[e] = !1;
        })
    : kt.x || kt.y
      ? null
      : ((kt.x = kt.y = !0),
        () => {
          kt.x = kt.y = !1;
        });
}
function D1(e, t) {
  const n = XN(e),
    r = new AbortController(),
    s = { passive: !0, ...t, signal: r.signal };
  return [n, s, () => r.abort()];
}
function Dm(e) {
  return !(e.pointerType === "touch" || M1());
}
function ZN(e, t, n = {}) {
  const [r, s, i] = D1(e, n),
    o = (a) => {
      if (!Dm(a)) return;
      const { target: l } = a,
        u = t(l, a);
      if (typeof u != "function" || !l) return;
      const c = (d) => {
        Dm(d) && (u(d), l.removeEventListener("pointerleave", c));
      };
      l.addEventListener("pointerleave", c, s);
    };
  return (
    r.forEach((a) => {
      a.addEventListener("pointerenter", o, s);
    }),
    i
  );
}
const L1 = (e, t) => (t ? (e === t ? !0 : L1(e, t.parentElement)) : !1),
  sh = (e) =>
    e.pointerType === "mouse"
      ? typeof e.button != "number" || e.button <= 0
      : e.isPrimary !== !1,
  JN = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function O1(e) {
  return JN.has(e.tagName) || e.isContentEditable === !0;
}
const va = new WeakSet();
function Lm(e) {
  return (t) => {
    t.key === "Enter" && e(t);
  };
}
function Nu(e, t) {
  e.dispatchEvent(
    new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 }),
  );
}
const eR = (e, t) => {
  const n = e.currentTarget;
  if (!n) return;
  const r = Lm(() => {
    if (va.has(n)) return;
    Nu(n, "down");
    const s = Lm(() => {
        Nu(n, "up");
      }),
      i = () => Nu(n, "cancel");
    (n.addEventListener("keyup", s, t), n.addEventListener("blur", i, t));
  });
  (n.addEventListener("keydown", r, t),
    n.addEventListener("blur", () => n.removeEventListener("keydown", r), t));
};
function Om(e) {
  return sh(e) && !M1();
}
function tR(e, t, n = {}) {
  const [r, s, i] = D1(e, n),
    o = (a) => {
      const l = a.currentTarget;
      if (!Om(a)) return;
      va.add(l);
      const u = t(l, a),
        c = (p, x) => {
          (window.removeEventListener("pointerup", d),
            window.removeEventListener("pointercancel", h),
            va.has(l) && va.delete(l),
            Om(p) && typeof u == "function" && u(p, { success: x }));
        },
        d = (p) => {
          c(
            p,
            l === window ||
              l === document ||
              n.useGlobalTarget ||
              L1(l, p.target),
          );
        },
        h = (p) => {
          c(p, !1);
        };
      (window.addEventListener("pointerup", d, s),
        window.addEventListener("pointercancel", h, s));
    };
  return (
    r.forEach((a) => {
      ((n.useGlobalTarget ? window : a).addEventListener("pointerdown", o, s),
        A1(a) &&
          (a.addEventListener("focus", (u) => eR(u, s)),
          !O1(a) && !a.hasAttribute("tabindex") && (a.tabIndex = 0)));
    }),
    i
  );
}
function I1(e) {
  return $x(e) && "ownerSVGElement" in e;
}
function nR(e) {
  return I1(e) && e.tagName === "svg";
}
const rR = [...k1, we, or],
  sR = (e) => rR.find(T1(e)),
  Im = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  fs = () => ({ x: Im(), y: Im() }),
  Fm = () => ({ min: 0, max: 0 }),
  Ce = () => ({ x: Fm(), y: Fm() }),
  fd = { current: null },
  F1 = { current: !1 },
  iR = typeof window < "u";
function oR() {
  if (((F1.current = !0), !!iR))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (fd.current = e.matches);
      (e.addEventListener("change", t), t());
    } else fd.current = !1;
}
const aR = new WeakMap();
function Ol(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
function ao(e) {
  return typeof e == "string" || Array.isArray(e);
}
const ih = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  oh = ["initial", ...ih];
function Il(e) {
  return Ol(e.animate) || oh.some((t) => ao(e[t]));
}
function V1(e) {
  return !!(Il(e) || e.variants);
}
function lR(e, t, n) {
  for (const r in t) {
    const s = t[r],
      i = n[r];
    if (_e(s)) e.addValue(r, s);
    else if (_e(i)) e.addValue(r, $s(s, { owner: e }));
    else if (i !== s)
      if (e.hasValue(r)) {
        const o = e.getValue(r);
        o.liveStyle === !0 ? o.jump(s) : o.hasAnimated || o.set(s);
      } else {
        const o = e.getStaticValue(r);
        e.addValue(r, $s(o !== void 0 ? o : s, { owner: e }));
      }
  }
  for (const r in n) t[r] === void 0 && e.removeValue(r);
  return t;
}
const Vm = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete",
];
let nl = {};
function _1(e) {
  nl = e;
}
function uR() {
  return nl;
}
class cR {
  scrapeMotionValuesFromProps(t, n, r) {
    return {};
  }
  constructor(
    {
      parent: t,
      props: n,
      presenceContext: r,
      reducedMotionConfig: s,
      blockInitialAnimation: i,
      visualState: o,
    },
    a = {},
  ) {
    ((this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = qf),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection,
          ));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const h = We.now();
        this.renderScheduledAt < h &&
          ((this.renderScheduledAt = h), le.render(this.render, !1, !0));
      }));
    const { latestValues: l, renderState: u } = o;
    ((this.latestValues = l),
      (this.baseTarget = { ...l }),
      (this.initialValues = n.initial ? { ...l } : {}),
      (this.renderState = u),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = s),
      (this.options = a),
      (this.blockInitialAnimation = !!i),
      (this.isControllingVariants = Il(n)),
      (this.isVariantNode = V1(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current)));
    const { willChange: c, ...d } = this.scrapeMotionValuesFromProps(
      n,
      {},
      this,
    );
    for (const h in d) {
      const p = d[h];
      l[h] !== void 0 && _e(p) && p.set(l[h]);
    }
  }
  mount(t) {
    var n;
    ((this.current = t),
      aR.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((r, s) => this.bindToMotionValue(s, r)),
      this.reducedMotionConfig === "never"
        ? (this.shouldReduceMotion = !1)
        : this.reducedMotionConfig === "always"
          ? (this.shouldReduceMotion = !0)
          : (F1.current || oR(), (this.shouldReduceMotion = fd.current)),
      (n = this.parent) == null || n.addChild(this),
      this.update(this.props, this.presenceContext));
  }
  unmount() {
    var t;
    (this.projection && this.projection.unmount(),
      ir(this.notifyUpdate),
      ir(this.render),
      this.valueSubscriptions.forEach((n) => n()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      (t = this.parent) == null || t.removeChild(this));
    for (const n in this.events) this.events[n].clear();
    for (const n in this.features) {
      const r = this.features[n];
      r && (r.unmount(), (r.isMounted = !1));
    }
    this.current = null;
  }
  addChild(t) {
    (this.children.add(t),
      this.enteringChildren ?? (this.enteringChildren = new Set()),
      this.enteringChildren.add(t));
  }
  removeChild(t) {
    (this.children.delete(t),
      this.enteringChildren && this.enteringChildren.delete(t));
  }
  bindToMotionValue(t, n) {
    this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
    const r = Zs.has(t);
    r && this.onBindTransform && this.onBindTransform();
    const s = n.on("change", (o) => {
      ((this.latestValues[t] = o),
        this.props.onUpdate && le.preRender(this.notifyUpdate),
        r && this.projection && (this.projection.isTransformDirty = !0),
        this.scheduleRender());
    });
    let i;
    (typeof window < "u" &&
      window.MotionCheckAppearSync &&
      (i = window.MotionCheckAppearSync(this, t, n)),
      this.valueSubscriptions.set(t, () => {
        (s(), i && i(), n.owner && n.stop());
      }));
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = "animation";
    for (t in nl) {
      const n = nl[t];
      if (!n) continue;
      const { isEnabled: r, Feature: s } = n;
      if (
        (!this.features[t] &&
          s &&
          r(this.props) &&
          (this.features[t] = new s(this)),
        this.features[t])
      ) {
        const i = this.features[t];
        i.isMounted ? i.update() : (i.mount(), (i.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : Ce();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  update(t, n) {
    ((t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n));
    for (let r = 0; r < Vm.length; r++) {
      const s = Vm[r];
      this.propEventSubscriptions[s] &&
        (this.propEventSubscriptions[s](),
        delete this.propEventSubscriptions[s]);
      const i = "on" + s,
        o = t[i];
      o && (this.propEventSubscriptions[s] = this.on(s, o));
    }
    ((this.prevMotionValues = lR(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps || {}, this),
      this.prevMotionValues,
    )),
      this.handleChildMotionValue && this.handleChildMotionValue());
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
        ? this.parent.getClosestVariantNode()
        : void 0;
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(t),
        () => n.variantChildren.delete(t)
      );
  }
  addValue(t, n) {
    const r = this.values.get(t);
    n !== r &&
      (r && this.removeValue(t),
      this.bindToMotionValue(t, n),
      this.values.set(t, n),
      (this.latestValues[t] = n.get()));
  }
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    (n && (n(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState));
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let r = this.values.get(t);
    return (
      r === void 0 &&
        n !== void 0 &&
        ((r = $s(n === null ? void 0 : n, { owner: this })),
        this.addValue(t, r)),
      r
    );
  }
  readValue(t, n) {
    let r =
      this.latestValues[t] !== void 0 || !this.current
        ? this.latestValues[t]
        : (this.getBaseTargetFromProps(this.props, t) ??
          this.readValueFromInstance(this.current, t, this.options));
    return (
      r != null &&
        (typeof r == "string" && (Bx(r) || Ux(r))
          ? (r = parseFloat(r))
          : !sR(r) && or.test(n) && (r = N1(t, n)),
        this.setBaseTarget(t, _e(r) ? r.get() : r)),
      _e(r) ? r.get() : r
    );
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var i;
    const { initial: n } = this.props;
    let r;
    if (typeof n == "string" || typeof n == "object") {
      const o = eh(
        this.props,
        n,
        (i = this.presenceContext) == null ? void 0 : i.custom,
      );
      o && (r = o[t]);
    }
    if (n && r !== void 0) return r;
    const s = this.getBaseTargetFromProps(this.props, t);
    return s !== void 0 && !_e(s)
      ? s
      : this.initialValues[t] !== void 0 && r === void 0
        ? void 0
        : this.baseTarget[t];
  }
  on(t, n) {
    return (
      this.events[t] || (this.events[t] = new zf()),
      this.events[t].add(n)
    );
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
  scheduleRenderMicrotask() {
    rh.render(this.render);
  }
}
class dr {
  constructor(t) {
    ((this.isMounted = !1), (this.node = t));
  }
  update() {}
}
class z1 extends cR {
  constructor() {
    (super(...arguments), (this.KeyframeResolver = QN));
  }
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    const r = t.style;
    return r ? r[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    (delete n[t], delete r[t]);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    _e(t) &&
      (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
}
function B1({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function dR({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function fR(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function Ru(e) {
  return e === void 0 || e === 1;
}
function hd({ scale: e, scaleX: t, scaleY: n }) {
  return !Ru(e) || !Ru(t) || !Ru(n);
}
function xr(e) {
  return (
    hd(e) ||
    $1(e) ||
    e.z ||
    e.rotate ||
    e.rotateX ||
    e.rotateY ||
    e.skewX ||
    e.skewY
  );
}
function $1(e) {
  return _m(e.x) || _m(e.y);
}
function _m(e) {
  return e && e !== "0%";
}
function rl(e, t, n) {
  const r = e - n,
    s = t * r;
  return n + s;
}
function zm(e, t, n, r, s) {
  return (s !== void 0 && (e = rl(e, s, r)), rl(e, n, r) + t);
}
function pd(e, t = 0, n = 1, r, s) {
  ((e.min = zm(e.min, t, n, r, s)), (e.max = zm(e.max, t, n, r, s)));
}
function U1(e, { x: t, y: n }) {
  (pd(e.x, t.translate, t.scale, t.originPoint),
    pd(e.y, n.translate, n.scale, n.originPoint));
}
const Bm = 0.999999999999,
  $m = 1.0000000000001;
function hR(e, t, n, r = !1) {
  const s = n.length;
  if (!s) return;
  t.x = t.y = 1;
  let i, o;
  for (let a = 0; a < s; a++) {
    ((i = n[a]), (o = i.projectionDelta));
    const { visualElement: l } = i.options;
    (l && l.props.style && l.props.style.display === "contents") ||
      (r &&
        i.options.layoutScroll &&
        i.scroll &&
        i !== i.root &&
        ps(e, { x: -i.scroll.offset.x, y: -i.scroll.offset.y }),
      o && ((t.x *= o.x.scale), (t.y *= o.y.scale), U1(e, o)),
      r && xr(i.latestValues) && ps(e, i.latestValues));
  }
  (t.x < $m && t.x > Bm && (t.x = 1), t.y < $m && t.y > Bm && (t.y = 1));
}
function hs(e, t) {
  ((e.min = e.min + t), (e.max = e.max + t));
}
function Um(e, t, n, r, s = 0.5) {
  const i = he(e.min, e.max, s);
  pd(e, t, n, i, r);
}
function ps(e, t) {
  (Um(e.x, t.x, t.scaleX, t.scale, t.originX),
    Um(e.y, t.y, t.scaleY, t.scale, t.originY));
}
function W1(e, t) {
  return B1(fR(e.getBoundingClientRect(), t));
}
function pR(e, t, n) {
  const r = W1(e, n),
    { scroll: s } = t;
  return (s && (hs(r.x, s.offset.x), hs(r.y, s.offset.y)), r);
}
const mR = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  gR = qs.length;
function yR(e, t, n) {
  let r = "",
    s = !0;
  for (let i = 0; i < gR; i++) {
    const o = qs[i],
      a = e[o];
    if (a === void 0) continue;
    let l = !0;
    if (
      (typeof a == "number"
        ? (l = a === (o.startsWith("scale") ? 1 : 0))
        : (l = parseFloat(a) === 0),
      !l || n)
    ) {
      const u = R1(a, nh[o]);
      if (!l) {
        s = !1;
        const c = mR[o] || o;
        r += `${c}(${u}) `;
      }
      n && (t[o] = u);
    }
  }
  return ((r = r.trim()), n ? (r = n(t, s ? "" : r)) : s && (r = "none"), r);
}
function ah(e, t, n) {
  const { style: r, vars: s, transformOrigin: i } = e;
  let o = !1,
    a = !1;
  for (const l in t) {
    const u = t[l];
    if (Zs.has(l)) {
      o = !0;
      continue;
    } else if (r1(l)) {
      s[l] = u;
      continue;
    } else {
      const c = R1(u, nh[l]);
      l.startsWith("origin") ? ((a = !0), (i[l] = c)) : (r[l] = c);
    }
  }
  if (
    (t.transform ||
      (o || n
        ? (r.transform = yR(t, e.transform, n))
        : r.transform && (r.transform = "none")),
    a)
  ) {
    const { originX: l = "50%", originY: u = "50%", originZ: c = 0 } = i;
    r.transformOrigin = `${l} ${u} ${c}`;
  }
}
function H1(e, { style: t, vars: n }, r, s) {
  const i = e.style;
  let o;
  for (o in t) i[o] = t[o];
  s == null || s.applyProjectionStyles(i, r);
  for (o in n) i.setProperty(o, n[o]);
}
function Wm(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const hi = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (F.test(e)) e = parseFloat(e);
        else return e;
      const n = Wm(e, t.target.x),
        r = Wm(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  vR = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        s = or.parse(e);
      if (s.length > 5) return r;
      const i = or.createTransformer(e),
        o = typeof s[0] != "number" ? 1 : 0,
        a = n.x.scale * t.x,
        l = n.y.scale * t.y;
      ((s[0 + o] /= a), (s[1 + o] /= l));
      const u = he(a, l, 0.5);
      return (
        typeof s[2 + o] == "number" && (s[2 + o] /= u),
        typeof s[3 + o] == "number" && (s[3 + o] /= u),
        i(s)
      );
    },
  },
  md = {
    borderRadius: {
      ...hi,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: hi,
    borderTopRightRadius: hi,
    borderBottomLeftRadius: hi,
    borderBottomRightRadius: hi,
    boxShadow: vR,
  };
function K1(e, { layout: t, layoutId: n }) {
  return (
    Zs.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!md[e] || e === "opacity"))
  );
}
function lh(e, t, n) {
  var o;
  const r = e.style,
    s = t == null ? void 0 : t.style,
    i = {};
  if (!r) return i;
  for (const a in r)
    (_e(r[a]) ||
      (s && _e(s[a])) ||
      K1(a, e) ||
      ((o = n == null ? void 0 : n.getValue(a)) == null
        ? void 0
        : o.liveStyle) !== void 0) &&
      (i[a] = r[a]);
  return i;
}
function xR(e) {
  return window.getComputedStyle(e);
}
class wR extends z1 {
  constructor() {
    (super(...arguments), (this.type = "html"), (this.renderInstance = H1));
  }
  readValueFromInstance(t, n) {
    var r;
    if (Zs.has(n))
      return (r = this.projection) != null && r.isProjecting ? nd(n) : Qj(t, n);
    {
      const s = xR(t),
        i = (r1(n) ? s.getPropertyValue(n) : s[n]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return W1(t, n);
  }
  build(t, n, r) {
    ah(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return lh(t, n, r);
  }
}
const bR = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  SR = { offset: "strokeDashoffset", array: "strokeDasharray" };
function CR(e, t, n = 1, r = 0, s = !0) {
  e.pathLength = 1;
  const i = s ? bR : SR;
  e[i.offset] = F.transform(-r);
  const o = F.transform(t),
    a = F.transform(n);
  e[i.array] = `${o} ${a}`;
}
const ER = ["offsetDistance", "offsetPath", "offsetRotate", "offsetAnchor"];
function Y1(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    pathLength: s,
    pathSpacing: i = 1,
    pathOffset: o = 0,
    ...a
  },
  l,
  u,
  c,
) {
  if ((ah(e, a, u), l)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  ((e.attrs = e.style), (e.style = {}));
  const { attrs: d, style: h } = e;
  (d.transform && ((h.transform = d.transform), delete d.transform),
    (h.transform || d.transformOrigin) &&
      ((h.transformOrigin = d.transformOrigin ?? "50% 50%"),
      delete d.transformOrigin),
    h.transform &&
      ((h.transformBox = (c == null ? void 0 : c.transformBox) ?? "fill-box"),
      delete d.transformBox));
  for (const p of ER) d[p] !== void 0 && ((h[p] = d[p]), delete d[p]);
  (t !== void 0 && (d.x = t),
    n !== void 0 && (d.y = n),
    r !== void 0 && (d.scale = r),
    s !== void 0 && CR(d, s, i, o, !1));
}
const G1 = new Set([
    "baseFrequency",
    "diffuseConstant",
    "kernelMatrix",
    "kernelUnitLength",
    "keySplines",
    "keyTimes",
    "limitingConeAngle",
    "markerHeight",
    "markerWidth",
    "numOctaves",
    "targetX",
    "targetY",
    "surfaceScale",
    "specularConstant",
    "specularExponent",
    "stdDeviation",
    "tableValues",
    "viewBox",
    "gradientTransform",
    "pathLength",
    "startOffset",
    "textLength",
    "lengthAdjust",
  ]),
  Q1 = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function PR(e, t, n, r) {
  H1(e, t, void 0, r);
  for (const s in t.attrs) e.setAttribute(G1.has(s) ? s : th(s), t.attrs[s]);
}
function X1(e, t, n) {
  const r = lh(e, t, n);
  for (const s in e)
    if (_e(e[s]) || _e(t[s])) {
      const i =
        qs.indexOf(s) !== -1
          ? "attr" + s.charAt(0).toUpperCase() + s.substring(1)
          : s;
      r[i] = e[s];
    }
  return r;
}
class TR extends z1 {
  constructor() {
    (super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = Ce));
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (Zs.has(n)) {
      const r = j1(n);
      return (r && r.default) || 0;
    }
    return ((n = G1.has(n) ? n : th(n)), t.getAttribute(n));
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return X1(t, n, r);
  }
  build(t, n, r) {
    Y1(t, n, this.isSVGTag, r.transformTemplate, r.style);
  }
  renderInstance(t, n, r, s) {
    PR(t, n, r, s);
  }
  mount(t) {
    ((this.isSVGTag = Q1(t.tagName)), super.mount(t));
  }
}
const kR = oh.length;
function q1(e) {
  if (!e) return;
  if (!e.isControllingVariants) {
    const n = e.parent ? q1(e.parent) || {} : {};
    return (e.props.initial !== void 0 && (n.initial = e.props.initial), n);
  }
  const t = {};
  for (let n = 0; n < kR; n++) {
    const r = oh[n],
      s = e.props[r];
    (ao(s) || s === !1) && (t[r] = s);
  }
  return t;
}
function Z1(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
const jR = [...ih].reverse(),
  NR = ih.length;
function RR(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => _N(e, n, r)));
}
function AR(e) {
  let t = RR(e),
    n = Hm(),
    r = !0;
  const s = (l) => (u, c) => {
    var h;
    const d = Cs(
      e,
      c,
      l === "exit"
        ? (h = e.presenceContext) == null
          ? void 0
          : h.custom
        : void 0,
    );
    if (d) {
      const { transition: p, transitionEnd: x, ...v } = d;
      u = { ...u, ...v, ...x };
    }
    return u;
  };
  function i(l) {
    t = l(e);
  }
  function o(l) {
    const { props: u } = e,
      c = q1(e.parent) || {},
      d = [],
      h = new Set();
    let p = {},
      x = 1 / 0;
    for (let b = 0; b < NR; b++) {
      const g = jR[b],
        m = n[g],
        y = u[g] !== void 0 ? u[g] : c[g],
        S = ao(y),
        C = g === l ? m.isActive : null;
      C === !1 && (x = b);
      let E = y === c[g] && y !== u[g] && S;
      if (
        (E && r && e.manuallyAnimateOnMount && (E = !1),
        (m.protectedKeys = { ...p }),
        (!m.isActive && C === null) ||
          (!y && !m.prevProp) ||
          Ol(y) ||
          typeof y == "boolean")
      )
        continue;
      const P = MR(m.prevProp, y);
      let T = P || (g === l && m.isActive && !E && S) || (b > x && S),
        R = !1;
      const A = Array.isArray(y) ? y : [y];
      let z = A.reduce(s(g), {});
      C === !1 && (z = {});
      const { prevResolvedValues: I = {} } = m,
        Y = { ...I, ...z },
        L = (_) => {
          ((T = !0),
            h.has(_) && ((R = !0), h.delete(_)),
            (m.needsAnimating[_] = !0));
          const k = e.getValue(_);
          k && (k.liveStyle = !1);
        };
      for (const _ in Y) {
        const k = z[_],
          N = I[_];
        if (p.hasOwnProperty(_)) continue;
        let O = !1;
        (ld(k) && ld(N) ? (O = !Z1(k, N)) : (O = k !== N),
          O
            ? k != null
              ? L(_)
              : h.add(_)
            : k !== void 0 && h.has(_)
              ? L(_)
              : (m.protectedKeys[_] = !0));
      }
      ((m.prevProp = y),
        (m.prevResolvedValues = z),
        m.isActive && (p = { ...p, ...z }),
        r && e.blockInitialAnimation && (T = !1));
      const G = E && P;
      T &&
        (!G || R) &&
        d.push(
          ...A.map((_) => {
            const k = { type: g };
            if (
              typeof _ == "string" &&
              r &&
              !G &&
              e.manuallyAnimateOnMount &&
              e.parent
            ) {
              const { parent: N } = e,
                O = Cs(N, _);
              if (N.enteringChildren && O) {
                const { delayChildren: U } = O.transition || {};
                k.delay = b1(N.enteringChildren, e, U);
              }
            }
            return { animation: _, options: k };
          }),
        );
    }
    if (h.size) {
      const b = {};
      if (typeof u.initial != "boolean") {
        const g = Cs(e, Array.isArray(u.initial) ? u.initial[0] : u.initial);
        g && g.transition && (b.transition = g.transition);
      }
      (h.forEach((g) => {
        const m = e.getBaseTarget(g),
          y = e.getValue(g);
        (y && (y.liveStyle = !0), (b[g] = m ?? null));
      }),
        d.push({ animation: b }));
    }
    let v = !!d.length;
    return (
      r &&
        (u.initial === !1 || u.initial === u.animate) &&
        !e.manuallyAnimateOnMount &&
        (v = !1),
      (r = !1),
      v ? t(d) : Promise.resolve()
    );
  }
  function a(l, u) {
    var d;
    if (n[l].isActive === u) return Promise.resolve();
    ((d = e.variantChildren) == null ||
      d.forEach((h) => {
        var p;
        return (p = h.animationState) == null ? void 0 : p.setActive(l, u);
      }),
      (n[l].isActive = u));
    const c = o(l);
    for (const h in n) n[h].protectedKeys = {};
    return c;
  }
  return {
    animateChanges: o,
    setActive: a,
    setAnimateFunction: i,
    getState: () => n,
    reset: () => {
      n = Hm();
    },
  };
}
function MR(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !Z1(t, e) : !1;
}
function mr(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function Hm() {
  return {
    animate: mr(!0),
    whileInView: mr(),
    whileHover: mr(),
    whileTap: mr(),
    whileDrag: mr(),
    whileFocus: mr(),
    exit: mr(),
  };
}
const J1 = 1e-4,
  DR = 1 - J1,
  LR = 1 + J1,
  ew = 0.01,
  OR = 0 - ew,
  IR = 0 + ew;
function He(e) {
  return e.max - e.min;
}
function FR(e, t, n) {
  return Math.abs(e - t) <= n;
}
function Km(e, t, n, r = 0.5) {
  ((e.origin = r),
    (e.originPoint = he(t.min, t.max, e.origin)),
    (e.scale = He(n) / He(t)),
    (e.translate = he(n.min, n.max, e.origin) - e.originPoint),
    ((e.scale >= DR && e.scale <= LR) || isNaN(e.scale)) && (e.scale = 1),
    ((e.translate >= OR && e.translate <= IR) || isNaN(e.translate)) &&
      (e.translate = 0));
}
function Mi(e, t, n, r) {
  (Km(e.x, t.x, n.x, r ? r.originX : void 0),
    Km(e.y, t.y, n.y, r ? r.originY : void 0));
}
function Ym(e, t, n) {
  ((e.min = n.min + t.min), (e.max = e.min + He(t)));
}
function VR(e, t, n) {
  (Ym(e.x, t.x, n.x), Ym(e.y, t.y, n.y));
}
function Gm(e, t, n) {
  ((e.min = t.min - n.min), (e.max = e.min + He(t)));
}
function sl(e, t, n) {
  (Gm(e.x, t.x, n.x), Gm(e.y, t.y, n.y));
}
function Qm(e, t, n, r, s) {
  return (
    (e -= t),
    (e = rl(e, 1 / n, r)),
    s !== void 0 && (e = rl(e, 1 / s, r)),
    e
  );
}
function _R(e, t = 0, n = 1, r = 0.5, s, i = e, o = e) {
  if (
    (qt.test(t) &&
      ((t = parseFloat(t)), (t = he(o.min, o.max, t / 100) - o.min)),
    typeof t != "number")
  )
    return;
  let a = he(i.min, i.max, r);
  (e === i && (a -= t),
    (e.min = Qm(e.min, t, n, a, s)),
    (e.max = Qm(e.max, t, n, a, s)));
}
function Xm(e, t, [n, r, s], i, o) {
  _R(e, t[n], t[r], t[s], t.scale, i, o);
}
const zR = ["x", "scaleX", "originX"],
  BR = ["y", "scaleY", "originY"];
function qm(e, t, n, r) {
  (Xm(e.x, t, zR, n ? n.x : void 0, r ? r.x : void 0),
    Xm(e.y, t, BR, n ? n.y : void 0, r ? r.y : void 0));
}
function Zm(e, t) {
  ((e.min = t.min), (e.max = t.max));
}
function Tt(e, t) {
  (Zm(e.x, t.x), Zm(e.y, t.y));
}
function Jm(e, t) {
  ((e.translate = t.translate),
    (e.scale = t.scale),
    (e.originPoint = t.originPoint),
    (e.origin = t.origin));
}
function eg(e) {
  return e.translate === 0 && e.scale === 1;
}
function tw(e) {
  return eg(e.x) && eg(e.y);
}
function tg(e, t) {
  return e.min === t.min && e.max === t.max;
}
function $R(e, t) {
  return tg(e.x, t.x) && tg(e.y, t.y);
}
function ng(e, t) {
  return (
    Math.round(e.min) === Math.round(t.min) &&
    Math.round(e.max) === Math.round(t.max)
  );
}
function nw(e, t) {
  return ng(e.x, t.x) && ng(e.y, t.y);
}
function rg(e) {
  return He(e.x) / He(e.y);
}
function sg(e, t) {
  return (
    e.translate === t.translate &&
    e.scale === t.scale &&
    e.originPoint === t.originPoint
  );
}
function dt(e) {
  return [e("x"), e("y")];
}
function UR(e, t, n) {
  let r = "";
  const s = e.x.translate / t.x,
    i = e.y.translate / t.y,
    o = (n == null ? void 0 : n.z) || 0;
  if (
    ((s || i || o) && (r = `translate3d(${s}px, ${i}px, ${o}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const {
      transformPerspective: u,
      rotate: c,
      rotateX: d,
      rotateY: h,
      skewX: p,
      skewY: x,
    } = n;
    (u && (r = `perspective(${u}px) ${r}`),
      c && (r += `rotate(${c}deg) `),
      d && (r += `rotateX(${d}deg) `),
      h && (r += `rotateY(${h}deg) `),
      p && (r += `skewX(${p}deg) `),
      x && (r += `skewY(${x}deg) `));
  }
  const a = e.x.scale * t.x,
    l = e.y.scale * t.y;
  return ((a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`), r || "none");
}
const rw = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  WR = rw.length,
  ig = (e) => (typeof e == "string" ? parseFloat(e) : e),
  og = (e) => typeof e == "number" || F.test(e);
function HR(e, t, n, r, s, i) {
  s
    ? ((e.opacity = he(0, n.opacity ?? 1, KR(r))),
      (e.opacityExit = he(t.opacity ?? 1, 0, YR(r))))
    : i && (e.opacity = he(t.opacity ?? 1, n.opacity ?? 1, r));
  for (let o = 0; o < WR; o++) {
    const a = `border${rw[o]}Radius`;
    let l = ag(t, a),
      u = ag(n, a);
    if (l === void 0 && u === void 0) continue;
    (l || (l = 0),
      u || (u = 0),
      l === 0 || u === 0 || og(l) === og(u)
        ? ((e[a] = Math.max(he(ig(l), ig(u), r), 0)),
          (qt.test(u) || qt.test(l)) && (e[a] += "%"))
        : (e[a] = u));
  }
  (t.rotate || n.rotate) && (e.rotate = he(t.rotate || 0, n.rotate || 0, r));
}
function ag(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const KR = sw(0, 0.5, qx),
  YR = sw(0.5, 0.95, vt);
function sw(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(so(e, t, r)));
}
function GR(e, t) {
  const n = We.now(),
    r = ({ timestamp: s }) => {
      const i = s - n;
      i >= t && (ir(r), e(i - t));
    };
  return (le.setup(r, !0), () => ir(r));
}
function lo(e, t, n, r = { passive: !0 }) {
  return (e.addEventListener(t, n, r), () => e.removeEventListener(t, n));
}
function xa(e) {
  return _e(e) ? e.get() : e;
}
function QR(e, t, n) {
  const r = _e(e) ? e : $s(e);
  return (r.start(Jf("", r, t, n)), r.animation);
}
const XR = (e, t) => e.depth - t.depth;
class qR {
  constructor() {
    ((this.children = []), (this.isDirty = !1));
  }
  add(t) {
    (Ff(this.children, t), (this.isDirty = !0));
  }
  remove(t) {
    (Vf(this.children, t), (this.isDirty = !0));
  }
  forEach(t) {
    (this.isDirty && this.children.sort(XR),
      (this.isDirty = !1),
      this.children.forEach(t));
  }
}
class ZR {
  constructor() {
    this.members = [];
  }
  add(t) {
    (Ff(this.members, t), t.scheduleRender());
  }
  remove(t) {
    if (
      (Vf(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((s) => t === s);
    if (n === 0) return !1;
    let r;
    for (let s = n; s >= 0; s--) {
      const i = this.members[s];
      if (i.isPresent !== !1) {
        r = i;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
      (r.instance && r.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = r),
        n && (t.resumeFrom.preserveOpacity = !0),
        r.snapshot &&
          ((t.snapshot = r.snapshot),
          (t.snapshot.latestValues = r.animationValues || r.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0));
      const { crossfade: s } = t.options;
      s === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      (n.onExitComplete && n.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete());
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
const wa = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 },
  Au = ["", "X", "Y", "Z"],
  JR = 1e3;
let eA = 0;
function Mu(e, t, n, r) {
  const { latestValues: s } = t;
  s[e] && ((n[e] = s[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
}
function iw(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
  const { visualElement: t } = e.options;
  if (!t) return;
  const n = E1(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: s, layoutId: i } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", le, !(s || i));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && iw(r);
}
function ow({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: s,
}) {
  return class {
    constructor(o = {}, a = t == null ? void 0 : t()) {
      ((this.id = eA++),
        (this.animationId = 0),
        (this.animationCommitId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.layoutVersion = 0),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          ((this.projectionUpdateScheduled = !1),
            this.nodes.forEach(rA),
            this.nodes.forEach(aA),
            this.nodes.forEach(lA),
            this.nodes.forEach(sA));
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.linkedParentVersion = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = o),
        (this.root = a ? a.root || a : this),
        (this.path = a ? [...a.path, a] : []),
        (this.parent = a),
        (this.depth = a ? a.depth + 1 : 0));
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new qR());
    }
    addEventListener(o, a) {
      return (
        this.eventHandlers.has(o) || this.eventHandlers.set(o, new zf()),
        this.eventHandlers.get(o).add(a)
      );
    }
    notifyListeners(o, ...a) {
      const l = this.eventHandlers.get(o);
      l && l.notify(...a);
    }
    hasListeners(o) {
      return this.eventHandlers.has(o);
    }
    mount(o) {
      if (this.instance) return;
      ((this.isSVG = I1(o) && !nR(o)), (this.instance = o));
      const { layoutId: a, layout: l, visualElement: u } = this.options;
      if (
        (u && !u.current && u.mount(o),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        this.root.hasTreeAnimated && (l || a) && (this.isLayoutDirty = !0),
        e)
      ) {
        let c,
          d = 0;
        const h = () => (this.root.updateBlockedByResize = !1);
        (le.read(() => {
          d = window.innerWidth;
        }),
          e(o, () => {
            const p = window.innerWidth;
            p !== d &&
              ((d = p),
              (this.root.updateBlockedByResize = !0),
              c && c(),
              (c = GR(h, 250)),
              wa.hasAnimatedSinceResize &&
                ((wa.hasAnimatedSinceResize = !1), this.nodes.forEach(cg)));
          }));
      }
      (a && this.root.registerSharedNode(a, this),
        this.options.animate !== !1 &&
          u &&
          (a || l) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: c,
              hasLayoutChanged: d,
              hasRelativeLayoutChanged: h,
              layout: p,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                ((this.target = void 0), (this.relativeTarget = void 0));
                return;
              }
              const x =
                  this.options.transition || u.getDefaultTransition() || hA,
                { onLayoutAnimationStart: v, onLayoutAnimationComplete: b } =
                  u.getProps(),
                g = !this.targetLayout || !nw(this.targetLayout, p),
                m = !d && h;
              if (
                this.options.layoutRoot ||
                this.resumeFrom ||
                m ||
                (d && (g || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0));
                const y = { ...Zf(x, "layout"), onPlay: v, onComplete: b };
                ((u.shouldReduceMotion || this.options.layoutRoot) &&
                  ((y.delay = 0), (y.type = !1)),
                  this.startAnimation(y),
                  this.setAnimationOrigin(c, m));
              } else
                (d || cg(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete());
              this.targetLayout = p;
            },
          ));
    }
    unmount() {
      (this.options.layoutId && this.willUpdate(),
        this.root.nodes.remove(this));
      const o = this.getStack();
      (o && o.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        this.eventHandlers.clear(),
        ir(this.updateProjection));
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(uA),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: o } = this.options;
      return o && o.getProps().transformTemplate;
    }
    willUpdate(o = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          iw(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const d = this.path[c];
        ((d.shouldResetTransform = !0),
          d.updateScroll("snapshot"),
          d.options.layoutRoot && d.willUpdate(!1));
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l) return;
      const u = this.getTransformTemplate();
      ((this.prevTransformTemplateValue = u
        ? u(this.latestValues, "")
        : void 0),
        this.updateSnapshot(),
        o && this.notifyListeners("willUpdate"));
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        (this.unblockUpdate(),
          this.clearAllSnapshots(),
          this.nodes.forEach(lg));
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(ug);
        return;
      }
      ((this.animationCommitId = this.animationId),
        this.isUpdating
          ? ((this.isUpdating = !1),
            this.nodes.forEach(oA),
            this.nodes.forEach(tA),
            this.nodes.forEach(nA))
          : this.nodes.forEach(ug),
        this.clearAllSnapshots());
      const a = We.now();
      ((Re.delta = Jt(0, 1e3 / 60, a - Re.timestamp)),
        (Re.timestamp = a),
        (Re.isProcessing = !0),
        Cu.update.process(Re),
        Cu.preRender.process(Re),
        Cu.render.process(Re),
        (Re.isProcessing = !1));
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), rh.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      (this.nodes.forEach(iA), this.sharedNodes.forEach(cA));
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        le.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      le.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot ||
        !this.instance ||
        ((this.snapshot = this.measure()),
        this.snapshot &&
          !He(this.snapshot.measuredBox.x) &&
          !He(this.snapshot.measuredBox.y) &&
          (this.snapshot = void 0));
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
      const o = this.layout;
      ((this.layout = this.measure(!1)),
        this.layoutVersion++,
        (this.layoutCorrected = Ce()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox));
      const { visualElement: a } = this.options;
      a &&
        a.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          o ? o.layoutBox : void 0,
        );
    }
    updateScroll(o = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === o &&
          (a = !1),
        a && this.instance)
      ) {
        const l = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: o,
          isRoot: l,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : l,
        };
      }
    }
    resetTransform() {
      if (!s) return;
      const o =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        a = this.projectionDelta && !tw(this.projectionDelta),
        l = this.getTransformTemplate(),
        u = l ? l(this.latestValues, "") : void 0,
        c = u !== this.prevTransformTemplateValue;
      o &&
        this.instance &&
        (a || xr(this.latestValues) || c) &&
        (s(this.instance, u),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(o = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return (
        o && (l = this.removeTransform(l)),
        pA(l),
        {
          animationId: this.root.animationId,
          measuredBox: a,
          layoutBox: l,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var u;
      const { visualElement: o } = this.options;
      if (!o) return Ce();
      const a = o.measureViewportBox();
      if (
        !(
          ((u = this.scroll) == null ? void 0 : u.wasRoot) || this.path.some(mA)
        )
      ) {
        const { scroll: c } = this.root;
        c && (hs(a.x, c.offset.x), hs(a.y, c.offset.y));
      }
      return a;
    }
    removeElementScroll(o) {
      var l;
      const a = Ce();
      if ((Tt(a, o), (l = this.scroll) != null && l.wasRoot)) return a;
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u],
          { scroll: d, options: h } = c;
        c !== this.root &&
          d &&
          h.layoutScroll &&
          (d.wasRoot && Tt(a, o), hs(a.x, d.offset.x), hs(a.y, d.offset.y));
      }
      return a;
    }
    applyTransform(o, a = !1) {
      const l = Ce();
      Tt(l, o);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        (!a &&
          c.options.layoutScroll &&
          c.scroll &&
          c !== c.root &&
          ps(l, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
          xr(c.latestValues) && ps(l, c.latestValues));
      }
      return (xr(this.latestValues) && ps(l, this.latestValues), l);
    }
    removeTransform(o) {
      const a = Ce();
      Tt(a, o);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !xr(u.latestValues)) continue;
        hd(u.latestValues) && u.updateSnapshot();
        const c = Ce(),
          d = u.measurePageBox();
        (Tt(c, d),
          qm(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c));
      }
      return (xr(this.latestValues) && qm(a, this.latestValues), a);
    }
    setTargetDelta(o) {
      ((this.targetDelta = o),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0));
    }
    setOptions(o) {
      this.options = {
        ...this.options,
        ...o,
        crossfade: o.crossfade !== void 0 ? o.crossfade : !0,
      };
    }
    clearMeasurements() {
      ((this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1));
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== Re.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(o = !1) {
      var p;
      const a = this.getLead();
      (this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = a.isSharedProjectionDirty));
      const l = !!this.resumingFrom || this !== a;
      if (
        !(
          o ||
          (l && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          ((p = this.parent) != null && p.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: c, layoutId: d } = this.options;
      if (!this.layout || !(c || d)) return;
      this.resolvedRelativeTargetAt = Re.timestamp;
      const h = this.getClosestProjectingParent();
      (h &&
        this.linkedParentVersion !== h.layoutVersion &&
        !h.options.layoutRoot &&
        this.removeRelativeTarget(),
        !this.targetDelta &&
          !this.relativeTarget &&
          (h && h.layout
            ? this.createRelativeTarget(
                h,
                this.layout.layoutBox,
                h.layout.layoutBox,
              )
            : this.removeRelativeTarget()),
        !(!this.relativeTarget && !this.targetDelta) &&
          (this.target ||
            ((this.target = Ce()), (this.targetWithTransforms = Ce())),
          this.relativeTarget &&
          this.relativeTargetOrigin &&
          this.relativeParent &&
          this.relativeParent.target
            ? (this.forceRelativeParentToResolveTarget(),
              VR(this.target, this.relativeTarget, this.relativeParent.target))
            : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : Tt(this.target, this.layout.layoutBox),
                U1(this.target, this.targetDelta))
              : Tt(this.target, this.layout.layoutBox),
          this.attemptToResolveRelativeTarget &&
            ((this.attemptToResolveRelativeTarget = !1),
            h &&
            !!h.resumingFrom == !!this.resumingFrom &&
            !h.options.layoutScroll &&
            h.target &&
            this.animationProgress !== 1
              ? this.createRelativeTarget(h, this.target, h.target)
              : (this.relativeParent = this.relativeTarget = void 0))));
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          hd(this.parent.latestValues) ||
          $1(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    createRelativeTarget(o, a, l) {
      ((this.relativeParent = o),
        (this.linkedParentVersion = o.layoutVersion),
        this.forceRelativeParentToResolveTarget(),
        (this.relativeTarget = Ce()),
        (this.relativeTargetOrigin = Ce()),
        sl(this.relativeTargetOrigin, a, l),
        Tt(this.relativeTarget, this.relativeTargetOrigin));
    }
    removeRelativeTarget() {
      this.relativeParent = this.relativeTarget = void 0;
    }
    calcProjection() {
      var x;
      const o = this.getLead(),
        a = !!this.resumingFrom || this !== o;
      let l = !0;
      if (
        ((this.isProjectionDirty ||
          ((x = this.parent) != null && x.isProjectionDirty)) &&
          (l = !1),
        a &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (l = !1),
        this.resolvedRelativeTargetAt === Re.timestamp && (l = !1),
        l)
      )
        return;
      const { layout: u, layoutId: c } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(u || c))
      )
        return;
      Tt(this.layoutCorrected, this.layout.layoutBox);
      const d = this.treeScale.x,
        h = this.treeScale.y;
      (hR(this.layoutCorrected, this.treeScale, this.path, a),
        o.layout &&
          !o.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((o.target = o.layout.layoutBox), (o.targetWithTransforms = Ce())));
      const { target: p } = o;
      if (!p) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      (!this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (Jm(this.prevProjectionDelta.x, this.projectionDelta.x),
          Jm(this.prevProjectionDelta.y, this.projectionDelta.y)),
        Mi(this.projectionDelta, this.layoutCorrected, p, this.latestValues),
        (this.treeScale.x !== d ||
          this.treeScale.y !== h ||
          !sg(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !sg(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", p)));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(o = !0) {
      var a;
      if (((a = this.options.visualElement) == null || a.scheduleRender(), o)) {
        const l = this.getStack();
        l && l.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      ((this.prevProjectionDelta = fs()),
        (this.projectionDelta = fs()),
        (this.projectionDeltaWithTransform = fs()));
    }
    setAnimationOrigin(o, a = !1) {
      const l = this.snapshot,
        u = l ? l.latestValues : {},
        c = { ...this.latestValues },
        d = fs();
      ((!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !a));
      const h = Ce(),
        p = l ? l.source : void 0,
        x = this.layout ? this.layout.source : void 0,
        v = p !== x,
        b = this.getStack(),
        g = !b || b.members.length <= 1,
        m = !!(v && !g && this.options.crossfade === !0 && !this.path.some(fA));
      this.animationProgress = 0;
      let y;
      ((this.mixTargetDelta = (S) => {
        const C = S / 1e3;
        (dg(d.x, o.x, C),
          dg(d.y, o.y, C),
          this.setTargetDelta(d),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (sl(h, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            dA(this.relativeTarget, this.relativeTargetOrigin, h, C),
            y && $R(this.relativeTarget, y) && (this.isProjectionDirty = !1),
            y || (y = Ce()),
            Tt(y, this.relativeTarget)),
          v &&
            ((this.animationValues = c), HR(c, u, this.latestValues, C, m, g)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = C));
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0));
    }
    startAnimation(o) {
      var a, l, u;
      (this.notifyListeners("animationStart"),
        (a = this.currentAnimation) == null || a.stop(),
        (u = (l = this.resumingFrom) == null ? void 0 : l.currentAnimation) ==
          null || u.stop(),
        this.pendingAnimation &&
          (ir(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = le.update(() => {
          ((wa.hasAnimatedSinceResize = !0),
            this.motionValue || (this.motionValue = $s(0)),
            (this.currentAnimation = QR(this.motionValue, [0, 1e3], {
              ...o,
              velocity: 0,
              isSync: !0,
              onUpdate: (c) => {
                (this.mixTargetDelta(c), o.onUpdate && o.onUpdate(c));
              },
              onStop: () => {},
              onComplete: () => {
                (o.onComplete && o.onComplete(), this.completeAnimation());
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0));
        })));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const o = this.getStack();
      (o && o.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete"));
    }
    finishAnimation() {
      (this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(JR),
        this.currentAnimation.stop()),
        this.completeAnimation());
    }
    applyTransformsToTarget() {
      const o = this.getLead();
      let {
        targetWithTransforms: a,
        target: l,
        layout: u,
        latestValues: c,
      } = o;
      if (!(!a || !l || !u)) {
        if (
          this !== o &&
          this.layout &&
          u &&
          aw(this.options.animationType, this.layout.layoutBox, u.layoutBox)
        ) {
          l = this.target || Ce();
          const d = He(this.layout.layoutBox.x);
          ((l.x.min = o.target.x.min), (l.x.max = l.x.min + d));
          const h = He(this.layout.layoutBox.y);
          ((l.y.min = o.target.y.min), (l.y.max = l.y.min + h));
        }
        (Tt(a, l),
          ps(a, c),
          Mi(this.projectionDeltaWithTransform, this.layoutCorrected, a, c));
      }
    }
    registerSharedNode(o, a) {
      (this.sharedNodes.has(o) || this.sharedNodes.set(o, new ZR()),
        this.sharedNodes.get(o).add(a));
      const u = a.options.initialPromotionConfig;
      a.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity:
          u && u.shouldPreserveFollowOpacity
            ? u.shouldPreserveFollowOpacity(a)
            : void 0,
      });
    }
    isLead() {
      const o = this.getStack();
      return o ? o.lead === this : !0;
    }
    getLead() {
      var a;
      const { layoutId: o } = this.options;
      return o
        ? ((a = this.getStack()) == null ? void 0 : a.lead) || this
        : this;
    }
    getPrevLead() {
      var a;
      const { layoutId: o } = this.options;
      return o ? ((a = this.getStack()) == null ? void 0 : a.prevLead) : void 0;
    }
    getStack() {
      const { layoutId: o } = this.options;
      if (o) return this.root.sharedNodes.get(o);
    }
    promote({ needsReset: o, transition: a, preserveFollowOpacity: l } = {}) {
      const u = this.getStack();
      (u && u.promote(this, l),
        o && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        a && this.setOptions({ transition: a }));
    }
    relegate() {
      const o = this.getStack();
      return o ? o.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: o } = this.options;
      if (!o) return;
      let a = !1;
      const { latestValues: l } = o;
      if (
        ((l.z ||
          l.rotate ||
          l.rotateX ||
          l.rotateY ||
          l.rotateZ ||
          l.skewX ||
          l.skewY) &&
          (a = !0),
        !a)
      )
        return;
      const u = {};
      l.z && Mu("z", o, u, this.animationValues);
      for (let c = 0; c < Au.length; c++)
        (Mu(`rotate${Au[c]}`, o, u, this.animationValues),
          Mu(`skew${Au[c]}`, o, u, this.animationValues));
      o.render();
      for (const c in u)
        (o.setStaticValue(c, u[c]),
          this.animationValues && (this.animationValues[c] = u[c]));
      o.scheduleRender();
    }
    applyProjectionStyles(o, a) {
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) {
        o.visibility = "hidden";
        return;
      }
      const l = this.getTransformTemplate();
      if (this.needsReset) {
        ((this.needsReset = !1),
          (o.visibility = ""),
          (o.opacity = ""),
          (o.pointerEvents = xa(a == null ? void 0 : a.pointerEvents) || ""),
          (o.transform = l ? l(this.latestValues, "") : "none"));
        return;
      }
      const u = this.getLead();
      if (!this.projectionDelta || !this.layout || !u.target) {
        (this.options.layoutId &&
          ((o.opacity =
            this.latestValues.opacity !== void 0
              ? this.latestValues.opacity
              : 1),
          (o.pointerEvents = xa(a == null ? void 0 : a.pointerEvents) || "")),
          this.hasProjected &&
            !xr(this.latestValues) &&
            ((o.transform = l ? l({}, "") : "none"), (this.hasProjected = !1)));
        return;
      }
      o.visibility = "";
      const c = u.animationValues || u.latestValues;
      this.applyTransformsToTarget();
      let d = UR(this.projectionDeltaWithTransform, this.treeScale, c);
      (l && (d = l(c, d)), (o.transform = d));
      const { x: h, y: p } = this.projectionDelta;
      ((o.transformOrigin = `${h.origin * 100}% ${p.origin * 100}% 0`),
        u.animationValues
          ? (o.opacity =
              u === this
                ? (c.opacity ?? this.latestValues.opacity ?? 1)
                : this.preserveOpacity
                  ? this.latestValues.opacity
                  : c.opacityExit)
          : (o.opacity =
              u === this
                ? c.opacity !== void 0
                  ? c.opacity
                  : ""
                : c.opacityExit !== void 0
                  ? c.opacityExit
                  : 0));
      for (const x in md) {
        if (c[x] === void 0) continue;
        const { correct: v, applyTo: b, isCSSVariable: g } = md[x],
          m = d === "none" ? c[x] : v(c[x], u);
        if (b) {
          const y = b.length;
          for (let S = 0; S < y; S++) o[b[S]] = m;
        } else
          g ? (this.options.visualElement.renderState.vars[x] = m) : (o[x] = m);
      }
      this.options.layoutId &&
        (o.pointerEvents =
          u === this ? xa(a == null ? void 0 : a.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      (this.root.nodes.forEach((o) => {
        var a;
        return (a = o.currentAnimation) == null ? void 0 : a.stop();
      }),
        this.root.nodes.forEach(lg),
        this.root.sharedNodes.clear());
    }
  };
}
function tA(e) {
  e.updateLayout();
}
function nA(e) {
  var n;
  const t = ((n = e.resumeFrom) == null ? void 0 : n.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && t && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: s } = e.layout,
      { animationType: i } = e.options,
      o = t.source !== e.layout.source;
    i === "size"
      ? dt((d) => {
          const h = o ? t.measuredBox[d] : t.layoutBox[d],
            p = He(h);
          ((h.min = r[d].min), (h.max = h.min + p));
        })
      : aw(i, t.layoutBox, r) &&
        dt((d) => {
          const h = o ? t.measuredBox[d] : t.layoutBox[d],
            p = He(r[d]);
          ((h.max = h.min + p),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[d].max = e.relativeTarget[d].min + p)));
        });
    const a = fs();
    Mi(a, r, t.layoutBox);
    const l = fs();
    o ? Mi(l, e.applyTransform(s, !0), t.measuredBox) : Mi(l, r, t.layoutBox);
    const u = !tw(a);
    let c = !1;
    if (!e.resumeFrom) {
      const d = e.getClosestProjectingParent();
      if (d && !d.resumeFrom) {
        const { snapshot: h, layout: p } = d;
        if (h && p) {
          const x = Ce();
          sl(x, t.layoutBox, h.layoutBox);
          const v = Ce();
          (sl(v, r, p.layoutBox),
            nw(x, v) || (c = !0),
            d.options.layoutRoot &&
              ((e.relativeTarget = v),
              (e.relativeTargetOrigin = x),
              (e.relativeParent = d)));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: t,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: u,
      hasRelativeLayoutChanged: c,
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function rA(e) {
  e.parent &&
    (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
    e.isSharedProjectionDirty ||
      (e.isSharedProjectionDirty = !!(
        e.isProjectionDirty ||
        e.parent.isProjectionDirty ||
        e.parent.isSharedProjectionDirty
      )),
    e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function sA(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function iA(e) {
  e.clearSnapshot();
}
function lg(e) {
  e.clearMeasurements();
}
function ug(e) {
  e.isLayoutDirty = !1;
}
function oA(e) {
  const { visualElement: t } = e.options;
  (t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform());
}
function cg(e) {
  (e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0));
}
function aA(e) {
  e.resolveTargetDelta();
}
function lA(e) {
  e.calcProjection();
}
function uA(e) {
  e.resetSkewAndRotation();
}
function cA(e) {
  e.removeLeadSnapshot();
}
function dg(e, t, n) {
  ((e.translate = he(t.translate, 0, n)),
    (e.scale = he(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint));
}
function fg(e, t, n, r) {
  ((e.min = he(t.min, n.min, r)), (e.max = he(t.max, n.max, r)));
}
function dA(e, t, n, r) {
  (fg(e.x, t.x, n.x, r), fg(e.y, t.y, n.y, r));
}
function fA(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const hA = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  hg = (e) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(e),
  pg = hg("applewebkit/") && !hg("chrome/") ? Math.round : vt;
function mg(e) {
  ((e.min = pg(e.min)), (e.max = pg(e.max)));
}
function pA(e) {
  (mg(e.x), mg(e.y));
}
function aw(e, t, n) {
  return (
    e === "position" || (e === "preserve-aspect" && !FR(rg(t), rg(n), 0.2))
  );
}
function mA(e) {
  var t;
  return e !== e.root && ((t = e.scroll) == null ? void 0 : t.wasRoot);
}
const gA = ow({
    attachResizeListener: (e, t) => lo(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  Du = { current: void 0 },
  lw = ow({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!Du.current) {
        const e = new gA({});
        (e.mount(window), e.setOptions({ layoutScroll: !0 }), (Du.current = e));
      }
      return Du.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  uh = w.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  });
function gg(e, t) {
  if (typeof e == "function") return e(t);
  e != null && (e.current = t);
}
function yA(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((s) => {
      const i = gg(s, t);
      return (!n && typeof i == "function" && (n = !0), i);
    });
    if (n)
      return () => {
        for (let s = 0; s < r.length; s++) {
          const i = r[s];
          typeof i == "function" ? i() : gg(e[s], null);
        }
      };
  };
}
function vA(...e) {
  return w.useCallback(yA(...e), e);
}
class xA extends w.Component {
  getSnapshotBeforeUpdate(t) {
    const n = this.props.childRef.current;
    if (n && t.isPresent && !this.props.isPresent) {
      const r = n.offsetParent,
        s = (A1(r) && r.offsetWidth) || 0,
        i = this.props.sizeRef.current;
      ((i.height = n.offsetHeight || 0),
        (i.width = n.offsetWidth || 0),
        (i.top = n.offsetTop),
        (i.left = n.offsetLeft),
        (i.right = s - i.width - i.left));
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function wA({ children: e, isPresent: t, anchorX: n, root: r }) {
  var c;
  const s = w.useId(),
    i = w.useRef(null),
    o = w.useRef({ width: 0, height: 0, top: 0, left: 0, right: 0 }),
    { nonce: a } = w.useContext(uh),
    l =
      ((c = e.props) == null ? void 0 : c.ref) ?? (e == null ? void 0 : e.ref),
    u = vA(i, l);
  return (
    w.useInsertionEffect(() => {
      const { width: d, height: h, top: p, left: x, right: v } = o.current;
      if (t || !i.current || !d || !h) return;
      const b = n === "left" ? `left: ${x}` : `right: ${v}`;
      i.current.dataset.motionPopId = s;
      const g = document.createElement("style");
      a && (g.nonce = a);
      const m = r ?? document.head;
      return (
        m.appendChild(g),
        g.sheet &&
          g.sheet.insertRule(`
          [data-motion-pop-id="${s}"] {
            position: absolute !important;
            width: ${d}px !important;
            height: ${h}px !important;
            ${b}px !important;
            top: ${p}px !important;
          }
        `),
        () => {
          m.contains(g) && m.removeChild(g);
        }
      );
    }, [t]),
    f.jsx(xA, {
      isPresent: t,
      childRef: i,
      sizeRef: o,
      children: w.cloneElement(e, { ref: u }),
    })
  );
}
const bA = ({
  children: e,
  initial: t,
  isPresent: n,
  onExitComplete: r,
  custom: s,
  presenceAffectsLayout: i,
  mode: o,
  anchorX: a,
  root: l,
}) => {
  const u = If(SA),
    c = w.useId();
  let d = !0,
    h = w.useMemo(
      () => (
        (d = !1),
        {
          id: c,
          initial: t,
          isPresent: n,
          custom: s,
          onExitComplete: (p) => {
            u.set(p, !0);
            for (const x of u.values()) if (!x) return;
            r && r();
          },
          register: (p) => (u.set(p, !1), () => u.delete(p)),
        }
      ),
      [n, u, r],
    );
  return (
    i && d && (h = { ...h }),
    w.useMemo(() => {
      u.forEach((p, x) => u.set(x, !1));
    }, [n]),
    w.useEffect(() => {
      !n && !u.size && r && r();
    }, [n]),
    o === "popLayout" &&
      (e = f.jsx(wA, { isPresent: n, anchorX: a, root: l, children: e })),
    f.jsx(Dl.Provider, { value: h, children: e })
  );
};
function SA() {
  return new Map();
}
function uw(e = !0) {
  const t = w.useContext(Dl);
  if (t === null) return [!0, null];
  const { isPresent: n, onExitComplete: r, register: s } = t,
    i = w.useId();
  w.useEffect(() => {
    if (e) return s(i);
  }, [e]);
  const o = w.useCallback(() => e && r && r(i), [i, r, e]);
  return !n && r ? [!1, o] : [!0];
}
const ea = (e) => e.key || "";
function yg(e) {
  const t = [];
  return (
    w.Children.forEach(e, (n) => {
      w.isValidElement(n) && t.push(n);
    }),
    t
  );
}
const cw = ({
    children: e,
    custom: t,
    initial: n = !0,
    onExitComplete: r,
    presenceAffectsLayout: s = !0,
    mode: i = "sync",
    propagate: o = !1,
    anchorX: a = "left",
    root: l,
  }) => {
    const [u, c] = uw(o),
      d = w.useMemo(() => yg(e), [e]),
      h = o && !u ? [] : d.map(ea),
      p = w.useRef(!0),
      x = w.useRef(d),
      v = If(() => new Map()),
      b = w.useRef(new Set()),
      [g, m] = w.useState(d),
      [y, S] = w.useState(d);
    zx(() => {
      ((p.current = !1), (x.current = d));
      for (let P = 0; P < y.length; P++) {
        const T = ea(y[P]);
        h.includes(T)
          ? (v.delete(T), b.current.delete(T))
          : v.get(T) !== !0 && v.set(T, !1);
      }
    }, [y, h.length, h.join("-")]);
    const C = [];
    if (d !== g) {
      let P = [...d];
      for (let T = 0; T < y.length; T++) {
        const R = y[T],
          A = ea(R);
        h.includes(A) || (P.splice(T, 0, R), C.push(R));
      }
      return (i === "wait" && C.length && (P = C), S(yg(P)), m(d), null);
    }
    const { forceRender: E } = w.useContext(Of);
    return f.jsx(f.Fragment, {
      children: y.map((P) => {
        const T = ea(P),
          R = o && !u ? !1 : d === y || h.includes(T),
          A = () => {
            if (b.current.has(T)) return;
            if ((b.current.add(T), v.has(T))) v.set(T, !0);
            else return;
            let z = !0;
            (v.forEach((I) => {
              I || (z = !1);
            }),
              z &&
                (E == null || E(),
                S(x.current),
                o && (c == null || c()),
                r && r()));
          };
        return f.jsx(
          bA,
          {
            isPresent: R,
            initial: !p.current || n ? void 0 : !1,
            custom: t,
            presenceAffectsLayout: s,
            mode: i,
            root: l,
            onExitComplete: R ? void 0 : A,
            anchorX: a,
            children: P,
          },
          T,
        );
      }),
    });
  },
  dw = w.createContext({ strict: !1 }),
  vg = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  };
let xg = !1;
function CA() {
  if (xg) return;
  const e = {};
  for (const t in vg) e[t] = { isEnabled: (n) => vg[t].some((r) => !!n[r]) };
  (_1(e), (xg = !0));
}
function fw() {
  return (CA(), uR());
}
function EA(e) {
  const t = fw();
  for (const n in e) t[n] = { ...t[n], ...e[n] };
  _1(t);
}
const PA = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport",
]);
function il(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    e.startsWith("onLayout") ||
    PA.has(e)
  );
}
let hw = (e) => !il(e);
function TA(e) {
  typeof e == "function" && (hw = (t) => (t.startsWith("on") ? !il(t) : e(t)));
}
try {
  TA(require("@emotion/is-prop-valid").default);
} catch {}
function kA(e, t, n) {
  const r = {};
  for (const s in e)
    (s === "values" && typeof e.values == "object") ||
      ((hw(s) ||
        (n === !0 && il(s)) ||
        (!t && !il(s)) ||
        (e.draggable && s.startsWith("onDrag"))) &&
        (r[s] = e[s]));
  return r;
}
const Fl = w.createContext({});
function jA(e, t) {
  if (Il(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || ao(n) ? n : void 0,
      animate: ao(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function NA(e) {
  const { initial: t, animate: n } = jA(e, w.useContext(Fl));
  return w.useMemo(() => ({ initial: t, animate: n }), [wg(t), wg(n)]);
}
function wg(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const ch = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function pw(e, t, n) {
  for (const r in t) !_e(t[r]) && !K1(r, n) && (e[r] = t[r]);
}
function RA({ transformTemplate: e }, t) {
  return w.useMemo(() => {
    const n = ch();
    return (ah(n, t, e), Object.assign({}, n.vars, n.style));
  }, [t]);
}
function AA(e, t) {
  const n = e.style || {},
    r = {};
  return (pw(r, n, e), Object.assign(r, RA(e, t)), r);
}
function MA(e, t) {
  const n = {},
    r = AA(e, t);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((n.draggable = !1),
      (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none"),
      (r.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (n.tabIndex = 0),
    (n.style = r),
    n
  );
}
const mw = () => ({ ...ch(), attrs: {} });
function DA(e, t, n, r) {
  const s = w.useMemo(() => {
    const i = mw();
    return (
      Y1(i, t, Q1(r), e.transformTemplate, e.style),
      { ...i.attrs, style: { ...i.style } }
    );
  }, [t]);
  if (e.style) {
    const i = {};
    (pw(i, e.style, e), (s.style = { ...i, ...s.style }));
  }
  return s;
}
const LA = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function dh(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(LA.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
function OA(e, t, n, { latestValues: r }, s, i = !1, o) {
  const l = ((o ?? dh(e)) ? DA : MA)(t, r, s, e),
    u = kA(t, typeof e == "string", i),
    c = e !== w.Fragment ? { ...u, ...l, ref: n } : {},
    { children: d } = t,
    h = w.useMemo(() => (_e(d) ? d.get() : d), [d]);
  return w.createElement(e, { ...c, children: h });
}
function IA({ scrapeMotionValuesFromProps: e, createRenderState: t }, n, r, s) {
  return { latestValues: FA(n, r, s, e), renderState: t() };
}
function FA(e, t, n, r) {
  const s = {},
    i = r(e, {});
  for (const h in i) s[h] = xa(i[h]);
  let { initial: o, animate: a } = e;
  const l = Il(e),
    u = V1(e);
  t &&
    u &&
    !l &&
    e.inherit !== !1 &&
    (o === void 0 && (o = t.initial), a === void 0 && (a = t.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || o === !1;
  const d = c ? a : o;
  if (d && typeof d != "boolean" && !Ol(d)) {
    const h = Array.isArray(d) ? d : [d];
    for (let p = 0; p < h.length; p++) {
      const x = eh(e, h[p]);
      if (x) {
        const { transitionEnd: v, transition: b, ...g } = x;
        for (const m in g) {
          let y = g[m];
          if (Array.isArray(y)) {
            const S = c ? y.length - 1 : 0;
            y = y[S];
          }
          y !== null && (s[m] = y);
        }
        for (const m in v) s[m] = v[m];
      }
    }
  }
  return s;
}
const gw = (e) => (t, n) => {
    const r = w.useContext(Fl),
      s = w.useContext(Dl),
      i = () => IA(e, t, r, s);
    return n ? i() : If(i);
  },
  VA = gw({ scrapeMotionValuesFromProps: lh, createRenderState: ch }),
  _A = gw({ scrapeMotionValuesFromProps: X1, createRenderState: mw }),
  zA = Symbol.for("motionComponentSymbol");
function BA(e, t, n) {
  const r = w.useRef(n);
  w.useInsertionEffect(() => {
    r.current = n;
  });
  const s = w.useRef(null);
  return w.useCallback(
    (i) => {
      var a;
      (i && ((a = e.onMount) == null || a.call(e, i)),
        t && (i ? t.mount(i) : t.unmount()));
      const o = r.current;
      if (typeof o == "function")
        if (i) {
          const l = o(i);
          typeof l == "function" && (s.current = l);
        } else s.current ? (s.current(), (s.current = null)) : o(i);
      else o && (o.current = i);
    },
    [t],
  );
}
const yw = w.createContext({});
function xi(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function $A(e, t, n, r, s, i) {
  var b, g;
  const { visualElement: o } = w.useContext(Fl),
    a = w.useContext(dw),
    l = w.useContext(Dl),
    u = w.useContext(uh).reducedMotion,
    c = w.useRef(null);
  ((r = r || a.renderer),
    !c.current &&
      r &&
      (c.current = r(e, {
        visualState: t,
        parent: o,
        props: n,
        presenceContext: l,
        blockInitialAnimation: l ? l.initial === !1 : !1,
        reducedMotionConfig: u,
        isSVG: i,
      })));
  const d = c.current,
    h = w.useContext(yw);
  d &&
    !d.projection &&
    s &&
    (d.type === "html" || d.type === "svg") &&
    UA(c.current, n, s, h);
  const p = w.useRef(!1);
  w.useInsertionEffect(() => {
    d && p.current && d.update(n, l);
  });
  const x = n[C1],
    v = w.useRef(
      !!x &&
        !((b = window.MotionHandoffIsComplete) != null && b.call(window, x)) &&
        ((g = window.MotionHasOptimisedAnimation) == null
          ? void 0
          : g.call(window, x)),
    );
  return (
    zx(() => {
      d &&
        ((p.current = !0),
        (window.MotionIsMounted = !0),
        d.updateFeatures(),
        d.scheduleRenderMicrotask(),
        v.current && d.animationState && d.animationState.animateChanges());
    }),
    w.useEffect(() => {
      d &&
        (!v.current && d.animationState && d.animationState.animateChanges(),
        v.current &&
          (queueMicrotask(() => {
            var m;
            (m = window.MotionHandoffMarkAsComplete) == null ||
              m.call(window, x);
          }),
          (v.current = !1)),
        (d.enteringChildren = void 0));
    }),
    d
  );
}
function UA(e, t, n, r) {
  const {
    layoutId: s,
    layout: i,
    drag: o,
    dragConstraints: a,
    layoutScroll: l,
    layoutRoot: u,
    layoutCrossfade: c,
  } = t;
  ((e.projection = new n(
    e.latestValues,
    t["data-framer-portal-id"] ? void 0 : vw(e.parent),
  )),
    e.projection.setOptions({
      layoutId: s,
      layout: i,
      alwaysMeasureLayout: !!o || (a && xi(a)),
      visualElement: e,
      animationType: typeof i == "string" ? i : "both",
      initialPromotionConfig: r,
      crossfade: c,
      layoutScroll: l,
      layoutRoot: u,
    }));
}
function vw(e) {
  if (e) return e.options.allowProjection !== !1 ? e.projection : vw(e.parent);
}
function Lu(e, { forwardMotionProps: t = !1, type: n } = {}, r, s) {
  r && EA(r);
  const i = n ? n === "svg" : dh(e),
    o = i ? _A : VA;
  function a(u, c) {
    let d;
    const h = { ...w.useContext(uh), ...u, layoutId: WA(u) },
      { isStatic: p } = h,
      x = NA(u),
      v = o(u, p);
    if (!p && _x) {
      HA();
      const b = KA(h);
      ((d = b.MeasureLayout),
        (x.visualElement = $A(e, v, h, s, b.ProjectionNode, i)));
    }
    return f.jsxs(Fl.Provider, {
      value: x,
      children: [
        d && x.visualElement
          ? f.jsx(d, { visualElement: x.visualElement, ...h })
          : null,
        OA(e, u, BA(v, x.visualElement, c), v, p, t, i),
      ],
    });
  }
  a.displayName = `motion.${typeof e == "string" ? e : `create(${e.displayName ?? e.name ?? ""})`}`;
  const l = w.forwardRef(a);
  return ((l[zA] = e), l);
}
function WA({ layoutId: e }) {
  const t = w.useContext(Of).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function HA(e, t) {
  w.useContext(dw).strict;
}
function KA(e) {
  const t = fw(),
    { drag: n, layout: r } = t;
  if (!n && !r) return {};
  const s = { ...n, ...r };
  return {
    MeasureLayout:
      (n != null && n.isEnabled(e)) || (r != null && r.isEnabled(e))
        ? s.MeasureLayout
        : void 0,
    ProjectionNode: s.ProjectionNode,
  };
}
function YA(e, t) {
  if (typeof Proxy > "u") return Lu;
  const n = new Map(),
    r = (i, o) => Lu(i, o, e, t),
    s = (i, o) => r(i, o);
  return new Proxy(s, {
    get: (i, o) =>
      o === "create"
        ? r
        : (n.has(o) || n.set(o, Lu(o, void 0, e, t)), n.get(o)),
  });
}
const GA = (e, t) =>
  (t.isSVG ?? dh(e))
    ? new TR(t)
    : new wR(t, { allowProjection: e !== w.Fragment });
class QA extends dr {
  constructor(t) {
    (super(t), t.animationState || (t.animationState = AR(t)));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    Ol(t) && (this.unmountControls = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var t;
    (this.node.animationState.reset(),
      (t = this.unmountControls) == null || t.call(this));
  }
}
let XA = 0;
class qA extends dr {
  constructor() {
    (super(...arguments), (this.id = XA++));
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: t, onExitComplete: n } = this.node.presenceContext,
      { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === r) return;
    const s = this.node.animationState.setActive("exit", !t);
    n &&
      !t &&
      s.then(() => {
        n(this.id);
      });
  }
  mount() {
    const { register: t, onExitComplete: n } = this.node.presenceContext || {};
    (n && n(this.id), t && (this.unmount = t(this.id)));
  }
  unmount() {}
}
const ZA = { animation: { Feature: QA }, exit: { Feature: qA } };
function Po(e) {
  return { point: { x: e.pageX, y: e.pageY } };
}
const JA = (e) => (t) => sh(t) && e(t, Po(t));
function Di(e, t, n, r) {
  return lo(e, t, JA(n), r);
}
const xw = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  bg = (e, t) => Math.abs(e - t);
function eM(e, t) {
  const n = bg(e.x, t.x),
    r = bg(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
const Sg = new Set(["auto", "scroll"]);
class ww {
  constructor(
    t,
    n,
    {
      transformPagePoint: r,
      contextWindow: s = window,
      dragSnapToOrigin: i = !1,
      distanceThreshold: o = 3,
      element: a,
    } = {},
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.scrollPositions = new Map()),
      (this.removeScrollListeners = null),
      (this.onElementScroll = (p) => {
        this.handleScroll(p.target);
      }),
      (this.onWindowScroll = () => {
        this.handleScroll(window);
      }),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const p = Iu(this.lastMoveEventInfo, this.history),
          x = this.startEvent !== null,
          v = eM(p.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
        if (!x && !v) return;
        const { point: b } = p,
          { timestamp: g } = Re;
        this.history.push({ ...b, timestamp: g });
        const { onStart: m, onMove: y } = this.handlers;
        (x ||
          (m && m(this.lastMoveEvent, p),
          (this.startEvent = this.lastMoveEvent)),
          y && y(this.lastMoveEvent, p));
      }),
      (this.handlePointerMove = (p, x) => {
        ((this.lastMoveEvent = p),
          (this.lastMoveEventInfo = Ou(x, this.transformPagePoint)),
          le.update(this.updatePoint, !0));
      }),
      (this.handlePointerUp = (p, x) => {
        this.end();
        const { onEnd: v, onSessionEnd: b, resumeAnimation: g } = this.handlers;
        if (
          ((this.dragSnapToOrigin || !this.startEvent) && g && g(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const m = Iu(
          p.type === "pointercancel"
            ? this.lastMoveEventInfo
            : Ou(x, this.transformPagePoint),
          this.history,
        );
        (this.startEvent && v && v(p, m), b && b(p, m));
      }),
      !sh(t))
    )
      return;
    ((this.dragSnapToOrigin = i),
      (this.handlers = n),
      (this.transformPagePoint = r),
      (this.distanceThreshold = o),
      (this.contextWindow = s || window));
    const l = Po(t),
      u = Ou(l, this.transformPagePoint),
      { point: c } = u,
      { timestamp: d } = Re;
    this.history = [{ ...c, timestamp: d }];
    const { onSessionStart: h } = n;
    (h && h(t, Iu(u, this.history)),
      (this.removeListeners = So(
        Di(this.contextWindow, "pointermove", this.handlePointerMove),
        Di(this.contextWindow, "pointerup", this.handlePointerUp),
        Di(this.contextWindow, "pointercancel", this.handlePointerUp),
      )),
      a && this.startScrollTracking(a));
  }
  startScrollTracking(t) {
    let n = t.parentElement;
    for (; n; ) {
      const r = getComputedStyle(n);
      ((Sg.has(r.overflowX) || Sg.has(r.overflowY)) &&
        this.scrollPositions.set(n, { x: n.scrollLeft, y: n.scrollTop }),
        (n = n.parentElement));
    }
    (this.scrollPositions.set(window, { x: window.scrollX, y: window.scrollY }),
      window.addEventListener("scroll", this.onElementScroll, {
        capture: !0,
        passive: !0,
      }),
      window.addEventListener("scroll", this.onWindowScroll, { passive: !0 }),
      (this.removeScrollListeners = () => {
        (window.removeEventListener("scroll", this.onElementScroll, {
          capture: !0,
        }),
          window.removeEventListener("scroll", this.onWindowScroll));
      }));
  }
  handleScroll(t) {
    const n = this.scrollPositions.get(t);
    if (!n) return;
    const r = t === window,
      s = r
        ? { x: window.scrollX, y: window.scrollY }
        : { x: t.scrollLeft, y: t.scrollTop },
      i = { x: s.x - n.x, y: s.y - n.y };
    (i.x === 0 && i.y === 0) ||
      (r
        ? this.lastMoveEventInfo &&
          ((this.lastMoveEventInfo.point.x += i.x),
          (this.lastMoveEventInfo.point.y += i.y))
        : this.history.length > 0 &&
          ((this.history[0].x -= i.x), (this.history[0].y -= i.y)),
      this.scrollPositions.set(t, s),
      le.update(this.updatePoint, !0));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    (this.removeListeners && this.removeListeners(),
      this.removeScrollListeners && this.removeScrollListeners(),
      this.scrollPositions.clear(),
      ir(this.updatePoint));
  }
}
function Ou(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Cg(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Iu({ point: e }, t) {
  return {
    point: e,
    delta: Cg(e, bw(t)),
    offset: Cg(e, tM(t)),
    velocity: nM(t, 0.1),
  };
}
function tM(e) {
  return e[0];
}
function bw(e) {
  return e[e.length - 1];
}
function nM(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const s = bw(e);
  for (; n >= 0 && ((r = e[n]), !(s.timestamp - r.timestamp > Xt(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  const i = gt(s.timestamp - r.timestamp);
  if (i === 0) return { x: 0, y: 0 };
  const o = { x: (s.x - r.x) / i, y: (s.y - r.y) / i };
  return (o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o);
}
function rM(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? he(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? he(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function Eg(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function sM(e, { top: t, left: n, bottom: r, right: s }) {
  return { x: Eg(e.x, n, s), y: Eg(e.y, t, r) };
}
function Pg(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return (
    t.max - t.min < e.max - e.min && ([n, r] = [r, n]),
    { min: n, max: r }
  );
}
function iM(e, t) {
  return { x: Pg(e.x, t.x), y: Pg(e.y, t.y) };
}
function oM(e, t) {
  let n = 0.5;
  const r = He(e),
    s = He(t);
  return (
    s > r
      ? (n = so(t.min, t.max - r, e.min))
      : r > s && (n = so(e.min, e.max - s, t.min)),
    Jt(0, 1, n)
  );
}
function aM(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
const gd = 0.35;
function lM(e = gd) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = gd),
    { x: Tg(e, "left", "right"), y: Tg(e, "top", "bottom") }
  );
}
function Tg(e, t, n) {
  return { min: kg(e, t), max: kg(e, n) };
}
function kg(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const uM = new WeakMap();
class cM {
  constructor(t) {
    ((this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = Ce()),
      (this.latestPointerEvent = null),
      (this.latestPanInfo = null),
      (this.visualElement = t));
  }
  start(t, { snapToCursor: n = !1, distanceThreshold: r } = {}) {
    const { presenceContext: s } = this.visualElement;
    if (s && s.isPresent === !1) return;
    const i = (d) => {
        n
          ? (this.stopAnimation(), this.snapToCursor(Po(d).point))
          : this.pauseAnimation();
      },
      o = (d, h) => {
        this.stopAnimation();
        const { drag: p, dragPropagation: x, onDragStart: v } = this.getProps();
        if (
          p &&
          !x &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = qN(p)),
          !this.openDragLock)
        )
          return;
        ((this.latestPointerEvent = d),
          (this.latestPanInfo = h),
          (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          dt((g) => {
            let m = this.getAxisMotionValue(g).get() || 0;
            if (qt.test(m)) {
              const { projection: y } = this.visualElement;
              if (y && y.layout) {
                const S = y.layout.layoutBox[g];
                S && (m = He(S) * (parseFloat(m) / 100));
              }
            }
            this.originPoint[g] = m;
          }),
          v && le.postRender(() => v(d, h)),
          ud(this.visualElement, "transform"));
        const { animationState: b } = this.visualElement;
        b && b.setActive("whileDrag", !0);
      },
      a = (d, h) => {
        ((this.latestPointerEvent = d), (this.latestPanInfo = h));
        const {
          dragPropagation: p,
          dragDirectionLock: x,
          onDirectionLock: v,
          onDrag: b,
        } = this.getProps();
        if (!p && !this.openDragLock) return;
        const { offset: g } = h;
        if (x && this.currentDirection === null) {
          ((this.currentDirection = dM(g)),
            this.currentDirection !== null && v && v(this.currentDirection));
          return;
        }
        (this.updateAxis("x", h.point, g),
          this.updateAxis("y", h.point, g),
          this.visualElement.render(),
          b && b(d, h));
      },
      l = (d, h) => {
        ((this.latestPointerEvent = d),
          (this.latestPanInfo = h),
          this.stop(d, h),
          (this.latestPointerEvent = null),
          (this.latestPanInfo = null));
      },
      u = () =>
        dt((d) => {
          var h;
          return (
            this.getAnimationState(d) === "paused" &&
            ((h = this.getAxisMotionValue(d).animation) == null
              ? void 0
              : h.play())
          );
        }),
      { dragSnapToOrigin: c } = this.getProps();
    this.panSession = new ww(
      t,
      {
        onSessionStart: i,
        onStart: o,
        onMove: a,
        onSessionEnd: l,
        resumeAnimation: u,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: c,
        distanceThreshold: r,
        contextWindow: xw(this.visualElement),
        element: this.visualElement.current,
      },
    );
  }
  stop(t, n) {
    const r = t || this.latestPointerEvent,
      s = n || this.latestPanInfo,
      i = this.isDragging;
    if ((this.cancel(), !i || !s || !r)) return;
    const { velocity: o } = s;
    this.startAnimation(o);
    const { onDragEnd: a } = this.getProps();
    a && le.postRender(() => a(r, s));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    (t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0));
    const { dragPropagation: r } = this.getProps();
    (!r &&
      this.openDragLock &&
      (this.openDragLock(), (this.openDragLock = null)),
      n && n.setActive("whileDrag", !1));
  }
  updateAxis(t, n, r) {
    const { drag: s } = this.getProps();
    if (!r || !ta(t, s, this.currentDirection)) return;
    const i = this.getAxisMotionValue(t);
    let o = this.originPoint[t] + r[t];
    (this.constraints &&
      this.constraints[t] &&
      (o = rM(o, this.constraints[t], this.elastic[t])),
      i.set(o));
  }
  resolveConstraints() {
    var i;
    const { dragConstraints: t, dragElastic: n } = this.getProps(),
      r =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (i = this.visualElement.projection) == null
            ? void 0
            : i.layout,
      s = this.constraints;
    (t && xi(t)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : t && r
        ? (this.constraints = sM(r.layoutBox, t))
        : (this.constraints = !1),
      (this.elastic = lM(n)),
      s !== this.constraints &&
        r &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        dt((o) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(o) &&
            (this.constraints[o] = aM(r.layoutBox[o], this.constraints[o]));
        }));
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !xi(t)) return !1;
    const r = t.current;
    Bs(
      r !== null,
      "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.",
      "drag-constraints-ref",
    );
    const { projection: s } = this.visualElement;
    if (!s || !s.layout) return !1;
    const i = pR(r, s.root, this.visualElement.getTransformPagePoint());
    let o = iM(s.layout.layoutBox, i);
    if (n) {
      const a = n(dR(o));
      ((this.hasMutatedConstraints = !!a), a && (o = B1(a)));
    }
    return o;
  }
  startAnimation(t) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: s,
        dragTransition: i,
        dragSnapToOrigin: o,
        onDragTransitionEnd: a,
      } = this.getProps(),
      l = this.constraints || {},
      u = dt((c) => {
        if (!ta(c, n, this.currentDirection)) return;
        let d = (l && l[c]) || {};
        o && (d = { min: 0, max: 0 });
        const h = s ? 200 : 1e6,
          p = s ? 40 : 1e7,
          x = {
            type: "inertia",
            velocity: r ? t[c] : 0,
            bounceStiffness: h,
            bounceDamping: p,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...i,
            ...d,
          };
        return this.startAxisValueAnimation(c, x);
      });
    return Promise.all(u).then(a);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return (
      ud(this.visualElement, t),
      r.start(Jf(t, r, 0, n, this.visualElement, !1))
    );
  }
  stopAnimation() {
    dt((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    dt((t) => {
      var n;
      return (n = this.getAxisMotionValue(t).animation) == null
        ? void 0
        : n.pause();
    });
  }
  getAnimationState(t) {
    var n;
    return (n = this.getAxisMotionValue(t).animation) == null
      ? void 0
      : n.state;
  }
  getAxisMotionValue(t) {
    const n = `_drag${t.toUpperCase()}`,
      r = this.visualElement.getProps(),
      s = r[n];
    return (
      s ||
      this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    );
  }
  snapToCursor(t) {
    dt((n) => {
      const { drag: r } = this.getProps();
      if (!ta(n, r, this.currentDirection)) return;
      const { projection: s } = this.visualElement,
        i = this.getAxisMotionValue(n);
      if (s && s.layout) {
        const { min: o, max: a } = s.layout.layoutBox[n],
          l = i.get() || 0;
        i.set(t[n] - he(o, a, 0.5) + l);
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!xi(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const s = { x: 0, y: 0 };
    dt((o) => {
      const a = this.getAxisMotionValue(o);
      if (a && this.constraints !== !1) {
        const l = a.get();
        s[o] = oM({ min: l, max: l }, this.constraints[o]);
      }
    });
    const { transformTemplate: i } = this.visualElement.getProps();
    ((this.visualElement.current.style.transform = i ? i({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      dt((o) => {
        if (!ta(o, t, null)) return;
        const a = this.getAxisMotionValue(o),
          { min: l, max: u } = this.constraints[o];
        a.set(he(l, u, s[o]));
      }));
  }
  addListeners() {
    if (!this.visualElement.current) return;
    uM.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = Di(t, "pointerdown", (l) => {
        const { drag: u, dragListener: c = !0 } = this.getProps();
        u && c && !O1(l.target) && this.start(l);
      }),
      r = () => {
        const { dragConstraints: l } = this.getProps();
        xi(l) && l.current && (this.constraints = this.resolveRefConstraints());
      },
      { projection: s } = this.visualElement,
      i = s.addEventListener("measure", r);
    (s && !s.layout && (s.root && s.root.updateScroll(), s.updateLayout()),
      le.read(r));
    const o = lo(window, "resize", () => this.scalePositionWithinConstraints()),
      a = s.addEventListener(
        "didUpdate",
        ({ delta: l, hasLayoutChanged: u }) => {
          this.isDragging &&
            u &&
            (dt((c) => {
              const d = this.getAxisMotionValue(c);
              d &&
                ((this.originPoint[c] += l[c].translate),
                d.set(d.get() + l[c].translate));
            }),
            this.visualElement.render());
        },
      );
    return () => {
      (o(), n(), i(), a && a());
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: s = !1,
        dragConstraints: i = !1,
        dragElastic: o = gd,
        dragMomentum: a = !0,
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: s,
      dragConstraints: i,
      dragElastic: o,
      dragMomentum: a,
    };
  }
}
function ta(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function dM(e, t = 10) {
  let n = null;
  return (Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n);
}
class fM extends dr {
  constructor(t) {
    (super(t),
      (this.removeGroupControls = vt),
      (this.removeListeners = vt),
      (this.controls = new cM(t)));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    (t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || vt));
  }
  update() {
    const { dragControls: t } = this.node.getProps(),
      { dragControls: n } = this.node.prevProps || {};
    t !== n &&
      (this.removeGroupControls(),
      t && (this.removeGroupControls = t.subscribe(this.controls)));
  }
  unmount() {
    (this.removeGroupControls(), this.removeListeners());
  }
}
const jg = (e) => (t, n) => {
  e && le.postRender(() => e(t, n));
};
class hM extends dr {
  constructor() {
    (super(...arguments), (this.removePointerDownListener = vt));
  }
  onPointerDown(t) {
    this.session = new ww(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: xw(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: n,
      onPan: r,
      onPanEnd: s,
    } = this.node.getProps();
    return {
      onSessionStart: jg(t),
      onStart: jg(n),
      onMove: r,
      onEnd: (i, o) => {
        (delete this.session, s && le.postRender(() => s(i, o)));
      },
    };
  }
  mount() {
    this.removePointerDownListener = Di(this.node.current, "pointerdown", (t) =>
      this.onPointerDown(t),
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    (this.removePointerDownListener(), this.session && this.session.end());
  }
}
let Fu = !1;
class pM extends w.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
        layoutId: s,
      } = this.props,
      { projection: i } = t;
    (i &&
      (n.group && n.group.add(i),
      r && r.register && s && r.register(i),
      Fu && i.root.didUpdate(),
      i.addEventListener("animationComplete", () => {
        this.safeToRemove();
      }),
      i.setOptions({
        ...i.options,
        onExitComplete: () => this.safeToRemove(),
      })),
      (wa.hasEverUpdated = !0));
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: n,
        visualElement: r,
        drag: s,
        isPresent: i,
      } = this.props,
      { projection: o } = r;
    return (
      o &&
        ((o.isPresent = i),
        (Fu = !0),
        s || t.layoutDependency !== n || n === void 0 || t.isPresent !== i
          ? o.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== i &&
          (i
            ? o.promote()
            : o.relegate() ||
              le.postRender(() => {
                const a = o.getStack();
                (!a || !a.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      rh.postRender(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
      } = this.props,
      { projection: s } = t;
    ((Fu = !0),
      s &&
        (s.scheduleCheckAfterUnmount(),
        n && n.group && n.group.remove(s),
        r && r.deregister && r.deregister(s)));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function Sw(e) {
  const [t, n] = uw(),
    r = w.useContext(Of);
  return f.jsx(pM, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: w.useContext(yw),
    isPresent: t,
    safeToRemove: n,
  });
}
const mM = {
  pan: { Feature: hM },
  drag: { Feature: fM, ProjectionNode: lw, MeasureLayout: Sw },
};
function Ng(e, t, n) {
  const { props: r } = e;
  e.animationState &&
    r.whileHover &&
    e.animationState.setActive("whileHover", n === "Start");
  const s = "onHover" + n,
    i = r[s];
  i && le.postRender(() => i(t, Po(t)));
}
class gM extends dr {
  mount() {
    const { current: t } = this.node;
    t &&
      (this.unmount = ZN(
        t,
        (n, r) => (Ng(this.node, r, "Start"), (s) => Ng(this.node, s, "End")),
      ));
  }
  unmount() {}
}
class yM extends dr {
  constructor() {
    (super(...arguments), (this.isActive = !1));
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = So(
      lo(this.node.current, "focus", () => this.onFocus()),
      lo(this.node.current, "blur", () => this.onBlur()),
    );
  }
  unmount() {}
}
function Rg(e, t, n) {
  const { props: r } = e;
  if (e.current instanceof HTMLButtonElement && e.current.disabled) return;
  e.animationState &&
    r.whileTap &&
    e.animationState.setActive("whileTap", n === "Start");
  const s = "onTap" + (n === "End" ? "" : n),
    i = r[s];
  i && le.postRender(() => i(t, Po(t)));
}
class vM extends dr {
  mount() {
    const { current: t } = this.node;
    t &&
      (this.unmount = tR(
        t,
        (n, r) => (
          Rg(this.node, r, "Start"),
          (s, { success: i }) => Rg(this.node, s, i ? "End" : "Cancel")
        ),
        { useGlobalTarget: this.node.props.globalTapTarget },
      ));
  }
  unmount() {}
}
const yd = new WeakMap(),
  Vu = new WeakMap(),
  xM = (e) => {
    const t = yd.get(e.target);
    t && t(e);
  },
  wM = (e) => {
    e.forEach(xM);
  };
function bM({ root: e, ...t }) {
  const n = e || document;
  Vu.has(n) || Vu.set(n, {});
  const r = Vu.get(n),
    s = JSON.stringify(t);
  return (
    r[s] || (r[s] = new IntersectionObserver(wM, { root: e, ...t })),
    r[s]
  );
}
function SM(e, t, n) {
  const r = bM(t);
  return (
    yd.set(e, n),
    r.observe(e),
    () => {
      (yd.delete(e), r.unobserve(e));
    }
  );
}
const CM = { some: 0, all: 1 };
class EM extends dr {
  constructor() {
    (super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1));
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: s = "some", once: i } = t,
      o = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof s == "number" ? s : CM[s],
      },
      a = (l) => {
        const { isIntersecting: u } = l;
        if (
          this.isInView === u ||
          ((this.isInView = u), i && !u && this.hasEnteredView)
        )
          return;
        (u && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", u));
        const { onViewportEnter: c, onViewportLeave: d } = this.node.getProps(),
          h = u ? c : d;
        h && h(l);
      };
    return SM(this.node.current, o, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(PM(t, n)) && this.startObserver();
  }
  unmount() {}
}
function PM({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const TM = {
    inView: { Feature: EM },
    tap: { Feature: vM },
    focus: { Feature: yM },
    hover: { Feature: gM },
  },
  kM = { layout: { ProjectionNode: lw, MeasureLayout: Sw } },
  jM = { ...ZA, ...TM, ...mM, ...kM },
  uo = YA(jM, GA),
  NM = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  },
  RM = { type: "tween", ease: "anticipate", duration: 0.4 },
  gr = ({ children: e }) =>
    f.jsx(uo.div, {
      initial: "initial",
      animate: "animate",
      exit: "exit",
      variants: NM,
      transition: RM,
      children: e,
    }),
  AM = R0(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    {
      variants: {
        variant: {
          default:
            "bg-primary text-primary-foreground hover:bg-primary/90 shadow-soft hover:shadow-card",
          destructive:
            "bg-destructive text-destructive-foreground hover:bg-destructive/90",
          outline:
            "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
          secondary:
            "bg-secondary text-secondary-foreground hover:bg-secondary/80",
          ghost: "hover:bg-accent hover:text-accent-foreground",
          link: "text-primary underline-offset-4 hover:underline",
          hero: "bg-gradient-hero text-primary-foreground shadow-elevated hover:shadow-card hover:scale-105 font-semibold",
          heroOutline:
            "border-2 border-primary-foreground/30 text-primary-foreground bg-primary-foreground/10 backdrop-blur-sm hover:bg-primary-foreground/20 hover:border-primary-foreground/50 font-semibold",
          accent:
            "bg-gradient-accent text-accent-foreground shadow-card hover:shadow-elevated hover:scale-105 font-semibold",
        },
        size: {
          default: "h-10 px-4 py-2",
          sm: "h-9 rounded-md px-3",
          lg: "h-12 rounded-lg px-8 text-base",
          xl: "h-14 rounded-xl px-10 text-lg",
          icon: "h-10 w-10",
        },
      },
      defaultVariants: { variant: "default", size: "default" },
    },
  ),
  zr = w.forwardRef(
    ({ className: e, variant: t, size: n, asChild: r = !1, ...s }, i) => {
      const o = r ? fC : "button";
      return f.jsx(o, {
        className: cr(AM({ variant: t, size: n, className: e })),
        ref: i,
        ...s,
      });
    },
  );
zr.displayName = "Button";
const Cw = "images/logo.jpg",
  Js = () => {
    const [e, t] = w.useState(!1),
      n = Hr(),
      r = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Programs", href: "/programs" },
        { name: "Faculty", href: "/faculty" },
        { name: "Specialties", href: "/specialties" },
        { name: "Contact", href: "/contact" },
      ];
    return f.jsx("nav", {
      className:
        "fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border",
      children: f.jsxs("div", {
        className: "container mx-auto px-4",
        children: [
          f.jsxs("div", {
            className: "flex items-center justify-between h-20",
            children: [
              f.jsxs(Ln, {
                to: "/",
                className: "flex items-center gap-3",
                children: [
                  f.jsx("img", {
                    src: Cw,
                    alt: "Paradise Coaching Institute",
                    className: "h-14 w-auto object-contain",
                  }),
                  f.jsxs("div", {
                    className: "hidden sm:block",
                    children: [
                      f.jsx("h1", {
                        className:
                          "font-display text-lg font-bold text-foreground leading-tight",
                        children: "Paradise Coaching",
                      }),
                      f.jsx("p", {
                        className: "text-xs text-primary font-medium",
                        children: "Institute",
                      }),
                    ],
                  }),
                ],
              }),
              f.jsx("div", {
                className: "hidden md:flex items-center gap-8",
                children: r.map((s) =>
                  f.jsx(
                    Ln,
                    {
                      to: s.href,
                      className: `font-medium transition-colors duration-300 ${n.pathname === s.href ? "text-primary" : "text-muted-foreground hover:text-primary"}`,
                      children: s.name,
                    },
                    s.name,
                  ),
                ),
              }),
              f.jsx("div", {
                className: "hidden md:block",
                children: f.jsx(Ln, {
                  to: "/contact",
                  children: f.jsx(zr, {
                    variant: "hero",
                    size: "lg",
                    children: "Enroll Now",
                  }),
                }),
              }),
              f.jsx("button", {
                onClick: () => t(!e),
                className: "md:hidden p-2 text-foreground",
                children: e
                  ? f.jsx(L0, { className: "w-6 h-6" })
                  : f.jsx(vE, { className: "w-6 h-6" }),
              }),
            ],
          }),
          e &&
            f.jsx("div", {
              className:
                "md:hidden py-4 border-t border-border animate-fade-in",
              children: f.jsxs("div", {
                className: "flex flex-col gap-4",
                children: [
                  r.map((s) =>
                    f.jsx(
                      Ln,
                      {
                        to: s.href,
                        onClick: () => t(!1),
                        className: `font-medium py-2 transition-colors ${n.pathname === s.href ? "text-primary" : "text-muted-foreground hover:text-primary"}`,
                        children: s.name,
                      },
                      s.name,
                    ),
                  ),
                  f.jsx(Ln, {
                    to: "/contact",
                    onClick: () => t(!1),
                    children: f.jsx(zr, {
                      variant: "hero",
                      size: "lg",
                      className: "mt-2 w-full",
                      children: "Enroll Now",
                    }),
                  }),
                ],
              }),
            }),
        ],
      }),
    });
  },
  MM = () =>
    f.jsxs("section", {
      id: "home",
      className:
        "relative min-h-screen flex items-center pt-20 overflow-hidden",
      children: [
        f.jsx("div", {
          className: "absolute inset-0 bg-gradient-hero opacity-[0.03]",
        }),
        f.jsx("div", {
          className:
            "absolute top-1/4 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl",
        }),
        f.jsx("div", {
          className:
            "absolute bottom-1/4 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl",
        }),
        f.jsx("div", {
          className: "container mx-auto px-4 py-20",
          children: f.jsxs("div", {
            className: "grid lg:grid-cols-2 gap-12 items-center",
            children: [
              f.jsxs(uo.div, {
                initial: { opacity: 0, y: 40 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                className: "space-y-8",
                children: [
                  f.jsxs("div", {
                    className:
                      "inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full border border-secondary/20",
                    children: [
                      f.jsx("span", {
                        className:
                          "w-2 h-2 bg-secondary rounded-full animate-pulse-soft",
                      }),
                      f.jsx("span", {
                        className: "text-sm font-medium text-secondary",
                        children: "Admissions Open!",
                      }),
                    ],
                  }),
                  f.jsxs("h1", {
                    className:
                      "font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight",
                    children: [
                      "Be the Next Doctor",
                      f.jsx("span", {
                        className: "text-gradient-hero block",
                        children: "in the Making!",
                      }),
                      f.jsx("span", {
                        className:
                          "block text-2xl md:text-3xl lg:text-4xl mt-2 font-medium italic text-primary",
                        children: "with Paradise Coaching Institute",
                      }),
                    ],
                  }),
                  f.jsxs("p", {
                    className:
                      "text-lg text-muted-foreground max-w-xl leading-relaxed",
                    children: [
                      f.jsx("span", {
                        className: "font-semibold text-foreground",
                        children: '"Where dream meets the discipline"',
                      }),
                      " — Your ultimate guide to the white coat journey. Start your CEE journey with Paradise MBBS Entrance Preparation today!",
                    ],
                  }),
                  f.jsxs("div", {
                    className: "flex flex-wrap gap-3 text-sm",
                    children: [
                      f.jsx("span", {
                        className:
                          "px-3 py-1.5 bg-primary/10 text-primary rounded-full font-medium",
                        children: "Online Classes",
                      }),
                      f.jsx("span", {
                        className:
                          "px-3 py-1.5 bg-secondary/10 text-secondary rounded-full font-medium",
                        children: "CEE Targeted",
                      }),
                      f.jsx("span", {
                        className:
                          "px-3 py-1.5 bg-accent/20 text-accent rounded-full font-medium",
                        children: "Weekly Rewards",
                      }),
                      f.jsx("span", {
                        className:
                          "px-3 py-1.5 bg-primary/10 text-primary rounded-full font-medium",
                        children: "Expert Faculty",
                      }),
                    ],
                  }),
                  f.jsxs("div", {
                    className: "flex flex-col sm:flex-row gap-4",
                    children: [
                      f.jsx(zr, {
                        variant: "hero",
                        size: "xl",
                        asChild: !0,
                        children: f.jsxs(Ln, {
                          to: "/programs",
                          children: [
                            "Start Your Journey",
                            f.jsx(vf, { className: "w-5 h-5" }),
                          ],
                        }),
                      }),
                      f.jsx(zr, {
                        variant: "outline",
                        size: "xl",
                        asChild: !0,
                        children: f.jsx(Ln, {
                          to: "/programs",
                          children: "Explore Programs",
                        }),
                      }),
                    ],
                  }),
                  f.jsxs("div", {
                    className:
                      "flex flex-wrap gap-8 pt-8 border-t border-border",
                    children: [
                      f.jsxs("div", {
                        className: "flex items-center gap-3",
                        children: [
                          f.jsx("div", {
                            className:
                              "w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center",
                            children: f.jsx(Vc, {
                              className: "w-6 h-6 text-primary",
                            }),
                          }),
                          f.jsxs("div", {
                            children: [
                              f.jsx("p", {
                                className: "text-2xl font-bold text-foreground",
                                children: "Live",
                              }),
                              f.jsx("p", {
                                className: "text-sm text-muted-foreground",
                                children: "Online Classes",
                              }),
                            ],
                          }),
                        ],
                      }),
                      f.jsxs("div", {
                        className: "flex items-center gap-3",
                        children: [
                          f.jsx("div", {
                            className:
                              "w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center",
                            children: f.jsx(Oc, {
                              className: "w-6 h-6 text-secondary",
                            }),
                          }),
                          f.jsxs("div", {
                            children: [
                              f.jsx("p", {
                                className: "text-2xl font-bold text-foreground",
                                children: "Weekly",
                              }),
                              f.jsx("p", {
                                className: "text-sm text-muted-foreground",
                                children: "Cash Prizes",
                              }),
                            ],
                          }),
                        ],
                      }),
                      f.jsxs("div", {
                        className: "flex items-center gap-3",
                        children: [
                          f.jsx("div", {
                            className:
                              "w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center",
                            children: f.jsx(Fc, {
                              className: "w-6 h-6 text-accent",
                            }),
                          }),
                          f.jsxs("div", {
                            children: [
                              f.jsx("p", {
                                className: "text-2xl font-bold text-foreground",
                                children: "Grade 12",
                              }),
                              f.jsx("p", {
                                className: "text-sm text-muted-foreground",
                                children: "Science Students",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              f.jsxs(uo.div, {
                initial: { opacity: 0, y: 40 },
                animate: { opacity: 1, y: 0 },
                transition: {
                  duration: 0.6,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                },
                className: "relative py-8",
                children: [
                  f.jsx("div", {
                    className:
                      "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-hero rounded-full opacity-20 blur-3xl",
                  }),
                  f.jsxs("div", {
                    className:
                      "relative grid grid-cols-2 gap-4 max-w-md mx-auto",
                    children: [
                      f.jsx("div", {
                        className:
                          "bg-card rounded-xl p-4 shadow-card border border-border/50 animate-float delay-100",
                        children: f.jsxs("div", {
                          className: "flex flex-col gap-3",
                          children: [
                            f.jsx("div", {
                              className:
                                "w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center",
                              children: f.jsx(D0, {
                                className: "w-6 h-6 text-secondary",
                              }),
                            }),
                            f.jsxs("div", {
                              children: [
                                f.jsx("p", {
                                  className: "font-semibold text-foreground",
                                  children: "CEE Focused",
                                }),
                                f.jsx("p", {
                                  className: "text-xs text-muted-foreground",
                                  children: "From Day 1",
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      f.jsx("div", {
                        className:
                          "bg-card rounded-xl p-4 shadow-card border border-border/50 animate-float delay-200",
                        children: f.jsxs("div", {
                          className: "flex flex-col gap-3",
                          children: [
                            f.jsx("div", {
                              className:
                                "w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center",
                              children: f.jsx(Fc, {
                                className: "w-6 h-6 text-accent",
                              }),
                            }),
                            f.jsxs("div", {
                              children: [
                                f.jsx("p", {
                                  className: "font-semibold text-foreground",
                                  children: "Expert Faculty",
                                }),
                                f.jsx("p", {
                                  className: "text-xs text-muted-foreground",
                                  children: "Medical Educators",
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      f.jsx("div", {
                        className:
                          "bg-card rounded-xl p-4 shadow-card border border-border/50 animate-float delay-300",
                        children: f.jsxs("div", {
                          className: "flex flex-col gap-3",
                          children: [
                            f.jsx("div", {
                              className:
                                "w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center",
                              children: f.jsx(Oc, {
                                className: "w-6 h-6 text-primary",
                              }),
                            }),
                            f.jsxs("div", {
                              children: [
                                f.jsx("p", {
                                  className: "font-semibold text-foreground",
                                  children: "Weekly Prizes",
                                }),
                                f.jsx("p", {
                                  className: "text-xs text-muted-foreground",
                                  children: "Cash Rewards",
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      f.jsx("div", {
                        className:
                          "bg-card rounded-xl p-4 shadow-card border border-border/50 animate-float delay-100",
                        children: f.jsxs("div", {
                          className: "flex flex-col gap-3",
                          children: [
                            f.jsx("div", {
                              className:
                                "w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center",
                              children: f.jsx(Vc, {
                                className: "w-6 h-6 text-secondary",
                              }),
                            }),
                            f.jsxs("div", {
                              children: [
                                f.jsx("p", {
                                  className: "font-semibold text-foreground",
                                  children: "Live Classes",
                                }),
                                f.jsx("p", {
                                  className: "text-xs text-muted-foreground",
                                  children: "Online Sessions",
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    }),
  Li = ({
    children: e,
    className: t = "",
    delay: n = 0,
    direction: r = "up",
  }) => {
    const s = {
      up: { y: 40, x: 0 },
      down: { y: -40, x: 0 },
      left: { y: 0, x: 40 },
      right: { y: 0, x: -40 },
    };
    return f.jsx(uo.div, {
      initial: { opacity: 0, ...s[r] },
      whileInView: { opacity: 1, y: 0, x: 0 },
      viewport: { once: !0, margin: "-100px" },
      transition: { duration: 0.6, delay: n, ease: [0.22, 1, 0.36, 1] },
      className: t,
      children: e,
    });
  },
  DM = [
    {
      icon: Vc,
      title: "Live Online Classes",
      description:
        "2-hour sessions | 3-4 days/week | Real-time learning with top educators.",
    },
    {
      icon: Fc,
      title: "Monthly Physical Interaction",
      description:
        "Physical classes just for doubt clearance & personal connection with teachers.",
    },
    {
      icon: xf,
      title: "Complete Digital Resources",
      description:
        "Get recorded lectures & PDFs of current + previous contents for revision.",
    },
    {
      icon: bE,
      title: "One-to-One Access",
      description:
        "Direct interaction with experienced teachers for personalized guidance.",
    },
    {
      icon: D0,
      title: "Weekly Prize System",
      description:
        "Cash prize every week for college-wise toppers to boost motivation.",
    },
    {
      icon: wf,
      title: "Extended Support Till CEE",
      description:
        "Classes + QAD will run till CEE exam for long-term preparation.",
    },
    {
      icon: hE,
      title: "Career Counseling & Motivation",
      description:
        "College-wise group discussion, mentorship, and future guidance.",
    },
    {
      icon: Ic,
      title: "Healthy Competitive Environment",
      description:
        "Friendly rivalry, shared goals, and strong peer support system.",
    },
  ],
  Ew = () =>
    f.jsx("section", {
      id: "why-us",
      className: "py-24 bg-muted/30",
      children: f.jsxs("div", {
        className: "container mx-auto px-4",
        children: [
          f.jsx(Li, {
            children: f.jsxs("div", {
              className: "text-center max-w-3xl mx-auto mb-16",
              children: [
                f.jsx("span", {
                  className:
                    "inline-block px-4 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium mb-4",
                  children: "Our Specialties",
                }),
                f.jsx("h2", {
                  className:
                    "font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6",
                  children: "What Makes Paradise Special",
                }),
                f.jsx("p", {
                  className: "text-lg text-muted-foreground leading-relaxed",
                  children:
                    "We offer a unique blend of online and offline learning experience designed specifically for Grade 12 Science students preparing for CEE.",
                }),
              ],
            }),
          }),
          f.jsx("div", {
            className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6",
            children: DM.map((e, t) =>
              f.jsx(
                Li,
                {
                  delay: t * 0.1,
                  children: f.jsxs("div", {
                    className:
                      "group bg-card rounded-2xl p-6 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1 h-full",
                    children: [
                      f.jsx("div", {
                        className:
                          "w-14 h-14 rounded-xl bg-gradient-hero flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300",
                        children: f.jsx(e.icon, {
                          className: "w-7 h-7 text-primary-foreground",
                        }),
                      }),
                      f.jsx("h3", {
                        className:
                          "font-display text-lg font-bold text-foreground mb-2",
                        children: e.title,
                      }),
                      f.jsx("p", {
                        className:
                          "text-muted-foreground text-sm leading-relaxed",
                        children: e.description,
                      }),
                    ],
                  }),
                },
                e.title,
              ),
            ),
          }),
          f.jsx(Li, {
            delay: 0.4,
            children: f.jsx("div", {
              className: "mt-16 text-center",
              children: f.jsxs("div", {
                className:
                  "inline-flex flex-col sm:flex-row items-center gap-4 p-8 bg-card rounded-2xl shadow-card",
                children: [
                  f.jsxs("div", {
                    className: "text-left",
                    children: [
                      f.jsx("h3", {
                        className:
                          "font-display text-2xl font-bold text-foreground mb-2",
                        children: "Limited Seats Available!",
                      }),
                      f.jsx("p", {
                        className: "text-muted-foreground",
                        children:
                          "Join Paradise MBBS Entrance Preparation and start your white coat journey today.",
                      }),
                    ],
                  }),
                  f.jsx("a", {
                    href: "#contact",
                    className:
                      "shrink-0 inline-flex items-center justify-center h-12 px-8 bg-gradient-hero text-primary-foreground font-semibold rounded-lg shadow-elevated hover:shadow-card hover:scale-105 transition-all duration-300",
                    children: "Contact Us Today",
                  }),
                ],
              }),
            }),
          }),
        ],
      }),
    }),
  LM = [
    {
      quote:
        "Paradise made me believe I could crack CEE. The classes, the support, the environment – all were amazing!",
      name: "Bipana Yadav",
      batch: "Fresher Batch Scholarship Holder",
      rank: "CEE Rank: 156",
    },
    {
      quote:
        "I loved the way teachers explained complex topics with ease. The recorded videos were a life-saver!",
      name: "Birendra Yadav",
      batch: "Fresher Batch",
      rank: "CEE Rank: 234",
    },
    {
      quote:
        "The weekly tests and instant feedback helped me track my progress. Paradise truly changed my life!",
      name: "Sita Sharma",
      batch: "Repeater Batch",
      rank: "CEE Rank: 89",
    },
    {
      quote:
        "From struggling with Chemistry to scoring top marks – Paradise faculty made it possible!",
      name: "Ramesh Thapa",
      batch: "Fresher Batch",
      rank: "CEE Rank: 312",
    },
  ],
  OM = () =>
    f.jsx("section", {
      id: "testimonials",
      className: "py-24",
      children: f.jsxs("div", {
        className: "container mx-auto px-4",
        children: [
          f.jsx(Li, {
            children: f.jsxs("div", {
              className: "text-center max-w-3xl mx-auto mb-16",
              children: [
                f.jsx("span", {
                  className:
                    "inline-block px-4 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4",
                  children: "Student Testimonials",
                }),
                f.jsx("h2", {
                  className:
                    "font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6",
                  children: "What Our Students Say",
                }),
                f.jsx("p", {
                  className: "text-lg text-muted-foreground leading-relaxed",
                  children:
                    "Hear from students who have experienced the Paradise difference and are on their way to achieving their medical dreams.",
                }),
              ],
            }),
          }),
          f.jsx("div", {
            className: "grid md:grid-cols-2 gap-8 max-w-5xl mx-auto",
            children: LM.map((e, t) =>
              f.jsx(
                Li,
                {
                  delay: t * 0.1,
                  direction: t % 2 === 0 ? "left" : "right",
                  children: f.jsxs("div", {
                    className:
                      "group bg-card rounded-2xl p-8 shadow-soft hover:shadow-card transition-all duration-300 relative h-full",
                    children: [
                      f.jsx("div", {
                        className:
                          "absolute -top-4 -left-4 w-12 h-12 rounded-xl bg-gradient-hero flex items-center justify-center shadow-lg",
                        children: f.jsx(xE, {
                          className: "w-6 h-6 text-primary-foreground",
                        }),
                      }),
                      f.jsxs("p", {
                        className:
                          "text-foreground italic text-lg leading-relaxed mb-6 pt-4",
                        children: ['"', e.quote, '"'],
                      }),
                      f.jsxs("div", {
                        className:
                          "flex items-center justify-between pt-4 border-t border-border",
                        children: [
                          f.jsxs("div", {
                            className: "flex items-center gap-4",
                            children: [
                              f.jsx("div", {
                                className:
                                  "w-12 h-12 rounded-full bg-gradient-hero flex items-center justify-center text-primary-foreground font-bold text-lg",
                                children: e.name.charAt(0),
                              }),
                              f.jsxs("div", {
                                children: [
                                  f.jsx("p", {
                                    className: "font-semibold text-foreground",
                                    children: e.name,
                                  }),
                                  f.jsx("p", {
                                    className: "text-sm text-muted-foreground",
                                    children: e.batch,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          f.jsx("div", {
                            className:
                              "px-3 py-1.5 bg-secondary/10 text-secondary rounded-full text-xs font-bold",
                            children: e.rank,
                          }),
                        ],
                      }),
                    ],
                  }),
                },
                e.name,
              ),
            ),
          }),
        ],
      }),
    }),
  IM = () => {
    const [e, t] = w.useState(!1);
    return (
      w.useEffect(() => {
        const n = () => {
          t(window.scrollY > 400);
        };
        return (
          window.addEventListener("scroll", n),
          () => window.removeEventListener("scroll", n)
        );
      }, []),
      f.jsx(cw, {
        children:
          e &&
          f.jsx(uo.div, {
            initial: { opacity: 0, y: 100, scale: 0.8 },
            animate: { opacity: 1, y: 0, scale: 1 },
            exit: { opacity: 0, y: 100, scale: 0.8 },
            transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
            className: "fixed bottom-6 right-6 z-50",
            children: f.jsxs(Ln, {
              to: "/programs",
              className:
                "group flex items-center gap-2 px-6 py-3 bg-gradient-hero text-primary-foreground font-semibold rounded-full shadow-elevated hover:shadow-card transition-all duration-300 hover:scale-105",
              children: [
                f.jsx("span", { children: "Call Now for Enquiries" }),
                f.jsx(vf, {
                  className:
                    "w-4 h-4 group-hover:translate-x-1 transition-transform",
                }),
              ],
            }),
          }),
      })
    );
  },
  ei = () => {
    const e = new Date().getFullYear();
    return f.jsx("footer", {
      className: "bg-foreground text-background py-16",
      children: f.jsxs("div", {
        className: "container mx-auto px-4",
        children: [
          f.jsxs("div", {
            className: "grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12",
            children: [
              f.jsxs("div", {
                className: "lg:col-span-1",
                children: [
                  f.jsx("div", {
                    className: "mb-6",
                    children: f.jsx("img", {
                      src: Cw,
                      alt: "Paradise MBBS Entrance Preparation",
                      className:
                        "h-20 w-auto object-contain bg-background/10 rounded-xl p-2",
                    }),
                  }),
                  f.jsx("p", {
                    className: "text-background/70 leading-relaxed mb-2 italic",
                    children: '"Where dream meets the discipline"',
                  }),
                  f.jsx("p", {
                    className: "text-background/70 leading-relaxed mb-6",
                    children:
                      "Your ultimate guide to the white coat journey. Pre-Medical Classes for Grade 12 Students.",
                  }),
                  f.jsxs("div", {
                    className: "flex items-center gap-4",
                    children: [
                      f.jsx("a", {
                        href: "#",
                        className:
                          "w-10 h-10 rounded-lg bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors",
                        children: f.jsx(dE, { className: "w-5 h-5" }),
                      }),
                      f.jsx("a", {
                        href: "#",
                        className:
                          "w-10 h-10 rounded-lg bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors",
                        children: f.jsx(pE, { className: "w-5 h-5" }),
                      }),
                      f.jsx("a", {
                        href: "#",
                        className:
                          "w-10 h-10 rounded-lg bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors",
                        children: f.jsx(SE, { className: "w-5 h-5" }),
                      }),
                      f.jsx("a", {
                        href: "tel:+9779844251517",
                        className:
                          "w-10 h-10 rounded-lg bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors",
                        children: f.jsx(M0, { className: "w-5 h-5" }),
                      }),
                    ],
                  }),
                ],
              }),
              f.jsxs("div", {
                children: [
                  f.jsx("h4", {
                    className: "font-display text-lg font-bold mb-6",
                    children: "Quick Links",
                  }),
                  f.jsxs("ul", {
                    className: "space-y-3",
                    children: [
                      f.jsx("li", {
                        children: f.jsx("a", {
                          href: "#home",
                          className:
                            "text-background/70 hover:text-background transition-colors",
                          children: "Home",
                        }),
                      }),
                      f.jsx("li", {
                        children: f.jsx("a", {
                          href: "#about",
                          className:
                            "text-background/70 hover:text-background transition-colors",
                          children: "About Us",
                        }),
                      }),
                      f.jsx("li", {
                        children: f.jsx("a", {
                          href: "#programs",
                          className:
                            "text-background/70 hover:text-background transition-colors",
                          children: "Programs",
                        }),
                      }),
                      f.jsx("li", {
                        children: f.jsx("a", {
                          href: "#why-us",
                          className:
                            "text-background/70 hover:text-background transition-colors",
                          children: "Our Specialties",
                        }),
                      }),
                      f.jsx("li", {
                        children: f.jsx("a", {
                          href: "#contact",
                          className:
                            "text-background/70 hover:text-background transition-colors",
                          children: "Contact",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              f.jsxs("div", {
                children: [
                  f.jsx("h4", {
                    className: "font-display text-lg font-bold mb-6",
                    children: "Our Programs",
                  }),
                  f.jsxs("ul", {
                    className: "space-y-3",
                    children: [
                      f.jsx("li", {
                        children: f.jsx("a", {
                          href: "#programs",
                          className:
                            "text-background/70 hover:text-background transition-colors",
                          children: "Grade 12 CEE Prep",
                        }),
                      }),
                      f.jsx("li", {
                        children: f.jsx("a", {
                          href: "#programs",
                          className:
                            "text-background/70 hover:text-background transition-colors",
                          children: "Live Online Classes",
                        }),
                      }),
                      f.jsx("li", {
                        children: f.jsx("a", {
                          href: "#programs",
                          className:
                            "text-background/70 hover:text-background transition-colors",
                          children: "Recorded Lectures",
                        }),
                      }),
                      f.jsx("li", {
                        children: f.jsx("a", {
                          href: "#",
                          className:
                            "text-background/70 hover:text-background transition-colors",
                          children: "Test Series",
                        }),
                      }),
                      f.jsx("li", {
                        children: f.jsx("a", {
                          href: "#",
                          className:
                            "text-background/70 hover:text-background transition-colors",
                          children: "Study Materials",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              f.jsxs("div", {
                children: [
                  f.jsx("h4", {
                    className: "font-display text-lg font-bold mb-6",
                    children: "Contact Us",
                  }),
                  f.jsxs("ul", {
                    className: "space-y-3 text-background/70",
                    children: [
                      f.jsx("li", { children: "Dhulikhel, Kavre" }),
                      f.jsx("li", { children: "Nepal" }),
                      f.jsx("li", {
                        children: f.jsx("a", {
                          href: "tel:+9779844251517",
                          className: "hover:text-background transition-colors",
                          children: "+977-9844251517",
                        }),
                      }),
                      f.jsx("li", {
                        children: f.jsx("a", {
                          href: "tel:+9779843151077",
                          className: "hover:text-background transition-colors",
                          children: "+977-9843151077",
                        }),
                      }),
                      f.jsx("li", {
                        children: f.jsx("a", {
                          href: "mailto:paradisembbsentranceprep@gmail.com",
                          className:
                            "hover:text-background transition-colors text-sm",
                          children: "paradisembbsentranceprep@gmail.com",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          f.jsxs("div", {
            className:
              "pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4",
            children: [
              f.jsxs("p", {
                className: "text-background/60 text-sm",
                children: [
                  "© ",
                  e,
                  " Paradise MBBS Entrance Preparation. All rights reserved.",
                ],
              }),
              f.jsxs("div", {
                className: "flex items-center gap-6 text-sm",
                children: [
                  f.jsx("a", {
                    href: "#",
                    className:
                      "text-background/60 hover:text-background transition-colors",
                    children: "Privacy Policy",
                  }),
                  f.jsx("a", {
                    href: "#",
                    className:
                      "text-background/60 hover:text-background transition-colors",
                    children: "Terms of Service",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  },
  FM = () =>
    f.jsxs("div", {
      className: "min-h-screen bg-background",
      children: [
        f.jsx(Js, {}),
        f.jsxs("main", {
          children: [f.jsx(MM, {}), f.jsx(Ew, {}), f.jsx(OM, {})],
        }),
        f.jsx(ei, {}),
        f.jsx(IM, {}),
      ],
    }),
  VM = [
    "Deliver concept-based learning aligned with the NEB & CEE syllabus",
    "Make students self-reliant & confident for competitive exams",
    "Maintain interactive learning through QAD, group work, & peer discussion",
    "Encourage reward-based & disciplined environment",
    "Provide career-oriented guidance & psychological motivation",
  ],
  _M = () =>
    f.jsx("section", {
      id: "about",
      className: "py-24 bg-muted/30",
      children: f.jsxs("div", {
        className: "container mx-auto px-4",
        children: [
          f.jsxs("div", {
            className: "text-center max-w-3xl mx-auto mb-16",
            children: [
              f.jsx("span", {
                className:
                  "inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4",
                children: "About Us",
              }),
              f.jsx("h2", {
                className:
                  "font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6",
                children: "About Paradise MBBS Preparation",
              }),
              f.jsx("p", {
                className: "text-lg text-muted-foreground leading-relaxed",
                children:
                  "Paradise is a team of passionate medical educators committed to nurturing Nepal's next generation of doctors. With years of experience of teachers and a student-first approach, we offer a blend of online learning tailored to suit every aspiring doctor's need.",
              }),
            ],
          }),
          f.jsx("div", {
            className: "bg-card rounded-2xl p-8 shadow-soft mb-12",
            children: f.jsxs("p", {
              className:
                "text-muted-foreground leading-relaxed text-center max-w-4xl mx-auto",
              children: [
                "We don't just teach the students but we provide the environment to feel the contents and work on longevity of retention in mind. Since we are bounded maximum by our medical field faculties, they'll be connected with doctors as well from the very beginning of their grade 12. We guide chapter wise contents and our faculties always work hard for maximum question practice from different Nepali and Indian books. Our selfless effort is surely going to enhance the concept and thinking capacity of students from the very beginning of class 12. ",
                f.jsx("span", {
                  className: "font-semibold text-foreground",
                  children:
                    "For the first time in Nepal, we are offering different packages from UG to PG journey of white coat and stethoscope.",
                }),
              ],
            }),
          }),
          f.jsxs("div", {
            className: "grid md:grid-cols-2 gap-8 mb-16",
            children: [
              f.jsxs("div", {
                className:
                  "group bg-card rounded-2xl p-8 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-2",
                children: [
                  f.jsx("div", {
                    className:
                      "w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300",
                    children: f.jsx(Ic, { className: "w-8 h-8 text-primary" }),
                  }),
                  f.jsx("h3", {
                    className:
                      "font-display text-2xl font-bold text-foreground mb-4",
                    children: "Our Mission",
                  }),
                  f.jsx("p", {
                    className: "text-muted-foreground leading-relaxed italic",
                    children:
                      '"To provide quality, affordable, and accessible medical entrance preparation to aspiring students across Nepal, helping them excel in the CEE and beyond."',
                  }),
                ],
              }),
              f.jsxs("div", {
                className:
                  "group bg-card rounded-2xl p-8 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-2",
                children: [
                  f.jsx("div", {
                    className:
                      "w-16 h-16 rounded-xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300",
                    children: f.jsx(Ip, {
                      className: "w-8 h-8 text-secondary",
                    }),
                  }),
                  f.jsx("h3", {
                    className:
                      "font-display text-2xl font-bold text-foreground mb-4",
                    children: "Our Objectives",
                  }),
                  f.jsx("ul", {
                    className: "space-y-3",
                    children: VM.map((e, t) =>
                      f.jsxs(
                        "li",
                        {
                          className: "flex items-start gap-3",
                          children: [
                            f.jsx(Op, {
                              className:
                                "w-5 h-5 text-secondary shrink-0 mt-0.5",
                            }),
                            f.jsx("span", {
                              className: "text-muted-foreground",
                              children: e,
                            }),
                          ],
                        },
                        t,
                      ),
                    ),
                  }),
                ],
              }),
            ],
          }),
          f.jsxs("div", {
            className:
              "bg-gradient-hero rounded-2xl p-8 md:p-12 shadow-elevated",
            children: [
              f.jsx("h3", {
                className:
                  "font-display text-2xl font-bold text-primary-foreground text-center mb-8",
                children: "Why Choose Paradise?",
              }),
              f.jsxs("div", {
                className: "grid md:grid-cols-3 gap-8 text-center",
                children: [
                  f.jsxs("div", {
                    children: [
                      f.jsx("div", {
                        className:
                          "w-16 h-16 rounded-full bg-primary-foreground/20 flex items-center justify-center mx-auto mb-4",
                        children: f.jsx(Op, {
                          className: "w-8 h-8 text-primary-foreground",
                        }),
                      }),
                      f.jsx("p", {
                        className:
                          "text-xl font-bold text-primary-foreground mb-2",
                        children: "Tailored for Grade 12",
                      }),
                      f.jsx("p", {
                        className: "text-primary-foreground/80",
                        children: "Science Students",
                      }),
                    ],
                  }),
                  f.jsxs("div", {
                    children: [
                      f.jsx("div", {
                        className:
                          "w-16 h-16 rounded-full bg-primary-foreground/20 flex items-center justify-center mx-auto mb-4",
                        children: f.jsx(Ic, {
                          className: "w-8 h-8 text-primary-foreground",
                        }),
                      }),
                      f.jsx("p", {
                        className:
                          "text-xl font-bold text-primary-foreground mb-2",
                        children: "CEE-Focused",
                      }),
                      f.jsx("p", {
                        className: "text-primary-foreground/80",
                        children: "Preparation from Day 1",
                      }),
                    ],
                  }),
                  f.jsxs("div", {
                    children: [
                      f.jsx("div", {
                        className:
                          "w-16 h-16 rounded-full bg-primary-foreground/20 flex items-center justify-center mx-auto mb-4",
                        children: f.jsx(Ip, {
                          className: "w-8 h-8 text-primary-foreground",
                        }),
                      }),
                      f.jsx("p", {
                        className:
                          "text-xl font-bold text-primary-foreground mb-2",
                        children: "Motivating",
                      }),
                      f.jsx("p", {
                        className: "text-primary-foreground/80",
                        children: "Competitive & Rewarding",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    }),
  zM = () =>
    f.jsxs("div", {
      className: "min-h-screen bg-background",
      children: [
        f.jsx(Js, {}),
        f.jsx("main", { className: "pt-20", children: f.jsx(_M, {}) }),
        f.jsx(ei, {}),
      ],
    }),
  BM = [
    {
      title: "Class 11 Foundation",
      duration: "1 Year",
      schedule: "Regular Classes",
      features: [
        "Strong foundation building",
        "Conceptual clarity in Physics, Chemistry, Biology",
        "Regular tests & assessments",
        "Doubt clearing sessions",
      ],
      popular: !1,
    },
    {
      title: "Class 12 Intensive",
      duration: "1 Year",
      schedule: "Daily Classes",
      features: [
        "Complete syllabus coverage",
        "CEE pattern-based teaching",
        "Weekly mock tests",
        "One-on-one mentoring",
      ],
      popular: !0,
    },
    {
      title: "Crash Course",
      duration: "3 Months",
      schedule: "Intensive",
      features: [
        "Quick revision of all topics",
        "Focus on high-weightage areas",
        "Daily practice papers",
        "Exam strategy sessions",
      ],
      popular: !1,
    },
  ],
  $M = () =>
    f.jsx("section", {
      id: "programs",
      className: "py-24",
      children: f.jsxs("div", {
        className: "container mx-auto px-4",
        children: [
          f.jsxs("div", {
            className: "text-center max-w-3xl mx-auto mb-16",
            children: [
              f.jsx("span", {
                className:
                  "inline-block px-4 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4",
                children: "Our Programs",
              }),
              f.jsx("h2", {
                className:
                  "font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6",
                children: "Structured Learning Paths",
              }),
              f.jsx("p", {
                className: "text-lg text-muted-foreground leading-relaxed",
                children:
                  "Choose the program that best fits your preparation timeline and learning goals. Each course is designed to maximize your CEE success.",
              }),
            ],
          }),
          f.jsx("div", {
            className: "grid md:grid-cols-3 gap-8",
            children: BM.map((e, t) =>
              f.jsxs(
                "div",
                {
                  className: `relative rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 ${e.popular ? "bg-gradient-hero text-primary-foreground shadow-elevated" : "bg-card shadow-soft hover:shadow-card"}`,
                  children: [
                    e.popular &&
                      f.jsx("div", {
                        className: "absolute -top-3 left-1/2 -translate-x-1/2",
                        children: f.jsx("span", {
                          className:
                            "px-4 py-1 bg-accent text-accent-foreground rounded-full text-sm font-semibold",
                          children: "Most Popular",
                        }),
                      }),
                    f.jsxs("div", {
                      className: "mb-6",
                      children: [
                        f.jsx("h3", {
                          className: `font-display text-2xl font-bold mb-2 ${e.popular ? "text-primary-foreground" : "text-foreground"}`,
                          children: e.title,
                        }),
                        f.jsxs("div", {
                          className: `flex items-center gap-4 text-sm ${e.popular ? "text-primary-foreground/80" : "text-muted-foreground"}`,
                          children: [
                            f.jsxs("span", {
                              className: "flex items-center gap-1",
                              children: [
                                f.jsx(wf, { className: "w-4 h-4" }),
                                e.duration,
                              ],
                            }),
                            f.jsxs("span", {
                              className: "flex items-center gap-1",
                              children: [
                                f.jsx(cE, { className: "w-4 h-4" }),
                                e.schedule,
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    f.jsx("ul", {
                      className: "space-y-3 mb-8",
                      children: e.features.map((n) =>
                        f.jsxs(
                          "li",
                          {
                            className: "flex items-start gap-3",
                            children: [
                              f.jsx(xf, {
                                className: `w-5 h-5 mt-0.5 ${e.popular ? "text-primary-foreground" : "text-secondary"}`,
                              }),
                              f.jsx("span", {
                                className: e.popular
                                  ? "text-primary-foreground/90"
                                  : "text-muted-foreground",
                                children: n,
                              }),
                            ],
                          },
                          n,
                        ),
                      ),
                    }),
                    f.jsxs(zr, {
                      variant: e.popular ? "heroOutline" : "default",
                      size: "lg",
                      className: "w-full",
                      children: [
                        "Learn More",
                        f.jsx(vf, { className: "w-4 h-4" }),
                      ],
                    }),
                  ],
                },
                e.title,
              ),
            ),
          }),
        ],
      }),
    }),
  UM = () =>
    f.jsxs("div", {
      className: "min-h-screen bg-background",
      children: [
        f.jsx(Js, {}),
        f.jsx("main", { className: "pt-20", children: f.jsx($M, {}) }),
        f.jsx(ei, {}),
      ],
    }),
  WM = [
    {
      name: "Niraj Chaurasiya [NC Sir]",
      subject: "Physics",
      experience: "5+ Years",
      description:
        "Known for making complex physics concepts easy to understand.",
    },
    {
      name: "Prashant Das",
      subject: "Physics",
      experience: "5 Years",
      description: "Experienced physics educator with proven teaching methods.",
    },
    {
      name: "Pankaj Lal Karn",
      subject: "Physics",
      experience: "3 Years",
      description: "Dedicated physics teacher focused on conceptual clarity.",
    },
    {
      name: "Amish Paudel",
      subject: "Physics",
      experience: "2 Years",
      description: "Young and energetic physics instructor.",
    },
    {
      name: "Sandeep Barai",
      subject: "Physics",
      experience: "2 Years",
      description: "Passionate about teaching physics fundamentals.",
    },
    {
      name: "Sunil Mahato",
      subject: "Chemistry",
      experience: "8 Years",
      description:
        "Senior chemistry expert with extensive teaching experience.",
    },
    {
      name: "Rajan Yadav",
      subject: "Chemistry",
      experience: "4 Years",
      description: "Skilled in breaking down complex chemical reactions.",
    },
    {
      name: "Arvind Sah",
      subject: "Chemistry",
      experience: "2 Years",
      description: "Focused on practical chemistry applications.",
    },
    {
      name: "Adwait Anand",
      subject: "Chemistry (Organic)",
      experience: "2 Years",
      description:
        "Specialist in organic chemistry with clear teaching approach.",
    },
    {
      name: "Asmit Pandey",
      subject: "Botany",
      experience: "4 Years",
      description: "Expert in plant biology and botanical sciences.",
    },
    {
      name: "Ranjan Sah",
      subject: "Botany",
      experience: "2 Years",
      description: "Passionate about teaching plant sciences.",
    },
    {
      name: "Bhim Chapagain",
      subject: "Zoology",
      experience: "4 Years",
      description: "Experienced zoology teacher with deep subject knowledge.",
    },
    {
      name: "Md. Kamraj Alam",
      subject: "Zoology",
      experience: "4 Years",
      description: "Dedicated to making animal biology accessible.",
    },
    {
      name: "Saima Noor",
      subject: "Zoology",
      experience: "4 Years",
      description: "Skilled educator in zoological sciences.",
    },
    {
      name: "Arpaj Giri",
      subject: "Zoology",
      experience: "3 Years",
      description: "Focused on comparative zoology studies.",
    },
    {
      name: "Gauri Shankar Prasad Chaurasiya",
      subject: "MAT",
      experience: "9 Years",
      description: "Section Officer with exceptional mental agility expertise.",
    },
    {
      name: "Satyam Kumar Yadav",
      subject: "MAT",
      experience: "2 Years",
      description: "Skilled in mental agility test preparation.",
    },
  ],
  HM = (e) =>
    e.includes("Physics")
      ? f.jsx(fE, { className: "w-4 h-4" })
      : e.includes("Chemistry")
        ? f.jsx(aE, { className: "w-4 h-4" })
        : e.includes("Botany")
          ? f.jsx(mE, { className: "w-4 h-4" })
          : e.includes("Zoology")
            ? f.jsx(uE, { className: "w-4 h-4" })
            : e.includes("MAT")
              ? f.jsx(lE, { className: "w-4 h-4" })
              : f.jsx(xf, { className: "w-4 h-4" }),
  KM = (e) =>
    e.includes("Physics")
      ? "bg-blue-500/10 text-blue-600"
      : e.includes("Chemistry")
        ? "bg-purple-500/10 text-purple-600"
        : e.includes("Botany")
          ? "bg-green-500/10 text-green-600"
          : e.includes("Zoology")
            ? "bg-orange-500/10 text-orange-600"
            : e.includes("MAT")
              ? "bg-pink-500/10 text-pink-600"
              : "bg-primary/10 text-primary",
  YM = () =>
    f.jsx("section", {
      id: "faculty",
      className: "py-24",
      children: f.jsxs("div", {
        className: "container mx-auto px-4",
        children: [
          f.jsxs("div", {
            className: "text-center max-w-3xl mx-auto mb-16",
            children: [
              f.jsx("span", {
                className:
                  "inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4",
                children: "Our Faculty",
              }),
              f.jsx("h2", {
                className:
                  "font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6",
                children: "Meet Our Expert Teachers",
              }),
              f.jsx("p", {
                className: "text-lg text-muted-foreground leading-relaxed",
                children:
                  "Learn from passionate medical educators committed to nurturing Nepal's next generation of doctors. Our faculty brings years of experience and dedication.",
              }),
            ],
          }),
          f.jsx("div", {
            className:
              "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",
            children: WM.map((e) =>
              f.jsx(
                "div",
                {
                  className:
                    "group bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 border border-border",
                  children: f.jsxs("div", {
                    className: "p-5",
                    children: [
                      f.jsx("div", {
                        className: "mb-3",
                        children: f.jsxs("span", {
                          className: `inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full ${KM(e.subject)}`,
                          children: [HM(e.subject), e.subject],
                        }),
                      }),
                      f.jsx("h3", {
                        className:
                          "font-display text-lg font-bold text-foreground mb-2",
                        children: e.name,
                      }),
                      f.jsx("p", {
                        className:
                          "text-muted-foreground text-sm mb-4 leading-relaxed",
                        children: e.description,
                      }),
                      f.jsxs("div", {
                        className:
                          "flex items-center gap-2 pt-3 border-t border-border",
                        children: [
                          f.jsx(Oc, { className: "w-4 h-4 text-accent" }),
                          f.jsx("span", {
                            className: "text-sm font-medium text-foreground",
                            children: e.experience,
                          }),
                        ],
                      }),
                    ],
                  }),
                },
                e.name,
              ),
            ),
          }),
          f.jsx("div", {
            className: "mt-12 text-center",
            children: f.jsxs("div", {
              className:
                "inline-flex items-center gap-3 px-6 py-3 bg-muted rounded-full",
              children: [
                f.jsx("span", {
                  className: "text-muted-foreground",
                  children: "Want to join our team?",
                }),
                f.jsx("a", {
                  href: "/contact",
                  className:
                    "text-primary font-semibold hover:text-primary/80 transition-colors",
                  children: "Apply Now →",
                }),
              ],
            }),
          }),
        ],
      }),
    }),
  GM = () =>
    f.jsxs("div", {
      className: "min-h-screen bg-background",
      children: [
        f.jsx(Js, {}),
        f.jsx("main", { className: "pt-20", children: f.jsx(YM, {}) }),
        f.jsx(ei, {}),
      ],
    }),
  QM = () =>
    f.jsxs("div", {
      className: "min-h-screen bg-background",
      children: [
        f.jsx(Js, {}),
        f.jsx("main", { className: "pt-20", children: f.jsx(Ew, {}) }),
        f.jsx(ei, {}),
      ],
    }),
  XM = "https://hook.eu1.make.com/piu6tpc9q8gzb12td2fxbzfvn1qan5h5",
  qM = () => {
    const { toast: e } = t0(),
      [t, n] = w.useState(!1),
      [r, s] = w.useState({
        name: "",
        phone: "",
        email: "",
        program: "",
        message: "",
      }),
      i = (a) => {
        s((l) => ({ ...l, [a.target.name]: a.target.value }));
      },
      o = async (a) => {
        if (
          (a.preventDefault(),
          !r.name.trim() || !r.phone.trim() || !r.email.trim())
        ) {
          e({
            title: "Please fill in all required fields",
            variant: "destructive",
          });
          return;
        }
        n(!0);
        try {
          if (
            !(
              await fetch(XM, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  name: r.name.trim(),
                  phone: r.phone.trim(),
                  email: r.email.trim(),
                  program: r.program,
                  message: r.message.trim(),
                }),
              })
            ).ok
          )
            throw new Error("Request failed");
          (e({
            title: "Message sent successfully!",
            description: "We'll get back to you within 24 hours.",
          }),
            s({ name: "", phone: "", email: "", program: "", message: "" }));
        } catch {
          e({
            title: "Failed to send message",
            description: "Please try again or contact us directly.",
            variant: "destructive",
          });
        } finally {
          n(!1);
        }
      };
    return f.jsx("section", {
      id: "contact",
      className: "py-24",
      children: f.jsxs("div", {
        className: "container mx-auto px-4",
        children: [
          f.jsxs("div", {
            className: "text-center max-w-3xl mx-auto mb-16",
            children: [
              f.jsx("span", {
                className:
                  "inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4",
                children: "Get In Touch",
              }),
              f.jsx("h2", {
                className:
                  "font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6",
                children: "Start Your Medical Journey",
              }),
              f.jsx("p", {
                className: "text-lg text-muted-foreground leading-relaxed",
                children:
                  "Have questions about our programs? Want to enroll? Reach out to us and our team will get back to you within 24 hours.",
              }),
            ],
          }),
          f.jsxs("div", {
            className: "grid lg:grid-cols-2 gap-12",
            children: [
              f.jsxs("div", {
                className: "bg-card rounded-2xl p-8 shadow-card",
                children: [
                  f.jsx("h3", {
                    className:
                      "font-display text-2xl font-bold text-foreground mb-6",
                    children: "Send us a Message",
                  }),
                  f.jsxs("form", {
                    onSubmit: o,
                    className: "space-y-6",
                    children: [
                      f.jsxs("div", {
                        className: "grid sm:grid-cols-2 gap-6",
                        children: [
                          f.jsxs("div", {
                            children: [
                              f.jsx("label", {
                                className:
                                  "block text-sm font-medium text-foreground mb-2",
                                children: "Full Name *",
                              }),
                              f.jsx("input", {
                                type: "text",
                                name: "name",
                                value: r.name,
                                onChange: i,
                                placeholder: "Enter your name",
                                maxLength: 100,
                                className:
                                  "w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all",
                              }),
                            ],
                          }),
                          f.jsxs("div", {
                            children: [
                              f.jsx("label", {
                                className:
                                  "block text-sm font-medium text-foreground mb-2",
                                children: "Phone Number *",
                              }),
                              f.jsx("input", {
                                type: "tel",
                                name: "phone",
                                value: r.phone,
                                onChange: i,
                                placeholder: "+977 98XXXXXXXX",
                                maxLength: 20,
                                className:
                                  "w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all",
                              }),
                            ],
                          }),
                        ],
                      }),
                      f.jsxs("div", {
                        children: [
                          f.jsx("label", {
                            className:
                              "block text-sm font-medium text-foreground mb-2",
                            children: "Email Address *",
                          }),
                          f.jsx("input", {
                            type: "email",
                            name: "email",
                            value: r.email,
                            onChange: i,
                            placeholder: "your@email.com",
                            maxLength: 255,
                            className:
                              "w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all",
                          }),
                        ],
                      }),
                      f.jsxs("div", {
                        children: [
                          f.jsx("label", {
                            className:
                              "block text-sm font-medium text-foreground mb-2",
                            children: "Interested Program",
                          }),
                          f.jsxs("select", {
                            name: "program",
                            value: r.program,
                            onChange: i,
                            className:
                              "w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all",
                            children: [
                              f.jsx("option", {
                                value: "",
                                children: "Select a program",
                              }),
                              f.jsx("option", {
                                value: "grade-12",
                                children: "Grade 12 CEE Preparation",
                              }),
                              f.jsx("option", {
                                value: "crash",
                                children: "Crash Course",
                              }),
                              f.jsx("option", {
                                value: "test-series",
                                children: "Test Series",
                              }),
                            ],
                          }),
                        ],
                      }),
                      f.jsxs("div", {
                        children: [
                          f.jsx("label", {
                            className:
                              "block text-sm font-medium text-foreground mb-2",
                            children: "Message",
                          }),
                          f.jsx("textarea", {
                            name: "message",
                            value: r.message,
                            onChange: i,
                            rows: 4,
                            placeholder: "Tell us about your goals...",
                            maxLength: 1e3,
                            className:
                              "w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none",
                          }),
                        ],
                      }),
                      f.jsx(zr, {
                        variant: "hero",
                        size: "xl",
                        className: "w-full",
                        type: "submit",
                        disabled: t,
                        children: t
                          ? f.jsxs(f.Fragment, {
                              children: [
                                "Sending...",
                                f.jsx(gE, {
                                  className: "w-5 h-5 animate-spin",
                                }),
                              ],
                            })
                          : f.jsxs(f.Fragment, {
                              children: [
                                "Send Message",
                                f.jsx(wE, { className: "w-5 h-5" }),
                              ],
                            }),
                      }),
                    ],
                  }),
                ],
              }),
              f.jsxs("div", {
                className: "space-y-8",
                children: [
                  f.jsxs("div", {
                    className:
                      "bg-gradient-hero rounded-2xl p-8 text-primary-foreground shadow-elevated",
                    children: [
                      f.jsx("h3", {
                        className: "font-display text-2xl font-bold mb-6",
                        children: "Contact Information",
                      }),
                      f.jsxs("div", {
                        className: "space-y-6",
                        children: [
                          f.jsxs("div", {
                            className: "flex items-start gap-4",
                            children: [
                              f.jsx("div", {
                                className:
                                  "w-12 h-12 rounded-lg bg-primary-foreground/20 flex items-center justify-center shrink-0",
                                children: f.jsx(Fp, { className: "w-6 h-6" }),
                              }),
                              f.jsxs("div", {
                                children: [
                                  f.jsx("h4", {
                                    className: "font-semibold mb-1",
                                    children: "Our Location",
                                  }),
                                  f.jsxs("p", {
                                    className: "text-primary-foreground/80",
                                    children: [
                                      "Dhulikhel, Kavre",
                                      f.jsx("br", {}),
                                      "Nepal",
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          f.jsxs("div", {
                            className: "flex items-start gap-4",
                            children: [
                              f.jsx("div", {
                                className:
                                  "w-12 h-12 rounded-lg bg-primary-foreground/20 flex items-center justify-center shrink-0",
                                children: f.jsx(M0, { className: "w-6 h-6" }),
                              }),
                              f.jsxs("div", {
                                children: [
                                  f.jsx("h4", {
                                    className: "font-semibold mb-1",
                                    children: "Call/WhatsApp",
                                  }),
                                  f.jsxs("p", {
                                    className: "text-primary-foreground/80",
                                    children: [
                                      "+977-9844251517",
                                      f.jsx("br", {}),
                                      "+977-9843151077",
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          f.jsxs("div", {
                            className: "flex items-start gap-4",
                            children: [
                              f.jsx("div", {
                                className:
                                  "w-12 h-12 rounded-lg bg-primary-foreground/20 flex items-center justify-center shrink-0",
                                children: f.jsx(yE, { className: "w-6 h-6" }),
                              }),
                              f.jsxs("div", {
                                children: [
                                  f.jsx("h4", {
                                    className: "font-semibold mb-1",
                                    children: "Email Address",
                                  }),
                                  f.jsx("p", {
                                    className: "text-primary-foreground/80",
                                    children:
                                      "paradisembbsentranceprep@gmail.com",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          f.jsxs("div", {
                            className: "flex items-start gap-4",
                            children: [
                              f.jsx("div", {
                                className:
                                  "w-12 h-12 rounded-lg bg-primary-foreground/20 flex items-center justify-center shrink-0",
                                children: f.jsx(wf, { className: "w-6 h-6" }),
                              }),
                              f.jsxs("div", {
                                children: [
                                  f.jsx("h4", {
                                    className: "font-semibold mb-1",
                                    children: "Office Hours",
                                  }),
                                  f.jsxs("p", {
                                    className: "text-primary-foreground/80",
                                    children: [
                                      "Sunday - Friday: 7:00 AM - 7:00 PM",
                                      f.jsx("br", {}),
                                      "Saturday: 8:00 AM - 5:00 PM",
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  f.jsx("div", {
                    className:
                      "bg-card rounded-2xl p-2 shadow-soft overflow-hidden",
                    children: f.jsx("div", {
                      className:
                        "aspect-video rounded-xl bg-muted flex items-center justify-center",
                      children: f.jsxs("div", {
                        className: "text-center",
                        children: [
                          f.jsx(Fp, {
                            className:
                              "w-12 h-12 text-muted-foreground mx-auto mb-2",
                          }),
                          f.jsx("p", {
                            className: "text-muted-foreground",
                            children: "Dhulikhel, Kavre",
                          }),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  },
  ZM = () =>
    f.jsxs("div", {
      className: "min-h-screen bg-background",
      children: [
        f.jsx(Js, {}),
        f.jsx("main", { className: "pt-20", children: f.jsx(qM, {}) }),
        f.jsx(ei, {}),
      ],
    }),
  JM = () => {
    const e = Hr();
    return (
      w.useEffect(() => {
        console.error(
          "404 Error: User attempted to access non-existent route:",
          e.pathname,
        );
      }, [e.pathname]),
      f.jsx("div", {
        className: "flex min-h-screen items-center justify-center bg-muted",
        children: f.jsxs("div", {
          className: "text-center",
          children: [
            f.jsx("h1", {
              className: "mb-4 text-4xl font-bold",
              children: "404",
            }),
            f.jsx("p", {
              className: "mb-4 text-xl text-muted-foreground",
              children: "Oops! Page not found",
            }),
            f.jsx("a", {
              href: "/",
              className: "text-primary underline hover:text-primary/90",
              children: "Return to Home",
            }),
          ],
        }),
      })
    );
  },
  e4 = new Hk(),
  t4 = () => {
    const e = Hr();
    return f.jsx(cw, {
      mode: "wait",
      children: f.jsxs(
        F2,
        {
          location: e,
          children: [
            f.jsx(jn, {
              path: "/",
              element: f.jsx(gr, { children: f.jsx(FM, {}) }),
            }),
            f.jsx(jn, {
              path: "/about",
              element: f.jsx(gr, { children: f.jsx(zM, {}) }),
            }),
            f.jsx(jn, {
              path: "/programs",
              element: f.jsx(gr, { children: f.jsx(UM, {}) }),
            }),
            f.jsx(jn, {
              path: "/faculty",
              element: f.jsx(gr, { children: f.jsx(GM, {}) }),
            }),
            f.jsx(jn, {
              path: "/specialties",
              element: f.jsx(gr, { children: f.jsx(QM, {}) }),
            }),
            f.jsx(jn, {
              path: "/contact",
              element: f.jsx(gr, { children: f.jsx(ZM, {}) }),
            }),
            f.jsx(jn, {
              path: "*",
              element: f.jsx(gr, { children: f.jsx(JM, {}) }),
            }),
          ],
        },
        e.pathname,
      ),
    });
  },
  n4 = () =>
    f.jsx(Yk, {
      client: e4,
      children: f.jsxs(bk, {
        children: [
          f.jsx(sP, {}),
          f.jsx(IP, {}),
          f.jsx(W2, { children: f.jsx(t4, {}) }),
        ],
      }),
    });
e0(document.getElementById("root")).render(f.jsx(n4, {}));
