/**
 * ============================================================
 * PORTFOLIO NHÓM 1 — HUB APPLICATION ENGINE
 * Senior Frontend Developer & UI/UX Designer
 * Features:
 *  - Real-time search by Name, Role, Skills, Bio, Highlights
 *  - Category filter tabs with dynamic count badges
 *  - Interactive skill pill tags (click any tag to filter)
 *  - Responsive Card Grid (1 col Mobile, 2-3 col Tablet/Desktop)
 *  - Grid View & List View toggle
 *  - Multi-criteria sorting (Default, Name A-Z, Role, Status)
 *  - View Engine Modal with isolated iframe
 *  - Responsive Device Frame Switcher (Desktop / Tablet / Mobile)
 *  - Dynamic Hash Routing (#portfolio/:memberId) & History API
 *  - Light / Dark Mode toggle with localStorage persistence
 *  - Complete A11y & Keyboard Shortcuts (Esc, Arrow keys, 1/2/3, /)
 * ============================================================
 */

/* ── DATA: 6 MEMBERS OF NHÓM 1 ── */
const MEMBERS = [
  {
    id: "bui-gia-hung",
    name: "Bùi Gia Hưng",
    role: "Smart Logistics & AI Developer",
    category: "ai-data",
    secondaryCats: ["backend"],
    avatar: "hub_assets/hung_avatar.jpg",
    status: "available",
    statusText: "Available for Projects",
    bio: "Sinh viên Năm 3 CNTT chuyên sâu Smart Logistics & AI tại UTH — nghiên cứu thị giác máy tính YOLOv8, giám sát chuỗi lạnh Cold Chain IoT và tối ưu hóa giải thuật chuỗi cung ứng.",
    highlights: [
      "Hệ thống giám sát Cold Chain IoT tích hợp YOLOv8",
      "Tối ưu thuật toán chuỗi cung ứng & DSA"
    ],
    skills: ["YOLOv8", "Python", "Computer Vision", "Cold Chain", "C++", "C#", "DSA", "OpenCV"],
    entry: "./portfolio_hung/index1.html",
    github: "https://github.com/",
    glow: "glow-ai",
    catLabel: "AI & Smart Logistics"
  },
  {
    id: "pham-gia-khiem",
    name: "Phạm Gia Khiêm (Ryuu)",
    role: "Android & Backend Developer",
    category: "mobile",
    secondaryCats: ["backend"],
    avatar: "hub_assets/khiem_avatar.jpg",
    status: "open",
    statusText: "Open to Work",
    bio: "Sinh viên CNTT năm 3 UTH — định hướng Android hiện đại và kiến trúc Backend tin cậy. Đam mê UX tinh tế, hiệu ứng canvas cánh hoa rơi và phong cách mỹ học Nhật Bản.",
    highlights: [
      "Smart Heritage — Ứng dụng khám phá di sản văn hóa số",
      "Lost & Found — Nền tảng kết nối tìm kiếm đồ thất lạc"
    ],
    skills: ["Android", "Kotlin", "Java", "Backend API", "Git", "Canvas", "RESTful", "Database"],
    entry: "./portfolio_khiem/index.html",
    github: "https://github.com/",
    glow: "glow-mobile",
    catLabel: "Mobile & Backend"
  },
  {
    id: "doan-dang-khoa",
    name: "Đoàn Đăng Khoa",
    role: "Frontend & Web Developer",
    category: "frontend",
    secondaryCats: ["ui-ux"],
    avatar: "hub_assets/khoa_avatar.png",
    status: "available",
    statusText: "Available for Hire",
    bio: "Sinh viên CNTT UTH — yêu thích thiết kế giao diện web hiện đại, responsive toàn diện, tối ưu UX tương tác trực quan và khả năng tương thích cao trên mọi thiết bị.",
    highlights: [
      "Portfolio cá nhân chuẩn Responsive toàn diện",
      "Hệ thống điều hướng động & UX thân thiện"
    ],
    skills: ["HTML5", "CSS3", "JavaScript", "Responsive", "UI Dev", "Web Layouts"],
    entry: "./portfolio_khoa/index2.html",
    github: "https://github.com/",
    glow: "glow-frontend",
    catLabel: "Frontend & Web"
  },
  {
    id: "nguyen-dang-khoi",
    name: "Nguyễn Đăng Khôi",
    role: "Fullstack Developer & CS Student",
    category: "backend",
    secondaryCats: ["frontend"],
    avatar: "hub_assets/khoi_avatar.jpg",
    status: "available",
    statusText: "Available for Hire",
    bio: "Biến ý tưởng thành hiện thực với code. Đam mê xây dựng webapp thực tế, hệ thống WebSocket giao tiếp thời gian thực và kiến trúc Django. Giải Nhì Hackathon UTH 2024.",
    highlights: [
      "Chatties — Chat app thời gian thực WebSocket/TCP-IP",
      "Webapp quản lý điểm sinh viên Django & SQLite"
    ],
    skills: ["JavaScript", "Python", "Django", "WebSocket", "C/C++", "HTML/CSS", "SQLite", "Git"],
    entry: "./portfolio_khoi/index.html",
    github: "https://github.com/Khoi2310",
    glow: "glow-backend",
    catLabel: "Fullstack & Backend"
  },
  {
    id: "nguyen-duy-tan",
    name: "Nguyễn Duy Tân",
    role: "Frontend & Data Visualization Specialist",
    category: "frontend",
    secondaryCats: ["ai-data", "ui-ux"],
    avatar: "hub_assets/tan_avatar.png",
    status: "available",
    statusText: "Available for Projects",
    bio: "Frontend Developer kết hợp Data Visualization — thiết kế giao diện sang trọng tông màu Terracotta & Espresso với Tailwind CSS và biểu đồ phân tích dữ liệu chuyên sâu.",
    highlights: [
      "Dashboard trực quan hóa dữ liệu & biểu đồ phân tích",
      "Giao diện Terracotta/Espresso Tailwind + A11y"
    ],
    skills: ["React", "Tailwind CSS", "Data Viz", "Chart.js", "D3.js", "JavaScript", "UI/UX"],
    entry: "./portfolio_tan/index3.html",
    github: "https://github.com/",
    glow: "glow-frontend",
    catLabel: "Frontend & Data"
  },
  {
    id: "dinh-thanh-thien",
    name: "Đinh Thanh Thiên",
    role: "Python Backend & AI Developer",
    category: "backend",
    secondaryCats: ["ai-data"],
    avatar: "hub_assets/thien_avatar.jpg",
    status: "open",
    statusText: "Open to Work",
    bio: "Sinh viên năm 2 UTH — Backend Python (FastAPI/Flask), SQL, Docker và Machine Learning (PyTorch, Scikit-learn) ứng dụng vào bài toán tối ưu cước phí & chuỗi cung ứng thực tế.",
    highlights: [
      "B2B Smart Logistics Freight & Routing REST API",
      "Gold Price ML Predictor — Yahoo Finance + FastAPI"
    ],
    skills: ["Python", "FastAPI", "Flask", "PostgreSQL", "PyTorch", "Docker", "Scikit-learn", "SQL"],
    entry: "./portfolio_thien/index.html",
    github: "https://github.com/dinhthanhthien10-bit",
    glow: "glow-backend",
    catLabel: "Python Backend & AI"
  }
];

