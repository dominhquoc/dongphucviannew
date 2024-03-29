
import { sortBlogs } from '@/src/utils'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Tag from '../Elements/Tag';
import { slug } from 'github-slugger';
import InsightRoll from "@/src/components/About/InsightRoll";
import siteMetadata from "@/src/utils/siteMetaData";


const insights = [
  "Đồng Phục: Giá Rẻ - Chất Lượng - Uy Tín 🏆",
  "Liên Hệ: 0907404677",
  "Miễn Phí May Mẫu",
  "Miễn Phí Tư Vấn",
  "Miễn Phí Sửa Chữa",
  "Miễn Phí Giao Hàng Trong Nội Thành",
  "32+ Năm Kinh Nghiệm May Đo📝",

];


const HomeCoverSection = ({ blogs }) => {

  const sortedBlogs = sortBlogs(blogs);
  const blog = sortedBlogs[0];

  return (
    <div className='w-full inline-block'>
      <InsightRoll insights={insights} />

      <article className='flex flex-col items-start justify-end mx-5 sm:mx-10 relative h-[60vh] sm:h-[85vh] mt-5'>
        <div className='absolute top-0 left-0 bottom-0 right-0 h-full
            bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-3xl z-0
            ' />
        <Image src={blog.image.filePath.replace("../public", "")}
          placeholder='blur'
          blurDataURL={blog.image.blurhashDataUrl}
          alt={blog.title}
          fill
          className='w-full h-full object-center object-cover rounded-3xl -z-10'
          sizes='100vw'
          priority
        />

        <div className='w-full lg:w-3/4 p-6 sm:p-8 md:p-12  lg:p-16 flex flex-col items-start justify-center z-0 text-light'>
          <Tag link={`/danhmuc/${slug(blog.tags[0])}`} name={blog.tags[0]} />
          <Link href={blog.url} className='mt-6'>
            <h1 className='font-bold capitalize text-lg sm:text-xl md:text-3xl lg:text-4xl'>
              <span className='bg-gradient-to-r from-accent to-accent dark:from-accentDark/50 
                dark:to-accentDark/50 bg-[length:0px_6px]
                hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 '>
                {blog.title}
              </span>
            </h1>
          </Link>
          <p className='hidden  sm:inline-block mt-4 md:text-lg lg:text-xl font-in'>
            {blog.description}
          </p>
        </div>

        <div className="fixed bottom-0 left-0 m-4 z-[10000]">
          {/* Nút gọi với hiệu ứng rung */}
          <a href={siteMetadata.tell}>
          <button
          onclick="window.location.href='tel:0905514243';"
         
            className=" text-white font-bold py-2 px-4 rounded-full animate-shake"
 
          >
            {/* Icon điện thoại */}

            <svg xmlns="http://www.w3.org/2000/svg" height="70" width="70" viewBox="0 0 512 512" fill="#FFD700">
              <path d="M444 49.9C431.3 38.2 379.9 .9 265.3 .4c0 0-135.1-8.1-200.9 52.3C27.8 89.3 14.9 143 13.5 209.5c-1.4 66.5-3.1 191.1 117 224.9h.1l-.1 51.6s-.8 20.9 13 25.1c16.6 5.2 26.4-10.7 42.3-27.8 8.7-9.4 20.7-23.2 29.8-33.7 82.2 6.9 145.3-8.9 152.5-11.2 16.6-5.4 110.5-17.4 125.7-142 15.8-128.6-7.6-209.8-49.8-246.5zM457.9 287c-12.9 104-89 110.6-103 115.1-6 1.9-61.5 15.7-131.2 11.2 0 0-52 62.7-68.2 79-5.3 5.3-11.1 4.8-11-5.7 0-6.9 .4-85.7 .4-85.7-.1 0-.1 0 0 0-101.8-28.2-95.8-134.3-94.7-189.8 1.1-55.5 11.6-101 42.6-131.6 55.7-50.5 170.4-43 170.4-43 96.9 .4 143.3 29.6 154.1 39.4 35.7 30.6 53.9 103.8 40.6 211.1zm-139-80.8c.4 8.6-12.5 9.2-12.9 .6-1.1-22-11.4-32.7-32.6-33.9-8.6-.5-7.8-13.4 .7-12.9 27.9 1.5 43.4 17.5 44.8 46.2zm20.3 11.3c1-42.4-25.5-75.6-75.8-79.3-8.5-.6-7.6-13.5 .9-12.9 58 4.2 88.9 44.1 87.8 92.5-.1 8.6-13.1 8.2-12.9-.3zm47 13.4c.1 8.6-12.9 8.7-12.9 .1-.6-81.5-54.9-125.9-120.8-126.4-8.5-.1-8.5-12.9 0-12.9 73.7 .5 133 51.4 133.7 139.2zM374.9 329v.2c-10.8 19-31 40-51.8 33.3l-.2-.3c-21.1-5.9-70.8-31.5-102.2-56.5-16.2-12.8-31-27.9-42.4-42.4-10.3-12.9-20.7-28.2-30.8-46.6-21.3-38.5-26-55.7-26-55.7-6.7-20.8 14.2-41 33.3-51.8h.2c9.2-4.8 18-3.2 23.9 3.9 0 0 12.4 14.8 17.7 22.1 5 6.8 11.7 17.7 15.2 23.8 6.1 10.9 2.3 22-3.7 26.6l-12 9.6c-6.1 4.9-5.3 14-5.3 14s17.8 67.3 84.3 84.3c0 0 9.1 .8 14-5.3l9.6-12c4.6-6 15.7-9.8 26.6-3.7 14.7 8.3 33.4 21.2 45.8 32.9 7 5.7 8.6 14.4 3.8 23.6z" />
            </svg>


          </button>
          </a>
        </div>

      </article>

 <section className="hero-banner bg-gray-900 text-dark pt-8 px-8 sm:px-6 lg:mt-10">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2">
            <div className="hero__content">
              <h5 className="mb-3 text-lg lg:text-xl lg:mb-5 lg:mt-2 font-semibold">Sản phẩm được may kỹ càng với</h5>
              <h1 className="mb-4 hero__title text-lg lg:text-4xl">
                <span className="text-blue-500 font-black">sự tỉ mỉ, cẩn thận</span> trong từng đường kim mũi chỉ{' '}
                <br /> đem lại
                <span className="text-blue-500 font-black"> độ bền cao, ít bị hư hỏng, giúp tiết kiệm chi phí</span>
              </h1>

              <p className="mb-3 text-lg lg:text-xl lg:mb-5 lg:mt-2 font-semibold">cho khách hàng.</p>


            </div>
          </div>

          <div className="lg:w-1/2 mt-6 lg:mt-0">
            <div className="hero__img relative">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/6Db_qjSZu0E?autoplay=1&loop=1"
                title="Đồng phục vi an"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="lg:w-full rounded-3xl"
                
              ></iframe>

             
              <hr className="border-dark my-2" />
              <h1 className="text-dark px-4 text-sm lg:text-2xl lg:font-extrabold">
                Đường kim mũi chỉ 0.01mm ~ 0.02mm
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default HomeCoverSection