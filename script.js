let activeCategory = null;

const categoriesEl = document.getElementById("categories");
const productsEl = document.getElementById("products");

const modal = document.getElementById("modal");
const modalImage = document.getElementById("modalImage");
const modalCategory = document.getElementById("modalCategory");
const modalName = document.getElementById("modalName");
const modalPrice = document.getElementById("modalPrice");
const modalDescription = document.getElementById("modalDescription");
const modalIngredients = document.getElementById("modalIngredients");


/* =====================================================
   KALORİ HESAPLAYICI CSS
   ===================================================== */

const calorieStyle = document.createElement("style");

calorieStyle.textContent = `
.calorie-button {
    border: 1px solid #c59a4a;
    background: linear-gradient(
        135deg,
        #8f6828,
        #c59a4a,
        #a8792e
    );
    color: #fff;
    border-radius: 999px;
    padding: 10px 16px;
    white-space: nowrap;
    font-size: 14px;
    cursor: pointer;
    font-weight: 700;
    box-shadow: 0 3px 12px rgba(176,138,69,.30);
    transition: .2s;
}

.calorie-button:hover {
    transform: translateY(-1px);
    box-shadow: 0 5px 18px rgba(176,138,69,.45);
}

.calorie-overlay {
    display: none;
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,.88);
    z-index: 100;
    align-items: center;
    justify-content: center;
    padding: 18px;
}

.calorie-overlay.show {
    display: flex;
}

.calorie-box {
    width: min(560px, 100%);
    max-height: 90vh;
    overflow: auto;
    background: #080808;
    color: #fff;
    border: 1px solid #6e5225;
    border-radius: 20px;
    box-shadow:
        0 20px 70px rgba(0,0,0,.8),
        0 0 30px rgba(176,138,69,.18);
    padding: 24px;
    position: relative;
}

.calorie-title {
    text-align: center;
    color: #d6ad5d;
    font-size: 25px;
    font-weight: 800;
    margin-bottom: 5px;
}

.calorie-subtitle {
    text-align: center;
    color: #999;
    font-size: 13px;
    margin-bottom: 20px;
}

.calorie-close {
    position: absolute;
    right: 12px;
    top: 12px;
    width: 38px;
    height: 38px;
    border: 0;
    border-radius: 50%;
    background: #222;
    color: #fff;
    font-size: 23px;
    cursor: pointer;
}

.calorie-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.calorie-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    background: #151515;
    border: 1px solid #292929;
    border-radius: 12px;
    padding: 13px 15px;
    cursor: pointer;
    transition: .15s;
}

.calorie-item:hover {
    border-color: #8f6828;
}

.calorie-item-left {
    display: flex;
    align-items: center;
    gap: 11px;
}

.calorie-item input {
    width: 19px;
    height: 19px;
    accent-color: #c59a4a;
    cursor: pointer;
}

.calorie-product-name {
    font-weight: 700;
}

.calorie-product-category {
    display: block;
    color: #888;
    font-size: 11px;
    margin-top: 2px;
}

.calorie-value {
    color: #d4aa58;
    font-weight: 800;
    white-space: nowrap;
}

.calorie-total {
    margin-top: 20px;
    padding: 18px;
    border-radius: 15px;
    background: linear-gradient(135deg, #17120a, #241a0c);
    border: 1px solid #745622;
    text-align: center;
}

.calorie-total-label {
    color: #aaa;
    font-size: 13px;
    letter-spacing: 2px;
    text-transform: uppercase;
}

.calorie-total-number {
    color: #e0b967;
    font-size: 34px;
    font-weight: 900;
    margin-top: 5px;
}

.calorie-clear {
    display: block;
    width: 100%;
    margin-top: 14px;
    padding: 12px;
    border: 1px solid #444;
    border-radius: 10px;
    background: #171717;
    color: #fff;
    cursor: pointer;
    font-weight: 700;
}

.calorie-clear:hover {
    background: #242424;
}

@media(max-width:520px) {
    .calorie-overlay {
        padding: 10px;
    }

    .calorie-box {
        padding: 18px;
        border-radius: 17px;
    }

    .calorie-title {
        font-size: 22px;
    }

    .calorie-item {
        padding: 11px;
    }

    .calorie-total-number {
        font-size: 30px;
    }
}
`;

document.head.appendChild(calorieStyle);


/* =====================================================
   KATEGORİLER
   ===================================================== */

