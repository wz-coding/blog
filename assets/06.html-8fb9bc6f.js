import{_ as l,r as c,o as i,c as d,b as n,w as t,f as p,d as s,e as a}from"./app-aee6fc29.js";const u={},r=p(`<h1 id="数据类型" tabindex="-1"><a class="header-anchor" href="#数据类型" aria-hidden="true">#</a> 数据类型</h1><p>在 JavaScript 中，共有 8 种数据类型，其中 7 种基本类型，1 种引用类型，它们分别是：</p><ul><li>基本类型 <ul><li><code>null</code>：空值，表示不存在</li><li><code>undefined</code>：未定义，表示未定义变量的初始值</li><li><code>Boolean</code>：布尔值，有 2 个值（<code>true</code> 和 <code>false</code>）</li><li><code>String</code>：字符串，表示文本值的字符序列</li><li><code>Number</code>：数字，表示整数或浮点数</li><li><code>BigInt</code>：非常大的整数，可以表示任意大的整数</li><li><code>Symbol</code>：实例唯一且不能改变</li></ul></li><li>引用类型 <ul><li><code>Object</code>：对象</li></ul></li></ul><h2 id="null" tabindex="-1"><a class="header-anchor" href="#null" aria-hidden="true">#</a> null</h2><p>在 JavaScript 中，<code>null</code> 是一个原始值，表示没有任何对象值。它是 JavaScript 的假值之一，意味着在布尔上下文中被视为假。例如，下面的代码将输出 “null is falsy”</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// true</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;null is falsy&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// null is falsy</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="undefined" tabindex="-1"><a class="header-anchor" href="#undefined" aria-hidden="true">#</a> undefined</h2><p>在 JavaScript 中，<code>undefined</code> 是一个原始值，表示一个声明未定义的变量的初始值，或没有实际参数的形式参数。当声明一个变量但未对其进行初始化时，该变量的值为 <code>undefined</code>。同时在 JavaScript 中 <code>undefined</code> 也是假值之一，意味着在布尔上下文中被视为假，例如：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> x
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token comment">//  &quot;undefined&quot;</span>

<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>x<span class="token punctuation">)</span><span class="token punctuation">{</span>  <span class="token comment">// true</span>
    x <span class="token operator">=</span> <span class="token number">2</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> x <span class="token operator">+</span> <span class="token number">2</span> <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// 4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="boolean" tabindex="-1"><a class="header-anchor" href="#boolean" aria-hidden="true">#</a> Boolean</h2><p>在 JavaScript 中，<code>Boolean</code> 表示逻辑值真或假，其取值仅能为 <code>true</code> 或 <code>false</code>，通常与 <code>if</code> 条件语句一起使用，例如：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;x is true&quot;</span><span class="token punctuation">)</span>
  <span class="token comment">// x is true</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;x is false&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以使用 <code>Boolean</code> 函数将其他类型的值转换为布尔值，例如：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token number">5</span>
<span class="token keyword">let</span> y <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Boolean</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span>  <span class="token comment">// true</span>

<span class="token keyword">let</span> m
<span class="token keyword">let</span> n <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Boolean</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>  <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="string" tabindex="-1"><a class="header-anchor" href="#string" aria-hidden="true">#</a> String</h2><p>在 JavaScript 中，<code>String</code> 表示文本的字符序列（字符串）。字符串由零个或多个字符组成，可以使用单引号（&#39;&#39;）、双引号（&quot;&quot;）或反引号（\`\`）定义。例如：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token string">&#39;Hello, world!&#39;</span>
<span class="token keyword">let</span> y <span class="token operator">=</span> <span class="token string">&quot;Hello, world!&quot;</span>
<span class="token keyword">let</span> z <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Hello, world!</span><span class="token template-punctuation string">\`</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>String</code> 还具有许多内置方法，可以用来操作文本数据。例如，可以使用 <code>length</code> 属性获取字符串的长度，或使用 <code>toUpperCase()</code> 方法将字符串转换为大写形式：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token string">&#39;Hello, world!&#39;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">.</span>length<span class="token punctuation">)</span>  <span class="token comment">//  13</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// &quot;HELLO, WORLD!&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19),k={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"},v=p(`<h2 id="number" tabindex="-1"><a class="header-anchor" href="#number" aria-hidden="true">#</a> Number</h2><p>在 JavaScript 中，<code>Number</code> 是一种定义为 64 位双精度浮点型的数字数据类型，表示数值。可以使用字面量语法定义数字，例如：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token number">5</span>
<span class="token keyword">let</span> y <span class="token operator">=</span> <span class="token number">3.14</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>JavaScript 中的所有数字都是双精度浮点数，这意味着它们具有固定的精度和范围。由于这种表示方法的限制，JavaScript 中的数字运算可能会产生舍入误差，例如：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token number">0.1</span><span class="token punctuation">,</span> y <span class="token operator">=</span> <span class="token number">0.2</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> x <span class="token operator">+</span> y <span class="token punctuation">)</span>  <span class="token comment">//  0.30000000000000004</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>除了常规数字之外，<code>Number</code> 类型还有几个特殊值，包括 <code>Infinity</code>、<code>-Infinity</code> 和 <code>NaN</code>（非数字）。可以使用 <code>isFinite()</code> 和 <code>isNaN()</code> 函数检查一个值是否为有限数或非数字，例如：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> m <span class="token operator">=</span> <span class="token number">10</span> <span class="token operator">**</span> <span class="token number">1000</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span>  <span class="token comment">// Infinity</span>

<span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token number">5</span> <span class="token operator">/</span> <span class="token string">&#39;x&#39;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>  <span class="token comment">// NaN</span>

<span class="token keyword">let</span> y <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">/</span> <span class="token number">3</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">isFinite</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment">//  true</span>

<span class="token keyword">let</span> z <span class="token operator">=</span> <span class="token string">&#39;0.5x&#39;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">isNaN</span><span class="token punctuation">(</span>z<span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),m={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number",target:"_blank",rel:"noopener noreferrer"},b=p(`<h2 id="bigint" tabindex="-1"><a class="header-anchor" href="#bigint" aria-hidden="true">#</a> BigInt</h2><p>在 JavaScript 中，<code>BigInt</code> 表示任意精度的整数，与 <code>Number</code> 类型不同，<code>BigInt</code> 可以表示大于 <code>Number.MAX_SAFE_INTEGER</code>（2^53 - 1）或小于 <code>Number.MIN_SAFE_INTEGER</code>（-(2^53 - 1)）的整数</p><p>可以使用 <code>BigInt()</code> 函数或在整数字面量后添加 n 来创建 <code>BigInt</code> 类型的数值。例如：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token function">BigInt</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> y <span class="token operator">=</span> <span class="token number">456n</span>

<span class="token keyword">typeof</span> y  <span class="token comment">// bigint</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>BigInt</code> 在某些方面类似于 <code>Number</code> ，但是也有区别：<code>BigInt</code> 不能用于 <code>Math</code> 对象中的方法；不能和任何 <code>Number</code> 实例混合运算，两者必须转换成同一种类型。在两种类型来回转换时要注意，因为 <code>BigInt</code> 变量在转换成 <code>Number</code> 变量时可能会丢失精度</p>`,5),g={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/BigInt",target:"_blank",rel:"noopener noreferrer"},h=p(`<h2 id="symbol" tabindex="-1"><a class="header-anchor" href="#symbol" aria-hidden="true">#</a> Symbol</h2><p>在 JavaScript 中，<code>Symbol</code> 表示一个独一无二的值，表示唯一的标识符。可以使用 Symbol() 函数创建符号值。例如：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> y <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&#39;description&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">typeof</span> y  <span class="token comment">//  symbol</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由于 <code>Symbol</code> 值都是唯一的，即使它们具有相同的描述。这意味着可以使用符号值作为对象属性的键，以避免命名冲突。例如：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&#39;key&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> y <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&#39;key&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
obj<span class="token punctuation">[</span>x<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;value1&#39;</span>
obj<span class="token punctuation">[</span>y<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;value2&#39;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">//  &quot;value1&quot;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">[</span>y<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">//  &quot;value2&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),f={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol",target:"_blank",rel:"noopener noreferrer"};function y(x,_){const e=c("ExternalLinkIcon"),o=c("Minfo");return i(),d("div",null,[r,n(o,null,{default:t(()=>[s("p",null,[a("更多关于 String 的信息请 "),s("a",k,[a("点击这里"),n(e)])])]),_:1}),v,n(o,null,{default:t(()=>[s("p",null,[a("更多关于 Number 的信息请 "),s("a",m,[a("点击这里"),n(e)])])]),_:1}),b,n(o,null,{default:t(()=>[s("p",null,[a("更多关于 BigInt 的信息请 "),s("a",g,[a("点击这里"),n(e)])])]),_:1}),h,n(o,null,{default:t(()=>[s("p",null,[a("更多关于 Symbol 的信息请 "),s("a",f,[a("点击这里"),n(e)])])]),_:1})])}const w=l(u,[["render",y],["__file","06.html.vue"]]);export{w as default};
