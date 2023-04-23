import{S as at,i as lt,s as rt,k as o,q as l,a as b,l as i,m as w,r,c as f,h as k,K as et,n as y,b as st,D as a,H as z}from"../chunks/index.6e9fd994.js";function nt(s){var Y,Z,$,x,tt;let n,t,d,U=((Y=s[0])==null?void 0:Y.id)+"",g,m,h,v,F=((Z=s[0])==null?void 0:Z.name)+"",B,R,I,T,J=(($=s[0])==null?void 0:$.author)+"",q,A,C,D,N=((x=s[1])==null?void 0:x.username)+"",E,L,P,S,Q=((tt=s[0])==null?void 0:tt.uploaded_at)+"",G,H,K,M,c,W,O,V,j,_,X;return{c(){n=o("div"),t=o("p"),d=l("Track Id: "),g=l(U),m=b(),h=o("br"),v=l(`
    Track name: `),B=l(F),R=b(),I=o("br"),T=l(`
    Author: `),q=l(J),A=b(),C=o("br"),D=l(`
    Uploaded by: `),E=l(N),L=b(),P=o("br"),S=l(`
    Uploaded at: `),G=l(Q),H=b(),K=o("br"),M=l(`
    Cover: `),c=o("img"),O=b(),V=o("br"),j=l(`
    Listen -> `),_=o("audio"),this.h()},l(u){n=i(u,"DIV",{});var p=w(n);t=i(p,"P",{});var e=w(t);d=r(e,"Track Id: "),g=r(e,U),m=f(e),h=i(e,"BR",{}),v=r(e,`
    Track name: `),B=r(e,F),R=f(e),I=i(e,"BR",{}),T=r(e,`
    Author: `),q=r(e,J),A=f(e),C=i(e,"BR",{}),D=r(e,`
    Uploaded by: `),E=r(e,N),L=f(e),P=i(e,"BR",{}),S=r(e,`
    Uploaded at: `),G=r(e,Q),H=f(e),K=i(e,"BR",{}),M=r(e,`
    Cover: `),c=i(e,"IMG",{src:!0,alt:!0,class:!0}),O=f(e),V=i(e,"BR",{}),j=r(e,`
    Listen -> `),_=i(e,"AUDIO",{src:!0}),w(_).forEach(k),e.forEach(k),p.forEach(k),this.h()},h(){var u,p;et(c.src,W=(u=s[0])==null?void 0:u.imgUrl)||y(c,"src",W),y(c,"alt",""),y(c,"class","svelte-1s8nhtp"),_.controls=!0,et(_.src,X=(p=s[0])==null?void 0:p.audioUrl)||y(_,"src",X)},m(u,p){st(u,n,p),a(n,t),a(t,d),a(t,g),a(t,m),a(t,h),a(t,v),a(t,B),a(t,R),a(t,I),a(t,T),a(t,q),a(t,A),a(t,C),a(t,D),a(t,E),a(t,L),a(t,P),a(t,S),a(t,G),a(t,H),a(t,K),a(t,M),a(t,c),a(t,O),a(t,V),a(t,j),a(t,_)},p:z,i:z,o:z,d(u){u&&k(n)}}}function ot(s,n,t){var m,h;let{data:d}=n,U=(m=d.response)==null?void 0:m.track,g=(h=d.response)==null?void 0:h.user;return s.$$set=v=>{"data"in v&&t(2,d=v.data)},[U,g,d]}class dt extends at{constructor(n){super(),lt(this,n,ot,nt,rt,{data:2})}}export{dt as default};
