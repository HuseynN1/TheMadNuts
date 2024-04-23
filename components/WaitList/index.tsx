import { HeroSectionWaitList, ProductsSection, ExclusiveDesignSection, FormSectionWaitList } from '@/components/WaitList'

const WaitList = () => {
    return (
        <>
            <HeroSectionWaitList />
            <ProductsSection />
            <ExclusiveDesignSection />
            <FormSectionWaitList />
        </>
    )
}

export default WaitList;

export * from "./HeroSection"
export * from "./ProductsSection"
export * from "./ExclusiveDesignSection"
export * from "./FormSectionWaitList"
