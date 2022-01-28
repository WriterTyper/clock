var app = (function () {
  "use strict";
  function t() {}
  function n(t) {
    return t();
  }
  function e() {
    return Object.create(null);
  }
  function o(t) {
    t.forEach(n);
  }
  function r(t) {
    return "function" == typeof t;
  }
  function c(t, n) {
    return t != t
      ? n == n
      : t !== n || (t && "object" == typeof t) || "function" == typeof t;
  }
  function u(t, n) {
    t.appendChild(n);
  }
  function i(t, n, e) {
    t.insertBefore(n, e || null);
  }
  function s(t) {
    t.parentNode.removeChild(t);
  }
  function a(t) {
    return document.createElement(t);
  }
  function f(t) {
    return document.createTextNode(t);
  }
  function l() {
    return f(" ");
  }
  function d(t, n) {
    (n = "" + n), t.wholeText !== n && (t.data = n);
  }
  let $;
  function p(t) {
    $ = t;
  }
  function h(t) {
    (function () {
      if (!$)
        throw new Error("Function called outside component initialization");
      return $;
    })().$$.on_mount.push(t);
  }
  const m = [],
    g = [],
    y = [],
    _ = [],
    b = Promise.resolve();
  let x = !1;
  function w(t) {
    y.push(t);
  }
  const k = new Set();
  let v = 0;
  function E() {
    const t = $;
    do {
      for (; v < m.length; ) {
        const t = m[v];
        v++, p(t), C(t.$$);
      }
      for (p(null), m.length = 0, v = 0; g.length; ) g.pop()();
      for (let t = 0; t < y.length; t += 1) {
        const n = y[t];
        k.has(n) || (k.add(n), n());
      }
      y.length = 0;
    } while (m.length);
    for (; _.length; ) _.pop()();
    (x = !1), k.clear(), p(t);
  }
  function C(t) {
    if (null !== t.fragment) {
      t.update(), o(t.before_update);
      const n = t.dirty;
      (t.dirty = [-1]),
        t.fragment && t.fragment.p(t.ctx, n),
        t.after_update.forEach(w);
    }
  }
  const T = new Set();
  function j(t, n) {
    -1 === t.$$.dirty[0] &&
      (m.push(t), x || ((x = !0), b.then(E)), t.$$.dirty.fill(0)),
      (t.$$.dirty[(n / 31) | 0] |= 1 << n % 31);
  }
  function N(c, u, i, a, f, l, d, h = [-1]) {
    const m = $;
    p(c);
    const g = (c.$$ = {
      fragment: null,
      ctx: null,
      props: l,
      update: t,
      not_equal: f,
      bound: e(),
      on_mount: [],
      on_destroy: [],
      on_disconnect: [],
      before_update: [],
      after_update: [],
      context: new Map(u.context || (m ? m.$$.context : [])),
      callbacks: e(),
      dirty: h,
      skip_bound: !1,
      root: u.target || m.$$.root,
    });
    d && d(g.root);
    let y = !1;
    if (
      ((g.ctx = i
        ? i(c, u.props || {}, (t, n, ...e) => {
            const o = e.length ? e[0] : n;
            return (
              g.ctx &&
                f(g.ctx[t], (g.ctx[t] = o)) &&
                (!g.skip_bound && g.bound[t] && g.bound[t](o), y && j(c, t)),
              n
            );
          })
        : []),
      g.update(),
      (y = !0),
      o(g.before_update),
      (g.fragment = !!a && a(g.ctx)),
      u.target)
    ) {
      if (u.hydrate) {
        const t = (function (t) {
          return Array.from(t.childNodes);
        })(u.target);
        g.fragment && g.fragment.l(t), t.forEach(s);
      } else g.fragment && g.fragment.c();
      u.intro && (_ = c.$$.fragment) && _.i && (T.delete(_), _.i(b)),
        (function (t, e, c, u) {
          const {
            fragment: i,
            on_mount: s,
            on_destroy: a,
            after_update: f,
          } = t.$$;
          i && i.m(e, c),
            u ||
              w(() => {
                const e = s.map(n).filter(r);
                a ? a.push(...e) : o(e), (t.$$.on_mount = []);
              }),
            f.forEach(w);
        })(c, u.target, u.anchor, u.customElement),
        E();
    }
    var _, b;
    p(m);
  }
  function O(n) {
    let e, o, r, c, $, p, h, m, g, y;
    return {
      c() {
        (e = a("h1")),
          (e.textContent = "A Clock of Time"),
          (o = l()),
          (r = a("p")),
          (r.textContent =
            "What if time is reimagined this way. Because seconds turn to minutes, minutes to hours, hours to days."),
          (c = l()),
          ($ = a("main")),
          (p = f(n[0])),
          (h = f(" : ")),
          (m = f(n[1])),
          (g = f(" : ")),
          (y = f(n[2]));
      },
      m(t, n) {
        i(t, e, n),
          i(t, o, n),
          i(t, r, n),
          i(t, c, n),
          i(t, $, n),
          u($, p),
          u($, h),
          u($, m),
          u($, g),
          u($, y);
      },
      p(t, [n]) {
        1 & n && d(p, t[0]), 2 & n && d(m, t[1]), 4 & n && d(y, t[2]);
      },
      i: t,
      o: t,
      d(t) {
        t && s(e), t && s(o), t && s(r), t && s(c), t && s($);
      },
    };
  }
  function S(t, n, e) {
    let o,
      r,
      c,
      u = new Date();
    return (
      h(() => {
        const t = setInterval(() => {
          e(3, (u = new Date()));
        }, 1e3);
        return () => {
          clearInterval(t);
        };
      }),
      (t.$$.update = () => {
        8 & t.$$.dirty && e(2, (o = u.getHours())),
          8 & t.$$.dirty && e(1, (r = u.getMinutes())),
          8 & t.$$.dirty && e(0, (c = u.getSeconds()));
      }),
      [c, r, o, u]
    );
  }
  return new (class extends class {
    $destroy() {
      !(function (t, n) {
        const e = t.$$;
        null !== e.fragment &&
          (o(e.on_destroy),
          e.fragment && e.fragment.d(n),
          (e.on_destroy = e.fragment = null),
          (e.ctx = []));
      })(this, 1),
        (this.$destroy = t);
    }
    $on(t, n) {
      const e = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
      return (
        e.push(n),
        () => {
          const t = e.indexOf(n);
          -1 !== t && e.splice(t, 1);
        }
      );
    }
    $set(t) {
      var n;
      this.$$set &&
        ((n = t), 0 !== Object.keys(n).length) &&
        ((this.$$.skip_bound = !0), this.$$set(t), (this.$$.skip_bound = !1));
    }
  } {
    constructor(t) {
      super(), N(this, t, S, O, c, {});
    }
  })({ target: document.body, props: { name: "lo" } });
})();
//# sourceMappingURL=bundle.js.map
