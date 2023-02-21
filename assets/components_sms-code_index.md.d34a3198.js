import{_ as t,c as s,o as e,a as n}from"./app.fcacde83.js";const A=JSON.parse('{"title":"SmsCode \u9A8C\u8BC1\u7801\u8F93\u5165\u6846","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4ECB\u7ECD","slug":"\u4ECB\u7ECD","link":"#\u4ECB\u7ECD","children":[]},{"level":2,"title":"\u5F15\u5165","slug":"\u5F15\u5165","link":"#\u5F15\u5165","children":[]},{"level":2,"title":"\u4EE3\u7801\u6F14\u793A","slug":"\u4EE3\u7801\u6F14\u793A","link":"#\u4EE3\u7801\u6F14\u793A","children":[]},{"level":2,"title":"API","slug":"api","link":"#api","children":[{"level":3,"title":"props","slug":"props","link":"#props","children":[]},{"level":3,"title":"Events","slug":"events","link":"#events","children":[]}]}],"relativePath":"components/sms-code/index.md"}'),a={name:"components/sms-code/index.md"},l=n(`<h1 id="smscode-\u9A8C\u8BC1\u7801\u8F93\u5165\u6846" tabindex="-1">SmsCode \u9A8C\u8BC1\u7801\u8F93\u5165\u6846 <a class="header-anchor" href="#smscode-\u9A8C\u8BC1\u7801\u8F93\u5165\u6846" aria-hidden="true">#</a></h1><h2 id="\u4ECB\u7ECD" tabindex="-1">\u4ECB\u7ECD <a class="header-anchor" href="#\u4ECB\u7ECD" aria-hidden="true">#</a></h2><p>\u9A8C\u8BC1\u7801\u8F93\u5165</p><h2 id="\u5F15\u5165" tabindex="-1">\u5F15\u5165 <a class="header-anchor" href="#\u5F15\u5165" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// \u5165\u53E3\u5F15\u5165</span></span>
<span class="line"><span style="color:#A6ACCD;">import { createApp } from &#39;vue&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { MoSmsCode } from &#39;moxui&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const app = createApp();</span></span>
<span class="line"><span style="color:#A6ACCD;">app.use(MoSmsCode);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u5355\u6587\u4EF6\u7EC4\u4EF6\u5F15\u5165</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;!-- script:setup --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { MoSmsCode } from &#39;moxui&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;!-- template --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;mo-sms-code</span></span>
<span class="line"><span style="color:#A6ACCD;">  v-model=&quot;code&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  title=&quot;\u8F93\u5165\u9A8C\u8BC1\u7801&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  tips=&quot;\u9A8C\u8BC1\u7801\u5DF2\u53D1\u9001\u81F3 199 **** 0000&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  @finish=&quot;login&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/mo-sms-code&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u4EE3\u7801\u6F14\u793A" tabindex="-1">\u4EE3\u7801\u6F14\u793A <a class="header-anchor" href="#\u4EE3\u7801\u6F14\u793A" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;mo-sms-code</span></span>
<span class="line"><span style="color:#A6ACCD;">  v-model=&quot;code&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  title=&quot;\u8F93\u5165\u9A8C\u8BC1\u7801&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  tips=&quot;\u9A8C\u8BC1\u7801\u5DF2\u53D1\u9001\u81F3 199 **** 0000&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  @finish=&quot;login&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/mo-sms-code&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import { ref } from &quot;vue&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">const code = ref(&quot;&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h2><h3 id="props" tabindex="-1">props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u53C2\u6570</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td style="text-align:left;"><code>v-model</code></td><td style="text-align:left;">\u9A8C\u8BC1\u7801\u7684\u503C</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">&quot;&quot;</td></tr><tr><td style="text-align:left;"><code>length</code></td><td style="text-align:left;">\u9A8C\u8BC1\u7801\u957F\u5EA6</td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;"><code>6</code></td></tr><tr><td style="text-align:left;"><code>title</code></td><td style="text-align:left;">\u6807\u9898</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;"><code>tips</code></td><td style="text-align:left;">\u63D0\u793A</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;"></td></tr></tbody></table><h3 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u4E8B\u4EF6\u540D</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td style="text-align:left;"><code>update:modelValue</code></td><td style="text-align:left;">\u9A8C\u8BC1\u7801\u66F4\u65B0</td><td style="text-align:left;"><code>code</code></td></tr><tr><td style="text-align:left;"><code>finish</code></td><td style="text-align:left;">\u9A8C\u8BC1\u7801\u8F93\u5165\u5B8C\u6210</td><td style="text-align:left;"><code>code</code></td></tr></tbody></table>`,13),o=[l];function p(d,c,i,r,C,h){return e(),s("div",null,o)}const u=t(a,[["render",p]]);export{A as __pageData,u as default};
