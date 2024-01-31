import Image from 'next/image'
import React from 'react'
import profileCharacter from "../../../public/blogs/ax1240.jpg"


const AboutCoverSection = () => {
  return (
    <section>
       
       <div className='w-full md:h-[75vh] border-b-2 border-solid border-dark dark:border-light flex flex-col md:flex-row items-center justify-center text-dark dark:text-light'>
        <div className='w-full md:w-1/2 h-full border-r-2 border-solid border-dark dark:border-light flex justify-center'> 
            <Image src={profileCharacter} alt="CodeBucks" 
            className='w-4/5  xs:w-3/4 md:w-full h-full object-contain object-center'
            priority
            sizes="(max-width: 768px) 100vw,(max-width: 1180px) 50vw, 50vw"
            />
        </div>

        <div className='w-full md:w-1/2 flex flex-col text-left items-start justify-center px-5 xs:p-10 pb-10 lg:px-16'>

            <h2 className='font-bold capitalize text-2xl xs:text-3xl sxl:text-4xl  text-center lg:text-left mt-3'>
            Ước mơ lớn, là làm việc chăm chỉ, để đem lại sản phẩm tốt nhất cho khách hàng.
            </h2>
            
            <p className='font-medium capitalize mt-4 text-base'>
            Là một thợ may lành nghề với hơn 32 năm kinh nghiệm. Ông bắt đầu làm nghề may từ năm 1990, khi mới 24 tuổi. Ban đầu, ông làm việc tại một xưởng may quần áo ở thành phố Hồ Chí Minh. Sau một thời gian, ông quyết định tự mở cửa hàng may riêng. Chuyên may các loại quần áo nam, bao gồm sơ mi, quần tây, áo vest,... Ông có tay nghề cao, tỉ mỉ trong từng đường kim mũi chỉ. Các sản phẩm của ông luôn được khách hàng đánh giá cao về chất lượng và kiểu dáng.</p>
        </div>
        </div>

        
    </section>
    
  )
}

export default AboutCoverSection