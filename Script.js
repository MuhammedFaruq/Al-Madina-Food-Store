/* 6. NAVIGATION DRAWER (MOBILE) */
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

/* ========== REGISTER FUNCTION ========== */
document.getElementById("register-form").addEventListener("submit", e => {
  e.preventDefault();

  // Inputs
  const firstname = e.target.firstname.value.trim();
  const lastname = e.target.lastname.value.trim();
  const email = e.target.email.value.trim();
  const password = e.target.password.value.trim();

  // Error fields
  const firstnameError = document.getElementById("firstname-error");
  const lastnameError = document.getElementById("lastname-error");
  const emailError = document.getElementById("email-error");
  const passwordError = document.getElementById("password-error");

  // Clear errors
  [firstnameError, lastnameError, emailError, passwordError].forEach(e => (e.textContent = ""));

  let hasError = false;

  // Validation
  if (!firstname || firstname.length < 5) {
    firstnameError.textContent = "First name must be at least 5 letters.";
    hasError = true;
  }

  if (!lastname || lastname.length < 4) {
    lastnameError.textContent = "Last name must be at least 4 letters.";
    hasError = true;
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    emailError.textContent = "Please enter a valid email.";
    hasError = true;
  }

  if (!password || password.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters.";
    hasError = true;
  }

  if (hasError) return;

  // Existing users
  const users = JSON.parse(localStorage.getItem("citycareUsers")) || [];

  if (users.some(u => u.email === email)) {
    emailError.textContent = "This email is already registered.";
    return;
  }

  // Save user
  const newUser = { firstname, lastname, email, password };
  users.push(newUser);
  localStorage.setItem("citycareUsers", JSON.stringify(users));
  localStorage.setItem("citycareUser", JSON.stringify(newUser));

  closeModal(registerModal);
  alert(`Welcome, ${firstname} ${lastname}!`);
});

/* ========== LOGIN FUNCTION ========== */
document.getElementById("login-form").addEventListener("submit", e => {
  e.preventDefault();

  const email = e.target.email.value.trim();
  const password = e.target.password.value.trim();

  const emailError = document.getElementById("login-email-error");
  const passwordError = document.getElementById("login-password-error");

  emailError.textContent = "";
  passwordError.textContent = "";
  let hasError = false;

  // Validation
  if (!email) {
    emailError.textContent = "Please enter your email.";
    hasError = true;
  }

  if (!password) {
    passwordError.textContent = "Please enter your password.";
    hasError = true;
  }

  if (hasError) return;

  const users = JSON.parse(localStorage.getItem("citycareUsers")) || [];
  const foundUser = users.find(u => u.email === email && u.password === password);

  if (!foundUser) {
    passwordError.textContent = "Invalid email or password.";
    return;
  }

  localStorage.setItem("citycareUser", JSON.stringify(foundUser));
  closeModal(loginModal);
  alert(`Welcome back, ${foundUser.firstname}!`);
});

/* 4. LOGGED-IN USER DISPLAY */
function showUserLoggedIn(user) {
  const headerAuth = document.querySelector(".auth-buttons");
  const drawerAuth = document.querySelector(".drawer-auth");

  headerAuth.innerHTML = `
    <div class="user-menu">
      <span id="patientNameHeader">👤 ${user.firstname} ${user.lastname}</span>
      <button id="logout-btn" class="btn logout-btn">Logout</button>
    </div>
  `;

  drawerAuth.innerHTML = `
    <div class="user-menu">
      <span id="patientNameHeaderMobile">${user.firstname} ${user.lastname}</span>
      <button id="logout-btn-mobile" class="btn logout-btn">Logout</button>
    </div>
  `;

  document.getElementById("logout-btn").addEventListener("click", logoutUser);
  document.getElementById("logout-btn-mobile").addEventListener("click", logoutUser);
}

function logoutUser() {
  localStorage.removeItem("citycareUser");
  location.reload();
}

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

