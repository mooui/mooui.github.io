import{_ as t,c as s,o as e,a as n}from"./app.fcacde83.js";const A=JSON.parse('{"title":"SlotMachine \u8001\u864E\u673A","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4ECB\u7ECD","slug":"\u4ECB\u7ECD","link":"#\u4ECB\u7ECD","children":[]},{"level":2,"title":"\u5F15\u5165","slug":"\u5F15\u5165","link":"#\u5F15\u5165","children":[]},{"level":2,"title":"\u4EE3\u7801\u6F14\u793A","slug":"\u4EE3\u7801\u6F14\u793A","link":"#\u4EE3\u7801\u6F14\u793A","children":[]},{"level":2,"title":"API","slug":"api","link":"#api","children":[{"level":3,"title":"props","slug":"props","link":"#props","children":[]},{"level":3,"title":"\u65B9\u6CD5","slug":"\u65B9\u6CD5","link":"#\u65B9\u6CD5","children":[]}]}],"relativePath":"components/slot-machine/index.md"}'),l={name:"components/slot-machine/index.md"},a=n(`<h1 id="slotmachine-\u8001\u864E\u673A" tabindex="-1">SlotMachine \u8001\u864E\u673A <a class="header-anchor" href="#slotmachine-\u8001\u864E\u673A" aria-hidden="true">#</a></h1><h2 id="\u4ECB\u7ECD" tabindex="-1">\u4ECB\u7ECD <a class="header-anchor" href="#\u4ECB\u7ECD" aria-hidden="true">#</a></h2><h2 id="\u5F15\u5165" tabindex="-1">\u5F15\u5165 <a class="header-anchor" href="#\u5F15\u5165" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// \u5165\u53E3\u5F15\u5165</span></span>
<span class="line"><span style="color:#A6ACCD;">import { createApp } from &#39;vue&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { MoSlotMachine } from &#39;moxui&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const app = createApp();</span></span>
<span class="line"><span style="color:#A6ACCD;">app.use(MoSlotMachine);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u4EE3\u7801\u6F14\u793A" tabindex="-1">\u4EE3\u7801\u6F14\u793A <a class="header-anchor" href="#\u4EE3\u7801\u6F14\u793A" aria-hidden="true">#</a></h2><p><strong>\u62BD\u9753\u53F7</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;!-- html --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;mo-button size=&quot;small&quot; type=&quot;success&quot; @click=&quot;getGoodNumber&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &gt;\u62BD\u5956&lt;/mo-button</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;input v-model=&quot;numbers&quot; type=&quot;text&quot; class=&quot;good-num&quot; /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;mo-slot-machine</span></span>
<span class="line"><span style="color:#A6ACCD;">  ref=&quot;goodNumberSlot&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  :cols=&quot;6&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  item-style=&quot;font-size:60px;font-weight:700;&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">/&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// js</span></span>
<span class="line"><span style="color:#A6ACCD;">const numbers = ref(&quot;666666&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">const goodNumberSlot = ref&lt;SlotMachineInstance&gt;();</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function getGoodNumber() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (!/^\\d{6}$/.test(numbers.value)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    Toast(&quot;\u9753\u53F7\u5E94\u4E3A6\u4F4D\u6570\u5B57 ~&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    return;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  goodNumberSlot.value?.reset(false).then(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    goodNumberSlot</span></span>
<span class="line"><span style="color:#A6ACCD;">      .value?</span></span>
<span class="line"><span style="color:#A6ACCD;">      .scroll(numbers.value.split(&quot;&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">      .map((n) =&gt; Number(n)));</span></span>
<span class="line"><span style="color:#A6ACCD;">  });</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>\u8001\u864E\u673A</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;!-- html --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;mo-button size=&quot;small&quot; type=&quot;success&quot; @click=&quot;getSlotMachine&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &gt;\u8001\u864E\u673A&lt;/mo-button</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;div class=&quot;slot-machine-wrapper&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;mo-slot-machine</span></span>
<span class="line"><span style="color:#A6ACCD;">    ref=&quot;slotMachine&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    :type=&quot;1&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    :cols=&quot;3&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    :items=&quot;items&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    item-style=&quot;max-width:150px;max-height:150px;&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// js</span></span>
<span class="line"><span style="color:#A6ACCD;">const slotMachine = ref&lt;SlotMachineInstance&gt;();</span></span>
<span class="line"><span style="color:#A6ACCD;">const items = [</span></span>
<span class="line"><span style="color:#A6ACCD;">  // pass</span></span>
<span class="line"><span style="color:#A6ACCD;">];</span></span>
<span class="line"><span style="color:#A6ACCD;">function getSlotMachine() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u6A21\u62DF\u7ED3\u679C</span></span>
<span class="line"><span style="color:#A6ACCD;">  const result = new Array(7)</span></span>
<span class="line"><span style="color:#A6ACCD;">    .fill(0)</span></span>
<span class="line"><span style="color:#A6ACCD;">    .map((n, i) =&gt; i)</span></span>
<span class="line"><span style="color:#A6ACCD;">    .sort(() =&gt; Math.random() - 0.5)</span></span>
<span class="line"><span style="color:#A6ACCD;">    .slice(0, 3);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">  slotMachine.value?.reset(false).then(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    slotMachine.value?.scroll(result);</span></span>
<span class="line"><span style="color:#A6ACCD;">  });</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h2><h3 id="props" tabindex="-1">props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u53C2\u6570</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td style="text-align:left;"><code>type</code></td><td style="text-align:left;">\u7C7B\u578B, 0-\u6587\u5B57 1-\u56FE\u7247</td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;"><code>0</code></td></tr><tr><td style="text-align:left;"><code>items</code></td><td style="text-align:left;">\u6EDA\u52A8\u7684\u7269\u54C1, \u6587\u5B57\u6216\u56FE\u7247url</td><td style="text-align:left;"><code>string[]</code></td><td style="text-align:left;"><code>[&quot;0&quot;, &quot;1&quot;, &quot;2&quot;, &quot;3&quot;, &quot;4&quot;, &quot;5&quot;, &quot;6&quot;, &quot;7&quot;, &quot;8&quot;, &quot;9&quot;]</code></td></tr><tr><td style="text-align:left;"><code>width</code></td><td style="text-align:left;">\u5BBD\u5EA6</td><td style="text-align:left;"><code>string</code> <code>number</code></td><td style="text-align:left;"><code>100%</code></td></tr><tr><td style="text-align:left;"><code>height</code></td><td style="text-align:left;">\u9AD8\u5EA6</td><td style="text-align:left;"><code>string</code> <code>number</code></td><td style="text-align:left;"><code>100%</code></td></tr><tr><td style="text-align:left;"><code>cols</code></td><td style="text-align:left;">\u5143\u7D20\u5217\u6570</td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;"><code>3</code></td></tr><tr><td style="text-align:left;"><code>rows</code></td><td style="text-align:left;">\u6EDA\u52A8\u884C\u6570</td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;"><code>Math.round(items.length * 1.6)</code></td></tr><tr><td style="text-align:left;"><code>result</code></td><td style="text-align:left;">\u7ED3\u679C</td><td style="text-align:left;"><code>number[]</code></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;"><code>default</code></td><td style="text-align:left;">\u521D\u59CB\u663E\u793A\u5143\u7D20</td><td style="text-align:left;"><code>number[]</code></td><td style="text-align:left;">\u9ED8\u8BA4<code>items[0]</code></td></tr><tr><td style="text-align:left;"><code>animationDuration</code></td><td style="text-align:left;">\u6EDA\u52A8\u65F6\u95F4</td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;"><code>2</code></td></tr><tr><td style="text-align:left;"><code>itemStyle</code></td><td style="text-align:left;">\u5143\u7D20\u6837\u5F0F</td><td style="text-align:left;"><code>string, object</code></td><td style="text-align:left;"></td></tr></tbody></table><h3 id="\u65B9\u6CD5" tabindex="-1">\u65B9\u6CD5 <a class="header-anchor" href="#\u65B9\u6CD5" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u65B9\u6CD5\u540D</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u53C2\u6570</th><th style="text-align:left;">\u8FD4\u56DE\u503C</th></tr></thead><tbody><tr><td style="text-align:left;"><code>scroll</code></td><td style="text-align:left;">\u5F00\u59CB\u6EDA\u52A8</td><td style="text-align:left;"><code>result:number[]</code>, props.result \u6216 result\u53C2\u6570\u81F3\u5C11\u9700\u8981\u4E00\u4E2A</td><td style="text-align:left;"><code>Promise&lt;any&gt;</code></td></tr><tr><td style="text-align:left;"><code>reset</code></td><td style="text-align:left;">\u91CD\u7F6E</td><td style="text-align:left;"><code>useDefault:boolean = true</code>, \u662F\u5426\u4EE5\u521D\u59CB\u503C\u91CD\u7F6E, \u5426\u5219\u4F7F\u7528\u4E0A\u6B21\u7ED3\u679C\u91CD\u7F6E</td><td style="text-align:left;"><code>Promise&lt;any&gt;</code></td></tr></tbody></table>`,16),o=[a];function p(c,d,i,r,y,u){return e(),s("div",null,o)}const g=t(l,[["render",p]]);export{A as __pageData,g as default};
