/* ============================================================
   COMPLETE CART + CATEGORIES + SEARCH + PRODUCTS ARRAY
   FOR AL-MADINA STORE — FULL WORKING SCRIPT.JS
 ============================================================ */



/* ----------- PRODUCTS ARRAY (FULL FROM YOUR MESSAGE) ----------- */
const products = [
  /* ---- Chicken ---- */
  { id: 1, category: "Chicken", name: "Full Chicken Pack", price: 8000, img: "Img/Chicken 2.jpg" },
  { id: 2, category: "Chicken", name: "Chicken Wings", price: 3200, img: "Img/Chicken wig.jpg" },
  { id: 3, category: "Chicken", name: "Chicken Leg", price: 3200, img: "Img/chicken leg.jpg" },
  { id: 4, category: "Chicken", name: "Chicken laps", price: 3200, img: "Img/chicken laps.jpg" },
  { id: 5, category: "Chicken", name: "Chicken Full", price: 8000, img: "Img/chicken 2.jpg" },

  /* ---- ice cream ---- */
  { id: 6, category: "Ice Cream", name: "Ice Cream", price: 1500, img: "Img/ice cream1.jpg" },
  { id: 7, category: "Ice Cream", name: "Ice Cream", price: 1500, img: "Img/ice cream2.jpg" },
  { id: 8, category: "Ice Cream", name: "Ice Cream", price: 1500, img: "Img/ice cream3.jpg" },
  { id: 9, category: "Ice Cream", name: "Ice Cream", price: 1500, img: "Img/ice cream4.jpg" },
  { id: 10, category: "Ice Cream", name: "Ice Cream", price: 1500, img: "Img/ice cream5.jpg" },
  { id: 11, category: "Ice Cream", name: "Ice Cream", price: 1500, img: "Img/saudia ice cream.jpg" },
  { id: 12, category: "Ice Cream", name: "Ice Cream", price: 1500, img: "Img/saudia ice cream2.jpg" },
  { id: 13, category: "Ice Cream", name: "Ice Cream", price: 1500, img: "Img/saudia ice cream3.jpg" },

  /* ---- Drinks ---- */
  { id: 14, category: "Drinks", name: "5alive Juice", price: 1500, img: "Img/5alive.jpg" },
  { id: 15, category: "Drinks", name: "Coca-Cola", price: 500, img: "Img/cocacola2.jpg" },
  { id: 16, category: "Drinks", name: "Sprite", price: 500, img: "Img/sprite.jpg" },
  { id: 17, category: "Drinks", name: "Table Water", price: 250, img: "Img/table water 1.jpg" },
  { id: 18, category: "Drinks", name: "Hollandia Yoghurt", price: 1200, img: "Img/hollandia yogurt.jpg" },
  { id: 19, category: "Drinks", name: "Monster", price: 1500, img: "Img/monster.jpg" },
  { id: 20, category: "Drinks", name: "Al-Maria Milk", price: 1800, img: "Img/almaria milk.jpg" },
  { id: 21, category: "Drinks", name: "Table Water", price: 1500, img: "Img/water.jpg" },
  { id: 22, category: "Drinks", name: "Coke Pack", price: 12000, img: "Img/cocacola1.jpg" },
  { id: 23, category: "Drinks", name: "Fruit Juices", price: 1200, img: "Img/fruit juices.jpg" },
  { id: 24, category: "Drinks", name: "Fanta", price: 500, img: "Img/fanta1.jpg" },

  /* ---- Food Groceries ----- */
{id:31,category:"Food groceries",name:"Onions Leaf",price:1000,img:"Img/onions leaf.jpg"},
{id:32,category:"Food groceries",name:"Pepper",price:1200,img:"Img/pepper.jpg"},
{id:33,category:"Food groceries",name:"Rice",price:48000,img:"Img/rice.jpg"},
{id:34,category:"Food groceries",name:"Peas and Carrot",price:7400,img:"Img/peas and carrot.jpg"},
{id:35,category:"Food groceries",name:"Randa Spagetti",price:3500,img:"Img/randa spa.jpg"},
{id:36,category:"Food groceries",name:"Titus Sandy",price:1500,img:"Img/sandy 1.jpg"},
{id:37,category:"Food groceries",name:"Onions",price:1500,img:"Img/onions 1.jpg"},
{id:38,category:"Food groceries",name:"Palm Oil",price:3500,img:"Img/palm oil1.jpg"},
{id:39,category:"Food groceries",name:"Oil",price:4400,img:"Img/oil 1.jpg"},
{id:40,category:"Food groceries",name:"Peak Milk",price:1500,img:"Img/peak milk.jpg"},
{id:41,category:"Food groceries",name:"Knorr",price:1500,img:"Img/knorr maggi.jpg"},
{id:42,category:"Food groceries",name:"Green Pepper",price:1200,img:"Img/green pepper.jpg"},
{id:43,category:"Food groceries",name:"Golden Penny Spagetti",price:800,img:"Img/gooden penny spa.jpg"},
{id:44,category:"Food groceries",name:"Garlic",price:500,img:"Img/garlic.jpg"},
{id:45,category:"Food groceries",name:"Gino Tomatoes",price:250,img:"Img/gino tomatoes1.jpg"},
{id:46,category:"Food groceries",name:"Ginger",price:500,img:"Img/ginger.jpg"},
{id:47,category:"Food groceries",name:"Egg Pack",price:5400,img:"Img/egg.jpg"},
{id:48,category:"Food groceries",name:"Curry",price:700,img:"Img/curry.jpg"},
{id:49,category:"Food groceries",name:"Cucumber",price:400,img:"Img/cucumber 2.jpg"},
{id:50,category:"Food groceries",name:"Banana",price:1000,img:"Img/banana1.jpg"},
{id:51,category:"Food groceries",name:"Yam",price:3500,img:"Img/yam 1.jpg"},
{id:52,category:"Food groceries",name:"Sweet Potatoes",price:5000,img:"Img/sweet potatoes.jpg"},
{id:53,category:"Food groceries",name:"Fresh Tomatoes",price:1000,img:"Img/tomatoes.jpg"},
{id:54,category:"Food groceries",name:"Okaro",price:700,img:"Img/okaro.jpg"},
{id:55,category:"Food groceries",name:"Maggi Star",price:1500,img:"Img/maggi.jpg"},
{id:56,category:"Food groceries",name:"Indomie",price:8500,img:"Img/indomie 1.jpg"},
{id:57,category:"Food groceries",name:"Fresh Meat",price:5500,img:"Img/meat 1.jpg"},
{id:58,category:"Food groceries",name:"Custard",price:3790,img:"Img/custard 1.jpg"},
{id:59,category:"Food groceries",name:"Carrot",price:1500,img:"Img/carrot.jpg"},
{id:60,category:"Food groceries",name:"Coconut",price:1500,img:"Img/coconut.jpg"},
{id:61,category:"Food groceries",name:"Corn Flask",price:2800,img:"Img/cornflask.jpg"},
{id:62,category:"Food groceries",name:"Small Peak Milk",price:1300,img:"Img/peak tin milk 2.jpg"},
{id:63,category:"Food groceries",name:"Egg",price:180,img:"Img/single egg.jpg"},
{id:64,category:"Food groceries",name:"Pringles",price:4500,img:"Img/pringles.jpg"},

/* ----- Fruits ----- */
{id:65,category:"Fruit",name:"Water Melon",price:1200,img:"Img/water melon1.jpg"},
{id:66,category:"Fruit",name:"Strawberry",price:1500,img:"Img/strawberry1.jpg"},
{id:67,category:"Fruit",name:"Pineapple",price:1200,img:"Img/pinapple 1.jpg"},
{id:68,category:"Fruit",name:"Fruits",price:1500,img:"Img/fruit.jpg"},
{id:69,category:"Fruit",name:"Apple",price:1500,img:"Img/apple.jpg"},
{id:70,category:"Fruit",name:"Banana",price:1000,img:"Img/banana1.jpg"},
{id:71,category:"Fruit",name:"Carrot",price:1500,img:"Img/carrot.jpg"},
{id:72,category:"Fruit",name:"Cucumber",price:1400,img:"Img/cucumber1.jpg"},

/* ---- Cosmetics ---- */
{id:73,category:"Cosmetics",name:"Vaseline",price:2300,img:"Img/vaseline cream.jpg"},
{id:74,category:"Cosmetics",name:"Nivea Cream",price:2600,img:"Img/nivea cream.jpg"},
{id:75,category:"Cosmetics",name:"Body Spray",price:1500,img:"Img/hugu perfeum.jpg"},
{id:76,category:"Cosmetics",name:"Colgate",price:1500,img:"Img/colgate .jpg"},
{id:77,category:"Cosmetics",name:"Nivea Men",price:4800,img:"Img/nivea men.jpg"},
{id:78,category:"Cosmetics",name:"Nivea Cream",price:4800,img:"Img/nivea cream2.jpg"},
{id:79,category:"Cosmetics",name:"Dettol Soap",price:2800,img:"Img/dettol1.jpg"},
{id:80,category:"Cosmetics",name:"Davey Cream",price:4800,img:"Img/davery cream.jpg"},
{id:81,category:"Cosmetics",name:"Dove Soap",price:1000,img:"Img/dove soap.jpg"},
{id:82,category:"Cosmetics",name:"Khamram",price:28000,img:"Img/khamram pef.jpg"},
{id:83,category:"Cosmetics",name:"Al-Arab",price:40000,img:"Img/al arab pef.jpg"},
{id:84,category:"Cosmetics",name:"Nivea Cream",price:4800,img:"Img/nivea cream 3.jpg"},
{id:85,category:"Cosmetics",name:"Nivea Cream",price:4800,img:"Img/nivea cream 4.jpg"},
{id:86,category:"Cosmetics",name:"Pink Love",price:3000,img:"Img/pink love pef.jpg"},
{id:87,category:"Cosmetics",name:"Submile",price:2500,img:"Img/submile pef.jpg"},
{id:88,category:"Cosmetics",name:"Bathing Soap",price:2500,img:"Img/soap.jpg"},
{id:89,category:"Cosmetics",name:"OMO",price:2500,img:"Img/omo.jpg"},

/* ---- Fish ---- */
{id:90,category:"Fish",name:"Titus Fish",price:1500,img:"Img/fish1.jpg"},
{id:91,category:"Fish",name:"Titus Fish",price:3800,img:"Img/fish2.jpg"},
{id:92,category:"Fish",name:"Titus Fish",price:7500,img:"Img/fish3.jpg"},
{id:93,category:"Fish",name:"Titus Fish",price:2500,img:"Img/fish4.jpg"},
{id:94,category:"Fish",name:"Stock Fish",price:15000,img:"Img/stock fish.jpg"},

/* ---- Meat ---- */
{id:95,category:"Meat",name:"Fresh Meat",price:5500,img:"Img/meat 1.jpg"},
{id:96,category:"Meat",name:"Goat Meat",price:4900,img:"Img/meat 2.jpg"},
{id:97,category:"Meat",name:"Cow Meat",price:5500,img:"Img/meat 3.jpg"},
{id:98,category:"Meat",name:"Ram Meat",price:7500,img:"Img/meat4.jpg"},
{id:99,category:"Meat",name:"Meat",price:1000,img:"Img/meat5.jpg"},
{id:100,category:"Meat",name:"Meat",price:1500,img:"Img/meat6.jpg"},

/* ---- Provision ---- */
{id:101,category:"Provision",name:"Lipton",price:1000,img:"Img/lipton.jpg"},
{id:102,category:"Provision",name:"Millo",price:1500,img:"Img/millo 1.jpg"},
{id:103,category:"Provision",name:"Nescafe",price:1100,img:"Img/nescafe.jpg"},
{id:104,category:"Provision",name:"Millo",price:1500,img:"Img/millo tea.jpg"},
{id:105,category:"Provision",name:"Ovaltine",price:1500,img:"Img/ovaltine.jpg"},
{id:106,category:"Provision",name:"Peak",price:1500,img:"Img/peak tin milk 2.jpg"},
{id:107,category:"Provision",name:"Millo",price:1500,img:"Img/millo 2.jpg"},
{id:108,category:"Provision",name:"Nescafe",price:1500,img:"Img/nescafe 2.jpg"},

/* ---- Bakery ---- */
{id:109,category:"Bakery",name:"Slice Bread",price:1400,img:"Img/slices bread1.jpg"},
{id:110,category:"Bakery",name:"Bread",price:2300,img:"Img/slices bread2.jpg"},
{id:111,category:"Bakery",name:"Slice Bread",price:900,img:"Img/slices bread3.jpg"},
{id:112,category:"Bakery",name:"Bread",price:1200,img:"Img/bread.jpg"},
{id:113,category:"Bakery",name:"Cake",price:11000,img:"Img/cake 1.jpg"},
{id:114,category:"Bakery",name:"Bread",price:1200,img:"Img/bread1.jpg"},
{id:115,category:"Bakery",name:"Bread",price:1200,img:"Img/bread2.jpg"},

/* ---- Electronics ---- */
{id:116,category:"Electronics",name:"Airpod",price:10000,img:"Img/airpord.jpg"},
{id:117,category:"Electronics",name:"Apple Watch Ultra",price:34000,img:"Img/Apple watch ultra.jpg"},
{id:118,category:"Electronics",name:"iPhone 11",price:21000,img:"Img/iphone 11.jpg"},
{id:119,category:"Electronics",name:"iPhone 16",price:960000,img:"Img/iphone 16 black.jpg"},
{id:120,category:"Electronics",name:"Big JBL",price:12000,img:"Img/jbl big.jpg"},
{id:121,category:"Electronics",name:"iPhone 13",price:32000,img:"Img/iphone 13.jpg"},
{id:122,category:"Electronics",name:"iPhone 15 Pro Max",price:780000,img:"Img/iphone 15promax.jpg"},
{id:123,category:"Electronics",name:"iPhone 16 Pro Max",price:1600000,img:"Img/iphone 16promax.jpg"},
{id:124,category:"Electronics",name:"JBL Speaker",price:160000,img:"Img/jbl.jpg"},
{id:125,category:"Electronics",name:"iPhone 11 Pro Max",price:340000,img:"Img/iphone 11promax.jpg"},
{id:126,category:"Electronics",name:"iPhone 12 Pro Max",price:580000,img:"Img/iphone 12promax.jpg"},
{id:127,category:"Electronics",name:"iPhone 14 Pro Max",price:780000,img:"Img/iphone14pro.jpg"},
{id:128,category:"Electronics",name:"MacBook Air",price:899000,img:"Img/macbook laptop.jpg"},
{id:129,category:"Electronics",name:"Samsung S23 Ultra",price:1700000,img:"Img/samsung s23 ultra.jpg"},
{id:130,category:"Electronics",name:"Sony Headset",price:17000,img:"Img/sony headset.jpg"},
{id:131,category:"Electronics",name:"iPhone 16",price:960000,img:"Img/iphone 16.jpg"},
{id:132,category:"Electronics",name:"Apple Watch",price:120000,img:"Img/Apple watch.jpg"},
{ id: 200, category: "Fashion", name: "Black Shoe", price: 25000, img: "Img/shoe.jpg" },

];



