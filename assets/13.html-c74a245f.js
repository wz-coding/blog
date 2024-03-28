import{_ as n,o as s,c as a,f as p}from"./app-aee6fc29.js";const t={},e=p(`<h1 id="闭包" tabindex="-1"><a class="header-anchor" href="#闭包" aria-hidden="true">#</a> 闭包</h1><p>我们会在开发某些需求时用到 <strong>闭包</strong>，它可以通过函数来访问或保存一些局部变量，这种特性在某些情况下会非常有用</p><h2 id="什么是闭包" tabindex="-1"><a class="header-anchor" href="#什么是闭包" aria-hidden="true">#</a> 什么是闭包</h2><p><strong>闭包</strong> 就是在函数内部嵌套了函数，并且这个嵌套的函数引用了它外部的变量（词法环境），嵌套的函数与它引用的变量（词法环境）共同组合就形成了闭包</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">let</span> name <span class="token operator">=</span> <span class="token string">&quot;foo&quot;</span><span class="token punctuation">;</span>  <span class="token comment">//name是在foo函数内部定义的一个局部变量 </span>
    <span class="token keyword">function</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>  <span class="token comment">//getName函数是在foo函数内部定义的一个函数</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>  <span class="token comment">//getName函数内部引用了外部函数foo中定义的变量，形成了闭包</span>
    <span class="token punctuation">}</span>
    <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//foo</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的例子就是一个典型的闭包</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">baz</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">let</span> name <span class="token operator">=</span> <span class="token string">&quot;baz&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">function</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;baz&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">baz</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//baz</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，虽然在函数 <code>baz</code> 内部定义了函数，但是内部的 <code>getName</code> 函数并没有引用外部的变量，就无法形成闭包</p><h2 id="闭包的作用" tabindex="-1"><a class="header-anchor" href="#闭包的作用" aria-hidden="true">#</a> 闭包的作用</h2><p>闭包的作用主要有以下两点：</p><ul><li>隔离或隐藏变量，防止变量被全局污染</li><li>读取函数内部定义的变量</li></ul><h3 id="避免变量污染" tabindex="-1"><a class="header-anchor" href="#避免变量污染" aria-hidden="true">#</a> 避免变量污染</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>  <span class="token comment">//定义了一个全局变量num</span>
<span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    num<span class="token operator">++</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//2</span>
<span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的代码中，我们定义了一个全局变量 <code>num</code> 与一个能够使 <code>num</code> 增加的函数 <code>add</code> ，虽然每次调用 <code>add</code> 方法时都会使 <code>num</code> 的值增加，但是如果也有其他的函数中同样引用了全局变量 <code>num</code> ，那么这样使用全局变量就会变得十分不安全，所以我们可以使用闭包来修改上面的方法，避免变量污染</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>  <span class="token comment">//定义了一个全局变量num</span>
<span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">let</span> val <span class="token operator">=</span> num<span class="token punctuation">;</span>   <span class="token comment">//将num的值赋值给add函数内部定义的变量val</span>
    <span class="token keyword">function</span> <span class="token function">plus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>  <span class="token comment">//定义一个新的函数plus来使val增加（此时形成了闭包）</span>
        val<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> val<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//将plus函数作为add函数的结果返回，这样就可以将val的值保持在内存中，也可以从外部访问到val的值了</span>
    <span class="token keyword">return</span> plus<span class="token punctuation">;</span>  
<span class="token punctuation">}</span>
<span class="token keyword">const</span> newAdd <span class="token operator">=</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">newAdd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//2 //实际上运行的是plus函数</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">newAdd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//3</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//1   //全局变量num并没有受到干扰</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="模拟私有方法" tabindex="-1"><a class="header-anchor" href="#模拟私有方法" aria-hidden="true">#</a> 模拟私有方法</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">car</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>         <span class="token comment">//定义一辆汽车</span>
    <span class="token keyword">let</span> speed <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>    <span class="token comment">//定义汽车速度相关的属性和方法</span>
    <span class="token keyword">function</span> <span class="token function">speedChange</span><span class="token punctuation">(</span><span class="token parameter">_speed</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        speed <span class="token operator">+=</span> _speed<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token function-variable function">speedUp</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">up</span><span class="token punctuation">)</span><span class="token punctuation">{</span>  <span class="token comment">//汽车加速方法</span>
             <span class="token function">speedChange</span><span class="token punctuation">(</span>up<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function-variable function">slowDown</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">slow</span><span class="token punctuation">)</span><span class="token punctuation">{</span>  <span class="token comment">//汽车减速方法</span>
            <span class="token function">speedChange</span><span class="token punctuation">(</span><span class="token operator">-</span>slow<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function-variable function">speedNow</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>  <span class="token comment">//汽车当前速度</span>
            <span class="token keyword">return</span> speed<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> car1 <span class="token operator">=</span> <span class="token function">car</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// speed:100</span>
<span class="token keyword">const</span> car2 <span class="token operator">=</span> <span class="token function">car</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// speed:100</span>

car1<span class="token punctuation">.</span><span class="token function">speedUp</span><span class="token punctuation">(</span><span class="token number">60</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// 160</span>
car2<span class="token punctuation">.</span><span class="token function">speedUp</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// 200</span>

car1<span class="token punctuation">.</span><span class="token function">slowDown</span><span class="token punctuation">(</span><span class="token number">80</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 80</span>
car2<span class="token punctuation">.</span><span class="token function">slowDown</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 150</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>car1<span class="token punctuation">.</span><span class="token function">speedNow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 80</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>car2<span class="token punctuation">.</span><span class="token function">speedNow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 150</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的例子中我们通过 <code>car</code> 函数创建了两个“汽车”对象，虽然都是通过同一个函数创建的对象，但是它们各自都有自己的“速度”，并且各自操作“速度”属性不会相互干扰，是因为我们在 <code>car</code> 函数内部创建了闭包 <code>speedChange</code>函数（通过 <code>speedChange</code> 函数来模拟 <code>car</code> 的私有方法），因为闭包都是引用它自身词法环境中的变量 <code>speed</code>，所以它们相互独立，互不干扰</p><h2 id="闭包的缺陷" tabindex="-1"><a class="header-anchor" href="#闭包的缺陷" aria-hidden="true">#</a> 闭包的缺陷</h2><p>闭包虽然可以使我们能够很方便的将变量保存在局部作用域中，避免了全局污染，但是它也会消耗内存，严重时甚至可能造成内存泄露的问题</p><p>通过前面的 <strong>执行上下文</strong> 章节我们知道函数在运行时会在 <strong>栈</strong> 中创建自己的函数执行上下文，在函数运行完成后出栈，但是如果在函数内部创建了闭包，外部函数的变量被闭包引用，那么就会导致外部函数的执行上下文保持在栈中，并且外部函数中的变量也无法被垃圾回收机制销毁。试想一下，栈的内存容量使有限的，如果过多的使用闭包，可能就会造成栈内存被过多的占用从而导致内存泄露的问题</p>`,21),o=[e];function c(l,u){return s(),a("div",null,o)}const d=n(t,[["render",c],["__file","13.html.vue"]]);export{d as default};
