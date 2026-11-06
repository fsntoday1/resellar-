/**
 * FS Reseller BD - Single Page Application Core Engine
 * Liquid Glass UI & Dynamic Reseller Profit Architecture
 */

// ==========================================
// 1. INITIAL DATA & LOCAL STORAGE MANAGEMENT
// ==========================================

const INITIAL_PRODUCTS = [
  {
    id: "prod-101",
    name: "Ultra 9 Max Smartwatch (AMOLED + Bluetooth Calling)",
    category: "Gadgets",
    wholesalePrice: 850,
    suggestedMrp: 1650,
    stock: 75,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop&q=80",
    description: "2.1 inch High Definition AMOLED Screen, Wireless Charging, NFC Access, Dual Strap Included. 1 Year Service Warranty.",
    isHot: true
  },
  {
    id: "prod-102",
    name: "Air Pro 4 ANC Wireless Earbuds (Active Noise Cancellation)",
    category: "Audio",
    wholesalePrice: 480,
    suggestedMrp: 1150,
    stock: 120,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&auto=format&fit=crop&q=80",
    description: "Deep Bass 13mm Drivers, 32dB Active Noise Cancellation, 24 Hours Battery Backup with Case, Type-C Fast Charging.",
    isHot: true
  },
  {
    id: "prod-103",
    name: "Genuine Leather Bifold RFID Wallet (Gift Box Pack)",
    category: "Fashion",
    wholesalePrice: 380,
    suggestedMrp: 890,
    stock: 45,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=600&auto=format&fit=crop&q=80",
    description: "100% Original Cowhide Leather, RFID Blocking Protection, 8 Card Slots, Premium Velvet Gift Packaging.",
    isHot: false
  },
  {
    id: "prod-104",
    name: "Portable USB Rechargeable Mini Blender (6 Blades)",
    category: "Home",
    wholesalePrice: 520,
    suggestedMrp: 1190,
    stock: 60,
    image: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=600&auto=format&fit=crop&q=80",
    description: "Food Grade PCTG Material, 4000mAh Battery, 22000 RPM Powerful Motor, Fresh Juice on the go anywhere.",
    isHot: true
  },
  {
    id: "prod-105",
    name: "1080p Smart WiFi 360° Panoramic Security Camera",
    category: "Gadgets",
    wholesalePrice: 950,
    suggestedMrp: 1850,
    stock: 35,
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=600&auto=format&fit=crop&q=80",
    description: "Night Vision IR Sensors, Two-Way Audio Talk, Motion Detection Alerts, Mobile App Remote Monitoring worldwide.",
    isHot: false
  },
  {
    id: "prod-106",
    name: "Vintage T9 Professional Hair & Beard Trimmer",
    category: "Fashion",
    wholesalePrice: 290,
    suggestedMrp: 750,
    stock: 90,
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&auto=format&fit=crop&q=80",
    description: "Full Metal Engraved Dragon Body, Stainless Steel T-Blade, USB Fast Charging, 120 Mins Continuous Use.",
    isHot: true
  },
  {
    id: "prod-107",
    name: "MagSafe 10,000mAh Magnetic Wireless Power Bank",
    category: "Gadgets",
    wholesalePrice: 790,
    suggestedMrp: 1550,
    stock: 50,
    image: "https://images.unsplash.com/photo-1609592426508-cc02721a3674?w=600&auto=format&fit=crop&q=80",
    description: "Strong Magnetic Snap, 22.5W PD Fast Wired Output + 15W Wireless, LED Battery Indicator, Slim Pocket Design.",
    isHot: true
  },
  {
    id: "prod-108",
    name: "RGB 60% Compact Mechanical Gaming Keyboard (Blue Switch)",
    category: "Gadgets",
    wholesalePrice: 1150,
    suggestedMrp: 2200,
    stock: 25,
    image: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=600&auto=format&fit=crop&q=80",
    description: "Tactile Clicky Blue Switches, 18 Dynamic RGB Backlight Modes, Detachable Type-C Braided Cable, Anti-Ghosting.",
    isHot: false
  }
];

const INITIAL_ORDERS = [
  {
    id: "FS-8812",
    date: "2026-10-25 14:30",
    resellerName: "Tanvir Ahmed",
    resellerPhone: "01711223344",
    productId: "prod-101",
    productName: "Ultra 9 Max Smartwatch (AMOLED + Bluetooth Calling)",
    quantity: 1,
    wholesalePrice: 850,
    sellingPrice: 1550,
    profit: 700, // (1550 - 850) * 1
    customerName: "Kazi Rafiq",
    customerPhone: "01819876543",
    customerAddress: "House 14, Road 5, Dhanmondi, Dhaka",
    deliveryFee: 60,
    courier: "Steadfast",
    totalCod: 1610,
    status: "Approved" // Already approved so the user starts with ৳700 in balance!
  },
  {
    id: "FS-8813",
    date: "2026-10-25 18:15",
    resellerName: "Tanvir Ahmed",
    resellerPhone: "01711223344",
    productId: "prod-102",
    productName: "Air Pro 4 ANC Wireless Earbuds (Active Noise Cancellation)",
    quantity: 2,
    wholesalePrice: 480,
    sellingPrice: 990,
    profit: 1020, // (990 - 480) * 2 = 1020
    customerName: "Sumon Sarker",
    customerPhone: "01622334455",
    customerAddress: "Station Road, Chawkbazar, Chattogram",
    deliveryFee: 120,
    courier: "Pathao",
    totalCod: 2100,
    status: "Pending" // Ready for Admin approval test
  },
  {
    id: "FS-8814",
    date: "2026-10-25 21:05",
    resellerName: "Tanvir Ahmed",
    resellerPhone: "01711223344",
    productId: "prod-106",
    productName: "Vintage T9 Professional Hair & Beard Trimmer",
    quantity: 1,
    wholesalePrice: 290,
    sellingPrice: 750,
    profit: 460, // (750 - 290) * 1 = 460
    customerName: "Mahmud Hasan",
    customerPhone: "01999887766",
    customerAddress: "Zindabazar, Sylhet Sadar, Sylhet",
    deliveryFee: 120,
    courier: "Steadfast",
    totalCod: 870,
    status: "Pending" // Ready for Admin approval test
  }
];

// Application Global State
let state = {
  products: [],
  orders: [],
  theme: "dark",
  isAdminUnlocked: false,
  adminFilter: "all",
  activeCategory: "All",
  searchQuery: "",
  sortBy: "featured"
};

// LocalStorage Keys
const STORAGE_KEYS = {
  PRODUCTS: "fs_reseller_products_v2",
  ORDERS: "fs_reseller_orders_v2",
  THEME: "fs_reseller_theme_v2",
  ADMIN_AUTH: "fs_reseller_admin_auth_v2"
};

