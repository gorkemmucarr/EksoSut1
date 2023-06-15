import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <>
       <div>
        <div className='p-6 bg-red-600'>
            <div className='ml-14'>
              <a href="/">
                <img src="/logo.png" alt="logo" className='w-28 h-24 rounded-lg mb-2'/>
              </a>
              
            </div>
            <div className='flex'>
              <div className='flex flex-col ml-20'>
                 <span className='text-xs font-normal'>PEYNİRALTI SUYU TOZU & SÜT TOZU </span>
                 <span className='text-xs font-normal  text-white mt-1'>WHEY POWDER & MILK POWDER</span>
              </div>
               

              <div >
                  <ul  className='flex justify-between'>
                    <li className='font-semibold  text-white ml-20 rounded-lg p-1  hover:bg-white hover:text-red-600 transition duration-500 hover:scale-125'><a href="/urunler">Ürünler</a> </li>
                    <li className='font-semibold  text-white ml-20 rounded-lg p-1 hover:bg-white hover:text-red-600 transition duration-500 hover:scale-125'><a href="/ihracat">İhracat</a> </li>
                    <li className='font-semibold  text-white ml-20 rounded-lg p-1 hover:bg-white hover:text-red-600 transition duration-500 hover:scale-125'><a href="/faydalibilgiler">Faydalı Bilgiler</a> </li>
                    <li className='font-semibold  text-white ml-20 rounded-lg p-1 hover:bg-white hover:text-red-600 transition duration-500 hover:scale-125'><a href="/kvkk">KVKK</a> </li>
                    <li className='font-semibold  text-white ml-20 rounded-lg p-1 hover:bg-white hover:text-red-600 transition duration-500 hover:scale-125'><a href="/duyurular">Duyurular</a> </li>
                    <li className='font-semibold  text-white ml-20 rounded-lg p-1 hover:bg-white hover:text-red-600 transition duration-500 hover:scale-125'><a href="/hakkinda">Hakkında</a> </li>
                    <li className='font-semibold  text-white ml-20 rounded-lg p-1 hover:bg-white hover:text-red-600 transition duration-500 hover:scale-125'><a href="/iletisim">İletişim</a> </li>
                    <li className='font-semibold  text-white ml-20 rounded-lg p-1 hover:bg-white hover:text-red-600'><a href="#">Tr</a></li>
                    <li className='font-semibold  text-white ml-1  rounded-lg p-1 hover:bg-white hover:text-red-600'><a href="#">En</a></li>
            </ul>
            </div>
             </div>
        </div>
       </div>
    </>
    
  )
}
