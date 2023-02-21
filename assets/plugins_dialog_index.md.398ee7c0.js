import{_ as t,c as e,o as l,a as s}from"./app.fcacde83.js";const A=JSON.parse('{"title":"Dialog \u5BF9\u8BDD\u6846","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4ECB\u7ECD","slug":"\u4ECB\u7ECD","link":"#\u4ECB\u7ECD","children":[]},{"level":2,"title":"\u5F15\u5165","slug":"\u5F15\u5165","link":"#\u5F15\u5165","children":[]},{"level":2,"title":"\u4EE3\u7801\u6F14\u793A","slug":"\u4EE3\u7801\u6F14\u793A","link":"#\u4EE3\u7801\u6F14\u793A","children":[]},{"level":2,"title":"API","slug":"api","link":"#api","children":[{"level":3,"title":"options DialogOptions","slug":"options-dialogoptions","link":"#options-dialogoptions","children":[]},{"level":3,"title":"\u8FD4\u56DE\u503C","slug":"\u8FD4\u56DE\u503C","link":"#\u8FD4\u56DE\u503C","children":[]},{"level":3,"title":"DialogCloseOption","slug":"dialogcloseoption","link":"#dialogcloseoption","children":[]},{"level":3,"title":"\u7EC4\u4EF6Props","slug":"\u7EC4\u4EF6props","link":"#\u7EC4\u4EF6props","children":[]},{"level":3,"title":"\u7EC4\u4EF6Events","slug":"\u7EC4\u4EF6events","link":"#\u7EC4\u4EF6events","children":[]},{"level":3,"title":"\u7EC4\u4EF6Slots","slug":"\u7EC4\u4EF6slots","link":"#\u7EC4\u4EF6slots","children":[]}]}],"relativePath":"plugins/dialog/index.md"}'),n={name:"plugins/dialog/index.md"},a=s(`<h1 id="dialog-\u5BF9\u8BDD\u6846" tabindex="-1">Dialog \u5BF9\u8BDD\u6846 <a class="header-anchor" href="#dialog-\u5BF9\u8BDD\u6846" aria-hidden="true">#</a></h1><h2 id="\u4ECB\u7ECD" tabindex="-1">\u4ECB\u7ECD <a class="header-anchor" href="#\u4ECB\u7ECD" aria-hidden="true">#</a></h2><p>\u5F39\u51FA\u5BF9\u8BDD\u6846</p><h2 id="\u5F15\u5165" tabindex="-1">\u5F15\u5165 <a class="header-anchor" href="#\u5F15\u5165" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// \u5165\u53E3\u5F15\u5165</span></span>
<span class="line"><span style="color:#A6ACCD;">import { createApp } from &#39;vue&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { Dialog } from &#39;moxui&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const app = createApp();</span></span>
<span class="line"><span style="color:#A6ACCD;">app.use(Dialog);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u5355\u6587\u4EF6\u7EC4\u4EF6\u5F15\u5165</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;!-- script:setup --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { Dialog } from &#39;moxui&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Dialog({</span></span>
<span class="line"><span style="color:#A6ACCD;">  title:&#39;\u6D88\u606F&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  content:&#39;\u4E00\u6761\u6D88\u606F&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u4EE3\u7801\u6F14\u793A" tabindex="-1">\u4EE3\u7801\u6F14\u793A <a class="header-anchor" href="#\u4EE3\u7801\u6F14\u793A" aria-hidden="true">#</a></h2><p><strong>\u57FA\u7840\u7528\u6CD5</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import { Dialog, Toast } from &quot;moxui&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function showDialog() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  Dialog({</span></span>
<span class="line"><span style="color:#A6ACCD;">    title: &quot;\u57FA\u7840\u7528\u6CD5&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    content: &quot;\u57FA\u7840\u7528\u6CD5 \u57FA\u7840\u7528\u6CD5 \u57FA\u7840\u7528\u6CD5&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    close: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">  }).then((type) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    Toast([&quot;close&quot;, &quot;cancel&quot;, &quot;confirm&quot;][type]);</span></span>
<span class="line"><span style="color:#A6ACCD;">  });</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>\u62E6\u622A\u5668</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import { Dialog, Toast, DialogActionType } from &quot;moxui&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function showDialog() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  Dialog({</span></span>
<span class="line"><span style="color:#A6ACCD;">    title: &quot;\u62E6\u622A\u5668&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    content: &quot;\u4F7F\u7528\u62E6\u622A\u5668&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    close: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">    beforeClose: (type: DialogActionType) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      switch (type) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        case DialogActionType.CLOSE:</span></span>
<span class="line"><span style="color:#A6ACCD;">          Toast(&quot;closed&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">          break;</span></span>
<span class="line"><span style="color:#A6ACCD;">        case DialogActionType.CANCEL:</span></span>
<span class="line"><span style="color:#A6ACCD;">          Toast(&quot;interceptor canceled!&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">          return false;</span></span>
<span class="line"><span style="color:#A6ACCD;">        case DialogActionType.CONFIRM:</span></span>
<span class="line"><span style="color:#A6ACCD;">          Toast(&quot;async interceptor canceled!&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">          return false;</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">  });</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>\u4F7F\u7528\u7EC4\u4EF6</strong><br> \u5F53\u9700\u8981\u5B9A\u5236\u5185\u5BB9\u65F6, \u4F7F\u7528\u7EC4\u4EF6\u5F62\u5F0F</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import { Dialog, Toast, MoButton, DialogActionType } from &quot;moxui&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">const MoDialog = Dialog.Component;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function showDialog() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  Dialog({</span></span>
<span class="line"><span style="color:#A6ACCD;">    title: &quot;\u57FA\u7840\u7528\u6CD5&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    content: &quot;\u57FA\u7840\u7528\u6CD5 \u57FA\u7840\u7528\u6CD5 \u57FA\u7840\u7528\u6CD5&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    close: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">  }).then((type) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    Toast([&quot;close&quot;, &quot;cancel&quot;, &quot;confirm&quot;][type]);</span></span>
<span class="line"><span style="color:#A6ACCD;">  });</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;!-- template --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;mo-dialog v-model:show=&quot;isShowDialog&quot; :title=&quot;&#39;\u7EC4\u4EF6\u8C03\u7528&#39;&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;template #close&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;a </span></span>
<span class="line"><span style="color:#A6ACCD;">      href=&quot;javascript:void(0);&quot; </span></span>
<span class="line"><span style="color:#A6ACCD;">      class=&quot;close-0&quot; </span></span>
<span class="line"><span style="color:#A6ACCD;">      @click=&quot;isShowDialog = false&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &gt;&lt;/a&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;template #button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;mo-button type=&quot;success&quot; @click=&quot;isShowDialog = false&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &gt;\u6210\u529F&lt;/mo-button</span></span>
<span class="line"><span style="color:#A6ACCD;">    &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div class=&quot;messages&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div class=&quot;txt&quot;&gt;Dialog \u7EC4\u4EF6\u8C03\u7528&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div class=&quot;icon&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/mo-dialog&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h2><h3 id="options-dialogoptions" tabindex="-1">options DialogOptions <a class="header-anchor" href="#options-dialogoptions" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u53C2\u6570</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td style="text-align:left;"><code>title</code></td><td style="text-align:left;">\u6807\u9898</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;"><code>content</code></td><td style="text-align:left;">\u5185\u5BB9</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;"><code>close</code></td><td style="text-align:left;">\u5173\u95ED\u6309\u94AE\u914D\u7F6E</td><td style="text-align:left;"><code>true</code> or <code>DialogCloseOption</code>(\u89C1\u4E0B\u8868)</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;"><code>btns</code></td><td style="text-align:left;">\u6309\u94AE\u914D\u7F6E</td><td style="text-align:left;"><code>Array&lt;string | { txt: string; active?: boolean }&gt;</code></td><td style="text-align:left;">\u53D6\u6D88\u3001\u786E\u8BA4</td></tr><tr><td style="text-align:left;"><code>contentHeight</code></td><td style="text-align:left;">\u5185\u5BB9\u9AD8\u5EA6, \u82E5\u8BBE\u7F6E, \u8D85\u51FA\u5185\u5BB9\u5C06\u6EDA\u52A8</td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;"><code>style</code></td><td style="text-align:left;">\u5185\u5BB9\u6837\u5F0F</td><td style="text-align:left;"><code>CSSProperties</code></td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;"><code>duration</code></td><td style="text-align:left;">\u5BF9\u8BDD\u6846\u663E\u793A\u65F6\u95F4ms, \u5230\u65F6\u81EA\u52A8\u5173\u95ED</td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;"><code>beforeClose</code></td><td style="text-align:left;">\u70B9\u51FB\u62E6\u622A\u5668, \u9ED8\u8BA4\u70B9\u51FB\u540E\u5C31\u5173\u95ED, \u62E6\u622A\u5668\u663E\u5F0F\u8FD4\u56DE<code>false | Promise&lt;false&gt;</code>, \u5C06\u963B\u6B62\u5F39\u7A97\u5173\u95ED</td><td style="text-align:left;"><code>(args:any)=&gt;boolean | Promise&lt;boolean&gt; | undefined</code></td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;"><code>parent</code></td><td style="text-align:left;">\u6302\u8F7D\u4F4D\u7F6E</td><td style="text-align:left;"><code>string</code> <code>HTMLElement</code></td><td style="text-align:left;">-</td></tr></tbody></table><h3 id="\u8FD4\u56DE\u503C" tabindex="-1">\u8FD4\u56DE\u503C <a class="header-anchor" href="#\u8FD4\u56DE\u503C" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u53C2\u6570</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u7C7B\u578B</th></tr></thead><tbody><tr><td style="text-align:left;"><code>Promise&lt;DialogActionType&gt;</code></td><td style="text-align:left;">DialogActionType\u6807\u8BC6\u70B9\u51FB\u7684\u6309\u94AE</td><td style="text-align:left;">-</td></tr></tbody></table><h3 id="dialogcloseoption" tabindex="-1">DialogCloseOption <a class="header-anchor" href="#dialogcloseoption" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u53C2\u6570</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td style="text-align:left;"><code>top</code></td><td style="text-align:left;">\u8DDD\u9876\u90E8\u8DDD\u79BB</td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;"><code>20</code></td></tr><tr><td style="text-align:left;"><code>right</code></td><td style="text-align:left;">\u8DDD\u53F3\u4FA7\u8DDD\u79BB</td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;"><code>20</code></td></tr><tr><td style="text-align:left;"><code>width</code></td><td style="text-align:left;">\u5173\u95ED\u56FE\u6807\u5BBD</td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;"><code>30</code></td></tr><tr><td style="text-align:left;"><code>height</code></td><td style="text-align:left;">\u5173\u95ED\u56FE\u6807\u9AD8</td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;"><code>30</code></td></tr><tr><td style="text-align:left;"><code>icon</code></td><td style="text-align:left;">\u5173\u95ED\u6309\u94AEsrc</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">\u5185\u7F6E\u56FE\u7247</td></tr></tbody></table><h3 id="\u7EC4\u4EF6props" tabindex="-1">\u7EC4\u4EF6Props <a class="header-anchor" href="#\u7EC4\u4EF6props" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u53C2\u6570</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td style="text-align:left;"><code>v-model:show</code></td><td style="text-align:left;">\u662F\u5426\u663E\u793A\u5BF9\u8BDD\u6846</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;"><code>title</code></td><td style="text-align:left;">\u6807\u9898</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;"><code>content</code></td><td style="text-align:left;">\u5185\u5BB9</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;"><code>close</code></td><td style="text-align:left;">\u5173\u95ED\u6309\u94AE\u914D\u7F6E</td><td style="text-align:left;"><code>true</code> or <code>DialogCloseOption</code>(\u89C1\u4E0B\u8868)</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;"><code>btns</code></td><td style="text-align:left;">\u6309\u94AE\u914D\u7F6E</td><td style="text-align:left;"><code>Array&lt;string | { txt: string; active?: boolean }&gt;</code></td><td style="text-align:left;">\u53D6\u6D88\u3001\u786E\u8BA4</td></tr><tr><td style="text-align:left;"><code>contentHeight</code></td><td style="text-align:left;">\u5185\u5BB9\u9AD8\u5EA6, \u82E5\u8BBE\u7F6E, \u8D85\u51FA\u5185\u5BB9\u5C06\u6EDA\u52A8</td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;"><code>style</code></td><td style="text-align:left;">\u5185\u5BB9\u6837\u5F0F</td><td style="text-align:left;"><code>CSSProperties</code></td><td style="text-align:left;">-</td></tr></tbody></table><h3 id="\u7EC4\u4EF6events" tabindex="-1">\u7EC4\u4EF6Events <a class="header-anchor" href="#\u7EC4\u4EF6events" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u4E8B\u4EF6\u540D</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td style="text-align:left;"><code>close</code></td><td style="text-align:left;">\u5173\u95ED\u6309\u94AE\u70B9\u51FB</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;"><code>cancel</code></td><td style="text-align:left;">\u53D6\u6D88\u6309\u94AE\u70B9\u51FB</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;"><code>confirm</code></td><td style="text-align:left;">\u786E\u8BA4\u6309\u94AE\u70B9\u51FB</td><td style="text-align:left;">-</td></tr></tbody></table><h3 id="\u7EC4\u4EF6slots" tabindex="-1">\u7EC4\u4EF6Slots <a class="header-anchor" href="#\u7EC4\u4EF6slots" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u540D\u79F0</th><th style="text-align:left;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:left;"><code>default</code></td><td style="text-align:left;">\u5BF9\u8BDD\u5185\u5BB9</td></tr><tr><td style="text-align:left;"><code>close</code></td><td style="text-align:left;">\u5173\u95ED\u6309\u94AE</td></tr><tr><td style="text-align:left;"><code>button</code></td><td style="text-align:left;">\u6309\u94AE</td></tr></tbody></table>`,25),o=[a];function d(p,i,c,r,y,g){return l(),e("div",null,o)}const f=t(n,[["render",d]]);export{A as __pageData,f as default};
