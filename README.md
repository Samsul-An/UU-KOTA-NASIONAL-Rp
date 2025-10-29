# Kalkulator Denda — Paket Vercel (Inline Foto di Discord)

Paket ini siap dideploy ke **Vercel**. Foto yang diunggah user akan tampil **inline** di Discord (bukan sekadar file) menggunakan `embeds` dengan `attachment://<nama-file>`.

## Struktur
```
/api/discord.js   -> Proxy Edge Function (menyembunyikan DISCORD_WEBHOOK_URL)
/index.html       -> (gunakan file kamu)
/style.css        -> (gunakan file kamu)
/script.js        -> (gunakan file kamu)
/kirim.js         -> Diperbarui: embeds + inline image + WIB time
/vercel.json      -> Force runtime Edge untuk folder api
```

> **Catatan:** Silakan salin `index.html`, `style.css`, `script.js` milik kamu ke folder ini **sebelum** deploy, bila belum ada.

## ENV yang diperlukan (Vercel)
- `DISCORD_WEBHOOK_URL` → URL webhook Discord milikmu.

## Cara deploy (GitHub)
1. Push folder ini ke repo GitHub.
2. Vercel → **Add New Project** → **Import** repo.
3. Tambahkan **Environment Variable** `DISCORD_WEBHOOK_URL`.
4. **Deploy**. Endpoint proxy: `/api/discord`.

## Cara deploy (upload langsung)
1. Zip folder proyek, kemudian **Import** di Vercel.
2. Tambahkan ENV `DISCORD_WEBHOOK_URL`.
3. **Deploy**.

## Cara pakai di front-end
Pastikan kamu menyertakan `kirim.js` di halaman. Panggil:
```html
<script src="kirim.js"></script>
<script>
  // Contoh minimal
  const data = {
    namaLengkap: 'Ujang',
    jenisKelamin: 'Laki-laki',
    tanggalLahir: '01-01-1990',
    daftarPasal: 'A1, B5',
    totalDenda: 'Rp 5.000.000',
    totalBulan: '12 Bulan',
    sanksiLain: '-',
    pangkat: 'Brigadir',
    namaPelapor: 'Asep',
    divisi: 'RESKRIM',
    lokasi: 'Federal',
    files: document.getElementById('uploadFoto')?.files ? Array.from(document.getElementById('uploadFoto').files) : []
  };
  // Kirim
  window.kirimKeDiscord(data);
</script>
```

> Bila proyekmu sudah punya alur dan elemen berbeda, cukup panggil `window.kirimKeDiscord({...})` dengan properti yang tersedia di data-mu.

## Catatan Teknis
- Maksimal 3 foto diteruskan sebagai `embeds` dan `files[0..]` agar tampil inline.
- File non-gambar tetap terkirim sebagai lampiran, namun tidak akan dipasang sebagai `image` di embed.
- Waktu pesan memakai zona `Asia/Jakarta` + label **WIB**.