/* 2. NAVIGATION DRAWER (MOBILE) */
const menuBtn = document.getElementById('menuBtn');
const navDrawer = document.getElementById('navDrawer');
const closeDrawer = document.getElementById('closeDrawer');
const navOverlay = document.getElementById('navOverlay');

menuBtn.addEventListener('click', () => {
  navDrawer.classList.add('active');
  navOverlay.classList.add('active');
});

closeDrawer.addEventListener('click', closeMenu);
navOverlay.addEventListener('click', closeMenu);

function closeMenu() {
  navDrawer.classList.remove('active');
  navOverlay.classList.remove('active');
}

window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    closeMenu();
  }
});

/* 3. USER AUTHENTICATION (REGISTER / LOGIN) */

const registerModal = document.getElementById("modal-register");
const loginModal = document.getElementById("modal-login");

// Buttons and links for opening/closing modals
const registerOpenBtns = document.querySelectorAll("#register-open");
const loginOpenBtns = document.querySelectorAll("#login-open");
const modalCloseBtns = document.querySelectorAll("[data-close]");
const switchToLogin = document.getElementById("switch-to-login");
const switchToRegister = document.getElementById("switch-to-register");

// Modal open/close functionality
registerOpenBtns.forEach(btn => btn.addEventListener("click", () => openModal(registerModal)));
loginOpenBtns.forEach(btn => btn.addEventListener("click", () => openModal(loginModal)));

