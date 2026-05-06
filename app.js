const products = [
  { key: "mango", icon: "🥭", ru: "Манго", brix: "28-30%", acid: "0.5-1.0%", origin: "Индия", sort: "Alphonso / Totapuri", image: "./assets/Mango.png", tone: "#f59f1b", accent: "#2f855a" },
  { key: "apricot", icon: "🍑", ru: "Абрикос", brix: "28-30%", acid: "0.8-1.4%", origin: "Турция / Армения", sort: "Shalakh", image: "./assets/Abricot.png", tone: "#f47c45", accent: "#b45309" },
  { key: "banana", icon: "🍌", ru: "Банан", brix: "22-24%", acid: "0.3-0.8%", origin: "Эквадор", sort: "Cavendish", image: "./assets/Banana.png", tone: "#f8d24a", accent: "#3f7d3b" },
  { key: "orange", icon: "🍊", ru: "Апельсин", brix: "35-40%", acid: "1.8-3.0%", origin: "Египет / Бразилия", sort: "Valencia", image: "./assets/Orange.png", tone: "#f97316", accent: "#7c2d12" }
];

const supplierI18n = {
  ru: { tab: "Поставщикам", title: "Витрина потребностей", subtitle: "Нажмите на товар и отправьте коммерческое предложение.", heroNote: "Мы сравниваем предложения по спецификации, происхождению сырья, упаковке, цене и готовности к регулярным отгрузкам.", q: "Требования к качеству", btn: "Отправить предложение", sent: "Предложение отправлено", close: "Закрыть", labels: { company: "Компания*", country: "Страна регистрации*", contact: "Контактное лицо", email: "Email*", phone: "Телефон", brix: "BRIX (%)", acid: "Кислотность (%)", sort: "Сорт", origin: "Страна происхождения сырья", volume: "Объём (т/мес)", deliveryTerms: "Условия поставки (Incoterms)", price: "Цена", currency: "Валюта", note: "Примечания", submit: "Отправить КП" } },
  en: { tab: "Suppliers", title: "Current Demand", subtitle: "Click an item and send your commercial offer.", heroNote: "We compare offers by specification, raw material origin, packaging, price, and readiness for regular shipments.", q: "Quality requirements", btn: "Send Offer", sent: "Offer submitted", close: "Close", labels: { company: "Company*", country: "Registration country*", contact: "Contact person", email: "Email*", phone: "Phone", brix: "BRIX (%)", acid: "Acidity (%)", sort: "Variety", origin: "Raw material origin", volume: "Available volume (t/month)", deliveryTerms: "Delivery terms (Incoterms)", price: "Price", currency: "Currency", note: "Notes", submit: "Submit Offer" } },
  es: { tab: "Proveedores", title: "Demanda actual", subtitle: "Haga clic en un producto y envíe su oferta comercial.", heroNote: "Comparamos las ofertas por especificación, origen de la materia prima, embalaje, precio y disponibilidad para envíos regulares.", q: "Requisitos de calidad", btn: "Enviar oferta", sent: "Oferta enviada", close: "Cerrar", labels: { company: "Empresa*", country: "País de registro*", contact: "Persona de contacto", email: "Email*", phone: "Teléfono", brix: "BRIX (%)", acid: "Acidez (%)", sort: "Variedad", origin: "Origen de la materia prima", volume: "Volumen disponible (t/mes)", deliveryTerms: "Condiciones de entrega (Incoterms)", price: "Precio", currency: "Moneda", note: "Notas", submit: "Enviar oferta" } },
  zh: { tab: "供应商", title: "采购需求", subtitle: "点击产品并提交商业报价。", heroNote: "我们会根据规格、原料产地、包装、价格以及定期发货能力来比较报价。", q: "质量要求", btn: "提交报价", sent: "报价已提交", close: "关闭", labels: { company: "公司名称*", country: "注册国家*", contact: "联系人", email: "邮箱*", phone: "电话", brix: "BRIX (%)", acid: "酸度 (%)", sort: "品种", origin: "原料产地", volume: "可供数量 (吨/月)", deliveryTerms: "交货条款 (Incoterms)", price: "价格", currency: "货币", note: "备注", submit: "发送报价" } },
  ar: { tab: "الموردون", title: "احتياجات الشراء", subtitle: "اختر المنتج وأرسل عرضك التجاري.", heroNote: "نقارن العروض حسب المواصفات، ومنشأ المواد الخام، والتغليف، والسعر، والجاهزية للشحنات المنتظمة.", q: "متطلبات الجودة", btn: "إرسال العرض", sent: "تم إرسال العرض", close: "إغلاق", labels: { company: "اسم الشركة*", country: "بلد التسجيل*", contact: "جهة الاتصال", email: "البريد الإلكتروني*", phone: "الهاتف", brix: "BRIX (%)", acid: "الحموضة (%)", sort: "الصنف", origin: "بلد المنشأ", volume: "الكمية المتاحة (طن/شهر)", deliveryTerms: "شروط التسليم (Incoterms)", price: "السعر", currency: "العملة", note: "ملاحظات", submit: "إرسال العرض" } }
};

