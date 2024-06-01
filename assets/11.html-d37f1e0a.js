import{_ as n,o as s,c as a,d as e}from"./app-de30dea3.js";const o="/blog/assets/image/stack.png",t="/blog/assets/image/heap.png",p={},c=e(`<h1 id="变量存储方式" tabindex="-1"><a class="header-anchor" href="#变量存储方式" aria-hidden="true">#</a> 变量存储方式</h1><p>在JS或其他编程语言中，变量是组成一切的基础，我们通过操作各种各样的变量来实现各种逻辑，那么理解变量以及变量的存储方式可以让我们对JS的学习更加深入</p><h2 id="栈" tabindex="-1"><a class="header-anchor" href="#栈" aria-hidden="true">#</a> 栈</h2><p><strong>栈</strong> 是栈内存（stack）的简称，栈由系统自动分配并自动释放，栈的数据结构遵循先进后出（LIFO）的原则，栈的内存空间相对较小，速度较快，一般用于存放基本类型的数据</p><h2 id="堆" tabindex="-1"><a class="header-anchor" href="#堆" aria-hidden="true">#</a> 堆</h2><p><strong>堆</strong> 是堆内存（heap）的简称，堆由开发人员控制分配与释放，堆的数据结构是无序的，满足键值对（key:value）的存储方式，堆的内存空间不是固定的，速度较慢，一般用于存放引用类型的数据</p><h2 id="基本类型" tabindex="-1"><a class="header-anchor" href="#基本类型" aria-hidden="true">#</a> 基本类型</h2><p>在 JS 中，基本类型包括：<code>null</code>、<code>undefined</code>、<code>Boolean</code>、<code>Number</code>、<code>String</code>、<code>BigInt</code>、<code>Symbol</code>，它们的值都存放于栈内存中</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token string">&quot;aseds&quot;</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token comment">//20</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span> <span class="token comment">//aseds</span>

<span class="token keyword">let</span> c <span class="token operator">=</span> a<span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span> <span class="token comment">//20</span>

c <span class="token operator">=</span> <span class="token string">&quot;123a&quot;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span> <span class="token comment">//123a</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token comment">//20</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+o+`" alt="stack" tabindex="0" loading="lazy"><figcaption>基本类型存储在栈中</figcaption></figure><p>基本类型的数据在创建或者复制时会在栈中开辟出新的内存空间，它们之间都是独立的，互不影响</p><h2 id="引用类型" tabindex="-1"><a class="header-anchor" href="#引用类型" aria-hidden="true">#</a> 引用类型</h2><p>在 JS 中，<code>Object</code>、<code>Array</code>、<code>Function</code> 等类型的数据都是引用类型的数据，它们的值存储在堆中，通过在栈中的地址的引用来访问堆中对应的值</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&quot;jack&quot;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> obj2 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&quot;mike&quot;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj1<span class="token punctuation">)</span> <span class="token comment">// {name:&quot;jack&quot;}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj2<span class="token punctuation">)</span> <span class="token comment">// {name:&quot;mike&quot;}</span>

<span class="token keyword">let</span> obj3 <span class="token operator">=</span> obj2<span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj3<span class="token punctuation">)</span> <span class="token comment">// {name:&quot;mike&quot;}</span>

obj3<span class="token punctuation">.</span>name  <span class="token operator">=</span> <span class="token string">&quot;white&quot;</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj3<span class="token punctuation">)</span> <span class="token comment">// {name:&quot;white&quot;}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj2<span class="token punctuation">)</span> <span class="token comment">// {name:&quot;white&quot;}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+t+'" alt="heap" tabindex="0" loading="lazy"><figcaption>引用类型存储在堆中</figcaption></figure><p>引用类型的数据创建时将值存储在堆中，将自己在堆中的地址保存在栈中，而在复制或者修改引用类型的数据时，实际修改的是堆中的值，栈中保存的地址并没有被修改</p>',16),i=[c];function l(u,r){return s(),a("div",null,i)}const k=n(p,[["render",l],["__file","11.html.vue"]]);export{k as default};