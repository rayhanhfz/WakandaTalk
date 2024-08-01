Berikut adalah dokumentasi dalam bahasa Indonesia yang mencakup semua langkah yang diperlukan untuk memulai, menjalankan, dan mendeply proyek Anda menggunakan Create React App:

# WakandaTalk.com

WakandaTalk.com adalah aplikasi web berita yang memberikan informasi terbaru dan terpercaya. Aplikasi ini dibangun menggunakan React.

## Fitur

- **Tampilan Berita Utama**: Menampilkan daftar berita utama dari berbagai sumber.
- **Halaman Tentang Kami**: Memberikan informasi tentang tim dan misi WakandaTalk.com.
- **Halaman Kontak**: Menyediakan informasi kontak dan peta lokasi kantor (menggunakan placeholder peta).
- **Daftar Berita Favorit**: Pengguna dapat menandai berita sebagai favorit.

## Prasyarat

Sebelum menginstal, pastikan Anda memiliki:

- Node.js dan npm (Node Package Manager) terinstal di mesin Anda.
- Akun GitHub.
- Akun Vercel atau Netlify untuk deployment (opsional).

## Instalasi

1. **Clone repositori ini:**

   ```bash
   git clone https://github.com/<username>/<repository-name>.git
   ```

2. **Masuk ke direktori proyek:**

   ```bash
   cd <repository-name>
   ```

3. **Instal dependensi:**

   ```bash
   npm install
   ```

4. **Jalankan aplikasi:**
   ```bash
   npm start
   ```
   Aplikasi akan berjalan di `http://localhost:3000`.

## Skrip yang Tersedia

Di direktori proyek, Anda dapat menjalankan:

### `npm start`

Menjalankan aplikasi dalam mode pengembangan.\
Buka [http://localhost:3000](http://localhost:3000) untuk melihatnya di browser Anda.

Halaman akan memuat ulang saat Anda melakukan perubahan.\
Anda mungkin juga akan melihat kesalahan di konsol.

### `npm test`

Menjalankan test runner dalam mode interaktif.\
Lihat bagian tentang [menjalankan tes](https://facebook.github.io/create-react-app/docs/running-tests) untuk informasi lebih lanjut.

### `npm run build`

Membangun aplikasi untuk produksi ke dalam folder `build`.\
Ini menggabungkan React dalam mode produksi dan mengoptimalkan build untuk kinerja terbaik.

Build diminifikasi dan nama file menyertakan hash.\
Aplikasi Anda siap untuk di-deploy!

Lihat bagian tentang [deployment](https://facebook.github.io/create-react-app/docs/deployment) untuk informasi lebih lanjut.

### `npm run eject`

**Catatan: Ini adalah operasi satu arah. Setelah Anda `eject`, Anda tidak bisa kembali!**

Jika Anda tidak puas dengan alat build dan pilihan konfigurasi, Anda dapat melakukan `eject` kapan saja. Perintah ini akan menghapus ketergantungan build tunggal dari proyek Anda.

Sebaliknya, itu akan menyalin semua file konfigurasi dan ketergantungan transitif (webpack, Babel, ESLint, dll) langsung ke proyek Anda sehingga Anda memiliki kendali penuh atas mereka. Semua perintah kecuali `eject` masih akan berfungsi, tetapi mereka akan mengarah ke skrip yang disalin sehingga Anda dapat menyesuaikannya. Pada titik ini Anda sendiri.

Anda tidak harus menggunakan `eject`. Set fitur yang dikuratori ini cocok untuk deployment kecil dan menengah, dan Anda tidak perlu merasa harus menggunakan fitur ini. Namun kami memahami bahwa alat ini tidak akan berguna jika Anda tidak dapat menyesuaikannya saat Anda siap melakukannya.

## Deployment

### Deployment ke Vercel

1. **Buat akun di Vercel:**

   - Buka [Vercel](https://vercel.com/) dan login atau buat akun baru.

2. **Hubungkan repositori GitHub ke Vercel:**

   - Klik "New Project" di dashboard Vercel.
   - Pilih GitHub sebagai sumber.
   - Pilih repositori yang ingin Anda deploy.

3. **Konfigurasi proyek di Vercel:**

   - Vercel akan secara otomatis mendeteksi bahwa ini adalah proyek React.
   - Gunakan konfigurasi berikut:
     - **Framework Preset:** React
     - **Build Command:** `npm run build`
     - **Output Directory:** `build`

4. **Deploy proyek:**

   - Klik "Deploy".

5. **Verifikasi domain:**
   - Setelah deployment berhasil, Anda akan diberikan URL unik untuk proyek Anda.
   - Anda bisa mengkonfigurasi domain khusus melalui dashboard Vercel jika diperlukan.

### Alternatif Deployment: Netlify

1. **Buat akun di Netlify:**

   - Buka [Netlify](https://www.netlify.com/) dan login atau buat akun baru.
   - Klik "New site from Git".

2. **Hubungkan repositori GitHub ke Netlify:**

   - Pilih GitHub sebagai sumber.
   - Izinkan Netlify mengakses repositori GitHub Anda.
   - Pilih repositori yang ingin Anda deploy.

3. **Konfigurasi build di Netlify:**

   - **Build Command:** `npm run build`
   - **Publish Directory:** `build`

4. **Deploy proyek:**

   - Klik "Deploy site".

5. **Verifikasi domain:**
   - Setelah deployment berhasil, Anda akan diberikan URL unik untuk proyek Anda.
   - Anda bisa mengkonfigurasi domain khusus melalui dashboard Netlify jika diperlukan.

## Struktur Proyek

```
.
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── components
│   │   ├── About.js
│   │   ├── Contact.js
│   │   ├── Favorites.js
│   │   ├── Header.js
│   │   ├── Home.js
│   │   ├── Login.js
│   │   ├── NewsItem.js
│   │   ├── NewsList.js
│   │   └── SearchBar.js
│   ├── actions
│   │   ├── newsActions.js
│   ├── reducers
│   │   ├── index.js
│   │   ├── newsReducer.js
│   ├── store.js
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── reportWebVitals.js
│   ├── setupTests.js
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```
