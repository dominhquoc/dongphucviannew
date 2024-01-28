"use client";
import React from "react";
import Image from 'next/image';
import axp from "../../../public/blogs/ax1223.jpg";


export default function ContactForm() {


  return (
    <>

      <div class="max-w-md mx-auto bg-white rounded overflow-hidden shadow-lg mt-5">
      <h2 className="text-center font-bold capitalize  text-2xl xs:text-3xl sm:text-4xl">Kết Nối Với Vi An!</h2>
      <div class="flex items-center justify-center">
     
        <Image src={axp}
          className="aspect-square w-2/4 h-2/4 object-cover object-center mt-5"
          sizes="(max-width: 640px) 100vw,(max-width: 1024px) 50vw, 33vw"
        />    </div>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2"> Quét mã QR Zalo Để được tư vấn và hỗ trợ di chuyển.</div>
          <p class="text-gray-700 text-base">
          Hoặc liên hệ số hotline.
          </p>
        </div>

      </div>




    </>
  );
}
