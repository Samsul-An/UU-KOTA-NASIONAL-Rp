// kirim.js — versi inline image embeds (Discord will show images preview)
// Endpoint diset ke proxy aman di Vercel: /api/discord

(function () {
  const webhookURL = '/api/discord'; // proxy aman

  // Fallback notifikasi sederhana jika showNotification belum ada
  function notify(msg, type='info') {
    if (typeof window.showNotification === 'function') {
      window.showNotification(msg, type);
    } else {
      console.log(`[${type.toUpperCase()}] ${msg}`);
      alert(msg);
    }
  }

  function formatNowWIB() {
    try {
      return new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' }) + ' WIB';
    } catch (e) {
      return new Date().toLocaleString('id-ID') + ' WIB';
    }
  }

  // Util: build default message text; boleh disesuaikan dengan struktur datamu
  function buildMessage(data) {
    const formattedDateTime = formatNowWIB();
    const lokasi = data?.lokasi || 'Federal';
    const rangkumanSanksi = data?.sanksiLain || '-';

    return [
      '<@&1375361166590873660>',
      '',
      '**DATA DIRI SUSPEK**',
      '',
      '**( I )**',
      `Nama Tersangka : ${data?.namaLengkap || '-'}`,
      `Jenis Kelamin  : ${data?.jenisKelamin || '-'}`,
      `Tanggal Lahir  : ${data?.tanggalLahir || '-'}`,
      '',
      '**( II )**',
      `Tanggal/Waktu Penangkapan : ${formattedDateTime}`,
      `Lokasi Penangkapan         : ${lokasi}`,
      `Pasal                      : ${data?.daftarPasal || '-'}`,
      '',
      '**RINGKASAN**',
      `Total Denda        : ${data?.totalDenda || '-'}`,
      `Total Penjara      : ${data?.totalBulan || '-'}`,
      `Sanksi Non-Penjara : ${rangkumanSanksi}`,
      '',
      `${data?.pangkat || 'Pangkat'} - ${data?.namaPelapor || 'Nama Petugas'}`,
      `${data?.divisi || 'DIVISI'}`
    ].join('\n');
  }

  // Fungsi utama untuk mengirim ke Discord
  async function sendToDiscord(data) {
    try {
      const files = (data && Array.isArray(data.files)) ? data.files : [];
      const message = buildMessage(data);

      // Jika ada file gambar, kirim sebagai embeds agar tampil inline
      if (files.length) {
        const maxFiles = Math.min(files.length, 3);
        const embeds = [];
        for (let i = 0; i < maxFiles; i++) {
          const f = files[i];
          // Hanya render inline jika tipenya gambar umum
          const typeOk = /image\/(png|jpe?g|gif|webp)/i.test(f.type) || /\.(png|jpe?g|gif|webp)$/i.test(f.name);
          if (typeOk) {
            embeds.push({
              description: `Foto ${i + 1}`,
              image: { url: `attachment://${f.name}` }
            });
          }
        }

        const formData = new FormData();
        formData.append('payload_json', JSON.stringify({
          content: message,
          username: 'Kalkulator Denda',
          embeds
        }));

        for (let i = 0; i < Math.min(files.length, 3); i++) {
          formData.append(`files[${i}]`, files[i], files[i].name);
        }

        const r = await fetch(webhookURL, { method: 'POST', body: formData });
        if (!r.ok) throw new Error(await r.text());
        notify('Berhasil mengirim ke Discord (dengan foto inline).', 'success');
      } else {
        // Tanpa file: kirim biasa
        const formData = new FormData();
        formData.append('payload_json', JSON.stringify({
          content: message,
          username: 'Kalkulator Denda'
        }));

        const r = await fetch(webhookURL, { method: 'POST', body: formData });
        if (!r.ok) throw new Error(await r.text());
        notify('Berhasil mengirim ke Discord.', 'success');
      }

      // Reset input file (opsional)
      const fileInput = document.querySelector('#uploadFoto');
      if (fileInput) fileInput.value = '';
    } catch (err) {
      notify('Gagal kirim: ' + (err?.message || err), 'error');
    }
  }

  // Ekspos ke global agar bisa dipanggil dari script lain
  window.kirimKeDiscord = sendToDiscord;
})();
