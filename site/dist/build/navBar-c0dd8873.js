import{S as s,i as a,s as l,e,t,a as o,f as h,g as n,h as r,d as c,j as i,k as f,u as v,l as g,n as m,v as u,o as d,w as p,x as E,y as x,z as I}from"./main-75c78758.js";function k(s,a,l){const e=s.slice();return e[3]=a[l][0],e[4]=a[l][1],e}function A(s){let a,l,u,d,p,E=s[4]+"";return{c(){a=e("li"),l=e("a"),u=t(E),d=o(),this.h()},l(s){a=h(s,"LI",{});var e=n(a);l=h(e,"A",{class:!0,href:!0});var t=n(l);u=r(t,E),d=c(t),t.forEach(i),e.forEach(i),this.h()},h(){f(l,"class","nav-link svelte-1h4hgso"),f(l,"href",p=s[1](s[3])),v(l,"active",s[0](s[3]))},m(s,e){g(s,a,e),m(a,l),m(l,u),m(l,d)},p(s,a){2&a&&p!==(p=s[1](s[3]))&&f(l,"href",p),5&a&&v(l,"active",s[0](s[3]))},d(s){s&&i(a)}}}function j(s){let a,l,t,r,v,E,x,I=s[2],j=[];for(let a=0;a<I.length;a+=1)j[a]=A(k(s,I,a));return{c(){a=e("aside"),l=e("nav"),t=e("div"),r=e("img"),E=o(),x=e("ul");for(let s=0;s<j.length;s+=1)j[s].c();this.h()},l(s){a=h(s,"ASIDE",{class:!0});var e=n(a);l=h(e,"NAV",{class:!0});var o=n(l);t=h(o,"DIV",{class:!0});var f=n(t);r=h(f,"IMG",{alt:!0,src:!0,style:!0}),f.forEach(i),E=c(o),x=h(o,"UL",{class:!0});var v=n(x);for(let s=0;s<j.length;s+=1)j[s].l(v);v.forEach(i),o.forEach(i),e.forEach(i),this.h()},h(){f(r,"alt","Flessner"),r.src!==(v="assets/common/logo.svg")&&f(r,"src","assets/common/logo.svg"),u(r,"height","40px"),f(t,"class","nav-logo svelte-1h4hgso"),f(x,"class","nav-links svelte-1h4hgso"),f(l,"class","nav svelte-1h4hgso"),f(a,"class","svelte-1h4hgso")},m(s,e){g(s,a,e),m(a,l),m(l,t),m(t,r),m(l,E),m(l,x);for(let s=0;s<j.length;s+=1)j[s].m(x,null)},p(s,[a]){if(7&a){let l;for(I=s[2],l=0;l<I.length;l+=1){const e=k(s,I,l);j[l]?j[l].p(e,a):(j[l]=A(e),j[l].c(),j[l].m(x,null))}for(;l<j.length;l+=1)j[l].d(1);j.length=I.length}},i:d,o:d,d(s){s&&i(a),p(j,s)}}}function y(s,a,l){let e,t;E(s,x,s=>l(0,e=s)),E(s,I,s=>l(1,t=s));return[e,t,[["/index","Home"],["/models","Models"]]]}class D extends s{constructor(s){super(),a(this,s,y,j,l,{})}}export{D as N};
//# sourceMappingURL=navBar-c0dd8873.js.map
