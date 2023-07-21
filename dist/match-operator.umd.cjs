(function (t, r) {
  typeof exports == "object" && typeof module < "u" ? module.exports = r() : typeof define == "function" && define.amd ? define(r) : (t = typeof globalThis < "u" ? globalThis : t || self, t["match-operator"] = r());
})(this, function () {
  "use strict";

  class t extends Error {
    constructor(s, ...e) {
      super(...e), this.name = "UnhandledMatchError", this.message = `Unhandled match value of type ${typeof s}`, Error.captureStackTrace(this, t);
    }
  }

  const r = Symbol(), a = (n, s) => {
    const e = new Map;
    for (const i of s) {
      let [o, d] = i;
      Array.isArray(o) || (o = [o]);
      for (let f of o) e.has(f) || e.set(f, d);
    }
    if (!e.has(n) && !e.has(r)) throw new t(n);
    return e.get(n) ?? e.get(r);
  };
  return a.default = r, a;
});
