(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-42234c4a"],{"06c5":function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r("fb6a"),r("d3b7"),r("b0c0"),r("a630"),r("3ca3");var n=r("6b75");function o(t,e){if(t){if("string"===typeof t)return Object(n["a"])(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Object(n["a"])(t,e):void 0}}},"4df4":function(t,e,r){"use strict";var n=r("0366"),o=r("7b0b"),a=r("9bdd"),i=r("e95a"),s=r("50c4"),c=r("8418"),l=r("35a1");t.exports=function(t){var e,r,u,d,f,p,m=o(t),b="function"==typeof this?this:Array,h=arguments.length,v=h>1?arguments[1]:void 0,g=void 0!==v,y=l(m),w=0;if(g&&(v=n(v,h>2?arguments[2]:void 0,2)),void 0==y||b==Array&&i(y))for(e=s(m.length),r=new b(e);e>w;w++)p=g?v(m[w],w):m[w],c(r,w,p);else for(d=y.call(m),f=d.next,r=new b;!(u=f.call(d)).done;w++)p=g?a(d,v,[u.value,w],!0):u.value,c(r,w,p);return r.length=w,r}},"5cbe":function(t,e,r){t.exports=r.p+"img/recommend_bg.794b6628.jpg"},"6b75":function(t,e,r){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}r.d(e,"a",(function(){return n}))},"6bde":function(t,e,r){},"7ca7":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"big"},[r("div",{staticClass:"tab"},t._l(t.tab,(function(e,n){return r("div",{key:n,staticClass:"item",class:{active:n==t.currentindex},on:{click:function(e){return t.itemclick(n)}}},[r("span",[t._v(t._s(e))])])})),0)])},o=[],a={name:"TabControl",props:{tab:{type:Array,default:function(){return[]}}},data:function(){return{currentindex:0}},methods:{itemclick:function(t){this.currentindex=t,this.$emit("itemclick",t)}}},i=a,s=(r("dfdb"),r("2877")),c=Object(s["a"])(i,n,o,!1,null,"1aefad8b",null);e["a"]=c.exports},"9b71":function(t,e,r){},"9bdd":function(t,e,r){var n=r("825a"),o=r("2a62");t.exports=function(t,e,r,a){try{return a?e(n(r)[0],r[1]):e(r)}catch(i){throw o(t),i}}},a143:function(t,e,r){"use strict";r("b121")},a32e:function(t,e,r){"use strict";r("d3dd")},a630:function(t,e,r){var n=r("23e7"),o=r("4df4"),a=r("1c7e"),i=!a((function(t){Array.from(t)}));n({target:"Array",stat:!0,forced:i},{from:o})},b121:function(t,e,r){},b3d7:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("nav-bar",{staticClass:"home-nav"},[r("div",{attrs:{slot:"center"},slot:"center"},[t._v("首页")])]),r("tab-control",{directives:[{name:"show",rawName:"v-show",value:t.isFixed,expression:"isFixed"}],ref:"tabcontrol1",staticClass:"tabcontrol",attrs:{tab:["流行","精选","新品"]},on:{itemclick:t.tabClick}}),r("scroll",{ref:"scroll",staticClass:"home-content",attrs:{probeType:3,pullUpLoad:!0},on:{scroll:t.contentScroll,pullingUp:t.loadmore}},[r("home-swiper",{staticClass:"home-swiper",attrs:{banners:t.banners},on:{swiperimgload:t.swiperimgload}}),r("home-recommend",{attrs:{recommends:t.recommends}}),r("feature-view"),r("tab-control",{ref:"tabcontrol2",attrs:{tab:["流行","精选","新品"]},on:{itemclick:t.tabClick}}),r("goods-list",{attrs:{goods:t.showGoods}})],1),t.isShowBackTop?r("back-top",{nativeOn:{click:function(e){return t.backtopClick.apply(null,arguments)}}}):t._e()],1)},o=[],a=r("6b75");function i(t){if(Array.isArray(t))return Object(a["a"])(t)}r("a4d3"),r("e01a"),r("d3b7"),r("d28b"),r("3ca3"),r("ddb0"),r("a630");function s(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}var c=r("06c5");function l(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(t){return i(t)||s(t)||Object(c["a"])(t)||l()}var d=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("swiper",{staticClass:"home-swiper"},t._l(t.banners,(function(e){return r("swiper-item",{key:e.image},[r("a",{attrs:{href:e.link}},[r("img",{attrs:{src:e.image,alt:""},on:{load:t.swiperimgload}})])])})),1)},f=[],p=r("dc2c"),m={name:"HomeSwiper",props:{banners:{type:Array,default:function(){return[]}}},data:function(){return{isLoad:!1}},components:{Swiper:p["a"],SwiperItem:p["b"]},methods:{swiperimgload:function(){this.isLoad||(this.$emit("swiperimgload"),this.isLoad=!0)}}},b=m,h=r("2877"),v=Object(h["a"])(b,d,f,!1,null,"5fc744ec",null),g=v.exports,y=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"recommend"},t._l(t.recommends,(function(e){return r("div",{staticClass:"items"},[r("a",{attrs:{href:e.link}},[r("img",{attrs:{src:e.image,alt:""}}),r("div",{staticClass:"title"},[t._v(t._s(e.title))])])])})),0)},w=[],k={name:"HomeRecommend",data:function(){return{}},props:{recommends:{type:Array}},methods:{}},S=k,_=(r("f03f"),Object(h["a"])(S,y,w,!1,null,"df21cb96",null)),x=_.exports,C=r("a7ac"),$=r("7ca7"),A=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},O=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"feature"},[n("a",{attrs:{href:"https://act.mogujie.com/zzlx67"}},[n("img",{attrs:{src:r("5cbe"),alt:""}})])])}],j={name:"FeatureView",data:function(){return{}},methods:{}},T=j,G=(r("a32e"),Object(h["a"])(T,A,O,!1,null,"7e695d5d",null)),E=G.exports,F=r("d444"),L=r("5d17"),H=r("1bab");function I(){return Object(H["a"])({url:"/home/multidata"})}function U(t,e){return Object(H["a"])({url:"/home/data",params:{type:t,page:e}})}var B=r("eecb"),R={name:"Home",data:function(){return{banners:[],recommends:[],goods:{pop:{page:0,list:[]},sell:{page:0,list:[]},new:{page:0,list:[]}},currentType:"pop",topY:0,tapOffSetTop:0,isFixed:!1}},components:{NavBar:C["a"],HomeSwiper:g,HomeRecommend:x,TabControl:$["a"],FeatureView:E,GoodsList:F["a"],Scroll:L["a"]},methods:{getGoods:function(t){var e=this,r=this.goods[t].page+1;U(t,r).then((function(r){var n;(n=e.goods[t].list).push.apply(n,u(r.data.data.list)),e.goods.page+=1,e.$refs.scroll.finishPullUp()}))},tabClick:function(t){switch(t){case 0:this.currentType="pop";break;case 1:this.currentType="sell";break;case 2:this.currentType="new";break}this.$refs.tabcontrol1.currentindex=t,this.$refs.tabcontrol2.currentindex=t},contentScroll:function(t){this.topY=t,this.isShowBackTop=t<-800,this.isFixed=-t>this.tapOffSetTop},loadmore:function(){this.getGoods(this.currentType)},swiperimgload:function(){this.tapOffSetTop=this.$refs.tabcontrol2.$el.offsetTop}},computed:{showGoods:function(){return this.goods[this.currentType].list}},activated:function(){this.$refs.scroll.backtop(0,this.topY,0),this.$refs.scroll.refresh()},deactivated:function(){this.$bus.$off("itemImgLoad",this.imgRefresh)},created:function(){var t=this;I().then((function(e){t.banners=e.data.data.banner.list,t.recommends=e.data.data.recommend.list})),this.getGoods("pop"),this.getGoods("new"),this.getGoods("sell")},mixins:[B["b"],B["a"]],mounted:function(){}},Y=R,z=(r("a143"),Object(h["a"])(Y,n,o,!1,null,"d2ccf90e",null));e["default"]=z.exports},d28b:function(t,e,r){var n=r("746f");n("iterator")},d3dd:function(t,e,r){},dfdb:function(t,e,r){"use strict";r("9b71")},e01a:function(t,e,r){"use strict";var n=r("23e7"),o=r("83ab"),a=r("da84"),i=r("5135"),s=r("861d"),c=r("9bf2").f,l=r("e893"),u=a.Symbol;if(o&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var d={},f=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof f?new u(t):void 0===t?u():u(t);return""===t&&(d[e]=!0),e};l(f,u);var p=f.prototype=u.prototype;p.constructor=f;var m=p.toString,b="Symbol(test)"==String(u("test")),h=/^Symbol\((.*)\)[^)]+$/;c(p,"description",{configurable:!0,get:function(){var t=s(this)?this.valueOf():this,e=m.call(t);if(i(d,t))return"";var r=b?e.slice(7,-1):e.replace(h,"$1");return""===r?void 0:r}}),n({global:!0,forced:!0},{Symbol:f})}},f03f:function(t,e,r){"use strict";r("6bde")},fb6a:function(t,e,r){"use strict";var n=r("23e7"),o=r("861d"),a=r("e8b5"),i=r("23cb"),s=r("50c4"),c=r("fc6a"),l=r("8418"),u=r("b622"),d=r("1dde"),f=d("slice"),p=u("species"),m=[].slice,b=Math.max;n({target:"Array",proto:!0,forced:!f},{slice:function(t,e){var r,n,u,d=c(this),f=s(d.length),h=i(t,f),v=i(void 0===e?f:e,f);if(a(d)&&(r=d.constructor,"function"!=typeof r||r!==Array&&!a(r.prototype)?o(r)&&(r=r[p],null===r&&(r=void 0)):r=void 0,r===Array||void 0===r))return m.call(d,h,v);for(n=new(void 0===r?Array:r)(b(v-h,0)),u=0;h<v;h++,u++)h in d&&l(n,u,d[h]);return n.length=u,n}})}}]);
//# sourceMappingURL=chunk-42234c4a.8edaa1f8.js.map