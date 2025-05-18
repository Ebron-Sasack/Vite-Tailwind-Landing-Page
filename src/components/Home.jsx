import { CtaSection } from './CtaSection'
import { FeaturesSection } from './FeaturesSection'
import { FooterSection } from './FooterSection'
import { HeroSection } from './HeroSection'
import { Navbar } from './Navbar'
import { TestSection } from './TestSection'

function Home() {
  return (
    <>
        <Navbar />
        <main>
          <HeroSection />
          <FeaturesSection />
          <TestSection />
          <CtaSection />
        </main>
        <FooterSection />
    </>
  )
}

export default Home