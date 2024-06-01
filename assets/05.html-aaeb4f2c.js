import{_ as a,r as p,o as t,c as o,b as e,w as c,d as l,e as n,f as u}from"./app-de30dea3.js";const i={},r=l(`<h1 id="数据克隆" tabindex="-1"><a class="header-anchor" href="#数据克隆" aria-hidden="true">#</a> 数据克隆</h1><p>数据克隆（数据拷贝）是我们在开发当中经常会遇到的需求，它可以对原始数据（通常是引用类型的数据）进行复制，得到一份与原始数据相同的 ‘复制体’ ，从而可以让我们放心大胆的对这个 复制体 进行各种操作而不用担心更改原始数据的结构，大大方便了我们的开发工作。</p><p>数据克隆有两种形式：</p><ul><li>浅层克隆（浅拷贝）：浅层克隆只会复制对象的顶层属性。如果对象的属性值是对象或者数组（引用类型），那么浅克隆会复制这个属性的引用，而不是创建一个新的对象或者数组。这表示如果你改变了克隆对象中的一个对象或数组属性，原始对象中的对应属性也会被改变。</li><li>深层克隆（深拷贝）：深层克隆不仅会复制对象的顶层属性，还会递归地复制所有的子对象和数组。这表示克隆的对象和原始对象在内存中是完全独立的，改变克隆对象不会影响到原始对象。</li></ul><h2 id="浅层克隆" tabindex="-1"><a class="header-anchor" href="#浅层克隆" aria-hidden="true">#</a> 浅层克隆</h2><p>在 JS 中，实现浅层克隆的方式有以下几种：</p><ul><li><code>Object.assign()</code><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">c</span><span class="token operator">:</span><span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span><span class="token number">1</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> clone <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>clone<span class="token punctuation">)</span>  <span class="token comment">// { a: 1, b: 2, c:{ a:1 } }</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>clone<span class="token punctuation">.</span>c <span class="token operator">===</span> obj<span class="token punctuation">.</span>c<span class="token punctuation">)</span>  <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><code>扩展运算符（…）</code><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">c</span><span class="token operator">:</span><span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span><span class="token number">1</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> clone <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token operator">...</span>obj<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>clone<span class="token punctuation">)</span>  <span class="token comment">// { a: 1, b: 2, c:{ a:1 } }</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>clone<span class="token punctuation">.</span>c <span class="token operator">===</span> obj<span class="token punctuation">.</span>c<span class="token punctuation">)</span>  <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><code>Array.prototype.slice()</code><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span><span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> clone <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">silce</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>clone<span class="token punctuation">)</span>  <span class="token comment">// [1, 2, 3, { a:1 }]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>clone<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">===</span> arr<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span>  <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="深层克隆" tabindex="-1"><a class="header-anchor" href="#深层克隆" aria-hidden="true">#</a> 深层克隆</h2><p>在 JS 中，实现深层克隆的方法有以下几种：</p><ul><li><code>JSON.parse() 和 JSON.stringify()</code><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> clone <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>clone<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// { a: 1, b: { c: 2 } }</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>clone<span class="token punctuation">.</span>b <span class="token operator">===</span> obj<span class="token punctuation">.</span>b<span class="token punctuation">)</span>  <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><code>structuredClone()</code><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code> <span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
 <span class="token keyword">let</span> clone <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>clone<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// { a: 1, b: { c: 2 } }</span>
 console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>clone<span class="token punctuation">.</span>b <span class="token operator">===</span> obj<span class="token punctuation">.</span>b<span class="token punctuation">)</span>  <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><code>递归实现</code><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code> <span class="token comment">//设置缓存</span>
 <span class="token keyword">const</span> cache <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WeakMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
 <span class="token keyword">function</span> <span class="token function">deepClone</span><span class="token punctuation">(</span><span class="token parameter">target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>target <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> <span class="token keyword">typeof</span> target <span class="token operator">!==</span> <span class="token string">&#39;object&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token keyword">return</span> target
    <span class="token punctuation">}</span>
    <span class="token comment">// 检查是否存在缓存，有缓存则直接使用缓存</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>cache<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token keyword">return</span> cache<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">let</span> clone <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token comment">//设置克隆对象的原型与原始数据的原型保持一致</span>
    Object<span class="token punctuation">.</span><span class="token function">setPrototypeOf</span><span class="token punctuation">(</span>clone<span class="token punctuation">,</span> Object<span class="token punctuation">.</span><span class="token function">getPrototypeOf</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">)</span>
    cache<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> clone<span class="token punctuation">)</span>
    <span class="token comment">// 递归复制属性</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">in</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token keyword">if</span> <span class="token punctuation">(</span>target<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
             clone<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">deepClone</span><span class="token punctuation">(</span>target<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span>
       <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> clone
 <span class="token punctuation">}</span>

 <span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
 <span class="token keyword">let</span> clone <span class="token operator">=</span> <span class="token function">deepClone</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
 console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>clone<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// { a: 1, b: { c: 2 } }</span>
 console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>clone<span class="token punctuation">.</span>b <span class="token operator">===</span> obj<span class="token punctuation">.</span>b<span class="token punctuation">)</span>  <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul>`,10),k=n("p",null,[n("code",null,"JSON.parse() 和 JSON.stringify()"),u(" 无法处理原始对象中存在循环引用的情况")],-1);function d(v,m){const s=p("Minfo");return t(),o("div",null,[r,e(s,null,{default:c(()=>[k]),_:1})])}const y=a(i,[["render",d],["__file","05.html.vue"]]);export{y as default};