let supplierLang = "ru";

const buyersRoot = document.getElementById("buyers");
const suppliersRoot = document.getElementById("suppliers");
const langSwitch = document.getElementById("langSwitch");
const modal = document.getElementById("offerModal");

function buyerView() {
  buyersRoot.innerHTML = `
    <section class="hero">
      <div class="hero-copy">
        <span class="eyebrow">B2B marketplace концентратов</span>
        <h2>Фруктовое пюре для производств, где важны стабильность и вкус.</h2>
        <p>Подбираем партии под BRIX, кислотность, сорт и логистику. Работаем с прямыми поставками, складским запасом и понятной спецификацией для закупок.</p>
        <div class="hero-actions">
          <a class="primary-action" href="#buyersForm">Оставить заявку</a>
          <span class="hero-note">От 1 бочки до регулярных контрактов</span>
        </div>
      </div>
      <div class="hero-visual" aria-hidden="true">
        <div class="hero-orbit hero-orbit-one"></div>
        <div class="hero-orbit hero-orbit-two"></div>
        <div class="hero-product-stack">
          ${products.map((p) => `<img src="${productImage(p)}" alt="" loading="lazy">`).join("")}
        </div>
      </div>
    </section>
    <section class="section">
      <div class="section-head">
        <span class="eyebrow">Каталог</span>
        <h2>Виды продукции</h2>
        <p>Концентрированное фруктовое пюре для соков, молочных продуктов, десертов и пищевых производств.</p>
      </div>
      <div class="grid">
        ${products.map((p) => `
          <article class="card">
            <div class="card-image-wrap">
              <img class="card-image" src="${productImage(p)}" alt="${p.ru}" loading="lazy">
            </div>
            <div class="card-body">
              <span class="product-kicker">Fruit puree concentrate</span>
              <h3><span class="icon">${p.icon}</span>${p.ru}</h3>
              <div class="spec-grid">
                <p class="spec"><b>BRIX</b><span>${p.brix}</span></p>
                <p class="spec"><b>Кислотность</b><span>${p.acid}</span></p>
                <p class="spec"><b>Страна</b><span>${p.origin}</span></p>
                <p class="spec"><b>Сорт</b><span>${p.sort}</span></p>
              </div>
            </div>
          </article>`).join("")}
      </div>
    </section>
    <section class="section">
      <div class="section-head">
        <span class="eyebrow">Логистика и объёмы</span>
        <h2>Условия работы</h2>
      </div>
      <div class="chip-row">
        <div class="chip">
          <strong>Прямые поставки</strong>
          <img src="./assets/Truck.png" alt="" loading="lazy">
          <span>Доставляем фруктовое пюре в любой город РФ без лишних посредников.</span>
        </div>
        <div class="chip">
          <strong>Любые объёмы</strong>
          <img src="./assets/Barrels.png" alt="" loading="lazy">
          <span>От одной бочки 200-250 кг до регулярных промышленных партий.</span>
        </div>
        <div class="chip">
          <strong>Склад в Подмосковье</strong>
          <img src="./assets/Warehouse.png" alt="" loading="lazy">
          <span>Держим ходовые позиции ближе к покупателю для быстрых отгрузок.</span>
        </div>
        <div class="chip">
          <strong>Документы под ключ</strong>
          <img src="./assets/Documents.png" alt="" loading="lazy">
          <span>Помогаем оформить все необходимые документы для поставки.</span>
        </div>
        <div class="chip">
          <strong>Лучшие цены в России</strong>
          <img src="./assets/Money.png" alt="" loading="lazy">
          <span>Подбираем выгодные условия за счёт прямой работы с поставщиками.</span>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="section-head">
        <span class="eyebrow">Быстрый подбор</span>
        <h2>Заявка покупателя</h2>
        <p>Опишите нужный продукт, объём и город доставки. Мы вернёмся с вариантом поставки.</p>
      </div>
      <form id="buyersForm">
        <div class="form-grid">
          <div><label>Имя*</label><input name="name" required></div>
          <div><label>Компания*</label><input name="company" required></div>
          <div><label>Телефон</label><input name="phone"></div>
          <div><label>Email</label><input type="email" name="email"></div>
          <div class="full"><label>Интересующие продукты</label><select name="products" multiple>${products.map((p) => `<option>${p.ru}</option>`).join("")}</select></div>
          <div><label>Требуемый объём</label><input name="volume" placeholder="например, 40 тонн"></div>
          <div><label>Город доставки</label><input name="city"></div>
          <div class="full"><label>Комментарий</label><textarea name="comment"></textarea></div>
        </div>
        <p class="captcha">reCAPTCHA v3 подключается на backend-уровне (placeholder).</p>
        <button class="submit-btn submit-buyers" type="submit">Отправить заявку</button>
        <div class="status" id="buyersStatus"></div>
      </form>
    </section>`;

  document.getElementById("buyersForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    if (!form.get("phone") && !form.get("email")) return setStatus("buyersStatus", "Укажите телефон или email.");
    const payload = Object.fromEntries(form.entries());
    payload.products = form.getAll("products");
    const ok = await postJson("/api/buyers", payload);
    setStatus("buyersStatus", ok ? "Заявка отправлена." : "Ошибка отправки. Проверьте API.");
    if (ok) e.target.reset();
  });
}

