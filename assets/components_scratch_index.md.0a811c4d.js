import{_ as s,c as t,o as n,a}from"./app.fcacde83.js";const u=JSON.parse('{"title":"Scratch \u522E\u5956","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4ECB\u7ECD","slug":"\u4ECB\u7ECD","link":"#\u4ECB\u7ECD","children":[]},{"level":2,"title":"\u5F15\u5165","slug":"\u5F15\u5165","link":"#\u5F15\u5165","children":[]},{"level":2,"title":"\u4EE3\u7801\u6F14\u793A","slug":"\u4EE3\u7801\u6F14\u793A","link":"#\u4EE3\u7801\u6F14\u793A","children":[]},{"level":2,"title":"API","slug":"api","link":"#api","children":[{"level":3,"title":"props","slug":"props","link":"#props","children":[]},{"level":3,"title":"Events","slug":"events","link":"#events","children":[]},{"level":3,"title":"\u65B9\u6CD5","slug":"\u65B9\u6CD5","link":"#\u65B9\u6CD5","children":[]}]}],"relativePath":"components/scratch/index.md"}'),l={name:"components/scratch/index.md"},e=a(`<h1 id="scratch-\u522E\u5956" tabindex="-1">Scratch \u522E\u5956 <a class="header-anchor" href="#scratch-\u522E\u5956" aria-hidden="true">#</a></h1><h2 id="\u4ECB\u7ECD" tabindex="-1">\u4ECB\u7ECD <a class="header-anchor" href="#\u4ECB\u7ECD" aria-hidden="true">#</a></h2><h2 id="\u5F15\u5165" tabindex="-1">\u5F15\u5165 <a class="header-anchor" href="#\u5F15\u5165" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// \u5165\u53E3\u5F15\u5165</span></span>
<span class="line"><span style="color:#A6ACCD;">import { createApp } from &#39;vue&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { MoScratch } from &#39;moxui&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const app = createApp();</span></span>
<span class="line"><span style="color:#A6ACCD;">app.use(MoScratch);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u4EE3\u7801\u6F14\u793A" tabindex="-1">\u4EE3\u7801\u6F14\u793A <a class="header-anchor" href="#\u4EE3\u7801\u6F14\u793A" aria-hidden="true">#</a></h2><p><strong>\u57FA\u672C\u7528\u6CD5</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;!-- html --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;mo-button size=&quot;small&quot; type=&quot;success&quot; @click=&quot;startScratch&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &gt;\u5F00\u59CB&lt;/mo-button</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;mo-button</span></span>
<span class="line"><span style="color:#A6ACCD;">  size=&quot;small&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  type=&quot;success&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  :style=&quot;{ &#39;margin-left&#39;: &#39;20px&#39; }&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  @click=&quot;resetScratch&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &gt;\u91CD\u7F6E&lt;/mo-button</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;div class=&quot;scratch-wrapper&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div class=&quot;content&quot;&gt;666666&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div class=&quot;scratch-container&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;mo-scratch</span></span>
<span class="line"><span style="color:#A6ACCD;">      ref=&quot;scratchInstance&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      :scratch-able=&quot;canScratch&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      absolute</span></span>
<span class="line"><span style="color:#A6ACCD;">      :area-padding=&quot;70&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      :finish-percent=&quot;85&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      text=&quot;\u522E\u5F00\u6D82\u5C42&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      @finish=&quot;scratchEnd&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &gt;&lt;/mo-scratch&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// js</span></span>
<span class="line"><span style="color:#A6ACCD;">const scratchInstance = ref&lt;ScratchInstance&gt;();</span></span>
<span class="line"><span style="color:#A6ACCD;">const canScratch = ref(false);</span></span>
<span class="line"><span style="color:#A6ACCD;">function startScratch() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  canScratch.value = true;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">function resetScratch() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  scratchInstance.value?.reset();</span></span>
<span class="line"><span style="color:#A6ACCD;">  canScratch.value = false;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">function scratchEnd() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  Toast(&quot;\u522E\u5B8C\u4E86&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>\u56FE\u7247\u80CC\u666F</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;!-- html --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;mo-button size=&quot;small&quot; type=&quot;success&quot; @click=&quot;startScratch&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &gt;\u5F00\u59CB&lt;/mo-button</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;mo-button</span></span>
<span class="line"><span style="color:#A6ACCD;">  size=&quot;small&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  type=&quot;success&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  :style=&quot;{ &#39;margin-left&#39;: &#39;20px&#39; }&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  @click=&quot;resetScratch&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &gt;\u91CD\u7F6E&lt;/mo-button</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;div class=&quot;scratch-wrapper&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div class=&quot;content&quot;&gt;666666&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div class=&quot;scratch-container&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;mo-scratch</span></span>
<span class="line"><span style="color:#A6ACCD;">      ref=&quot;scratchInstance&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      :scratch-able=&quot;canScratch&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      absolute</span></span>
<span class="line"><span style="color:#A6ACCD;">      :area-padding=&quot;70&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      :finish-percent=&quot;85&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      :background=&quot;scratchBg&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      @finish=&quot;scratchEnd&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &gt;&lt;/mo-scratch&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// js</span></span>
<span class="line"><span style="color:#A6ACCD;">import scratchBg from &quot;./scratch.png&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">const scratchInstance = ref&lt;ScratchInstance&gt;();</span></span>
<span class="line"><span style="color:#A6ACCD;">const canScratch = ref(false);</span></span>
<span class="line"><span style="color:#A6ACCD;">function startScratch() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  canScratch.value = true;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">function resetScratch() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  scratchInstance.value?.reset();</span></span>
<span class="line"><span style="color:#A6ACCD;">  canScratch.value = false;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">function scratchEnd() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  Toast(&quot;\u522E\u5B8C\u4E86&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h2><h3 id="props" tabindex="-1">props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u53C2\u6570</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td style="text-align:left;"><code>absolute</code></td><td style="text-align:left;">\u662F\u5426\u7EDD\u5BF9\u5B9A\u4F4D</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;"><code>false</code></td></tr><tr><td style="text-align:left;"><code>radius</code></td><td style="text-align:left;">\u624B\u6307\u89E6\u70B9\u522E\u5F00\u534A\u5F84</td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;"><code>8</code></td></tr><tr><td style="text-align:left;"><code>scratchAble</code></td><td style="text-align:left;">\u662F\u5426\u80FD\u591F\u522E\u52A8</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;"><code>false</code></td></tr><tr><td style="text-align:left;"><code>styles</code></td><td style="text-align:left;">\u6837\u5F0F, \u51B3\u5B9A\u533A\u57DF\u5927\u5C0F</td><td style="text-align:left;"><code>Object</code></td><td style="text-align:left;"><code>{width: &quot;100%&quot;,height: &quot;100%&quot;}</code></td></tr><tr><td style="text-align:left;"><code>background</code></td><td style="text-align:left;">\u80CC\u666F: \u989C\u8272/\u56FE\u7247</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;"><code>#ccc</code></td></tr><tr><td style="text-align:left;"><code>finishPercent</code></td><td style="text-align:left;">\u5224\u5B9A\u522E\u5B8C\u6BD4\u4F8B, \u522E\u5F00\u591A\u5C11\u7B97\u522E\u5B8C, \u767E\u5206\u6BD4\u503C, default: 80</td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;"><code>80</code></td></tr><tr><td style="text-align:left;"><code>areaPadding</code></td><td style="text-align:left;">\u6709\u6548\u522E\u5956\u533A\u57DF, \u4EE5\u8BE5\u533A\u57DF\u5185\u522E\u5F00\u6BD4\u4F8B\u5224\u65AD\u662F\u5426finish, \u5B9A\u4E49\u7C7B\u4F3Cpadding, \u4E0A\u53F3\u4E0B\u5DE6</td><td style="text-align:left;">\`\`\`number</td><td style="text-align:left;">numbers\`\`\`</td></tr><tr><td style="text-align:left;"><code>autoClear</code></td><td style="text-align:left;">\u662F\u5426\u89E6\u53D1finish\u540E\u81EA\u52A8\u6E05\u7A7A</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;"><code>true</code></td></tr><tr><td style="text-align:left;"><code>text</code></td><td style="text-align:left;">\u6D82\u5C42\u4E0A\u7684\u6587\u5B57</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;"><code>textStyle</code></td><td style="text-align:left;">\u6D82\u5C42\u4E0A\u7684\u6587\u5B57\u6837\u5F0F</td><td style="text-align:left;">\`\`\`{color?: string;fontSize?: number</td><td style="text-align:left;">string;fontWeight?: number</td></tr></tbody></table><h3 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u4E8B\u4EF6\u540D</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td style="text-align:left;"><code>finish</code></td><td style="text-align:left;">\u5F53\u524D\u5DF2\u522E\u5B8C</td><td style="text-align:left;"></td></tr></tbody></table><h3 id="\u65B9\u6CD5" tabindex="-1">\u65B9\u6CD5 <a class="header-anchor" href="#\u65B9\u6CD5" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u65B9\u6CD5\u540D</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u53C2\u6570</th><th style="text-align:left;">\u8FD4\u56DE\u503C</th></tr></thead><tbody><tr><td style="text-align:left;"><code>reset</code></td><td style="text-align:left;">\u91CD\u7F6E</td><td style="text-align:left;"></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;"><code>clear</code></td><td style="text-align:left;">\u6E05\u7A7A\u522E\u677F</td><td style="text-align:left;"></td><td style="text-align:left;"></td></tr></tbody></table>`,18),c=[e];function o(p,r,i,d,C,A){return n(),t("div",null,c)}const h=s(l,[["render",o]]);export{u as __pageData,h as default};