// Your product data (You can add more)
const products = [
  {
    category: "Chicken",
    name: "Full Chicken Pack",
    price: "₦8000",
    img: "Img/Chicken 2.jpg"
  },
  {
    category: "Chicken",
    name: "Chicken Wings",
    price: "₦3200",
    img: "Img/Chicken wig.jpg"
  },
  {
    category: "Chicken",
    name: "Chicken Leg",
    price: "₦3200",
    img: "Img/chicken leg.jpg"
  },
  {
    category: "Chicken",
    name: "Chicken laps",
    price: "₦3200",
    img: "Img/chicken laps.jpg"
  },
  {
    category: "Chicken",
    name: "Chicken Full",
    price: "₦8000",
    img: "Img/chicken 2.jpg"
  },
  {
    category: "Ice Cream",
    name: "Ice Cream",
    price: "₦1500",
    img: "Img/ice cream1.jpg"
  },
  {
    category: "Ice Cream",
    name: "Ice Cream",
    price: "₦1500",
    img: "Img/ice cream2.jpg"
  },
  {
    category: "Ice Cream",
    name: "Ice Cream",
    price: "₦1500",
    img: "Img/ice cream3.jpg"
  },
  {
    category: "Ice Cream",
    name: "Ice Cream",
    price: "₦1500",
    img: "Img/ice cream4.jpg"
  },
  {
    category: "Ice Cream",
    name: "Ice Cream",
    price: "₦1500",
    img: "Img/ice cream5.jpg"
  },
  {
    category: "Ice Cream",
    name: "Ice Cream",
    price: "₦1500",
    img: "Img/saudia ice cream.jpg"
  },

  {
    category: "Ice Cream",
    name: "Ice Cream",
    price: "₦1500",
    img: "Img/saudia ice cream2.jpg"
  },
  {
    category: "Ice Cream",
    name: "Ice Cream",
    price: "₦1500",
    img: "Img/saudia ice cream3.jpg"
  },

  
  {
    category: "Drinks",
    name: "5alive Juice",
    price: "₦1500",
    img: "Img/5alive.jpg"
  },
  {
    category: "Drinks",
    name: "Coca-Cola",
    price: "₦500",
    img: "Img/cocacola2.jpg"
  },
  {
    category: "Drinks",
    name: "Sprite",
    price: "₦500",
    img: "Img/sprite.jpg"
  },
  {
    category: "Drinks",
    name: "Table Water",
    price: "₦250",
    img: "Img/table water 1.jpg"
  },

  {
    category: "Drinks",
    name: "Hollandia Youghurt",
    price: "₦1200",
    img: "Img/hollandia yogurt.jpg"
  },
  {
    category: "Drinks",
    name: "Monster",
    price: "₦1500",
    img: "Img/monster.jpg"
  },
  {
    category: "Drinks",
    name: "Al-Maria Milk",
    price: "₦1800",
    img: "Img/almaria milk.jpg"
  },
  {
    category: "Drinks",
    name: "Table Water",
    price: "₦1500",
    img: "Img/water.jpg"
  },
  {
    category: "Drinks",
    name: "Coke Pack",
    price: "₦12000",
    img: "Img/cocacola1.jpg"
  },
  {
    category: "Drinks",
    name: "Fruit Juices",
    price: "₦1200",
    img: "Img/fruit juices.jpg"
  },
  {
    category: "Drinks",
    name: "Fanta",
    price: "₦500",
    img: "Img/fanta1.jpg"
  },

  {
    category: "Food groceries",
    name: "Onions Leaf",
    price: "₦1000",
    img: "Img/onions leaf.jpg"
  },
  {
    category: "Food groceries",
    name: "Pepper",
    price: "₦1200",
    img: "Img/pepper.jpg"
  },
  {
    category: "Food groceries",
    name: "Rice",
    price: "₦55000",
    img: "Img/rice.jpg"
  },
  {
    category: "Food groceries",
    name: "Peas and Carrot",
    price: "₦7400",
    img: "Img/peas and carrot.jpg"
  },
  {
    category: "Food groceries",
    name: "Randa Spagetti",
    price: "₦3500",
    img: "Img/randa spa.jpg"
  },
  {
    category: "Food groceries",
    name: "Titus Sandy",
    price: "₦1500",
    img: "Img/sandy 1.jpg"
  },
  {
    category: "Food groceries",
    name: "Onions",
    price: "₦1500",
    img: "Img/onions 1.jpg"
  },
  {
    category: "Food groceries",
    name: "Palm Oil",
    price: "₦3500",
    img: "Img/palm oil1.jpg"
  },
  {
    category: "Food groceries",
    name: "Oil",
    price: "₦4400",
    img: "Img/oil 1.jpg"
  },
  {
    category: "Food groceries",
    name: "Peak Milk",
    price: "₦1500",
    img: "Img/peak milk.jpg"
  },
  {
    category: "Food groceries",
    name: "Knorr",
    price: "₦1500",
    img: "Img/knorr maggi.jpg"
  },
  {
    category: "Food groceries",
    name: "Green Pepper",
    price: "₦1200",
    img: "Img/green pepper.jpg"
  },
  {
    category: "Food groceries",
    name: "Golden penny Spagetti",
    price: "₦800",
    img: "Img/gooden penny spa.jpg"
  },
  {
    category: "Food groceries",
    name: "Garlic",
    price: "₦500",
    img: "Img/garlic.jpg"
  },
  {
    category: "Food groceries",
    name: "Gino Tomatoes",
    price: "₦250",
    img: "Img/gino tomatoes1.jpg"
  },
  {
    category: "Food groceries",
    name: "Ginger",
    price: "₦500",
    img: "Img/ginger.jpg"
  },
  {
    category: "Food groceries",
    name: "Egg Pack",
    price: "₦5400",
    img: "Img/egg.jpg"
  },
  {
    category: "Food groceries",
    name: "Curry",
    price: "₦1700",
    img: "Img/curry.jpg"
  },
  {
    category: "Food groceries",
    name: "Cucumber",
    price: "₦1400",
    img: "Img/cucumber 2.jpg"
  },
  {
    category: "Food groceries",
    name: "Banana",
    price: "₦1000",
    img: "Img/banana1.jpg"
  },
  {
    category: "Food groceries",
    name: "Yam",
    price: "₦3500",
    img: "Img/yam 1.jpg"
  },
  {
    category: "Food groceries",
    name: "Sweet Potatoes",
    price: "₦5000",
    img: "Img/sweet potatoes.jpg"
  },
  {
    category: "Food groceries",
    name: "Fresh Tomatoes",
    price: "₦5000",
    img: "Img/tomatoes.jpg"
  },
  {
    category: "Food groceries",
    name: "Okaro",
    price: "₦700",
    img: "Img/okaro.jpg"
  },
  {
    category: "Food groceries",
    name: "Maggi Star",
    price: "₦1500",
    img: "Img/maggi.jpg"
  },
  {
    category: "Food groceries",
    name: "indomie",
    price: "₦8500",
    img: "Img/indomie 1.jpg"
  },

  {
    category: "Food groceries",
    name: "Fresh Meat",
    price: "₦5500",
    img: "Img/meat 1.jpg"
  },
  {
    category: "Food groceries",
    name: "Custard",
    price: "₦3790",
    img: "Img/custard 1.jpg"
  },
  {
    category: "Food groceries",
    name: "Carrot",
    price: "₦1500",
    img: "Img/carrot.jpg"
  },
  {
    category: "Food groceries",
    name: "Coconut",
    price: "₦1500",
    img: "Img/coconut.jpg"
  },
  {
    category: "Food groceries",
    name: "Corn Flask",
    price: "₦2800",
    img: "Img/cornflask.jpg"
  },

  {
    category: "Food groceries",
    name: "Small peak milk",
    price: "₦1300",
    img: "Img/peak tin milk 2.jpg"
  },
  {
    category: "Food groceries",
    name: "Egg",
    price: "₦180",
    img: "Img/single egg.jpg"
  },
  {
    category: "Food groceries",
    name: "Pringles",
    price: "₦4500",
    img: "Img/pringles.jpg"
  },


  {
    category: "Fruit",
    name: "Water Melon",
    price: "₦1200",
    img: "Img/water melon1.jpg"
  },
  {
    category: "Fruit",
    name: "Strawberry",
    price: "₦1500",
    img: "Img/strawberry1.jpg"
  },

  {
    category: "Fruit",
    name: "Pineapple",
    price: "₦1200",
    img: "Img/pinapple 1.jpg"
  },

  {
    category: "Fruit",
    name: "Fruits",
    price: "₦1500",
    img: "Img/fruit.jpg"
  },
  {
    category: "Fruit",
    name: "Apple",
    price: "₦1500",
    img: "Img/apple.jpg"
  },
  {
    category: "Fruit",
    name: "Banana",
    price: "₦1000",
    img: "Img/banana1.jpg"
  },
  {
    category: "Fruit",
    name: "Carrot",
    price: "₦1500",
    img: "Img/carrot.jpg"
  },
  {
    category: "Fruit",
    name: "Cucumber",
    price: "₦1400",
    img: "Img/cucumber1.jpg"
  },


  {
    category: "Cosmetics",
    name: "Vaseline",
    price: "₦2300",
    img: "Img/vaseline cream.jpg"
  },
  {
    category: "Cosmetics",
    name: "Nivea Cream",
    price: "₦2600",
    img: "Img/nivea cream.jpg"
  },
  {
    category: "Cosmetics",
    name: "Body Spray",
    price: "₦1500",
    img: "Img/hugu perfeum.jpg"
  },
  {
    category: "Cosmetics",
    name: "Colgate",
    price: "₦1500",
    img: "Img/colgate .jpg"
  },
  {
    category: "Cosmetics",
    name: "Nivea Men",
    price: "₦4800",
    img: "Img/nivea men.jpg"
  },
  {
    category: "Cosmetics",
    name: "Nivea Cream",
    price: "₦4800",
    img: "Img/nivea cream2.jpg"
  },
  {
    category: "Cosmetics",
    name: "Dettol Soap",
    price: "₦2800",
    img: "Img/dettol1.jpg"
  },
  {
    category: "Cosmetics",
    name: "Davey Cream",
    price: "₦4800",
    img: "Img/davery cream.jpg"
  },
  {
    category: "Cosmetics",
    name: "Dove Soap",
    price: "₦1000",
    img: "Img/dove soap.jpg"
  },
  {
    category: "Cosmetics",
    name: "Khamram ",
    price: "₦28000",
    img: "Img/khamram pef.jpg"
  },
  {
    category: "Cosmetics",
    name: "Al-Arab",
    price: "₦40000",
    img: "Img/al arab pef.jpg"
  },
  {
    category: "Cosmetics",
    name: "Nivea Cream",
    price: "₦4800",
    img: "Img/nivea cream 3.jpg"
  },
  {
    category: "Cosmetics",
    name: "Nivea Cream",
    price: "₦4800",
    img: "Img/nivea cream 4.jpg"
  },
  {
    category: "Cosmetics",
    name: "Pink Love",
    price: "₦3000",
    img: "Img/pink love pef.jpg"
  },
  {
    category: "Cosmetics",
    name: "Submile",
    price: "₦2500",
    img: "Img/submile pef.jpg"
  },
  {
    category: "Cosmetics",
    name: "Bathing Soap",
    price: "₦2500",
    img: "Img/soap.jpg"
  },
  {
    category: "Cosmetics",
    name: "OMO",
    price: "₦2500",
    img: "Img/omo.jpg"
  },





  {
    category: "Fish",
    name: "Titus Fish",
    price: "₦1500",
    img: "Img/fish1.jpg"
  },

  {
    category: "Fish",
    name: "Titus Fish",
    price: "₦3800",
    img: "Img/fish2.jpg"
  },
  {
    category: "Fish",
    name: "Titus Fish",
    price: "₦7500",
    img: "Img/fish3.jpg"
  },
  {
    category: "Fish",
    name: "Titus Fish",
    price: "₦2500",
    img: "Img/fish4.jpg"
  },
  {
    category: "Fish",
    name: "Stock Fish",
    price: "₦15000",
    img: "Img/stock fish.jpg"
  },



  {
    category: "Meat",
    name: "Fresh Meat",
    price: "₦5500",
    img: "Img/meat 1.jpg"
  },
  {
    category: "Meat",
    name: "Goat Meat",
    price: "₦4900",
    img: "Img/meat 2.jpg"
  },
  {
    category: "Meat",
    name: "Cow Meat",
    price: "₦5500",
    img: "Img/meat 3.jpg"
  },
  {
    category: "Meat",
    name: "Ram Meat",
    price: "₦7500",
    img: "Img/meat4.jpg"
  },
  {
    category: "Meat",
    name: "Meat",
    price: "₦1000",
    img: "Img/meat5.jpg"
  },
  {
    category: "Meat",
    name: "Meat",
    price: "₦1500",
    img: "Img/meat6.jpg"
  },



  {
    category: "Provision",
    name: "Lipton",
    price: "₦1000",
    img: "Img/lipton.jpg"
  },
  {
    category: "Provision",
    name: "Millo",
    price: "₦1500",
    img: "Img/millo 1.jpg"
  },
  {
    category: "Provision",
    name: "Nescafe",
    price: "₦1100",
    img: "Img/nescafe.jpg"
  },
  {
    category: "Provision",
    name: "Millo",
    price: "₦1500",
    img: "Img/millo tea.jpg"
  },
  {
    category: "Provision",
    name: "Ovaltine",
    price: "₦1500",
    img: "Img/ovaltine.jpg"
  },
  {
    category: "Provision",
    name: "Peak",
    price: "₦1500",
    img: "Img/peak tin milk 2.jpg"
  },
  {
    category: "Provision",
    name: "Millo",
    price: "₦1500",
    img: "Img/millo 2.jpg"
  },
  {
    category: "Provision",
    name: "Nescafe",
    price: "₦1500",
    img: "Img/nescafe 2.jpg"
  },



  {
    category: "Bakery",
    name: "Slice Bread",
    price: "₦1400",
    img: "Img/slices bread1.jpg"
  },
  {
    category: "Bakery",
    name: "Bread",
    price: "₦2300",
    img: "Img/slices bread2.jpg"
  },
  {
    category: "Bakery",
    name: "Slice Bread",
    price: "₦900",
    img: "Img/slices bread3.jpg"
  },
  {
    category: "Bakery",
    name: "Bread",
    price: "₦1200",
    img: "Img/bread.jpg"
  },
  {
    category: "Bakery",
    name: "Cake",
    price: "₦11000",
    img: "Img/cake 1.jpg"
  },
  {
    category: "Bakery",
    name: "Bread",
    price: "₦1200",
    img: "Img/bread1.jpg"
  },
  {
    category: "Bakery",
    name: "Bread",
    price: "₦1200",
    img: "Img/bread2.jpg"
  },




  {
    category: "Electronics",
    name: "Airpord",
    price: "₦10000",
    img: "Img/airpord.jpg"
  },
  {
    category: "Electronics",
    name: "Apple watch ultra",
    price: "₦34000",
    img: "Img/Apple watch ultra.jpg"
  },
  {
    category: "Electronics",
    name: "Iphone 11",
    price: "₦21000",
    img: "Img/iphone 11.jpg"
  },
  {
    category: "Electronics",
    name: "Iphone 16",
    price: "₦960000",
    img: "Img/iphone 16 black.jpg"
  },
  {
    category: "Electronics",
    name: "Big Jbl",
    price: "₦12000",
    img: "Img/jbl big.jpg"
  },
  {
    category: "Electronics",
    name: "Iphone 13",
    price: "₦32000",
    img: "Img/iphone 13.jpg"
  },
  {
    category: "Electronics",
    name: "Iphone 15 pro-max",
    price: "₦780000",
    img: "Img/iphone 15promax.jpg"
  },
  {
    category: "Electronics",
    name: "Iphone 16 pro-max",
    price: "₦1.600.000",
    img: "Img/iphone 16promax.jpg"
  },
  {
    category: "Electronics",
    name: "Jbl",
    price: "₦160000",
    img: "Img/jbl.jpg"
  },
  {
    category: "Electronics",
    name: "Iphone 11 pro-max",
    price: "₦340000",
    img: "Img/iphone 11promax.jpg"
  },
  {
    category: "Electronics",
    name: "Iphone 12 pro-max",
    price: "₦580000",
    img: "Img/iphone 12promax.jpg"
  },
  {
    category: "Electronics",
    name: "Iphone 14 pro-max",
    price: "₦780000",
    img: "Img/iphone14pro.jpg"
  },
  {
    category: "Electronics",
    name: "Macbook Air ",
    price: "₦899000",
    img: "Img/macbook laptop.jpg"
  },
  {
    category: "Electronics",
    name: "Samsung s23 ultra",
    price: "₦1.700.000",
    img: "Img/samsung s23 ultra.jpg"
  },
  {
    category: "Electronics",
    name: "Sony",
    price: "₦17000",
    img: "Img/sony headset.jpg"
  },
  {
    category: "Electronics",
    name: "Iphone 16",
    price: "₦960000",
    img: "Img/iphone 16.jpg"
  },
  {
    category: "Electronics",
    name: "Apple Watch",
    price: "₦120000",
    img: "Img/Apple watch.jpg"
  },



];

