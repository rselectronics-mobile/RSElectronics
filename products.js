const products = [
/* Apple — official India prices verified 04 Sep 2026 */
{name:"iPhone 17 Pro",brand:"Apple",variant:"Base",price:"₹1,34,900",year:2025,official:"https://www.apple.com/in/iphone-17-pro/",imageUrl:"",needs:["Camera","Premium"]},
{name:"iPhone 17 Pro Max",brand:"Apple",variant:"Base",price:"₹1,34,900+",year:2025,official:"https://www.apple.com/in/iphone-17-pro/",imageUrl:"",needs:["Camera","Premium"]},
{name:"iPhone Air",brand:"Apple",variant:"Base",price:"₹1,19,900",year:2025,official:"https://www.apple.com/in/iphone-air/",imageUrl:"",needs:["Premium","Battery"]},
{name:"iPhone 17",brand:"Apple",variant:"Base",price:"₹82,900",year:2025,official:"https://www.apple.com/in/iphone-17/",imageUrl:"",needs:["Camera","Premium"]},
{name:"iPhone 17e",brand:"Apple",variant:"Base",price:"₹64,900",year:2026,official:"https://www.apple.com/in/iphone-17e/",imageUrl:"",needs:["Premium","Battery"]},

/* Samsung — official India catalog/series pages; price can vary by variant */
{name:"Galaxy S26 Ultra",brand:"Samsung",variant:"See official India page",price:"Check Official Price",year:2026,official:"https://www.samsung.com/in/smartphones/galaxy-s26-ultra/",imageUrl:"",needs:["Camera","Premium"]},
{name:"Galaxy S26+",brand:"Samsung",variant:"See official India page",price:"Check Official Price",year:2026,official:"https://www.samsung.com/in/smartphones/galaxy-s26-plus/",imageUrl:"",needs:["Premium","Battery"]},
{name:"Galaxy S26",brand:"Samsung",variant:"See official India page",price:"Check Official Price",year:2026,official:"https://www.samsung.com/in/smartphones/galaxy-s26/",imageUrl:"",needs:["Premium","Battery"]},
{name:"Galaxy Z Fold7",brand:"Samsung",variant:"See official India page",price:"Check Official Price",year:2025,official:"https://www.samsung.com/in/smartphones/galaxy-z-fold7/",imageUrl:"",needs:["Premium"]},
{name:"Galaxy Z Flip7",brand:"Samsung",variant:"See official India page",price:"Check Official Price",year:2025,official:"https://www.samsung.com/in/smartphones/galaxy-z-flip7/",imageUrl:"",needs:["Premium"]},
{name:"Galaxy A57 5G",brand:"Samsung",variant:"See official India catalog",price:"Check Official Price",year:2026,official:"https://www.samsung.com/in/smartphones/galaxy-a/",imageUrl:"",needs:["Camera","Battery"]},
{name:"Galaxy A37 5G",brand:"Samsung",variant:"See official India catalog",price:"Check Official Price",year:2026,official:"https://www.samsung.com/in/smartphones/galaxy-a/",imageUrl:"",needs:["Battery"]},

/* Xiaomi / Redmi — official store prices verified from current India store listing */
{name:"Xiaomi 17 Ultra",brand:"Xiaomi",variant:"16GB + 512GB",price:"₹1,39,999",year:2026,official:"https://www.mi.com/in/phone/xiaomi-17-ultra/",imageUrl:"",needs:["Camera","Premium"]},
{name:"Xiaomi 17",brand:"Xiaomi",variant:"12GB + 512GB",price:"₹89,999",year:2026,official:"https://www.mi.com/in/phone/xiaomi-17/",imageUrl:"",needs:["Premium","Battery"]},
{name:"Xiaomi 17T",brand:"Xiaomi",variant:"12GB + 256GB",price:"₹64,999",year:2026,official:"https://www.mi.com/in/phone/",imageUrl:"",needs:["Premium","Camera"]},
{name:"Redmi Turbo 5",brand:"Xiaomi",variant:"8GB + 256GB",price:"₹41,999",year:2026,official:"https://www.mi.com/in/phone/",imageUrl:"",needs:["Gaming","Battery"]},
{name:"Redmi Note 15 Pro+ 5G",brand:"Xiaomi",variant:"8GB + 256GB",price:"₹39,999",year:2026,official:"https://www.mi.com/in/phone/",imageUrl:"",needs:["Camera","Battery"]},
{name:"Redmi Note 15 5G",brand:"Xiaomi",variant:"8GB + 128GB",price:"₹28,999",year:2026,official:"https://www.mi.com/in/phone/",imageUrl:"",needs:["Battery"]},
{name:"Redmi Note 17 5G",brand:"Xiaomi",variant:"6GB + 128GB",price:"₹27,999",year:2026,official:"https://www.mi.com/in/phone/",imageUrl:"",needs:["Camera","Battery"]},
{name:"Redmi Note 15 SE 5G",brand:"Xiaomi",variant:"6GB + 128GB",price:"₹25,999",year:2026,official:"https://www.mi.com/in/phone/",imageUrl:"",needs:["Battery"]},
{name:"Redmi 15C 5G",brand:"Xiaomi",variant:"4GB + 128GB",price:"₹18,499",year:2026,official:"https://www.mi.com/in/phone/",imageUrl:"",needs:["Battery"]},
{name:"Redmi 15A 5G",brand:"Xiaomi",variant:"4GB + 64GB",price:"₹16,499",year:2026,official:"https://www.mi.com/in/phone/",imageUrl:"",needs:["Battery"]},
{name:"Redmi A7 Pro 5G",brand:"Xiaomi",variant:"4GB + 64GB",price:"₹14,999",year:2026,official:"https://www.mi.com/in/phone/",imageUrl:"",needs:["Battery"]},
{name:"Redmi A7",brand:"Xiaomi",variant:"3GB + 64GB",price:"₹12,999",year:2026,official:"https://www.mi.com/in/phone/",imageUrl:"",needs:["Battery"]},

/* OnePlus — official India offer table verified 01–06 Sep 2026 */
{name:"OnePlus 15",brand:"OnePlus",variant:"12GB + 256GB",price:"₹73,099",year:2025,official:"https://www.oneplus.in/oneplus-15",imageUrl:"",needs:["Premium","Gaming"]},
{name:"OnePlus 15",brand:"OnePlus",variant:"16GB + 512GB",price:"₹79,899",year:2025,official:"https://www.oneplus.in/oneplus-15",imageUrl:"",needs:["Premium","Gaming"]},
{name:"OnePlus 15R",brand:"OnePlus",variant:"12GB + 256GB",price:"₹50,999",year:2026,official:"https://www.oneplus.in/",imageUrl:"",needs:["Gaming","Battery"]},
{name:"OnePlus 15R",brand:"OnePlus",variant:"12GB + 512GB",price:"₹55,249",year:2026,official:"https://www.oneplus.in/",imageUrl:"",needs:["Gaming","Premium"]},
{name:"OnePlus 15R",brand:"OnePlus",variant:"16GB + 512GB",price:"₹56,949",year:2026,official:"https://www.oneplus.in/",imageUrl:"",needs:["Gaming","Premium"]},
{name:"OnePlus 13s",brand:"OnePlus",variant:"12GB + 256GB",price:"₹46,749",year:2025,official:"https://www.oneplus.in/13s",imageUrl:"",needs:["Gaming","Premium"]},
{name:"OnePlus 13s",brand:"OnePlus",variant:"12GB + 512GB",price:"₹50,999",year:2025,official:"https://www.oneplus.in/13s",imageUrl:"",needs:["Gaming","Premium"]},
{name:"OnePlus Nord 6",brand:"OnePlus",variant:"8GB + 256GB",price:"₹39,949",year:2026,official:"https://www.oneplus.in/",imageUrl:"",needs:["Gaming","Battery"]},
{name:"OnePlus Nord 6",brand:"OnePlus",variant:"12GB + 256GB",price:"₹45,049",year:2026,official:"https://www.oneplus.in/",imageUrl:"",needs:["Gaming","Battery"]},
{name:"OnePlus Nord CE6",brand:"OnePlus",variant:"8GB + 128GB",price:"₹32,299",year:2026,official:"https://www.oneplus.in/",imageUrl:"",needs:["Battery"]},
{name:"OnePlus Nord CE6",brand:"OnePlus",variant:"8GB + 256GB",price:"₹35,699",year:2026,official:"https://www.oneplus.in/",imageUrl:"",needs:["Battery"]},
{name:"OnePlus Nord CE6 Lite",brand:"OnePlus",variant:"6GB + 128GB",price:"₹24,649",year:2026,official:"https://www.oneplus.in/",imageUrl:"",needs:["Battery"]},
{name:"OnePlus Nord CE6 Lite",brand:"OnePlus",variant:"8GB + 256GB",price:"₹29,749",year:2026,official:"https://www.oneplus.in/",imageUrl:"",needs:["Battery"]},
{name:"OnePlus N6",brand:"OnePlus",variant:"4GB + 128GB",price:"₹21,249",year:2026,official:"https://www.oneplus.in/",imageUrl:"",needs:["Battery"]},
{name:"OnePlus N6",brand:"OnePlus",variant:"6GB + 128GB",price:"₹22,949",year:2026,official:"https://www.oneplus.in/",imageUrl:"",needs:["Battery"]},
{name:"OnePlus N6x",brand:"OnePlus",variant:"4GB + 64GB",price:"₹17,849",year:2026,official:"https://www.oneplus.in/",imageUrl:"",needs:["Battery"]},
{name:"OnePlus N6x",brand:"OnePlus",variant:"4GB + 128GB",price:"₹19,549",year:2026,official:"https://www.oneplus.in/",imageUrl:"",needs:["Battery"]},

/* vivo — official store/current product page */
{name:"vivo X300 Ultra",brand:"vivo",variant:"16GB + 512GB",price:"₹1,43,999",year:2026,official:"https://shop.vivo.com/in/product/10348",imageUrl:"",needs:["Camera","Premium"]},
{name:"vivo V70",brand:"vivo",variant:"See official store",price:"Check Official Price",year:2026,official:"https://shop.vivo.com/in/",imageUrl:"",needs:["Camera","Premium"]},
{name:"vivo V70 Elite",brand:"vivo",variant:"See official store",price:"Check Official Price",year:2026,official:"https://shop.vivo.com/in/",imageUrl:"",needs:["Camera","Premium"]},
{name:"vivo V70 FE",brand:"vivo",variant:"See official store",price:"Check Official Price",year:2026,official:"https://shop.vivo.com/in/",imageUrl:"",needs:["Camera","Battery"]},
{name:"vivo X300 Pro",brand:"vivo",variant:"See official store",price:"Check Official Price",year:2026,official:"https://shop.vivo.com/in/",imageUrl:"",needs:["Camera","Premium"]},
{name:"vivo X300 FE",brand:"vivo",variant:"See official store",price:"Check Official Price",year:2026,official:"https://shop.vivo.com/in/",imageUrl:"",needs:["Camera","Premium"]},
{name:"vivo T5 Pro 5G",brand:"vivo",variant:"See official store",price:"Check Official Price",year:2026,official:"https://shop.vivo.com/in/",imageUrl:"",needs:["Gaming","Battery"]},
{name:"vivo T5x 5G",brand:"vivo",variant:"See official store",price:"Check Official Price",year:2026,official:"https://shop.vivo.com/in/",imageUrl:"",needs:["Battery"]},

/* OPPO — official current India pages */
{name:"OPPO Reno16 5G",brand:"OPPO",variant:"See official India page",price:"Check Official Price",year:2026,official:"https://www.oppo.com/in/smartphones/series-reno/reno16/",imageUrl:"",needs:["Camera","Premium"]},
{name:"OPPO K13 5G",brand:"OPPO",variant:"See official India page",price:"Check Official Price",year:2025,official:"https://www.oppo.com/in/smartphones/series-k/k13-5g/",imageUrl:"",needs:["Battery","Gaming"]},

/* realme — official current India pages */
{name:"realme P4 Pro 5G",brand:"realme",variant:"See official India page",price:"Check Official Price",year:2025,official:"https://www.realme.com/in/realme-p4-pro-5g",imageUrl:"",needs:["Gaming","Battery"]},
{name:"realme P4",brand:"realme",variant:"See official India phones",price:"Check Official Price",year:2025,official:"https://www.realme.com/in/realme-phones",imageUrl:"",needs:["Battery"]},
{name:"realme GT",brand:"realme",variant:"See official India phones",price:"Check Official Price",year:2026,official:"https://www.realme.com/in/realme-phones",imageUrl:"",needs:["Gaming","Premium"]},

/* Motorola */
{name:"motorola edge 70",brand:"Motorola",variant:"See official India page",price:"Check Official Price",year:2025,official:"https://www.motorola.in/smartphones-moto-edge-70/p",imageUrl:"",needs:["Premium","Camera"]},
{name:"Motorola latest Edge series",brand:"Motorola",variant:"See official India catalog",price:"Check Official Price",year:2026,official:"https://www.motorola.in/smartphones",imageUrl:"",needs:["Premium"]},

/* iQOO */
{name:"iQOO Neo 10",brand:"iQOO",variant:"See official India page",price:"Check Official Price",year:2025,official:"https://www.iqoo.com/in/products/neo10",imageUrl:"",needs:["Gaming","Battery"]},
{name:"iQOO current flagship",brand:"iQOO",variant:"See official India catalog",price:"Check Official Price",year:2026,official:"https://www.iqoo.com/in/products",imageUrl:"",needs:["Gaming","Premium"]},

/* Nothing */
{name:"Nothing Phone (4a)",brand:"Nothing",variant:"See official page",price:"Check Official Price",year:2026,official:"https://in.nothing.tech/products/phone-4a",imageUrl:"",needs:["Premium","Camera"]},
{name:"Nothing Phone (4a) Pro",brand:"Nothing",variant:"See official page",price:"Check Official Price",year:2026,official:"https://in.nothing.tech/products/phone-4a-pro",imageUrl:"",needs:["Premium","Camera"]},
{name:"Nothing Phone (3a)",brand:"Nothing",variant:"See official page",price:"Check Official Price",year:2025,official:"https://in.nothing.tech/products/phone-3a",imageUrl:"",needs:["Camera","Premium"]},

/* Google */
{name:"Google Pixel 11",brand:"Google",variant:"See official India store",price:"Check Official Price",year:2026,official:"https://store.google.com/in/category/phones?hl=en-IN",imageUrl:"",needs:["Camera","Premium"]},
{name:"Google Pixel current phones",brand:"Google",variant:"See official India store",price:"Check Official Price",year:2026,official:"https://store.google.com/in/category/phones?hl=en-IN",imageUrl:"",needs:["Camera","Premium"]},

/* HONOR */
{name:"HONOR current smartphones",brand:"HONOR",variant:"See official India catalog",price:"Check Official Price",year:2026,official:"https://www.honor.com/in/phones/",imageUrl:"",needs:["Camera","Premium"]},

/* TECNO */
{name:"TECNO current smartphones",brand:"TECNO",variant:"See official India catalog",price:"Check Official Price",year:2026,official:"https://www.tecno-mobile.in/",imageUrl:"",needs:["Battery"]},

/* Infinix */
{name:"Infinix current smartphones",brand:"Infinix",variant:"See official India catalog",price:"Check Official Price",year:2026,official:"https://infinixmobility.com/",imageUrl:"",needs:["Gaming","Battery"]},

/* ASUS */
{name:"ASUS current phones",brand:"ASUS",variant:"See official India catalog",price:"Check Official Price",year:2026,official:"https://www.asus.com/in/mobile-handhelds/phones/",imageUrl:"",needs:["Gaming","Premium"]},

/* Lava */
{name:"Lava current smartphones",brand:"Lava",variant:"See official store",price:"Check Official Price",year:2026,official:"https://shop.lavamobiles.com/",imageUrl:"",needs:["Battery"]},

/* HMD */
{name:"HMD current smartphones",brand:"HMD",variant:"See official India catalog",price:"Check Official Price",year:2026,official:"https://www.hmd.com/en_in",imageUrl:"",needs:["Battery"]}
];