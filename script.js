    // ===== DATA A, B, C (tidak berubah) =====
    const A = [
      ["A1",200,0,"Penilangan","Mengemudi tanpa helm"],
      ["A2",300,0,"Penilangan","Tidak memiliki SIM"],
      ["A3",400,0,"Penilangan","Kendaraan tanpa plat"],
      ["A4",600,0,"Impound 1 hari","Parkir sembarangan"],
      ["A5",700,0,"Impound 1 hari","Kendaraan di zona terlarang"],
      ["A6",800,0,"Impound 2 hari","Tidak membayar tol"],
      ["A7",900,0,"Impound 2 hari","Melawan arus jalan"],
      ["A8",950,0,"Impound 2 hari","Speeding / ngebut"],
      ["A9",600,0,"Impound 2 hari","Berkendara ugal-ugalan"],
      ["A10",750,0,"Impound 2 hari","Kabur saat razia"],
      ["A11",900,15,"Jail 15 bulan","Balapan liar"],
      ["A12",600,0,"Impound 2 hari","Truck di area keramaian"],
      ["A13",1000,0,"Impound 3 hari","Kendaraan di TKP peperangan"],
      ["A14",1300,0,"Impound 3 hari","Barang ilegal di kendaraan"],
      ["A15",1500,0,"Impound 5 hari","Senjata di kendaraan"],
      ["A16",1000,0,"Impound 4 hari","Menghambat arus lalu lintas"],
      ["A17",700,0,"Impound 4 hari","Menghambat kendaraan prioritas"],
    ];

    const B = [
      ["B1",500,0,"Sanksi Sosial","Tidak ada identitas/KTP"],
      ["B2",800,0,"Sanksi Sosial","Menyalahgunakan hotline"],
      ["B3",1200,2,"Jail 2 bulan","Keributan di tempat umum"],
      ["B4",1500,3,"Jail 3 bulan","Pencemaran nama baik warga"],
      ["B5",1600,4,"Jail 4 bulan","Penghinaan warga"],
      ["B6",1800,5,"Jail 5 bulan","Pencemaran nama baik instansi"],
      ["B7",2000,7,"Jail 7 bulan","Penghinaan instansi"],
      ["B8",2500,4,"Jail 4 bulan","Merusak fasilitas umum"],
      ["B9",3000,3,"Jail 3 bulan","Merusak aset pribadi"],
      ["B10",3500,2,"Jail 2 bulan","Kekerasan fisik"],
      ["B11",4000,5,"Jail 5 bulan","Penipuan"],
      ["B12",4500,8,"Jail 8 bulan","Pelecehan seksual"],
      ["B13",5000,5,"Jail 5 bulan","Memberi informasi palsu"],
      ["B14",5500,4,"Jail 4 bulan","Laporan palsu ke polisi"],
      ["B15",5000,5,"Jail 5 bulan","Bawa sajam/tumpul di umum"],
      ["B16",2000,3,"Jail 3 bulan","Kabur saat diberhentikan"],
      ["B17",6000,4,"Jail 4 bulan","Penyalahgunaan sajam/tumpul"],
      ["B18",5000,5,"Jail 5 bulan","Pemalakan/pungli"],
      ["B19",4000,5,"Jail 5 bulan","Perburuan ilegal satwa liar"],
      ["B20",4000,5,"Jail 5 bulan","Pembegalan (begal)"],
      ["B21",6000,4,"Jail 4 bulan + sita satwa","Menangkap/menjual satwa dilindungi"],
    ];

    const C = [
      ["C1", 8000,5,"Jail 5 bulan","Penganiayaan/pemukulan terhadap warga"],
      ["C2", 8000,5,"Jail 5 bulan","Melakukan pembegalan terhadap warga"],
      ["C3",10000,5,"Jail 5 bulan","Upaya penyuogokan kepada petugas"],
      ["C4", 8000,5,"Jail 5 bulan","Berada di zona merah/ilegal"],
      ["C5",5000,5,"Jail 5 bulan","Menyalahgunakan atribut kepolisian"],
      ["C6",4500,3,"Jail 3 bulan","Melakukan pemburuan ilegal (tanpa lisensi)"],
      ["C7", 5000,3,"Jail 3 bulan","Membawa minuman beralkohol (beer/whiskey)"],
      ["C8",6000,3,"Jail 3 bulan","Membawa narkoba/narkotika (marijuana/kanabis)"],
      ["C9",5000,4,"Jail 4 bulan","Membawa barang ilegal (kevlar, linggis, kunci letter T)"],
      ["C10",4000,5,"Jail 5 bulan","Membawa hewan yang dilindungi (hiu/penyu)"],
      ["C11",7000,5,"Jail 5 bulan","Kepemilikan barang ilegal (uranium ACD & uranium)"],
      ["C12",8000,5,"Jail 5 bulan","Membawa uang merah > $0 – $1.000"],
      ["C13",9000,6,"Jail 6 bulan","Membawa uang merah > $1.000 – $50.000"],
      ["C14",10000,8,"Jail 8 bulan","Membawa uang merah > $50.000 – $1.000.000"],
      ["C15",10000,5,"Jail 5 bulan","Pencucian uang merah"],
      ["C16",6000,5,"Jail 5 bulan","Pencurian kendaraan ilegal / car stealing"],
      ["C17",7000,5,"Jail 5 bulan","Melakukan proses narkoba dan narkotika"],
      ["C18",10000,15,"Jail 5 bulan","Melakukan tindakan kabur dari federal"],
      ["C19",15000,10,"Jail 10 bulan","Pengedaran barang ilegal (kevlar, marijuana, kanabis, uranium ACD/uranium)"],
      ["C20",8000,5,"Jail 5 bulan","Sengaja/tidak sengaja berada di TKP peperangan"],
      ["C21", 8000,5,"Jail 5 bulan","Upaya melawan/melarikan petugas kepolisian"],
    ];

    // ===== DATA D (BARU — dari foto) =====
    const D = [
      ["D1",15000,5,"Jail 5 bulan","Pengedaran senjata api ilegal"],
      ["D2", 5000, 5,"Jail 5 bulan","Kepemilikan senjata tajam dan tumpul"],
      ["D3",8000, 5,"Jail 5 bulan","Kepemilikan senjata api ilegal (laras pendek)"],
      ["D4",10000,8,"Jail 8 bulan","Kepemilikan senjata api ilegal (laras menengah)"],
      ["D5",12000,10,"Jail 10 bulan","Kepemilikan senjata api ilegal (laras panjang)"],
      ["D6",10000,15,"Jail 15 bulan","Memproduksi senjata api ilegal"],
      ["D7",10000,10,"Jail 10 bulan","Tidak memiliki lisensi senjata api resmi kepolisian"],
      ["D8",15000,10,"Jail 10 bulan","Melakukan penyanderaan kepada warga"],
      ["D9",20000,10,"Jail 10 bulan","Melakukan penyanderaan kepada petugas kepolisian"],
      ["D10",20000,10,"Jail 10 bulan","Melakukan penyanderaan kepada anggota instansi"],
      ["D11",15000,15,"Jail 15 bulan","Upaya pembunuhan kepada warga maupun petugas"],
      ["D12",10000,10,"Jail 10 bulan","Pendongoran terhadap warga"],
      ["D13",10000,10,"Jail 10 bulan","Pendongoran terhadap petugas kepolisian"],
      ["D14",10000,10,"Jail 10 bulan","Melakukan penembakan terhadap warga"],
      ["D15",15000,10,"Jail 10 bulan","Melakukan penembakan terhadap petugas kepolisian"],
      ["D16",10000, 5,"Jail 5 bulan","Perampokan warung bersenjata"],
      ["D17", 5000, 5,"Jail 5 bulan","Perperangan antar kelompok"],
      ["D18",20000,10,"Jail 10 bulan","Mencoba menjadi polisi gadungan"],
      ["D19",10000, 5,"Jail 5 bulan","Upaya penghilangan barang bukti"],
      ["D20",10000,10,"Jail 10 bulan","Perampokan warga maupun petugas/instansi"],
      ["D21",15000,10,"Jail 10 bulan","Mencoba untuk membantu kriminalisme"],
      ["D22",30000,15,"Jail 15 bulan","Melakukan perampokan bank besar"],
      ["D23",50000, 0,"Persidangan / Hukuman mati","Melakukan tindakan korupsi instansi"],
      ["D24",50000, 0,"Hukuman mati","Terorisme"],
    ];

    // ===== FORMAT =====
    const idrFmt = new Intl.NumberFormat('id-ID',{style:'currency',currency:'IDR',maximumFractionDigits:0});
    const usdFmt = new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',maximumFractionDigits:0});
    const $ = s=>document.querySelector(s);
    const state = { useIDR:false, rate:15500 };

    // ===== RENDER =====
    function renderTable(data, tbody){
      tbody.innerHTML = data.map(([kode,denda,bulan,hukuman,jenis])=>(
        `<tr data-kode="${kode}" data-jenis="${jenis.toLowerCase()}">
          <td><input type="checkbox" name="pasal" value="${kode}-${denda}-${bulan}-${hukuman}"></td>
          <td>${kode}</td>
          <td style="text-align:left">${jenis}</td>
          <td class="denda" data-denda="${denda}">${fmtMoney(denda)}</td>
          <td>${hukuman}</td>
        </tr>`
      )).join('');
    }

    function fmtMoney(val){ return state.useIDR ? idrFmt.format(val*state.rate) : usdFmt.format(val); }
    function updateMoneyCells(){
      document.querySelectorAll('.denda').forEach(td=>{
        const base = +td.getAttribute('data-denda')||0;
        td.textContent = fmtMoney(base);
      });
    }

    // ===== HITUNG =====
    function recalc(){
      const ceklis = document.querySelectorAll('input[name="pasal"]:checked');
      let totalDenda=0, totalBulan=0; const daftar=[]; const sanksiSet=new Set();
      ceklis.forEach(p=>{
        const [kode,denda,bulan,hukuman] = p.value.split('-');
        totalDenda += parseInt(denda,10);
        totalBulan += parseInt(bulan,10);
        daftar.push(kode); // hanya kode
        if(/impound|sosial|sita|hukuman mati|persidangan/i.test(hukuman)) sanksiSet.add(hukuman);
      });
      $('#totalDenda').textContent = fmtMoney(totalDenda);
      $('#totalBulan').textContent = `${totalBulan} bulan`;
      $('#sanksiLain').textContent = sanksiSet.size? Array.from(sanksiSet).join(', ') : '-';
      $('#daftarPasal').textContent = daftar.length? `${daftar.join(', ')}` : 'Pasal dikenakan: -';
    }

    function resetForm(){ document.querySelectorAll('input[name="pasal"]').forEach(chk=>chk.checked=false); recalc(); }
    function filterRows(input, tableId){
      const q = input.value.trim().toLowerCase();
      document.querySelectorAll(`#${tableId} tbody tr`).forEach(tr=>{
        const jenis = tr.getAttribute('data-jenis')||''; const kode = tr.getAttribute('data-kode')||'';
        tr.style.display = (!q || jenis.includes(q) || kode.toLowerCase().includes(q))? '' : 'none';
      });
    }
    function selectAll(prefix, val){
      document.querySelectorAll(`input[name="pasal"][value^="${prefix}"]`).forEach(chk=>{chk.checked=val});
      recalc();
    }

    // Global search function
    function filterAllTables(searchTerm) {
      const q = searchTerm.trim().toLowerCase();
      
      // Filter each table
      ['tableA', 'tableB', 'tableC', 'tableD'].forEach(tableId => {
        document.querySelectorAll(`#${tableId} tbody tr`).forEach(tr => {
          const jenis = tr.getAttribute('data-jenis') || '';
          const kode = tr.getAttribute('data-kode') || '';
          tr.style.display = (!q || jenis.includes(q) || kode.toLowerCase().includes(q)) ? '' : 'none';
        });
      });
      
      // Scroll to first table with results if search term is not empty
      if (q) {
        // Check each table in order for results
        const tables = ['tableA', 'tableB', 'tableC', 'tableD'];
        for (const tableId of tables) {
          const visibleRows = document.querySelectorAll(`#${tableId} tbody tr:not([style*="display: none"]):not([style*="display:none"])`);
          if (visibleRows.length > 0) {
            // Scroll to this table
            document.getElementById(tableId).scrollIntoView({ behavior: 'smooth', block: 'start' });
            return;
          }
        }
      }
    }

    // ===== BOOTSTRAP =====
    window.addEventListener('DOMContentLoaded',()=>{
      renderTable(A, document.querySelector('#tableA tbody'));
      renderTable(B, document.querySelector('#tableB tbody'));
      renderTable(C, document.querySelector('#tableC tbody'));
      renderTable(D, document.querySelector('#tableD tbody')); // BARU
      updateMoneyCells(); recalc();

      // tombol
      document.getElementById('hitungBtn').addEventListener('click', recalc);
      document.getElementById('resetBtn').addEventListener('click', resetForm);
      document.getElementById('salinBtn').addEventListener('click', ()=>{
        const txt = [
          `Total Denda: ${document.getElementById('totalDenda').textContent}`,
          `Total Penjara: ${document.getElementById('totalBulan').textContent}`,
          `Sanksi Non-Penjara: ${document.getElementById('sanksiLain').textContent}`,
          document.getElementById('daftarPasal').textContent
        ].join('\n');
        navigator.clipboard.writeText(txt).then(()=>{
          document.getElementById('salinBtn').textContent='✔️ Tersalin';
          setTimeout(()=>document.getElementById('salinBtn').textContent='Salin Hasil',1200);
        });
      });
      
      // Copy Denda button
      document.getElementById('copyDendaBtn').addEventListener('click', () => {
        const dendaText = document.getElementById('totalDenda').textContent;
        navigator.clipboard.writeText(dendaText).then(() => {
          // Show notification
          const script = document.createElement('script');
          script.src = 'kirim.js';
          script.onload = () => {
            showNotification('Denda berhasil disalin ke clipboard!', 'success');
          };
          document.head.appendChild(script);
        });
      });
      
      // Copy Penjara button
      document.getElementById('copyPenjaraBtn').addEventListener('click', () => {
        const penjaraText = document.getElementById('totalBulan').textContent;
        navigator.clipboard.writeText(penjaraText).then(() => {
          // Show notification
          const script = document.createElement('script');
          script.src = 'kirim.js';
          script.onload = () => {
            showNotification('Hukuman penjara berhasil disalin ke clipboard!', 'success');
          };
          document.head.appendChild(script);
        });
      });
      
      // Copy Pasal button
      document.getElementById('copyPasalBtn').addEventListener('click', () => {
        const pasalText = document.getElementById('daftarPasal').textContent;
        navigator.clipboard.writeText(pasalText).then(() => {
          // Show notification
          const script = document.createElement('script');
          script.src = 'kirim.js';
          script.onload = () => {
            showNotification('Daftar pasal berhasil disalin ke clipboard!', 'success');
          };
          document.head.appendChild(script);
        });
      });
      
      // Discord button
      document.getElementById('discordBtn').addEventListener('click', () => {
        // Show the modal
        document.getElementById('discordModal').style.display = 'block';
      });
      
      // Cancel Discord modal
      document.getElementById('cancelDiscord').addEventListener('click', () => {
        document.getElementById('discordModal').style.display = 'none';
      });
      
      // Send to Discord
      document.getElementById('sendDiscord').addEventListener('click', () => {
        // Get selected files
        const files = document.getElementById('fotoBukti').files;
        
        // Check if more than 3 files are selected
        if (files.length > 3) {
          // Use custom notification instead of alert
          const script = document.createElement('script');
          script.src = 'kirim.js';
          script.onload = () => {
            showNotification('Maksimal hanya 3 file yang dapat diunggah.', 'error');
          };
          document.head.appendChild(script);
          return;
        }
        
        // Import and use the Discord sending function
        const script = document.createElement('script');
        script.src = 'kirim.js';
        script.onload = () => {
          sendToDiscord({
            namaLengkap: document.getElementById('namaLengkap').value,
            jenisKelamin: document.getElementById('jenisKelamin').value,
            tanggalLahir: document.getElementById('tanggalLahir').value,
            pangkat: document.getElementById('pangkat').value,
            namaPelapor: document.getElementById('namaPelapor').value,
            divisi: document.getElementById('divisi').value,
            totalDenda: document.getElementById('totalDenda').textContent,
            totalBulan: document.getElementById('totalBulan').textContent,
            sanksiLain: document.getElementById('sanksiLain').textContent,
            daftarPasal: document.getElementById('daftarPasal').textContent,
            files: files
          });
        };
        document.head.appendChild(script);
      });
      
      // toggle IDR
      document.getElementById('idrToggle').addEventListener('change', (e)=>{
        state.useIDR = e.target.checked; updateMoneyCells(); recalc();
      });

      // filter
      document.getElementById('searchA').addEventListener('input', (e)=>filterRows(e.target,'tableA'));
      document.getElementById('searchB').addEventListener('input', (e)=>filterRows(e.target,'tableB'));
      document.getElementById('searchC').addEventListener('input', (e)=>filterRows(e.target,'tableC'));
      document.getElementById('searchD').addEventListener('input', (e)=>filterRows(e.target,'tableD'));

      // pilih/hapus semua
      document.getElementById('pilihSemuaA').addEventListener('click',()=>selectAll('A',true));
      document.getElementById('hapusSemuaA').addEventListener('click',()=>selectAll('A',false));
      document.getElementById('pilihSemuaB').addEventListener('click',()=>selectAll('B',true));
      document.getElementById('hapusSemuaB').addEventListener('click',()=>selectAll('B',false));
      document.getElementById('pilihSemuaC').addEventListener('click',()=>selectAll('C',true));
      document.getElementById('hapusSemuaC').addEventListener('click',()=>selectAll('C',false));
      document.getElementById('pilihSemuaD').addEventListener('click',()=>selectAll('D',true));
      document.getElementById('hapusSemuaD').addEventListener('click',()=>selectAll('D',false));

      // hitung otomatis saat centang
      document.addEventListener('change', (e)=>{ if(e.target && e.target.name==='pasal'){ recalc(); }});
      
      // Global search functionality
      const globalSearch = document.getElementById('globalSearch');
      const clearSearch = document.getElementById('clearSearch');
      
      globalSearch.addEventListener('input', (e) => {
        const searchTerm = e.target.value.trim().toLowerCase();
        filterAllTables(searchTerm);
        // Show/hide clear button based on search input
        clearSearch.style.display = searchTerm ? 'block' : 'none';
      });
      
      // Clear search functionality
      clearSearch.addEventListener('click', () => {
        globalSearch.value = '';
        filterAllTables('');
        clearSearch.style.display = 'none';
        globalSearch.focus();
      });
      
      // Global search submission (Enter key)
      document.getElementById('globalSearch').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          const searchTerm = e.target.value.trim().toLowerCase();
          if (searchTerm) {
            // Find the first table with matching results
            setTimeout(() => {
              const tables = ['tableA', 'tableB', 'tableC', 'tableD'];
              for (const tableId of tables) {
                const visibleRows = document.querySelectorAll(`#${tableId} tbody tr:not([style*="display: none"]):not([style*="display:none"])`);
                if (visibleRows.length > 0) {
                  // Scroll to this table
                  document.getElementById(tableId).scrollIntoView({ behavior: 'smooth', block: 'start' });
                  // Highlight the first matching row
                  if (visibleRows[0]) {
                    visibleRows[0].classList.add('search-highlight');
                    setTimeout(() => {
                      visibleRows[0].classList.remove('search-highlight');
                    }, 2000);
                  }
                  break;
                }
              }
            }, 50);
          }
        }
      });
      
      // Floating menu functionality
      const menuToggle = document.getElementById('menuToggle');
      const menuContent = document.getElementById('menuContent');
      const backToTop = document.getElementById('backToTop');
      
      // Toggle menu visibility
      if (menuToggle && menuContent) {
        menuToggle.addEventListener('click', function(e) {
          e.stopPropagation();
          menuContent.classList.toggle('show');
        });
      }
      
      // Close menu when clicking outside
      document.addEventListener('click', function(e) {
        if (menuContent && menuToggle && 
            !menuToggle.contains(e.target) && 
            !menuContent.contains(e.target)) {
          menuContent.classList.remove('show');
        }
      });
      
      // Back to top functionality
      if (backToTop) {
        backToTop.addEventListener('click', function(e) {
          e.preventDefault();
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
          if (menuContent) {
            menuContent.classList.remove('show');
          }
        });
      }
      
      // Close menu after clicking a menu item (except back to top)
      const menuItems = document.querySelectorAll('.menu-item:not(#backToTop)');
      menuItems.forEach(item => {
        item.addEventListener('click', function() {
          if (menuContent) {
            menuContent.classList.remove('show');
          }
        });
      });
    });
