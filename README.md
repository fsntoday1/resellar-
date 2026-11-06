# FS Reseller BD — B2B Reseller & Dropshipping Hub 🚀

A modern, responsive single-page B2B reseller and dropshipping platform designed for the Bangladeshi market. Built with a **Liquid Glass UI design system** (backdrop-filter blur, translucent frosted cards, soft gradient glowing borders, and floating ambient liquid orbs).

---

## ✨ Key Features

### 1. 💎 Liquid Glass UI & Ambient Visuals
- **Glassmorphism 3.0**: Dynamic `backdrop-blur-xl`, semi-transparent glass cards, subtle gradient borders, and soft specular reflections.
- **Ambient Liquid Orbs**: Floating multi-colored fluid background gradients that smoothly animate.
- **Responsive Layout**: Designed mobile-first, working seamlessly across smartphones, tablets, and 4K desktop screens.

### 2. 🌓 Dark and Light Mode Toggle
- Instant one-click switch between **Dark Liquid Obsidian** and **Light Frosted Crystal** themes.
- Persistent state saved to `localStorage`.

### 3. 💼 Reseller Balance & Live Profit Hub
- Persistent header widget showing the reseller's **Available Approved Profit (৳)** with smooth number counter animations.
- Quick **Withdraw / Payout** modal supporting instant bKash, Nagad, and Rocket payout requests.
- Real-time tracking of pending versus approved earnings.

### 4. 🛍️ Reseller Product Catalog with Automatic Profit Preview
- Rich catalog of top-selling products (Smartwatches, ANC Earbuds, Leather Wallets, Portable Blenders, Security Cameras, Hair Trimmers, Power Banks, Keyboards).
- Each product card displays:
  - **Wholesale Price (হোলসেল কেনা দাম)**
  - **Suggested Retail Price (খুচরা বিক্রি মূল্য / MRP)**
  - **Automatic Estimated Profit Badge (সম্ভাব্য নিট লাভ: +৳ XXX)** with percentage margin.
- **1-Click Copy Product Details**: Resellers can copy formatted sales captions ready to post on Facebook Pages/Groups or Daraz.
- Live search bar, category filter pills (Gadgets, Audio, Fashion, Home), and sorting options (highest profit, wholesale price).

### 5. 📦 Reseller Order & Profit Tracking System
- Dedicated **Place Reseller Order Modal**:
  - Reseller information (Name, bKash/Mobile).
  - End-customer delivery details (Full name, phone, address).
  - Courier options (Steadfast Courier, Pathao, RedX, Sundarban).
  - Delivery charge options (Inside Dhaka ৳60, Outside Dhaka ৳120).
  - **Custom Selling Price Input**: Reseller inputs the exact price they charged their customer.
  - **Live Profit Engine**: Instant calculation of `(Selling Price - Wholesale Price) * Quantity = Reseller Net Profit`.
- Orders tab tracks all placed orders, individual selling prices, customer addresses, profit margins, and status tags (`Pending`, `Approved`, `Cancelled`).
- Printable **Customer Delivery Memo / Invoice** generator for shipping parcels.

### 6. 🔐 Secured Admin Panel (PIN Protected)
- Protected with a password/PIN.
  > **Demo Admin PIN:** `1234` *(or `admin123`)*
- **Admin Dashboard Metrics**:
  - Pending orders count requiring action.
  - Approved orders count.
  - Total profit distributed to resellers.
  - Active catalog products.
- **Product Management**:
  - Form to add new products with custom image URLs, wholesale cost, suggested retail price, and stock count.
  - Instant catalog publishing and product deletion.

### 7. ⚡ Dynamic Balance Update on Admin Approval
- Admin can review all incoming orders with `Pending` status.
- Clicking **"Approve / Confirm"**:
  - Instantly updates status to `Approved`.
  - Dynamically credits the order's calculated profit to the Reseller's account balance in real time!
  - Triggers celebratory confetti particles and notification toast.
- Clicking **"Cancel"** rejects the order.

---

## 🚀 How to Run

1. Open `index.html` directly in any modern web browser (Google Chrome, Microsoft Edge, Brave, Firefox, Safari):
   ```bash
   # You can simply double-click index.html or open via browser:
   start index.html
   ```
2. No Node.js or Python backend is required — the application is fully client-side and persists all data (products, orders, balances, theme) in `localStorage`.

---

## 🛠️ Tech Stack
- **HTML5 & Modern Semantic Elements**
- **Tailwind CSS** (via CDN with custom glassmorphism extensions)
- **Custom Liquid Glass CSS** (`styles.css` with ambient keyframes & glass reflections)
- **Vanilla JavaScript (ES6+)** (`app.js` with state store and reactive rendering)
- **Canvas Confetti** for order celebration animations
- **Font Awesome 6** for crisp modern icons
- **Google Fonts** (Plus Jakarta Sans & Hind Siliguri for bilingual typography)
