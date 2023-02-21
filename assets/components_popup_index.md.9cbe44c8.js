import{_ as t,c as s,o as n,a as l}from"./app.fcacde83.js";const y=JSON.parse('{"title":"Popup \u5F39\u7A97\u906E\u7F69","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4ECB\u7ECD","slug":"\u4ECB\u7ECD","link":"#\u4ECB\u7ECD","children":[]},{"level":2,"title":"\u5F15\u5165","slug":"\u5F15\u5165","link":"#\u5F15\u5165","children":[]},{"level":2,"title":"\u4EE3\u7801\u6F14\u793A","slug":"\u4EE3\u7801\u6F14\u793A","link":"#\u4EE3\u7801\u6F14\u793A","children":[]},{"level":2,"title":"API","slug":"api","link":"#api","children":[{"level":3,"title":"props","slug":"props","link":"#props","children":[]},{"level":3,"title":"Events","slug":"events","link":"#events","children":[]},{"level":3,"title":"Slots","slug":"slots","link":"#slots","children":[]}]}],"relativePath":"components/popup/index.md"}'),e={name:"components/popup/index.md"},a=l(`<h1 id="popup-\u5F39\u7A97\u906E\u7F69" tabindex="-1">Popup \u5F39\u7A97\u906E\u7F69 <a class="header-anchor" href="#popup-\u5F39\u7A97\u906E\u7F69" aria-hidden="true">#</a></h1><h2 id="\u4ECB\u7ECD" tabindex="-1">\u4ECB\u7ECD <a class="header-anchor" href="#\u4ECB\u7ECD" aria-hidden="true">#</a></h2><p>\u5F39\u51FA\u5C42\u5BB9\u5668\uFF0C\u7528\u4E8E\u5C55\u793A\u5F39\u7A97\u3002</p><h2 id="\u5F15\u5165" tabindex="-1">\u5F15\u5165 <a class="header-anchor" href="#\u5F15\u5165" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// \u5165\u53E3\u5F15\u5165</span></span>
<span class="line"><span style="color:#A6ACCD;">import { createApp } from &#39;vue&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { MoPopup } from &#39;moxui&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const app = createApp();</span></span>
<span class="line"><span style="color:#A6ACCD;">app.use(MoPopup);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u5355\u6587\u4EF6\u7EC4\u4EF6\u5F15\u5165</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;!-- script:setup --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { MoPopup } from &#39;moxui&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;!-- template --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;mo-popup v-model:show=&quot;showPopup&quot;&gt;&lt;/mo-popup&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u4EE3\u7801\u6F14\u793A" tabindex="-1">\u4EE3\u7801\u6F14\u793A <a class="header-anchor" href="#\u4EE3\u7801\u6F14\u793A" aria-hidden="true">#</a></h2><p><strong>\u57FA\u7840\u7528\u6CD5</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;mo-button size=&quot;small&quot; @click=&quot;showPopup = true&quot;&gt;\u6253\u5F00&lt;/mo-button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;mo-popup v-model:show=&quot;showPopup&quot; mask-click-close&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div class=&quot;content1&quot;&gt;\u5F39\u7A97\u5185\u5BB9&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/mo-popup&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>\u5F39\u51FA\u4F4D\u7F6E</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;mo-button </span></span>
<span class="line"><span style="color:#A6ACCD;">  size=&quot;small&quot; </span></span>
<span class="line"><span style="color:#A6ACCD;">  @click=&quot;(showPopup = true) &amp;&amp; (position = &#39;top&#39;)&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &gt;top&lt;/mo-button</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;mo-button</span></span>
<span class="line"><span style="color:#A6ACCD;">  size=&quot;small&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  @click=&quot;(showPopup = true) &amp;&amp; (position = &#39;right&#39;)&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &gt;right&lt;/mo-button</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;mo-button</span></span>
<span class="line"><span style="color:#A6ACCD;">  size=&quot;small&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  @click=&quot;(showPopup = true) &amp;&amp; (position = &#39;bottom&#39;)&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &gt;bottom&lt;/mo-button</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;mo-button</span></span>
<span class="line"><span style="color:#A6ACCD;">  size=&quot;small&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  @click=&quot;(showPopup = true) &amp;&amp; (position = &#39;left&#39;)&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &gt;left&lt;/mo-button</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;mo-popup </span></span>
<span class="line"><span style="color:#A6ACCD;">  v-model:show=&quot;showPopup&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  mask-click-close</span></span>
<span class="line"><span style="color:#A6ACCD;">  :position=&quot;position&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div</span></span>
<span class="line"><span style="color:#A6ACCD;">    v-if=&quot;position === &#39;left&#39; || position === &#39;right&#39;&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    class=&quot;content-v&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div v-else class=&quot;content-h&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/mo-popup&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const showPopup = ref(false);</span></span>
<span class="line"><span style="color:#A6ACCD;">const position = ref(&quot;top&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>\u5F39\u51FA\u52A8\u753B</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;mo-button</span></span>
<span class="line"><span style="color:#A6ACCD;">  size=&quot;small&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  @click=&quot;(showPopup3 = true) &amp;&amp; (animation = &#39;fade&#39;)&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &gt;fade&lt;/mo-button</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;mo-button</span></span>
<span class="line"><span style="color:#A6ACCD;">  size=&quot;small&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  @click=&quot;(showPopup3 = true) &amp;&amp; (animation = &#39;zoom&#39;)&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &gt;zoom&lt;/mo-button</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;mo-button</span></span>
<span class="line"><span style="color:#A6ACCD;">  size=&quot;small&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  @click=&quot;(showPopup3 = true) &amp;&amp; (animation = &#39;zoom-fade&#39;)&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &gt;zoom-fade&lt;/mo-button</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;mo-button</span></span>
<span class="line"><span style="color:#A6ACCD;">  size=&quot;small&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  @click=&quot;(showPopup3 = true) &amp;&amp; (animation = &#39;top&#39;)&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &gt;top&lt;/mo-button</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;mo-popup</span></span>
<span class="line"><span style="color:#A6ACCD;">  v-model:show=&quot;showPopup3&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  mask-click-close</span></span>
<span class="line"><span style="color:#A6ACCD;">  :animation=&quot;animation&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div class=&quot;content1&quot;&gt;\u5F39\u7A97\u5185\u5BB9&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/mo-popup&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const showPopup3 = ref(false);</span></span>
<span class="line"><span style="color:#A6ACCD;">const animation = ref(&quot;fade&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h2><h3 id="props" tabindex="-1">props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u53C2\u6570</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td style="text-align:left;"><code>v-model:show</code></td><td style="text-align:left;">\u63A7\u5236\u5F39\u7A97\u663E\u793A</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;"><code>false</code></td></tr><tr><td style="text-align:left;"><code>z-index</code></td><td style="text-align:left;">\u5F39\u51FA\u5C42\u7684zIndex, \u53EF\u7701\u7565</td><td style="text-align:left;"><code>string</code> <code>number</code></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;"><code>mask-click-close</code></td><td style="text-align:left;">\u70B9\u51FB\u906E\u7F69\u5C42\u662F\u5426\u5173\u95ED\u5F39\u7A97</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;"><code>position</code></td><td style="text-align:left;">\u5F39\u7A97\u4F4D\u7F6E, <code>center</code> <code>top</code> <code>right</code> <code>bottom</code> <code>left</code> <code>top:200</code>(\u7B49\u540C<code>top:200px</code>) <code>right:10vw</code> <code>left:50px</code> \u5176\u4ED6\u65B9\u5411\u53EF\u4EE5\u7C7B\u63A8</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;"><code>center</code></td></tr><tr><td style="text-align:left;"><code>animation</code></td><td style="text-align:left;">\u52A8\u753B\u7C7B\u578B, \u652F\u6301 <code>fade</code> <code>zoom</code> <code>zoom-fade</code> <code>top</code> <code>right</code> <code>bottom</code> <code>left</code> <code>top-full</code> <code>right-full</code> <code>bottom-full</code> <code>left-full</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">\u6839\u636E\u5F39\u51FA\u5C42\u4F4D\u7F6E\u5339\u914D\u52A8\u753B</td></tr><tr><td style="text-align:left;"><code>duration</code></td><td style="text-align:left;">\u5F39\u7A97\u52A8\u753B\u65F6\u957F, \u5355\u4F4Dms</td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;"><code>300</code></td></tr><tr><td style="text-align:left;"><code>before-close</code></td><td style="text-align:left;">\u5173\u95ED\u524D\u62E6\u622A\u5668, <code>return false | Promise&lt;false&gt;</code>, \u963B\u6B62\u5173\u95ED\u5F39\u7A97</td><td style="text-align:left;"><code>function</code></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;"><code>teleport</code></td><td style="text-align:left;">\u5F39\u7A97\u6302\u8F7D\u4F4D\u7F6E, \u76F8\u5F53\u4E8E<code>teleport</code>\u7684<code>to</code>\u5C5E\u6027</td><td style="text-align:left;"></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;"><code>lock-scroll</code></td><td style="text-align:left;">\u662F\u5426\u963B\u6B62\u9875\u9762\u6EDA\u52A8</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;"><code>true</code></td></tr><tr><td style="text-align:left;"><code>mask-background</code></td><td style="text-align:left;">\u906E\u7F69\u80CC\u666F</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;"><code>rgba(0,0,0,.4)</code></td></tr></tbody></table><p>[&quot;update:show&quot;, &quot;close&quot;, &quot;closed&quot;, &quot;open&quot;, &quot;opened&quot;]</p><h3 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u4E8B\u4EF6\u540D</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td style="text-align:left;"><code>update:show</code></td><td style="text-align:left;">\u66F4\u65B0show\u72B6\u6001</td><td style="text-align:left;"><code>show:boolean</code></td></tr><tr><td style="text-align:left;"><code>close</code></td><td style="text-align:left;">\u51C6\u5907\u5173\u95ED</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;"><code>closed</code></td><td style="text-align:left;">\u5F39\u7A97\u5DF2\u5173\u95ED, (\u52A8\u753B\u5DF2\u7ED3\u675F)</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;"><code>open</code></td><td style="text-align:left;">\u51C6\u5907\u6253\u5F00</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;"><code>opened</code></td><td style="text-align:left;">\u5F39\u7A97\u5DF2\u6253\u5F00, (\u52A8\u753B\u5DF2\u7ED3\u675F)</td><td style="text-align:left;"></td></tr></tbody></table><h3 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u540D\u79F0</th><th style="text-align:left;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:left;"><code>default</code></td><td style="text-align:left;">\u5F39\u7A97\u5185\u5BB9</td></tr></tbody></table>`,22),o=[a];function p(c,d,i,r,u,C){return n(),s("div",null,o)}const g=t(e,[["render",p]]);export{y as __pageData,g as default};