// ==========================================
// 2. INITIALIZATION & DATA LOADING
// ==========================================

function initApp() {
  loadTheme();
  loadData();
  setupEventListeners();
  renderAllViews();
}

function loadData() {
  // Products
  const storedProducts = localStorage.getItem(STORAGE_KEYS.PRODUCTS);
  if (storedProducts) {
    try {
      state.products = JSON.parse(storedProducts);
    } catch (e) {
      state.products = [...INITIAL_PRODUCTS];
    }
  } else {
    state.products = [...INITIAL_PRODUCTS];
    saveProducts();
  }

  // Orders
  const storedOrders = localStorage.getItem(STORAGE_KEYS.ORDERS);
  if (storedOrders) {
    try {
      state.orders = JSON.parse(storedOrders);
    } catch (e) {
      state.orders = [...INITIAL_ORDERS];
    }
  } else {
    state.orders = [...INITIAL_ORDERS];
    saveOrders();
  }

  // Admin Auth state check
  const savedAdminAuth = sessionStorage.getItem(STORAGE_KEYS.ADMIN_AUTH);
  if (savedAdminAuth === "true") {
    state.isAdminUnlocked = true;
  }
}

function saveProducts() {
  localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(state.products));
}

function saveOrders() {
  localStorage.setItem(STORAGE_KEYS.ORDERS, JSON.stringify(state.orders));
}

// ==========================================
// 3. THEME TOGGLING (DARK / LIGHT MODE)
// ==========================================

function loadTheme() {
  const savedTheme = localStorage.getItem(STORAGE_KEYS.THEME) || "dark";
  applyTheme(savedTheme);
}

function applyTheme(theme) {
  state.theme = theme;
  localStorage.setItem(STORAGE_KEYS.THEME, theme);

  const html = document.documentElement;
  const sunIcon = document.getElementById("theme-icon-sun");
  const moonIcon = document.getElementById("theme-icon-moon");

  if (theme === "dark") {
    html.classList.add("dark");
    sunIcon.classList.add("hidden");
    moonIcon.classList.remove("hidden");
  } else {
    html.classList.remove("dark");
    sunIcon.classList.remove("hidden");
    moonIcon.classList.add("hidden");
  }
}

function toggleTheme() {
  const nextTheme = state.theme === "dark" ? "light" : "dark";
  applyTheme(nextTheme);
  showToast(
    nextTheme === "dark" ? "ডার্ক মোড সক্রিয় করা হয়েছে" : "লাইট মোড সক্রিয় করা হয়েছে",
    "info"
  );
}

// ==========================================
// 4. TAB NAVIGATION & VIEW SWITCHING
// ==========================================

