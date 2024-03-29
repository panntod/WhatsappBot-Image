# WhatsApp Bot Image 🌐

## Deskripsi

Dalam repo ini, membuat sebuah bot yang langsung terhubung dengan whatsapp. bisa digunakan untuk banyak hal, mulai dari mendecrypt gambar sekali lihat, membuat gambar otomatis menjadi stiker, mengirim pesan secara otomatis, membalas pesan otomatis dan lain sebagai nya. Namun pada kali ini saya akan mengimplementasikan pembuatan mendecrypt gambar sekali lihat, bagaimana caranya? beginilah cara nya!

## Fitur

- Decrypt Gambar 📷
- Akses Whatsapp Api 📨
- Bot Api 🤖
- @open-wa/wa-automate 🔃

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

## Kustomisasi: 
1. Anda bisa merubah perintah untuk menjalankan bot:
  ```js
  if (
      message.fromMe === true && // Memastikan hanya pesan dari anda yang akan diproses
      message.body.toLowerCase() === "customable" && // Anda bisa merubah ini sesuai dengan kebutuhan anda
      message.quotedMsg
    ){
        //Code TODO Here
    }
  ```

2. Anda juga bisa merubah format file yang akan disimpan di local anda
  ```js
  if (quotedMessage.mimetype) {
        const fileName = `Saved-${Date.now()}.${mime.extension(quotedMessage.mimetype)}`; // Anda bisa merubah ini sesuai dengan kebutuhan anda
  }
  ```

3. Anda juga dapat merubah folder yang akan digunakan untuk menyimpan file di local anda
  ```js
  const imageFolderPath = path.join(__dirname, 'customable'); // Anda dapat merubah nama folder yang ingin digunakan untuk menyimpan saved foto

   if (!fs.existsSync(imageFolderPath)) {
      fs.mkdirSync(imageFolderPath); // Memastikan bahwa folder sudah ada, jika tidak ditemukan maka akan tergenerate secara otomatis
  }
  ```

4. Anda juga dapat merubah comment dari foto yang akan dikirim oleh bot
  ```js
   await client.sendImage(
          message.chatId,
          imageBase64,
          fileName,
   "customable" // Isi sesuai dengan kebutuhan anda
  );
  ```

<div align="center">
  <h2>⚠️DISCLAIMER⚠️</h2>
</div>

Aplikasi ini melibatkan pihak ketiga yang dikembangkan oleh [Mohammed Shah](https://github.com/smashah) di Amerika, dengan lisensi [Extension of the Hippocratic License - an Ethical Source license](https://ethicalsource.dev) dan [the Do Not Harm License](https://github.com/raisely/NoHarm). Segala bentuk tindakan kriminal (sabotase, pencurian data, phishing, dll.) berada di luar tanggung jawab kami. Gunakan bot ini sesuai dengan ketentuan WhatsApp yang berlaku, karena penggunaan sembarangan dapat menyebabkan nomor Anda terkena banned❗. Pastikan memutus koneksi perangkat ketika tidak digunakan. Segala tindakan kelalaian adalah tanggung jawab pribadi Anda; informasi lebih lanjut dapat ditemukan di [Dokumentasi Resmi OpenWa](https://docs.openwa.dev/).
