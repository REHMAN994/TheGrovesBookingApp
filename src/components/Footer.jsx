import React from "react";
import grovesLogo from "../assets/logo.png";
import tiktokIcon from "../assets/tiktok.png";
import instagramIcon from "../assets/inst.png";
import snapchatIcon from "../assets/schat.png";
import appstore from "../assets/AppStore.png";
import playstore from "../assets/PlayStore.png";
import { Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer
      className="py-16 px-6"
      style={{
        background:
          "linear-gradient(97deg, hsl(78, 80%, 12%) 0%, hsl(77, 100%, 4%) 100%)",
      }}
    >
      <div className="container mx-auto max-w-6xl">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 gap-8">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-foreground max-w-xl">
            Join us for an unforgettable experience
          </h2>
          <div className="space-y-3">
            <p className="text-muted-foreground text-sm uppercase tracking-wider mb-4">
              Download the Groves App
            </p>
            <div className="flex gap-3">
             
              <img src={appstore} alt="App Store" className="h-10 w-auto" />
              <img src={playstore} alt="play Store" className="h-10 w-auto" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 pb-16 border-b border-foreground/20">
          <div>
            <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-4">
              Location
            </h3>
            <div className="text-foreground space-y-1">
              <p>Al-Hizam Park</p>
              <p>Al-Semairi, Yanbu Al Bahr 46455</p>
              <p>Riyadh Saudi Arabia</p>
            </div>
          </div>
          <div>
            <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-4">
              Working Hours
            </h3>
            <div className="text-foreground space-y-3">
              <div>
                <p>Sun until Thurs: 4:00PM</p>
                <p>Fri & Sat: 2:30PM</p>
              </div>
              <div className="pt-2">
                <p className="text-muted-foreground text-sm mb-1">
                  Gates Close at:
                </p>
                <p>Sat until Wed: 12:00AM</p>
                <p>Thu & Fri: 12:30AM</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-4">
              Guest Service Call
            </h3>
            <div className="text-foreground space-y-3">
              <a
                href="mailto:cc@thegroves-sa.com"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                cc@thegroves-sa.com
              </a>
              <a
                href="tel:920001672"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                920001672
              </a>
              <a
                href="tel:+966556631309"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                +966556631309
              </a>
            </div>
          </div>
        </div>


        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">

          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex items-center">
                <img src={grovesLogo} alt="The Groves" className="h-10 w-auto" />
            </div>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">
                Terms & Conditions
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <p>©2023 The Groves for Entertainment</p>
            </div>
          </div>

          <div className="flex items-center gap-8">
            <div className="flex items-end gap-6 ml-4">
              <a href="#" aria-label="TikTok">
                <img src={tiktokIcon} alt="TikTok" className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Instagram">
                <img src={instagramIcon} alt="Instagram" className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Snapchat">
                <img src={snapchatIcon} alt="Snapchat" className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
