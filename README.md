# InggrisPro 🇮🇩🇬🇧

Aplikasi web belajar Bahasa Inggris yang responsif dan premium, dibuat khusus untuk penutur Bahasa Indonesia.

## Fitur
- **Kata Hari Ini**: Belajar kata baru setiap hari dengan definisi dan contoh.
- **Kamus**: Cari kata bahasa Inggris dan dengarkan pelafalannya.
- **Kuis**: Uji kemampuan bahasa Inggrismu dan raih skor tertinggi.
- **Responsif**: Tampilan optimal di HP dan Desktop.

## Teknologi
- React + Vite
- Tailwind CSS v4
- Motion Framer & Canvas Confetti
- LocalStorage Data

## Cara Menjalankan
1. Instal dependensi:
   ```bash
   npm install
   ```
2. Jalankan server development:
   ```bash
   npm run dev
   ```

## Cara Deploy ke GitHub Pages
Karena `gh` CLI tidak tersedia, silakan ikuti langkah manual ini:

1. Buat repositori baru di GitHub dengan nama **`inggres`**.
2. Hubungkan repositori lokal ke GitHub:
   ```bash
   git remote add origin https://github.com/<USERNAME>/inggres.git
   git branch -M main
   git push -u origin main
   ```
   *(Ganti `<USERNAME>` dengan username GitHub Anda)*

3. Deploy aplikasi:
   ```bash
   npm run build
   npm run deploy
   ```

4. Buka tab **Settings > Pages** di GitHub, pastikan Source diatur ke `gh-pages` branch.
