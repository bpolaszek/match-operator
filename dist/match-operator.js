class s extends Error {
  constructor(r, ...t) {
    super(...t), this.name = "UnhandledMatchError", this.message = `Unhandled match value of type ${typeof r} - ${r}`, Error.captureStackTrace(this, s);
  }
}
const a = Symbol(), h = (e, r) => {
  const t = /* @__PURE__ */ new Map();
  for (const [...n] of r) {
    const f = n.pop();
    for (const c of n.flat())
      t.has(c) || t.set(c, f);
  }
  if (!t.has(e) && !t.has(a))
    throw new s(e);
  const o = t.get(e) ?? t.get(a);
  return typeof o == "function" ? o(e) : o;
};
h.default = a;
export {
  h as default
};