modalCloseBtns.forEach(btn => {
  btn.addEventListener("click", e => {
    closeModal(document.getElementById(e.target.getAttribute("data-close")));
  });
});

// Switch between login & register
switchToLogin.addEventListener("click", () => {
  closeModal(registerModal);
  openModal(loginModal);
});

switchToRegister.addEventListener("click", () => {
  closeModal(loginModal);
  openModal(registerModal);
});

function openModal(modal) {
  modal.style.display = "flex";
}

function closeModal(modal) {
  modal.style.display = "none";
}

/* =======================================================
   SHOW USER WHEN LOGGED IN (AUTO)
======================================================= */

document.addEventListener("DOMContentLoaded", () => {
  const loggedUser = JSON.parse(localStorage.getItem("almadinaUser"));
  if (loggedUser) {
    showUserLoggedIn(loggedUser);
  }
});


document.getElementById("register-form").addEventListener("submit", e => {
  e.preventDefault();

  const firstname = e.target.firstname.value.trim();
  const lastname = e.target.lastname.value.trim();
  const email = e.target.email.value.trim();
  const password = e.target.password.value.trim();

  const firstnameError = document.getElementById("firstname-error");
  const lastnameError = document.getElementById("lastname-error");
  const emailError = document.getElementById("email-error");
  const passwordError = document.getElementById("password-error");

  [firstnameError, lastnameError, emailError, passwordError].forEach(e => (e.textContent = ""));

  let hasError = false;

  if (firstname.length < 4) {
    firstnameError.textContent = "First name must be at least 4 letters.";
    hasError = true;
  }

  if (lastname.length < 3) {
    lastnameError.textContent = "Last name must be at least 3 letters.";
    hasError = true;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    emailError.textContent = "Enter a valid email.";
    hasError = true;
  }

  if (password.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters.";
    hasError = true;
  }

  if (hasError) return;

  let users = JSON.parse(localStorage.getItem("almadinaUsers")) || [];

  if (users.some(u => u.email === email)) {
    emailError.textContent = "This email already exists.";
    return;
  }

  let newUser = { firstname, lastname, email, password };
  users.push(newUser);

  localStorage.setItem("almadinaUsers", JSON.stringify(users));
  localStorage.setItem("almadinaUser", JSON.stringify(newUser));

  closeModal(registerModal);
  showUserLoggedIn(newUser);
  alert(`Welcome, ${firstname}!`);
});


