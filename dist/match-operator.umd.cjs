(function(t,o){typeof exports=="object"&&typeof module<"u"?module.exports=o():typeof define=="function"&&define.amd?define(o):(t=typeof globalThis<"u"?globalThis:t||self,t["match-operator"]=o())})(this,function(){"use strict";class t extends Error{constructor(r,...e){super(...e),this.name="UnhandledMatchError",this.message=`Unhandled match value of type ${typeof r} - ${r}`,Error.captureStackTrace(this,t)}}const o=Symbol(),f=(n,r)=>{const e=new Map;for(const[...a]of r){const c=a.pop();for(const i of a.flat())e.has(i)||e.set(i,c)}if(!e.has(n)&&!e.has(o))throw new t(n);const s=e.get(n)??e.get(o);return typeof s=="function"?s(n):s};return f.default=o,f});
