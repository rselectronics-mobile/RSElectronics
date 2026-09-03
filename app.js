let brand="";
const $=id=>document.getElementById(id);
function wa(n){return "https://wa.me/918840725164?text="+encodeURIComponent("Hello R.S. Electronics, please share today's price for "+n);}
function brandsUI(){ $("brandrow").innerHTML=brands.map(b=>`<button class="brand ${brand===b?"sel":""}" onclick="setBrand('${b}')">${b}</button>`).join("");}
function productUI(list=products){
 let a=brand?list.filter(p=>p.brand===brand):list;
 $("products").innerHTML=a.length?a.map((p,i)=>{let n=products.indexOf(p);return `<article class="card"><label>NEW</label><div class="visual"><div class="device d${n%6}"></div></div><h3>${p.name}</h3><small>${p.variant}</small><b class="price">Ask Today's Price</b><div class="cardbuttons"><a href="${wa(p.name)}" target="_blank">WhatsApp</a><button onclick="details(${n})">Details</button></div></article>`}).join(""):`<p class="empty">This brand's models are not added yet. <a href="https://wa.me/918840725164" target="_blank">Ask on WhatsApp →</a></p>`;
}
function setBrand(b){brand=brand===b?"":b;brandsUI();productUI();document.querySelector("#phones").scrollIntoView({behavior:"smooth"});}
function details(i){window.open(wa(products[i].name),"_blank");}
function searchPhone(){let q=$("search").value.toLowerCase().trim();brand="";brandsUI();productUI(q?products.filter(p=>(p.name+" "+p.brand).toLowerCase().includes(q)):products);}
function findPhone(){let n=$("purpose").value;let a=products.filter(p=>!n||p.needs.includes(n)).slice(0,2);$("finder").innerHTML=a.length?`Try: <b>${a.map(p=>p.name).join(" / ")}</b><br><a href="${wa(a[0].name)}" target="_blank">Ask today's price →</a>`:"Please choose a purpose.";}
function opts(){let o='<option value="">Select phone</option>'+products.map((p,i)=>`<option value="${i}">${p.name}</option>`).join("");["c1","c2","c3"].forEach(id=>$(id).innerHTML=o);}
function compare(){let a=["c1","c2","c3"].map(x=>$(x).value).filter(Boolean);$("compare").innerHTML=a.length>=2?a.map(x=>{let p=products[x];return `<div class="compareitem"><b>${p.name}</b><small>${p.brand} • ${p.variant} • Price on WhatsApp</small></div>`}).join(""):"<p>Select at least two phones.</p>";}
brandsUI();productUI();opts();