(function(e,o){typeof exports=="object"&&typeof module<"u"?module.exports=o():typeof define=="function"&&define.amd?define(o):(e=typeof globalThis<"u"?globalThis:e||self,e["match-operator"]=o())})(this,function(){"use strict";class e extends Error{constructor(r,...f){super(...f),this.name="UnhandledMatchError",this.message=`Unhandled match value of type ${typeof r} - ${r}`,Error.captureStackTrace(this,e)}}function o(t){throw t}const s=Symbol(),d=t=>o(new e(t)),c=(t,r,f=d)=>{const n=new Map;for(const[...i]of r){const l=i.pop();for(const u of i.flat())n.has(u)||n.set(u,l)}n.has(s)||n.set(s,f);const a=n.get(t)??n.get(s);return typeof a=="function"?a(t):a};return c.default=s,c});
