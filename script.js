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
   FİYAT FORMATLAMA
   ===================================================== */

function formatPrice(price) {

    /* Sayısal fiyat */
    if (typeof price === "number") {
        return `${price} TL`;
    }

    /* Metin fiyat */
    if (typeof price === "string") {

        /*
         * Fiyat zaten TL içeriyorsa
         * tekrar TL ekleme.
         */
        if (price.toUpperCase().includes("TL")) {
            return price;
        }

        /*
         * Fiyat Sorunuz gibi özel metinler
         */
        if (
            price.toLowerCase().includes("fiyat sorunuz")
        ) {
            return price;
        }

        return price;
    }

    /* Çoklu fiyat objesi */
    if (
        typeof price === "object" &&
        price !== null &&
        !Array.isArray(price)
    ) {

        return Object.entries(price)
            .map(([type, amount]) => {

                /*
                 * amount zaten string olarak TL içeriyorsa
                 * tekrar TL ekleme.
                 */
                if (
                    typeof amount === "string" &&
                    amount.toUpperCase().includes("TL")
                ) {
                    return `${type}: ${amount}`;
                }

                return `${type}: ${amount} TL`;

            })
            .join(" | ");
    }

    return "";
}


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
    z-index: 1000;
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

    if (
        typeof menuData === "undefined" ||
        !menuData.categories ||
        !Array.isArray(menuData.categories)
    ) {

        console.error(
            "menuData veya categories bulunamadı."
        );

        return;
    }

    menuData.categories.forEach(category => {

        const btn =
            document.createElement("button");

        btn.type = "button";

        btn.className =
            "category-btn";

        btn.textContent =
            category.name;

        btn.dataset.category =
            category.id;

        btn.addEventListener(
            "click",
            () => {
                selectCategory(category.id);
            }
        );

        categoriesEl.appendChild(btn);

    });
}


/* =====================================================
   KATEGORİ SEÇ
   ===================================================== */

function selectCategory(categoryId) {

    activeCategory =
        categoryId;

    document
        .querySelectorAll(".category-btn")
        .forEach(btn => {

            btn.classList.toggle(
                "active",
                btn.dataset.category ===
                String(categoryId)
            );

        });

    renderProducts();
}


/* =====================================================
   ÜRÜNLERİ GÖSTER
   ===================================================== */

