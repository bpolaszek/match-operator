class s extends Error {
  constructor(e, ...t) {
    super(...t), this.name = "UnhandledMatchError", this.message = `Unhandled match value of type ${typeof e} - ${e}`, Error.captureStackTrace(this, s);
  }
}
const r = Symbol(), h = (a, e) => {
  const t = /* @__PURE__ */ new Map();
  for (const [...n] of e) {
    const o = n.pop();
    if (!o) continue;
    const f = typeof o == "function" ? o() : o;
    for (const c of n.flat())
      t.has(c) || t.set(c, f);
  }
  if (!t.has(a) && !t.has(r))
    throw new s(a);
  return t.get(a) ?? t.get(r);
};
h.default = r;
export {
  h as default
};
