import Footer from "@/components/Footer";
import Header from "@/components/Header";


export default function Home() {
  return (
    
      <div>
       <Header/>
       <div className="mt-14">
       <div className="flex justify-center w-full h-full mt-10">
                <img src="/unlumamul.jpg" alt="unlumamuller" className="w-2/4 object-cover rounded-lg shadow-xl"/>
            </div>
       </div>

       <div className="">
        <h1 className="mt-10 ml-10 text-red-500 font-extrabold text-3xl">ÜRÜNLER</h1>

        <div className="flex mt-10">
          <div className="flex">
            <img src="/urunler/mavi.png" alt="mavi" className="ml-10"></img>
            <div className="ml-6">
              <h1 className="font-bold text-xl text-black">%70 DEMİNERALİZE PEYNİR <br/> ALTI SUYU TOZU</h1>
              <div className="mt-6">
                <span className="pt-4">Çiğ sütlerin peynir olup sonrasında taze
                peynir altı sularının extra demineralize
                işlemi ve kurutma teknikleri ile elde edilen
                toz halindeki üründür. Bisküvi, çikolata,
                pasta gibi gıda sanayiye uygun olup, katkı
                </span>
              </div>
          
            </div>
          
          </div>
          <div className="flex">
            <img src="/urunler/yesil.png" alt="yesil" className="ml-10"></img>
            <div className="ml-6">
              <h1 className="font-bold text-xl text-black">YAĞSIZ SÜT TOZU<br/> ALTI SUYU TOZU</h1>
              <div className="mt-6">
                <span>Çiğ sütlerin peynir olup sonrasında taze
                peynir altı sularının extra demineralize
                işlemi ve kurutma teknikleri ile elde edilen
                toz halindeki üründür. Bisküvi, çikolata,
                pasta gibi gıda sanayiye uygun olup, katkı
                </span>
              </div>
          
            </div>
          
          </div>
          <div className="flex">
            <img src="/urunler/kirmizi.png" alt="kirmizi" className="ml-6"></img>
            <div className="ml-6">
              <h1 className="font-bold text-xl text-black">%50 DEMİNERALİZE PEYNİR <br/> ALTI SUYU TOZU</h1>
              <div className="mt-6">
                <span>Çiğ sütlerin peynir olup sonrasında taze
                peynir altı sularının extra demineralize
                işlemi ve kurutma teknikleri ile elde edilen
                toz halindeki üründür. Bisküvi, çikolata,
                pasta gibi gıda sanayiye uygun olup, katkı
                </span>
              </div>
          
            </div>
          
          </div>
          
          
        </div>
       </div>
       <div className="mt-20">
        <Footer/>
       </div>
      </div>

  )
}