function switchTab(tabId) {
  // Update Tab Contents
  const tabs = document.querySelectorAll(".tab-content");
  tabs.forEach(tab => tab.classList.add("hidden"));
  const activeSection = document.getElementById(tabId);
  if (activeSection) {
    activeSection.classList.remove("hidden");
  }

  // Update Nav Button Styles
  const navBtns = {
    "catalog-tab": document.getElementById("nav-catalog-btn"),
    "orders-tab": document.getElementById("nav-orders-btn"),
    "admin-tab": document.getElementById("nav-admin-btn")
  };

  Object.keys(navBtns).forEach(key => {
    if (navBtns[key]) {
      if (key === tabId) {
        navBtns[key].classList.add("active-tab");
      } else {
        navBtns[key].classList.remove("active-tab");
      }
    }
  });

  // If switching to admin tab, render appropriate state
  if (tabId === "admin-tab") {
    renderAdminSection();
  } else if (tabId === "orders-tab") {
    renderOrdersTable();
  } else if (tabId === "catalog-tab") {
    renderCatalog();
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function toggleMobileMenu() {
  const menu = document.getElementById("mobile-menu");
  if (menu) {
    menu.classList.toggle("hidden");
  }
}

// ==========================================
// 5. DYNAMIC RESELLER BALANCE ENGINE
// ==========================================

/**
 * Calculates current approved profit balance and pending profits
 */
function calculateBalances() {
  let approvedProfit = 0;
  let pendingProfit = 0;

  state.orders.forEach(order => {
    if (order.status === "Approved") {
      approvedProfit += Number(order.profit) || 0;
    } else if (order.status === "Pending") {
      pendingProfit += Number(order.profit) || 0;
    }
  });

  return {
    approved: approvedProfit,
    pending: pendingProfit,
    totalOrders: state.orders.length
  };
}

/**
 * Updates UI balance counters with subtle animation
 */
function updateBalanceDisplays() {
  const { approved, pending, totalOrders } = calculateBalances();

  // Top Navbar Balance Box
  const navBalanceEl = document.getElementById("user-balance-display");
  if (navBalanceEl) {
    animateNumber(navBalanceEl, approved);
  }

  // Orders Tab Summary
  const ordersTotalCountEl = document.getElementById("orders-total-count");
  const ordersApprovedProfitEl = document.getElementById("orders-approved-profit");
  const ordersPendingProfitEl = document.getElementById("orders-pending-profit");
  const orderCountBadge = document.getElementById("order-count-badge");
  const mobileOrderBadge = document.getElementById("mobile-order-badge");
  const payoutBalanceEl = document.getElementById("payout-available-balance");

  if (ordersTotalCountEl) ordersTotalCountEl.innerText = totalOrders;
  if (ordersApprovedProfitEl) ordersApprovedProfitEl.innerText = approved.toLocaleString("en-BD");
  if (ordersPendingProfitEl) ordersPendingProfitEl.innerText = pending.toLocaleString("en-BD");
  if (orderCountBadge) orderCountBadge.innerText = totalOrders;
  if (mobileOrderBadge) mobileOrderBadge.innerText = totalOrders;
  if (payoutBalanceEl) payoutBalanceEl.innerText = approved.toLocaleString("en-BD");

  // Admin Dashboard stats
  const adminPendingCountEl = document.getElementById("admin-pending-count");
  const adminApprovedCountEl = document.getElementById("admin-approved-count");
  const adminTotalProfitDistEl = document.getElementById("admin-total-profit-distributed");
  const adminProductCountEl = document.getElementById("admin-product-count");

  const pendingOrdersCount = state.orders.filter(o => o.status === "Pending").length;
  const approvedOrdersCount = state.orders.filter(o => o.status === "Approved").length;

  if (adminPendingCountEl) adminPendingCountEl.innerText = pendingOrdersCount;
  if (adminApprovedCountEl) adminApprovedCountEl.innerText = approvedOrdersCount;
  if (adminTotalProfitDistEl) adminTotalProfitDistEl.innerText = approved.toLocaleString("en-BD");
  if (adminProductCountEl) adminProductCountEl.innerText = state.products.length;
}

function animateNumber(element, targetValue) {
  const currentVal = parseInt(element.innerText.replace(/,/g, "") || "0", 10);
  if (isNaN(currentVal) || currentVal === targetValue) {
    element.innerText = targetValue.toLocaleString("en-BD");
    return;
  }

  const duration = 600;
  const frameRate = 30;
  const totalFrames = Math.round((duration / 1000) * frameRate);
  let frame = 0;

  const timer = setInterval(() => {
    frame++;
    const progress = frame / totalFrames;
    const currentNumber = Math.round(currentVal + (targetValue - currentVal) * progress);
    element.innerText = currentNumber.toLocaleString("en-BD");

    if (frame === totalFrames) {
      clearInterval(timer);
      element.innerText = targetValue.toLocaleString("en-BD");
    }
  }, 1000 / frameRate);
}

// ==========================================
// 6. PRODUCT CATALOG WITH PROFIT PREVIEW
// ==========================================

function renderCatalog() {
  const grid = document.getElementById("product-grid");
  const emptyState = document.getElementById("empty-catalog-state");
  const countText = document.getElementById("catalog-count-text");

  let filtered = state.products.filter(prod => {
    const matchesCat = state.activeCategory === "All" || prod.category === state.activeCategory;
    const matchesSearch = prod.name.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
                          prod.category.toLowerCase().includes(state.searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  // Sorting
  if (state.sortBy === "profit-high") {
    filtered.sort((a, b) => (b.suggestedMrp - b.wholesalePrice) - (a.suggestedMrp - a.wholesalePrice));
  } else if (state.sortBy === "price-low") {
    filtered.sort((a, b) => a.wholesalePrice - b.wholesalePrice);
  } else if (state.sortBy === "price-high") {
    filtered.sort((a, b) => b.wholesalePrice - a.wholesalePrice);
  }

  if (countText) {
    countText.innerText = `${filtered.length} টি প্রোডাক্ট পাওয়া গেছে`;
  }

  if (filtered.length === 0) {
    grid.innerHTML = "";
    emptyState.classList.remove("hidden");
    return;
  }

  emptyState.classList.add("hidden");

  grid.innerHTML = filtered.map(prod => {
    const estProfit = prod.suggestedMrp - prod.wholesalePrice;
    const profitMargin = Math.round((estProfit / prod.wholesalePrice) * 100);

    return `
      <div class="liquid-card rounded-3xl p-4 flex flex-col justify-between group hover:border-emerald-400/50 transition-all duration-300">
        <!-- Image & Badges -->
        <div class="relative overflow-hidden rounded-2xl h-48 bg-slate-900/40 mb-3.5">
          <img src="${prod.image}" alt="${escapeHtml(prod.name)}" 
            class="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 rounded-2xl"
            loading="lazy"
            onerror="this.src='https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600'">

          <!-- Top tags -->
          <div class="absolute top-2.5 left-2.5 flex items-center gap-1.5">
            <span class="px-2.5 py-1 rounded-xl text-[10px] font-bold bg-slate-900/80 backdrop-blur-md text-emerald-300 border border-emerald-400/30">
              ${prod.category}
            </span>
            ${prod.isHot ? `
              <span class="px-2 py-1 rounded-xl text-[10px] font-bold bg-rose-500/80 backdrop-blur-md text-white border border-rose-400/40 animate-pulse">
                <i class="fa-solid fa-fire mr-0.5"></i> HOT
              </span>
            ` : ''}
          </div>

          <div class="absolute top-2.5 right-2.5">
            <span class="px-2 py-0.5 rounded-lg text-[10px] font-semibold bg-slate-950/70 backdrop-blur-md text-slate-300 border border-white/10">
              স্টক: ${prod.stock} pcs
            </span>
          </div>

          <!-- Quick Copy Description Overlay on Hover -->
          <button onclick="copyProductCaption('${prod.id}')" 
            title="ফেসবুকে পোস্ট করার জন্য ক্যাপশন কপি করুন" 
            class="absolute bottom-2.5 right-2.5 px-2.5 py-1.5 rounded-xl bg-slate-950/80 backdrop-blur-md border border-white/20 text-[11px] font-bold text-white hover:text-emerald-400 hover:border-emerald-400 transition-all flex items-center gap-1 shadow-lg">
            <i class="fa-regular fa-copy"></i> কপি ডিটেইলস
          </button>
        </div>

        <!-- Product Title & Description -->
        <div class="flex-1 space-y-2">
          <h3 class="text-sm font-bold text-white line-clamp-2 group-hover:text-emerald-300 transition-colors" title="${escapeHtml(prod.name)}">
            ${escapeHtml(prod.name)}
          </h3>
          <p class="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">
            ${escapeHtml(prod.description || 'উচ্চমানের B2B রিসেলিং প্রোডাক্ট। দেশব্যাপী দ্রুত ক্যাশ অন ডেলিভারি সাপোর্ট।')}
          </p>
        </div>

        <!-- Price Breakdown with Highlighted Profit Preview Box -->
        <div class="mt-4 pt-3 border-t border-white/10 space-y-2.5">
          
          <div class="flex items-center justify-between text-xs">
            <div>
              <span class="text-[10px] text-slate-400 block uppercase tracking-wider">হোলসেল (কেনা দাম)</span>
              <span class="font-extrabold text-white text-base font-mono">৳ ${prod.wholesalePrice.toLocaleString()}</span>
            </div>
            <div class="text-right">
              <span class="text-[10px] text-slate-400 block uppercase tracking-wider">সাজেস্টেড MRP (বিক্রি)</span>
              <span class="font-bold text-slate-300 text-sm font-mono">৳ ${prod.suggestedMrp.toLocaleString()}</span>
            </div>
          </div>

          <!-- Profit Preview Badge (Critical requirement) -->
          <div class="liquid-glass-pill p-2 rounded-xl flex items-center justify-between border border-emerald-500/30 bg-emerald-950/30 profit-shimmer">
            <div class="flex items-center gap-1.5">
              <div class="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs">
                <i class="fa-solid fa-arrow-trend-up"></i>
              </div>
              <span class="text-[11px] font-bold text-emerald-300">সম্ভাব্য নিট লাভ:</span>
            </div>
            <div class="text-right">
              <span class="text-xs font-black text-emerald-400 font-mono">+৳ ${estProfit.toLocaleString()}</span>
              <span class="text-[9px] text-emerald-300/80 font-semibold ml-1">(${profitMargin}%)</span>
            </div>
          </div>

          <!-- Order Action Button -->
          <button onclick="openOrderModal('${prod.id}')" 
            class="w-full py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 text-slate-950 font-black text-xs hover:brightness-110 shadow-lg shadow-emerald-500/20 transition-all flex items-center justify-center gap-1.5">
            <i class="fa-solid fa-bag-shopping"></i> রিসেলার অর্ডার দিন
          </button>
        </div>

      </div>
    `;
  }).join("");
}

function filterCategory(category) {
  state.activeCategory = category;

  // Update pills style
  const pills = document.querySelectorAll(".category-pill");
  pills.forEach(pill => {
    if (pill.innerText.includes(category) || (category === "All" && pill.innerText.includes("সবগুলো"))) {
      pill.classList.add("active-cat");
    } else {
      pill.classList.remove("active-cat");
    }
  });

  renderCatalog();
}

function sortProducts(sortBy) {
  state.sortBy = sortBy;
  renderCatalog();
}

function resetFilters() {
  state.activeCategory = "All";
  state.searchQuery = "";
  state.sortBy = "featured";

  const searchInput = document.getElementById("product-search");
  if (searchInput) searchInput.value = "";

  const sortSelect = document.getElementById("sort-select");
  if (sortSelect) sortSelect.value = "featured";

  filterCategory("All");
}

function copyProductCaption(productId) {
  const prod = state.products.find(p => p.id === productId);
  if (!prod) return;

  const estProfit = prod.suggestedMrp - prod.wholesalePrice;
  const text = `🔥 ${prod.name} 🔥\n\n` +
               `✨ প্রিমিয়াম কোয়ালিটি গ্যাজেট।\n` +
               `✅ প্রোডাক্ট ফিচারস: ${prod.description}\n\n` +
               `💵 রেগুলার প্রাইস: ৳ ${prod.suggestedMrp}\n` +
               `🚚 সারা দেশে ক্যাশ অন ডেলিভারি সুবিধা!\n` +
               `অর্ডার করতে আপনার নাম, মোবাইল নম্বর ও ঠিকানা দিয়ে মেসেজ করুন।`;

  navigator.clipboard.writeText(text).then(() => {
    showToast("প্রোডাক্টের বিবরণ ও ক্যাপশন কপি হয়েছে! ফেসবুকে পোস্ট করতে পারেন।", "success");
  }).catch(() => {
    showToast("ক্লিপবোর্ডে কপি করতে সমস্যা হয়েছে", "error");
  });
}

// ==========================================
// 7. RESELLER ORDER PLACEMENT & PROFIT ESTIMATION
// ==========================================

function openOrderModal(productId) {
  const prod = state.products.find(p => p.id === productId);
  if (!prod) return;

  // Prefill modal
  document.getElementById("modal-product-id").value = prod.id;
  document.getElementById("modal-wholesale-price").value = prod.wholesalePrice;
  document.getElementById("modal-product-img").src = prod.image;
  document.getElementById("modal-product-badge").innerText = prod.category;
  document.getElementById("modal-product-title").innerText = prod.name;
  document.getElementById("modal-product-wholesale").innerText = prod.wholesalePrice.toLocaleString();
  document.getElementById("modal-product-mrp").innerText = prod.suggestedMrp.toLocaleString();

  // Prefill defaults
  document.getElementById("order-quantity").value = 1;
  document.getElementById("order-selling-price").value = prod.suggestedMrp; // Pre-fill with suggested MRP
  document.getElementById("order-selling-price").min = prod.wholesalePrice;

  // If reseller info stored previously, prefill it
  const savedReseller = JSON.parse(localStorage.getItem("fs_last_reseller") || "{}");
  if (savedReseller.name) document.getElementById("order-reseller-name").value = savedReseller.name;
  if (savedReseller.phone) document.getElementById("order-reseller-phone").value = savedReseller.phone;

  calculateModalProfit();

  // Open modal animation
  const modal = document.getElementById("order-modal");
  modal.classList.remove("hidden");
  setTimeout(() => {
    modal.classList.remove("opacity-0");
    modal.firstElementChild.classList.remove("scale-95");
  }, 10);
}

function closeOrderModal() {
  const modal = document.getElementById("order-modal");
  modal.classList.add("opacity-0");
  modal.firstElementChild.classList.add("scale-95");
  setTimeout(() => {
    modal.classList.add("hidden");
  }, 250);
}

/**
 * Real-time calculation of Reseller Profit inside the order modal
 */
function calculateModalProfit() {
  const wholesale = Number(document.getElementById("modal-wholesale-price").value) || 0;
  const quantity = Math.max(1, Number(document.getElementById("order-quantity").value) || 1);
  const sellingPrice = Number(document.getElementById("order-selling-price").value) || 0;
  const deliveryFee = Number(document.getElementById("order-delivery-area").value) || 60;

  // Profit = (Customer Selling Price - Wholesale Cost) * Quantity
  const netProfit = (sellingPrice - wholesale) * quantity;
  const totalCod = (sellingPrice * quantity) + deliveryFee;

  const profitDisplay = document.getElementById("modal-calculated-profit");
  const marginBadge = document.getElementById("modal-profit-margin-badge");
  const codBillDisplay = document.getElementById("modal-total-cod-bill");

  if (profitDisplay) {
    profitDisplay.innerText = netProfit.toLocaleString("en-BD");
    if (netProfit < 0) {
      profitDisplay.parentElement.classList.add("text-rose-400");
      profitDisplay.parentElement.classList.remove("text-emerald-300");
    } else {
      profitDisplay.parentElement.classList.remove("text-rose-400");
      profitDisplay.parentElement.classList.add("text-emerald-300");
    }
  }

  if (marginBadge) {
    if (sellingPrice > wholesale) {
      const margin = Math.round(((sellingPrice - wholesale) / wholesale) * 100);
      marginBadge.innerText = `লাভ মার্জিন: ${margin}% (+৳${netProfit.toLocaleString()} মোট লাভ)`;
      marginBadge.className = "text-[10px] text-emerald-400 font-medium";
    } else if (sellingPrice === wholesale) {
      marginBadge.innerText = `সতর্কতা: কেনা ও বিক্রির দাম সমান! (লাভ ৳০)`;
      marginBadge.className = "text-[10px] text-amber-400 font-medium";
    } else {
      marginBadge.innerText = `ভুল: বিক্রি মূল্য কেনা দামের চেয়ে কম রাখা যাবে না!`;
      marginBadge.className = "text-[10px] text-rose-400 font-bold";
    }
  }

  if (codBillDisplay) {
    codBillDisplay.innerText = totalCod.toLocaleString("en-BD");
  }
}

function submitResellerOrder(e) {
  e.preventDefault();

  const prodId = document.getElementById("modal-product-id").value;
  const prod = state.products.find(p => p.id === prodId);
  if (!prod) return;

  const wholesale = Number(document.getElementById("modal-wholesale-price").value) || 0;
  const quantity = Number(document.getElementById("order-quantity").value) || 1;
  const sellingPrice = Number(document.getElementById("order-selling-price").value) || 0;

  if (sellingPrice < wholesale) {
    showToast("বিক্রি মূল্য অবশ্যই কেনা দামের (৳ " + wholesale + ") সমান বা বেশি হতে হবে!", "error");
    return;
  }

  const resellerName = document.getElementById("order-reseller-name").value.trim();
  const resellerPhone = document.getElementById("order-reseller-phone").value.trim();
  const customerName = document.getElementById("order-customer-name").value.trim();
  const customerPhone = document.getElementById("order-customer-phone").value.trim();
  const deliveryFee = Number(document.getElementById("order-delivery-area").value);
  const courier = document.getElementById("order-courier").value;
  const customerAddress = document.getElementById("order-customer-address").value.trim();

  // Save reseller info for next time convenience
  localStorage.setItem("fs_last_reseller", JSON.stringify({ name: resellerName, phone: resellerPhone }));

  const netProfit = (sellingPrice - wholesale) * quantity;
  const totalCod = (sellingPrice * quantity) + deliveryFee;

  const newOrder = {
    id: `FS-${Math.floor(1000 + Math.random() * 9000)}`,
    date: new Date().toISOString().replace("T", " ").substring(0, 16),
    resellerName,
    resellerPhone,
    productId: prod.id,
    productName: prod.name,
    quantity,
    wholesalePrice: wholesale,
    sellingPrice,
    profit: netProfit,
    customerName,
    customerPhone,
    customerAddress,
    deliveryFee,
    courier,
    totalCod,
    status: "Pending" // Starts with Pending until Admin approves!
  };

  // Add to state and save
  state.orders.unshift(newOrder);
  saveOrders();

  // Deduct stock if desired
  if (prod.stock >= quantity) {
    prod.stock -= quantity;
    saveProducts();
  }

  closeOrderModal();
  updateBalanceDisplays();
  renderOrdersTable();

  // Fire celebratory confetti!
  if (typeof confetti === "function") {
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.6 }
    });
  }

  showToast(`🎉 অর্ডার #${newOrder.id} সফলভাবে প্লেস হয়েছে! স্ট্যাটাস: Pending`, "success");

  // Switch to orders tab after short delay so reseller sees their pending order
  setTimeout(() => {
    switchTab("orders-tab");
  }, 500);
}

// ==========================================
// 8. RESELLER ORDERS TRACKING TABLE
// ==========================================

function renderOrdersTable() {
  const tbody = document.getElementById("orders-table-body");
  const emptyState = document.getElementById("orders-empty-state");

  if (!tbody) return;

  if (state.orders.length === 0) {
    tbody.innerHTML = "";
    if (emptyState) emptyState.classList.remove("hidden");
    return;
  }

  if (emptyState) emptyState.classList.add("hidden");

  tbody.innerHTML = state.orders.map(order => {
    let statusClass = "status-badge-pending";
    let statusText = "অপেক্ষমাণ (Pending)";
    let statusIcon = "fa-clock";

    if (order.status === "Approved") {
      statusClass = "status-badge-approved";
      statusText = "অনুমোদিত (Approved)";
      statusIcon = "fa-circle-check";
    } else if (order.status === "Cancelled") {
      statusClass = "status-badge-cancelled";
      statusText = "বাতিল (Cancelled)";
      statusIcon = "fa-circle-xmark";
    }

    return `
      <tr class="hover:bg-white/5 transition-colors">
        <td class="py-3.5 px-4 font-mono font-bold text-white">
          ${order.id}
          <div class="text-[10px] text-slate-400 font-sans font-normal">${order.date}</div>
        </td>
        <td class="py-3.5 px-4">
          <div class="font-semibold text-white max-w-xs truncate" title="${escapeHtml(order.productName)}">${escapeHtml(order.productName)}</div>
          <div class="text-[10px] text-slate-400">পরিমাণ: ${order.quantity} pcs &bull; কুরিয়ার: ${order.courier}</div>
        </td>
        <td class="py-3.5 px-4">
          <div class="font-medium text-slate-200">${escapeHtml(order.customerName)} (${order.customerPhone})</div>
          <div class="text-[10px] text-slate-400 max-w-xs truncate">${escapeHtml(order.customerAddress)}</div>
        </td>
        <td class="py-3.5 px-4 text-center font-mono text-slate-300">
          ৳ ${(order.wholesalePrice * order.quantity).toLocaleString()}
          <div class="text-[9px] text-slate-500">(@৳${order.wholesalePrice})</div>
        </td>
        <td class="py-3.5 px-4 text-center font-mono text-slate-200">
          ৳ ${(order.sellingPrice * order.quantity).toLocaleString()}
          <div class="text-[9px] text-slate-500">(@৳${order.sellingPrice})</div>
        </td>
        <td class="py-3.5 px-4 text-right">
          <span class="font-mono font-extrabold text-sm ${order.status === 'Approved' ? 'text-emerald-400' : 'text-amber-400'}">
            +৳ ${order.profit.toLocaleString()}
          </span>
          <div class="text-[9px] ${order.status === 'Approved' ? 'text-emerald-500' : 'text-slate-400'}">
            ${order.status === 'Approved' ? 'ব্যালেন্সে যোগ হয়েছে' : 'অনুমোদনের অপেক্ষায়'}
          </div>
        </td>
        <td class="py-3.5 px-4 text-center">
          <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold ${statusClass}">
            <i class="fa-solid ${statusIcon}"></i> ${statusText}
          </span>
        </td>
        <td class="py-3.5 px-4 text-center">
          <button onclick="viewOrderInvoice('${order.id}')" class="px-2.5 py-1 rounded-lg liquid-glass-btn text-[11px] text-slate-300 hover:text-white" title="ইনভয়েস বা মেমো দেখুন">
            <i class="fa-solid fa-file-invoice mr-1 text-emerald-400"></i> মেমো
          </button>
        </td>
      </tr>
    `;
  }).join("");
}

// ==========================================
// 9. SECURED ADMIN PORTAL & ACTION APPROVALS
// ==========================================

function handleAdminLogin(e) {
  e.preventDefault();
  const pinInput = document.getElementById("admin-pin-input");
  const pin = pinInput ? pinInput.value.trim() : "";

  // Password / PIN is 1234 or admin123
  if (pin === "1234" || pin === "admin123") {
    state.isAdminUnlocked = true;
    sessionStorage.setItem(STORAGE_KEYS.ADMIN_AUTH, "true");
    if (pinInput) pinInput.value = "";
    showToast("অ্যাডমিন পোর্টাল সফলভাবে আনলক হয়েছে!", "success");
    renderAdminSection();
  } else {
    showToast("ভুল পাসওয়ার্ড! ডেমো পিন: 1234 ব্যবহার করুন", "error");
    if (pinInput) {
      pinInput.classList.add("border-rose-500");
      setTimeout(() => pinInput.classList.remove("border-rose-500"), 1000);
    }
  }
}

function lockAdminPanel() {
  state.isAdminUnlocked = false;
  sessionStorage.removeItem(STORAGE_KEYS.ADMIN_AUTH);
  showToast("অ্যাডমিন প্যানেল লক করা হয়েছে", "info");
  renderAdminSection();
}

function renderAdminSection() {
  const loginCard = document.getElementById("admin-login-card");
  const dashboardView = document.getElementById("admin-dashboard-view");

  if (!state.isAdminUnlocked) {
    if (loginCard) loginCard.classList.remove("hidden");
    if (dashboardView) dashboardView.classList.add("hidden");
  } else {
    if (loginCard) loginCard.classList.add("hidden");
    if (dashboardView) dashboardView.classList.remove("hidden");
    renderAdminOrders();
    renderAdminProducts();
    updateBalanceDisplays();
  }
}

function filterAdminOrders(filter) {
  state.adminFilter = filter;

  // Filter button state
  const btns = {
    all: document.getElementById("admin-filter-all"),
    Pending: document.getElementById("admin-filter-pending"),
    Approved: document.getElementById("admin-filter-approved")
  };

  Object.keys(btns).forEach(key => {
    if (btns[key]) {
      if (key === filter) {
        btns[key].classList.add("active-tab");
      } else {
        btns[key].classList.remove("active-tab");
      }
    }
  });

  renderAdminOrders();
}

function renderAdminOrders() {
  const tbody = document.getElementById("admin-orders-table-body");
  const emptyState = document.getElementById("admin-orders-empty");
  if (!tbody) return;

  let filtered = state.orders;
  if (state.adminFilter !== "all") {
    filtered = state.orders.filter(o => o.status === state.adminFilter);
  }

  if (filtered.length === 0) {
    tbody.innerHTML = "";
    if (emptyState) emptyState.classList.remove("hidden");
    return;
  }

  if (emptyState) emptyState.classList.add("hidden");

  tbody.innerHTML = filtered.map(order => {
    const isPending = order.status === "Pending";
    const isApproved = order.status === "Approved";

    return `
      <tr class="hover:bg-white/5 transition-colors">
        <td class="py-3 px-4 font-mono font-bold text-white">
          ${order.id}
          <div class="text-[10px] text-slate-400 font-sans font-normal">${order.date}</div>
        </td>
        <td class="py-3 px-4">
          <div class="font-bold text-emerald-400">${escapeHtml(order.resellerName)}</div>
          <div class="text-[10px] text-slate-400 font-mono">${order.resellerPhone}</div>
        </td>
        <td class="py-3 px-4">
          <div class="font-semibold text-white">${escapeHtml(order.customerName)} (${order.customerPhone})</div>
          <div class="text-[10px] text-slate-400 max-w-xs truncate">${escapeHtml(order.customerAddress)} &bull; ${order.courier}</div>
        </td>
        <td class="py-3 px-4">
          <div class="text-slate-200 font-medium max-w-xs truncate">${escapeHtml(order.productName)}</div>
          <div class="text-[10px] text-slate-400">পরিমাণ: ${order.quantity} pcs</div>
        </td>
        <td class="py-3 px-4 text-center font-mono text-slate-300">
          ৳ ${(order.wholesalePrice * order.quantity).toLocaleString()}
        </td>
        <td class="py-3 px-4 text-center font-mono text-white font-semibold">
          ৳ ${(order.sellingPrice * order.quantity).toLocaleString()}
        </td>
        <td class="py-3 px-4 text-right font-mono font-black text-emerald-400">
          +৳ ${order.profit.toLocaleString()}
        </td>
        <td class="py-3 px-4 text-center">
          <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
            isApproved ? 'status-badge-approved' : (isPending ? 'status-badge-pending' : 'status-badge-cancelled')
          }">
            ${order.status}
          </span>
        </td>
        <td class="py-3 px-4 text-center">
          <div class="flex items-center justify-center gap-1.5">
            ${isPending ? `
              <button onclick="approveOrderAction('${order.id}')" 
                class="px-2.5 py-1 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-[11px] shadow-sm flex items-center gap-1" 
                title="অর্ডার অনুমোদন করুন এবং রিসেলারের একাউন্টে লাভ যোগ করুন">
                <i class="fa-solid fa-check"></i> Approve
              </button>
              <button onclick="cancelOrderAction('${order.id}')" 
                class="px-2 py-1 rounded-lg bg-rose-500/20 text-rose-300 hover:bg-rose-500 hover:text-white border border-rose-500/30 font-semibold text-[11px]" 
                title="অর্ডার বাতিল করুন">
                <i class="fa-solid fa-xmark"></i>
              </button>
            ` : (isApproved ? `
              <span class="text-[11px] text-emerald-400 font-semibold flex items-center gap-1">
                <i class="fa-solid fa-circle-check"></i> সম্পন্ন
              </span>
              <button onclick="cancelOrderAction('${order.id}')" class="text-[10px] text-rose-400 hover:underline ml-2">
                বাতিল করুন
              </button>
            ` : `
              <button onclick="approveOrderAction('${order.id}')" class="text-[10px] text-emerald-400 hover:underline">
                পুনরায় অনুমোদন
              </button>
            `)}
            <button onclick="viewOrderInvoice('${order.id}')" class="p-1 text-slate-400 hover:text-white" title="মেমো প্রিন্ট">
              <i class="fa-solid fa-print"></i>
            </button>
          </div>
        </td>
      </tr>
    `;
  }).join("");
}

/**
 * CRUCIAL REQUIREMENT:
 * Admin clicks "Approve / Confirm" button on an order:
 * 1. Order status changes to 'Approved'.
 * 2. Calculated profit automatically reflects in reseller balance.
 * 3. Shows toast & triggers balance animations.
 */
function approveOrderAction(orderId) {
  const order = state.orders.find(o => o.id === orderId);
  if (!order) return;

  order.status = "Approved";
  saveOrders();

  // Dynamic balance update
  updateBalanceDisplays();
  renderAdminOrders();
  renderOrdersTable();

  // Confetti celebration
  if (typeof confetti === "function") {
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.7 }
    });
  }

  showToast(
    `✅ অর্ডার #${order.id} অনুমোদিত! ৳${order.profit.toLocaleString()} রিসেলারের ব্যালেন্সে যুক্ত হয়েছে।`,
    "success"
  );
}

