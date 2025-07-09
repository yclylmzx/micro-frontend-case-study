# Dashboard Microfrontends

## Proje Açıklaması

Bu proje, mikro frontend mimarisiyle geliştirilmiş bir dashboard uygulamasıdır. Her bir özellik veya modül bağımsız birer React + Vite uygulaması olarak geliştirilmiş ve ana shell uygulaması üzerinden entegre edilmiştir. Amaç, ölçeklenebilir, bağımsız geliştirilebilen ve dağıtılabilen modüllerle modern bir dashboard altyapısı sunmaktır.

## Teknoloji Listesi

- React
- Vite
- Tailwind CSS
- TypeScript
- Module Federation (Vite Plugin Federation)
- Zustand (State Management)
- ESLint

## Kullanım Örnekleri

### Tüm mikro frontendleri başlatmak için:
```sh
npm run start:all
```

### Sadece bir mikro frontend başlatmak için:
```sh
npm run dev:shell
npm run dev:user-card
npm run dev:content-bar
```

### Build almak için:
```sh
cd packages/<paket-adi>
npm run build
```

### Mikro Frontend Mimarisini Test Etmek İçin:

Vite ile local ortamda shell uygulamasını `npm run dev` ile kaldırdıktan sonra diğer mikro uygulamaları (`content-bar`, `user-card`) `npm run build` ile build alıp ardından `npm run preview` ile 2 ayrı terminalde başlatın. Toplamda 3 ayrı terminalde;

**Terminal 1:**
```sh
cd packages/shell
npm run dev
```

**Terminal 2:**
```sh
cd packages/content-bar
npm run build
npm run preview
```

**Terminal 3:**
```sh
cd packages/user-card
npm run build
npm run preview
```
