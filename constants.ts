
import React from 'react';
import { GlossaryTerm } from './components/GlossaryTerm';

const glossary = {
    'fetal hipoksi': 'Bebeğin doku ve organlarına yeterli oksijen gitmemesi durumu.',
    'asidoz': 'Vücut sıvılarında, özellikle kanda aşırı asit birikmesi. Fetal distresin ciddi bir göstergesi olabilir.',
    'TOCO': 'Tokodinamometre. Rahim kasılmalarının (sancıların) sıklığını ve süresini ölçen cihaz.',
    'otonom sinir sistemi': 'Vücudun kalp atışı, solunum gibi istemsiz fonksiyonlarını kontrol eden sinir sistemi bölümü. Sağlıklı çalışması fetal iyilik halinin bir göstergesidir.',
    'koryoamniyonit': 'Fetal zarların ve amniyotik sıvının enfeksiyonu.',
    'fetal distres': 'Bebeğin anne karnında tehlikede olduğunu gösteren belirtiler bütünü.',
    'vagal refleks': 'Vagus sinirinin uyarılmasıyla kalp hızının yavaşlaması. NST\'de genellikle fetal baş basısı nedeniyle görülür.',
    'Uteroplasental Yetmezlik': 'Plasentanın, bebeğe yeterli kan, oksijen ve besin sağlayamaması durumu.',
    'Kordon basısı': 'Göbek kordonunun sıkışarak bebeğe giden kan akımının geçici olarak azalması veya durması.',
    'Biyofiziksel Profil (BPP)': 'Fetal iyilik halini değerlendirmek için ultrason ve NST\'yi birleştiren kapsamlı bir test.',
    'intrauterin resüsitasyon': 'Fetal distres şüphesi olduğunda, bebeğin oksijenlenmesini iyileştirmek için anneye uygulanan müdahaleler (pozisyon değiştirme, oksijen ve sıvı verme gibi).',
    'Sinüzoidal patern': 'NST trasesinde düzenli, sinüs dalgasına benzer bir patern. Genellikle ciddi fetal anemi veya ağır hipoksi ile ilişkilidir ve acil müdahale gerektirir.'
};

const G = (term: keyof typeof glossary) => React.createElement(GlossaryTerm, { term: term, definition: glossary[term] });

export const introduction = {
    title: "Hekimler için Pratik NST Yorumlama",
    icon: "🎯",
    content: React.createElement(React.Fragment, null, 
        "En basit tanımıyla NST, 'Bebeğin İyilik Hali Testi'dir. Amacımız, bebeğin anne karnında yeterli oksijene sahip olup olmadığını (yani ",
        G('fetal hipoksi'),
        " veya ",
        G('asidoz'),
        " durumunun olup olmadığını) anlamaktır. Sağlıklı ve iyi oksijenlenen bir bebeğin ",
        G('otonom sinir sistemi'),
        " düzgün çalışır ve hareket ettiğinde kalp hızı artar (akselere olur). NST'de tam olarak bunu görmek istiyoruz."
    )
};

export const uterineActivity = {
    title: "1. Uterin Aktivite (Sancı)",
    icon: "📈",
    content: React.createElement(React.Fragment, null, 
        "İlk olarak alttaki (",
        G('TOCO'),
        ") çizgide düzenli kasılmalar olup olmadığına bakılır. Kasılmalar, bebeğe giden kan akımını geçici olarak azaltan 'stres' anlarıdır. Bebeğin bu strese verdiği yanıtı (yavaşlamaları) görmek için sancı olup olmadığını bilmeliyiz."
    )
};

export const baselineRate = {
    title: "2. Bazal Kalp Hızı",
    icon: "❤️",
    content: "Bebeğin hızlanma ve yavaşlamalar dışındaki ortalama kalp atış hızıdır.",
    types: [
        { name: "Normal", range: "110 - 160 bpm", description: "Sağlıklı, stabil bir durumu gösterir.", borderColor: "border-green-500" },
        { name: "Taşikardi", range: "> 160 bpm", description: React.createElement(React.Fragment, null, "Maternal ateş, ", G('fetal hipoksi'), " veya enfeksiyon (", G('koryoamniyonit'), ") belirtisi olabilir."), borderColor: "border-yellow-500" },
        { name: "Bradikardi", range: "< 110 bpm", description: React.createElement(React.Fragment, null, "Genellikle ciddi bir ", G('fetal distres'), " veya kalp bloğu belirtisidir."), borderColor: "border-red-500" }
    ]
};

export const variability = {
    title: "3. Variyabilite: Bebeğin Beyin Aktivitesi",
    icon: "〰️",
    content: React.createElement(React.Fragment, null,
      "Bu, fetal iyilik halini gösteren EN KRİTİK parametredir. Bazal hız çizgisindeki bu 'pürüzlü' dalgalanma, bebeğin ",
      G('otonom sinir sistemi'),
      "nin (sempatik 'gaz' ve parasempatik 'fren' pedalları) sağlıklı bir şekilde çalıştığının ve yeterli oksijen aldığının anlık bir kanıtıdır. Pürüzlü bir çizgi, uyanık ve sağlıklı bir beyin demektir."
    ),
    measurement: {
        title: "Peki, Variyabilite Nasıl Ölçülür?",
        description: "Variyabiliteyi ölçmek hassas bir cetvel gerektirmez; bu, görsel bir değerlendirmedir. Akselerasyon ve deselerasyonlar dışındaki 10 dakikalık bir trase segmentine odaklanılır.",
        steps: [
            {
                step: "1. Hayali Bant Çizin",
                detail: "Gözünüzle, bazal hız çizgisinin pürüzlü hareketinin en tepesinden ve en altından geçen iki yatay çizgi hayal edin."
            },
            {
                step: "2. Aralığı Tahmin Edin",
                detail: "Bu iki hayali çizgi arasındaki dikey mesafeyi (genliği) vuru/dakika (bpm) cinsinden tahmin edin. İşte bu tahmin, variyabilitenin değeridir."
            }
        ]
    }
};

