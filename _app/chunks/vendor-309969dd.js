function x(){}const X=t=>t;function mt(t,e){for(const n in e)t[n]=e[n];return t}function Y(t){return t()}function Z(){return Object.create(null)}function v(t){t.forEach(Y)}function F(t){return typeof t=="function"}function yt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let M;function Ft(t,e){return M||(M=document.createElement("a")),M.href=e,t===M.href}function pt(t){return Object.keys(t).length===0}function It(t,e,n,i){if(t){const r=tt(t,e,n,i);return t[0](r)}}function tt(t,e,n,i){return t[1]&&i?mt(n.ctx.slice(),t[1](i(e))):n.ctx}function Ht(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const u=[],c=Math.max(e.dirty.length,r.length);for(let o=0;o<c;o+=1)u[o]=e.dirty[o]|r[o];return u}return e.dirty|r}return e.dirty}function Wt(t,e,n,i,r,u){if(r){const c=tt(e,n,i,u);t.p(c,r)}}function Gt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}const et=typeof window!="undefined";let nt=et?()=>window.performance.now():()=>Date.now(),I=et?t=>requestAnimationFrame(t):x;const E=new Set;function it(t){E.forEach(e=>{e.c(t)||(E.delete(e),e.f())}),E.size!==0&&I(it)}function rt(t){let e;return E.size===0&&I(it),{promise:new Promise(n=>{E.add(e={c:t,f:n})}),abort(){E.delete(e)}}}let O=!1;function gt(){O=!0}function bt(){O=!1}function wt(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function xt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const s=[];for(let l=0;l<e.length;l++){const _=e[l];_.claim_order!==void 0&&s.push(_)}e=s}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let s=0;s<e.length;s++){const l=e[s].claim_order,_=(r>0&&e[n[r]].claim_order<=l?r+1:wt(1,r,a=>e[n[a]].claim_order,l))-1;i[s]=n[_]+1;const f=_+1;n[f]=s,r=Math.max(f,r)}const u=[],c=[];let o=e.length-1;for(let s=n[r]+1;s!=0;s=i[s-1]){for(u.push(e[s-1]);o>=s;o--)c.push(e[o]);o--}for(;o>=0;o--)c.push(e[o]);u.reverse(),c.sort((s,l)=>s.claim_order-l.claim_order);for(let s=0,l=0;s<c.length;s++){for(;l<u.length&&c[s].claim_order>=u[l].claim_order;)l++;const _=l<u.length?u[l]:null;t.insertBefore(c[s],_)}}function $t(t,e){t.appendChild(e)}function st(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function kt(t){const e=ct("style");return vt(st(t),e),e}function vt(t,e){$t(t.head||t,e)}function Et(t,e){if(O){for(xt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Jt(t,e,n){O&&!n?Et(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function St(t){t.parentNode.removeChild(t)}function ct(t){return document.createElement(t)}function H(t){return document.createTextNode(t)}function Kt(){return H(" ")}function Qt(){return H("")}function Ut(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Vt(t){return function(e){return e.preventDefault(),t.call(this,e)}}function Xt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function At(t){return Array.from(t.childNodes)}function Nt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function lt(t,e,n,i,r=!1){Nt(t);const u=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const o=t[c];if(e(o)){const s=n(o);return s===void 0?t.splice(c,1):t[c]=s,r||(t.claim_info.last_index=c),o}}for(let c=t.claim_info.last_index-1;c>=0;c--){const o=t[c];if(e(o)){const s=n(o);return s===void 0?t.splice(c,1):t[c]=s,r?s===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,o}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function jt(t,e,n,i){return lt(t,r=>r.nodeName===e,r=>{const u=[];for(let c=0;c<r.attributes.length;c++){const o=r.attributes[c];n[o.name]||u.push(o.name)}u.forEach(c=>r.removeAttribute(c))},()=>i(e))}function Yt(t,e,n){return jt(t,e,n,ct)}function Ct(t,e){return lt(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>H(e),!0)}function Zt(t){return Ct(t," ")}function te(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function ee(t,e,n,i){t.style.setProperty(e,n,i?"important":"")}function qt(t,e,n=!1){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,!1,e),i}function ne(t,e=document.body){return Array.from(e.querySelectorAll(t))}const W=new Set;let R=0;function Mt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function ot(t,e,n,i,r,u,c,o=0){const s=16.666/i;let l=`{
`;for(let y=0;y<=1;y+=s){const w=e+(n-e)*u(y);l+=y*100+`%{${c(w,1-w)}}
`}const _=l+`100% {${c(n,1-n)}}
}`,f=`__svelte_${Mt(_)}_${o}`,a=st(t);W.add(a);const d=a.__svelte_stylesheet||(a.__svelte_stylesheet=kt(t).sheet),h=a.__svelte_rules||(a.__svelte_rules={});h[f]||(h[f]=!0,d.insertRule(`@keyframes ${f} ${_}`,d.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${f} ${i}ms linear ${r}ms 1 both`,R+=1,f}function G(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?u=>u.indexOf(e)<0:u=>u.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),R-=r,R||Ot())}function Ot(){I(()=>{R||(W.forEach(t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}}),W.clear())})}let T;function z(t){T=t}function J(){if(!T)throw new Error("Function called outside component initialization");return T}function ie(t){J().$$.on_mount.push(t)}function re(t){J().$$.after_update.push(t)}function se(t,e){J().$$.context.set(t,e)}const N=[],ut=[],D=[],at=[],Rt=Promise.resolve();let K=!1;function Tt(){K||(K=!0,Rt.then(ft))}function j(t){D.push(t)}let Q=!1;const U=new Set;function ft(){if(!Q){Q=!0;do{for(let t=0;t<N.length;t+=1){const e=N[t];z(e),zt(e.$$)}for(z(null),N.length=0;ut.length;)ut.pop()();for(let t=0;t<D.length;t+=1){const e=D[t];U.has(e)||(U.add(e),e())}D.length=0}while(N.length);for(;at.length;)at.pop()();K=!1,Q=!1,U.clear()}}function zt(t){if(t.fragment!==null){t.update(),v(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(j)}}let C;function _t(){return C||(C=Promise.resolve(),C.then(()=>{C=null})),C}function P(t,e,n){t.dispatchEvent(qt(`${e?"intro":"outro"}${n}`))}const B=new Set;let $;function ce(){$={r:0,c:[],p:$}}function le(){$.r||v($.c),$=$.p}function dt(t,e){t&&t.i&&(B.delete(t),t.i(e))}function Dt(t,e,n,i){if(t&&t.o){if(B.has(t))return;B.add(t),$.c.push(()=>{B.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}}const ht={duration:0};function oe(t,e,n){let i=e(t,n),r=!1,u,c,o=0;function s(){u&&G(t,u)}function l(){const{delay:f=0,duration:a=300,easing:d=X,tick:h=x,css:p}=i||ht;p&&(u=ot(t,0,1,a,f,d,p,o++)),h(0,1);const y=nt()+f,w=y+a;c&&c.abort(),r=!0,j(()=>P(t,!0,"start")),c=rt(k=>{if(r){if(k>=w)return h(1,0),P(t,!0,"end"),s(),r=!1;if(k>=y){const A=d((k-y)/a);h(A,1-A)}}return r})}let _=!1;return{start(){_||(_=!0,G(t),F(i)?(i=i(),_t().then(l)):l())},invalidate(){_=!1},end(){r&&(s(),r=!1)}}}function ue(t,e,n){let i=e(t,n),r=!0,u;const c=$;c.r+=1;function o(){const{delay:s=0,duration:l=300,easing:_=X,tick:f=x,css:a}=i||ht;a&&(u=ot(t,1,0,l,s,_,a));const d=nt()+s,h=d+l;j(()=>P(t,!1,"start")),rt(p=>{if(r){if(p>=h)return f(0,1),P(t,!1,"end"),--c.r||v(c.c),!1;if(p>=d){const y=_((p-d)/l);f(1-y,y)}}return r})}return F(i)?_t().then(()=>{i=i(),o()}):o(),{end(s){s&&i.tick&&i.tick(1,0),r&&(u&&G(t,u),r=!1)}}}const ae=typeof window!="undefined"?window:typeof globalThis!="undefined"?globalThis:global;function fe(t,e){t.d(1),e.delete(t.key)}function _e(t,e){Dt(t,1,1,()=>{e.delete(t.key)})}function de(t,e,n,i,r,u,c,o,s,l,_,f){let a=t.length,d=u.length,h=a;const p={};for(;h--;)p[t[h].key]=h;const y=[],w=new Map,k=new Map;for(h=d;h--;){const m=f(r,u,h),g=n(m);let b=c.get(g);b?i&&b.p(m,e):(b=l(g,m),b.c()),w.set(g,y[h]=b),g in p&&k.set(g,Math.abs(h-p[g]))}const A=new Set,V=new Set;function L(m){dt(m,1),m.m(o,_),c.set(m.key,m),_=m.first,d--}for(;a&&d;){const m=y[d-1],g=t[a-1],b=m.key,q=g.key;m===g?(_=m.first,a--,d--):w.has(q)?!c.has(b)||A.has(b)?L(m):V.has(q)?a--:k.get(b)>k.get(q)?(V.add(b),L(m)):(A.add(q),a--):(s(g,c),a--)}for(;a--;){const m=t[a];w.has(m.key)||s(m,c)}for(;d;)L(y[d-1]);return y}function he(t,e){const n={},i={},r={$$scope:1};let u=t.length;for(;u--;){const c=t[u],o=e[u];if(o){for(const s in c)s in o||(i[s]=1);for(const s in o)r[s]||(n[s]=o[s],r[s]=1);t[u]=o}else for(const s in c)r[s]=1}for(const c in i)c in n||(n[c]=void 0);return n}function me(t){return typeof t=="object"&&t!==null?t:{}}function ye(t){t&&t.c()}function pe(t,e){t&&t.l(e)}function Pt(t,e,n,i){const{fragment:r,on_mount:u,on_destroy:c,after_update:o}=t.$$;r&&r.m(e,n),i||j(()=>{const s=u.map(Y).filter(F);c?c.push(...s):v(s),t.$$.on_mount=[]}),o.forEach(j)}function Bt(t,e){const n=t.$$;n.fragment!==null&&(v(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Lt(t,e){t.$$.dirty[0]===-1&&(N.push(t),Tt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ge(t,e,n,i,r,u,c,o=[-1]){const s=T;z(t);const l=t.$$={fragment:null,ctx:null,props:u,update:x,not_equal:r,bound:Z(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(s?s.$$.context:[])),callbacks:Z(),dirty:o,skip_bound:!1,root:e.target||s.$$.root};c&&c(l.root);let _=!1;if(l.ctx=n?n(t,e.props||{},(f,a,...d)=>{const h=d.length?d[0]:a;return l.ctx&&r(l.ctx[f],l.ctx[f]=h)&&(!l.skip_bound&&l.bound[f]&&l.bound[f](h),_&&Lt(t,f)),a}):[],l.update(),_=!0,v(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){gt();const f=At(e.target);l.fragment&&l.fragment.l(f),f.forEach(St)}else l.fragment&&l.fragment.c();e.intro&&dt(t.$$.fragment),Pt(t,e.target,e.anchor,e.customElement),bt(),ft()}z(s)}class be{$destroy(){Bt(this,1),this.$destroy=x}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!pt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const S=[];function we(t,e=x){let n;const i=new Set;function r(o){if(yt(t,o)&&(t=o,n)){const s=!S.length;for(const l of i)l[1](),S.push(l,t);if(s){for(let l=0;l<S.length;l+=2)S[l][0](S[l+1]);S.length=0}}}function u(o){r(o(t))}function c(o,s=x){const l=[o,s];return i.add(l),i.size===1&&(n=e(r)||x),o(t),()=>{i.delete(l),i.size===0&&(n(),n=null)}}return{set:r,update:u,subscribe:c}}function xe(t){const e=t-1;return e*e*e+1}function $e(t){return t*t}export{ie as A,mt as B,we as C,Et as D,x as E,Ut as F,F as G,j as H,oe as I,ue as J,xe as K,$e as L,It as M,Wt as N,Gt as O,Ht as P,Ft as Q,de as R,be as S,fe as T,ee as U,ne as V,Vt as W,v as X,ae as Y,_e as Z,At as a,Xt as b,Yt as c,St as d,ct as e,Jt as f,Ct as g,te as h,ge as i,ye as j,Kt as k,Qt as l,pe as m,Zt as n,Pt as o,he as p,me as q,ce as r,yt as s,H as t,Dt as u,Bt as v,le as w,dt as x,se as y,re as z};
