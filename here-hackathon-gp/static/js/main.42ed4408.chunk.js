(this["webpackJsonphere-hackathon"]=this["webpackJsonphere-hackathon"]||[]).push([[0],{118:function(e,t,a){"use strict";a.r(t);var r=a(1),c=a(0),n=a.n(c),o=a(20),s=a.n(o),i=(a(60),a(11)),l=a(12),u=a(15),d=a(14),p=(a(61),a(121)),m=a(122),v=a(123),h=a(6),f=a.n(h),_=a(16),y=a(24),O=a(120),j=a(125),w=a(10),b=a.n(w),g=a(25),D=(a(54),a(33)),P=[62,-1,-1,52,53,54,55,56,57,58,59,60,61,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-1,-1,-1,-1,63,-1,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51],C=Number;function x(e){var t=e;return t&C(1)&&(t=~t),+(t>>=C(1)).toString()}var S=function(e){for(var t=function(e){var t=C(0),a=C(0),r=[];if(e.split("").forEach((function(e){var c=C(function(e){var t=e.charCodeAt(0);return P[t-45]}(e));t|=(c&C(31))<<a,(c&C(32))===C(0)?(r.push(t),t=C(0),a=C(0)):a+=C(5)})),a>0)throw new Error("Invalid encoding");return r}(e),a=function(e,t){if(1!==+e.toString())throw new Error("Invalid format version");var a=+t.toString();return{precision:15&a,thirdDim:a>>4&7,thirdDimPrecision:a>>7&15}}(t[0],t[1]),r=Math.pow(10,a.precision),c=Math.pow(10,a.thirdDimPrecision),n=a.thirdDim,o=0,s=0,i=0,l=[],u=2;u<t.length;){if(o+=x(t[u])/r,s+=x(t[u+1])/r,n)i+=x(t[u+2])/c,l.push([o,s,i]),u+=3;else l.push([o,s]),u+=2}if(u!==t.length)throw new Error("Invalid encoding. Premature ending reached");return Object(D.a)(Object(D.a)({},a),{},{polyline:l})},N=a(22),L=a.n(N),k=a(8),T=a(46),E=a.n(T),M=a(47),A=a(17);function I(){return G.apply(this,arguments)}function G(){return(G=Object(_.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://services2.arcgis.com/9V7Qc4NIcvZBm0io/ArcGIS/rest/services/New_Zealand_Enrolled_General_Practitioner_Facilities/FeatureServer/0","/query?where=1%3D1&outFields=*&returnGeometry=true&resultRecordCount=5000&f=pgeojson",e.next=4,L.a.get("https://services2.arcgis.com/9V7Qc4NIcvZBm0io/ArcGIS/rest/services/New_Zealand_Enrolled_General_Practitioner_Facilities/FeatureServer/0/query?where=1%3D1&outFields=*&returnGeometry=true&resultRecordCount=5000&f=pgeojson").then((function(e){return e.data})).catch((function(e){console.log(e)}));case 4:return t=e.sent,e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function H(e){return z.apply(this,arguments)}function z(){return(z=Object(_.a)(f.a.mark((function e(t){var a,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://isoline.router.hereapi.com/v8/isolines?apiKey=".concat(A.HERE,"&transportMode=car&origin=").concat(t.lat,",").concat(t.lng,"&range[type]=distance&range[values]=3000&routingMode=fast"),e.next=3,L.a.get(a).then((function(e){return R(S(e.data.isolines[0].polygons[0].outer))})).catch((function(e){console.log(e)}));case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function R(e){for(var t=[],a=0;a<e.polyline.length;a++)t.push(e.polyline[a].reverse());return t.push(e.polyline[0]),Object(g.polygon)([t])}function B(e){return W.apply(this,arguments)}function W(){return(W=Object(_.a)(f.a.mark((function e(t){var a,r,c,n,o;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"SHAPE,SA12018_V1_00,C18_OccPrivDwelDamp_Always,C18_OccPrivDwelDamp_Sometimes,C18_OccPrivDwelDamp_TotalWith,C18_OccPrivDwelDamp_Not_Damp,C18_OccPrivDwelDamp_TStated,C18_OccPrivDwelDamp_NEI,C18_OccPrivDwelDamp_Total,C18_OccPrivDwelMould_Always,C18_OccPrivDwelMould_Sometimes,C18_OccPrivDwelMould_TotalWith,C18_OccPrivDwelMould_No_mould,C18_OccPrivDwelMould_TStated,C18_OccPrivDwelMould_NEI,C18_OccPrivDwelMould_Total",a="https://datafinder.stats.govt.nz/services;key=".concat(A.LINZ,"/wfs?service=WFS&version=2.0.0&request=GetFeature&typeNames=layer-104628&SRSName=EPSG:4326&PropertyName=").concat("SHAPE,SA12018_V1_00,C18_OccPrivDwelDamp_Always,C18_OccPrivDwelDamp_Sometimes,C18_OccPrivDwelDamp_TotalWith,C18_OccPrivDwelDamp_Not_Damp,C18_OccPrivDwelDamp_TStated,C18_OccPrivDwelDamp_NEI,C18_OccPrivDwelDamp_Total,C18_OccPrivDwelMould_Always,C18_OccPrivDwelMould_Sometimes,C18_OccPrivDwelMould_TotalWith,C18_OccPrivDwelMould_No_mould,C18_OccPrivDwelMould_TStated,C18_OccPrivDwelMould_NEI,C18_OccPrivDwelMould_Total","&outputformat=json"),r=J(2193,t),c=Object(M.stringify)(r),n="Intersects(SHAPE,".concat(c,")"),e.next=7,L.a.post(a,E.a.stringify({cql_filter:n}),{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then((function(e){return e.data})).catch((function(e){console.log(e)}));case 7:return o=e.sent,e.abrupt("return",F(o));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function F(e){for(var t=0;t<e.features.length;t++){var a=e.features[t].properties.C18_OccPrivDwelDamp_Total,r=e.features[t].properties.C18_OccPrivDwelDamp_Not_Damp,c=e.features[t].properties.C18_OccPrivDwelDamp_Sometimes,n=e.features[t].properties.C18_OccPrivDwelDamp_Always;if(0===a||-999===r)e.features[t].properties.hex_percent=0,e.features[t].properties.hex_colour="#fff";else{var o=(c+n)/a*100;e.features[t].properties.hex_percent=o,e.features[t].properties.hex_colour=Z(o,0,70)}}return e}function Z(e,t,a){var r=["#008080","#70a494","#b4c8a8","#f6edbd","#edbb8a","#de8a5a","#ca562c"],c=(a-t)/5;return t<1&&(t=1),e>=a?r[6]:e>t+4*c?r[5]:e>t+3*c?r[4]:e>t+2*c?r[3]:e>t+1*c?r[2]:e>=t?r[1]:r[0]}function V(e,t){var a=t;if(4326===(e=e||4326))return"".concat(a[0][0],",").concat(a[0][1],",").concat(a[1][0],",").concat(a[1][1]);if(3857===e){var r=Object(k.a)("EPSG:4326","EPSG:3857",a[0]),c=Object(k.a)("EPSG:4326","EPSG:3857",a[1]);return"".concat(r[1],",").concat(r[0],",").concat(c[1],",").concat(c[0])}if(4167===e){var n=Object(k.a)("EPSG:4326","EPSG:4167",a[0]),o=Object(k.a)("EPSG:4326","EPSG:4167",a[1]);return"".concat(n[1],",").concat(n[0],",").concat(o[1],",").concat(o[0])}if(2193===e){var s=Object(k.a)("EPSG:4326","EPSG:2193",a[0]),i=Object(k.a)("EPSG:4326","EPSG:2193",a[1]);return"".concat(s[1],",").concat(s[0],",").concat(i[1],",").concat(i[0])}}function J(e,t){if(4326===e)return t;if(2193===e){for(var a=0;a<t.geometry.coordinates[0].length;a++)t.geometry.coordinates[0][a]=Object(k.a)("EPSG:4326","EPSG:2193",t.geometry.coordinates[0][a]).reverse();return t}}k.a.defs("EPSG:2193","+proj=tmerc +lat_0=0 +lon_0=173 +k=0.9996 +x_0=1600000 +y_0=10000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs"),k.a.defs("EPSG:4167","+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs");var q=a(48),Q=a.n(q),Y=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var r;return Object(i.a)(this,a),(r=t.call(this,e)).sendToParent=function(e){r.props.callback(e)},r.addLayers=Object(_.a)(f.a.mark((function e(){var t,a,c,n,o,s;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(y.a)(r),a=r.state.map,c=V(2193,a.getBounds().toArray()),"SHAPE,SA12018_V1_00,C18_OccPrivDwelDamp_Always,C18_OccPrivDwelDamp_Sometimes,C18_OccPrivDwelDamp_TotalWith,C18_OccPrivDwelDamp_Not_Damp,C18_OccPrivDwelDamp_TStated,C18_OccPrivDwelDamp_NEI,C18_OccPrivDwelDamp_Total,C18_OccPrivDwelMould_Always,C18_OccPrivDwelMould_Sometimes,C18_OccPrivDwelMould_TotalWith,C18_OccPrivDwelMould_No_mould,C18_OccPrivDwelMould_TStated,C18_OccPrivDwelMould_NEI,C18_OccPrivDwelMould_Total",n="https://datafinder.stats.govt.nz/services;key=".concat(A.LINZ,"/wfs?service=WFS&version=2.0.0&request=GetFeature&typeNames=layer-104628&SRSName=EPSG:4326&BBOX=").concat(c,"&PropertyName=").concat("SHAPE,SA12018_V1_00,C18_OccPrivDwelDamp_Always,C18_OccPrivDwelDamp_Sometimes,C18_OccPrivDwelDamp_TotalWith,C18_OccPrivDwelDamp_Not_Damp,C18_OccPrivDwelDamp_TStated,C18_OccPrivDwelDamp_NEI,C18_OccPrivDwelDamp_Total,C18_OccPrivDwelMould_Always,C18_OccPrivDwelMould_Sometimes,C18_OccPrivDwelMould_TotalWith,C18_OccPrivDwelMould_No_mould,C18_OccPrivDwelMould_TStated,C18_OccPrivDwelMould_NEI,C18_OccPrivDwelMould_Total","&outputformat=json"),a.addSource("sa2-src",{type:"geojson",data:n}),a.addLayer({id:"sa2-lyr",type:"line",source:"sa2-src",minzoom:12,maxzoom:22,paint:{"line-color":"#ddd","line-width":1}}),a.addLayer({id:"sa2-lyr-fill",type:"fill",source:"sa2-src",minzoom:12,maxzoom:22,paint:{"fill-outline-color":"#ddd","fill-color":"#ddd","fill-opacity":.05}}),e.next=10,I();case 10:o=e.sent,"./assets/svgs/hospital-15.svg.png",a.loadImage("./assets/svgs/hospital-15.svg.png",(function(e,t){if(e)throw e;a.addImage("gp",t)})),a.addSource("clinics-src",{type:"geojson",data:o}),a.addLayer({id:"clinics-lyr",type:"symbol",source:"clinics-src",minzoom:8,maxzoom:22,layout:{"icon-image":"gp","icon-size":1.05,"icon-allow-overlap":!0}}),r.addLyrListControls(),a.on("mouseenter","clinics-lyr",(function(){a.getCanvas().style.cursor="pointer"})),a.on("mouseleave","clinics-lyr",(function(){a.getCanvas().style.cursor=""})),s=new b.a.Popup({closeOnClick:!1,offset:6}),a.on("click","clinics-lyr",function(){var e=Object(_.a)(f.a.mark((function e(r){var c,n,o,i;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.getCanvas().style.cursor="pointer",c="<h6>GP / Health Clinic</h6><strong>Name:</strong> "+r.features[0].properties.Name+"<br/><strong>Address:</strong> "+r.features[0].properties.Address+",<br/><strong>DHB:</strong> "+r.features[0].properties.DHB_Name+"<br/><strong>PHO:</strong> "+r.features[0].properties.PHO,s.setLngLat(r.lngLat).setHTML(c).addTo(a),t.activity(!0),e.next=6,H(r.lngLat);case 6:return n=e.sent,t.addIsoLayer(n),o=Object(g.bbox)(n),a.fitBounds(o,{padding:150}),e.next=12,B(n);case 12:i=e.sent,t.addStatisticsLayer(i);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),r.activity(!1);case 21:case"end":return e.stop()}}),e)}))),r.updateLayers=function(){var e=r.state.map,t=V(2193,e.getBounds().toArray());if(e.getSource("sa2-src")){var a=e.getSource("sa2-src"),c="https://datafinder.stats.govt.nz/services;key=".concat(A.LINZ,"/wfs?service=WFS&version=2.0.0&request=GetFeature&typeNames=layer-104628&SRSName=EPSG:4326&BBOX=").concat(t,"&PropertyName=").concat("SHAPE,SA12018_V1_00,C18_OccPrivDwelDamp_Always,C18_OccPrivDwelDamp_Sometimes,C18_OccPrivDwelDamp_TotalWith,C18_OccPrivDwelDamp_Not_Damp,C18_OccPrivDwelDamp_TStated,C18_OccPrivDwelDamp_NEI,C18_OccPrivDwelDamp_Total,C18_OccPrivDwelMould_Always,C18_OccPrivDwelMould_Sometimes,C18_OccPrivDwelMould_TotalWith,C18_OccPrivDwelMould_No_mould,C18_OccPrivDwelMould_TStated,C18_OccPrivDwelMould_NEI,C18_OccPrivDwelMould_Total","&outputformat=json");a.setData(c)}},r.addIsoLayer=function(e){var t=r.state.map;t.getLayer("iso-lyr")&&t.removeLayer("iso-lyr"),t.getLayer("iso-lyr-fill")&&t.removeLayer("iso-lyr-fill"),t.getSource("iso-src")&&t.removeSource("iso-src"),t.addSource("iso-src",{type:"geojson",data:e}),t.addLayer({id:"iso-lyr",type:"line",source:"iso-src",minzoom:2,maxzoom:22,paint:{"line-color":"#000","line-width":2}}),t.on("mouseenter","iso-lyr",(function(){t.getCanvas().style.cursor="pointer"})),t.on("mouseleave","iso-lyr",(function(){t.getCanvas().style.cursor=""})),t.moveLayer("clinics-lyr"),r.activity(!1)},r.addStatisticsLayer=function(e){r.activity(!0);var t=r.state.map;t.getLayer("results-lyr")&&t.removeLayer("results-lyr"),t.getLayer("results-lyr-fill")&&t.removeLayer("results-lyr-fill"),t.getSource("results-src")&&t.removeSource("results-src"),t.addSource("results-src",{type:"geojson",data:e}),t.addLayer({id:"results-lyr",type:"line",source:"results-src",minzoom:2,maxzoom:22,paint:{"line-color":"#000","line-width":1}}),t.addLayer({id:"results-lyr-fill",type:"fill",source:"results-src",minzoom:2,maxzoom:22,paint:{"fill-color":["get","hex_colour"],"fill-opacity":.85}});var a=new b.a.Popup({closeButton:!1,closeOnClick:!1});t.on("mousemove","results-lyr-fill",(function(e){t.getCanvas().style.cursor="pointer";var r="According to the 2018 Census,<br/><strong>"+e.features[0].properties.hex_percent.toFixed(0)+"%</strong> of homes in this area were<br/>reported as damp or mouldy.";a.setLngLat(e.lngLat).setHTML(r).addTo(t)})),t.on("mouseenter","results-lyr",(function(e){t.getCanvas().style.cursor="pointer";var r="According to the 2018 Census,<br/><strong>"+e.features[0].properties.hex_percent.toFixed(0)+"%</strong> of homes in this area were<br/>reported as damp or mouldy.";a.setLngLat(e.lngLat).setHTML(r).addTo(t)})),t.on("mouseleave","results-lyr-fill",(function(){t.getCanvas().style.cursor="",a.remove()})),t.on("mouseleave","results-lyr",(function(){t.getCanvas().style.cursor="",a.remove()})),t.moveLayer("iso-lyr"),t.moveLayer("clinics-lyr"),r.activity(!1)},r.addLyrListControls=function(){for(var e=r.state.map,t=[{id:"clinics-lyr",label:"GP / Health Clinics",legend:'<span class="dot-legend" style="background-color: #fff"></span>'}],a=0;a<t.length;a++){var c=t[a].id,n=t[a].label,o=t[a].legend,s=o||"",i=document.createElement("a"),l=e.getLayoutProperty(t[a].id,"visibility");i.href="#",i.className="none"===l?"":"active",i.innerHTML=n+s,i.id=c,i.onclick=function(t){var a=this.id;t.preventDefault(),t.stopPropagation(),"none"===e.getLayoutProperty(a,"visibility")?(e.setLayoutProperty(a,"visibility","visible"),this.className="active"):(e.setLayoutProperty(a,"visibility","none"),this.className="")},document.getElementById("menu").appendChild(i)}},r.addCustomControls=function(e){var t=new Q.a({accessToken:b.a.accessToken,mapboxgl:b.a,countries:"nz",placeholder:"Find address or place"}),a=new b.a.NavigationControl,r=new b.a.ScaleControl({maxWidth:80,unit:"metric"});e.addControl(t,"top-left"),e.addControl(a,"top-left"),e.addControl(r)},r.activity=function(e){r.setState({activity:e})},r.fly=function(e){switch(e){case"akl":r.state.map.flyTo({center:[174.763641,-36.860944],zoom:10});break;case"wgn":r.state.map.flyTo({center:[174.778404,-41.287739],zoom:11});break;case"chc":r.state.map.flyTo({center:[172.635405,-43.525003],zoom:11})}},r.mapRef=n.a.createRef(),r.state={map:null,selection:[],popup:null,activity:!0},r}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;b.a.accessToken="pk.eyJ1Ijoib3JiaWNhIiwiYSI6ImNqcmxhazIwZzA2ajA0YW11cHc3OGM3M3AifQ.wTbR1Nh5HxJi8xLu0HLREQ";var t=174.763641,a=-36.860944,r=10,c="mapbox://styles/mapbox/light-v9",n=new b.a.Map({container:"map",style:c,center:[t,a],zoom:r});this.setState({map:n}),n.on("load",(function(){e.addLayers()})),n.on("moveend",(function(){e.updateLayers()})),this.addCustomControls(n)}},{key:"render",value:function(){var e=this;return Object(r.jsx)("div",{id:"container",children:Object(r.jsxs)("div",{id:"map",children:[this.state.activity?Object(r.jsx)(O.a,{variant:"primary",animation:"border",id:"acty"}):null,Object(r.jsx)("div",{id:"shortcuts",children:Object(r.jsxs)(j.a,{className:"justify-content-center",children:[Object(r.jsx)(j.a.Item,{children:Object(r.jsx)(j.a.Link,{href:"#akl",className:"short",onClick:function(t){return e.fly("akl")},children:"Auckland"})}),Object(r.jsx)(j.a.Item,{children:Object(r.jsx)(j.a.Link,{href:"#wgn",className:"short",onClick:function(t){return e.fly("wgn")},children:"Wellington"})}),Object(r.jsx)(j.a.Item,{children:Object(r.jsx)(j.a.Link,{href:"#chc",className:"short",onClick:function(t){return e.fly("chc")},children:"Christchurch"})})]})}),Object(r.jsx)("nav",{id:"menu",children:Object(r.jsx)("span",{id:"menu-title",children:"Map Layers"})})]})})}}]),a}(n.a.Component),K=a(124),X=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(r.jsxs)(K.a,{variant:"light",bg:"light",expand:"lg",sticky:"top",children:[Object(r.jsx)(K.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(r.jsxs)(K.a.Collapse,{id:"basic-navbar-nav",children:[Object(r.jsx)("span",{className:"header-text text-dark",children:"GP / Health Analysis Tool"}),Object(r.jsxs)(j.a,{className:"mr-auto",children:[Object(r.jsx)(j.a.Link,{href:"#",children:"\xa0"}),Object(r.jsx)(j.a.Link,{href:"#",children:"A HERE Hackathon Project"})]})]})]})}}]),a}(n.a.Component),U=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,c=new Array(r),n=0;n<r;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).state={modal:!1},e.sendToParent=function(t){e.props.callback(t)},e.resetView=function(){window.location.reload(1)},e.showModal=function(){e.setState({modal:!0})},e.hideModal=function(){e.setState({modal:!1})},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"panel-text",children:[Object(r.jsxs)("div",{className:"card mb-3",children:[Object(r.jsxs)("div",{className:"card-body",children:[Object(r.jsx)("h5",{className:"card-title",children:"GP Clinic Locations"}),Object(r.jsx)("h6",{className:"card-subtitle text-muted",children:"Health Risk Analysis Tool"})]}),Object(r.jsx)("img",{src:"/assets/ani-kolleshi-7jjnJ-QA9fY-unsplash.jpg",alt:"",className:"img-responsive",id:"play"}),Object(r.jsxs)("div",{className:"card-body",children:[Object(r.jsx)("p",{className:"card-text",children:"This tool aims to assist health clinic officials in New Zealand. It helps to identify the most at risk patient locations in relation to a clinic."}),Object(r.jsx)("p",{className:"card-text",children:"Click on a health clinic to begin - this will generate a clinic service area and symbolise the most at risk areas. This information is calculated from damp and mouldy housing statistics (2018 New Zealand Census)."}),Object(r.jsx)("hr",{style:{width:"50%"}}),Object(r.jsx)("p",{className:"card-text",children:"Built with HERE, HERE APIs, Stats NZ data, React, Bootstrap, and Carto Colours."}),Object(r.jsx)("a",{href:"https://github.com/nzjs",rel:"noreferrer",target:"_blank",className:"card-link",children:"Developed by John Stowell"})]}),Object(r.jsx)("div",{className:"card-footer text-muted"})]}),Object(r.jsxs)("div",{className:"card",children:[Object(r.jsxs)("div",{className:"card-body",children:[Object(r.jsx)("h5",{className:"card-title",children:"Map Legend"}),Object(r.jsxs)("div",{className:"legend",children:[Object(r.jsx)("span",{className:"legend-title",children:"Health Risk (Damp Housing)"}),Object(r.jsx)("span",{className:"left fff",children:"Less"}),Object(r.jsx)("span",{className:"right fff",children:"More"})]})]}),Object(r.jsx)("div",{className:"card-footer text-muted"})]})]})})}}]),a}(n.a.Component),$=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,c=new Array(r),n=0;n<r;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).state={selection:null,isLoading:!0},e.callbackSelection=function(t){e.setState({selection:t})},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(X,{}),Object(r.jsx)(p.a,{fluid:!0,children:Object(r.jsxs)(m.a,{children:[Object(r.jsx)(v.a,{xs:12,md:3,className:"panel",children:Object(r.jsx)(U,{})}),Object(r.jsx)(v.a,{xs:12,md:9,className:"panel-mapbox",children:Object(r.jsx)(Y,{callback:this.callbackSelection})})]})})]})}}]),a}(n.a.Component);s.a.render(Object(r.jsx)(n.a.StrictMode,{children:Object(r.jsx)($,{})}),document.getElementById("root"))},17:function(e,t){e.exports={HERE:"8A2g5AjfRMpTn59J9SB0m_AWBgO6B0lzzGtNsArwCt4",H_DATA_ID:"pO2YTR8X",H_DATA:"AKkxwrw0T9KZYZQ2NmVRigA",LINZ:"07c372d6ebee4ab393bfc9b47ead5e63"}},60:function(e,t,a){},61:function(e,t,a){}},[[118,1,2]]]);
//# sourceMappingURL=main.42ed4408.chunk.js.map