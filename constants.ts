
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
        ") çizgide düzenli kasılmalar olup olmadığına bakılır. Kasılmalar, bebeğe giden kan akımını geçici olarak azaltan 'stres' anlarıdır. Bebeğin bu strese verdiği yanıtı (yavaşlamaları) görmek için sancı olup olmadığını bilmeliyiz.",
        React.createElement("div", { className: "mt-4 p-3 bg-amber-50 dark:bg-slate-800 border-l-4 border-amber-500 text-amber-900 dark:text-amber-200 rounded-r-lg text-sm" },
            React.createElement("strong", null, "Klinik Kriter - Takisistol (Tachysystole): "),
            "10 dakikalık sürede ortalama 5'ten fazla uterus kasılması olması durumudur. Bebeğin kasılmalar arasında dinlenmesine ve plasentadan oksijen almasına engel olur. Hidrasyon sağlanmalı, Oksitosin kapatılmalı ve gerekirse tokolitik tedavi düşünülmelidir."
        )
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
        { id: "variable", name: "Değişken Deselerasyon (En Sık Görülen)", appearance: "Sancıdan bağımsız, ani, 'V' şeklinde keskin inişler.", meaning: React.createElement(React.Fragment, null, G('Kordon basısı'), ". Genelde tehlikeli değildir ancak sık, derin ve tekrarlayıcı hale gelirse ciddiye alınmalıdır."), borderColor: "border-yellow-500" },
        { id: "prolonged", name: "Uzatmış Deselerasyon (Ciddi / Alarm)", appearance: "Kalp hızında en az 15 bpm düşüşün, en az 2 dakika sürmesi ama 10 dakikayı aşmamasıdır.", meaning: React.createElement(React.Fragment, null, "Fetal oksijenlenmede ani ve uzun süreli azalma. ", G('intrauterin resüsitasyon'), " başlanmalı, düzelmezse acil sezaryen hazırlığı yapılmalıdır."), borderColor: "border-orange-500" },
        { id: "sinusoidal", name: "Sinüzoidal Patern (Patolojik / Acil!)", appearance: "Sancılardan bağımsız, son derece düzenli ve pürüzsüz dalga (sinüs dalgası) görünümüdür. Variyabilite kaybolmuştur.", meaning: React.createElement(React.Fragment, null, "Ciddi fetal anemi, ağır ", G('fetal hipoksi'), " veya ", G('asidoz'), " belirtisidir. Kategori III'tür ve acil C/S ile doğum gerektirir."), borderColor: "border-red-600" }
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

