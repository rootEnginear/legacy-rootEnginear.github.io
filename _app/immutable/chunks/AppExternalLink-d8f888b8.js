import{S as w,i as E,s as q,L as y,l as v,u as d,m as k,p as b,v as g,h as p,q as n,b as I,F as m,M as L,N as S,O as M,w as N,f as P,t as C,P as F}from"./index-483760da.js";function A(a){let e,l;return{c(){e=v("img"),this.h()},l(i){e=k(i,"IMG",{class:!0,src:!0,alt:!0,width:!0,height:!0}),this.h()},h(){n(e,"class","no-print svelte-6vkc6y"),F(e.src,l="img/external-link.svg")||n(e,"src",l),n(e,"alt",a[0]),n(e,"width","24"),n(e,"height","24")},m(i,u){I(i,e,u)},p(i,u){u&1&&n(e,"alt",i[0])},d(i){i&&p(e)}}}function G(a){let e,l,i,u,c,o;const _=a[3].default,r=y(_,a,a[2],null);let s=!a[1]&&A(a);return{c(){e=v("a"),r&&r.c(),s&&s.c(),l=v("span"),i=d("("),u=d(a[0]),c=d(")"),this.h()},l(t){e=k(t,"A",{href:!0,target:!0,rel:!0,title:!0,class:!0});var f=b(e);r&&r.l(f),s&&s.l(f),l=k(f,"SPAN",{class:!0});var h=b(l);i=g(h,"("),u=g(h,a[0]),c=g(h,")"),h.forEach(p),f.forEach(p),this.h()},h(){n(l,"class","on-print svelte-6vkc6y"),n(e,"href",a[0]),n(e,"target","_blank"),n(e,"rel","nofollow noopener noreferrer"),n(e,"title",a[0]),n(e,"class","svelte-6vkc6y")},m(t,f){I(t,e,f),r&&r.m(e,null),s&&s.m(e,null),m(e,l),m(l,i),m(l,u),m(l,c),o=!0},p(t,[f]){r&&r.p&&(!o||f&4)&&L(r,_,t,t[2],o?M(_,t[2],f,null):S(t[2]),null),t[1]?s&&(s.d(1),s=null):s?s.p(t,f):(s=A(t),s.c(),s.m(e,l)),(!o||f&1)&&N(u,t[0]),(!o||f&1)&&n(e,"href",t[0]),(!o||f&1)&&n(e,"title",t[0])},i(t){o||(P(r,t),o=!0)},o(t){C(r,t),o=!1},d(t){t&&p(e),r&&r.d(t),s&&s.d()}}}function O(a,e,l){let{$$slots:i={},$$scope:u}=e,{href:c=""}=e,{noIcon:o=!1}=e;return a.$$set=_=>{"href"in _&&l(0,c=_.href),"noIcon"in _&&l(1,o=_.noIcon),"$$scope"in _&&l(2,u=_.$$scope)},[c,o,u,i]}class z extends w{constructor(e){super(),E(this,e,O,G,q,{href:0,noIcon:1})}}export{z as A};