function renderCategories() {

    categoriesEl.innerHTML = "";

    menuData.categories.forEach(category => {

        const btn = document.createElement("button");

        btn.className = "category-btn";

        btn.textContent = category.name;

        btn.dataset.category = category.id;

        btn.onclick = () => selectCategory(category.id);

        categoriesEl.appendChild(btn);

    });
}


/* =====================================================
   KATEGORİ SEÇ
   ===================================================== */

function selectCategory(categoryId) {

    activeCategory = categoryId;

    document.querySelectorAll(".category-btn").forEach(btn => {

        btn.classList.toggle(
            "active",
            btn.dataset.category === categoryId
        );

    });

    renderProducts();
}


/* =====================================================
   ÜRÜNLERİ GÖSTER
   ===================================================== */

function renderProducts() {

    productsEl.innerHTML = "";

    /* SAYFA İLK AÇILDIĞINDA ÜRÜN GÖSTERME */

    if (!activeCategory) {

        productsEl.innerHTML = `
            <div class="category-message">
                <div class="category-message-icon">🍽️</div>
                <h2>Menüyü Keşfedin</h2>
                <p>Ürünleri görüntülemek için yukarıdan bir kategori seçin.</p>
            </div>
        `;

        return;
    }


    const products = menuData.products.filter(
        product => product.category_id === activeCategory
    );


    products.forEach(product => {

        const card = document.createElement("article");

        card.className = "product";

        card.onclick = () => openProduct(product);


        if (product.image) {

            const img = document.createElement("img");

            img.className = "product-image";

            img.src = product.image;

            img.alt = product.name;

            card.appendChild(img);

        } else {

            const noImage = document.createElement("div");

            noImage.className = "no-image";

            noImage.textContent = "🍽️";

            card.appendChild(noImage);
        }


        const info = document.createElement("div");

        info.className = "product-info";


        const name = document.createElement("div");

        name.className = "product-name";

        name.textContent = product.name;


        const price = document.createElement("div");

        price.className = "product-price";

        price.textContent = `${product.price} TL`;


        info.appendChild(name);
        info.appendChild(price);

        card.appendChild(info);

        productsEl.appendChild(card);

    });
}


/* =====================================================
   ÜRÜN DETAYI
   ===================================================== */

function openProduct(product) {

    const category =
        menuData.categories.find(
            c => c.id === product.category_id
        );


    modalCategory.textContent =
        category ? category.name : "";


    modalName.textContent =
        product.name;


    modalPrice.textContent =
        `${product.price} TL`;


    modalDescription.textContent =
        product.description || "";


    modalIngredients.textContent =
        product.ingredients
            ? `İçindekiler: ${product.ingredients}`
            : "";


    if (product.image) {

        modalImage.src = product.image;
        modalImage.alt = product.name;
        modalImage.style.display = "block";

    } else {

        modalImage.style.display = "none";
    }


    let modalInfo =
        document.getElementById("modalCalorieInfo");


    if (!modalInfo) {

        modalInfo = document.createElement("div");

        modalInfo.id = "modalCalorieInfo";

        modalInfo.style.marginTop = "8px";
        modalInfo.style.fontSize = "14px";
        modalInfo.style.color = "#333";

        modalIngredients.parentNode.appendChild(modalInfo);
    }


    modalInfo.innerHTML =
        `<strong>Alerjenler:</strong> ${getAllergens(product)}
        <br>
        <strong>Kalori:</strong> ${product.calories || 0} kcal`;


    modal.classList.add("show");

    modal.setAttribute("aria-hidden", "false");

    document.body.style.overflow = "hidden";
}


/* =====================================================
   ALERJEN
   ===================================================== */

function getAllergens(product) {

    const text =
        `${product.name} ${product.ingredients || ""}`
        .toLowerCase();


    if (
        text.includes("levrek") ||
        text.includes("balık") ||
        text.includes("kalamar") ||
        text.includes("karides") ||
        text.includes("somon") ||
        text.includes("hamsi") ||
        text.includes("çipura") ||
        text.includes("istavrit") ||
        text.includes("sardalya") ||
        text.includes("barbun")
    ) {
        return "Balık / Deniz ürünleri";
    }


    if (
        text.includes("yoğurt") ||
        text.includes("peynir") ||
        text.includes("tereyağı") ||
        text.includes("cheddar")
    ) {
        return "Süt ürünü";
    }


    return "Bilgi için işletmeye danışınız";
}


/* =====================================================
   ÜRÜN MODALINI KAPAT
   ===================================================== */

function closeProduct() {

    modal.classList.remove("show");

    modal.setAttribute("aria-hidden", "true");

    document.body.style.overflow = "";
}


