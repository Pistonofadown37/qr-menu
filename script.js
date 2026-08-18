let activeCategory = "all";

const categoriesEl = document.getElementById("categories");
const productsEl = document.getElementById("products");
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modalImage");
const modalCategory = document.getElementById("modalCategory");
const modalName = document.getElementById("modalName");
const modalPrice = document.getElementById("modalPrice");
const modalDescription = document.getElementById("modalDescription");
const modalIngredients = document.getElementById("modalIngredients");

function renderCategories() {
  categoriesEl.innerHTML = "";

  const all = document.createElement("button");
  all.className = "category-btn active";
  all.textContent = "Tümü";
  all.onclick = () => selectCategory("all");
  categoriesEl.appendChild(all);

  menuData.categories.forEach(category => {
    const btn = document.createElement("button");
    btn.className = "category-btn";
    btn.textContent = category.name;
    btn.dataset.category = category.id;
    btn.onclick = () => selectCategory(category.id);
    categoriesEl.appendChild(btn);
  });
}

function selectCategory(categoryId) {
  activeCategory = categoryId;

  document.querySelectorAll(".category-btn").forEach(btn => {
    btn.classList.toggle(
      "active",
      (categoryId === "all" && btn.textContent === "Tümü") ||
      btn.dataset.category === categoryId
    );
  });

  renderProducts();
}

function renderProducts() {
  productsEl.innerHTML = "";

  const products = menuData.products.filter(product =>
    activeCategory === "all" || product.category_id === activeCategory
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

function openProduct(product) {
  const category = menuData.categories.find(c => c.id === product.category_id);

  modalCategory.textContent = category ? category.name : "";
  modalName.textContent = product.name;
  modalPrice.textContent = `${product.price} TL`;
  modalDescription.textContent = product.description || "";
  modalIngredients.textContent = product.ingredients
    ? `İçindekiler: ${product.ingredients}`
    : "";

  if (product.image) {
    modalImage.src = product.image;
    modalImage.alt = product.name;
    modalImage.style.display = "block";
  } else {
    modalImage.style.display = "none";
  }

  modal.classList.add("show");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeProduct() {
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

document.getElementById("closeModal").onclick = closeProduct;
modal.addEventListener("click", event => {
  if (event.target === modal) closeProduct();
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeProduct();
});

renderCategories();
renderProducts();
