# Pratik NST Yorumlama Rehberi

[![Netlify Status](https://api.netlify.com/api/v1/badges/YOUR_BADGE_ID/deploy-status)](https://app.netlify.com/sites/YOUR_SITE_NAME/deploys)

Bu proje, özellikle aile hekimleri ve tıp öğrencileri için Non-Stres Testi (NST) yorumlama sanatında ustalaşmayı hedefleyen interaktif ve görsel olarak zengin bir rehberdir. Fetal iyilik halinin hızlı ve doğru bir şekilde değerlendirilmesi amacıyla NST'nin 5 temel bileşenine ve ACOG sınıflandırmalarına odaklanılmıştır.

![Proje Ekran Görüntüsü](https-i-ibb-co-m6dhzlt-image.png)

## 🎯 Amaç

NST, "Bebeğin İyilik Hali Testi" olarak bilinir. Bu rehberin amacı, sağlık profesyonellerinin fetal hipoksi veya asidoz durumlarını hızlıca tanımalarına yardımcı olmak, böylece anne ve bebek sağlığı için en doğru kararları almalarını sağlamaktır. Proje, teorik bilgiyi anlaşılır görseller ve animasyonlarla birleştirerek öğrenme sürecini kalıcı ve etkili hale getirmeyi amaçlar.

## ✨ Özellikler

- **İnteraktif Görselleştirmeler:** Deselerasyon ve variyabilite türleri, gerçek NST çıktısını taklit eden animasyonlu grafiklerle gösterilir.
- **5 Temel Bileşen Odaklı:** Uterin aktivite, bazal kalp hızı, variyabilite, akselerasyonlar ve deselerasyonlar adım adım açıklanır.
- **ACOG Kategori Sınıflandırması:** Test sonuçlarının nasıl sınıflandırılacağı ve hangi durumlarda ne tür bir yaklaşım sergilenmesi gerektiği net bir şekilde belirtilir.
- **Pratik Özet Bilgiler:** "İyi İşaretler" ve "Kırmızı Bayraklar" gibi hızlı referans noktaları sunar.
- **Modern ve Duyarlı Tasarım:** Her türlü cihazda (mobil, tablet, masaüstü) sorunsuz bir kullanıcı deneyimi sağlar.

## 🛠️ Kullanılan Teknolojiler

- **React:** Kullanıcı arayüzü için modern bir JavaScript kütüphanesi.
- **TypeScript:** Türe duyarlı, ölçeklenebilir ve daha az hatalı kod yazımı için.
- **Tailwind CSS:** Hızlı ve modern arayüz tasarımı için bir CSS çatısı.
- **Framer Motion:** Akıcı ve interaktif animasyonlar oluşturmak için.

## 🚀 Projeyi Yerel Makinede Çalıştırma

Projeyi kendi bilgisayarınızda kurmak ve geliştirmek için aşağıdaki adımları izleyin:

1.  **Depoyu Klonlayın:**
    ```bash
    git clone https://github.com/kullanici-adiniz/proje-adiniz.git
    ```

2.  **Proje Dizinine Gidin:**
    ```bash
    cd proje-adiniz
    ```

3.  **Gerekli Paketleri Yükleyin:**
    ```bash
    npm install
    ```

4.  **Geliştirme Sunucusunu Başlatın:**
    ```bash
    npm run dev
    ```
    Artık projeyi tarayıcınızda `http://localhost:5173` (veya terminalde belirtilen başka bir port) adresinde görebilirsiniz.

## ☁️ Netlify ile Yayınlama

Bu proje, Netlify üzerinden kolayca ve ücretsiz bir şekilde yayınlanabilir.

1.  **Projenizi GitHub'a Yükleyin:**
    Henüz yapmadıysanız, projenizi bir GitHub deposuna yükleyin.

2.  **Netlify'a Bağlayın:**
    - [Netlify](https://www.netlify.com/) web sitesine gidin ve GitHub hesabınızla giriş yapın.
    - `Add new site` -> `Import an existing project` seçeneğine tıklayın.
    - Git sağlayıcısı olarak GitHub'ı seçin ve projenizin deposunu yetkilendirin.
    - Yayınlamak istediğiniz depoyu seçin.

3.  **Derleme Ayarlarını Yapılandırın:**
    Netlify, projenizin bir Vite projesi olduğunu otomatik olarak tanıyacaktır. Ayarlar genellikle aşağıdaki gibi olmalıdır:
    - **Build command:** `npm run build` (veya `vite build`)
    - **Publish directory:** `dist`

    Bu ayarları onayladıktan sonra `Deploy site` düğmesine tıklayın. Netlify projenizi derleyecek ve size özel bir URL (`.netlify.app` uzantılı) üzerinden yayına alacaktır.

    **NOT:** İlk dağıtımdan sonra, Netlify ayarlarından yukarıdaki dağıtım durumu (deployment status) rozetinin ID'sini ve site adınızı alarak bu `README.md` dosyasını güncellemeyi unutmayın.

## 👨‍💻 Proje Sahibi

Bu proje **Dr. Sadık Barış Adıgüzel** tarafından geliştirilmiştir.

## 🤝 Katkıda Bulunma

Katkılarınız projeyi daha da geliştirecektir! Lütfen bir `pull request` açmaktan veya `issue` oluşturmaktan çekinmeyin.

1.  Projeyi `fork` edin.
2.  Yeni bir `branch` oluşturun (`git checkout -b ozellik/yeni-bir-ozellik`).
3.  Değişikliklerinizi `commit` edin (`git commit -m 'Yeni bir özellik eklendi'`).
4.  Branch'inizi `push` edin (`git push origin ozellik/yeni-bir-ozellik`).
5.  Bir Pull Request açın.

## 📜 Lisans

Bu proje MIT Lisansı ile lisanslanmıştır. Detaylar için `LICENSE` dosyasına göz atın.

---

**ÖNEMLİ NOT:** Bu uygulama, yalnızca sağlık profesyonelleri için bir öğrenim aracı olarak tasarlanmıştır. Gerçek klinik karar verme süreçlerinde kullanılmamalıdır.