document.getElementById("closeModal").onclick = closeProduct;


modal.addEventListener("click", event => {

    if (event.target === modal) {
        closeProduct();
    }

});


/* =====================================================
   ESC
   ===================================================== */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        closeProduct();

        closeCalorieCalculator();
    }

});


/* =====================================================
   KALORİ HESAPLAYICI
   ===================================================== */

function createCalorieCalculator() {

    const overlay = document.createElement("div");

    overlay.id = "calorieOverlay";

    overlay.className = "calorie-overlay";


    const box = document.createElement("div");

    box.className = "calorie-box";


    box.innerHTML = `
        <button class="calorie-close" id="calorieClose">×</button>

        <div class="calorie-title">
            Kalori Hesaplayıcı
        </div>

        <div class="calorie-subtitle">
            Tüketmek istediğiniz ürünleri seçin
        </div>

        <div class="calorie-list" id="calorieList"></div>

        <div class="calorie-total">

            <div class="calorie-total-label">
                Toplam Kalori
            </div>

            <div
                class="calorie-total-number"
                id="calorieTotal"
            >
                0 kcal
            </div>

        </div>

        <button
            class="calorie-clear"
            id="calorieClear"
        >
            Seçimleri Temizle
        </button>
    `;


    overlay.appendChild(box);

    document.body.appendChild(overlay);


    document.getElementById("calorieClose").onclick =
        closeCalorieCalculator;


    document.getElementById("calorieClear").onclick =
        clearCalories;


    overlay.addEventListener("click", event => {

        if (event.target === overlay) {
            closeCalorieCalculator();
        }

    });


    renderCalorieProducts();
}


/* =====================================================
   KALORİ ÜRÜNLERİ
   ===================================================== */

function renderCalorieProducts() {

    const list =
        document.getElementById("calorieList");


    if (!list) return;


    list.innerHTML = "";


    menuData.products.forEach(product => {

        const category =
            menuData.categories.find(
                c => c.id === product.category_id
            );


        const label = document.createElement("label");

        label.className = "calorie-item";


        const left = document.createElement("div");

        left.className = "calorie-item-left";


        const checkbox = document.createElement("input");

        checkbox.type = "checkbox";

        checkbox.dataset.id = product.id;

        checkbox.onchange = updateCalorieTotal;


        const nameBox = document.createElement("div");

        nameBox.innerHTML = `
            <span class="calorie-product-name">
                ${product.name}
            </span>

            <span class="calorie-product-category">
                ${category ? category.name : ""}
            </span>
        `;


        left.appendChild(checkbox);
        left.appendChild(nameBox);


        const value = document.createElement("div");

        value.className = "calorie-value";

        value.textContent =
            `${product.calories || 0} kcal`;


        label.appendChild(left);
        label.appendChild(value);

        list.appendChild(label);

    });
}


/* =====================================================
   TOPLAM KALORİ
   ===================================================== */

function updateCalorieTotal() {

    let total = 0;


    document
        .querySelectorAll(
            "#calorieList input[type='checkbox']:checked"
        )
        .forEach(checkbox => {

            const product =
                menuData.products.find(
                    p => p.id == checkbox.dataset.id
                );


            if (product) {

                total += Number(product.calories) || 0;
            }

        });


    document.getElementById("calorieTotal").textContent =
        `${total.toLocaleString("tr-TR")} kcal`;
}


/* =====================================================
   HESAPLAYICIYI AÇ
   ===================================================== */

function openCalorieCalculator() {

    let overlay =
        document.getElementById("calorieOverlay");


    if (!overlay) {

        createCalorieCalculator();

        overlay =
            document.getElementById("calorieOverlay");
    }


    overlay.classList.add("show");

    document.body.style.overflow = "hidden";
}


/* =====================================================
   HESAPLAYICIYI KAPAT
   ===================================================== */

function closeCalorieCalculator() {

    const overlay =
        document.getElementById("calorieOverlay");


    if (!overlay) return;


    overlay.classList.remove("show");

    document.body.style.overflow = "";
}


/* =====================================================
   SEÇİMLERİ TEMİZLE
   ===================================================== */

function clearCalories() {

    document
        .querySelectorAll(
            "#calorieList input[type='checkbox']"
        )
        .forEach(checkbox => {

            checkbox.checked = false;

        });


    updateCalorieTotal();
}


/* =====================================================
   BAŞLAT
   ===================================================== */

renderCategories();

renderProducts();
