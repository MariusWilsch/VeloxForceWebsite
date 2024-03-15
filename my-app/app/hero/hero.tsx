import './hero.css'
import { TypewriterEffectSmoothDemo } from './typewriter-effect'
import Image from 'next/image'
import HeroImage from '@/public/hero1.png'

export const Hero = () => (
  <section id="hero-408">
    <div className="cs-container ">
      <div className="cs-content">
        <div className=''>
          <TypewriterEffectSmoothDemo />
        </div>
        <p className="cs-text">
          Build a system in which you administration will be processed from start to finish so your company can scale with ease.
        </p>
        <p className="cs-text">
          Automatically filter your leads to ensure you are only spending time on the most qualified leads.
        </p>
        <p className="cs-text">
          Improve customer service by an AI trained on all your previous customer requests, to provide instant and accurate responses.
        </p>
        <button className="relative inline-flex h-8 sm:h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            Book a call
          </span>
        </button>
      </div>
      <div className="cs-stat-group">
        <picture className="cs-background">
          <Image
            src={HeroImage}
            alt="hero-picture"
          />
        </picture>
      </div>
    </div>

  </section >
)




export default Hero