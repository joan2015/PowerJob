(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-682d1154"],{"1a8e":function(t,e,n){"use strict";var a=n("5933"),s=n.n(a);s.a},5933:function(t,e,n){},6277:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"wf_instance_manager"}},[n("el-row",[n("el-col",{attrs:{span:20}},[n("el-form",{staticClass:"el-form--inline",attrs:{inline:!0,model:t.wfInstanceQueryContent}},[n("el-form-item",{attrs:{label:"工作流实例ID"}},[n("el-input",{attrs:{placeholder:"工作流实例ID"},model:{value:t.wfInstanceQueryContent.wfInstanceId,callback:function(e){t.$set(t.wfInstanceQueryContent,"wfInstanceId",e)},expression:"wfInstanceQueryContent.wfInstanceId"}})],1),n("el-form-item",{attrs:{label:"任务ID"}},[n("el-input",{attrs:{placeholder:"工作流ID"},model:{value:t.wfInstanceQueryContent.workflowId,callback:function(e){t.$set(t.wfInstanceQueryContent,"workflowId",e)},expression:"wfInstanceQueryContent.workflowId"}})],1),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:t.listWfInstances}},[t._v("查询")]),n("el-button",{attrs:{type:"cancel"},on:{click:t.onClickRest}},[t._v("重置")])],1)],1)],1),n("el-col",{attrs:{span:4}},[n("div",{staticStyle:{float:"right","padding-right":"10px"}},[n("el-button",{attrs:{type:"primary"},on:{click:t.listWfInstances}},[t._v("刷新状态")])],1)])],1),n("el-row",[n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.wfInstancePageResult.data,"row-class-name":t.wfInstanceTableRowClassName}},[n("el-table-column",{attrs:{prop:"workflowId",label:"工作流ID",width:"80"}}),n("el-table-column",{attrs:{prop:"workflowName",label:"工作流名称"}}),n("el-table-column",{attrs:{prop:"wfInstanceId",label:"工作流实例ID"}}),n("el-table-column",{attrs:{prop:"statusStr",label:"状态",width:"80"}}),n("el-table-column",{attrs:{prop:"actualTriggerTime",label:"触发时间"}}),n("el-table-column",{attrs:{prop:"finishedTime",label:"结束时间"}}),n("el-table-column",{attrs:{label:"操作",width:"300"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{size:"medium"},on:{click:function(n){return t.onClickShowDetail(e.row)}}},[t._v("详情")]),n("el-button",{attrs:{size:"medium"},on:{click:function(n){return t.onClickStop(e.row)}}},[t._v("停止")])]}}])})],1)],1),n("el-row",[n("el-col",{attrs:{span:24}},[n("el-pagination",{attrs:{total:this.wfInstancePageResult.totalItems,"page-size":this.wfInstancePageResult.pageSize,layout:"prev, pager, next"},on:{"current-change":t.onClickChangeInstancePage}})],1)],1)],1)},s=[],o={name:"WFInstanceManager",data:function(){return{wfInstanceQueryContent:{appId:this.$store.state.appInfo.id,index:0,pageSize:10,wfInstanceId:void 0,workflowId:void 0},wfInstancePageResult:{pageSize:10,totalItems:0,data:[]}}},methods:{listWfInstances:function(){var t=this;this.axios.post("/wfInstance/list",this.wfInstanceQueryContent).then((function(e){return t.wfInstancePageResult=e}))},onClickRest:function(){this.wfInstanceQueryContent.wfInstanceId=void 0,this.wfInstanceQueryContent.workflowId=void 0},onClickShowDetail:function(t){console.log(t),this.$router.push({name:"WorkflowInstanceDetail",params:{wfInstanceId:t.wfInstanceId}})},onClickStop:function(t){var e=this,n="/wfInstance/stop?wfInstanceId="+t.wfInstanceId+"&appId="+this.$store.state.appInfo.id;this.axios.get(n).then((function(){e.$message.success("停止成功"),e.listInstanceInfos()}))},onClickChangeInstancePage:function(t){this.wfInstanceQueryContent.index=t-1,this.listWfInstances()},wfInstanceTableRowClassName:function(t){var e=t.row;switch(e.status){case 3:return"error-row";case 4:return"success-row";case 10:return"warning-row"}}},mounted:function(){this.listWfInstances()}},l=o,c=(n("1a8e"),n("2877")),r=Object(c["a"])(l,a,s,!1,null,null,null);e["default"]=r.exports}}]);
//# sourceMappingURL=chunk-682d1154.700eb3c7.js.map