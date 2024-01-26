import AboutCoverSection from "@/src/components/About/AboutCoverSection";
import Skills from "@/src/components/About/Skills";
import Link from "next/link";
import Axa from "../../../../public/ax1209.png";
import Axb from "../../../../public/ax1210.png";
import Axc from "../../../../public/ax1225.png";
import Axd from "../../../../public/ax1226.png";
import Image from 'next/image';

export const metadata = {
  title: "Giới Thiệu",
  description: `Here are some details about my self.`,
};

export default function About() {
  return (
    <>
      <p className="mt-3"></p>
      <AboutCoverSection />

      <div className='text-center mt-3'>
        <h2 className='text-headingColor font-[800] text-[2.4rem]'>Các bước may đo đồng phục</h2>
        <p className='lg:max-w-[600px] lg:mx-auto text-headingColor font-[700] text-[19px] leading-7'>
          "Vải vóc là tấm gương phản chiếu tâm hồn người mặc."
        </p>
      </div>

      <section className="mt-10">
       
       <div className='w-full md:h-[75vh] border-b-2 border-solid border-dark dark:border-light flex flex-col md:flex-row items-center justify-center text-dark dark:text-light'>
        <div className='w-full md:w-1/2 h-full border-r-2 border-solid border-dark dark:border-light flex justify-center'> 
            <Image src={Axa} alt="CodeBucks" 
            className='w-4/5  xs:w-3/4 md:w-full h-full object-contain object-center'
            priority
            sizes="(max-width: 768px) 100vw,(max-width: 1180px) 50vw, 50vw"
            />
        </div>

        <div className='w-full md:w-1/2 flex flex-col text-left items-start justify-center px-5 xs:p-10 pb-10 lg:px-16'>
        <h3 className='font-[700] mb-3  text-xl mt-3'>1. Lựa chọn chất liệu vải</h3>
                                            
                                            <p className='text-[18px] text-smallTextColor leading-7'>Nếu trang phục được sử dụng trong môi trường công sở, cần lựa chọn chất liệu vải cao cấp, bền đẹp, thấm hút mồ hôi tốt. Nếu trang phục được sử dụng trong các dịp đặc biệt, cần lựa chọn chất liệu vải cao cấp, sang trọng.</p>
        </div>
        </div>

        
    </section>

    <section className="mt-10">
       
       <div className='w-full md:h-[75vh] border-b-2 border-solid border-dark dark:border-light flex flex-col md:flex-row items-center justify-center text-dark dark:text-light'>
        <div className='w-full md:w-1/2 h-full border-r-2 border-solid border-dark dark:border-light flex justify-center'> 
            <Image src={Axb} alt="CodeBucks" 
            className='w-4/5  xs:w-3/4 md:w-full h-full object-contain object-center'
            priority
            sizes="(max-width: 768px) 100vw,(max-width: 1180px) 50vw, 50vw"
            />
        </div>

        <div className='w-full md:w-1/2 flex flex-col text-left items-start justify-center px-5 xs:p-10 pb-10 lg:px-16'>
        <h3 className='text-primaryColor font-[700] mb-3  text-xl mt-4'>2. Lấy số đo</h3>
                                            <p className='text-[18px] text-smallTextColor leading-7'>Lấy số đo là bước quan trọng nhất trong quá trình may đo. Số đo chính xác sẽ giúp trang phục được may vừa vặn, tôn dáng người mặc.</p>
        </div>
        </div>

        
    </section>

    <section className="mt-10">
       
       <div className='w-full md:h-[75vh] border-b-2 border-solid border-dark dark:border-light flex flex-col md:flex-row items-center justify-center text-dark dark:text-light'>
        <div className='w-full md:w-1/2 h-full border-r-2 border-solid border-dark dark:border-light flex justify-center'> 
            <Image src={Axc} alt="CodeBucks" 
            className='w-4/5  xs:w-3/4 md:w-full h-full object-contain object-center'
            priority
            sizes="(max-width: 768px) 100vw,(max-width: 1180px) 50vw, 50vw"
            />
        </div>

        <div className='w-full md:w-1/2 flex flex-col text-left items-start justify-center px-5 xs:p-10 pb-10 lg:px-16'>
        <h3 className='text-primaryColor font-[700] mb-3 text-xl mt-4'>3. Thiết kế mẫu & May thử</h3>
                                            <p className='text-[18px] text-smallTextColor leading-7'>Sau khi lấy số đo, người thợ may sẽ tiến hành thiết kế mẫu trang phục. Sau khi thiết kế mẫu, trang phục sẽ được may thử trên người để kiểm tra độ vừa vặn, hoàn thiện. Nếu có sai sót, người thợ may sẽ tiến hành chỉnh sửa cho đến khi trang phục vừa vặn, hoàn hảo.</p>
        </div>
        </div>

        
    </section>

    
    <section className="mt-10">
       
       <div className='w-full md:h-[75vh] border-b-2 border-solid border-dark dark:border-light flex flex-col md:flex-row items-center justify-center text-dark dark:text-light'>
        <div className='w-full md:w-1/2 h-full border-r-2 border-solid border-dark dark:border-light flex justify-center'> 
            <Image src={Axd} alt="CodeBucks" 
            className='w-4/5  xs:w-3/4 md:w-full h-full object-contain object-center'
            priority
            sizes="(max-width: 768px) 100vw,(max-width: 1180px) 50vw, 50vw"
            />
        </div>

        <div className='w-full md:w-1/2 flex flex-col text-left items-start justify-center px-5 xs:p-10 pb-10 lg:px-16'>
        <h3 className='text-primaryColor font-[700] mb-3 text-xl mt-4'>4. May hoàn thiện & Bàn giao</h3>
                                            <p className='text-[18px] text-smallTextColor leading-7'>Sau khi may thử và chỉnh sửa, trang phục sẽ được may hoàn thiện. Sau khi may hoàn thiện, trang phục sẽ được bàn giao cho khách hàng. Người thợ may sẽ hướng dẫn khách hàng cách bảo quản và sử dụng trang phục.</p>
        </div>
        </div>

        
    </section>


      <Skills />



      <h2 className="mt-8 font-semibold text-lg md:text-2xl self-start mx-5 xs:mx-10 sm:mx-12 md:mx-16 lg:mx-20 text-dark dark:text-light dark:font-normal">
        Bạn đã có dự định may đồng phục cho công ty. Hãy gọi cho Vi An 📞 <Link href="tel:0907404677" className="!underline underline-offset-2"   >0907404677</Link>. Và chúng ta bắt đầu dự án ngay thôi.
      </h2>
    </>
  );
}
