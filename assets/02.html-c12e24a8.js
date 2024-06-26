import{_ as e,o as a,c as d,d as r}from"./app-cff0f7b8.js";const h={},i=r('<h1 id="打包过程" tabindex="-1"><a class="header-anchor" href="#打包过程" aria-hidden="true">#</a> 打包过程</h1><p>了解 webpack 的打包构建过程有助于加深我们对 webpack 的理解，增加对其打包过程的掌控能力。</p><h2 id="阶段" tabindex="-1"><a class="header-anchor" href="#阶段" aria-hidden="true">#</a> 阶段</h2><p>webpack 的构建流程可以分为以下 3 个阶段</p><ol><li>初始化：启动打包构建，读取与合并配置参数，加载 plugin，实例化 compiler 对象。</li><li>编译：从 entry 开始，对每个 module 都使用相应的 loader 进行分析处理，找出该 module 的依赖关系（即依赖的其他 module），再递归的对这些 module 进行处理，从而形成依赖关系图。</li><li>输出：根据依赖关系图将相关的 module 处理转化为 chunk，再将 chunk 合成为 bundle，然后把 bundle 输出到文件系统中。</li></ol><h2 id="细节" tabindex="-1"><a class="header-anchor" href="#细节" aria-hidden="true">#</a> 细节</h2><h3 id="初始化" tabindex="-1"><a class="header-anchor" href="#初始化" aria-hidden="true">#</a> 初始化</h3><h3 id="编译" tabindex="-1"><a class="header-anchor" href="#编译" aria-hidden="true">#</a> 编译</h3><h3 id="输出" tabindex="-1"><a class="header-anchor" href="#输出" aria-hidden="true">#</a> 输出</h3>',9),n=[i];function c(l,t){return a(),d("div",null,n)}const s=e(h,[["render",c],["__file","02.html.vue"]]);export{s as default};