export const quizCases = [
  {
    id: "case-1",
    title: "Vaka 1: Rutin Gebelik Kontrolü",
    gestationalWeek: "38. Hafta",
    description: "38 haftalık gebe rutin gebelik kontrolünde NST'ye bağlanıyor. Herhangi bir şikayeti olmayan annenin NST trasesi inceleniyor. Bazal kalp hızı 140 bpm civarında seyrediyor, orta (moderate) variyabiliteye sahip. 20 dakikalık izlemde bazal hızdan 15 vuru yükselen ve 20 saniye süren 3 adet hızlanma (akselerasyon) gözlenirken, hiçbir yavaşlama (deselerasyon) saptanmıyor.",
    traceType: "normal",
    variabilityType: "moderate",
    baselineBpm: 140,
    questions: [
      {
        id: "c1-q1",
        question: "Trasedeki Bazal Kalp Hızı sınıflandırması nedir?",
        options: ["Bradikardi (<110 bpm)", "Normal (110 - 160 bpm)", "Taşikardi (>160 bpm)"],
        correctIndex: 1,
        explanation: "140 bpm, ACOG rehberlerine göre 110-160 bpm olan normal sınırlar içerisindedir ve fetal iyilik halinin temel göstergelerindendir."
      },
      {
        id: "c1-q2",
        question: "Trasedeki Variyabilite durumu hangisidir?",
        options: ["Kayıp (Absent) - Düz Çizgi", "Minimal (≤ 5 bpm)", "Orta (Moderate) (6 - 25 bpm)", "Belirgin (Marked) (> 25 bpm)"],
        correctIndex: 2,
        explanation: "Pürüzlü dalgalanmanın genişliği 6 ila 25 bpm arasında olduğundan 'Orta (Moderate)' olarak değerlendirilir. Bu durum nörolojik olarak sağlıklı bir bebeği temsil eder."
      },
      {
        id: "c1-q3",
        question: "Akselerasyon ve Deselerasyon varlığına göre testi yorumlayın:",
        options: [
          "Akselerasyon yok, test reaktiftir",
          "Yeterli akselerasyon var, deselerasyon yok. Test REAKTİF'tir.",
          "Deselerasyon var, test non-reaktiftir"
        ],
        correctIndex: 1,
        explanation: "32 haftadan büyük gebelikte 20 dakikada en az 2 adet 15x15 kuralına uyan akselerasyon görülmesi ve deselerasyon olmaması trasiyi 'Reaktif' yapar."
      },
      {
        id: "c1-q4",
        question: "Bu trase ACOG sınıflamasına göre hangi Kategoriye girer ve yönetim nasıl olmalıdır?",
        options: [
          "Kategori I - Rutin gebelik takibine devam edilir.",
          "Kategori II - Intrauterin resüsitasyon başlanır, anne eve gönderilmez.",
          "Kategori III - Acil sezaryen ile bebek doğurtulur."
        ],
        correctIndex: 0,
        explanation: "Normal bazal hız (140), orta variyabilite ve deselerasyon olmaması Kategori I (Normal / Güven verici) tanımıyla birebir eşleşir. Yaklaşım rutin takiptir."
      }
    ]
  },
  {
    id: "case-2",
    title: "Vaka 2: Bebek Hareketlerinde Azalma & Preeklampsi",
    gestationalWeek: "39. Hafta",
    description: "39 haftalık preeklamptik (gebelik zehirlenmesi) gebe, bebek hareketlerinde azalma şikayetiyle başvuruyor. NST trasesinde bazal kalp hızı 145 bpm'dir. Çizgi genel olarak oldukça pürüzsüz görünmekte ve dalgalanma genliği 3 bpm civarında (minimal) seyretmektedir. Ayrıca, TOCO cihazının kaydettiği her sancı dalgasının tepe noktasından yaklaşık 20 saniye sonra başlayan, sancı bittikten sonra bile devam eden 15-20 bpm'lik yavaşlamalar saptanıyor.",
    traceType: "late",
    variabilityType: "minimal",
    baselineBpm: 145,
    questions: [
      {
        id: "c2-q1",
        question: "Trasede sancıların tepe noktasından sonra başlayan ve sancı bittikten sonra da süren deselerasyon tipi hangisidir?",
        options: ["Erken Deselerasyon (Baş Basısı)", "Değişken Deselerasyon (Kordon Basısı)", "Geç Deselerasyon (Uteroplasental Yetmezlik)"],
        correctIndex: 2,
        explanation: "Sancının zirvesinden sonra gecikmeli olarak başlayan ve sancı bitiminden sonra devam eden düşüşler 'Geç Deselerasyon'dur. Uteroplasental yetmezlik ve fetal hipoksiyi gösterir."
      },
      {
        id: "c2-q2",
        question: "Trasedeki variyabilitenin 3 bpm olması ne anlama gelir?",
        options: [
          "Orta variyabilite - Bebek çok hareketlidir.",
          "Minimal variyabilite - Bebek uykuda olabilir veya hipoksiye bağlı santral sinir sistemi depresyonu başlamış olabilir.",
          "Kayıp variyabilite - Asidoz kesinleşmiştir."
        ],
        correctIndex: 1,
        explanation: "Genlik 5 bpm'in altında olduğundan 'Minimal' variyabilitedir. Preeklampsi zemininde geç deselerasyonlarla birlikteliği, fetal uykudan ziyade asidoz öncesi hipoksiyi düşündürmelidir."
      },
      {
        id: "c2-q3",
        question: "Bu trase ACOG sınıflamasına göre hangi Kategoriye girer?",
        options: ["Kategori I (Normal)", "Kategori II (Şüpheli / Araf)", "Kategori III (Patolojik)"],
        correctIndex: 1,
        explanation: "Kategori III olması için kayıp (absent) variyabilite ile birlikte tekrarlayan geç/değişken deselerasyonlar olması gerekir. Burada variyabilite minimal (sıfır değil) olduğundan Kategori II'dir."
      },
      {
        id: "c2-q4",
        question: "Bu hastaya ilk yapılması gereken klinik yaklaşım (yönetim) ne olmalıdır?",
        options: [
          "Rutin takip önerilip hasta eve gönderilir.",
          "Intrauterin resüsitasyon başlanır (Sol yan pozisyon, O2, hidrasyon), sancı yapıcı ilaç varsa kapatılır ve yakın takiple doğum planlanır.",
          "Hemen ameliyathaneye alınıp 5 dakika içinde sezaryen yapılır."
        ],
        correctIndex: 1,
        explanation: "Kategori II traselerde ilk adım intrauterin resüsitasyondur. Anne sol yana yatırılır, sıvı başlanır, O2 verilir. Trase düzelmezse veya kötüleşirse doğum kararı alınır. Eve gönderilemez."
      }
    ]
  },
  {
    id: "case-3",
    title: "Vaka 3: Kan Uyuşmazlığı & Şiddetli Trase",
    gestationalWeek: "35. Hafta",
    description: "Rh uygunsuzluğu (kan uyuşmazlığı) tanısı olan ve takiplere düzensiz gelen 35 haftalık gebe polikliniğe başvuruyor. NST trasesinde bazal kalp hızı 130 bpm olarak belirleniyor. Trasede akselerasyon veya deselerasyon bulunmuyor; ancak kalp hızı çizgisi, 20 dakikadır devam eden, dakikada 3-4 kez tekrarlayan ve genliği 12 bpm olan son derece pürüzsüz ve düzenli bir sinüs dalgası çiziyor.",
    traceType: "sinusoidal",
    variabilityType: "absent",
    baselineBpm: 130,
    questions: [
      {
        id: "c3-q1",
        question: "Trasede görülen bu pürüzsüz, düzenli sinüs dalgası şeklindeki özel paterne ne ad verilir?",
        options: ["Uzatmış Deselerasyon", "Sinüzoidal Patern", "Bradikardi atağı"],
        correctIndex: 1,
        explanation: "Düzenli, pürüzsüz dalgalanma (sinüs dalgası) görünümü 'Sinüzoidal Patern'dir. Fetal anemi veya ağır hipoksiyi gösteren nadir ama çok tehlikeli bir bulgudur."
      },
      {
        id: "c3-q2",
        question: "Sinüzoidal patern saptanan bir trase ACOG sınıflamasına göre hangi kategoridedir?",
        options: ["Kategori I (Normal)", "Kategori II (Şüpheli)", "Kategori III (Patolojik / Acil!)"],
        correctIndex: 2,
        explanation: "ACOG rehberine göre sinüzoidal patern saptanması, variyabilitenin kaybolması ile beraber en ağır fetal distress göstergesidir ve Kategori III olarak sınıflandırılır."
      },
      {
        id: "c3-q3",
        question: "Kan uyuşmazlığı olan bu gebede sinüzoidal paternin en olası nedeni ve klinik yaklaşım ne olmalıdır?",
        options: [
          "Bebek uyuyordur, uyanması için çikolata yedirip test uzatılmalıdır.",
          "Ciddi fetal anemi (bebekte ağır kansızlık / hidrops). Vakit kaybetmeden acil C/S ile doğum yapılmalıdır.",
          "Kordon basısı vardır, anne sağ yanına döndürülüp takip edilir."
        ],
        correctIndex: 1,
        explanation: "Kan uyuşmazlığı zemininde sinüzoidal patern ciddi fetal anemiye (bebeğin alyuvarlarının yıkılmasına) işaret eder. Bebek ağır hipoksi ve asidoz riski altındadır; acil doğum (C/S) şarttır."
      }
    ]
  }
];