function cancelOrderAction(orderId) {
  const order = state.orders.find(o => o.id === orderId);
  if (!order) return;

  if (confirm(`আপনি কি নিশ্চিত যে অর্ডার #${order.id} বাতিল করতে চান?`)) {
    order.status = "Cancelled";
    saveOrders();
    updateBalanceDisplays();
    renderAdminOrders();
    renderOrdersTable();
    showToast(`অর্ডার #${order.id} বাতিল করা হয়েছে।`, "info");
  }
}

// ==========================================
// 10. ADMIN PRODUCT MANAGEMENT
// ==========================================

function renderAdminProducts() {
  const tbody = document.getElementById("admin-products-table-body");
  if (!tbody) return;

  tbody.innerHTML = state.products.map(prod => {
    const profit = prod.suggestedMrp - prod.wholesalePrice;
    return `
      <tr class="hover:bg-white/5 transition-colors">
        <td class="py-3 px-4 flex items-center gap-3">
          <img src="${prod.image}" class="w-9 h-9 rounded-lg object-cover border border-white/10" onerror="this.src='https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600'">
          <div>
            <div class="font-bold text-white max-w-xs truncate">${escapeHtml(prod.name)}</div>
            <div class="text-[10px] text-slate-400 font-mono">ID: ${prod.id}</div>
          </div>
        </td>
        <td class="py-3 px-4">
          <span class="px-2 py-0.5 rounded text-[10px] font-semibold bg-white/10 text-slate-300">${prod.category}</span>
        </td>
        <td class="py-3 px-4 text-center font-mono font-bold text-emerald-400">৳ ${prod.wholesalePrice.toLocaleString()}</td>
        <td class="py-3 px-4 text-center font-mono text-slate-300">৳ ${prod.suggestedMrp.toLocaleString()}</td>
        <td class="py-3 px-4 text-center font-mono font-extrabold text-cyan-400">+৳ ${profit.toLocaleString()}</td>
        <td class="py-3 px-4 text-center font-mono text-slate-300">${prod.stock} pcs</td>
        <td class="py-3 px-4 text-center">
          <button onclick="deleteProduct('${prod.id}')" class="px-2 py-1 rounded-lg text-rose-400 hover:bg-rose-500/20 text-xs" title="মুছে ফেলুন">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </td>
      </tr>
    `;
  }).join("");
}

