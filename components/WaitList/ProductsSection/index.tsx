"use client"
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { Roboto } from 'next/font/google'
import Image from 'next/image'
const roboto = Roboto({
    weight: ["400", "500", "700"],
    subsets: ['latin']
})
const ProductsSection = () => {
    const [sliderRef, instanceRef] = useKeenSlider({
        slides: {
            perView: 3,
            spacing: 15,
        },
        breakpoints: {
            "(max-width: 350px)": {
                slides: {
                    perView: 1,
                }
            },
            "(min-width: 351px)": {
                slides: {
                    perView: 2,
                    spacing: 15,
                }
            },
            "(min-width: 600px)": {
                slides: {
                    perView: 3,
                    spacing: 15,
                }
            },
        }
    })
    return (
        <section className='max-w-[70rem] mx-auto py-10'>
            <div>
            </div>
            <div ref={sliderRef} className="keen-slider mt-10">
                <div className={`keen-slider__slide ${roboto.className} `}>
                    <div className='flex flex-col'>
                        <Image src="/waitlistphotos/home-men-one.webp" width={255} height={255} className='rounded-full relative mx-auto' alt='products 1' />
                        <div className='bg-gray-50 p-6 pt-40 flex flex-col items-center mt-[-138px]'>
                            <h3 className='text-[22px] font-bold'>Mens One</h3>
                            <p className='text-base md:text-[22px] font-normal whitespace-nowrap'>Top quality without print</p>
                        </div>
                    </div>
                </div>
                <div className={`keen-slider__slide ${roboto.className} `}>
                    <div className='flex flex-col'>
                        <Image src="/waitlistphotos/home-men-one.webp" width={255} height={255} className='rounded-full relative mx-auto' alt='products 1' />
                        <div className='bg-gray-50 p-6 pt-40 flex flex-col items-center mt-[-138px]'>
                            <h3 className='text-[22px] font-bold'>Mens One</h3>
                            <p className='text-base md:text-[22px] font-normal whitespace-nowrap'>Top quality without print</p>
                        </div>
                    </div>
                </div>
                <div className={`keen-slider__slide ${roboto.className} `}>
                    <div className='flex flex-col'>
                        <Image src="/waitlistphotos/home-men-one.webp" width={255} height={255} className='rounded-full relative mx-auto' alt='products 1' />
                        <div className='bg-gray-50 p-6 pt-40 flex flex-col items-center mt-[-138px]'>
                            <h3 className='text-[22px] font-bold'>Mens One</h3>
                            <p className='text-base md:text-[22px] font-normal whitespace-nowrap'>Top quality without print</p>
                        </div>
                    </div>
                </div>
                <div className={`keen-slider__slide ${roboto.className} `}>
                    <div className='flex flex-col'>
                        <Image src="/waitlistphotos/home-men-one.webp" width={255} height={255} className='rounded-full relative mx-auto' alt='products 1' />
                        <div className='bg-gray-50 p-6 pt-40 flex flex-col items-center mt-[-138px]'>
                            <h3 className='text-[22px] font-bold'>Mens One</h3>
                            <p className='text-base md:text-[22px] font-normal whitespace-nowrap'>Top quality without print</p>
                        </div>
                    </div>
                </div>
                <div className={`keen-slider__slide ${roboto.className} `}>
                    <div className='flex flex-col'>
                        <Image src="/waitlistphotos/home-men-one.webp" width={255} height={255} className='rounded-full relative mx-auto' alt='products 1' />
                        <div className='bg-gray-50 p-6 pt-40 flex flex-col items-center mt-[-138px]'>
                            <h3 className='text-[22px] font-bold'>Mens One</h3>
                            <p className='text-base md:text-[22px] font-normal whitespace-nowrap'>Top quality without print</p>
                        </div>
                    </div>
                </div>
                <div className={`keen-slider__slide ${roboto.className} `}>
                    <div className='flex flex-col'>
                        <Image src="/waitlistphotos/home-men-one.webp" width={255} height={255} className='rounded-full relative mx-auto' alt='products 1' />
                        <div className='bg-gray-50 p-6 pt-40 flex flex-col items-center mt-[-138px]'>
                            <h3 className='text-[22px] font-bold'>Mens One</h3>
                            <p className='text-base md:text-[22px] font-normal whitespace-nowrap'>Top quality without print</p>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    )
}

export { ProductsSection }