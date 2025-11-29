import Screen from "@/layout/Screen"
import AboutMe from "../PageComponent/AboutMe"
import Footer from "../PageComponent/Footer"
import InfoCard from "../PageComponent/InfoCard"
import Skills from "../PageComponent/Skills"
import ReachOut from "../PageComponent/ReachOut"
import Nav from "../PageComponent/Nav"
import AnimatedWrapper from "@/utils/AnimatedWrapper"
import LazyClientSections from "@/components/homeScreen/LazyClientSections"

const IndexPage = () => {
  return (
    <Screen>
      <AnimatedWrapper>
        <div className="flex flex-col gap-5 pt-8 md:pt-12">
          <InfoCard />
          <AboutMe />
          <ReachOut />
          <Skills />
          <LazyClientSections />
        </div>
        <Footer />
        <Nav />
      </AnimatedWrapper>
    </Screen>
  )
}

export default IndexPage
