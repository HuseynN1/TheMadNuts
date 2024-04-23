import { inter, roboto } from "@/components/fonts"
import Image from "next/image"
import Link from "next/link"

const ExclusiveDesignSection = () => {
    return (
        <section className={`bg-[#eee] ${inter.className} px-5`}>
            <div className="max-w-[70rem] mx-auto flex flex-col md:flex-row justify-between py-10">
                <div className="flex flex-col md:w-1/3 items-center pt-5">
                    <h2 className={` font-black text-xl md:text-[32px] leading-[1.25] text-center`}>Brand New Pair with Exclusive Designs</h2>
                    <p className={`font-extralight text-xl md:text-[32px] leading-[1.06] md:my-[70px] my-5 text-center px-12 md:px-0`}>Every month a brand new pair of boxer shorts in your mailbox for only 29 USD (incl. shipping costs).</p>
                    <div className="pb-[50px] mt-5 md:mt-0">
                        <Link href={'/waitlist'} className={`${inter.className} bg-joinYellow py-5 px-10 rounded-[40px] text-xl md:text-[30px]`}>Join the waitlist</Link>
                    </div>
                </div>
                <div className="md:w-2/3 flex justify-end">
                    <Image src="/waitlistphotos/clue-men-originals.png" alt="clue-men-originals" width={500} height={500} className="object-cover" />
                </div>
            </div>
        </section>
    )
}

export { ExclusiveDesignSection }