function renderProducts() {

    productsEl.innerHTML = "";

    /*
     * Sayfa ilk açıldığında
     * ürünleri gösterme.
     */

    if (!activeCategory) {

        productsEl.innerHTML = `
            <div class="category-message">

                <div class="category-message-icon">
                    🍽️
                </div>

                <h2>
                    Menüyü Keşfedin
                </h2>

                <p>
                    Ürünleri görüntülemek için
                    yukarıdan bir kategori seçin.
                </p>

            </div>
        `;

        return;
    }


    const products =
        menuData.products.filter(
            product =>
                product.category_id ===
                activeCategory
        );


    /*
     * Kategoride ürün yoksa
     */

    if (products.length === 0) {

        productsEl.innerHTML = `
            <div class="category-message">

                <div class="category-message-icon">
                    🍽️
                </div>

                <h2>
                    Ürün Bulunamadı
                </h2>

                <p>
                    Bu kategoride henüz ürün bulunmuyor.
                </p>

            </div>
        `;

        return;
    }


    products.forEach(product => {

        const card =
            document.createElement("article");

        card.className =
            "product";


        card.addEventListener(
            "click",
            () => {
                openProduct(product);
            }
        );


        /* ================================
           ÜRÜN GÖRSELİ
        ================================= */

        if (product.image) {

            const img =
                document.createElement("img");

            img.className =
                "product-image";

            img.src =
                product.image;

            img.alt =
                product.name;


            img.onerror = () => {

                img.style.display =
                    "none";

                if (
                    !card.querySelector(".no-image")
                ) {

                    const noImage =
                        document.createElement("div");

                    noImage.className =
                        "no-image";

                    noImage.textContent =
                        "🍽️";

                    card.insertBefore(
                        noImage,
                        info
                    );
                }
            };


            card.appendChild(img);

        } else {

            const noImage =
                document.createElement("div");

            noImage.className =
                "no-image";

            noImage.textContent =
                "🍽️";

            card.appendChild(noImage);
        }


        /* ================================
           ÜRÜN BİLGİLERİ
        ================================= */

        const info =
            document.createElement("div");

        info.className =
            "product-info";


        const name =
            document.createElement("div");

        name.className =
            "product-name";

        name.textContent =
            product.name;


        const price =
            document.createElement("div");

        price.className =
            "product-price";

        price.textContent =
            formatPrice(product.price);


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
            c =>
                c.id ===
                product.category_id
        );


    modalCategory.textContent =
        category
            ? category.name
            : "";


    modalName.textContent =
        product.name ||
        "";


    modalPrice.textContent =
        formatPrice(
            product.price
        );


    modalDescription.textContent =
        product.description ||
        "";


    modalIngredients.textContent =
        product.ingredients
            ? `İçindekiler: ${product.ingredients}`
            : "";


    /* ================================
       MODAL GÖRSELİ
    ================================= */

    if (product.image) {

        modalImage.src =
            product.image;

        modalImage.alt =
            product.name;

        modalImage.style.display =
            "block";

        modalImage.onerror =
            () => {

                modalImage.style.display =
                    "none";
            };

    } else {

        modalImage.style.display =
            "none";

        modalImage.removeAttribute(
            "src"
        );
    }


    /* ================================
       ALERJEN + KALORİ
    ================================= */

    let modalInfo =
        document.getElementById(
            "modalCalorieInfo"
        );


    if (!modalInfo) {

        modalInfo =
            document.createElement("div");

        modalInfo.id =
            "modalCalorieInfo";


        modalInfo.style.marginTop =
            "12px";


        modalInfo.style.fontSize =
            "14px";


        modalInfo.style.lineHeight =
            "1.8";


        modalIngredients.parentNode.appendChild(
            modalInfo
        );
    }


    const allergens =
        product.allergens ||
        "Bilgi için işletmeye danışınız";


    const calories =
        product.calories !== undefined &&
        product.calories !== null &&
        product.calories !== ""
            ? product.calories
            : 0;


    modalInfo.innerHTML = `
        <strong>Alerjenler:</strong>
        ${allergens}

        <br>

        <strong>Kalori:</strong>
        ${calories} kcal
    `;


    /* ================================
       MODALI AÇ
    ================================= */

    modal.classList.add(
        "show"
    );


    modal.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.style.overflow =
        "hidden";
}


/* =====================================================
   ÜRÜN MODALINI KAPAT
   ===================================================== */

function closeProduct() {

    modal.classList.remove(
        "show"
    );


    modal.setAttribute(
        "aria-hidden",
        "true"
    );


    restoreBodyScroll();
}


/* =====================================================
   MODAL KAPATMA BUTONU
   ===================================================== */

const closeModalButton =
    document.getElementById(
        "closeModal"
    );


if (closeModalButton) {

    closeModalButton.addEventListener(
        "click",
        closeProduct
    );
}


/* =====================================================
   MODAL ARKA PLANA TIKLAMA
   ===================================================== */

modal.addEventListener(
    "click",
    event => {

        if (
            event.target ===
            modal
        ) {

            closeProduct();

        }

    }
);


/* =====================================================
   BODY SCROLL
   ===================================================== */

function restoreBodyScroll() {

    const productModalOpen =
        modal.classList.contains(
            "show"
        );


    const calorieOverlay =
        document.getElementById(
            "calorieOverlay"
        );


    const calorieModalOpen =
        calorieOverlay &&
        calorieOverlay.classList.contains(
            "show"
        );


    if (
        !productModalOpen &&
        !calorieModalOpen
    ) {

        document.body.style.overflow =
            "";
    }
}


/* =====================================================
   ESC TUŞU
   ===================================================== */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            if (
                modal.classList.contains(
                    "show"
                )
            ) {

                closeProduct();

            }


            const calorieOverlay =
                document.getElementById(
                    "calorieOverlay"
                );


            if (
                calorieOverlay &&
                calorieOverlay.classList.contains(
                    "show"
                )
            ) {

                closeCalorieCalculator();

            }

        }

    }
);


/* =====================================================
   KALORİ HESAPLAYICI
   ===================================================== */

function createCalorieCalculator() {

    const overlay =
        document.createElement("div");

    overlay.id =
        "calorieOverlay";

    overlay.className =
        "calorie-overlay";


    const box =
        document.createElement("div");

    box.className =
        "calorie-box";


    box.innerHTML = `
        <button
            class="calorie-close"
            id="calorieClose"
            type="button"
            aria-label="Kapat"
        >
            ×
        </button>


        <div class="calorie-title">
            Kalori Hesaplayıcı
        </div>


        <div class="calorie-subtitle">
            Tüketmek istediğiniz ürünleri seçin
        </div>


        <div
            class="calorie-list"
            id="calorieList"
        ></div>


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
            type="button"
        >
            Seçimleri Temizle
        </button>
    `;


    overlay.appendChild(
        box
    );


    document.body.appendChild(
        overlay
    );


    document
        .getElementById(
            "calorieClose"
        )
        .addEventListener(
            "click",
            closeCalorieCalculator
        );


    document
        .getElementById(
            "calorieClear"
        )
        .addEventListener(
            "click",
            clearCalories
        );


    overlay.addEventListener(
        "click",
        event => {

            if (
                event.target ===
                overlay
            ) {

                closeCalorieCalculator();

            }

        }
    );


    renderCalorieProducts();
}