/* ── CATEGORIES ── */
const CATS = [
  { id: "all",      label: "Tất cả thành viên" },
  { id: "frontend", label: "Frontend & Web" },
  { id: "backend",  label: "Backend & Systems" },
  { id: "ai-data",  label: "AI & Data Science" },
  { id: "mobile",   label: "Mobile & Android" },
  { id: "ui-ux",    label: "UI/UX & Design" }
];

/* ── APPLICATION STATE ── */
const S = {
  search: "",
  cat: "all",
  sort: "default",
  view: "grid",
  activeId: null,
  device: "desktop",
  theme: localStorage.getItem("nhom1_theme") || (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
};

/* ── SAFE DOM GETTER UTILITY ── */
const getEl = (...ids) => {
  for (const id of ids) {
    const el = document.getElementById(id);
    if (el) return el;
  }
  return null;
};

/* ── BOOTSTRAP ── */
document.addEventListener("DOMContentLoaded", () => {
  applyTheme();
  renderCats();
  renderMembers();
  bindEvents();
  initRouting();
});

/* ── THEME ENGINE (LIGHT / DARK) ── */
function applyTheme() {
  const isDark = S.theme === "dark";
  document.documentElement.classList.toggle("dark", isDark);

  const sunIcon  = getEl("theme-sun-icon", "theme-sun");
  const moonIcon = getEl("theme-moon-icon", "theme-moon");

  if (sunIcon && moonIcon) {
    sunIcon.classList.toggle("hidden", !isDark);
    moonIcon.classList.toggle("hidden", isDark);
    sunIcon.style.display  = isDark ? "block" : "none";
    moonIcon.style.display = isDark ? "none" : "block";
  }
}

function toggleTheme() {
  S.theme = S.theme === "dark" ? "light" : "dark";
  localStorage.setItem("nhom1_theme", S.theme);
  applyTheme();
}

/* ── CATEGORY FILTER TABS ── */
function catCount(catId) {
  if (catId === "all") return MEMBERS.length;
  return MEMBERS.filter(m => m.category === catId || (m.secondaryCats && m.secondaryCats.includes(catId))).length;
}

function renderCats() {
  const container = getEl("category-tabs-container", "cat-tabs");
  if (!container) return;

  container.innerHTML = CATS.map(c => {
    const active = S.cat === c.id;
    const count = catCount(c.id);

    return `
      <button 
        type="button" 
        onclick="setCat('${c.id}')"
        class="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer select-none ${
          active 
            ? 'bg-[#4F46E5] text-white shadow-md shadow-indigo-600/25 ring-2 ring-indigo-500/20 scale-105' 
            : 'bg-slate-100 hover:bg-slate-200 text-slate-600 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-300'
        }"
        aria-pressed="${active}"
      >
        <span>${c.label}</span>
        <span class="px-2 py-0.5 rounded-full text-[11px] font-extrabold ${
          active 
            ? 'bg-white/20 text-white' 
            : 'bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-300 shadow-sm'
        }">
          ${count}
        </span>
      </button>
    `;
  }).join("");
}

function setCat(catId) {
  S.cat = catId;
  renderCats();
  renderMembers();
}

/* ── SKILL CLICK FILTER ── */
function filterBySkill(skill) {
  S.search = skill;
  const searchInput = getEl("search-input");
  const clearBtn = getEl("clear-search-btn", "search-clear");
  
  if (searchInput) searchInput.value = skill;
  if (clearBtn) clearBtn.style.display = "flex";

  renderMembers();

  const container = getEl("members-container");
  if (container) {
    container.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

/* ── SEARCH & FILTER LOGIC ── */
function getFiltered() {
  const q = S.search.trim().toLowerCase();

  return MEMBERS.filter(m => {
    // 1. Category matching
    const inCat = (S.cat === "all") || (m.category === S.cat) || (m.secondaryCats && m.secondaryCats.includes(S.cat));
    if (!inCat) return false;

    // 2. Query matching (Name, Role, Bio, Skills, Highlights, CatLabel)
    if (!q) return true;

    return (
      m.name.toLowerCase().includes(q) ||
      m.role.toLowerCase().includes(q) ||
      m.bio.toLowerCase().includes(q)  ||
      (m.catLabel && m.catLabel.toLowerCase().includes(q)) ||
      m.skills.some(s => s.toLowerCase().includes(q)) ||
      m.highlights.some(h => h.toLowerCase().includes(q))
    );
  }).sort((a, b) => {
    if (S.sort === "name-asc") return a.name.localeCompare(b.name, "vi");
    if (S.sort === "role")     return a.role.localeCompare(b.role, "vi");
    if (S.sort === "status")   return a.status === "available" ? -1 : 1;
    return 0; // default order
  });
}

/* ── MEMBER GRID RENDERER ── */
function renderMembers() {
  const container = getEl("members-container");
  const countEl   = getEl("result-count");
  if (!container) return;

  const list = getFiltered();

  if (countEl) {
    countEl.innerHTML = `Hiển thị <strong class="text-[#4F46E5] dark:text-indigo-400 font-extrabold">${list.length}</strong> / ${MEMBERS.length} thành viên Nhóm 1`;
  }

  // Handle Grid vs List layout
  if (S.view === "list") {
    container.className = "view-list-container";
  } else {
    container.className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8";
  }

  // Empty state handling
  if (list.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-16 px-4 text-center">
        <div class="w-18 h-18 sm:w-20 sm:h-20 rounded-2xl bg-indigo-50 dark:bg-indigo-950/40 text-[#4F46E5] dark:text-indigo-400 mx-auto flex items-center justify-center mb-5 shadow-inner">
          <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </div>
        <h3 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mb-2">
          Không tìm thấy thành viên phù hợp
        </h3>
        <p class="text-sm sm:text-base text-slate-500 dark:text-slate-400 max-w-md mx-auto mb-6">
          Không có kết quả nào khớp với từ khóa "<strong>${esc(S.search)}</strong>" trong danh mục đang chọn.
        </p>
        <button 
          onclick="resetAll()"
          type="button"
          class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#4F46E5] hover:bg-indigo-700 text-white font-bold text-sm shadow-md shadow-indigo-600/30 transition-all hover:-translate-y-0.5"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
          </svg>
          <span>Đặt lại tìm kiếm &amp; bộ lọc</span>
        </button>
      </div>
    `;
    return;
  }

  container.innerHTML = list.map(renderCard).join("");
}

/* ── INDIVIDUAL CARD COMPONENT ── */
function renderCard(m) {
  const isAvail = m.status === "available";
  const statusBg = isAvail 
    ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800/60"
    : "bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300 border-blue-200 dark:border-blue-800/60";
  const dotColor = isAvail ? "emerald" : "blue";
  const maxSkills = 5;

  return `
    <article class="member-card ${m.glow} group" data-id="${m.id}">
      <div class="card-inner">
        
        <!-- Status & Category Row -->
        <div class="flex items-center justify-between gap-2 mb-4">
          <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold border ${statusBg}">
            <span class="status-dot-pulse ${dotColor}"></span>
            <span>${m.statusText}</span>
          </span>
          <span class="text-[11px] font-bold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2.5 py-0.5 rounded-full">
            ${m.catLabel}
          </span>
        </div>

        <!-- Avatar & Name Header -->
        <div class="flex items-start gap-4 mb-3">
          <div class="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden ring-2 ring-slate-100 dark:ring-slate-800 shadow-md group-hover:scale-105 transition-transform duration-300 flex-shrink-0 bg-slate-100 dark:bg-slate-800">
            <img 
              src="${m.avatar}" 
              alt="${m.name}"
              loading="lazy"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(m.name)}&background=4F46E5&color=fff&size=160'"
            />
          </div>
          <div class="min-w-0 flex-1">
            <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white truncate group-hover:text-[#4F46E5] dark:group-hover:text-indigo-400 transition-colors leading-tight">
              ${m.name}
            </h3>
            <p class="text-xs sm:text-sm font-bold text-[#4F46E5] dark:text-indigo-400 mt-1 line-clamp-1">
              ${m.role}
            </p>
            <p class="text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-1.5 mt-1 font-medium">
              <svg class="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
              </svg>
              <span>Nhóm 1 &bull; UTH</span>
            </p>
          </div>
        </div>

        <!-- Tagline / Bio Quote Box -->
        <div class="member-bio-box mb-4">
          <p class="text-xs text-slate-600 dark:text-slate-300 italic bg-slate-50 dark:bg-slate-800/60 p-3 rounded-xl border border-slate-100 dark:border-slate-800 line-clamp-3 leading-relaxed">
            "${m.bio}"
          </p>
        </div>

        <!-- Highlights Bullet Points -->
        <div class="highlights-box mb-4">
          <p class="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider mb-1.5">
            Dự án &amp; Năng lực tiêu biểu
          </p>
          <ul class="space-y-1 text-xs text-slate-600 dark:text-slate-300">
            ${m.highlights.map(h => `
              <li class="flex items-start gap-1.5 truncate">
                <span class="text-[#4F46E5] dark:text-indigo-400 font-black leading-none mt-0.5">▸</span>
                <span class="truncate">${h}</span>
              </li>
            `).join("")}
          </ul>
        </div>

        <!-- Skill Badges -->
        <div class="mb-5">
          <p class="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider mb-2">
            Kỹ năng cốt lõi
          </p>
          <div class="flex flex-wrap gap-1.5">
            ${m.skills.slice(0, maxSkills).map(s => `
              <button 
                type="button" 
                onclick="filterBySkill('${s}')" 
                class="skill-badge-btn"
                title="Bấm để lọc theo kỹ năng ${s}"
              >
                ${s}
              </button>
            `).join("")}
            ${m.skills.length > maxSkills ? `
              <span class="inline-flex items-center px-2 py-0.5 rounded-lg text-xs font-bold bg-indigo-50 dark:bg-indigo-950/60 text-[#4F46E5] dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800/50">
                +${m.skills.length - maxSkills}
              </span>
            ` : ""}
          </div>
        </div>

        <!-- Action Buttons Footer -->
        <div class="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-2">
          <!-- Primary CTA: Xem Portfolio -->
          <button 
            type="button" 
            onclick="openViewer('${m.id}')"
            class="btn-view-portfolio group/btn"
          >
            <span>Xem Portfolio</span>
            <svg class="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </button>

          <!-- Direct Tab Link -->
          <a 
            href="${m.entry}" 
            target="_blank" 
            rel="noopener noreferrer"
            class="btn-icon-action"
            title="Mở toàn màn hình trong tab mới"
            aria-label="Mở portfolio của ${m.name} trong tab mới"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
            </svg>
          </a>

          <!-- GitHub Link -->
          <a 
            href="${m.github}" 
            target="_blank" 
            rel="noopener noreferrer"
            class="btn-icon-action"
            title="Xem GitHub của ${m.name}"
            aria-label="Xem GitHub của ${m.name}"
          >
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path>
            </svg>
          </a>
        </div>

      </div>
    </article>
  `;
}

/* ── VIEW ENGINE MODAL CONTROLLER ── */
function openViewer(id) {
  const m = MEMBERS.find(x => x.id === id);
  if (!m) return;

  S.activeId = id;

  // Sync Hash Route & Title
  if (window.location.hash !== `#portfolio/${id}`) {
    history.pushState({ portfolioId: id }, "", `#portfolio/${id}`);
  }
  document.title = `${m.name} — Portfolio Nhóm 1 | UTH`;

  const modal       = getEl("portfolio-viewer-modal", "viewer-modal");
  const iframe      = getEl("viewer-frame", "viewer-iframe");
  const loadingEl   = getEl("viewer-loading");
  const nameEl      = getEl("viewer-member-name", "vw-name");
  const roleEl      = getEl("viewer-member-role", "vw-role");
  const avatarEl    = getEl("viewer-member-avatar", "vw-avatar");
  const openTabBtn  = getEl("viewer-open-tab-btn", "vw-open-tab");

  if (nameEl)     nameEl.textContent = m.name;
  if (roleEl)     roleEl.textContent = m.role;
  if (avatarEl)   { avatarEl.src = m.avatar; avatarEl.alt = m.name; }
  if (openTabBtn) openTabBtn.href = m.entry;

  if (loadingEl) loadingEl.style.display = "flex";
  if (iframe) {
    iframe.onload = () => {
      if (loadingEl) loadingEl.style.display = "none";
    };
    iframe.src = m.entry;
  }

  if (modal) {
    modal.classList.remove("hidden");
    modal.classList.add("flex", "open");
  }

  document.body.style.overflow = "hidden";
  applyDevice();
}

function closeViewer() {
  const modal  = getEl("portfolio-viewer-modal", "viewer-modal");
  const iframe = getEl("viewer-frame", "viewer-iframe");

  if (modal) {
    modal.classList.remove("flex", "open");
    modal.classList.add("hidden");
  }

  document.body.style.overflow = "";
  if (iframe) iframe.src = "about:blank";

  S.activeId = null;
  document.title = "Portfolio Nhóm 1 | Khám Phá Tài Năng & Năng Lực Sáng Tạo";

  if (window.location.hash.startsWith("#portfolio/")) {
    history.pushState("", document.title, window.location.pathname + window.location.search);
  }
}

function navigateViewer(dir) {
  if (!S.activeId) return;
  const idx  = MEMBERS.findIndex(m => m.id === S.activeId);
  const next = (idx + dir + MEMBERS.length) % MEMBERS.length;
  openViewer(MEMBERS[next].id);
}
const cycleMember = navigateViewer;

function setDeviceMode(device) {
  S.device = device;
  applyDevice();

  // Update active state on device buttons
  document.querySelectorAll("[data-device-btn], .device-btn").forEach(btn => {
    const d = btn.getAttribute("data-device-btn") || btn.dataset.device;
    const isActive = (d === device);
    btn.classList.toggle("active", isActive);

    if (isActive) {
      btn.classList.add("bg-[#4F46E5]", "text-white");
      btn.classList.remove("text-slate-400", "hover:bg-slate-700");
    } else {
      btn.classList.remove("bg-[#4F46E5]", "text-white");
      btn.classList.add("text-slate-400", "hover:bg-slate-700");
    }
  });
}
const setDevice = setDeviceMode;

function applyDevice() {
  const container = getEl("viewer-device-container", "viewer-device-frame");
  if (!container) return;

  container.className = `device-container device-${S.device} device-frame ${S.device}`;
}

/* ── HASH ROUTING ── */
function initRouting() {
  const handleRoute = () => {
    const hash = window.location.hash;
    if (hash.startsWith("#portfolio/")) {
      const id = hash.slice("#portfolio/".length);
      if (MEMBERS.some(m => m.id === id)) {
        openViewer(id);
      }
    } else if (S.activeId) {
      closeViewer();
    }
  };

  window.addEventListener("hashchange", handleRoute);
  window.addEventListener("popstate", handleRoute);
  
  // Initial check on page load
  handleRoute();
}

/* ── EVENT LISTENERS & SHORTCUTS ── */
function bindEvents() {
  const searchInput = getEl("search-input");
  const clearBtn    = getEl("clear-search-btn", "search-clear");
  const sortSelect  = getEl("sort-select");
  const gridBtn     = getEl("view-grid-btn");
  const listBtn     = getEl("view-list-btn");
  const themeBtn    = getEl("theme-toggle-btn", "theme-btn");

  // Real-time Search
  searchInput?.addEventListener("input", e => {
    S.search = e.target.value;
    if (clearBtn) clearBtn.style.display = S.search ? "flex" : "none";
    renderMembers();
  });

  clearBtn?.addEventListener("click", () => {
    S.search = "";
    if (searchInput) searchInput.value = "";
    clearBtn.style.display = "none";
    renderMembers();
    searchInput?.focus();
  });

  // Sorting
  sortSelect?.addEventListener("change", e => {
    S.sort = e.target.value;
    renderMembers();
  });

  // View Mode
  gridBtn?.addEventListener("click", () => {
    S.view = "grid";
    gridBtn.classList.add("bg-[#4F46E5]", "text-white");
    gridBtn.classList.remove("text-slate-500", "dark:text-slate-400");
    listBtn?.classList.remove("bg-[#4F46E5]", "text-white");
    listBtn?.classList.add("text-slate-500", "dark:text-slate-400");
    renderMembers();
  });

  listBtn?.addEventListener("click", () => {
    S.view = "list";
    listBtn.classList.add("bg-[#4F46E5]", "text-white");
    listBtn?.classList.remove("text-slate-500", "dark:text-slate-400");
    gridBtn?.classList.remove("bg-[#4F46E5]", "text-white");
    gridBtn?.classList.add("text-slate-500", "dark:text-slate-400");
    renderMembers();
  });

  // Theme Toggle
  themeBtn?.addEventListener("click", toggleTheme);

  // Global Keyboard Shortcuts
  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && S.activeId) {
      closeViewer();
      return;
    }

    if (S.activeId) {
      if (e.key === "ArrowLeft")  { navigateViewer(-1); return; }
      if (e.key === "ArrowRight") { navigateViewer(1);  return; }
      if (e.key === "1") { setDeviceMode("desktop"); return; }
      if (e.key === "2") { setDeviceMode("tablet");  return; }
      if (e.key === "3") { setDeviceMode("mobile");  return; }
    } else {
      if ((e.key === "/" || (e.ctrlKey && e.key === "k")) && document.activeElement !== searchInput) {
        e.preventDefault();
        searchInput?.focus();
      }
    }
  });
}

/* ── RESET EVERYTHING ── */
function resetAll() {
  S.search = "";
  S.cat = "all";
  S.sort = "default";

  const searchInput = getEl("search-input");
  const sortSelect  = getEl("sort-select");
  const clearBtn    = getEl("clear-search-btn", "search-clear");

  if (searchInput) searchInput.value = "";
  if (sortSelect)  sortSelect.value = "default";
  if (clearBtn)    clearBtn.style.display = "none";

  renderCats();
  renderMembers();
}

/* ── ESCAPE HTML HELPER ── */
function esc(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/* ── EXPOSE TO GLOBAL WINDOW ── */
window.openViewer     = openViewer;
window.closeViewer    = closeViewer;
window.navigateViewer = navigateViewer;
window.cycleMember    = cycleMember;
window.setDeviceMode  = setDeviceMode;
window.setDevice      = setDevice;
window.setCat         = setCat;
window.filterBySkill  = filterBySkill;
window.resetAll       = resetAll;
window.toggleTheme    = toggleTheme;