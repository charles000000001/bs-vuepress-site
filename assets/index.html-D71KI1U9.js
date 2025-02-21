import{_ as e,c as l,a,e as t,d as p,w as o,r as c,o as u,b as i}from"./app-BnZ698pW.js";const d={};function k(r,n){const s=c("bs-button");return u(),l("div",null,[n[1]||(n[1]=a("h3",{id:"基础用法",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#基础用法"},[a("span",null,"基础用法")])],-1)),t(s,{type:"primary"},{default:o(()=>n[0]||(n[0]=[i("按钮")])),_:1}),n[2]||(n[2]=p(`<details open><summary><a>查看代码</a></summary><div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bs-space</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bs-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span> <span class="token punctuation">&gt;</span></span>Primary<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bs-button</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bs-button</span> <span class="token punctuation">&gt;</span></span>Normal<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bs-button</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bs-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dashed<span class="token punctuation">&quot;</span></span> <span class="token punctuation">&gt;</span></span>Dashed<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bs-button</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bs-button</span> <span class="token attr-name">danger</span> <span class="token punctuation">&gt;</span></span>Danger<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bs-button</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bs-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>link<span class="token punctuation">&quot;</span></span> <span class="token punctuation">&gt;</span></span>Link<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bs-button</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bs-space</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="加载按钮" tabindex="-1"><a class="header-anchor" href="#加载按钮"><span>加载按钮</span></a></h3>`,2)),t(s,{type:"primary",demoType:2}),n[3]||(n[3]=p(`<details open><summary><a>查看代码</a></summary><div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bs-space</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bs-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">loading</span><span class="token punctuation">&gt;</span></span>Primary<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bs-button</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bs-button</span> <span class="token attr-name">loading</span><span class="token punctuation">&gt;</span></span>Normal<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bs-button</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bs-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dashed<span class="token punctuation">&quot;</span></span> <span class="token attr-name">loading</span><span class="token punctuation">&gt;</span></span>Dashed<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bs-button</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bs-button</span> <span class="token attr-name">danger</span> <span class="token attr-name">loading</span><span class="token punctuation">&gt;</span></span>Danger<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bs-button</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bs-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>link<span class="token punctuation">&quot;</span></span> <span class="token attr-name">loading</span><span class="token punctuation">&gt;</span></span>Link<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bs-button</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bs-space</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="图标按钮" tabindex="-1"><a class="header-anchor" href="#图标按钮"><span>图标按钮</span></a></h3>`,2)),t(s,{type:"primary",demoType:3}),n[4]||(n[4]=p(`<details open><summary><a>查看代码</a></summary><div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre><code><span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bs-space</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bs-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">shape</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>circle<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#icon</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SearchOutlined</span><span class="token punctuation">/&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bs-button</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bs-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">shape</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>circle<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>A<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bs-button</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bs-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#icon</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SearchOutlined</span><span class="token punctuation">/&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  Search</span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bs-button</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bs-button</span> <span class="token attr-name">shape</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>circle<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#icon</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SearchOutlined</span><span class="token punctuation">/&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bs-button</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bs-button</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#icon</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SearchOutlined</span><span class="token punctuation">/&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  Search</span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bs-button</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bs-space</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="api" tabindex="-1"><a class="header-anchor" href="#api"><span>API</span></a></h3><p>通过设置 Button 的属性来产生不同的按钮样式，推荐顺序为：type -&gt; shape -&gt; size -&gt; loading -&gt; disabled。</p><p><strong>按钮的属性说明如下：</strong></p><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>type</td><td>设置按钮类型，可选值为 primary、dashed、link、text 或者不设</td><td>string</td><td>-</td></tr><tr><td>shape</td><td>设置按钮形状，可选值为 circle 或者不设</td><td>string</td><td>-</td></tr><tr><td>size</td><td>设置按钮大小，可选值为 small、large 或者不设</td><td>string</td><td>-</td></tr><tr><td>loading</td><td>设置按钮载入状态</td><td>boolean</td><td>false</td></tr><tr><td>disabled</td><td>设置按钮禁用</td><td>boolean</td><td>false</td></tr><tr><td>icon</td><td>设置按钮的图标组件</td><td>VNode</td><td>-</td></tr><tr><td>href</td><td>点击跳转的地址，指定此属性 button 的行为和 a 链接一致</td><td>string</td><td>-</td></tr><tr><td>target</td><td>相当于 a 链接的 target 属性，href 存在时生效</td><td>string</td><td>-</td></tr><tr><td>block</td><td>设置按钮为块级元素</td><td>boolean</td><td>false</td></tr><tr><td>ghost</td><td>幽灵属性，使按钮背景透明</td><td>boolean</td><td>false</td></tr><tr><td>danger</td><td>危险按钮</td><td>boolean</td><td>false</td></tr><tr><td>htmlType</td><td>设置 button 原生的 type 值，可选值请参考 HTML 标准</td><td>string</td><td>button</td></tr><tr><td>onClick</td><td>点击按钮时的回调</td><td>(event: MouseEvent) =&gt; void</td><td>-</td></tr><tr><td>autoInsertSpace</td><td>是否在按钮的图标之后自动插入空格</td><td>boolean</td><td>true</td></tr><tr><td>demoSize</td><td>设置按钮的大小，可选值为 small、large</td><td>string</td><td>-</td></tr><tr><td>demoShape</td><td>设置按钮的形状，可选值为 circle</td><td>string</td><td>-</td></tr><tr><td>demoLoading</td><td>设置按钮的载入状态</td><td>boolean</td><td>false</td></tr></tbody></table>`,5))])}const b=e(d,[["render",k],["__file","index.html.vue"]]),m=JSON.parse('{"path":"/components/button/","title":"","lang":"en-US","frontmatter":{},"headers":[{"level":3,"title":"基础用法","slug":"基础用法","link":"#基础用法","children":[]},{"level":3,"title":"加载按钮","slug":"加载按钮","link":"#加载按钮","children":[]},{"level":3,"title":"图标按钮","slug":"图标按钮","link":"#图标按钮","children":[]},{"level":3,"title":"API","slug":"api","link":"#api","children":[]}],"git":{"updatedTime":1740124986000,"contributors":[{"name":"崔锦","username":"崔锦","email":"981744753@qq.com","commits":2,"url":"https://github.com/崔锦"}]},"filePathRelative":"components/button/index.md"}');export{b as comp,m as data};
