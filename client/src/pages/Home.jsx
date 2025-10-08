
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import TourPackages from '../components/Home/TourPackages'
import WatersportsSection from '../components/WatersportsSection'
import BucketList from '../components/BucketList'
import GuideAndaman from '../components/GuideAndaman'
import WhyChooseUs from '../components/WhyChooseUs'
import Testimonials from '../components/Testimonials'
import Features from '../components/Features'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
        <Navbar/>
        <Hero/>
        <TourPackages/>
        <WatersportsSection/>
        <BucketList/>
        <GuideAndaman/>
        <WhyChooseUs/>
        <Testimonials />
        <Features/>
        <Footer/>
    </>
  )
}

export default Home