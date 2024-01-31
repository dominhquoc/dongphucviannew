"use client"
import Link from "next/link";
import Logo from "./Logo";

import siteMetadata from "@/src/utils/siteMetaData";

import { useState } from "react";


const Header = () => {


  const [click, setClick] = useState(false);

const toggle = () =>{
  setClick(!click)
}
  return (
    <header className="w-full p-4  px-5 sm:px-10 flex items-center justify-between">
        <Logo />

        <button className="inline-block sm:hidden z-50" onClick={toggle} aria-label="Hamburger Menu">
          <div className="w-6 cursor-pointer transition-all ease duration-300">
            <div className="relative">
            <span className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200" 
            style={{
             transform: click ? "rotate(-45deg) translateY(0)" : "rotate(0deg) translateY(6px)"
            }}
            
            >&nbsp;</span>
            <span className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
            style={{
              opacity: click ? 0 : 1
             }}
            >&nbsp;</span>
            <span className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
            style={{
              transform: click ? "rotate(45deg) translateY(0)" : "rotate(0deg) translateY(-6px)"
             }}
            >&nbsp;</span>
            </div>

          </div>
        </button>

        <nav className=" w-max py-3 px-6 sm:px-8 border border-solid border-dark rounded-full font-medium capitalize  items-center flex  sm:hidden
        fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-50
        transition-all ease duration-300
        "
        style={{
          top: click ? "1rem" : "-5rem"
         }}
        
        >
            <Link href="/" className="mr-2">Trang Chủ</Link>
            <Link href="/gioithieu" className="mx-2">Giới Thiệu</Link>
            <Link href="/lienhe" className="mx-2">Liên Hệ</Link>
  
        </nav>


        <nav className=" w-max py-3 px-8 border border-solid border-dark rounded-full font-medium capitalize  items-center hidden sm:flex
        fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-50">
            <Link href="/" className="mr-2">Trang Chủ</Link>
            <Link href="/gioithieu" className="mx-2">Giới Thiệu</Link>
            <Link href="/lienhe" className="mx-2">Liên Hệ</Link>

        </nav>
        <div className=" hidden sm:flex items-center">
            <a href={siteMetadata.facebook} className="inline-block w-6 h-6 mr-4 hover:scale-125 transition-all ease duration-200" aria-label="Reach out to me via LinkedIn" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" height="26" width="26" viewBox="0 0 512 512" fill="#1877f2"><path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/></svg></a>
            <a href={siteMetadata.messenger} className="inline-block w-6 h-6 mr-4 hover:scale-125 transition-all ease duration-200" aria-label="Reach out to me via Twitter" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" height="26" width="26" viewBox="0 0 512 512" fill="#1877f2"><path d="M256.6 8C116.5 8 8 110.3 8 248.6c0 72.3 29.7 134.8 78.1 177.9 8.4 7.5 6.6 11.9 8.1 58.2A19.9 19.9 0 0 0 122 502.3c52.9-23.3 53.6-25.1 62.6-22.7C337.9 521.8 504 423.7 504 248.6 504 110.3 396.6 8 256.6 8zm149.2 185.1l-73 115.6a37.4 37.4 0 0 1 -53.9 9.9l-58.1-43.5a15 15 0 0 0 -18 0l-78.4 59.4c-10.5 7.9-24.2-4.6-17.1-15.7l73-115.6a37.4 37.4 0 0 1 53.9-9.9l58.1 43.5a15 15 0 0 0 18 0l78.4-59.4c10.4-8 24.1 4.5 17.1 15.6z"/></svg></a>
            <a href={siteMetadata.youtube} className="inline-block w-6 h-6 mr-4 hover:scale-125 transition-all ease duration-200" aria-label="Check my profile on Github" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" height="28" width="30" viewBox="0 0 576 512" fill="#ff0000"><path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"/></svg></a>
            <a href={siteMetadata.tiktok} className="inline-block w-6 h-6 mr-4 hover:scale-125 transition-all ease duration-200" aria-label="Check my profile on Dribbble" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" height="22" width="20" viewBox="0 0 448 512"><path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"/></svg></a>
        </div>
    </header>
  )
}

export default Header;