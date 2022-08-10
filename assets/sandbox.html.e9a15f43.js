import{_ as t,o as l,c as o,a,e as r,F as n,b as e,d as s,r as d}from"./app.b8eecdce.js";const h={},c=a("h1",{id:"\u6C99\u7BB1-api",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#\u6C99\u7BB1-api","aria-hidden":"true"},"#"),e(" \u6C99\u7BB1 API")],-1),u=e("evaluate \u6307\u4EE4\u4F1A\u521B\u5EFA\u4E00\u4E2A\u6C99\u7BB1\u73AF\u5883\u3002\u8FD9\u4E2A\u6C99\u7BB1\u73AF\u5883\u652F\u6301 ES2020 \u7684\u5168\u90E8\u7279\u6027\uFF0C\u5916\u52A0 "),p={href:"https://nodejs.org/dist/latest-v14.x/docs/api/buffer.html",target:"_blank",rel:"noopener noreferrer"},_=e("Buffer"),g=e("\u3002\u9664\u6B64\u4EE5\u5916\uFF0C\u8FD8\u652F\u6301\u4E0B\u9762\u7684\u5C5E\u6027\u548C\u65B9\u6CD5\uFF1A"),f=s('<h2 id="\u4F1A\u8BDD\u4E0A\u4E0B\u6587" tabindex="-1"><a class="header-anchor" href="#\u4F1A\u8BDD\u4E0A\u4E0B\u6587" aria-hidden="true">#</a> \u4F1A\u8BDD\u4E0A\u4E0B\u6587</h2><p>\u4F1A\u8BDD\u4E0A\u4E0B\u6587\u4E2D\u7684\u5C5E\u6027\u548C\u65B9\u6CD5\u90FD\u662F\u4EC5\u5BF9\u5F53\u524D\u4F1A\u8BDD\u751F\u6548\u7684\uFF0C\u7C7B\u4F3C\u4E8E\u51FD\u6570\u95ED\u5305\u3002\u4F60\u53EF\u4EE5\u5C1D\u8BD5\u4FEE\u6539\u5B83\u4EEC\u7684\u503C\uFF0C\u4F46\u8FD9\u5C06\u4E0D\u9020\u6210\u4EFB\u4F55\u5F71\u54CD\u3002\u4E0B\u6B21\u8C03\u7528\u65F6\u4F60\u4ECD\u7136\u53EF\u4EE5\u8BBF\u95EE\u8FD9\u4E9B\u503C\u3002</p><h3 id="user" tabindex="-1"><a class="header-anchor" href="#user" aria-hidden="true">#</a> user</h3><ul><li>\u7C7B\u578B: <code>Partial&lt;User&gt;</code></li></ul><p>\u8C03\u7528\u8005\u7684\u7528\u6237\u6570\u636E\u3002</p><h3 id="channel" tabindex="-1"><a class="header-anchor" href="#channel" aria-hidden="true">#</a> channel</h3><ul><li>\u7C7B\u578B: <code>Partial&lt;Channel&gt;</code></li></ul><p>\u5F53\u524D\u9891\u9053\u7684\u6570\u636E\u3002</p><h3 id="storage" tabindex="-1"><a class="header-anchor" href="#storage" aria-hidden="true">#</a> storage</h3><ul><li>\u7C7B\u578B: <code>object</code></li></ul>',10),m=e("\u53EF\u6301\u7EED\u5B58\u50A8\u7684\u6570\u636E\u3002\u4F60\u80FD\u591F\u4F7F\u7528\u7684\u6570\u636E\u5E94\u8BE5\u662F"),x={href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm",target:"_blank",rel:"noopener noreferrer"},b=e("\u53EF\u514B\u9686\u7684\u7ED3\u6784\u5316\u6570\u636E"),k=e("\uFF0C\u5B83\u53EF\u4EE5\u5305\u62EC\uFF1A"),v=s('<ul><li>\u4F60\u80FD\u5728 JSON \u4E2D\u5199\u7684\u6570\u636E\u7C7B\u578B\uFF08\u5982 string, number, Array \u7B49\uFF09</li><li>\u53EF\u4EE5\u514B\u9686\u7684\u6807\u51C6\u7C7B\u7684\u5B9E\u4F8B\uFF08\u5982 Set, Date, RegExp \u7B49\uFF09</li><li>\u5230\u5176\u4ED6\u6B64\u7C7B\u6570\u636E\u7684\u5FAA\u73AF\u5F15\u7528</li></ul><p>\u5B83\u4E0D\u5E94\u8BE5\u5305\u62EC\uFF1A</p><ul><li>\u51FD\u6570\u548C\u7C7B</li><li>\u4F60\u5B9A\u4E49\u7684\u7C7B\u7684\u5B9E\u4F8B</li><li>\u5168\u5C40\u5BF9\u8C61</li></ul><p>\u5982\u679C\u4F60\u975E\u8981\u5C1D\u8BD5\u8FD9\u6837\u505A\uFF0C\u4F60\u4F1A\u6536\u5230\u4E00\u4E2A\u62A5\u9519\u3002</p><h3 id="send-param" tabindex="-1"><a class="header-anchor" href="#send-param" aria-hidden="true">#</a> send(...param)</h3><ul><li><strong>param:</strong> <code>any[]</code> \u8981\u53D1\u9001\u7684\u5185\u5BB9</li><li>\u8FD4\u56DE\u503C: <code>Promise&lt;void&gt;</code></li></ul><p>\u5411\u5F53\u524D\u4F1A\u8BDD\u53D1\u9001\u4E00\u6761\u6D88\u606F\u3002</p><h3 id="exec-message" tabindex="-1"><a class="header-anchor" href="#exec-message" aria-hidden="true">#</a> exec(message)</h3><ul><li><strong>message:</strong> <code>string</code> \u6307\u4EE4\u6587\u672C</li><li>\u8FD4\u56DE\u503C: <code>Promise&lt;void&gt;</code></li></ul><p>\u5728\u5F53\u524D\u4F1A\u8BDD\u6267\u884C\u4E00\u6761\u6307\u4EE4\u3002</p><h2 id="\u5168\u5C40\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#\u5168\u5C40\u5BF9\u8C61" aria-hidden="true">#</a> \u5168\u5C40\u5BF9\u8C61</h2><p>\u5168\u5C40\u5BF9\u8C61\u662F\u901A\u8FC7 Worker API \u66B4\u9732\u51FA\u6765\u7684\uFF0C\u5B83\u5E76\u4E0D\u4F1A\u968F\u7740\u4F1A\u8BDD\u800C\u91CD\u65B0\u751F\u6210\u3002\u90E8\u5206\u5168\u5C40\u5BF9\u8C61\u7684\u503C\u53EF\u80FD\u88AB\u7981\u6B62\u4FEE\u6539\u3002</p><h3 id="utils" tabindex="-1"><a class="header-anchor" href="#utils" aria-hidden="true">#</a> utils</h3><p>\u90E8\u5206 @koishijs/utils \u7684\u529F\u80FD\u5C06\u4F5C\u4E3A\u4E00\u4E2A\u72EC\u7ACB\u6A21\u5757\u66B4\u9732\u5728\u5168\u5C40\u5BF9\u8C61\u4E0A\uFF0C\u5B83\u5305\u542B\u4E86\u4E0B\u5217\u5C5E\u6027\uFF1A</p><ul><li>segment</li><li>Random</li><li>Time</li></ul><h2 id="\u5185\u7F6E\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#\u5185\u7F6E\u6A21\u5757" aria-hidden="true">#</a> \u5185\u7F6E\u6A21\u5757</h2><h3 id="koishi-utils" tabindex="-1"><a class="header-anchor" href="#koishi-utils" aria-hidden="true">#</a> koishi/utils</h3><h3 id="koishi-addons" tabindex="-1"><a class="header-anchor" href="#koishi-addons" aria-hidden="true">#</a> koishi/addons</h3><h2 id="\u591A\u8BED\u8A00\u652F\u6301" tabindex="-1"><a class="header-anchor" href="#\u591A\u8BED\u8A00\u652F\u6301" aria-hidden="true">#</a> \u591A\u8BED\u8A00\u652F\u6301</h2><p>\u4E0B\u9762\u662F\u652F\u6301\u7684\u6587\u4EF6\u540E\u7F00\u540D\u3002\u90E8\u5206\u540E\u7F00\u540D\u867D\u7136\u6709\u5185\u7F6E\u7684\u652F\u6301\uFF0C\u4F46\u9700\u8981\u4F60\u63D0\u524D\u5B89\u88C5\u90E8\u5206\u4F9D\u8D56\u3002</p><ul><li><strong>js/json:</strong> \u539F\u751F\u652F\u6301</li><li><strong>yml/yaml:</strong> \u539F\u751F\u652F\u6301</li><li><strong>coffee:</strong> \u9700\u8981\u5B89\u88C5 coffeescript</li><li><strong>ts:</strong> \u9700\u8981\u5B89\u88C5\u4E0B\u9762\u4E24\u7EC4\u4E2D\u7684\u4E00\u7EC4 <ul><li>typescript + json5</li><li>esbuild</li></ul></li></ul>',21);function P(j,I){const i=d("ExternalLinkIcon");return l(),o(n,null,[c,a("p",null,[u,a("a",p,[_,r(i)]),g]),f,a("p",null,[m,a("a",x,[b,r(i)]),k]),v],64)}var y=t(h,[["render",P],["__file","sandbox.html.vue"]]);export{y as default};
