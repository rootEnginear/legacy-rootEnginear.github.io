import{S as I,i as w,s as E,L,e as g,c as k,b as n,P as S,g as A,d as v,t as p,a as y,h as d,F as m,M as q,N as M,O as N,j as P,r as j,p as z}from"./index-9655e5d5.js";function b(a){let e,l;return{c(){e=g("img"),this.h()},l(i){e=k(i,"IMG",{class:!0,src:!0,alt:!0,width:!0,height:!0}),this.h()},h(){n(e,"class","no-print svelte-6vkc6y"),S(e.src,l="img/external-link.svg")||n(e,"src",l),n(e,"alt",a[0]),n(e,"width","24"),n(e,"height","24")},m(i,c){A(i,e,c)},p(i,c){c&1&&n(e,"alt",i[0])},d(i){i&&v(e)}}}function C(a){let e,l,i,c,_,o;const u=a[3].default,r=L(u,a,a[2],null);let s=!a[1]&&b(a);return{c(){e=g("a"),r&&r.c(),s&&s.c(),l=g("span"),i=p("("),c=p(a[0]),_=p(")"),this.h()},l(t){e=k(t,"A",{href:!0,target:!0,rel:!0,title:!0,class:!0});var f=y(e);r&&r.l(f),s&&s.l(f),l=k(f,"SPAN",{class:!0});var h=y(l);i=d(h,"("),c=d(h,a[0]),_=d(h,")"),h.forEach(v),f.forEach(v),this.h()},h(){n(l,"class","on-print svelte-6vkc6y"),n(e,"href",a[0]),n(e,"target","_blank"),n(e,"rel","nofollow noopener noreferrer"),n(e,"title",a[0]),n(e,"class","svelte-6vkc6y")},m(t,f){A(t,e,f),r&&r.m(e,null),s&&s.m(e,null),m(e,l),m(l,i),m(l,c),m(l,_),o=!0},p(t,[f]){r&&r.p&&(!o||f&4)&&q(r,u,t,t[2],o?N(u,t[2],f,null):M(t[2]),null),t[1]?s&&(s.d(1),s=null):s?s.p(t,f):(s=b(t),s.c(),s.m(e,l)),(!o||f&1)&&P(c,t[0]),(!o||f&1)&&n(e,"href",t[0]),(!o||f&1)&&n(e,"title",t[0])},i(t){o||(j(r,t),o=!0)},o(t){z(r,t),o=!1},d(t){t&&v(e),r&&r.d(t),s&&s.d()}}}function F(a,e,l){let{$$slots:i={},$$scope:c}=e,{href:_=""}=e,{noIcon:o=!1}=e;return a.$$set=u=>{"href"in u&&l(0,_=u.href),"noIcon"in u&&l(1,o=u.noIcon),"$$scope"in u&&l(2,c=u.$$scope)},[_,o,c,i]}class O extends I{constructor(e){super(),w(this,e,F,C,E,{href:0,noIcon:1})}}export{O as A};