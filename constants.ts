
export const introduction = {
    title: "Hekimler için Pratik NST Yorumlama",
    icon: "🎯",
    content: "En basit tanımıyla NST, 'Bebeğin İyilik Hali Testi'dir. Amacımız, bebeğin anne karnında yeterli oksijene sahip olup olmadığını (yani fetal hipoksi veya asidoz durumunun olup olmadığını) anlamaktır. Sağlıklı ve iyi oksijenlenen bir bebeğin otonom sinir sistemi düzgün çalışır ve hareket ettiğinde kalp hızı artar (akselere olur). NST'de tam olarak bunu görmek istiyoruz."
};

export const uterineActivity = {
    title: "1. Uterin Aktivite (Sancı)",
    icon: "📈",
    content: "İlk olarak alttaki (TOCO) çizgide düzenli kasılmalar olup olmadığına bakılır. Kasılmalar, bebeğe giden kan akımını geçici olarak azaltan 'stres' anlarıdır. Bebeğin bu strese verdiği yanıtı (yavaşlamaları) görmek için sancı olup olmadığını bilmeliyiz."
};

export const baselineRate = {
    title: "2. Bazal Kalp Hızı",
    icon: "❤️",
    content: "Bebeğin hızlanma ve yavaşlamalar dışındaki ortalama kalp atış hızıdır.",
    types: [
        { name: "Normal", range: "110 - 160 bpm", description: "Sağlıklı, stabil bir durumu gösterir.", borderColor: "border-green-500" },
        { name: "Taşikardi", range: "> 160 bpm", description: "Maternal ateş, fetal hipoksi veya enfeksiyon (koryoamniyonit) belirtisi olabilir.", borderColor: "border-yellow-500" },
        { name: "Bradikardi", range: "< 110 bpm", description: "Genellikle ciddi bir fetal distres veya kalp bloğu belirtisidir.", borderColor: "border-red-500" }
    ]
};

export const variability = {
    title: "3. Variyabilite",
    icon: "〰️",
    content: "Bu, bebeğin iyilik halini gösteren EN KRİTİK parametredir. Bazal hız çizgisindeki 'pürüzlü' dalgalanmadır ve sempatik ile parasempatik sistemin anlık mücadelesini yansıtır. Sağlıklı bir otonom sinir sisteminin göstergesidir."
};

export const variabilityClasses = [
    { id: 'absent', name: "Kayıp (Absent)", range: "Saptanamaz", description: "Düz çizgi. Ciddi fetal hipoksi/asidoz için oldukça endişe vericidir.", icon: "!", iconColor: "text-red-500", bgColor: "bg-red-100/50" },
    { id: 'minimal', name: "Minimal", range: "< 5 bpm", description: "Fetal uykudan kaynaklanabilir, ancak devam ederse deprese bir sinir sisteminin uyarı işaretidir.", icon: "⚠️", iconColor: "text-yellow-500", bgColor: "bg-yellow-100/50" },
    { id: 'moderate', name: "Orta (Moderate)", range: "6 - 25 bpm", description: "Hedefimiz bu! Sağlıklı, iyi oksijenlenmiş ve nörolojik olarak sağlam bir fetüsü ifade eder.", icon: "✅", iconColor: "text-green-500", bgColor: "bg-green-100/50" },
    { id: 'marked', name: "Belirgin (Marked)", range: "> 25 bpm", description: "Anlamı belirsizdir, bazen fetal aktiviteye veya hipoksinin erken bir belirtisine bağlı olabilir.", icon: "❓", iconColor: "text-blue-500", bgColor: "bg-blue-100/50" }
];

export const accelerations = {
    title: "4. Akselerasyonlar",
    icon: "👍",
    content: "Bebeğin 'Ben iyiyim!' deme şeklidir. Kalp hızının aniden artıp geri dönmesidir.",
    rule: ">32 hafta için: Hızlanma, bazal hızdan en az 15 bpm artmalı ve en az 15 saniye sürmelidir. 20 dakikada bu 15x15'lik hızlanmalardan en az 2 tane görmek, testi 'Reaktif' yapar."
};

