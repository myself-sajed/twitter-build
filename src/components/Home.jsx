import React from 'react'
import LeftSection from './Home/LeftSection'
import MiddleSection from './Home/MiddleSection'
import RightSection from './Home/RightSection'

const Home = () => {
    return (
        <div className="flex justify-between align-center px-28 ">

            <LeftSection />
            <MiddleSection />
            <RightSection />

        </div>
    )
}

export default Home