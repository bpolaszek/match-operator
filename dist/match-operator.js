class n extends Error {
  constructor(o, ...s) {
    super(...s), this.name = "UnhandledMatchError", this.message = `Unhandled match value of type ${typeof o} - ${o}`, Error.captureStackTrace(this, n);
  }
}
function u(t) {
  throw t;
}
const r = Symbol(), h = (t) => u(new n(t)), d = (t, o, s = h) => {
  const e = /* @__PURE__ */ new Map();
  for (const [...c] of o) {
    const l = c.pop();
    for (const f of c.flat())
      e.has(f) || e.set(f, l);
  }
  e.has(r) || e.set(r, s);
  const a = e.get(t) ?? e.get(r);
  return typeof a == "function" ? a(t) : a;
};
d.default = r;
export {
  d as default
};
