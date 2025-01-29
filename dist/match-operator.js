class f extends Error {
  constructor(e, ...n) {
    super(...n), this.name = "UnhandledMatchError", this.message = `Unhandled match value of type ${typeof e} - ${e}`, Error.captureStackTrace(this, f);
  }
}
const a = Symbol();
function h(t) {
  throw t;
}
const p = (t) => h(new f(t)), d = (t, e, n = p) => {
  const r = /* @__PURE__ */ new Map(), l = Array.isArray(e) ? e : Object.entries(e).map(([o, c]) => [o, c]);
  for (const [...o] of l) {
    const c = o.pop();
    for (const i of o.flat())
      r.has(i) || r.set(i, c);
  }
  r.has(a) || r.set(a, n);
  const s = r.get(t) ?? r.get(a);
  return typeof s == "function" ? s(t) : s;
};
d.default = a;
export {
  d as default
};
