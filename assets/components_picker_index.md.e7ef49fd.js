import{_ as s,c as n,o as a,a as l}from"./app.fcacde83.js";const d=JSON.parse('{"title":"Picker \u9009\u62E9\u5668","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4ECB\u7ECD","slug":"\u4ECB\u7ECD","link":"#\u4ECB\u7ECD","children":[]},{"level":2,"title":"\u5F15\u5165","slug":"\u5F15\u5165","link":"#\u5F15\u5165","children":[]},{"level":2,"title":"\u4EE3\u7801\u6F14\u793A","slug":"\u4EE3\u7801\u6F14\u793A","link":"#\u4EE3\u7801\u6F14\u793A","children":[]},{"level":2,"title":"API","slug":"api","link":"#api","children":[{"level":3,"title":"props","slug":"props","link":"#props","children":[]},{"level":3,"title":"columns\u6570\u636E\u7ED3\u6784","slug":"columns\u6570\u636E\u7ED3\u6784","link":"#columns\u6570\u636E\u7ED3\u6784","children":[]},{"level":3,"title":"Events","slug":"events","link":"#events","children":[]},{"level":3,"title":"Slots","slug":"slots","link":"#slots","children":[]}]}],"relativePath":"components/picker/index.md"}'),p={name:"components/picker/index.md"},e=l(`<h1 id="picker-\u9009\u62E9\u5668" tabindex="-1">Picker \u9009\u62E9\u5668 <a class="header-anchor" href="#picker-\u9009\u62E9\u5668" aria-hidden="true">#</a></h1><h2 id="\u4ECB\u7ECD" tabindex="-1">\u4ECB\u7ECD <a class="header-anchor" href="#\u4ECB\u7ECD" aria-hidden="true">#</a></h2><p>\u63D0\u4F9B\u591A\u4E2A\u9009\u9879\u96C6\u5408\u4F9B\u9009\u62E9\uFF0C\u652F\u6301\u5355\u5217\u9009\u62E9\u548C\u591A\u5217\u7EA7\u8054\uFF0C\u901A\u5E38\u4E0Epopup\u914D\u5408\u4F7F\u7528\u3002</p><h2 id="\u5F15\u5165" tabindex="-1">\u5F15\u5165 <a class="header-anchor" href="#\u5F15\u5165" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// \u5165\u53E3\u5F15\u5165</span></span>
<span class="line"><span style="color:#A6ACCD;">import { createApp } from &#39;vue&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { MoPicker } from &#39;moxui&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const app = createApp();</span></span>
<span class="line"><span style="color:#A6ACCD;">app.use(MoPicker);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u5355\u6587\u4EF6\u7EC4\u4EF6\u5F15\u5165</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;!-- script:setup --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { MoPicker } from &#39;moxui&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;!-- template --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;mo-picker :columns=&quot;columns&quot;&gt;&lt;/mo-picker&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u4EE3\u7801\u6F14\u793A" tabindex="-1">\u4EE3\u7801\u6F14\u793A <a class="header-anchor" href="#\u4EE3\u7801\u6F14\u793A" aria-hidden="true">#</a></h2><p><strong>\u5355\u5217</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;mo-picker</span></span>
<span class="line"><span style="color:#A6ACCD;">  :toolbar=&quot;{ title: &#39;\u6709\u6807\u9898&#39; }&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  :columns=&quot;days&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  :default-index=&quot;5&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  @confirm=&quot;onConfirm&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  @change=&quot;onChange&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt;&lt;/mo-picker&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const days = [</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;Monday&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;Tuesday&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;Wednesday&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;Thursday&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;Friday&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;Saturday&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;Sunday&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">];</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u65E0\u6807\u9898</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;mo-picker</span></span>
<span class="line"><span style="color:#A6ACCD;">  :columns=&quot;days&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  :default-index=&quot;5&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  @confirm=&quot;onConfirm&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  @change=&quot;onChange&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt;&lt;/mo-picker&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>\u591A\u5217</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;mo-picker</span></span>
<span class="line"><span style="color:#A6ACCD;">  :toolbar=&quot;{ title: &#39;\u661F\u671F\u9009\u62E9&#39; }&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  :columns=&quot;week&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  @confirm=&quot;onConfirm&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  @change=&quot;onChange&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt;&lt;/mo-picker&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const week = [</span></span>
<span class="line"><span style="color:#A6ACCD;">  {</span></span>
<span class="line"><span style="color:#A6ACCD;">    values: [</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;Monday&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;Tuesday&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;Wednesday&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;Thursday&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;Friday&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;Saturday&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;Sunday&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    ],</span></span>
<span class="line"><span style="color:#A6ACCD;">    defaultIndex: 4,</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  {</span></span>
<span class="line"><span style="color:#A6ACCD;">    values: [&quot;morning&quot;, &quot;afternoon&quot;, &quot;night&quot;],</span></span>
<span class="line"><span style="color:#A6ACCD;">    defaultIndex: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">];</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>\u7EA7\u8054</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;mo-picker</span></span>
<span class="line"><span style="color:#A6ACCD;">  :toolbar=&quot;{ title: &#39;\u5730\u533A\u9009\u62E9&#39; }&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  :columns=&quot;provinces&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  @confirm=&quot;onConfirm&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  @change=&quot;onChange&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt;&lt;/mo-picker&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const provinces = [</span></span>
<span class="line"><span style="color:#A6ACCD;">  {</span></span>
<span class="line"><span style="color:#A6ACCD;">    text: &quot;\u5E7F\u4E1C\u7701&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    children: [</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        text: &quot;\u5E7F\u5DDE\u5E02&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        children: [</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            text: &quot;\u5929\u6CB3\u533A&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">          },</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            text: &quot;\u9EC4\u57D4\u533A&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">          },</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            text: &quot;\u82B1\u90FD\u533A&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">          },</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            text: &quot;\u4ECE\u5316\u533A&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">          },</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            text: &quot;\u767D\u4E91\u533A&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">          },</span></span>
<span class="line"><span style="color:#A6ACCD;">        ],</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        text: &quot;\u4F5B\u5C71\u5E02&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        children: [</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            text: &quot;\u5357\u6D77\u533A&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">          },</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            text: &quot;\u987A\u5FB7\u533A&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">          },</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            text: &quot;\u7985\u57CE\u533A&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">          },</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            text: &quot;\u4E09\u6C34\u533A&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">          },</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            text: &quot;\u9AD8\u660E\u533A&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">          },</span></span>
<span class="line"><span style="color:#A6ACCD;">        ],</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        text: &quot;\u73E0\u6D77\u5E02&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        children: [</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            text: &quot;\u6597\u95E8\u533A&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">          },</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            text: &quot;\u9999\u6D32\u533A&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">          },</span></span>
<span class="line"><span style="color:#A6ACCD;">        ],</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">    ],</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  {</span></span>
<span class="line"><span style="color:#A6ACCD;">    text: &quot;\u6C5F\u897F\u7701&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    active: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">    children: [</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        text: &quot;\u5357\u660C\u5E02&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        children: [</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            text: &quot;\u5357\u660C\u53BF&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">          },</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            text: &quot;\u7EA2\u8C37\u6EE9\u65B0\u533A&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">          },</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            text: &quot;\u897F\u6E56\u533A&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">          },</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            text: &quot;\u9752\u5C71\u6E56\u533A&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">          },</span></span>
<span class="line"><span style="color:#A6ACCD;">        ],</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        text: &quot;\u5409\u5B89\u5E02&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        active: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">        children: [</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            text: &quot;\u65B0\u5E72\u53BF&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            active: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">          },</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            text: &quot;\u5409\u6C34\u53BF&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">          },</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            text: &quot;\u5CE1\u6C5F\u53BF&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">          },</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            text: &quot;\u5409\u5DDE\u533A&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">          },</span></span>
<span class="line"><span style="color:#A6ACCD;">        ],</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        text: &quot;\u5B9C\u6625\u5E02&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        children: [</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            text: &quot;\u6A1F\u6811\u5E02&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">          },</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            text: &quot;\u4E30\u57CE\u5E02&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">          },</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            text: &quot;\u9AD8\u5B89\u5E02&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">          },</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            text: &quot;\u8881\u5DDE\u533A&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">          },</span></span>
<span class="line"><span style="color:#A6ACCD;">        ],</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">    ],</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  {</span></span>
<span class="line"><span style="color:#A6ACCD;">    text: &quot;\u6D59\u6C5F\u7701&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    children: [</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        text: &quot;\u676D\u5DDE\u5E02&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        children: [</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            text: &quot;\u4E0A\u57CE\u533A&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">          },</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            text: &quot;\u897F\u6E56\u533A&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">          },</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            text: &quot;\u6EE8\u6C5F\u533A&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">          },</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            text: &quot;\u62F1\u5885\u533A&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">          },</span></span>
<span class="line"><span style="color:#A6ACCD;">        ],</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        text: &quot;\u5B81\u6CE2\u5E02&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        children: [</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            text: &quot;\u6D77\u66D9\u533A&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">          },</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            text: &quot;\u6C5F\u5317\u533A&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">          },</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            text: &quot;\u9547\u6D77\u533A&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">          },</span></span>
<span class="line"><span style="color:#A6ACCD;">        ],</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">    ],</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">];</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>\u914D\u5408popup\u4F7F\u7528</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;teleport to=&quot;body&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;mo-popup </span></span>
<span class="line"><span style="color:#A6ACCD;">    v-model:show=&quot;showPicker&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    position=&quot;bottom&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    mask-click-close</span></span>
<span class="line"><span style="color:#A6ACCD;">  &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div class=&quot;picker-wrapper&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;mo-picker</span></span>
<span class="line"><span style="color:#A6ACCD;">        :toolbar=&quot;{ title: &#39;\u5730\u533A\u9009\u62E9&#39; }&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        :columns=&quot;provinces&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        @confirm=&quot;onConfirm&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        @change=&quot;onChange&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        @cancel=&quot;showPicker = false&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &gt;&lt;/mo-picker&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/mo-popup&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/teleport&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import { ref } from &quot;vue&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { MoPicker, MoPopup, Toast } from &quot;moxui&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const showPicker = ref(false);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function onConfirm(</span></span>
<span class="line"><span style="color:#A6ACCD;">  values: string | number | Array&lt;string | number&gt;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  indexes: number | number[]</span></span>
<span class="line"><span style="color:#A6ACCD;">) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  showPicker.value = false;</span></span>
<span class="line"><span style="color:#A6ACCD;">  Toast(</span></span>
<span class="line"><span style="color:#A6ACCD;">    \`confirm--- values: \${JSON.stringify(values)},</span></span>
<span class="line"><span style="color:#A6ACCD;">    indexes: \${JSON.stringify(</span></span>
<span class="line"><span style="color:#A6ACCD;">      indexes</span></span>
<span class="line"><span style="color:#A6ACCD;">    )}\`</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function onChange(</span></span>
<span class="line"><span style="color:#A6ACCD;">  values: string | number | Array&lt;string | number&gt;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  indexes: number | number[]</span></span>
<span class="line"><span style="color:#A6ACCD;">) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  Toast(</span></span>
<span class="line"><span style="color:#A6ACCD;">    \`change--- values: \${JSON.stringify(values)},</span></span>
<span class="line"><span style="color:#A6ACCD;">    indexes: \${JSON.stringify(</span></span>
<span class="line"><span style="color:#A6ACCD;">      indexes</span></span>
<span class="line"><span style="color:#A6ACCD;">    )}\`</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h2><h3 id="props" tabindex="-1">props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u53C2\u6570</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td style="text-align:left;"><code>toolbar</code></td><td style="text-align:left;">\u6807\u9898\u680F\u914D\u7F6E, \u5305\u542B<code>toolbar slot</code>\u65F6\u65E0\u6548</td><td style="text-align:left;"><code>{ title: string; cancelText?: string; confirmText?: string; }</code></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;"><code>defaultIndex</code></td><td style="text-align:left;">\u5355\u5217\u4E0B\u7684\u521D\u59CB\u503C</td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;"><code>0</code></td></tr><tr><td style="text-align:left;"><code>itemHeight</code></td><td style="text-align:left;">\u9009\u9879\u9AD8\u5EA6, \u652F\u6301px vw number</td><td style="text-align:left;"><code>string</code> <code>number</code></td><td style="text-align:left;"><code>98</code></td></tr><tr><td style="text-align:left;"><code>columns</code></td><td style="text-align:left;">\u4F9B\u9009\u62E9\u7684\u503C</td><td style="text-align:left;">\u4E0B\u65B9\u8BE6\u7EC6\u8BF4\u660E</td><td style="text-align:left;">\u5FC5\u586B</td></tr><tr><td style="text-align:left;"><code>visibleCount</code></td><td style="text-align:left;">\u663E\u793A\u7684\u9009\u9879\u6570</td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;"><code>5</code></td></tr><tr><td style="text-align:left;"><code>inertialDuration</code></td><td style="text-align:left;">\u60EF\u6027\u6EDA\u52A8\u52A8\u753B\u65F6\u957F, \u5355\u4F4Dms</td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;"><code>1000</code></td></tr></tbody></table><h3 id="columns\u6570\u636E\u7ED3\u6784" tabindex="-1">columns\u6570\u636E\u7ED3\u6784 <a class="header-anchor" href="#columns\u6570\u636E\u7ED3\u6784" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">interface Column {</span></span>
<span class="line"><span style="color:#A6ACCD;">  text: string | number;</span></span>
<span class="line"><span style="color:#A6ACCD;">  active?: boolean;</span></span>
<span class="line"><span style="color:#A6ACCD;">  children?: Column[];</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">type Columns = Array&lt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  | string</span></span>
<span class="line"><span style="color:#A6ACCD;">  | number</span></span>
<span class="line"><span style="color:#A6ACCD;">  | { values: Array&lt;string | number&gt;; defaultIndex: number }</span></span>
<span class="line"><span style="color:#A6ACCD;">  | Column</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h3><p><strong>\u591A\u5217\u65F6\u56DE\u8C03\u53C2\u6570\u4E3A\u6570\u7EC4</strong></p><table><thead><tr><th style="text-align:left;">\u4E8B\u4EF6\u540D</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td style="text-align:left;"><code>cancel</code></td><td style="text-align:left;">\u70B9\u51FB\u53D6\u6D88\u6309\u94AE</td><td style="text-align:left;"><code>values:string|number|Array&lt;sttring|number&gt;,</code> <code>indexes:number|number[]</code></td></tr><tr><td style="text-align:left;"><code>change</code></td><td style="text-align:left;">\u6EDA\u52A8\u5207\u6362</td><td style="text-align:left;"><code>values:string|number|Array&lt;sttring|number&gt;,</code> <code>indexes:number|number[]</code></td></tr><tr><td style="text-align:left;"><code>confirm</code></td><td style="text-align:left;">\u70B9\u51FB\u786E\u8BA4\u6309\u94AE</td><td style="text-align:left;"><code>values:string|number|Array&lt;sttring|number&gt;,</code> <code>indexes:number|number[]</code></td></tr></tbody></table><h3 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u540D\u79F0</th><th style="text-align:left;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:left;"><code>toolbar</code></td><td style="text-align:left;">\u6807\u9898\u680F</td></tr></tbody></table>`,30),t=[e];function o(c,C,A,r,i,y){return a(),n("div",null,t)}const D=s(p,[["render",o]]);export{d as __pageData,D as default};