function supplierView() {
  const t = supplierI18n[supplierLang];
  suppliersRoot.classList.toggle("rtl", supplierLang === "ar");
  suppliersRoot.innerHTML = `
    <section class="hero suppliers-hero">
      <div class="hero-copy">
        <span class="eyebrow">Global supplier desk</span>
        <h2>${t.title}</h2>
        <p>${t.subtitle} ${t.heroNote}</p>
      </div>
      <div class="hero-visual" aria-hidden="true">
        <div class="hero-orbit hero-orbit-one"></div>
        <div class="hero-orbit hero-orbit-two"></div>
        <div class="hero-product-stack">
          ${products.map((p) => `<img src="${productImage(p)}" alt="" loading="lazy">`).join("")}
        </div>
      </div>
    </section>
    <section class="section">
      <div class="section-head">
        <span class="eyebrow">Open demand</span>
        <h2>${t.title}</h2>
        <p>${t.subtitle}</p>
      </div>
      <div class="grid">
        ${products.map((p) => `
          <article class="card supplier-card" data-product="${p.key}">
            <div class="card-image-wrap">
              <img class="card-image" src="${productImage(p)}" alt="${nameByLang(p, supplierLang)}" loading="lazy">
            </div>
            <div class="card-body">
              <span class="product-kicker">${t.q}</span>
              <h3><span class="icon">${p.icon}</span>${nameByLang(p, supplierLang)}</h3>
              <div class="spec-grid">
                <p class="spec"><b>BRIX min</b><span>${p.brix.split("-")[0]}</span></p>
                <p class="spec"><b>Acidity</b><span>${p.acid}</span></p>
                <p class="spec"><b>Sort</b><span>${p.sort}</span></p>
                <p class="spec"><b>Pack</b><span>aseptic drum</span></p>
              </div>
              <button class="submit-btn submit-suppliers">${t.btn}</button>
            </div>
          </article>`).join("")}
      </div>
      <div class="status" id="supStatus"></div>
    </section>`;

  document.querySelectorAll(".supplier-card").forEach((el) => {
    el.addEventListener("click", () => openOfferModal(el.dataset.product));
  });
}

function nameByLang(p, lang) {
  const map = {
    ru: { mango: "Манго", apricot: "Абрикос", banana: "Банан", orange: "Апельсин" },
    en: { mango: "Mango", apricot: "Apricot", banana: "Banana", orange: "Orange" },
    es: { mango: "Mango", apricot: "Albaricoque", banana: "Banana", orange: "Naranja" },
    zh: { mango: "芒果", apricot: "杏", banana: "香蕉", orange: "橙子" },
    ar: { mango: "مانجو", apricot: "مشمش", banana: "موز", orange: "برتقال" }
  };
  return map[lang][p.key];
}