document.getElementById("login-form").addEventListener("submit", e => {
  e.preventDefault();

  const email = e.target.email.value.trim();
  const password = e.target.password.value.trim();

  const emailError = document.getElementById("login-email-error");
  const passwordError = document.getElementById("login-password-error");

  emailError.textContent = "";
  passwordError.textContent = "";

  const users = JSON.parse(localStorage.getItem("almadinaUsers")) || [];

  const user = users.find(u => u.email === email && u.password === password);

  if (!user) {
    passwordError.textContent = "Invalid email or password.";
    return;
  }

  localStorage.setItem("almadinaUser", JSON.stringify(user));
  closeModal(loginModal);
  showUserLoggedIn(user);
  alert(`Welcome back, ${user.firstname}!`);
});


function showUserLoggedIn(user) {
  const headerAuth = document.querySelector(".auth-buttons");
  const drawerAuth = document.querySelector(".drawer-auth");

  headerAuth.innerHTML = `
    <div class="user-menu">
      <button id="profile-open" class="btn profile-btn">👤 ${user.firstname}</button>
      <button class="btn logout-btn" id="logout-desktop">Logout</button>
    </div>
  `;

  drawerAuth.innerHTML = `
    <div class="user-menu">
      <button id="profile-open" class="btn profile-btn">👤 ${user.firstname} ${user.lastname}</button>
      <button class="btn logout-btn" id="logout-mobile">Logout</button>
    </div>
  `;

  document.getElementById("logout-desktop").addEventListener("click", logoutUser);
  document.getElementById("logout-mobile").addEventListener("click", logoutUser);

  // ADD THIS:
  document.querySelectorAll("#profile-open").forEach(btn => {
    btn.addEventListener("click", openProfile);
  });
}



function logoutUser() {
  localStorage.removeItem("almadinaUser");
  window.location.reload();
}


/* 4. REVEAL ON SCROLL */

document.addEventListener("DOMContentLoaded", () => {
  
  const reveals = document.querySelectorAll(
    ".reveal, .reveal-left, .reveal-right, .reveal-zoom"
  );

  function revealOnScroll() {
    const windowHeight = window.innerHeight;

    reveals.forEach(el => {
      const revealTop = el.getBoundingClientRect().top;
      const revealBottom = el.getBoundingClientRect().bottom;
      const revealPoint = 120;

      // Add active when visible
      if (revealTop < windowHeight - revealPoint && revealBottom > 0) {
        el.classList.add("active");
      }
      // Remove active when scrolled away (so animation can restart)
      else {
        el.classList.remove("active");
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // run once on load
});



/* 4. CART SYSTEM */

// ====== SELECT ELEMENTS ======
const cartEl = document.getElementById("cart");
const cartItemsEl = document.getElementById("cart-items");
const cartTotalEl = document.getElementById("cart-total");

const cartButton = document.getElementById("cartButton");
const cartButtonMobile = document.getElementById("cartButtonMobile");
const closeCartBtn = document.getElementById("close-cart");

const cartCountDesktop = document.getElementById("cartCount");
const cartCountMobile = document.getElementById("cartCountMobile");

const checkoutBtn = document.getElementById("checkout");

// Search & Categories
const searchInput = document.getElementById("search-input");
const categoryButtons = document.querySelectorAll(".cat-btn");
const categoryTitle = document.getElementById("category-title");
const categoryProducts = document.getElementById("category-products");

// ====== LOAD CART FROM STORAGE ======
let cart = JSON.parse(localStorage.getItem("almadina_cart") || "{}");

function saveCart() {
  localStorage.setItem("almadina_cart", JSON.stringify(cart));
}

// ====== UPDATE BADGE ======
function updateCartBadge() {
  const count = Object.values(cart).reduce((a, b) => a + b, 0);
  if (cartCountDesktop) cartCountDesktop.textContent = count;
  if (cartCountMobile) cartCountMobile.textContent = count;
}

// ====== OPEN / CLOSE CART ======
function openCart() {
  cartEl.classList.add("open");
  renderCart();
}

function closeCart() {
  cartEl.classList.remove("open");
}

cartButton.addEventListener("click", openCart);
cartButtonMobile.addEventListener("click", openCart);
closeCartBtn.addEventListener("click", closeCart);

// ====== ADD TO CART ======
function addToCart(id) {
  cart[id] = (cart[id] || 0) + 1;
  saveCart();
  updateCartBadge();
  renderCart();
}

// Detect all add-to-cart clicks
document.addEventListener("click", e => {
  if (e.target.classList.contains("add-to-cart")) {
    addToCart(e.target.dataset.id);
  }
});

// ====== RENDER CART (VERTICAL BUTTONS VERSION) ======
function renderCart() {
  const items = Object.entries(cart);
  cartItemsEl.innerHTML = "";
  let total = 0;

  if (items.length === 0) {
    cartItemsEl.innerHTML = "<p>Your cart is empty.</p>";
    cartTotalEl.textContent = "0.00";
    return;
  }

  items.forEach(([id, qty]) => {
    const product = products.find(p => p.id == id);
    if (!product) return;

    const lineTotal = product.price * qty;
    total += lineTotal;

    cartItemsEl.innerHTML += `
      <div class="cart-row">
        <img src="${product.img}" class="cart-img">

        <div class="cart-info">
          <p><strong>${product.name}</strong></p>
          <p>₦${product.price.toLocaleString()}</p>
          <p>Qty: ${qty}</p>
        </div>

        <div class="cart-actions">
          <button class="qty-btn" onclick="changeQty(${id}, -1)">−</button>
          <button class="qty-btn" onclick="changeQty(${id}, 1)">＋</button>
          <button class="delete-btn" onclick="removeItem(${id})">🗑️</button>
        </div>
      </div>
    `;
  });

  //  TOTAL
  cartTotalEl.textContent = total.toLocaleString();
}




// ====== UPDATE QTY ======
function changeQty(id, delta) {
  cart[id] += delta;
  if (cart[id] <= 0) delete cart[id];
  saveCart();
  updateCartBadge();
  renderCart();
}

// ====== REMOVE ITEM ======
function removeItem(id) {
  delete cart[id];
  saveCart();
  updateCartBadge();
  renderCart();
}



// ====== SEARCH SYSTEM ======
searchInput.addEventListener("input", () => {
  const q = searchInput.value.toLowerCase().trim();
  if (!q) {
    categoryProducts.innerHTML = "";
    categoryTitle.textContent = "";
    return;
  }

  const filtered = products.filter(p => p.name.toLowerCase().includes(q));

  categoryTitle.textContent = `Search Results`;

  if (filtered.length === 0) {
    categoryProducts.innerHTML = "<p>No results found</p>";
    return;
  }

  categoryProducts.innerHTML = filtered.map(item => `
  <div class="product-card">
    <img src="${item.img}">
    <h4>${item.name}</h4>

    <div class="price-row">
      <p>₦${item.price.toLocaleString()}</p>
    </div>
    <div class="bottom-row">
        <div class="stars">★★★★★</div>
        <button class="add-to-cart" data-id="${item.id}">🛒</button>
      </div>
  </div>
`).join("");

});


// ====== CATEGORY FILTER ======
categoryButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const cat = btn.textContent.trim();
    const filtered = products.filter(p => p.category === cat);

    categoryTitle.textContent = `${cat} Products`;

    categoryProducts.innerHTML = filtered.map(item => `
  <div class="product-card">
    <img src="${item.img}">
    <h4>${item.name}</h4>

    <div class="price-row">
      <p>₦${item.price.toLocaleString()}</p>
    </div>
    <div class="bottom-row">
        <div class="stars">★★★★★</div>
        <button class="add-to-cart" data-id="${item.id}">🛒</button>
      </div>
  </div>
`).join("");

  });
});


