import{S as re,i as se,s as ne,k as d,q as c,l as h,m as H,r as u,h as U,b as le,D as a,H as ee,J as oe,a as g,c as k,n as b,K as G,u as T}from"../chunks/index.6e9fd994.js";function te(o,e,f){const n=o.slice();return n[1]=e[f],n}function ae(o){var x;let e,f,n=o[1].meta.id+"",l,s,_,r,m,I=o[1].meta.name+"",q,C,J,K,M,A=o[1].meta.author+"",D,O,V,j,B=((x=o[1].userInfo)==null?void 0:x.username)+"",L,w,z,F,R=o[1].meta.uploaded_at+"",P,N,Q,W,v,S,X,Y,Z,p,y,$;return{c(){e=d("p"),f=c("Track Id: "),l=c(n),s=g(),_=d("br"),r=c(`
            Track name: `),m=d("a"),q=c(I),J=g(),K=d("br"),M=c(`
            Author: `),D=c(A),O=g(),V=d("br"),j=c(`
            Uploaded by: `),L=c(B),w=g(),z=d("br"),F=c(`
            Uploaded at: `),P=c(R),N=g(),Q=d("br"),W=c(`
            Cover: `),v=d("img"),X=g(),Y=d("br"),Z=c(`
            Listen -> `),p=d("audio"),$=g(),this.h()},l(i){e=h(i,"P",{class:!0});var t=H(e);f=u(t,"Track Id: "),l=u(t,n),s=k(t),_=h(t,"BR",{}),r=u(t,`
            Track name: `),m=h(t,"A",{href:!0});var E=H(m);q=u(E,I),E.forEach(U),J=k(t),K=h(t,"BR",{}),M=u(t,`
            Author: `),D=u(t,A),O=k(t),V=h(t,"BR",{}),j=u(t,`
            Uploaded by: `),L=u(t,B),w=k(t),z=h(t,"BR",{}),F=u(t,`
            Uploaded at: `),P=u(t,R),N=k(t),Q=h(t,"BR",{}),W=u(t,`
            Cover: `),v=h(t,"IMG",{src:!0,alt:!0,class:!0}),X=k(t),Y=h(t,"BR",{}),Z=u(t,`
            Listen -> `),p=h(t,"AUDIO",{src:!0}),H(p).forEach(U),$=k(t),t.forEach(U),this.h()},h(){b(m,"href",C="/music/"+o[1].meta.id),G(v.src,S=o[1].imgUrl)||b(v,"src",S),b(v,"alt",""),b(v,"class","svelte-100nyv9"),p.controls=!0,G(p.src,y=o[1].audioUrl)||b(p,"src",y),b(e,"class","svelte-100nyv9")},m(i,t){le(i,e,t),a(e,f),a(e,l),a(e,s),a(e,_),a(e,r),a(e,m),a(m,q),a(e,J),a(e,K),a(e,M),a(e,D),a(e,O),a(e,V),a(e,j),a(e,L),a(e,w),a(e,z),a(e,F),a(e,P),a(e,N),a(e,Q),a(e,W),a(e,v),a(e,X),a(e,Y),a(e,Z),a(e,p),a(e,$)},p(i,t){var E;t&1&&n!==(n=i[1].meta.id+"")&&T(l,n),t&1&&I!==(I=i[1].meta.name+"")&&T(q,I),t&1&&C!==(C="/music/"+i[1].meta.id)&&b(m,"href",C),t&1&&A!==(A=i[1].meta.author+"")&&T(D,A),t&1&&B!==(B=((E=i[1].userInfo)==null?void 0:E.username)+"")&&T(L,B),t&1&&R!==(R=i[1].meta.uploaded_at+"")&&T(P,R),t&1&&!G(v.src,S=i[1].imgUrl)&&b(v,"src",S),t&1&&!G(p.src,y=i[1].audioUrl)&&b(p,"src",y)},d(i){i&&U(e)}}}function ie(o){let e,f,n=o[0].response,l=[];for(let s=0;s<n.length;s+=1)l[s]=ae(te(o,n,s));return{c(){e=d("div"),f=c(`All tracks:

    `);for(let s=0;s<l.length;s+=1)l[s].c()},l(s){e=h(s,"DIV",{});var _=H(e);f=u(_,`All tracks:

    `);for(let r=0;r<l.length;r+=1)l[r].l(_);_.forEach(U)},m(s,_){le(s,e,_),a(e,f);for(let r=0;r<l.length;r+=1)l[r]&&l[r].m(e,null)},p(s,[_]){if(_&1){n=s[0].response;let r;for(r=0;r<n.length;r+=1){const m=te(s,n,r);l[r]?l[r].p(m,_):(l[r]=ae(m),l[r].c(),l[r].m(e,null))}for(;r<l.length;r+=1)l[r].d(1);l.length=n.length}},i:ee,o:ee,d(s){s&&U(e),oe(l,s)}}}function ce(o,e,f){let{data:n}=e;return o.$$set=l=>{"data"in l&&f(0,n=l.data)},[n]}class _e extends re{constructor(e){super(),se(this,e,ce,ie,ne,{data:0})}}export{_e as default};
