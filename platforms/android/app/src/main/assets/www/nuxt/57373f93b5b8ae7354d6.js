(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{291:function(t,e,n){var content=n(296);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("65a8be43",content,!0,{sourceMap:!1})},295:function(t,e,n){"use strict";var o=n(291),l=n.n(o);e.default=l.a},296:function(t,e,n){(e=t.exports=n(22)(!1)).push([t.i,"#container_1fFt5{display:flex;padding:5pt}#button_2FP2V{display:flex;align-items:center;justify-content:center;padding:0 25pt;background-color:#3bb30b;height:23pt;color:#fff;text-decoration:none;border-radius:3pt;margin:10pt 0}#button_2FP2V:hover{background-color:#4bc30b}#button_2FP2V:active{background-color:#2ba30b}",""]),e.locals={container:"container_1fFt5",button:"button_2FP2V"}},297:function(t,e,n){"use strict";var o={props:{onClick:Function,to:String,label:{type:String,default:"Next"}}},l=n(295),r=n(6);var component=Object(r.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:t.$style.container}},[t.to?n("nuxt-link",{attrs:{id:t.$style.button,to:t.to}},[t._v(t._s(t.label)+" >")]):t.onClick?n("a",{attrs:{id:t.$style.button,href:"javascript:void(0)"},on:{click:t.onClick}},[t._v(t._s(t.label)+" >")]):n("span",{attrs:{id:t.$style.button}},[t._v(t._s(t.label)+" >")])],1)},[],!1,function(t){this.$style=l.default.locals||l.default},null,null);e.a=component.exports},304:function(t,e,n){var content=n(485);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("31fef74e",content,!0,{sourceMap:!1})},484:function(t,e,n){"use strict";var o=n(304),l=n.n(o);e.default=l.a},485:function(t,e,n){(e=t.exports=n(22)(!1)).push([t.i,"#container_qy-be{display:flex;flex-direction:column;min-height:100vh;background-image:linear-gradient(120deg,#fdfbfb,#ebedee)}#body_3mJOt{display:flex;flex-direction:column;flex:1;justify-content:center;align-items:center;text-align:center}#body_3mJOt img{max-height:200pt}#nav_3BOUX{display:flex;justify-content:flex-end}",""]),e.locals={container:"container_qy-be",body:"body_3mJOt",nav:"nav_3BOUX"}},599:function(t,e,n){"use strict";n.r(e);var o={components:{NextButton:n(297).a},layout:"fullscreen",computed:{nextUrl:function(){var t=this.$store.state.controllers.new_controller;return 0==t.state.value?"/controller/".concat(t.broker_clientid.value,"/setup/preset"):4==t.wifi_status.value?"/controller/".concat(t.broker_clientid.value,"/setup/wifi-sta"):"/controller/".concat(t.broker_clientid.value,"/0")}}},l=n(484),r=n(6);var component=Object(r.a)(o,function(){var t=this.$createElement,e=this._self._c||t;return e("section",{attrs:{id:this.$style.container}},[e("section",{attrs:{id:this.$style.body}},[e("h1",[this._v("\n      Ok all good, move on:)\n    ")])]),this._v(" "),e("section",{attrs:{id:this.$style.nav}},[e("NextButton",{attrs:{to:this.nextUrl}})],1)])},[],!1,function(t){this.$style=l.default.locals||l.default},null,null);e.default=component.exports}}]);