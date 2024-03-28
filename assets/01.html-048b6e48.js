import{_ as i,r as c,o as u,c as r,a as d,b as a,w as t,f as o,d as n,e as s}from"./app-aee6fc29.js";const k={},m=o('<h1 id="层叠与继承" tabindex="-1"><a class="header-anchor" href="#层叠与继承" aria-hidden="true">#</a> 层叠与继承</h1><p>CSS 代表层叠样式表（Cascading Style Sheets），其中层叠与继承的概念十分重要，理解<strong>层叠</strong>与<strong>继承</strong>可以让我们更好地将样式应用到页面当中</p><h2 id="层叠" tabindex="-1"><a class="header-anchor" href="#层叠" aria-hidden="true">#</a> 层叠</h2><p><strong>层叠</strong>是 CSS 一大重要的特性，样式表<strong>层叠</strong>——简单来说，就是 CSS 样式规则在页面上的应用顺序，即页面上的元素最终会应用哪一条样式规则进行渲染</p><p>理解层叠一般从以下三个因素考虑（❗代表重要性）：</p><ol><li>资源顺序 ❗</li><li>优先级 ❗❗</li><li>重要程度 ❗❗❗</li></ol><h3 id="资源顺序" tabindex="-1"><a class="header-anchor" href="#资源顺序" aria-hidden="true">#</a> 资源顺序</h3><p>当超过一条以上的同级别(相同的权重/优先级)的规则应用于同一元素时，写在<strong>最后面</strong>的规则会被应用，可以理解为后面的规则覆盖前面的规则，直到最后一个开始设置样式</p>',8),h=n("div",{class:"language-html line-numbers-mode","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("h1")]),n("span",{class:"token punctuation"},">")]),s("Hello World!"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("h1")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),g=n("div",{class:"language-css line-numbers-mode","data-ext":"css"},[n("pre",{class:"language-css"},[n("code",null,[n("span",{class:"token selector"},"h1"),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(" red"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token selector"},"h1"),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(" green"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"/*绿色生效了，覆盖了前面的红色*/"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),b=o('<h3 id="优先级" tabindex="-1"><a class="header-anchor" href="#优先级" aria-hidden="true">#</a> 优先级</h3><p>在一些情况下，有些规则写在最后面，但是却应用了前面的具有冲突的规则。这是因为前面的有更高的优先级——它<strong>范围更小，权重更大</strong>，因此浏览器就把它选择为元素的样式</p><p>样式应用的优先级与选择器的使用息息相关，不同的选择器对应着不同的权重（多个选择器组合使用时，它们的权重是每个同级别选择器的权重相加的结果）。为了便于理解，在这里假设以 <strong>ID选择器</strong> 所对应的权重为 <strong>1-0-0</strong>，那么它们的权重排序为：（由大到小）</p><ol><li>ID：ID选择器（权重为 <strong>1-0-0</strong>）</li><li>类：选择器中包含类选择器、属性选择器或者伪类（权重为 <strong>0-1-0</strong>）</li><li>元素：选择器中包含元素、伪元素选择器（权重为 <strong>0-0-1</strong>）</li></ol>',4),v=n("div",{class:"language-html line-numbers-mode","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},"'"),s("box"),n("span",{class:"token punctuation"},"'")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},"'"),s("text"),n("span",{class:"token punctuation"},"'")]),n("span",{class:"token punctuation"},">")]),s("this is text1"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("span")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},"'"),s("en"),n("span",{class:"token punctuation"},"'")]),n("span",{class:"token punctuation"},">")]),s("this is text2"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("span")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),x=n("div",{class:"language-css line-numbers-mode","data-ext":"css"},[n("pre",{class:"language-css"},[n("code",null,[n("span",{class:"token selector"},"#box .text"),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(" green"),n("span",{class:"token punctuation"},";"),s("  "),n("span",{class:"token comment"},"/* 绿色样式被应用 */"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token selector"},"div > .text"),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(" gray"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token selector"},"#box span[lang=en]"),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(" red"),n("span",{class:"token punctuation"},";"),s("   "),n("span",{class:"token comment"},"/* 红色样式被应用 */"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token selector"},"#box span"),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(" yellow"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),_=o("<p>选择器权重的计算示例，权重大的选择器会最终应用其样式</p><table><thead><tr><th>选择器</th><th>ID</th><th>类</th><th>元素</th><th>优先级（权重）</th></tr></thead><tbody><tr><td>#box .text</td><td>1</td><td>1</td><td>0</td><td>1-1-0</td></tr><tr><td>div &gt; .text</td><td>0</td><td>1</td><td>1</td><td>0-1-1</td></tr><tr><td>#box span[lang=en]</td><td>1</td><td>1</td><td>1</td><td>1-1-1</td></tr><tr><td>#box span</td><td>1</td><td>0</td><td>1</td><td>1-0-1</td></tr></tbody></table>",2),y=n("p",null,[s("通用选择器 "),n("strong",null,"（*）"),s("、组合符 "),n("strong",null,"（+、>、~、' '）"),s(" 和调整优先级的选择器 "),n("strong",null,"（:where()）"),s(" 不会影响优先级")],-1),S=n("p",null,[s("否定 "),n("strong",null,"（:not()）"),s(" 和任意匹配 "),n("strong",null,"（:is()）"),s(" 伪类本身对优先级没有影响，但它们的参数则会带来影响。参数中优先级计算结果的最大值将作为该伪类选择器的优先级")],-1),C=n("p",null,[s("每一个选择器类编都有它自己的优先级等级，它们不会被具有较低优先级的选择器覆盖。例如，权重为一百万的类选择器不会覆盖权重为一的 ID 选择器。评估优先级的最佳方法是 "),n("strong",null,"对不同的优先级等级单独进行评分，并从最高的等级开始，必要时再计算低优先级等级的权重。即，仅当某一列的优先级权重相同时，你才需要评估下一列；否则，你可以直接忽略低等级的选择器，因为它们无法覆盖高优先级等级的选择器")],-1),f=o('<h3 id="重要程度" tabindex="-1"><a class="header-anchor" href="#重要程度" aria-hidden="true">#</a> 重要程度</h3><p>影响 CSS 样式规则的应用除了上面的优先级规则外，还有 <strong>内联样式</strong> 与 <strong>!important</strong> 这两种声明方式，它们的优先级要高于选择器</p><h4 id="内联样式" tabindex="-1"><a class="header-anchor" href="#内联样式" aria-hidden="true">#</a> 内联样式</h4><p>内联样式，即在元素的 <code>style</code> 属性内的样式声明，优先于所有普通的样式，无论其优先级如何。这样的声明没有选择器，但它们的优先级可以理解为 1-0-0-0；即无论选择器中有多少个 ID，它总是比其他任何优先级的权重都要高</p><h4 id="important" tabindex="-1"><a class="header-anchor" href="#important" aria-hidden="true">#</a> !important</h4><p>给样式加上 <code>!important</code> 声明可以用来覆盖上面所有优先级计算，不过需要谨慎的使用它——避免某一样式在需要修改时无法应用到最新的样式</p>',6),E=n("div",{class:"language-html line-numbers-mode","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},"'"),s("box"),n("span",{class:"token punctuation"},"'")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},"'"),s("text"),n("span",{class:"token punctuation"},"'")]),s(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},"'"),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s("blue"),n("span",{class:"token punctuation"},";")]),n("span",{class:"token punctuation"},"'")])]),n("span",{class:"token punctuation"},">")]),s("this is example1"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("span")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},"'"),s("en"),n("span",{class:"token punctuation"},"'")]),n("span",{class:"token punctuation"},">")]),s("this is example2"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("span")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),B=n("div",{class:"language-css line-numbers-mode","data-ext":"css"},[n("pre",{class:"language-css"},[n("code",null,[n("span",{class:"token selector"},"#box .text"),n("span",{class:"token punctuation"},"{"),s("    "),n("span",{class:"token comment"},"/* 内联样式蓝色样式被应用 */"),s(`
    `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(" green"),n("span",{class:"token punctuation"},";"),s(`  
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token selector"},"div > p"),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(" gray"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token selector"},"#box span[lang=en]"),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(" yellow"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token selector"},"div span"),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(" purple "),n("span",{class:"token important"},"!important"),n("span",{class:"token punctuation"},";"),s("  "),n("span",{class:"token comment"},"/* 紫色样式被应用 */"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),A=o('<h3 id="位置" tabindex="-1"><a class="header-anchor" href="#位置" aria-hidden="true">#</a> 位置</h3><p>CSS 声明的优先级还取决于定义它的样式表和级联层，它让用户可以设置自定义样式表来覆盖开发人员定义的样式</p><p>如果声明相互冲突，将会按以下顺序进行覆盖：（后面的会覆盖前面的）</p><ol><li>用户代理样式表中的声明（例如，浏览器的默认样式，在没有设置其他样式时使用）。</li><li>用户样式表中的常规声明（由用户设置的自定义样式）。</li><li>作者样式表中的常规声明（这些是我们 web 开发人员设置的样式）。</li><li>作者样式表中的 <code>!important</code> 声明</li><li>用户样式表中的 <code>!important</code> 声明</li><li>用户代理样式表中的 <code>!important</code> 声明</li></ol><h3 id="级联层" tabindex="-1"><a class="header-anchor" href="#级联层" aria-hidden="true">#</a> 级联层</h3><p>在级联层中声明的 CSS 的优先级，由声明层的顺序来决定。在任何级联层之外声明的 CSS 样式会被按声明的顺序组合在一起，形成一个未命名的层，它会被当作最后声明的层。</p><p>对于存在冲突的常规（没有 !important 声明）样式，后面的层比先前定义的层的优先级高。但对于带有 <code>!important</code> 标记的样式，其顺序相反——先前的层中的 important 样式比后面的层以及为在层中声明的 important 样式优先级要高。但内联样式比所有作者定义的样式的优先级都要高，不受级联层规则的影响</p>',7),I=n("div",{class:"language-html line-numbers-mode","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},"'"),s("text"),n("span",{class:"token punctuation"},"'")]),n("span",{class:"token punctuation"},">")]),s("this is an example"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),q=n("div",{class:"language-css line-numbers-mode","data-ext":"css"},[n("pre",{class:"language-css"},[n("code",null,[n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@layer"),s(" firstLayer"),n("span",{class:"token punctuation"},","),s(" secondLayer"),n("span",{class:"token punctuation"},";")]),s(`

`),n("span",{class:"token selector"},"p"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token comment"},"/* 0-0-1 */"),s(`
  `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(" grey "),n("span",{class:"token important"},"!important"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token selector"},"p.text"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token comment"},"/* 0-1-1 */"),s(`
  `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s("blue "),n("span",{class:"token important"},"!important"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@layer"),s(" firstLayer")]),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token selector"},".text"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token comment"},"/* 0-1-0 */"),s(`
    `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(" red "),n("span",{class:"token important"},"!important"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"/* 红色样式被应用了 */"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@layer"),s(" secondLayer")]),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token selector"},"p.text"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token comment"},"/* 0-1-1 */"),s(`
    `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(" green "),n("span",{class:"token important"},"!important"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`     
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),J=n("p",null,"级联层由 CSS @rule 创建，创建级联层的方法为：",-1),U=n("ol",null,[n("li",null,[n("code",null,"@layer xxx {}")]),n("li",null,[n("code",null,"@import(xxx.css) layer(xxx)")]),n("li",null,[n("code",null,"@layer xxx")])],-1),z={href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/@layer",target:"_blank",rel:"noopener noreferrer"},V=n("h2",{id:"继承",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#继承","aria-hidden":"true"},"#"),s(" 继承")],-1),K=n("p",null,[n("strong",null,"继承"),s(' 是 CSS 另一大重要特性，在 CSS 中，每个 CSS 样式都有继承 ("Inherited: Yes") 或者不继承的 ("Inherited: no")的特性。这决定了当没有为元素的属性指定值时页面该如何计算值')],-1),D=n("h3",{id:"继承属性",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#继承属性","aria-hidden":"true"},"#"),s(" 继承属性")],-1),F=n("p",null,[s("当元素的一个"),n("strong",null,"继承属性"),s("没有指定值时，则取父元素的同属性的计算值（只有文档的根元素取该属性的初始值（默认值））")],-1),G=n("div",{class:"language-html line-numbers-mode","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},"'"),s("box"),n("span",{class:"token punctuation"},"'")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},"'"),s("text"),n("span",{class:"token punctuation"},"'")]),n("span",{class:"token punctuation"},">")]),s("this is an example"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),M=n("div",{class:"language-css line-numbers-mode","data-ext":"css"},[n("pre",{class:"language-css"},[n("code",null,[n("span",{class:"token selector"},"#box"),n("span",{class:"token punctuation"},"{"),s(`
   `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s("red"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"/** p元素继承了父元素div的字体颜色的样式 */"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),N=n("h3",{id:"非继承属性",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#非继承属性","aria-hidden":"true"},"#"),s(" 非继承属性")],-1),X=n("p",null,[s("当元素的一个"),n("strong",null,"非继承属性"),s("没有指定值时，则取属性的初始值（默认值）")],-1),R=n("div",{class:"language-html line-numbers-mode","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},"'"),s("box"),n("span",{class:"token punctuation"},"'")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},"'"),s("text"),n("span",{class:"token punctuation"},"'")]),n("span",{class:"token punctuation"},">")]),s("this is an example"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),w=n("div",{class:"language-css line-numbers-mode","data-ext":"css"},[n("pre",{class:"language-css"},[n("code",null,[n("span",{class:"token selector"},"#box"),n("span",{class:"token punctuation"},"{"),s(`
   `),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),s("2px dashed orange"),n("span",{class:"token punctuation"},";"),n("span",{class:"token comment"},"/** p元素没有继承父元素div的边框样式，p元素的边框样式默认值为none */"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),P=o('<h3 id="控制继承" tabindex="-1"><a class="header-anchor" href="#控制继承" aria-hidden="true">#</a> 控制继承</h3><p>CSS 为控制继承提供了五个特殊的通用属性值。每个 CSS 属性都接收这些值</p><table><thead><tr><th>属性</th><th>描述</th></tr></thead><tbody><tr><td><code>inherit</code></td><td>设置该属性会使子元素属性和父元素相同，相当于“开启继承”</td></tr><tr><td><code>initial</code></td><td>将应用于选定元素的属性值设置为该属性的初始值（默认值）</td></tr><tr><td><code>unset</code></td><td>将属性重置为自然值，也就是如果属性是自然继承那么就是 <code>inherit</code>，否则和 <code>initial</code> 一样</td></tr><tr><td><code>revert</code></td><td>将应用于选定元素的属性值重置为浏览器的默认样式，而不是应用于该属性的默认值</td></tr><tr><td><code>revert-layer</code></td><td>将应用于选定元素的属性值重置为在上一个层叠层中建立的值</td></tr></tbody></table><p>当在项目中，某个元素上面应用的样式太多而更改起来比较复杂时，可以使用 CSS 简写属性 <code>all</code> 来撤销选定元素的样式，可以将 <code>all</code> 属性的值设置为上面表格中的任意一个值，将元素的样式恢复到之前的初始状态</p>',4),L={href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference",target:"_blank",rel:"noopener noreferrer"};function W(Z,j){const e=c("CodeDemo"),l=c("Minfo"),p=c("ExternalLinkIcon");return u(),r("div",null,[d("more"),m,a(e,{id:"code-demo-39",type:"normal",title:"%E4%BB%A3%E7%A0%81%E7%A4%BA%E4%BE%8B",code:"eJyrVsooyc1RslKyyTC080jNyclXCM8vyklRtNEHCsTkKekoJRcXA+UzDKtj8hQUkvNz8ousFIpSU6xj8mpj8lCF04tSU/OsFfS1nu/e/6Jz0/Mp859N7Xiyq+39np4Xy9qez54GZD/t7H05d9HzWS3Pdy0CqtHSB5ujVAsA8cI8wQ=="},{default:t(()=>[h,g]),_:1}),b,a(e,{id:"code-demo-69",type:"normal",title:"%E4%BB%A3%E7%A0%81%E7%A4%BA%E4%BE%8B",code:"eJyrVsooyc1RslKyScksU8hMsVVPyq9Qt4vJUwACmwKF5JzE4mJb9ZLUihJ1u5KMzGIFIALxDG30C2DKigsS8xRyEvPSbdVT81CVGdnog2SBKm30gTYAaSUdpeTiYqCNykCbFPRAiqoh5iTn5+QXWSmkF6Wm5lkrKOhrKTzfvf9F56ZnC7Y/3dP/YtHqp7umPJ+yQkFLPyavNiYP5GA77AYkVlqDlYCtANkfDXZdal4sqsqi1BSgRWCbdi3CbRPcGFTdlak5OfnlEJuUagHbd3w4"},{default:t(()=>[v,x]),_:1}),_,a(l,null,{default:t(()=>[y,S,C]),_:1}),f,a(e,{id:"code-demo-196",type:"normal",title:"%E4%BB%A3%E7%A0%81%E7%A4%BA%E4%BE%8B",code:"eJx1j0FLwzAYhv/KZzwEhhj0uKb9I9ZD1oWtkCahybSl7OBBwZMHexXEk7CbCIL4d+r6M/zS6mGOhUACefK+z9eQpS8UmRI+z68gn8d0ZiqapBpwcQuZEs7F1MvKU3C+VjKmmVGmnM7USkY08cvcAW5ZicIqecaZ/fvtrNCghF7EVOo98pyzACDMGXbjSU5I5hy6HKMDnIbOJgSxCXR3t/1N+/380X099I9P/f3b7/1l03222/YVJmxsHeVgUUqpI4BUr1MdRkvANv8IUUfD81AXXC4GWakvd8laKmWuRzZEBXSXsKsSJ4KjvLCm9EJ7bEbr7fvmgCkmkfUPkGeR4g=="},{default:t(()=>[E,B]),_:1}),A,a(e,{id:"code-demo-250",type:"normal",title:"%E4%BB%A3%E7%A0%81%E7%A4%BA%E4%BE%8B",code:"eJx1kDuqAjEUhrdybhpB9M7Yer1yF3CXkCaORx3InAlJBGWwFaxsXIBYCXY2wuByfC3DxBejIqRI4P/+RzLWs4lkddZQEElhzG/J4sCWmrYXG3BHEOBAJEpiI1BNTqzCImMc8CfFEDV0Ym3sv79WwGCUUvvy+OHESUEGQRnCalitQTngBBClMtV16GocwlecqFRbQdapR07+7aPvTO2Fack+viGc3mpA5pkXq/Bm9SigsV0087pjvjhN1of5Zr+dnharfT47zpa7fHxDXVoxsLD1mvipfXEz0vOCq6vXgPvZ0Rm1fYnl"},{default:t(()=>[I,q]),_:1}),a(l,null,{default:t(()=>[J,U,n("p",null,[s("更多关于级联层的信息请 "),n("a",z,[s("点击这里"),a(p)])])]),_:1}),V,K,D,F,a(e,{id:"code-demo-291",type:"normal",title:"%E4%BB%A3%E7%A0%81%E7%A4%BA%E4%BE%8B",code:"eJyrVsooyc1RslKyScksU8hMsVVPyq9Qt4vJUwACmwKF5JzE4mJb9ZLUihJ1u5KMzGIFIErMU0itSMwtyEm10S8AqrXRB2oG0ko6SsnFxUDDlIGGVIPNSM7PyS+yKkpNsVbQ19JSKHja2vx8y4Lnu5c/69z/ZFfb845tEBGgAc9ntTxdO/3J3skvF8150bkJyH22YPvTPf0KWvoxebVA02sBebpKNQ=="},{default:t(()=>[G,M]),_:1}),N,X,a(e,{id:"code-demo-301",type:"normal",title:"%E4%BB%A3%E7%A0%81%E7%A4%BA%E4%BE%8B",code:"eJyrVsooyc1RslKyScksU8hMsVVPyq9Qt4vJUwACmwKF5JzE4mJb9ZLUihJ1u5KMzGIFIErMU0itSMwtyEm10S8AqrXRB2oG0ko6SsnFxUDDlIGGVIPNSMovSkktsjIqqFBISSzOSE1RyC9KzEtPtdbX0lIoeNra/HzLgmebFj6b0/l89/Jnnfufd2yDCAJNfD6r5cW+nc8Wtj1bsP3pnv73e3qgGtAkXu6e8WLdkqcNe57s2JWXn5eqoKUfk1cLdE4tAAgAZ6I="},{default:t(()=>[R,w]),_:1}),P,a(l,null,{default:t(()=>[n("p",null,[s("CSS 属性是否继承，在 CSS 属性定义里面就已经设置了，要具体了解某个 CSS 属性是否可以继承，请查阅前一章节或者 "),n("a",L,[s("MDN"),a(p)])])]),_:1})])}const H=i(k,[["render",W],["__file","01.html.vue"]]);export{H as default};
