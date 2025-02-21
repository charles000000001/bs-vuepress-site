<template><div><h3 id="表格用法" tabindex="-1"><a class="header-anchor" href="#表格用法"><span>表格用法</span></a></h3>
<bs-table/><details open>
<summary><a>查看代码</a></summary>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">const</span> <span class="token literal-property property">columns</span><span class="token operator">:</span> Array<span class="token operator">&lt;</span>ITableColumnsType<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"编号"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">dataIndex</span><span class="token operator">:</span> <span class="token string">"id"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">"id"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">align</span><span class="token operator">:</span> <span class="token string">"center"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">120</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"姓名"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">customFilterDropdown</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">dataIndex</span><span class="token operator">:</span> <span class="token string">"name"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">"name"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">align</span><span class="token operator">:</span> <span class="token string">"center"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">200</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">dataIndex</span><span class="token operator">:</span> <span class="token string">'status'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'状态'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'status'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">align</span><span class="token operator">:</span> <span class="token string">'center'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">switchSource</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token punctuation">{</span><span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'启用'</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span><span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'禁用'</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">200</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"年龄"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">dataIndex</span><span class="token operator">:</span> <span class="token string">"age"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">"age"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">align</span><span class="token operator">:</span> <span class="token string">"center"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">200</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"地址"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">dataIndex</span><span class="token operator">:</span> <span class="token string">"address"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">"address"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">align</span><span class="token operator">:</span> <span class="token string">"center"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">200</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"操作"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">dataIndex</span><span class="token operator">:</span> <span class="token string">"operation"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">align</span><span class="token operator">:</span> <span class="token string">"center"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">customFilterDropdown</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">noDel</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">noDesign</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">noShow</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">noEdit</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">isHistoryVersion</span><span class="token operator">:</span> <span class="token boolean">false</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> dataSource <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"张三"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">"北京"</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"李四"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">"上海"</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"王五"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">22</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">"广州"</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">onEdit</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">record</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"编辑"</span><span class="token punctuation">,</span> record<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">onDesign</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">record</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"设计"</span><span class="token punctuation">,</span> record<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">onShow</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">record</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"查看"</span><span class="token punctuation">,</span> record<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">onDelete</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">record</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"删除"</span><span class="token punctuation">,</span> record<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">onSearch</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">record</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"搜索"</span><span class="token punctuation">,</span> record<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">onHistoryVersion</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">record</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"历史版本"</span><span class="token punctuation">,</span> record<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">onSwitch</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">record</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"切换"</span><span class="token punctuation">,</span> record<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TableCustom</span> <span class="token attr-name">:pagination</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>false<span class="token punctuation">"</span></span> <span class="token attr-name">:columns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>columns<span class="token punctuation">"</span></span> <span class="token attr-name">:dataSource</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dataSource<span class="token punctuation">"</span></span></span>
<span class="line">                 <span class="token attr-name">@edit</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onEdit<span class="token punctuation">"</span></span></span>
<span class="line">                 <span class="token attr-name">@design</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onDesign<span class="token punctuation">"</span></span></span>
<span class="line">                 <span class="token attr-name">@show</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onShow<span class="token punctuation">"</span></span></span>
<span class="line">                 <span class="token attr-name">@delete</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onDelete<span class="token punctuation">"</span></span></span>
<span class="line">                 <span class="token attr-name">@on-search</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onSearch<span class="token punctuation">"</span></span></span>
<span class="line">                 <span class="token attr-name">@on-history-version</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onHistoryVersion<span class="token punctuation">"</span></span></span>
<span class="line">                 <span class="token attr-name">@onSwitch</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onSwitch<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css"></span>
<span class="line"></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<h3 id="api" tabindex="-1"><a class="header-anchor" href="#api"><span>Api</span></a></h3>
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
<td>columns</td>
<td>表格列的配置描述，具体项见下表</td>
<td>ITableColumnsType[]</td>
<td>[]</td>
</tr>
<tr>
<td>dataSource</td>
<td>数据数组</td>
<td>any[]</td>
<td>[]</td>
</tr>
<tr>
<td>pagination</td>
<td>分页器，参考 antd 的 Table 组件</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>rowKey</td>
<td>表格行 key 的取值，可以是字符串或一个函数</td>
<td>string | ((record: any) =&gt; string)</td>
<td>'key'</td>
</tr>
<tr>
<td>scroll</td>
<td>设置横向或纵向滚动，也可用于指定滚动区域的宽和高，可以设置为像素值，百分比，true 和 'max-content'</td>
<td>{ x: number | string, y: number | string }</td>
<td>-</td>
</tr>
<tr>
<td>size</td>
<td>表格大小</td>
<td>'default' | 'middle' | 'small'</td>
<td>'default'</td>
</tr>
<tr>
<td>title</td>
<td>表格标题</td>
<td>string | slot</td>
<td>-</td>
</tr>
<tr>
<td>footer</td>
<td>表格尾部</td>
<td>string | slot</td>
<td>-</td>
</tr>
<tr>
<td>loading</td>
<td>页面是否加载中</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>bordered</td>
<td>是否展示外边框和列边框</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>showHeader</td>
<td>是否显示表头</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>rowSelection</td>
<td>表格行是否可选择</td>
<td>object</td>
<td>-</td>
</tr>
<tr>
<td>rowClassName</td>
<td>表格行的类名</td>
<td>string | ((record: any, index: number) =&gt; string)</td>
<td>-</td>
</tr>
<tr>
<td>rowStyle</td>
<td>表格行的样式</td>
<td>object | ((record: any, index: number) =&gt; object)</td>
<td>-</td>
</tr>
<tr>
<td>expandable</td>
<td>表格是否可展开</td>
<td>object</td>
<td>-</td>
</tr>
<tr>
<td>expandedRowRender</td>
<td>额外的展开行</td>
<td>(record: any, index: number, indent: number, expanded: boolean) =&gt; VNode | string</td>
<td>-</td>
</tr>
<tr>
<td>defaultExpandAllRows</td>
<td>初始时，是否展开所有行</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>defaultExpandedRowKeys</td>
<td>初始时，展开的行</td>
<td>string[]</td>
<td>[]</td>
</tr>
<tr>
<td>expandedRowKeys</td>
<td>展开的行，控制属性</td>
<td>string[]</td>
<td>[]</td>
</tr>
<tr>
<td>expandRowByClick</td>
<td>通过点击行来展开子行</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>onExpand</td>
<td>展开/关闭的回调</td>
<td>(expanded: boolean, record: any) =&gt; void</td>
<td>-</td>
</tr>
<tr>
<td>onRow</td>
<td>设置行属性</td>
<td>(record: any, index: number) =&gt; object</td>
<td>-</td>
</tr>
<tr>
<td>onHeaderRow</td>
<td>设置表头行属性</td>
<td>(column: ITableColumnsType, index: number) =&gt; object</td>
<td>-</td>
</tr>
<tr>
<td>customFilterDropdown</td>
<td>是否自定义筛选</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>noDel</td>
<td>是否显示删除按钮</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>noDesign</td>
<td>是否显示设计按钮</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>noShow</td>
<td>是否显示查看按钮</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>noEdit</td>
<td>是否显示编辑按钮</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>isHistoryVersion</td>
<td>是否显示历史版本按钮</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>switchSource</td>
<td>开关的数据源</td>
<td>{label: string, value: string | number}[]</td>
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
<th>参数</th>
</tr>
</thead>
<tbody>
<tr>
<td>onSearch</td>
<td>搜索回调</td>
<td>(record: any) =&gt; void</td>
<td>record为当前对应的记录</td>
</tr>
<tr>
<td>onSwitch</td>
<td>开关回调</td>
<td>(record: any) =&gt; void</td>
<td>record为当前对应的记录</td>
</tr>
<tr>
<td>on-history-version</td>
<td>历史版本回调</td>
<td>(record: any) =&gt; void</td>
<td>record为当前对应的记录</td>
</tr>
<tr>
<td>edit</td>
<td>编辑回调</td>
<td>(record: any) =&gt; void</td>
<td>record为当前对应的记录</td>
</tr>
<tr>
<td>design</td>
<td>设计回调</td>
<td>(record: any) =&gt; void</td>
<td>record为当前对应的记录</td>
</tr>
<tr>
<td>show</td>
<td>查看回调</td>
<td>(record: any) =&gt; void</td>
<td>record为当前对应的记录</td>
</tr>
<tr>
<td>delete</td>
<td>删除回调</td>
<td>(record: any) =&gt; void</td>
<td>record为当前对应的记录</td>
</tr>
</tbody>
</table>
</div></template>


