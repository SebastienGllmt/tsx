"use strict";var q=require("./pkgroll_create-require-c530e400.cjs"),a=require("repl"),n=require("esbuild"),r=require("./esm/index.cjs");require("module"),require("worker_threads"),require("./node-features-c450ed54.cjs"),require("./source-map.cjs"),require("path"),require("url"),require("./index-971a6964.cjs"),require("crypto"),require("fs"),require("os"),require("./temporary-directory-2a027842.cjs"),require("./is-relative-path-pattern-d3bd85cb.cjs"),require("./client-fc143b89.cjs"),require("net"),require("./get-pipe-path-c9250f59.cjs"),require("get-tsconfig");const c=e=>{const{eval:u}=e,l=async function(i,s,t,o){try{i=(await n.transform(i,{sourcefile:t,loader:"ts",tsconfigRaw:{compilerOptions:{preserveValueImports:!0}},define:{require:"global.require"}})).code}catch{}return u.call(this,i,s,t,o)};e.eval=l},{start:v}=a;a.start=function(){const e=Reflect.apply(v,this,arguments);return c(e),e},q.require("./cjs/index.cjs"),exports.globalPreload=r.globalPreload,exports.initialize=r.initialize,exports.load=r.load,exports.resolve=r.resolve;