export const decelerations = {
    title: "5. Deselerasyonlar",
    icon: "🚩",
    content: "Bunlar bizim 'Kırmızı Bayraklarımızdır'. Kalp hızındaki geçici düşüşlerdir ve sancı ile ilişkilerine göre anlam kazanırlar.",
    types: [
        { id: "early", name: "Erken Deselerasyon (İyi Huylu)", appearance: "Sancı ile birebir aynı anda başlar, sancı bitince biter (ayna görüntüsü).", meaning: "Fetal baş basısı (vagal refleks). Tehlikeli değildir.", borderColor: "border-green-500" },
        { id: "late", name: "Geç Deselerasyon (Kötü Huylu)", appearance: "Sancının tepe noktasından sonra başlar ve sancı bittikten sonra bile devam eder.", meaning: "Uteroplasental Yetmezlik. Plasenta, stres anında bebeğe yeterli kanı/oksijeni gönderemiyor. Fetal hipoksinin en net işaretidir.", borderColor: "border-red-500" },
        { id: "variable", name: "Değişken Deselerasyon (En Sık Görülen)", appearance: "Sancıdan bağımsız, ani, 'V' şeklinde keskin inişler.", meaning: "Kordon basısı. Genelde tehlikeli değildir ancak sık, derin ve tekrarlayıcı hale gelirse ciddiye alınmalıdır.", borderColor: "border-yellow-500" }
    ]
};

export const classification = {
    title: "Reaktif vs. Non-Reaktif",
    icon: "🤔",
    content: "Tüm bileşenleri analiz ettikten sonra, testin reaktivitesini sınıflandırırız.",
    types: [
        { 
            name: "Reaktif (Testi Geçti)", 
            description: "Bazal hızın normal ve variyabilitenin orta olması koşuluyla, 20 dakikalık bir periyotta yeterli akselerasyonun görülmesidir. Kriter gebelik haftasına göre değişir:",
            criteria: [
                { week: "≥32 Hafta", rule: "En az 2 adet, 15 saniye süren ve 15 vuru/dk artan akselerasyon (15x15 kuralı)." },
                { week: "<32 Hafta", rule: "En az 2 adet, 10 saniye süren ve 10 vuru/dk artan akselerasyon (10x10 kuralı)." }
            ],
            summary: "Bu kriterlerin karşılanması bebeğin güvende olduğunu gösterir.",
            action: null,
        },
        { 
            name: "Non-Reaktif (Testten Kaldı)", 
            description: "20 dakikada yeterli akselerasyon yok.", 
            action: "PANİK YOK! En sık neden fetal uykudur. Testi 20 dakika daha uzatın, anneyi hareket ettirin. Gerekirse anneye çikolata gibi küçük atıştırmalıklar verin (kontrendikasyon yoksa), O₂ desteği (4-6 lt/dk) başlayın ve anneyi sol yan veya yarı oturur (45°) pozisyona getirin. Hala non-reaktif ise Biyofiziksel Profil (BPP) gibi ileri değerlendirme gerekir.", 
            actionBgColor: "bg-amber-100", 
            actionTextColor: "text-amber-800"
        }
    ]
};

export const acogCategories = {
    title: "Nihai Karar: ACOG Kategorileri",
    icon: "🏆",
    categories: [
        { name: "Kategori I", subtitle: "Normal / Güven Verici", points: ["Bazal hız 110-160 bpm", "Orta variyabilite", "Geç veya değişken deselerasyon yok", "Akselerasyonlar olabilir veya olmayabilir"], management: "Rutin takip.", borderColor: "border-green-500", bgColor: "bg-green-50", textColor: "text-green-800", managementBgColor: "bg-green-200", managementTextColor: "text-green-900" },
        { name: "Kategori II", subtitle: "Şüpheli / Araf", points: ["Kategori I veya III olmayan her şey.", "Örnekler: Minimal variyabilite, non-reaktif trase, tekrarlayan değişken deselerasyonlar, variyabilite ile bradikardi."], management: "Yakın takip, intrauterin resüsitasyon (pozisyon, sıvı, oksijen) ve ileri testler gerektirir. Eve gönderilemez.", borderColor: "border-yellow-500", bgColor: "bg-yellow-50", textColor: "text-yellow-800", managementBgColor: "bg-yellow-200", managementTextColor: "text-yellow-900" },
        { name: "Kategori III", subtitle: "Patolojik / Acil!", points: ["Kayıp variyabilite + Tekrarlayan geç deselerasyonlar, tekrarlayan değişken deselerasyonlar veya bradikardi.", "Sinüzoidal patern (ciddi anemi/hipoksi)."], management: "Bebeği hemen doğurtun! (Genellikle acil C/S).", borderColor: "border-red-500", bgColor: "bg-red-50", textColor: "text-red-800", managementBgColor: "bg-red-200", managementTextColor: "text-red-900" }
    ]
};

export const summary = {
    title: "Hekimler için Özet Bilgi",
    icon: "📝",

    goodSigns: "En önemli iki 'iyi' işaret: Orta Variyabilite (pürüzlü çizgi) ve Akselerasyonlar (kalp hızında artış).",
    badSigns: "En tehlikeli iki 'kötü' işaret: Kayıp Variyabilite (düz çizgi) ve Geç Deselerasyonlar (sancıdan sonra yavaşlama).",
    nonReactiveNote: "Bir trase 'Non-Reaktif' ise, hemen paniklemeyin; muhtemelen bebek uyuyordur."
};
