import{_ as n,o as a,c as s,d as e}from"./app-5a641d70.js";const t={},c=e(`<h1 id="raf-定时器" tabindex="-1"><a class="header-anchor" href="#raf-定时器" aria-hidden="true">#</a> raf 定时器</h1><h2 id="定时器" tabindex="-1"><a class="header-anchor" href="#定时器" aria-hidden="true">#</a> 定时器</h2><p>在 JavaScript 中，有两种主要的定时器函数：<code>setTimeout()</code> 和 <code>setInterval()</code>。</p><ul><li><code>setTimeout()</code>：在指定的毫秒数后执行一段代码，是一次性的定时器，只会执行一次。<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;这个消息将在 2000 毫秒（2 秒）后打印出来&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><code>setInterval()</code>：每隔指定的毫秒数重复执行一段代码，是重复的定时器，会一直执行，直到被清除或者页面被关闭。<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;这个消息将每隔 1000 毫秒（1 秒）打印一次&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p>以上的两种定时器使用起来十分方便，但是由于它们是异步任务，会被加入到任务队列中等待执行，而且执行的时间间隔受到事件循环机制的影响，所以在某些情况下，这些定时器执行回调的时间可能会出现波动，导致无法精确控制执行间隔时间。</p><h2 id="requestanimationframe" tabindex="-1"><a class="header-anchor" href="#requestanimationframe" aria-hidden="true">#</a> requestAnimationFrame</h2><p><code>requestAnimationFrame()</code> 是用于在浏览器下一次重绘之前请求执行一个动画帧的方法。</p>`,7),o=[c];function p(i,u){return a(),s("div",null,o)}const r=n(t,[["render",p],["__file","04.html.vue"]]);export{r as default};
