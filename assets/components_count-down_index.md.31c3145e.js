import{_ as s,c as t,o as n,a}from"./app.fcacde83.js";const y=JSON.parse('{"title":"CountDown \u5012\u8BA1\u65F6","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4ECB\u7ECD","slug":"\u4ECB\u7ECD","link":"#\u4ECB\u7ECD","children":[]},{"level":2,"title":"\u5F15\u5165","slug":"\u5F15\u5165","link":"#\u5F15\u5165","children":[]},{"level":2,"title":"\u4EE3\u7801\u6F14\u793A","slug":"\u4EE3\u7801\u6F14\u793A","link":"#\u4EE3\u7801\u6F14\u793A","children":[]},{"level":2,"title":"API","slug":"api","link":"#api","children":[{"level":3,"title":"props","slug":"props","link":"#props","children":[]},{"level":3,"title":"Events","slug":"events","link":"#events","children":[]},{"level":3,"title":"Slots","slug":"slots","link":"#slots","children":[]}]}],"relativePath":"components/count-down/index.md"}'),l={name:"components/count-down/index.md"},e=a(`<h1 id="countdown-\u5012\u8BA1\u65F6" tabindex="-1">CountDown \u5012\u8BA1\u65F6 <a class="header-anchor" href="#countdown-\u5012\u8BA1\u65F6" aria-hidden="true">#</a></h1><h2 id="\u4ECB\u7ECD" tabindex="-1">\u4ECB\u7ECD <a class="header-anchor" href="#\u4ECB\u7ECD" aria-hidden="true">#</a></h2><h2 id="\u5F15\u5165" tabindex="-1">\u5F15\u5165 <a class="header-anchor" href="#\u5F15\u5165" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// \u5165\u53E3\u5F15\u5165</span></span>
<span class="line"><span style="color:#A6ACCD;">import { createApp } from &#39;vue&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { MoCountDown } from &#39;moxui&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const app = createApp();</span></span>
<span class="line"><span style="color:#A6ACCD;">app.use(MoCountDown);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u4EE3\u7801\u6F14\u793A" tabindex="-1">\u4EE3\u7801\u6F14\u793A <a class="header-anchor" href="#\u4EE3\u7801\u6F14\u793A" aria-hidden="true">#</a></h2><p><strong>\u57FA\u672C\u7528\u6CD5</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;mo-count-down :time=&quot;99999&quot;&gt;&lt;/mo-count-down&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>\u65F6\u95F4\u8282\u70B9</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;mo-count-down</span></span>
<span class="line"><span style="color:#A6ACCD;">  :time=&quot;125&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  :time-point=&quot;[120, 100, 60]&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  @end=&quot;Toast(&#39;CountDown-2 End&#39;)&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  @time=&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    (s:number) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      Toast(\`CountDown-2 \u8FD8\u5269\${s}\u79D2 ~\`);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt;&lt;/mo-count-down&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>\u683C\u5F0F\u5B9A\u4E49</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;mo-count-down</span></span>
<span class="line"><span style="color:#A6ACCD;">  :time=&quot;99999&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  format=&quot;DD \u5929 hh\u65F6 mm\u5206 ss\u79D2&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt;&lt;/mo-count-down&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>\u683C\u5F0F\u5B9A\u4E49 {}</strong><br> \u5F53\u683C\u5F0F\u5B57\u7B26\u4E32\u4E2D\u5B58\u5728\u6A21\u677F\u5B57\u7B26(D|h|m|s), \u6A21\u677F\u5B57\u7B26\u9700\u7528{}\u5305\u88F9</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;mo-count-down</span></span>
<span class="line"><span style="color:#A6ACCD;">  :time=&quot;99999&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  format=&quot;{DD} DDD {hh}hhh {mm}: {ss} ssss&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt;&lt;/mo-count-down&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>\u81EA\u5B9A\u4E49\u6837\u5F0F</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;mo-count-down :time=&quot;99999&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;template #default=&quot;current&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;span class=&quot;num&quot;&gt;{{ current.totalHours }}&lt;/span&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      \u65F6</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;span class=&quot;num&quot;&gt;{{ current.minutes }}&lt;/span&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      \u5206</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;span class=&quot;num&quot;&gt;{{ current.seconds }}&lt;/span&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      \u79D2</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/mo-count-down&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>\u624B\u52A8\u64CD\u4F5C</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;div class=&quot;btns&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;mo-button type=&quot;success&quot; size=&quot;small&quot; @click=&quot;cd?.start()&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &gt;\u5F00\u59CB&lt;/mo-button</span></span>
<span class="line"><span style="color:#A6ACCD;">  &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;mo-button type=&quot;success&quot; size=&quot;small&quot; @click=&quot;cd?.pause()&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &gt;\u6682\u505C&lt;/mo-button</span></span>
<span class="line"><span style="color:#A6ACCD;">  &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;mo-button type=&quot;success&quot; size=&quot;small&quot; @click=&quot;cd?.stop()&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &gt;\u505C\u6B62&lt;/mo-button</span></span>
<span class="line"><span style="color:#A6ACCD;">  &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;mo-button type=&quot;success&quot; size=&quot;small&quot; @click=&quot;cd?.reset()&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &gt;\u91CD\u7F6E&lt;/mo-button</span></span>
<span class="line"><span style="color:#A6ACCD;">  &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;mo-count-down ref=&quot;cd&quot; :time=&quot;200&quot; auto-start=&quot;false&quot;&gt;&lt;/mo-count-down&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;!-- script:setup --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { </span></span>
<span class="line"><span style="color:#A6ACCD;">  MoCountDown,</span></span>
<span class="line"><span style="color:#A6ACCD;">  MoButton,</span></span>
<span class="line"><span style="color:#A6ACCD;">  CountDownInstance</span></span>
<span class="line"><span style="color:#A6ACCD;">} from &quot;moxui&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const cd = ref&lt;CountDownInstance&gt;();</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h2><h3 id="props" tabindex="-1">props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u53C2\u6570</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td style="text-align:left;"><code>time</code></td><td style="text-align:left;">\u5012\u8BA1\u65F6\u65F6\u95F4, \u79D2\u503C</td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;"><code>auto-start</code></td><td style="text-align:left;">\u662F\u5426\u81EA\u52A8\u5F00\u59CB</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;"><code>true</code></td></tr><tr><td style="text-align:left;"><code>format</code></td><td style="text-align:left;">\u683C\u5F0F\u5B57\u7B26\u4E32, \u6A21\u677F\u5B57\u7B26: D-\u5929, h-\u65F6, m-\u5206, s-\u79D2, \u82E5\u683C\u5F0F\u5B57\u7B26\u4E32\u4E2D\u5B58\u5728\u6A21\u677F\u5B57\u7B26, \u6A21\u677F\u5B57\u7B26\u7528{}\u5305\u88F9, \u6A21\u677F\u5B57\u7B26\u4E24\u4E2A(\u6216\u4EE5\u4E0A)\u8FDE\u5199\u65F6, \u4E0D\u8DB310\u7684\u6570\u5B57\u624D\u4F1A\u5728\u524D\u7F6E\u88650, \u5982 h -&gt; 9 hh -&gt; 09</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;"><code>hh:mm:ss</code></td></tr><tr><td style="text-align:left;"><code>time-point</code></td><td style="text-align:left;">\u65F6\u95F4\u8282\u70B9, \u9047\u5230\u5BF9\u5E94\u7684\u65F6\u95F4\u8282\u70B9\u4F1A\u629B\u51FAtime\u4E8B\u4EF6</td><td style="text-align:left;"><code>number | number[]</code></td><td style="text-align:left;">-</td></tr></tbody></table><h3 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u4E8B\u4EF6\u540D</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td style="text-align:left;"><code>end</code></td><td style="text-align:left;">\u5012\u8BA1\u65F6\u7ED3\u675F</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;"><code>time</code></td><td style="text-align:left;">\u9047\u5230\u8BBE\u7F6E\u7684\u65F6\u95F4\u8282\u70B9</td><td style="text-align:left;"><code>time:number</code></td></tr></tbody></table><h3 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u540D\u79F0</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u53C2\u6570</th></tr></thead><tbody><tr><td style="text-align:left;"><code>default</code></td><td style="text-align:left;">\u81EA\u5B9A\u4E49\u7684\u5012\u8BA1\u65F6\u683C\u5F0F</td><td style="text-align:left;"><code>current: { total:number; days:number; totalHours:number; hours:number; minutes:number; seconds:number; }</code></td></tr></tbody></table>`,24),o=[e];function p(c,i,r,d,u,C){return n(),t("div",null,o)}const g=s(l,[["render",p]]);export{y as __pageData,g as default};
