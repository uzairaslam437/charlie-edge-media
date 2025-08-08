import { Navbar } from "@/components/Navbar"
import HeroSection from "@/components/HeroSection"
import { MarketSector } from "@/components/MarketSector"
import { Services } from "@/components/Services"

export const Homepage = () => {
    return(
        <>
            <Navbar />
            <HeroSection />
            <MarketSector />
            <Services />
        </>
    )
}