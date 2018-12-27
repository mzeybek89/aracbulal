const express = require('express');
const md5 = require('md5');
//models
const Car = require('../models/Car');
//helpers
const {aracEkle} = require('../helpers/my_functions');

const router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {

   /* console.log(req.params);
    console.log("----------------------------");
    console.log(req.body)

    const data_send = {
        url: data["Url"],
        saglayici: data["Saglayici"],
        baslik: data["Baslik"],
        altbaslik: data["Altbaslik"],
        kategori: data["Kategori"],
        sehir: data["Sehir"],
        aciklama: data["Aciklama"],
        fiyat: data["Fiyat"],
        parabirimi: data["Parabirimi"],
        kiralik: data["Kiralik"],
        marka: data["Marka"],
        model: data["Model"],
        yil: data["Yil"],
        fotograf1: data["Fotograf1"],
        fotograf2: data["Fotograf2"],
        fotograf3: data["Fotograf3"],
        fotograf4: data["Fotograf4"],
        fotograf5: data["Fotograf5"],
        adsoyad: data["Adsoyad"],
        evtelefonu: data["Evtelefonu"],
        ceptelefonu: data["Ceptelefonu"],
        kasatipi: data["Kasatipi"],
        vitestipi: data["Vitestipi"],
        yakittipi: data["Yakittipi"],
        renk: data["Renk"],
        kilometre: data["Kilometre"],
        tarih: data["Tarih"],
        ilantarihi: data["Ilantarihi"],
        durum: data["Durum"],
        url_hash: md5(data["Url_hash"])
    };*/


    const data_send = {
        url: "https://www.tasit.com/ilan/zp-411-satistaaa-3908302",
        saglayici: 1,
        baslik: "ZP 411 sAtıŞtaaa",
        altbaslik: "Tofaş Şahin Şahin",
        kategori: "Tasit.com » Otomobil » Tofaş » Şahin",
        sehir: "Manisa / Merkez / Merkez",
        aciklama: "sa hayırlı satışlar aracım93 model tüplü vizesi 2016 temmuza kadararacın motoru sıfırdır çok randımanlıdıraraçta bir çok artı bulunur gelinip görülmeye değeraraç kuruş masrafsızdr",
        fiyat: 8300,
        parabirimi: "₺",
        kiralik: "0",
        marka: "Tofaş",
        model: "Şahin",
        yil: 1993,
        fotograf1: "https://tasit.cubecdn.net/assets/images/offer/small/390/83/-zp-411-satistaaa-3908302-e0ecebc7.jpg",
        fotograf2: "https://tasit.cubecdn.net/assets/images/offer/small/390/83/-zp-411-satistaaa-3908302-55eb33ff.jpg",
        fotograf3: "https://tasit.cubecdn.net/assets/images/offer/small/390/83/-zp-411-satistaaa-3908302-f875c676.jpg",
        fotograf4: "https://tasit.cubecdn.net/assets/images/offer/small/390/83/-zp-411-satistaaa-3908302-2b2c620f.jpg",
        fotograf5: "https://tasit.cubecdn.net/assets/images/offer/small/390/83/-zp-411-satistaaa-3908302-a6a11425.jpg",
        adsoyad: "Sabri Akkoca",
        evtelefonu: "",
        ceptelefonu: "0554 988 65 10",
        kasatipi: "Sedan",
        vitestipi: "Düz Vites",
        yakittipi: "Benzin/LPG",
        renk: "",
        kilometre: "",
        ilantarihi: "2018-12-01 00:00:00",
        durum: 3,
        url_hash: md5("https://www.tasit.com/ilan/zp-411-satistaaa-3908302")
    };
    aracEkle(data_send);

    res.end();

});



module.exports = router;