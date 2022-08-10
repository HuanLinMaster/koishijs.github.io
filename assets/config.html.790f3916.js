import{_ as r,o as n,c,a as e,e as o,w as h,F as u,b as t,d as s,r as a}from"./app.b8eecdce.js";const _={},p=e("h1",{id:"\u914D\u7F6E\u9879",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u914D\u7F6E\u9879","aria-hidden":"true"},"#"),t(" \u914D\u7F6E\u9879")],-1),f=t("\u8BF7\u6CE8\u610F\u6807\u6709 "),m=t(" \u7684\u914D\u7F6E\u9879\u9700\u8981\u914D\u5408 addons \u4F7F\u7528\u3002\u4F46\u4F60\u53EF\u4EE5\u5C06\u76F8\u5E94\u7684\u53C2\u6570\u4F20\u7ED9\u4EFB\u4F55\u4E00\u4E2A\u63D2\u4EF6\uFF0C\u6548\u679C\u662F\u7B49\u4EF7\u7684\u3002"),x=s('<h2 id="prefix" tabindex="-1"><a class="header-anchor" href="#prefix" aria-hidden="true">#</a> prefix</h2><ul><li>\u7C7B\u578B: <code>string</code></li><li>\u9ED8\u8BA4\u503C: <code>&#39;&gt;&#39;</code></li></ul><p>\u5FEB\u6377\u8C03\u7528\u7684\u524D\u7F00\u5B57\u7B26\u3002\u8BBE\u7F6E\u4E3A <code>null</code> \u53EF\u4EE5\u53D6\u6D88 evaluate \u6307\u4EE4\u7684\u5FEB\u6377\u8C03\u7528\u3002</p><h2 id="scriptloader" tabindex="-1"><a class="header-anchor" href="#scriptloader" aria-hidden="true">#</a> scriptLoader</h2><ul><li>\u7C7B\u578B: <code>string</code></li><li>\u9ED8\u8BA4\u503C: <code>&#39;default&#39;</code></li></ul><p>evaluate \u6307\u4EE4\u548C\u63D2\u503C\u6240\u4F7F\u7528\u7684 Loader\u3002\u5185\u7F6E\u7684\u53EF\u9009\u503C\u5305\u62EC default, typescript \u548C esbuild\u3002\u4F60\u4E5F\u53EF\u4EE5\u81EA\u5DF1\u7F16\u5199\u4E00\u4E2A Loader\uFF0C\u5E76\u5728\u8FD9\u91CC\u914D\u7F6E\u9879\u4E2D\u586B\u5165\u6587\u4EF6\u8DEF\u5F84\u3002</p><h2 id="timeout" tabindex="-1"><a class="header-anchor" href="#timeout" aria-hidden="true">#</a> timeout</h2><ul><li>\u7C7B\u578B: <code>number</code></li><li>\u9ED8\u8BA4\u503C: <code>1000</code></li></ul><p>\u5355\u8F6E evaluate \u6307\u4EE4\u6267\u884C\u8FC7\u7A0B\u5141\u8BB8\u7684\u6700\u5927\u7B49\u5F85\u65F6\u957F\uFF0C\u5355\u4F4D\u4E3A\u6BEB\u79D2\u3002</p><h2 id="userfields" tabindex="-1"><a class="header-anchor" href="#userfields" aria-hidden="true">#</a> userFields</h2><ul><li>\u7C7B\u578B: <code>Access&lt;User.Fields&gt;</code></li><li>\u9ED8\u8BA4\u503C: <code>[&#39;id&#39;, &#39;authority&#39;]</code></li></ul><p>\u80FD\u591F\u5728 evaluate \u6307\u4EE4\u4E2D\u88AB\u8BBF\u95EE\u7684\u7528\u6237\u5B57\u6BB5\u5217\u8868\u3002\u8FD9\u91CC\u7684\u5B57\u6BB5\u4E5F\u662F\u53D7 <a href="#%E4%BD%BF%E7%94%A8%E9%99%B7%E9%98%B1">\u9677\u9631</a> \u5F71\u54CD\u7684\u3002</p><h2 id="channelfields" tabindex="-1"><a class="header-anchor" href="#channelfields" aria-hidden="true">#</a> channelFields</h2><ul><li>\u7C7B\u578B: <code>Access&lt;Channel.Fields&gt;</code></li><li>\u9ED8\u8BA4\u503C: <code>[&#39;id&#39;]</code></li></ul><p>\u80FD\u591F\u5728 evaluate \u6307\u4EE4\u4E2D\u88AB\u8BBF\u95EE\u7684\u9891\u9053\u5B57\u6BB5\u5217\u8868\u3002\u8FD9\u91CC\u7684\u5B57\u6BB5\u4E5F\u662F\u53D7 <a href="#%E4%BD%BF%E7%94%A8%E9%99%B7%E9%98%B1">\u9677\u9631</a> \u5F71\u54CD\u7684\u3002</p><h2 id="resourcelimits" tabindex="-1"><a class="header-anchor" href="#resourcelimits" aria-hidden="true">#</a> resourceLimits</h2>',16),g=t("\u7C7B\u578B: "),b={href:"https://nodejs.org/api/worker_threads.html#worker_threads_worker_resourcelimits",target:"_blank",rel:"noopener noreferrer"},v=e("code",null,"ResourceLimits",-1),B=s('<p>\u5BF9\u5B50\u7EBF\u7A0B\u7684\u8D44\u6E90\u9650\u5236\u3002</p><h2 id="setupfiles" tabindex="-1"><a class="header-anchor" href="#setupfiles" aria-hidden="true">#</a> setupFiles</h2><ul><li>\u7C7B\u578B: <code>Record&lt;string, string&gt;</code></li></ul><p>\u8981\u5728\u5B50\u7EBF\u7A0B\u6267\u884C\u7684\u6587\u4EF6\u540D\u7684\u952E\u503C\u5BF9\u3002\u952E\u8868\u793A\u4F60\u5E0C\u671B\u5728\u62A5\u9519\u4FE1\u606F\u4E2D\u663E\u793A\u7684\u6A21\u5757\u540D\uFF0C\u503C\u8868\u793A\u6587\u4EF6\u7684\u5B9E\u9645\u8DEF\u5F84\u3002\u5982\u679C\u4F60\u8981\u6269\u5C55 eval \u63D2\u4EF6\u5728\u5B50\u7EBF\u7A0B\u7684\u884C\u4E3A\uFF0C\u4F60\u53EF\u80FD\u9700\u8981\u8FD9\u4E2A\u9009\u9879\u3002</p><h2 id="serializer" tabindex="-1"><a class="header-anchor" href="#serializer" aria-hidden="true">#</a> serializer</h2><ul><li>\u7C7B\u578B: <code>&#39;v8&#39; | &#39;yaml&#39;</code></li><li>\u9ED8\u8BA4\u503C: <code>&#39;v8&#39;</code></li></ul>',6),L=t("\u8981\u4F7F\u7528\u7684\u5E8F\u5217\u5316\u65B9\u6CD5\u3002\u6B64\u914D\u7F6E\u5C06\u4F1A\u5F71\u54CD "),k=t("storage"),E=t(" \u80FD\u591F\u652F\u6301\u7684\u7C7B\u578B\u3002"),F=e("h2",{id:"inspect",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#inspect","aria-hidden":"true"},"#"),t(" inspect")],-1),w=t("\u7C7B\u578B: "),R={href:"https://nodejs.org/api/util.html#util_util_formatwithoptions_inspectoptions_format_args",target:"_blank",rel:"noopener noreferrer"},y=e("code",null,"InspectOptions",-1),A=e("p",null,[t("\u7528\u4E8E\u5C06\u4F20\u5165 "),e("a",{href:"#send"},[e("code",null,"send")]),t(" \u65B9\u6CD5\u7684\u53C2\u6570\u8F6C\u5316\u6210\u5B57\u7B26\u4E32\u7684\u914D\u7F6E\u9879\u3002")],-1),N={id:"root",tabindex:"-1"},V=e("a",{class:"header-anchor",href:"#root","aria-hidden":"true"},"#",-1),z=t(" root "),C=e("ul",null,[e("li",null,[t("\u7C7B\u578B: "),e("code",null,"string")])],-1),I=e("p",null,"\u6269\u5C55\u6A21\u5757\u7684\u6839\u76EE\u5F55\u8DEF\u5F84\u3002\u4EC5\u5F53\u914D\u7F6E\u4E86\u6B64\u9009\u9879\u65F6\u624D\u4F1A\u52A0\u8F7D addons \u76F8\u5173\u7279\u6027\u3002",-1),j={id:"gitremote",tabindex:"-1"},D=e("a",{class:"header-anchor",href:"#gitremote","aria-hidden":"true"},"#",-1),O=t(" gitRemote "),S=e("ul",null,[e("li",null,[t("\u7C7B\u578B: "),e("code",null,"string")])],-1),T=e("p",null,"\u6269\u5C55\u6A21\u5757\u66F4\u65B0\u65F6\u7684 remote \u94FE\u63A5\u3002",-1),U={id:"moduleloaders",tabindex:"-1"},q=e("a",{class:"header-anchor",href:"#moduleloaders","aria-hidden":"true"},"#",-1),G=t(" moduleLoaders "),H=e("ul",null,[e("li",null,[t("\u7C7B\u578B: "),e("code",null,"Record<string, string>")]),e("li",null,[t("\u9ED8\u8BA4\u503C: "),e("code",null,"{}")])],-1),J=e("p",null,[t("\u6269\u5C55\u6A21\u5757\u6240\u4F7F\u7528\u7684 Loader\u3002\u952E\u540D\u4E3A\u6587\u4EF6\u540E\u7F00\u540D\uFF0C\u503C\u4E3A\u5BF9\u5E94\u7684 Loader \u540D\u79F0\uFF0C\u7528\u6CD5\u4E0E "),e("a",{href:"#scriptloader"},[e("code",null,"scriptLoader")]),t(" \u7C7B\u4F3C\u3002")],-1);function K(M,P){const i=a("Badge"),d=a("ExternalLinkIcon"),l=a("RouterLink");return n(),c(u,null,[p,e("p",null,[f,o(i,{text:"addons",vertical:"baseline"}),m]),x,e("ul",null,[e("li",null,[g,e("a",b,[v,o(d)])])]),B,e("p",null,[L,o(l,{to:"/community/eval/sandbox.html#storage"},{default:h(()=>[k]),_:1}),E]),F,e("ul",null,[e("li",null,[w,e("a",R,[y,o(d)])])]),A,e("h2",N,[V,z,o(i,{text:"addons"})]),C,I,e("h2",j,[D,O,o(i,{text:"addons"})]),S,T,e("h2",U,[q,G,o(i,{text:"addons"})]),H,J],64)}var W=r(_,[["render",K],["__file","config.html.vue"]]);export{W as default};
