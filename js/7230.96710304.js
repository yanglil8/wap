"use strict";(self["webpackChunkwap"]=self["webpackChunkwap"]||[]).push([[7230],{7230:function(t,e,a){a.r(e),a.d(e,{default:function(){return c}});var i=function(){var t=this,e=t._self._c;return e("h-baseView",{attrs:{loading:t.loading,isScroll:""}},[e("el-button",{attrs:{slot:"baseViewNav",plain:"",type:"primary"},on:{click:function(e){return t.$refs.FormAE.start(!1)}},slot:"baseViewNav"},[t._v("新增")]),e("div",{staticClass:"document"},[e("div",{staticClass:"left"},[e("el-tree",{attrs:{data:t.treeData,"node-key":"Id",props:t.defaultProps,"default-expand-all":"","expand-on-click-node":!1,"highlight-current":"","empty-text":""},scopedSlots:t._u([{key:"default",fn:function({node:a,data:i}){return e("span",{staticClass:"custom-tree-node"},[e("p",{staticClass:"class-name",on:{click:function(e){return t.clickItem(i.Id)}}},[t._v(t._s(a.label)+" ")])])}}])})],1),e("div",{staticClass:"right"},[e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{data:t.tableData,"highlight-current-row":"",stripe:"",border:"",height:"calc(100% - 40px)","empty-text":" "},on:{"selection-change":t.sChange}},[t.loading?t._e():e("div",{staticClass:"iconfont icon-empty",attrs:{slot:"empty"},slot:"empty"}),e("el-table-column",{attrs:{type:"selection",width:"50",align:"center"}}),e("el-table-column",{attrs:{fixed:"",type:"index",label:"序号",width:"50",align:"center"}}),e("el-table-column",{attrs:{prop:"FName",label:"标题","min-width":"100",align:"left","header-align":"center"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",{staticClass:"yclick hand",on:{click:function(e){return t.$refs.FormDetails.start(a.row)}}},[t._v(t._s(a.row.FName))])]}}])}),e("el-table-column",{attrs:{prop:"CatalogName",label:"目录",width:"100",align:"center"}}),e("el-table-column",{attrs:{prop:"CreateName",label:"发布人",width:"100",align:"center"}}),e("el-table-column",{attrs:{prop:"CreateTime",label:"创建时间",width:"160",align:"center"}}),e("el-table-column",{attrs:{label:"操作",width:"120",align:"center",fixed:"right"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("i",{directives:[{name:"show",rawName:"v-show",value:1==a.row.FStatus,expression:"scope.row.FStatus == 1"}],staticClass:"iconfont icon-confirm-audit",attrs:{title:"审核"},on:{click:function(e){return t.audit(t.apis.audit,3,a.row)}}}),e("i",{directives:[{name:"show",rawName:"v-show",value:3==a.row.FStatus,expression:"scope.row.FStatus == 3"}],staticClass:"iconfont icon-cancel-audit",attrs:{title:"反审核"},on:{click:function(e){return t.audit(t.apis.audit,1,a.row)}}}),e("i",{directives:[{name:"show",rawName:"v-show",value:1==a.row.FStatus,expression:"scope.row.FStatus == 1"}],staticClass:"iconfont icon-edit",attrs:{title:"编辑"},on:{click:function(e){return t.$refs.FormAE.start(a.row)}}}),e("i",{directives:[{name:"show",rawName:"v-show",value:1==a.row.FStatus,expression:"scope.row.FStatus == 1"}],staticClass:"iconfont icon-remove",attrs:{title:"删除"},on:{click:function(e){return t.remove(t.apis.delete,a.row.Id,t.getList)}}})]}}])})],1),e("page",{ref:"page",on:{refreshList:t.getList}})],1)]),e("FormAE",{ref:"FormAE",attrs:{apis:t.apis,FormsCode:"oa_document",upLoadBeforSubmit:"",imgNameField:"FIcon"},on:{refresh:t.getList}}),e("FormDetails",{ref:"FormDetails",attrs:{apis:t.apis,FormsCode:"oa_document"}}),e("DocumentDetails",{ref:"FormDetails",attrs:{apis:t.apis}})],1)},s=[],n={name:"CardList",props:{},components:{FormAE:()=>a.e(7139).then(a.bind(a,7139)),FormDetails:()=>a.e(3431).then(a.bind(a,3431)),DocumentDetails:()=>a.e(1453).then(a.bind(a,1453))},data(){return{loading:!1,tableData:[],treeData:[],defaultProps:{children:"children",label:"CatalogName"},apis:{edit:this._api.OA_DC_DocumentsEdit,create:this._api.OA_DC_DocumentsCreate,list:this._api.OA_DC_DocumentsManage,delete:this._api.OA_DC_DocumentsDelete,audit:this._api.OA_DC_DocumentsAudit,details:this._api.OA_DC_DocumentsDetails},searchInfo:{}}},methods:{getList(t){let e=this.$refs.page;t&&(e.Page=1),this.loading=!0,this.apis.list&&this.apis.list({page:e.Page,pageSize:e.PageSize,...this.searchInfo}).then((t=>{t&&(this.tableData=t.data,e.totalcount=t.totalcount),this.loading=!1}))},OA_DC_CatalogIndex(){this._api.OA_DC_CatalogIndex().then((t=>{t&&(this.treeData=this.$u.arraytoTree(t.data))}))},clickItem(t){console.log(t),this.searchInfo.CatalogId=t,this.getList(1)}},mounted(){this.OA_DC_CatalogIndex(),this.getList()}},o=n,l=a(3736),r=(0,l.Z)(o,i,s,!1,null,"c4400bee",null),c=r.exports}}]);
//# sourceMappingURL=7230.96710304.js.map