# GitHub Pages QR Menü

Bu proje Flask yerine tamamen statik HTML/CSS/JavaScript kullanır.
GitHub Pages üzerinde çalışabilir.

## Dosyalar

- `index.html` — menü sayfası
- `style.css` — tasarım
- `script.js` — kategori filtreleme ve ürün detay penceresi
- `menu.js` — kategori ve ürün bilgileri
- `images/` — ürün görselleri

## Menü güncelleme

`menu.js` içindeki `categories` ve `products` alanlarını düzenleyin.

Örnek ürün:

{
  id: 10,
  category_id: "balik",
  name: "Çipura",
  description: "Izgara çipura.",
  ingredients: "Çipura, limon, zeytinyağı",
  price: 750,
  image: "images/cipura.jpg"
}

Yeni görseli `images` klasörüne koyun.

## GitHub Pages

Repository Settings > Pages bölümünden:
- Deploy from a branch
- Branch: main
- Folder: / (root)

seçilebilir.

GitHub Pages adresi genellikle:
https://KULLANICIADI.github.io/REPO-ADI/
