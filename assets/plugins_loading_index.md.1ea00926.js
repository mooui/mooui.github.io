import{_ as s,c as n,o as a,a as l}from"./app.fcacde83.js";const g=JSON.parse('{"title":"Loading \u52A0\u8F7D","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4ECB\u7ECD","slug":"\u4ECB\u7ECD","link":"#\u4ECB\u7ECD","children":[]},{"level":2,"title":"\u5F15\u5165","slug":"\u5F15\u5165","link":"#\u5F15\u5165","children":[]},{"level":2,"title":"\u4EE3\u7801\u6F14\u793A","slug":"\u4EE3\u7801\u6F14\u793A","link":"#\u4EE3\u7801\u6F14\u793A","children":[]},{"level":2,"title":"API","slug":"api","link":"#api","children":[{"level":3,"title":"\u65B9\u6CD5","slug":"\u65B9\u6CD5","link":"#\u65B9\u6CD5","children":[]},{"level":3,"title":"\u53C2\u6570\u7C7B\u578B","slug":"\u53C2\u6570\u7C7B\u578B","link":"#\u53C2\u6570\u7C7B\u578B","children":[]}]}],"relativePath":"plugins/loading/index.md"}'),e={name:"plugins/loading/index.md"},p=l(`<h1 id="loading-\u52A0\u8F7D" tabindex="-1">Loading \u52A0\u8F7D <a class="header-anchor" href="#loading-\u52A0\u8F7D" aria-hidden="true">#</a></h1><h2 id="\u4ECB\u7ECD" tabindex="-1">\u4ECB\u7ECD <a class="header-anchor" href="#\u4ECB\u7ECD" aria-hidden="true">#</a></h2><p>\u7528\u4E8E\u9875\u9762\u521D\u59CB\u5316\u65F6\u5C55\u793A\u52A0\u8F7D\u906E\u7F69<br> \u5BB9\u5668\u4E0B\u6267\u884C\u5355\u4F8B\u6A21\u5F0F</p><h2 id="\u5F15\u5165" tabindex="-1">\u5F15\u5165 <a class="header-anchor" href="#\u5F15\u5165" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// \u5165\u53E3\u5F15\u5165</span></span>
<span class="line"><span style="color:#A6ACCD;">import { createApp } from &#39;vue&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { Loading } from &#39;moxui&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const app = createApp();</span></span>
<span class="line"><span style="color:#A6ACCD;">app.use(Loading);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u5355\u6587\u4EF6\u7EC4\u4EF6\u5F15\u5165</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;!-- script:setup --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { Loading } from &#39;moxui&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Loading();</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u4EE3\u7801\u6F14\u793A" tabindex="-1">\u4EE3\u7801\u6F14\u793A <a class="header-anchor" href="#\u4EE3\u7801\u6F14\u793A" aria-hidden="true">#</a></h2><p><strong>\u57FA\u7840\u7528\u6CD5</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import { Loading } from &#39;moxui&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Loading();</span></span>
<span class="line"><span style="color:#A6ACCD;">init().then(()=&gt;{</span></span>
<span class="line"><span style="color:#A6ACCD;">  Loading.close();</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function init(){</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u521D\u59CB\u5316...</span></span>
<span class="line"><span style="color:#A6ACCD;">  return new Promise(resolve=&gt;{</span></span>
<span class="line"><span style="color:#A6ACCD;">    setTimeout(()=&gt;{</span></span>
<span class="line"><span style="color:#A6ACCD;">      resolve();</span></span>
<span class="line"><span style="color:#A6ACCD;">    },2000)</span></span>
<span class="line"><span style="color:#A6ACCD;">  })</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>\u663E\u793A\u56FA\u5B9A\u65F6\u95F4</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import { Loading } from &#39;moxui&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Loading(2500);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>\u914D\u7F6E</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import { Loading } from &#39;moxui&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Loading({</span></span>
<span class="line"><span style="color:#A6ACCD;">  duration:4000,</span></span>
<span class="line"><span style="color:#A6ACCD;">  zIndex:1000,</span></span>
<span class="line"><span style="color:#A6ACCD;">  backgroundColor: &quot;rgba(0,100,0,.1)&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>\u6307\u5B9A\u5BB9\u5668</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import { Loading } from &#39;moxui&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const container = ref&lt;HTMLElement&gt;();</span></span>
<span class="line"><span style="color:#A6ACCD;">const close = Loading({</span></span>
<span class="line"><span style="color:#A6ACCD;">  duration:0,</span></span>
<span class="line"><span style="color:#A6ACCD;">  container</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;">setTimeout(close,2500);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h2><h3 id="\u65B9\u6CD5" tabindex="-1">\u65B9\u6CD5 <a class="header-anchor" href="#\u65B9\u6CD5" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u65B9\u6CD5\u540D</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u53C2\u6570</th><th style="text-align:left;">\u8FD4\u56DE\u503C</th></tr></thead><tbody><tr><td style="text-align:left;"><code>Loading</code></td><td style="text-align:left;">\u663E\u793Aloading</td><td style="text-align:left;">\u89C1\u4E0B\u65B9 <strong>\u53C2\u6570\u7C7B\u578B</strong></td><td style="text-align:left;"><code>close:()=&gt;{}</code> \u5173\u95EDLoading</td></tr><tr><td style="text-align:left;"><code>Loading.close</code></td><td style="text-align:left;">\u5173\u95ED\u6240\u6709loading</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr></tbody></table><h3 id="\u53C2\u6570\u7C7B\u578B" tabindex="-1">\u53C2\u6570\u7C7B\u578B <a class="header-anchor" href="#\u53C2\u6570\u7C7B\u578B" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// Loading(options);</span></span>
<span class="line"><span style="color:#A6ACCD;">options?: </span></span>
<span class="line"><span style="color:#A6ACCD;">  | { </span></span>
<span class="line"><span style="color:#A6ACCD;">      show?: boolean;</span></span>
<span class="line"><span style="color:#A6ACCD;">      duration?: number;</span></span>
<span class="line"><span style="color:#A6ACCD;">      backgroundColor?: string;</span></span>
<span class="line"><span style="color:#A6ACCD;">      zIndex?: number;</span></span>
<span class="line"><span style="color:#A6ACCD;">      container?: string | HTMLElement</span></span>
<span class="line"><span style="color:#A6ACCD;">    } </span></span>
<span class="line"><span style="color:#A6ACCD;">  | boolean  // false\u5173\u95ED</span></span>
<span class="line"><span style="color:#A6ACCD;">  | number   // duration</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,19),o=[p];function t(c,i,r,d,C,A){return a(),n("div",null,o)}const h=s(e,[["render",t]]);export{g as __pageData,h as default};