function openAddProductModal() {
  const modal = document.getElementById("add-product-modal");
  modal.classList.remove("hidden");
  setTimeout(() => {
    modal.classList.remove("opacity-0");
    modal.firstElementChild.classList.remove("scale-95");
  }, 10);
}

function closeAddProductModal() {
  const modal = document.getElementById("add-product-modal");
  modal.classList.add("opacity-0");
  modal.firstElementChild.classList.add("scale-95");
  setTimeout(() => {
    modal.classList.add("hidden");
  }, 250);
}

function handleAddNewProduct(e) {
  e.preventDefault();

  const name = document.getElementById("new-prod-name").value.trim();
  const category = document.getElementById("new-prod-category").value;
  const stock = Number(document.getElementById("new-prod-stock").value) || 10;
  const wholesalePrice = Number(document.getElementById("new-prod-wholesale").value) || 0;
  const suggestedMrp = Number(document.getElementById("new-prod-mrp").value) || 0;
  const image = document.getElementById("new-prod-image").value.trim();
  const description = document.getElementById("new-prod-desc").value.trim();

  if (suggestedMrp <= wholesalePrice) {
    showToast("সাজেস্টেড MRP অবশ্যই হোলসেল কেনা দামের চেয়ে বেশি হতে হবে!", "error");
    return;
  }

  const newProd = {
    id: `prod-${Math.floor(100 + Math.random() * 900)}`,
    name,
    category,
    wholesalePrice,
    suggestedMrp,
    stock,
    image,
    description: description || "হাই-ডিমান্ড রিসেলিং প্রোডাক্ট।",
    isHot: true
  };

  state.products.unshift(newProd);
  saveProducts();

  closeAddProductModal();
  document.getElementById("add-product-form").reset();

  renderCatalog();
  renderAdminProducts();
  updateBalanceDisplays();

  showToast(`পণ্য '${name}' সফলভাবে ক্যাটালগে যুক্ত হয়েছে!`, "success");
}