/* 5. CHECKOUT BUTTON → OPEN CHECKOUT MODAL */
checkoutBtn.addEventListener("click", () => {
  const user = JSON.parse(localStorage.getItem("almadinaUser") || "null");

  if (!user) {
    // Open login/register modal instead of alert
    closeCart(); 
    openModal(document.getElementById("modal-login"));
    return;
  }

  // Close the cart drawer first
  closeCart();

  // Load total into checkout payable
  const total = Object.entries(cart).reduce((sum, [id, qty]) => {
    const p = products.find(pr => pr.id == id);
    if (!p) return sum; // prevent crash
    return sum + (p.price * qty);

  }, 0);

  document.getElementById("checkout-payable").textContent = total.toLocaleString();

  // Open checkout modal AFTER cart hides
  setTimeout(() => {
    openModal(document.getElementById("modal-checkout"));
  }, 350); // matches your cart closing animation speed
});



/* 6.  PLACE ORDER SYSTEM  */
document.getElementById("checkout-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const deliveryMethod = document.querySelector("input[name='deliveryMethod']:checked");
  if (!deliveryMethod) {
    document.getElementById("checkout-error").textContent =
      "Please select delivery method.";
    return;
  }

  // Convert cart into readable order items
  const orderItems = Object.entries(cart).map(([id, qty]) => {
    const product = products.find(p => p.id == id);
    return {
      name: product.name,
      qty: qty,
      price: product.price
    };
  });

  const order = {
  id: Date.now(),
  email: JSON.parse(localStorage.getItem("almadinaUser")).email,
  items: orderItems,
  ts: Date.now(),
  total: parseInt(
    document.getElementById("checkout-payable").textContent.replace(/,/g, "")
  ),
  method: deliveryMethod.value,
  status: "Processing"  
};


  // Save order
  let orders = JSON.parse(localStorage.getItem("almadinaOrders") || "[]");
  orders.push(order);
  localStorage.setItem("almadinaOrders", JSON.stringify(orders));

  // Clear cart
  cart = {};
  saveCart();
  updateCartBadge();
  renderCart();

  // Close modal
  document.getElementById("modal-checkout").style.display = "none";

 // Show success modal
document.getElementById("success-order-id").textContent = order.id;
document.getElementById("success-order-total").textContent =
  order.total.toLocaleString();

openModal(document.getElementById("modal-success"));

document.getElementById("success-close").addEventListener("click", () => {
  closeModal(document.getElementById("modal-success"));
});

});


