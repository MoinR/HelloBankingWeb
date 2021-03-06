/*! jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license */
!((a, b) => {
    "object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):a => {if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)
  })("undefined"!=typeof window?window:this,(a, b) => {
    const c=[];
    const d=a.document;
    const e=Object.getPrototypeOf;
    const f=c.slice;
    const g=c.concat;
    const h=c.push;
    const i=c.indexOf;
    const j={};
    const k=j.toString;
    const l=j.hasOwnProperty;
    const m=l.toString;
    const n=m.call(Object);
    const o={};
    function p(a, b=d) {
      const c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)
    }
    const q="3.2.1";
    const r=(a, b) => new r.fn.init(a,b);
    const s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    const t=/^-ms-/;
    const u=/-([a-z])/g;
    const v=(a, b) => b.toUpperCase();
    r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray() {return f.call(this)},get(a) {return null==a?f.call(this):a<0?this[a+this.length]:this[a]},pushStack(a) {const b=r.merge(this.constructor(),a);return b.prevObject=this,b},each(a) {return r.each(this,a)},map(a) {return this.pushStack(r.map(this,(b, c) => a.call(b,c,b)))},slice() {return this.pushStack(f.apply(this,arguments))},first() {return this.eq(0)},last() {return this.eq(-1)},eq(a) {
      const b=this.length;
      const c=+a+(a<0?b:0);
      return this.pushStack(c>=0&&c<b?[this[c]]:[])
    },end() {return this.prevObject||this.constructor()},push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){
      let a;
      let b;
      let c;
      let d;
      let e;
      let f;
      let g=arguments[0]||{};
      let h=1;
      const i=arguments.length;
      let j=!1;
      for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||r.isFunction(g)||(g={}),h===i&&(g=this,h--);h<i;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=Array.isArray(d)))?(e?(e=!1,f=c&&Array.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));return g
    },r.extend({expando:`jQuery${(q+Math.random()).replace(/\D/g,"")}`,isReady:!0,error(a) {throw new Error(a)},noop() {},isFunction(a) {return"function"===r.type(a)},isWindow(a) {return null!=a&&a===a.window},isNumeric(a) {const b=r.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject(a) {
      let b;
      let c;
      return!(!a||"[object Object]"!==k.call(a))&&(!(b=e(a))||(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n))
    },isEmptyObject(a) {let b;for(b in a)return!1;return!0},type(a) {return null==a?`${a}`:"object"==typeof a||"function"==typeof a?j[k.call(a)]||"object":typeof a},globalEval(a) {p(a)},camelCase(a) {return a.replace(t,"ms-").replace(u,v)},each(a, b) {
      let c;
      let d=0;
      if(w(a)){for(c=a.length;d<c;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a
    },trim(a) {return null==a?"":(`${a}`).replace(s,"")},makeArray(a, b) {const c=b||[];return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c},inArray(a, b, c) {return null==b?-1:i.call(b,a,c)},merge(a, b) {for(var c=+b.length,d=0,e=a.length;d<c;d++)a[e++]=b[d];return a.length=e,a},grep(a, b, c) {for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map(a, b, c) {
      let d;
      let e;
      let f=0;
      const h=[];
      if(w(a))for(d=a.length;f<d;f++)e=b(a[f],f,c),null!=e&&h.push(e);else for(f in a)e=b(a[f],f,c),null!=e&&h.push(e);return g.apply([],h)
    },guid:1,proxy(a, b) {
      let c;
      let d;
      let e;
      if("string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a))return d=f.call(arguments,2),e=function(){return a.apply(b||this,d.concat(f.call(arguments)))},e.guid=a.guid=a.guid||r.guid++,e
    },now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),(a, b) => {j[`[object ${b}]`]=b.toLowerCase()});function w(a){
      const b=!!a&&"length"in a&&a.length;
      const c=r.type(a);
      return"function"!==c&&!r.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)
    }const x=(a => {
      let b;
      let c;
      let d;
      let e;
      let f;
      let g;
      let h;
      let i;
      let j;
      let k;
      let l;
      let m;
      let n;
      let o;
      let p;
      let q;
      let r;
      let s;
      let t;
      const u=`sizzle${1*new Date}`;
      const v=a.document;
      let w=0;
      let x=0;
      const y=ha();
      const z=ha();
      const A=ha();
      let B=(a, b) => (a===b&&(l=!0), 0);
      const C={}.hasOwnProperty;
      let D=[];
      const E=D.pop;
      const F=D.push;
      let G=D.push;
      const H=D.slice;
      const I=(a, b) => {for(let c=0, d=a.length;c<d;c++)if(a[c]===b)return c;return-1};
      const J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped";
      const K="[\\x20\\t\\r\\n\\f]";
      const L="(?:\\\\.|[\\w-]|[^\0-\\xa0])+";
      const M=`\\[${K}*(${L})(?:${K}*([*^$|!~]?=)${K}*(?:'((?:\\\\.|[^\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(${L}))|)${K}*\\]`;
      const N=`:(${L})(?:\\((('((?:\\\\.|[^\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|${M})*)|.*)\\)|)`;
      const O=new RegExp(`${K}+`,"g");
      const P=new RegExp(`^${K}+|((?:^|[^\\\\])(?:\\\\.)*)${K}+$`,"g");
      const Q=new RegExp(`^${K}*,${K}*`);
      const R=new RegExp(`^${K}*([>+~]|${K})${K}*`);
      const S=new RegExp(`=${K}*([^\\]'"]*?)${K}*\\]`,"g");
      const T=new RegExp(N);
      const U=new RegExp(`^${L}$`);
      const V={ID:new RegExp(`^#(${L})`),CLASS:new RegExp(`^\\.(${L})`),TAG:new RegExp(`^(${L}|[*])`),ATTR:new RegExp(`^${M}`),PSEUDO:new RegExp(`^${N}`),CHILD:new RegExp(`^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(${K}*(even|odd|(([+-]|)(\\d*)n|)${K}*(?:([+-]|)${K}*(\\d+)|))${K}*\\)|)`,"i"),bool:new RegExp(`^(?:${J})$`,"i"),needsContext:new RegExp(`^${K}*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(${K}*((?:-\\d)?\\d*)${K}*\\)|)(?=[^-]|$)`,"i")};
      const W=/^(?:input|select|textarea|button)$/i;
      const X=/^h\d$/i;
      const Y=/^[^{]+\{\s*\[native \w/;
      const Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/;
      const $=/[+~]/;
      const _=new RegExp(`\\\\([\\da-f]{1,6}${K}?|(${K})|.)`,"ig");
      const aa=(a, b, c) => {const d=`0x${b}`-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};
      const ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g;
      const ca=(a, b) => b?"\0"===a?"\ufffd":`${a.slice(0,-1)}\\${a.charCodeAt(a.length-1).toString(16)} `:`\\${a}`;
      const da=() => {m()};
      const ea=ta(a => a.disabled===!0&&("form"in a||"label"in a),{dir:"parentNode",next:"legend"});
      try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?(a, b) => {F.apply(a,H.call(b))}:(a, b) => {
        let c=a.length;
        let d=0;
        while(a[c++]=b[d++]);a.length=c-1
      }}}function ga(a,b,d,e){
        let f;
        let h;
        let j;
        let k;
        let l;
        let o;
        let r;
        let s=b&&b.ownerDocument;
        const w=b?b.nodeType:9;
        if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[`${a} `]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]=`#${k} ${sa(o[h])}`;r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)
      }function ha(){const a=[];function b(c,e){return a.push(`${c} `)>d.cacheLength&&delete b[a.shift()],b[`${c} `]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){let b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){
        const c=a.split("|");
        let e=c.length;
        while(e--)d.attrHandle[c[e]]=b
      }function la(a,b){
        let c=b&&a;
        const d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;
        if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1
      }function ma(a){return b => {const c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return b => {const c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return b => "form"in b?b.parentNode&&b.disabled===!1?"label"in b?"label"in b.parentNode?b.parentNode.disabled===a:b.disabled===a:b.isDisabled===a||b.isDisabled!==!a&&ea(b)===a:b.disabled===a:"label"in b&&b.disabled===a}function pa(a){return ia(b => (b=+b, ia((c, d) => {
        let e;
        const f=a([],c.length,b);
        let g=f.length;
        while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))
      })))}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=a => {const b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=ga.setDocument=a => {
        let b;
        let e;
        const g=a?a.ownerDocument||a:v;
        return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(a => (a.className="i", !a.getAttribute("className"))),c.getElementsByTagName=ja(a => (a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length)),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(a => (o.appendChild(a).id=u, !n.getElementsByName||!n.getElementsByName(u).length)),c.getById?(d.filter.ID=a => {const b=a.replace(_,aa);return a => a.getAttribute("id")===b},d.find.ID=(a, b) => {if("undefined"!=typeof b.getElementById&&p){const c=b.getElementById(a);return c?[c]:[]}}):(d.filter.ID=a => {const b=a.replace(_,aa);return a => {const c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}},d.find.ID=(a, b) => {if("undefined"!=typeof b.getElementById&&p){
          let c;
          let d;
          let e;
          let f=b.getElementById(a);
          if(f){if(c=f.getAttributeNode("id"),c&&c.value===a)return[f];e=b.getElementsByName(a),d=0;while(f=e[d++])if(c=f.getAttributeNode("id"),c&&c.value===a)return[f]}return[]
        }}),d.find.TAG=c.getElementsByTagName?(a, b) => "undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0:(a, b) => {
          let c;
          const d=[];
          let e=0;
          const f=b.getElementsByTagName(a);
          if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f
        },d.find.CLASS=c.getElementsByClassName&&((a, b) => {if("undefined"!=typeof b.getElementsByClassName&&p)return b.getElementsByClassName(a)}),r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(a => {o.appendChild(a).innerHTML=`<a id='${u}'></a><select id='${u}-\r\' msallowcapture=''><option selected=''></option></select>`,a.querySelectorAll("[msallowcapture^='']").length&&q.push(`[*^$]=${K}*(?:''|"")`),a.querySelectorAll("[selected]").length||q.push(`\\[${K}*(?:value|${J})`),a.querySelectorAll(`[id~=${u}-]`).length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll(`a#${u}+*`).length||q.push(".#.+[+~]")}),ja(a => {a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";const b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push(`name${K}*[*^$|!~]?=`),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(a => {c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?(a, b) => {
          const c=9===a.nodeType?a.documentElement:a;
          const d=b&&b.parentNode;
          return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))
        }:(a, b) => {if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?(a, b) => {if(a===b)return l=!0,0;let d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:(a, b) => {
          if(a===b)return l=!0,0;
          let c;
          let d=0;
          const e=a.parentNode;
          const f=b.parentNode;
          const g=[a];
          const h=[b];
          if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0
        },n):n
      },ga.matches=(a, b) => ga(a,null,null,b),ga.matchesSelector=(a, b) => {if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[`${b} `]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{const d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=(a, b) => ((a.ownerDocument||a)!==n&&m(a), t(a,b)),ga.attr=(a, b) => {
        (a.ownerDocument||a)!==n&&m(a);
        const e=d.attrHandle[b.toLowerCase()];
        let f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;
        return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null
      },ga.escape=a => (`${a}`).replace(ba,ca),ga.error=a => {throw new Error(`Syntax error, unrecognized expression: ${a}`)},ga.uniqueSort=a => {
        let b;
        const d=[];
        let e=0;
        let f=0;
        if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a
      },e=ga.getText=a => {
        let b;
        let c="";
        let d=0;
        const f=a.nodeType;
        if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c
      },d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR(a) {return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=` ${a[3]} `),a.slice(0,4)},CHILD(a) {return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO(a) {
        let b;
        const c=!a[6]&&a[2];
        return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))
      }},filter:{TAG(a) {const b=a.replace(_,aa).toLowerCase();return"*"===a?() => !0:a => a.nodeName&&a.nodeName.toLowerCase()===b},CLASS(a) {let b=y[`${a} `];return b||(b=new RegExp(`(^|${K})${a}(${K}|$)`))&&y(a,a => b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||""))},ATTR(a, b, c) {return d => {let e=ga.attr(d,a);return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.includes(c):"$="===b?c&&e.slice(-c.length)===c:"~="===b?` ${e.replace(O," ")} `.includes(c):"|="===b&&(e===c||e.slice(0,c.length+1)===`${c}-`))}},CHILD(a, b, c, d, e) {
        const f="nth"!==a.slice(0,3);
        const g="last"!==a.slice(-4);
        const h="of-type"===b;
        return 1===d&&0===e?a => !!a.parentNode:(b, c, i) => {
          let j;
          let k;
          let l;
          let m;
          let n;
          let o;
          let p=f!==g?"nextSibling":"previousSibling";
          const q=b.parentNode;
          const r=h&&b.nodeName.toLowerCase();
          const s=!i&&!h;
          let t=!1;
          if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}
        }
      },PSEUDO(a, b) {
        let c;
        const e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error(`unsupported pseudo: ${a}`);
        return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia((a, c) => {
          let d;
          const f=e(a,b);
          let g=f.length;
          while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])
        }):a => e(a,0,c)):e
      }},pseudos:{not:ia(a => {
        const b=[];
        const c=[];
        const d=h(a.replace(P,"$1"));
        return d[u]?ia((a, b, c, e) => {
          let f;
          const g=d(a,null,e,[]);
          let h=a.length;
          while(h--)(f=g[h])&&(a[h]=!(b[h]=f))
        }):(a, e, f) => (b[0]=a, d(b,null,f,c), b[0]=null, !c.pop())
      }),has:ia(a => b => ga(a,b).length>0),contains:ia(a => (a=a.replace(_,aa), b => (b.textContent||b.innerText || e(b)).includes(a))),lang:ia(a => (U.test(a||"")||ga.error(`unsupported lang: ${a}`), a=a.replace(_,aa).toLowerCase(), b => {let c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(`${a}-`);while((b=b.parentNode)&&1===b.nodeType);return!1})),target(b) {const c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root(a) {return a===o},focus(a) {return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked(a) {const b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected(a) {return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty(a) {for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent(a) {return!d.pseudos.empty(a)},header(a) {return X.test(a.nodeName)},input(a) {return W.test(a.nodeName)},button(a) {const b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text(a) {let b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(() => [0]),last:pa((a, b) => [b-1]),eq:pa((a, b, c) => [c<0?c+b:c]),even:pa((a, b) => {for(let c=0;c<b;c+=2)a.push(c);return a}),odd:pa((a, b) => {for(let c=1;c<b;c+=2)a.push(c);return a}),lt:pa((a, b, c) => {for(let d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:pa((a, b, c) => {for(let d=c<0?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=(a, b) => {
        let c;
        let e;
        let f;
        let g;
        let h;
        let i;
        let j;
        const k=z[`${a} `];
        if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)
      };function sa(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function ta(a,b,c){
        const d=b.dir;
        const e=b.next;
        const f=e||d;
        const g=c&&"parentNode"===f;
        const h=x++;
        return b.first?(b, c, e) => {while(b=b[d])if(1===b.nodeType||g)return a(b,c,e);return!1}:(b, c, i) => {
          let j;
          let k;
          let l;
          const m=[w,h];
          if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}return!1
        }
      }function ua(a){return a.length>1?(b, c, d) => {let e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function va(a,b,c){for(let d=0, e=b.length;d<e;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia((f, g, h, i) => {
        let j;
        let k;
        let l;
        const m=[];
        const n=[];
        const o=g.length;
        const p=f||va(b||"*",h.nodeType?[h]:h,[]);
        const q=!a||!f&&b?p:wa(p,m,a,h,i);
        let r=c?e||(f?a:o||d)?[]:g:q;
        if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)
      })}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(a => a===b,h,!0),l=ta(a => I(b,a)>-1,h,!0),m=[(a, c, d) => {const e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];i<f;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++)if(d.relative[a[e].type])break;return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,i<e&&ya(a.slice(i,e)),e<f&&ya(a=a.slice(e)),e<f&&sa(a))}m.push(c)}return ua(m)}function za(a,b){
        const c=b.length>0;
        const e=a.length>0;
  
        const f=(f, g, h, i, k) => {
          let l;
          let o;
          let q;
          let r=0;
          let s="0";
          const t=f&&[];
          let u=[];
          const v=j;
          const x=f||e&&d.find.TAG("*",k);
          const y=w+=null==v?1:Math.random()||.1;
          const z=x.length;
          for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}return k&&(w=y,j=v),t
        };
  
        return c?ia(f):f
      }return h=ga.compile=(a, b) => {
        let c;
        const d=[];
        const e=[];
        let f=A[`${a} `];
        if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f
      },i=ga.select=(a, b, c, e) => {
        let f;
        let i;
        let j;
        let k;
        let l;
        const m="function"==typeof a&&a;
        const n=!e&&g(a=m.selector||a);
        if(c=c||[],1===n.length){if(i=n[0]=n[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&9===b.nodeType&&p&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(_,aa),b)||[])[0],!b)return c;m&&(b=b.parentNode),a=a.slice(i.shift().value.length)}f=V.needsContext.test(a)?0:i.length;while(f--){if(j=i[f],d.relative[k=j.type])break;if((l=d.find[k])&&(e=l(j.matches[0].replace(_,aa),$.test(i[0].type)&&qa(b.parentNode)||b))){if(i.splice(f,1),a=e.length&&sa(i),!a)return G.apply(c,e),c;break}}}return(m||h(a,n))(e,b,!p,c,!b||$.test(a)&&qa(b.parentNode)||b),c
      },c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(a => 1&a.compareDocumentPosition(n.createElement("fieldset"))),ja(a => (a.innerHTML="<a href='#'></a>", "#"===a.firstChild.getAttribute("href")))||ka("type|href|height|width",(a, b, c) => {if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(a => (a.innerHTML="<input/>", a.firstChild.setAttribute("value",""), ""===a.firstChild.getAttribute("value")))||ka("value",(a, b, c) => {if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),ja(a => null==a.getAttribute("disabled"))||ka(J,(a, b, c) => {let d;if(!c)return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga
    })(a);r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;
    const y=(a, b, c) => {const d=[], e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&r(a).is(c))break;d.push(a)}return d};
    const z=(a, b) => {for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c};
    const A=r.expr.match.needsContext;
    function B(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()}
    const C=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    const D=/^.[^:#\[\.,]*$/;
    function E(a,b,c){return r.isFunction(b)?r.grep(a,(a, d) => !!b.call(a,d,a)!==c):b.nodeType?r.grep(a,a => a===b!==c):"string"!=typeof b?r.grep(a,a => i.call(b,a)>-1!==c):D.test(b)?r.filter(b,a,c):(b=r.filter(b,a),r.grep(a,a => i.call(b,a)>-1!==c&&1===a.nodeType))}r.filter=(a, b, c) => {const d=b[0];return c&&(a=`:not(${a})`),1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,a => 1===a.nodeType))},r.fn.extend({find(a) {
      let b;
      let c;
      const d=this.length;
      const e=this;
      if("string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;b<d;b++)if(r.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;b<d;b++)r.find(a,e[b],c);return d>1?r.uniqueSort(c):c
    },filter(a) {return this.pushStack(E(this,a||[],!1))},not(a) {return this.pushStack(E(this,a||[],!0))},is(a) {return!!E(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length}});
    let F;
    const G=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  
    const H=r.fn.init=function(a,b,c){
      let e;
      let f;
      if(!a)return this;if(c=c||F,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:G.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),C.test(e[1])&&r.isPlainObject(b))for(e in b)r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)
    };
  
    H.prototype=r.fn,F=r(d);
    const I=/^(?:parents|prev(?:Until|All))/;
    const J={children:!0,contents:!0,next:!0,prev:!0};
    r.fn.extend({has(a) {
      const b=r(a,this);
      const c=b.length;
      return this.filter(function(){for(let a=0;a<c;a++)if(r.contains(this,b[a]))return!0})
    },closest(a, b) {
      let c;
      let d=0;
      const e=this.length;
      const f=[];
      const g="string"!=typeof a&&r(a);
      if(!A.test(a))for(;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?r.uniqueSort(f):f)
    },index(a) {return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add(a, b) {return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack(a) {return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function K(a,b){while((a=a[b])&&1!==a.nodeType);return a}r.each({parent(a) {const b=a.parentNode;return b&&11!==b.nodeType?b:null},parents(a) {return y(a,"parentNode")},parentsUntil(a, b, c) {return y(a,"parentNode",c)},next(a) {return K(a,"nextSibling")},prev(a) {return K(a,"previousSibling")},nextAll(a) {return y(a,"nextSibling")},prevAll(a) {return y(a,"previousSibling")},nextUntil(a, b, c) {return y(a,"nextSibling",c)},prevUntil(a, b, c) {return y(a,"previousSibling",c)},siblings(a) {return z((a.parentNode||{}).firstChild,a)},children(a) {return z(a.firstChild)},contents(a) {return B(a,"iframe")?a.contentDocument:(B(a,"template")&&(a=a.content||a),r.merge([],a.childNodes))}},(a, b) => {r.fn[a]=function(c,d){let e=r.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),this.length>1&&(J[a]||r.uniqueSort(e),I.test(a)&&e.reverse()),this.pushStack(e)}});const L=/[^\x20\t\r\n\f]+/g;function M(a){const b={};return r.each(a.match(L)||[],(a, c) => {b[c]=!0}),b}r.Callbacks=a => {
      a="string"==typeof a?M(a):r.extend({},a);
      let b;
      let c;
      let d;
      let e;
      let f=[];
      let g=[];
      let h=-1;
      const i=() => {for(e=e||a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")};
      const j={add() {return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,(b, c) => {r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove() {return r.each(arguments,(a, b) => {let c;while((c=r.inArray(b,f,c))>-1)f.splice(c,1),c<=h&&h--}),this},has(a) {return a?r.inArray(a,f)>-1:f.length>0},empty() {return f&&(f=[]),this},disable() {return e=g=[],f=c="",this},disabled() {return!f},lock() {return e=g=[],c||b||(f=c=""),this},locked() {return!!e},fireWith(a, c) {return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire() {return j.fireWith(this,arguments),this},fired() {return!!d}};
      return j
    };function N(a){return a}function O(a){throw a}function P(a,b,c,d){let e;try{a&&r.isFunction(e=a.promise)?e.call(a).done(b).fail(c):a&&r.isFunction(e=a.then)?e.call(a,b,c):b.apply(void 0,[a].slice(d))}catch(a){c.apply(void 0,[a])}}r.extend({Deferred(b) {
      const c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]];
      let d="pending";
  
      const e={state() {return d},always() {return f.done(arguments).fail(arguments),this},"catch"(a) {return e.then(null,a)},pipe() {let a=arguments;return r.Deferred(b => {r.each(c,(c, d) => {const e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){const a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[`${d[0]}With`](this,e?[a]:arguments)})}),a=null}).promise()},then(b, d, e) {let f=0;function g(b,c,d,e){return function(){
        let h=this;
        let i=arguments;
  
        const j=() => {
          let a;
          let j;
          if(!(b<f)){if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");j=a&&("object"==typeof a||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,N,e),g(f,c,O,e)):(f++,j.call(a,g(f,c,N,e),g(f,c,O,e),g(f,c,N,c.notifyWith))):(d!==N&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}
        };
  
        const k=e?j:() => {try{j()}catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==O&&(h=void 0,i=[a]),c.rejectWith(h,i))}};
        b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))
      }}return r.Deferred(a => {c[0][3].add(g(0,a,r.isFunction(e)?e:N,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:N)),c[2][3].add(g(0,a,r.isFunction(d)?d:O))}).promise()},promise(a) {return null!=a?r.extend(a,e):e}};
  
      const f={};
      return r.each(c,(a, b) => {
        const g=b[2];
        const h=b[5];
        e[b[1]]=g.add,h&&g.add(() => {d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[`${b[0]}With`](this===f?void 0:this,arguments),this},f[`${b[0]}With`]=g.fireWith
      }),e.promise(f),b&&b.call(f,f),f
    },when(a) {
      let b=arguments.length;
      let c=b;
      const d=Array(c);
      const e=f.call(arguments);
      const g=r.Deferred();
      const h=a => function(c){d[a]=this,e[a]=arguments.length>1?f.call(arguments):c,--b||g.resolveWith(d,e)};
      if(b<=1&&(P(a,g.done(h(c)).resolve,g.reject,!b),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();while(c--)P(e[c],h(c),g.reject);return g.promise()
    }});const Q=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=(b, c) => {a.console&&a.console.warn&&b&&Q.test(b.name)&&a.console.warn(`jQuery.Deferred exception: ${b.message}`,b.stack,c)},r.readyException=b => {a.setTimeout(() => {throw b})};const R=r.Deferred();r.fn.ready=function(a){return R.then(a)["catch"](a => {r.readyException(a)}),this},r.extend({isReady:!1,readyWait:1,ready(a) {(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&&--r.readyWait>0||R.resolveWith(d,[r]))}}),r.ready.then=R.then;function S(){d.removeEventListener("DOMContentLoaded",S),
    a.removeEventListener("load",S),r.ready()}"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",S),a.addEventListener("load",S));
  
    const T=(a, b, c, d, e, f, g) => {
      let h=0;
      const i=a.length;
      let j=null==c;
      if("object"===r.type(c)){e=!0;for(h in c)T(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=(a, b, c) => j.call(r(a),c))),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f
    };
  
    const U=a => 1===a.nodeType||9===a.nodeType||!+a.nodeType;
    function V(){this.expando=r.expando+V.uid++}V.uid=1,V.prototype={cache(a) {let b=a[this.expando];return b||(b={},U(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set(a, b, c) {
      let d;
      const e=this.cache(a);
      if("string"==typeof b)e[r.camelCase(b)]=c;else for(d in b)e[r.camelCase(d)]=b[d];return e
    },get(a, b) {return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},access(a, b, c) {return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove(a, b) {
      let c;
      const d=a[this.expando];
      if(void 0!==d){if(void 0!==b){Array.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(L)||[]),c=b.length;while(c--)delete d[b[c]]}(void 0===b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}
    },hasData(a) {const b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b)}};
    const W=new V;
    const X=new V;
    const Y=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/;
    const Z=/[A-Z]/g;
    function $(a){return"true"===a||"false"!==a&&("null"===a?null:a===`${+a}`?+a:Y.test(a)?JSON.parse(a):a)}function _(a,b,c){let d;if(void 0===c&&1===a.nodeType)if(d=`data-${b.replace(Z,"-$&").toLowerCase()}`,c=a.getAttribute(d),"string"==typeof c){try{c=$(c)}catch(e){}X.set(a,b,c)}else c=void 0;return c}r.extend({hasData(a) {return X.hasData(a)||W.hasData(a)},data(a, b, c) {return X.access(a,b,c)},removeData(a, b) {X.remove(a,b)},_data(a, b, c) {return W.access(a,b,c)},_removeData(a, b) {W.remove(a,b)}}),r.fn.extend({data(a, b) {
      let c;
      let d;
      let e;
      const f=this[0];
      const g=f&&f.attributes;
      if(void 0===a){if(this.length&&(e=X.get(f),1===f.nodeType&&!W.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),_(f,d,e[d])));W.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){X.set(this,a)}):T(this,function(b){let c;if(f&&void 0===b){if(c=X.get(f,a),void 0!==c)return c;if(c=_(f,a),void 0!==c)return c}else this.each(function(){X.set(this,a,b)})},null,b,arguments.length>1,null,!0)
    },removeData(a) {return this.each(function(){X.remove(this,a)})}}),r.extend({queue(a, b, c) {let d;if(a)return b=`${b||"fx"}queue`,d=W.get(a,b),c&&(!d||Array.isArray(c)?d=W.access(a,b,r.makeArray(c)):d.push(c)),d||[]},dequeue(a, b="fx") {
      const c=r.queue(a,b);
      let d=c.length;
      let e=c.shift();
      const f=r._queueHooks(a,b);
      const g=() => {r.dequeue(a,b)};
      "inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()
    },_queueHooks(a, b) {const c=`${b}queueHooks`;return W.get(a,c)||W.access(a,c,{empty:r.Callbacks("once memory").add(() => {W.remove(a,[`${b}queue`,c])})})}}),r.fn.extend({queue(a, b) {let c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){const c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a)})},dequeue(a) {return this.each(function(){r.dequeue(this,a)})},clearQueue(a) {return this.queue(a||"fx",[])},promise(a, b) {
      let c;
      let d=1;
      const e=r.Deferred();
      const f=this;
      let g=this.length;
      const h=() => {--d||e.resolveWith(f,[f])};
      "string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=W.get(f[g],`${a}queueHooks`),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)
    }});
    const aa=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
    const ba=new RegExp(`^(?:([+-])=|)(${aa})([a-z%]*)$`,"i");
    const ca=["Top","Right","Bottom","Left"];
    const da=(a, b) => (a=b||a, "none"===a.style.display||""===a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display"));
  
    const ea=(a, b, c, d) => {
      let e;
      let f;
      const g={};
      for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e
    };
  
    function fa(a,b,c,d){
      let e;
      let f=1;
      let g=20;
      const h=d?() => d.cur():() => r.css(a,b,"");
      const i=h();
      let j=c&&c[3]||(r.cssNumber[b]?"":"px");
      let k=(r.cssNumber[b]||"px"!==j&&+i)&&ba.exec(r.css(a,b));
      if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,r.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e
    }const ga={};function ha(a){
      let b;
      const c=a.ownerDocument;
      const d=a.nodeName;
      let e=ga[d];
      return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),ga[d]=e,e)
    }function ia(a,b){for(var c,d,e=[],f=0,g=a.length;f<g;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=W.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&da(d)&&(e[f]=ha(d))):"none"!==c&&(e[f]="none",W.set(d,"display",c)));for(f=0;f<g;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}r.fn.extend({show() {return ia(this,!0)},hide() {return ia(this)},toggle(a) {return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){da(this)?r(this).show():r(this).hide()})}});
    const ja=/^(?:checkbox|radio)$/i;
    const ka=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i;
    const la=/^$|\/(?:java|ecma)script/i;
    const ma={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};
    ma.optgroup=ma.option,ma.tbody=ma.tfoot=ma.colgroup=ma.caption=ma.thead,ma.th=ma.td;function na(a,b){let c;return c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[],void 0===b||b&&B(a,b)?r.merge([a],c):c}function oa(a,b){for(let c=0, d=a.length;c<d;c++)W.set(a[c],"globalEval",!b||W.get(b[c],"globalEval"))}const pa=/<|&#?\w+;/;function qa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;n<o;n++)if(f=a[n],f||0===f)if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(pa.test(f)){g=g||l.appendChild(b.createElement("div")),h=(ka.exec(f)||["",""])[1].toLowerCase(),i=ma[h]||ma._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;r.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",n=0;while(f=m[n++])if(d&&r.inArray(f,d)>-1)e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=na(l.appendChild(f),"script"),j&&oa(g),c){k=0;while(f=g[k++])la.test(f.type||"")&&c.push(f)}return l}!(() => {
      const a=d.createDocumentFragment();
      const b=a.appendChild(d.createElement("div"));
      const c=d.createElement("input");
      c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue
    })();
    const ra=d.documentElement;
    const sa=/^key/;
    const ta=/^(?:mouse|pointer|contextmenu|drag|drop)|click/;
    const ua=/^([^.]*)(?:\.(.+)|)/;
    function va(){return!0}function wa(){return!1}function xa(){try{return d.activeElement}catch(a){}}function ya(a,b,c,d,e,f){
      let g;
      let h;
      if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ya(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=wa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c)})
    }r.event={global:{},add(a, b, c, d, e) {
      let f;
      let g;
      let h;
      let i;
      let j;
      let k;
      let l;
      let m;
      let n;
      let o;
      let p;
      const q=W.get(a);
      if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(ra,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(L)||[""],j=b.length;while(j--)h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}
    },remove(a, b, c, d, e) {
      let f;
      let g;
      let h;
      let i;
      let j;
      let k;
      let l;
      let m;
      let n;
      let o;
      let p;
      const q=W.hasData(a)&&W.get(a);
      if(q&&(i=q.events)){b=(b||"").match(L)||[""],j=b.length;while(j--)if(h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp(`(^|\\.)${o.join("\\.(?:.*\\.|)")}(\\.|$)`),g=f=m.length;while(f--)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0);r.isEmptyObject(i)&&W.remove(a,"handle events")}
    },dispatch(a) {
      const b=r.event.fix(a);
      let c;
      let d;
      let e;
      let f;
      let g;
      let h;
      const i=new Array(arguments.length);
      const j=(W.get(this,"events")||{})[b.type]||[];
      const k=r.event.special[b.type]||{};
      for(i[0]=b,c=1;c<arguments.length;c++)i[c]=arguments[c];if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&!b.isImmediatePropagationStopped())b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(b.result=e)===!1&&(b.preventDefault(),b.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,b),b.result}
    },handlers(a, b) {
      let c;
      let d;
      let e;
      let f;
      let g;
      const h=[];
      const i=b.delegateCount;
      let j=a.target;
      if(i&&j.nodeType&&!("click"===a.type&&a.button>=1))for(;j!==this;j=j.parentNode||this)if(1===j.nodeType&&("click"!==a.type||j.disabled!==!0)){for(f=[],g={},c=0;c<i;c++)d=b[c],e=`${d.selector} `,void 0===g[e]&&(g[e]=d.needsContext?r(e,this).index(j)>-1:r.find(e,this,null,[j]).length),g[e]&&f.push(d);f.length&&h.push({elem:j,handlers:f})}return j=this,i<b.length&&h.push({elem:j,handlers:b.slice(i)}),h
    },addProp(a, b) {Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set(b) {Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix(a) {return a[r.expando]?a:new r.Event(a)},special:{load:{noBubble:!0},focus:{trigger() {if(this!==xa()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger() {if(this===xa()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger() {if("checkbox"===this.type&&this.click&&B(this,"input"))return this.click(),!1},_default(a) {return B(a.target,"a")}},beforeunload:{postDispatch(a) {void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=(a, b, c) => {a.removeEventListener&&a.removeEventListener(b,c)},r.Event=function(a,b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?va:wa,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:wa,isPropagationStopped:wa,isImmediatePropagationStopped:wa,isSimulated:!1,preventDefault() {const a=this.originalEvent;this.isDefaultPrevented=va,a&&!this.isSimulated&&a.preventDefault()},stopPropagation() {const a=this.originalEvent;this.isPropagationStopped=va,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation() {const a=this.originalEvent;this.isImmediatePropagationStopped=va,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which(a) {const b=a.button;return null==a.which&&sa.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&ta.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},(a, b) => {r.event.special[a]={delegateType:b,bindType:b,handle(a) {
      let c;
      const d=this;
      const e=a.relatedTarget;
      const f=a.handleObj;
      return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c
    }}}),r.fn.extend({on(a, b, c, d) {return ya(this,a,b,c,d)},one(a, b, c, d) {return ya(this,a,b,c,d,1)},off(a, b, c) {
      let d;
      let e;
      if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?`${d.origType}.${d.namespace}`:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=wa),this.each(function(){r.event.remove(this,a,c,b)})
    }});
    const za=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi;
    const Aa=/<script|<style|<link/i;
    const Ba=/checked\s*(?:[^=]|=\s*.checked.)/i;
    const Ca=/^true\/(.*)/;
    const Da=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function Ea(a,b){return B(a,"table")&&B(11!==b.nodeType?b:b.firstChild,"tr")?r(">tbody",a)[0]||a:a}function Fa(a){return a.type=`${null!==a.getAttribute("type")}/${a.type}`,a}function Ga(a){const b=Ca.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ha(a,b){
      let c;
      let d;
      let e;
      let f;
      let g;
      let h;
      let i;
      let j;
      if(1===b.nodeType){if(W.hasData(a)&&(f=W.access(a),g=W.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;c<d;c++)r.event.add(b,e,j[e][c])}X.hasData(a)&&(h=X.access(a),i=r.extend({},h),X.set(b,i))}
    }function Ia(a,b){const c=b.nodeName.toLowerCase();"input"===c&&ja.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function Ja(a,b,c,d){
      b=g.apply([],b);
      let e;
      let f;
      let h;
      let i;
      let j;
      let k;
      let l=0;
      const m=a.length;
      const n=m-1;
      const q=b[0];
      const s=r.isFunction(q);
      if(s||m>1&&"string"==typeof q&&!o.checkClone&&Ba.test(q))return a.each(function(e){const f=a.eq(e);s&&(b[0]=q.call(this,e,f.html())),Ja(f,b,c,d)});if(m&&(e=qa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(na(e,"script"),Fa),i=h.length;l<m;l++)j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,na(j,"script"))),c.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Ga),l=0;l<i;l++)j=h[l],la.test(j.type||"")&&!W.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Da,""),k))}return a
    }function Ka(a,b,c){for(let d, e=b?r.filter(b,a):a, f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||r.cleanData(na(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&oa(na(d,"script")),d.parentNode.removeChild(d));return a}r.extend({htmlPrefilter(a) {return a.replace(za,"<$1></$2>")},clone(a, b, c) {
      let d;
      let e;
      let f;
      let g;
      const h=a.cloneNode(!0);
      const i=r.contains(a.ownerDocument,a);
      if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=na(h),f=na(a),d=0,e=f.length;d<e;d++)Ia(f[d],g[d]);if(b)if(c)for(f=f||na(a),g=g||na(h),d=0,e=f.length;d<e;d++)Ha(f[d],g[d]);else Ha(a,h);return g=na(h,"script"),g.length>0&&oa(g,!i&&na(a,"script")),h
    },cleanData(a) {for(let b, c, d, e=r.event.special, f=0;void 0!==(c=a[f]);f++)if(U(c)){if(b=c[W.expando]){if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);c[W.expando]=void 0}c[X.expando]&&(c[X.expando]=void 0)}}}),r.fn.extend({detach(a) {return Ka(this,a,!0)},remove(a) {return Ka(this,a)},text(a) {return T(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append() {return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){const b=Ea(this,a);b.appendChild(a)}})},prepend() {return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){const b=Ea(this,a);b.insertBefore(a,b.firstChild)}})},before() {return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after() {return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty() {for(let a, b=0;null!=(a=this[b]);b++)1===a.nodeType&&(r.cleanData(na(a,!1)),a.textContent="");return this},clone(a, b) {return a=null!=a&&a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b)})},html(a) {return T(this,function(a){
      let b=this[0]||{};
      let c=0;
      const d=this.length;
      if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!Aa.test(a)&&!ma[(ka.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},1===b.nodeType&&(r.cleanData(na(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)
    },null,a,arguments.length)},replaceWith() {const a=[];return Ja(this,arguments,function(b){const c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(na(this)),c&&c.replaceChild(b,this))},a)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},(a, b) => {r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;g<=f;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get());return this.pushStack(d)}});
    const La=/^margin/;
    const Ma=new RegExp(`^(${aa})(?!px)[a-z%]+$`,"i");
    const Na=b => {let c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};
    !(() => {
      function b(){if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",ra.appendChild(h);const b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,ra.removeChild(h),i=null}}
      var c;
      var e;
      var f;
      var g;
      var h=d.createElement("div");
      var i=d.createElement("div");
      i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition() {return b(),c},boxSizingReliable() {return b(),e},pixelMarginRight() {return b(),f},reliableMarginLeft() {return b(),g}}))
    })();function Oa(a,b,c){
      let d;
      let e;
      let f;
      let g;
      const h=a.style;
      return c=c||Na(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&Ma.test(g)&&La.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?`${g}`:g
    }function Pa(a,b){return{get() {return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}
    const Qa=/^(none|table(?!-c[ea]).+)/;
    const Ra=/^--/;
    const Sa={position:"absolute",visibility:"hidden",display:"block"};
    const Ta={letterSpacing:"0",fontWeight:"400"};
    const Ua=["Webkit","Moz","ms"];
    const Va=d.createElement("div").style;
    function Wa(a){
      if(a in Va)return a;
      const b=a[0].toUpperCase()+a.slice(1);
      let c=Ua.length;
      while(c--)if(a=Ua[c]+b,a in Va)return a
    }function Xa(a){let b=r.cssProps[a];return b||(b=r.cssProps[a]=Wa(a)||a),b}function Ya(a,b,c){const d=ba.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Za(a,b,c,d,e){
      let f;
      let g=0;
      for(f=c===(d?"border":"content")?4:"width"===b?1:0;f<4;f+=2)"margin"===c&&(g+=r.css(a,c+ca[f],!0,e)),d?("content"===c&&(g-=r.css(a,`padding${ca[f]}`,!0,e)),"margin"!==c&&(g-=r.css(a,`border${ca[f]}Width`,!0,e))):(g+=r.css(a,`padding${ca[f]}`,!0,e),"padding"!==c&&(g+=r.css(a,`border${ca[f]}Width`,!0,e)));return g
    }function $a(a,b,c){
      let d;
      const e=Na(a);
      let f=Oa(a,b,e);
      const g="border-box"===r.css(a,"boxSizing",!1,e);
      return Ma.test(f)?f:(d=g&&(o.boxSizingReliable()||f===a.style[b]),"auto"===f&&(f=a[`offset${b[0].toUpperCase()}${b.slice(1)}`]),f=parseFloat(f)||0,`${f+Za(a,b,c||(g?"border":"content"),d,e)}px`)
    }r.extend({cssHooks:{opacity:{get(a, b) {if(b){const c=Oa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style(a, b, c, d) {if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){
      let e;
      let f;
      let g;
      const h=r.camelCase(b);
      const i=Ra.test(b);
      const j=a.style;
      return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:j[b]:(f=typeof c,"string"===f&&(e=ba.exec(c))&&e[1]&&(c=fa(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||(j[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i?j.setProperty(b,c):j[b]=c)),void 0)
    }},css(a, b, c, d) {
      let e;
      let f;
      let g;
      const h=r.camelCase(b);
      const i=Ra.test(b);
      return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Oa(a,b,d)),"normal"===e&&b in Ta&&(e=Ta[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e
    }}),r.each(["height","width"],(a, b) => {r.cssHooks[b]={get(a, c, d) {if(c)return!Qa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?$a(a,b,d):ea(a,Sa,() => $a(a,b,d))},set(a, c, d) {
      let e;
      const f=d&&Na(a);
      const g=d&&Za(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);
      return g&&(e=ba.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Ya(a,c,g)
    }}}),r.cssHooks.marginLeft=Pa(o.reliableMarginLeft,(a, b) => {if(b)return`${parseFloat(Oa(a,"marginLeft"))||a.getBoundingClientRect().left-ea(a,{marginLeft:0},() => a.getBoundingClientRect().left)}px`}),r.each({margin:"",padding:"",border:"Width"},(a, b) => {r.cssHooks[a+b]={expand(c) {for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+ca[d]+b]=f[d]||f[d-2]||f[0];return e}},La.test(a)||(r.cssHooks[a+b].set=Ya)}),r.fn.extend({css(a, b) {return T(this,(a, b, c) => {
      let d;
      let e;
      const f={};
      let g=0;
      if(Array.isArray(b)){for(d=Na(a),e=b.length;g<e;g++)f[b[g]]=r.css(a,b[g],!1,d);return f}return void 0!==c?r.style(a,b,c):r.css(a,b)
    },a,b,arguments.length>1)}});function _a(a,b,c,d,e){return new _a.prototype.init(a,b,c,d,e)}r.Tween=_a,_a.prototype={constructor:_a,init(a, b, c, d, e, f) {this.elem=a,this.prop=c,this.easing=e||r.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(r.cssNumber[c]?"":"px")},cur() {const a=_a.propHooks[this.prop];return a&&a.get?a.get(this):_a.propHooks._default.get(this)},run(a) {
      let b;
      const c=_a.propHooks[this.prop];
      return this.options.duration?this.pos=b=r.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):_a.propHooks._default.set(this),this
    }},_a.prototype.init.prototype=_a.prototype,_a.propHooks={_default:{get(a) {let b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=r.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set(a) {r.fx.step[a.prop]?r.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[r.cssProps[a.prop]]&&!r.cssHooks[a.prop]?a.elem[a.prop]=a.now:r.style(a.elem,a.prop,a.now+a.unit)}}},_a.propHooks.scrollTop=_a.propHooks.scrollLeft={set(a) {a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},r.easing={linear(a) {return a},swing(a) {return.5-Math.cos(a*Math.PI)/2},_default:"swing"},r.fx=_a.prototype.init,r.fx.step={};
    let ab;
    let bb;
    const cb=/^(?:toggle|show|hide)$/;
    const db=/queueHooks$/;
    function eb(){bb&&(d.hidden===!1&&a.requestAnimationFrame?a.requestAnimationFrame(eb):a.setTimeout(eb,r.fx.interval),r.fx.tick())}function fb(){return a.setTimeout(() => {ab=void 0}),ab=r.now()}function gb(a,b){
      let c;
      let d=0;
      const e={height:a};
      for(b=b?1:0;d<4;d+=2-b)c=ca[d],e[`margin${c}`]=e[`padding${c}`]=a;return b&&(e.opacity=e.width=a),e
    }function hb(a,b,c){for(let d, e=(kb.tweeners[b]||[]).concat(kb.tweeners["*"]), f=0, g=e.length;f<g;f++)if(d=e[f].call(c,b,a))return d}function ib(a,b,c){
      let d;
      let e;
      let f;
      let g;
      let h;
      let i;
      let j;
      let k;
      const l="width"in b||"height"in b;
      const m=this;
      const n={};
      const o=a.style;
      let p=a.nodeType&&da(a);
      let q=W.get(a,"fxshow");
      c.queue||(g=r._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,g.empty.fire=() => {g.unqueued||h()}),g.unqueued++,m.always(() => {m.always(() => {g.unqueued--,r.queue(a,"fx").length||g.empty.fire()})}));for(d in b)if(e=b[d],cb.test(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}n[d]=q&&q[d]||r.style(a,d)}if(i=!r.isEmptyObject(b),i||!r.isEmptyObject(n)){l&&1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=q&&q.display,null==j&&(j=W.get(a,"display")),k=r.css(a,"display"),"none"===k&&(j?k=j:(ia([a],!0),j=a.style.display||j,k=r.css(a,"display"),ia([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===r.css(a,"float")&&(i||(m.done(() => {o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(() => {o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1;for(d in n)i||(q?"hidden"in q&&(p=q.hidden):q=W.access(a,"fxshow",{display:j}),f&&(q.hidden=!p),p&&ia([a],!0),m.done(() => {p||ia([a]),W.remove(a,"fxshow");for(d in n)r.style(a,d,n[d])})),i=hb(p?q[d]:0,d,m),d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0))}
    }function jb(a,b){
      let c;
      let d;
      let e;
      let f;
      let g;
      for(c in a)if(d=r.camelCase(c),e=b[d],f=a[c],Array.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=r.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e
    }function kb(a,b,c){
      let d;
      let e;
      let f=0;
      const g=kb.prefilters.length;
      const h=r.Deferred().always(() => {delete i.elem});
      const i=() => {if(e)return!1;for(var b=ab||fb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),f<1&&i?c:(i||h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j]),!1)};
  
      const j=h.promise({elem:a,props:r.extend({},b),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},c),originalProperties:b,originalOptions:c,startTime:ab||fb(),duration:c.duration,tweens:[],createTween(b, c) {const d=r.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop(b) {
        let c=0;
        const d=b?j.tweens.length:0;
        if(e)return this;for(e=!0;c<d;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this
      }});
  
      const k=j.props;
      for(jb(k,j.opts.specialEasing);f<g;f++)if(d=kb.prefilters[f].call(j,a,k,j.opts))return r.isFunction(d.stop)&&(r._queueHooks(j.elem,j.opts.queue).stop=r.proxy(d.stop,d)),d;return r.map(k,hb,j),r.isFunction(j.opts.start)&&j.opts.start.call(a,j),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always),r.fx.timer(r.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j
    }r.Animation=r.extend(kb,{tweeners:{"*":[function(a,b){const c=this.createTween(a,b);return fa(c.elem,a,ba.exec(b),c),c}]},tweener(a, b) {r.isFunction(a)?(b=a,a=["*"]):a=a.match(L);for(let c, d=0, e=a.length;d<e;d++)c=a[d],kb.tweeners[c]=kb.tweeners[c]||[],kb.tweeners[c].unshift(b)},prefilters:[ib],prefilter(a, b) {b?kb.prefilters.unshift(a):kb.prefilters.push(a)}}),r.speed=(a, b, c) => {const d=a&&"object"==typeof a?r.extend({},a):{complete:c||!c&&b||r.isFunction(a)&&a,duration:a,easing:c&&b||b&&!r.isFunction(b)&&b};return r.fx.off?d.duration=0:"number"!=typeof d.duration&&(d.duration in r.fx.speeds?d.duration=r.fx.speeds[d.duration]:d.duration=r.fx.speeds._default),null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){r.isFunction(d.old)&&d.old.call(this),d.queue&&r.dequeue(this,d.queue)},d},r.fn.extend({fadeTo(a, b, c, d) {return this.filter(da).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate(a, b, c, d) {
      const e=r.isEmptyObject(a);
      const f=r.speed(b,c,d);
      const g=function(){const b=kb(this,r.extend({},a),f);(e||W.get(this,"finish"))&&b.stop(!0)};
      return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)
    },stop(a, b, c) {
      class d {
        constructor(a) {const b=a.stop;delete a.stop,b(c)}
        static stop() {a.clearTimeout(e)}
      }
  
      return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){
        let b=!0;
        let e=null!=a&&`${a}queueHooks`;
        const f=r.timers;
        const g=W.get(this);
        if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&db.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||r.dequeue(this,a)
      })
    },finish(a) {return a!==!1&&(a=a||"fx"),this.each(function(){
      let b;
      const c=W.get(this);
      const d=c[`${a}queue`];
      const e=c[`${a}queueHooks`];
      const f=r.timers;
      const g=d?d.length:0;
      for(c.finish=!0,r.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish
    })}}),r.each(["toggle","show","hide"],(a, b) => {const c=r.fn[b];r.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gb(b,!0),a,d,e)}}),r.each({slideDown:gb("show"),slideUp:gb("hide"),slideToggle:gb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},(a, b) => {r.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),r.timers=[],r.fx.tick=() => {
      let a;
      let b=0;
      const c=r.timers;
      for(ab=r.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||r.fx.stop(),ab=void 0
    },r.fx.timer=a => {r.timers.push(a),r.fx.start()},r.fx.interval=13,r.fx.start=() => {bb||(bb=!0,eb())},r.fx.stop=() => {bb=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,(c, d) => {
      const e=a.setTimeout(c,b);
    })},(() => {
      let a=d.createElement("input");
      const b=d.createElement("select");
      const c=b.appendChild(d.createElement("option"));
      a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value
    })();
    let lb;
    const mb=r.expr.attrHandle;
    r.fn.extend({attr(a, b) {return T(this,r.attr,a,b,arguments.length>1)},removeAttr(a) {return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr(a, b, c) {
      let d;
      let e;
      const f=a.nodeType;
      if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?lb:void 0)),void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,`${c}`),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),
      null==d?void 0:d))
    },attrHooks:{type:{set(a, b) {if(!o.radioValue&&"radio"===b&&B(a,"input")){const c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr(a, b) {
      let c;
      let d=0;
      const e=b&&b.match(L);
      if(e&&1===a.nodeType)while(c=e[d++])a.removeAttribute(c)
    }}),lb={set(a, b, c) {return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),(a, b) => {const c=mb[b]||r.find.attr;mb[b]=(a, b, d) => {
      let e;
      let f;
      const g=b.toLowerCase();
      return d||(f=mb[g],mb[g]=e,e=null!=c(a,b,d)?g:null,mb[g]=f),e
    }});
    const nb=/^(?:input|select|textarea|button)$/i;
    const ob=/^(?:a|area)$/i;
    r.fn.extend({prop(a, b) {return T(this,r.prop,a,b,arguments.length>1)},removeProp(a) {return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop(a, b, c) {
      let d;
      let e;
      const f=a.nodeType;
      if(3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]
    },propHooks:{tabIndex:{get(a) {const b=r.find.attr(a,"tabindex");return b?parseInt(b,10):nb.test(a.nodeName)||ob.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),o.optSelected||(r.propHooks.selected={get(a) {const b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set(a) {const b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});function pb(a){const b=a.match(L)||[];return b.join(" ")}function qb(a){return a.getAttribute&&a.getAttribute("class")||""}r.fn.extend({addClass(a) {
      let b;
      let c;
      let d;
      let e;
      let f;
      let g;
      let h;
      let i=0;
      if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,qb(this)))});if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&` ${pb(e)} `){g=0;while(f=b[g++])!d.includes(` ${f} `)&&(d+=`${f} `);h=pb(d),e!==h&&c.setAttribute("class",h)}}return this
    },removeClass(a) {
      let b;
      let c;
      let d;
      let e;
      let f;
      let g;
      let h;
      let i=0;
      if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,qb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&` ${pb(e)} `){g=0;while(f=b[g++])while(d.includes(` ${f} `))d=d.replace(` ${f} `," ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this
    },toggleClass(a, b) {const c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,qb(this),b),b)}):this.each(function(){
      let b;
      let d;
      let e;
      let f;
      if("string"===c){d=0,e=r(this),f=a.match(L)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=qb(this),b&&W.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":W.get(this,"__className__")||""))
    })},hasClass(a) {
      let b;
      let c;
      let d=0;
      b=` ${a} `;while(c=this[d++])if(1===c.nodeType&&` ${pb(qb(c))} `.includes(b))return!0;return!1
    }});const rb=/\r/g;r.fn.extend({val(a) {
      let b;
      let c;
      let d;
      const e=this[0];
      {if(arguments.length)return d=r.isFunction(a),this.each(function(c){let e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":"number"==typeof e?e+="":Array.isArray(e)&&(e=r.map(e,a => null==a?"":`${a}`)),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}
    }}),r.extend({valHooks:{option:{get(a) {const b=r.find.attr(a,"value");return null!=b?b:pb(r.text(a))}},select:{get(a) {
      let b;
      let c;
      let d;
      const e=a.options;
      const f=a.selectedIndex;
      const g="select-one"===a.type;
      const h=g?null:[];
      const i=g?f+1:e.length;
      for(d=f<0?i:g?f:0;d<i;d++)if(c=e[d],(c.selected||d===f)&&!c.disabled&&(!c.parentNode.disabled||!B(c.parentNode,"optgroup"))){if(b=r(c).val(),g)return b;h.push(b)}return h
    },set(a, b) {
      let c;
      let d;
      const e=a.options;
      const f=r.makeArray(b);
      let g=e.length;
      while(g--)d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f
    }}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set(a, b) {if(Array.isArray(b))return a.checked=r.inArray(r(a).val(),b)>-1}},o.checkOn||(r.valHooks[this].get=a => null===a.getAttribute("value")?"on":a.value)});const sb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger(b, c, e, f) {
      let g;
      let h;
      let i;
      let j;
      let k;
      let m;
      let n;
      const o=[e||d];
      let p=l.call(b,"type")?b.type:b;
      let q=l.call(b,"namespace")?b.namespace.split("."):[];
      if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!sb.test(p+r.event.triggered)&&(p.includes(".")&&(q=p.split("."),p=q.shift(),q.sort()),k=!p.includes(":")&&`on${p}`,b=b[r.expando]?b:new r.Event(p,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp(`(^|\\.)${q.join("\\.(?:.*\\.|)")}(\\.|$)`):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,sb.test(j+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a)}g=0;while((h=o[g++])&&!b.isPropagationStopped())b.type=g>1?j:n.bindType||p,m=(W.get(h,"events")||{})[b.type]&&W.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&m.apply&&U(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=p,f||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!U(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}
    },simulate(a, b, c) {const d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger(a, b) {return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler(a, b) {const c=this[0];if(c)return r.event.trigger(a,b,c,!0)}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),(a, b) => {r.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover(a, b) {return this.mouseenter(a).mouseleave(b||a)}}),o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},(a, b) => {const c=a => {r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup() {
      const d=this.ownerDocument||this;
      const e=W.access(d,b);
      e||d.addEventListener(a,c,!0),W.access(d,b,(e||0)+1)
    },teardown() {
      const d=this.ownerDocument||this;
      const e=W.access(d,b)-1;
      e?W.access(d,b,e):(d.removeEventListener(a,c,!0),W.remove(d,b))
    }}});
    const tb=a.location;
    let ub=r.now();
    const vb=/\?/;
    r.parseXML=b => {let c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||r.error(`Invalid XML: ${b}`),c};
    const wb=/\[\]$/;
    const xb=/\r?\n/g;
    const yb=/^(?:submit|button|image|reset|file)$/i;
    const zb=/^(?:input|select|textarea|keygen)/i;
    function Ab(a,b,c,d){let e;if(Array.isArray(b))r.each(b,(b, e) => {c||wb.test(a)?d(a,e):Ab(`${a}[${"object"==typeof e&&null!=e?b:""}]`,e,c,d)});else if(c||"object"!==r.type(b))d(a,b);else for(e in b)Ab(`${a}[${e}]`,b[e],c,d)}r.param=(a, b) => {
      let c;
      const d=[];
      const e=(a, b) => {const c=r.isFunction(b)?b():b;d[d.length]=`${encodeURIComponent(a)}=${encodeURIComponent(null==c?"":c)}`};
      if(Array.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&")
    },r.fn.extend({serialize() {return r.param(this.serializeArray())},serializeArray() {return this.map(function(){const a=r.prop(this,"elements");return a?r.makeArray(a):this}).filter(function(){const a=this.type;return this.name&&!r(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!ja.test(a))}).map(function(a,b){const c=r(this).val();return null==c?null:Array.isArray(c)?r.map(c,a => ({
      name:b.name,
      value:a.replace(xb,"\r\n")
    })):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}});
    const Bb=/%20/g;
    const Cb=/#.*$/;
    const Db=/([?&])_=[^&]*/;
    const Eb=/^(.*?):[ \t]*([^\r\n]*)$/gm;
    const Fb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/;
    const Gb=/^(?:GET|HEAD)$/;
    const Hb=/^\/\//;
    const Ib={};
    const Jb={};
    const Kb="*/".concat("*");
    const Lb=d.createElement("a");
    Lb.href=tb.href;function Mb(a){return (b, c) => {
      "string"!=typeof b&&(c=b,b="*");
      let d;
      let e=0;
      const f=b.toLowerCase().match(L)||[];
      if(r.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)
    }}function Nb(a,b,c,d){
      const e={};
      const f=a===Jb;
      function g(h){let i;return e[h]=!0,r.each(a[h]||[],(a, h) => {const j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")
    }function Ob(a,b){
      let c;
      let d;
      const e=r.ajaxSettings.flatOptions||{};
      for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&r.extend(!0,a,d),a
    }function Pb(a,b,c){
      let d;
      let e;
      let f;
      let g;
      const h=a.contents;
      const i=a.dataTypes;
      while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[`${e} ${i[0]}`]){f=e;break}g||(g=e)}f=f||g}if(f)return f!==i[0]&&i.unshift(f),c[f]
    }function Qb(a,b,c,d){
      let e;
      let f;
      let g;
      let h;
      let i;
      const j={};
      const k=a.dataTypes.slice();
      if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[`${i} ${f}`]||j[`* ${f}`],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[`${i} ${h[0]}`]||j[`* ${h[0]}`])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:`No conversion from ${i} to ${f}`}}}return{state:"success",data:b}
    }r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:tb.href,type:"GET",isLocal:Fb.test(tb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Kb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup(a, b) {return b?Ob(Ob(a,r.ajaxSettings),b):Ob(r.ajaxSettings,a)},ajaxPrefilter:Mb(Ib),ajaxTransport:Mb(Jb),ajax(b, c) {
      "object"==typeof b&&(c=b,b=void 0),c=c||{};
      let e;
      let f;
      let g;
      let h;
      let i;
      let j;
      let k;
      let l;
      let m;
      let n;
      const o=r.ajaxSetup({},c);
      const p=o.context||o;
      const q=o.context&&(p.nodeType||p.jquery)?r(p):r.event;
      const s=r.Deferred();
      const t=r.Callbacks("once memory");
      let u=o.statusCode||{};
      const v={};
      const w={};
      let x="canceled";
      const y={readyState:0,getResponseHeader(a) {let b;if(k){if(!h){h={};while(b=Eb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders() {return k?g:null},setRequestHeader(a, b) {return null==k&&(a=w[a.toLowerCase()]=w[a.toLowerCase()]||a,v[a]=b),this},overrideMimeType(a) {return null==k&&(o.mimeType=a),this},statusCode(a) {let b;if(a)if(k)y.always(a[y.status]);else for(b in a)u[b]=[u[b],a[b]];return this},abort(a) {const b=a||x;return e&&e.abort(b),A(0,b),this}};
      if(s.promise(y),o.url=(`${b||o.url||tb.href}`).replace(Hb,`${tb.protocol}//`),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(L)||[""],null==o.crossDomain){j=d.createElement("a");try{j.href=o.url,j.href=j.href,o.crossDomain=`${Lb.protocol}//${Lb.host}`!=`${j.protocol}//${j.host}`}catch(z){o.crossDomain=!0}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=r.param(o.data,o.traditional)),Nb(Ib,o,c,y),k)return y;l=r.event&&o.global,l&&0===r.active++&&r.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Gb.test(o.type),f=o.url.replace(Cb,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(Bb,"+")):(n=o.url.slice(f.length),o.data&&(f+=(vb.test(f)?"&":"?")+o.data,delete o.data),o.cache===!1&&(f=f.replace(Db,"$1"),n=`${vb.test(f)?"&":"?"}_=${ub++}${n}`),o.url=f+n),o.ifModified&&(r.lastModified[f]&&y.setRequestHeader("If-Modified-Since",r.lastModified[f]),r.etag[f]&&y.setRequestHeader("If-None-Match",r.etag[f])),(o.data&&o.hasContent&&o.contentType!==!1||c.contentType)&&y.setRequestHeader("Content-Type",o.contentType),y.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Kb+"; q=0.01":""):o.accepts["*"]);for(m in o.headers)y.setRequestHeader(m,o.headers[m]);if(o.beforeSend&&(o.beforeSend.call(p,y,o)===!1||k))return y.abort();if(x="abort",t.add(o.complete),y.done(o.success),y.fail(o.error),e=Nb(Jb,o,c,y)){if(y.readyState=1,l&&q.trigger("ajaxSend",[y,o]),k)return y;o.async&&o.timeout>0&&(i=a.setTimeout(() => {y.abort("timeout")},o.timeout));try{k=!1,e.send(v,A)}catch(z){if(k)throw z;A(-1,z)}}else A(-1,"No Transport");function A(b,c,d,h){
        let j;
        let m;
        let n;
        let v;
        let w;
        let x=c;
        k||(k=!0,i&&a.clearTimeout(i),e=void 0,g=h||"",y.readyState=b>0?4:0,j=b>=200&&b<300||304===b,d&&(v=Pb(o,y,d)),v=Qb(o,v,y,j),j?(o.ifModified&&(w=y.getResponseHeader("Last-Modified"),w&&(r.lastModified[f]=w),w=y.getResponseHeader("etag"),w&&(r.etag[f]=w)),204===b||"HEAD"===o.type?x="nocontent":304===b?x="notmodified":(x=v.state,m=v.data,n=v.error,j=!n)):(n=x,!b&&x||(x="error",b<0&&(b=0))),y.status=b,y.statusText=`${c||x}`,j?s.resolveWith(p,[m,x,y]):s.rejectWith(p,[y,x,n]),y.statusCode(u),u=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[y,o,j?m:n]),t.fireWith(p,[y,x]),l&&(q.trigger("ajaxComplete",[y,o]),--r.active||r.event.trigger("ajaxStop")))
      }return y
    },getJSON(a, b, c) {return r.get(a,b,c,"json")},getScript(a, b) {return r.get(a,void 0,b,"script")}}),r.each(["get","post"],(a, b) => {r[b]=(a, c, d, e) => (r.isFunction(c)&&(e=e||d,d=c,c=void 0), r.ajax(r.extend({url:a,type:b,dataType:e,data:c,success:d},r.isPlainObject(a)&&a)))}),r._evalUrl=a => r.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0}),r.fn.extend({wrapAll(a) {let b;return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){let a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this},wrapInner(a) {return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){
      const b=r(this);
      const c=b.contents();
      c.length?c.wrapAll(a):b.append(a)
    })},wrap(a) {const b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap(a) {return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=a => !r.expr.pseudos.visible(a),r.expr.pseudos.visible=a => !!(a.offsetWidth||a.offsetHeight||a.getClientRects().length),r.ajaxSettings.xhr=() => {try{return new a.XMLHttpRequest}catch(b){}};
    const Rb={0:200,1223:204};
    let Sb=r.ajaxSettings.xhr();
    o.cors=!!Sb&&"withCredentials"in Sb,o.ajax=Sb=!!Sb,r.ajaxTransport(b => {
      let c;
      let d;
      if(o.cors||Sb&&!b.crossDomain)return{send(e, f) {
        let g;
        const h=b.xhr();
        if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=a => () => {c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Rb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=() => {4===h.readyState&&a.setTimeout(() => {c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}
      },abort() {c&&c()}}
    }),r.ajaxPrefilter(a => {a.crossDomain&&(a.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script"(a) {return r.globalEval(a),a}}}),r.ajaxPrefilter("script",a => {void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),r.ajaxTransport("script",a => {if(a.crossDomain){
      let b;
      let c;
      return{send(e, f) {b=r("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=a => {b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort() {c&&c()}}
    }});
    const Tb=[];
    const Ub=/(=)\?(?=&|$)|\?\?/;
    r.ajaxSetup({jsonp:"callback",jsonpCallback() {const a=Tb.pop()||`${r.expando}_${ub++}`;return this[a]=!0,a}}),r.ajaxPrefilter("json jsonp",(b, c, d) => {
      let e;
      let f;
      let g;
      const h=b.jsonp!==!1&&(Ub.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ub.test(b.data)&&"data");
      if(h||"jsonp"===b.dataTypes[0])return e=b.jsonpCallback=r.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Ub,`$1${e}`):b.jsonp!==!1&&(b.url+=`${(vb.test(b.url)?"&":"?")+b.jsonp}=${e}`),b.converters["script json"]=() => (g||r.error(`${e} was not called`), g[0]),b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(() => {void 0===f?r(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Tb.push(e)),g&&r.isFunction(f)&&f(g[0]),g=f=void 0}),"script"
    }),o.createHTMLDocument=(() => {const a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length})(),r.parseHTML=(a, b, c) => {
      if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);
      let e;
      let f;
      let g;
      return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=C.exec(a),g=!c&&[],f?[b.createElement(f[1])]:(f=qa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes))
    },r.fn.load=function(a,b,c){
      let d;
      let e;
      let f;
      const g=this;
      const h=a.indexOf(" ");
      return h>-1&&(d=pb(a.slice(h)),a=a.slice(0,h)),r.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&r.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?r("<div>").append(r.parseHTML(a)).find(d):a)}).always(c&&((a, b) => {g.each(function(){c.apply(this,f||[a.responseText,b,a])})})),this
    },r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],(a, b) => {r.fn[b]=function(a){return this.on(b,a)}}),r.expr.pseudos.animated=a => r.grep(r.timers,b => a===b.elem).length,r.offset={setOffset(a, b, c) {
      let d;
      let e;
      let f;
      let g;
      let h;
      let i;
      let j;
      const k=r.css(a,"position");
      const l=r(a);
      const m={};
      "static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f + i).includes("auto"),j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)
    }},r.fn.extend({offset(a) {
      if(arguments.length)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});
      let b;
      let c;
      let d;
      let e;
      const f=this[0];
      if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),b=f.ownerDocument,c=b.documentElement,e=b.defaultView,{top:d.top+e.pageYOffset-c.clientTop,left:d.left+e.pageXOffset-c.clientLeft}):{top:0,left:0}
    },position() {if(this[0]){
      let a;
      let b;
      const c=this[0];
      let d={top:0,left:0};
      return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),B(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}
    }},offsetParent() {return this.map(function(){let a=this.offsetParent;while(a&&"static"===r.css(a,"position"))a=a.offsetParent;return a||ra})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},(a, b) => {const c="pageYOffset"===b;r.fn[a]=function(d){return T(this,(a, d, e) => {let f;return r.isWindow(a)?f=a:9===a.nodeType&&(f=a.defaultView),void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each(["top","left"],(a, b) => {r.cssHooks[b]=Pa(o.pixelPosition,(a, c) => {if(c)return c=Oa(a,b),Ma.test(c)?`${r(a).position()[b]}px`:c})}),r.each({Height:"height",Width:"width"},(a, b) => {r.each({padding:`inner${a}`,content:b,"":`outer${a}`},(c, d) => {r.fn[d]=function(e,f){
      const g=arguments.length&&(c||"boolean"!=typeof e);
      const h=c||(e===!0||f===!0?"margin":"border");
      return T(this,(b, c, e) => {let f;return r.isWindow(b)?0===d.indexOf("outer")?b[`inner${a}`]:b.document.documentElement[`client${a}`]:9===b.nodeType?(f=b.documentElement,Math.max(b.body[`scroll${a}`],f[`scroll${a}`],b.body[`offset${a}`],f[`offset${a}`],f[`client${a}`])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)
    }})}),r.fn.extend({bind(a, b, c) {return this.on(a,null,b,c)},unbind(a, b) {return this.off(a,null,b)},delegate(a, b, c, d) {return this.on(b,a,c,d)},undelegate(a, b, c) {return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),r.holdReady=a => {a?r.readyWait++:r.ready(!0)},r.isArray=Array.isArray,r.parseJSON=JSON.parse,r.nodeName=B,"function"==typeof define&&define.amd&&define("jquery",[],() => r);
    const Vb=a.jQuery;
    const Wb=a.$;
    return r.noConflict=b => (a.$===r&&(a.$=Wb), b&&a.jQuery===r&&(a.jQuery=Vb), r),b||(a.jQuery=a.$=r),r
  });