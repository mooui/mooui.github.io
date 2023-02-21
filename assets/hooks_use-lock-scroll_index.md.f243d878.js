import{_ as e,c as t,o as l,a}from"./app.fcacde83.js";const g=JSON.parse('{"title":"useLockScroll","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4ECB\u7ECD","slug":"\u4ECB\u7ECD","link":"#\u4ECB\u7ECD","children":[]},{"level":2,"title":"\u5F15\u5165","slug":"\u5F15\u5165","link":"#\u5F15\u5165","children":[]},{"level":2,"title":"\u4EE3\u7801\u6F14\u793A","slug":"\u4EE3\u7801\u6F14\u793A","link":"#\u4EE3\u7801\u6F14\u793A","children":[{"level":3,"title":"API","slug":"api","link":"#api","children":[]},{"level":3,"title":"\u53C2\u6570","slug":"\u53C2\u6570","link":"#\u53C2\u6570","children":[]}]}],"relativePath":"hooks/use-lock-scroll/index.md"}'),s={name:"hooks/use-lock-scroll/index.md"},n=a(`<h1 id="uselockscroll" tabindex="-1">useLockScroll <a class="header-anchor" href="#uselockscroll" aria-hidden="true">#</a></h1><h2 id="\u4ECB\u7ECD" tabindex="-1">\u4ECB\u7ECD <a class="header-anchor" href="#\u4ECB\u7ECD" aria-hidden="true">#</a></h2><p>\u963B\u6B62\u6EDA\u52A8, \u591A\u7528\u4E8E\u5F39\u7A97\u65F6\u963B\u6B62\u80CC\u666F\u9875\u6EDA\u52A8</p><h2 id="\u5F15\u5165" tabindex="-1">\u5F15\u5165 <a class="header-anchor" href="#\u5F15\u5165" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import { useLockScroll } from &quot;moxui&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u4EE3\u7801\u6F14\u793A" tabindex="-1">\u4EE3\u7801\u6F14\u793A <a class="header-anchor" href="#\u4EE3\u7801\u6F14\u793A" aria-hidden="true">#</a></h2><p><strong>\u57FA\u7840\u7528\u6CD5</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;!-- script:setup --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { useLockScroll } from &quot;moxui&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">useLockScroll(scrollContainerRef,()=&gt;showLock.value);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h3><h3 id="\u53C2\u6570" tabindex="-1">\u53C2\u6570 <a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u53C2\u6570</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td style="text-align:left;"><code>rootRef</code></td><td style="text-align:left;">\u5143\u7D20ref, \u5176\u5185\u90E8\u4ECD\u53EF\u6EDA\u52A8</td><td style="text-align:left;"><code>Ref&lt;HTMLElement&gt;</code></td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;"><code>shouldLock</code></td><td style="text-align:left;">\u5F53\u524D\u662F\u5426\u963B\u6B62\u6EDA\u52A8</td><td style="text-align:left;"><code>()=&gt;boolean</code></td><td style="text-align:left;">-</td></tr></tbody></table>`,11),o=[n];function c(r,d,i,p,h,u){return l(),t("div",null,o)}const _=e(s,[["render",c]]);export{g as __pageData,_ as default};