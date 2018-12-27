const  mongoose = require('mongoose');

const Car = mongoose.model('Car', {
    url: {
        type:String,
        required:true
    },
    saglayici:Number,
    baslik: String,
    altbaslik: String,
    kategori: String,
    sehir: String,
    aciklama: String,
    fiyat: Number,
    parabirimi: String,
    kiralik: String,
    marka: String,
    model: String,
    yil: Number,
    fotograf1: String,
    fotograf2: String,
    fotograf3: String,
    fotograf4: String,
    fotograf5: String,
    adsoyad: String,
    evtelefonu: String,
    ceptelefonu: String,
    kasatipi: String,
    vitestipi: String,
    yakittipi: String,
    renk: String,
    kilometre: Number,
    tarih: {
        type: String,
        default: new Date()
    },
    ilantarihi: String,
    durum: Number,
    url_hash: String
});

module.exports = Car;