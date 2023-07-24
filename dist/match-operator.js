class o extends Error {
  constructor(e, ...t) {
    super(...t), this.name = "UnhandledMatchError", this.message = `Unhandled match value of type ${typeof e} - ${e}`, Error.captureStackTrace(this, o);
  }
}
const a = Symbol(), h = (r, e) => {
  const t = /* @__PURE__ */ new Map();
  for (const [...s] of e) {
    const c = s.pop();
    for (const n of s.flat())
      t.has(n) || t.set(n, c);
  }
  if (!t.has(r) && !t.has(a))
    throw new o(r);
  return t.get(r) ?? t.get(a);
};
h.default = a;
export {
  h as default
};
