import{isMainThread as J}from"worker_threads";import{i as w,a as M,m as N}from"../node-features-fb266590.mjs";import U from"module";import{installSourceMapSupport as y}from"../source-map.mjs";import f from"path";import{fileURLToPath as _,pathToFileURL as D}from"url";import{b as A,t as b}from"../index-29948669.mjs";import{i as x,r as I}from"../is-relative-path-pattern-ce88a5ac.mjs";import{p as P}from"../client-d4eccf9f.mjs";import{parseTsconfig as L,getTsconfig as $,createFilesMatcher as C,createPathsMatcher as W}from"get-tsconfig";import T from"fs";import"esbuild";import"crypto";import"os";import"../temporary-directory-04b36185.mjs";import"net";import"../get-pipe-path-9a395441.mjs";const q=()=>{y(),U.register("./index.mjs",{parentURL:import.meta.url,data:!0})},u=new Map,G=async t=>{if(u.has(t))return u.get(t);if(!await T.promises.access(t).then(()=>!0,()=>!1)){u.set(t,void 0);return}const s=await T.promises.readFile(t,"utf8");try{const e=JSON.parse(s);return u.set(t,e),e}catch{throw new Error(`Error parsing: ${t}`)}},H=async t=>{let r=new URL("package.json",t);for(;!r.pathname.endsWith("/node_modules/package.json");){const s=_(r),e=await G(s);if(e)return e;const a=r;if(r=new URL("../package.json",r),r.pathname===a.pathname)break}},X=async t=>{var r;const s=await H(t);return(r=s==null?void 0:s.type)!=null?r:"commonjs"};var E,k;const m=process.env.TSX_TSCONFIG_PATH?{path:f.resolve(process.env.TSX_TSCONFIG_PATH),config:L(process.env.TSX_TSCONFIG_PATH)}:$(),K=m&&C(m),R=m&&W(m),Q=(k=(E=m==null?void 0:m.config.compilerOptions)==null?void 0:E.allowJs)!=null?k:!1,j="file://",l=/\.([cm]?ts|[tj]sx)($|\?)/,z=/\.json(?:$|\?)/,B=t=>{const r=f.extname(t);if(r===".json")return"json";if(r===".mjs"||r===".mts")return"module";if(r===".cjs"||r===".cts")return"commonjs"},V=t=>{const r=B(t);if(r)return r;if(l.test(t))return X(t)},O=y(),S=/\/(?:$|\?)/,Y=async t=>{if(!t)throw new Error(`tsx must be loaded with --import instead of --loader
The --loader flag was deprecated in Node v20.6.0 and v18.19.0`)},Z=()=>`
const require = getBuiltin('module').createRequire("${import.meta.url}");
require('../source-map.cjs').installSourceMapSupport();
`,d=async(t,r,s)=>{const e=await t(r,s);return!e.format&&e.url.startsWith(j)&&(e.format=await V(e.url)),e},tt=[".js",".json",".ts",".tsx",".jsx"],h=async(t,r,s)=>{const[e,a]=t.split("?");let c;for(const n of tt)try{return await d(s,e+n+(a?`?${a}`:""),r)}catch(o){if(c===void 0&&o instanceof Error){const{message:i}=o;o.message=o.message.replace(`${n}'`,"'"),o.stack=o.stack.replace(i,o.message),c=o}}throw c},v=async(t,r,s)=>{const e=S.test(t),a=e?"index":"/index",[c,n]=t.split("?");try{return await h(c+a+(n?`?${n}`:""),r,s)}catch(o){if(!e)try{return await h(t,r,s)}catch{}const i=o,{message:p}=i;throw i.message=i.message.replace(`${a.replace("/",f.sep)}'`,"'"),i.stack=i.stack.replace(p,i.message),i}},F=async(t,r,s,e)=>{var a;if(S.test(t))return await v(t,r,s);const c=t.startsWith(j)||x.test(t);if(R&&!c&&!((a=r.parentURL)!=null&&a.includes("/node_modules/"))){const n=R(t);for(const o of n)try{return await F(D(o).toString(),r,s)}catch{}}if(l.test(r.parentURL)||Q){const n=I(t);if(n)for(const o of n)try{return await d(s,o,r)}catch(i){const{code:p}=i;if(p!=="ERR_MODULE_NOT_FOUND"&&p!=="ERR_PACKAGE_PATH_NOT_EXPORTED")throw i}}try{return await d(s,t,r)}catch(n){if(n instanceof Error&&!e){const{code:o}=n;if(o==="ERR_UNSUPPORTED_DIR_IMPORT")try{return await v(t,r,s)}catch(i){if(i.code!=="ERR_PACKAGE_IMPORT_NOT_DEFINED")throw i}if(o==="ERR_MODULE_NOT_FOUND")try{return await h(t,r,s)}catch{}}throw n}},g=w(M)?"importAttributes":"importAssertions",rt=async(t,r,s)=>{var e;P.send&&P.send({type:"dependency",path:t}),z.test(t)&&(r[g]||(r[g]={}),r[g].type="json");const a=await s(t,r);if(!a.source)return a;const c=t.startsWith("file://")?_(t):t,n=a.source.toString();if(a.format==="json"||l.test(t)){const o=await A(n,c,{tsconfigRaw:(e=K)==null?void 0:e(c)});return{format:"module",source:O(o)}}if(a.format==="module"){const o=b(c,n);o&&(a.source=O(o))}return a};w(N)&&J&&q();export{Z as globalPreload,Y as initialize,rt as load,F as resolve};
