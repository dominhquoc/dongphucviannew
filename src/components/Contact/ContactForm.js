"use client";
import React from "react";
import Image from 'next/image';
import axp from "../../../public/blogs/ax1223.jpg";


export default function ContactForm() {


  return (
    <>
      <span className="text-lg font-semibold mt-3">
        Quét mã QR Zalo Để được tư vấn và hỗ trợ di chuyển.
      </span>
      
        <Image src={axp}
          className="aspect-square w-2/4 h-2/4 object-cover object-center mt-5"
          sizes="(max-width: 640px) 100vw,(max-width: 1024px) 50vw, 33vw"
        />
            <span className="text-lg font-semibold mt-3">
        Hoặc liên hệ số hotline.
      </span>
    </>
  );
}
