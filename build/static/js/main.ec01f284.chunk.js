(this["webpackJsonpap-memcached-demo"]=this["webpackJsonpap-memcached-demo"]||[]).push([[0],{131:function(e,t,r){},158:function(e,t,r){"use strict";r.r(t);var s=r(0),c=r.n(s),n=r(12),a=r.n(n),i=(r(43),r(40)),l=r.n(i),d=r(61),o=r(32),u=(r(131),r(31)),b=r(164),x=r(65),h=r(6),m=function(e){var t=e.results,r=e.onClick,s=e.selected,c=t.map((function(e){return Object(h.jsxs)("tr",{className:"hover:bg-blue-400 ".concat(s===e.address&&"bg-blue-200"),onClick:function(){return r(e.address)},children:[Object(h.jsx)("td",{class:"px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900",children:e.address}),Object(h.jsx)("td",{class:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:e.balance})]})}));return Object(h.jsx)("div",{class:"flex flex-col",children:Object(h.jsx)("div",{class:"-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8",children:Object(h.jsx)("div",{class:"py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8",children:Object(h.jsx)("div",{class:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg",children:Object(h.jsxs)("table",{class:"min-w-full divide-y divide-gray-200",children:[Object(h.jsx)("thead",{class:"bg-gray-50",children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium bg-gray-200 uppercase tracking-wider",children:"Address"}),Object(h.jsx)("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium bg-gray-200 uppercase tracking-wider",children:"Balance"})]})}),Object(h.jsx)("tbody",{class:"bg-white divide-y divide-gray-200",children:c})]})})})})})},j=3e5,A={},p={},g={has:function(e){return Date.now()-p[e]<j},get:function(e){return p[e]=Date.now(),A[e]},set:function(e,t){A[e]=t,p[e]=Date.now()},flush:function(){var e=Date.now();for(var t in p)e-p[t]>j&&(delete p[t],delete A[t])}};g.handler=setInterval(g.flush,j);var f=g,O=function(e){var t=e.addresses,r=e.selected,s=e.setSelected;return Object(h.jsx)(m,{results:t,selected:r,onClick:function(e){return s(e)}})},w=function(e){var t=e.tx;if(!t.result)return"none";return console.log(t.result),Object(h.jsxs)(b.a,{numRows:t.result.length,children:[Object(h.jsx)(x.a,{name:"hash",cellRenderer:function(e){return Object(h.jsx)(u.a,{children:t.result[e].hash})}}),Object(h.jsx)(x.a,{name:"from",cellRenderer:function(e){return Object(h.jsx)(u.a,{children:t.result[e].from})}}),Object(h.jsx)(x.a,{name:"to",cellRenderer:function(e){return Object(h.jsx)(u.a,{children:t.result[e].to})}}),Object(h.jsx)(x.a,{name:"timestamp",cellRenderer:function(e){return Object(h.jsxs)(u.a,{children:[t.result[e].timeStamp," "]})}})]})},N="U8H4W5FISNII21GRNASJ1VJ1KGKPJ2K7KR",v=function(e){return"https://api.etherscan.io/api?module=account&action=balance&address=".concat(e,"&tag=latest&apikey=").concat(N)},C=localStorage.getItem("addresses")?JSON.parse(localStorage.getItem("addresses")):[];var S=function(){var e=Object(s.useState)(C),t=Object(o.a)(e,2),r=t[0],c=t[1],n=Object(s.useState)(""),a=Object(o.a)(n,2),i=a[0],u=a[1],b=Object(s.useState)(),x=Object(o.a)(b,2),m=x[0],j=x[1],A=Object(s.useState)(""),p=Object(o.a)(A,2),g=p[0],S=p[1],y=Object(s.useRef)();Object(s.useEffect)((function(){if(f.has(m))return u(f.get(m));var e;fetch((e=m,"https://api.etherscan.io/api?module=account&action=txlist&address=".concat(e,"&startblock=0&endblock=99999999&sort=asc&apikey=").concat(N))).then((function(e){return e.json()})).then((function(e){u(e),f.set(m,e)}))}),[m]);var K=function(){var e=Object(d.a)(l.a.mark((function e(){var t,s,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=y.current.value,e.next=3,fetch(v(t)).then((function(e){return e.json()}));case 3:if("NOTOK"!==(s=e.sent).message){e.next=6;break}return e.abrupt("return",alert(t+" invalid"));case 6:n=r.concat({address:t,balance:s.result}),c(n),localStorage.setItem("addresses",JSON.stringify(n)),y.current.value="";case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:"p-5 border-b border-gray-50 h-full sm:flex sm:items-center sm:justify-between bg-black mb-10",children:[Object(h.jsxs)("h3",{className:"text-lg leading-6 font-medium text-white",children:[Object(h.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFKSURBVHgBzVXtUcMwDFW4DtARMgIbkA3ICGECYIKGCWCDhAkoE7QbBCYgG9AN3KeLc1VUy3Fz/dF3p1bRx7NsKQ5RIpxzOzfgna4JEJZuivuUvDtKw2HmeR6oKPfb/4Ksla+CdJAikNd4Xx4jL2Nbh602Chox8a9U7B7yCXmgy7beQ34h7WwkH4k/mlzZazqvehc9jtQFJPli4tAC3EihpxNz86xAv0Cn5ryLxJ+4+I0TSYVBrvFvEE+4Mv4V/h/It8rheX8OcL0FbBuht/LOYFQUruhPVd4Ycedcbnh5CiNhbGrLxwH58PraiDe5LOLcP9fCbi5wMbEkt/waqwBp5dVHyGuWZX0oEfYDYp+gNvgfh2DLdjKqLWfGsg7Y5MX1EqucR7H3ek8J4J2BlGP5/Pe0BG64s3laNoZ/cXNv/DMXAzcLstVNi+EI7uQAbKeyacoAAAAASUVORK5CYII=",className:"inline pl-5 pr-5"}),Object(h.jsx)("span",{children:"TRM"})]}),Object(h.jsx)("div",{className:"mt-3 flex sm:mt-0 sm:ml-4",children:Object(h.jsx)("img",{className:"rounded-full",src:"data:image/png;base64,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"})})]}),Object(h.jsxs)("div",{className:"max-w-7xl p-10 flex Container",children:[Object(h.jsxs)("div",{className:"flex-1",children:[Object(h.jsx)("h1",{className:"text-4xl pb-5",children:"Time to start monitoring."}),Object(h.jsx)("label",{className:"pb-3 block font-medium text-gray-700 text-lg",children:"Address"}),Object(h.jsx)("div",{className:"mt-1",children:Object(h.jsx)("input",{ref:y,type:"text",placeholder:"Enter Ethereum Address",className:" mb-5 p-3 border-gray bg-white shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full  border border-gray-100sm:text-sm border-gray-300 "})}),Object(h.jsxs)("button",{className:"bg-blue-500 text-white px-5 p-3 br-2 mb-5 rounded",onClick:K,children:[Object(h.jsx)("span",{className:"pr-3 icon"}),"Add Address"]}),Object(h.jsxs)("div",{className:"inline",children:[Object(h.jsx)("label",{className:"pb-3 font-medium text-gray-700 text-lg pl-5",children:"Filter"}),Object(h.jsx)("input",{className:" mb-5 ml-2 p-3 border-gray bg-white shadow-sm focus:ring-indigo-500 focus:border-indigo-500  border border-gray-100sm:text-sm border-gray-300 ",type:"text",placeHolder:"filter",onChange:function(e){return S(e.target.value)}})]}),Object(h.jsx)(O,{addresses:r.filter((function(e){return e.address.match(g)})),selected:m,setSelected:j})]}),Object(h.jsx)("div",{className:"pl-20 flex-initial",children:m&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("h3",{className:"text-lg mt-5 pb-5",children:["Transactions for ",m]}),Object(h.jsx)(w,{tx:i})]})})]})]})},y=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,165)).then((function(t){var r=t.getCLS,s=t.getFID,c=t.getFCP,n=t.getLCP,a=t.getTTFB;r(e),s(e),c(e),n(e),a(e)}))};a.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(S,{})}),document.getElementById("root")),y()},43:function(e,t,r){}},[[158,1,2]]]);
//# sourceMappingURL=main.ec01f284.chunk.js.map