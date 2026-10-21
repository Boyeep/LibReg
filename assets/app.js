(() => {
  'use strict';
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const paths = {
    book:'M12 7c-3-2-6-3-10-2v15c4-1 7 0 10 2m0-15c3-2 6-3 10-2v15c-4-1-7 0-10 2V7z',
    arrow:'M5 12h14m-6-6 6 6-6 6', chevron:'m9 5 7 7-7 7',
    users:'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2m18 0v-2a4 4 0 0 0-3-3.87M13 3.13a4 4 0 0 1 0 7.75M13 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0',
    user:'M20 21v-2a7 7 0 0 0-14 0v2M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0',
    computer:'M3 3h18v13H3zM8 21h8m-4-5v5', clock:'M12 8v4l3 2M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0',
    check:'m5 12 4 4L19 6', shield:'M12 22s9-4 9-12V4l-9-3-9 3v6c0 8 9 12 9 12m-4-11 3 3 5-5',
    search:'m21 21-5-5M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0', menu:'M3 6h18M3 12h18M3 18h18',
    home:'m3 10 9-7 9 7v11H3V10m6 11v-8h6v8', info:'M12 11v6m0-10h.01M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0',
    plus:'M12 5v14M5 12h14', edit:'m16 3 5 5L9 20l-6 1 1-6L16 3m-2 2 5 5',
    eye:'M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12m13 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0',
    trash:'M3 6h18M9 6V3h6v3M5 6l1 15h12l1-15M10 10v7m4-7v7',
    logout:'M9 21H3V3h6m7 14 5-5-5-5m-9 5h14', login:'M15 3h6v18h-6M10 7l5 5-5 5M3 12h12',
    cap:'m2 8 10-5 10 5-10 5L2 8m4 2v7c4 3 8 3 12 0v-7m4-2v9',
    briefcase:'M3 7h18v14H3zM8 7V3h8v4M3 12c6 3 12 3 18 0m-9 1v3',
    mail:'M3 5h18v14H3zM3 5l9 8 9-8', phone:'M22 16.9v3a2 2 0 0 1-2.2 2 20 20 0 0 1-17.7-17.7A2 2 0 0 1 4.1 2h3l1 5-2 2a16 16 0 0 0 9 9l2-2 4.9.9z',
    pin:'M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0m-5 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0',
    lock:'M5 10h14v11H5zM8 10V7a4 4 0 0 1 8 0v3', download:'M12 3v12m-5-5 5 5 5-5M3 16v5h18v-5',
    wifi:'M2 8a16 16 0 0 1 20 0M5 12a11 11 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0M12 20h.01',
    heart:'M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8',
    file:'M14 2H4v20h16V8l-6-6m0 0v6h6M8 13h8M8 17h6', printer:'M6 9V3h12v6M6 18H3V9h18v9h-3M6 14h12v8H6z', close:'m6 6 12 12M6 18 18 6'
  };
  const icon = name => `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="${paths[name] || paths.book}"/></svg>`;
  const escape = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const brand = `${icon('book')} <span>LibraryReg</span>`;
  const page = document.body.dataset.page;
  const navItems = [['index.html','Beranda','home'],['tentang.html','Tentang','about'],['layanan.html','Layanan','services'],['anggota.html','Daftar Anggota','members'],['pendaftaran.html','Pendaftaran','register']];
  const nav = $('#site-header');
  if (nav) nav.innerHTML = `<nav class="navbar navbar-expand-lg navbar-dark bg-primary" aria-label="Navigasi utama"><div class="container"><a class="navbar-brand d-flex align-items-center gap-2" href="index.html" aria-label="LibraryReg, beranda">${brand}</a><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav" aria-controls="main-nav" aria-expanded="false" aria-label="Buka menu navigasi"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="main-nav"><ul class="navbar-nav ms-auto">${navItems.map(([url,label,key])=>`<li class="nav-item"><a class="nav-link ${page===key?'active':''}" ${page===key?'aria-current="page"':''} href="${url}">${label}</a></li>`).join('')}</ul>${page==='members'?'<button class="btn btn-light btn-sm ms-lg-3" id="logout">Keluar</button>':'<a href="login.html" class="btn btn-light btn-sm ms-lg-3">Login Petugas</a>'}</div></div></nav>`;
  const footer = $('#site-footer');
  if (footer) footer.innerHTML = `<footer class="site-footer"><div class="container"><div class="row g-3"><div class="col-md-4"><h2 class="h6">LibraryReg</h2><p>Aplikasi Pendaftaran Anggota Perpustakaan.<br>Tugas Pemrograman Web.</p></div><div class="col-md-4"><h2 class="h6">Kontak</h2><p>Gedung Perpustakaan, Kampus Utama<br>perpustakaan@universitas.example<br>(021) 555 0123</p></div><div class="col-md-4"><h2 class="h6">Jam layanan</h2><p>Senin–Jumat: 08.00–16.00 WIB<br>Sabtu, Minggu, dan hari libur: tutup.</p></div></div><div class="footer-note">© ${new Date().getFullYear()} LibraryReg. Profil dan kontak merupakan contoh untuk tugas.</div></div></footer>`;
  $$('[data-icon]').forEach(el => el.innerHTML = icon(el.dataset.icon));
  const toastHost = document.createElement('div');
  toastHost.className = 'toast-container position-fixed bottom-0 end-0 p-3';
  toastHost.setAttribute('aria-live','polite');
  document.body.appendChild(toastHost);
  function notify(message, error = false) {
    $$('.toast',toastHost).forEach(el=>{bootstrap.Toast.getInstance(el)?.dispose();el.remove();});
    const toast = document.createElement('div');
    toast.className = `toast ${error?'error':''}`;
    toast.setAttribute('role',error?'alert':'status');
    toast.innerHTML = `<div class="toast-body">${icon(error?'info':'check')}<span class="flex-grow-1">${escape(message)}</span><button type="button" class="btn-close ms-2" data-bs-dismiss="toast" aria-label="Tutup notifikasi"></button></div>`;
    toastHost.appendChild(toast);
    const instance = new bootstrap.Toast(toast,{delay:5500});
    toast.addEventListener('hidden.bs.toast',()=>{instance.dispose();toast.remove();});
    instance.show();
  }
  const STORE_KEY = 'libraryreg.members.v1';
  const SESSION_KEY = 'libraryreg.staff.demo';
  const TYPES = ['Mahasiswa','Dosen','Tenaga Kependidikan'];
  const normalizeNumber = value => String(value).trim().replace(/\s/g,'').toUpperCase();
  let storageProblem = '';
  function readMembers() {
    try {
      const raw = localStorage.getItem(STORE_KEY);
      if (raw === null) { storageProblem = ''; return []; }
      const data = JSON.parse(raw);
      if (!Array.isArray(data) || data.some(m => !m || ['id','name','number','program','address','phone','email','type','createdAt'].some(k=>typeof m[k] !== 'string') || !TYPES.includes(m.type))) throw new Error('format');
      storageProblem = '';
      return data;
    } catch {
      storageProblem = 'Data browser tidak dapat dibaca. Periksa izin penyimpanan atau data localStorage. Data lama tidak ditimpa.';
      return [];
    }
  }
  function saveMembers(members) {
    if (storageProblem) { notify(storageProblem,true); return false; }
    try { localStorage.setItem(STORE_KEY,JSON.stringify(members)); return true; }
    catch { notify('Data belum tersimpan. Penyimpanan browser tidak tersedia atau penuh.',true); return false; }
  }
  function isStaff() { try { return sessionStorage.getItem(SESSION_KEY)==='active'; } catch { return false; } }
  function id() { return globalThis.crypto?.randomUUID?.() || `member-${Date.now()}-${Math.random().toString(36).slice(2)}`; }
  const memberNumber = m => `LR-${new Date(m.createdAt).getFullYear()}-${m.id.replace(/[^a-z0-9]/gi,'').slice(-6).toUpperCase()}`;
  const dateLabel = value => new Date(value).toLocaleDateString('id-ID',{day:'numeric',month:'short',year:'numeric'});
  const initials = value => value.trim().split(/\s+/).slice(0,2).map(s=>s[0]).join('').toUpperCase();
  function fieldError(field, message) {
    field.classList.toggle('is-invalid',Boolean(message));
    field.setAttribute('aria-invalid',message?'true':'false');
    const feedback = $(`#${field.id}-error`);
    if (feedback) feedback.textContent = message;
    return !message;
  }
  function validateField(field, members, excludeId) {
    const value = field.value.trim();
    let error = '';
    if (!value) error = 'Kolom ini wajib diisi.';
    else if (field.name === 'name' && value.length < 3) error = 'Nama lengkap minimal 3 karakter.';
    else if (field.name === 'number') {
      if (!/^[A-Za-z0-9][A-Za-z0-9 .\/-]{2,29}$/.test(value)) error = 'Nomor induk 3–30 karakter: huruf, angka, titik, garis miring, atau tanda hubung.';
      else if (members.some(m=> m.id!==excludeId && normalizeNumber(m.number)===normalizeNumber(value))) error = 'NIM/NIP sudah terdaftar. Gunakan nomor induk yang berbeda.';
    } else if (field.name === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) error = 'Masukkan alamat email yang valid, misalnya nama@kampus.ac.id.';
    else if (field.name === 'phone' && !/^\+?[\d\s()-]{8,20}$/.test(value)) error = 'Gunakan nomor telepon 8–15 digit, misalnya 081234567890.';
    else if (field.name === 'phone' && (value.replace(/\D/g,'').length < 8 || value.replace(/\D/g,'').length > 15)) error = 'Nomor telepon harus terdiri dari 8–15 digit.';
    else if (field.name === 'address' && value.length < 8) error = 'Alamat minimal 8 karakter agar cukup jelas.';
    else if (field.name === 'program' && value.length < 2) error = 'Masukkan program studi atau unit kerja Anda.';
    else if (field.name === 'type' && !TYPES.includes(value)) error = 'Pilih jenis keanggotaan yang tersedia.';
    return fieldError(field,error);
  }
  function attachValidation(form, excludeId = null) {
    $$('[data-validate]',form).forEach(field=> {
      field.addEventListener('blur',()=>validateField(field,readMembers(),typeof excludeId==='function'?excludeId():excludeId));
      field.addEventListener('input',()=>{ if (field.classList.contains('is-invalid')) validateField(field,readMembers(),typeof excludeId==='function'?excludeId():excludeId); });
      if (field.tagName === 'SELECT') field.addEventListener('change',()=>validateField(field,readMembers(),typeof excludeId==='function'?excludeId():excludeId));
    });
  }
  function validateForm(form, members, excludeId = null) {
    const fields = $$('[data-validate]',form);
    const valid = fields.map(field=>validateField(field,members,excludeId)).every(Boolean);
    if (!valid) { $('.is-invalid',form)?.focus(); notify('Periksa kembali kolom yang ditandai.',true); }
    return valid;
  }
  function formData(form) {
    const data = Object.fromEntries(new FormData(form));
    return Object.fromEntries(['name','number','program','address','phone','email','type'].map(k=>[k,k==='number'?normalizeNumber(data[k]):String(data[k]||'').trim()]));
  }
  function cardMarkup(m) {
    return `<div class="member-card"><div class="card-brand"><span>${icon('book')} LibraryReg.</span><span>KARTU ANGGOTA DEMO</span></div><div class="card-name wrap-anywhere">${escape(m.name)}</div><div class="card-id">${escape(m.number)} · ${escape(m.type)}</div><div class="card-bottom"><span>${escape(memberNumber(m))}</span><span>${escape(m.program)}</span></div></div>`;
  }
  function printCard(m) {
    $('#print-area')?.remove();
    const area = document.createElement('div'); area.id='print-area'; area.hidden=true;
    area.innerHTML = `${cardMarkup(m)}<p>Kartu simulasi untuk proyek pembelajaran. Bukan kartu resmi perpustakaan.<br>Terdaftar ${escape(dateLabel(m.createdAt))}.</p>`;
    document.body.appendChild(area); window.print();
  }
  if (page === 'register') {
    const form = $('#registration-form');
    attachValidation(form);
    form.addEventListener('reset',()=>{ $$('[data-validate]',form).forEach(field=>fieldError(field,'')); });
    form.addEventListener('submit',event=> {
      event.preventDefault();
      const members = readMembers();
      if (!validateForm(form,members)) return;
      const member = {...formData(form),id:id(),createdAt:new Date().toISOString(),isDemo:false};
      if (!saveMembers([...members,member])) return;
      $('#registration-content').hidden=true;
      const success = $('#registration-success'); success.hidden=false;
      success.innerHTML = `<div class="success-panel"><div class="alert alert-success">Pendaftaran berhasil.</div><h2 tabindex="-1" id="success-title">Selamat datang, ${escape(member.name.split(' ')[0])}!</h2><p>Data anggota sudah disimpan. Berikut kartu anggota sementara Anda.</p>${cardMarkup(member)}<p class="print-card-note">Simpan atau cetak kartu melalui dialog cetak browser.</p><div class="d-flex gap-2 justify-content-center"><button class="btn btn-primary" id="print-card">${icon('printer')} Cetak kartu</button><a class="btn btn-light" href="index.html">Kembali ke beranda</a></div><button id="register-again" class="btn btn-link mt-3">Daftarkan anggota lain ${icon('arrow')}</button></div>`;
      $('#success-title').focus();
      $('#print-card').addEventListener('click',()=>printCard(member));
      $('#register-again').addEventListener('click',()=>{form.reset();success.hidden=true;$('#registration-content').hidden=false;$('#name').focus();});
      notify('Pendaftaran berhasil. Data anggota tersimpan.');
    });
  }
  if (page === 'login') {
    const form = $('#login-form');
    $('#toggle-password').addEventListener('click',event=> {
      const field = $('#password'); const visible = field.type==='password'; field.type = visible?'text':'password';
      event.currentTarget.setAttribute('aria-label',visible?'Sembunyikan password':'Tampilkan password');
      event.currentTarget.setAttribute('aria-pressed',String(visible));
    });
    form.addEventListener('submit',event=> {
      event.preventDefault();
      const email = $('#login-email'), password = $('#password');
      const validEmail = fieldError(email,email.value.trim().toLowerCase() === 'petugas@libraryreg.demo'?'':'Gunakan email demo petugas@libraryreg.demo.');
      const validPassword = fieldError(password,password.value === 'library123'?'':'Gunakan password demo library123.');
      if (!validEmail || !validPassword) { $('.is-invalid',form)?.focus(); return; }
      try { sessionStorage.setItem(SESSION_KEY,'active'); window.location.href='anggota.html'; }
      catch { notify('Sesi demo tidak dapat disimpan. Aktifkan penyimpanan browser.',true); }
    });
    if (new URLSearchParams(location.search).get('next')==='anggota') $('#login-context').hidden=false;
  }
  if (page === 'members') {
    if (!isStaff()) { location.replace('login.html?next=anggota'); return; }
    document.body.hidden = false;
    $('#logout').addEventListener('click',()=>{try{sessionStorage.removeItem(SESSION_KEY);}catch{} location.href='login.html';});
    let currentPage=1, editingId=null, deletingId=null;
    const pageSize=6;
    const detailsModal = new bootstrap.Modal($('#detail-modal'));
    const editModal = new bootstrap.Modal($('#edit-modal'));
    const deleteModal = new bootstrap.Modal($('#delete-modal'));
    const editForm = $('#edit-form');
    attachValidation(editForm,()=>editingId);
    function render() {
      const members=readMembers();
      $('#storage-error').hidden=!storageProblem;
      $('#storage-error').textContent=storageProblem;
      $('#stat-total').textContent=members.length;
      $('#stat-student').textContent=members.filter(m=>m.type==='Mahasiswa').length;
      $('#stat-lecturer').textContent=members.filter(m=>m.type==='Dosen').length;
      $('#stat-staff').textContent=members.filter(m=>m.type==='Tenaga Kependidikan').length;
      const query=$('#member-search').value.trim().toLocaleLowerCase('id');
      const type=$('#type-filter').value;
      const sort=$('#sort-filter').value;
      const filtered=members.filter(m=>(!type||m.type===type)&&(!query||m.name.toLocaleLowerCase('id').includes(query)||normalizeNumber(m.number).includes(normalizeNumber(query))));
      filtered.sort((a,b)=>sort==='name'?a.name.localeCompare(b.name,'id'):new Date(b.createdAt)-new Date(a.createdAt));
      const pages=Math.max(1,Math.ceil(filtered.length/pageSize)); currentPage=Math.min(currentPage,pages);
      const shown=filtered.slice((currentPage-1)*pageSize,currentPage*pageSize);
      $('#table-body').innerHTML=shown.map(m=>`<tr><td>${escape(m.name)}${m.isDemo?'<small class="d-block text-muted">Data contoh</small>':''}</td><td>${escape(m.number)}</td><td>${escape(m.program)}</td><td>${escape(m.type)}</td><td>${escape(dateLabel(m.createdAt))}</td><td><div class="table-actions"><button class="btn btn-sm btn-outline-primary" data-action="detail" data-id="${escape(m.id)}" aria-label="Lihat detail ${escape(m.name)}">Detail</button><button class="btn btn-sm btn-outline-secondary" data-action="edit" data-id="${escape(m.id)}" aria-label="Edit ${escape(m.name)}">Edit</button><button class="btn btn-sm btn-outline-danger" data-action="delete" data-id="${escape(m.id)}" aria-label="Hapus ${escape(m.name)}">Hapus</button></div></td></tr>`).join('');
      $('#empty-state').hidden=filtered.length>0;
      $('#empty-title').textContent=members.length?'Anggota tidak ditemukan':'Belum ada anggota terdaftar';
      $('#empty-description').textContent=members.length?'Coba kata kunci lain atau ubah filter jenis keanggotaan.':'Tambahkan anggota pertama atau muat data contoh untuk mencoba pengelolaan.';
      $('#result-count').textContent=`${filtered.length?((currentPage-1)*pageSize+1):0}–${Math.min(currentPage*pageSize,filtered.length)} dari ${filtered.length} anggota${query||type?' (hasil filter)':''}`;
      $('#page-controls').innerHTML=`<button class="page-button" data-page="${currentPage-1}" ${currentPage===1?'disabled':''} aria-label="Halaman sebelumnya">‹</button>${Array.from({length:pages},(_,i)=>i+1).filter(p=>Math.abs(p-currentPage)<2||p===1||p===pages).map((p,i,a)=>`${i&&p>a[i-1]+1?'<span aria-hidden="true">…</span>':''}<button class="page-button ${p===currentPage?'active':''}" data-page="${p}" ${p===currentPage?'aria-current="page"':''} aria-label="Halaman ${p}">${p}</button>`).join('')}<button class="page-button" data-page="${currentPage+1}" ${currentPage===pages?'disabled':''} aria-label="Halaman berikutnya">›</button>`;
      $('#demo-button').hidden=members.some(m=>m.isDemo);
      $('#demo-banner').hidden=!members.some(m=>m.isDemo);
    }
    ['#member-search','#type-filter','#sort-filter'].forEach(sel=>$(sel).addEventListener(sel==='#member-search'?'input':'change',()=>{currentPage=1;render();}));
    $('#page-controls').addEventListener('click',e=>{const b=e.target.closest('[data-page]');if(b&&!b.disabled){currentPage=Number(b.dataset.page);render();}});
    $('#table-body').addEventListener('click',e=> {
      const button=e.target.closest('[data-action]');if(!button)return;
      const member=readMembers().find(m=>m.id===button.dataset.id);if(!member){notify('Anggota sudah berubah. Daftar diperbarui.',true);render();return;}
      if(button.dataset.action==='detail'){
        $('#detail-content').innerHTML=`<div class="detail-person"><span class="member-avatar">${escape(initials(member.name))}</span><h3>${escape(member.name)}</h3><span class="type-badge">${escape(member.type)}</span></div><dl class="detail-grid">${[['Nomor anggota',memberNumber(member)],['NIM / NIP',member.number],['Program studi / unit kerja',member.program],['Tanggal pendaftaran',dateLabel(member.createdAt)],['Email',member.email],['Nomor telepon',member.phone],['Alamat',member.address]].map(([k,v])=>`<div class="${k==='Alamat'?'full-width':''}"><dt>${k}</dt><dd>${escape(v)}</dd></div>`).join('')}</dl>`;
        $('#detail-print').onclick=()=>printCard(member);detailsModal.show();
      } else if(button.dataset.action==='edit'){
        editingId=member.id;editForm.reset();
        $$('[data-validate]',editForm).forEach(field=>{field.value=member[field.name];fieldError(field,'');});editModal.show();
      } else {
        deletingId=member.id;$('#delete-name').textContent=member.name;deleteModal.show();
      }
    });
    $('#edit-modal').addEventListener('shown.bs.modal',()=>$('#edit-name').focus());
    $('#delete-modal').addEventListener('shown.bs.modal',()=>$('#cancel-delete').focus());
    editForm.addEventListener('submit',e=>{
      e.preventDefault();const members=readMembers();if(!validateForm(editForm,members,editingId))return;
      const existing=members.find(m=>m.id===editingId);
      if(!existing){notify('Anggota tidak ditemukan. Daftar diperbarui.',true);editModal.hide();render();return;}
      const updated=members.map(m=>m.id===editingId?{...m,...formData(editForm)}:m);
      if(saveMembers(updated)){editModal.hide();render();notify('Perubahan data anggota berhasil disimpan.');}
    });
    $('#confirm-delete').addEventListener('click',()=>{
      const members=readMembers();
      if(saveMembers(members.filter(m=>m.id!==deletingId))){deleteModal.hide();render();notify('Data anggota berhasil dihapus.');}
    });
    $('#demo-button').addEventListener('click',()=>{
      const members=readMembers();
      if(members.some(m=>m.isDemo))return;
      const examples=[['Aditya Pratama','202401001','Teknik Informatika','Mahasiswa'],['Nadia Putri','202401002','Sistem Informasi','Mahasiswa'],['Rizky Ramadhan','202401003','Manajemen','Mahasiswa'],['Dr. Maya Lestari','198703152015042001','Teknik Informatika','Dosen'],['Fajar Maulana','202401004','Akuntansi','Mahasiswa'],['Siti Rahmawati','199105122019032002','Administrasi Akademik','Tenaga Kependidikan'],['Dimas Saputra','202401005','Teknik Elektro','Mahasiswa'],['Dr. Budi Santoso','198102092010011003','Ekonomi','Dosen']];
      const demos=examples.filter(x=>!members.some(m=>normalizeNumber(m.number)===normalizeNumber(x[1]))).map((x,i)=>({id:id(),name:x[0],number:x[1],program:x[2],type:x[3],address:'Jl. Pendidikan No. 10, Kota Contoh',phone:`08120000000${i}`,email:`anggota${i+1}@example.com`,createdAt:new Date(Date.now()-i*86400000).toISOString(),isDemo:true}));
      if(saveMembers([...members,...demos])){render();notify(`${demos.length} data contoh fiktif berhasil dimuat.`);}
    });
    window.addEventListener('storage',e=>{if(e.key===STORE_KEY||e.key===null)render();});
    render();
  }
})();
