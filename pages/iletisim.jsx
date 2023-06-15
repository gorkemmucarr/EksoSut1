import Footer from "@/components/Footer"
import Header from "@/components/Header"

export default function iletisim(){
    return(
        <div>
            <Header/>
            <div>
                <div className="ml-20 mt-20">
                    <span className="font-bold text-3xl">İLETİŞİM</span> <br />
                    <span className="text-black">Ekso Süt ve Gıda Mamülleri San. ve Tic. A.Ş.</span>
                </div>
                
                <div className="flex justify-between mt-14 items-center">
                    <div className="ml-20">
                        <span className="font-medium text-xl">Adres</span>  <br />
                        <span>Organize Sanayi Bölgesi <br /> 07190 ANTALYA / TÜRKİYE</span>
                    </div>
                    <div >
                        <span className="font-medium text-xl">Telefon</span> <br />
                        <span>+90 242 258 13 96 (Pabx)</span>
                    </div>
                    <div >
                        <span className="font-medium text-xl">Fax</span> <br />
                        <span>+90 242 258 13 95</span>
                    </div>
                    <div className="mr-20">
                        <span className="font-medium text-xl">E-Posta</span> <br />
                        <span>info@eksosut.com</span>
                    </div>
                </div>
            </div>
            <div className="mt-20">
                <Footer/>
            </div>
        </div>
    )
}