// ========== CATEGORY FILTER CLICK ==========
const categoryButtons = document.querySelectorAll(".cat-btn");
const categoryTitle = document.getElementById("category-title");
const categoryProducts = document.getElementById("category-products");

categoryButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const selected = btn.textContent.replace(/[^a-zA-Z ]/g, "").trim(); // remove emojis

    // Set section title
    categoryTitle.textContent = selected + " Dishes";

    // Filter products
    const filtered = products.filter(item => item.category === selected);

    // Display products
    categoryProducts.innerHTML = filtered.map(item => `
      <div class="product-card">
        <img src="${item.img}" alt="${item.name}">
        <h4>${item.name}</h4>
        <div class="price-row">
          <p class="price">${item.price}</p>
        </div>
        <div class="bottom-row">
          <span class="stars">⭐⭐⭐⭐⭐</span>
          <button class="cart-btn"><i data-feather="shopping-cart">🛒</i></button>
        </div>
      </div>
    `).join("");

    // Re-load feather icons
    feather.replace();
  });
});


const searchInput = document.getElementById("search-input");

searchInput.addEventListener("keyup", function () {
  const query = searchInput.value.toLowerCase().trim();

  // If search empty → clear product results
  if (query === "") {
    categoryProducts.innerHTML = "";
    return;
  }

  // Filter products
  const filtered = products.filter(item =>
    item.name.toLowerCase().includes(query)
  );

  // If nothing found
  if (filtered.length === 0) {
    categoryProducts.innerHTML = `<p style="padding:10px; font-weight:600;">No results found</p>`;
    return;
  }

  // Show search results (NO SEARCH TITLE)
  categoryProducts.innerHTML = filtered.map(item => `
    <div class="product-card">
      <img src="${item.img}" alt="${item.name}">
      <h4>${item.name}</h4>
      <div class="price-row">
        <p class="price">${item.price}</p>
      </div>
      <div class="bottom-row">
        <span class="stars">⭐⭐⭐⭐⭐</span>
        <button class="cart-btn"><i data-feather="shopping-cart">🛒</i></button>
      </div>
    </div>
  `).join("");

  feather.replace();
});

feather.replace();


// ================== CART SYSTEM ===================
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Update cart number on page load
updateCartCount();

// Listen for ANY .cart-btn click (works on dynamic content)
document.addEventListener("click", function (e) {

  const btn = e.target.closest(".cart-btn");
  if (!btn) return;

  const card = btn.closest(".product-card");
  if (!card) return;

  const item = {
    name: card.querySelector("h4").textContent,
    price: card.querySelector(".price").textContent,
    img: card.querySelector("img").src
  };

  // Add item to array
  cart.push(item);

  // Save in localStorage
  localStorage.setItem("cart", JSON.stringify(cart));

  // Update top cart count
  updateCartCount();

  alert(item.name + " added to cart!");
});

// ========== Update Cart Count ==========
function updateCartCount() {
  const headerCount = document.getElementById("cart-count");
  const drawerCount = document.querySelector(".drawer-cart-count");

  if (headerCount) headerCount.textContent = cart.length;
  if (drawerCount) drawerCount.textContent = cart.length;
}

updateCartCount();