function deleteProduct(prodId) {
  const prod = state.products.find(p => p.id === prodId);
  if (!prod) return;

  if (confirm(`আপনি কি '${prod.name}' ক্যাটালগ থেকে মুছে ফেলতে চান?`)) {
    state.products = state.products.filter(p => p.id !== prodId);
    saveProducts();
    renderCatalog();
    renderAdminProducts();
    updateBalanceDisplays();
    showToast("প্রোডাক্ট মুছে ফেলা হয়েছে", "info");
  }
}

// ==========================================
// 11. INVOICE MEMO & PAYOUT MODALS
// ==========================================

function viewOrderInvoice(orderId) {
  const order = state.orders.find(o => o.id === orderId);
  if (!order) return;

  const invoiceDiv = document.getElementById("invoice-printable");
  if (!invoiceDiv) return;

  invoiceDiv.innerHTML = `
    <div class="border-b border-white/10 pb-4 flex items-center justify-between">
      <div>
        <h2 class="text-base font-black text-white">FS Reseller BD</h2>
        <p class="text-[10px] text-slate-400">ডেলিভারি মেমো ও ক্যাশ অন চালান</p>
      </div>
      <div class="text-right">
        <span class="text-xs font-mono font-bold text-emerald-400">#${order.id}</span>
        <div class="text-[10px] text-slate-400">${order.date}</div>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-4 py-2 border-b border-white/10 text-[11px]">
      <div>
        <span class="text-slate-400 block text-[9px] uppercase tracking-wider">রিসেলার তথ্য</span>
        <strong class="text-white">${escapeHtml(order.resellerName)}</strong>
        <div class="text-slate-400 font-mono">${order.resellerPhone}</div>
      </div>
      <div>
        <span class="text-slate-400 block text-[9px] uppercase tracking-wider">গ্রাহকের ডেলিভারি ঠিকানা</span>
        <strong class="text-white">${escapeHtml(order.customerName)}</strong>
        <div class="text-slate-300 font-mono">${order.customerPhone}</div>
        <div class="text-slate-400 text-[10px] leading-tight mt-0.5">${escapeHtml(order.customerAddress)}</div>
      </div>
    </div>

    <div class="py-2 space-y-1.5">
      <div class="flex items-center justify-between text-xs">
        <span class="text-slate-300 font-medium">${escapeHtml(order.productName)} &times; ${order.quantity}</span>
        <span class="font-mono text-white">৳ ${(order.sellingPrice * order.quantity).toLocaleString()}</span>
      </div>
      <div class="flex items-center justify-between text-xs text-slate-400">
        <span>ডেলিভারি চার্জ (${order.courier})</span>
        <span class="font-mono">৳ ${order.deliveryFee.toLocaleString()}</span>
      </div>
    </div>

    <div class="pt-3 border-t border-white/10 flex items-center justify-between font-bold text-sm bg-slate-950/40 p-3 rounded-xl">
      <span class="text-white">মোট প্রদেয় (Cash on Delivery):</span>
      <span class="font-mono text-emerald-400 text-base">৳ ${order.totalCod.toLocaleString()}</span>
    </div>

    <div class="text-center text-[10px] text-slate-500 pt-2">
      পণ্য ডেলিভারি পাওয়ার পর চেক করে মূল্য পরিশোধ করুন। প্রয়োজনে আমাদের সাপোর্ট এ কল করুন।
    </div>
  `;

  const modal = document.getElementById("invoice-modal");
  modal.classList.remove("hidden");
  setTimeout(() => {
    modal.classList.remove("opacity-0");
    modal.firstElementChild.classList.remove("scale-95");
  }, 10);
}