function productImage(product) {
  if (product.image) return product.image;

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 440">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="${product.tone}" stop-opacity=".95"/>
          <stop offset=".58" stop-color="#fff4d6" stop-opacity=".95"/>
          <stop offset="1" stop-color="${product.accent}" stop-opacity=".9"/>
        </linearGradient>
        <radialGradient id="glow" cx=".32" cy=".28" r=".72">
          <stop offset="0" stop-color="#ffffff" stop-opacity=".9"/>
          <stop offset=".48" stop-color="#ffffff" stop-opacity=".18"/>
          <stop offset="1" stop-color="#ffffff" stop-opacity="0"/>
        </radialGradient>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="150%">
          <feDropShadow dx="0" dy="18" stdDeviation="18" flood-color="#2f1b0b" flood-opacity=".22"/>
        </filter>
      </defs>
      <rect width="640" height="440" rx="44" fill="url(#bg)"/>
      <circle cx="112" cy="86" r="130" fill="url(#glow)"/>
      <circle cx="548" cy="372" r="150" fill="#ffffff" opacity=".18"/>
      <path d="M88 340 C186 260 257 360 366 278 C456 210 510 260 586 198" fill="none" stroke="#fff" stroke-width="16" stroke-linecap="round" opacity=".42"/>
      <g filter="url(#shadow)">
        <ellipse cx="320" cy="270" rx="154" ry="34" fill="#2f1b0b" opacity=".16"/>
        <rect x="204" y="122" width="232" height="188" rx="30" fill="#fffaf0"/>
        <rect x="225" y="146" width="190" height="112" rx="22" fill="${product.tone}" opacity=".2"/>
        <path d="M250 210 C294 154 356 152 395 212 C356 272 291 272 250 210Z" fill="${product.tone}"/>
        <path d="M320 168 C336 140 365 126 398 130 C379 159 353 174 320 168Z" fill="${product.accent}"/>
        <text x="320" y="343" text-anchor="middle" font-family="Georgia, serif" font-size="44" font-weight="700" fill="#2f2416">${product.ru}</text>
      </g>
    </svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function openOfferModal(productKey) {
  const t = supplierI18n[supplierLang];
  const product = products.find((p) => p.key === productKey);
  modal.classList.remove("hidden");
  modal.innerHTML = `
    <div class="modal-box ${supplierLang === "ar" ? "rtl" : ""}">
      <div class="modal-head">
        <h3>${nameByLang(product, supplierLang)} — ${t.btn}</h3>
        <button class="close-btn" id="closeModal">${t.close}</button>
      </div>
      <form id="offerForm">
        <div class="form-grid">
          <div><label>${t.labels.company}</label><input name="company" required></div>
          <div><label>${t.labels.country}</label><input name="country" required></div>
          <div><label>${t.labels.contact}</label><input name="contact"></div>
          <div><label>${t.labels.email}</label><input type="email" name="email" required></div>
          <div><label>${t.labels.phone}</label><input name="phone"></div>
          <div><label>${t.labels.brix}</label><input name="brix"></div>
          <div><label>${t.labels.acid}</label><input name="acid"></div>
          <div><label>${t.labels.sort}</label><input name="sort"></div>
          <div><label>${t.labels.origin}</label><input name="origin"></div>
          <div><label>${t.labels.volume}</label><input name="volume"></div>
          <div class="full"><label>${t.labels.deliveryTerms}</label><input name="deliveryTerms" placeholder="FOB, CIF, DAP..."></div>
          <div><label>${t.labels.price}</label><input name="price" inputmode="decimal"></div>
          <div><label>${t.labels.currency}</label><select name="currency">
            <option value="USD">USD - Dollar</option>
            <option value="EUR">EUR - Euro</option>
            <option value="CNY">CNY - Yuan</option>
          </select></div>
          <div class="full"><label>${t.labels.note}</label><textarea name="note"></textarea></div>
        </div>
        <p class="captcha">reCAPTCHA v3 подключается на backend-уровне (placeholder).</p>
        <button class="submit-btn submit-suppliers" type="submit">${t.labels.submit}</button>
        <div class="status" id="offerStatus"></div>
      </form>
    </div>`;

  document.getElementById("closeModal").onclick = closeModal;
  document.getElementById("offerForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const payload = Object.fromEntries(form.entries());
    payload.product = product.key;
    payload.language = supplierLang;
    payload.timestamp = new Date().toISOString();
    const ok = await postJson("/api/suppliers", payload);
    setStatus("offerStatus", ok ? t.sent : "API error");
    if (ok) e.target.reset();
  });
}

function closeModal() {
  modal.classList.add("hidden");
  modal.innerHTML = "";
}

async function postJson(url, payload) {
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    return res.ok;
  } catch {
    return false;
  }
}

function setStatus(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

function renderLangSwitch() {
  langSwitch.innerHTML = ["ru", "en", "es", "zh", "ar"].map((l) =>
    `<button class="lang-btn ${l === supplierLang ? "active" : ""}" data-lang="${l}">${langLabel(l)}</button>`
  ).join("");
  langSwitch.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      supplierLang = btn.dataset.lang;
      renderLangSwitch();
      supplierView();
    });
  });
}

function langLabel(code) {
  return { ru: "RU", en: "EN", es: "ES", zh: "ZH", ar: "AR" }[code];
}

document.querySelectorAll(".tab").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach((t) => t.classList.remove("active"));
    btn.classList.add("active");
    const target = btn.dataset.tab;
    document.querySelectorAll(".panel").forEach((p) => p.classList.remove("active"));
    document.getElementById(target).classList.add("active");
    langSwitch.classList.toggle("hidden", target !== "suppliers");
  });
});

buyerView();
renderLangSwitch();
supplierView();
modal.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });
