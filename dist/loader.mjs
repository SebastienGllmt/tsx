import{r as s}from"./pkgroll_create-require-b92e8e0d.mjs";import i from"repl";import{transform as l}from"esbuild";import{globalPreload as C,initialize as D,load as F,resolve as G}from"./esm/index.mjs";import"module";import"worker_threads";import"./node-features-fb266590.mjs";import"./source-map.mjs";import"path";import"url";import"./index-29948669.mjs";import"crypto";import"fs";import"os";import"./temporary-directory-04b36185.mjs";import"./is-relative-path-pattern-ce88a5ac.mjs";import"./client-d4eccf9f.mjs";import"net";import"./get-pipe-path-9a395441.mjs";import"get-tsconfig";const n=r=>{const{eval:e}=r,p=async function(t,m,o,a){try{t=(await l(t,{sourcefile:o,loader:"ts",tsconfigRaw:{compilerOptions:{preserveValueImports:!0}},define:{require:"global.require"}})).code}catch{}return e.call(this,t,m,o,a)};r.eval=p},{start:c}=i;i.start=function(){const r=Reflect.apply(c,this,arguments);return n(r),r},s("./cjs/index.cjs");export{C as globalPreload,D as initialize,F as load,G as resolve};
