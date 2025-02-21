<template><div><h3 id="弹框表单" tabindex="-1"><a class="header-anchor" href="#弹框表单"><span>弹框表单</span></a></h3>
<bs-drawer/><details open>
<summary><a>查看代码</a></summary>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> computed<span class="token punctuation">,</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> mode <span class="token operator">=</span> ref<span class="token operator">&lt;</span>modalMode<span class="token operator">></span><span class="token punctuation">(</span><span class="token string">'add'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> modalObj <span class="token operator">=</span> ref<span class="token operator">&lt;</span>IModal<span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">add</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">edit</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">show</span><span class="token operator">:</span><span class="token boolean">false</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> lookRecord <span class="token operator">=</span> ref<span class="token operator">&lt;</span>any<span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token literal-property property">columns</span><span class="token operator">:</span>Array<span class="token operator">&lt;</span>ITableColumnsType<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">dataIndex</span><span class="token operator">:</span><span class="token string">"id"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">title</span><span class="token operator">:</span><span class="token string">"编号"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">width</span><span class="token operator">:</span><span class="token number">100</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">align</span><span class="token operator">:</span><span class="token string">"center"</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">dataIndex</span><span class="token operator">:</span> <span class="token string">"name"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"姓名"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">align</span><span class="token operator">:</span> <span class="token string">"center"</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">dataIndex</span><span class="token operator">:</span> <span class="token string">"age"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"年龄"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">align</span><span class="token operator">:</span> <span class="token string">"center"</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">dataIndex</span><span class="token operator">:</span> <span class="token string">"address"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"地址"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">align</span><span class="token operator">:</span> <span class="token string">"center"</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">dataIndex</span><span class="token operator">:</span> <span class="token string">"operation"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"操作"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">align</span><span class="token operator">:</span> <span class="token string">"center"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">customFilterDropdown</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">noDel</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">noDesign</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> dataSource <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">id</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">"张三"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">18</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">address</span><span class="token operator">:</span><span class="token string">"北京市朝阳区"</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">id</span><span class="token operator">:</span><span class="token number">2</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">"李四"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">20</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">address</span><span class="token operator">:</span><span class="token string">"北京市海淀区"</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">id</span><span class="token operator">:</span><span class="token number">3</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">"王五"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">22</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">address</span><span class="token operator">:</span><span class="token string">"北京市昌平区"</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> formItemFilter <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token literal-property property">filterColumns</span><span class="token operator">:</span>string<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'operation'</span><span class="token punctuation">]</span></span>
<span class="line">  <span class="token keyword">return</span> columns<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token operator">=></span><span class="token operator">!</span>filterColumns<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>dataIndex<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">onAdd</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  mode<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">'add'</span><span class="token punctuation">;</span></span>
<span class="line">  modalObj<span class="token punctuation">.</span>value<span class="token punctuation">.</span>add <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">onEdit</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">record</span><span class="token operator">:</span>any</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  lookRecord<span class="token punctuation">.</span>value <span class="token operator">=</span> record<span class="token punctuation">;</span></span>
<span class="line">  mode<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">'edit'</span><span class="token punctuation">;</span></span>
<span class="line">  modalObj<span class="token punctuation">.</span>value<span class="token punctuation">.</span>edit <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">onShow</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">record</span><span class="token operator">:</span>any</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  lookRecord<span class="token punctuation">.</span>value <span class="token operator">=</span> record<span class="token punctuation">;</span></span>
<span class="line">  mode<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">'show'</span><span class="token punctuation">;</span></span>
<span class="line">  modalObj<span class="token punctuation">.</span>value<span class="token punctuation">.</span>show <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">onDoRecord</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">mode</span><span class="token operator">:</span>modalMode<span class="token punctuation">,</span><span class="token literal-property property">record</span><span class="token operator">:</span>any</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">//编辑和新增的时候需要提交数据</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>mode<span class="token punctuation">,</span>record<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  modalObj<span class="token punctuation">.</span>value<span class="token punctuation">[</span>mode<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bs-drawer</span></span>
<span class="line">        <span class="token attr-name">:mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mode<span class="token punctuation">"</span></span></span>
<span class="line">        <span class="token attr-name">:modal-obj</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>modalObj<span class="token punctuation">"</span></span></span>
<span class="line">        <span class="token attr-name">:record</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>lookRecord<span class="token punctuation">"</span></span></span>
<span class="line">        <span class="token attr-name">:columns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>formItemFilter<span class="token punctuation">"</span></span></span>
<span class="line">        <span class="token attr-name">@doRecord</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onDoRecord<span class="token punctuation">"</span></span></span>
<span class="line">    <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bs-drawer</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-card</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bs-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onAdd<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>新增<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bs-button</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-card</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css"></span>
<span class="line"></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<h3 id="api" tabindex="-1"><a class="header-anchor" href="#api"><span>API</span></a></h3>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
<th>类型</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>mode</td>
<td>模态框的模式</td>
<td>modalMode</td>
<td>'add'</td>
</tr>
<tr>
<td>modalObj</td>
<td>模态框的显示隐藏</td>
<td>IModal</td>
<td>{add:false,edit:false,show:false}</td>
</tr>
<tr>
<td>lookRecord</td>
<td>查看的数据</td>
<td>any</td>
<td>{}</td>
</tr>
<tr>
<td>columns</td>
<td>表格列的配置描述，具体项见下表</td>
<td>ITableColumnsType[]</td>
<td>[]</td>
</tr>
</tbody>
</table>
<h3 id="事件" tabindex="-1"><a class="header-anchor" href="#事件"><span>事件</span></a></h3>
<table>
<thead>
<tr>
<th>事件名</th>
<th>说明</th>
<th>回调参数</th>
</tr>
</thead>
<tbody>
<tr>
<td>doRecord</td>
<td>提交数据</td>
<td>(mode:modalMode,record:any) =&gt; void</td>
</tr>
</tbody>
</table>
</div></template>


