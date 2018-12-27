//models
const Tag = require('../models/Tag');
const Car = require('../models/Car');

const tagEkle = (searchTerm)=>{
    const tag = new Tag({tag:searchTerm});  //tag şeması belirleniyor
    tag.save((err,data)=>{ //tag ismi kaydediliyor. count modelde default 0 ayarlı
        if(err){ //tag name unique olarak tanımlı bu yüzden aynı tag eklenmeye çalışırsa hataya düşer
            Tag.updateOne({tag:searchTerm},{$inc:{count:1}},(err,data)=>{  //hataya düşen sorguyu update alıyoruz
                // ve count değerini 1 arttırıyoruz
                if(err)
                    console.log(err);
            });
        }
    });
};


const aracEkle = (data)=>{
    Car.updateOne(
        {url_hash:data["url_hash"]},
        {
            $set: {
                url: data["url"],
                saglayici: data["saglayici"],
                baslik: data["baslik"],
                altbaslik: data["altbaslik"],
                kategori: data["kategori"],
                sehir: data["sehir"],
                aciklama: data["aciklama"],
                fiyat: data["fiyat"],
                parabirimi: data["parabirimi"],
                kiralik: data["kiralik"],
                marka: data["marka"],
                model: data["model"],
                yil: data["yil"],
                fotograf1: data["fotograf1"],
                fotograf2: data["fotograf2"],
                fotograf3: data["fotograf3"],
                fotograf4: data["fotograf4"],
                fotograf5: data["fotograf5"],
                adsoyad: data["adsoyad"],
                evtelefonu: data["evtelefonu"],
                ceptelefonu: data["ceptelefonu"],
                kasatipi: data["kasatipi"],
                vitestipi: data["vitestipi"],
                yakittipi: data["yakittipi"],
                renk: data["renk"],
                kilometre: data["kilometre"],
                tarih: new Date(),
                ilantarihi: data["ilantarihi"],
                durum: data["durum"],
                url_hash: data["url_hash"]
            }
        },
        {
            upsert:true
        },
        (err,data)=>{
            if(err)
                console.log(err);
        }
    );
    
};


const sonucGetir = (searchTerm)=>{
    const cars =  Car.find({tag:searchTerm});
    return cars;
};

module.exports.tagEkle = tagEkle;
module.exports.sonucGetir = sonucGetir;
module.exports.aracEkle= aracEkle;