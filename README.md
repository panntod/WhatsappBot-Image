# WhatsApp Bot Image 🌐

## Deskripsi

Dalam repo ini, membuat sebuah api yang langsung terhubung dengan whatsapp. bisa digunakan untuk banyak hal, mulai dari mendecrypt gambar sekali lihat, membuat gambar otomatis menjadi stiker, mengirim pesan secara otomatis, membalas pesan otomatis dan lain sebagai nya. Namun pada kali ini saya akan mengimplementasikan pembuatan mendecrypt gambar sekali lihat, bagaimana caranya? beginilah cara nya!

## Fitur

- Decrypt Gambar 📷
- Akses Whatsapp Api 📨
- Bot Api 🤖
- @open-wa/wa-automate 

## Cara Membuat Aplikasi

### Langkah 1:
Anda bisa membuat aplikasi ini dengan hardcore ( menulis sendiri ) karena code nya tergolong singkat dan mudah dipahami, atau anda bisa menjalankan perintah ini untuk meng-clone repositori ini
Jalankan perintah:
```
git clone https://github.com/panntod/WhatsappBot-Image
```

### Langkah 2: 
Instalasi dependencies, pastikan anda telah menginstal berbagai dependesi yang dibutuhkan, kalau anda meng-clone repositori ini anda bisa menjalankan perintah:
```
npm i
# OR
pnpm i
# OR
yarn add
```

### Langkah 3: 
Anda bisa menjalankan aplikasi dengan perintah:
```
npm start
```

### Langkah 4:
Jika aplikasi sudah berjalan, maka akan muncul sebuah qr ( barcode ) anda bisa meng-scan nya menggunakan whatsapp di pengaturan/ tautkan perangkat

### Langkah 5: 
Tunggu sampai muncul tulisan `bot siap dipakai`, dan kirim pesan anda dengan kode yang telah anda buat. disini saya menggunakan `.open`, otomatis bot akan mengambil gambar dan menyimpan nya di localstorage anda, dan mengirim secara otomatis
