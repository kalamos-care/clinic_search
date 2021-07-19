(this["webpackJsonpclinic-search"]=this["webpackJsonpclinic-search"]||[]).push([[0],{111:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(10),o=a.n(i),c=a(18),s=a(157),l=a(158),d=a(11),u=a(144),h=a(160),m=a(150),p=a(146),b=a(148),f=a(41),j=a(2),g=Object(u.a)((function(e){return{title:{flexGrow:1,textAlign:"left",color:"inherit",textDecoration:"none"}}})),y=function(){var e=g();return Object(j.jsx)(p.a,{position:"static",children:Object(j.jsx)(b.a,{children:Object(j.jsx)(f.a,{variant:"h5",className:e.title,component:c.b,to:"/",children:"Kalamos Care"})})})},x=a(152),v=a(149),O=a(151),w=Object(u.a)((function(e){return{"@global":{ul:{margin:0,padding:0,listStyle:"none"}},divider:{margin:e.spacing(4)}}}));function k(){return Object(j.jsxs)(f.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(j.jsx)(v.a,{color:"inherit",component:c.b,to:"/",children:"Kalamos Care"})," ",(new Date).getFullYear(),"."]})}var I=[{title:"Company",subheaders:[{description:"About Us",url:"/company/about-us"},{description:"Blog",url:"/company/blog"}]},{title:"Resources",subheaders:[{description:"FAQ",url:"/resources/faq"},{description:"API Docs",url:"/resources/api-docs"}]},{title:"Legal",subheaders:[{description:"Privacy policy",url:"/legal/privacy-policy"},{description:"Terms of Use",url:"/legal/terms-of-use"}]}],P=function(){var e=w();return Object(j.jsxs)(m.a,{children:[Object(j.jsx)(O.a,{className:e.divider}),Object(j.jsxs)(x.a,{container:!0,spacing:4,justify:"space-evenly",children:[I.map((function(e){return Object(j.jsxs)(x.a,{item:!0,xs:6,sm:3,children:[Object(j.jsx)(f.a,{variant:"h6",color:"textPrimary",gutterBottom:!0,children:e.title}),Object(j.jsx)("ul",{children:e.subheaders.map((function(e){return Object(j.jsx)("li",{children:Object(j.jsx)(v.a,{to:e.url,component:c.b,variant:"subtitle1",color:"textSecondary",children:e.description})},e.description)}))})]},e.title)})),Object(j.jsxs)(x.a,{item:!0,xs:12,children:[Object(j.jsx)(f.a,{variant:"body1",color:"textPrimary",gutterBottom:!0,children:"The code for this website is available for free on GitHub"}),Object(j.jsx)(k,{})]})]})]})},T=Object(u.a)((function(e){return{hero:{margin:e.spacing(4,0)},heroContent:{padding:e.spacing(4)}}})),C=function(){var e=T();return Object(j.jsx)(m.a,{maxWidth:"sm",children:Object(j.jsx)(x.a,{container:!0,spacing:2,justify:"center",className:e.hero,children:Object(j.jsxs)(x.a,{item:!0,xs:12,className:e.heroContent,children:[Object(j.jsxs)(f.a,{variant:"h3",align:"center",gutterBottom:!0,children:["PrEP is lifesaving-",Object(j.jsx)("br",{}),"but what is PrEP?"]}),Object(j.jsx)(f.a,{variant:"h6",gutterBottom:!0,children:"Often times, we think of PrEP as a pill, and it is!"}),Object(j.jsx)(f.a,{variant:"h6",gutterBottom:!0,children:"It's more than that though. PreExposure Prophylaxis means taking actions to protect yourself and your community before having sex and other activities."}),Object(j.jsx)(f.a,{variant:"subtitle1",gutterBottom:!0,children:"If you're interested in PrEP medication or other sexual health resources, just enter your zip code below."})]})})})},S=a(159),W=a(156),B=a(48),F=a(153),_=a(154),M=a(155),A=a(29),E=a.n(A),N=a(49),H=a(68),G=a.n(H).a.create({baseURL:"https://underwater.hack.fail/v1",timeout:15e3}),K=function(e){return e.data},q=function(e){return G.get(e).then(K)},U={getRandomClinics:function(){var e=Object(N.a)(E.a.mark((function e(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",q("/search"));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getClinicsByZip:function(){var e=Object(N.a)(E.a.mark((function e(t){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",q("/search?zip=".concat(t)));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getAClinic:function(){var e=Object(N.a)(E.a.mark((function e(t){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",q("/test-centers/".concat(t)));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},D=function(e){var t=e.zip,a=U.getRandomClinics(),i=U.getClinicsByZip("11211");console.log(a),console.log(i);var o=n.a.useState(),s=Object(B.a)(o,2),l=s[0],d=s[1];return Object(r.useEffect)((function(){U.getClinicsByZip(t).then((function(e){return d(e)}))}),[]),console.log(l),Object(j.jsxs)(x.a,{container:!0,spacing:2,direction:"column",justify:"flex-start",alignItems:"stretch",children:[Object(j.jsx)("pre",{children:JSON.stringify(a,null,2)}),Object(j.jsx)(F.a,{className:"",children:null===l||void 0===l?void 0:l.data.map((function(e){return Object(j.jsxs)(_.a,{alignItems:"flex-start",children:[Object(j.jsx)(v.a,{component:c.b,to:"/clinic/".concat(e.field_org_id),children:Object(j.jsx)(M.a,{primary:e.title_field,secondary:Object(j.jsxs)(n.a.Fragment,{children:[Object(j.jsx)(f.a,{component:"span",variant:"body2",className:"",color:"textPrimary",children:e.title_field}),["".concat(e.field_org_street1," ").concat(e.field_org_street2," ").concat(e.field_org_city_name,", ").concat(e.field_org_state," ").concat(e.field_org_zipcode),e.field_org_phone]]})})}),Object(j.jsx)(O.a,{})]},e.field_org_id)}))})]})},R=(Object(u.a)((function(e){return{root:{display:"flex",backgroundColor:e.palette.secondary.light,overflow:"hidden"},container:{marginTop:e.spacing(10),marginBottom:e.spacing(15),position:"relative",display:"flex",flexDirection:"column",alignItems:"center"},title:{marginBottom:e.spacing(14)}}})),function(e){var t=e.title,a=e.children;return Object(j.jsxs)(x.a,{container:!0,children:[Object(j.jsx)(x.a,{item:!0,xs:12,children:Object(j.jsx)(f.a,{variant:"h4",component:"h2",children:t})}),Object(j.jsx)(x.a,{item:!0,xs:12,children:a})]})}),L=function(){var e=Object(r.useRef)("");return Object(j.jsx)(x.a,{container:!0,children:Object(j.jsxs)(R,{title:"Find a Clinic",children:[Object(j.jsx)(x.a,{item:!0,xs:12,children:Object(j.jsxs)("form",{children:[Object(j.jsx)(S.a,{id:"searchTerm",type:"text",inputRef:e,placeholder:"Enter Location"}),Object(j.jsx)(W.a,{variant:"text",color:"default",type:"button",onClick:function(){return e},children:"Submit"})]})}),Object(j.jsx)(D,{zip:e.current})]})})},Y=function(){return Object(j.jsxs)(m.a,{maxWidth:"md",children:[Object(j.jsx)(C,{}),Object(j.jsx)(O.a,{}),Object(j.jsx)(L,{})]})},z=function(e){var t=e.title;return Object(j.jsx)(f.a,{gutterBottom:!0,variant:"h3",children:t})},J=[{header:"Sexual health is awkward. It doesn't have to be.",body:[{paragraph:"It can be awkward to talk to someone you don't know about sex. Hell, it can be hard to talk to someone you do know about sex. And it's even harder when you're concerned something might be wrong."},{paragraph:"As a result, sexual healthcare is too often reactionary and fear-based. Kalamos is all about turning that on its head."},{paragraph:"We know there's a better way. We know that patients are capable of being active participants in their care. We know by creating convenient services, we enable more people to get the care they need."}]},{header:"That burning sensation to solve a problem",body:[{paragraph:"I still remember my first time getting tested, or rather the roller coaster of emotions before and after."},{paragraph:"I woke up and it burned to pee, like badly. Half-convinced this was the end, I reached out to an older friend for advice. He calmed me down and took me to the clinic in the Castro. Yes, even in the heart of SF, I was still woefully under-educated about sexual health and afraid to go to the clinic alone."},{paragraph:'Everyone at the clinic was kind, reassuring, and cheerful. Where I grew up, you didn\'t really talk about these things. 30 minutes later, the doctor had taken my samples, treated me proactively, and reassured me that everything was going to be just fine. "Come back in a week to check in," he said with a smile, handing me a heap of condoms.'},{paragraph:"What I really got out of the experience was knowledge, security, and confidence. The dissolution of stigma around sexual health and the reassurance that I would be okay was incredibly powerful."},{paragraph:"That experience stuck with me because of how lucky I was, and that\u2019s ultimately why I created Kalamos. Everyone deserved affirmative access to sexual wellness."}]},{header:"Who we are",body:[{paragraph:"We are iterative, connective, research-aligned and practical."},{paragraph:"We are a small, but growing group of queer folk who want better care modeled around our needs and our convenience."}]}],Z=function(){return Object(j.jsxs)(x.a,{container:!0,children:[Object(j.jsx)(z,{title:"About Us"}),Object(j.jsx)(x.a,{item:!0,xs:12,children:J.map((function(e){return Object(j.jsxs)(x.a,{children:[Object(j.jsx)(f.a,{variant:"h4",color:"textPrimary",gutterBottom:!0,children:e.header}),Object(j.jsx)(x.a,{children:e.body.map((function(e){return Object(j.jsx)(f.a,{variant:"body1",paragraph:!0,children:e.paragraph})}))})]})}))})]})},Q=function(){return Object(j.jsx)(x.a,{container:!0,children:Object(j.jsx)(z,{title:"Blog"})})},V=function(){return Object(j.jsx)(x.a,{container:!0,children:Object(j.jsx)(z,{title:"Frequently Asked Questions"})})},X=function(){return Object(j.jsx)(x.a,{container:!0,children:Object(j.jsx)(z,{title:"API Docs"})})},$=[{header:"",body:[{paragraph:"Kalamos Care, Inc. (\u201cKalamos,\u201d \u201cwe,\u201d or \u201cus,\u201d) is committed to protecting your privacy. This Privacy Policy (\u201cPrivacy Policy\u201d) along with our Terms of Use constitute a valid and binding contract between you (\u201cyou\u201d or the \u201cClient\u201d) and Kalamos. This Privacy Policy describes how Kalamos collects, uses, secures, and shares information we receive from you when you access this website, https://kalamos.care/ (\u201cthe Website\u201d or \u201cthis Website\u201d), our STI testing management services or other services, and software provided on or in connection with such services (collectively, \u201cthe \u201cServices\u201d). You acknowledge that this Privacy Policy is part of our Terms of Use, and by agreeing to use the Services, you are agreeing to be bound by all of its terms and conditions and all applicable laws and regulations. If you do not agree to these terms, you are prohibited from using or accessing the Services."},{paragraph:"By using our Website or Services, you are consenting to have your personal information transferred to and processed in the United States.We make no assurances that the Website is suitable for use outside the United States."}]},{header:"INFORMATION WE COLLECT",body:[{paragraph:"In order to provide you with our Services, we may collect, store, and use personally identifiable information that can be used to identify you by itself or when it is combined with other information (\u201cPersonal Information\u201d). Personal Information may include identifiers such as name, address, cell phone number, financial, insurance, and credit card information or email address. We may collect Personal Information from you in a variety of ways, including through a registration form, by you filling in forms or by submitting information on the Services or by corresponding with us by phone, email, or otherwise. Personal Information includes Medical Information and Insurance Information, as defined below."},{paragraph:"In order to use our Services, we may require you to complete intake forms which request Personal Information such as medical and demographic information (\u201cMedical Information\u201d) and/or insurance information (\u201cInsurance Information\u201d) for use by Kalamos and your physician or healthcare provider (the \u201cProvider\u201d)."},{paragraph:"You will be asked to provide Medical Information relating to you, which may include, but is not limited to, age, disease history, medical test results, and medical treatments. The Provider may provide us with additional Medical Information regarding your medical status and/or the care you may receive. We will also ask that you provide certain information regarding your Provider, including his/her name, address and contact information,National Provider Identification (NPI) and Medicaid provider numbers, and information regarding his/her current electronic medical records (EMR) system in order to allow us to provide you our Services."},{paragraph:"You may also be asked to provide Insurance Information, including the name of your insurance provider, your policy holder\u2019s name, a Member ID number or personal insurance account number, and your relationship to the policy holder. We will also request a customer service or contact phone number associated with your insurance provider. This information will be requested for both your primary and secondary insurance, as applicable."},{paragraph:"You will also be asked to provide an email address so that we and/or the Provider may contact you with relevant reminders and updates about the Services."},{paragraph:"Personal Information collected through the Service and submitted to the Provider may become part of your medical record (both paper and electronic) with the Provider and will be subject to applicable laws, rules, regulations, and guidelines relating to the handling of Personal Information and medical records."},{paragraph:"Entry of Personal Information through the Services is completely voluntary and it is your choice to provide us with the Personal Information requested. Please be aware that failure to provide the requested Personal Information may prevent us from providing you Services."},{paragraph:"From time to time, Kalamos may share aggregate, non-personal information about website usage with third parties, including government agencies and advertisers. Aggregate information does not contain any Personal Information about our users."}]}],ee=function(){return Object(j.jsxs)(x.a,{container:!0,children:[Object(j.jsx)(z,{title:"Privacy Policy"}),Object(j.jsx)(x.a,{item:!0,xs:12,children:$.map((function(e){return Object(j.jsxs)(x.a,{children:[Object(j.jsx)(f.a,{variant:"h6",color:"textPrimary",gutterBottom:!0,children:e.header}),Object(j.jsx)(x.a,{children:e.body.map((function(e){return Object(j.jsx)(f.a,{variant:"body1",paragraph:!0,children:e.paragraph})}))})]})}))})]})},te=[{header:"Sexual health is awkward. It doesn't have to be.",body_text:[{paragraph:"It can be awkward to talk to someone you don't know about sex. Hell, it can be hard to talk to someone you do know about sex. And it's even harder when you're concerned something might be wrong."},{paragraph:"As a result, sexual healthcare is too often reactionary and fear-based. Kalamos is all about turning that on its head."},{paragraph:"We know there's a better way. We know that patients are capable of being active participants in their care. We know by creating convenient services, we enable more people to get the care they need."}]}],ae=function(){return Object(j.jsxs)(x.a,{container:!0,children:[Object(j.jsx)(z,{title:"Terms Of Use"}),Object(j.jsx)(x.a,{item:!0,xs:12,children:te.map((function(e){return Object(j.jsxs)(x.a,{children:[Object(j.jsx)(f.a,{variant:"h6",color:"textPrimary",gutterBottom:!0,children:e.header}),Object(j.jsx)(x.a,{children:e.body_text.map((function(e){return Object(j.jsx)(f.a,{variant:"body1",paragraph:!0,children:e.paragraph})}))})]})}))})]})},re=function(){var e=Object(d.g)(),t=n.a.useState(),a=Object(B.a)(t,2),i=a[0],o=a[1];return Object(r.useEffect)((function(){U.getAClinic(e.id).then((function(e){return o(e)}))}),[]),Object(j.jsxs)(x.a,{container:!0,children:[Object(j.jsx)(z,{title:"Clinic: ".concat(null===i||void 0===i?void 0:i.data.name1)}),Object(j.jsx)(x.a,{item:!0,xs:12,children:Object(j.jsx)("pre",{children:JSON.stringify(i,null,2)})})]})},ne=Object(u.a)((function(e){return{public:{display:"flex",flexDirection:"column"},header:{display:"flex",alignItems:"center"},main:{display:"flex",flexGrow:1,justifyContent:"center",paddingTop:e.spacing(4)},footer:{display:"flex",textAlign:"center",position:"relative",bottom:"0",backgroundColor:"#f4effc",marginTop:"2rem",paddingBottom:"2rem"}}})),ie=function(){var e=ne();return Object(j.jsxs)(h.a,{className:e.public,children:[Object(j.jsx)("header",{className:e.header,children:Object(j.jsx)(y,{})}),Object(j.jsx)("main",{className:e.main,children:Object(j.jsx)(m.a,{maxWidth:"md",children:Object(j.jsxs)(d.c,{children:[Object(j.jsx)(d.a,{exact:!0,path:"/",component:Y}),Object(j.jsx)(d.a,{path:"/company/about-us",component:Z}),Object(j.jsx)(d.a,{path:"/company/blog",component:Q}),Object(j.jsx)(d.a,{path:"/resources/faq",component:V}),Object(j.jsx)(d.a,{path:"/resources/api-docs",component:X}),Object(j.jsx)(d.a,{path:"/legal/privacy-policy",component:ee}),Object(j.jsx)(d.a,{path:"/legal/terms-of-use",component:ae}),Object(j.jsx)(d.a,{path:"/clinic/:id",component:re})]})})}),Object(j.jsx)("footer",{className:e.footer,children:Object(j.jsx)(P,{})})]})};function oe(){var e=Object(d.f)().pathname;return Object(r.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}var ce=a(69),se=a.p+"static/media/GT-Haptik-Medium-2.c5fc3759.woff2",le=(a(110),{fontFamily:"GT-Haptik-Medium",fontStyle:"normal",fontWeight:400,src:"\n    local('GT-Haptik-Medium'),\n    url(".concat(se,") format('woff2')\n  ")}),de=Object(ce.a)({palette:{primary:{light:"#67568c",main:"#463366",dark:"#301e4e"},secondary:{main:"#ff6e6c"},text:{primary:"#1f1235",secondary:"#1b1425"}},typography:{button:{fontFamily:"GT-Haptik-Medium"},h1:{fontFamily:"GT-Haptik-Medium"},h2:{fontFamily:"GT-Haptik-Medium"},h3:{fontFamily:"GT-Haptik-Medium"},h4:{fontFamily:"GT-Haptik-Medium"},h5:{fontFamily:"GT-Haptik-Medium"},h6:{fontFamily:"GT-Haptik-Medium"},fontFamily:["Arimo","sans-serif"].join(",")},overrides:{MuiCssBaseline:{"@global":{"@font-face":[le]}}}}),ue=function(){return Object(j.jsx)(s.a,{theme:de,children:Object(j.jsxs)(c.a,{basename:"/",children:[Object(j.jsx)(l.a,{}),Object(j.jsx)(oe,{}),Object(j.jsx)(ie,{})]})})},he=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,162)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,i=t.getLCP,o=t.getTTFB;a(e),r(e),n(e),i(e),o(e)}))};o.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(ue,{})}),document.getElementById("root")),he()}},[[111,1,2]]]);
//# sourceMappingURL=main.03574cb9.chunk.js.map