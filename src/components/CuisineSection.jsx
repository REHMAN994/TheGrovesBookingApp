import React from 'react'
import Pic1 from '../assets/pic1.png';
import Pic2 from '../assets/pic2.png';
import Pic3 from '../assets/pic3.png';
import Pic4 from '../assets/pic4.png';
import { ArrowRight } from "lucide-react";

const restaurants = [
  {
    name: "Vida Vera",
    image: Pic1,
    price: "150 SR PER GUEST",
  },
  {
    name: "Zama Zulu",
    image: Pic2,
    price: "150 SR PER GUEST",
  },
  {
    name: "Khawaja Yanni",
    image: Pic3,
    price: "150 SR PER GUEST",
  },
  {
    name: "Yamagata",
    image: Pic4,
    price: "150 SR PER GUEST",
  },
];


const CuisineSection = () => {
  return (
    <section 
      className="py-20 px-6"
      style={{
        background: 'linear-gradient(97deg, hsl(78, 80%, 12%) 0%, hsl(77, 100%, 4%) 100%)',
      }}
    >
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-foreground mb-6">
            Experience the Finest Cuisine
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
          {restaurants.map((restaurant) => (
            <div
              key={restaurant.name}
              className="rounded-2xl overflow-hidden group cursor-pointer hover:scale-[1.02] transition-transform duration-300"
              style={{
                background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(40,54,6,0.8) 100%)',
              }}
            >
              <img
                src={restaurant.image}
                alt={restaurant.name}
                className="w-full h-[280px] object-cover rounded-t-2xl"
              />
              
              <div 
                className="p-6 flex items-center justify-between"
                style={{
                  background: 'linear-gradient(97deg, hsl(78, 60%, 15%) 0%, hsl(77, 80%, 8%) 100%)',
                }}
              >
                <div>
                  <h3 className="text-2xl md:text-3xl font-serif text-foreground mb-3">
                    {restaurant.name}
                  </h3>
                  <div 
                    className="inline-block px-4 py-1.5 rounded-full text-xs uppercase tracking-wider text-white font-medium"
                    style={{ backgroundColor: '#AD8749' }}
                  >
                    {restaurant.price}
                  </div>
                </div>
                <div className="w-12 h-12 rounded-full border-2 border-foreground/30 hover:border-primary hover:bg-primary/10 flex items-center justify-center transition-all group-hover:translate-x-2">
                  <ArrowRight className="w-5 h-5 text-foreground" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CuisineSection