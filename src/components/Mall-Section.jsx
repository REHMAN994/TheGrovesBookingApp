import React from 'react'
import { ArrowRight, Play } from "lucide-react";
import grovesEntrance from '../assets/mall.png';
const MallSection = () => {
  return (
    <section 
      className="py-14 px-2 min-h-screen flex flex-col items-center justify-center"
      style={{
        background: 'linear-gradient(97deg, hsl(78, 80%, 12%) 0%, hsl(77, 100%, 4%) 100%)',
      }}
    >
      <div className="w-full max-w-3xl mx-auto flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-serif font-light text-foreground text-center mb-4">
          Mall Of: Endless Possibilities
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10 leading-relaxed">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>

        <div className="relative mb-10 rounded-xl overflow-hidden group cursor-pointer w-full h-64 md:h-96">
          <img 
            src={grovesEntrance} 
            alt="The Groves entrance with golden chandelier"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-all h-full">
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <Play className="w-6 h-6 text-black ml-1" fill="currentColor" />
            </div>
          </div>
        </div>

        <div className="w-full  bg-[rgba(60,70,30,0.7)] rounded-xl p-6 mt-2 flex flex-row items-center justify-between gap-2">
          <div>
            <span className="text-xs text-muted-foreground uppercase tracking-wider mb-1 text-left block">25 SR/GUEST</span>
            <h3 className="text-2xl md:text-3xl font-serif text-foreground mb-2 text-left">Get your General Access Ticket</h3>
            <p className="text-muted-foreground text-sm max-w-lg text-left mb-0">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text
            </p>
          </div>
          <div className="flex items-center justify-center">
            <div className="w-10 h-10 rounded-full bg-[rgba(60,70,30,0.9)] flex items-center justify-center">
              <ArrowRight className="w-6 h-6 text-foreground" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MallSection