export const variabilityClasses = [
    { id: 'absent', name: "Kayıp (Absent)", range: "Saptanamaz", description: React.createElement(React.Fragment, null, "Düz çizgi. Ciddi ", G('fetal hipoksi'), "/", G('asidoz'), " için oldukça endişe vericidir."), icon: "!", iconColor: "text-red-500", bgColor: "bg-red-100/50" },
    { id: 'minimal', name: "Minimal", range: "≤ 5 bpm", description: "Fetal uykudan kaynaklanabilir, ancak devam ederse deprese bir sinir sisteminin uyarı işaretidir.", icon: "⚠️", iconColor: "text-yellow-500", bgColor: "bg-yellow-100/50" },
    { id: 'moderate', name: "Orta (Moderate)", range: "6 - 25 bpm", description: "Hedefimiz bu! Sağlıklı, iyi oksijenlenmiş ve nörolojik olarak sağlam bir fetüsü ifade eder.", icon: "✅", iconColor: "text-green-500", bgColor: "bg-green-100/50" },
    { id: 'marked', name: "Belirgin (Marked)", range: "> 25 bpm", description: React.createElement(React.Fragment, null, "Anlamı belirsizdir, bazen fetal aktiviteye veya ", G('fetal hipoksi'), "nin erken bir belirtisine bağlı olabilir."), icon: "❓", iconColor: "text-blue-500", bgColor: "bg-blue-100/50" }
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
        { id: "early", name: "Erken Deselerasyon (İyi Huylu)", appearance: "Sancı ile birebir aynı anda başlar, sancı bitince biter (ayna görüntüsü).", meaning: React.createElement(React.Fragment, null, "Fetal baş basısı (", G('vagal refleks'), "). Tehlikeli değildir."), borderColor: "border-green-500" },
        { id: "late", name: "Geç Deselerasyon (Kötü Huylu)", appearance: "Sancının tepe noktasından sonra başlar ve sancı bittikten sonra bile devam eder.", meaning: React.createElement(React.Fragment, null, G('Uteroplasental Yetmezlik'), ". Plasenta, stres anında bebeğe yeterli kanı/oksijeni gönderemiyor. ", G('fetal hipoksi'), "nin en net işaretidir."), borderColor: "border-red-500" },
        { id: "variable", name: "Değişken Deselerasyon (En Sık Görülen)", appearance: "Sancıdan bağımsız, ani, 'V' şeklinde keskin inişler.", meaning: React.createElement(React.Fragment, null, G('Kordon basısı'), ". Genelde tehlikeli değildir ancak sık, derin ve tekrarlayıcı hale gelirse ciddiye alınmalıdır."), borderColor: "border-yellow-500" }
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
            action: React.createElement(React.Fragment, null, "PANİK YOK! En sık neden fetal uykudur. Testi 20 dakika daha uzatın, anneyi hareket ettirin. Gerekirse anneye çikolata gibi küçük atıştırmalıklar verin (kontrendikasyon yoksa), O₂ desteği (4-6 lt/dk) başlayın ve anneyi sol yan veya yarı oturur (45°) pozisyona getirin. Hala non-reaktif ise ", G('Biyofiziksel Profil (BPP)'), " gibi ileri değerlendirme gerekir."), 
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
        { name: "Kategori II", subtitle: "Şüpheli / Araf", points: ["Kategori I veya III olmayan her şey.", "Örnekler: Minimal variyabilite, non-reaktif trase, tekrarlayan değişken deselerasyonlar, variyabilite ile bradikardi."], management: React.createElement(React.Fragment, null, "Yakın takip, ", G('intrauterin resüsitasyon'), " (pozisyon, sıvı, oksijen) ve ileri testler gerektirir. Eve gönderilemez."), borderColor: "border-yellow-500", bgColor: "bg-yellow-50", textColor: "text-yellow-800", managementBgColor: "bg-yellow-200", managementTextColor: "text-yellow-900" },
        { name: "Kategori III", subtitle: "Patolojik / Acil!", points: ["Kayıp variyabilite + Tekrarlayan geç deselerasyonlar, tekrarlayan değişken deselerasyonlar veya bradikardi.", React.createElement(React.Fragment, null, G('Sinüzoidal patern'), " (ciddi anemi/hipoksi).")], management: "Bebeği hemen doğurtun! (Genellikle acil C/S).", borderColor: "border-red-500", bgColor: "bg-red-50", textColor: "text-red-800", managementBgColor: "bg-red-200", managementTextColor: "text-red-900" }
    ]
};

export const summary = {
    title: "Hekimler için Özet Bilgi",
    icon: "📝",
    goodSigns: "En önemli iki 'iyi' işaret: Orta Variyabilite (pürüzlü çizgi) ve Akselerasyonlar (kalp hızında artış).",
    badSigns: React.createElement(React.Fragment, null, "En tehlikeli iki 'kötü' işaret: Kayıp Variyabilite (düz çizgi) ve Geç Deselerasyonlar (sancıdan sonra yavaşlama)."),
    nonReactiveNote: "Bir trase 'Non-Reaktif' ise, hemen paniklemeyin; muhtemelen bebek uyuyordur."
};