/* =====================================================
   KALORİ ÜRÜNLERİ
   ===================================================== */

function renderCalorieProducts() {

    const list =
        document.getElementById(
            "calorieList"
        );


    if (!list) {
        return;
    }


    list.innerHTML =
        "";


    menuData.products.forEach(
        product => {

            const category =
                menuData.categories.find(
                    c =>
                        c.id ===
                        product.category_id
                );


            const label =
                document.createElement(
                    "label"
                );


            label.className =
                "calorie-item";


            const left =
                document.createElement(
                    "div"
                );


            left.className =
                "calorie-item-left";


            const checkbox =
                document.createElement(
                    "input"
                );


            checkbox.type =
                "checkbox";


            checkbox.dataset.id =
                product.id;


            checkbox.addEventListener(
                "change",
                updateCalorieTotal
            );


            const nameBox =
                document.createElement(
                    "div"
                );


            const productName =
                document.createElement(
                    "span"
                );


            productName.className =
                "calorie-product-name";


            productName.textContent =
                product.name;


            const productCategory =
                document.createElement(
                    "span"
                );


            productCategory.className =
                "calorie-product-category";


            productCategory.textContent =
                category
                    ? category.name
                    : "";


            nameBox.appendChild(
                productName
            );


            nameBox.appendChild(
                productCategory
            );


            left.appendChild(
                checkbox
            );


            left.appendChild(
                nameBox
            );


            const value =
                document.createElement(
                    "div"
                );


            value.className =
                "calorie-value";


            value.textContent =
                `${Number(product.calories) || 0} kcal`;


            label.appendChild(
                left
            );


            label.appendChild(
                value
            );


            list.appendChild(
                label
            );

        }
    );
}


/* =====================================================
   TOPLAM KALORİ
   ===================================================== */

function updateCalorieTotal() {

    let total =
        0;


    document
        .querySelectorAll(
            "#calorieList input[type='checkbox']:checked"
        )
        .forEach(
            checkbox => {

                const product =
                    menuData.products.find(
                        p =>
                            String(p.id) ===
                            checkbox.dataset.id
                    );


                if (product) {

                    total +=
                        Number(
                            product.calories
                        ) || 0;
                }

            }
        );


    const totalEl =
        document.getElementById(
            "calorieTotal"
        );


    if (totalEl) {

        totalEl.textContent =
            `${total.toLocaleString("tr-TR")} kcal`;
    }
}


/* =====================================================
   HESAPLAYICIYI AÇ
   ===================================================== */

function openCalorieCalculator() {

    let overlay =
        document.getElementById(
            "calorieOverlay"
        );


    if (!overlay) {

        createCalorieCalculator();


        overlay =
            document.getElementById(
                "calorieOverlay"
            );
    }


    overlay.classList.add(
        "show"
    );


    document.body.style.overflow =
        "hidden";
}


/* =====================================================
   HESAPLAYICIYI KAPAT
   ===================================================== */

function closeCalorieCalculator() {

    const overlay =
        document.getElementById(
            "calorieOverlay"
        );


    if (!overlay) {
        return;
    }


    overlay.classList.remove(
        "show"
    );


    restoreBodyScroll();
}


/* =====================================================
   SEÇİMLERİ TEMİZLE
   ===================================================== */

function clearCalories() {

    document
        .querySelectorAll(
            "#calorieList input[type='checkbox']"
        )
        .forEach(
            checkbox => {

                checkbox.checked =
                    false;

            }
        );


    updateCalorieTotal();
}


/* =====================================================
   BAŞLAT
   ===================================================== */

if (
    typeof menuData !== "undefined" &&
    menuData.categories &&
    Array.isArray(menuData.categories) &&
    menuData.products &&
    Array.isArray(menuData.products)
) {

    renderCategories();

    renderProducts();

} else {

    console.error(
        "menuData yüklenemedi. menu.js dosyasını kontrol edin."
    );
}
