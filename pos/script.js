// ================= MENU DATA =================
const menuData = [
  { name:"Danish Pastry", price:200, category:"Breakfast", img:"images/danish.jpg" },
  { name:"Croissant", price:160, category:"Breakfast", img:"images/croissant.jpg" },
  { name:"Muffin", price:150, category:"Breakfast", img:"images/muffin.jpg" },
  { name:"Danish Pastry", price:200, category:"Sandwiches & Wraps", img:"images/danish.jpg" },
  { name:"Croissant", price:160, category:"Sandwiches & Wraps", img:"images/croissant.jpg" },
  { name:"Muffin", price:150, category:"Sandwiches & Wraps", img:"images/muffin.jpg" },
  { name:"Cappuccino", price:120, category:"Coffee", img:"images/cappuccino.jpg" },
  { name:"Macchiato", price:100, category:"Coffee", img:"images/macchiato.jpg" },
  { name:"Cold Brew", price:110, category:"Coffee", img:"images/coldbrew.jpg" },
  { name:"Vanilla Milkshake", price:150, category:"Cold Beverages", img:"images/milkshake.jpg" },
  { name:"Fruit Smoothie", price:140, category:"Cold Beverages", img:"images/smoothie.jpg" },
  { name:"Orange Juice", price:120, category:"Cold Beverages", img:"images/oj.jpg" }
];

// ================= CART =================
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// ================= NAVIGATION =================
function goToMenu(){ window.location.href="menu.html"; }
function goToBill(){ window.location.href="bill.html"; }
function goBack(page){ window.location.href=page; }
function goHome(){ window.location.href="splash.html"; }

// ================= MENU PAGE =================
if(document.getElementById("menu-list")){
  const list = document.getElementById("menu-list");
  const categories = [...new Set(menuData.map(item => item.category))];

  categories.forEach(cat => {
    const catDiv = document.createElement("div");
    catDiv.className = "category-block";
    catDiv.innerHTML = `<h2 class="category-title">${cat}</h2>`;
    
    const itemsDiv = document.createElement("div");
    itemsDiv.className = "category-items";
    
    menuData.filter(i => i.category===cat).forEach((item,i)=>{
      const div = document.createElement("div");
      div.className = "menu-item";
      div.innerHTML=`
        <img src="${item.img}" alt="${item.name}">
        <h3>${item.name}</h3>
        <span class="price">₹${item.price}</span>
        <div class="qty-control">
          <button onclick="updateQtyByName('${item.name}', -1)">−</button>
          <span id="qty-${item.name.replace(/\s/g,'')}">0</span>
          <button onclick="updateQtyByName('${item.name}', 1)">+</button>
        </div>
      `;
      itemsDiv.appendChild(div);
    });

    catDiv.appendChild(itemsDiv);
    list.appendChild(catDiv);
  });
  updateUI();
}

// ================= UPDATE QUANTITY =================
function updateQtyByName(name, change){
  let item = menuData.find(i=>i.name===name);
  let found = cart.find(i=>i.name===name);
  if(!found && change>0) cart.push({...item,qty:1});
  else if(found){
    found.qty += change;
    if(found.qty<=0) cart = cart.filter(i=>i.name!==name);
  }
  localStorage.setItem("cart",JSON.stringify(cart));
  updateUI();
}

// ================= UPDATE UI =================
function updateUI(){
  let items=0,total=0;
  menuData.forEach(item=>{
    const qtySpan = document.getElementById(`qty-${item.name.replace(/\s/g,'')}`);
    const found = cart.find(c=>c.name===item.name);
    if(qtySpan) qtySpan.innerText = found?found.qty:0;
  });
  cart.forEach(i=>{ items+=i.qty; total+=i.qty*i.price; });
  if(document.getElementById("cart-items")) document.getElementById("cart-items").innerText=items;
  if(document.getElementById("cart-total")) document.getElementById("cart-total").innerText=total;
}

// ================= BILL PAGE =================
if(document.getElementById("bill-items")){
  const billDiv = document.getElementById("bill-items");
  let subtotal=0;
  cart.forEach(i=>{
    subtotal += i.qty*i.price;
    const d=document.createElement("div");
    d.className="bill-item";
    d.innerHTML=`<span>${i.name} × ${i.qty}</span><span>₹${i.qty*i.price}</span>`;
    billDiv.appendChild(d);
  });
  const gst = Math.round(subtotal*0.05);
  const total = subtotal + gst;
  document.getElementById("subtotal").innerText = subtotal;
  document.getElementById("gst").innerText = gst;
  document.getElementById("total").innerText = total;
}

// ================= PLACE ORDER =================
function placeOrder(){
  const id="ORD"+Math.floor(1000+Math.random()*9000);
  localStorage.setItem("orderId",id);
  localStorage.removeItem("cart");
  window.location.href="confirm.html";
}

// ================= CONFIRM PAGE =================
if(document.getElementById("order-id")){
  document.getElementById("order-id").innerText = localStorage.getItem("orderId");
}

