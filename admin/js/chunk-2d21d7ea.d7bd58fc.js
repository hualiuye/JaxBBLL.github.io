(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21d7ea"],{d217:function(o,n,t){"use strict";t.r(n);var e=function(){var o=this,n=o.$createElement,t=o._self._c||n;return t("div",[t("quill-editor",{ref:"myTextEditor",attrs:{options:o.editorOption},on:{blur:function(n){return o.onEditorBlur(n)},focus:function(n){return o.onEditorFocus(n)},ready:function(n){return o.onEditorReady(n)}},model:{value:o.content,callback:function(n){o.content=n},expression:"content"}})],1)},r=[],i={name:"DemoEditor",data:function(){return{content:'<h2 class="ql-align-center"><span class="ql-font-serif">Text content loading..</span></h2>',editorOption:{modules:{toolbar:[["bold","italic","underline","strike"],["blockquote","code-block"],[{header:1},{header:2}],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{direction:"rtl"}],[{size:["small",!1,"large","huge"]}],[{header:[1,2,3,4,5,6,!1]}],[{font:[]}],[{color:[]},{background:[]}],[{align:[]}],["clean"],["link","image","video"]]}}}},methods:{onEditorBlur:function(o){console.log("editor blur!",o)},onEditorFocus:function(o){console.log("editor focus!",o)},onEditorReady:function(o){console.log("editor ready!",o)}},computed:{editor:function(){return this.$refs.myTextEditor.quill}},mounted:function(){var o=this;console.log("this is my editor",this.editor),setTimeout(function(){o.content='\n        <h1><span style="background-color: rgb(240, 102, 102); color: rgb(255, 255, 255);"> I am Example 1! </span></h1>\n        <p>text</p>\n        <h3>\n          <span style="background-color: #38f; color: rgb(255, 255, 255);">this is a demo</span>\n        </h3>\n        '},1300)}},l=i,c=t("2877"),d=Object(c["a"])(l,e,r,!1,null,"2b1ccfd0",null);n["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d21d7ea.d7bd58fc.js.map