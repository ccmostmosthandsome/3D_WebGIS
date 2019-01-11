//>>built
define("dojo/selector/lite",["../has","../_base/kernel"],function(k,p){var e=document.createElement("div"),m=e.matches||e.webkitMatchesSelector||e.mozMatchesSelector||e.msMatchesSelector||e.oMatchesSelector,q=e.querySelectorAll,r=/([^\s,](?:"(?:\\.|[^"])+"|'(?:\\.|[^'])+'|[^,])*)/g;k.add("dom-matches-selector",!!m);k.add("dom-qsa",!!q);var n=function(d,a){if(s&&-1<d.indexOf(","))return s(d,a);var b=a?a.ownerDocument||a:p.doc||document,c=(q?/^([\w]*)#([\w\-]+$)|^(\.)([\w\-\*]+$)|^(\w+$)/:/^([\w]*)#([\w\-]+)(?:\s+(.*))?$|(?:^|(>|.+\s+))([\w\-\*]+)(\S*$)/).exec(d);
a=a||b;if(c){var l=8===k("ie")&&k("quirks")?a.nodeType===b.nodeType:null!==a.parentNode&&9!==a.nodeType&&a.parentNode===b;if(c[2]&&l){var g=p.byId?p.byId(c[2],b):b.getElementById(c[2]);if(!g||c[1]&&c[1]!=g.tagName.toLowerCase())return[];if(a!=b)for(b=g;b!=a;)if(b=b.parentNode,!b)return[];return c[3]?n(c[3],g):[g]}if(c[3]&&a.getElementsByClassName)return a.getElementsByClassName(c[4]);if(c[5])if(g=a.getElementsByTagName(c[5]),c[4]||c[6])d=(c[4]||"")+c[6];else return g}if(q)return 1===a.nodeType&&"object"!==
a.nodeName.toLowerCase()?t(a,d,a.querySelectorAll):a.querySelectorAll(d);g||(g=a.getElementsByTagName("*"));c=[];b=0;for(l=g.length;b<l;b++){var f=g[b];1==f.nodeType&&u(f,d,a)&&c.push(f)}return c},t=function(d,a,b){var c=d,l=d.getAttribute("id"),g=l||"__dojo__",f=d.parentNode,e=/^\s*[+~]/.test(a);if(e&&!f)return[];l?g=g.replace(/'/g,"\\$\x26"):d.setAttribute("id",g);e&&f&&(d=d.parentNode);a=a.match(r);for(f=0;f<a.length;f++)a[f]="[id\x3d'"+g+"'] "+a[f];a=a.join(",");try{return b.call(d,a)}finally{l||
c.removeAttribute("id")}};if(!k("dom-matches-selector"))var u=function(){function d(a,h,c){var b=h.charAt(0);if('"'==b||"'"==b)h=h.slice(1,-1);h=h.replace(/\\/g,"");var d=f[c||""];return function(b){return(b=b.getAttribute(a))&&d(b,h)}}function a(a){return function(h,b){for(;(h=h.parentNode)!=b;)if(a(h,b))return!0}}function b(a){return function(h,b){h=h.parentNode;return a?h!=b&&a(h,b):h==b}}function c(a,b){return a?function(c,d){return b(c)&&a(c,d)}:b}var l="div"==e.tagName?"toLowerCase":"toUpperCase",
g={"":function(a){a=a[l]();return function(b){return b.tagName==a}},".":function(a){var b=" "+a+" ";return function(c){return-1<c.className.indexOf(a)&&-1<(" "+c.className+" ").indexOf(b)}},"#":function(a){return function(b){return b.id==a}}},f={"^\x3d":function(a,b){return 0==a.indexOf(b)},"*\x3d":function(a,b){return-1<a.indexOf(b)},"$\x3d":function(a,b){return a.substring(a.length-b.length,a.length)==b},"~\x3d":function(a,b){return-1<(" "+a+" ").indexOf(" "+b+" ")},"|\x3d":function(a,b){return 0==
(a+"-").indexOf(b+"-")},"\x3d":function(a,b){return a==b},"":function(a,b){return!0}},k={};return function(f,h,l){var e=k[h];if(!e){if(h.replace(/(?:\s*([> ])\s*)|(#|\.)?((?:\\.|[\w-])+)|\[\s*([\w-]+)\s*(.?=)?\s*("(?:\\.|[^"])+"|'(?:\\.|[^'])+'|(?:\\.|[^\]])*)\s*\]/g,function(h,f,l,k,m,n,p){k?e=c(e,g[l||""](k.replace(/\\/g,""))):f?e=(" "==f?a:b)(e):m&&(e=c(e,d(m,p,n)));return""}))throw Error("Syntax error in query");if(!e)return!0;k[h]=e}return e(f,l)}}();if(!k("dom-qsa"))var s=function(d,a){for(var b=
d.match(r),c=[],e=0;e<b.length;e++){d=new String(b[e].replace(/\s*$/,""));d.indexOf=escape;for(var g=n(d,a),f=0,k=g.length;f<k;f++){var m=g[f];c[m.sourceIndex]=m}}b=[];for(e in c)b.push(c[e]);return b};n.match=m?function(d,a,b){return b&&9!=b.nodeType?t(b,a,function(a){return m.call(d,a)}):m.call(d,a)}:u;return n});