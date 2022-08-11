const finishingMachine = {
    'Mesin Shimming FR900': 'Kecepatan produksi bisa diatur sesuai keinginan dan dilengkapi conveyor berjalan sehingga memudahkan kita untuk kontrol panas dan kecepatan guna menyesuaikan dengan karakter jenis kemasan.  ',
    'Mesin Cannon IR5000i': 'Canon image RUNNER 5000i perangkat multifungsi BW yang handal dengan kecepatan output yang luar biasa, kualitas gambar dan alur kerja yang efisien untuk hasil dokumen yang maksimal dalam skala besar.',
    'Mesin Shimming FR-800PH': 'Kecepatan produksi bisa diatur sesuai keinginan dan dilengkapi conveyor berjalan sehingga memudahkan kita untuk kontrol panas dan kecepatan guna menyesuaikan dengan karakter jenis kemasan.  ',
    'Paper Trimmer':''
}

const profileCompany = {
    address: 'Jl. Kartini PR 11 No 108 Selasar Salatiga',
    telp: '088808888880',
    email:'sidocvmulyo@gmail.com',
    name: ' Sidomulyo Advertising',
    specialist: 'Advertising Agency',
    started_at: '12 November 2020',
    notaris: 'Susi Haryati, SH., M.KN.',
    nib: '0244010152804',
    npwp: '96.571.368.8-505.000',
    director: 'Joshua Franco Wibowo'
}

const misiVisi = {
    visi: 'Sebagai Problem Solving dan memberikan solusi tentang strategi beriklan yang efektif dan efisien',
    misi: [
        "Memberikan dan membuat hasil/karya iklan yang terbaik",
        "Meningkatkan Pelayanan dibidang Advertising",
        'Meningkatkan Pelayanan dibidang Advertising',
        'Integritas yang dapat diandalkan dan menjadi pribadi yang kreatif',
        'Menjalin kerja sama yang saling menguntungkan dengan Mitra Usaha'
    ]
}

const getData = () => { 
    return {
        finishingMachine,
        profileCompany,
        misiVisi
    }
 }

 export default getData