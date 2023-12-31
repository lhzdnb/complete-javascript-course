var e,t,r,n,i,a,o,s,c,u,l,d,p,h,f,m,v,g,b,y=globalThis;function _(e){return e&&e.__esModule?e.default:e}var w={},k={},S=function(e){return e&&e.Math===Math&&e};k=S("object"==typeof globalThis&&globalThis)||S("object"==typeof window&&window)||S("object"==typeof self&&self)||S("object"==typeof y&&y)||S("object"==typeof k&&k)||function(){return this}()||Function("return this")();var E={},F={};E=!(F=function(e){try{return!!e()}catch(e){return!0}})(function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]});var $={},M={};M=!F(function(){var e=(function(){}).bind();return"function"!=typeof e||e.hasOwnProperty("prototype")});var j=Function.prototype.call;$=M?j.bind(j):function(){return j.apply(j,arguments)};var O={}.propertyIsEnumerable,P=Object.getOwnPropertyDescriptor;a=P&&!O.call({1:2},1)?function(e){var t=P(this,e);return!!t&&t.enumerable}:O;var T={};T=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var q={},I={},x={},L=Function.prototype,H=L.call,N=M&&L.bind.bind(H,H),C={},A=(x=M?N:function(e){return function(){return H.apply(e,arguments)}})({}.toString),U=x("".slice);C=function(e){return U(A(e),8,-1)};var D=Object,R=x("".split);I=F(function(){return!D("z").propertyIsEnumerable(0)})?function(e){return"String"===C(e)?R(e,""):D(e)}:D;var W={},z={};z=function(e){return null==e};var B=TypeError;W=function(e){if(z(e))throw new B("Can't call method on "+e);return e},q=function(e){return I(W(e))};var Q={},J={},V={},G={},K="object"==typeof document&&document.all;G=void 0===K&&void 0!==K?function(e){return"function"==typeof e||e===K}:function(e){return"function"==typeof e},V=function(e){return"object"==typeof e?null!==e:G(e)};var Y={},X={};X=function(e,t){var r;return arguments.length<2?(r=k[e],G(r)?r:void 0):k[e]&&k[e][t]};var Z={};Z=x({}.isPrototypeOf);var ee={},et={},er={},en={};en="undefined"!=typeof navigator&&String(navigator.userAgent)||"";var ei=k.process,ea=k.Deno,eo=ei&&ei.versions||ea&&ea.version,es=eo&&eo.v8;es&&(s=(o=es.split("."))[0]>0&&o[0]<4?1:+(o[0]+o[1])),!s&&en&&(!(o=en.match(/Edge\/(\d+)/))||o[1]>=74)&&(o=en.match(/Chrome\/(\d+)/))&&(s=+o[1]),er=s;var ec=k.String;ee=(et=!!Object.getOwnPropertySymbols&&!F(function(){var e=Symbol("symbol detection");return!ec(e)||!(Object(e) instanceof Symbol)||!Symbol.sham&&er&&er<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var eu=Object;Y=ee?function(e){return"symbol"==typeof e}:function(e){var t=X("Symbol");return G(t)&&Z(t.prototype,eu(e))};var el={},ed={},ep={},eh=String;ep=function(e){try{return eh(e)}catch(e){return"Object"}};var ef=TypeError;ed=function(e){if(G(e))return e;throw new ef(ep(e)+" is not a function")},el=function(e,t){var r=e[t];return z(r)?void 0:ed(r)};var em={},ev=TypeError;em=function(e,t){var r,n;if("string"===t&&G(r=e.toString)&&!V(n=$(r,e))||G(r=e.valueOf)&&!V(n=$(r,e))||"string"!==t&&G(r=e.toString)&&!V(n=$(r,e)))return n;throw new ev("Can't convert object to primitive value")};var eg={},eb={};eb=!1;var ey={},e_={},ew=Object.defineProperty;e_=function(e,t){try{ew(k,e,{value:t,configurable:!0,writable:!0})}catch(r){k[e]=t}return t};var ek="__core-js_shared__";ey=k[ek]||e_(ek,{}),(eg=function(e,t){return ey[e]||(ey[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.35.0",mode:eb?"pure":"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.35.0/LICENSE",source:"https://github.com/zloirock/core-js"});var eS={},eE={},eF=Object;eE=function(e){return eF(W(e))};var e$=x({}.hasOwnProperty);eS=Object.hasOwn||function(e,t){return e$(eE(e),t)};var eM={},ej=0,eO=Math.random(),eP=x(1..toString);eM=function(e){return"Symbol("+(void 0===e?"":e)+")_"+eP(++ej+eO,36)};var eT=k.Symbol,eq=eg("wks"),eI=ee?eT.for||eT:eT&&eT.withoutSetter||eM,ex=TypeError,eL=(eS(eq,e="toPrimitive")||(eq[e]=et&&eS(eT,e)?eT[e]:eI("Symbol."+e)),eq[e]);J=function(e,t){if(!V(e)||Y(e))return e;var r,n=el(e,eL);if(n){if(void 0===t&&(t="default"),r=$(n,e,t),!V(r)||Y(r))return r;throw new ex("Can't convert object to primitive value")}return void 0===t&&(t="number"),em(e,t)},Q=function(e){var t=J(e,"string");return Y(t)?t:t+""};var eH={},eN={},eC=k.document,eA=V(eC)&&V(eC.createElement);eN=function(e){return eA?eC.createElement(e):{}},eH=!E&&!F(function(){return 7!==Object.defineProperty(eN("div"),"a",{get:function(){return 7}}).a});var eU=Object.getOwnPropertyDescriptor;i=E?eU:function(e,t){if(e=q(e),t=Q(t),eH)try{return eU(e,t)}catch(e){}if(eS(e,t))return T(!$(a,e,t),e[t])};var eD={},eR={};eR=E&&F(function(){return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var eW={},ez=String,eB=TypeError;eW=function(e){if(V(e))return e;throw new eB(ez(e)+" is not an object")};var eQ=TypeError,eJ=Object.defineProperty,eV=Object.getOwnPropertyDescriptor,eG="enumerable",eK="configurable",eY="writable";c=E?eR?function(e,t,r){if(eW(e),t=Q(t),eW(r),"function"==typeof e&&"prototype"===t&&"value"in r&&eY in r&&!r[eY]){var n=eV(e,t);n&&n[eY]&&(e[t]=r.value,r={configurable:eK in r?r[eK]:n[eK],enumerable:eG in r?r[eG]:n[eG],writable:!1})}return eJ(e,t,r)}:eJ:function(e,t,r){if(eW(e),t=Q(t),eW(r),eH)try{return eJ(e,t,r)}catch(e){}if("get"in r||"set"in r)throw new eQ("Accessors not supported");return"value"in r&&(e[t]=r.value),e},eD=E?function(e,t,r){return c(e,t,T(1,r))}:function(e,t,r){return e[t]=r,e};var eX={},eZ={},e0=Function.prototype,e1=E&&Object.getOwnPropertyDescriptor,e2=eS(e0,"name")&&(!E||E&&e1(e0,"name").configurable),e3={},e4=x(Function.toString);G(ey.inspectSource)||(ey.inspectSource=function(e){return e4(e)}),e3=ey.inspectSource;var e7={},e5={},e8=k.WeakMap;e5=G(e8)&&/native code/.test(String(e8));var e9={},e6=eg("keys");e9=function(e){return e6[e]||(e6[e]=eM(e))};var te={};te={};var tt="Object already initialized",tr=k.TypeError,tn=k.WeakMap;if(e5||ey.state){var ti=ey.state||(ey.state=new tn);ti.get=ti.get,ti.has=ti.has,ti.set=ti.set,u=function(e,t){if(ti.has(e))throw new tr(tt);return t.facade=e,ti.set(e,t),t},l=function(e){return ti.get(e)||{}},d=function(e){return ti.has(e)}}else{var ta=e9("state");te[ta]=!0,u=function(e,t){if(eS(e,ta))throw new tr(tt);return t.facade=e,eD(e,ta,t),t},l=function(e){return eS(e,ta)?e[ta]:{}},d=function(e){return eS(e,ta)}}var to=(e7={set:u,get:l,has:d,enforce:function(e){return d(e)?l(e):u(e,{})},getterFor:function(e){return function(t){var r;if(!V(t)||(r=l(t)).type!==e)throw new tr("Incompatible receiver, "+e+" required");return r}}}).enforce,ts=e7.get,tc=String,tu=Object.defineProperty,tl=x("".slice),tp=x("".replace),th=x([].join),tf=E&&!F(function(){return 8!==tu(function(){},"length",{value:8}).length}),tm=String(String).split("String"),tv=eZ=function(e,t,r){"Symbol("===tl(tc(t),0,7)&&(t="["+tp(tc(t),/^Symbol\(([^)]*)\)/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!eS(e,"name")||e2&&e.name!==t)&&(E?tu(e,"name",{value:t,configurable:!0}):e.name=t),tf&&r&&eS(r,"arity")&&e.length!==r.arity&&tu(e,"length",{value:r.arity});try{r&&eS(r,"constructor")&&r.constructor?E&&tu(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var n=to(e);return eS(n,"source")||(n.source=th(tm,"string"==typeof t?t:"")),e};Function.prototype.toString=tv(function(){return G(this)&&ts(this).source||e3(this)},"toString"),eX=function(e,t,r,n){n||(n={});var i=n.enumerable,a=void 0!==n.name?n.name:t;if(G(r)&&eZ(r,a,n),n.global)i?e[t]=r:e_(t,r);else{try{n.unsafe?e[t]&&(i=!0):delete e[t]}catch(e){}i?e[t]=r:c(e,t,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return e};var tg={},tb={},ty={},t_={},tw={},tk={},tS=Math.ceil,tE=Math.floor;tk=Math.trunc||function(e){var t=+e;return(t>0?tE:tS)(t)},tw=function(e){var t=+e;return t!=t||0===t?0:tk(t)};var tF=Math.max,t$=Math.min;t_=function(e,t){var r=tw(e);return r<0?tF(r+t,0):t$(r,t)};var tM={},tj={},tO=Math.min;tj=function(e){return e>0?tO(tw(e),9007199254740991):0},tM=function(e){return tj(e.length)};var tP=function(e){return function(t,r,n){var i,a=q(t),o=tM(a),s=t_(n,o);if(e&&r!=r){for(;o>s;)if((i=a[s++])!=i)return!0}else for(;o>s;s++)if((e||s in a)&&a[s]===r)return e||s||0;return!e&&-1}},tT={includes:tP(!0),indexOf:tP(!1)}.indexOf,tq=x([].push);ty=function(e,t){var r,n=q(e),i=0,a=[];for(r in n)!eS(te,r)&&eS(n,r)&&tq(a,r);for(;t.length>i;)eS(n,r=t[i++])&&(~tT(a,r)||tq(a,r));return a};var tI=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");p=Object.getOwnPropertyNames||function(e){return ty(e,tI)},h=Object.getOwnPropertySymbols;var tx=x([].concat);tb=X("Reflect","ownKeys")||function(e){var t=p(eW(e));return h?tx(t,h(e)):t},tg=function(e,t,r){for(var n=tb(t),a=0;a<n.length;a++){var o=n[a];eS(e,o)||r&&eS(r,o)||c(e,o,i(t,o))}};var tL={},tH=/#|\.prototype\./,tN=function(e,t){var r=tA[tC(e)];return r===tD||r!==tU&&(G(t)?F(t):!!t)},tC=tN.normalize=function(e){return String(e).replace(tH,".").toLowerCase()},tA=tN.data={},tU=tN.NATIVE="N",tD=tN.POLYFILL="P";tL=tN,w=function(e,t){var r,n,a,o,s,c=e.target,u=e.global,l=e.stat;if(r=u?k:l?k[c]||e_(c,{}):(k[c]||{}).prototype)for(n in t){if(o=t[n],a=e.dontCallGetSet?(s=i(r,n))&&s.value:r[n],!tL(u?n:c+(l?".":"#")+n,e.forced)&&void 0!==a){if(typeof o==typeof a)continue;tg(o,a)}(e.sham||a&&a.sham)&&eD(o,"sham",!0),eX(r,n,o,e)}};var tR={},tW={},tz=Function.prototype,tB=tz.apply,tQ=tz.call;tW="object"==typeof Reflect&&Reflect.apply||(M?tQ.bind(tB):function(){return tQ.apply(tB,arguments)});var tJ={},tV={},tG=(tV=function(e){if("Function"===C(e))return x(e)})(tV.bind);tJ=function(e,t){return ed(e),void 0===t?e:M?tG(e,t):function(){return e.apply(t,arguments)}};var tK={};tK=X("document","documentElement");var tY={};tY=x([].slice);var tX={},tZ=TypeError;tX=function(e,t){if(e<t)throw new tZ("Not enough arguments");return e};var t0={};t0=/(?:ipad|iphone|ipod).*applewebkit/i.test(en);var t1={};t1="process"===C(k.process);var t2=k.setImmediate,t3=k.clearImmediate,t4=k.process,t7=k.Dispatch,t5=k.Function,t8=k.MessageChannel,t9=k.String,t6=0,re={},rt="onreadystatechange";F(function(){f=k.location});var rr=function(e){if(eS(re,e)){var t=re[e];delete re[e],t()}},rn=function(e){return function(){rr(e)}},ri=function(e){rr(e.data)},ra=function(e){k.postMessage(t9(e),f.protocol+"//"+f.host)};t2&&t3||(t2=function(e){tX(arguments.length,1);var t=G(e)?e:t5(e),r=tY(arguments,1);return re[++t6]=function(){tW(t,void 0,r)},m(t6),t6},t3=function(e){delete re[e]},t1?m=function(e){t4.nextTick(rn(e))}:t7&&t7.now?m=function(e){t7.now(rn(e))}:t8&&!t0?(g=(v=new t8).port2,v.port1.onmessage=ri,m=tJ(g.postMessage,g)):k.addEventListener&&G(k.postMessage)&&!k.importScripts&&f&&"file:"!==f.protocol&&!F(ra)?(m=ra,k.addEventListener("message",ri,!1)):m=rt in eN("script")?function(e){tK.appendChild(eN("script"))[rt]=function(){tK.removeChild(this),rr(e)}}:function(e){setTimeout(rn(e),0)});var ro=(tR={set:t2,clear:t3}).clear;w({global:!0,bind:!0,enumerable:!0,forced:k.clearImmediate!==ro},{clearImmediate:ro});var rs=tR.set,rc={},ru={};ru="function"==typeof Bun&&Bun&&"string"==typeof Bun.version;var rl=k.Function,rd=/MSIE .\./.test(en)||ru&&((t=k.Bun.version.split(".")).length<3||"0"===t[0]&&(t[1]<3||"3"===t[1]&&"0"===t[2]));rc=function(e,t){var r=t?2:1;return rd?function(n,i){var a=tX(arguments.length,1)>r,o=G(n)?n:rl(n),s=a?tY(arguments,r):[],c=a?function(){tW(o,this,s)}:o;return t?e(c,i):e(c)}:e};var rp=k.setImmediate?rc(rs,!1):rs;w({global:!0,bind:!0,enumerable:!0,forced:k.setImmediate!==rp},{setImmediate:rp});const rh="https://forkify-api.herokuapp.com/api/v2/recipes",rf="af0bb7f7-edc0-4f64-884f-75b85a8ee360";async function rm(e,t){try{let r=t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e),n=await Promise.race([r,new Promise(function(e,t){setTimeout(function(){t(Error("Request took too long! Timeout after 10 second"))},1e4)})]),i=await n.json();if(!n.ok)throw Error(`${i.message} (${n.status})`);return i}catch(e){throw e}}const rv={recipe:{},search:{query:"",results:[],page:1,resultsPerPage:10},bookmarks:[]};function rg(e){let{recipe:t}=e.data;return{id:t.id,title:t.title,publisher:t.publisher,sourceUrl:t.source_url,image:t.image_url,servings:t.servings,cookingTime:t.cooking_time,ingredients:t.ingredients,...t.key&&{key:t.key}}}async function rb(e){try{let t=await rm(`${rh}/${e}`);rv.recipe=rg(t),rv.recipe.bookmarked=rv.bookmarks.some(t=>t.id===e)}catch(e){throw console.error(e),e}}async function ry(e){try{rv.search.query=e;let{data:t}=await rm(`${rh}?search=${e}&key=${rf}`);rv.search.results=t.recipes.map(e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url,...e.key&&{key:e.key}})),rv.search.page=1}catch(e){throw console.error(e),e}}function r_(e=rv.search.page){rv.search.page=e;let t=(e-1)*rv.search.resultsPerPage,r=e*rv.search.resultsPerPage;return rv.search.results.slice(t,r)}function rw(){localStorage.setItem("bookmarks",JSON.stringify(rv.bookmarks))}function rk(e){rv.bookmarks.push(e),e.id===rv.recipe.id&&(rv.recipe.bookmarked=!0),rw()}async function rS(e){try{let t=Object.entries(e).filter(e=>e[0].startsWith("ingredient")&&""!==e[1]).map(e=>{let t=e[1].split(",").map(e=>e.trim());if(3!==t.length)throw Error("Wrong ingredient format! Please use the correct format.");let[r,n,i]=t;return{quantity:r?Number(r):null,unit:n,description:i}}),r={title:e.title,publisher:e.publisher,source_url:e.sourceUrl,image_url:e.image,servings:Number(e.servings),cooking_time:Number(e.cookingTime),ingredients:t},n=await rm(`${rh}?key=${rf}`,r);rv.recipe=rg(n),rk(rv.recipe)}catch(e){throw e}}rv.bookmarks=JSON.parse(localStorage.getItem("bookmarks"))||[];var rE={};rE=new URL("icons.c14567a0.svg",import.meta.url).toString(),(Fraction=function(e,t){if(void 0!==e&&t)"number"==typeof e&&"number"==typeof t?(this.numerator=e,this.denominator=t):"string"==typeof e&&"string"==typeof t&&(this.numerator=parseInt(e),this.denominator=parseInt(t));else if(void 0===t){if("number"==typeof(num=e))this.numerator=num,this.denominator=1;else if("string"==typeof num){var r,n,i=num.split(" ");if(i[0]&&(r=i[0]),i[1]&&(n=i[1]),r%1==0&&n&&n.match("/"))return new Fraction(r).add(new Fraction(n));if(!r||n)return;if("string"==typeof r&&r.match("/")){var a=r.split("/");this.numerator=a[0],this.denominator=a[1]}else{if("string"==typeof r&&r.match("."))return new Fraction(parseFloat(r));this.numerator=parseInt(r),this.denominator=1}}}this.normalize()}).prototype.clone=function(){return new Fraction(this.numerator,this.denominator)},Fraction.prototype.toString=function(){if("NaN"===this.denominator)return"NaN";var e=this.numerator/this.denominator>0?Math.floor(this.numerator/this.denominator):Math.ceil(this.numerator/this.denominator),t=this.numerator%this.denominator,r=this.denominator,n=[];return 0!=e&&n.push(e),0!=t&&n.push((0===e?t:Math.abs(t))+"/"+r),n.length>0?n.join(" "):0},Fraction.prototype.rescale=function(e){return this.numerator*=e,this.denominator*=e,this},Fraction.prototype.add=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator+=e.numerator,t.normalize()},Fraction.prototype.subtract=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator-=e.numerator,t.normalize()},Fraction.prototype.multiply=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.numerator,t.denominator*=e.denominator;else{if("number"!=typeof e)return t.multiply(new Fraction(e));t.numerator*=e}return t.normalize()},Fraction.prototype.divide=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.denominator,t.denominator*=e.numerator;else{if("number"!=typeof e)return t.divide(new Fraction(e));t.denominator*=e}return t.normalize()},Fraction.prototype.equals=function(e){e instanceof Fraction||(e=new Fraction(e));var t=this.clone().normalize(),e=e.clone().normalize();return t.numerator===e.numerator&&t.denominator===e.denominator},Fraction.prototype.normalize=(r=function(e){return"number"==typeof e&&(e>0&&e%1>0&&e%1<1||e<0&&e%-1<0&&e%-1>-1)},n=function(e,t){if(!t)return Math.round(e);var r=Math.pow(10,t);return Math.round(e*r)/r},function(){if(r(this.denominator)){var e=n(this.denominator,9),t=Math.pow(10,e.toString().split(".")[1].length);this.denominator=Math.round(this.denominator*t),this.numerator*=t}if(r(this.numerator)){var e=n(this.numerator,9),t=Math.pow(10,e.toString().split(".")[1].length);this.numerator=Math.round(this.numerator*t),this.denominator*=t}var i=Fraction.gcf(this.numerator,this.denominator);return this.numerator/=i,this.denominator/=i,(this.numerator<0&&this.denominator<0||this.numerator>0&&this.denominator<0)&&(this.numerator*=-1,this.denominator*=-1),this}),Fraction.gcf=function(e,t){var r=[],n=Fraction.primeFactors(e),i=Fraction.primeFactors(t);return(n.forEach(function(e){var t=i.indexOf(e);t>=0&&(r.push(e),i.splice(t,1))}),0===r.length)?1:function(){var e,t=r[0];for(e=1;e<r.length;e++)t*=r[e];return t}()},Fraction.primeFactors=function(e){for(var t=Math.abs(e),r=[],n=2;n*n<=t;)t%n==0?(r.push(n),t/=n):n++;return 1!=t&&r.push(t),r},b=Fraction;class rF{_data;_parentElement;_message;render(e,t=!0){if(!e||Array.isArray(e)&&0===e.length){this.renderError();return}this._data=e;let r=this._generateMarkup();if(!t)return r;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}update(e){this._data=e;let t=this._generateMarkup(),r=Array.from(document.createRange().createContextualFragment(t).querySelectorAll("*")),n=Array.from(this._parentElement.querySelectorAll("*"));r.forEach((e,t)=>{let r=n[t];e.isEqualNode(r)||e?.firstChild?.nodeValue.trim()===""||(r.textContent=e.textContent),e.isEqualNode(r)||Array.from(e.attributes).forEach(e=>r.setAttribute(e.name,e.value))})}_clear(){this._parentElement.innerHTML=""}renderSpinner(){let e=`
  <div class="spinner">
    <svg>
      <use href="${_(rE)}#icon-loader"></use>
    </svg>
  </div>
  `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}renderError(e=this._errorMessage){let t=`
    <div class="error">
      <div>
        <svg>
          <use href="${_(rE)}#icon-alert-triangle"></use>
        </svg>
      </div>
      <p>${e}</p>
    </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderMessage(e=this._message){let t=`
    <div class="message">
      <div>
        <svg>
          <use href="${_(rE)}#icon-smile"></use>
        </svg>
      </div>
      <p>
        ${e}
      </p>
    </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}}class r$ extends rF{_parentElement=document.querySelector(".recipe");_errorMessage="We could not find that recipe. Please try another one";_message="";addHandlerRender(e){["hashchange","load"].forEach(t=>window.addEventListener(t,e))}addHandlerUpdateServings(e){this._parentElement.addEventListener("click",t=>{let r=t.target.closest(".btn--tiny");if(!r)return;let n=Number(r.dataset.newServings);n>0&&e(n)})}addHandlerBookmark(e){this._parentElement.addEventListener("click",t=>{t.target.closest(".btn--bookmark")&&e()})}_generateMarkup(){return`
    <figure class="recipe__fig">
        <img src="${this._data.image}" alt="Tomato" class="recipe__img" />
        <h1 class="recipe__title">
          <span>${this._data.title}</span>
        </h1>
      </figure>

      <div class="recipe__details">
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="${_(rE)}#icon-clock"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
          <span class="recipe__info-text">minutes</span>
        </div>
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="${_(rE)}#icon-users"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
          <span class="recipe__info-text">servings</span>

          <div class="recipe__info-buttons">
            <button data-new-servings="${this._data.servings-1}" class="btn--tiny btn--increase-servings">
              <svg>
                <use href="${_(rE)}#icon-minus-circle"></use>
              </svg>
            </button>
            <button data-new-servings="${this._data.servings+1}" class="btn--tiny btn--increase-servings">
              <svg>
                <use href="${_(rE)}#icon-plus-circle"></use>
              </svg>
            </button>
          </div>
        </div>

        <div class="recipe__user-generated ${this._data.key?"":"hidden"}">
          <svg>
            <use href="${_(rE)}#icon-user"></use>
          </svg>
        </div>
        <button class="btn--round btn--bookmark">
          <svg class="">
            <use href="${_(rE)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>
          </svg>
        </button>
      </div>

      <div class="recipe__ingredients">
        <h2 class="heading--2">Recipe ingredients</h2>
        <ul class="recipe__ingredient-list">
        ${this._data.ingredients.map(e=>this.renderMarkupIngredient(e)).join("")}
        </ul>
      </div>

      <div class="recipe__directions">
        <h2 class="heading--2">How to cook it</h2>
        <p class="recipe__directions-text">
          This recipe was carefully designed and tested by
          <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
          directions at their website.
        </p>
        <a
          class="btn--small recipe__btn"
          href="${this._data.sourceUrl}"
          target="_blank"
        >
          <span>Directions</span>
          <svg class="search__icon">
            <use href="${_(rE)}#icon-arrow-right"></use>
          </svg>
        </a>
      </div>
    `}renderMarkupIngredient(e){return`
        <li class="recipe__ingredient">
          <svg class="recipe__icon">
            <use href="${_(rE)}_icon-check"></use>
          </svg>
          <div class="recipe__quantity">${e.quantity?new b(e.quantity).toString():""}</div>
          <div class="recipe__description">
            <span class="recipe__unit">${e.unit}</span>
            ${e.description}
          </div>
        </li>
        `}}var rM=new r$;class rj{_parentEl=document.querySelector(".search");getQuery(){return this._parentEl.querySelector(".search__field").value}_clearInput(){this._parentEl.querySelector(".search__field").value=""}addHandlerSearch(e){this._parentEl.addEventListener("submit",t=>{t.preventDefault(),e()})}}var rO=new rj,rP=new class extends rF{_parentElement="";_generateMarkup(){let e=window.location.hash.slice(1);return`
    <li class="preview">
      <a class="preview__link ${this._data.id===e?"preview__link--active":""}"  href="#${this._data.id}">
        <figure class="preview__fig">
          <img src="${this._data.image}" alt="${this._data.title}" />
        </figure>
        <div class="preview__data">
          <h4 class="preview__title">${this._data.title}</h4>
          <p class="preview__publisher">${this._data.publisher}</p>
        </div>
        <div class="preview__user-generated ${this._data.key?"":"hidden"}">
          <svg>
            <use href="${_(rE)}#icon-user"></use>
          </svg>
        </div>
      </a>
    </li>
    `}};class rT extends rF{_parentElement=document.querySelector(".results");_errorMessage="No recipes found for your query! Please try again!";_message="";_generateMarkup(){return this._data.map(e=>rP.render(e,!1)).join("")}}var rq=new rT;class rI extends rF{_parentElement=document.querySelector(".pagination");addHandlerClick(e){this._parentElement.addEventListener("click",t=>{let r=t.target.closest(".btn--inline");r&&e(Number(r.dataset.goto))})}_generateMarkup(){let e=Math.ceil(this._data.results.length/this._data.resultsPerPage);return 1===this._data.page&&e>1?this._nextButton():this._data.page===e&&e>1?this._preButton():this._data.page>1&&this._data.page<e?this._preButton()+this._nextButton():""}_preButton(){return`
    <button data-goto="${this._data.page-1}" class="btn--inline pagination__btn--prev">
      <svg class="search__icon">
        <use href="${_(rE)}#icon-arrow-left"></use>
      </svg>
      <span>Page ${this._data.page-1}</span>
    </button>
    `}_nextButton(){return`
    <button data-goto="${this._data.page+1}" class="btn--inline pagination__btn--next">
      <span>Page ${this._data.page+1}</span>
      <svg class="search__icon">
        <use href="${_(rE)}#icon-arrow-right"></use>
      </svg>
    </button>
    `}}var rx=new rI;class rL extends rF{_parentElement=document.querySelector(".bookmarks__list");_errorMessage="No bookmarks yet. FInd a nice recipe and bookmark it.";_message="";addHandlerRender(e){window.addEventListener("load",e)}_generateMarkup(){return this._data.map(e=>rP.render(e,!1)).join("")}}var rH=new rL;class rN extends rF{_parentElement=document.querySelector(".upload");_message="Recipe was successfully uploaded.";_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");constructor(){super(),this._addHandlerShowWindow(),this._addHandlerHideWindow()}_addHandlerShowWindow(){this._btnOpen.addEventListener("click",this.showWindow.bind(this))}_addHandlerHideWindow(){this._btnClose.addEventListener("click",this.hideWindow.bind(this)),this._overlay.addEventListener("click",this.hideWindow.bind(this))}addHandlerUpload(e){this._parentElement.addEventListener("submit",function(t){t.preventDefault(),e(Object.fromEntries([...new FormData(this)]))})}showWindow(){this._overlay.classList.remove("hidden"),this._window.classList.remove("hidden")}hideWindow(){this._overlay.classList.add("hidden"),this._window.classList.add("hidden")}_generateMarkup(){}}var rC=new rN;class rA extends rF{_parentElement=document.querySelector(".upload");renderForm(){this._clear();let e=`
    <div class="upload__column">
        <h3 class="upload__heading">Recipe data</h3>
        <label>Title</label>
        <input value="TEST23" required name="title" type="text" />
        <label>URL</label>
        <input value="TEST23" required name="sourceUrl" type="text" />
        <label>Image URL</label>
        <input value="TEST23" required name="image" type="text" />
        <label>Publisher</label>
        <input value="TEST23" required name="publisher" type="text" />
        <label>Prep time</label>
        <input value="23" required name="cookingTime" type="number" />
        <label>Servings</label>
        <input value="23" required name="servings" type="number" />
      </div>
      
      <div class="upload__column">
        <h3 class="upload__heading">Ingredients</h3>
        <label>Ingredient 1</label>
        <input
          value="0.5,kg,Rice"
          type="text"
          required
          name="ingredient-1"
          placeholder="Format: 'Quantity,Unit,Description'"
        />
        <label>Ingredient 2</label>
        <input
          value="1,,Avocado"
          type="text"
          name="ingredient-2"
          placeholder="Format: 'Quantity,Unit,Description'"
        />
        <label>Ingredient 3</label>
        <input
          value=",,salt"
          type="text"
          name="ingredient-3"
          placeholder="Format: 'Quantity,Unit,Description'"
        />
        <label>Ingredient 4</label>
        <input
          type="text"
          name="ingredient-4"
          placeholder="Format: 'Quantity,Unit,Description'"
        />
        <label>Ingredient 5</label>
        <input
          type="text"
          name="ingredient-5"
          placeholder="Format: 'Quantity,Unit,Description'"
        />
        <label>Ingredient 6</label>
        <input
          type="text"
          name="ingredient-6"
          placeholder="Format: 'Quantity,Unit,Description'"
        />
      </div>
      
      <button class="btn upload__btn">
        <svg>
          <use href="${_(rE)}#icon-upload-cloud"></use>
        </svg>
        <span>Upload</span>
      </button>
    `;this._parentElement.insertAdjacentHTML("afterbegin",e)}}var rU=new rA;async function rD(){try{let e=window.location.hash.slice(1);if(!e)return;rM.renderSpinner(),rq.update(r_()),rH.update(rv.bookmarks),await rb(e),rM.render(rv.recipe),console.log(rv.recipe)}catch(e){rM.renderError(),console.error(e)}}async function rR(){try{rq.renderSpinner();let e=rO.getQuery();if(!e)return;rO._clearInput(),await ry(e),rq.render(r_()),rx.render(rv.search)}catch(e){rM.renderError()}}async function rW(e){try{rC.renderSpinner(),await rS(e),console.log(rv.recipe),rM.render(rv.recipe),rC.renderMessage(),rH.render(rv.bookmarks),window.history.pushState(null,"",`#${rv.recipe.id}`),setTimeout(()=>{rC.hideWindow(),rU.renderForm()},2500)}catch(e){console.error(e),rC.renderError(e.message)}}rH.addHandlerRender(function(){rH.render(rv.bookmarks)}),rM.addHandlerRender(rD),rM.addHandlerUpdateServings(function(e){rv.recipe.ingredients.forEach(t=>{t.quantity=t.quantity*e/rv.recipe.servings}),rv.recipe.servings=e,rM.update(rv.recipe)}),rM.addHandlerBookmark(function(){rv.recipe.bookmarked?function(e){let t=rv.bookmarks.findIndex(t=>t.id===e);rv.bookmarks.splice(t,1),e===rv.recipe.id&&(rv.recipe.bookmarked=!1),rw()}(rv.recipe.id):rk(rv.recipe),rM.update(rv.recipe),rH.render(rv.bookmarks)}),rO.addHandlerSearch(rR),rx.addHandlerClick(function(e){rq.render(r_(e)),rx.render(rv.search)}),rC.addHandlerUpload(rW);
//# sourceMappingURL=index.af4e74d8.js.map
