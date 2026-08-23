const menuData = {
  categories: [
    { id: "izgaralar", name: "Izgaralar" },
    { id: "balik", name: "Balık" },
    { id: "kebap-durum", name: "Kebap & Dürüm" },
    { id: "salatalar", name: "Salatalar" },
    { id: "ara-sicaklar", name: "Ara Sıcaklar" },
    { id: "cocuk-menu", name: "Çocuk Menüsü" },
    { id: "tatlilar", name: "Tatlılar" },
    { id: "icecekler", name: "İçecekler" }
  ],

  products: [

    /* =========================
       IZGARALAR
       ========================= */

    {
      id: 1,
      category_id: "izgaralar",
      name: "Antrikot",
      description: "Izgarada pişirilmiş, yumuşak ve özel seçilmiş dana antrikot.",
      ingredients: "Dana antrikot, zeytinyağı, tuz, karabiber, baharat",
      allergens: "Bilinen alerjen yok",
      price: 820,
      calories: 750,
      image: "images/antrikot.jpg"
    },
    {
      id: 2,
      category_id: "izgaralar",
      name: "Lokum Kuzu",
      description: "Özel marine edilmiş, yumuşak kuzu eti.",
      ingredients: "Kuzu eti, zeytinyağı, tuz, karabiber, baharat",
      allergens: "Bilinen alerjen yok",
      price: 890,
      calories: 780,
      image: "images/lokum-kuzu.jpg"
    },
    {
      id: 3,
      category_id: "izgaralar",
      name: "Kuzu Pirzola",
      description: "Izgarada pişirilmiş özel baharatlı kuzu pirzola.",
      ingredients: "Kuzu pirzola, zeytinyağı, tuz, karabiber",
      allergens: "Bilinen alerjen yok",
      price: 890,
      calories: 850,
      image: "images/kuzu-pirzola.jpg"
    },
    {
      id: 4,
      category_id: "izgaralar",
      name: "Tavuk Pirzola",
      description: "Özel soslarla marine edilmiş tavuk pirzola.",
      ingredients: "Tavuk eti, zeytinyağı, baharat, sarımsak",
      allergens: "Bilinen alerjen yok",
      price: 500,
      calories: 620,
      image: "images/tavuk-pirzola.jpg"
    },
    {
      id: 5,
      category_id: "izgaralar",
      name: "Yaprak Ciğer",
      description: "İnce dilimlenmiş ve özel baharatlarla hazırlanmış dana ciğer.",
      ingredients: "Dana ciğer, un, tereyağı, soğan, baharat",
      allergens: "Gluten, süt ürünü",
      price: 600,
      calories: 700,
      image: "images/yaprak-ciger.jpg"
    },
    {
      id: 6,
      category_id: "izgaralar",
      name: "Sucuk Izgara",
      description: "Izgarada pişirilmiş baharatlı dana sucuğu.",
      ingredients: "Dana eti, sucuk baharatı, sarımsak, tuz",
      allergens: "Bilinen alerjen yok",
      price: 600,
      calories: 680,
      image: "images/sucuk-izgara.jpg"
    },
    {
      id: 7,
      category_id: "izgaralar",
      name: "Tavuk Kanat",
      description: "Özel soslarla marine edilmiş çıtır tavuk kanat.",
      ingredients: "Tavuk kanat, zeytinyağı, baharat, sarımsak",
      allergens: "Bilinen alerjen yok",
      price: 600,
      calories: 720,
      image: "images/tavuk-kanat.jpg"
    },
    {
      id: 8,
      category_id: "izgaralar",
      name: "Kokoreç Izgara",
      description: "Baharatlarla hazırlanan ve ızgarada pişirilen kokoreç.",
      ingredients: "Kuzu bağırsağı, baharat, domates, biber",
      allergens: "Bilinen alerjen yok",
      price: {
        "Tek Halka Olarak": 180
      },
      calories: 850,
      image: "images/kokorec-izgara.jpg"
    },
    {
      id: 9,
      category_id: "izgaralar",
      name: "Eli Böğründe",
      description: "Sebzeler ve et ile fırında hazırlanan geleneksel sıcak yemek.",
      ingredients: "Dana eti, domates, biber, soğan, sarımsak, baharat",
      allergens: "Bilinen alerjen yok",
      price: 890,
      calories: 800,
      image: "images/eli-bogrunde.jpg"
    },
    {
      id: 10,
      category_id: "izgaralar",
      name: "Tepsi Karışık",
      description: "Farklı et çeşitlerinin tepsi içerisinde hazırlanmış özel karışımı.",
      ingredients: "Dana eti, tavuk eti, köfte, sebze, baharat",
      allergens: "Yumurta, gluten",
      price: {
        "İki Kişilik": 1750
      },
      calories: 1100,
      image: "images/tepsi-karisik.jpg"
    },
    {
      id: 11,
      category_id: "izgaralar",
      name: "Balaban Köfte",
      description: "Özel sos ve yoğurt eşliğinde servis edilen dana köfte.",
      ingredients: "Dana kıyma, ekmek, yoğurt, domates sosu, tereyağı",
      allergens: "Gluten, süt ürünü",
      price: 650,
      calories: 950,
      image: "images/balaban-kofte.jpg"
    },
    {
      id: 12,
      category_id: "izgaralar",
      name: "Izgara Köfte",
      description: "Özel baharatlarla hazırlanmış dana köfte.",
      ingredients: "Dana kıyma, soğan, galeta unu, baharat",
      allergens: "Gluten, yumurta",
      price: 600,
      calories: 750,
      image: "images/izgara-kofte.jpg"
    },
    {
      id: 13,
      category_id: "izgaralar",
      name: "Kiremitte Köfte",
      description: "Sebzeler ve özel sos ile kiremitte pişirilen köfte.",
      ingredients: "Dana köfte, domates, biber, kaşar peyniri, baharat",
      allergens: "Gluten, süt ürünü, yumurta",
      price: 650,
      calories: 900,
      image: "images/kiremitte-kofte.jpg"
    },
    {
      id: 14,
      category_id: "izgaralar",
      name: "Karışık Izgara",
      description: "Farklı ızgara et çeşitleri ve garnitür ile servis edilir.",
      ingredients: "Kuzu eti, tavuk eti, köfte, sucuk, sebze",
      allergens: "Gluten, yumurta",
      price: 850,
      calories: 1200,
      image: "images/karisik-izgara.jpg"
    },
    {
      id: 15,
      category_id: "izgaralar",
      name: "Izgara Bonfile",
      description: "Izgarada pişirilmiş yumuşak dana bonfile.",
      ingredients: "Dana bonfile, zeytinyağı, tuz, karabiber",
      allergens: "Bilinen alerjen yok",
      price: 850,
      calories: 700,
      image: "images/izgara-bonfile.jpg"
    },
    {
      id: 16,
      category_id: "izgaralar",
      name: "Tereyağlı Bonfile",
      description: "Tereyağı ile lezzetlendirilmiş dana bonfile.",
      ingredients: "Dana bonfile, tereyağı, sarımsak, baharat",
      allergens: "Süt ürünü",
      price: 850,
      calories: 850,
      image: "images/tereyagli-bonfile.jpg"
    },
    {
      id: 17,
      category_id: "izgaralar",
      name: "Tavuk Şiş",
      description: "Özel sosla marine edilmiş tavuk şiş.",
      ingredients: "Tavuk eti, zeytinyağı, yoğurt, baharat",
      allergens: "Süt ürünü",
      price: 500,
      calories: 650,
      image: "images/tavuk-sis.jpg"
    },
    {
      id: 18,
      category_id: "izgaralar",
      name: "Saç Kavurma",
      description: "Dana bonfile ve sebzelerle hazırlanan geleneksel saç kavurma.",
      ingredients: "Dana bonfile, domates, biber, soğan, sarımsak, baharat",
      allergens: "Bilinen alerjen yok",
      price: 800,
      calories: 800,
      image: "images/sac-kavurma.jpg"
    },

    /* =========================
       BALIK
       ========================= */

    {
      id: 19,
      category_id: "balik",
      name: "Levrek",
      description: "Izgarada pişirilmiş taze levrek.",
      ingredients: "Levrek, zeytinyağı, limon, tuz",
      allergens: "Balık",
      price: 666,
      calories: 550,
      image: "images/levrek.jpg"
    },
    {
      id: 20,
      category_id: "balik",
      name: "Çipura",
      description: "Izgarada pişirilmiş taze çipura.",
      ingredients: "Çipura, zeytinyağı, limon, tuz",
      allergens: "Balık",
      price: 666,
      calories: 520,
      image: "images/cipura.jpg"
    },
    {
      id: 21,
      category_id: "balik",
      name: "Somon",
      description: "Izgara somon fileto.",
      ingredients: "Somon, zeytinyağı, limon, baharat",
      allergens: "Balık",
      price: 666,
      calories: 680,
      image: "images/somon.jpg"
    },
    {
      id: 22,
      category_id: "balik",
      name: "Kaya Levreği",
      description: "Taze kaya levreği ızgarada pişirilir.",
      ingredients: "Kaya levreği, zeytinyağı, limon, baharat",
      allergens: "Balık",
      price: 666,
      calories: 560,
      image: "images/kaya-levregi.jpg"
    },
    {
      id: 23,
      category_id: "balik",
      name: "Hamsi",
      description: "Çıtır şekilde hazırlanmış taze hamsi.",
      ingredients: "Hamsi, mısır unu, yağ, limon",
      allergens: "Balık, gluten",
      price: 666,
      calories: 650,
      image: "images/hamsi.jpg"
    },
    {
      id: 24,
      category_id: "balik",
      name: "İstavrit",
      description: "Taze istavrit tava.",
      ingredients: "İstavrit, un, yağ, limon",
      allergens: "Balık, gluten",
      price: 666,
      calories: 600,
      image: "images/istavrit.jpg"
    },
    {
      id: 25,
      category_id: "balik",
      name: "Çinekop",
      description: "Taze çinekop tava.",
      ingredients: "Çinekop, un, yağ, limon",
      allergens: "Balık, gluten",
      price: 666,
      calories: 650,
      image: "images/cinekop.jpg"
    },
    {
      id: 26,
      category_id: "balik",
      name: "Barbun",
      description: "Çıtır şekilde kızartılmış taze barbun.",
      ingredients: "Barbun, un, yağ, limon",
      allergens: "Balık, gluten",
      price: 666,
      calories: 620,
      image: "images/barbun.jpg"
    },
    {
      id: 27,
      category_id: "balik",
      name: "Levrek Buğulama",
      description: "Sebzelerle birlikte fırında hazırlanmış levrek.",
      ingredients: "Levrek, domates, biber, soğan, limon",
      allergens: "Balık",
      price: 666,
      calories: 600,
      image: "images/levrek-bugulama.jpg"
    },
    {
      id: 28,
      category_id: "balik",
      name: "Çipura Buğulama",
      description: "Sebzeler eşliğinde hazırlanmış çipura.",
      ingredients: "Çipura, domates, biber, soğan, limon",
      allergens: "Balık",
      price: 666,
      calories: 580,
      image: "images/cipura-bugulama.jpg"
    },
    {
      id: 29,
      category_id: "balik",
      name: "Hamsi Buğulama",
      description: "Sebzelerle birlikte fırında hazırlanmış hamsi.",
      ingredients: "Hamsi, soğan, limon, domates, baharat",
      allergens: "Balık",
      price: 666,
      calories: 550,
      image: "images/hamsi-bugulama.jpg"
    },
    {
      id: 30,
      category_id: "balik",
      name: "Tuzda Balık",
      description: "Tuz kabuğu içerisinde fırında pişirilmiş günlük balık.",
      ingredients: "Mevsim balığı, kaya tuzu, limon",
      allergens: "Balık",
      price: 666,
      calories: 650,
      image: "images/tuzda-balik.jpg"
    },

    /* =========================
       KEBAP & DÜRÜM
       ========================= */

    {
      id: 31,
      category_id: "kebap-durum",
      name: "Adana Kebap",
      description: "Acılı dana ve kuzu eti ile hazırlanan geleneksel kebap.",
      ingredients: "Dana eti, kuzu eti, kuyruk yağı, kırmızı biber, baharat",
      allergens: "Bilinen alerjen yok",
      price: 650,
      calories: 850,
      image: "images/adana-kebap.jpg"
    },
    {
      id: 32,
      category_id: "kebap-durum",
      name: "Urfa Kebap",
      description: "Baharatları dengeli, geleneksel Urfa kebabı.",
      ingredients: "Dana eti, kuzu eti, kuyruk yağı, baharat",
      allergens: "Bilinen alerjen yok",
      price: 650,
      calories: 820,
      image: "images/urfa-kebap.jpg"
    },
    {
      id: 33,
      category_id: "kebap-durum",
      name: "Tavuk Dürüm",
      description: "Izgara tavuk ve taze sebzelerle hazırlanan dürüm.",
      ingredients: "Tavuk eti, lavaş, domates, marul, soğan",
      allergens: "Gluten",
      price: 320,
      calories: 650,
      image: "images/tavuk-durum.jpg"
    },
    {
      id: 34,
      category_id: "kebap-durum",
      name: "Ciğer Dürüm",
      description: "Baharatlı ciğer ve sebzelerle hazırlanan dürüm.",
      ingredients: "Dana ciğer, lavaş, soğan, maydanoz, baharat",
      allergens: "Gluten",
      price: 320,
      calories: 700,
      image: "images/ciger-durum.jpg"
    },
    {
      id: 35,
      category_id: "kebap-durum",
      name: "Köfte Dürüm",
      description: "Izgara köfte ve sebzelerle hazırlanan dürüm.",
      ingredients: "Dana köfte, lavaş, domates, marul, soğan",
      allergens: "Gluten, yumurta",
      price: 320,
      calories: 750,
      image: "images/kofte-durum.jpg"
    },
    {
      id: 36,
      category_id: "kebap-durum",
      name: "Adana Dürüm",
      description: "Acılı Adana kebap ile hazırlanan dürüm.",
      ingredients: "Adana kebap, lavaş, domates, soğan, maydanoz",
      allergens: "Gluten",
      price: 320,
      calories: 780,
      image: "images/adana-durum.jpg"
    },
    {
      id: 37,
      category_id: "kebap-durum",
      name: "Urfa Dürüm",
      description: "Urfa kebap ve taze sebzelerle hazırlanan dürüm.",
      ingredients: "Urfa kebap, lavaş, domates, soğan, maydanoz",
      allergens: "Gluten",
      price: 320,
      calories: 750,
      image: "images/urfa-durum.jpg"
    },

    /* =========================
       SALATALAR
       ========================= */

    {
      id: 38,
      category_id: "salatalar",
      name: "Kaşık Salata",
      description: "İnce doğranmış taze sebzelerle hazırlanan salata.",
      ingredients: "Domates, salatalık, soğan, maydanoz, nar ekşisi",
      allergens: "Bilinen alerjen yok",
      price: 195,
      calories: 180,
      image: "images/kasik-salata.jpg"
    },
    {
      id: 39,
      category_id: "salatalar",
      name: "İbo Şef Salata",
      description: "Şefin özel sosu ve mevsim sebzeleriyle hazırlanan salata.",
      ingredients: "Marul, roka, domates, peynir, ceviz, özel sos",
      allergens: "Süt ürünü, sert kabuklu yemiş",
      price: 250,
      calories: 350,
      image: "images/ibo-sef-salata.jpg"
    },
    {
      id: 40,
      category_id: "salatalar",
      name: "Roka Salata",
      description: "Roka, domates ve limon sosuyla hazırlanan ferah salata.",
      ingredients: "Roka, domates, soğan, limon, zeytinyağı",
      allergens: "Bilinen alerjen yok",
      price: 240,
      calories: 150,
      image: "images/roka-salata.jpg"
    },
    {
      id: 41,
      category_id: "salatalar",
      name: "Duble Salata",
      description: "Bol malzemeli büyük boy mevsim salatası.",
      ingredients: "Marul, domates, salatalık, roka, havuç, zeytinyağı",
      allergens: "Bilinen alerjen yok",
      price: 240,
      calories: 280,
      image: "images/duble-salata.jpg"
    },

    /* =========================
       ARA SICAKLAR
       ========================= */

    {
      id: 42,
      category_id: "ara-sicaklar",
      name: "İçli Köfte",
      description: "İnce bulgur hamuru içerisinde kıymalı ve cevizli harç.",
      ingredients: "Bulgur, dana kıyma, ceviz, soğan, baharat",
      allergens: "Gluten, sert kabuklu yemiş",
      price: 150,
      calories: 380,
      image: "images/icli-kofte.jpg"
    },
    {
      id: 43,
      category_id: "ara-sicaklar",
      name: "Ahtapot Güveç",
      description: "Sebzeler ve özel soslarla hazırlanmış sıcak ahtapot güveç.",
      ingredients: "Ahtapot, domates, biber, soğan, sarımsak, tereyağı",
      allergens: "Yumuşakça, süt ürünü",
      price: 666,
      calories: 500,
      image: "images/ahtapot-guvec.jpg"
    },
    {
      id: 44,
      category_id: "ara-sicaklar",
      name: "Karides Tava",
      description: "Tereyağı ve baharatlarla hazırlanan sıcak karides.",
      ingredients: "Karides, tereyağı, sarımsak, limon, baharat",
      allergens: "Kabuklu deniz ürünü, süt ürünü",
      price: 790,
      calories: 520,
      image: "images/karides-tava.jpg"
    },
    {
      id: 45,
      category_id: "ara-sicaklar",
      name: "Kalamar Tava",
      description: "Çıtır kaplamalı kalamar, özel sos eşliğinde servis edilir.",
      ingredients: "Kalamar, un, yağ, limon, sos",
      allergens: "Yumuşakça, gluten",
      price: 790,
      calories: 600,
      image: "images/kalamar-tava.jpg"
    },
    {
      id: 46,
      category_id: "ara-sicaklar",
      name: "Patates Kızartma",
      description: "Baharatlarla hazırlanmış çıtır patates.",
      ingredients: "Patates, bitkisel yağ, tuz, baharat",
      allergens: "Çapraz bulaşma olabilir",
      price: 150,
      calories: 500,
      image: "images/patates-kizartma.jpg"
    },
    {
      id: 47,
      category_id: "ara-sicaklar",
      name: "Paçanga Böreği",
      description: "Pastırma ve kaşar peyniri ile hazırlanan çıtır börek.",
      ingredients: "Yufka, pastırma, kaşar peyniri, domates, biber",
      allergens: "Gluten, süt ürünü",
      price: 150,
      calories: 650,
      image: "images/pacanga-boregi.jpg"
    },

    /* =========================
       ÇOCUK MENÜSÜ
       ========================= */

    {
      id: 48,
      category_id: "cocuk-menu",
      name: "Hamburger",
      description: "Dana köfte, cheddar peyniri ve patates kızartması ile servis edilir.",
      ingredients: "Dana köfte, hamburger ekmeği, cheddar, domates, marul, patates",
      allergens: "Gluten, süt ürünü, yumurta",
      price: 450,
      calories: 850,
      image: "images/burger.jpg"
    },

    /* =========================
       TATLILAR
       ========================= */

    {
      id: 49,
      category_id: "tatlilar",
      name: "Kabak Tatlısı",
      description: "Ceviz ve tahin eşliğinde servis edilen geleneksel kabak tatlısı.",
      ingredients: "Kabak, şeker, ceviz, tahin",
      allergens: "Sert kabuklu yemiş, susam",
      price: 220,
      calories: 450,
      image: "images/kabak-tatlisi.jpg"
    },
    {
      id: 50,
      category_id: "tatlilar",
      name: "Sütlaç",
      description: "Geleneksel usulde hazırlanmış soğuk sütlaç.",
      ingredients: "Süt, pirinç, şeker, nişasta",
      allergens: "Süt ürünü",
      price: 150,
      calories: 350,
      image: "images/sutlac.jpg"
    },
    {
      id: 51,
      category_id: "tatlilar",
      name: "Baklava",
      description: "Cevizli ve şerbetli geleneksel baklava.",
      ingredients: "Yufka, tereyağı, ceviz, şeker, şerbet",
      allergens: "Gluten, süt ürünü, sert kabuklu yemiş",
      price: 666,
      calories: 650,
      image: "images/baklava.jpg"
    },
    {
      id: 52,
      category_id: "tatlilar",
      name: "Fırın Helva",
      description: "Fırında hazırlanmış sıcak tahin helvası.",
      ingredients: "Tahin, şeker, süt, tereyağı",
      allergens: "Susam, süt ürünü",
      price: 150,
      calories: 550,
      image: "images/firin-helva.jpg"
    },
    {
      id: 53,
      category_id: "tatlilar",
      name: "Meyve Tabağı",
      description: "Mevsim meyvelerinden hazırlanan karışık meyve tabağı.",
      ingredients: "Mevsim meyveleri",
      allergens: "Bilinen alerjen yok",
      price: 150,
      calories: 250,
      image: "images/meyve-tabagi.jpg"
    },

    /* =========================
       İÇECEKLER
       ========================= */

    {
      id: 54,
      category_id: "icecekler",
      name: "Kola",
      description: "Soğuk servis edilir.",
      ingredients: "Gazlı içecek",
      allergens: "Bilinen alerjen yok",
      price: {
        Kutu: 95,
        Şişe: 75
      },
      calories: 140,
      image: "images/cola.jpg"
    },
    {
      id: 55,
      category_id: "icecekler",
      name: "Fanta",
      description: "Soğuk gazlı içecek.",
      ingredients: "Gazlı meyveli içecek",
      allergens: "Bilinen alerjen yok",
      price: {
        Kutu: 95,
        Şişe: 75
      },
      calories: 150,
      image: "images/fanta.jpg"
    },
    {
      id: 56,
      category_id: "icecekler",
      name: "Sprite",
      description: "Soğuk limon aromalı gazlı içecek.",
      ingredients: "Gazlı içecek",
      allergens: "Bilinen alerjen yok",
      price: {
        Kutu: 95,
        Şişe: 75
      },
      calories: 140,
      image: "images/sprite.jpg"
    },
    {
      id: 57,
      category_id: "icecekler",
      name: "Fuse Tea",
      description: "Soğuk çay.",
      ingredients: "Su, çay aroma      allergens: "Bilinen alerjen yok",
      price: 890,
      calories: 780,
      image: "images/lokum-kuzu.jpg"
    },

    {
      id: 3,
      category_id: "izgaralar",
      name: "Kuzu Pirzola",
      description: "Izgarada pişirilmiş özel baharatlı kuzu pirzola.",
      ingredients: "Kuzu pirzola, zeytinyağı, tuz, karabiber",
      allergens: "Bilinen alerjen yok",
      price: 890,
      calories: 850,
      image: "images/kuzu-pirzola.jpg"
    },

    {
      id: 4,
      category_id: "izgaralar",
      name: "Tavuk Pirzola",
      description: "Özel soslarla marine edilmiş tavuk pirzola.",
      ingredients: "Tavuk eti, zeytinyağı, baharat, sarımsak",
      allergens: "Bilinen alerjen yok",
      price: 500,
      calories: 620,
      image: "images/tavuk-pirzola.jpg"
    },

    {
      id: 5,
      category_id: "izgaralar",
      name: "Yaprak Ciğer",
      description: "İnce dilimlenmiş ve özel baharatlarla hazırlanmış dana ciğer.",
      ingredients: "Dana ciğer, un, tereyağı, soğan, baharat",
      allergens: "Gluten, süt ürünü",
      price: 600,
      calories: 700,
      image: "images/yaprak-ciger.jpg"
    },

    {
      id: 6,
      category_id: "izgaralar",
      name: "Sucuk Izgara",
      description: "Izgarada pişirilmiş baharatlı dana sucuğu.",
      ingredients: "Dana eti, sucuk baharatı, sarımsak, tuz",
      allergens: "Bilinen alerjen yok",
      price: 600,
      calories: 680,
      image: "images/sucuk-izgara.jpg"
    },

    {
      id: 7,
      category_id: "izgaralar",
      name: "Tavuk Kanat",
      description: "Özel soslarla marine edilmiş çıtır tavuk kanat.",
      ingredients: "Tavuk kanat, zeytinyağı, baharat, sarımsak",
      allergens: "Bilinen alerjen yok",
      price: 600,
      calories: 720,
      image: "images/tavuk-kanat.jpg"
    },

    {
      id: 8,
      category_id: "izgaralar",
      name: "Kokoreç Izgara",
      description: "Baharatlarla hazırlanan ve ızgarada pişirilen kokoreç.",
      ingredients: "Kuzu bağırsağı, baharat, domates, biber",
      allergens: "Bilinen alerjen yok",
      price: 180 "Tek Halka Olarak",
      calories: 850,
      image: "images/kokorec-izgara.jpg"
    },

    {
      id: 9,
      category_id: "izgaralar",
      name: "Eli Böğründe",
      description: "Sebzeler ve et ile fırında hazırlanan geleneksel sıcak yemek.",
      ingredients: "Dana eti, domates, biber, soğan, sarımsak, baharat",
      allergens: "Bilinen alerjen yok",
      price: 890,
      calories: 800,
      image: "images/eli-bogrunde.jpg"
    },

    {
      id: 10,
      category_id: "izgaralar",
      name: "Tepsi Karışık",
      description: "Farklı et çeşitlerinin tepsi içerisinde hazırlanmış özel karışımı.",
      ingredients: "Dana eti, tavuk eti, köfte, sebze, baharat",
      allergens: "Yumurta, gluten",
      price: 1750 "İki Kişilik",
      calories: 1100,
      image: "images/tepsi-karisik.jpg"
    },

    {
      id: 11,
      category_id: "izgaralar",
      name: "Balaban Köfte",
      description: "Özel sos ve yoğurt eşliğinde servis edilen dana köfte.",
      ingredients: "Dana kıyma, ekmek, yoğurt, domates sosu, tereyağı",
      allergens: "Gluten, süt ürünü",
      price: 650,
      calories: 950,
      image: "images/balaban-kofte.jpg"
    },

    {
      id: 12,
      category_id: "izgaralar",
      name: "Izgara Köfte",
      description: "Özel baharatlarla hazırlanmış dana köfte.",
      ingredients: "Dana kıyma, soğan, galeta unu, baharat",
      allergens: "Gluten, yumurta",
      price: 600,
      calories: 750,
      image: "images/izgara-kofte.jpg"
    },

    {
      id: 13,
      category_id: "izgaralar",
      name: "Kiremitte Köfte",
      description: "Sebzeler ve özel sos ile kiremitte pişirilen köfte.",
      ingredients: "Dana köfte, domates, biber, kaşar peyniri, baharat",
      allergens: "Gluten, süt ürünü, yumurta",
      price: 650,
      calories: 900,
      image: "images/kiremitte-kofte.jpg"
    },

    {
      id: 14,
      category_id: "izgaralar",
      name: "Karışık Izgara",
      description: "Farklı ızgara et çeşitleri ve garnitür ile servis edilir.",
      ingredients: "Kuzu eti, tavuk eti, köfte, sucuk, sebze",
      allergens: "Gluten, yumurta",
      price: 850,
      calories: 1200,
      image: "images/karisik-izgara.jpg"
    },

    {
      id: 15,
      category_id: "izgaralar",
      name: "Izgara Bonfile",
      description: "Izgarada pişirilmiş yumuşak dana bonfile.",
      ingredients: "Dana bonfile, zeytinyağı, tuz, karabiber",
      allergens: "Bilinen alerjen yok",
      price: 850,
      calories: 700,
      image: "images/izgara-bonfile.jpg"
    },

    {
      id: 16,
      category_id: "izgaralar",
      name: "Tereyağlı Bonfile",
      description: "Tereyağı ile lezzetlendirilmiş dana bonfile.",
      ingredients: "Dana bonfile, tereyağı, sarımsak, baharat",
      allergens: "Süt ürünü",
      price: 850,
      calories: 850,
      image: "images/tereyagli-bonfile.jpg"
    },

    {
      id: 17,
      category_id: "izgaralar",
      name: "Tavuk Şiş",
      description: "Özel sosla marine edilmiş tavuk şiş.",
      ingredients: "Tavuk eti, zeytinyağı, yoğurt, baharat",
      allergens: "Süt ürünü",
      price: 500,
      calories: 650,
      image: "images/tavuk-sis.jpg"
    },

    {
      id: 18,
      category_id: "izgaralar",
      name: "Saç Kavurma",
      description: "Dana bonfile ve sebzelerle hazırlanan geleneksel saç kavurma.",
      ingredients: "Dana bonfile, domates, biber, soğan, sarımsak, baharat",
      allergens: "Bilinen alerjen yok",
      price: 800,
      calories: 800,
      image: "images/sac-kavurma.jpg"
    },


    /* =========================
       BALIK
       ========================= */

    {
      id: 19,
      category_id: "balik",
      name: "Levrek",
      description: "Izgarada pişirilmiş taze levrek.",
      ingredients: "Levrek, zeytinyağı, limon, tuz",
      allergens: "Balık",
      price: 666,
      calories: 550,
      image: "images/levrek.jpg"
    },

    {
      id: 20,
      category_id: "balik",
      name: "Çipura",
      description: "Izgarada pişirilmiş taze çipura.",
      ingredients: "Çipura, zeytinyağı, limon, tuz",
      allergens: "Balık",
      price: 666,
      calories: 520,
      image: "images/cipura.jpg"
    },

    {
      id: 21,
      category_id: "balik",
      name: "Somon",
      description: "Izgara somon fileto.",
      ingredients: "Somon, zeytinyağı, limon, baharat",
      allergens: "Balık",
      price: 666 ,
      calories: 680,
      image: "images/somon.jpg"
    },

    {
      id: 22,
      category_id: "balik",
      name: "Kaya Levreği",
      description: "Taze kaya levreği ızgarada pişirilir.",
      ingredients: "Kaya levreği, zeytinyağı, limon, baharat",
      allergens: "Balık",
      price: 666,
      calories: 560,
      image: "images/kaya-levregi.jpg"
    },

    {
      id: 23,
      category_id: "balik",
      name: "Hamsi",
      description: "Çıtır şekilde hazırlanmış taze hamsi.",
      ingredients: "Hamsi, mısır unu, yağ, limon",
      allergens: "Balık, gluten",
      price: 666,
      calories: 650,
      image: "images/hamsi.jpg"
    },

    {
      id: 24,
      category_id: "balik",
      name: "İstavrit",
      description: "Taze istavrit tava.",
      ingredients: "İstavrit, un, yağ, limon",
      allergens: "Balık, gluten",
      price: 666,
      calories: 600,
      image: "images/istavrit.jpg"
    },

    {
      id: 25,
      category_id: "balik",
      name: "Çinekop",
      description: "Taze çinekop tava.",
      ingredients: "Çinekop, un, yağ, limon",
      allergens: "Balık, gluten",
      price: 666,
      calories: 650,
      image: "images/cinekop.jpg"
    },

    {
      id: 26,
      category_id: "balik",
      name: "Barbun",
      description: "Çıtır şekilde kızartılmış taze barbun.",
      ingredients: "Barbun, un, yağ, limon",
      allergens: "Balık, gluten",
      price: 666,
      calories: 620,
      image: "images/barbun.jpg"
    },

    {
      id: 27,
      category_id: "balik",
      name: "Levrek Buğulama",
      description: "Sebzelerle birlikte fırında hazırlanmış levrek.",
      ingredients: "Levrek, domates, biber, soğan, limon",
      allergens: "Balık",
      price: 666,
      calories: 600,
      image: "images/levrek-bugulama.jpg"
    },

    {
      id: 28,
      category_id: "balik",
      name: "Çipura Buğulama",
      description: "Sebzeler eşliğinde hazırlanmış çipura.",
      ingredients: "Çipura, domates, biber, soğan, limon",
      allergens: "Balık",
      price: 666,
      calories: 580,
      image: "images/cipura-bugulama.jpg"
    },

    {
      id: 29,
      category_id: "balik",
      name: "Hamsi Buğulama",
      description: "Sebzelerle birlikte fırında hazırlanmış hamsi.",
      ingredients: "Hamsi, soğan, limon, domates, baharat",
      allergens: "Balık",
      price: 666,
      calories: 550,
      image: "images/hamsi-bugulama.jpg"
    },

    {
      id: 30,
      category_id: "balik",
      name: "Tuzda Balık",
      description: "Tuz kabuğu içerisinde fırında pişirilmiş günlük balık.",
      ingredients: "Mevsim balığı, kaya tuzu, limon",
      allergens: "Balık",
      price: 666,
      calories: 650,
      image: "images/tuzda-balik.jpg"
    },


    /* =========================
       KEBAP & DÜRÜM
       ========================= */

    {
      id: 31,
      category_id: "kebap-durum",
      name: "Adana Kebap",
      description: "Acılı dana ve kuzu eti ile hazırlanan geleneksel kebap.",
      ingredients: "Dana eti, kuzu eti, kuyruk yağı, kırmızı biber, baharat",
      allergens: "Bilinen alerjen yok",
      price: 650,
      calories: 850,
      image: "images/adana-kebap.jpg"
    },

    {
      id: 32,
      category_id: "kebap-durum",
      name: "Urfa Kebap",
      description: "Baharatları dengeli, geleneksel Urfa kebabı.",
      ingredients: "Dana eti, kuzu eti, kuyruk yağı, baharat",
      allergens: "Bilinen alerjen yok",
      price: 650,
      calories: 820,
      image: "images/urfa-kebap.jpg"
    },

    {
      id: 33,
      category_id: "kebap-durum",
      name: "Tavuk Dürüm",
      description: "Izgara tavuk ve taze sebzelerle hazırlanan dürüm.",
      ingredients: "Tavuk eti, lavaş, domates, marul, soğan",
      allergens: "Gluten",
      price: 320,
      calories: 650,
      image: "images/tavuk-durum.jpg"
    },

    {
      id: 34,
      category_id: "kebap-durum",
      name: "Ciğer Dürüm",
      description: "Baharatlı ciğer ve sebzelerle hazırlanan dürüm.",
      ingredients: "Dana ciğer, lavaş, soğan, maydanoz, baharat",
      allergens: "Gluten",
      price: 320,
      calories: 700,
      image: "images/ciger-durum.jpg"
    },

    {
      id: 35,
      category_id: "kebap-durum",
      name: "Köfte Dürüm",
      description: "Izgara köfte ve sebzelerle hazırlanan dürüm.",
      ingredients: "Dana köfte, lavaş, domates, marul, soğan",
      allergens: "Gluten, yumurta",
      price: 320,
      calories: 750,
      image: "images/kofte-durum.jpg"
    },

    {
      id: 36,
      category_id: "kebap-durum",
      name: "Adana Dürüm",
      description: "Acılı Adana kebap ile hazırlanan dürüm.",
      ingredients: "Adana kebap, lavaş, domates, soğan, maydanoz",
      allergens: "Gluten",
      price: 320,
      calories: 780,
      image: "images/adana-durum.jpg"
    },

    {
      id: 37,
      category_id: "kebap-durum",
      name: "Urfa Dürüm",
      description: "Urfa kebap ve taze sebzelerle hazırlanan dürüm.",
      ingredients: "Urfa kebap, lavaş, domates, soğan, maydanoz",
      allergens: "Gluten",
      price: 320,
      calories: 750,
      image: "images/urfa-durum.jpg"
    },


    /* =========================
       SALATALAR
       ========================= */

    {
      id: 38,
      category_id: "salatalar",
      name: "Kaşık Salata",
      description: "İnce doğranmış taze sebzelerle hazırlanan salata.",
      ingredients: "Domates, salatalık, soğan, maydanoz, nar ekşisi",
      allergens: "Bilinen alerjen yok",
      price: 195,
      calories: 180,
      image: "images/kasik-salata.jpg"
    },

    {
      id: 39,
      category_id: "salatalar",
      name: "İbo Şef Salata",
      description: "Şefin özel sosu ve mevsim sebzeleriyle hazırlanan salata.",
      ingredients: "Marul, roka, domates, peynir, ceviz, özel sos",
      allergens: "Süt ürünü, sert kabuklu yemiş",
      price: 250,
      calories: 350,
      image: "images/ibo-sef-salata.jpg"
    },

    {
      id: 40,
      category_id: "salatalar",
      name: "Roka Salata",
      description: "Roka, domates ve limon sosuyla hazırlanan ferah salata.",
      ingredients: "Roka, domates, soğan, limon, zeytinyağı",
      allergens: "Bilinen alerjen yok",
      price: 240,
      calories: 150,
      image: "images/roka-salata.jpg"
    },

    {
      id: 41,
      category_id: "salatalar",
      name: "Duble Salata",
      description: "Bol malzemeli büyük boy mevsim salatası.",
      ingredients: "Marul, domates, salatalık, roka, havuç, zeytinyağı",
      allergens: "Bilinen alerjen yok",
      price: 240,
      calories: 280,
      image: "images/duble-salata.jpg"
    },


    /* =========================
       ARA SICAKLAR
       ========================= */

    {
      id: 42,
      category_id: "ara-sicaklar",
      name: "İçli Köfte",
      description: "İnce bulgur hamuru içerisinde kıymalı ve cevizli harç.",
      ingredients: "Bulgur, dana kıyma, ceviz, soğan, baharat",
      allergens: "Gluten, sert kabuklu yemiş",
      price: 150,
      calories: 380,
      image: "images/icli-kofte.jpg"
    },

    {
      id: 43,
      category_id: "ara-sicaklar",
      name: "Ahtapot Güveç",
      description: "Sebzeler ve özel soslarla hazırlanmış sıcak ahtapot güveç.",
      ingredients: "Ahtapot, domates, biber, soğan, sarımsak, tereyağı",
      allergens: "Yumuşakça, süt ürünü",
      price: (666),
      calories: 500,
      image: "images/ahtapot-guvec.jpg"
    },

    {
      id: 44,
      category_id: "ara-sicaklar",
      name: "Karides Tava",
      description: "Tereyağı ve baharatlarla hazırlanan sıcak karides.",
      ingredients: "Karides, tereyağı, sarımsak, limon, baharat",
      allergens: "Kabuklu deniz ürünü, süt ürünü",
      price: 790,
      calories: 520,
      image: "images/karides-tava.jpg"
    },

    {
      id: 45,
      category_id: "ara-sicaklar",
      name: "Kalamar Tava",
      description: "Çıtır kaplamalı kalamar, özel sos eşliğinde servis edilir.",
      ingredients: "Kalamar, un, yağ, limon, sos",
      allergens: "Yumuşakça, gluten",
      price: 790,
      calories: 600,
      image: "images/kalamar-tava.jpg"
    },

    {
      id: 46,
      category_id: "ara-sicaklar",
      name: "Patates Kızartma",
      description: "Baharatlarla hazırlanmış çıtır patates.",
      ingredients: "Patates, bitkisel yağ, tuz, baharat",
      allergens: "Çapraz bulaşma olabilir",
      price: 150,
      calories: 500,
      image: "images/patates-kizartma.jpg"
    },

    {
      id: 47,
      category_id: "ara-sicaklar",
      name: "Paçanga Böreği",
      description: "Pastırma ve kaşar peyniri ile hazırlanan çıtır börek.",
      ingredients: "Yufka, pastırma, kaşar peyniri, domates, biber",
      allergens: "Gluten, süt ürünü",
      price: 150,
      calories: 650,
      image: "images/pacanga-boregi.jpg"
    },


    /* =========================
       ÇOCUK MENÜSÜ
       ========================= */

    {
      id: 48,
      category_id: "cocuk-menu",
      name: "Hamburger",
      description: "Dana köfte, cheddar peyniri ve patates kızartması ile servis edilir.",
      ingredients: "Dana köfte, hamburger ekmeği, cheddar, domates, marul, patates",
      allergens: "Gluten, süt ürünü, yumurta",
      price: 450,
      calories: 850,
      image: "images/burger.jpg"
    },


    /* =========================
       TATLILAR
       ========================= */

    {
      id: 49,
      category_id: "tatlilar",
      name: "Kabak Tatlısı",
      description: "Ceviz ve tahin eşliğinde servis edilen geleneksel kabak tatlısı.",
      ingredients: "Kabak, şeker, ceviz, tahin",
      allergens: "Sert kabuklu yemiş, susam",
      price: 220,
      calories: 450,
      image: "images/kabak-tatlisi.jpg"
    },

    {
      id: 50,
      category_id: "tatlilar",
      name: "Sütlaç",
      description: "Geleneksel usulde hazırlanmış soğuk sütlaç.",
      ingredients: "Süt, pirinç, şeker, nişasta",
      allergens: "Süt ürünü",
      price: 150,
      calories: 350,
      image: "images/sutlac.jpg"
    },

    {
      id: 51,
      category_id: "tatlilar",
      name: "Baklava",
      description: "Cevizli ve şerbetli geleneksel baklava.",
      ingredients: "Yufka, tereyağı, ceviz, şeker, şerbet",
      allergens: "Gluten, süt ürünü, sert kabuklu yemiş",
      price: (666),
      calories: 650,
      image: "images/baklava.jpg"
    },

    {
      id: 52,
      category_id: "tatlilar",
      name: "Fırın Helva",
      description: "Fırında hazırlanmış sıcak tahin helvası.",
      ingredients: "Tahin, şeker, süt, tereyağı",
      allergens: "Susam, süt ürünü",
      price: 150,
      calories: 550,
      image: "images/firin-helva.jpg"
    },

    {
      id: 53,
      category_id: "tatlilar",
      name: "Meyve Tabağı",
      description: "Mevsim meyvelerinden hazırlanan karışık meyve tabağı.",
      ingredients: "Mevsim meyveleri",
      allergens: "Bilinen alerjen yok",
      price: 150,
      calories: 250,
      image: "images/meyve-tabagi.jpg"
    },


    /* =========================
       İÇECEKLER
       ========================= */

    {
      id: 54,
      category_id: "icecekler",
      name: "Kola",
      description: "Soğuk servis edilir.",
      ingredients: "Gazlı içecek",
      allergens: "Bilinen alerjen yok",
      price: 95,
      calories: 140,
      image: "images/cola.jpg"
    },

    {
      id: 55,
      category_id: "icecekler",
      name: "Fanta",
      description: "Soğuk gazlı içecek.",
      ingredients: "Gazlı meyveli içecek",
      allergens: "Bilinen alerjen yok",
      price: 95,
      calories: 150,
      image: "images/fanta.jpg"
    },

    {
      id: 56,
      category_id: "icecekler",
      name: "Sprite",
      description: "Soğuk limon aromalı gazlı içecek.",
      ingredients: "Gazlı içecek",
      allergens: "Bilinen alerjen yok",
      price: 95,
      calories: 140,
      image: "images/sprite.jpg"
    },

    {
      id: 57,
      category_id: "icecekler",
      name: "Fuse Tea",
      description: "Soğuk çay.",
      ingredients: "Su, çay aroması, şeker",
      allergens: "Bilinen alerjen yok",
      price: 95,
      calories: 150,
      image: "images/fuse-tea.jpg"
    },

    {
      id: 58,
      category_id: "icecekler",
      name: "Meyve Suyu",
      description: "Soğuk meyve aromalı içecek.",
      ingredients: "Meyve suyu konsantresi, su, şeker",
      allergens: "Meyve çeşidine göre değişebilir",
      price: 95,
      calories: 180,
      image: "images/meyve-suyu.jpg"
    },

    {
      id: 59,
      category_id: "icecekler",
      name: "Ayran",
      description: "Geleneksel soğuk ayran.",
      ingredients: "Yoğurt, su, tuz",
      allergens: "Süt ürünü",
      price: 90,
      calories: 120,
      image: "images/ayran.jpg"
    },

    {
      id: 60,
      category_id: "icecekler",
      name: "Şalgam",
      description: "Geleneksel fermente şalgam suyu.",
      ingredients: "Şalgam, havuç, su, tuz, baharat",
      allergens: "Bilinen alerjen yok",
      price: 85,
      calories: 50,
      image: "images/salgam.jpg"
    },

    {
      id: 61,
      category_id: "icecekler",
      name: "Maden Suyu",
      description: "Soğuk doğal mineralli su.",
      ingredients: "Doğal mineralli su",
      allergens: "Bilinen alerjen yok",
      price: 60,
      calories: 0,
      image: "images/maden-suyu.jpg"
    },

    {
      id: 62,
      category_id: "icecekler",
      name: "Su",
      description: "Soğuk içme suyu.",
      ingredients: "Su",
      allergens: "Bilinen alerjen yok",
      price: 35,
      calories: 0,
      image: "images/su.jpg"
    },

    {
      id: 63,
      category_id: "icecekler",
      name: "Çay",
      description: "Sıcak servis edilen demlenmiş çay.",
      ingredients: "Çay, su",
      allergens: "Bilinen alerjen yok",
      price: 25,
      calories: 5,
      image: "images/cay.jpg"
    },

    {
      id: 64,
      category_id: "icecekler",
      name: "Türk Kahvesi",
      description: "Geleneksel Türk kahvesi.",
      ingredients: "Öğütülmüş kahve, su",
      allergens: "Bilinen alerjen yok",
      price: 60,
      calories: 10,
      image: "images/turk-kahvesi.jpg"
    },

    {
      id: 65,
      category_id: "icecekler",
      name: "Sütlü Kahve",
      description: "Sıcak süt ve kahve ile hazırlanır.",
      ingredients: "Süt, kahve",
      allergens: "Süt ürünü",
      price: 60,
      calories: 180,
      image: "images/sutlu-kahve.jpg"
    }

  ]
};