// DELIVERY METHOD TOGGLE
document.querySelectorAll("input[name='deliveryMethod']").forEach(option => {
  option.addEventListener("change", () => {
    const method = option.value;

    const deliveryFields = document.getElementById("delivery-fields");
    const paymentFields = document.getElementById("payment-fields");

    if (method === "pickup") {
      deliveryFields.style.display = "none";
      paymentFields.style.display = "none";
    }

    else if (method === "payondelivery") {
      deliveryFields.style.display = "block";
      paymentFields.style.display = "none";
    }

    else if (method === "delivery") {
      deliveryFields.style.display = "block";
      paymentFields.style.display = "block";
    }
  });
});


const profileModal = document.getElementById('modal-profile');

// Fix LS KEYS
const LS_KEYS = {
  SESSION: "almadinaUser",
  ORDERS: "almadinaOrders"
};

function getSession() {
  const raw = localStorage.getItem(LS_KEYS.SESSION);
  return raw ? JSON.parse(raw) : null;
}

function getOrders() {
  return JSON.parse(localStorage.getItem(LS_KEYS.ORDERS) || "[]");
}

document.addEventListener("click", e => {
  if (e.target.id === "profile-open") {
    openProfile();
  }
});

function openProfile() {
  const session = getSession();
  if (!session) {
    openModal(loginModal);
    return;
  }

  // Show full name
  document.getElementById("prof-name").textContent =
    session.firstname + " " + session.lastname;

  document.getElementById("prof-email").textContent = session.email;

  // Load all orders for this user
  const orders = getOrders()
    .filter(o => o.email === session.email)
    .sort((a, b) => b.ts - a.ts);

  const tbody = document.getElementById("orders-tbody");
  tbody.innerHTML = "";

  if (orders.length === 0) {
    document.getElementById("orders-empty").style.display = "block";
    document.getElementById("orders-table").style.display = "none";
  } else {
    document.getElementById("orders-empty").style.display = "none";
    document.getElementById("orders-table").style.display = "table";

    orders.forEach(o => {
      const tr = document.createElement("tr");

      const itemsStr = o.items
        .map(i => `${i.name} x${i.qty}`)
        .join(", ");

      tr.innerHTML = `
        <td>${new Date(o.ts).toLocaleString()}</td>
        <td>${itemsStr}</td>
        <td>₦${o.total.toLocaleString()}</td>
      `;

      tbody.appendChild(tr);
    });
  }

  openModal(profileModal);
}


