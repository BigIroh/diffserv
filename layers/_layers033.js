(function(e, c, f, i) {
var h, a;
var g={};
g.qwery=function() {
var b=function() {
var n=document,
M=n.documentElement,
Z="getElementsByClassName",
B="getElementsByTagName",
m="querySelectorAll",
N="useNativeQSA",
x="tagName",
W="nodeType",
ai, V=/#([\w\-]+)/,
w=/\.[\w\-]+/g,
ap=/^#([\w\-]+)$/,
al=/^\.([\w\-]+)$/,
A=/^([\w\-]+)$/,
ad=/^([\w]+)?\.([\w\-]+)$/,
R=/(^|,)\s*[>~+]/,
X=/^\s+|\s*([,\s\+\~>]|$)\s*/g,
aq=/[\s\>\+\~]/,
I=/(?![\s\w\-\/\?\&\=\:\.\(\)\!,@#%<>\{\}\$\*\^'"]*\]|[\s\w\+\-]*\))/,
an=/([.*+?\^=!:${}()|\[\]\/\\])/g,
j=/^(\*|[a-z0-9]+)?(?:([\.\#]+[\w\-\.#]+)?)/,
y=/\[([\w\-]+)(?:([\|\^\$\*\~]?\=)['"]?([ \w\-\/\?\&\=\:\.\(\)\!,@#%<>\{\}\$\*\^]+)["']?)?\]/,
D=/:([\w\-]+)(\(['"]?([^()]+)['"]?\))?/,
C=new RegExp(ap.source + "|" + A.source + "|" + al.source),
t=new RegExp("(" + aq.source + ")" + I.source, "g"),
am=new RegExp(aq.source + I.source),
H=new RegExp(j.source + "(" + y.source + ")?(" + D.source + ")?");
var S={
" ": function(q) {
return q&&q!==M&&q.parentNode;
},
">": function(q, ar) {
return q&&q.parentNode==ar.parentNode&&q.parentNode;
},
"~": function(q) {
return q&&q.previousSibling;
},
"+": function(q, at, au, ar) {
if (!q) {
return false;
}
return (au=aa(q))&&(ar=aa(at))&&au==ar&&au;
}
};

function v() {
this.c={};
}
v.prototype={
g: function(q) {
return this.c[q] || i;
},
s: function(ar, q, at) {
q=at ? new RegExp(q) : q;
return this.c[ar]=q;
}
};
var af=new v(),
E=new v(),
K=new v(),
ag=new v();

function T(q) {
return af.g(q) || af.s(q, "(^|\\s+)" + q + "(\\s+|$)", 1);
}
function aj(ar, au) {
var at=0,
q=ar.length;
for (; at < q; at++) {
au(ar[at]);
}
}
function G(at) {
for (var av=[], au=0, q=at.length; au < q; ++au) {
L(at[au]) ? av=av.concat(at[au]) : av[av.length]=at[au];
}
return av;
}
function l(at) {
var au=0,
q=at.length,
av=[];
for (; au < q; au++) {
av[au]=at[au];
}
return av;
}
function aa(q) {
while (q=q.previousSibling) {
if (q[W]==1) {
break;
}
}
return q;
}
function ae(q) {
return q.match(H);
}
function p(aC, aG, au, az, at, aA, aE, aF, aD, aB, q) {
var ay, av, ax, ar, aw;
if (this[W]!==1) {
return false;
}
if (aG&&aG!=="*"&&this[x]&&this[x].toLowerCase()!==aG) {
return false;
}
if (au&&(av=au.match(V))&&av[1]!==this.id) {
return false;
}
if (au&&(aw=au.match(w))) {
for (ay=aw.length; ay--;) {
if (!T(aw[ay].slice(1)).test(this.className)) {
return false;
}
}
}
if (aD&&ab.pseudos[aD]&&!ab.pseudos[aD](this, q)) {
return false;
}
if (az&&!aE) {
ar=this.attributes;
for (ax in ar) {
if (Object.prototype.hasOwnProperty.call(ar, ax)&&(ar[ax].name || ax)==at) {
return this;
}
}
}
if (az&&!Q(aA, ah(this, at) || "", aE)) {
return false;
}
return this;
}
function Y(q) {
return E.g(q) || E.s(q, q.replace(an, "\\$1"));
}
function Q(q, at, ar) {
switch (q) {
case "=":
return at==ar;
case "^=":
return at.match(K.g("^=" + ar) || K.s("^=" + ar, "^" + Y(ar), 1));
case "$=":
return at.match(K.g("$=" + ar) || K.s("$=" + ar, Y(ar) + "$", 1));
case "*=":
return at.match(K.g(ar) || K.s(ar, Y(ar), 1));
case "~=":
return at.match(K.g("~=" + ar) || K.s("~=" + ar, "(?:^|\\s+)" + Y(ar) + "(?:\\s+|$)", 1));
case "|=":
return at.match(K.g("|=" + ar) || K.s("|=" + ar, "^" + Y(ar) + "(-|$)", 1));
}
return 0;
}
function ac(aw, az) {
var q=[],
aA=[],
ay, av, at, au, aF, ax, ar, aE, aD=az,
aC=ag.g(aw) || ag.s(aw, aw.split(am)),
aB=aw.match(t);
if (!aC.length) {
return q;
}
au=(aC=aC.slice(0)).pop();
if (aC.length&&(at=aC[aC.length - 1].match(ap))) {
aD=z(az, at[1]);
}
if (!aD) {
return q;
}
ar=ae(au);
ax=aD!==az&&aD[W]!==9&&aB&&/^[+~]$/.test(aB[aB.length - 1]) ? function(aG) {
while (aD=aD.nextSibling) {
aD[W]==1&&(ar[1] ? ar[1]==aD[x].toLowerCase() : 1)&&(aG[aG.length]=aD);
}
return aG;
}([]) : aD[B](ar[1] || "*");
for (ay=0, av=ax.length; ay < av; ay++) {
if (aE=p.apply(ax[ay], ar)) {
q[q.length]=aE;
}
}
if (!aC.length) {
return q;
}
aj(q, function(aG) {
if (P(aG, aC, aB)) {
aA[aA.length]=aG;
}
});
return aA;
}
function J(au, q, ar) {
if (s(q)) {
return au==q;
}
if (L(q)) {
return !!~G(q).indexOf(au);
}
var at=q.split(","),
aw, av;
while (q=at.pop()) {
aw=ag.g(q) || ag.s(q, q.split(am));
av=q.match(t);
aw=aw.slice(0);
if (p.apply(au, ae(aw.pop()))&&(!aw.length || P(au, aw, av, ar))) {
return true;
}
}
return false;
}
function P(at, aw, av, q) {
var au;

function ar(az, ax, ay) {
while (ay=S[av[ax]](ay, az)) {
if (s(ay)&&p.apply(ay, ae(aw[ax]))) {
if (ax) {
if (au=ar(ay, ax - 1, ay)) {
return au;
}
} else {
return ay;
}
}
}
}
return (au=ar(at, aw.length - 1, at))&&(!q || ao(au, q));
}
function s(ar, q) {
return ar&&typeof ar === "object"&&(q=ar[W])&&(q==1 || q==9);
}
function ak(at) {
var q=[],
av, au;
o: for (av=0; av < at.length; ++av) {
for (au=0; au < q.length; ++au) {
if (q[au]==at[av]) {
continue o;
}
}
q[q.length]=at[av];
}
return q;
}
function L(q) {
return typeof q === "object"&&isFinite(q.length);
}
function d(q) {
if (!q) {
return n;
}
if (typeof q=="string") {
return ab(q)[0];
}
if (!q[W]&&L(q)) {
return q[0];
}
return q;
}
function z(q, at, ar) {
return q[W] === 9 ? q.getElementById(at) : q.ownerDocument&&((ar=q.ownerDocument.getElementById(at))&&ao(ar, q)&&ar || !ao(q, q.ownerDocument)&&ai("[id=\"" + at + "\"]", q)[0]);
}
function ab(ar, av) {
var q, au, at=d(av);
if (!at || !ar) {
return [];
}
if (ar === window || s(ar)) {
return !av || ar!==window&&s(at)&&ao(ar, at) ? [ar] : [];
}
if (ar&&L(ar)) {
return G(ar);
}
if (q=ar.match(C)) {
if (q[1]) {
return (au=z(at, q[1])) ? [au] : [];
}
if (q[2]) {
return l(at[B](q[2]));
}
if (O&&q[3]) {
return l(at[Z](q[3]));
}
}
return ai(ar, at);
}
function k(q, ar) {
return function(at) {
var au, av;
if (R.test(at)) {
if (q[W]!==9) {
if (!(av=au=q.getAttribute("id"))) {
q.setAttribute("id", av="__qwerymeupscotty");
}
at="[id=\"" + av + "\"]" + at;
ar(q.parentNode || q, at, true);
au || q.removeAttribute("id");
}
return;
}
at.length&&ar(q, at, false);
};
}
var ao="compareDocumentPosition" in M ? function(ar, q) {
return (q.compareDocumentPosition(ar) & 16)==16;
} : "contains" in M ? function(ar, q) {
q=q[W] === 9 || q==window ? M : q;
return q!==ar&&q.contains(ar);
} : function(ar, q) {
while (ar=ar.parentNode) {
if (ar === q) {
return 1;
}
}
return 0;
}, ah=function() {
var q=n.createElement("p");
return (q.innerHTML="<a href=\"#x\">x</a>")&&q.firstChild.getAttribute("href") != "#x" ? function(at, ar) {
return ar === "class" ? at.className : ar === "href" || ar === "src" ? at.getAttribute(ar, 2) : at.getAttribute(ar);
} : function(at, ar) {
return at.getAttribute(ar);
};
}(),
O=!! n[Z],
r=n.querySelector&&n[m],
U=function(ar, at) {
var q=[],
av, aw;
try {
if (at[W] === 9 || !R.test(ar)) {
return l(at[m](ar));
}
aj(av=ar.split(","), k(at, function(ax, ay) {
aw=ax[m](ay);
if (aw.length==1) {
q[q.length]=aw.item(0);
} else {
if (aw.length) {
q=q.concat(l(aw));
}
}
}));
return av.length > 1&&q.length > 1 ? ak(q) : q;
} catch (au) {}
return u(ar, at);
}, u=function(au, ax) {
var az=[],
aw, ar, av, at, q, ay;
au=au.replace(X, "$1");
if (ar=au.match(ad)) {
q=T(ar[2]);
aw=ax[B](ar[1] || "*");
for (av=0, at=aw.length; av < at; av++) {
if (q.test(aw[av].className)) {
az[az.length]=aw[av];
}
}
return az;
}
aj(ay=au.split(","), k(ax, function(aA, aB, aC) {
q=ac(aB, aA);
for (av=0, at=q.length; av < at; av++) {
if (aA[W] === 9 || aC || ao(q[av], ax)) {
az[az.length]=q[av];
}
}
}));
return ay.length > 1&&az.length > 1 ? ak(az) : az;
}, F=function(q) {
if (typeof q[N]!=="undefined") {
ai=!q[N] ? u : r ? U : u;
}
};
F({
useNativeQSA: true
});
ab.configure=F;
ab.uniq=ak;
ab.is=J;
ab.pseudos={};
return ab;
}();
return b;
}();
g.rAF=function() {
var j, b, k, p, q, d, s, m, r, n, l;
b="native";
k=Date.now || function() {
return new Date().getTime();
};
q=window.requestAnimationFrame;
n=["webkit", "moz", "o", "ms"];
for (m=0, r=n.length; m < r; m++) {
s=n[m];
if (!(q != null)) {
q=window[s + "RequestAnimationFrame"];
}
}
if (!(q != null)) {
b="timer";
j=0;
p=d=null;
q=function(w) {
var t, u, v;
if (p != null) {
p.push(w);
return;
}
v=k();
u=Math.max(0, 16.66 - (v - j));
p=[w];
j=v + u;
t=function() {
var x, A, z, y;
A=p;
p=null;
for (z=0, y=A.length; z < y; z++) {
x=A[z];
x(j);
}
};
d=setTimeout(t, u);
};
}
q(function(u) {
var t;
if (((t=window.performance) != null ? t.now : void 0) != null&&u < 1000000000000) {
q.now=function() {
return window.performance.now();
};
q.method="native-highres";
} else {
q.now=k;
}
});
q.now=((l=window.performance) != null ? l.now : void 0) != null ? function() {
return window.performance.now();
} : k;
q.method=b;
return q;
}();
g.utils=function(b, l) {
var k={
KEYCODES: {
"13": "enter",
"27": "esc"
},
cloneObject: function(n) {
var p={};
for (var m in n) {
if (k.isPlainObject(n[m])&&n[m]!==i) {
p[m]=k.cloneObject(n[m]);
} else {
p[m]=n[m];
}
}
return p;
},
isEmptyObject: function(m) {
var n;
for (n in m) {
if (m.hasOwnProperty(n)) {
return false;
}
}
return true;
},
extend: f.extend,
isPlainObject: function(m) {
if (!m) {
return false;
}
return Object.prototype.toString.call(m) === "[object Object]";
},
isArray: function(m) {
if (!m) {
return false;
}
if ("isArray" in Array) {
return Array.isArray(m);
} else {
return Object.prototype.toString.call(m) === "[object Array]";
}
},
isFunction: function(m) {
if (!m) {
return false;
}
return Object.prototype.toString.call(m) === "[object Function]";
},
isString: function(m) {
return typeof m === "string" || Object.prototype.toString.call(m) === "[object String]";
},
isNumber: function(m) {
return typeof m === "number" || Object.prototype.toString.call(m) === "[object Number]";
},
isNumeric: function(m) {
return !isNaN(m);
},
isBoolean: function(m) {
return m === true || m === false || Object.prototype.toString.call(m)=="[object Boolean]";
},
isUndefined: function(m) {
return m === i;
},
isNull: function(m) {
return m === null;
},
isNaN: function(m) {
return k.isNumber(m)&&m != +m;
},
isElement: function(m) {
return !k.isNull(m)&&!k.isUndefined(m)&&m.nodeType === 1;
},
has: function(n, m) {
if (!k.isString(n)) {
return false;
}
return Boolean(n.indexOf(m)!==-1);
},
each: function(p, q) {
var n, m;
if (k.isArray(p)) {
n=-1;
m=p.length;
while (++n < m) {
if (q(n, p[n]) === false) {
break;
}
}
} else {
if (k.isPlainObject(p)) {
for (n in p) {
if (p.hasOwnProperty(n)) {
if (q(n, p[n]) === false) {
break;
}
}
}
}
}
},
match: function(w, t, u) {
var x=[],
p, n, s, v, r=[],
q=JSON.stringify(w);
k.each(w, function(m, y) {
x.push(m);
});
p=u + "//" + x.join("/");
n=k.match[p] || (k.match[p]={});
if (!n.matches) {
s=n.matches || (n.matches=[]);
v=n.values || (n.values=t);
n.keys=x;
k.each(t, function(y, z) {
var m={};
k.each(x, function(B, A) {
m[A]=z[A];
});
s.push(m);
});
}
k.each(n.matches, function(y, m) {
if (q === JSON.stringify(m)) {
r.push(n.values[y]);
}
});
return r;
},
filter: function(n, u, q) {
if (n.filter) {
return n.filter(u);
}
var r=[],
t, m;
for (var s=0, p=n.length; s < p; s++) {
t=n[s];
m=u.call(q || t, t, s, n);
if (m) {
r.push(t);
}
}
return r;
},
toObject: function(m) {
var n={};
k.each(m, function(q, p) {
if (p!==i) {
n[p]=true;
}
});
return n;
},
keys: function(n) {
var p, m=0;
if (Object.keys) {
return Object.keys(n).length;
} else {
k.each(n, function() {
++m;
});
return m;
}
},
queue: function(q, p, n) {
var r=this._q=this._q || {}, m=this._q[q]=this._q[q] || [];
m.push({
item: p,
context: n || this
});
return m;
},
dequeue: function(m) {
return this._q&&this._q[m]&&this._q[m].length&&this._q[m].shift();
},
bindEvents: function(r, t) {
var v=this,
p=k.isElement(v.element) ? v.element : false,
u, q=0,
m, n, s;
k.each(r, function(x, w) {
q=x.lastIndexOf(" ");
s=f.bind(w, v);
if (q === -1) {
if (k.has(x, "addthis")) {
if (t!=="remove") {
_ate.ed.addEventListener(x, s);
} else {
_ate.ed.removeEventListener(x, s);
}
} else {
if (p) {
k.listenTo({
elem: p,
ev: x,
callback: s,
type: t,
originalEv: x
});
}
}
} else {
m=x.charAt(0) === "!" ? x.substring(1, q) : x.substring(0, q);
n=x.substring(q + 1);
k.listenTo({
layer: x.charAt(0) === "!" ? false : p,
elem: m,
ev: n,
callback: s,
type: t,
originalEv: x
});
}
});
},
listenTo: function(r) {
var t, q=false,
p=r.elem,
n=r.layer,
s=function() {
var x=[];
if (p === "window" || p === "w") {
x.push(e);
} else {
if (p === "document" || p === "d") {
x.push(h);
} else {
if (k.isString(p)) {
x=b(p);
q=p;
} else {
x.push(p);
}
}
}
return x;
}(),
v=r.ev,
w=r.callback,
m=r.type!=="remove" ? "addEventHandler" : "removeEventHandler",
u=r.originalEv;
if ((s || n)&&v&&w) {
if (n) {
k[m]({
container: n,
elem: s.length > 0 ? s[0] : false,
selector: q,
ev: v,
cb: w,
originalEv: u
});
} else {
if (k.isArray(s)) {
t=s.length;
k.each(s, function(x) {
k[m]({
elem: s[x],
selector: q,
ev: v,
cb: w,
originalEv: u
});
});
} else {
k[m]({
elem: s,
selector: q,
ev: v,
cb: w,
originalEv: u
});
}
}
}
},
addEventHandler: function(r) {
var v=this,
n=r.container,
s=r.elem,
q=r.selector,
u=r.ev,
w=function(y) {
r.cb(y || e.event, y.target || y.srcElement);
}, t=r.originalEv,
m=function(C) {
C=C || e.event;
var B=C.target || C.srcElement,
z=false,
D=false,
y, A;
if (q) {
y=q.split(" ");
A=y.length > 1 ? y.pop() : q;
if (A.indexOf(".") === 0) {
A=A.replace(".", "");
z=k.hasClass(A, B) || k.hasClass(A, B.parentNode);
} else {
if (A.indexOf("#") === 0) {
A=A.replace("#", "");
D=B.id === A || B.parentNode&&B.parentNode.id === A;
}
}
}
if (z || D) {
w(C, B);
}
}, x=n ? m : w,
p=n || s;
if (u === "mouseenter" || u === "mouseleave") {
if (!k.isMouseEventSupported(u)) {
if (u === "mouseenter") {
u="mouseover";
} else {
u="mouseout";
}
x=k.fixMouseEvent(x);
}
}
if (!p.__callbacks) {
p.__callbacks={};
}
p.__callbacks[t]=x;
if (p.addEventListener) {
p.addEventListener(u, x, false);
} else {
if (p.attachEvent) {
p.attachEvent("on" + u, x);
} else {
p["on" + u]=x;
}
}
},
removeEventHandler: function(s) {
var q=this,
m=s.container,
n=s.elem,
p=s.ev,
u=s.cb,
t, r=s.originalEv;
t=m || n;
t.__callbacks=t.__callbacks || {};
u=t.__callbacks[r];
this.removeEvent({
elem: t,
ev: p,
cb: u
});
},
removeEvent: function(q) {
var p=q.elem,
n=q.ev,
m=q.cb;
if (p.removeEventListener) {
p.removeEventListener(n, m, false);
} else {
if (p.detachEvent) {
p.detachEvent("on" + n, m);
} else {
p["on" + n]=null;
}
}
},
isMouseEventSupported: function d(m) {
if (d.tested === true) {
return d.isSupported;
}
var p=h.createElement("div"),
n;
m="on" + m;
n=m in p;
if (!n) {
k.attr(p, m, "return;");
n=k.isFunction(p[m]);
}
d.isSupported=n;
d.tested=true;
p=null;
return n;
},
fixMouseEvent: function(m) {
return function(n) {
var p=n.relatedTarget;
if (this === p || k.isChildOf(this, p)) {
return;
}
m.call(this, n);
};
},
isChildOf: function(m, n) {
if (m === n) {
return false;
}
while (n&&n!==m) {
n=n.parentNode;
return n === m;
}
},
preventDefaultEvent: function(m) {
if (m.preventDefault) {
m.preventDefault();
} else {
m.returnValue=false;
}
},
debounce: function(p, s) {
var r, m, n, q;
return function() {
n=this;
m=[].slice.call(arguments, 0);
q=new Date();
var t=function() {
var u=new Date() - q;
if (u < s) {
r=setTimeout(t, s - u);
} else {
r=null;
p.apply(n, m);
}
};
if (!r) {
r=setTimeout(t, s);
}
};
},
triggerGesture: function(q, p, r, n) {
var m=document.createEvent("GestureEvent");
m.initGestureEvent(p, true, true, e, 2, 0, 0, 0, 0, false, false, false, false, q, r || 1.5, n || 0);
q.dispatchEvent(m);
},
canScroll: function() {
var n=a.offsetHeight,
p=this.pageHeight(),
m=p / n < 0.3;
return m;
},
scrollPercentage: function() {
var m=h.body.offsetHeight,
n=k.scrollTop();
return n / m;
},
scrollTop: function(m) {
m=m || h.documentElement || a;
return m.scrollTop || a.scrollTop;
},
pageWidth: function() {
return window.innerWidth || document.documentElement.clientWidth;
},
pageHeight: function() {
return window.innerHeight || document.documentElement.clientHeight;
},
elementInViewport: function(n) {
if (k.isString(n)) {
n=b(n)[0];
if (!k.isElement(n)) {
return false;
}
}
var t=n.offsetTop,
p=n.offsetLeft,
m=n.offsetWidth,
v=n.offsetHeight,
r=e.pageYOffset ? e.pageYOffset : h.documentElement.scrollTop,
s=e.pageXOffset ? e.pageXOffset : h.documentElement.scrollLeft,
q=this.pageHeight(),
u=this.pageWidth();
while (n.offsetParent) {
n=n.offsetParent;
t += n.offsetTop;
p += n.offsetLeft;
}
return t < r + q&&p < s + u&&t + v > r&&p + m > s;
},
trim: function(m) {
return m.replace(/^\s+|\s+$/g, "");
},
desktop: function() {
return !k.mobile();
},
browser: function(m) {
switch (m.toLowerCase()) {
case "firefox":
return _ate.bro.ffx;
case "internet explorer":
return _ate.bro.msi;
case "internetexplorer":
return _ate.bro.msi;
case "explorer":
return _ate.bro.msi;
case "ie":
return _ate.bro.msi;
case "safari":
return _ate.bro.saf;
case "chrome":
return _ate.bro.chr;
case "opera":
return _ate.bro.opr;
default:
return false;
}
},
mobile: function() {
return _ate.bro.mob;
},
tablet: function() {
var m=k.mobile(),
q=m&&window.screen&&window.screen.availWidth ? window.screen.availWidth : 0,
r=m&&window.screen&&window.screen.availHeight ? window.screen.availHeight : 0,
n=m ? q > r ? r : q : false,
p=n ? n > 800 : false;
return p;
},
phone: function() {
var m=k.mobile(),
q=m&&window.screen&&window.screen.availWidth ? window.screen.availWidth : 0,
r=m&&window.screen&&window.screen.availHeight ? window.screen.availHeight : 0,
n=m ? q > r ? r : q : false,
p=n ? n <= 800 : false;
return p;
},
publicApi: function(m) {
var p, n={};
k.each(m, function(r, q) {
if (r.charAt(0)!=="_") {
n[r]=m[r];
}
});
return n;
},
removeChildren: function(m) {
if (!m) {
return;
}
while (m.hasChildNodes()) {
m.removeChild(m.lastChild);
}
},
supports: {
csstransitions: function() {
var n=a.style,
p="transition",
m=["Moz", "Webkit", "Khtml", "O", "ms"];
if (k.supports.csstransitions.supports!==i) {
return k.supports.csstransitions.supports;
}
if (k.isString(n[p])) {
k.supports.csstransitions.supports=true;
return true;
}
p=p.charAt(0).toUpperCase() + p.substr(1);
k.each(m, function(q, r) {
if (k.isString(n[r + p])) {
k.supports.csstransitions.supports=true;
return true;
}
});
k.supports.csstransitions.supports=false;
return false;
},
requestAnimationFrame: function() {
return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;
}
},
addClass: function(m, n) {
if (!k.isElement(n) || !k.isString(m)) {
return;
}
if (!this.hasClass(m, n)) {
if (n.classList&&k.isString(m)&&m.length) {
n.classList.add(m);
} else {
if (n.className) {
n.className += " " + m;
} else {
n.className=m;
}
}
}
},
removeClass: function(m, n) {
if (!n || !n.className || !k.isElement(n) || !k.isString(m)) {
return;
}
var p=" " + n.className.replace(/[\t\r\n]/g, " ") + " ";
if (k.hasClass(m, n)) {
if (n.classList&&k.isString(m)&&m.length) {
n.classList.remove(m);
} else {
while (k.has(p, " " + m + " ")) {
p=p.replace(" " + m + " ", " ");
}
n.className=p.replace(/^\s+|\s+$/g, "");
}
}
},
hasClass: function(m, n) {
if (!k.isElement(n) || !k.isString(m)) {
return false;
}
if (n.classList&&k.isString(m)&&m.length) {
return n.classList.contains(m);
} else {
return n ? new RegExp(" " + m + " ").test(" " + n.className + " ") : false;
}
},
hasjQuery: function() {
return !!e.jQuery;
},
hasjQueryUI: function() {
return k.hasjQuery()&&e.jQuery.ui;
},
isIEQuirksMode: function() {
return _ate.bro.msi&&h.compatMode.toLowerCase() === "backcompat";
},
isVisible: function(m, n) {
if (!k.isElement(m)) {
return false;
}
return k.getCSSAttr(m, "display")!=="none"&&k.getCSSAttr(m, "visibility")!=="hidden"&&+k.getCSSAttr(m, "opacity", 1)!==0&&!k.has(k.getCSSAttr(m, "filter", "alpha(opacity=0)"));
},
getCSSAttr: function(q, m, n) {
if (!k.isElement(q)) {
return "";
}
var p=q.currentStyle || e.getComputedStyle(q, null) || {}, r=function() {
if (e.getComputedStyle) {
return p.getPropertyValue(m);
} else {
if (q.currentStyle) {
return p[m];
}
}
}();
return k.isUndefined(r) ? n : r;
},
setCSSAttr: function(n, m, p) {
if (!k.isElement(n)) {
return;
}
if (k.isString(m)&&k.isString(p)) {
n.style[m]=p;
} else {
if (k.isPlainObject(m)) {
k.each(m, function(q, r) {
n.style[q]=r;
});
}
}
},
hasAttr: function(n, m) {
if (!k.isElement(n) || k.isUndefined(m)) {
return;
}
if (!k.isUndefined(n.hasAttribute)) {
return n.hasAttribute(m);
} else {
return !k.isUndefined(n.attributes[m]);
}
},
attr: function(p, m, n) {
if (!k.isElement(p) || k.isUndefined(m)) {
return;
}
if (k.isUndefined(n)) {
if (k.hasAttr(p, m)) {
return p.getAttribute(m);
}
} else {
p.setAttribute(m, n);
}
},
removeAttr: function(n, m) {
if (!k.isElement(n) || k.isUndefined(m)) {
return;
}
n.removeAttribute(m);
},
warn: function(m) {
if (console.warn) {
console.warn(m);
}
},
randomize: function(m) {
var n=m.length,
p;
k.each(m, function(q, r) {
p=Math.floor(Math.random() * n);
m[q]=m.splice(p, 1, m[q])[0];
});
},
fireCustomEvent: function(m, q, p, n) {
_ate.ed.fire(m, q, p, n);
},
safeActiveElement: function() {
try {
return h.activeElement;
} catch (m) {}
},
specialEvents: {
blur: function(m) {
if (m === k.safeActiveElement()&&m.blur) {
m.blur();
return false;
}
}
},
fireDOMEvent: function(n, p) {
var m;
if (h.createEvent) {
m=h.createEvent("HTMLEvents");
m.initEvent(p, true, true);
return !n.dispatchEvent(m);
} else {
m=h.createEventObject();
return n.fireEvent("on" + p, m);
}
},
trigger: function(m, q, p, n) {
if (!k.isString(m)) {
return;
}
if (k.has(m, "addthis")) {
k.fireCustomEvent(m, q, p, n);
} else {
if (k.isElement(q)) {
k.fireDOMEvent(q, m);
}
}
},
objectToStyle: function(n) {
var m="";
k.each(n, function(p, q) {
m += p + ": " + q + ";";
});
return m;
},
serviceTemplate: function(q, m) {
var p=k.getTopService(m),
n;
if (p) {
n=k.getServiceName(p);
if (k.isString(q)) {
q=q.replace(/\{\{service\}\}/, n);
}
}
return q;
},
getServiceName: function(m) {
return m.substring(0, 1).toUpperCase() + m.substring(1);
},
getTopService: function(m) {
var p=c.user.services(),
n={
google_plus: "google_plusone_share"
};
if (k.isUndefined(m) || m === "preferred") {
if (p.length > 0) {
m=p[0];
} else {
m={
name: "facebook"
};
}
return m.name;
} else {
if (m in n) {
return n[m];
} else {
return m;
}
}
},
openWindow: function(q) {
var n=q.url || "",
r=q.new_window || true,
m=q.focus || true,
p;
if (!n.length) {
return;
}
if (r) {
p=window.open(n, "_blank");
} else {
p=window.open(n);
}
if (m) {
p.focus();
}
},
requestTimeout: function(q, p, n) {
if (!k.supports.requestAnimationFrame) {
return window.setTimeout(q, p);
}
var s=new Date().getTime(),
r={};

function m() {
var t=new Date().getTime(),
u=t - s;
if (u >= p) {
if (!k.isUndefined(n)) {
q.call(q, n);
} else {
q.call(q);
}
} else {
r.value=l(m);
}
}
r.value=l(m);
return r;
},
clearRequestTimeout: function(m) {
window.cancelAnimationFrame ? window.cancelAnimationFrame(m.value) : window.webkitCancelAnimationFrame ? window.webkitCancelAnimationFrame(m.value) : window.webkitCancelRequestAnimationFrame ? window.webkitCancelRequestAnimationFrame(m.value) : window.mozCancelRequestAnimationFrame ? window.mozCancelRequestAnimationFrame(m.value) : window.oCancelRequestAnimationFrame ? window.oCancelRequestAnimationFrame(m.value) : window.msCancelRequestAnimationFrame ? window.msCancelRequestAnimationFrame(m.value) : clearTimeout(m);
},
gradients: {
cache: {},
checkString: function(n) {
var m={
black: "#000000",
blue: "#0000ff",
gray: "#808080",
grey: "#808080",
green: "#008000",
orange: "#ffa500",
purple: "#800080",
red: "#ff0000",
white: "#ffffff",
yellow: "#ffff00"
};
n=n in m ? m[n].substring(1) : false;
return n;
},
hex2num: function(m) {
if (m.length!==2) {
throw "err: use with 2-digit 16 bit numbers";
}
return parseInt(m, 16);
},
num2Hex: function(m) {
var n=Math.floor(m).toString(16);
if (n.length === 1) {
n="0" + n;
}
return n;
},
mag: function(m) {
m=m || k.gradients.normalizeColor();
return k.gradients.hex2num(m.substring(0, 2)) + k.gradients.hex2num(m.substring(2, 4)) + k.gradients.hex2num(m.substring(4, 6));
},
normalizeColor: function(q) {
var p=k.gradients.checkString(q);
q=p ? p : q.replace("#", "");
if (!q || !k.gradients.isValid(q)) {
q="000000";
} else {
if (q.length === 3) {
var n=k.gradients.color.substring(0, 1),
m=k.gradients.color.substring(1, 2),
r=k.gradients.color.substring(2, 3);
q="" + n + n + m + m + r + r;
}
}
return q;
},
isValid: function(m) {
m=m.toLowerCase();
if (m.substring(0, 1) === "#") {
m=m.substring(1);
}
if (/(^[0-9,a-f]{3}$)|(^[0-9,a-f]{6}$)/.test(m)) {
return true;
}
return k.gradients.checkString(m);
},
index: function(m) {
return m / 255;
},
scaleUp: function(m) {
m=m > 1 ? 1 : m;
return m * 255;
},
shadeOne: function(n, m) {
return k.gradients.num2Hex(k.gradients.scaleUp(k.gradients.index(k.gradients.hex2num(n)) * m));
},
shade: function(n, m) {
m=m || k.gradients.normalizeColor();
if (!n) {
n=k.gradients.distance;
}
if (!("" + m in k.gradients.cache)) {
k.gradients.cache["" + m]={};
}
if (!("" + n in k.gradients.cache["" + m])) {
k.gradients.cache["" + m][n]="" + k.gradients.shadeOne(m.substring(0, 2), n) + k.gradients.shadeOne(m.substring(2, 4), n) + k.gradients.shadeOne(m.substring(4, 6), n);
}
return k.gradients.cache[m][n];
},
distance: 0.2,
cssString: function(m, t) {
if (_ate.bro.ie6 || _ate.bro.ie7) {
return "";
}
m=k.gradients.normalizeColor(m);
t=t || k.gradients.distance;
if (k.gradients.mag(m) > 700 || k.gradients.mag(m) < 100) {
t=0;
}
var s=k.gradients.shade(1 - t, m),
r=k.gradients.shade(1 + 2 * t, m),
p=k.gradients.shade(1 + t, m),
n=k.gradients.shade(1 - 0.1, m),
q="background-image: -webkit-gradient(linear,left bottom,left top,color-stop(0%, #" + s + "),color-stop(90%, #" + p + "));background-image: -ms-linear-gradient(bottom, #" + s + ",#" + p + ");background-image: -moz-linear-gradient(center bottom,#" + s + " 0%,#" + p + " 100%);border-color: #" + n;
return q;
}
},
validation: {
patterns: {
email: "^[a-zA-Z0-9._-]+@[a-zA-Z0-9][a-zA-Z0-9.-]*[.]{1}[a-zA-Z]{2,6}$"
},
validators: {
pattern: function(n, m) {
return new RegExp(m, "gi").test(n) ? true : false;
},
isEmail: function(m) {
return k.validation.validators.pattern(m, k.validation.patterns.email);
}
}
},
getUrl: function(n, m) {
var p={}, q=document.createElement("iframe");
q.src=n;
p.element=q;
h.getElementsByTagName("head")[0].appendChild(q);
k.bindEvents.call(p, {
load: function() {
q.parentNode.removeChild(q);
if (k.isFunction(m)) {
m();
}
}
});
},
updateStyleSheet: function(p) {
var n=h.getElementsByTagName("head")[0],
m=h.createElement("style");
m.type="text/css";
if ("styleSheet" in m) {
m.styleSheet.cssText=p;
} else {
m.appendChild(h.createTextNode(p));
}
n.appendChild(m);
return m;
},
object2CSS: function(m, q) {
var p="" + m + "{";
for (var n in q) {
p += n + ":" + q[n] + ";";
}
p += "}\n";
return p;
},
isCSSReady: function(q) {
var m=h.createElement("span"),
n;
m.id="addthissmartlayerscssready";
m.style.color="#fff";
h.body.appendChild(m);
(function p() {
var r=k.getCSSAttr(m, "color");
if (r&&r === "rgb(186, 218, 85)" || r.toLowerCase() === "#bada55") {
m.parentNode.removeChild(m);
q();
} else {
setTimeout(p, 250);
}
}());
},
removeElement: function(m) {
if (!k.isElement(m) || !k.isElement(m.parentNode)) {
return;
}
m.parentNode.removeChild(m);
},
isImageBroken: function(m) {
if (!m) {
return true;
}
var n=m.naturalWidth;
if (!n || k.isNumber(n)&&n < 2) {
return true;
}
return false;
},
getScrollBarWidth: function j() {
if (!k.isUndefined(j.width)) {
return j.width;
}
var m={}, n, q=0;
if (!k.isUndefined(k.getCSSAttr(a, "-ms-overflow-style"))&&_ate.bro.msi&&!_ate.bro.ie9&&!_ate.bro.ie8&&!_ate.bro.ie7&&!_ate.bro.ie6) {
if (k.getCSSAttr(a, "-ms-overflow-style")!=="none") {
q=k.scrollBarWidth();
}
} else {
if (e.getComputedStyle) {
q=k.scrollBarWidth();
if (q === 0) {
var p=document.createElement("style");
p.innerHTML="::-webkit-scrollbar { width: 10px; }";
h.getElementsByTagName("head")[0].appendChild(p);
q=k.scrollBarWidth();
if (q > 0) {
q=q;
}
h.getElementsByTagName("head")[0].removeChild(p);
}
}
}
j.width=q;
return q;
},
scrollBarWidth: function() {
var n, q, r=h.createElement("div"),
p=h.createElement("div"),
m;
k.setCSSAttr(r, {
width: "100px",
height: "10000px"
});
k.setCSSAttr(p, {
width: "100%",
height: "100px",
overflow: "auto"
});
a.appendChild(p);
n=p.clientWidth;
p.appendChild(r);
q=p.clientWidth;
a.removeChild(p);
m=n - q;
return m;
},
stripQueryStringAndHashFromPath: function(m) {
m=m.split("?")[0].split("#")[0];
if (m.slice(-1) === "/") {
m=m.substring(0, m.length - 1);
}
return m;
},
indexOf: function(n) {
var m;
if (k.isFunction(Array.prototype.indexOf)) {
m=Array.prototype.indexOf;
} else {
m=function(r) {
var q=-1,
p=-1;
for (q=0; q < this.length; q++) {
if (this[q] === r) {
p=q;
break;
}
}
return p;
};
}
return m.call(this, n);
},
shareCounters: {
getShareCounts: function(r, s) {
if (k.isUndefined(r)) {
return;
}
var p=r.services || r.service || r,
n=r.url || r.countUrl,
m=n || (e.addthis_share || {}).trackurl || _ate.track.mgu({}.url || (e.addthis_share || {}).url, {
clean: 1,
defrag: 1
}),
q=[];
if (k.isArray(p)) {
k.each(p, function(u, t) {
k.shareCounters.requests.getCounts({
service: t,
countUrl: m
}, function(v) {
q.push(v);
if (q.length === p.length) {
s.call(this, q);
}
});
});
} else {
if (k.isString(p)) {
k.shareCounters.requests.getCounts({
service: p,
countUrl: m
}, function(t) {
s.call(this, t);
});
}
}
return this;
},
requests: {
services: {
facebook: {
cb: function(n) {
var p=n.params,
m=n.data;
if (m.data.length) {
n.callbackFunc({
elem: p.elem,
service: p.service,
countUrl: p.countUrl,
count: !k.isNumeric(m.data[0].total_count) ? 0 : m.data[0].total_count,
share: m.data[0]
});
}
},
ajs: function(m) {
var n=m.params,
p=m.cbname;
_ate.ajs(this.baseUrl + _euc(n.countUrl) + "\"&" + this.jsonpParam + "=" + p, 1);
},
baseUrl: "//graph.facebook.com/fql?q=SELECT url, normalized_url, share_count, like_count, comment_count, total_count,commentsbox_count, comments_fbid, click_count FROM link_stat WHERE url=\""
},
twitter: {
baseUrl: "//urls.api.twitter.com/1/urls/count.json?url="
},
pinterest_share: {
baseUrl: "//widgets.pinterest.com/v1/urls/count.json?url="
},
pinterest: {
baseUrl: "//widgets.pinterest.com/v1/urls/count.json?url="
},
reddit: {
cb: function(r) {
var t=r.params,
q=r.data,
m=0,
p=0,
s=0,
n;
if (q.data&&q.data.children) {
n=q.data.children;
k.each(n, function(u, v) {
if (v.data&&!k.isUndefined(v.data.downs)&&!k.isUndefined(v.data.ups)) {
m += v.data.ups;
p += v.data.downs;
s += v.data.score;
}
});
r.callbackFunc({
elem: t.elem,
service: t.service,
countUrl: t.countUrl,
ups: +m,
downs: +p,
count: !k.isNumeric(+s) ? 0 : +s
});
}
},
baseUrl: "//www.reddit.com/api/info.json?url=",
jsonpParam: "jsonp"
},
delicious: {
cb: function(n) {
var p=n.params,
m=n.data;
n.callbackFunc({
elem: p.elem,
service: p.service,
countUrl: p.countUrl,
count: m.length&&k.isNumeric(+m[0].total_posts) ? +m[0].total_posts : 0
});
},
baseUrl: "//feeds.delicious.com/v2/json/urlinfo/data?url="
},
vk: {
ajs: function(m) {
var n=m.params;
if (!window.VK) {
window.VK={
Share: {
count: function() {
clearTimeout(m.timeout);
var p=this.counts[arguments[0]];
m.callbackFunc({
elem: p.elem,
service: p.service,
countUrl: p.countUrl,
count: +arguments[1]
});
}
}
};
}
VK.Share.counts=VK.Share.counts || [];
VK.Share.counts.push(n);
_ate.ajs(this.baseUrl + (VK.Share.counts.length - 1) + "&url=" + _euc(n.countUrl), 1);
},
baseUrl: "//vk.com/share.php?act=count&index="
},
linkedin: {
baseUrl: "//www.linkedin.com/countserv/count/share?url="
},
odnoklassniki_ru: {
ajs: function(m) {
var n=m.params,
p=m.cbname;
_ate.ajs(this.baseUrl + _euc(n.countUrl) + "&" + this.jsonpParam + "=" + p, 1);
},
baseUrl: "//www.odnoklassniki.ru/dk?st.cmd=shareData&ref=",
jsonpParam: "cb"
},
compact: {
baseUrl: "//api-public.addthis.com/url/shares.json?url="
},
defaults: {
cb: function(p) {
var q=p.params,
n=p.data,
m=+n.count || +n.shares;
if (!k.isUndefined(m)) {
p.callbackFunc({
elem: q.elem,
service: q.service,
countUrl: q.countUrl,
count: !k.isNumeric(m) ? 0 : m
});
}
},
ajs: function(m) {
var n=m.params,
p=m.cbname;
_ate.ajs(this.baseUrl + _euc(n.countUrl) + "&" + this.jsonpParam + "=" + p, 1);
},
jsonpParam: "callback"
}
},
timeout: 5000,
getCounts: function(r, n) {
var u=k.shareCounters.requests,
m=u.services[r.service],
q=u.services.defaults,
t=r.countUrl,
p, s;
if (!u || !u.services || !u.services.defaults) {
n({
elem: r.elem,
service: r.service,
countUrl: r.countUrl,
error: "Could not find necessary JavaScript object",
count: "?"
});
return;
}
if (!u.services[r.service] || !u.services[r.service].baseUrl) {
n({
elem: r.elem,
service: r.service,
countUrl: r.countUrl,
error: "Service not supported",
count: "?"
});
return;
}
m.jsonpParam=m.jsonpParam || q.jsonpParam || "callback";
t=t.length > 25 ? t.substring(0, 25) : t;
p=setTimeout(function() {
n({
elem: r.elem,
service: r.service,
countUrl: r.countUrl,
error: "Service request timed out",
count: "?"
});
}, u.timeout);
s=_ate.util.scb("rcb", t, function(v) {
clearTimeout(p);
if (k.isFunction(m.cb)) {
m.cb({
params: r,
data: v,
callbackFunc: n
});
} else {
if (k.isFunction(q.cb)) {
q.cb({
params: r,
data: v,
callbackFunc: n
});
}
}
});
if (r.service === "pinterest_share" || r.service === "pinterest") {
s="window." + s;
}
if (k.isFunction(m.ajs)) {
m.ajs.call(m, {
params: r,
callbackFunc: n,
cbname: s,
timeout: p
});
} else {
if (k.isFunction(q.ajs)) {
q.ajs.call(m, {
params: r,
callbackFunc: n,
cbname: s
});
}
}
return this;
}
}
},
truncateCount: function(m) {
var n=("" + m).split(".").shift().length;
if (!k.isNumeric(m)) {
return m;
} else {
if (n < 4) {
return Math.round(m);
} else {
if (n < 7) {
return k.roundWithSuffix(m, 1000, "K");
} else {
if (n < 10) {
return k.roundWithSuffix(m, 1000000, "M");
} else {
return k.roundWithSuffix(m, 1000000000, "B");
}
}
}
}
},
roundWithSuffix: function(q, p, m) {
q /= p;
q=Math.round(q * 10) / 10;
if ((q + "").length > 4) {
q=Math.round(q);
}
return q + m;
},
decisionEngine: {
run: function(n) {
var q=this,
m, p;
k.each(n, function(s, r) {
if (!k.isPlainObject(r)) {
return;
}
m=r.match;
if (k.isUndefined(m) || k.isEmptyObject(m)) {
q.matchObject=r;
} else {
if (m) {
p=k.decisionEngine.testAll.call(q, m);
if (p) {
q.matchObject=r;
}
}
}
});
return status;
},
testAll: function(n) {
var q=this,
m={}, p=true;
k.each(n, function(r, s) {
m[r]=s;
p=k.decisionEngine.testOne(m);
return p;
});
return p;
},
testOne: function(n) {
var m=true;
k.each(n, function(q, p) {
if (k.decisionEngine.match.hasOwnProperty(q)) {
m=function() {
if (k.isBoolean(p)) {
return p === k.decisionEngine.match[q](p);
} else {
return k.decisionEngine.match[q](p);
}
}();
return m;
}
});
return m;
},
match: {
referrer: function(n) {
if (k.isString(n)) {
n=[n];
}
for (var m in n) {
var p=n[m];
if (new RegExp(p).test(h.referrer)) {
return true;
}
}
return false;
},
referringService: function(p) {
if (k.isString(p)) {
p=[p];
}
var n=c.session.source();
if (n.type!=="social" || k.isUndefined(n.service)) {
return false;
}
for (var m in p) {
var q=p[m];
if (q === n.service) {
return true;
}
}
return false;
},
usesService: function(q) {
if (k.isString(q)) {
q=[q];
}
var p=c.user.services();
for (var n in p) {
for (var m in q) {
if (!k.isUndefined(p[n].name)&&p[n].name === q[m]) {
return true;
}
}
}
return false;
},
service: function(m) {
if (k.decisionEngine.match.usesService(m) || k.decisionEngine.match.referringService(m)) {
return true;
}
return false;
},
preferredService: function(q) {
var p=c.user.services();
if (k.isString(q)) {
q=[q];
}
if (!p.length) {
return false;
}
var m=p[0].name;
for (var n in q) {
var r=q[n];
if (r === m) {
return true;
}
}
return false;
},
location: function(n) {
if (k.isString(n)) {
n=[n];
}
for (var m in n) {
if (new RegExp(n[m]).test(h.location.href)) {
return true;
}
}
return false;
},
url: function(m) {
return k.decisionEngine.match.location(m);
},
mobile: function() {
return k.mobile.apply(k, arguments);
},
tablet: function() {
return k.tablet.apply(k, arguments);
},
phone: function() {
return k.tablet.apply(k, phone);
},
socialBrowser: function(n) {
var m=/FBFor|Twitter/i.test(navigator.userAgent);
return m;
},
desktop: function() {
return k.desktop.apply(k, arguments);
},
browser: function() {
return k.browser.apply(k, arguments);
},
sameDomain: function(m) {},
locatedIn: function(m) {
return c.user&&c.user.isLocatedIn ? c.user.isLocatedIn(m) : false;
},
time: function(p) {
if (!p) {
return false;
}
var s, m, r=true,
n=new Date();
s=p.start || null;
m=p.end || null;
if (!s&&!m) {
return false;
}
function q(u) {
if (!k.isString(u)) {
return u;
}
var v=null;
try {
if (!k.has(u, "/")&&!k.has(u, ",")&&k.has(":")) {
v=new Date(n.getMonth() + 1 + "/" + n.getDate() + "/" + n.getFullYear() + " " + u);
} else {
v=new Date(u);
}
} catch (t) {}
return v;
}
if (s&&k.isString(s)) {
s=q(s);
}
if (m&&k.isString(m)) {
m=q(m);
}
if (s&&n < s) {
return false;
}
if (m&&n > m) {
return false;
}
return r;
},
returning: function() {
return c.user.isReturning();
},
query: function(p) {
var u=h.location.search;
if (!k.isString(u) || !k.has(u, "=")) {
return false;
}
var r=u.substring(1).split("&");
var t={};
var q;
for (q in r) {
var s=r[q].split("=");
var n=s[1];
var m=s[0];
if (k.has(n, "+")&&k.has("utm_term", m)) {
n=n.split("+").sort().join("+");
}
t[s[0]]=n;
}
for (q in p) {
if (!(q in t)) {
return false;
}
switch (q) {
case "utm_term":
if (k.has(t[q], p[q])) {
return false;
}
break;
default:
if (p[q]!==t[q]) {
return false;
}
break;
}
}
return true;
},
utm_source: function(m) {
return k.decisionEngine.match.query({
utm_source: m
});
},
utm_medium: function(m) {
return k.decisionEngine.match.query({
utm_medium: m
});
},
utm_term: function(n) {
if (k.isString(n)) {
n=n.split("+");
}
for (var m in n) {
if (!k.decisionEngine.match.query({
utm_term: n[m]
})) {
return false;
}
}
return true;
},
utm_content: function(m) {
return k.decisionEngine.match.query({
utm_content: m
});
},
utm_campaign: function(m) {
return k.decisionEngine.match.query({
utm_campaign: m
});
},
iframe: function(m) {
if (k.isUndefined(m)) {
m=true;
}
return e.top!==e === m;
},
custom: function(m) {
if (k.isFunction(m)) {
return m();
} else {
return !!m;
}
},
hasTag: function(m) {
if (k.isArray(m)) {
k.each(m, function(n, p) {
if (c.user.hasTag(p)) {
return true;
}
});
return false;
}
return c.user.hasTag(m);
},
hasTags: function(m) {
if (k.isString(m)) {
m=[m];
}
for (var n in m) {
if (!k.decisionEngine.match.hasTag(m[n])) {
return false;
}
}
return true;
}
}
}
};
return k;
}(g.qwery, g.rAF);
g.layer=function(b, k, j) {
var l={
create: function() {
var q=this,
r=q.options,
m=j.isString(r.position) ? r.position.toLowerCase() : q.position || "right",
p=r.showAnimation === "show" ? "show" : m === "top" ? "slideInDown" : m === "bottom" ? "slideInUp" : m === "left" ? "slideInLeft" : "slideInRight",
n=r.hideAnimation === "hide" ? "hide" : m === "top" ? "slideOutUp" : m === "bottom" ? "slideOutDown" : m === "left" ? "slideOutLeft" : "slideOutRight";
q.options=j.extend(r, {
showAnimation: p,
hideAnimation: n
});
q.position=m;
},
bindEvents: function() {
if (this.status === "disabled") {
return this;
}
if (j.isString(this.element)) {
this.element=b(this.element)[0];
}
j.bindEvents.call(this, this.events);
return this;
},
layerList: {},
layers: function() {
if (j.mobile()) {
if (_ate.bro.dro) {
var n=navigator.userAgent,
m=parseFloat(n.slice(n.indexOf("Android") + 8));
if (m < 3) {
var q=new _ate.resource.Resource("layersdroidcss", _atc.rsrcs.layersdroidcss);
q.load();
}
}
return this.mobileLayers;
} else {
if (_ate.bro.ie6 || j.isIEQuirksMode()) {
var p=new _ate.resource.Resource("layersiecss", _atc.rsrcs.layersiecss);
p.load();
return this.degradedLayers;
} else {
return this.desktopLayers;
}
}
},
feeds: {},
feedsLoading: {},
layersPco: "sml-1.0",
language: false,
personalize: true,
pco: function() {
return this.layersPco + "," + this.pco;
},
pcoMap: {
smlsh: "share",
smlfw: "follow",
smlwn: "whatsnext",
smlre: "recommended",
smlres: "recommendedside",
cod: "drawer"
},
enabledLayers: {},
degradedLayers: {
share: "share",
follow: "follow",
welcome: "welcome"
},
desktopLayers: {
share: "share,thankyou",
follow: "follow,thankyou",
recommended: "recommended",
recommendedbox: "recommendedbox",
recommendedside: "recommendedside",
drawer: "drawer",
welcome: "welcome",
whatsnext: "whatsnext",
warning: "warning"
},
mobileLayers: {
share: "mobile,thankyou",
follow: "mobile,thankyou",
recommended: "recommended",
recommendedbox: "recommendedbox",
welcome: "welcome",
warning: "warning"
},
layersList: {},
utils: j,
preferredServices: [],
translationIds: {
share: {
postShareTitle: 97,
postShareFollowMsg: 96,
postShareRecommendedMsg: 99
},
follow: {
postFollowTitle: 98,
postFollowRecommendedMsg: 99
},
whatsnext: {
recommendedTitle: 99,
shareMsg: 100,
followMsg: 101
},
recommended: {
title: 99
}
},
defaultOptions: {
share: {
position: "left",
numPreferredServices: 5,
postShareTitle: "Thanks for sharing!",
postShareFollowMsg: "Follow",
postShareRecommendedMsg: "Recommended for you",
desktop: true,
mobile: true,
services_exclude: "",
counts: false
},
follow: {
services: false,
title: "",
postFollowTitle: "Thanks for following!",
postFollowRecommendedMsg: "Recommended for you",
desktop: true,
mobile: true,
visible: "smart"
},
whatsnext: {
recommendedTitle: "Recommended for you",
shareMsg: "Share to [x]",
followMsg: "Follow on [x]"
},
recommended: {
title: "Recommended for you",
desktop: true,
mobile: true,
orientation: "horizontal",
size: "large",
maxitems: 4,
defaultimage: true,
textonly: false,
showAnimation: "show",
hideAnimation: "hide"
},
recommendedbox: {
size: "medium",
maxitems: "auto",
theme: "minimal",
promotedUrls: []
},
recommendedside: {
theme: "light",
position: "right",
showAnimation: "slideInLeft",
hideAnimation: "slideOutRight"
},
drawer: {
theme: "dark",
position: "right",
orientation: "vertical",
maxitems: "auto",
animationType: "overlay",
showAnimation: "slideInLeft",
hideAnimation: "slideOutRight"
},
welcome: {
show: true,
coverPage: false,
fixed: false,
rememberHide: true,
watermark: true,
delay: 0,
showOnScrollTo: false,
position: "top",
backgroundColor: "#000000",
buttonColor: "#098DF4",
textColor: "#FFFFFF",
linkTextColor: "#FFFFFF",
buttonTextColor: "#FFFFFF",
noGradient: false,
alwaysShow: false,
message: "If you enjoy this page, do us a favor:",
action: {
text: "Share this page",
verb: "share",
type: "button"
}
},
thankyou: {
showAnimation: "fadeIn",
hideAnimation: "fadeOut"
},
mobile: {
buttonBarPosition: "bottom",
showAnimation: "fadeIn",
menuShowAnimation: "slideInUp",
menuHideAnimation: "slideOutDown",
buttonBarTheme: 1
},
warning: {
test: false
},
theme: "transparent",
domain: "",
linkFilter: function(n, m) {
return n;
},
pubid: "",
altRecommendedPubId: "",
responsive: {
maxWidth: 979,
minWidth: 0
}
},
themes: {
minimal: ".at4-minimal",
dark: ".ats-dark",
light: ".ats-light",
gray: ".ats-gray",
transparent: ".ats-transparent"
},
serviceBlacklist: {
settings: true,
more: true
},
hiddenClass: "at4-visually-hidden",
alternativeHiddenClass: "at4-hidden-off-screen",
hideClass: "at4-hide",
visibleClass: "at4-visible",
showClass: "at4-show",
opacityHiddenClass: "at4-opacity-hidden",
opacityVisibleClass: "at4-opacity-visible",
globalEvents: {
"window scroll": j.debounce(function() {
j.trigger("addthis.layers.scroll", c, this);
}, 250),
"document keydown": function(n) {
var m=j.isNumber(n.keyCode) ? j.KEYCODES[n.keyCode] : false;
if (m) {
j.trigger("addthis.keydown." + m, c, this);
}
},
"addthis.layers.loaded": function(q) {
var p=c.layers.active_layers,
m=(p || {}).addthis,
n=j.isUndefined(m) ? {} : m.mobile;
if (p) {
l.welcomeBarAndMobile();
if (m&&n&&n.options.responsive&&j.desktop()) {
if (l.initialized) {
l.showProperLayers();
} else {
j.bindEvents.call(l, {
"addthis.layers.resized": function() {
l.showProperLayers();
}
});
l.showResponsiveLayers();
}
} else {
l.showProperLayers();
}
}
},
"addthis.layers.rendered": function() {
l.showResponsiveLayers(true);
},
"addthis.layers.resize": function() {
l.showResponsiveLayers();
},
"addthis.layer.shown": function(r) {
var q=r.target.layer,
m=q.options,
p=m.showAnimation,
n=q.openControl;
if (j.isElement(n)) {
if (q.status === "closed") {
q.show(n, p);
}
}
}
},
desktopEvents: {
"addthis.layers.rendered": function() {
j.bindEvents.call(l, {
"window resize": j.debounce(function() {
j.trigger("addthis.layers.resize", c, this);
}, 150)
});
}
},
showResponsiveLayers: function(r) {
var s=c.layers.active_layers,
p=(s || {}).addthis,
q=j.isUndefined(p) ? {} : p.mobile,
z=j.isUndefined(q) ? {} : q.options,
u=(z || {}).responsive || {}, w, n=u.minWidth,
y=u.maxWidth,
t="desktop",
v, m, x;
if (!q) {
return;
}
if (q.mobile) {
return;
}
n=j.isString(n) ? !j.has(n, "px") ? +n : +n.replace("px", "") : n;
y=j.isString(y) ? !j.has(y, "px") ? +y : +y.replace("px", "") : y;
if (u!==false&&!j.isUndefined(n)&&!j.isUndefined(y)) {
w=j.pageWidth();
if (w >= n&&w <= y) {
t="mobile";
} else {
t="desktop";
if (j.isVisible(q.menu)) {
j.trigger("addthis.layers.mobilemenu.hide", c, q);
}
}
j.each(s, function(A, B) {
j.each(B, function(D, C) {
if (r === true&&C.async!==true) {
return false;
}
v=C.device;
m=C.element;
x=C.async === true ? C.parentElement : _ate.util.parent(m, ".addthis-smartlayers") === h ? m.parentNode : _ate.util.parent(m, ".addthis-smartlayers");
if (v!=="both") {
if (v === t) {
if (l.initialized === true) {
j.removeClass(l.hideClass, x);
if (C.status!=="closed") {
C.show();
}
} else {
j.removeClass(l.hideClass, x);
}
} else {
if (x!==h.body) {
j.addClass(l.hideClass, x);
}
j.addClass(l.hideClass, m);
}
}
});
});
}
if (l.initialized!==true) {
j.trigger("addthis.layers.resized");
}
},
showProperLayers: function() {
j.each(c.layers.active_layers, function(m, n) {
j.each(n, function(p, q) {
l.onloadShowLogic(q);
});
});
l.initialized=true;
},
onloadShowLogic: function(u) {
var r=u.namespace,
v=u.basename,
q=u.element,
w=j.mobile(),
m=u.device,
x=_ate.util.parent(q, ".addthis-smartlayers") === h ? q.parentNode : _ate.util.parent(q, ".addthis-smartlayers"),
y=u.options,
s=y.showAnimation || "show",
t=y.delay || 0,
p=y.hideAfter || false,
n=u.placeholder;
if (u.rendered!==true&&u.showOnLoad!==false) {
if (w&&m === "desktop") {
return;
}
if (j.isElement(q)) {
if (u.status!=="closed"&&!j.hasClass(l.hideClass, q)&&!j.hasClass(l.hideClass, x)) {
j.requestTimeout(function(z) {
j.removeClass(l.showClass, q);
j.removeClass(s, q);
j.removeClass("animated", q);
j.removeClass(l.alternateHiddenClass, q);
if (j.isElement(n)) {
h.body.insertBefore(n, h.body.firstChild);
h.body.insertBefore(u.container, h.body.firstChild);
j.setCSSAttr(n, {
height: q.offsetHeight + q.offsetTop + "px"
});
}
j.addClass(l.hideClass, q);
j.removeClass(l.visibleClass, q);
j.removeClass(l.visibleClass, x);
j.removeClass(l.hiddenClass, q);
j.removeClass(l.hiddenClass, x);
u.show(q, s, function() {
j.removeClass(s, q);
j.removeClass("animated", q);
j.removeClass(l.showClass, q);
j.removeClass(l.hideClass, q);
j.trigger(r + "." + v + ".shown", c, {});
j.trigger("addthis.layer.shown", {
layer: u
});
});
}, t);
} else {
k(function() {
j.removeClass(l.hiddenClass, q);
j.removeClass(l.hiddenClass, x);
j.trigger("addthis.layer.shown", {
layer: u
});
});
}
u.rendered=true;
j.trigger("addthis.layers." + u.name + ".rendered", c, this);
}
}
},
welcomeBarAndMobile: function() {
if (l.welcomeBarAndMobile.alreadyCompleted === true) {
return;
}
var q=c.layers.active_layers,
p, m, n=q&&q.addthis&&q.addthis.mobile,
r=q&&q.addthis&&q.addthis.welcome;
if (n&&r) {
p=q.addthis.mobile;
m=q.addthis.welcome;
if (p.position === m.position) {
m.device="desktop";
}
}
l.welcomeBarAndMobile.alreadyCompleted=true;
},
followServices: {
facebook: "Facebook",
flickr: "Flickr",
foursquare: "Foursquare",
google_follow: "Google+",
instagram: "Instagram",
linkedin: "LinkedIn",
pinterest: "Pinterest",
rss: "RSS",
tumblr: "Tumblr",
twitter: "Twitter",
vimeo: "Vimeo",
youtube: "YouTube"
},
superMethod: function(p, n) {
var m=Array.prototype.slice.call(arguments, 0);
m.shift();
return l[p].apply(this, m);
},
animate: function d(q, n, y) {
if (!q) {
return;
}
if (n === "show") {
n=l.showClass;
} else {
if (n === "hide") {
n=l.hideClass;
}
}
if (n === l.showClass || n === l.hideClass) {
q.__isAnimating=false;
}
if (q.__isAnimating) {
if (j.isFunction(y)) {
y.call(this);
}
return;
} else {
q.__isAnimating=true;
}
var s=["animationend", "webkitAnimationEnd", "oAnimationEnd", "oanimationend", "msAnimationEnd"],
t=["fadeIn", "fadeInRight", "fadeInLeft", "fadeInUp", "fadeInDown", "slideInLeft", "slideInRight", "slideInUp", "slideInDown", l.showClass],
p=["fadeOut", "fadeOutRight", "fadeOutLeft", "fadeOutUp", "fadeOutDown", "slideOutLeft", "slideOutRight", "slideOutUp", "slideOutDown", l.hideClass],
w=j.toObject(p),
x=j.toObject(t),
A={}, u=j.isElement(q),
r=y,
v=function() {
k(function() {
if (x[n]) {
j.removeClass(l.hideClass, q);
j.addClass(l.showClass, q);
} else {
if (w[n]) {
j.removeClass(l.showClass, q);
j.addClass(l.hideClass, q);
}
}
j.removeClass(l.visibleClass, q);
});
if (j.isFunction(r)) {
r.call(this);
}
j.bindEvents.call(A, A, "remove");
q.__isAnimating=false;
}, m=j.supports.csstransitions(),
z=t.concat(p);
v=f.bind(v, this);
if (m) {
j.each(z, function(B) {
j.removeClass(z[B], q);
});
j.each(s, function(B, C) {
if (u) {
A[C]=v;
} else {
A[q + " " + C]=v;
}
});
if (u) {
A.element=q;
}
d.evts=A;
if (j.getCSSAttr(q, "display") === "none") {
j.addClass(l.visibleClass, q);
}
j.bindEvents.call(A, A);
j.addClass("animated", q);
j.addClass(n, q);
} else {
v();
}
},
processTrendingData: function(m, q, p) {
var n=this;
if (p) {
l.feeds[m + q]=p;
l.feedsLoading[m + q]=false;
}
this.dequeueTrending(m, q);
},
preRender: function() {
var p=this,
n=p.parentElement,
r, m=p.device,
q=p.prerender ? p.prerender() : f.json2html({
".addthis-smartlayers-outer-container": ""
});
if (j.isElement(q)) {
l.addDeviceClassName(q, m);
n.appendChild(q);
p.parentElement=p.container=q;
}
},
render: function() {
var s=this,
v=s.options,
t=s.parentElement,
u, p, q, r, m, n=s.device;
if (s.status === "disabled") {
s.finalize();
}
s.offset();
if (j.isFunction(s.jsonTemplate)) {
u=s.jsonTemplate(s);
} else {
if (j.isFunction(s.generateJson)) {
u=s.generateJson(s);
}
}
if (u) {
if (j.isElement(t)) {
p=f.json2html(u);
m=s.container=s.container || p;
j.addClass("addthis-smartlayers", m);
if (j.isIEQuirksMode()) {
j.addClass("addthis-smartlayers-quirks-mode", m);
}
if (_ate.bro.ie6) {
j.addClass("addthis-smartlayers-ie6", m);
} else {
if (_ate.bro.ie7) {
j.addClass("addthis-smartlayers-ie7", m);
} else {
if (_ate.bro.ie8) {
j.addClass("addthis-smartlayers-ie8", m);
} else {
if (_ate.bro.ie9) {
j.addClass("addthis-smartlayers-ie9", m);
}
}
}
}
if (s.showOnLoad!==false) {
j.addClass(l.hiddenClass, m);
} else {
j.addClass(l.hideClass, m);
}
l.addDeviceClassName(m, n);
if (!j.supports.csstransitions()) {
v.showAnimation="show";
v.hideAnimation="hide";
} else {
v.showAnimation=v.showAnimation || "fadeIn";
v.hideAnimation=v.hideAnimation || "fadeOut";
}
t.appendChild(p);
l.render_logic.call(s, p);
}
} else {
l.render_logic.call(s);
}
},
render_logic: function() {
var m=this;
m.finalize().bindEvents().postEvents();
if (m.async === true) {
if (j.isFunction(m.imageResizing)) {
m.imageResizing(function() {
l.onloadShowLogic(m);
});
} else {
l.onloadShowLogic(m);
}
}
},
addDeviceClassName: function(n, m) {
if (m === "mobile" || m === "desktop") {
j.addClass("addthis-smartlayers-" + m, n);
}
},
postEvents: function() {
var q=j.getScrollBarWidth(),
p=this.position === "right",
r=this.namespace === "addthis"&&this.basename === "whatsnext",
n=this.openControl,
m=this.element;
if (j.isNumber(q)&&q > 0) {
if (j.isElement(n)) {
if (p) {
j.setCSSAttr(n, "padding-right", q + "px");
} else {
if (p || r) {
j.setCSSAttr(n, "right", q + "px");
}
}
}
if (_ate.bro.ie10&&j.isElement(m)) {
if (p || r) {
j.setCSSAttr(m, "right", q + "px");
}
}
}
},
offset: function() {
var p=this.options.offset,
n, m, q={};
if (p) {
n=document.getElementById(this.name + "-offset") || (n=document.createElement("style"))&&(n.type="text/css")&&(n.rel="stylesheet")&&(n.media="screen")&&(n.id=this.name + "-offset")&&b("head")[0].appendChild(n)&&n;
switch (this.name) {
case "whatsnext":
q={
top: true,
bottom: true
};
break;
default:
q={
left: true,
right: true
};
break;
}
m=this.element;
if (this.openControl) {
m += "," + this.openControl;
}
m += " {";
if (p.top&&!q.top) {
m += "top:" + p.top + ";" + (!p.bottom ? "bottom:auto" : "");
}
if (p.left&&!q.left) {
m += "left:" + p.left + ";" + (!p.right ? "right:auto;" : "");
}
if (p.bottom&&!q.bottom) {
m += "bottom:" + p.bottom + ";" + (!p.top ? "top:auto;" : "");
}
if (p.right&&!q.right) {
m += "right:" + p.right + ";" + (!p.left ? "left:auto" : "");
}
m += "}";
if (n.styleSheet&&n.styleSheet.cssText!==i) {
n.styleSheet.cssText=m;
} else {
n.innerHTML=m;
}
if (!n.parentElement) {
b("head")[0].appendChild(n);
}
}
},
finalize: function() {
if (this.closeControl) {
this.closeControl=b(this.closeControl)[0];
}
if (this.openControl) {
this.openControl=b(this.openControl)[0];
}
if (this.element) {
this.element=b(this.elementSelector)[0];
}
if (this.status === "closed") {
j.addClass(l.hideClass, this.element);
}
this.container=this.async === true ? this.parentElement : _ate.util.parent(this.element, ".addthis-smartlayers") === h ? this.element.parentNode : _ate.util.parent(this.element, ".addthis-smartlayers");
j.trigger("addthis.layer.rendered", {
layer: this
});
return this;
},
queue: function(p, n, m) {
return j.queue.call(l, p, n, m || this);
},
dequeue: function(m) {
return j.dequeue.call(l, m);
},
show: function(q, m, s) {
var p=this,
r=p.element,
n=p.options;
k(function() {
m=m || n.showAnimation;
q=q || (j.isElement(r) ? r : j.isString(r) ? b(r) : "");
if (m&&!j.isVisible(q)) {
p.animate(q, m, s);
} else {
if (j.isFunction(s)) {
s();
}
}
});
},
hide: function(p, s, r) {
var n=this,
q=n.element,
m=n.options;
k(function() {
s=s || m.hideAnimation;
p=p || (j.isElement(q) ? q : j.isString(q) ? b(q) : "");
if (s&&j.isVisible(p)) {
n.animate(p, s, r);
} else {
if (j.isFunction(r)) {
r();
}
}
});
},
showControl: function(m) {
j.removeClass(l.hideClass, m);
j.addClass(l.showClass, m);
},
hideControl: function(m) {
j.removeClass(l.showClass, m);
j.addClass(l.hideClass, m);
},
feed: function(u, r) {
var v=this,
t=v.feedName(),
s=v.feeds[t] || (v.feeds[t]=[]),
w=v.options,
q=e.addThisLinkFilter || w.linkFilter,
m=h.location.href.split("#")[0].replace(/\//g, "").replace(/(http:|https:)/, ""),
p, n=true;
if (s&&s.length > 0) {
if (!v.filteredData || u&&!s[u.name]) {
p=v.filteredData=v.feeds[t][u ? u.name : "filtered"]=j.filter(s, function(z, A, y) {
if (z._removed) {
return false;
}
z._secureurl=j.has(z.url, "https:");
if (z.image) {
z._secureimage=j.has(z.image, "https:");
z.image=z.image.replace(/(http:|https:)/, "");
}
if (m === z.url.split("#")[0].replace(/\//g, "").replace(/(http:|https:)/, "") || q&&!q(z)) {
z._removed=true;
return false;
}
if (u!==i) {
if (!u.filter(z)) {
return false;
}
}
if (n) {
var x=j.match({
title: z.title,
image: z.image
}, y, u ? u.name : "filtered");
if (x.length > 1) {
j.each(x, function(B, C) {
if (C._removed) {
return;
}
if (B > 0) {
C._removed=true;
}
});
}
}
return true;
});
if (!this.personalize) {
j.randomize(p);
if (r) {
p.sort(r);
}
}
}
}
return s;
},
feedName: function() {
return this.name + (this.domain || "");
},
feedItem: function(q) {
var r=q.feed || this.feed(q.test, q.sort),
r=r&&r[q.test ? q.test.name : "filtered"],
p, m, n=[];
q.repeat=q.repeat || 0;
if (r&&r.length > 0) {
while (r.length > 0) {
p=r.shift();
n.push(p);
if (!p._displayed || p._displayed < q.repeat) {
p._displayed=q.repeat;
m=p;
break;
}
if (r.length === 0) {
q.repeat++;
r.repeat=q.repeat;
Array.prototype.push.apply(r, n);
n=[];
}
}
Array.prototype.push.apply(r, n);
n=[];
return m;
}
},
retrieveTrendingData: function() {
if (this.status === "disabled") {
return this;
}
_ate.feeds.ab();
var m=e.addthis_config || {}, n=this.options.altRecommendedPubId || this.options.pubid || e.addthis_pub || m.pubid || "",
r=this.options.domain,
p=this.options.numItems,
t=this.processTrendingData,
q=l,
s;
t=t ? f.bind(t, this) : function() {};
s={
callback: function(u) {
t(n, r, u);
},
pubid: n,
domain: r,
total: p
};
if (n) {
if (!q.checkForContentFeed(n, r)&&!q.checkForContentFeedLoading(n, r)) {
q.feedsLoading[n + r]=true;
if (this.personalize) {
_ate.feeds.recommend(s);
} else {
_ate.feeds.trend(s);
}
setTimeout(function() {
if (q.feedsLoading[n + r] === true) {
q.feedsLoading[n + r]=false;
t(n, r, []);
}
}, 5000);
} else {
if (q.checkForContentFeed(n, r)&&!q.checkForContentFeedLoading(n, r)) {
this.dequeueTrending(n, r);
}
}
} else {
this.dequeueTrending(n, r);
}
},
checkForContentFeed: function(m, n) {
if (this.feeds[m + n]) {
return true;
} else {
return false;
}
},
checkForContentFeedLoading: function(m, n) {
if (this.feedsLoading[m + n]) {
return true;
} else {
return false;
}
},
normalizeTrendingItem: function(p, s) {
var r=s.numItems || s.itemCount || 1,
n=s.pos || 0,
q=_ate.dctu({
url: p.url || "",
total: r,
pco: this.pco,
pos: n
}),
u=p.title || q,
t=_ate.util.gUD(q).replace("http://", "").replace("https://", ""),
m;
p.url=q;
p.title=u;
p.domain=t;
return p;
},
noImageClasses: {
minimal: "at4-no-image-minimal-recommended",
transparent: "at4-no-image-light-recommended",
light: "at4-no-image-light-recommended",
gray: "at4-no-image-gray-recommended",
dark: "at4-no-image-dark-recommended"
},
generateTrendingJson: function(r, E) {
var L=l,
G=this,
p=G.options,
s=L.feeds[G.options.pubid + G.options.domain],
A, x=[],
z=E,
K=[],
u=p.maxitems || p.maxItems,
B=p.defaultimage,
t=p.textonly,
v, F=p.theme,
C=G.noImageClasses,
D=0,
n=G.hasImage=false,
w=G.hasTitle=false,
H=j.isString(p.promotedUrls)&&p.promotedUrls.length ? [p.promotedUrls] : p.promotedUrls || [],
q=H.length > 0 ? true : false,
y="",
I="",
m=h.domain;
G.feeds[G.feedName()]=s;

function J(N, M) {
return !!N.image ? !! M.image ? 0 : -1 : 1;
}
if (s&&z) {
s.repeat=s.repeat ? s.repeat : 1;
for (D=0; D < z; D++) {
A=this.feedItem({
repeat: s.repeat,
sort: J
});
if (A) {
if (A.image) {
n=G.hasImage=true;
}
if (A.title) {
w=G.hasTitle=true;
}
x.push(A);
}
}
if (q) {
j.each(H, function(M, N) {
H[M]=j.stripQueryStringAndHashFromPath(N);
});
j.each(s, function(O, N) {
y=j.stripQueryStringAndHashFromPath(N.url);
if (j.indexOf.call(H, y)!==-1) {
N=j.cloneObject(N);
for (var M=0; M < x.length; M++) {
if (x[M].url === N.url || M === x.length - 1) {
x.splice(M, 1);
break;
}
}
N.domain=N.url ? N.url.substring(N.url.indexOf("www.") + 4, N.url.indexOf(".com") + 4) : "";
N.promoted=true;
x.unshift(N);
}
});
}
if (G.requiresImage === true&&n === false || w === false) {
return [];
}
j.each(x, function(N, M) {
v=[];
if (M&&M.url) {
G.normalizeTrendingItem(M, {
itemCount: z,
numItems: u,
pos: N
});
if (t!==true&&n === true) {
if (M.image) {
v.push({
".at4-recommended-item-img": {
a: {
href: M.url || "#",
title: M.title,
"img.at-tli": {
src: M.image,
alt: M.title,
"data-secure": M._secureimage ? "true" : ""
}
}
}
});
} else {
if (B === true&&G.showPlaceholderImages!==false) {
var O={};
O[".at4-recommended-item-img." + C[F]]={
".at4-recommended-item-placeholder-img": {}
};
v.push(O);
}
}
}
if (G.requiresImage!==true || G.requiresImage === true&&M.image) {
v.push({
".at4-recommended-item-caption": [{
h4: {
"a.at-recommendedTitle": {
href: M.url || "#",
html: M.title,
title: M.title
}
}
}, {
small: M.domain
}]
});
} else {
return [];
}
if (M.promoted === true&&v[0]&&v[0][".at4-recommended-item-img"]) {
I=M.domain === m ? "featured" : "promoted";
(v[0][".at4-recommended-item-img"] || {})["span.at4-recommended-domain-badge-container"]={
"span.at4-recommended-domain-badge": I
};
}
if (r.indexOf("smlres") === 0) {
K.push({
"a.at4-recommended-item.at4-recommended-div-item": v
});
} else {
K.push({
".at4-recommended-item.at4-recommended-div-item": v
});
}
}
});
return K;
}
return false;
},
resizeTrendingImage: function(s) {
var v=this,
n=s.parentNode.parentNode,
u, q, w, p=0,
r, m;
if (this.status === "closed") {
j.addClass(l.visibleClass, this.element);
j.removeClass(l.hideClass, this.element);
} else {
if (j.isElement(this.container)) {
j.addClass(l.visibleClass, this.container);
}
}
if (j.isUndefined(s.naturalHeight)) {
u=new Image();
u.src=s.src;
s.naturalWidth=u.width;
s.naturalHeight=u.height;
}
q=s.naturalWidth;
w=s.naturalHeight;
if (!n) {
return;
} else {
while (p++ < 5&&(!n.offsetWidth || !n.offsetHeight)&&n.parentNode) {
n=n.parentNode;
}
}
r=n.offsetWidth;
m=n.offsetHeight || w;
if (this.status === "closed") {
j.addClass(l.hideClass, this.element);
j.removeClass(l.visibleClass, this.element);
} else {
if (j.isElement(this.container)) {
j.removeClass(l.visibleClass, this.container);
}
}
if (w > q) {
w=Math.ceil(w * (r / q));
q=r;
try {
s.style.height=w + "px";
s.style.width=q + "px";
s.style.top="-" + Math.ceil((w - m) / 2) + "px";
} catch (t) {}
} else {
q=Math.ceil(q * (m / w));
w=m;
try {
s.style.width=q + "px";
s.style.height=w + "px";
s.style.left="-" + Math.ceil((q - r) / 2) + "px";
} catch (t) {}
}
},
queueTrending: function(m, n, p) {
this.queue(m + n, p);
this.retrieveTrendingData();
},
dequeueTrending: function(m, p) {
var n;
while (n=this.dequeue(m + p)) {
n.item.call(n.context);
}
},
resizeTrendingTitle: function(q) {
if (_ate.bro.ie6 || _ate.bro.ie7 || _ate.bro.ie8) {
return;
}
if (q&&q.parentNode) {
var t=q,
p=t.parentNode,
s=p.clientHeight,
n=t.offsetHeight,
m=1,
r=t.innerHTML,
u;
if (n > s) {
while (t.offsetHeight > s&&r.length - m > 0) {
u=r.substr(0, r.length - m++);
t.innerHTML=u + "...";
}
u=u.replace(/[\s\.,-\/#!$%\^&\*;:{=\-_`~(]+$/, "");
t.innerHTML=u + "...";
}
}
},
generateFollowJson: function(m) {
var p=[],
n=this;
j.each(m, function(u, t) {
var x={}, v=t.service,
w=t.id,
r=t.usertype,
q=_ate.share.gfu(v, w, r);
if (v&&w&&q) {
x["span.at4-icon-fw.aticon-" + v]={
html: n.followServices[v] || "",
svc: v,
svcId: w,
title: n.followServices[v]
};
if (v != "twitter" || j.mobile()) {
x.href=q;
x.target="_blank";
} else {
x.href="#";
}
p.push({
"a.aticon.at-follow-btn": x
});
}
});
return !p || !p.length ? false : p;
},
share: function(n, s) {
var p=e.addthis_config ? f.clone(e.addthis_config) : {}, r=e.addthis_share ? f.clone(e.addthis_share) : {}, q=r.url || addthis_share.url;
p.product=s;
p.pubid=p.username=this.options.pubid || e.addthis_pub || p.pubid || "";
r.service=n;
switch (n) {
case "addthis":
case "more":
case "compact":
p.ui_pane="";
_ate.ao(h.body, "more", "", "", p, r);
break;
case "mailto":
e.location.href=_ate.share.genieu(r, p, 1);
break;
case "email":
new Image().src=_ate.share.genurl(n, 0, r, p);
p.ui_pane="email";
_ate.ao(h.body, "more", "", "", p, r);
break;
case "pinterest":
case "pinterest_share":
case "thefancy":
_ate.share.img(n);
break;
case "favorites":
var t=r.url,
m=r.title;
m=_ate.trim(m);
t=_ate.track.cof(t);
t=_ate.track.mgu(t, r.share_url_transforms || r.url_transforms, r, n);
t=_ate.share.acb(n, r, p, t, 1);
if (_ate.bro.ipa) {
alert("Tap the <plus> to bookmark in Safari");
} else {
if (_ate.bro.saf || _ate.bro.chr) {
alert("Press <" + (_ate.bro.win ? "Control" : "Command") + ">+D to bookmark in " + (_ate.bro.chr ? "Chrome" : "Safari"));
} else {
if (_ate.bro.opr) {
alert("Press <" + (_ate.bro.win ? "Control" : "Command") + ">+D to bookmark in Opera");
} else {
if (_ate.bro.ffx&&!e.sidebar.addPanel) {
alert("Press <" + (_ate.bro.win ? "Control" : "Command") + ">+D to bookmark in Firefox");
} else {
if (document.all) {
e.external.AddFavorite(t, m);
} else {
e.sidebar.addPanel(m, t, "");
}
}
}
}
}
break;
case "print":
new Image().src=_ate.share.genurl(n, 0, r, p);
e.print();
break;
case "link":
p.ui_pane="link";
_ate.ao(h.body, "link", "", "", p, r);
break;
default:
if (_ate.share.auw(n)) {
_ate.share.stw(n, r, p);
} else {
_ate.share.siw(n, r, p);
}
j.trigger("addthis.menu.share", c, r);
}
_ate.gat(n, q, p, r);
this.updateSessionActivity("share", n);
},
follow: function(n, m, s, q) {
var p=e.addthis_config ? f.clone(e.addthis_config) : {}, r=e.addthis_share ? f.clone(e.addthis_share) : {};
p.product=s;
p.pubid=p.username=this.options.pubid || e.addthis_pub || p.pubid || "";
r.service=n;
r.followUrl=_ate.share.gfu(n, m.id);
if (n === "twitter"&&!j.mobile()) {
_ate.share.ftw(n, m.id, r, p);
} else {
if (q === true) {
p.ui_use_different_full_window=true;
_ate.share.ftw(n, m.id, r, p);
} else {
_ate.share.track(n, 1, r, p);
}
}
this.updateSessionActivity("follow", n);
},
updateSessionActivity: function(p, q) {
var s="__atsa",
n=f.fromKV(_ate.cookie.rck(s), "|"),
m={
follow: "fw",
share: "sh"
}, r=m[p] ? m[p] : false;
if (r) {
if (n[r]) {
if (!j.has(n[r], q)) {
n[r] += "," + q;
}
} else {
n[r]=q;
}
_ate.cookie.sck(s, f.toKV(n, "|"), 0, 1);
}
},
getSessionActivity: function(p) {
var r="__atsa",
n=f.fromKV(_ate.cookie.rck(r), "|"),
m={
follow: "fw",
share: "sh"
}, q=m[p] ? m[p] : false;
if (q) {
if (n[q]) {
return n[q];
}
}
return false;
},
imageResizer: function(s, u, z) {
var x=this,
B=x.options,
A=10,
w=500,
r=0,
m=x.container,
q=x.element,
t=x.noImageClasses,
p=x.hasImage,
n=B.theme,
v=0;
j.addClass(l.visibleClass, q);
(function y() {
var E=-1,
D=0,
G, F, I, H, C={};
if (s&&s.length) {
j.each(s, function(J, K) {
x.superMethod("resizeTrendingTitle", K);
});
}
while (++E < u.length) {
G=u[E];
if (j.isUndefined(G.naturalHeight)) {
F=new Image();
F.src=G.src;
if (F.height > 0) {
G.naturalHeight=F.height;
G.naturalWidth=F.width;
}
F=null;
}
if (G.naturalHeight > 0&&G.naturalWidth > 0&&!G.__imageloaded__) {
G.__imageloaded__=true;
x.resizeTrendingImage(G);
D++;
} else {
if (G.__imageloaded__) {
D++;
} else {
if (r === Math.floor(A / 2)&&j.has(j.attr(G, "src"), "http:")&&j.has(j.attr(h.location, "href"), "https:")&&j.attr(G, "data-secure") === "true") {
j.attr(G, "src", "https:" + j.attr(G, "src").replace("http:", ""));
} else {
if (r === Math.floor(A / 2)&&j.has(j.attr(G, "src"), "https:")&&j.has(j.attr(h.location, "href"), "https:")&&j.attr(G, "data-secure") === "false") {
j.attr(G, "src", "http:" + j.attr(G, "src").replace("https:", ""));
}
}
}
}
}
r++;
if (D < (x.maxitems || 1)&&r < A) {
j.requestTimeout(y, w);
} else {
if (B.hideBadImages!==false) {
j.each(u, function(J, K) {
if (j.isImageBroken(K)) {
v += 1;
}
});
j.each(u, function(J, K) {
if (j.isImageBroken(K)) {
if (x.showPlaceholderImages === false) {
I=_ate.util.parent(K, ".at4-recommended-div-item");
if (I!==h&&I!==h.body) {
I.parentNode.removeChild(I);
}
if (v >= x.maxitems) {
j.addClass(l.hideClass, x.container || x.element);
}
} else {
H=_ate.util.parent(K, ".at4-recommended-item-img");
if (x.hasImage === true&&v < x.maxitems) {
if (H!==h&&H!==h.body) {
j.addClass(t[n] || "", H);
}
C[".at4-recommended-item-placeholder-img"]="";
K.parentNode.removeChild(K);
H.appendChild(f.json2html(C));
} else {
if (x.hasImage === true&&v >= x.maxitems) {
j.addClass(l.hideClass, x.container || x.element);
}
}
}
}
});
}
j.removeClass(l.visibleClass, q);
if (j.isFunction(z)) {
j.requestTimeout(function() {
z();
}, 100);
}
}
}());
return x;
},
mappedDataAttributes: function() {
if (l.mappedDataAttributes.cachedOptions) {
return l.mappedDataAttributes.cached;
}
var m={};
j.each(l.defaultOptions, function(p, n) {
j.each(n, function(q, r) {
m[q.toLowerCase()]=q;
});
});
l.mappedDataAttributes.cached=m;
return m;
},
drawerIsVisible: false,
parentElement: document.body,
pageConfigs: []
};
return l;
}(g.qwery, g.rAF, g.utils);
g.layerFactory=function(l, b, k) {
var j=l.layerList,
d={
create: function(G, r, x, q) {
if (!k.isPlainObject(r)) {
return;
}
var n, C=function() {
for (var H in r) {
if (r.hasOwnProperty(H)) {
this[H]=r[H];
}
}
}, E=e.addthis_config || {}, t={}, w=r.namespace,
p=r.basename,
y={}, B={}, s={}, v={}, D={}, u={}, z=j[w][p].__numCalls__,
m={}, A={}, F;
if (w === "addthis") {
k.each(q, function(I, H) {
if (k.isUndefined(j[w][I])) {
m[I]=H;
} else {
A[I]=H;
}
});
} else {
k.each(q, function(I, H) {
if (k.isUndefined(j[w])) {
m[I]=H;
} else {
A[I]=H;
}
});
}
if (w === "addthis") {
t=k.extend(k.extend(k.cloneObject(m), k.cloneObject(l.defaultOptions[p])) || {}, k.extend({
layers: A
}, k.cloneObject(x)));
} else {
t=k.extend(k.extend(k.cloneObject(m), k.cloneObject(l.defaultOptions[w][p])) || {}, k.extend({
layers: A
}, k.cloneObject(x)));
}
if (k.isString(r.inheritsFrom)&&r.inheritsFrom.length) {
y.names=r.inheritsFrom.split(".");
y.namespace=y.names[0];
y.basename=y.names[1];
if (y.namespace&&y.basename&&k.isPlainObject(j[w][p])) {
B=k.cloneObject(j[y.namespace][y.basename]);
u=k.extend(B, r);
v=k.cloneObject(y.namespace === "addthis" ? l.defaultOptions[y.basename] : l.defaultOptions[y.namespace][y.basename]);
s=k.extend(v, t);
} else {
if (y.namespace&&!y.basename) {
B=j.addthis[y.namespace];
if (!B) {
return;
}
u=j[w][p]=k.extend(k.cloneObject(B), r);
v=k.cloneObject(l.defaultOptions[y.namespace]);
s=k.extend(v, t);
}
}
C=function() {
for (var H in u) {
if (u.hasOwnProperty(H)) {
this[H]=u[H];
}
}
};
}
j[w][p].__numCalls__=k.isUndefined(z) || r.multipleCalls!==true ? 1 : z + 1;
C.prototype=l;
F=new C();
F.element=F.element || "#addthis-smartlayers-" + G;
if (j[w][p].__numCalls__ > 1) {
F.element=F.element + j[w][p].__numCalls__;
}
F.__numCalls__=j[w][p].__numCalls__;
F.elementSelector=F.element;
F.name=G;
F.mobile=k.mobile();
F._super=l;
F.inheritedObj=B;
if (k.isString(F.parentElement)) {
F.parentElement=b(F.parentElement)[0];
}
if (r.inheritsFrom) {
F.options=s;
} else {
F.options=t;
}
F.options.pubid=F.options.altRecommendedPubId || F.options.pubid || e.addthis_pub || E.pubid || "";
d.testAgainstRules.call(F);
if (k.mobile()&&F.options.mobile === false || k.desktop()&&F.options.desktop === false) {
return false;
}
F.qwery=b;
F.utils=k;
F.rendered=false;
F.device=F.device || "both";
if (F.options.elements) {
F.isInlineLayer=true;
}
if (!x.__hideOnHomepage || e.location.pathname!=="/"&&e.location.pathname!=="") {
F.create();
if (F.async === true || k.isFunction(F.prerender)) {
l.preRender.call(F);
}
F.render();
}
k.trigger("addthis.layers." + this.name + ".loaded", c, this);
k.trigger("addthis.layer.loaded", {
layer: F
});
e.addthis.layers.active_layers=e.addthis.layers.active_layers || {};
e.addthis.layers.active_layers[w]=e.addthis.layers.active_layers[w] || {};
e.addthis.layers.active_layers[w][p]=F;
},
testAgainstRules: function() {
var n=this,
m=n.options;
n.rules=function() {
var p=m.rules || m.rule;
if (k.isArray(p)) {
return p;
} else {
if (k.isPlainObject(p)) {
return [p];
} else {
return [];
}
}
}();
k.decisionEngine.run.call(n, n.rules);
n.isMatch=k.isPlainObject(n.matchObject)&&!k.isEmptyObject(n.matchObject) || n.options.alwaysShow === true ? true : false;
n.options=k.extend(n.options, k.extend(n.options["default"] || {}, n.matchObject || {}));
}
};
return d;
}(g.layer, g.qwery, g.utils);
g.api=function(d, n, p, m) {
var l=p.layerList,
b={}, j={
createPlugin: function(q, y) {
var w=q.split("."),
u=w[0],
x=w[1],
B=u + "-" + x,
z="." + B,
A=n.extend({
namespace: u,
basename: x,
fullname: B,
eventnamespace: z
}, y),
v, r, s=d("." + A.inlineClass);
if (!u) {
n.warn("You must provide a namespace for your AddThis Smart Layers plugin");
return;
} else {
if (!x) {
n.warn("You must provide a basename for your AddThis Smart Layers plugin");
return;
} else {
if (!n.isPlainObject(y)) {
n.warn("You must provide an object to create your AddThis Smart Layers plugin");
return;
} else {
if (u === "addthis") {
n.warn("You cannot use the \"addthis\" namespace for your AddThis Smart Layers plugin");
return;
} else {
if (l[u]&&l[u][x]) {
n.warn("There is already an AddThis Smart Layers plugin with a(n) \"" + u + "\" namespace and a(n) \"" + x + "\" basename");
return;
} else {
if (l[u]) {
l[u][x]=A;
} else {
l[u]={};
l[u][x]=A;
}
p.defaultOptions[u]=p.defaultOptions[u] || {};
p.defaultOptions[u][x]=A.options || {};
addthis.addEventListener("addthis.layers" + z, function(C) {
v=C.target.options || {};
r=C.target.extendedOptions || {};
j.setupLayer({
name: B,
props: A,
multipleCalls: A.multipleCalls,
ops: v,
extendedOptions: r,
elems: v.elements,
namespace: u,
basename: x
});
});
}
}
}
}
}
if (s.length) {
var t={};
t[u]={};
t[u][x]=true;
addthis.layers(t);
}
},
setupLayer: function(x) {
var A=x.props,
s=x.elems,
y=!! (!s&&(A&&A.inlineClass)),
r=x.name,
v=x.namespace,
z=x.basename,
u=x.ops,
t=x.extendedOptions,
B=x.multipleCalls,
q;
s=function() {
if (y) {
return "." + A.inlineClass;
} else {
if (s) {
return s;
}
}
}();
if (n.isString(s)) {
q=d(s);
}
if (n.isUndefined(s) || q.length === 0) {
m.create(r, A, u, t);
} else {
if (q.length === 1) {
w(q[0]);
} else {
if (q.length > 1) {
if (B!==true) {
if (n.isUndefined(l[v][z].__numCalls__)) {
w(q[0]);
}
} else {
if (B === true) {
if (n.isArray(q)) {
n.each(q, function(D, C) {
w(C);
});
}
}
}
}
}
}
function w(D) {
if (n.isElement(D)) {
A.parentElement=D;
}
if (y) {
var E=n.filter(D.attributes, function(F) {
return /^data-/.test(F.name);
}, D.attributes),
C=n.mobile() ? "mobile" : "desktop";
u=function() {
var H={}, G, F;
n.each(E, function(I, J) {
G=function() {
var K=(J.name || "").replace("data-", "");
K=p.mappedDataAttributes()[K] ? p.mappedDataAttributes()[K] : K;
return K;
}();
F=function() {
var K=J.value;
if (K === "false") {
return false;
} else {
if (K === "true") {
return true;
} else {
if (n.isNumeric(K)) {
return Number(K);
} else {
return K;
}
}
}
}();
H[G]=F;
});
return H;
}();
if (C === "desktop"&&u.desktop === false) {
return;
} else {
if (C === "mobile"&&u.mobile === false) {
return;
}
}
}
m.create(r, A, u, t);
}
},
addthisLayer: function(q, s) {
var r="addthis",
t=q;
l[r]=l[r] || {};
l[r][t]=s;
addthis.addEventListener("addthis.layers." + q, function(x) {
var u=x.target.name,
w=n.extend(x.target.props, {
namespace: r,
basename: t
}),
v=x.target.options || {}, y=x.target.extendedOptions || {};
j.setupLayer({
name: u,
props: w,
multipleCalls: w.multipleCalls,
ops: v,
extendedOptions: y,
elems: v.elements,
namespace: r,
basename: t
});
});
},
SmartLayers: function k(q, v) {
if (n.isString(q)&&n.isPlainObject(v)&&!n.isEmptyObject(v)) {
j.createPlugin.apply(this, arguments);
return;
}
var u={}, t={
_init: function(y, w) {
if (!k.initialized) {
this._globalEventHandlers();
}
var x=t._setDefaultOptions(y);
t._createLayers(y, x, function(z) {
if (n.isFunction(w)) {
w(x, z);
}
});
},
_globalEventHandlers: function() {
n.bindEvents(p.globalEvents || {});
if (!n.mobile()) {
n.bindEvents(p.desktopEvents || {});
}
return this;
},
_setDefaultOptions: function(y) {
var x=n.cloneObject(p.defaultOptions);
var w=y.responsive;
x.domain=h.location.host;
if (!n.mobile()&&w!==i) {
if (n.isPlainObject(w)) {
n.extend(x, w);
} else {
if (w === false) {
x.responsive=w;
}
}
}
n.each(x, function(A, B) {
var z=B;
if (y[A] || y[A] === "") {
if (n.isPlainObject(z)) {
n.extend(z, y[A]);
} else {
x[A]=y[A];
}
}
});
return x;
},
_createLayers: function(B, y, G) {
var A=B.responsive,
C=p.layers(),
F, D, w=n.mobile() ? "mobile" : "desktop",
E=function() {
var H={};
n.each(l, function(I, J) {
if (I!=="addthis") {
H[I]=J;
}
});
return H;
}(),
z=[];
p.language=((e._atw || {}).conf || {}).ui_language || _ate.jlng() || "en";
if (p.language != "en") {
n.each(p.translationIds, function(I, H) {
n.each(H, function(K, J) {
if (p.defaultOptions[I]&&p.defaultOptions[I][K]) {
p.defaultOptions[I][K]=_ate._t(p.defaultOptions[I][K], J);
}
});
});
}
F=function(I) {
var J=false,
H;
n.each(C, function(K) {
if (B[K] || I) {
p.enabledLayers[K]=true;
J=true;
H=C[K].split(",");
n.each(H, function(M, L) {
if (B[L]!==false) {
if (l.addthis[L].plugin!==true || l.addthis[L].plugin === true&&B[L]!==i) {
u[L]=true;
}
}
});
}
});
n.each(l, function(K, L) {
if (K === "addthis") {
n.each(L, function(N, M) {
if (B[N]) {
J=true;
}
});
} else {
if (B[K]) {
J=true;
}
}
});
return J;
};
if (!F(false)) {
F(true);
}
if ((n.isEmptyObject(B)&&B.mobile === i || B.share!==i&&B.share!==false || B.follow!==i&&B.follow!==false)&&B.responsive!==false&&w === "desktop"&&!_ate.bro.ie6&&!_ate.bro.ie7&&!n.isIEQuirksMode()) {
var x=B.mobile || true;
u=n.extend(u, {
mobile: true
});
B=n.extend(B, {
mobile: x
});
}
if (n.isPlainObject(E)) {
u=n.extend(n.cloneObject(E), u);
}
n.each(u, function(I) {
var J=I,
N=l[J],
M, L, K, H;
if (E[J]) {
k[J]=k[J] || {};
B[J]=B[J] || {};
n.each(N, function(O, P) {
K=P;
L=K.basename;
H=K.eventnamespace;
if (B[J][L]!==i&&B[J][L]!==false) {
if (!k[J][L] || K.multipleCalls === true) {
if (B[J]&&B[J][L]) {
if (B[J][L][w]!==false) {
z.push(L);
n.trigger("addthis.layers" + H, {
options: B[J][L],
extendedOptions: y
});
}
} else {
if (B[J][L]!==false) {
z.push(L);
n.trigger("addthis.layers" + H, {
options: B[J][L],
extendedOptions: y
});
}
}
k[J][L]=true;
}
}
});
} else {
if (!k[I] || l.addthis&&l.addthis[I]&&l.addthis[I].multipleCalls === true) {
if (B[I]) {
if (B[I][w]!==false) {
z.push(I);
n.trigger("addthis.layers." + I, {
name: I,
props: l.addthis[I],
options: B[I],
extendedOptions: y
});
}
} else {
if (B[I]!==false) {
z.push(I);
n.trigger("addthis.layers." + I, {
name: I,
props: l.addthis[I],
options: B[I],
extendedOptions: y
});
}
}
}
k[I]=true;
}
});
if (n.isFunction(G)) {
G(z);
}
},
destroy: function(E) {
if (n.isUndefined(e.addthis.layers.active_layers)) {
return;
}
var D, y=n.isString(E),
H=(E || "").split("."),
B=H.length > 1 ? H[0] : "addthis",
I=H.length > 1 ? H[1] : E,
z=e.addthis.layers.active_layers,
C, x, G, w, F, A;
if (y&&(!z[B] || !z[B][I])) {
return "not an active layer";
}
C=y ? [z[B][I]] : z[B];
F=y ? C.inlineClass ? d("." + C.inlineClass) : _ate.util.parent(C[0].element, ".addthis-smartlayers") === h ? [C[0].element] : [_ate.util.parent(C[0].element, ".addthis-smartlayers")] : d(".addthis-smartlayers");
n.each(C, function(K, J) {
if (n.isPlainObject(J)&&!n.isEmptyObject(J)) {
x=J.basename;
G=J.element;
w=n.extend(J.events || {}, J.customEvents || {});
n.trigger(B + "." + x + ".destroy", c, {});
n.bindEvents.call(J, w, "remove");
k[x]=false;
J.rendered=false;
n.removeElement(J.placeholder);
}
});
n.each(F, function(J, K) {
G=K;
n.removeElement(G);
});
if (y) {
e.addthis.layers.active_layers[B]=e.addthis.layers.active_layers[B] || {};
if (e.addthis.layers.active_layers[B][I]) {
delete e.addthis.layers.active_layers[B][I];
}
if (n.isEmptyObject(e.addthis.layers.active_layers) || !e.addthis.layers.active_layers) {
e.addthis.layers.active_layers={};
k.initialized=false;
p.initialized=false;
p.welcomeBarAndMobile.alreadyCompleted=false;
}
if (B === "addthis"&&I === "welcome") {
p.welcomeBarAndMobile.alreadyCompleted=false;
}
} else {
e.addthis.layers.active_layers={};
k.initialized=false;
p.initialized=false;
p.welcomeBarAndMobile.alreadyCompleted=false;
}
return this;
}
};
b=n.publicApi(t);
if (_ate.ipc&&!q.pi) {
if (q.cfs) {
if (q._default&&q._default.widgets) {
var r={};
n.each(q._default.widgets, function(w, x) {
if (p.pcoMap[w]) {
r[p.pcoMap[w]]=x;
}
});
r.pi=true;
addthis.layers(r);
} else {
_ate.ipc=false;
var s=p.pageConfigs;
n.each(s, function(x, w) {
addthis.layers(w);
});
p.pageConfigs=[];
}
} else {
p.pageConfigs.push(q);
}
return;
}
if (n.isFunction(q)) {
q.call(b, b);
return;
}
q=n.isPlainObject(q)&&!n.isEmptyObject(q) ? q : {};
t._init(q, function(A, w) {
var z=w.length,
y=0,
x=0;
if (z === 0) {
if (n.isFunction(v)) {
v.call(b, b);
}
n.trigger("addthis.layers.loaded");
n.trigger("addthis.layers.rendered");
} else {
_ate.ed.addEventListener("addthis.layer.loaded", function(B) {
x += 1;
if (x === z) {
n.trigger("addthis.layers.loaded");
}
});
_ate.ed.addEventListener("addthis.layer.rendered", function(B) {
y += 1;
if (y === z) {
if (n.isFunction(v)) {
v.call(b, b);
}
n.trigger("addthis.layers.rendered");
}
});
k.initialized=true;
k.onpage=true;
}
return b;
});
}
};
return j;
}(g.qwery, g.utils, g.layer, g.layerFactory);
g.layers_recommended=function(j, d, k, b) {
d.addthisLayer("recommended", {
pco: "smlre-1.0",
element: "#at4-recommended",
device: "both",
async: true,
status: "open",
prerender: function() {
var l={};
l["#at4-" + this.basename + "-outer-container.at4-" + this.basename + "-outer-container"]="";
return f.json2html(l);
},
render: function() {
this.queueTrending(this.options.pubid, this.options.domain, function() {
this.superMethod("render");
});
return this;
},
generateJson: function() {
if (this.name === "recommendedbox"&&this.parentElement.__containsRecommended__ === true) {
return;
}
var x=this,
q=x.options,
w=q.size === "medium" ? ".at-medium" : "",
s=this.inlineClass ? ".at-inline" : "",
v=x.maxitems=function() {
var J=q.maxitems,
O, N, L, I, K, H={}, M;
if (j.isString(J)) {
if (q.orientation === "vertical") {
N=x.parentElement.offsetHeight;
if (N < 3) {
return 4;
}
H[".temp-elem.at4-recommended" + w + s]={
".at4-recommended-container.at4-recommended-vertical": {
".at4-recommended-item": ""
}
};
M=f.json2html(H);
a.appendChild(M);
I=b(".temp-elem.at4-recommended" + w + s + " .at4-recommended-vertical .at4-recommended-item")[0];
K=I.offsetHeight;
M.parentElement.removeChild(M);
if (j.isElement(M)&&j.isElement(M.parentNode)) {
M.parentNode.removeChild(M);
}
if (N < K) {
return 4;
} else {
return Math.floor(N / K);
}
} else {
O=x.parentElement.offsetWidth;
H[".temp-elem.at4-recommended" + w + s]={
".at4-recommended-container.at4-recommended-horizontal": {
".at4-recommended-item": ""
}
};
M=f.json2html(H);
a.appendChild(M);
I=b(".temp-elem.at4-recommended" + w + s + " .at4-recommended-horizontal .at4-recommended-item")[0];
L=I.offsetWidth;
if (j.isElement(M)&&j.isElement(M.parentNode)) {
M.parentNode.removeChild(M);
}
if (O < L) {
return 4;
} else {
return Math.floor(O / L);
}
}
} else {
if (j.isNumber(J)) {
return q.maxitems;
}
}
}(),
p=function() {
if (q.orientation === "vertical") {
return ".at4-recommended-vertical";
} else {
return ".at4-recommended-horizontal";
}
}(),
G=".at4-recommended-" + this.name + (this.options.textonly === true || this.options.textonly === "true" ? " .at4-recommended-text-only" : ""),
z=p + "-logo",
r=x.trendingLinksJson=this.superMethod("generateTrendingJson", this.pco, v),
n={
role: "region",
"aria-labelledby": "at-recommended-label"
}, B={}, y={}, F=k.themes[q.theme] ? k.themes[q.theme] : "",
C=x.position ? x.position === "right" ? ".at4-" + x.basename + "-right" : ".at4-" + x.basename + "-left" : "",
u=x.position === "right" ? "at-right" : "at-left",
A=q.animationType ? "." + x.basename + "-" + q.animationType : "",
E={}, l={}, D={}, m=this.position === "left" ? "right" : "left",
t=[];
if (r&&r.length) {
if (q.title) {
n["h3.at-recommended-label" + (q.orientation === "vertical" ? ".at-vertical" : "")]={
html: q.title
};
} else {
n["h3.at-recommended-label." + k.hiddenClass]={
html: "AddThis Recommended"
};
}
if (x.showCloseButton === true) {
n["button.at4-closebutton." + x.basename + "-close"]={
html: "x",
title: "Close"
};
}
n[".at4-recommended-container" + p]=r;
n[".at-logo" + z]={
".at4-logo-container": {
"a.at4-logo": {
href: "//www.addthis.com/?utm_source=dyntr&utm_medium=img&utm_content=AT_main_WT&utm_campaign=AT_main",
target: "_blank",
html: "AddThis"
}
}
};
if (x.closeControl) {
E[".at4-arrow.at-" + x.position]={
title: "Close"
};
n["#at4-" + x.basename + "-close-control.at4-recommendedside-control." + k.hideClass]=E;
}
B[this.elementSelector + ".at4-recommended." + u + A + F + G + w + s]=n;
_ate.track.avp(this.elementSelector, this.pco, "ttnl=" + v);
} else {
B.div="";
}
x.parentElement.__containsRecommended__=true;
if (x.openControl) {
l[".at4-arrow.at-" + m]={
title: "Open"
};
D["#at4-" + x.basename + "-open-control.at4-recommendedside-control." + k.hideClass + F]=l;
}
D=j.isEmptyObject(D) ? false : D;
if (D!==false) {
t.push(D);
}
t.push(B);
y[".at4-" + x.basename + "-outer" + C]=t;
return y;
},
imageResizing: function(p) {
var m=this,
n=b(m.elementSelector + " .at-recommendedTitle"),
l=b(m.elementSelector + " .at-tli");
m.superMethod("imageResizer", n, l, p);
}
});
}(g.utils, g.api, g.layer, g.qwery);
g.layers_drawer=function(k, j, m, d, l, b) {
j.addthisLayer("drawer", {
device: "desktop",
plugin: true,
showPlaceholderImages: false,
requiresImage: true,
status: "closed",
pco: "cod-1.0",
element: "#at-drawer",
inheritsFrom: "recommended",
openControl: "#at4-drawer-arrow",
showCloseButton: true,
aliasNames: ["drawer"],
prerender: function() {
var v=this,
x=v.options,
w={}, p={}, n=this.position === "left" ? ".at4-drawer-left" : ".at4-drawer-right",
t=_ate.bro.ie6 || _ate.bro.ie7 || _ate.bro.ie8,
r=this.position === "left" ? t ? "right" : "left" : t ? "left" : "right",
s=".at4-arrow.at-" + r,
u=t ? ".at4-drawer-old-browsers" : ".at4-drawer-modern-browsers",
q=m.themes[x.theme] ? m.themes[x.theme] : "";
p["#at4-drawer-arrow" + s + "." + m.hideClass + u]="";
w["div#at4-drawer-outer-container" + n + q]=p;
return f.json2html(w);
},
events: {
"!#at4-drawer-arrow mouseenter": function(p, n) {
this.showdrawer();
},
"!#at4-drawer-arrow click": function(p, n) {
this.showdrawer();
},
".drawer-close click": function(p, n) {
this.hidedrawer();
n.blur();
},
mouseleave: function(p, n) {
this.hidedrawer();
},
"addthis.keydown.esc": function(p, n) {
this.hidedrawer();
}
},
showdrawer: function() {
var t=this,
w=t.options,
n=t.element,
v=d("html")[0],
p=w.animationType,
s=t.position,
u=s === "left" ? "right" : "left",
r=addthis.layers.active_layers.addthis,
q=r ? r.whatsnext : false;
if (s === "right"&&q) {
k.trigger("addthis.layers.whatsnext.hide", c, this);
}
k.addClass("at4-drawer-shown", t.container);
k.addClass(m.hideClass, t.openControl);
if (w.animationType === "push") {
l(function() {
if (k.isElement(v)) {
k.addClass("at4-drawer-push-animation-" + s, v);
k.addClass("at4-drawer-push-content-" + s + "-back", v);
k.requestTimeout(function() {
k.addClass("at4-drawer-push-content-" + u, v);
}, 0);
}
k.removeClass(m.hideClass, n);
k.removeClass("at4-drawer-push-animation-" + s, n);
k.removeClass("at4-drawer-push-animation-" + s + "-back", n);
k.requestTimeout(function() {
k.addClass("at4-drawer-push-animation-" + s, n);
}, 0);
});
} else {
t.show(t.element, w.showAnimation);
}
m.drawerIsVisible=true;
},
hidedrawer: function() {
var s=this,
w=s.options,
n=s.element,
v=s.openControl,
u=d("html")[0],
p=w.animationType,
r=s.position,
q=m.hideClass,
t=r === "left" ? "right" : "left";
if (w.animationType === "push") {
l(function() {
if (k.isElement(u)) {
k.addClass("at4-drawer-push-content-" + r + "-back", u);
k.requestTimeout(function() {
k.removeClass("at4-drawer-push-content-" + t, u);
}, 0);
}
k.requestTimeout(function() {
k.addClass("at4-drawer-push-animation-" + r + "-back", n);
}, 0);
k.removeClass(q, v);
});
} else {
s.hide(n, w.hideAnimation, function() {
k.removeClass(q, v);
});
}
k.requestTimeout(function() {
k.removeClass("at4-drawer-shown", s.container);
}, 400);
m.drawerIsVisible=false;
}
});
}(g.utils, g.api, g.layer, g.qwery, g.rAF, g.layers_recommended);
g.layers_follow=function(j, d, k, b) {
d.addthisLayer("follow", {
create: function() {
var l=this,
m=l.options || false;
if (!m || !m.services || !m.services.length) {
l.status="disabled";
}
l.superMethod("create");
return this;
},
device: "desktop",
pco: "smlfw-1.0",
status: "open",
locked: false,
plugin: true,
element: "#at4-follow",
closeControl: "#at4-fcc",
openControl: "#at4-foc",
events: {
"!.at4-follow-outer mouseenter": function(m, l) {
this.showControl(this.closeControl);
},
"!.at4-follow-outer mouseleave": function(m, l) {
this.hideControl(this.closeControl);
},
"!#at4-fcc click": function(m, l) {
j.trigger("addthis.layers.follow.hide", c, this);
this.locked=true;
j.preventDefaultEvent(m);
},
"!#at4-foc click": function(m, l) {
j.trigger("addthis.layers.follow.show", c, this);
this.locked=true;
j.preventDefaultEvent(m);
},
"addthis.layers.follow.show": function(p, n) {
var m=this,
l=m.options;
m.hide(m.openControl, l.hideAnimation);
m.show();
m.status="open";
},
"addthis.layers.follow.hide": function(p, n) {
var m=this,
l=m.options;
m.hide();
m.show(m.openControl, l.showAnimation);
m.status="closed";
},
"addthis.layers.scroll": function(p, n) {
var m=j.scrollPercentage(),
l=this.status;
if (!this.locked) {
if (m < 0.25) {
j.trigger("addthis.layers.follow.show", c, this);
} else {
if (m > 0.25) {
j.trigger("addthis.layers.follow.hide", c, this);
}
}
}
},
".at-follow-btn keydown": function(n, m) {
if (j.KEYCODES[n.keyCode] === "enter") {
var l=this.events[".at-follow-btn click"].call(this, n, m.childNodes[0]);
if (l.svc === "twitter") {
j.preventDefaultEvent(n);
}
}
},
".at-follow-btn click": function(q, p) {
var n=j.attr(p, "svc"),
r=j.attr(p, "svcId"),
m=this.superMethod("pco"),
l={
service: n,
id: r,
pco: m
};
this.superMethod("follow", n, l, m);
if (n === "twitter") {
j.preventDefaultEvent(q);
}
return l;
}
},
generateJson: function() {
var p={}, m=[],
t=[],
n={}, q={}, y=this.options || {}, u=this.themes[y.theme] ? this.themes[y.theme] : "",
w, A=y.services,
C;
if (!A || !A.length) {
return false;
}
n["div#at4-foc.at-follow-open-control" + u + "." + k.hideClass]={
"div.at4-arrow.at-left": {
html: "Show",
title: "Show"
}
};
q["div#at4-fcc.at4-arrow.at-right"]={
html: "Hide",
title: "Hide"
};
m.push({
"div#at4-fcc.at4-follow-close-control": q
});
if (y.title) {
t.push({
"span.at-follow-label": y.title
});
}
for (C in A) {
if (A.hasOwnProperty(C)) {
var v={}, x=A[C].service,
B=A[C].id,
l=A[C].usertype,
r=_ate.share.gfu(x, B, l),
z=j.isIEQuirksMode() ? "q" : "";
if (x&&B&&r) {
v["span.at4-icon-fw.aticon-" + x + z]={
html: this.followServices[x] || "",
svc: x,
svcId: B,
title: "Follow on " + this.followServices[x]
};
if (x != "twitter") {
v.href=r;
v.target="_blank";
} else {
v.href="#";
}
t.push({
"a.aticon.at-follow-btn": v
});
}
}
}
m.push({
"div.at4-follow-container.addthis_24x24_style": t
});
p["div#at4-follow.at4-follow.at4-follow-24" + u]={
role: "region",
"aria-labelledby": "at4-follow-label",
"h2#at4-follow-label": {
html: "Follow"
},
"div.at4-follow-inner": m
};
w=[p, n];
return {
"div.at4-follow-outer": w
};
}
});
}(g.utils, g.api, g.layer, g.qwery);
g.iScroll=function(b) {
var z=Math,
n=function(m) {
return m >> 0;
}, D=/webkit/i.test(navigator.appVersion) ? "webkit" : /firefox/i.test(navigator.userAgent) ? "Moz" : "opera" in window ? "O" : "",
E=/android/gi.test(navigator.appVersion),
s=/iphone|ipad/gi.test(navigator.appVersion),
k=/playbook/gi.test(navigator.appVersion),
w=/hp-tablet/gi.test(navigator.appVersion),
u="WebKitCSSMatrix" in window&&"m11" in new WebKitCSSMatrix(),
C="ontouchstart" in window&&!w,
p=D + "Transform" in document.documentElement.style,
q=s || k,
x=function() {
return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(m) {
return setTimeout(m, 17);
};
}(),
v=function() {
return window.cancelRequestAnimationFrame || window.webkitCancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout;
}(),
r="onorientationchange" in window ? "orientationchange" : "resize",
j=C ? "touchstart" : "mousedown",
y=C ? "touchmove" : "mousemove",
l=C ? "touchend" : "mouseup",
B=C ? "touchcancel" : "mouseup",
d="translate" + (u ? "3d(" : "("),
t=u ? ",0)" : ")",
A=function(G, m) {
var H=this,
I=document,
F;
H.wrapper=typeof G=="object" ? G : I.getElementById(G);
H.wrapper.style.overflow="hidden";
H.scroller=H.wrapper.children[0];
H.options={
hScroll: true,
vScroll: true,
x: 0,
y: 0,
bounce: true,
bounceLock: false,
momentum: true,
lockDirection: true,
useTransform: true,
useTransition: false,
onRefresh: null,
onBeforeScrollStart: function(J) {
J.preventDefault();
},
onScrollStart: null,
onBeforeScrollMove: null,
onScrollMove: null,
onBeforeScrollEnd: null,
onScrollEnd: null,
onTouchEnd: null,
onDestroy: null
};
for (F in m) {
H.options[F]=m[F];
}
H.x=H.options.x;
H.y=H.options.y;
H.options.useTransform=p ? H.options.useTransform : false;
H.options.hScrollbar=H.options.hScroll&&H.options.hScrollbar;
H.options.vScrollbar=H.options.vScroll&&H.options.vScrollbar;
H.options.useTransition=q&&H.options.useTransition;
H.scroller.style[D + "TransitionProperty"]=H.options.useTransform ? "-" + D.toLowerCase() + "-transform" : "top left";
H.scroller.style[D + "TransitionDuration"]="0";
H.scroller.style[D + "TransformOrigin"]="0 0";
if (H.options.useTransition) {
H.scroller.style[D + "TransitionTimingFunction"]="cubic-bezier(0.33,0.66,0.66,1)";
}
if (H.options.useTransform) {
H.scroller.style[D + "Transform"]=d + H.x + "px," + H.y + "px" + t;
} else {
H.scroller.style.cssText += ";position:absolute;top:" + H.y + "px;left:" + H.x + "px";
}
H.refresh();
H._bind(r, window);
H._bind(j);
if (!C) {
H._bind("mouseout", H.wrapper);
}
};
A.prototype={
enabled: true,
x: 0,
y: 0,
steps: [],
scale: 1,
handleEvent: function(F) {
var m=this;
switch (F.type) {
case j:
if (!C&&F.button!==0) {
return;
}
m._start(F);
break;
case y:
m._move(F);
break;
case l:
case B:
m._end(F);
break;
case r:
m._resize();
break;
case "mouseout":
m._mouseout(F);
break;
case "webkitTransitionEnd":
m._transitionEnd(F);
break;
}
},
_resize: function() {
this.refresh();
},
_pos: function(m, F) {
m=this.hScroll ? m : 0;
F=this.vScroll ? F : 0;
if (this.options.useTransform) {
this.scroller.style[D + "Transform"]=d + m + "px," + F + "px" + t + " scale(" + this.scale + ")";
} else {
m=n(m);
F=n(F);
this.scroller.style.left=m + "px";
this.scroller.style.top=F + "px";
}
this.x=m;
this.y=F;
},
_start: function(I) {
var H=this,
F=C ? I.touches[0] : I,
G, m, J;
if (!H.enabled) {
return;
}
if (H.options.onBeforeScrollStart) {
H.options.onBeforeScrollStart.call(H, I);
}
if (H.options.useTransition) {
H._transitionTime(0);
}
H.moved=false;
H.animating=false;
H.zoomed=false;
H.distX=0;
H.distY=0;
H.absDistX=0;
H.absDistY=0;
H.dirX=0;
H.dirY=0;
if (H.options.momentum) {
if (H.options.useTransform) {
G=getComputedStyle(H.scroller, null)[D + "Transform"].replace(/[^0-9-.,]/g, "").split(",");
m=G[4] * 1;
J=G[5] * 1;
} else {
m=getComputedStyle(H.scroller, null).left.replace(/[^0-9-]/g, "") * 1;
J=getComputedStyle(H.scroller, null).top.replace(/[^0-9-]/g, "") * 1;
}
if (m != H.x || J != H.y) {
if (H.options.useTransition) {
H._unbind("webkitTransitionEnd");
} else {
v(H.aniTime);
}
H.steps=[];
H._pos(m, J);
}
}
H.startX=H.x;
H.startY=H.y;
H.pointX=F.pageX;
H.pointY=F.pageY;
H.startTime=I.timeStamp || Date.now();
if (H.options.onScrollStart) {
H.options.onScrollStart.call(H, I);
}
H._bind(y);
H._bind(l);
H._bind(B);
},
_move: function(K) {
var H=this,
F=C ? K.touches[0] : K,
G=F.pageX - H.pointX,
m=F.pageY - H.pointY,
L=H.x + G,
J=H.y + m,
I=K.timeStamp || Date.now();
if (H.options.onBeforeScrollMove) {
H.options.onBeforeScrollMove.call(H, K);
}
H.pointX=F.pageX;
H.pointY=F.pageY;
if (L > 0 || L < H.maxScrollX) {
L=H.options.bounce ? H.x + G / 2 : L >= 0 || H.maxScrollX >= 0 ? 0 : H.maxScrollX;
}
if (J > 0 || J < H.maxScrollY) {
J=H.options.bounce ? H.y + m / 2 : J >= 0 || H.maxScrollY >= 0 ? 0 : H.maxScrollY;
}
H.distX += G;
H.distY += m;
H.absDistX=z.abs(H.distX);
H.absDistY=z.abs(H.distY);
if (H.absDistX < 6&&H.absDistY < 6) {
return;
}
if (H.options.lockDirection) {
if (H.absDistX > H.absDistY + 5) {
J=H.y;
m=0;
} else {
if (H.absDistY > H.absDistX + 5) {
L=H.x;
G=0;
}
}
}
H.moved=true;
H._pos(L, J);
H.dirX=G > 0 ? -1 : G < 0 ? 1 : 0;
H.dirY=m > 0 ? -1 : m < 0 ? 1 : 0;
if (I - H.startTime > 300) {
H.startTime=I;
H.startX=H.x;
H.startY=H.y;
}
if (H.options.onScrollMove) {
H.options.onScrollMove.call(H, K);
}
},
_end: function(K) {
if (C&&K.touches.length != 0) {
return;
}
var I=this,
O=C ? K.changedTouches[0] : K,
L, N, G={
dist: 0,
time: 0
}, m={
dist: 0,
time: 0
}, H=(K.timeStamp || Date.now()) - I.startTime,
M=I.x,
J=I.y,
F;
I._unbind(y);
I._unbind(l);
I._unbind(B);
if (I.options.onBeforeScrollEnd) {
I.options.onBeforeScrollEnd.call(I, K);
}
if (!I.moved) {
if (C) {
L=O.target;
while (L.nodeType != 1) {
L=L.parentNode;
}
if (L.tagName != "SELECT"&&L.tagName != "INPUT"&&L.tagName != "TEXTAREA") {
N=document.createEvent("MouseEvents");
N.initMouseEvent("click", true, true, K.view, 1, O.screenX, O.screenY, O.clientX, O.clientY, K.ctrlKey, K.altKey, K.shiftKey, K.metaKey, 0, null);
N._fake=true;
L.dispatchEvent(N);
}
}
I._resetPos(200);
if (I.options.onTouchEnd) {
I.options.onTouchEnd.call(I, K);
}
return;
}
if (H < 300&&I.options.momentum) {
G=M ? I._momentum(M - I.startX, H, - I.x, I.scrollerW - I.wrapperW + I.x, I.options.bounce ? I.wrapperW : 0) : G;
m=J ? I._momentum(J - I.startY, H, - I.y, I.maxScrollY < 0 ? I.scrollerH - I.wrapperH + I.y : 0, I.options.bounce ? I.wrapperH : 0) : m;
M=I.x + G.dist;
J=I.y + m.dist;
if (I.x > 0&&M > 0 || I.x < I.maxScrollX&&M < I.maxScrollX) {
G={
dist: 0,
time: 0
};
}
if (I.y > 0&&J > 0 || I.y < I.maxScrollY&&J < I.maxScrollY) {
m={
dist: 0,
time: 0
};
}
}
if (G.dist || m.dist) {
F=z.max(z.max(G.time, m.time), 10);
I.scrollTo(n(M), n(J), F);
if (I.options.onTouchEnd) {
I.options.onTouchEnd.call(I, K);
}
return;
}
I._resetPos(200);
if (I.options.onTouchEnd) {
I.options.onTouchEnd.call(I, K);
}
},
_resetPos: function(G) {
var m=this,
H=m.x >= 0 ? 0 : m.x < m.maxScrollX ? m.maxScrollX : m.x,
F=m.y >= 0 || m.maxScrollY > 0 ? 0 : m.y < m.maxScrollY ? m.maxScrollY : m.y;
if (H==m.x&&F==m.y) {
if (m.moved) {
if (m.options.onScrollEnd) {
m.options.onScrollEnd.call(m);
}
m.moved=false;
}
return;
}
m.scrollTo(H, F, G || 0);
},
_mouseout: function(F) {
var m=F.relatedTarget;
if (!m) {
this._end(F);
return;
}
while (m=m.parentNode) {
if (m==this.wrapper) {
return;
}
}
this._end(F);
},
_transitionEnd: function(F) {
var m=this;
if (F.target != m.scroller) {
return;
}
m._unbind("webkitTransitionEnd");
m._startAni();
},
_startAni: function() {
var K=this,
F=K.x,
m=K.y,
I=Date.now(),
J, H, G;
if (K.animating) {
return;
}
if (!K.steps.length) {
K._resetPos(400);
return;
}
J=K.steps.shift();
if (J.x==F&&J.y==m) {
J.time=0;
}
K.animating=true;
K.moved=true;
if (K.options.useTransition) {
K._transitionTime(J.time);
K._pos(J.x, J.y);
K.animating=false;
if (J.time) {
K._bind("webkitTransitionEnd");
} else {
K._resetPos(0);
}
return;
}
G=function() {
var L=Date.now(),
N, M;
if (L >= I + J.time) {
K._pos(J.x, J.y);
K.animating=false;
if (K.options.onAnimationEnd) {
K.options.onAnimationEnd.call(K);
}
K._startAni();
return;
}
L=(L - I) / J.time - 1;
H=z.sqrt(1 - L * L);
N=(J.x - F) * H + F;
M=(J.y - m) * H + m;
K._pos(N, M);
if (K.animating) {
K.aniTime=x(G);
}
};
G();
},
_transitionTime: function(m) {
this.scroller.style[D + "TransitionDuration"]=m + "ms";
},
_momentum: function(L, F, J, m, N) {
var K=0.0006,
G=z.abs(L) / F,
H=G * G / (2 * K),
M=0,
I=0;
if (L > 0&&H > J) {
I=N / (6 / (H / G * K));
J=J + I;
G=G * J / H;
H=J;
} else {
if (L < 0&&H > m) {
I=N / (6 / (H / G * K));
m=m + I;
G=G * m / H;
H=m;
}
}
H=H * (L < 0 ? -1 : 1);
M=G / K;
return {
dist: H,
time: n(M)
};
},
_offset: function(m) {
var G=-m.offsetLeft,
F=-m.offsetTop;
while (m=m.offsetParent) {
G -= m.offsetLeft;
F -= m.offsetTop;
}
return {
left: G,
top: F
};
},
_bind: function(G, F, m) {
(F || this.scroller).addEventListener(G, this, !! m);
},
_unbind: function(G, F, m) {
(F || this.scroller).removeEventListener(G, this, !! m);
},
destroy: function() {
var m=this;
m.scroller.style[D + "Transform"]="";
m._unbind(r, window);
m._unbind(j);
m._unbind(y);
m._unbind(l);
m._unbind(B);
m._unbind("mouseout", m.wrapper);
if (m.options.useTransition) {
m._unbind("webkitTransitionEnd");
}
if (m.options.onDestroy) {
m.options.onDestroy.call(m);
}
},
refresh: function() {
var m=this,
F;
m.wrapperW=m.wrapper.clientWidth;
m.wrapperH=m.wrapper.clientHeight;
m.scrollerW=m.scroller.offsetWidth;
m.scrollerH=m.scroller.offsetHeight;
m.maxScrollX=m.wrapperW - m.scrollerW;
m.maxScrollY=m.wrapperH - m.scrollerH;
m.dirX=0;
m.dirY=0;
m.hScroll=m.options.hScroll&&m.maxScrollX < 0;
m.vScroll=m.options.vScroll&&(!m.options.bounceLock&&!m.hScroll || m.scrollerH > m.wrapperH);
F=m._offset(m.wrapper);
m.wrapperOffsetLeft=-F.left;
m.wrapperOffsetTop=-F.top;
m.scroller.style[D + "TransitionDuration"]="0";
m._resetPos(200);
},
scrollTo: function(m, L, K, J) {
var I=this,
H=m,
G, F;
I.stop();
if (!H.length) {
H=[{
x: m,
y: L,
time: K,
relative: J
}];
}
for (G=0, F=H.length; G < F; G++) {
if (H[G].relative) {
H[G].x=I.x - H[G].x;
H[G].y=I.y - H[G].y;
}
I.steps.push({
x: H[G].x,
y: H[G].y,
time: H[G].time || 0
});
}
I._startAni();
},
scrollToElement: function(m, G) {
var F=this,
H;
m=m.nodeType ? m : F.scroller.querySelector(m);
if (!m) {
return;
}
H=F._offset(m);
H.left += F.wrapperOffsetLeft;
H.top += F.wrapperOffsetTop;
H.left=H.left > 0 ? 0 : H.left < F.maxScrollX ? F.maxScrollX : H.left;
H.top=H.top > 0 ? 0 : H.top < F.maxScrollY ? F.maxScrollY : H.top;
G=G === i ? z.max(z.abs(H.left) * 2, z.abs(H.top) * 2) : G;
F.scrollTo(H.left, H.top, G);
},
disable: function() {
this.stop();
this._resetPos(0);
this.enabled=false;
this._unbind(y);
this._unbind(l);
this._unbind(B);
},
enable: function() {
this.enabled=true;
},
stop: function() {
v(this.aniTime);
this.steps=[];
this.moved=false;
this.animating=false;
}
};
return A;
}(g.utils);
g.layers_mobile=function(j, d, l, k, b) {
d.addthisLayer("mobile", {
create: function() {
var p=this,
r=p.options.layers.share || {}, t=this["options"] || {}, n, s, u, q, m;
this.initialize();
this.position=n=t.buttonBarPosition&&t.buttonBarPosition.toLowerCase() === "top" ? "top" : "bottom";
u=n === "top" ? "slideInDown" : "slideInUp";
m=n === "top" ? "slideOutUp" : "slideOutDown";
p.options=j.extend(t, {
menuShowAnimation: u,
menuHideAnimation: m
});
this.positionClass=this.position === "top" ? ".at4m-dock-top" : ".at4m-dock-bottom";
if (r.services) {
this.personalized=false;
this.services=r.services.replace(/ /g, "").split(",").concat(this.preferredServices);
} else {
this.services=this.preferredServices;
}
return this;
},
initialize: function() {
var p=this,
r, m=e.history.replaceState,
q=e.history.pushState;
if (p.mobile&&m&&q) {
this.history={};
this.history.getState=function() {
if (e.history.state) {
return e.history.state;
} else {
return e.sessionStorage&&(r=e.sessionStorage.getItem("history.state"))&&JSON.parse(r) || null;
}
};
this.history.pushState=function(t, v, s) {
q.call(e.history, t, v, s);
try {
e.sessionStorage.setItem("history.state", JSON.stringify(t));
e.sessionStorage.setItem("history.state:title", v);
e.sessionStorage.setItem("history.state:href", s);
} catch (u) {}
};
this.history.replaceState=function(t, v, s) {
m.call(e.history, t, v, s);
try {
e.sessionStorage.setItem("history.state", JSON.stringify(t));
e.sessionStorage.setItem("history.state:title", v);
e.sessionStorage.setItem("history.state:href", s);
} catch (u) {}
};
this.history.replaceState({
menu: false,
opening: false
}, document.title, e.location.href);
} else {
this.history={};
}
function n(s) {
if (!this.mobile) {
return;
}
this.history.replaceState(s.state, h.title, e.location.href);
if (s.state&&s.state.menu === false&&s.state.opening === true) {
j.trigger("addthis.layers.mobilemenu.hide", c, this);
} else {
if (s.state&&s.state.menu === false&&s.state.empty === true) {
e.history.go(-1);
}
}
if (s.state&&s.state.menu) {
switch (s.state.menu) {
case "share":
p.events["#at4m-sb click"].call(p, s);
break;
case "follow":
p.events["#at4m-fb click"].call(p, s);
break;
}
}
}
this.popStateEventHandler=n;
},
pco: "smlmo-1.0",
device: "mobile",
element: "#at4m-mobile-container",
dock: "#at4m-dock",
dockToggle: "#at4m-dock-toggle",
menu: "#at4m-menu",
menuHeader: "#at4m-menu-head",
menuCloseControl: "#at4m-mcc",
menuBody: "#at4m-services",
innerMenuBody: "#at4m-menu-body",
searchBox: "#at4-searchBox",
searchClear: "#at4-searchClear",
position: "bottom",
positionClass: "",
services: [],
servicesInMenu: {},
personlized: false,
dockClosed: false,
atScroll: false,
isScrolling: false,
isLoading: false,
serviceListPos: 0,
isSearching: false,
mobileBlacklist: {
link: true
},
finalize: function() {
this.element=b(this.element)[0];
this.dock=b(this.dock)[0];
this.dockToggle=b(this.dockToggle)[0];
this.menu=b(this.menu)[0];
this.menuHeader=b(this.menuHeader)[0];
this.menuCloseControl=b(this.closeControl)[0];
this.menuBody=b(this.menuBody)[0];
this.searchBox=b(this.searchBox)[0];
this.searchClear=b(this.searchClear)[0];
this.innerMenuBody=b(this.innerMenuBody)[0];
j.trigger("addthis.layer.rendered", {
layer: this.name
});
return this;
},
events: {
"!window popstate": function(n, m) {
this.popStateEventHandler(n);
},
"#at4m-fb click": function(p, m) {
j.preventDefaultEvent(p);
var n=this.history.getState&&this.history.getState();
this.currentLayerType="follow";
this.menuHeader.innerHTML=_ate._t("Follow", 96);
this.superMethod("hideControl", this.searchBox.parentNode);
if (n === null || n&&n.menu === false) {
if (this.history.replaceState) {
this.history.replaceState({
menu: false,
opening: true
}, h.title, e.location.href);
}
if (this.history.pushState) {
this.history.pushState({
menu: "follow"
}, h.title, e.location.href);
}
} else {
if (this.history.replaceState) {
this.history.replaceState({
menu: "follow"
}, h.title, e.location.href);
}
}
this.resetZoom();
this.generateFollowServices();
this.superMethod("animate", this.menu, this["options"].menuShowAnimation, function() {
this.hideDesktopScrollbar();
});
},
"#at4m-sb click": function(p, m) {
j.preventDefaultEvent(p);
var n=this.history.getState&&this.history.getState();
this.currentLayerType="share";
this.menuHeader.innerHTML=_ate._t("Share", 91);
this.superMethod("showControl", this.searchBox.parentNode);
if (n === null || n&&n.menu === false) {
if (this.history.replaceState) {
this.history.replaceState({
menu: false,
opening: true
}, h.title, e.location.href);
}
if (this.history.pushState) {
this.history.pushState({
menu: "share"
}, h.title, e.location.href);
}
} else {
if (this.history.replaceState) {
this.history.replaceState({
menu: "share"
}, h.title, e.location.href);
}
}
this.resetZoom();
this.generateShareServices();
this.superMethod("animate", this.menu, this["options"].menuShowAnimation, function() {
this.hideDesktopScrollbar();
});
},
"#at4m-mcc click": function(n, m) {
j.preventDefaultEvent(n);
j.trigger("addthis.layers.mobilemenu.hide", c, this);
},
"#at4m-dock-toggle click": function(n, m) {
j.preventDefaultEvent(n);
if (this.dockClosed) {
j.trigger("addthis.layers.dock.show", c, this);
} else {
j.trigger("addthis.layers.dock.hide", c, this);
}
},
"addthis.layers.dock.show": function() {
this.superMethod("animate", this.dock, this["options"].showAnimation, function() {
this.dockClosed=false;
});
j.removeClass("at4-dock-toggle-active", this.dockToggle);
},
"addthis.layers.dock.hide": function() {
j.addClass("at4-dock-toggle-active", this.dockToggle);
this.superMethod("animate", this.dock, this["options"].hideAnimation, function() {
this.dockClosed=true;
});
},
"addthis.layers.mobilemenu.hide": function() {
var n=this,
p=b("#at4m-sb")[0],
m=b("#at4m-fb")[0];
j.addClass(l.hideClass, n.searchClear);
if (this.history.getState&&this.history.getState()&&this.history.getState().menu) {
e.history.go(-1);
} else {
this.showDesktopScrollbar();
this.superMethod("animate", this.menu, this["options"].menuHideAnimation);
if (this.mobile) {
if (this.history.replaceState) {
this.history.replaceState({
menu: false,
opening: false
}, h.title, e.location.href);
}
if (this.history.pushState) {
this.history.pushState({
menu: false,
empty: true
}, h.title, e.location.href);
e.history.go(-1);
}
}
}
if (p&&p.length) {
j.specialEvents.blur(p);
}
if (m&&m.length) {
j.specialEvents.blur(m);
}
},
"addthis.layers.loaded": function() {
j.bindEvents.call(this, {
"!input[type=\"text\"],textarea,select focus": function(n, m) {
if (j.mobile()&&j.hasClass("addthis-smartlayers", this.container)) {
if (!this.container.contains(m)) {
j.addClass(l.hideClass, this.container);
}
}
},
"!input[type=\"text\"],textarea,select blur": function(n, m) {
if (j.mobile()&&j.hasClass("addthis-smartlayers", this.container)) {
if (!this.container.contains(m)) {
j.removeClass(l.hideClass, this.element);
}
}
}
});
},
"addthis.keydown.esc": function() {
if (!this.mobile&&j.isVisible(this.menu)) {
j.trigger("addthis.layers.mobilemenu.hide");
}
},
".at4m-fwc click": function() {
j.trigger("addthis.layers.mobilemenu.hide");
var p=j.attr(elem, "svc"),
q=j.attr(elem, "svcId"),
n=this.superMethod("pco"),
m={
service: p,
id: q,
pco: n
};
this.superMethod("follow", p, m, n);
},
".at4m-shc click": function(q, n) {
var m=n.getAttribute("svc"),
p=e.addthis_share ? f.clone(e.addthis_share) : {};
p.service=m;
j.trigger("addthis.layers.mobilemenu.hide");
j.trigger("addthis.menu.share", c, p);
},
"!#at4m-services click": function(n, m) {
j.trigger("addthis.layers.mobilemenu.hide");
},
"#at4-searchBox keyup": j.debounce(function(t, q) {
if (this.searchBox.value!=="") {
this.superMethod("showControl", this.searchClear);
this.isSearching=true;
} else {
this.superMethod("hideControl", this.searchClear);
this.generateShareServices();
return;
}
var n=this.searchBox.value.toLowerCase(),
r=[],
v=this.atScroll,
p, u;
this.servicesInMenu={};
for (p in _ate.services.map) {
u=_ate.services.getName(p);
if (n === "") {
r[p]=u;
} else {
if (j.has(p.toLowerCase(), n) || j.has(u.toLowerCase(), n)) {
r.push(p);
}
}
}
this.menuBody.innerHTML="";
for (p in r) {
if (r.hasOwnProperty(p)) {
var m=this.generateShareButtonJson(r[p]);
if (m) {
this.menuBody.appendChild(f.json2html(m));
}
}
}
if (this.mobile) {
v.refresh();
}
}, 500),
"#at4-searchClear click": function(n, m) {
j.preventDefaultEvent(n);
this.searchBox.value="";
this.generateShareServices();
this.superMethod("hideControl", this.searchClear);
}
},
postEvents: function() {
var m=this;
if (!m.mobile) {
j.bindEvents.call(this, {
"!#at4m-menu-body scroll": j.debounce(function(p, n) {
if (!m.mobile) {
m.checkAndAddMoreServices();
}
}, 200)
});
}
},
hideDesktopScrollbar: function() {
if (!this.mobile) {
j.addClass("at4m-scroll-overflow", this.innerMenuBody);
j.addClass("at4m-hidden-overflow", a);
}
},
showDesktopScrollbar: function() {
if (!this.mobile) {
j.removeClass("at4m-scroll-overflow", this.innerMenuBody);
j.removeClass("at4m-hidden-overflow", a);
}
},
generateJson: function() {
var x={}, n=[],
z={}, m={}, y=this.options.layers.follow || {}, r=this.options.layers.share || {}, q=this.options || {}, u=this.themes[q.buttonBarTheme] ? this.themes[q.buttonBarTheme] : q.theme ? this.themes[q.theme] : "",
t={}, v={}, p={}, B={}, A=e.location.pathname === "/" || e.location.pathname === "",
w=y.__hideOnHomepage&&A,
s=r.__hideOnHomepage&&A;
if (y.services&&y.mobile!==false&&!w) {
v["a#at4m-fb"]={
"i.at4m-dock-follow": {},
href: "#",
html: _ate._t("Follow", 96)
};
n.push(v);
}
if (this.enabledLayers.share&&r.mobile!==false&&!s) {
t["a#at4m-sb"]={
"i.at4m-dock-share": {},
href: "#",
html: _ate._t("Share", 91)
};
n.push(t);
}
if (n.length) {
x["div#at4m-dock.at4m-dock" + this.positionClass + u + ".at4-ma" + n.length]=n;
B["a#at4m-dock-toggle"]={
html: "Toggle Dock",
href: "#"
};
z["div.at4m-dock-toggle" + this.positionClass + u]=B;
m["div#at4m-menu.at4m-menu" + u]={
"div.at4m-menu-inner": [{
"div.at4m-menu-header": {
"div.at4m-menu-header-inner": {
"div#at4m-menu-head": _ate._t("Share", 91),
"a#at4m-mcc.at4m-menu-cancel": {
href: "#",
html: "Close"
}
}
}
}, {
"div#at4m-menu-body": {
"div#scroller": [{
"div.at4m-menu-search": [{
input: {
type: "text",
placeholder: _ate._t("Find a service", 35),
id: "at4-searchBox"
}
}, {
input: {
type: "submit"
}
}, {
"input.at4-hide": {
type: "cancel",
id: "at4-searchClear"
}
}]
}, {
"div.at4m-menu-content": {
"ul#at4m-services.addthis_32x32_style": {}
}
}]
}
}, {
"div.at4m-menu-footer": {
"div.at4m-menu-footer-inner": [{
"a.at4m-menu-footer-logo": {
href: "//www.addthis.com/?utm_source=dynmex&utm_medium=img&utm_content=AT_main_WT&utm_campaign=AT_main",
target: "_blank",
html: "AddThis"
}
}, {
"a.at4m-menu-footer-privacy": {
href: "//www.addthis.com/privacy/privacy-policy",
target: "_blank",
html: _ate._t("Privacy", 24)
}
}]
}
}]
};
p["div#at4m-mobile-container"]=[x, z, m];
return p;
} else {
return false;
}
},
generateFollowServices: function() {
if (this.atScroll) {
this.atScroll.destroy();
this.atScroll=null;
}
this.menuBody.innerHTML="";
var m=this.options.layers.follow.services,
n=this;
j.each(m, function(w, z) {
var u=z || {}, x=u.service,
r=u.id,
p=u.usertype,
v=_ate.share.gfu(x, r, p),
q=n.followServices[x],
t, s={}, y={};
y["span.at4-icon-fw.aticon-" + x]="";
s={
"li.at4m-listitem": {
"a.at4m-fwc": {
href: v,
target: "_blank",
svc: x,
svcId: r,
title: q,
div: [y, {
"span.at4-label.atservice": q
}, {
"span.at4-arrow": "&gt;"
}]
}
}
};
t=n.menuBody.appendChild(f.json2html(s));
if (x === "twitter") {
t.children[0].conf={
follow: true
};
}
});
this.initializeIscroll("follow");
},
generateShareServices: function() {
var n=this,
m;
if (this.atScroll) {
this.atScroll.destroy();
this.atScroll=null;
}
this.servicesInMenu={};
this.serviceListPos=0;
this.isSearching=false;
this.searchBox.value="";
this.menuBody.innerHTML="";
if (!this.services) {
this.services=[];
}
for (m in _ate.services.map) {
if (n.services.length === 30) {
break;
}
n.services.push(m);
}
j.each(this.services, function(r, p) {
var q=n.generateShareButtonJson(p);
if (q) {
n.menuBody.appendChild(f.json2html(q));
}
});
this.initializeIscroll("share");
},
checkAndAddMoreServices: function() {
var u=this,
t=this.atScroll,
n=0,
p=this.serviceListPos,
r=20,
v, s, m;
if (u.mobile) {
if (!this.isSearching&&Math.abs(t.y) > Math.abs(t.maxScrollY) * 0.5&&!this.isLoading) {
this.isLoading=true;
q();
t.refresh();
this.isLoading=false;
}
} else {
v=this.innerMenuBody.scrollHeight, s=this.innerMenuBody.offsetHeight, m=this.innerMenuBody.scrollTop;
if (!this.isSearching&&v - s - m <= 150&&!this.isLoading&&this.currentLayerType === "share") {
this.isLoading=true;
q();
this.isLoading=false;
}
}
function q() {
for (var x in _ate.services.map) {
if (n > p) {
var w=u.generateShareButtonJson(x);
if (w) {
u.menuBody.appendChild(f.json2html(w));
}
if (n === p + r) {
break;
}
}
n++;
}
u.serviceListPos=n;
}
},
generateShareButtonJson: function(r) {
var m={}, p={}, q=e.addthis_config ? f.clone(e.addthis_config) : {}, t=e.addthis_share ? f.clone(e.addthis_share) : {}, s=_ate.share.genurl(r, 0, t, q),
n;
if (r === "email") {
s=_ate.share.genieu(t, q, 0);
}
if (_ate.services.exists(r)&&!this.servicesInMenu[r]&&!this.serviceBlacklist[r]&&!this.mobileBlacklist[r]) {
p["span.at4-icon.aticon-" + r]="";
n=_ate.services.getName(r);
m={
"li.at4m-listitem": {
"a.at4m-shc": {
href: s,
target: "_blank",
svc: r,
title: n,
div: [p, {
"span.at4-label.atservice": n
}, {
"span.at4-arrow": "&gt;"
}]
}
}
};
this.servicesInMenu[r]=true;
return m;
} else {
return false;
}
},
initializeIscroll: function(m) {
if (!this.mobile) {
return;
}
var n=this;
n.atScroll=new k("at4m-menu-body", {
onScrollEnd: function() {
j.requestTimeout(function() {
n.isScrolling=false;
}, 300);
},
onScrollMove: j.debounce(function() {
j.specialEvents.blur(n.searchBox);
n.isScrolling=true;
if (m === "share") {
n.checkAndAddMoreServices();
}
}, 100),
onBeforeScrollStart: function(q) {
q=q || e.event;
var p=q.target || q.srcElement;
while (p.nodeType != 1) {
p=p.parentNode;
}
if (p.tagName!=="INPUT") {
j.preventDefaultEvent(q);
} else {
if (p.getAttribute("type") === "text") {
p.focus();
}
}
},
checkDOMChanges: false
});
},
resetZoom: function() {
function n() {
var q=2,
u, w, t, r, s, v=document.createElement("p");
document.body.appendChild(v);
v.innerHTML="1234567890";
j.setCSSAttr(v, {
position: "fixed",
fontSize: "14px",
zoom: 2
});
w=v.clientHeight;
t=v.clientWidth;
r=v.clientHeight;
s=v.clientWidth;
document.body.removeChild(v);
u=Math.ceil(r / w);
return u!==q;
}
var m={
zoomFont: n(),
innerClient: window.innerWidth === document.documentElement.clientWidth,
outerScroll: window.outerWidth === document.documentElement.scrollWidth,
innerOuterDevicePixelRatio: window.outerWidth / window.innerWidth === window.devicePixelRatio,
innerScreen: window.innerWidth === screen.width,
screenClient: screen.width === document.documentElement.clientWidth,
innerWidth: window.innerWidth,
outerWidth: window.outerWidth,
scrollWidth: document.documentElement.scrollWidth,
devicePixelRatio: window.devicePixelRatio,
width: screen.width,
availWidth: screen.availWidth,
offsetWidth: document.documentElement.offsetWidth
};
if (!this.mobile) {
return function() {};
} else {
return function() {
var s, p=m;
switch (true) {
case p.innerClient&&p.outerScroll&&p.innerScreen&&p.screenClient&&!p.innerOuterDevicePixelRatio&&p.devicePixelRatio === 2:
p.iphone=true;
p.retina=true;
s=1;
break;
case p.innerClient&&p.outerScroll&&p.innerScreen&&p.screenClient&&!p.innerOuterDevicePixelRatio:
p.iphone=true;
s=1;
break;
case p.innerClient&&p.innerScreen&&p.screenClient&&p.innerOuterDevicePixelRatio&&!p.outerScroll:
p.iphone=false;
s=p.devicePixelRatio;
break;
case p.innerClient&&p.innerOuterDevicePixelRatio&&!p.outerScroll&&!p.innerScreen&&!p.screenClient:
p.retina=true;
s=p.devicePixelRatio;
break;
default:
s=1;
break;
}
this.menu.zoom=null;
var r=window.innerWidth === screen.width ? 1 : 1 * window.innerWidth / screen.width * s,
q=j.getCssAttr(this.menu, "font-size"),
t=+q.replace(/([0-9\.]+).*/, "$1");
j.setCSSAttr(this.menu, {
zoom: r,
fontSize: null,
width: null
});
if (p.zoomFont) {
j.setCSSAttr(this.menu, "fontSize", q.replace(/[0-9]+(.*)/, t * r + "$1"));
}
j.setCSSAttr(this.menu, "width", window.innerWidth / r + "px");
};
}
}
});
}(g.utils, g.api, g.layer, g.iScroll, g.qwery);
g.layers_recommendedbox=function(k, j, l, d, b) {
j.addthisLayer("recommendedbox", {
create: function() {
var n=this.options || {}, m=n.orientation;
if (m === "vertical") {
this.pco="smlrebv-1.0";
this.options.size="large";
}
this.superMethod("create");
},
pco: "smlrebh-1.0",
element: "#at4-recommendedbox",
inheritsFrom: "recommended",
multipleCalls: true,
plugin: true,
inlineClass: "addthis-recommendedbox",
events: {
"addthis.recommendedbox.destroy": function() {
this.parentElement.__containsRecommended__=false;
}
}
});
}(g.utils, g.api, g.layer, g.qwery, g.layers_recommended);
g.layers_recommendedside=function(k, j, l, d, b) {
j.addthisLayer("recommendedside", {
device: "desktop",
plugin: true,
position: "right",
showPlaceholderImages: false,
requiresImage: true,
pco: "smlres-1.0",
element: "#at-recommendedside",
inheritsFrom: "recommended",
closeControl: "#at4-recommendedside-close-control",
openControl: "#at4-recommendedside-open-control",
events: {
"!#at4-recommendedside-close-control mouseenter": function(n, m) {
this.showControl(this.closeControl);
},
".at-tli mouseover": function(n, m) {
this.showControl(this.closeControl);
},
".at4-logo-container mouseover": function(n, m) {
this.showControl(this.closeControl);
},
".at-recommended-label mouseover": function(n, m) {
this.showControl(this.closeControl);
},
mouseleave: function(n, m) {
this.hideControl(this.closeControl);
},
"!.at4-recommended-item mouseleave": function(n, m) {
this.hideControl(this.closeControl);
},
"!.at-recommended-label mouseleave": function(n, m) {
this.hideControl(this.closeControl);
},
"#at4-recommendedside-close-control click": function(n, m) {
_ate.ed.fire("addthis.layers.recommendedside.hide", c, this);
},
"!#at4-recommendedside-open-control click": function(n, m) {
_ate.ed.fire("addthis.layers.recommendedside.show", c, this);
},
"addthis.layers.recommendedside.show": function(m) {
this.superMethod("animate", this.openControl, this["options"].hideAnimation);
this.superMethod("animate", this.element, this["options"].showAnimation);
this.status="open";
},
"addthis.layers.recommendedside.hide": function(m) {
this.superMethod("animate", this.element, this["options"].hideAnimation);
this.superMethod("animate", this.openControl, this["options"].showAnimation);
this.status="closed";
}
}
});
}(g.utils, g.api, g.layer, g.qwery, g.layers_recommended);
g.layers_share=function(j, d, k, b) {
d.addthisLayer("share", {
create: function() {
var l=this,
m=l.options,
p=function() {
if (e.addthis_config&&j.isPlainObject(e.addthis_config)) {
return e.addthis_config.services_exclude || "";
}
return "";
}(),
n={};
l.superMethod("create");
if (m.services) {
this.personalized=false;
this.services=m.services.replace(/ /g, "").split(",");
m.numPreferredServices=this.services.length;
} else {
this.services=this.preferredServices;
}
if (j.isString(p)) {
p=p.split(",");
j.each(p, function(r, q) {
q=j.trim(q);
n[q]=true;
});
this.options.services_exclude=n;
}
return this;
},
pco: "smlsh-1.0",
device: "desktop",
status: "open",
element: "#at4-share",
closeControl: "#at4-scc",
openControl: "#at4-soc",
position: "left",
services: [],
personalized: true,
events: {
mouseover: function(l) {
this.showControl(this.closeControl);
},
mouseout: function(l) {
this.hideControl(this.closeControl);
},
"#at4-scc click": function(l) {
_ate.ed.fire("addthis.layers.share.hide", c, this);
j.preventDefaultEvent(l);
},
"!#at4-soc click": function(l) {
_ate.ed.fire("addthis.layers.share.show", c, this);
j.preventDefaultEvent(l);
},
"addthis.layers.share.show": function(l) {
this.hide(this.openControl, this["options"].hideAnimation);
this.show();
this.status="open";
},
"addthis.layers.share.hide": function(l) {
this.hide();
this.show(this.openControl, this["options"].showAnimation);
this.status="closed";
},
".at4-share-btn click": function(t, s) {
var q=s.className.split(" "),
n=q.length,
m=this.superMethod("pco"),
r="",
p=-1,
l=s.parentNode;
if (l&&j.hasClass("at4-share-btn", l)) {
s=l;
}
q=s.className.split(" ");
n=q.length;
while (++p < n) {
if (q[p].indexOf("at-svc-") === 0) {
r=q[p].substring(7);
}
}
this.superMethod("share", r, m);
j.preventDefaultEvent(t);
}
},
generateJson: function() {
var E, u={}, H={}, x={}, z={}, p={}, B={
role: "region",
"aria-labelledby": "at4-share-label",
"h2#at4-share-label": {
html: "AddThis Sharing"
}
}, q=this,
G=q.options,
F=q.themes[G.theme] ? q.themes[G.theme] : "",
D=1,
n=q.services,
I=G.numPreferredServices ? G.numPreferredServices : 5,
C=q.position === "right",
l=".atss",
r=C ? l + "-right" : l + "-left",
m={
more: 1,
print: 1,
favorites: 1,
addthis: 1,
compact: 1
}, y, v=[],
t=!_ate.bro.ie6&&!_ate.bro.ie7&&!j.isIEQuirksMode()&&(G.counts === true || G.counts === "true");
for (y in n) {
if (n.hasOwnProperty(y)) {
var A=n[y],
J, w;
if (A === "pinterest") {
A="pinterest_share";
}
if (G.services_exclude[A]!==true&&(_ate.services.exists(A) || m[A] === 1 || D === I&&this.personalized)) {
if (A === "more" || A === "addthis" || D === I&&this.personalized) {
if (G.services_exclude.more!==true) {
J=_ate._t("More Options", 2).replace("&nbsp;", " ");
A="compact";
}
} else {
if (A === "print") {
J=_ate._t("Print", 22);
} else {
if (A === "favorites") {
J=_ate._t("Favorites", 5);
} else {
if (A === "email") {
J=_ate._t("Email", 4);
} else {
J=_ate.services.getName(A);
}
}
}
}
w=p["a.at4-share-btn.at-svc-" + A]={
href: "#"
};
w["span.at300bs.at15nc.at15t_" + A]={
title: J,
html: J
};
if (t&&j.shareCounters.requests.services[A]) {
v.push(A);
w[".at4-share-count-container." + k.hideClass]={
"span.at4-share-count": ""
};
}
if (D++ >= I) {
break;
}
}
}
}
if (t) {
j.shareCounters.getShareCounts({
services: v
}, function(s) {
if (q.rendered) {
q.displayCounts(s);
} else {
j.bindEvents.call(this, {
"addthis.layers.share.rendered": function() {
q.displayCounts(s);
}
});
}
});
}
z["div#at4-scc.at4-arrow." + (this.position === "left" ? "at-left" : "at-right") + "." + k.hideClass]={
html: "Hide",
title: "Hide"
};
p["div.at-share-close-control" + F]=z;
E=B["div#at4-share" + l + r + ".addthis_32x32_style"]=p;
x["div.at4-arrow." + (this.position === "left" ? "at-right" : "at-left")]={
html: "Show",
title: "Show"
};
H=B["div#at4-soc" + l + ".at-share-open-control-" + this.position.toLowerCase() + F + "." + k.hideClass]=x;
u["div.addthis-smartlayers.at4-share-outer" + (C ? "-right" : "")]=B;
return u;
},
displayCounts: function(s) {
var m=this,
l, r, q, n, p;
j.each(s, function(t, u) {
l=u.service;
r=u.count;
if (j.isString(l)&&l.length&&j.isNumber(r)&&r > 0) {
q=b("#at4-share .at-svc-" + l + " .at4-share-count")[0];
if (j.isElement(q)) {
n=_ate.util.parent(q, ".at4-share-btn");
if (n!==h&&n!==h.body&&j.isElement(n)) {
j.addClass("at4-share-count-anchor", n);
}
q.appendChild(h.createTextNode(j.truncateCount(r)));
}
}
});
p=b("#at4-share .at4-share-count-container");
if (p.length) {
j.each(p, function(t, u) {
m.show(u, "fadeIn", function() {
j.removeClass("fadeIn", u);
});
});
}
}
});
}(g.utils, g.api, g.layer, g.qwery);
g.layers_thankyou=function(j, d, k, b) {
d.addthisLayer("thankyou", {
create: function() {
_ate.dbm=1;
return this;
},
POSTACTION_SURFACES: {
share: {
type: "share",
display: "follow"
},
"share-follow": {
type: "share",
display: "follow"
},
"share-trending": {
type: "share",
display: "trending"
},
follow: {
type: "follow",
display: "trending"
},
"follow-trending": {
type: "follow",
display: "trending"
}
},
pco: "smlty-1.0",
device: "both",
element: "#at4-thankyou",
maxitems: 4,
lastShown: 0,
showOnLoad: false,
blacklist: {
mailto: true,
email: true,
pinterest_share: true,
pinterest: true,
thefancy: true,
more: true,
link: true
},
events: {
"addthis.menu.share": function(n, m) {
var l=this.options.layers.follow.services;
if (k.enabledLayers.follow&&l&&l.length) {
this.triggerPostActionEvent(n, "share-follow");
} else {
this.triggerPostActionEvent(n, "share-trending");
}
},
"addthis.menu.follow": function(m, l) {
this.triggerPostActionEvent(m, "follow-trending");
},
"addthis.menu.shareimg": function(m, l) {
this.triggerPostActionEvent(m, "share", true);
},
"addthis.thankyou.hold": function(m, l) {
this.hold=true;
},
"addthis.postaction": function(s, r) {
var q=this,
m=q.options;
if (q.lastShown || j.isPlainObject(s.data)&&j.isString(s.data.type)&&(m.layers[q.POSTACTION_SURFACES[s.data.type].type] || {}).thankyou === false) {
return;
} else {
q.lastShown=new Date().valueOf();
}
if (s&&s.data&&s.data.service&&s.data.type) {
var l=s.data.service,
p=s.data.type,
n="";
j.removeChildren(b("#at4-thankyou .at4-thankyou-layer")[0]);
n=this.POSTACTION_SURFACES[p].display;
p=this.POSTACTION_SURFACES[p].type;
if (q.hold) {
q.hold=!this.hold;
} else {
q.display(p, n);
}
}
},
click: function(m, l) {
if (j.isVisible(this.element)) {
this.hide();
}
this.hold=false;
},
".at4-close click": function(m, l) {
if (window._atw&&window._atw.fe) {
_atw.fe.focus();
}
j.preventDefaultEvent(m);
},
".at4x click": function(m, l) {
if (window._atw&&window._atw.fe) {
_atw.fe.focus();
}
j.preventDefaultEvent(m);
},
"addthis.keydown.esc": function(m, l) {
this.hide();
},
".at-follow-btn click": function(q, p) {
var n=j.attr(p, "svc"),
r=j.attr(p, "svcId"),
m=this.superMethod("pco"),
l={
service: n,
id: r,
pco: m
};
this.superMethod("follow", n, l, m);
j.trigger("addthis.thankyou.hold", addthis, {
action: "share/follow"
});
if (n === "twitter"&&!j.mobile()) {
j.preventDefaultEvent(q);
}
}
},
customEvents: {},
triggerPostActionEvent: function(r, p, n) {
if (r&&r.data&&r.data.service) {
var l=r.data.service,
q={}, s, m;
if (l) {
if (!this.blacklist[l] || n) {
if (j.isVisible(b("#at3win")[0])) {
c.menu.close();
}
s=h.activeElement.nodeName.toLowerCase();
if (h.activeElement&&s === "iframe") {
if ("activeElement" in h) {
e.focus();
h.activeElement.blur();
}
}
m=function() {
j.trigger("addthis.postaction", addthis, {
service: l,
type: p
});
if (!j.mobile()) {
if ("onfocusin" in h) {
h.onfocusin=null;
} else {
j.listenTo({
elem: "window",
ev: "focus",
callback: m,
type: "remove"
});
}
}
};
if (!j.mobile()) {
if ("onfocusin" in h) {
h.onfocusin=m;
} else {
j.listenTo({
elem: "window",
ev: "focus",
callback: m,
type: "add"
});
}
} else {
m();
}
}
} else {
this.hide();
}
}
},
display: function(m, l) {
if (!this.title || !this.description) {
this.title=b("#at4-thankyou .thankyou-title")[0];
this.description=b("#at4-thankyou .thankyou-description")[0];
}
var p=this.title,
n=this.description;
if (m&&p&&n) {
j.bindEvents.call(this, this.customEvents, "remove");
if (m === "share") {
p.innerHTML="";
n.innerHTML="";
switch (l) {
case "follow":
this.postactionFollow();
break;
case "trending":
p.innerHTML=this.options.layers.share.postShareTitle;
n.innerHTML=this.options.layers.share.postShareRecommendedMsg;
this.postactionTrending();
break;
}
} else {
if (m === "follow") {
switch (l) {
case "trending":
p.innerHTML=this.options.layers.follow.postFollowTitle;
n.innerHTML=this.options.layers.follow.postFollowRecommendedMsg;
this.postactionTrending();
break;
}
}
}
}
},
postactionFollow: function() {
b("#at4-thankyou .at4-thankyou-layer")[0].appendChild(this.generateFollowHtml());
this.superMethod("hideControl", b("#at4-palogo")[0]);
this.superMethod("hideControl", b("#at4-paprivacy")[0]);
this.superMethod("hideControl", b(".at4x")[0]);
this.show();
if (window._atw) {
_atw.fe=document.activeElement;
}
j.requestTimeout(function() {
b("#at4-thankyou .at4-close")[0].focus();
}, 0);
},
postactionTrending: function() {
this.superMethod("showControl", b("#at4-palogo")[0]);
this.superMethod("showControl", b("#at4-paprivacy")[0]);
this.superMethod("showControl", b(".at4x")[0]);
var n=this,
m=this.superMethod("generateTrendingJson", this.pco, 4),
l=n.element,
p=j.extend(n.options, {
elements: "#at4-thankyou .at4-thankyou-layer",
size: "large",
title: "",
maxitems: 4
});
if (m.length) {
j.addClass(k.hiddenClass, l);
j.removeClass(k.hideClass, l);
addthis.layers({
recommendedbox: p,
pi: true
}, function() {
j.addClass(k.hideClass, l);
j.removeClass(k.hiddenClass, l);
n.show();
j.requestTimeout(function() {
b("#at4-thankyou .at4x")[0].focus();
}, 0);
});
if (window._atw) {
_atw.fe=document.activeElement;
}
} else {
return false;
}
},
generateJson: function() {
var l={}, m=this.themes[this.options.theme] ? this.themes[this.options.theme] : "";
l["div#at4-thankyou.at4-thankyou.at4-thankyou-background." + k.hideClass + m + (j.mobile() ? " .at4-thankyou-mobile" : ".at4-thankyou-desktop")]={
role: "dialog",
"aria-labelledby": "at-thankyou-label",
"div.at4lb-inner": {
"a.at4x": {
href: "#",
title: "Close"
},
"a#at4-palogo.at4-logo": {
href: "//www.addthis.com/?utm_source=dynpo&utm_medium=img&utm_content=AT_main_WT&utm_campaign=AT_main",
html: "AddThis",
title: "AddThis",
target: "_blank"
},
"a#at4-paprivacy.at4-privacy": {
href: "//www.addthis.com/privacy/privacy-policy",
html: _ate._t("Privacy", 24),
title: _ate._t("Privacy", 24),
target: "_blank"
},
"div.at4-thankyou-inner": {
"h1#at-thankyou-label.thankyou-title": "",
"h3.thankyou-description": "",
"div.at4-thankyou-layer": ""
}
}
};
return l;
},
generateFollowHtml: function() {
var s={}, m=this.options.layers || {}, p=m.follow || {}, l=p.services || [],
r=this.superMethod("generateFollowJson", l),
n=h.location.host,
q=this.themes[this.options.theme] ? this.themes[this.options.theme] : "";
if (!r) {
return false;
}
s["div.at4win" + q]={
"div.at4win-wrapper": [{
"div.at4win-header": [{
h3: n
}, {
"a.at4-close": {
href: "#",
html: "X",
title: "Close"
}
}]
}, {
"div.at4win-content": {
"div.at4-thanks": [{
h2: m.share.postShareTitle
}, {
"div.at4-thanks-icons": [{
label: m.share.postShareFollowMsg
}, {
"div.at-follow.at-follow-32": {
"div.at44-follow-container.addthis_32x32_style": r
}
}]
}]
}
}, {
"div#at4win-footer": [{
"a.at4-logo": {
href: "//www.addthis.com/?utm_source=dynpo&utm_medium=img&utm_content=AT_main_WT&utm_campaign=AT_main",
html: "AddThis",
title: "AddThis",
target: "_blank"
}
}, {
"a.at4-privacy": {
href: "//www.addthis.com/privacy/privacy-policy",
html: _ate._t("Privacy", 24),
title: _ate._t("Privacy", 24),
target: "_blank"
}
}]
}]
};
return f.json2html(s);
}
});
}(g.utils, g.api, g.layer, g.qwery);
g.layers_warning=function(j, d, k, b) {
d.addthisLayer("warning", {
pco: "smlwrn-1.0",
device: "both",
element: "#at4-warning",
showOnLoad: false,
closeControl: "#at4-wcc",
parentMarginTop: false,
iframeWidth: false,
iframeHeight: false,
iframeStyle: false,
plugin: true,
events: {
"addthis.layers.warning.show": function(s) {
var r=b("#at4-warning-iframe")[0],
p=s.data.alertId,
m=this.element.clientHeight,
n=this.parentElement.currentStyle || window.getComputedStyle(this.parentElement),
q=n.marginTop,
l=new Date().getTime();
r.src="http://usadmm.dotomi.com/dmm/servlet/dmm?reg_req=true&pid=4680&dres=iframe&mtg=0&comId=2394&ms=" + this.iframeStyle + "&btg=1&mp=1&rwidth=" + this.iframeWidth + "&rheight=" + this.iframeHeight + "&pp=3&cg=2222&dtm_param_1=" + (this.options.test ? "AmberTest" : "RON") + "&dtm_param_2=" + (this.options.test ? "96fdd894a4d560d4e15379baa960c270" : "bc2ae68d4ae10411036ba78d73899497") + "&dtm_param_3=" + p + "&dtm_param_4=&dtm_param_5=&rurl=" + _euc(_atc.rsrcs.warning) + "&tz=300&cb=" + l;
this.parentMarginTop=q;
j.setCSSAttr(this.parentElement, {
marginTop: m + "px"
});
this.superMethod("animate", this.element, this["options"].showAnimation);
},
"#at4-acc click": function(m, l) {
j.trigger("addthis.layers.warning.hide", c, this);
},
"addthis.layers.warning.hide": function() {
this.hide(this.element, this.options.hideAnimation, function() {
j.setCSSAttr(this.parentElement, {
marginTop: this.parentMarginTop
});
});
},
"addthis.layers.warning.hideNow": function() {
j.setCSSAttr(this.element, {
display: "none"
});
}
},
postEvents: function() {
if (_ate.swl) {
j.trigger("addthis.layers.warning.show", c, {
alertId: _ate.swl
});
_ate.swl=false;
} else {
if (this.options.test) {
j.trigger("addthis.layers.warning.show", c, {
alertId: 999
});
}
}
this.superMethod("postEvents");
},
generateJson: function() {
var n={}, q={}, s={}, r="",
p=j.desktop() ? "desktop" : j.tablet() ? "tablet" : "phone",
m=this.iframeWidth=j.desktop() ? "728" : j.tablet() ? "468" : "216",
l=this.iframeHeight=j.desktop() ? "90" : j.tablet() ? "60" : "36";
this.iframeStyle=j.desktop() ? "18" : j.tablet() ? "1" : "34";
q["a#at4-acc.at-warning-x"]={
html: "Close"
};
s["iframe#at4-warning-iframe"]={
scrolling: "no",
height: l + "px",
frameborder: "0",
width: m + "px",
src: r,
vspace: "0",
hspace: "0",
marginheight: "0",
marginwidth: "0"
};
n["div#at4-warning.addthis-warning-layer.at-layer-" + p]=[q, s];
return n;
}
});
}(g.utils, g.api, g.layer, g.qwery);
g.layers_welcome=function(j, d, l, b, k) {
d.addthisLayer("welcome", {
updateExisting: function(p) {
var m=this,
q=m.container,
n;
m.options=j.extend(m.options, p);
n=f.json2html(m.generateJson(true));
if (j.isElement(q)) {
q.innerHTML="";
q.appendChild(n);
}
j.bindEvents.call(m, m.events, "remove");
m.element=b("#at4-welcome")[0];
j.bindEvents.call(m, m.events);
},
pco: "wmb-1.0",
device: "both",
element: "#at4-welcome",
plugin: true,
configurableClassNames: {
actions: {
base: "addthis_bar_action_elem",
button: {
base: "addthis_bar_button",
share: "addthis_bar_button_share",
follow: "addthis_bar_button_follow",
link: "addthis_bar_button_link",
email: "addthis_bar_button_email"
},
link: {
base: "addthis_bar_link",
share: "addthis_bar_link_share",
follow: "addthis_bar_link_follow",
link: "addthis_bar_link_link"
}
},
devices: {
mobile: "addthis_bar_mobile",
desktop: "addthis_bar_desktop"
},
positions: {
bottom: "addthis_bar_bottom",
top: {
base: "addthis_bar_top",
fixed: "addthis_bar_fixed",
absolute: "addthis_bar_absolute"
}
},
rules: {
match: "addthis_bar_match",
no_match: "addthis_bar_no_match"
}
},
events: {
"addthis.welcome.show": function(n) {
var m=this;
m.showBar();
},
"addthis.welcome.shown": function(r) {
var n=this,
q=n.options,
m=q.hideAfter,
p=this.superMethod("pco");
if (j.isNumber(m)) {
m=m * 1000;
j.requestTimeout(function() {
n.hideBar();
}, m);
}
if (n.showPixel === true) {
n.showPixel=false;
_ate.track.apc(p);
}
},
"addthis.welcome.hide": function(n) {
var m=this;
m.hideBar();
},
".addthis_bar_x click": function(p, n) {
var m=this;
m.hideBar();
m.setClosedCookie();
},
".addthis_bar_action_elem click": function(p, n) {
var m=this;
m.actionClick();
},
".addthis_bar_prevent_link_fire click": function(n, m) {
j.preventDefaultEvent(n);
},
"addthis.layers.scroll": function() {
if (this.shownOnScroll === true) {
return;
}
var m=this,
n=m.options,
p=m.showOnScrollTo,
q=j.scrollTop();
if (q >= p) {
m.shownOnScroll=true;
m.showBar();
}
}
},
actionClick: function() {
var z=this,
r=z.options,
B=r.action,
p=B.type,
n=B.verb,
v=B.listname,
x=B.service || j.getTopService(),
w=B.id,
u=B.url || "",
q=B.url_new_window,
D=z.configurableClassNames,
s=D.actions,
E=s.button,
y=s.link,
t=this.superMethod("pco"),
m={
service: x,
id: w,
pco: t
}, C=b("input.addthis_bar_email_input")[0],
A=j.isElement(C) ? C.value : "";
z.setCurrentConfig({
touched: true
});
j.trigger("addthis.bar.click", z, z.getCurrentConfig());
if (p === "email") {
if (j.validation.validators.isEmail(A)) {
j.setCSSAttr(C, {
"border-color": "#FFFFFF"
});
z.emailLogic({
email: A,
action: B
});
} else {
j.setCSSAttr(C, {
"border-color": "#FF0000"
});
}
} else {
if (n === "share") {
z.superMethod("share", x, t);
} else {
if (n === "follow"&&w) {
if (x === "preferred") {
x=j.getTopService();
}
z.superMethod("follow", x, m, t, true);
} else {
if (n === "link") {
j.openWindow({
url: u,
new_window: q,
focus: true
});
_ate.track.trl({
data: {
url: u,
pco: t
}
});
}
}
}
}
},
emailProviders: {
aweber: function(m, n) {
return "http://www.aweber.com/scripts/addlead.pl?email=" + m + "&listname=" + n;
}
},
emailLogic: function(p) {
var q=this,
s=encodeURIComponent(p.email),
n=p.action,
m=n.listname || "",
v=(n.service || "").toLowerCase(),
u=n.id,
r=function() {
if (q.emailProviders[v]) {
return q.emailProviders[v](s, m) || "";
} else {
return n.url || "";
}
}(),
t=_ate.cookie.tag.toKV();
r += (r.indexOf("?") < 0 ? "?" : "&") + "EMAIL=" + s + (t.length ? "&AT_TAG=" + t : "");
q.updateExisting({
message: "Your request is being processed...",
animate: false,
action: {
type: "none"
}
});
j.getUrl(r, function() {
q.updateExisting({
message: "Well done! You have successfully subscribed with " + decodeURIComponent(s),
action: {
type: "none"
}
});
j.requestTimeout(function() {
q.hideBar();
}, 2500);
});
},
hideBar: function() {
var m=this,
p=m.options,
n=p.hideAnimation,
q=m.element;
k(function() {
if (j.isElement(m.placeholder)) {
j.addClass(l.hiddenClass, m.placeholder);
}
if (j.isVisible(q)) {
m.hide(q, n, function() {
j.trigger("addthis.welcome.hidden", {
internal: true
});
});
}
});
},
showBar: function() {
var m=this,
p=m.options,
n=p.delay,
q=p.showAnimation,
r=m.element;
k(function() {
if (j.isElement(m.placeholder)) {
j.removeClass(l.hiddenClass, m.placeholder);
}
if (!j.isVisible(r)) {
m.show(r, q, function() {
j.trigger("addthis.welcome.shown", {
internal: true
});
});
}
});
},
generateJson: function() {
var E=this,
M=E.configurableClassNames,
C=M.devices,
K=M.rules,
v=M.positions,
r=E.options,
N=r.position,
t=r.backgroundColor,
F=r.rememberHide,
w=r.showOnScrollTo,
m=r.noGradient,
x=r.fixed,
J=r.alwaysShow,
A=J === true ? true : E.isMatch,
D=E.mobile,
n=J === true ? "" : w === false ? F === true ? E.checkCookieHidden() ? "." + l.hideClass : "" : "" : "." + l.hideClass,
G=E.elementSelector,
O=".addthis_bar",
I=E.elementSelector + ".addthis_bar_container",
z=D ? "." + C.mobile : "." + C.desktop,
H=A ? "." + K.match : "." + K.no_match,
s=E.isInlineLayer === true ? "" : N === "bottom" ? "." + v.bottom : x ? "." + v.top.base + "." + v.top.fixed : "." + v.top.base + "." + v.top.absolute,
L=G + I + O + z + H + s + n,
B=j.objectToStyle({
background: t
}),
q={}, p={}, y=E.generateContentJson(r),
u=m === true ? "" : j.gradients.cssString(t, m ? 0 : 0.05);
E.showOnScrollTo=function() {
if (j.isNumber(w)) {
return w;
} else {
if (j.isString(w)) {
return +w.replace("px", "");
} else {
if (j.isElement(w)) {
return j.scrollTop(w);
}
}
}
}();
q[L]={
style: B + u,
"span.welcome-inner-container": [{
"a.addthis_bar_logo_container": {
href: "http://www.addthis.com?utm_medium=link&utm_content=logo&utm_campaign=AT_main&utm_source=wmb",
target: "_blank",
".addthis_bar_logo": {
title: "AddThis.com"
}
}
},
y, {
"span.addthis_bar_x_container": {
".addthis_bar_x": {
title: "Hide"
}
}
}]
};
if (A === false) {
p[".at4-welcome-outer"]={};
} else {
p[".at4-welcome-outer"]=q;
}
return p;
},
postEvents: function() {
var m=this,
p=m.element,
n=m.container,
q=m.options,
r=j.isPlainObject(q.action) ? q.action : {}, t={}, s;
t[".addthis_bar_placeholder"]="";
s=f.json2html(t);
if (q.coverPage === false&&!q.elements&&m.position === "top") {
m.placeholder=s;
}
},
generateContentJson: function(B) {
var s=this,
A=B.message,
w=B.textColor,
z=B.buttonColor,
v=B.noGradient,
r=B.buttonTextColor,
m=B.linkTextColor,
q={
"p.addthis_bar_p": ""
}, p=B.action,
x=p.service || j.getTopService(),
y=p.type || "button",
u=p.verb,
n=j.serviceTemplate(p.text, x),
t=p.url || "";
if (s.actionJson[y]) {
return s.actionJson[y].call(s, {
message: A,
textColor: w,
buttonColor: z,
noGradient: v,
buttonTextColor: r,
linkTextColor: m,
action_verb: u,
action_text: n,
action_type: y
});
} else {
return q;
}
},
actionJson: {
button: function(u) {
var y=this,
D={}, F=y.configurableClassNames,
r=F.actions,
H=r.button,
v=r.link,
B=u.buttonColor,
m=u.noGradient,
s=m === true ? "" : j.gradients.cssString(B),
n=u.buttonTextColor,
p=u.action_verb,
q=u.action_type,
t=u.action_text,
z="p",
C=".addthis_bar_p",
w=p === "follow" ? ".addthis_bar_follow" : p === "link" ? ".addthis_bar_link" : ".addthis_bar_share",
G=z + C + w,
E=j.objectToStyle({
color: u.linkTextColor
}),
A=j.objectToStyle({
color: u.textColor
}),
x=function() {
var K={}, J=j.objectToStyle({
background: B,
border: "1px solid " + B,
color: n
}),
I={};
J=J + s;
if (q === "link") {
if (p!=="share"&&p!=="follow") {
K["a.addthis_bar_prevent_link_fire." + v.base + "." + v[p] + "." + r.base]={
style: E,
href: "#",
html: u.action_text
};
}
} else {
if (q === "email") {
I["button." + H.base + "." + H[p] + "." + r.base]={
style: J,
type: "button",
html: t
};
K["span.email-container"]=[{
"input.addthis_bar_email_input": {
type: "text",
placeholder: "Email Address"
}
},
I];
} else {
if (q === "none") {
K["span.addthis_bar_type_none"]="";
} else {
K["button." + H.base + "." + H[p] + "." + r.base]={
style: J,
type: "button",
html: t
};
}
}
}
return K;
}();
D[G]=[{
"span.addthis_bar_message": {
style: A,
html: u.message
}
},
x];
return D;
},
link: function(n) {
var m=this;
return m.actionJson.button.call(m, n);
},
email: function(n) {
var m=this;
return m.actionJson.button.call(m, n);
},
none: function(n) {
var m=this;
return m.actionJson.button.call(m, n);
}
},
setCurrentConfig: function(p) {
if (!j.isPlainObject(p)) {
return;
}
var m=this,
n=j.isPlainObject(m.temp) ? m.currentShowConfig : {};
m.currentShowConfig=j.extend(m.currentShowConfig, p);
},
getCurrentConfig: function() {
var m=this,
n=j.isPlainObject(m.temp) ? m.currentShowConfig : {};
return {
matchedConfig: m.options,
beenShown: n.beenShown,
userHide: n.hiddenByExplicitHide,
showCount: n.showCount,
pco: m.pco
};
},
checkCookieHidden: function() {
var m=this,
n=m.getRuleHash();
if (!n) {
return false;
}
var p=_ate.cookie.rck("__atbar" + n),
q=_ate.util.fromKV(p);
if (q.h === "1") {
return true;
}
return false;
},
getRuleHash: function() {
var m=this,
p=m.options,
s=p.rules,
r="",
q, n;
j.each(s, function(t, u) {
q=u;
r += "," + q;
});
r=r.substring(1);
n=_ate.mun(r);
return n;
},
setClosedCookie: function(p) {
var m=this,
n=m.getRuleHash();
return _ate.cookie.sck("__atbar" + n, "h=1", 0, 1);
}
});
}(g.utils, g.api, g.layer, g.qwery, g.rAF);
g.layers_whatsnext=function(j, d, k, b) {
d.addthisLayer("whatsnext", {
render: function() {
this.queueTrending(this.options.pubid, this.options.domain, function() {
this.superMethod("render");
});
return this;
},
pco: "smlwn-1.0",
device: "desktop",
async: true,
position: "bottom",
status: "closed",
locked: false,
element: "#at4-whatsnext",
contentElement: ".at-whatsnext-content",
closeControl: "#at4-wncc",
openControl: "#at4-wnoc",
showPlaceholderImages: false,
events: {
mouseenter: function(m, l) {
this.showControl(this.closeControl);
},
mouseleave: function(m, l) {
this.hideControl(this.closeControl);
},
"#at4-wncc click": function(m, l) {
j.trigger("addthis.layers.whatsnext.hide", c, this);
this.locked=true;
},
"!#at4-wnoc click": function(m, l) {
j.trigger("addthis.layers.whatsnext.show", c, this);
this.locked=true;
},
"addthis.layers.scroll": function(p, n) {
var m=j.scrollPercentage(),
l=this.status,
q=j.elementInViewport("#at4-recommended");
if (!this.locked&&k.drawerIsVisible!==true) {
if (q || m < 0.25) {
j.trigger("addthis.layers.whatsnext.hide", c, this);
} else {
if (!q&&m > 0.25) {
j.trigger("addthis.layers.whatsnext.show", c, this);
}
}
}
},
"addthis.layers.whatsnext.show": function(m, l) {
if (!j.hasClass(k.showClass, this.element)&&!j.isVisible(this.element)) {
this.hide(this.openControl, this["options"].hideAnimation);
this.show();
this.status="open";
}
},
"addthis.layers.whatsnext.hide": function(m, l) {
if (!j.hasClass(k.hideClass, this.element)&&j.isVisible(this.element)) {
this.hide();
this.show(this.openControl, this["options"].showAnimation);
this.status="closed";
}
}
},
prerender: function() {
var l={
"div.at4-whatsnext-outer-container": ""
};
return f.json2html(l);
},
generateJson: function() {
var t={}, m={}, p=[],
l=[],
u={}, s="",
r=this.options,
n=this.themes[r.theme] ? this.themes[r.theme] : "",
q;
m=this.buildTrending();
if (!m) {
return false;
}
if (m.image) {
p.push({
"div.at-whatsnext-content-img": {
a: {
id: "at-whatsnext-img-lnk",
surface: "whatsnext",
href: m.url || "#",
img: {
id: "at-whatsnext-img",
src: m.image,
alt: m.title,
title: m.title,
"data-secure": m.image._secureimage ? "true" : ""
}
}
}
});
} else {
s=".at-whatsnext-nophoto";
}
_ate.track.apc("smlwnt");
_ate.track.avp("#at-whatsnext-img-lnk", "smlwnt", "ttnl=1");
p.push({
"div.at-whatsnext-content-inner": [{
h6: r.recommendedTitle
}, {
h3: [{
"a.at-whatsnextTitle": {
id: "at-whatsnext-link",
href: m.url || "#",
html: m.title || "",
title: m.title
}
}]
}, {
small: {
id: "at-whatsnext-dom",
html: m.domain || ""
}
}]
});
p.push({
"a.at4-logo": {
href: "//www.addthis.com/?utm_source=dynto&utm_medium=img&utm_content=AT_main_WT&utm_campaign=AT_main",
target: "_blank",
html: "AddThis",
title: "AddThis"
}
});
t["div#at4-whatsnext.at4-whatsnext " + s + n]={
role: "region",
"aria-labelledby": "at4-whatsnext-label",
"h2#at4-whatsnext-label": {
html: "AddThis What's Next"
},
"div.at-whatsnext-content": p,
"div#at4-wncc.at-whatsnext-close-control.at4-arrow.at-down.at4-hide": {
html: "Hide",
title: "Hide"
}
};
u["div#at4-wnoc.at-whatsnext-open-control.at4-arrow.at-up." + k.hideClass]={
html: "Show",
title: "Show"
};
q=[t, u];
return {
"div.at4-whatsnext-outer": q
};
},
buildTrending: function() {
if (!this.feeds[this.options.pubid + this.options.domain]) {
return false;
}
var m=this.feeds[this.feedName()]=this.feeds[this.options.pubid + this.options.domain];
m.repeat=m.repeat ? m.repeat : 1;
var l=this.feedItem({
repeat: m.repeat,
sort: function(p, n) {
return !!p.image ? !! n.image ? 0 : -1 : 1;
}
});
if (l&&l.url) {
this.normalizeTrendingItem(l, {
itemCount: 1,
pos: 0
});
return l;
} else {
return false;
}
},
postEvents: function() {
var m=this,
n=b(".at-whatsnextTitle"),
l=b("#at-whatsnext-img");
m.superMethod("imageResizer", n, l);
m.superMethod("postEvents");
}
});
}(g.utils, g.api, g.layer, g.qwery);
g.load=function(k, j, b) {
var d=b.SmartLayers;
_adr.append(function() {
h=document;
a=h.body;
if ((!e.JSON || !e.JSON.stringify)&&!d.onpage) {
var l=new _ate.resource.Resource("json2", _atr + "static/r07/json2.js");
l.load();
}
if (c) {
c.user.ready(function() {
c.user.getPreferredServices(function(m) {
k.preferredServices=function() {
var s=[],
r;
j.each(m, function(t, u) {
r=u;
if (_ate.services.exists(r)) {
s.push(r);
}
});
return s;
}();
for (var p in m) {
if (m[p]&&!_ate.services.isTop(m[p].name, 32)&&!d.onpage) {
var n=new _ate.resource.Resource("widget32css", _atc.rsrcs.widget32css);
n.load();
break;
}
}
if (!d.onpage) {
var q=new _ate.resource.Resource("layerscss", _atc.rsrcs.layerscss);
q.load();
j.isCSSReady(function() {
addthis.layers=d;
j.trigger("addthis.layers.ready", c, {
pco: k.pco
});
});
} else {
addthis.layers=d;
j.trigger("addthis.layers.ready", c, {
pco: k.pco
});
}
});
c.bar={
pco: "wmb-1.0",
initialize: function(p, r) {
var n=c.layers.active_layers&&c.layers.active_layers.addthis&&c.layers.active_layers.addthis.welcome,
m, q;
if (n) {
if (!p || j.isString(p)) {
_ate.ed.fire("addthis.welcome.show", {}, {});
} else {
addthis.layers(function(s) {
m=n.options;
q=_ate.util.extend(m, p);
if (p === "render" || r === "render") {
n.updateExisting(q);
} else {
s.destroy("welcome");
addthis.layers({
welcome: q
});
}
});
}
} else {
addthis.layers({
welcome: p
});
}
},
show: function(m) {
c.bar.initialize(m, "render");
},
render: function(m) {
c.bar.initialize(m, "render");
},
hide: function() {
_ate.ed.fire("addthis.welcome.hide", {}, {});
}
};
_ate.ed.fire("addthis.bar.ready", c, {
pco: addthis.bar.pco
});
});
addthis.layers.ost=1;
}
});
}(g.layer, g.utils, g.api);
(function(r, q, n, s, k, b, m, l, p, d, j) {}(g.layers_drawer, g.layers_follow, g.layers_mobile, g.layers_recommended, g.layers_recommendedbox, g.layers_recommendedside, g.layers_share, g.layers_thankyou, g.layers_warning, g.layers_welcome, g.layers_whatsnext));
}(window, addthis, _ate.util));
