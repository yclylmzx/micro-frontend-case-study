# Proje Kurulum ve Kullanım Kılavuzu

Bu doküman, Vite + React + Tailwind ile oluşturulmuş mikro frontend mimarisine sahip projeyi kurmak, geliştirmek, derlemek ve dağıtmak için gerekli adımları içerir.

## 1. Proje Kurulum Adımları

1. **Depoyu klonlayın:**
   ```sh
   git clone <repo-url>
   cd dashboard-microfrontends
   ```
2. **Bağımlılıkları yükleyin:**
   ```sh
   npm install
   ```

## 2. Development Server Başlatma

Tüm mikro frontendleri aynı anda başlatmak için:
```sh
npm run start:all
```
Bu komut, `shell`, `user-card` ve `content-bar` uygulamalarını paralel olarak başlatır.

Her bir mikro frontend'i ayrı ayrı başlatmak için:
```sh
npm run dev:shell
npm run dev:user-card
npm run dev:content-bar
```

## 3. Build Alma Süreçleri

Her bir mikro frontend için build almak için ilgili dizine gidip aşağıdaki komutu çalıştırabilirsiniz:
```sh
cd packages/<paket-adi>
npm run build
```
Örneğin:
```sh
cd packages/shell
npm run build
```

## 4. Deployment Talimatları

- Build işlemi sonunda her bir mikro frontend için `dist` klasörü oluşur.
- Oluşan `dist` klasörünü dilediğiniz sunucuya veya CDN'e yükleyebilirsiniz.
- Deployment süreci, kullandığınız altyapıya göre değişiklik gösterebilir (örn. Vercel, Netlify, AWS S3, Nginx, vb.).
- Her bir mikro frontend bağımsız deploy edilebilir.

## 5. Troubleshooting

- **Port Çakışması:** Eğer port çakışması yaşarsanız, ilgili mikro frontendin `vite.config.js` dosyasından portu değiştirebilirsiniz.
- **Bağımlılık Hataları:** `node_modules` klasörünü silip tekrar `npm install` komutunu çalıştırın.
- **Build Hataları:** Hata mesajlarını dikkatlice inceleyin, eksik veya hatalı importları kontrol edin.
- **Ortak Bağımlılıklar:** Eğer mikro frontendler arasında ortak bağımlılıklarda sürüm uyuşmazlığı varsa, ana `package.json` dosyasındaki sürümleri güncelleyin.
- **Daha fazla yardım için:**
  - [Vite Dokümantasyonu](https://vitejs.dev/)
  - [React Dokümantasyonu](https://react.dev/)
  - [Tailwind CSS Dokümantasyonu](https://tailwindcss.com/)