// =====================
// TRACK ORDER SYSTEM
// =====================

const trackOpenBtn = document.getElementById("track-open");
const trackModal   = document.getElementById("modal-track");
const trackForm    = document.getElementById("track-form");

trackOpenBtn?.addEventListener("click", () => {
  openModal(trackModal);
});

trackForm?.addEventListener("submit", function (e) {
  e.preventDefault();

  const orderIdInput = document.getElementById("track-order-id").value.trim();
  const orders = JSON.parse(localStorage.getItem("almadinaOrders") || "[]");

  const resultBox = document.getElementById("track-result");
  const errorBox  = document.getElementById("track-error");

  errorBox.textContent = "";
  resultBox.style.display = "none";

  if (!orderIdInput) {
    errorBox.textContent = "Please enter an order ID.";
    return;
  }

  const order = orders.find(o => String(o.id) === orderIdInput);

  if (!order) {
    errorBox.textContent = "Order not found.";
    return;
  }

  // Show result
  document.getElementById("track-status").textContent = order.status;
  document.getElementById("track-total").textContent  = order.total.toLocaleString();
  document.getElementById("track-method").textContent = order.method;
  document.getElementById("track-date").textContent   =
    new Date(order.ts).toLocaleString();

  resultBox.style.display = "block";
});


function updateOrderStatus(orderId, newStatus) {
  let orders = JSON.parse(localStorage.getItem("almadinaOrders") || "[]");
  const order = orders.find(o => o.id === orderId);
  if (!order) return;

  order.status = newStatus;
  localStorage.setItem("almadinaOrders", JSON.stringify(orders));
}