function closeInvoiceModal() {
  const modal = document.getElementById("invoice-modal");
  modal.classList.add("opacity-0");
  modal.firstElementChild.classList.add("scale-95");
  setTimeout(() => {
    modal.classList.add("hidden");
  }, 250);
}

function openPayoutModal() {
  const { approved } = calculateBalances();
  document.getElementById("payout-available-balance").innerText = approved.toLocaleString("en-BD");
  document.getElementById("payout-amount").max = approved;

  const modal = document.getElementById("payout-modal");
  modal.classList.remove("hidden");
  setTimeout(() => {
    modal.classList.remove("opacity-0");
    modal.firstElementChild.classList.remove("scale-95");
  }, 10);
}

function closePayoutModal() {
  const modal = document.getElementById("payout-modal");
  modal.classList.add("opacity-0");
  modal.firstElementChild.classList.add("scale-95");
  setTimeout(() => {
    modal.classList.add("hidden");
  }, 250);
}

function handlePayoutSubmit(e) {
  e.preventDefault();
  const { approved } = calculateBalances();
  const amount = Number(document.getElementById("payout-amount").value) || 0;
  const method = document.getElementById("payout-method").value;
  const phone = document.getElementById("payout-phone").value.trim();

  if (amount > approved) {
    showToast("উত্তোলনের পরিমাণ আপনার অনুমোদিত ব্যালেন্সের চেয়ে বেশি হতে পারে না!", "error");
    return;
  }
  if (amount < 100) {
    showToast("সর্বনিম্ন উত্তোলনের পরিমাণ ৳ ১০০", "warning");
    return;
  }

  closePayoutModal();
  showToast(
    `🎉 আপনার ৳${amount.toLocaleString()} এর ${method} (${phone}) উইথড্রয়াল রিকোয়েস্ট সফলভাবে জমা হয়েছে! ২ ঘণ্টার মধ্যে টাকা পাঠানো হবে।`,
    "success"
  );
}

