(this["webpackJsonpcreate-form"]=this["webpackJsonpcreate-form"]||[]).push([[0],{34:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),s=n(23),i=n.n(s),r=n(4),o=(n(34),n(13)),l=n.n(o),m=n(24),j=n(29),u=n(27),d=n.n(u),b=(n(57),n(58),n(1)),O=function(e){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("button",{type:e.type?e.type:"button",disabled:e.disabled?e.disabled:null,className:e.className,onClick:e.onClick,onSubmit:e.onSubmit,children:e.content?Object(b.jsx)("span",{children:e.content}):null})})},h=function(e){var t=e.submitted,n=Object(a.useState)(""),c=Object(r.a)(n,2),s=c[0],i=c[1],o=function(){var e=Object(m.a)(l.a.mark((function e(n,a){var c,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.setSubmitting,a.setErrors,a.setStatus,c=a.resetForm,s=new Headers,e.next=4,d.a.post(u,n,s).then((function(e){200===e.status&&(t(),i("Comment created succesfull"),c(),setTimeout((function(){i("")}),1e4))}));case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),u="https://jordan.ashton.fashion/api/goods/30/comments";return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(j.a,{initialValues:{name:"",text:""},validate:function(e){return function(e){var t={};return e.name?e.text||(t.text="\u0426\u0435 \u043f\u043e\u043b\u0435 \u0454 \u043e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0438\u043c"):t.name="\u0426\u0435 \u043f\u043e\u043b\u0435 \u0454 \u043e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0438\u043c",t}(e)},onSubmit:o,children:function(e){var t=e.values,n=e.errors,a=e.touched,c=e.handleChange,i=e.handleBlur,r=e.handleSubmit,o=e.isSubmitting;return Object(b.jsxs)("form",{onSubmit:r,className:"form",children:[Object(b.jsx)("p",{className:"form__success",children:s}),Object(b.jsxs)("label",{children:[Object(b.jsx)("span",{className:"form__fieldname",children:"Name"}),Object(b.jsx)("input",{type:"text",name:"name",onChange:c,onBlur:i,value:t.name,className:"form__input-name",placeholder:"Enter your name here"})]}),Object(b.jsx)("p",{className:"form__error",children:n.name&&a.name&&n.name}),Object(b.jsxs)("label",{children:[Object(b.jsx)("span",{className:"form__fieldname",children:"Comments"}),Object(b.jsx)("textarea",{name:"text",onChange:c,onBlur:i,value:t.text,className:"form__input-text",placeholder:"Write a review"})]}),Object(b.jsx)("p",{className:"form__error",children:n.text&&a.text&&n.text}),Object(b.jsx)("div",{className:"form__button",children:Object(b.jsx)(O,{type:"submit",disabled:o,className:"button",content:"POST"})})]})}})})},_=(n(60),n(61),function(e){var t=e.data,n=e.update;return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"comment-item",children:[Object(b.jsx)("div",{className:"comment-item__photo",children:Object(b.jsx)("img",{src:"https://via.placeholder.com/50",alt:"placeholder",className:"image"})}),Object(b.jsx)("div",{className:"comment-item__like",children:Object(b.jsx)("svg",{className:"icon icon-heart",children:Object(b.jsx)("use",{xlinkHref:"#icon-heart"})})}),Object(b.jsxs)("div",{className:"comment-item__content",children:[Object(b.jsxs)("div",{className:"comment-item__content__wrapper",children:[Object(b.jsx)("h6",{className:"comment-item__username",children:t.name}),Object(b.jsxs)("p",{className:"comment-item__date",children:["(",n,")"]})]}),Object(b.jsx)("p",{className:"comment-item__text",children:t.text})]})]})})}),x=(n(62),function(e){for(var t=e.links,n=e.comments,a=e.currentPage,c=e.lastPage,s=[],i=1;i<t.length-1;i++)s.push(t[i]);return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("nav",{className:"pagination",children:Object(b.jsxs)("ul",{className:"pagination__list",children:[Object(b.jsx)("li",{className:1!==a?"pagination__item pagination__item--arrow":"pagination__item pagination__item--arrow disabled-arrow",onClick:1!==a?function(){n(t[0].url),window.scrollTo(0,0)}:null,children:"\xab"}),s.map((function(e,t){return Object(b.jsx)("li",{className:a===e.label?"pagination__item active":"pagination__item",onClick:function(){n(e.url),window.scrollTo(0,0)},children:e.label},t)})),Object(b.jsx)("li",{className:a!==c?"pagination__item pagination__item--arrow":"pagination__item pagination__item--arrow disabled-arrow",onClick:a!==c?function(){n(t[t.length-1].url),window.scrollTo(0,0)}:null,children:"\xbb"})]})})})}),p=n(28),f=n.n(p),N=function(e){var t=e.newComment,n=e.newCommentUpdated,c=Object(a.useState)("https://jordan.ashton.fashion/api/goods/30/comments?page=1"),s=Object(r.a)(c,2),i=s[0],o=s[1],l=Object(a.useState)(0),m=Object(r.a)(l,2),j=m[0],u=m[1],d=Object(a.useState)(0),h=Object(r.a)(d,2),p=h[0],N=h[1],g=Object(a.useState)([]),v=Object(r.a)(g,2),w=v[0],S=v[1],k=Object(a.useState)([]),C=Object(r.a)(k,2),y=C[0],F=C[1],E=Object(a.useState)(!1),P=Object(r.a)(E,2),T=P[0],B=P[1],H=Object(a.useState)(0),J=Object(r.a)(H,2),M=J[0],U=J[1],I=Object(a.useState)(""),L=Object(r.a)(I,2),R=L[0],V=L[1],W=function(e){B(!0),fetch(e).then((function(e){return e.json()})).then((function(e){n(),S(e.data),o(e.next_page_url),u(e.last_page),N(e.current_page),F(e.links),U(e.total),V(e.last_page_url),B(!1)}))};return Object(a.useEffect)((function(){t&&W(R)}),[t]),Object(a.useEffect)((function(){T||W(i)}),[]),Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"comments",children:[Object(b.jsxs)("div",{className:"comments__data",children:[Object(b.jsxs)("div",{className:"comments__data__count",children:[M," Responses"]}),Object(b.jsxs)("div",{className:"comments__data__sort",children:[Object(b.jsx)("span",{className:"data-text",children:"Newest"}),Object(b.jsx)("span",{className:"data-text",children:"Most Liked"}),Object(b.jsx)("span",{className:"data-text",children:"Oldest"})]})]}),w.map((function(e){return Object(b.jsx)(_,{data:e,update:f()(e.updated_at).fromNow()},e.id)})),Object(b.jsx)("div",{className:"comments__button",children:Object(b.jsx)(O,{className:p!==j?"button":"button button--disabled",content:"See more",onClick:function(){return W(i)}})}),Object(b.jsx)(x,{comments:W,links:y,currentPage:p,lastPage:j})]})})},g=function(){var e=Object(a.useState)(!1),t=Object(r.a)(e,2),n=t[0],c=t[1];return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("main",{className:"main",children:Object(b.jsxs)("div",{className:"main__wrapper",children:[Object(b.jsx)("div",{className:"main__form",children:Object(b.jsx)(h,{submitted:function(){c(!0)}})}),Object(b.jsx)("div",{className:"main__comments",children:Object(b.jsx)(N,{newComment:n,newCommentUpdated:function(){c(!1)}})})]})})})};var v=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(g,{})})};n(64);i.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(v,{})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.e404a98f.chunk.js.map