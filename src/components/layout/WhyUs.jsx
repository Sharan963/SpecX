import React from 'react'
import performance from '@/assets/Images/performance.png'
import budget from '@/assets/Images/budget.png'
import trust from '@/assets/Images/Trust.png'
import support from '@/assets/Images/support.png'

const WhyUs = () => {
  return (
    <div className="w-full min-h-125 bg-transparent flex flex-col items-center justify-center gap-12 px-6">
  
  {/* Heading Block */}
  <div className="flex flex-col items-center justify-center gap-2 text-center">
    <h1 className="text-7xl font-heading-alt text-[#F8F9FB]">
      Why Choose SpecX
    </h1>
    <p className="text-sm text-[#F8F9FB]/80 font-heading">
      Everything you need to build the perfect gaming PC
    </p>
  </div>

  {/* Features Container */}
  <div className="w-full max-w-7xl bg-[#1C1C24] rounded-2xl p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-32">

    <div className="text-center flex flex-col items-center gap-2">
        <img src={performance} className='w-50' alt="" />
      <h3 className="text-3xl font-heading-alt text-[#F8F9FB]">
        High Performance
      </h3>
      <p className="text-[13px] font-heading text-[#F8F9FB]/70 mt-2">
        Optimized builds for smooth gaming and fast rendering.
      </p>
    </div>

    <div className="text-center flex flex-col items-center gap-2">
        <img src={budget} className='w-50' alt="" />
      <h3 className="text-3xl font-heading-alt text-[#F8F9FB]">
        Budget Friendly
      </h3>
      <p className="text-[13px] font-heading text-[#F8F9FB]/70 mt-2">
        Get the best value without paying premium prices.
      </p>
    </div>

    <div className="text-center flex flex-col items-center gap-2">
        <img src={trust} className='w-50' alt="" />
      <h3 className="text-3xl font-heading-alt text-[#F8F9FB]">
        Trusted Parts
      </h3>
      <p className="text-[13px] font-heading text-[#F8F9FB]/70 mt-2">
        Only branded, tested, and reliable components.
      </p>
    </div>

    <div className="text-center flex flex-col items-center gap-2">
        <img src={support} className='w-50' alt="" />
      <h3 className="text-3xl font-heading-alt text-[#F8F9FB]">
        Expert Support
      </h3>
      <p className="text-[13px] font-heading text-[#F8F9FB]/70 mt-2">
        24/7 assistance from real PC building experts.
      </p>
    </div>

  </div>
</div>

  )
}

export default WhyUs