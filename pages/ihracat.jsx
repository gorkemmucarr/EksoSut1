import Footer from "@/components/Footer";
import Header from "@/components/Header";


export default function ihracat(){
    return(
        <div>
            <Header/>
            <div className="flex justify-center w-full h-full mt-10">
                <img src="/unlumamul.jpg" alt="unlumamuller" className="w-2/4 object-cover rounded-lg shadow-xl"/>
            </div>
            <div>
                <h1 className="mt-10 ml-14 text-red-500 font-extrabold text-3xl">İHRACAT</h1>
            </div>


            <div className="flex ml-14">
                <div className="mt-6 border-0 w-96">
                    <span className="font-serif">Son teknolojinin tüm imkânlarını 
                        etkin bir şekilde kullanan EKSO, 
                        çevreyi ve toplum sağlığını korumayı 
                        kendisine ilke edinen bir işletmedir. 
                        İç piyasaya tedarik etmenin yanı 
                        sıra, yurt dışına da 2012 yılından bu 
                        yana ihracat yapılmaktadır. Ürdün, 
                        Pakistan ve Suriye’ye, hali hazırda 
                        ticaretimiz devam etmekte olup, 
                        Mısır’ı da son dönem hizmet 
                        verdiğimiz ülkeler arasına almış 
                        bulunuyoruz.
                    </span>
                </div>
                <div className="flex justify-center w-full h-full mt-10">
                <img src="/ihracat.png" alt="unlumamuller" className="w-3/4 rounded-lg shadow-xl"/>
            </div>
            </div>
            <div className="mt-20">
                <Footer/>
            </div>
            
        </div>
    )
}