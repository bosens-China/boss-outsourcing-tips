// ==UserScript==
// @name         boss外包公司提示
// @namespace    https://github.com/bosens-China/judgment-outsourcing
// @version      1.0.0
// @description  boss招聘对外包公司显式提醒
// @author       yliu
// @match        https://www.zhipin.com/job_detail/*
// @match        http://www.zhipin.com/job_detail/*
// @grant        none
// ==/UserScript==
(function () {
  'use strict';

  var blacklist$1 = [
    "\u535A\u6717\u8F6F\u4EF6",
    "\u4E2D\u8F6F\u56FD\u9645",
    "\u4E1C\u8F6F\u96C6\u56E2",
    "\u535A\u5F66\u79D1\u6280",
    "\u4E2D\u7535\u91D1\u4FE1",
    "\u6CD5\u672C\u4FE1\u606F",
    "\u6D59\u5927\u7F51\u65B0",
    "\u5965\u535A\u6770\u5929",
    "\u6D6A\u6F6E",
    "\u8F6F\u901A\u52A8\u529B",
    "\u798F\u745E\u535A\u5FB7",
    "\u4FE1\u5FC5\u4F18",
    "\u5927\u5C55\u79D1\u6280",
    "\u6052\u751F\u7535\u5B50",
    "\u65E5\u7535\u5353\u8D8A\u8F6F\u4EF6",
    "\u5927\u8FDE\u534E\u4FE1",
    "\u4E2D\u548C\u8F6F\u4EF6",
    "\u65B0\u81F4\u8F6F\u4EF6",
    "\u827E\u65AF\u514B\u96F7",
    "\u6D77\u9686\u8F6F\u4EF6",
    "\u5927\u5B87\u5B99\u4FE1\u606F",
    "\u665F\u5CF0\u8F6F\u4EF6",
    "\u5BCC\u58EB\u901A\u4FE1\u606F",
    "NTTDATA",
    "\u5B8F\u667A\u79D1\u6280",
    "\u795E\u5DDE\u6570\u7801\u901A\u7528\u8F6F\u4EF6",
    "\u51CC\u5FD7\u8F6F\u4EF6",
    "\u97F3\u6CF0\u601D",
    "\u5FAE\u521B\u8F6F\u4EF6",
    "\u5F00\u76EE\u4F70\u94A7\u6210",
    "\u6D69\u9CB8\u667A\u80FD",
    "\u8BDA\u8FC8\u79D1\u6280",
    "\u6DA6\u548C\u8F6F\u4EF6",
    "ST \u65B0\u6D77"
  ];
  var KeyWords = [
    "\u89E3\u51B3\u65B9\u6848",
    "\u6280\u672F\u670D\u52A1",
    "\u9A7B\u573A",
    "\u51FA\u5DEE",
    "\u73B0\u573A",
    "\u6D3E\u9063",
    "\u56FD\u5185\u9886\u5148",
    "\u670D\u52A1\u63D0\u4F9B\u5546",
    "\u6570\u5B57\u5316\u8F6C\u578B",
    "\u5B9A\u5236\u5316\u7CFB\u7EDF",
    "\u4E00\u7AD9\u5F0F\u670D\u52A1",
    "\u4E3A\u5BA2\u6237\u63D0\u4F9B",
    "\u4E00\u4F53\u5316"
  ];
  var information_default = {
    blacklist: blacklist$1,
    KeyWords
  };

  const keyWords = () => {
    const selectors = [
      ".job-banner",
      ".job-detail-section",
      ".job-detail-company"
    ];
    const content = selectors.reduce((text2, selector) => {
      const dom = document.body.querySelector(selector);
      return text2 + (dom?.textContent ?? "");
    }, "");
    let text = "\u8BE5\u5C97\u4F4D\u63CF\u8FF0\u7B26\u5408\u5916\u5305\u5B9A\u4E49\uFF0C\u5177\u4F53\u5982\u4E0B\uFF1A\n";
    const frequency = information_default.KeyWords.reduce((count, KeyWord) => {
      if (content.includes(KeyWord)) {
        text += `${count + 1}. ${KeyWord}
`;
        return count + 1;
      }
      return count;
    }, 0);
    if (!frequency) {
      return true;
    }
    return { grade: frequency === 1 ? 0 : 1, text: text.trim() };
  };

  const blacklist = () => {
    const content = document.body.querySelector(`a[ka="job-detail-company_custompage"]`)?.textContent || "";
    let text = "";
    const frequency = information_default.blacklist.some((KeyWord) => {
      if (content.includes(KeyWord)) {
        text = `\u516C\u53F8\u540D\u79F0\u4E3A\u5916\u5305\uFF1A${KeyWord}`;
        return true;
      }
      return false;
    });
    if (!frequency) {
      return true;
    }
    return { grade: 1, text };
  };

  class Chain {
    constructor(fn) {
      this.fn = fn;
    }
    next() {
      const result2 = this.fn();
      if (result2 && this.chain) {
        return this.chain.next.apply(this.chain);
      }
      return result2;
    }
    setNext(chain) {
      this.chain = chain;
      return chain;
    }
  }
  const chainKeyWords = new Chain(keyWords);
  const chainBlacklist = new Chain(blacklist);
  const result = chainBlacklist.setNext(chainKeyWords).next();

  var n$1,l$1,u$1,s$1=[];function y$1(l,u,t){var i,o,r,f={};for(r in u)"key"==r?i=u[r]:"ref"==r?o=u[r]:f[r]=u[r];if(arguments.length>2&&(f.children=arguments.length>3?n$1.call(arguments,2):t),"function"==typeof l&&null!=l.defaultProps)for(r in l.defaultProps)void 0===f[r]&&(f[r]=l.defaultProps[r]);return d$1(l,f,i,o,null)}function d$1(n,t,i,o,r){var f={type:n,props:t,key:i,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==r?++u$1:r};return null==r&&null!=l$1.vnode&&l$1.vnode(f),f}function k$1(n){return n.children}n$1=s$1.slice,l$1={__e:function(n,l,u,t){for(var i,o,r;l=l.__;)if((i=l.__c)&&!i.__)try{if((o=i.constructor)&&null!=o.getDerivedStateFromError&&(i.setState(o.getDerivedStateFromError(n)),r=i.__d),null!=i.componentDidCatch&&(i.componentDidCatch(n,t||{}),r=i.__d),r)return i.__E=i}catch(l){n=l;}throw n}},u$1=0,"function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout;

  var _$1=0;function o$1(o,e,n,t,f,l){var s,u,a={};for(u in e)"ref"==u?s=e[u]:a[u]=e[u];var i={type:o,props:a,key:n,ref:s,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--_$1,__source:f,__self:l};if("function"==typeof o&&(s=o.defaultProps))for(u in s)void 0===a[u]&&(a[u]=s[u]);return l$1.vnode&&l$1.vnode(i),i}

  var o=/[\s\n\\/='"\0<>]/,a=/^(xlink|xmlns|xml)([A-Z])/,n=/^accessK|^auto[A-Z]|^ch|^col|cont|cross|dateT|encT|form[A-Z]|frame|hrefL|inputM|maxL|minL|noV|playsI|readO|rowS|spellC|src[A-Z]|tabI|item[A-Z]/,i=/^ac|^ali|arabic|basel|cap|clipPath$|clipRule$|color|dominant|enable|fill|flood|font|glyph[^R]|horiz|image|letter|lighting|marker[^WUH]|overline|panose|pointe|paint|rendering|shape|stop|strikethrough|stroke|text[^L]|transform|underline|unicode|units|^v[^i]|^w|^xH/,l=/["&<]/;function s(e){if(0===e.length||!1===l.test(e))return e;for(var t=0,r=0,o="",a="";r<e.length;r++){switch(e.charCodeAt(r)){case 34:a="&quot;";break;case 38:a="&amp;";break;case 60:a="&lt;";break;default:continue}r!==t&&(o+=e.slice(t,r)),o+=a,t=r+1;}return r!==t&&(o+=e.slice(t,r)),o}var c={},p=new Set(["animation-iteration-count","border-image-outset","border-image-slice","border-image-width","box-flex","box-flex-group","box-ordinal-group","column-count","fill-opacity","flex","flex-grow","flex-negative","flex-order","flex-positive","flex-shrink","flood-opacity","font-weight","grid-column","grid-row","line-clamp","line-height","opacity","order","orphans","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-miterlimit","stroke-opacity","stroke-width","tab-size","widows","z-index","zoom"]),u=/[A-Z]/g;function _(e){var t="";for(var r in e){var o=e[r];if(null!=o&&""!==o){var a="-"==r[0]?r:c[r]||(c[r]=r.replace(u,"-$&").toLowerCase()),n=";";"number"!=typeof o||a.startsWith("--")||p.has(a)||(n="px;"),t=t+a+":"+o+n;}}return t||void 0}var d,f,h,m,v=[],g=Array.isArray,y=Object.assign;function b(o,a){var n=l$1.__s;l$1.__s=!0,d=l$1.__b,f=l$1.diffed,h=l$1.__r,m=l$1.unmount;var i=y$1(k$1,null);i.__k=[o];try{return C(o,a||x,!1,void 0,i)}finally{l$1.__c&&l$1.__c(o,v),l$1.__s=n,v.length=0;}}function k(){this.__d=!0;}var x={};function w(e,t){var r,o=e.type,a=!0;return e.__c?(a=!1,(r=e.__c).state=r.__s):r=new o(e.props,t),e.__c=r,r.__v=e,r.props=e.props,r.context=t,r.__d=!0,null==r.state&&(r.state=x),null==r.__s&&(r.__s=r.state),o.getDerivedStateFromProps?r.state=y({},r.state,o.getDerivedStateFromProps(r.props,r.state)):a&&r.componentWillMount?(r.componentWillMount(),r.state=r.__s!==r.state?r.__s:r.state):!a&&r.componentWillUpdate&&r.componentWillUpdate(),h&&h(e),r.render(r.props,r.state,t)}function C(t,l,c,p,u){if(null==t||!0===t||!1===t||""===t)return "";if("object"!=typeof t)return "function"==typeof t?"":s(t+"");if(g(t)){var v="";u.__k=t;for(var b=0;b<t.length;b++){var x=t[b];null!=x&&"boolean"!=typeof x&&(v+=C(x,l,c,p,u));}return v}if(void 0!==t.constructor)return "";t.__=u,d&&d(t);var A,L,D,E=t.type,T=t.props,Z=l;if("function"==typeof E){if(E===k$1){if(T.UNSTABLE_comment)return "\x3c!--"+s(T.UNSTABLE_comment||"")+"--\x3e";L=T.children;}else {if(null!=(A=E.contextType)){var F=l[A.__c];Z=F?F.props.value:A.__;}if(E.prototype&&"function"==typeof E.prototype.render)L=w(t,Z),D=t.__c;else {t.__c=D={__v:t,props:T,context:Z,setState:k,forceUpdate:k,__d:!0,__h:[]};for(var U=0;D.__d&&U++<25;)D.__d=!1,h&&h(t),L=E.call(D,T,Z);D.__d=!0;}if(null!=D.getChildContext&&(l=y({},l,D.getChildContext())),(E.getDerivedStateFromError||D.componentDidCatch)&&l$1.errorBoundaries){var W="";L=null!=L&&L.type===k$1&&null==L.key?L.props.children:L;try{return W=C(L,l,c,p,t)}catch(e){return E.getDerivedStateFromError&&(D.__s=E.getDerivedStateFromError(e)),D.componentDidCatch&&D.componentDidCatch(e,{}),D.__d&&(L=w(t,l),null!=(D=t.__c).getChildContext&&(l=y({},l,D.getChildContext())),W=C(L=null!=L&&L.type===k$1&&null==L.key?L.props.children:L,l,c,p,t)),W}finally{f&&f(t),t.__=void 0,m&&m(t);}}}var $=C(L=null!=L&&L.type===k$1&&null==L.key?L.props.children:L,l,c,p,t);return f&&f(t),t.__=void 0,m&&m(t),$}var M,j="<"+E,z="";for(var H in T){var q=T[H];switch(H){case"children":M=q;continue;case"key":case"ref":case"__self":case"__source":continue;case"htmlFor":if("for"in T)continue;H="for";break;case"className":if("class"in T)continue;H="class";break;case"defaultChecked":H="checked";break;case"defaultSelected":H="selected";break;case"defaultValue":case"value":switch(H="value",E){case"textarea":M=q;continue;case"select":p=q;continue;case"option":p!=q||"selected"in T||(j+=" selected");}break;case"dangerouslySetInnerHTML":z=q&&q.__html;continue;case"style":"object"==typeof q&&(q=_(q));break;case"acceptCharset":H="accept-charset";break;case"httpEquiv":H="http-equiv";break;default:if(a.test(H))H=H.replace(a,"$1:$2").toLowerCase();else {if(o.test(H))continue;"-"!==H[4]&&"draggable"!==H||null==q?c?i.test(H)&&(H="panose1"===H?"panose-1":H.replace(/([A-Z])/g,"-$1").toLowerCase()):n.test(H)&&(H=H.toLowerCase()):q+="";}}null!=q&&!1!==q&&"function"!=typeof q&&(j=!0===q||""===q?j+" "+H:j+" "+H+'="'+s(q+"")+'"');}if(o.test(E))throw new Error(E+" is not a valid HTML tag name in "+j+">");return z||("string"==typeof M?z=s(M):null!=M&&!1!==M&&!0!==M&&(z=C(M,l,"svg"===E||"foreignObject"!==E&&c,p,t))),f&&f(t),t.__=void 0,m&&m(t),!z&&S.has(E)?j+"/>":j+">"+z+"</"+E+">"}var S=new Set(["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"]),A=b;

  const Notify = (props) => {
    const { grade } = props;
    const text = grade === 0 ? "\u26A0\uFE0F \u53EF\u80FD\u4E3A\u5916\u5305\u516C\u53F8" : "\u274C \u5916\u5305\u516C\u53F8";
    return /* @__PURE__ */ o$1(
      "a",
      {
        class: "btn",
        style: {
          width: "auto",
          minWidth: "55px",
          color: grade === 0 ? "#faad14" : "#ff4d4f",
          padding: "0 12px",
          background: "transparent",
          borderColor: "transparent"
        },
        children: text
      }
    );
  };
  const getHtml = (props) => {
    return A(/* @__PURE__ */ o$1(Notify, { ...props }));
  };

  const addReminder = (text) => {
    const dom = document.body.querySelector(".job-detail");
    if (!dom) {
      return;
    }
    const t = document.createElement("p");
    t.innerHTML = text;
    t.style.cssText = `white-space: pre;`;
    dom.insertBefore(t, dom.firstChild);
  };

  (() => {
    if (typeof result === "boolean") {
      return;
    }
    const html = getHtml(result);
    const dom = document.body.querySelector(".btn-container");
    if (!dom) {
      return;
    }
    const div = document.createElement("div");
    div.innerHTML = html;
    dom.appendChild(div.firstElementChild);
    addReminder(result.text);
  })();

})();
