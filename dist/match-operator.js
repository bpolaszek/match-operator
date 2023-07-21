class o extends Error {
  constructor(a, ...e) {
    super(...e), this.name = "UnhandledMatchError", this.message = `Unhandled match value of type ${typeof a}`, Error.captureStackTrace(this, o);
  }
}
const s = Symbol(), c = (t, a) => {
  const e = /* @__PURE__ */ new Map();
  for (const l of a) {
    let [r, h] = l;
    Array.isArray(r) || (r = [r]);
    for (let n of r)
      e.has(n) || e.set(n, h);
  }
  if (!e.has(t) && !e.has(s))
    throw new o(t);
  return e.get(t) ?? e.get(s);
};
c.default = s;
export {
  c as default
};
