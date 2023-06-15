import Footer from "@/components/Footer"
import Header from "@/components/Header"

export default function duyurular(){
    return(
        <div>
            <Header/>
            <div>
            <div className="mt-14">
            <div className="flex justify-center w-full h-full mt-10">
                <img src="/unlumamul.jpg" alt="unlumamuller" className="w-2/4 object-cover rounded-lg shadow-xl"/>
            </div>
       </div>
                <div className="ml-10">
                    <h1 className="mt-10 text-red-500 font-extrabold text-3xl">HABERLER VE DUYURULAR</h1>
                    <span>Şirketimiz hakkında haber ve duyurulara buradan ulaşabilirsiniz.</span>
                </div>
                <div className="flex mt-10 justify-center">
                    <div className="ml-10 border-2 border-gray-100 rounded-lg p-5 transition duration-500 hover:scale-110">
                        <a href="#">
                        <h1 className="mb-8 text-red-500 font-bold text-2xl">EKSO’dan 5 MilyonTL’lik Yatırım</h1>
                        <span>2009 Yılında, Antalya’da faaliyetine başlayan EKSO,
                            1500 m2 kapalı alanda üretimini gerçekleştirerek, çevreyi
                            koruma bilinciyle çalışmalarını sürdürmektedir. Peynir altı
                            suyu ve Süt tozu ürünlerine olan talebin artmasıyla
                            beraber, EKSO için kapasite artışı zorunluluk haline gelmiş,
                            ve bunun için çalışmalara başlanmıştır.
                            2012’nin son aylarında başlayan yatırımların sürmesi
                            planlanmaktadır. Yatırım sonucunda 1.500m2 kapalı
                            alandan 3.500m2 alana çıkarak 5 milyon TL’lik yatırım
                            yapmayı hedefliyor.
                            Hali hazırda günde 25 ton toz üretme kapasitesine sahip
                            olan
                            </span>
                        </a>
                        
                    </div>
                    <div className="ml-10 border-2 border-gray-100 rounded-lg p-5 transition duration-500 hover:scale-110">
                        <a href="#">
                        <h1 className="mb-8 text-red-500 font-bold text-2xl">EKSO Ürün PortföyüneYeni Bir Ürün Daha Ekledi</h1>
                        <span>Antalya Organize Sanayi Bölgesinde, 2009 yılında
                            faaliyete başlamış olan EKSO, Ekici Peynir’in üretimi
                            sonucu açığa çıkan ve içerisinde bulunan laktik asit
                            sebebiyle kısa sürede asitlenip çevreye oldukça zarar veren
                            atıkların, ekonomiye tekrardan kazanılması amacıyla
                            kurulmuştu.
                            EKSO çevre ve doğaya önem veren bir yaklaşımla üretim
                            yapan, çevreyi ve toplum sağlığını korumayı kendisine ilke
                            edinen bir işletmedir.
                            İlk yıllarında sadece Peyniraltı suyunu işleyerek toz haline
                            getiren firma, bugün ürün portföyüne yeni bir ürün daha 
                            </span>
                        </a>
                        
                    </div>
                    <div className="ml-10 border-2 border-gray-100 rounded-lg p-5 transition duration-500 hover:scale-110">
                        <a href="#">
                        <h1 className="mb-8 text-red-500 font-bold text-2xl">EKSO Çalışmaları Hızlandırdı</h1>
                        <span>Antalya Organize Sanayi Bölgesinde, 2009 yılında
                            faaliyete başlamış olan EKSO, Ekici Peynir’in üretimi
                            sonucu açığa çıkan ve içerisinde bulunan laktik asit
                            sebebiyle kısa sürede asitlenip çevreye oldukça zarar veren
                            atıkların, ekonomiye tekrardan kazanılması amacıyla
                            kurulmuştu.
                            Şuan sadece Ekici Peynir’den çıkan atık peynir altı suyun
                            doğaya yeniden kazandırılması için çalışan EKSO,
                            bulunduğu bölgede yer alan başka işletmelerin peyniraltı
                            suyunu değerlendirmek üzere çalışmalara başladı. Bugün,
                            bölgesindeki diğer süt ve süt ürünleri üreten işletmelerle
                            anlaşarak, doğaya attıkları peynir altı sularını, özel tanklar
                            ile toparlıyor ve Organize Sanayi Bölgesinde bulunan
                            işletmesinde üretim hattına dahil ediyor.
                            </span>
                        </a>
                        
                    </div>
                   
                </div>
            </div>
            <div className="mt-20">
                <Footer/>
            </div>
        </div>
        
    )
}