(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{564:function(e,t,n){},565:function(e,t,n){},583:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(32),r=n.n(s),i=n(23),l=n(152),j=Object(l.b)({name:"chat",initialState:{createType:"",isCreating:!1,isEditing:!1,toggleContainer:!1},reducers:{setCreateType:function(e,t){e.createType=t.payload},setIsCreating:function(e,t){e.isCreating=t.payload},setIsEditing:function(e,t){e.isEditing=t.payload},setToggleContainer:function(e,t){e.toggleContainer=!t.payload}}}),o=j.actions,u=j.reducer,d=Object(l.a)({reducer:{chat:u}}),h=n(87),b=n(651),m=n(98),O=n(25),p=n(650),x=n(656),v=n(2),f=function(){var e=Object(i.c)((function(e){return e.chat.isCreating})),t=Object(i.c)((function(e){return e.chat.isEditing}));if(e)return Object(v.jsx)("div",{className:"channel__container",children:Object(v.jsx)(te,{})});if(t)return Object(v.jsx)("div",{className:"channel__container",children:Object(v.jsx)(ae,{})});return Object(v.jsx)("div",{className:" channel__container",children:Object(v.jsx)(p.a,{EmptyStateIndicator:function(){return Object(v.jsxs)("div",{className:"channel-empty__container",children:[Object(v.jsx)("p",{className:"channel-empty__first",children:"This is the beginning of your chat history."}),Object(v.jsx)("p",{className:"channel-empty__second",children:"Send messages, attachments, links, emojis, and more!"})]})},Message:function(e,t){return Object(v.jsx)(x.a,Object(O.a)({},e),t)},children:Object(v.jsx)(Y,{})})})},_=n(10),g=n(648),N=n(271),C=new m.a,w=function(e){var t=e.logout;return Object(v.jsx)("div",{className:"channel-list__sidebar__icon2",children:Object(v.jsx)("div",{className:"icon1__inner",onClick:t,children:Object(v.jsx)(N.a,{style:{fontSize:"2.2rem"}})})})},y=function(){return Object(v.jsx)("h1",{className:"channel-list__header__text",children:"Super Chat"})},k=function(e){return e.filter((function(e){return"team"===e.type}))},S=function(e){return e.filter((function(e){return"messaging"===e.type}))},I=function(){var e={members:{$in:[Object(_.b)().client.userID]}};return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("div",{className:"channel-list__list__wrapper",children:[Object(v.jsxs)("div",{style:{width:"100%",display:"flex"},children:[Object(v.jsx)(w,{style:{display:"flex",color:"white"},logout:function(){C.remove("token"),C.remove("userId"),C.remove("username"),C.remove("fullName"),C.remove("avatarURL"),C.remove("hashedPassword"),C.remove("phoneNumber"),window.location.reload()}}),Object(v.jsx)(y,{})]}),Object(v.jsx)(q,{}),Object(v.jsx)(g.a,{filters:e,channelRenderFilterFn:k,List:function(e){return Object(v.jsx)(H,Object(O.a)(Object(O.a)({},e),{},{type:"team"}))},Preview:function(e){return Object(v.jsx)(Z,Object(O.a)(Object(O.a)({},e),{},{type:"team"}))}}),Object(v.jsx)(g.a,{filters:e,channelRenderFilterFn:S,List:function(e){return Object(v.jsx)(H,Object(O.a)(Object(O.a)({},e),{},{type:"messaging"}))},Preview:function(e){return Object(v.jsx)(Z,Object(O.a)(Object(O.a)({},e),{},{type:"messaging"}))}})]})})},L=function(){var e=Object(i.c)((function(e){return e.chat.toggleContainer})),t=Object(i.b)();return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("div",{className:"channel-list__container",children:Object(v.jsx)(I,{})}),Object(v.jsxs)("div",{className:"channel-list__container-responsive",style:{left:e?"0%":"-89%",backgroundColor:"#005fff"},children:[Object(v.jsx)("div",{className:"channel-list__container-toggle",onClick:function(){return t(o.setToggleContainer(e))}}),Object(v.jsx)(I,{})]})]})},U=n(26),D=n.n(U),M=n(48),P=n(12),E=function(e){var t=e.type,n=Object(i.b)(),a=Object(i.c)((function(e){return e.chat.isCreating})),c=Object(i.c)((function(e){return e.chat.toggleContainer}));return Object(v.jsx)("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",onClick:function(){n(o.setCreateType(t)),n(o.setIsCreating(!a)),n(o.setIsEditing(!1)),c&&n(o.setToggleContainer(c))},children:Object(v.jsx)("path",{d:"M7 0C3.13438 0 0 3.13438 0 7C0 10.8656 3.13438 14 7 14C10.8656 14 14 10.8656 14 7C14 3.13438 10.8656 0 7 0ZM11 7.5H7.5V11H6.5V7.5H3V6.5H6.5V3H7.5V6.5H11V7.5Z",fill:"white",fillOpacity:"0.66"})})},F=function(){return Object(v.jsx)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(v.jsx)("path",{d:"M8.16602 6.49837H9.83269V4.83171H8.16602V6.49837ZM8.99936 15.665C5.32351 15.665 2.33268 12.6743 2.33268 8.99833C2.33268 5.32253 5.32351 2.33171 8.99936 2.33171C12.6752 2.33171 15.666 5.32253 15.666 8.99833C15.666 12.6743 12.6752 15.665 8.99936 15.665ZM8.99936 0.665039C4.39684 0.665039 0.666016 4.39587 0.666016 8.99833C0.666016 13.6009 4.39684 17.3317 8.99936 17.3317C13.6019 17.3317 17.3327 13.6009 17.3327 8.99833C17.3327 4.39587 13.6019 0.665039 8.99936 0.665039ZM8.16602 13.165H9.83269V8.165H8.16602V13.165Z",fill:"black",fillOpacity:"0.33"})})},R=function(e){var t=e.setIsCreating,n=Object(i.b)();return Object(v.jsx)("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",onClick:function(){t&&n(o.setIsCreating(!1)),o.setIsEditing()&&n(o.setIsEditing(!1))},children:Object(v.jsx)("path",{d:"M6.10042 6.10051C0.633603 11.5673 0.633603 20.4327 6.10042 25.8995C11.5672 31.3663 20.4326 31.3663 25.8994 25.8995C31.3662 20.4327 31.3662 11.5673 25.8994 6.10051C20.4326 0.633686 11.5672 0.633685 6.10042 6.10051ZM22.3639 11.0503L17.4141 16L22.3639 20.9497L20.9497 22.364L15.9999 17.4142L11.0502 22.364L9.63596 20.9497L14.5857 16L9.63596 11.0503L11.0502 9.63604L15.9999 14.5858L20.9497 9.63604L22.3639 11.0503Z",fill:"var(--primary-color)"})})},T=function(){return Object(v.jsx)("div",{style:{marginLeft:"2px"},children:Object(v.jsx)("svg",{width:"28",height:"28",viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(v.jsx)("path",{d:"M14 0C6.26875 0 0 6.26875 0 14C0 21.7313 6.26875 28 14 28C21.7313 28 28 21.7313 28 14C28 6.26875 21.7313 0 14 0ZM21.1812 9.31875L12.4875 20.475C12.4187 20.5438 12.3062 20.6938 12.1687 20.6938C12.025 20.6938 11.9313 20.5938 11.85 20.5125C11.7688 20.4313 6.91875 15.7687 6.91875 15.7687L6.825 15.675C6.7875 15.6187 6.75625 15.55 6.75625 15.475C6.75625 15.4 6.7875 15.3312 6.825 15.275C6.85 15.25 6.86875 15.2313 6.89375 15.2C7.375 14.6938 8.35 13.6687 8.4125 13.6062C8.49375 13.525 8.5625 13.4187 8.7125 13.4187C8.86875 13.4187 8.96875 13.55 9.04375 13.625C9.11875 13.7 11.8562 16.3312 11.8562 16.3312L18.8125 7.39375C18.875 7.34375 18.95 7.30625 19.0312 7.30625C19.1125 7.30625 19.1875 7.3375 19.25 7.3875L21.1625 8.89375C21.2125 8.95625 21.2437 9.03125 21.2437 9.1125C21.25 9.19375 21.2188 9.2625 21.1812 9.31875Z",fill:"#1D9D67"})})})},A=function(){return Object(v.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"none",viewBox:"0 0 16 16",children:Object(v.jsx)("path",{fill:"#fff",fillOpacity:"0.66",fillRule:"evenodd",d:"M2.7 6.95a4.25 4.25 0 117.306 2.954 1.001 1.001 0 00-.102.102A4.25 4.25 0 012.7 6.95zm7.906 5.07a6.25 6.25 0 111.414-1.414l2.987 2.987a1 1 0 11-1.414 1.414l-2.987-2.987z",clipRule:"evenodd"})})},q=function(){var e=Object(_.b)(),t=e.client,n=e.setActiveChannel,c=Object(a.useState)(""),s=Object(P.a)(c,2),r=s[0],i=s[1],l=Object(a.useState)(!1),j=Object(P.a)(l,2),o=j[0],u=j[1],d=Object(a.useState)([]),h=Object(P.a)(d,2),b=h[0],m=h[1],O=Object(a.useState)([]),p=Object(P.a)(O,2),x=p[0],f=p[1];Object(a.useEffect)((function(){r||(m([]),f([]))}),[r]);var g=function(){var e=Object(M.a)(D.a.mark((function e(n){var a,c,s,r,l,j;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=t.queryChannels({type:"team",name:{$autocomplete:n},members:{$in:[t.userID]}}),c=t.queryUsers({id:{$ne:t.userID},name:{$autocomplete:n}}),e.next=5,Promise.all([a,c]);case 5:s=e.sent,r=Object(P.a)(s,2),l=r[0],j=r[1].users,l.length&&m(l),j.length&&f(j),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),i("");case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsxs)("div",{className:"channel-search__container",children:[Object(v.jsxs)("div",{className:"channel-search__input__wrapper",children:[Object(v.jsx)("div",{className:"channel-serach__input__icon",children:Object(v.jsx)(A,{})}),Object(v.jsx)("input",{className:"channel-search__input__text",placeholder:"Search",type:"text",value:r,onChange:function(e){e.preventDefault(),u(!0),i(e.target.value),g(e.target.value)}})]}),r&&Object(v.jsx)(pe,{teamChannels:b,directChannels:x,loading:o,setChannel:function(e){i(""),n(e)},setQuery:i})]})},H=function(e){var t=e.children,n=e.error,a=void 0!==n&&n,c=e.loading,s=e.type;return a?"team"===s?Object(v.jsx)("div",{className:"team-channel-list",children:Object(v.jsx)("p",{className:"team-channel-list__message",children:"Connection error, please wait a moment and try again."})}):null:c?Object(v.jsx)("div",{className:"team-channel-list",children:Object(v.jsxs)("p",{className:"team-channel-list__message loading",children:["team"===s?"Channels":"Messages"," loading..."]})}):Object(v.jsxs)("div",{className:"team-channel-list",children:[Object(v.jsxs)("div",{className:"team-channel-list__header",children:[Object(v.jsx)("p",{className:"team-channel-list__header__title",children:"team"===s?"Channels":"Direct Messages"}),Object(v.jsx)(E,{type:"team"===s?"team":"messaging"})]}),t]})},V=n(80),Z=function(e){var t=e.setActiveChannel,n=e.channel,a=e.type,c=Object(_.b)(),s=c.channel,r=c.client,l=Object(i.b)(),j=Object(i.c)((function(e){return e.chat.toggleContainer})),u=function(){var e,t;return Object(v.jsxs)("p",{className:"channel-preview__item",children:["# ",(null===n||void 0===n||null===(e=n.data)||void 0===e?void 0:e.name)||(null===n||void 0===n||null===(t=n.data)||void 0===t?void 0:t.id)]})},d=function(){var e,t,a,c,s,i,l,j,o,u,d=Object.values(n.state.members).filter((function(e){return e.user.id!==r.userID}));return Object(v.jsxs)("div",{className:"channel-preview__item single",children:[Object(v.jsx)(V.a,{image:null===(e=d[0])||void 0===e||null===(t=e.user)||void 0===t?void 0:t.image,name:(null===(a=d[0])||void 0===a||null===(c=a.user)||void 0===c?void 0:c.fullName)||(null===(s=d[0])||void 0===s||null===(i=s.user)||void 0===i?void 0:i.id),size:24}),Object(v.jsx)("p",{children:(null===(l=d[0])||void 0===l||null===(j=l.user)||void 0===j?void 0:j.fullName)||(null===(o=d[0])||void 0===o||null===(u=o.user)||void 0===u?void 0:u.id)})]})};return Object(v.jsx)("div",{className:(null===n||void 0===n?void 0:n.id)===(null===s||void 0===s?void 0:s.id)?"channel-preview__wrapper__selected":"channel-preview__wrapper",onClick:function(){l(o.setIsCreating(!1)),l(o.setIsEditing(!1)),t(n),j&&l(o.setToggleContainer(j))},children:"team"===a?Object(v.jsx)(u,{}):Object(v.jsx)(d,{})})},z=n(115),$=n(18),B=n(628),G=n(281),J=n(280),Q=n(652),K=n(13),W=c.a.createContext({}),X=function(e){Object(z.a)(e);var t,n=Object(K.b)(),a=n.channel,c=n.watcher_count,s=Object(_.b)().client,r=function(){var e=Object.values(a.state.members).filter((function(e){return e.user.id!==s.userID})),t=e.length-3,n=Object(i.b)();return"messaging"===a.type?Object(v.jsxs)("div",{className:"team-channel-header__name-wrapper",children:[e.map((function(e,t){var n=e.user;return Object(v.jsxs)("div",{className:"team-channel-header__name-multi",children:[Object(v.jsx)(V.a,{image:n.image,name:n.fullName||n.id,size:32}),Object(v.jsx)("p",{className:"team-channel-header__name user",children:n.fullName||n.id})]},t)})),t>0&&Object(v.jsxs)("p",{className:"team-channel-header__name user",children:["and ",t," more"]})]}):Object(v.jsxs)("div",{className:"team-channel-header__channel-wrapper",children:[Object(v.jsxs)("p",{className:"team-channel-header__name",children:["# ",a.data.name]}),Object(v.jsx)("span",{style:{display:"flex"},onClick:function(){return n(o.setIsEditing(!0))},children:Object(v.jsx)(F,{})})]})};return Object(v.jsxs)("div",{className:"team-channel-header__container",children:[Object(v.jsx)(r,{}),Object(v.jsx)("div",{className:"team-channel-header__right",children:Object(v.jsx)("p",{className:"team-channel-header__right-text",children:(t=c,t?1===t?"1 user online":"".concat(t," users online"):"No users online")})})]})},Y=function(e){Object(z.a)(e);var t=Object(a.useState)(!1),n=Object(P.a)(t,2),c=n[0],s=n[1],r=Object($.b)().sendMessage;return Object(v.jsx)(W.Provider,{value:{giphyState:c,setGiphyState:s},children:Object(v.jsxs)("div",{style:{display:"flex",width:"100%"},children:[Object(v.jsxs)(B.a,{children:[Object(v.jsx)(X,{}),Object(v.jsx)(G.a,{}),Object(v.jsx)(J.a,{overrideSubmitHandler:function(e){var t,n={attachments:e.attachments,mentioned_users:e.mentioned_users,parent_id:null===(t=e.parent)||void 0===t?void 0:t.id,parent:e.parent,text:e.text};c&&(n=Object(O.a)(Object(O.a)({},n),{},{text:"/giphy ".concat(e.text)})),r&&(r(n),s(!1))}})]}),Object(v.jsx)(Q.a,{})]})})},ee=function(e){var t=e.channelName,n=void 0===t?"":t,a=e.setChannelName;return Object(v.jsxs)("div",{className:"channel-name-input__wrapper",children:[Object(v.jsx)("p",{children:"Name"}),Object(v.jsx)("input",{value:n,onChange:function(e){e.preventDefault(),a(e.target.value)},placeholder:"channel-name"}),Object(v.jsx)("p",{children:"Add Members"})]})},te=function(){var e=Object(i.c)((function(e){return e.chat.createType})),t=Object(_.b)(),n=t.client,c=t.setActiveChannel,s=Object(a.useState)([n.userID||""]),r=Object(P.a)(s,2),l=r[0],j=r[1],u=Object(a.useState)(""),d=Object(P.a)(u,2),h=d[0],b=d[1],m=Object(i.b)(),O=function(){var t=Object(M.a)(D.a.mark((function t(a){var s;return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.prev=1,t.next=4,n.channel(e,h,{name:h,members:l});case 4:return s=t.sent,t.next=7,s.watch();case 7:b(""),m(o.setIsCreating(!1)),j([n.userID]),c(s),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(1),console.log(t.t0);case 16:case"end":return t.stop()}}),t,null,[[1,13]])})));return function(e){return t.apply(this,arguments)}}();return Object(v.jsxs)("div",{className:"create-channel__container",children:[Object(v.jsxs)("div",{className:"create-channel__header",children:[Object(v.jsx)("p",{children:"team"===e?"Create a New Channel":"Send a Direct Message"}),Object(v.jsx)(R,{})]}),"team"===e&&Object(v.jsx)(ee,{channelName:h,setChannelName:b}),Object(v.jsx)(be,{setSelectedUsers:j}),Object(v.jsx)("div",{className:"create-channel__button-wrapper",onClick:O,children:Object(v.jsx)("p",{children:"team"===e?"Create Channel":"Create Message Group"})})]})},ne=function(e){var t=e.channelName,n=void 0===t?"":t,a=e.setChannelName;return Object(v.jsxs)("div",{className:"channel-name-input__wrapper",children:[Object(v.jsx)("p",{children:"Name"}),Object(v.jsx)("input",{value:n,onChange:function(e){e.preventDefault(),a(e.target.value)},placeholder:"channel-name"}),Object(v.jsx)("p",{children:"Add Members"})]})},ae=function(e){var t;Object(z.a)(e);var n=Object(_.b)().channel,c=Object(a.useState)(null===n||void 0===n||null===(t=n.data)||void 0===t?void 0:t.name),s=Object(P.a)(c,2),r=s[0],l=s[1],j=Object(a.useState)([]),u=Object(P.a)(j,2),d=u[0],h=u[1],b=Object(i.b)(),m=function(){var e=Object(M.a)(D.a.mark((function e(t){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!(r!==(n.data.name||n.data.id))){e.next=5;break}return e.next=5,n.update({name:r},{text:"Channel name changed to ".concat(r)});case 5:if(!d.length){e.next=8;break}return e.next=8,n.addMembers(d);case 8:l(null),b(o.setIsEditing(!1)),h([]);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsxs)("div",{className:"edit-channel__container",children:[Object(v.jsxs)("div",{className:"edit-channel__header",children:[Object(v.jsx)("p",{children:"Edit Channel"}),Object(v.jsx)(R,{})]}),Object(v.jsx)(ne,{channelName:r,setChannelName:l}),Object(v.jsx)(be,{setSelectedUsers:h}),Object(v.jsx)("div",{className:"edit-channel__button-wrapper",onClick:m,children:Object(v.jsx)("p",{children:"Save Changes"})})]})},ce=(n(22),n(19)),se=n(132),re=n.n(se),ie=n.p+"static/media/signup.61f8ea09.jpg",le=new m.a,je={fullName:"",username:"",password:"",confirmPassword:"",phoneNumber:"",avatarURL:""},oe=function(){var e=Object(a.useState)(je),t=Object(P.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(!1),r=Object(P.a)(s,2),i=r[0],l=r[1],j=function(e){c(Object(O.a)(Object(O.a)({},n),{},Object(ce.a)({},e.target.name,e.target.value)))},o=function(){var e=Object(M.a)(D.a.mark((function e(t){var a,c,s,r,l,j,o,u,d,h;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=n.username,c=n.password,s=n.phoneNumber,r=n.avatarURL,"https://superchatting.herokuapp.com/auth",e.next=5,re.a.post("".concat("https://superchatting.herokuapp.com/auth","/").concat(i?"signup":"login"),{username:a,password:c,fullName:n.fullName,phoneNumber:s,avatarURL:r});case 5:l=e.sent,j=l.data,o=j.token,u=j.userId,d=j.hashedPassword,h=j.fullName,le.set("token",o),le.set("username",a),le.set("fullName",h),le.set("userId",u),i&&(le.set("phoneNumber",s),le.set("avatarURL",r),le.set("hashedPassword",d)),window.location.reload();case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsxs)("div",{className:"auth__form-container",children:[Object(v.jsxs)("div",{className:"auth__form-container_fields",children:[Object(v.jsx)("h1",{className:"auth_header",children:"Super Chat"}),Object(v.jsxs)("div",{className:"auth__form-container_fields-content",children:[Object(v.jsx)("p",{children:i?"Sign Up":"Sign In"}),Object(v.jsxs)("form",{onSubmit:o,children:[i&&Object(v.jsxs)("div",{className:"auth__form-container_fields-content_input",children:[Object(v.jsx)("label",{htmlFor:"fullName",children:"Full Name"}),Object(v.jsx)("input",{name:"fullName",type:"text",placeholder:"Full Name",onChange:j,required:!0})]}),Object(v.jsxs)("div",{className:"auth__form-container_fields-content_input",children:[Object(v.jsx)("label",{htmlFor:"username",children:"Username"}),Object(v.jsx)("input",{name:"username",type:"text",placeholder:"Username",onChange:j,required:!0})]}),i&&Object(v.jsxs)("div",{className:"auth__form-container_fields-content_input",children:[Object(v.jsx)("label",{htmlFor:"phoneNumber",children:"Phone Number"}),Object(v.jsx)("input",{name:"phoneNumber",type:"text",placeholder:"Phone Number",onChange:j,required:!0})]}),i&&Object(v.jsxs)("div",{className:"auth__form-container_fields-content_input",children:[Object(v.jsx)("label",{htmlFor:"avatarURL",children:"Avatar URL"}),Object(v.jsx)("input",{name:"avatarURL",type:"text",placeholder:"Avatar URL",onChange:j})]}),Object(v.jsxs)("div",{className:"auth__form-container_fields-content_input",children:[Object(v.jsx)("label",{htmlFor:"password",children:"Password"}),Object(v.jsx)("input",{name:"password",type:"password",placeholder:"Password",onChange:j,required:!0})]}),i&&Object(v.jsxs)("div",{className:"auth__form-container_fields-content_input",children:[Object(v.jsx)("label",{htmlFor:"confirmPassword",children:"Confirm Password"}),Object(v.jsx)("input",{name:"confirmPassword",type:"password",placeholder:"Confirm Password",onChange:j,required:!0})]}),Object(v.jsx)("div",{className:"auth__form-container_fields-content_button",children:Object(v.jsx)("button",{children:i?"Sign Up":"Sign In"})})]}),Object(v.jsx)("div",{className:"auth__form-container_fields-account",children:Object(v.jsxs)("p",{children:[i?"Already have an account?":"Don't have an account?",Object(v.jsx)("span",{onClick:function(){l((function(e){return!e}))},children:i?"Sign In":"Sign Up"})]})})]})]}),Object(v.jsx)("div",{className:"auth__form-container_image",children:Object(v.jsx)("img",{src:ie,alt:"sign in"})})]})},ue=n(43),de=function(e){var t=e.children;return Object(v.jsxs)("div",{className:"user-list__container",children:[Object(v.jsxs)("div",{className:"user-list__header",children:[Object(v.jsx)("p",{children:"User"}),Object(v.jsx)("p",{children:"Invite"})]}),t]})},he=function(e){var t=e.user,n=e.setSelectedUsers,c=Object(a.useState)(!1),s=Object(P.a)(c,2),r=s[0],i=s[1];return Object(v.jsxs)("div",{className:"user-item__wrapper",onClick:function(){console.log("click"),n(r?function(e){return e.filter((function(e){return e!==t.id}))}:function(e){return[].concat(Object(ue.a)(e),[t.id])}),i((function(e){return!e}))},children:[Object(v.jsxs)("div",{className:"user-item__name-wrapper",children:[Object(v.jsx)(V.a,{image:t.image,name:t.fullName||t.id,size:32}),Object(v.jsx)("p",{className:"user-item__name",children:t.fullName||t.id})]}),r?Object(v.jsx)(T,{}):Object(v.jsx)("div",{className:"user-item__invite-empty"})]})},be=function(e){var t=e.setSelectedUsers,n=Object(_.b)().client,c=Object(a.useState)([]),s=Object(P.a)(c,2),r=s[0],i=s[1],l=Object(a.useState)(!1),j=Object(P.a)(l,2),o=j[0],u=j[1],d=Object(a.useState)(!1),h=Object(P.a)(d,2),b=h[0],m=h[1],O=Object(a.useState)(!1),p=Object(P.a)(O,2),x=p[0],f=p[1];return Object(a.useEffect)((function(){var e=function(){var e=Object(M.a)(D.a.mark((function e(){var t;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!o){e.next=2;break}return e.abrupt("return");case 2:return u(!0),e.prev=3,e.next=6,n.queryUsers({id:{$ne:n.userID}},{id:1},{limit:8});case 6:(t=e.sent).users.length?i(t.users):m(!0),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),f(!0);case 13:u(!1);case 14:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(){return e.apply(this,arguments)}}();n&&e()}),[]),x?Object(v.jsx)(de,{children:Object(v.jsx)("div",{className:"user-list__message",children:"Error loading, please refresh and try again."})}):b?Object(v.jsx)(de,{children:Object(v.jsx)("div",{className:"user-list__message",children:"No users found."})}):Object(v.jsx)(de,{children:o?Object(v.jsx)("div",{className:"user-list__message",children:"Loading users..."}):null===r||void 0===r?void 0:r.map((function(e,n){return Object(v.jsx)(he,{index:n,user:e,setSelectedUsers:t},e.id)}))})},me=function(){var e=Object(M.a)(D.a.mark((function e(t){var n,a,c,s,r,i,l,j,o;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.client,a=t.setActiveChannel,c=t.channel,s=t.setChannel,r={type:"messaging",member_count:2,members:{$eq:[n.user.id,n.userID]}},e.next=4,n.queryChannels(r);case 4:if(i=e.sent,l=Object(P.a)(i,1),!(j=l[0])){e.next=9;break}return e.abrupt("return",a(j));case 9:return o=n.channel("messaging",{members:[c.id,n.userID]}),s(o),e.abrupt("return",a(o));case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Oe=function(e){var t=e.channel,n=e.focusedId,a=e.type,c=e.setChannel,s=Object(_.b)(),r=s.client,l=s.setActiveChannel,j=Object(i.b)(),u=Object(i.c)((function(e){return e.chat.toggleContainer}));return"channel"===a?Object(v.jsxs)("div",{onClick:function(){c(t),u&&j(o.setToggleContainer(u))},className:n===t.id?"channel-search__result-container__focused":"channel-search__result-container",children:[Object(v.jsx)("div",{className:"result-hashtag",children:"#"}),Object(v.jsx)("p",{className:"channel-search__result-text",children:t.data.name})]}):Object(v.jsx)("div",{onClick:Object(M.a)(D.a.mark((function e(){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:me({client:r,setActiveChannel:l,channel:t,setChannel:c}),u&&j(o.setToggleContainer(u));case 2:case"end":return e.stop()}}),e)}))),className:n===t.id?"channel-search__result-container__focused":"channel-search__result-container",children:Object(v.jsxs)("div",{className:"channel-search__result-user",children:[Object(v.jsx)(V.a,{image:t.image||void 0,name:t.name,size:24}),Object(v.jsx)("p",{className:"channel-search__result-text",children:t.name})]})})},pe=function(e){var t=e.teamChannels,n=e.directChannels,a=e.focusedId,c=e.loading,s=e.setChannel;return Object(v.jsxs)("div",{className:"channel-search__results",children:[Object(v.jsx)("p",{className:"channel-search__results-header",children:"Channels"}),c&&!t.length&&Object(v.jsx)("p",{className:"channel-search__results-header",children:Object(v.jsx)("i",{children:"Loading..."})}),c||t.length?null===t||void 0===t?void 0:t.map((function(e,t){return Object(v.jsx)(Oe,{channel:e,focusedId:a,setChannel:s,type:"channel"},t)})):Object(v.jsx)("p",{className:"channel-search__results-header",children:Object(v.jsx)("i",{children:"No channels found"})}),Object(v.jsx)("p",{className:"channel-search__results-header",children:"Users"}),c&&!n.length&&Object(v.jsx)("p",{className:"channel-search__results-header",children:Object(v.jsx)("i",{children:"Loading..."})}),c||n.length?null===n||void 0===n?void 0:n.map((function(e,t){return Object(v.jsx)(Oe,{channel:e,focusedId:a,setChannel:s,type:"user"},t)})):Object(v.jsx)("p",{className:"channel-search__res ults-header",children:Object(v.jsx)("i",{children:"No direct messages found"})})]})},xe=(n(563),n(564),n(276)),ve=n(653),fe=n(647),_e=(n(565),n(649)),ge=(n(566),n(274)),Ne=n.n(ge);function Ce(){var e=Object(a.useState)({left:!1}),t=Object(P.a)(e,2),n=t[0],s=t[1],r=function(e,t){return function(a){("keydown"!==a.type||"Tab"!==a.key&&"Shift"!==a.key)&&s(Object(O.a)(Object(O.a)({},n),{},Object(ce.a)({},e,t)))}},i=function(e){return Object(v.jsx)("div",{sx:{width:"top"===e||"bottom"===e?"auto":250},role:"presentation",className:"sidebar-design",style:{width:"14rem",backgroundColor:"#00b17c"},children:Object(v.jsx)(Ne.a,{children:Object(v.jsx)(L,{})})})};return Object(v.jsxs)("div",{children:[["left"].map((function(e){return Object(v.jsxs)(c.a.Fragment,{children:[Object(v.jsx)(fe.a,{style:{color:"white"},onClick:r(e,!0),className:"tooltip-design",title:"Open the side bar",children:Object(v.jsx)(ve.a,{style:{backgroundColor:"#00b17c",color:"white"},children:Object(v.jsx)(xe.a,{style:{color:"white"},className:"tooltip-design"})})}),Object(v.jsx)(_e.a,{anchor:e,open:n[e],onClose:r(e,!1),children:i(e)})]},e)})),Object(v.jsx)("div",{style:{display:"none"},children:Object(v.jsx)(L,{})})]})}var we=new m.a,ye=we.get("token"),ke=h.a.getInstance("gw255tjbwqry");ye&&ke.connectUser({id:we.get("userId"),name:we.get("username"),fullName:we.get("fullName"),image:we.get("avatarURL"),hashedPassword:we.get("hashedPassword"),phoneNumber:we.get("phoneNumber")},ye);var Se=function(){return ye?Object(v.jsx)("div",{className:"app__wrapper",children:Object(v.jsxs)(b.a,{client:ke,theme:"team light",children:[Object(v.jsx)(Ce,{}),Object(v.jsx)(f,{})]})}):Object(v.jsx)(oe,{})};r.a.render(Object(v.jsx)(i.a,{store:d,children:Object(v.jsx)(Se,{})}),document.getElementById("root"))}},[[583,1,2]]]);
//# sourceMappingURL=main.21aaaa13.chunk.js.map