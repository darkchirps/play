System.register("chunks:///_virtual/setting",["./SettingUI.ts"],(function(){return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/SettingUI.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Main.ts","./GameDefine.ts"],(function(e){var t,i,n,c,o,s,l,u,h,r,a,C,d;return{setters:[function(e){t=e.inheritsLoose},function(e){i=e.cclegacy},function(e){n=e.ccclass,c=e._platform,o=e.EBottomAdType,s=e.EPlatformType,l=e._gameType,u=e._privacy,h=e._audio,r=e.EUILayer,a=e.EBlockOnceAdType,C=e.BaseUI},function(e){d=e.initData}],execute:function(){var p;i._RF.push({},"52af3yS6apPi5dNpKPnKLiB","SettingUI",void 0);e("SettingUI",n("SettingUI")(p=function(e){function i(){for(var t,i=arguments.length,n=new Array(i),c=0;c<i;c++)n[c]=arguments[c];return(t=e.call.apply(e,[this].concat(n))||this).layerType=r.Panel,t.blockOnceAdType=a.Show,t.cSwitchChildrenCC_music=null,t.cSwitchChildrenCC_sound=null,t.cSwitchChildrenCC_btn=null,t.cBtns=null,t.cAUser=null,t.cADec=null,t}t(i,e);var n=i.prototype;return n.onCreate=function(){switch(c.type){case s.wx:this.bottomAdType=o.Native;break;default:this.bottomAdType=o.Banner}},n.onOpen=function(){this.updateView(),d.openPrivacy?(this.cAUser.active=!0,this.cADec.active=!0):(this.cAUser.active=!1,this.cADec.active=!1),l.isRun?this.cSwitchChildrenCC_btn.index=0:this.cSwitchChildrenCC_btn.index=1},n.onClickReset=function(){l.hasRun()&&(this.closeUI(),l.reset())},n.onClickExit=function(){this.closeUI(),l.settingExit()},n.onClickAUser=function(){u.openUserUI()},n.onClickADec=function(){u.openDecUI()},n.onClickSwitchChildrenCC_music=function(){1==h.getVolume(!0)?h.setVolume(!0,0):h.setVolume(!0,1),this.updateView()},n.onClickSwitchChildrenCC_sound=function(){1==h.getVolume(!1)?h.setVolume(!1,0):h.setVolume(!1,1),this.updateView()},n.updateView=function(){1==h.getVolume(!0)?this.cSwitchChildrenCC_music.index=0:this.cSwitchChildrenCC_music.index=1,1==h.getVolume(!1)?this.cSwitchChildrenCC_sound.index=0:this.cSwitchChildrenCC_sound.index=1},i}(C))||p);i._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/setting', 'chunks:///_virtual/setting'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});