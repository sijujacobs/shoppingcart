(this.webpackJsonpshoppingcart=this.webpackJsonpshoppingcart||[]).push([[0],{27:function(t,e,a){t.exports=a(55)},54:function(t,e,a){},55:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),c=a(6),o=a.n(c),s=a(19),i=a(20),u=a(25),l=a(21),m=a(26),d=a(1),p=a(23),h=a.n(p),f=Object(d.b)((function(t){return{cartItems:t.cartReducer.cartItems}}))((function(t){return r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"logoSection"},"IMPETUS"),r.a.createElement("div",{className:"statusSection"},r.a.createElement("span",{className:"cartStatus"},t.cartItems.length+" : Items")))})),E=Object(d.b)(null,(function(t){return{removeItem:function(e){return t({type:"REMOVE_ITEM",payload:e})}}}))((function(t){return r.a.createElement("div",{className:"cartItem fadeItem"},r.a.createElement("div",{className:"itemImage"},r.a.createElement("img",{alt:"itemImage",src:t.item.thumbnailUrl})),r.a.createElement("div",{className:"itemDesc"},t.item.title.substring(0,10)),r.a.createElement("div",{className:"buttonSection"},r.a.createElement("button",{className:"button",onClick:function(){return e=t.item,void t.removeItem(e);var e}},"Remove")))})),v=Object(d.b)((function(t){return{cartItems:t.cartReducer.cartItems}}))((function(t){return r.a.createElement("div",{className:"cart"},t.cartItems&&t.cartItems.length>0&&t.cartItems.map((function(t){return r.a.createElement(E,{key:t.id,item:t})})))})),I=Object(d.b)(null,(function(t){return{addToCart:function(e){return t({type:"ADD_TO_CART",payload:e})}}}))((function(t){return r.a.createElement("div",{className:"productDetails"},r.a.createElement("div",{className:"productImage"},r.a.createElement("img",{alt:"productImage",src:t.product.thumbnailUrl})),r.a.createElement("div",{className:"productDesc"},t.product.title.substring(0,10)),r.a.createElement("div",{className:"buttonSection"},r.a.createElement("button",{className:"button",onClick:function(){return function(e){console.log(" addToCartHandler :: props.cartItems : ",t.cartItems);var a=t.cartItems.find((function(t){return t.id===e.id}));a&&a.id>0?alert("Item already added to Cart"):t.addToCart(t.product)}(t.product)}},"Add to Cart")))})),b=Object(d.b)((function(t){return{photos:t.photoReducer.photos,cartItems:t.cartReducer.cartItems}}))((function(t){return r.a.createElement("div",{className:"productList"},t.photos&&t.photos.length>0&&t.photos.map((function(e){return r.a.createElement(I,{key:e.id,product:e,cartItems:t.cartItems})})))})),g=function(){return r.a.createElement("div",{className:"footer"},"Footer")},O=(a(54),function(t){function e(){return Object(s.a)(this,e),Object(u.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(i.a)(e,[{key:"componentDidMount",value:function(){this.props.getPhotosByThunkAxios()}},{key:"render",value:function(){return r.a.createElement("div",{className:"appContainer"},r.a.createElement(f,null),r.a.createElement(b,null),r.a.createElement(v,null),r.a.createElement(g,null))}}]),e}(r.a.Component)),y=Object(d.b)(null,(function(t){return{getPhotosByThunkAxios:function(){return t((function(t){return h.a.get("https://jsonplaceholder.typicode.com/photos").then((function(e){return t({type:"GET_PHOTOS",payload:e.data.splice(4900)})})).catch((function(t){console.log("getPhotosByThunkAxios :: ERROR : ",t)}))}))}}}))(O);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var T=a(4),N=a(24),j={photos:[]},R=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"GET_PHOTOS":return{photos:e.payload};default:return t}},k={cartItems:[]},C=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,e=arguments.length>1?arguments[1]:void 0;switch(console.log(" cartReducer :: AddToCart : state - ",t,", action - ",e),e.type){case"GET_CART_ITEMS":case"ADD_TO_CART":return Object.assign({},t,{cartItems:t.cartItems.concat(e.payload)});case"REMOVE_ITEM":return Object.assign({},t,{cartItems:t.cartItems.filter((function(t){return e.payload.id!==t.id}))});default:return t}},w=Object(T.c)({photoReducer:R,cartReducer:C}),A=Object(T.d)(w,Object(T.a)(N.a));o.a.render(r.a.createElement(d.a,{store:A},r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[27,1,2]]]);
//# sourceMappingURL=main.400c5a19.chunk.js.map