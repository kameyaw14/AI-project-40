import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import InfiniteBanner from '../components/InfiniteBanner'
import AIPlatformSection from '../components/AIPlatformSection'
import ReviewsSlider from '../components/ReviewsSlider'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <div>
            <Navbar/>
        </div>

        <div>
            <Hero/>
        </div>

        <div>
            <InfiniteBanner/>
        </div>
        <div>
            <AIPlatformSection/>
        </div>

        <div>
            <ReviewsSlider/>
        </div>
        <div>
            <Footer/>
        </div>
    </div>
  )
}

export default Home