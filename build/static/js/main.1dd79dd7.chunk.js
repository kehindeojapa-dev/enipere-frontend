(this.webpackJsonptutorial=this.webpackJsonptutorial||[]).push([[0],{69:function(e,t,c){},70:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c(33),a=c.n(r),s=c(4),i=c(5),j=c(3),o=c(34),l=c.n(o).a.create({baseURL:"http://localhost:9000"}),u=c(0),b=function(){return Object(u.jsx)("header",{className:"app-header",children:Object(u.jsx)("div",{children:Object(u.jsx)(i.b,{to:"/",children:Object(u.jsx)("h2",{className:"app-title",children:"EniPere's"})})})})},d=c(6),O=c.n(d),h=c(10),m=function(){var e=Object(n.useState)(""),t=Object(j.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(!1),i=Object(j.a)(a,2),o=i[0],b=i[1],d=function(){var e=Object(h.a)(O.a.mark((function e(t){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=c.toLocaleLowerCase(),e.next=4,l.get("/server/postStatus/username/".concat(n)).then((function(e){b(e.data)})).catch((function(e){return console.log(e)}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("footer",{className:"app-footer",children:[Object(u.jsxs)("div",{className:"app-footer-lists",children:[Object(u.jsx)("h2",{children:"Writer's Corner"}),Object(u.jsx)("p",{children:"View only your favourite writer articles"}),Object(u.jsxs)("form",{onSubmit:d,className:"app-footer-form",children:[Object(u.jsx)("input",{type:"text",placeholder:"Enter writer's username",required:!0,value:c,onChange:function(e){return r(e.target.value)}}),Object(u.jsx)("input",{type:"submit",value:"view"})]}),o?Object(u.jsx)(s.a,{to:"writer/".concat(c)}):null]}),Object(u.jsx)("div",{className:"app-footer-social",children:Object(u.jsxs)("p",{children:["\xa92021, developed by",Object(u.jsx)("a",{href:"https://github.com/kehindeojapa-dev",target:"yes",children:"Kehinde's Creative"})]})})]})})},p=function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("nav",{className:"login-signup",children:Object(u.jsxs)("ul",{children:[Object(u.jsxs)("li",{children:["Have an existing account",Object(u.jsx)(i.b,{to:"/login",className:"nav-login",children:"Login"})]}),Object(u.jsxs)("li",{children:["Publish your articles with us",Object(u.jsx)(i.b,{to:"/signup",className:"nav-signup",children:"SignUp"})]})]})})})},x=function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),c=t[0],r=t[1];return Object(n.useEffect)((function(){l.get("/server").then((function(e){r(e.data)}))}),[]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"app-header-twk1",children:[Object(u.jsx)(b,{}),Object(u.jsx)(p,{})]}),Object(u.jsx)("section",{className:"article-intro",children:Object(u.jsx)("h2",{children:"Articles for you"})}),Object(u.jsx)("section",{className:"article-container",children:c.map((function(e){var t=e._id,c=e.id,n=e.Brief,r=e.Author,a=e.Title,s=e.cover,j=e.image;return Object(u.jsx)(i.b,{to:"/post/".concat(t),children:Object(u.jsxs)("div",{className:"article-card",children:[s&&Object(u.jsx)("img",{src:s,alt:a}),j&&Object(u.jsx)("img",{src:j,alt:a}),Object(u.jsx)("h2",{children:a}),Object(u.jsx)("p",{children:n}),Object(u.jsx)("h6",{children:r})]},c)},c)}))}),Object(u.jsx)(m,{})]})},f=function(){var e=Object(n.useState)(""),t=Object(j.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(""),i=Object(j.a)(a,2),o=i[0],b=i[1],d=Object(n.useState)(!1),m=Object(j.a)(d,2),p=m[0],x=m[1],f=Object(n.useState)(""),g=Object(j.a)(f,2),v=g[0],w=g[1],S=function(){var e=Object(h.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),null===c||null===o){e.next=4;break}return e.next=4,l.post("/users/login",{username:c.toLowerCase(),password:o}).then((function(e){w(e.data),x(!0)}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"app-login",children:[Object(u.jsxs)("form",{method:"post",onSubmit:S,children:[Object(u.jsx)("label",{htmlFor:"user",children:"Username"}),Object(u.jsx)("input",{type:"text",name:"user",id:"user",placeholder:"Enter username here",value:c,onChange:function(e){return r(e.target.value)}}),Object(u.jsx)("label",{htmlFor:"password",children:"Password"}),Object(u.jsx)("input",{type:"password",name:"password",id:"password",placeholder:"Enter password here",value:o,onChange:function(e){return b(e.target.value)}}),Object(u.jsx)("input",{type:"submit",value:"Login"})]}),p&&Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(s.a,{to:"writerPage/".concat(v._id)})})]})})},g=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(b,{}),Object(u.jsx)(f,{}),Object(u.jsx)(m,{})]})},v=c(83),w=function(e){var t=e.postID,c=Object(n.useState)(""),r=Object(j.a)(c,2),a=r[0],s=r[1],i=Object(n.useState)(""),o=Object(j.a)(i,2),b=o[0],d=o[1],m=Object(n.useState)(""),p=Object(j.a)(m,2),x=p[0],f=p[1],g=function(){var e=Object(h.a)(O.a.mark((function e(c){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c.preventDefault(),""===a||""===b||""===x){e.next=7;break}return e.next=4,l.post("/comments/",{postID:t,name:a,email:b,message:x});case 4:s(""),d(""),f("");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("form",{action:"#",className:"commentForm",onSubmit:g,children:[Object(u.jsxs)("div",{className:"row1",children:[Object(u.jsx)("input",{type:"text",name:"name",placeholder:"enter name here",required:!0,value:a,onChange:function(e){return s(e.target.value)}}),Object(u.jsx)("input",{type:"email",name:"email",placeholder:"enter valid email here",required:!0,value:b,onChange:function(e){return d(e.target.value)}})]}),Object(u.jsx)("textarea",{name:"message",cols:"30",rows:"3",placeholder:"Enter your comment here",required:!0,value:x,onChange:function(e){return f(e.target.value)}}),Object(u.jsx)("input",{type:"submit",value:"Post comment"})]})})},S=function(e){var t=e.postID,c=Object(n.useState)([]),r=Object(j.a)(c,2),a=r[0],s=r[1];return Object(n.useEffect)((function(){l.get("/comments/".concat(t)).then((function(e){return s(e.data)}))}),[t]),Object(u.jsx)(u.Fragment,{children:a.map((function(e){return Object(u.jsxs)("div",{className:"commentItem",children:[Object(u.jsx)(v.a,{}),Object(u.jsxs)("section",{children:[Object(u.jsxs)("div",{className:"commentItem-box1",children:[Object(u.jsx)("h2",{children:e.name}),Object(u.jsx)("p",{children:e.email})]}),Object(u.jsx)("p",{className:"commentItem-message",children:e.message})]})]},e.id)}))})},N=function(e){var t=Object(s.g)().id,c=Object(n.useRef)(null),r=Object(n.useState)([]),a=Object(j.a)(r,2),i=a[0],o=a[1];return Object(n.useEffect)((function(){l.get("/server/post/".concat(t)).then((function(e){return o(e.data)}))}),[t]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("section",{className:"postContainer",children:[Object(u.jsxs)("h1",{className:"postContainer-title",children:[i.Title,Object(u.jsx)("span",{children:i.Author})]}),i.cover&&Object(u.jsx)("img",{src:i.cover,alt:"post"}),i.image&&Object(u.jsx)("img",{src:i.image,alt:i.title}),Object(u.jsx)("section",{className:"postContainer-message",children:Object(u.jsx)("div",{ref:c,children:Object(n.useEffect)((function(){c.current.innerHTML=i.doc}))})})]}),Object(u.jsxs)("section",{className:"commentContainer",children:[Object(u.jsx)("h3",{children:"Comments"}),Object(u.jsx)(w,{postID:t}),Object(u.jsx)(S,{postID:t})]})]})},F=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(b,{}),Object(u.jsx)(N,{}),Object(u.jsx)(m,{})]})},y=c(17),C=function(e){var t=e.props,c=Object(n.useState)(""),r=Object(j.a)(c,2),a=r[0],s=r[1],i=Object(n.useState)(""),o=Object(j.a)(i,2),b=o[0],d=o[1],m=Object(n.useState)(""),p=Object(j.a)(m,2),x=p[0],f=p[1],g=Object(n.useState)({}),v=Object(j.a)(g,2),w=v[0],S=v[1],N=Object(n.useState)({}),F=Object(j.a)(N,2),C=F[0],P=F[1],k=Object(n.useState)({}),E=Object(j.a)(k,2),D=E[0],L=E[1],I=Object(n.useRef)(),T=Object(n.useState)(!1),B=Object(j.a)(T,2),q=B[0],U=B[1],A=Object(n.useState)(!1),R=Object(j.a)(A,2),_=R[0],J=R[1],V=Object(n.useState)({title:"",author:"",brief:"",format:""}),H=Object(j.a)(V,2),K=H[0],M=H[1],W=t.username.toLowerCase();Object(n.useEffect)((function(){M(Object(y.a)(Object(y.a)({},K),{},{title:a,brief:b,format:x}))}),[a,b,x]);var z=function(){var e=Object(h.a)(O.a.mark((function e(t){var c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),c=new FormData,""===a||""===b||""===x||(void 0===w.name||void 0===C.name)&&void 0===D.name||void 0===W){e.next=13;break}return"doc"===K.format?(c.append("doc",w),c.append("cover",C)):c.append("image",D),c.append("details",JSON.stringify(K)),c.append("author",W),e.next=8,l.post("/server",c);case 8:s(""),d(""),f(""),J(!1),U(!1);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("form",{action:"#",className:"uploadForm",children:[Object(u.jsx)("label",{htmlFor:"Title",children:"Title"}),Object(u.jsx)("input",{type:"text",name:"Title",placeholder:"Enter article title here...",required:!0,value:a,onChange:function(e){return s(e.target.value)}}),Object(u.jsx)("label",{htmlFor:"Brief",children:"Brief"}),Object(u.jsx)("textarea",{name:"Brief",id:"brief",placeholder:"write a short description here...",required:!0,value:b,onChange:function(e){return d(e.target.value)}}),Object(u.jsx)("label",{htmlFor:"Format",children:"Select Format"}),Object(u.jsxs)("select",{name:"format",value:x,onChange:function(e){f(e.target.value),function(e){"doc"===e.target.value?(U(!0),J(!1),L({})):"image"===e.target.value?(J(!0),U(!1),S({}),P({})):(J(!1),U(!1),S({}),P({}),L({}))}(e)},children:[Object(u.jsx)("option",{children:"Pick format"}),Object(u.jsx)("option",{value:"doc",children:"Doc"}),Object(u.jsx)("option",{value:"image",children:"Image"})]}),q&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("input",{type:"file",name:"doc",accept:".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document",required:!0,ref:I,onChange:function(e){var t=e.target.files[0];S(t)}}),Object(u.jsx)("label",{htmlFor:"cover",children:"Cover"}),Object(u.jsx)("input",{type:"file",name:"cover",accept:".jpg, .jpeg, .png",onChange:function(e){var t=e.target.files[0];P(t)}})]}),_&&Object(u.jsx)("input",{type:"file",name:"image",accept:".jpg, .jpeg, .png",required:!0,onChange:function(e){var t=e.target.files[0];L(t)}}),Object(u.jsx)("input",{type:"submit",value:"Post",onClick:z})]})})},P=function(e){var t=Object(n.useState)(!1),c=Object(j.a)(t,2),r=c[0],a=c[1],s=Object(n.useState)("Upload Post"),i=Object(j.a)(s,2),o=i[0],l=i[1];return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"upload",children:[Object(u.jsx)("button",{className:"uploadBtn",onClick:function(){a(!r),l("Upload Post"===o?"Cancel":"Upload Post")},children:o}),r&&Object(u.jsx)(C,Object(y.a)({},e))]})})},k=function(){var e=Object(s.g)().id,t=Object(n.useState)(""),c=Object(j.a)(t,2),r=c[0],a=c[1],o=Object(n.useState)([]),b=Object(j.a)(o,2),d=b[0],m=b[1],p="http://localhost:3000/",x=function(){var e=Object(h.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.delete("/server/post/".concat(t));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){l.get("/users/userdata/".concat(e)).then((function(e){a(e.data)}))}),[e]),Object(n.useEffect)((function(){l.get("/server/posts/username/".concat(r.username)).then((function(e){return m(e.data)}))}),[r]),Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("section",{className:"writerPage",children:[Object(u.jsx)("div",{className:"writerPage-intro",children:Object(u.jsx)("h2",{children:r.username})}),Object(u.jsxs)("div",{className:"writerPage-intro intro2",children:[Object(u.jsx)("h2",{children:"Visit/Share your corner"}),Object(u.jsx)("p",{children:Object(u.jsx)("a",{href:"".concat(p,"writer/").concat(r.username),children:"".concat(p,"writer/").concat(r.username)})})]}),Object(u.jsx)(P,{props:r}),Object(u.jsx)("div",{className:"article-container writerPage-Posts",children:d.map((function(e){var t=e._id,c=e.id,n=e.Brief,r=e.Author,a=e.Title,s=e.cover,j=e.image,o=t;return Object(u.jsxs)("div",{className:"post-container",children:[Object(u.jsx)(i.b,{to:"/post/".concat(t),children:Object(u.jsxs)("div",{className:"article-card",children:[s&&Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("img",{src:s,alt:a})}),j&&Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("img",{src:j,alt:a})}),Object(u.jsx)("h2",{children:a}),Object(u.jsx)("p",{children:n}),Object(u.jsx)("h6",{children:r})]})}),Object(u.jsx)("button",{className:"writerPage-deleteBtn",onClick:function(){return x(o)},children:"Delete"})]},c)}))})]})})},E=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(b,{}),Object(u.jsx)(k,{}),Object(u.jsx)(m,{})]})},D=function(){var e=Object(s.g)().id,t=Object(n.useState)([]),c=Object(j.a)(t,2),r=c[0],a=c[1],o=e.toLowerCase();return Object(n.useEffect)((function(){l.get("/server/posts/username/".concat(o)).then((function(e){return a(e.data)}))}),[o]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("section",{className:"writer-corner",children:Object(u.jsxs)("h1",{children:["Articles posted by ",Object(u.jsx)("span",{children:e})]})}),Object(u.jsx)("section",{className:"article-container",children:r.map((function(e){var t=e._id,c=e.id,n=e.Brief,r=e.Author,a=e.Title,s=e.cover,j=e.image;return Object(u.jsx)(i.b,{to:"/post/".concat(t),children:Object(u.jsxs)("div",{className:"article-card",children:[s&&Object(u.jsx)("img",{src:s,alt:a}),j&&Object(u.jsx)("img",{src:j,alt:a}),Object(u.jsx)("h2",{children:a}),Object(u.jsx)("p",{children:n}),Object(u.jsx)("h6",{children:r})]},c)},c)}))})]})},L=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"app-header-twk1",children:[Object(u.jsx)(b,{}),Object(u.jsx)(p,{})]}),Object(u.jsx)(D,{}),Object(u.jsx)(m,{})]})},I=function(){var e=Object(n.useState)(""),t=Object(j.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(""),i=Object(j.a)(a,2),o=i[0],b=i[1],d=Object(n.useState)(""),m=Object(j.a)(d,2),p=m[0],x=m[1],f=Object(n.useState)(""),g=Object(j.a)(f,2),v=g[0],w=g[1],S=Object(n.useState)({}),N=Object(j.a)(S,2),F=N[0],y=N[1],C=Object(n.useState)(!1),P=Object(j.a)(C,2),k=P[0],E=P[1],D=function(){var e=Object(h.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),null===c||p!==v){e.next=6;break}return e.next=4,l.post("/users",{username:c.toLowerCase(),email:o,password:p}).then((function(e){return E(!0)})).catch((function(e){return console.log(e)}));case 4:e.next=7;break;case 6:p===v?(y({status:!0,msg:"Password validation successful"}),setTimeout((function(){y({status:!0,msg:""})}),2e3)):(y({status:!1,msg:"Password validation failed"}),setTimeout((function(){y({status:!1,msg:""})}),3e3));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"app-login",children:Object(u.jsxs)("form",{action:"#",onSubmit:D,children:[Object(u.jsx)("label",{htmlFor:"user",children:"Pick a Username"}),Object(u.jsx)("input",{type:"text",name:"user",id:"user",placeholder:"Enter username here",minlength:6,value:c,onChange:function(e){return r(e.target.value)}}),Object(u.jsx)("label",{htmlFor:"email",children:"Email"}),Object(u.jsx)("input",{type:"email",name:"email",id:"email",placeholder:"Enter email address here",value:o,onChange:function(e){return b(e.target.value)}}),Object(u.jsx)("label",{htmlFor:"password",children:"Choose Password"}),Object(u.jsx)("input",{type:"password",name:"password",id:"password",placeholder:"Enter password here",minLength:6,value:p,onChange:function(e){return x(e.target.value)}}),Object(u.jsx)("label",{htmlFor:"checkPassword",children:"Validate Password"}),Object(u.jsx)("input",{type:"password",name:"checkPassword",id:"checkPassword",placeholder:"Retype password here",minLength:6,value:v,onChange:function(e){return w(e.target.value)}}),Object(u.jsx)("p",{className:"passFail ".concat(F.status&&"passSuccess"),children:F.msg}),Object(u.jsx)("input",{type:"submit",value:"SignUp"})]})}),k?Object(u.jsx)(s.a,{to:"/login"}):null]})},T=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(b,{}),Object(u.jsx)(I,{}),Object(u.jsx)(m,{})]})},B=(c(69),function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(s.d,{children:[Object(u.jsx)(s.b,{exact:!0,path:"/",children:Object(u.jsx)(x,{})}),Object(u.jsx)(s.b,{path:"/login",children:Object(u.jsx)(g,{})}),Object(u.jsx)(s.b,{path:"/signup",children:Object(u.jsx)(T,{})}),Object(u.jsx)(s.b,{path:"/writerPage/:id",children:Object(u.jsx)(E,{})}),Object(u.jsx)(s.b,{exact:!0,path:"/writer/:id",children:Object(u.jsx)(L,{})}),Object(u.jsx)(s.b,{path:"/post/:id",children:Object(u.jsx)(F,{})}),Object(u.jsx)(s.b,{path:"*",children:Object(u.jsx)(s.a,{to:"/"})})]})})});a.a.render(Object(u.jsx)(i.a,{children:Object(u.jsx)(B,{})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.1dd79dd7.chunk.js.map