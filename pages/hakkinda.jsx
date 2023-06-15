import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function hakkinda(){
    return(
        <div>
            <Header/>
            <div>
                <h1 className="mt-10 ml-14 text-red-500 font-extrabold text-3xl">İHRACAT</h1>
            </div>


            <div className="flex ml-14 w-full h-full">
                <div className="mt-6 border-0 w-2/4">
                    <span className="font-serif">
                         Antalya Organize Sanayi Bölgesinde, 2004 yılında temelleri atılmış olan Ekso Süt, yine aynı bölgede faaliyetini sürdüren Ekici Peynir’in kardeş
                          kuruluşudur. Şirketin kurulma sebebi, Ekici Peynir’in üretimi sonucu açığa çıkan ve içerisinde bulunan asit sebebiyle çevreye oldukça zararlı 
                          olan peynir altı suyunun tekrardan doğaya kazandırılmasıdır.
                    </span> <br /> <br />
                    <span className="font-serif" >
                        Temeli atıldıktan sonra 5 yıl boyunca süren kurulum ve AR-GE çalışmaları sonucunda, 2009 yılında faaliyetine başlayarak, düzenli olarak çalışan
                         bir işletme haline gelmiştir.
                    </span> <br /> <br />
                    <span className="font-serif">
                        Faaliyete başlanılan ilk yıllarda sadece peynir altı suyunu işleyerek toz haline getirmekteydi. Bugün yapmış olduğu yatırımlarla peynir altı 
                        suyunun yanında süt de işleyerek süt tozu üretimini de gerçekleştirmektedir. Günde 25 ton peynir altı suyu tozu (PAST) ve 20 ton da süt tozu
                         üretme kapasitesine sahip olan Ekso Süt, yatırımlarına ara vermeden devam ederek kapasitesini arttırmayı hedeflemektedir.
                    </span> <br /> <br />
                    <span className="font-serif">
                    Son teknolojinin tüm imkanlarını etkin bir şekilde kullanan Ekso Süt, çevreyi ve toplum sağlığını korumayı kendisine ilke edinen bir işletmedir. Şu anda sadece
                     Ekici Peynir’den çıkan atık suyun doğaya yeniden kazandırılması için çalışan Ekso Süt, ilerleyen zamanlarda bulunduğu bölgede bulunan tüm işletmelerdeki 
                     atıkları doğaya kazandırma misyonuyla hareket etmektedir.
                    </span> <br /> <br /> <hr />
                    
                    
                </div>
                <div className="flex justify-center w-1/4 h-1/4 mt-10">
                <img src="/suttozu.png" alt="unlumamuller" className="w-3/4 rounded-lg shadow-xl"/>
            </div>
            </div>
            <div className="mt-20">
                <Footer/>
            </div>
        </div>
    )
}