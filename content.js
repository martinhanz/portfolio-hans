/*
 * File maintenance portfolio.
 * Update isi profil di file ini, bukan di HTML utama.
 */
(function () {
  var profile = {
    brand: 'MARTIN <span>HANS</span>',
    heroTitle: 'Analisis data &amp; sistem ERP, disusun dengan logika yang rapi.',
    heroLead: 'Lulusan Ilmu Komputer dari Universitas Negeri Medan dengan fokus praktis pada SAP ABAP dan pemodelan data berbasis Python — terbiasa mengubah data mentah menjadi keputusan yang bisa dipertanggungjawabkan.',
    heroFields: [
      ['Lokasi', 'Medan, Sumut', ''],
      ['IPK', '3,46 / 4,00', ''],
      ['Fokus', 'SAP ABAP', ''],
      ['Bahasa', 'ID · EN', '']
    ],
    summary: 'Lulusan Ilmu Komputer yang memiliki minat besar pada analisis data dan pengembangan sistem ERP. Memiliki keahlian praktis dalam SAP ABAP melalui pelatihan intensif, bahasa pemrograman Python, serta penyusunan model prediktif matematis. Terbiasa berpikir kritis, memecahkan masalah kompleks, dan siap berkontribusi secara dinamis dalam tim kerja.',
    education: {
      name: 'Universitas Negeri Medan',
      program: 'S1 Ilmu Komputer',
      period: 'Agustus 2019 – September 2023',
      gpa: '3,46/4.00'
    },
    certifications: [
      {
        date: 'Agt–Sep 2026',
        title: 'Bootcamp ABAP Angkatan 2',
        organization: 'SAP Interface',
        details: ['Smartforms (spesifikasi HR Master Data dan Surat Jalan)', 'Report HTML (spesifikasi Inspection Lot)', 'ALV Class (spesifikasi Inspection Point)', 'Teknik pengolahan data: List Report, Group Report, dan Basic Tuning']
      },
      {
        date: 'Jun 2026',
        title: 'Training ABAP Basic',
        organization: 'SAP Interface',
        details: ['Memahami sintaks ABAP dan ABAP Debugging', 'Praktik membuat database melalui ABAP Dictionary (SE11)', 'Mempelajari subrutin dan menampilkan data melalui ABAP List Viewer (ALV)', 'Membuat output layar (screen) melalui Dialog Programming']
      },
      {
        date: 'Des 2025',
        title: 'Membuat Sistem Informasi Pariwisata Berbasis Website',
        organization: 'Badan Nasional Sertifikasi Profesi (BNSP)',
        details: ['Mempelajari struktur dan user interface website', 'Praktik membuat website menggunakan WordPress']
      }
    ],
    catalog: [
      {
        preview: 'https://drive.google.com/file/d/1NFw1wtwz8tVaECsVY42nb7gSaQcj9x4e/preview',
        title: 'Day 1 Soal 1 Advanced',
        subtitle: 'Custom Report Customer: VD03',
        description: "Pengolahan data rekap customer beserta 'sales area data' yg diambil dari tabel master data.",
        reportUrl: 'http://45.127.134.174:8000/ides/display?~transaction=ZTIN_AA101'
      },
      {
        preview: 'https://drive.google.com/file/d/1Riivlut4OpPWJoSkEibnZB9VE-ZrjJdT/preview',
        title: 'Day 1 Soal 2 Advanced',
        subtitle: 'Custom Report: MM03',
        description: 'Rekap data material customer yg berelasi dengan sales area data.',
        reportUrl: 'http://45.127.134.174:8000/ides/display?~transaction=ZTIN_AA102'
      },
      {
        preview: 'https://drive.google.com/file/d/1Ays_0OWdj9AqB83tlpvGqQx7_p6XoMRC/preview',
        title: 'Day 1 Soal 3 Advanced',
        subtitle: 'Custom Report Sales Order Material: VA03',
        description: 'List Material yg diorder oleh customer kepada sales.',
        reportUrl: 'http://45.127.134.174:8000/ides/display?~transaction=ZTIN_AA103'
      },
      {
        preview: 'https://drive.google.com/file/d/1S8RaF--ej_QigA-gLSv594ZLl3As_pRB/preview',
        title: 'Day 2 Soal 1 Advanced',
        subtitle: 'Custom report pengelompokan data',
        description: 'Report total Harga Purchasing Order berdasarkan Material grup beserta Mata Uang.',
        reportUrl: 'http://45.127.134.174:8000/ides/display?~transaction=ZTIN_AA201'
      },
      {
        preview: 'https://drive.google.com/file/d/1H6F-Tc8yTQtgp81Egqh-tfhwgPNFFxqs/preview',
        title: 'Day 2 Soal 2 Advanced',
        subtitle: 'Custom Report Pengelompokan Data',
        description: 'Report total material beserta satuan barang berdasarkan material grup yg dikelompokkan berdasarkan bulan.',
        reportUrl: 'http://45.127.134.174:8000/ides/display?~transaction=ZTIN_AA202'
      },
      {
        preview: 'https://drive.google.com/file/d/1THT9p3qt_VtPatEwWdfi5Z53wGDjr_kQ/preview',
        title: 'Project Simulation (Smartforms)',
        subtitle: 'Custom Report Tcode VA03',
        description: 'Report mencetak Surat Jalan untuk supir agar barang yang akan dikirimkan berizin resmi dari perusahaan.',
        reportUrl: 'http://45.127.134.174:8000/ides/display?~transaction=ZFORMSJ'
      },
      {
        preview: 'https://drive.google.com/file/d/1svZes2MbaZ4N5kd5ZkWMVO-0hxJrS7Vx/preview',
        title: 'Project Simulation (ALV to Smartforms)',
        subtitle: 'Custom Report Tcode PA20',
        description: 'Report mencetak kartu keluarga HR tcode PA20 yg diambil dari tabel master data PA0001 dan detail member dari tabel PA0021 infotype family member.',
        reportUrl: 'http://45.127.134.174:8000/ides/display?~transaction=ZTIN_FORMS'
      },
      {
        preview: 'https://drive.google.com/file/d/1Nf7QA42jZnumT9rXJQnVYpv4TC8gdCYG/preview',
        title: 'Project Simulation (HTML WEB GUI)',
        subtitle: 'Custom Report Tcode MM60',
        description: 'Report HTML yg berasal dari spesifikasi Display Materials List (MM60), bisa langsung dijalankan di Browser.',
        reportUrl: 'http://45.127.134.174:8000/ides/display?~transaction=ZWEBGUIMM60'
      },
      {
        preview: 'https://drive.google.com/file/d/13PJaTUHY_3InJrlZboCkSijj6bLe3Okt/preview',
        title: 'Project Simulation (ALV Class Advanced)',
        subtitle: 'Custom Report Inspection Point',
        description: 'Report ALV menggunakan Class Event Receiver untuk menampilkan Header dan Detail spec: Inspeksi Material.',
        reportUrl: 'http://45.127.134.174:8000/ides/display?~transaction=ZTINPSM3'
      }
    ],
    thesis: {
      title: 'Analisis Prediksi Jumlah Produksi Sarung Tangan Menggunakan Logika Fuzzy Sugeno',
      organization: 'Studi Kasus: PT Medisafe Technologies · September 2023',
      details: ['Mengembangkan model prediksi menggunakan Python untuk mengoptimalkan perencanaan dan penentuan jumlah produksi barang', 'Mengimplementasikan algoritma Logika Fuzzy (Metode Sugeno) melalui Jupyter Notebook untuk memproses variabel input menjadi output prediksi', 'Menyusun dan mempresentasikan hasil analisis prediktif beserta efisiensi program di hadapan dosen penguji akademik']
    },
    skills: {
      hard: ['Python (Dasar &amp; Data Processing)', 'SAP ABAP (Reporting)', 'Pemodelan Matematis', 'Analisis Kuantitatif'],
      soft: ['Berpikir Analitis', 'Pemecahan Masalah Kompleks', 'Perhatian terhadap Detail', 'Logika Terstruktur'],
      languages: [['Indonesia', 'Menengah'], ['Inggris', 'Dasar']]
    },
    contact: {
      whatsapp: { label: 'WhatsApp', href: 'https://wa.me/6282164733127', value: '+62 821-6473-3127', external: true },
      email: { label: 'Email', href: 'mailto:martinhans200@gmail.com', value: 'martinhans200@gmail.com' },
      linkedin: { label: 'LinkedIn', href: 'https://www.linkedin.com/in/martin-hans-r-simaremare/', value: 'martin-hans-r-simaremare', external: true },
      instagram: { label: 'Instagram', href: 'https://www.instagram.com/martinhanssss/', value: 'martinhanssss', external: true }
    },
    footer: 'Martin Hans — Medan, Sumatera Utara, Indonesia'
  };

  function listItems(items) {
    return items.map(function (item) { return '<li>' + item + '</li>'; }).join('');
  }

  function certification(item) {
    return '<div class="cert"><div class="cert-date">' + item.date + '</div><div><div class="cert-title">' + item.title + '</div><div class="cert-org">' + item.organization + '</div><ul>' + listItems(item.details) + '</ul></div></div>';
  }

  function catalogItem(item) {
    return '<li class="catalog-item"><iframe src="' + item.preview + '" height="200" title="' + item.title + ' preview" loading="lazy" allow="autoplay"></iframe><div class="catalog-content"><div class="catalog-title">' + item.title + '</div><div class="catalog-sub">' + item.subtitle + '</div><div class="catalog-desc">' + item.description + '</div><a href="' + item.reportUrl + '" class="btn-link" target="_blank" rel="noopener">View Report</a></div></li>';
  }

  function chips(items) {
    return items.map(function (item) { return '<div class="chip">' + item + '</div>'; }).join('');
  }

  function contactItem(item, icon) {
    var target = item.external ? ' target="_blank" rel="noopener"' : '';
    return '<div class="contact-item"><div class="k">' + item.label + '</div><div class="v"><a href="' + item.href + '"' + target + '><span class="icon" aria-hidden="true">' + icon + '</span>' + item.value + '</a></div></div>';
  }

  var icons = {
    whatsapp: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.33 4.96L2 22l5.27-1.38a9.9 9.9 0 0 0 4.77 1.22h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2Zm0 18.02h-.01a8.1 8.1 0 0 1-4.14-1.13l-.3-.18-3.13.82.84-3.05-.19-.31a8.06 8.06 0 0 1-1.25-4.34c0-4.48 3.65-8.13 8.14-8.13 2.17 0 4.21.85 5.75 2.38a8.06 8.06 0 0 1 2.38 5.75c0 4.48-3.65 8.19-8.09 8.19Zm4.44-6.07c-.24-.12-1.44-.71-1.66-.79-.22-.08-.39-.12-.55.12-.16.24-.63.79-.78.95-.14.16-.29.18-.53.06-.24-.12-1.02-.38-1.95-1.21-.72-.64-1.21-1.44-1.35-1.68-.14-.24-.01-.37.11-.49.11-.11.24-.29.36-.43.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.32-.75-1.81-.2-.48-.4-.41-.55-.42h-.47c-.16 0-.42.06-.64.3-.22.24-.85.83-.85 2.02s.87 2.34.99 2.5c.12.16 1.71 2.61 4.14 3.66.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.44-.59 1.64-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28Z"/></svg>',
    email: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 5.5A1.5 1.5 0 0 1 3.5 4h17A1.5 1.5 0 0 1 22 5.5v13A1.5 1.5 0 0 1 20.5 20h-17A1.5 1.5 0 0 1 2 18.5v-13Z"/><path d="m3 6 8.35 6.13a1 1 0 0 0 1.3 0L21 6"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3.5A1.96 1.96 0 1 0 5.28 7.4a1.96 1.96 0 0 0-.03-3.9ZM20.45 20h-3.37v-5.9c0-1.4-.03-3.21-1.96-3.21-1.96 0-2.26 1.53-2.26 3.11V20H9.5V8.5h3.24v1.57h.05c.45-.85 1.55-1.75 3.19-1.75 3.41 0 4.04 2.24 4.04 5.16V20Z"/></svg>'
  };

  document.querySelector('.brand').innerHTML = profile.brand;
  document.querySelector('.hero h1').innerHTML = profile.heroTitle;
  document.querySelector('.hero p.lede').innerHTML = profile.heroLead;
  document.querySelector('.hero-fields').innerHTML = profile.heroFields.map(function (field) {
    return '<div class="field"><div class="k">' + field[0] + '</div><div class="v ' + field[2] + '">' + field[1] + '</div></div>';
  }).join('');
  document.querySelector('.summary-text').innerHTML = profile.summary;
  document.querySelector('#pendidikan .section-body > div:last-child').innerHTML = '<div class="edu-row"><div><div class="edu-name">' + profile.education.name + '</div><div class="edu-sub">' + profile.education.program + '</div></div><div class="edu-meta">' + profile.education.period + '<br>IPK <span class="ipk-badge">' + profile.education.gpa + '</span></div></div>';
  document.querySelector('#sertifikasi .section-body > div:last-child').innerHTML = profile.certifications.map(certification).join('');
  document.querySelector('#katalog .catalog-list').innerHTML = profile.catalog.map(catalogItem).join('');
  document.querySelector('#tugas-akhir .section-body > div:last-child').innerHTML = '<div class="thesis-card"><h3>' + profile.thesis.title + '</h3><div class="thesis-org">' + profile.thesis.organization + '</div><ul>' + listItems(profile.thesis.details) + '</ul></div>';
  document.querySelector('#keterampilan .section-body > div:last-child').innerHTML = '<div class="skill-panel"><div class="skill-group"><div class="g-label">Hard skills</div><div class="chip-row">' + chips(profile.skills.hard) + '</div></div><div class="skill-group"><div class="g-label">Soft skills</div><div class="chip-row">' + chips(profile.skills.soft) + '</div></div><div class="skill-group"><div class="g-label">Bahasa</div><div class="lang-row">' + profile.skills.languages.map(function (language) { return '<div class="lang-item"><div class="lv">' + language[0] + '</div><div class="lp">' + language[1] + '</div></div>'; }).join('') + '</div></div></div>';
  document.querySelector('#kontak .section-body > .contact-grid').innerHTML = contactItem(profile.contact.whatsapp, icons.whatsapp) + contactItem(profile.contact.email, icons.email) + contactItem(profile.contact.linkedin, icons.linkedin);
  document.querySelector('footer').textContent = profile.footer;
}());
