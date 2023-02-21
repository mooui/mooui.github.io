import{_ as s,c as n,o as t,a}from"./app.fcacde83.js";const g=JSON.parse('{"title":"Toast \u63D0\u793A","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4ECB\u7ECD","slug":"\u4ECB\u7ECD","link":"#\u4ECB\u7ECD","children":[]},{"level":2,"title":"\u5F15\u5165","slug":"\u5F15\u5165","link":"#\u5F15\u5165","children":[]},{"level":2,"title":"\u4EE3\u7801\u6F14\u793A","slug":"\u4EE3\u7801\u6F14\u793A","link":"#\u4EE3\u7801\u6F14\u793A","children":[]},{"level":2,"title":"API","slug":"api","link":"#api","children":[{"level":3,"title":"options","slug":"options","link":"#options","children":[]},{"level":3,"title":"\u65B9\u6CD5","slug":"\u65B9\u6CD5","link":"#\u65B9\u6CD5","children":[]}]}],"relativePath":"plugins/toast/index.md"}'),e={name:"plugins/toast/index.md"},l=a(`<h1 id="toast-\u63D0\u793A" tabindex="-1">Toast \u63D0\u793A <a class="header-anchor" href="#toast-\u63D0\u793A" aria-hidden="true">#</a></h1><h2 id="\u4ECB\u7ECD" tabindex="-1">\u4ECB\u7ECD <a class="header-anchor" href="#\u4ECB\u7ECD" aria-hidden="true">#</a></h2><p>\u5F39\u51FA\u63D0\u793A, \u53EA\u652F\u6301\u5355\u4F8B\u6A21\u5F0F</p><h2 id="\u5F15\u5165" tabindex="-1">\u5F15\u5165 <a class="header-anchor" href="#\u5F15\u5165" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// \u5165\u53E3\u5F15\u5165</span></span>
<span class="line"><span style="color:#A6ACCD;">import { createApp } from &#39;vue&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { Toast } from &#39;moxui&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const app = createApp();</span></span>
<span class="line"><span style="color:#A6ACCD;">app.use(Toast);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u5355\u6587\u4EF6\u7EC4\u4EF6\u5F15\u5165</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;!-- script:setup --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { Toast } from &#39;moxui&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Toast(&#39;message&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u4EE3\u7801\u6F14\u793A" tabindex="-1">\u4EE3\u7801\u6F14\u793A <a class="header-anchor" href="#\u4EE3\u7801\u6F14\u793A" aria-hidden="true">#</a></h2><p><strong>\u666E\u901A\u63D0\u793A</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import { Toast } from &#39;moxui&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u666E\u901A\u63D0\u793A</span></span>
<span class="line"><span style="color:#A6ACCD;">Toast(&#39;This is a normal test.&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">// \u666E\u901A\u957F\u63D0\u793A</span></span>
<span class="line"><span style="color:#A6ACCD;">Toast(&#39;This is a normal test.This is a normal tes...&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>\u63D0\u793A\u56FE\u6807</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import { Toast } from &#39;moxui&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// loading</span></span>
<span class="line"><span style="color:#A6ACCD;">Toast.loading({ message: &#39;loading...&#39;, duration: 2500 });</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// success</span></span>
<span class="line"><span style="color:#A6ACCD;">Toast.success(&#39;success&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// warn</span></span>
<span class="line"><span style="color:#A6ACCD;">Toast.warn(&#39;warn&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// error</span></span>
<span class="line"><span style="color:#A6ACCD;">Toast.error(&#39;error&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>\u884C\u5185\u63D0\u793A\u56FE\u6807</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import { Toast } from &#39;moxui&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// loading</span></span>
<span class="line"><span style="color:#A6ACCD;">Toast({</span></span>
<span class="line"><span style="color:#A6ACCD;">  message: &#39;loading...&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  duration: 2500,</span></span>
<span class="line"><span style="color:#A6ACCD;">  icon: &#39;loading&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  iconPosition: &#39;inline&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// success</span></span>
<span class="line"><span style="color:#A6ACCD;">Toast({</span></span>
<span class="line"><span style="color:#A6ACCD;">  message: &#39;success...&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  icon: &#39;success&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  iconPosition: &#39;inline&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// warn</span></span>
<span class="line"><span style="color:#A6ACCD;">Toast({</span></span>
<span class="line"><span style="color:#A6ACCD;">  message: &#39;warn...&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  icon: &#39;warn&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  iconPosition: &#39;inline&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// error</span></span>
<span class="line"><span style="color:#A6ACCD;">Toast({</span></span>
<span class="line"><span style="color:#A6ACCD;">  message: &#39;error...&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  duration: 2500,</span></span>
<span class="line"><span style="color:#A6ACCD;">  icon: &#39;error&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  iconPosition: &#39;inline&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>\u8854\u63A5</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import { Toast } from &#39;moxui&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u52A0\u8F7D - \u6210\u529F</span></span>
<span class="line"><span style="color:#A6ACCD;">Toast.loading(&quot;\u52A0\u8F7D\u4E2D...&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  Toast.success(&quot;\u52A0\u8F7D\u6210\u529F&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">}, 1500);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u52A0\u8F7D - \u5931\u8D25</span></span>
<span class="line"><span style="color:#A6ACCD;">Toast.loading(&quot;\u52A0\u8F7D\u4E2D...&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  Toast.error(&quot;\u52A0\u8F7D\u5931\u8D25&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">}, 1500);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u52A0\u8F7D - \u63D0\u9192</span></span>
<span class="line"><span style="color:#A6ACCD;">Toast.loading(&quot;\u52A0\u8F7D\u4E2D...&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  Toast.warn(&quot;WARNING!&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">}, 1500);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>\u906E\u7F69</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import { Toast } from &#39;moxui&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Toast({</span></span>
<span class="line"><span style="color:#A6ACCD;">  message: &#39;\u906E\u7F69Toast&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  type: &#39;loading&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  duration: 2500,</span></span>
<span class="line"><span style="color:#A6ACCD;">  mask: &#39;rgba(0,0,0,.4)&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>\u81EA\u5B9A\u4E49ICON</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import { Toast } from &#39;moxui&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import helpIcon from &quot;/image/help.png&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Toast({</span></span>
<span class="line"><span style="color:#A6ACCD;">  message: &#39;\u81EA\u5B9A\u4E49ICON&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  icon: helpIcon,</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h2><h3 id="options" tabindex="-1">options <a class="header-anchor" href="#options" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u53C2\u6570</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td style="text-align:left;"><code>message</code></td><td style="text-align:left;">\u6D88\u606F</td><td style="text-align:left;"><code>string</code> <code>number</code></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;"><code>show</code></td><td style="text-align:left;">\u662F\u5426\u663E\u793AToast</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;"><code>true</code></td></tr><tr><td style="text-align:left;"><code>duration</code></td><td style="text-align:left;">\u663E\u793A\u4E8B\u4EF6</td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;"><code>2500</code>, <code>type=loading</code>\u65F6\u9ED8\u8BA4<code>0</code></td></tr><tr><td style="text-align:left;"><code>transitionDuration</code></td><td style="text-align:left;">Toast\u52A8\u753B\u65F6\u95F4</td><td style="text-align:left;"><code>number</code> <code>500</code></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;"><code>zIndex</code></td><td style="text-align:left;">\u5143\u7D20\u7684zIndex</td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;"><code>mask</code></td><td style="text-align:left;">\u906E\u7F69\u5B9A\u4E49, string\u7C7B\u578B\u6307\u5B9A\u906E\u7F69\u80CC\u666F</td><td style="text-align:left;"><code>string</code> <code>boolean</code></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;"><code>forbidClick</code></td><td style="text-align:left;">\u662F\u5426\u7981\u6B62\u80CC\u666F\u70B9\u51FB, \u5B58\u5728mask\u662F\u9ED8\u8BA4true</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;"><code>type</code></td><td style="text-align:left;">Toast\u56FE\u6807\u7C7B\u578B, \u53EF\u9009<code>loading</code> <code>success</code> <code>warn</code> <code>error</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;"><code>icon</code></td><td style="text-align:left;">Toast\u56FE\u6807, \u53EF\u6307\u5B9Atype\u503C</td><td style="text-align:left;"><code>string</code> <code>{ src?: string; width?: number; height?: number; isLoading?: boolean; }</code></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;"><code>iconPosition</code></td><td style="text-align:left;">Icon\u4F4D\u7F6E, \u53EF\u9009<code>inline</code> <code>center</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;"><code>center</code></td></tr></tbody></table><h3 id="\u65B9\u6CD5" tabindex="-1">\u65B9\u6CD5 <a class="header-anchor" href="#\u65B9\u6CD5" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u65B9\u6CD5\u540D</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u53C2\u6570</th><th style="text-align:left;">\u8FD4\u56DE\u503C</th></tr></thead><tbody><tr><td style="text-align:left;"><code>Toast</code></td><td style="text-align:left;">\u663E\u793AToast</td><td style="text-align:left;"><code>string</code> <code>number</code> <code>options</code>(\u89C1\u4E0A\u65B9)</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;"><code>Toast.loading</code></td><td style="text-align:left;">\u663E\u793Aloading Toast</td><td style="text-align:left;"><code>string</code> <code>number</code> <code>options</code>(\u89C1\u4E0A\u65B9), options\u4E2D\u4E0D\u5305\u542B(icon, iconPosition, type)</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;"><code>Toast.success</code></td><td style="text-align:left;">\u663E\u793Asuccess Toast</td><td style="text-align:left;"><code>string</code> <code>number</code> <code>options</code>(\u89C1\u4E0A\u65B9), options\u4E2D\u4E0D\u5305\u542B(icon, iconPosition, type)</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;"><code>Toast.warn</code></td><td style="text-align:left;">\u663E\u793Awarn Toast</td><td style="text-align:left;"><code>string</code> <code>number</code> <code>options</code>(\u89C1\u4E0A\u65B9), options\u4E2D\u4E0D\u5305\u542B(icon, iconPosition, type)</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;"><code>Toast.error</code></td><td style="text-align:left;">\u663E\u793Aerror Toast</td><td style="text-align:left;"><code>string</code> <code>number</code> <code>options</code>(\u89C1\u4E0A\u65B9), options\u4E2D\u4E0D\u5305\u542B(icon, iconPosition, type)</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;"><code>Toast.close</code></td><td style="text-align:left;">\u5173\u95EDToast</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr></tbody></table>`,23),o=[l];function p(c,i,d,r,C,A){return t(),n("div",null,o)}const D=s(e,[["render",p]]);export{g as __pageData,D as default};
