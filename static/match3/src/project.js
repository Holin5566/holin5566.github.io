window.__require=function t(e,o,r){function n(c,s){if(!o[c]){if(!e[c]){var a=c.split("/");if(a=a[a.length-1],!e[a]){var u="function"==typeof __require&&__require;if(!s&&u)return u(a,!0);if(i)return i(a,!0);throw new Error("Cannot find module '"+c+"'")}c=a}var h=o[c]={exports:{}};e[c][0].call(h.exports,function(t){return n(e[c][1][t]||t)},h,h.exports,t,e,o,r)}return o[c].exports}for(var i="function"==typeof __require&&__require,c=0;c<r.length;c++)n(r[c]);return n}({Board:[function(t,e,o){"use strict";cc._RF.push(e,"a1d0d3gQm5GgqeXTqOipFJO","Board");var r,n,i=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function r(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(r.prototype=o.prototype,new r)}}(),c=this&&this.__decorate||function(t,e,o,r){var n,i=arguments.length,c=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(c=(i<3?n(c):i>3?n(e,o,c):n(e,o))||c);return i>3&&c&&Object.defineProperty(e,o,c),c},s=this&&this.__awaiter||function(t,e,o,r){return new(o||(o=Promise))(function(n,i){function c(t){try{a(r.next(t))}catch(t){i(t)}}function s(t){try{a(r.throw(t))}catch(t){i(t)}}function a(t){t.done?n(t.value):new o(function(e){e(t.value)}).then(c,s)}a((r=r.apply(t,e||[])).next())})},a=this&&this.__generator||function(t,e){var o,r,n,i,c={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(t){return function(e){return a([t,e])}}function a(i){if(o)throw new TypeError("Generator is already executing.");for(;c;)try{if(o=1,r&&(n=2&i[0]?r.return:i[0]?r.throw||((n=r.return)&&n.call(r),0):r.next)&&!(n=n.call(r,i[1])).done)return n;switch(r=0,n&&(i=[2&i[0],n.value]),i[0]){case 0:case 1:n=i;break;case 4:return c.label++,{value:i[1],done:!1};case 5:c.label++,r=i[1],i=[0];continue;case 7:i=c.ops.pop(),c.trys.pop();continue;default:if(!(n=(n=c.trys).length>0&&n[n.length-1])&&(6===i[0]||2===i[0])){c=0;continue}if(3===i[0]&&(!n||i[1]>n[0]&&i[1]<n[3])){c.label=i[1];break}if(6===i[0]&&c.label<n[1]){c.label=n[1],n=i;break}if(n&&c.label<n[2]){c.label=n[2],c.ops.push(i);break}n[2]&&c.ops.pop(),c.trys.pop();continue}i=e.call(t,c)}catch(t){i=[6,t],r=0}finally{o=n=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}};Object.defineProperty(o,"__esModule",{value:!0});var u,h,p=t("./GridSystem"),l=t("./Orb"),f=cc._decorator,d=f.ccclass,y=f.property;(function(t){t.ORB_PICK="ORB_PICK",t.ORB_MOVE="ORB_MOVE",t.ORB_MATCH="ORB_MATCH",t.ORB_SWITCH="ORB_SWITCH",t.ORB_DROP="ORB_DROP",t.TRIGGER_ENTER="TRIGGER_ENTER"})(u=o.EventType||(o.EventType={})),function(t){t[t.NONE=0]="NONE",t[t.WATER=1]="WATER",t[t.FIRE=2]="FIRE",t[t.WOOD=3]="WOOD",t[t.LIGHT=4]="LIGHT",t[t.DARK=5]="DARK",t[t.HEAL=6]="HEAL"}(h=o.OrbType||(o.OrbType={})),o.OrbColor=((r={})[h.NONE]=cc.Color.WHITE,r[h.WATER]=cc.color(100,150,255),r[h.FIRE]=cc.color(230,100,100),r[h.WOOD]=cc.color(100,200,100),r[h.HEAL]=cc.color(255,140,170),r[h.LIGHT]=cc.color(250,250,100),r[h.DARK]=cc.color(170,60,255),r),o.OrbString=((n={})[h.NONE]="\u7121",n[h.WATER]="\u6c34",n[h.FIRE]="\u706b",n[h.WOOD]="\u6728",n[h.HEAL]="\u5fc3",n[h.LIGHT]="\u5149",n[h.DARK]="\u6697",n);var _=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.orbPrefab=null,e.gridNode=null,e.blockNode=null,e.trigger=null,e.gap=10,e.gridCol=6,e.gridRow=5,e._grid=p.default.instance,e._passedOrbs=[],e}return i(e,t),e.prototype.start=function(){this.initGrid(),cc.director.getCollisionManager().enabled=!0,cc.director.getCollisionManager().enabledDebugDraw=!0,cc.systemEvent.on(u.ORB_SWITCH,this.onOrbSwitch,this),cc.systemEvent.on(u.ORB_MATCH,this.onOrbMatch,this),cc.systemEvent.on(u.ORB_PICK,this.onOrbPick,this)},e.prototype.onDestroy=function(){cc.systemEvent.off(u.ORB_SWITCH,this.onOrbSwitch,this),cc.systemEvent.off(u.ORB_MATCH,this.onOrbMatch,this),cc.systemEvent.off(u.ORB_PICK,this.onOrbPick,this)},e.prototype.initGrid=function(){var t=cc.v2(this.gridCol,this.gridRow),e=cc.v2(this.orbPrefab.width,this.orbPrefab.height),o=this.gap;this._grid.init(t,e,o);for(var r=0;r<t.x;r++)for(var n=0;n<t.y;n++){var i=cc.instantiate(this.orbPrefab),c=i.getComponent(l.default);c.getComponent(cc.CircleCollider).radius=this.orbPrefab.width/3,i.setParent(this.gridNode),i.setPosition(this._grid.getPos(cc.v2(r,n)));var s=[h.WATER,h.FIRE,h.WOOD,h.LIGHT,h.DARK,h.HEAL][Math.floor(6*Math.random())];c.init(cc.v2(r,n),s),this._grid.insertItem(cc.v2(r,n),c);var a=cc.instantiate(this.trigger.node).getComponent(cc.CircleCollider);a.node.setParent(this.gridNode),a.node.setPosition(this._grid.getPos(cc.v2(r,n))),a.radius=this.orbPrefab.width/3}},e.prototype.init=function(){var t=this.orbPrefab.width*this.gridCol+this.gap*(this.gridCol-1),e=this.orbPrefab.height*this.gridRow+this.gap*(this.gridRow-1);this.blockNode.setContentSize(cc.size(t,e)),this.blockNode.setPosition(cc.v2(t/2,e/2)),this.blockNode.active=!1},e.prototype.onOrbPick=function(t){this._passedOrbs.push(t)},e.prototype.onOrbSwitch=function(t,e){cc.warn("onOrbExchange: ["+t.x+", "+t.y+"] => ["+e.x+", "+e.y+"]");var o=this._grid.getItem(e),r=this._grid.getItem(t);this._passedOrbs.push(o),this._grid.switchItem(t,e),r.setCoord(e),o.setCoord(t),o.playSwtichAni(!0)},e.prototype.onOrbMatch=function(){return s(this,void 0,void 0,function(){var t,e,o,r,n=this;return a(this,function(i){switch(i.label){case 0:return t=[],e=[],this._passedOrbs.forEach(function(e){cc.warn("passedOrb: ["+e.coord.x+", "+e.coord.y+"]"),t.push.apply(t,n._grid.getMatch3List(e.coord))}),this._passedOrbs.length=0,t.sort(function(t,e){return t.coord.y-e.coord.y}),[4,Promise.all(t.map(function(t){return t.playWinEffect()}))];case 1:return i.sent(),o=[],t.forEach(function(t){var e=t.coord.x;o[e]=o[e]?o[e]+1:1,t.node.y=t.node.height*o[e]}),t.forEach(function(t){var o=t.coord,r=o.x,i=o.y;e[r]=e[r]?e[r]:[];for(var c=i-1;c>=0;c--){var s=n._grid.getItem(cc.v2(r,c));e[r].includes(s)||s.isMatch||e[r].push(s),s.setCoord(cc.v2(r,c+1)),n._grid.insertItem(cc.v2(r,c+1),s)}e[r].includes(t)||e[r].push(t),t.setCoord(cc.v2(r,0)),n._grid.insertItem(cc.v2(r,0),t)}),r=[],e.forEach(function(t){t.forEach(function(e,o){var i=o/t.length;n._passedOrbs.push(e),r.push(e.playDropAni(i))})}),t.forEach(function(t){t.setType(),t.isMatch=!1}),[4,Promise.all(r)];case 2:return i.sent(),t.length>0&&this.onOrbMatch(),[2]}})})},c([y(cc.Node)],e.prototype,"orbPrefab",void 0),c([y(cc.Node)],e.prototype,"gridNode",void 0),c([y(cc.Node)],e.prototype,"blockNode",void 0),c([y(cc.CircleCollider)],e.prototype,"trigger",void 0),c([y],e.prototype,"gap",void 0),c([y],e.prototype,"gridCol",void 0),c([y],e.prototype,"gridRow",void 0),e=c([d],e)}(cc.Component);o.default=_,cc._RF.pop()},{"./GridSystem":"GridSystem","./Orb":"Orb"}],GridSystem:[function(t,e,o){"use strict";cc._RF.push(e,"95077DlHHpN8p7KlRjJewGf","GridSystem"),Object.defineProperty(o,"__esModule",{value:!0});var r=function(){function t(){}return Object.defineProperty(t,"instance",{get:function(){return t._instance||(t._instance=new t),t._instance},enumerable:!0,configurable:!0}),t.prototype.init=function(t,e,o){this._gridSize=t,this._cellSize=e,this._gap=o,this._orbMatrix=[]},t.prototype.insertItem=function(t,e){this._orbMatrix[t.x]||(this._orbMatrix[t.x]=[]),this._orbMatrix[t.x][t.y]=e},t.prototype.switchItem=function(t,e){var o=this._orbMatrix[t.x][t.y],r=this._orbMatrix[e.x][e.y];this._orbMatrix[t.x][t.y]=r,this._orbMatrix[e.x][e.y]=o},t.prototype.getItem=function(t){return this._orbMatrix[t.x][t.y]},t.prototype.getPos=function(t){return cc.v2(t.x*(this._cellSize.x+this._gap),-t.y*(this._cellSize.y+this._gap))},t.prototype.getCoord=function(t){var e=this._cellSize.x+this._gap,o=this._cellSize.y+this._gap,r=Math.round(t.x/e),n=-Math.round(t.y/o);return cc.v2(r,n)},t.prototype.isOverSize=function(t){return t.x<0||t.x>=this._gridSize.x||t.y<0||t.y>=this._gridSize.y},t.prototype.matchCheck=function(t,e){if(this.isOverSize(t)||this.isOverSize(t.add(e)))return[];var o=this.getItem(t),r=this.getItem(t.add(e));return r.isMatch?[]:o.type===r.type?[r].concat(this.matchCheck(t.add(e),e)):[]},t.prototype.getMatch3List=function(t){var e=this,o=[];return[cc.v2(1,0),cc.v2(0,1)].forEach(function(r){var n=e.matchCheck(t,r).concat(e.matchCheck(t,cc.Vec2.ZERO.sub(r)));n.length>=2&&n.forEach(function(t){t.isMatch=!0,o.push(t)})}),o.forEach(function(t){var r=e.getMatch3List(t.coord);r.length>0&&o.push.apply(o,r)}),o.length>0&&o.push(this.getItem(t)),o},t._instance=null,t}();o.default=r,cc._RF.pop()},{}],Orb:[function(t,e,o){"use strict";cc._RF.push(e,"aca6cX4paBAq6OzZbBBGXaf","Orb");var r=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function r(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(r.prototype=o.prototype,new r)}}(),n=this&&this.__decorate||function(t,e,o,r){var n,i=arguments.length,c=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(c=(i<3?n(c):i>3?n(e,o,c):n(e,o))||c);return i>3&&c&&Object.defineProperty(e,o,c),c},i=this&&this.__awaiter||function(t,e,o,r){return new(o||(o=Promise))(function(n,i){function c(t){try{a(r.next(t))}catch(t){i(t)}}function s(t){try{a(r.throw(t))}catch(t){i(t)}}function a(t){t.done?n(t.value):new o(function(e){e(t.value)}).then(c,s)}a((r=r.apply(t,e||[])).next())})},c=this&&this.__generator||function(t,e){var o,r,n,i,c={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(t){return function(e){return a([t,e])}}function a(i){if(o)throw new TypeError("Generator is already executing.");for(;c;)try{if(o=1,r&&(n=2&i[0]?r.return:i[0]?r.throw||((n=r.return)&&n.call(r),0):r.next)&&!(n=n.call(r,i[1])).done)return n;switch(r=0,n&&(i=[2&i[0],n.value]),i[0]){case 0:case 1:n=i;break;case 4:return c.label++,{value:i[1],done:!1};case 5:c.label++,r=i[1],i=[0];continue;case 7:i=c.ops.pop(),c.trys.pop();continue;default:if(!(n=(n=c.trys).length>0&&n[n.length-1])&&(6===i[0]||2===i[0])){c=0;continue}if(3===i[0]&&(!n||i[1]>n[0]&&i[1]<n[3])){c.label=i[1];break}if(6===i[0]&&c.label<n[1]){c.label=n[1],n=i;break}if(n&&c.label<n[2]){c.label=n[2],c.ops.push(i);break}n[2]&&c.ops.pop(),c.trys.pop();continue}i=e.call(t,c)}catch(t){i=[6,t],r=0}finally{o=n=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}};Object.defineProperty(o,"__esModule",{value:!0});var s=t("./Board"),a=t("./GridSystem"),u=cc._decorator,h=u.ccclass,p=u.property,l=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.graphics=null,e.label=null,e.isMatch=!1,e._coord=null,e._type=null,e._gap=10,e._coordBeforMove=null,e._posBeforMove=null,e._isMoving=!1,e._isPlaying=!1,e._isDragging=!1,e}var o;return r(e,t),o=e,Object.defineProperty(e.prototype,"coord",{get:function(){return cc.v2(this._coord)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"coordStr",{get:function(){return s.OrbString[this._type]},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"type",{get:function(){return this._type},enumerable:!0,configurable:!0}),e.prototype.start=function(){},e.prototype.onDestroy=function(){this.node.off(cc.Node.EventType.TOUCH_START,this.onTouchStart,this),this.node.off(cc.Node.EventType.TOUCH_MOVE,this.onTouchMove,this),this.node.off(cc.Node.EventType.TOUCH_END,this.onTouchEnd,this)},e.prototype.init=function(t,e){this._coord=t,this.graphics.clear(),this.graphics.circle(0,0,this.node.height/2),this.setType(e),this.node.on(cc.Node.EventType.TOUCH_START,this.onTouchStart,this),this.node.on(cc.Node.EventType.TOUCH_MOVE,this.onTouchMove,this),this.node.on(cc.Node.EventType.TOUCH_END,this.onTouchEnd,this)},e.prototype.playSwtichAni=function(t){var e=this;return void 0===t&&(t=!0),this.node.setSiblingIndex(999),new Promise(function(o,r){t?(e._isMoving=!0,cc.tween(e.node).to(.1,{position:cc.v3(a.default.instance.getPos(e.coord))},{easing:cc.easing.quadOut}).call(o).call(function(){return e._isMoving=!1}).start()):e.node.setPosition(a.default.instance.getPos(e.coord))})},e.prototype.playDropAni=function(t){return i(this,void 0,Promise,function(){var e,o,r,n=this;return c(this,function(i){return this.node.active=!0,r=(e=.5)-(o=e*t)+.3,[2,new Promise(function(t,e){n._isMoving=!0,cc.tween(n.node).delay(o).to(r,{position:cc.v3(a.default.instance.getPos(n._coord))},{easing:cc.easing.quadOut}).call(function(){return n._isMoving=!1}).call(t).start()})]})})},e.prototype.setType=function(t){this._type=t||[s.OrbType.WATER,s.OrbType.FIRE,s.OrbType.WOOD,s.OrbType.LIGHT,s.OrbType.DARK,s.OrbType.HEAL][Math.floor(6*Math.random())],this.graphics.fillColor=s.OrbColor[this._type],this.graphics.fill(),this.label.string=this.coordStr},e.prototype.setCoord=function(t){this._coord=t},e.prototype.playWinEffect=function(){return i(this,void 0,void 0,function(){var t=this;return c(this,function(e){return this._isPlaying?[2]:(this._isPlaying=!0,[2,new Promise(function(e,o){cc.tween(t.node).to(.2,{scale:1.2},{easing:cc.easing.quartOut}).to(.5,{scale:0,opacity:0},{easing:cc.easing.quadOut}).call(function(){t.node.active=!1,t.node.scale=1,t.node.opacity=255,t._isPlaying=!1,e(null)}).start()})])})})},e.prototype.onTouchStart=function(t){console.log("onTouchStart: ["+this._coord.x+", "+this._coord.y+"]"),this._posBeforMove=this.node.getPosition(),this._coordBeforMove=this._coord,this._isDragging=!0,cc.systemEvent.emit(s.EventType.ORB_PICK,this)},e.prototype.onTouchMove=function(t){var e=t.getDelta(),o=this.node.getPosition();this.node.setPosition(o.add(e)),this.node.setSiblingIndex(1e3)},e.prototype.onCollisionEnter=function(t,e){if(!t.getComponent(o)&&this._isDragging){var r=a.default.instance.getCoord(cc.v2(t.node.position));cc.systemEvent.emit(s.EventType.ORB_SWITCH,this._coord,r)}},e.prototype.onTouchEnd=function(t){console.log("onTouchEnd",this._coord),this.node.setPosition(a.default.instance.getPos(this._coord)),this._posBeforMove=null,this._coordBeforMove=null,this._isDragging=!1,cc.systemEvent.emit(s.EventType.ORB_MATCH,t,this)},n([p(cc.Graphics)],e.prototype,"graphics",void 0),n([p(cc.Label)],e.prototype,"label",void 0),e=o=n([h],e)}(cc.Component);o.default=l,cc._RF.pop()},{"./Board":"Board","./GridSystem":"GridSystem"}]},{},["Board","GridSystem","Orb"]);