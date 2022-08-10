import{_ as c,o as i,c as d,a as e,e as s,w as n,F as h,b as o,d as a,r as l}from"./app.b8eecdce.js";const p={},F=e("h1",{id:"\u6D88\u606F\u6BB5-segment",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u6D88\u606F\u6BB5-segment","aria-hidden":"true"},"#"),o(" \u6D88\u606F\u6BB5 (Segment)")],-1),g=e("p",null,[e("strong",null,"\u6D88\u606F\u6BB5"),o(" \u7684\u6982\u5FF5\u6700\u65E9\u8D77\u6E90\u4E8E CoolQ\uFF0C\u7528\u4E8E\u5728\u7EAF\u6587\u672C\u4E2D\u8868\u8FBE\u7279\u6B8A\u7684\u6D88\u606F\u8BED\u4E49\u3002\u7531\u4E8E\u8FD9\u79CD\u65B9\u5F0F\u975E\u5E38\u4FBF\u6377\uFF0C\u4E5F\u88AB Koishi \u6240\u6CBF\u7528\u81F3\u4ECA\u3002")],-1),y=o("\u6D88\u606F\u6BB5\u534F\u8BAE\u672C\u8EAB\u4E5F\u662F OneBot \u534F\u8BAE\u7684 "),u={href:"https://github.com/howmanybots/onebot/blob/master/v11/specs/message/segment.md",target:"_blank",rel:"noopener noreferrer"},m=o("\u4E00\u90E8\u5206"),f=o("\uFF0C\u4F46\u8BE5\u534F\u8BAE\u4E0E Koishi \u6240\u4F7F\u7528\u7684\u6D88\u606F\u6BB5"),_=e("strong",null,"\u5B58\u5728\u4E00\u5B9A\u7684\u533A\u522B\uFF0C\u5728\u5B9E\u9645\u4F7F\u7528\u65F6\u8BF7\u4EE5\u672C\u9875\u6587\u6863\u4E3A\u51C6",-1),x=o("\u3002\u7531\u4E8E @koishijs/plugin-onebot \u4F1A\u81EA\u52A8\u8FDB\u884C\u4E24\u79CD\u534F\u8BAE\u95F4\u7684\u8F6C\u6362\uFF0C\u4F60\u5E76\u4E0D\u9700\u8981\u62C5\u5FC3\u517C\u5BB9\u6027\u95EE\u9898\u3002"),b=e("h2",{id:"\u6D88\u606F\u6BB5\u64CD\u4F5C",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u6D88\u606F\u6BB5\u64CD\u4F5C","aria-hidden":"true"},"#"),o(" \u6D88\u606F\u6BB5\u64CD\u4F5C")],-1),E=e("p",null,"\u4E00\u4E2A\u6D88\u606F\u6BB5\u5BF9\u8C61\u7684\u7ED3\u6784\u5982\u4E0B\uFF1A",-1),D=e("pre",{class:"shiki",style:{"background-color":"#272822"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#66D9EF","font-style":"italic"}},"interface"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#A6E22E","text-decoration":"underline"}},"segment"),e("span",{style:{color:"#F8F8F2"}}," {")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  type"),e("span",{style:{color:"#F92672"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#66D9EF","font-style":"italic"}},"string")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  data"),e("span",{style:{color:"#F92672"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#A6E22E","text-decoration":"underline"}},"Dict"),e("span",{style:{color:"#F8F8F2"}},"<"),e("span",{style:{color:"#66D9EF","font-style":"italic"}},"string"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#F92672"}},"|"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#66D9EF","font-style":"italic"}},"number"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#F92672"}},"|"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#66D9EF","font-style":"italic"}},"boolean"),e("span",{style:{color:"#F8F8F2"}},">")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"}")])])],-1),k=a('<h3 id="segment-type-data" tabindex="-1"><a class="header-anchor" href="#segment-type-data" aria-hidden="true">#</a> segment(type, data)</h3><ul><li><strong>type:</strong> <code>string</code> \u6D88\u606F\u6BB5\u7C7B\u578B</li><li><strong>data:</strong> <code>object</code> \u6D88\u606F\u6BB5\u53C2\u6570</li><li>\u8FD4\u56DE\u503C: <code>string</code> \u751F\u6210\u7684\u6D88\u606F\u6BB5</li></ul><p>\u5C06\u4E00\u4E2A\u5BF9\u8C61\u8F6C\u5316\u6210\u6D88\u606F\u6BB5\u6587\u672C\u3002</p><h3 id="segment-join-codes" tabindex="-1"><a class="header-anchor" href="#segment-join-codes" aria-hidden="true">#</a> segment.join(codes)</h3><ul><li><strong>codes:</strong> <code>segment[]</code> \u6D88\u606F\u6BB5\u6570\u7EC4</li><li>\u8FD4\u56DE\u503C: <code>string</code> \u751F\u6210\u7684\u6587\u672C</li></ul><p>\u5C06\u591A\u4E2A segment \u5BF9\u8C61\u8F6C\u5316\u6210\u6587\u672C\u5E76\u8FDE\u63A5\u3002</p><h3 id="segment-escape-source-inline" tabindex="-1"><a class="header-anchor" href="#segment-escape-source-inline" aria-hidden="true">#</a> segment.escape(source, inline?)</h3><ul><li><strong>source:</strong> <code>string</code> \u6E90\u6587\u672C</li><li><strong>inline:</strong> <code>boolean</code> \u5728\u6D88\u606F\u6BB5\u5185\u90E8\u8F6C\u4E49\uFF08\u4F1A\u989D\u5916\u5904\u7406\u9017\u53F7\uFF09</li><li>\u8FD4\u56DE\u503C: <code>string</code> \u8F6C\u4E49\u8FC7\u540E\u7684\u6587\u672C</li></ul><p>\u8F6C\u4E49\u4E00\u6BB5\u6587\u672C\u5230\u6D88\u606F\u6BB5\u683C\u5F0F\u3002</p><h3 id="segment-unescape-souce" tabindex="-1"><a class="header-anchor" href="#segment-unescape-souce" aria-hidden="true">#</a> segment.unescape(souce)</h3><ul><li><strong>source:</strong> <code>string</code> \u6E90\u6587\u672C</li><li>\u8FD4\u56DE\u503C: <code>string</code> \u8F6C\u4E49\u524D\u7684\u6587\u672C</li></ul><p>\u53D6\u6D88\u4E00\u6BB5\u6587\u672C\u7684\u6D88\u606F\u6BB5\u8F6C\u4E49\u3002</p><h3 id="segment-from-source" tabindex="-1"><a class="header-anchor" href="#segment-from-source" aria-hidden="true">#</a> segment.from(source)</h3><ul><li><strong>source:</strong> <code>string</code> \u6E90\u6587\u672C</li><li>\u8FD4\u56DE\u503C: <code>segment</code> \u6D88\u606F\u6BB5\u7684\u7C7B\u578B\u548C\u53C2\u6570</li></ul><p>\u5C06\u4E00\u4E2A\u6D88\u606F\u6BB5\u6587\u672C\u89E3\u6790\u6210\u5BF9\u8C61\u3002</p><h3 id="segment-parse-source" tabindex="-1"><a class="header-anchor" href="#segment-parse-source" aria-hidden="true">#</a> segment.parse(source)</h3><ul><li><strong>source:</strong> <code>string</code> \u6E90\u6587\u672C</li><li>\u8FD4\u56DE\u503C: <code>segment[]</code> \u6D88\u606F\u6BB5\u6570\u7EC4</li></ul><p>\u89E3\u6790\u4E00\u6BB5\u6587\u672C\u5185\u7684\u5168\u90E8\u6D88\u606F\u6BB5\u3002\u5176\u4E2D\u7684\u7EAF\u6587\u672C\u5C06\u4F1A\u89E3\u6790\u6210 text \u7C7B\u578B\u3002</p><h3 id="segment-transform-source-rules-dropothers" tabindex="-1"><a class="header-anchor" href="#segment-transform-source-rules-dropothers" aria-hidden="true">#</a> segment.transform(source, rules, dropOthers?)</h3><ul><li><strong>source:</strong> <code>string</code> \u6E90\u6587\u672C\u6216\u5176\u89E3\u6790\u6210\u7684\u6D88\u606F\u6BB5</li><li><strong>rules:</strong> <code>Dict&lt;Transformer&gt;</code> \u8F6C\u6362\u89C4\u5219\uFF0C\u4EE5\u6D88\u606F\u6BB5\u7C7B\u578B\u672A\u952E</li><li><strong>dropOthers:</strong> <code>boolean</code> \u4E22\u5F03\u672A\u6307\u5B9A\u8F6C\u6362\u89C4\u5219\u7684\u6D88\u606F\u6BB5\u7C7B\u578B\uFF0C\u5426\u5219\u4F7F\u7528 <a href="#segment-type-data"><code>segment(type, data)</code></a> \u7684\u8F93\u51FA</li><li>\u8FD4\u56DE\u503C: <code>string</code> \u8F6C\u6362\u540E\u7684\u6587\u672C</li></ul><p>\u5C06\u4E00\u6BB5\u6587\u672C\u6216\u5176\u89E3\u6790\u7ED3\u679C\u7684\u6240\u6709\u6D88\u606F\u6BB5\u6309\u7167\u89C4\u5219\u8FDB\u884C\u8F6C\u6362\u3002\u8F6C\u6362\u89C4\u5219\u7684\u5B9A\u4E49\u65B9\u5F0F\u5982\u4E0B\uFF08\u82E5\u4E3A\u5B57\u7B26\u4E32\u7C7B\u578B\u5219\u4E00\u5F8B\u5C06\u6D88\u606F\u6BB5\u8F6C\u6362\u4E3A\u8BE5\u5B57\u7B26\u4E32\uFF09\uFF1A</p>',21),A=e("pre",{class:"shiki",style:{"background-color":"#272822"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#66D9EF","font-style":"italic"}},"type"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#A6E22E","text-decoration":"underline"}},"Transformer"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#F92672"}},"=")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  "),e("span",{style:{color:"#F92672"}},"|"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#66D9EF","font-style":"italic"}},"string")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  "),e("span",{style:{color:"#F92672"}},"|"),e("span",{style:{color:"#F8F8F2"}}," (("),e("span",{style:{color:"#FD971F","font-style":"italic"}},"data"),e("span",{style:{color:"#F92672"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#A6E22E","text-decoration":"underline"}},"Dict"),e("span",{style:{color:"#F8F8F2"}},"<"),e("span",{style:{color:"#66D9EF","font-style":"italic"}},"string"),e("span",{style:{color:"#F8F8F2"}},">, "),e("span",{style:{color:"#FD971F","font-style":"italic"}},"index"),e("span",{style:{color:"#F92672"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#66D9EF","font-style":"italic"}},"number"),e("span",{style:{color:"#F8F8F2"}},", "),e("span",{style:{color:"#FD971F","font-style":"italic"}},"chain"),e("span",{style:{color:"#F92672"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#A6E22E","text-decoration":"underline"}},"segment"),e("span",{style:{color:"#F8F8F2"}},"[]) "),e("span",{style:{color:"#66D9EF","font-style":"italic"}},"=>"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#66D9EF","font-style":"italic"}},"string"),e("span",{style:{color:"#F8F8F2"}},")")])])],-1),w=a('<h3 id="segment-transformasync-source-rules" tabindex="-1"><a class="header-anchor" href="#segment-transformasync-source-rules" aria-hidden="true">#</a> segment.transformAsync(source, rules)</h3><ul><li><strong>source:</strong> <code>string</code> \u6E90\u6587\u672C\u6216\u5176\u89E3\u6790\u6210\u7684\u6D88\u606F\u6BB5</li><li><strong>rules:</strong> <code>Dict&lt;AsyncTransformer&gt;</code> \u8F6C\u6362\u89C4\u5219\uFF0C\u4EE5\u6D88\u606F\u6BB5\u7C7B\u578B\u672A\u952E</li></ul><p>\u4E0E <a href="#segment-transform-source-rules-dropothers"><code>segment.transform()</code></a> \u7C7B\u4F3C\u4F46\u5B9E\u73B0\u7565\u6709\u4E0D\u540C\u3002\u672A\u5B9A\u4E49\u8F6C\u6362\u89C4\u5219\u7684\u6D88\u606F\u6BB5\u7C7B\u578B\u4E00\u5F8B\u4F7F\u7528 <a href="#segment-type-data"><code>segment()</code></a> \u7684\u8F93\u51FA\u3002</p>',3),v=e("pre",{class:"shiki",style:{"background-color":"#272822"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#66D9EF","font-style":"italic"}},"type"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#A6E22E","text-decoration":"underline"}},"AsyncTransformer"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#F92672"}},"=")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  "),e("span",{style:{color:"#F92672"}},"|"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#66D9EF","font-style":"italic"}},"string")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  "),e("span",{style:{color:"#F92672"}},"|"),e("span",{style:{color:"#F8F8F2"}}," (("),e("span",{style:{color:"#FD971F","font-style":"italic"}},"data"),e("span",{style:{color:"#F92672"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#A6E22E","text-decoration":"underline"}},"Dict"),e("span",{style:{color:"#F8F8F2"}},"<"),e("span",{style:{color:"#66D9EF","font-style":"italic"}},"string"),e("span",{style:{color:"#F8F8F2"}},">, "),e("span",{style:{color:"#FD971F","font-style":"italic"}},"index"),e("span",{style:{color:"#F92672"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#66D9EF","font-style":"italic"}},"number"),e("span",{style:{color:"#F8F8F2"}},", "),e("span",{style:{color:"#FD971F","font-style":"italic"}},"chain"),e("span",{style:{color:"#F92672"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#A6E22E","text-decoration":"underline"}},"segment"),e("span",{style:{color:"#F8F8F2"}},"[]) "),e("span",{style:{color:"#66D9EF","font-style":"italic"}},"=>"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#A6E22E","text-decoration":"underline"}},"Awaitable"),e("span",{style:{color:"#F8F8F2"}},"<"),e("span",{style:{color:"#66D9EF","font-style":"italic"}},"string"),e("span",{style:{color:"#F8F8F2"}},">)")])])],-1),I=a('<h2 id="\u5143\u7D20\u6D88\u606F\u6BB5" tabindex="-1"><a class="header-anchor" href="#\u5143\u7D20\u6D88\u606F\u6BB5" aria-hidden="true">#</a> \u5143\u7D20\u6D88\u606F\u6BB5</h2><p>\u5143\u7D20\u6D88\u606F\u6BB5\u662F\u4E00\u6BB5\u62E5\u6709\u7279\u5B9A\u8BED\u4E49\u7684\u6587\u672C\uFF0C\u901A\u5E38\u53EF\u4EE5\u51FA\u73B0\u5728\u4E00\u6BB5\u6D88\u606F\u4E2D\u7684\u4EFB\u4F55\u4F4D\u7F6E\u3002\u53D1\u9001\u65F6\u53EA\u9700\u63D0\u4F9B <code>id</code>\u3002\u5F53\u5B58\u5728\u4E0D\u53D7\u652F\u6301\u7684\u6D88\u606F\u6BB5\u65F6\uFF0C\u9002\u914D\u5668\u5E94\u8BE5\u7528 <code>name</code> \u6216 <code>id</code> \u4EE3\u66FF\u3002</p><h3 id="\u7EAF\u6587\u672C-text" tabindex="-1"><a class="header-anchor" href="#\u7EAF\u6587\u672C-text" aria-hidden="true">#</a> \u7EAF\u6587\u672C (text)</h3><ul><li><strong>content:</strong> <code>string</code> \u6587\u672C\u5185\u5BB9</li></ul><p>\u8FD9\u662F\u4E00\u4E2A\u7279\u6B8A\u7684\u6D88\u606F\u6BB5\u3002\u4F7F\u7528 <code>segment(&#39;text&#39;, { content })</code> \u5C06\u7B49\u4EF7\u4E8E <code>content</code> \u672C\u8EAB\u3002\u6B64\u6D88\u606F\u6BB5\u4EC5\u51FA\u73B0\u4E8E <code>segment.parse()</code> \u65B9\u6CD5\u7684\u8FD4\u56DE\u503C\u4E2D\u3002</p><h3 id="\u6307\u5B9A\u7528\u6237-at" tabindex="-1"><a class="header-anchor" href="#\u6307\u5B9A\u7528\u6237-at" aria-hidden="true">#</a> \u6307\u5B9A\u7528\u6237 (at)</h3><ul><li><strong>id:</strong> <code>string</code> \u76EE\u6807\u7528\u6237\u7684 ID</li><li><strong>name:</strong> <code>string</code> \u76EE\u6807\u7528\u6237\u7684\u540D\u79F0</li><li><strong>role:</strong> <code>string</code> \u76EE\u6807\u89D2\u8272</li><li><strong>type:</strong> <code>string</code> \u7279\u6B8A\u64CD\u4F5C\uFF0C\u4F8B\u5982 all \u8868\u793A @\u5168\u4F53\u6210\u5458\uFF0Chere \u8868\u793A @\u5728\u7EBF\u6210\u5458</li></ul><p>\u7531\u4E8E\u4E0A\u8FF0\u51E0\u4E2A\u5C5E\u6027\u7684\u8BED\u4E49\u662F\u4E92\u65A5\u7684\uFF0C\u53D1\u9001\u65F6\u4F7F\u7528 <code>id</code>, <code>role</code>, <code>type</code> \u5176\u4E00\u5373\u53EF\u3002</p><h3 id="\u6307\u5B9A\u9891\u9053-sharp" tabindex="-1"><a class="header-anchor" href="#\u6307\u5B9A\u9891\u9053-sharp" aria-hidden="true">#</a> \u6307\u5B9A\u9891\u9053 (sharp)</h3><ul><li><strong>id:</strong> <code>string</code> \u76EE\u6807\u9891\u9053\u7684 ID</li><li><strong>name:</strong> <code>string</code> \u76EE\u6807\u9891\u9053\u7684\u540D\u79F0</li></ul><h3 id="\u8868\u60C5-face" tabindex="-1"><a class="header-anchor" href="#\u8868\u60C5-face" aria-hidden="true">#</a> \u8868\u60C5 (face)</h3><ul><li><strong>id:</strong> <code>string</code> \u8868\u60C5\u7684 ID</li><li><strong>name:</strong> <code>string</code> \u8868\u60C5\u7684\u540D\u79F0</li></ul><h2 id="\u8D44\u6E90\u6D88\u606F\u6BB5" tabindex="-1"><a class="header-anchor" href="#\u8D44\u6E90\u6D88\u606F\u6BB5" aria-hidden="true">#</a> \u8D44\u6E90\u6D88\u606F\u6BB5</h2><p>\u8D44\u6E90\u6D88\u606F\u6BB5\u8868\u793A\u6587\u672C\u4E2D\u5B58\u5728\u7684\u8D44\u6E90\u6587\u4EF6\u3002\u4E0D\u540C\u7684\u5E73\u53F0\u5BF9\u8D44\u6E90\u6587\u4EF6\u7684\u652F\u6301\u5B58\u5728\u8F83\u5927\u7684\u5DEE\u5F02\u3002\u53D1\u9001\u65F6\u53EA\u9700\u63D0\u4F9B <code>url</code>\u3002\u5982\u679C\u67D0\u4E2A\u5E73\u53F0\u4E0D\u652F\u6301\u7279\u5B9A\u7684\u8D44\u6E90\u7C7B\u578B\uFF0C\u9002\u914D\u5668\u5E94\u8BE5\u7528 <code>url</code> \u4EE3\u66FF\u3002\u5982\u679C\u67D0\u4E2A\u5E73\u53F0\u4E0D\u652F\u6301\u5C06\u8D44\u6E90\u6D88\u606F\u6BB5\u548C\u5176\u4ED6\u6D88\u606F\u6BB5\u540C\u65F6\u53D1\u9001\uFF0C\u9002\u914D\u5668\u5E94\u8BE5\u5206\u591A\u6761\u53D1\u9001\uFF0C\u5E76\u8FD4\u56DE\u6700\u540E\u4E00\u6761\u6D88\u606F\u7684 ID\u3002</p><ul><li><strong>file:</strong> <code>string</code> \u8D44\u6E90\u5728\u672C\u5730\u76EE\u5F55\u7684\u76F8\u5BF9\u8DEF\u5F84</li><li><strong>url:</strong> <code>string</code> \u8D44\u6E90\u7684 URL\uFF08\u53EF\u4EE5\u662F\u7F51\u7EDC URL\uFF0C\u6587\u4EF6\u7EDD\u5BF9\u8DEF\u5F84\uFF0C\u6216 base64 \u534F\u8BAE\u7B49\uFF09</li><li><strong>cache:</strong> <code>boolean</code> \u662F\u5426\u4F7F\u7528\u5DF2\u7F13\u5B58\u7684\u6587\u4EF6</li><li><strong>timeout:</strong> <code>string</code> \u4E0B\u8F7D\u6587\u4EF6\u7684\u6700\u957F\u65F6\u95F4</li></ul><h3 id="\u56FE\u7247-image" tabindex="-1"><a class="header-anchor" href="#\u56FE\u7247-image" aria-hidden="true">#</a> \u56FE\u7247 (image)</h3><p>\u9664\u4E86\u4E0A\u8FF0\u901A\u7528\u5C5E\u6027\u5916\uFF0C\u8FD8\u652F\u6301\u4E0B\u9762\u7684\u5C5E\u6027\uFF1A</p><ul><li><strong>type:</strong> \u7279\u6B8A\u7C7B\u578B\uFF0C\u4F8B\u5982 flash \u8868\u793A QQ \u95EA\u7167</li></ul><h3 id="\u8BED\u97F3-audio" tabindex="-1"><a class="header-anchor" href="#\u8BED\u97F3-audio" aria-hidden="true">#</a> \u8BED\u97F3 (audio)</h3><p>\u53C2\u89C1\u4E0A\u8FF0\u901A\u7528\u5C5E\u6027\u3002</p><h3 id="\u89C6\u9891-video" tabindex="-1"><a class="header-anchor" href="#\u89C6\u9891-video" aria-hidden="true">#</a> \u89C6\u9891 (video)</h3><p>\u53C2\u89C1\u4E0A\u8FF0\u901A\u7528\u5C5E\u6027\u3002</p><h3 id="\u6587\u4EF6-file" tabindex="-1"><a class="header-anchor" href="#\u6587\u4EF6-file" aria-hidden="true">#</a> \u6587\u4EF6 (file)</h3><p>\u53C2\u89C1\u4E0A\u8FF0\u901A\u7528\u5C5E\u6027\u3002</p><h2 id="\u524D\u7F00\u6D88\u606F\u6BB5" tabindex="-1"><a class="header-anchor" href="#\u524D\u7F00\u6D88\u606F\u6BB5" aria-hidden="true">#</a> \u524D\u7F00\u6D88\u606F\u6BB5</h2><p>\u524D\u7F00\u6D88\u606F\u6BB5\u53EA\u4F1A\u51FA\u73B0\u5728\u4E00\u6BB5\u6D88\u606F\u7684\u7B2C\u4E00\u4E2A\uFF0C\u7528\u4E8E\u8868\u793A\u8FD9\u6BB5\u6D88\u606F\u7684\u53D1\u9001\u65B9\u5F0F\u3002\u7531\u4E8E\u5176\u672C\u8EAB\u4E0D\u5305\u542B\u4EFB\u4F55\u4FE1\u606F\uFF0C\u53D1\u9001\u524D\u5E94\u4ECE\u6D88\u606F\u4E2D\u6E05\u9664\u3002</p><h3 id="\u5F15\u7528-quote" tabindex="-1"><a class="header-anchor" href="#\u5F15\u7528-quote" aria-hidden="true">#</a> \u5F15\u7528 (quote)</h3><ul><li><strong>id:</strong> <code>string</code> \u8981\u5F15\u7528\u7684\u6D88\u606F ID</li></ul><h3 id="\u5361\u7247-card" tabindex="-1"><a class="header-anchor" href="#\u5361\u7247-card" aria-hidden="true">#</a> \u5361\u7247 (card)</h3><h3 id="\u533F\u540D-anonymous" tabindex="-1"><a class="header-anchor" href="#\u533F\u540D-anonymous" aria-hidden="true">#</a> \u533F\u540D (anonymous)</h3><ul><li><strong>ignore:</strong> <code>boolean</code> \u5F53\u65E0\u6CD5\u53D1\u9001\u533F\u540D\u6D88\u606F\u65F6\uFF0C\u5982\u679C\u6B64\u9879\u4E3A <code>true</code>\uFF0C\u5219\u76F4\u63A5\u5220\u53BB\u6B64\u524D\u7F00\u7801\uFF1B\u5426\u5219\u5C06\u4E0D\u4EA7\u751F\u4EFB\u4F55\u8F93\u51FA</li></ul><h3 id="markdown-markdown" tabindex="-1"><a class="header-anchor" href="#markdown-markdown" aria-hidden="true">#</a> Markdown (markdown)</h3>',32);function j(T,B){const r=l("ExternalLinkIcon"),t=l("panel-view");return i(),d(h,null,[F,g,e("p",null,[y,e("a",u,[m,s(r)]),f,_,x]),b,E,s(t,{class:"code",title:"",style:{}},{default:n(()=>[D]),_:1}),k,s(t,{class:"code",title:"",style:{}},{default:n(()=>[A]),_:1}),w,s(t,{class:"code",title:"",style:{}},{default:n(()=>[v]),_:1}),I],64)}var N=c(p,[["render",j],["__file","segment.html.vue"]]);export{N as default};