// ==========================================
// 12. TOAST NOTIFICATION SYSTEM
// ==========================================

function showToast(message, type = "info") {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "liquid-card p-3.5 rounded-2xl flex items-center gap-3 shadow-2xl border pointer-events-auto transform transition-all duration-300 translate-y-4 opacity-0";

  let iconHtml = '<i class="fa-solid fa-circle-info text-cyan-400"></i>';
  let borderClass = "border-cyan-500/40";

  if (type === "success") {
    iconHtml = '<i class="fa-solid fa-circle-check text-emerald-400"></i>';
    borderClass = "border-emerald-500/50";
  } else if (type === "error") {
    iconHtml = '<i class="fa-solid fa-triangle-exclamation text-rose-400"></i>';
    borderClass = "border-rose-500/50";
  } else if (type === "warning") {
    iconHtml = '<i class="fa-solid fa-bell text-amber-400"></i>';
    borderClass = "border-amber-500/50";
  }

  toast.classList.add(borderClass);

  toast.innerHTML = `
    <div class="text-base shrink-0">${iconHtml}</div>
    <div class="text-xs text-white font-medium flex-1 leading-snug">${escapeHtml(message)}</div>
    <button onclick="this.parentElement.remove()" class="text-slate-400 hover:text-white text-xs">
      <i class="fa-solid fa-xmark"></i>
    </button>
  `;

  container.appendChild(toast);

  // Entrance
  setTimeout(() => {
    toast.classList.remove("translate-y-4", "opacity-0");
  }, 10);

  // Auto dismiss
  setTimeout(() => {
    toast.classList.add("translate-y-4", "opacity-0");
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

// ==========================================
// 13. UTILITIES & EVENT LISTENERS
// ==========================================

function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function setupEventListeners() {
  // Theme toggle button
  const themeToggle = document.getElementById("theme-toggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", toggleTheme);
  }

  // Mobile menu button
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener("click", toggleMobileMenu);
  }

  // Product search input
  const searchInput = document.getElementById("product-search");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      state.searchQuery = e.target.value.trim();
      renderCatalog();
    });
  }

  // Close modals on clicking backdrop
  window.addEventListener("click", (e) => {
    const orderModal = document.getElementById("order-modal");
    const addProductModal = document.getElementById("add-product-modal");
    const invoiceModal = document.getElementById("invoice-modal");
    const payoutModal = document.getElementById("payout-modal");

    if (e.target === orderModal) closeOrderModal();
    if (e.target === addProductModal) closeAddProductModal();
    if (e.target === invoiceModal) closeInvoiceModal();
    if (e.target === payoutModal) closePayoutModal();
  });

  // ESC key closes modals
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeOrderModal();
      closeAddProductModal();
      closeInvoiceModal();
      closePayoutModal();
    }
  });
}

function renderAllViews() {
  renderCatalog();
  renderOrdersTable();
  updateBalanceDisplays();
}

// Kick off when DOM is ready
document.addEventListener("DOMContentLoaded", initApp);
