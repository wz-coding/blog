import{_ as i,r as t,o as u,c as r,e as n,f as s,b as a,w as p,d as o}from"./app-998d52ba.js";const k={},d=n("h1",{id:"raf-定时器",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#raf-定时器","aria-hidden":"true"},"#"),s(" raf 定时器")],-1),m=n("h2",{id:"requestanimationframe",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#requestanimationframe","aria-hidden":"true"},"#"),s(" requestAnimationFrame")],-1),v=n("code",null,"requestAnimationFrame()",-1),b=o(`<p><code>requestAnimationFrame()</code> 接收一个回调函数作为参数，回调函数会在浏览器下一次重绘之前被调用。它返回一个整数，代表 <code>requestAnimationFrame()</code> 在任务队列中的 ID 标识，可以使用这个 ID 作为参数调用 <code>window.cancelAnimationFrame()</code> 方法来取消回调函数的执行。回调函数中会被传入一个 <code>timestamp</code> (时间戳) 参数，表示当前开始执行回调的时间。</p><p><code>requestAnimationFrame()</code> 是一次性的，就是说它只会在下一帧中执行传入的回调，不会重复执行，如果想要连续的执行回调，就需要在每一帧中使用 <code>requestAnimationFrame()</code> 方法。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">animate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 动画代码</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;动画帧&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 在下一次重绘之前再次调用 animate</span>
    <span class="token function">requestAnimationFrame</span><span class="token punctuation">(</span>animate<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 启动动画</span>
<span class="token function">requestAnimationFrame</span><span class="token punctuation">(</span>animate<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),y=n("p",null,[n("code",null,"requestAnimationFrame()"),s(" 的执行次数通常是每秒 60 次，即大约 "),n("strong",null,"16.6ms"),s(" 执行一次。这个执行次数通常与浏览器屏幕刷新次数相匹配。它相比于 "),n("code",null,"setTimeout()"),s(" 定时器的优点是：")],-1),f=n("ul",null,[n("li",null,[n("strong",null,"更高的帧率和更流畅的动画"),s("："),n("code",null,"requestAnimationFrame()"),s(" 会在每一帧动画开始时被调用，而且它会自动调整以匹配浏览器的刷新率。这意味着动画会以更高的帧率（通常是 60 帧每秒）运行，从而创建更流畅的动画。")]),n("li",null,[n("strong",null,"更好的性能"),s("："),n("code",null,"requestAnimationFrame()"),s(" 只在浏览器准备好绘制新的帧时才会运行，这可以避免不必要的计算和重绘，从而提高性能。")]),n("li",null,[n("strong",null,"自动的时间间隔"),s("："),n("code",null,"requestAnimationFrame()"),s(" 会自动计算出下一帧的最佳时间间隔，你不需要手动设置时间间隔，这可以避免因为间隔设置不当导致的动画卡顿。")])],-1),w=o(`<h2 id="定时器" tabindex="-1"><a class="header-anchor" href="#定时器" aria-hidden="true">#</a> 定时器</h2><p>在简单了解了 <code>requestAnimationFrame()</code> 的基本用法以及特点后，我们可以利用它的特点来模拟实现 <code>setTimeout()</code> 与 <code>setInterval()</code> 的功能。</p><p>以下是具体实现代码：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Timer</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//记录定时器数据</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>record <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>minInterval <span class="token operator">=</span> <span class="token number">1000</span> <span class="token operator">/</span> <span class="token number">60</span>
    <span class="token punctuation">}</span>
    
    <span class="token function">loop</span><span class="token punctuation">(</span><span class="token parameter">type<span class="token punctuation">,</span> callback<span class="token punctuation">,</span> delay</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token punctuation">[</span><span class="token string">&#39;interval&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;timeout&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>record<span class="token punctuation">[</span>type<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">this</span><span class="token punctuation">.</span>record<span class="token punctuation">[</span>type<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

        <span class="token comment">//记录开始时间</span>
        <span class="token keyword">let</span> startTime <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> record <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//循环执行计算时间间隔</span>
        <span class="token keyword">const</span> <span class="token function-variable function">loopStart</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setRecord</span><span class="token punctuation">(</span>record<span class="token punctuation">,</span> type<span class="token punctuation">,</span> loopStart<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//获取当前时间</span>
            <span class="token keyword">let</span> currentTime <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     
            <span class="token keyword">if</span> <span class="token punctuation">(</span>currentTime <span class="token operator">-</span> startTime <span class="token operator">&gt;=</span> delay<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        
                <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">==</span> <span class="token string">&quot;timeout&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

                    <span class="token comment">//此条件执行timeout</span>
                    callback <span class="token operator">&amp;&amp;</span> <span class="token function">callback</span><span class="token punctuation">(</span>currentTime<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">{</span> record<span class="token punctuation">,</span> type <span class="token punctuation">}</span><span class="token punctuation">)</span>

                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">==</span> <span class="token string">&quot;interval&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

                    <span class="token comment">//此条件执行interval</span>
                    startTime <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    callback <span class="token operator">&amp;&amp;</span> <span class="token function">callback</span><span class="token punctuation">(</span>currentTime<span class="token punctuation">)</span><span class="token punctuation">;</span>

                <span class="token punctuation">}</span>

            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        
        <span class="token comment">//定时! 启动!</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setRecord</span><span class="token punctuation">(</span>record<span class="token punctuation">,</span> type<span class="token punctuation">,</span> loopStart<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> <span class="token punctuation">{</span> record<span class="token punctuation">,</span> type <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>
    
    <span class="token comment">//记录 raf 的id</span>
    <span class="token function">setRecord</span><span class="token punctuation">(</span><span class="token parameter">record<span class="token punctuation">,</span> type<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> id <span class="token operator">=</span> window<span class="token punctuation">.</span><span class="token function">requestAnimationFrame</span><span class="token punctuation">(</span>callback<span class="token punctuation">)</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>record<span class="token punctuation">[</span>type<span class="token punctuation">]</span><span class="token punctuation">[</span>record<span class="token punctuation">]</span> <span class="token operator">=</span> id<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//模拟 setInterval 方法</span>
    <span class="token function">interval</span><span class="token punctuation">(</span><span class="token parameter">callback<span class="token punctuation">,</span> delay <span class="token operator">=</span> <span class="token number">1000</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        delay <span class="token operator">=</span> delay <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>minInterval <span class="token operator">?</span> <span class="token keyword">this</span><span class="token punctuation">.</span>minInterval <span class="token operator">:</span> delay<span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">loop</span><span class="token punctuation">(</span><span class="token string">&quot;interval&quot;</span><span class="token punctuation">,</span> callback<span class="token punctuation">,</span> delay<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//模拟 setTimeout 方法</span>
    <span class="token function">timeout</span><span class="token punctuation">(</span><span class="token parameter">callback<span class="token punctuation">,</span> delay <span class="token operator">=</span> <span class="token number">1000</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        delay <span class="token operator">=</span> delay <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>minInterval <span class="token operator">?</span> <span class="token keyword">this</span><span class="token punctuation">.</span>minInterval <span class="token operator">:</span> delay<span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">loop</span><span class="token punctuation">(</span><span class="token string">&quot;timeout&quot;</span><span class="token punctuation">,</span> callback<span class="token punctuation">,</span> delay<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//清除定时器方法</span>
    <span class="token function">clear</span><span class="token punctuation">(</span><span class="token parameter">timer</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>timer<span class="token punctuation">)</span> <span class="token keyword">return</span>
        <span class="token keyword">const</span> <span class="token punctuation">{</span> record<span class="token punctuation">,</span> type <span class="token punctuation">}</span> <span class="token operator">=</span> timer
        window<span class="token punctuation">.</span><span class="token function">cancelAnimationFrame</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>record<span class="token punctuation">[</span>type<span class="token punctuation">]</span><span class="token punctuation">[</span>record<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>record<span class="token punctuation">[</span>type<span class="token punctuation">]</span><span class="token punctuation">[</span>record<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//使用</span>
<span class="token keyword">const</span> timer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Timer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span>
<span class="token keyword">let</span> id1 <span class="token operator">=</span> timer<span class="token punctuation">.</span><span class="token function">interval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">stamp</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
   console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>stamp<span class="token punctuation">)</span>
   count<span class="token operator">++</span>
   <span class="token keyword">if</span><span class="token punctuation">(</span>count <span class="token operator">&gt;</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      timer<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span>id1<span class="token punctuation">)</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;clear interval&#39;</span><span class="token punctuation">)</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">1000</span><span class="token punctuation">)</span>

<span class="token keyword">let</span> id2 <span class="token operator">=</span> timer<span class="token punctuation">.</span><span class="token function">timeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">stamp</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">)</span>
    timer<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span>id2<span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;clear timeout&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">3000</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),h=n("code",null,"requestAnimationFrame()",-1),_={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/window/requestAnimationFrame",target:"_blank",rel:"noopener noreferrer"};function g(q,A){const c=t("RouterLink"),e=t("Minfo"),l=t("ExternalLinkIcon");return u(),r("div",null,[d,m,n("p",null,[v,s(" 是用于在浏览器下一次 "),a(c,{to:"/blog-js/17.html#%E5%88%86%E5%B1%82"},{default:p(()=>[s("重绘")]),_:1}),s(" 之前请求执行一个动画帧的方法。")]),b,a(e,null,{default:p(()=>[y,f]),_:1}),w,a(e,null,{default:p(()=>[n("p",null,[s("更多 "),h,s(" 的相关信息请看 "),n("a",_,[s("window.requestAnimationFrame()"),a(l)])])]),_:1})])}const T=i(k,[["render",g],["__file","04.html.vue"]]);export{T as default};