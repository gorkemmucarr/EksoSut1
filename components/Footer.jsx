


export default function Footer(){
    return(
        <div className="flex bg-red-600 p-5 items-center">
            <div>
                <ul className="flex ml-10">
                    <a href="#">
                        <li className="">
                        <img src="/logo/instagram.png" alt="instagram" className="w-5 h-5"/>
                    </li>
                    </a>
                    <a href="#">
                        <li className="ml-3 ">
                        <img src="/logo/facebook.png" alt="facebook" className="w-5 h-5"/>
                    </li>
                    </a>
                    
                    <a href="#">
                        <li className="ml-3 ">
                        <img src="/logo/twitter.png" alt="twitter" className="w-5 h-5"/>
                    </li>
                    </a>
                    
                    <a href="#">
                        <li className="ml-3">
                        <img src="/logo/youtube.png" alt="youtube" className="w-5 h-5"/>
                    </li>
                    </a>
                    
                    <a href="#">
                        <li className="ml-3 ">
                        <img src="/logo/linkedin.png" alt="linkedin" className="w-5 h-5"/>
                    </li>
                    </a>
                    
                </ul>
            </div>
            <div className="ml-24">
                <span className="font-thin text-xs text-white">© 2023 Ekso Süt ve Gıda Mamüller San. Tic. A.Ş. Tüm hakları saklıdır.</span>
            </div>
            <div className="ml-40">
            <ul className="flex justify-between"> 
                <li className="text-white font-normal">
                    <a href="#">Ürünler</a> </li>
                <li className="text-white font-normal ml-4">
                    <a href="#">İhracat</a> </li>
                <li className="text-white font-normal  ml-4">
                    <a href="#"> Faydalı Bilgiler</a></li>
                <li className="text-white font-normal  ml-4">
                    <a href="#">KVKK</a> </li>
                <li className="text-white font-normal  ml-4">
                    <a href="#">Duyurular</a> </li>
                <li className="text-white font-normal  ml-4">
                    <a href="#">Hakkında</a> </li>
                <li className="text-white font-normal  ml-4">
                    <a href="#">İletişim</a> </li>
            </ul>
            </div>
        </div>
    )
}